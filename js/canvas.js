(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.canvas = {
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
          x: 520,
          y: 114,
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
          x: 401,
          y: 87,
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
          x: 280,
          y: 62,
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
          x: 178,
          y: 35,
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
          x: 47,
          y: 95,
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
          x: 87,
          y: 210,
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
          x: 128,
          y: 328,
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
          x: 258,
          y: 365,
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


        var group9 = new Konva.Group({
          x: 352,
          y: 367,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle9 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle9 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group9.add(circle9);
        group9.add(handle9);
        circle9.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group10 = new Konva.Group({
          x: 445,
          y: 365,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle10 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle10 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group10.add(circle10);
        group10.add(handle10);
        circle10.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group11 = new Konva.Group({
          x: 443,
          y: 285,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle11 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle11 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group11.add(circle11);
        group11.add(handle11);
        circle11.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group12 = new Konva.Group({
          x: 357,
          y: 284,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle12 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle12 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group12.add(circle12);
        group12.add(handle12);
        circle12.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group13 = new Konva.Group({
          x: 260,
          y: 279,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle13 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle13 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group13.add(circle13);
        group13.add(handle13);
        circle13.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group14 = new Konva.Group({
          x: 173,
          y: 218,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle14 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle14 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group14.add(circle14);
        group14.add(handle14);
        circle14.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });


        var group15 = new Konva.Group({
          x: 140,
          y: 130,
          draggable: true,
          rotationDeg: 40,
          opacity: 0
        });
        var circle15 = new Konva.Circle({
          x: 0,
          y: 0,
          radius: 13,
          stroke: 'white',
          strokeWidth: 5
        });
        var handle15 = new Konva.Rect({
          x: 18,
          y: -3,
          width: 20,
          height: 7,
          fill: 'white',
          strokeWidth: 0,
        });
        group15.add(circle15);
        group15.add(handle15);
        circle15.on('mousemove', function() {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x;
          var y = mousePos.y;
          writeMessage('x: ' + x + ', y: ' + y);
        });
/*********************************************************************************/
        var lock1 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(475, 77);
          context.lineTo(604, 105);
          context.lineTo(589, 170);
          context.lineTo(460, 141);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock2 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(357, 50);
          context.lineTo(475, 77);
          context.lineTo(460, 141);
          context.lineTo(341, 114);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock3 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(238, 24);
          context.lineTo(357, 50);
          context.lineTo(341, 114);
          context.lineTo(223, 87);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock4 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(135, 15);
          context.lineTo(162, 5);
          context.lineTo(238, 24);
          context.lineTo(223, 87);
          context.lineTo(155, 72);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock5 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(5, 60);
          context.lineTo(67, 38);
          context.lineTo(107, 155);
          context.lineTo(46, 176);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock6 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(46, 176);
          context.lineTo(107, 155);
          context.lineTo(147, 270);
          context.lineTo(86, 292);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock7 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(86, 292);
          context.lineTo(147, 270);
          context.lineTo(169, 337);
          context.lineTo(179, 338);
          context.lineTo(178, 404);
          context.lineTo(124, 404);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock8 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(211, 337);
          context.lineTo(333, 337);
          context.lineTo(333, 404);
          context.lineTo(206, 404);
          context.lineTo(206, 350);
          context.lineTo(211, 350);
          context.lineTo(211, 342);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock9 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(333, 337);
          context.lineTo(393, 338);
          context.lineTo(393, 404);
          context.lineTo(363, 418);
          context.lineTo(333, 404);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock10 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(393, 338);
          context.lineTo(514, 338);
          context.lineTo(514, 402);
          context.lineTo(393, 404);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock11 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(394, 260);
          context.lineTo(515, 260);
          context.lineTo(515, 322);
          context.lineTo(393, 321);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock12 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(332, 260);
          context.lineTo(394, 260);
          context.lineTo(393, 321);
          context.lineTo(333, 321);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock13 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(225, 259);
          context.lineTo(332, 260);
          context.lineTo(333, 321);
          context.lineTo(211, 322);
          context.lineTo(211, 287);
          context.lineTo(198, 253);
          context.lineTo(219, 246);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock14 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(141, 208);
          context.lineTo(199, 188);
          context.lineTo(219, 244);
          context.lineTo(162, 265);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });

        var lock15 = new Konva.Shape({
          drawFunc: function(context) {
          context.beginPath();
          context.moveTo(106, 106);
          context.lineTo(158, 88);
          context.lineTo(182, 94);
          context.lineTo(176, 123);
          context.lineTo(199, 188);
          context.lineTo(141, 208);
          context.closePath();
          context.fillStrokeShape(this);
          },
          fill: '#523322',
          opacity: 0,
        });


        layer4.add(lock1, lock2, lock3, lock4, lock5, lock6, lock7, lock8, lock9, lock10, lock11, lock12, lock13, lock14, lock15, group1, group2, group3, group4, group5, group6, group7, group8, group9, group10, group11, group12, group13, group14, group15);

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
        lock9.tween = new Konva.Tween({
          node: lock9,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group9.tween = new Konva.Tween({
          node: group9,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock10.tween = new Konva.Tween({
          node: lock10,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group10.tween = new Konva.Tween({
          node: group10,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock11.tween = new Konva.Tween({
          node: lock11,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group11.tween = new Konva.Tween({
          node: group11,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock12.tween = new Konva.Tween({
          node: lock12,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group12.tween = new Konva.Tween({
          node: group12,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock13.tween = new Konva.Tween({
          node: lock13,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group13.tween = new Konva.Tween({
          node: group13,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock14.tween = new Konva.Tween({
          node: lock14,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group14.tween = new Konva.Tween({
          node: group14,
          opacity: 1,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        lock15.tween = new Konva.Tween({
          node: lock15,
          opacity: 0.4,
          easing: Konva.Easings.EaseOut,
          duration: 0.2
        });
        group15.tween = new Konva.Tween({
          node: group15,
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
        lock9.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group9.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock9.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group9.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group9.on('mouseover touchstart', function(evt) {
          group9.tween.play();
          lock9.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group9.on('mouseout touchend', function(evt) {
          group9.tween.reverse();
          lock9.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock10.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group10.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock10.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group10.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group10.on('mouseover touchstart', function(evt) {
          group10.tween.play();
          lock10.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group10.on('mouseout touchend', function(evt) {
          group10.tween.reverse();
          lock10.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock11.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group11.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock11.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group11.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group11.on('mouseover touchstart', function(evt) {
          group11.tween.play();
          lock11.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group11.on('mouseout touchend', function(evt) {
          group11.tween.reverse();
          lock11.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock12.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group12.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock12.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group12.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group12.on('mouseover touchstart', function(evt) {
          group12.tween.play();
          lock12.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group12.on('mouseout touchend', function(evt) {
          group12.tween.reverse();
          lock12.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock13.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group13.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock13.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group13.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group13.on('mouseover touchstart', function(evt) {
          group13.tween.play();
          lock13.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group13.on('mouseout touchend', function(evt) {
          group13.tween.reverse();
          lock13.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock14.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group14.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock14.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group14.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group14.on('mouseover touchstart', function(evt) {
          group14.tween.play();
          lock14.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group14.on('mouseout touchend', function(evt) {
          group14.tween.reverse();
          lock14.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        lock15.on('mouseover touchstart', function(evt) {
          evt.target.tween.play();
          group15.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        lock15.on('mouseout touchend', function(evt) {
          evt.target.tween.reverse();
          group15.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
        group15.on('mouseover touchstart', function(evt) {
          group15.tween.play();
          lock15.tween.play();
          document.getElementById("canvas").style.cursor = 'pointer';
        });
        group15.on('mouseout touchend', function(evt) {
          group15.tween.reverse();
          lock15.tween.reverse();
          document.getElementById("canvas").style.cursor = 'default';
        });
/*********************************************************************************/
      };
      imageObj.src = themePath + '/image/canvas/bac1.png';
    });    
  }
};
})(jQuery, Drupal, this, this.document);

