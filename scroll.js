// burger

var yellow = '#ED0';
var gold = '#EA0';
var orange = '#E62';
var garnet = '#a92333';
const TAU = Zdog.TAU;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  rotate: { x: -TAU/8 },
  // zoom: 3
});

let burger = new Zdog.Anchor({
  addTo: illo,
  translate: { y: 24 },
  rotate: { x: TAU/4 },
});

var topBun = new Zdog.Hemisphere({
  addTo: burger,
  diameter: 250,
  translate: { z: 44 },
  stroke: 24,
  color: orange,
  // backface: gold,
});

// cheese
new Zdog.Rect({
  addTo: burger,
  width: 220,
  height: 220,
  translate: { z: 24 },
  stroke: 16,
  color: yellow,
  fill: true,
});

// patty
new Zdog.Ellipse({
  addTo: burger,
  diameter: 210,
  stroke: 32,
  color: garnet,
  fill: true,
});

// bottom bun
new Zdog.Cylinder({
  addTo: burger,
  diameter: topBun.diameter,
  length: 24,
  translate: { z: -36 },
  stroke: topBun.stroke,
  color: topBun.color,
});

let seedAnchor = new Zdog.Anchor({
  addTo: topBun,
});

let seedZ = ( topBun.diameter + topBun.stroke ) / 2 + 1;
// seed
new Zdog.Shape({
  addTo: seedAnchor,
  path: [ { y: -3 }, { y: 3 } ],
  translate: { z: seedZ },
  stroke: 11,
  color: gold,
});

seedAnchor.copyGraph({
  rotate: { x: 0.6 },
});
seedAnchor.copyGraph({
  rotate: { x: -0.6 },
});
seedAnchor.copyGraph({
  rotate: { y: -0.5 },
});
seedAnchor.copyGraph({
  rotate: { y: 0.5 },
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


// movement
const body = document.getElementsByTagName("body")[0];
const elem = document.documentElement;

function follow(cursor) {
  let windowWidth = window.innerWidth || elem.clientWidth || body.clientWidth,
    windowHeight = window.innerHeight || elem.clientHeight || body.clientHeight;

  let x = Math.cos((Math.PI * cursor.pageY) / windowHeight) * 0.35;
  let y = Math.cos((Math.PI * cursor.pageX) / windowWidth) * 0.35;

  illo.rotate.x = x;
  illo.rotate.y = y;
  illo.updateRenderGraph();
}

addEventListener("mousemove", follow, false);
addEventListener("touchstart", follow, false);
addEventListener("touchmove", follow, false);

illo.updateRenderGraph();

let $dog = document.querySelector(".zdog-canvas");
let $circles = document.querySelectorAll(".js-circle");
let $texts = document.querySelector(".js-texts");

const updateCirclePosition = () => {
  let top = $texts.getBoundingClientRect().top;
  let documentHeight = document.body.getBoundingClientRect().height;
  let circleHeight = $circles[0].getBoundingClientRect().height;
  let height = documentHeight / 2 - circleHeight / 2;
  let y = height - top;

  $circles[0].style.marginTop = `${y}px`;
  $circles[1].style.marginTop = `${y}px`;
};

addEventListener("scroll", e => {
  updateCirclePosition();
});

window.onload = () => {
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.2]
  };

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      let r = Math.floor(entry.intersectionRatio * 100);
    });
  }, options);

  observer.observe(document.querySelector(".js-text"));

  updateCirclePosition();
};
