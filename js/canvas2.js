(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.canvas2 = {
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
          x: 825,
          y: 205,
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
          x: 749,
          y: 201,
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


        var group3 = new Konva.Group({
          x: 670,
          y: 194,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle3 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle3 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group3.add(circle3);
        group3.add(handle3);
        circle3.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group4 = new Konva.Group({
          x: 118,
          y: 322,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle4 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle4 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group4.add(circle4);
        group4.add(handle4);
        circle4.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group5 = new Konva.Group({
          x: 247,
          y: 353,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle5 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle5= new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group5.add(circle5);
        group5.add(handle5);
        circle5.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group6 = new Konva.Group({
          x: 462,
          y: 350,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle6 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle6 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group6.add(circle6);
        group6.add(handle6);
        circle6.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group7 = new Konva.Group({
          x: 584,
          y: 352,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle7 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle7 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group7.add(circle7);
        group7.add(handle7);
        circle7.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group8 = new Konva.Group({
          x: 735,
          y: 340,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle8 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle8 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group8.add(circle8);
        group8.add(handle8);
        circle8.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });
/*********************************************************************************/
        var lock1 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(800, 162);
          context.lineTo(874, 176);
          context.lineTo(874, 257);
          context.lineTo(787, 257);
          context.lineTo(787, 213);
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
          context.moveTo(731, 144);
          context.lineTo(800, 162);
          context.lineTo(787, 212);
          context.lineTo(786, 257);
          context.lineTo(714, 257);
          context.lineTo(714, 220);
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

        var lock3 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(651, 129);
          context.lineTo(731, 144);
          context.lineTo(714, 220);
          context.lineTo(714, 257);
          context.lineTo(634, 257);
          context.lineTo(634, 199);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock3.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        var lock4 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(85, 290);
          context.lineTo(131, 274);
          context.lineTo(152, 328);
          context.lineTo(174, 327);
          context.lineTo(174, 347);
          context.lineTo(151, 347);
          context.lineTo(151, 398);
          context.lineTo(123, 398);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock4.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        var lock5 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(225, 311);
          context.lineTo(300, 311);
          context.lineTo(300, 401);
          context.lineTo(202, 401);
          context.lineTo(202, 329);
          context.lineTo(225, 329);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock5.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        var lock6 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(417, 310);
          context.lineTo(515, 310);
          context.lineTo(515, 401);
          context.lineTo(417, 401);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock6.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        var lock7 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(540, 312);
          context.lineTo(634, 312);
          context.lineTo(634, 398);
          context.lineTo(540, 398);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock7.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        var lock8 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(695, 288);
          context.lineTo(786, 288);
          context.lineTo(786, 398);
          context.lineTo(695, 398);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });
        lock8.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });

        layer4.add(lock1, lock2, lock3, lock4, lock5, lock6, lock7, lock8, group1, group2, group3, group4, group5, group6, group7, group8);

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
        lock3.tween = new Konva.Tween({
          node: lock3,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group3.tween = new Konva.Tween({
          node: group3,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock4.tween = new Konva.Tween({
          node: lock4,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group4.tween = new Konva.Tween({
          node: group4,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock5.tween = new Konva.Tween({
          node: lock5,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group5.tween = new Konva.Tween({
          node: group5,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock6.tween = new Konva.Tween({
          node: lock6,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group6.tween = new Konva.Tween({
          node: group6,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock7.tween = new Konva.Tween({
          node: lock7,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group7.tween = new Konva.Tween({
          node: group7,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock8.tween = new Konva.Tween({
          node: lock8,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group8.tween = new Konva.Tween({
          node: group8,
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
        lock3.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group3.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock3.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group3.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group3.on('mouseover touchstart', function(evt) {
          group3.tween.play();
          lock3.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group3.on('mouseout touchend', function(evt) {
          group3.tween.reverse();
          lock3.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock4.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group4.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock4.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group4.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group4.on('mouseover touchstart', function(evt) {
          group4.tween.play();
          lock4.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group4.on('mouseout touchend', function(evt) {
          group4.tween.reverse();
          lock4.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock5.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group5.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock5.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group5.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group5.on('mouseover touchstart', function(evt) {
          group5.tween.play();
          lock5.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group5.on('mouseout touchend', function(evt) {
          group5.tween.reverse();
          lock5.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock6.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group6.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock6.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group6.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group6.on('mouseover touchstart', function(evt) {
          group6.tween.play();
          lock6.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group6.on('mouseout touchend', function(evt) {
          group6.tween.reverse();
          lock6.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock7.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group7.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock7.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group7.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group7.on('mouseover touchstart', function(evt) {
          group7.tween.play();
          lock7.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group7.on('mouseout touchend', function(evt) {
          group7.tween.reverse();
          lock7.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock8.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group8.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock8.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group8.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group8.on('mouseover touchstart', function(evt) {
          group8.tween.play();
          lock8.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group8.on('mouseout touchend', function(evt) {
          group8.tween.reverse();
          lock8.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
/*********************************************************************************/
      };
      imageObj.src = themePath + '/image/canvas/bac2.png';
    });    
  }
};
})(jQuery, Drupal, this, this.document);

