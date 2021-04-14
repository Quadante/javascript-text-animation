var w, m, c, C, W, H, r, d, e, i, j, k, s, o, p;
var a = function () {
  document
    .getElementsByTagName("body")[0]
    .appendChild(document.createElement("canvas"));
  w = window;
  m = Math;
  c = document.getElementsByTagName("canvas")[0];
  C = c.getContext("2d");
  c.style.width = '100%';
  c.style.height = '100%';
};
var b = function () {
  W = c.width = m.floor(w.innerWidth / 2);
  H = c.height = m.floor(w.innerHeight / 2);
  C.textAlign = 'center';
  C.textBaseline = 'middle';
  C.font = w.innerWidth < 500 ? '40px "impact"' : '80px "impact"';
  C.fillStyle = 'black'; //Dynamic
  C.fillRect(0, 0, W, H);
  C.fillStyle = 'yellow'; //Dynamic
  C.fillText('GOAT', W / 2, H / 2); //Dynamic
  d = C.getImageData(0, 0, W, H);
  e = C.createImageData(W, H);
}
var f = function (t) {
  t /= 1000;
  for (i = 0; i < H; i++) {
    for (j = 0; j < W; j++) {
      k = (i * W + j) * 4;
      o = m.floor(m.tan(j * (t % 3.0 * m.PI / 180) + t) * m.tan(t) * t % 30 * m.random());
      if (d.data[k + 3] > 0 && i + o > 0 && i + o < H) {
        s = ((i + o) * W + j) * 4;
        e.data[k + 0] = d.data[s + 0];
        e.data[k + 1] = d.data[s + 1];
        e.data[k + 2] = d.data[s + 2];
        e.data[k + 3] = 0xff;
      };
    }
  }
  C.putImageData(e, 0, 0);
  r = requestAnimationFrame(f);
};
window.onload = function () {
  a();
  b();
  f();
  w.onresize = function () {
    cancelAnimationFrame(r);
    b();
    f();
  };
};
