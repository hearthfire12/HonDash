//compnents for AllVals page
// Bars
var bar1 = new Bar({ id: "bar1", isVertical: true, textSize: 60 });
var bar2 = new Bar({ id: "bar2", isVertical: true, textSize: 30 });

// Text and numbers
var speed = new Text({
  id: "speed",
  value: "0",
  size: 15,
  style: "italic",
  textAlign: "center"
});
var inj = new Text({  //Aj Add-in
  id: "inj",
  value: "inj",
  size: 3,
  style: "italic",
  // suffix: "ms",
  textAlign: "center"
});
var injduty = new Text({  //Aj Add-in
  id: "injduty",
  value: "injduty",
  size: 3,
  style: "italic",
  // suffix: "%",
  textAlign: "center"
});
var igadv = new Text({  //Aj Add-in
  id: "igadv",
  value: "-",
  size: 3,
  style: "italic",
  suffix: "*",
  textAlign: "center"
});
var gear = new Text({ id: "gear", value: "N", textAlign: "center", size: 15 });
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
var icon3 = new Icon({ id: "icon3" });

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
var gauge7 = new Gauge({
  id: "gauge7",
  valueMinFontSize: document.getElementById("gauge7").offsetHeight / 3.6
});
var gauge8 = new Gauge({
  id: "gauge8",
  valueMinFontSize: document.getElementById("gauge8").offsetHeight / 3.6
});
var gauge9 = new Gauge({
  id: "gauge9",
  valueMinFontSize: document.getElementById("gauge9").offsetHeight / 3.6
});
var gauge10 = new Gauge({
  id: "gauge10",
  valueMinFontSize: document.getElementById("gauge10").offsetHeight / 3.6
});

// Background
var style = new Style({ id: "style" });
