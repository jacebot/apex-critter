const runMathLineBackground = () => {
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');

  function drawLines(ctx) {
    let ele = document.getElementsByClassName('hero');

    let canvasWidth = (canvas.width = ele[0].clientWidth);
    let canvasHeight = (canvas.height = ele[0].clientHeight);

    let timeout = 0;
    let often = 5; // Lower is slower , higher is faster

    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < 25; i++) {
      for (let a = -45; a <= 45; a += often) {
        setTimeout(() => {
          drawContext(a, ctx);
        }, 100 * timeout);

        timeout++;
      }
    }
  }

  function drawContext(a, ctx) {
    let circleR = 300;
    ctx.beginPath();

    if (Math.abs(a) == 45) {
      ctx.strokeStyle = 'rgb(255,255,255)';
      ctx.lineWidth = 1;
    } else if (a == 0) {
      ctx.strokeStyle = 'rgb(200,200,200)';
      ctx.lineWidth = 0.5;
    } else {
      ctx.strokeStyle = 'rgb(110,110,110)';
      ctx.lineWidth = 0.2;
    }

    ctx.moveTo(0, circleR);
    let radians = (Math.PI / 180) * a;
    let x = (circleR * Math.sin(radians)) / Math.sin(Math.PI / 2 - radians);
    ctx.lineTo(x, 0);
    ctx.stroke();
    ctx.rotate((Math.PI / 180) * 15);
  }

  drawLines(ctx);

  window.addEventListener('resize', function() {
    window.clearTimeout();
    drawLines(ctx);
  });
}

export default runMathLineBackground
