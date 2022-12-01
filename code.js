var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d803e45e-2f2e-4eaa-9220-40648d1c57f1","c350c0d7-c626-47ea-afb1-1bd3138cd976","7d3bff48-4539-43b4-8e36-df4e4f76bd1f","43c2512c-028a-4c7b-8d1c-6c6d00cd0b47","982e2515-7e17-4dcf-acd3-b23da6c7abb2"],"propsByKey":{"d803e45e-2f2e-4eaa-9220-40648d1c57f1":{"name":"sam","sourceUrl":null,"frameSize":{"x":252,"y":422},"frameCount":1,"looping":true,"frameDelay":12,"version":"yAhf0hqpf3RAZoUv_QUgvR4JEKGqOyfz","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":422},"rootRelativePath":"assets/d803e45e-2f2e-4eaa-9220-40648d1c57f1.png"},"c350c0d7-c626-47ea-afb1-1bd3138cd976":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/faE8nEX4UBw50vHnPpeIzoWeFyl98zmg/category_vehicles/boxcar_11.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"faE8nEX4UBw50vHnPpeIzoWeFyl98zmg","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/faE8nEX4UBw50vHnPpeIzoWeFyl98zmg/category_vehicles/boxcar_11.png"},"7d3bff48-4539-43b4-8e36-df4e4f76bd1f":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png"},"43c2512c-028a-4c7b-8d1c-6c6d00cd0b47":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL/category_vehicles/boxcar_09.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL/category_vehicles/boxcar_09.png"},"982e2515-7e17-4dcf-acd3-b23da6c7abb2":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  //sam.shapeColor = "green";
  sam.setAnimation("sam");
  sam.scale=0.07;
  
  car1 = createSprite(100,130,10,10);
  //car1.shapeColor = "red";
  car1.setAnimation("car1");
  car1.scale=0.05;
  car1.rotation=90;
  car2 = createSprite(215,130,10,10);
  //car2.shapeColor = "red";
  car2.setAnimation("car2");
  car2.scale=0.05;
  car2.rotation=270;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//Agrega velocidad para hacer que el auto se mueva.
  car1.velocityY=8;
  car2.velocityY=8;
  car3.velocityY=-8;
  car4.velocityY=-8;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
 car1.bounceOff(boundary1);
 car1.bounceOff(boundary2);
 car2.bounceOff(boundary1);
 car2.bounceOff(boundary2);
 car3.bounceOff(boundary1);
 car3.bounceOff(boundary2);
 car4.bounceOff(boundary1);
 car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
 if (keyDown("left"))
 {
   sam.x=sam.x -2; 
 }
 if (keyDown("right"))
 {
   sam.x=sam.x +2;
 }
//Agregar la condición de reducir la vida de Sam si toca el carro.
if (sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)|| sam.isTouching(car4))
{
  sam.x=20;
  sam.y=190;
  life=life+1;
}
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
