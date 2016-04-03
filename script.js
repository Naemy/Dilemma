/* initialisation des sons */
/*createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
createjs.Sound.registerSound("sound/POL-telekinesis-medium.ogg", "sound");
createjs.Sound.registerSound("sound/cancel.ogg", "cancel");
createjs.Sound.registerSound("sound/space-blaster.ogg", "blaster");
createjs.Sound.registerSound("sound/appear.ogg", "appear");*/

/* variables de config */
var BG_COLOR = "#1c181b";
var INTRO_TEXT = "Bienvenue sur le site Dilemma!\nCliquez pour commencer";

/* debut : juste un fond foncé on tappe le texte */


$("body").css("cursor", "crosshair");


var intro_text_typed = "";
var i = 0;
function typefadein() {
	if(i == INTRO_TEXT.length) {
		addEventListener("click", fadeout);
		return;
	} 

	if(INTRO_TEXT[i] == '\n') {
		intro_text_typed += "<br>";
		i++;
	} else {
		intro_text_typed += INTRO_TEXT[i++];
	} 

	document.getElementById("intro_text").innerHTML = intro_text_typed;
	setTimeout(typefadein, Math.floor(Math.random()*20)+30);
}

function fadeout () {
	// flash
	$("#voile").css("background", "white");
	$("#voile").fadeIn(200, function() {
		// flash fadoute
		setTimeout(function() {
			//affiche le contenu
			$("#content").css("display", "block");
			$("#voile").fadeOut(600, function() {
				document.body.removeChild(document.body.firstElementChild); // enlève le voile
				removeEventListener("click", fadeout);
				start();
			});
		}, 80);
	})
	
}

function start() {
	console.log("start");

	options.add(option4, option3, option1, option2)
    isle.add(island, cone);
    layer.add(monster);

    // add the layer to the stage
    stage.add(layer).add(isle).add(options);

    // start sprite animation
    monster.start();
    cone.start();


    // monster.on('frameIndexChange', function(evt) {
    //   if (blob.animation() === 'punch' && ++frameCount > 3) {
    //     blob.animation('idle');
    //     frameCount = 0;
    //   }
    // });

    options.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
        option2.brightness(190);
    });

    options.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });


    // var period = 2000;
    //   var anim = new Kinetic.Animation(function(frame) {
    //        var op = (700-frame.time)/700;
    //        var op2 = (period-frame.time)/period;

    //       if(op <= 0) {
    //           op = 0.0;
    //           option2.opacity(op);
    //           this.stop();
    //           return;
    //        }

    //        option2.opacity(op);
    //       option2.scale({x:op2,y:op2});

    // scale x and y
    //      }, layer);
    // var posoption = option2.getY();
    // console.log(posoption);

    var option1Y;

    var amplitude = 3;
    var period = 2000;
    // in ms
    var centerX = stage.width() / 2;
    var anim = new Kinetic.Animation(function (frame, option1Y) {
        options.setY(1.5 * Math.cos(frame.time * 2 * Math.PI / period) + 0);

        // island.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + 364);
    }, options);

    anim.start();



    var frameCount = 0;


    option1.on('click', function () {
        // anim.start();
        this.off('click').off('mouseover');


        var tween1 = new Kinetic.Tween({
            node: option1,
            duration: 0.3,
            y: 40,
            fill: 'red',
            rotation: 0,
            opacity: 0,
            scaleX: 1
        });

        tween1.play();

        document.body.style.cursor = 'default';
        var instance = createjs.Sound.play("cancel"); // play using id.  Could also use full sourcepath or event.src.
        monster.animation('punch');
        monster.setFrameRate(21);

        setTimeout(function () {

            var instance = createjs.Sound.play("blaster");

        }, 200)

        monster.on('frameIndexChange', function (evt) {
            if (monster.animation() === 'punch' && ++frameCount > 27) {
                monster.animation('idle');
                frameCount = 0;
                monster.setFrameRate(16);

                cone.animation('tree');

                cone.on('frameIndexChange', function (evt) {
                    if (cone.animation() === 'tree' && ++frameCount > 26) {
                        cone.setFrameRate(16);
                        cone.animation('tree_idle');
                        frameCount = 0;

                        var tween3 = new Kinetic.Tween({
                            node: option4,
                            duration: 0.3,
                            y: 46,
                            fill: 'red',
                            rotation: 0,
                            opacity: 1,
                            scaleX: 1
                        });

                        var tween4 = new Kinetic.Tween({
                            node: option3,
                            duration: 0.3,
                            y: 46,
                            fill: 'red',
                            rotation: 0,
                            opacity: 1,
                            scaleX: 1
                        });

                        var instance = createjs.Sound.play("appear");


                        tween3.play();
                        tween4.play();

                        option1.remove();
                        option2.remove();



                        option3.on('click', function () {

                            var instance = createjs.Sound.play("appear");

                        });




                    }
                });

                var tween2 = new Kinetic.Tween({
                    node: option2,
                    duration: 0.3,
                    y: 40,
                    fill: 'red',
                    rotation: 0,
                    opacity: 0,
                    scaleX: 1
                });


                var instance = createjs.Sound.play("cancel");
                tween2.play();

            }

        });

        // this.hide();
    });


    option2.on('click', function () {
        // anim.start();
        this.off('click').off('mouseover');

        var tween1 = new Kinetic.Tween({
            node: option1,
            duration: 0.3,
            y: 40,
            fill: 'red',
            rotation: 0,
            opacity: 0,
            scaleX: 1
        });

        tween1.play();

        document.body.style.cursor = 'default';
        var instance = createjs.Sound.play("cancel"); // play using id.  Could also use full sourcepath or event.src.
        monster.animation('punch');
        monster.setFrameRate(21);

        setTimeout(function () {

            var instance = createjs.Sound.play("blaster");

        }, 200)

        monster.on('frameIndexChange', function (evt) {
            if (monster.animation() === 'punch' && ++frameCount > 27) {
                monster.animation('idle');
                frameCount = 0;
                monster.setFrameRate(16);

                cone.animation('house');

                cone.on('frameIndexChange', function (evt) {
                    if (cone.animation() === 'house' && ++frameCount > 16) {
                        cone.setFrameRate(16);
                        cone.animation('house_idle');
                        frameCount = 0;

                        var tween3 = new Kinetic.Tween({
                            node: option4,
                            duration: 0.3,
                            y: 46,
                            fill: 'red',
                            rotation: 0,
                            opacity: 1,
                            scaleX: 1
                        });

                        var tween4 = new Kinetic.Tween({
                            node: option3,
                            duration: 0.3,
                            y: 46,
                            fill: 'red',
                            rotation: 0,
                            opacity: 1,
                            scaleX: 1
                        });

                        var instance = createjs.Sound.play("appear");


                        tween3.play();
                        tween4.play();

                        option1.remove();
                        option2.remove();



                        option3.on('click', function () {

                            var instance = createjs.Sound.play("appear");

                        });




                    }
                });

                var tween2 = new Kinetic.Tween({
                    node: option2,
                    duration: 0.3,
                    y: 40,
                    fill: 'red',
                    rotation: 0,
                    opacity: 0,
                    scaleX: 1
                });


                var instance = createjs.Sound.play("cancel");
                tween2.play();

            }

        });

        // this.hide();
    });

	imageObj.src = 'img/spritesheet7.png';
	islandObj.src = 'img/island.png';
	coneObj.src = 'img/sprite_cone.png';
	optionObj.src = 'img/option1.png';
}

typefadein()