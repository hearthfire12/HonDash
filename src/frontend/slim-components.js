// Bars
var bar1 = new Bar({ id: "bar1", isVertical: true, textSize: 60 });

// Text and numbers
var time = new Text({
  id: "time",
  value: "00:00:00",
  size: 3,
  style: "italic",
  textAlign: "center"
});
var odo = new Text({
  id: "odo",
  value: "0",
  size: 3,
  style: "italic",
  textAlign: "center"
});
var version = new Text({
  id: "version",
  value: "",
  size: 1,
  style: "italic",
  prefix: "HonDash v ",
  textAlign: "right"
});
var ecu_name = new Text({
  id: "ecu_name",
  value: "",
  size: 1,
  style: "italic",
  textAlign: "right",
  suffix: " v"
});
var firmware_version = new Text({
  id: "firmware_version",
  value: "",
  size: 1,
  style: "italic"
});

// Icons
var icon1 = new Icon({ id: "icon1" });
var icon2 = new Icon({ id: "icon2" });
var icon3 = new Vtec({ id: "icon3" });

// Gauges
var gauge1 = new Gauge({
  id: "gauge1",
  valueMinFontSize: document.getElementById("gauge1").offsetHeight / 3.6
});
var gauge2 = new Gauge({
  id: "gauge2",
  valueMinFontSize: document.getElementById("gauge2").offsetHeight / 3.6
});
var gauge3 = new Gauge({
  id: "gauge3",
  valueMinFontSize: document.getElementById("gauge3").offsetHeight / 3.6
});
var gauge4 = new Gauge({
  id: "gauge4",
  valueMinFontSize: document.getElementById("gauge4").offsetHeight / 3.6
});
var gauge5 = new Gauge({
  id: "gauge5",
  valueMinFontSize: document.getElementById("gauge5").offsetHeight / 3.6
});
var gauge6 = new Gauge({
  id: "gauge6",
  valueMinFontSize: document.getElementById("gauge6").offsetHeight / 3.6
});

// Background
var style = new Style({ id: "style" });
