<template>
    <section class="hero is-dark is-large">
      <audio id="player"></audio>
      <canvas id="c"></canvas>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{title}}
          </h1>
          <h2 class="subtitle">
            {{subTitle}}
          </h2>
        </div>
         <a class="button is-large" v-if="showPlayButton" v-on:click="togglePlayPause">
          <span class="icon is-medium">
            <i class="ion-iconic ion-ios-play"></i>
          </span>
        </a>
      </div>
    </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return{
      trackName: 'Test Loop',
      track: require("../assets/chune-loop.mp3"),
      showPlayButton: false,
    }
  },
  props: {
    title: '',
    subTitle: ''
  },
  computed: {
    pathName() {
      return this.$route.path;
    }
  },
  methods: {
    togglePlayPause() {
      const player = document.getElementsByTagName('audio');
       console.log(player);
      if (!player[0].paused && player[0].currentTime > 0 && !player[0].ended) {
        player[0].pause();
      } else {
        player[0].play();
      }
    },
    runHexBackground() {
      let 
        ele = document.getElementsByClassName('hero'),
        w = c.width = ele[0].clientWidth,
        h = c.height = ele[0].clientHeight,
        sum = w + h,
        ctx = c.getContext( '2d' ),
        
        opts = {
          
          side: 35,
          picksParTick: 2,
          baseTime: 4000,
          addedTime: 10,
          
          baseLight: 0,
          addedLight: 60,
          strokeLight: 30,
          
          hueSpeed: .4,
          repaintAlpha: 1
        },
        
        difX = Math.sqrt( 3 ) * opts.side / 2, // height of a equilateral triangle 
        difY = opts.side * 3 / 2, // side of a triangle ( because it goes down to a vertex ) then half a side of the triangle in the hex below: s + s/2 = s*3/2
        rad = Math.PI / 6, // TAU / 6 = PI / 3 I thought, but apparently this way works better
        cos = Math.cos( rad ) * opts.side,
        sin = Math.sin( rad ) * opts.side,
        
        hexs = [],
        tick = 0;

      function loop () {
        
        window.requestAnimationFrame( loop );
        
        tick += opts.hueSpeed;
        
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
        ctx.fillRect( 0, 0, w, h );
        
        for( var i = 0; i < opts.picksParTick; ++i )
          hexs[ ( Math.random() * hexs.length ) |0 ].pick();
        
        hexs.map( function( hex ){ hex.step(); } );
      }

      function Hex ( x, y ) {
        
        this.x = x;
        this.y = y;
        this.sum = this.x + this.y;
        this.picked = false;
        this.time = 0;
        this.targetTime = 0;
        
        this.xs = [ this.x + cos, this.x, this.x - cos, this.x - cos, this.x, this.x + cos ];
        this.ys = [ this.y - sin, this.y - opts.side, this.y - sin, this.y + sin, this.y + opts.side, this.y + sin ];
      }
      Hex.prototype.pick = function(){
        
        this.picked = true;
        this.time = this.time || 0;
        this.targetTime = this.targetTime || ( opts.baseTime + opts.addedTime * Math.random() ) |0;
      }

      Hex.prototype.step = function(){
        
        const prop = this.time / this.targetTime;
        let color = 'hsl(hue,100%,light%)'.replace( 'hue', this.sum / sum * 100 + tick );
        
        ctx.beginPath();
        ctx.moveTo( this.xs[0], this.ys[0] );
        for( var i = 1; i < this.xs.length; ++i )
          ctx.lineTo( this.xs[i], this.ys[i] );
        ctx.lineTo( this.xs[0], this.ys[0] );
        
        if( this.picked ){
          
          ++this.time;
          
          if( this.time >= this.targetTime ){
            
            this.time = 0;
            this.targetTime = 0;
            this.picked = false;
          }
          
          ctx.fillStyle = ctx.shadowColor = color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( prop * Math.PI ) );
          ctx.fill();
        } else {
          
          ctx.strokeStyle = ctx.shadowColor = color.replace( 'light', opts.strokeLight );
          ctx.stroke();
        }
      }

      for( var x = 0; x < w; x += difX*2 ){
        var i = 0;
        
        for( var y = 0; y < h; y += difY ){
          ++i;
          hexs.push( new Hex( x + difX * ( i % 2 ), y ) );
          
        }
      }

      loop();

      window.addEventListener( 'resize', function(){
        
        ele = document.getElementsByClassName('hero'),
        w = c.width = ele[0].clientWidth,
        h = c.height = ele[0].clientHeight,
        sum = w + h;
        
        hexs.length = 0;
        for( var x = 0; x < w; x += difX*2 ){
          var i = 0;

          for( var y = 0; y < h; y += difY ){
            ++i;
            hexs.push( new Hex( x + difX * ( i % 2 ), y ) );

          }
        }
      })
    },
    runMathLineBackground() {
      const canvas = document.getElementById("c");
      const ctx = canvas.getContext("2d");

      function drawLines (ctx) {
        let ele = document.getElementsByClassName('hero');

        let canvasWidth = canvas.width = ele[0].clientWidth;
        let canvasHeight = canvas.height = ele[0].clientHeight;

        let timeout = 0;
        let often = 5; // Lower is slower , higher is faster

        ctx.fillRect(0,0,canvasWidth,canvasHeight);
        ctx.translate(canvasWidth/2,canvasHeight/2);

        for (let i = 0; i < 25; i++) {
          for (let a = -45; a <= 45; a+=often) {
            setTimeout(() => {
              drawContext(a, ctx)
            },100 * timeout);

            timeout++;
          }
        }
      }

      function drawContext(a, ctx) {
        let circleR = 300;
        ctx.beginPath();

        if (Math.abs(a) == 45) {
          ctx.strokeStyle="rgb(255,255,255)";
          ctx.lineWidth=1;
        } else if (a == 0) {
          ctx.strokeStyle="rgb(200,200,200)";
          ctx.lineWidth=0.5;
        } else {
          ctx.strokeStyle="rgb(110,110,110)";
          ctx.lineWidth=0.2;
        }

        ctx.moveTo(0,circleR);
        let radians = Math.PI/180*a;
        let x = (circleR * Math.sin(radians)) / Math.sin(Math.PI/2 - radians);
        ctx.lineTo(x,0);
        ctx.stroke();
        ctx.rotate((Math.PI/180)*15);
      }

      drawLines(ctx);

      window.addEventListener( 'resize', function(){
        window.clearTimeout();
        drawLines(ctx);
      })

    },
    runVisualizerBackground() {
      //Note: bins needs to be a power of 2
      let displayBins = 512;
      let backgroundColour = "#000000";
      let barColour = "#EC1A55";
      let songFont = "15px 'Open Sans'";
      //Where the bottom of the waveform is rendered at (out of 255). I recommend
      //leaving it at 96 since it seems to work well, basically any volume will push
      //it past 96. If your audio stream is quiet though, you'll want to reduce this.
      let floorLevel = 48;

      //Whether to draw the frequencies directly, or scale the x-axis logarithmically and show pitch instead.
      let drawPitch = true;
      //Whether to draw the visualisation as a curve instead of discrete bars
      let drawCurved = false;
      //If drawCurved is enabled, this flag fills the area beneath the curve (the same colour as the line)
      let drawFilled = true;
      //Whether to draw text the songText on top of the visualisation
      let drawText = false;

      //Can't touch this
      let audioContext;
      let audioBuffer;
      let audioAnalyserNode;
      let audioVisualizerInitialized = false;
      let songText = "";
      let textSize;
      let canvasContext;
      let canvasWidth;
      let canvasHeight;
      let multiplier;
      let finalBins = [];
      let logLookupTable = [];
      let logBinLengths = [];
      let binWidth;
      let magicConstant = 42; // Meaning of everything. I don't know why this works.

      let initialized = false;
      let canvas = document.getElementById('c');
      let player = document.getElementById('player');
      let ele = document.getElementsByClassName('hero');
      let chune = this.track;
      let chuneName = this.trackName;

      function playChune(track, name, canvas, player, ele) {
        player.src = track;
        player.loop = false; //  Set this to true to annoy the fuck out of someone
        
        let playPromise = player.play();

        if (playPromise !== undefined) {
         playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
          });
        }
				
				if (!initialized) {

          canvas.width = ele[0].clientWidth;
          canvas.height = ele[0].clientHeight;

          canvas.style = "padding:0; margin:0; position: absolute; top: 0; left: 0;"

					initializeVisualizer(canvas, player);
					initialized = true;
        }
        
				updateSongText(name);
			}

      function initializeVisualizer(canvasElement, audioElement) {
        try {
          let ctxt = window.AudioContext || window.webkitAudioContext;
          if (ctxt) {
            initCanvas(canvasElement);
            audioContext = new ctxt();
            setupAudioApi(audioElement);
          }
        } catch(e) {
          console.log(e);
        }
      }

      function updateSongText(newText) {
        songText = newText;
        if (canvasContext)
          textSize = canvasContext.measureText(songText);
      }

      function setupAudioApi(audioElement) {
        let src = audioContext.createMediaElementSource(audioElement);

        audioAnalyserNode = audioContext.createAnalyser();
        //FFT node takes in 2 samples per bin, and we internally use 2 samples per bin
        audioAnalyserNode.fftSize = drawPitch ? displayBins * 8 : displayBins * 2;
        multiplier = Math.pow(22050, 1 / displayBins) * Math.pow(1 / magicConstant, 1 / displayBins);
        finalBins = [];
        logLookupTable = [];
        logBinLengths = [];
        for (let i = 0; i < displayBins; i++) {
          finalBins.push(0);
          logLookupTable.push(0);
        }
        createLookupTable(audioAnalyserNode.frequencyBinCount, logBinLengths, logLookupTable);
        binWidth = Math.ceil(canvasWidth / (displayBins - 1));

        src.connect(audioAnalyserNode);
        audioAnalyserNode.connect(audioContext.destination);

        audioVisualizerInitialized = true;
      }

      function initCanvas(canvasElement) {
        canvasContext = canvasElement.getContext('2d');
        canvasWidth = canvasElement.width;
        canvasHeight = canvasElement.height;
        requestAnimationFrame(paint);
        canvasContext.font = songFont;
        canvasContext.strokeStyle = barColour;

        textSize = canvasContext.measureText(songText);
      }

      //Render some fancy bars
      function paint() {
        requestAnimationFrame(paint);

        if(!audioVisualizerInitialized)
          return;

        canvasContext.fillStyle = backgroundColour;
        canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

        let bins = audioAnalyserNode.frequencyBinCount;
        let data = new Uint8Array(bins);
        audioAnalyserNode.getByteFrequencyData(data);
        canvasContext.fillStyle = barColour;

        if (drawPitch)
          updateBinsLog(logLookupTable, data);
        else
          updateBins(bins, logBinLengths, data);

        if (!drawCurved) {
          for (let i = 0; i < displayBins; i++) {
            paintSingleBin(i);
          }
        } else {
          canvasContext.fillStyle = barColour;
          canvasContext.beginPath();
          canvasContext.moveTo(0, canvasHeight - getBinHeight(0));
          let i;
          for (i = 0; i < displayBins - 2;) {
            var thisX = i * binWidth;
            var nextX = (i + logBinLengths[i]) * binWidth; //First subbin of the next bin
            var x = (thisX + nextX) / 2;

            var thisY = canvasHeight - getBinHeight(i);
            var nextY = canvasHeight - getBinHeight(i + logBinLengths[i]);
            var y = (thisY + nextY) / 2;

            canvasContext.quadraticCurveTo(thisX, thisY, x, y);

            i += logBinLengths[i];
          }
          canvasContext.quadraticCurveTo(i * binWidth, canvasHeight - getBinHeight(i), (i + 1) * binWidth, canvasHeight - getBinHeight(i + 1));
          if (drawFilled) {
            canvasContext.lineTo(canvasWidth, canvasHeight);
            canvasContext.lineTo(0, canvasHeight);
            canvasContext.fill();
          } else {
            canvasContext.stroke();
          }
        }

        if (drawText) {
          canvasContext.fillStyle = 'white';
          //Note: the 15's here need to be changed if you change the font size
          canvasContext.fillText(songText, canvasWidth / 2 - textSize.width / 2, canvasHeight / 2 - 15 / 2 + 15);
        }
      }

      //Inclusive lower, exclusive upper except with stop == start
      function averageRegion(data, start, stop) {
        if (stop <= start)
          return data[start];

        let sum = 0;
        for (let i = start; i < stop; i++) {
          sum += data[i];
        }
        return sum / (stop - start);
      }

      function updateBins(bins, binLengths, data) {
        let step = bins / displayBins;
        for (let i = 0; i < displayBins; i++) {
          let lower = i * step;
          let upper = (i + 1) * step - 1;
          let binValue = averageRegion(data, lower, upper);
          binLengths.push(1);
          finalBins[i] = binValue;
        }
      }

      function createLookupTable(bins, binLengths, lookupTable) {
        if (drawPitch) {
          let lastFrequency = magicConstant / multiplier;
          let currentLength = 0;
          let lastBinIndex = 0;
          for (let i = 0; i < displayBins; i++) {
            let thisFreq = lastFrequency * multiplier;
            lastFrequency = thisFreq;
            let binIndex = Math.floor(bins * thisFreq / 22050);
            lookupTable[i] = binIndex;
            currentLength++;

            if (binIndex != lastBinIndex) {
              for (let j = 0; j < currentLength; j++)
                binLengths.push(currentLength);
              currentLength = 0;
            }

            lastBinIndex = binIndex;
          }
        } else {
          for (let i = 0; i < displayBins; i++) {
            lookupTable[i] = i;
          }
        }
      }

      function updateBinsLog(lookupTable, data) {
        for (let i = 0; i < displayBins; i++) {
          finalBins[i] = data[lookupTable[i]];
        }
      }

      function getBinHeight(i) {
        let binValue = finalBins[i];

        //Pretty much any volume will push it over [floorLevel] so we set that as the bottom threshold
        //I suspect I should be doing a logarithmic space for the volume as well
        let height = Math.max(0, (binValue - floorLevel));
        //Scale to the height of the bar
        //Since we change the base level in the previous operations, 256 should be changed to 160 (i think) if we want it to go all the way to the top
        height = (height / (256 - floorLevel)) * canvasHeight * .8;
        return height;
      }

      function paintSingleBin(i) {
        let height = getBinHeight(i);
        canvasContext.fillRect(i * binWidth, canvasHeight - height, binWidth, height);
      }

      playChune(chune, chuneName, canvas, player, ele);
    },
    runCubeBackground() {
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
      }

      matrix.prototype.wDivide = function() {
        if (this.cols.length !== 1 || this.cols[0].length !== 4) {
          console.log("nah son");
          return;
        }
        
        for (let i = 0; i < 3; i++) {
          this.cols[0][i] /= this.cols[0][3];
        }
      }

      let canv = document.getElementById("c");
      let ctx = canv.getContext("2d");
      let ele = document.getElementsByClassName('hero');
      let w = canv.width = ele[0].clientWidth;;
      let h = canv.height = ele[0].clientHeight;
      let d = 1;
      let a = w / h;
      let yAngle = Math.PI * .25;
      let xAngle = Math.PI * .2;
      let rotX;
      let rotY;

      let proj = new matrix(
        [d/a, 0, 0, 0],
        [0, d, 0, 0],
        [0, 0, d, 0],
        [0, 0, -1, 0]
      );

      let trans = new matrix(
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, -6],
        [0, 0, 0, 1]
      )

      let ulf = new matrix([-1], [1], [1], [1]);
      let urf = new matrix([1], [1], [1], [1]);
      let lrf = new matrix([1], [-1], [1], [1]);
      let llf = new matrix([-1], [-1], [1], [1]);
      let ulb = new matrix([-1], [1], [-1], [1]);
      let urb = new matrix([1], [1], [-1], [1]);
      let llb = new matrix([-1], [-1], [-1], [1]);
      let lrb = new matrix([1], [-1], [-1], [1]);

      let orderedPoints = [ulf, urf, lrf, llf, ulf, ulb, urb, lrb, llb, ulb, urb, urf, lrf, lrb, llb, llf];

      ctx.strokeStyle = "rgb(0, 200, 0)";
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
        let changeOfBasis = new matrix([axis1[0], axis2[0], 0, 0], [axis1[1], axis2[1], 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]);
        
        // get coordinates with respect to new basis
        let newPoint = new matrix([dot(point.cols[0], axis1)], 
                                  [dot(point.cols[0], axis2)],
                                  [dot(point.cols[0], axis3)], [1]);
        
        return changeOfBasis.mul(rotY.mul(newPoint));
      }

      function draw() {
        generateRotationMatrices();
        let mat = proj.mul(trans.mul(rotX.mul(rotY)));
        
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgb(0, 0, 0)";
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
        let x = w * ndc.cols[0][0] + (.5 * w);
        let y = h - (h * ndc.cols[0][1] + (.5 * h));
        return {x: x, y: y};
      }

      draw();
    }
  },
  mounted() {
    if (this.pathName === '/home') {
      this.runHexBackground();
    } else if (this.pathName === '/media') {
      this.runVisualizerBackground();
      // Show the play / pause button
      this.showPlayButton = true;
    } else if (this.pathName === '/vault') {
      this.runCubeBackground();
    } else if (this.pathName === '/about') {
      this.runMathLineBackground();
    } else {
      return;
    }
  },
  destroyed() {
    this.showPlayButton = false;
  }
}
</script>

<style lang="less">

.hero .button {
  position: absolute;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
