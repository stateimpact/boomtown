document.addEventListener('DOMContentLoaded',function(e){
var pop = Popcorn( '#jp_audio_0');

/////////////// !CHAPTER 1

//intro
pop.text({
start: 1,
end: 9,
text:'<div id="boom-intro" class="intro animated fadeIn"><h2>Towanda has seen booms before</h2></div>',
target:'chapter1'
});

pop.text({
start: 5,
end: 14,
text:'<div id="boom-intro1" class="intro animated fadeIn"><h2>First came coal</h2></div>',
target:'chapter1'
});

pop.text({
start: 10,
end: 20,
text:'<div id="boom-intro2" class="intro animated fadeIn"><h2>Then came timber</h2></div>',
target:'chapter1'
});

pop.text({
start: 15,
end: 30,
text:'<div id="boom-intro3" class="intro animated fadeIn"><h2>The latest boom started in 2007</h2><p>This time: It\'s natural gas. The surrounding area of northeast Pennsylvania is now home to more natural gas wells than any other part of the state. For better or worse, life in town has changed.</p> <p>And for Towandans, one question looms: Does every boom have a bust?</p></div>',
target:'chapter1'
});

//remove chapter1 background image

pop.code({
	start: .5,
	onStart: function( options ) {  
		$("#feature-player").addClass("hidden");
	}
});

pop.code({
	start: 5,
	end: 495,
	onStart: function( options ) {  
		$("#chapter1").removeClass("starter");
	},
	onEnd: function( options ) {
		$("#chapter1").addClass("starter");
	}
});

//delayed loading of background images con edits: s1b, s2b, s3b, s4b, s4c, s6b, s8b, s11b, s13b, s13c, s15b, s15c, s20, s20d, s33a, s33b, s33c, s39d, s39e,s39f
pop.code({
	start: 10,
	onStart: function( options ) {  
		$('#s1').css('background-image', 'url(' + 'img/nostalgia1d.jpg' + ')');
		$('#s1b').css('background-image', 'url(' + 'img/sleepy.jpg' + ')');
		$('#s2').css('background-image', 'url(' + 'img/chief-photo.jpg' + ')');
		$('#s2b').css('background-image', 'url(' + 'img/boro.jpg' + ')');
		$('#s3').css('background-image', 'url(' + 'img/shale-well1a.jpg' + ')');
		$('#s3a').css('background-image', 'url(' + 'img/shale-well2.jpg' + ')');
		$('#s3b').css('background-image', 'url(' + 'img/rural.jpg' + ')');
		$('#s4').css('background-image', 'url(' + 'img/old-towanda.jpg' + ')');
		$('#s4b').css('background-image', 'url(' + 'img/truck3.jpg' + ')');
		$('#s4c').css('background-image', 'url(' + 'img/epler.jpg' + ')');
		//con2 added
		$('#s4c').css('background-image', 'url(' + 'img/old-towanda2.jpg' + ')');
		$('#s5').css('background-image', 'url(' + 'img/mailboxes.jpg' + ')');
	}
});

pop.code({
	start: 20,
	onStart: function( options ) {  
		$('#s6').css('background-image', 'url(' + 'img/barbara-karen.jpg' + ')');
		$('#s6b').css('background-image', 'url(' + 'img/restaurant-outside.jpg' + ')');
		$('#s7').css('background-image', 'url(' + 'img/coffee-guys1.jpg' + ')');
		$('#s8b').css('background-image', 'url(' + 'img/openmic.jpg' + ')');
		$('#s9').css('background-image', 'url(' + 'img/musician.jpg' + ')');
		$('#s10').css('background-image', 'url(' + 'img/restaurant-wide-shot.jpg' + ')');
		$('#s11').css('background-image', 'url(' + 'img/courthouse.jpg' + ')');
		//con2 added
		$('#s11c').css('background-image', 'url(' + 'img/land.jpg' + ')');
		$('#s11b').css('background-image', 'url(' + 'img/headshot.jpg' + ')');
		$('#s11a').css('background-image', 'url(' + 'img/truck-flag.jpg' + ')');
		$('#s12').css('background-image', 'url(' + 'img/menu.jpg' + ')');
		$('#s13').css('background-image', 'url(' + 'img/jewelery1.jpg' + ')');
		$('#s13b').css('background-image', 'url(' + 'img/necklace.jpg' + ')');
		$('#s13c').css('background-image', 'url(' + 'img/necklace2.jpg' + ')');
	}
});

pop.code({
	start: 30,
	onStart: function( options ) {  
		$('#s15').css('background-image', 'url(' + 'img/shoe-store1.jpg' + ')');
		$('#s15b').css('background-image', 'url(' + 'img/jan.jpg' + ')');
		$('#s15c').css('background-image', 'url(' + 'img/oldboots.jpg' + ')');
		$('#s16').css('background-image', 'url(' + 'img/shoe-store-boots.jpg' + ')');
		//con stopped here
		$('#s18').css('background-image', 'url(' + 'img/landscape.jpg' + ')');
		$('#s19').css('background-image', 'url(' + 'img/chesapeake.jpg' + ')');
		$('#s20').css('background-image', 'url(' + 'img/marquee.jpg' + ')');
		$('#s20a').css('background-image', 'url(' + 'img/gtp-manufacturing.jpg' + ')');
		$('#s20b').css('background-image', 'url(' + 'img/gtp-factory-1.jpg' + ')');
		$('#s20c').css('background-image', 'url(' + 'img/dupont.jpg' + ')');
		$('#s20d').css('background-image', 'url(' + 'img/spanish.jpg' + ')');
		$('#s21').css('background-image', 'url(' + 'img/welcome-towanda.jpg' + ')');
		$('#s23').css('background-image', 'url(' + 'img/chief-at-station.jpg' + ')');
		$('#s24').css('background-image', 'url(' + 'img/deer-head.jpg' + ')');
		$('#s26').css('background-image', 'url(' + 'img/rent-sign.jpg' + ')');		
	}
});

pop.code({
	start: 40,
	onStart: function( options ) {  
		$('#s27').css('background-image', 'url(' + 'img/classified.jpg' + ')');
		$('#s28').css('background-image', 'url(' + 'img/joe-benjamin.jpg' + ')');
		//con2 added
		$('#s28b').css('background-image', 'url(' + 'img/rent2.jpg' + ')');
		$('#s29').css('background-image', 'url(' + 'img/grace1.jpg' + ')');
		$('#s30').css('background-image', 'url(' + 'img/grace2.jpg' + ')');
		//con2 added
		$('#s30b').css('background-image', 'url(' + 'img/grace3.jpg' + ')');
		$('#s31').css('background-image', 'url(' + 'img/taco-food.jpg' + ')');
		$('#s32').css('background-image', 'url(' + 'img/taco.jpg' + ')');
		$('#s33').css('background-image', 'url(' + 'img/truck1.jpg' + ')');
		$('#s33a').css('background-image', 'url(' + 'img/truckseq1.jpg' + ')');
		$('#s33b').css('background-image', 'url(' + 'img/truckseq2.jpg' + ')');
		$('#s33c').css('background-image', 'url(' + 'img/truckseq3.jpg' + ')');
		$('#s34').css('background-image', 'url(' + 'img/truck2.jpg' + ')');
		$('#s36').css('background-image', 'url(' + 'img/truck4.jpg' + ')');

	}
});

pop.code({
	start: 50,
	onStart: function( options ) {
		$('#s37').css('background-image', 'url(' + 'img/old-man.jpg' + ')');
		$('#s38').css('background-image', 'url(' + 'img/town-square-clock.jpg' + ')');
		//con2 added
		$('#s38b').css('background-image', 'url(' + 'img/slow.jpg' + ')');
		$('#s39').css('background-image', 'url(' + 'img/restaurant-outside.jpg' + ')');
		$('#s39b').css('background-image', 'url(' + 'img/headshot.jpg' + ')');
		$('#s39c').css('background-image', 'url(' + 'img/jan.jpg' + ')');
		$('#s39d').css('background-image', 'url(' + 'img/bootstore.jpg' + ')');
		$('#s39e').css('background-image', 'url(' + 'img/gone.jpg' + ')');
		$('#s39f').css('background-image', 'url(' + 'img/road.jpg' + ')');
		$('#s39g').css('background-image', 'url(' + 'img/shale-well1a.jpg' + ')');
		//con2 added
		$('#s41a').css('background-image', 'url(' + 'img/burn.jpg' + ')');
		$('#s41').css('background-image', 'url(' + 'img/foggy-highway.jpg' + ')');
	}
});

//s1
pop.text({
start: 30,
end: 33,
text:'<div id="s1" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s1b
pop.text({
start: 33,
end: 40,
text:'<div id="s1b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s2
pop.text({
start: 40,
end: 45,
text:'<div id="s2" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s2b
pop.text({
start: 45,
end: 51,
text:'<div id="s2b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s3
pop.text({
start: 51,
end: 55,
text:'<div id="s3" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s3a

pop.text({
start: 55,
end: 67,
text:'<div id="s3a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//maps

pop.text({
start: 63,
end: 63.5,
text:'<div class="map"><img src="img/map8.png" alt="2008"><p>2008: Drilled wells in Bradford County.</p></div>',
target:'chapter1'
});

pop.text({
start: 63.5,
end: 64,
text:'<div class="map"><img src="img/map9.png" alt="2009"><p>2009: Drilled wells in Bradford County.</p></div>',
target:'chapter1'
});

pop.text({
start: 64,
end: 64.5,
text:'<div class="map"><img src="img/map10.png" alt="2010"><p>2010: Drilled wells in Bradford County.</p></div>',
target:'chapter1'
});

pop.text({
start: 64.5,
end: 65,
text:'<div class="map"><img src="img/map11.png" alt="2011"><p>2011: Drilled wells in Bradford County.</p></div>',
target:'chapter1'
});

pop.text({
start: 65,
end: 67,
text:'<div class="map"><img src="img/map12.png" alt="2012"><p>2012: Drilled wells in Bradford County.</p></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s3b
pop.text({
start: 67,
end: 72,
text:'<div id="s3b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s4b
pop.text({
start: 72,
end: 77,
text:'<div id="s4b" class="segment animated fadeIn"></div>',
target:'chapter1'
});



//s4

pop.text({
start: 77,
end: 86,
text:'<div id="s4" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s4c
pop.text({
start: 86,
end: 91,
text:'<div id="s4c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s5

pop.text({
start: 91,
end: 97,
text:'<div id="s5" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s6

pop.text({
start: 97,
end: 101,
text:'<div id="s6" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//sb6
pop.text({
start: 101,
end: 105,
text:'<div id="s6b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s7

pop.text({
start: 105,
end: 110,
text:'<div id="s7" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s8
/*
pop.text({
start: 112,
end: 121,
text:'<div id="s8" class="segment animated fadeIn"></div>',
target:'chapter1'
});
*/

/*CON ADDED THIS */
//s8b
pop.text({
start: 110,
end: 113,
text:'<div id="s8b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s9

pop.text({
start: 113,
end: 116,
text:'<div id="s9" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s10

pop.text({
start: 116,
end: 124,
text:'<div id="s10" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11

pop.text({
start: 124,
end: 130,
text:'<div id="s11" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11c
pop.text({
start: 130,
end: 137,
text:'<div id="s11c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s11b
pop.text({
start: 137,
end: 142,
text:'<div id="s11b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11a

pop.text({
start: 142,
end: 152,
text:'<div id="s11a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s12
pop.text({
start: 152,
end: 158,
text:'<div id="s12"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s13
pop.text({
start: 158,
end: 162,
text:'<div id="s13"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s13b
pop.text({
start: 162,
end: 166,
text:'<div id="s13b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s13c
pop.text({
start: 166,
end: 170,
text:'<div id="s13c"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s15
pop.text({
start: 170,
end: 174,
text:'<div id="s15"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s15b
pop.text({
start: 174,
end: 178,
text:'<div id="s15b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//s15c
pop.text({
start: 178,
end: 184,
text:'<div id="s15c"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s16
pop.text({
start: 184,
end: 193,
text:'<div id="s16"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON STOPPED HERE */

//s18
pop.text({
start: 193,
end: 201,
text:'<div id="s18"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s18a
pop.text({
start: 194,
end: 201,
text:'<div id="s18a" class="txt-overlay animated fadeIn"><h2>Sales Tax collected in Bradford County jumped 61% over 4 years.</h2></div>',
target:'chapter1'
});

//s19
pop.text({
start: 201,
end: 205,
text:'<div id="s19"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20
pop.text({
start: 205,
end: 210,
text:'<div id="s20"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON MOVED THE NEXT THREE AROUND AND EDITED TIME */
//s20a
pop.text({
start: 210,
end: 215,
text:'<div id="s20a"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20b
pop.text({
start: 215,
end: 222,
text:'<div id="s20b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20c
pop.text({
start: 222,
end: 228,
text:'<div id="s20c"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED IMAGE AND EDITED TIME */
//s20d
pop.text({
start: 228,
end: 233,
text:'<div id="s20d"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s21
pop.text({
start: 233,
end: 248,
text:'<div id="s21"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s22
pop.text({
start: 240,
end: 248,
text:'<div id="s22" class="txt-overlay animated fadeIn"><h2>The Bradford County\'s criminal caseload increased by 40% from 2009 to 2011</h2></div>',
target:'chapter1'
});

//s23
pop.text({
start: 249,
end: 256,
text:'<div id="s23" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s24
pop.text({
start: 256,
end: 264,
text:'<div id="s24" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s26
pop.text({
start: 264,
end: 269,
text:'<div id="s26" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s27-- classified
pop.text({
start: 269,
end: 287,
text:'<div id="s27" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s26a
pop.text({
start: 270,
end: 287,
text:'<div id="s26a" class="txt-overlay animated fadeIn"><h2>Cost of a 1 Bedroom Apartment:</h2></div>',
target:'chapter1'
});

//s26b
pop.text({
start: 272,
end: 287,
text:'<div id="s26b" class="txt-overlay animated fadeIn"><h2>Cost of a 1 Bedroom Apartment:</h2><h3>2008: $275-300</h3></div>',
target:'chapter1'
});

//s26c
pop.text({
start: 277,
end: 287,
text:'<div id="s26b" class="txt-overlay animated fadeIn"><h2>Cost of a 1 Bedroom Apartment:</h2><h3>2008: $275-300</h3><h3>2011: $1,000+</h3></div>',
target:'chapter1'
});

//s28
pop.text({
start: 287,
end: 295,
text:'<div id="s28" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s28b
pop.text({
start: 295,
end: 303,
text:'<div id="s28b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s29
pop.text({
start: 303,
end: 311,
text:'<div id="s29" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s30
pop.text({
start: 311,
end: 320,
text:'<div id="s30" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s30b
pop.text({
start: 320,
end: 326,
text:'<div id="s30b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s31
pop.text({
start: 326,
end: 332,
text:'<div id="s31" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s32
pop.text({
start: 332,
end: 340,
text:'<div id="s32" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED NEXT THREE PIX */
//s33a
pop.text({
start: 340,
end: 343,
text:'<div id="s33a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33b
pop.text({
start: 343,
end: 347,
text:'<div id="s33b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33c
pop.text({
start: 347,
end: 351,
text:'<div id="s33c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33
pop.text({
start: 351,
end: 356,
text:'<div id="s33" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s34
pop.text({
start: 356,
end: 361,
text:'<div id="s34" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s36
pop.text({
start: 361,
end: 366,
text:'<div id="s36" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s37
pop.text({
start: 366,
end: 372,
text:'<div id="s37" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s38
pop.text({
start: 372,
end: 376,
text:'<div id="s38" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s38b
pop.text({
start: 376,
end: 382,
text:'<div id="s38b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39
pop.text({
start: 382,
end: 390,
text:'<div id="s39" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON RECYCLED IMAGE FROM EARLIER */
//s39b
pop.text({
start: 390,
end: 396,
text:'<div id="s39b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED RECYCLED IMAGE FROM EARLIER */
//s39c
pop.text({
start: 396,
end: 402,
text:'<div id="s39c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED NEXT 3 IMAGES SORRY */
//s39d
pop.text({
start: 402,
end: 409,
text:'<div id="s39d" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39e
pop.text({
start: 409,
end: 416,
text:'<div id="s39e" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39f
pop.text({
start: 416,
end: 424,
text:'<div id="s39f" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED RECYCLED IMAGE FROM EARLIER */
//s39g
pop.text({
start: 424,
end: 432,
text:'<div id="s39g" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s41a
pop.text({
start: 432,
end: 439,
text:'<div id="s41a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s41
pop.text({
start: 439,
end: 452,
text:'<div id="s41" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s42

pop.text({
start: 450,
end: 452,
text:'<div id="s42" class="txt-overlay animated fadeIn"><h2 id="lm">Explore photos from Towanda at your own pace and join the conversation below &darr;</h2></div>',
target:'chapter1'
});

////reference


//Map
/*pop.text({
start: 53,
end: 60,
text:'<div id="tmap"><h2>Wells</h2><img src="img/towanda-map.gif" alt="towanda-map" width="600" height="393" /></div>',
target:'chapter2'
});*/

//C1S3

/*
pop.text({
start:'26',
end:'40',
text:'<div id="c1s3"><img src="img/wall-pictures.jpg" alt="wp"></div>',
target:'chapter1'
});
*/

/////////////// !photo 1

/* 
pop.code({
	start: 80,
	end: 80.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo1'
		});
		return false;
	},
	onEnd: function( options ) {}
});
*/


/////////////// end     
},false);

