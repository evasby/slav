(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.canvas4 = {
  attach: function(context, settings) {
    $(document).ready(function(){

      var themePath = Drupal.settings.path;
      console.log(themePath);
      var width = 890;
      var height = 445;
      var tween = null;
      var stage = new Konva.Stage({
        container: 'canvas2',
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
          x: 135,
          y: 122,
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
/*********************************************************************************/
        var lock1 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(3, 66);
          context.lineTo(161, 9);
          context.lineTo(238, 27);
          context.lineTo(213, 139);
          context.lineTo(209, 142);
          context.lineTo(208, 321);
          context.lineTo(169, 321);
          context.lineTo(169, 256);
          context.lineTo(162, 256);
          context.lineTo(145, 263);
          context.lineTo(107, 156);
          context.lineTo(93, 161);
          context.lineTo(98, 180);
          context.lineTo(48, 197);
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

        layer4.add(lock1, group1);

        stage.add(layer4);

        lock1.tween = new Konva.Tween({
          node: lock1,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2,
        });
        group1.tween = new Konva.Tween({
          node: group1,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
/*********************************************************************************/
        lock1.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group1.tween.play();
          document.getElementById("canvas2").style.cursor = 'pointer';
        });
        lock1.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group1.tween.reverse();
          document.getElementById("canvas2").style.cursor = 'default';
        });
        group1.on('mouseover touchstart', function(evt) {
          group1.tween.play();
          lock1.tween.play();
          document.getElementById("canvas2").style.cursor = 'pointer';
        });
        group1.on('mouseout touchend', function(evt) {
          group1.tween.reverse();
          lock1.tween.reverse();
          document.getElementById("canvas2").style.cursor = 'default';
        });
/*********************************************************************************/
      };
      imageObj.src = themePath + '/image/canvas/bac4.png';
    });    
  }
};
})(jQuery, Drupal, this, this.document);

