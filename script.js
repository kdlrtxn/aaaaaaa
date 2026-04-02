function sayYes() {
  document.getElementById("message").classList.remove("hidden");
}

document.getElementById("no").onmouseover = function() {
  this.style.position = "absolute";
  this.style.left = Math.random() * window.innerWidth + "px";
  this.style.top = Math.random() * window.innerHeight + "px";
};