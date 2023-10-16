class Gauge {
  constructor(args) {
    var gaugeDefaults = {
      min: 0,
      max: 100,
      value: 0,
      decimals: 0,
      gaugeWidthScale: 1,
      valueMinFontSize: 60,
      labelMinFontSize: 20,
      startAnimationTime: 0,
      refreshAnimationTime: 0,
      gaugeColor: "#edebeb",
      labelFontColor: "black",
      label: "GAUGE"
    };

    this.gauge = new JustGage(Object.assign({}, gaugeDefaults, args));

    this.previous_values = [];
    this.max_history = 0;
  }

  refresh(value) {
    console.log("test")
    if (this.max_history === 0){
        this.gauge.refresh(value);
        return;
    }

    // remove first element
    if (this.previous_values.length === this.max_history - 1){
        this.previous_values.shift();
    }

    // populating historic values
    if (this.previous_values.length < this.max_history){
        this.previous_values.push(value);
    }

    let moving_average = this.previous_values.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0) / this.previous_values.length;
    this.gauge.refresh(moving_average);
  }

  setWarning(value) {
    this.warning_threshold = value;
    this.warning_enabled = true;
    this.warning_paused = false;
  }

  isWarning(value) {
    if (!this.warning_enabled) return false;

    if (value < this.warning_threshold){
      this.warning_paused = false;
    }

    if (!this.warning_paused && value > this.warning_threshold) {
      this.warning_paused = true;
      return true;
    }
    
    return false;
  }

  setSectors(sectors) {
    this.gauge.config.customSectors = { length: true, ranges: sectors };
  }

  setLabel(label) {
    this.gauge.config.label = label;
    this.gauge.txtLabel.attr({ text: this.gauge.config.label });
  }

  setMax(max) {
    this.gauge.refresh(null, max);
  }

  setDecimals(decimals) {
    this.gauge.config.decimals = decimals;
  }

  setTextColor(newColor) {
    this.gauge.config.labelFontColor = newColor;
    this.gauge.txtValue.attr({ fill: this.gauge.config.labelFontColor });

    this.gauge.config.valueFontColor = newColor;
    this.gauge.txtLabel.attr({ fill: this.gauge.config.valueFontColor });

    this.gauge.txtMin.attr({ fill: this.gauge.config.labelFontColor });

    this.gauge.txtMax.attr({ fill: this.gauge.config.labelFontColor });
  }

  setBackgroundColor(color) {
    this.gauge.config.gaugeColor = color;
    this.gauge.gauge.attr({ fill: this.gauge.config.gaugeColor });
  }

  setSmoothing(factor){
    this.max_history = factor;
  }
}
