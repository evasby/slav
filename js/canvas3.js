(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.canvas3 = {
  attach: function(context, settings) {
    $(document).ready(function(){

      var themePath = Drupal.settings.path;
      console.log(themePath);
      var width = 890;
      var height = 445;
      var tween = null;
      var stage = new Konva.Stage({
        container: 'canvas',
        width: width,
        height: height
      });
      var layer = new Konva.Layer();
      var layer2 = new Konva.Layer();
      var layer3 = new Konva.Layer();
      var layer4 = new Konva.Layer();
      var imageObj = new Image();
      imageObj.onload = function() {
        var bac1 = new Konva.Image({
          x: 0,
          y: 0,
          image: imageObj,
          width: 888,
          height: 429
        });
        layer.add(bac1);
        stage.add(layer);
/*********************************************************************************/
/*********************************************************************************/
        function writeMessage(message) {
          text.setText(message);
          layer2.draw();
        }
        var text = new Konva.Text({
          x: 700,
          y: 10,
          fontFamily: 'Calibri',
          fontSize: 24,
          text: '',
          fill: 'black'
        });
        var rect = new Konva.Rect({
          x: 0,
          y: 0,
          width: 888,
          height: 429,
          //fill: 'green',
          //stroke: 'black',
          //strokeWidth: 0,
          opacity: 0.5
        });
        rect.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });
        layer2.add(rect);
        layer2.add(text);
        stage.add(layer2);
/*********************************************************************************/
        var group1 = new Konva.Group({
          x: 237,
          y: 144,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle1 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle1 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group1.add(circle1);
        group1.add(handle1);
        circle1.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group2 = new Konva.Group({
          x: 94,
          y: 164,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle2 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle2 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group2.add(circle2);
        group2.add(handle2);
        circle2.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });
/*********************************************************************************/
        var lock1 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(133, 20);
          context.lineTo(160, 9);
          context.lineTo(296, 40);
          context.lineTo(301, 24);
          context.lineTo(360, 38);
          context.lineTo(330, 158);
          context.lineTo(330, 297);
          context.lineTo(210, 297);
          context.lineTo(210, 269);
          context.lineTo(195, 269);
          context.lineTo(130, 87);
          context.lineTo(153, 79);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock1.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        var lock2 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(1, 68);
          context.lineTo(108, 31);
          context.lineTo(195, 269);
          context.lineTo(210, 269);
          context.lineTo(210, 327);
          context.lineTo(154, 327);
          context.lineTo(133, 273);
          context.lineTo(83, 291);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock2.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        layer4.add(lock1, lock2, group1, group2);

        lock1.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        stage.add(layer4);

        lock1.tween = new Konva.Tween({
          node: lock1,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group1.tween = new Konva.Tween({
          node: group1,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock2.tween = new Konva.Tween({
          node: lock2,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group2.tween = new Konva.Tween({
          node: group2,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
/*********************************************************************************/
        lock1.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group1.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock1.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group1.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group1.on('mouseover touchstart', function(evt) {
          group1.tween.play();
          lock1.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group1.on('mouseout touchend', function(evt) {
          group1.tween.reverse();
          lock1.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock2.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group2.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock2.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group2.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group2.on('mouseover touchstart', function(evt) {
          group2.tween.play();
          lock2.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group2.on('mouseout touchend', function(evt) {
          group2.tween.reverse();
          lock2.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
/*********************************************************************************/
      };
      imageObj.src = themePath + '/image/canvas/bac3.png';
    });    
  }
};
})(jQuery, Drupal, this, this.document);

