class Vtec {
  constructor(args) {
    this.element = document.getElementById(args.id);
    this.pathOff = "vtec_off.png";
    this.pathOn = "vtec_on.png";
    this.pathMalfunction = "vtec_malfunction.png";
    var img = document.createElement("img");
    img.src = "icons/" + this.pathOff;
    img.style.width = "100%";
    this.element.appendChild(img);
  }

  refresh(value) {
    var img = document.createElement("img");
    img.style.width = "100%";
    if (value == "on") {
      img.src = "icons/" + this.pathOn;
    } else if (value == "malfunction") {
      img.src = "icons/" + this.pathMalfunction;
    } else img.src = "icons/" + this.pathOff;
    this.element.innerHTML = "";
    this.element.appendChild(img);
  }
}
