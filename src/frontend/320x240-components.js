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

// Icons
var icon1 = new Icon({ id: "icon1", width: "50%", pathOff: "cl_off.png" });
var icon2 = new Icon({ id: "icon2", width: "75%", pathOff: "sec_off.png" });
var icon3 = new Vtec({ id: "icon3", width: "100%" });

// Gauges
var gauge1 = new Gauge({
  id: "gauge1",
  valueMinFontSize: 39.6,
  labelMinFontSize: 11,
});
var gauge2 = new Gauge({
  id: "gauge2",
  valueMinFontSize: 39.6,
  labelMinFontSize: 11,
});
var gauge3 = new Gauge({
  id: "gauge3",
  valueMinFontSize: 39.6,
  labelMinFontSize: 11,
});
var gauge4 = new Gauge({
  id: "gauge4",
  valueMinFontSize: 39.6,
  labelMinFontSize: 11,
});
var gauge5 = new Gauge({
  id: "gauge5",
  valueMinFontSize: 39.6,
  labelMinFontSize: 11,
});
var gauge6 = new Gauge({
  id: "gauge6",
  valueMinFontSize: 39.6,
  labelMinFontSize: 11,
});

// Background
var style = new Style({ id: "style" });
