const runCubeBackground = () => {
  function matrix(...rows) {
    this.rows = rows;
    this.cols = [];
    for (let i = 0; i < rows[0].length; i++) {
      let col = [];
      for (let j = 0; j < this.rows.length; j++) {
        col.push(this.rows[j][i]);
      }
      this.cols.push(col);
    }
  }

  function dot(v1, v2) {
    var sum = 0;
    for (let i = 0; i < v1.length; i++) {
      sum += v1[i] * v2[i];
    }
    return sum;
  }

  function normalize(vec) {
    let sum = 0;
    for (let i = 0; i < vec.length - 1; i++) {
      sum += Math.pow(vec[i], 2);
    }

    let magnitude = Math.sqrt(sum);

    for (let i = 0; i < vec.length - 1; i++) {
      vec[i] /= magnitude;
    }

    return vec;
  }

  matrix.prototype.mul = function(other) {
    var result = [];
    for (let i = 0; i < this.rows.length; i++) {
      result.push([]);
      for (let j = 0; j < other.cols.length; j++) {
        result[i][j] = dot(this.rows[i], other.cols[j]);
      }
    }
    return new matrix(...result);
  };

  matrix.prototype.wDivide = function() {
    if (this.cols.length !== 1 || this.cols[0].length !== 4) {
      console.log('nah son');
      return;
    }

    for (let i = 0; i < 3; i++) {
      this.cols[0][i] /= this.cols[0][3];
    }
  };

  let canv = document.getElementById('c');
  let ctx = canv.getContext('2d');
  let ele = document.getElementsByClassName('hero');
  let w = (canv.width = ele[0].clientWidth);
  let h = (canv.height = ele[0].clientHeight);
  let d = 1;
  let a = w / h;
  let yAngle = Math.PI * 0.25;
  let xAngle = Math.PI * 0.2;
  let rotX;
  let rotY;

  let proj = new matrix(
    [d / a, 0, 0, 0],
    [0, d, 0, 0],
    [0, 0, d, 0],
    [0, 0, -1, 0]
  );

  let trans = new matrix(
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, -6],
    [0, 0, 0, 1]
  );

  let ulf = new matrix([-1], [1], [1], [1]);
  let urf = new matrix([1], [1], [1], [1]);
  let lrf = new matrix([1], [-1], [1], [1]);
  let llf = new matrix([-1], [-1], [1], [1]);
  let ulb = new matrix([-1], [1], [-1], [1]);
  let urb = new matrix([1], [1], [-1], [1]);
  let llb = new matrix([-1], [-1], [-1], [1]);
  let lrb = new matrix([1], [-1], [-1], [1]);

  let orderedPoints = [
    ulf,
    urf,
    lrf,
    llf,
    ulf,
    ulb,
    urb,
    lrb,
    llb,
    ulb,
    urb,
    urf,
    lrf,
    lrb,
    llb,
    llf
  ];

  ctx.strokeStyle = 'rgb(0, 200, 0)';
  ctx.lineWidth = 1.5;

  let lastFrameTime = Date.now();

  function generateRotationMatrices() {
    rotX = new matrix(
      [1, 0, 0, 0],
      [0, Math.cos(xAngle), -Math.sin(xAngle), 0],
      [0, Math.sin(xAngle), Math.cos(xAngle), 0],
      [0, 0, 0, 1]
    );

    rotY = new matrix(
      [Math.cos(yAngle), 0, Math.sin(yAngle), 0],
      [0, 1, 0, 0],
      [-Math.sin(yAngle), 0, Math.cos(yAngle), 0],
      [0, 0, 0, 1]
    );
  }

  function rotatePointAroundAxis(point, x, y) {
    let axis1 = normalize([-y, x, 0, 0]);
    let axis2 = normalize([x, y, 0, 0]);
    let axis3 = [0, 0, 1, 0];
    let changeOfBasis = new matrix(
      [axis1[0], axis2[0], 0, 0],
      [axis1[1], axis2[1], 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    );

    // get coordinates with respect to new basis
    let newPoint = new matrix(
      [dot(point.cols[0], axis1)],
      [dot(point.cols[0], axis2)],
      [dot(point.cols[0], axis3)],
      [1]
    );

    return changeOfBasis.mul(rotY.mul(newPoint));
  }

  function draw() {
    generateRotationMatrices();
    let mat = proj.mul(trans.mul(rotX.mul(rotY)));

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();
    let initialPoint = getTransformedCoords(mat, orderedPoints[0]);
    ctx.moveTo(initialPoint.x, initialPoint.y);

    for (let i = 1; i < orderedPoints.length; i++) {
      let transformedPoint = getTransformedCoords(mat, orderedPoints[i]);
      ctx.lineTo(transformedPoint.x, transformedPoint.y);
    }

    ctx.stroke();

    let dt = (Date.now() - lastFrameTime) / 5000;
    lastFrameTime = Date.now();
    xAngle += dt;
    yAngle -= 2 * dt;

    requestAnimationFrame(draw);
  }

  function getTransformedCoords(mat, point) {
    let ndc = mat.mul(point);

    // uncomment this next line to have it rotate around a diagonal axis
    ndc = proj.mul(trans.mul(rotatePointAroundAxis(point, 2.5, 1)));

    ndc.wDivide();
    let x = w * ndc.cols[0][0] + 0.5 * w;
    let y = h - (h * ndc.cols[0][1] + 0.5 * h);
    return { x: x, y: y };
  }

  draw();
}
export default runCubeBackground
