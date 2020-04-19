## Burger Zen 

![Demo](assets/demogif.gif)

### Project Description 
Having fun while learning more advanced Javascript techniques. 

### Libraries used 
[Z Dog](https://zzz.dog/)

### Challenges 
![Beyonce](https://media.giphy.com/media/3oEduRhaW6LT3hifi8/source.gif)

```illo``` is defined at the top of the scroll.js file. It is the base element of the Z Dog SVG illustration.

```javascript
let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  rotate: { x: -TAU/8 },
  // zoom: 3
});
```

```follow``` function makes it so that the animated burger follows the cursor's movement in the window. 

```javascript
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
```

### Mobile 

![Demo](assets/demomobile.gif)



### Author 
[Aylor Brown](https://www.aylorbrown.com)
