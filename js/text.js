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
end: 32,
text:'<div id="boom-intro3" class="intro animated fadeIn"></div>',
target:'chapter1'
});

pop.text({
start: 15,
end: 20,
text:'<div id="boom-intro4" class="intro txt-overlay animated fadeIn"><h2>The latest boom started in 2007</h2></div>',
target:'chapter1'
});

pop.text({
start: 20,
end: 25,
text:'<div id="boom-intro5" class="intro txt-overlay animated fadeIn"><h2>This time: It\'s natural gas</h2></div>',
target:'chapter1'
});

pop.text({
start: 25,
end: 30,
text:'<div id="boom-intro6" class="intro txt-overlay animated fadeIn"><h2>For Towandans, One question looms: Does every boom have a bust?</h2></div>',
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

//delayed loading of background images
pop.code({
	start: 10,
	onStart: function( options ) {  
		$('#s1').css('background-image', 'url(' + 'img/nostalgia1d.jpg' + ')');
		$('#s1b').css('background-image', 'url(' + 'img/antique-car.jpg' + ')');
		$('#s2').css('background-image', 'url(' + 'img/chief-photo.jpg' + ')');
		$('#s2b').css('background-image', 'url(' + 'img/boro.jpg' + ')');
		$('#s3').css('background-image', 'url(' + 'img/shale-well1a.jpg' + ')');
		$('#s3a').css('background-image', 'url(' + 'img/shale-well2.jpg' + ')');
		$('#s3b').css('background-image', 'url(' + 'img/morse.jpg' + ')');
		$('#s4').css('background-image', 'url(' + 'img/old-towanda.jpg' + ')');
		$('#s4b').css('background-image', 'url(' + 'img/truck3.jpg' + ')');
		$('#s4c').css('background-image', 'url(' + 'img/epler.jpg' + ')');
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
		$('#s11c').css('background-image', 'url(' + 'img/farm-house.jpg' + ')');
		$('#s11b').css('background-image', 'url(' + 'img/headshot.jpg' + ')');
		$('#s11a').css('background-image', 'url(' + 'img/aerial-window.jpg' + ')');
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
		$('#s18').css('background-image', 'url(' + 'img/landscape.jpg' + ')');
		$('#s19').css('background-image', 'url(' + 'img/chesapeake.jpg' + ')');
		$('#s20').css('background-image', 'url(' + 'img/marquee.jpg' + ')');
		$('#s20a').css('background-image', 'url(' + 'img/gtp-manufacturing.jpg' + ')');
		$('#s20b').css('background-image', 'url(' + 'img/drill-bit-jewelery.jpg' + ')');
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
		$('#s28b').css('background-image', 'url(' + 'img/rent2.jpg' + ')');
		$('#s29').css('background-image', 'url(' + 'img/grace1.jpg' + ')');
		$('#s30').css('background-image', 'url(' + 'img/grace2.jpg' + ')');
		$('#s30b').css('background-image', 'url(' + 'img/grace3.jpg' + ')');
		$('#s31').css('background-image', 'url(' + 'img/taco-food.jpg' + ')');
		$('#s31a').css('background-image', 'url(' + 'img/food-donations.jpg' + ')');
		$('#s32').css('background-image', 'url(' + 'img/taco.jpg' + ')');
		$('#s33').css('background-image', 'url(' + 'img/truck-flag.jpg' + ')');
		$('#s33a').css('background-image', 'url(' + 'img/truckseq1.jpg' + ')');
		$('#s33b').css('background-image', 'url(' + 'img/truckseq2.jpg' + ')');
		$('#s33c').css('background-image', 'url(' + 'img/truckseq3.jpg' + ')');
		$('#s33d').css('background-image', 'url(' + 'img/truck1.jpg' + ')');

	}
});

pop.code({
	start: 50,
	onStart: function( options ) {
		$('#s34').css('background-image', 'url(' + 'img/truck2.jpg' + ')');
		$('#s36').css('background-image', 'url(' + 'img/truck4.jpg' + ')');
		$('#s37').css('background-image', 'url(' + 'img/old-man.jpg' + ')');
		$('#s38').css('background-image', 'url(' + 'img/slow-downtown.jpg' + ')');
		$('#s38b').css('background-image', 'url(' + 'img/middle-mainstreet.jpg' + ')');
		$('#s39').css('background-image', 'url(' + 'img/restaurant-outside.jpg' + ')');
		$('#s39b').css('background-image', 'url(' + 'img/headshot.jpg' + ')');
		$('#s39c').css('background-image', 'url(' + 'img/jan.jpg' + ')');
		$('#s39d').css('background-image', 'url(' + 'img/bootstore.jpg' + ')');
		$('#s39e').css('background-image', 'url(' + 'img/gone.jpg' + ')');
		$('#s39f').css('background-image', 'url(' + 'img/highway.jpg' + ')');
		$('#s39g').css('background-image', 'url(' + 'img/shale-well1a.jpg' + ')');
		$('#s41a').css('background-image', 'url(' + 'img/burn.jpg' + ')');
		$('#s41').css('background-image', 'url(' + 'img/foggy-highway.jpg' + ')');
	}
});

//s1
pop.text({
start: 30,
end: 35,
text:'<div id="s1" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s1b
pop.text({
start: 33,
end: 42,
text:'<div id="s1b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s2
pop.text({
start: 40,
end: 47,
text:'<div id="s2" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s2b
pop.text({
start: 45,
end: 53,
text:'<div id="s2b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s3
pop.text({
start: 51,
end: 57,
text:'<div id="s3" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s3a

pop.text({
start: 55,
end: 69,
text:'<div id="s3a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//maps

pop.text({
start: 59,
end: 60,
text:'<div class="map"><img src="img/map2008.png" alt="2008"></div>',
target:'chapter1'
});

pop.text({
start: 60,
end: 61,
text:'<div class="map"><img src="img/map2009.png" alt="2009"></div>',
target:'chapter1'
});

pop.text({
start: 61,
end: 62,
text:'<div class="map"><img src="img/map2010.png" alt="2010"></div>',
target:'chapter1'
});

pop.text({
start: 62,
end: 63,
text:'<div class="map"><img src="img/map2011.png" alt="2011"></div>',
target:'chapter1'
});

pop.text({
start: 63,
end: 67,
text:'<div class="map"><img src="img/map2012.png" alt="2012"></div>',
target:'chapter1'
});


//s3b
pop.text({
start: 67,
end: 74,
text:'<div id="s3b" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s4b
pop.text({
start: 72,
end: 79,
text:'<div id="s4b" class="segment animated fadeIn"></div>',
target:'chapter1'
});



//s4

pop.text({
start: 77,
end: 88,
text:'<div id="s4" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s4c
pop.text({
start: 86,
end: 93,
text:'<div id="s4c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s5

pop.text({
start: 91,
end: 99,
text:'<div id="s5" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s6

pop.text({
start: 97,
end: 103,
text:'<div id="s6" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//sb6
pop.text({
start: 101,
end: 107,
text:'<div id="s6b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s7

pop.text({
start: 105,
end: 112,
text:'<div id="s7" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s8b
pop.text({
start: 110,
end: 115,
text:'<div id="s8b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s9

pop.text({
start: 113,
end: 118,
text:'<div id="s9" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s10

pop.text({
start: 116,
end: 126,
text:'<div id="s10" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11

pop.text({
start: 124,
end: 132,
text:'<div id="s11" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11c
pop.text({
start: 130,
end: 140,
text:'<div id="s11c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11b
pop.text({
start: 137,
end: 144,
text:'<div id="s11b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s11a

pop.text({
start: 142,
end: 154,
text:'<div id="s11a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s12
pop.text({
start: 152,
end: 160,
text:'<div id="s12"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s13
pop.text({
start: 158,
end: 164,
text:'<div id="s13"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s13b
pop.text({
start: 162,
end: 168,
text:'<div id="s13b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s13c
pop.text({
start: 166,
end: 172,
text:'<div id="s13c"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s15
pop.text({
start: 170,
end: 176,
text:'<div id="s15"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s15b
pop.text({
start: 174,
end: 180,
text:'<div id="s15b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s15c
pop.text({
start: 178,
end: 186,
text:'<div id="s15c"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s16
pop.text({
start: 184,
end: 195,
text:'<div id="s16"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s18
pop.text({
start: 193,
end: 203,
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
end: 207,
text:'<div id="s19"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20
pop.text({
start: 205,
end: 212,
text:'<div id="s20"  class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s20a
pop.text({
start: 210,
end: 217,
text:'<div id="s20a"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20c
pop.text({
start: 215,
end: 224,
text:'<div id="s20c"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20b
pop.text({
start: 222,
end: 230,
text:'<div id="s20b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20d
pop.text({
start: 228,
end: 235,
text:'<div id="s20d"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s21
pop.text({
start: 233,
end: 250,
text:'<div id="s21"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s22
pop.text({
start: 240,
end: 248,
text:'<div id="s22" class="txt-overlay animated fadeIn"><h2>Bradford County\'s criminal caseload increased by 40% from 2009 to 2011</h2></div>',
target:'chapter1'
});

//s23
pop.text({
start: 248,
end: 258,
text:'<div id="s23" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s24
pop.text({
start: 256,
end: 266,
text:'<div id="s24" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s26
pop.text({
start: 264,
end: 271,
text:'<div id="s26" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s27-- classified
pop.text({
start: 269,
end: 291,
text:'<div id="s27" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s26a
pop.text({
start: 274,
end: 287,
text:'<div id="s26a" class="txt-overlay animated fadeIn"><h2>Cost of a 1 Bedroom Apartment:</h2></div>',
target:'chapter1'
});

//s26b
pop.text({
start: 276,
end: 287,
text:'<div id="s26b" class="txt-overlay animated fadeIn"><h2>Cost of a 1 Bedroom Apartment:</h2><h3>2008: $275-300</h3></div>',
target:'chapter1'
});

//s26c
pop.text({
start: 282,
end: 287,
text:'<div id="s26b" class="txt-overlay animated fadeIn"><h2>Cost of a 1 Bedroom Apartment:</h2><h3>2008: $275-300</h3><h3>2011: $1,000+</h3></div>',
target:'chapter1'
});

//s28
pop.text({
start: 287,
end: 297,
text:'<div id="s28" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s28b
pop.text({
start: 295,
end: 305,
text:'<div id="s28b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s29
pop.text({
start: 303,
end: 313,
text:'<div id="s29" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s30
pop.text({
start: 311,
end: 322,
text:'<div id="s30" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s30b
pop.text({
start: 320,
end: 328,
text:'<div id="s30b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s31
pop.text({
start: 326,
end: 334,
text:'<div id="s31" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s31a
pop.text({
start: 332,
end: 343,
text:'<div id="s31a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s32
pop.text({
start: 341,
end: 347,
text:'<div id="s32" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33 -- truck flag
pop.text({
start: 345,
end: 355,
text:'<div id="s33" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33a
pop.text({
start: 353,
end: 355,
text:'<div id="s33a" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33b
pop.text({
start: 354,
end: 356,
text:'<div id="s33b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33c
pop.text({
start: 355,
end: 358,
text:'<div id="s33c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33d-- start of quotes
pop.text({
start: 356,
end: 360,
text:'<div id="s33d" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s34
pop.text({
start: 358,
end: 362,
text:'<div id="s34" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s36
pop.text({
start: 360,
end: 368,
text:'<div id="s36" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s37-- old man
pop.text({
start: 366,
end: 374,
text:'<div id="s37" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s38
pop.text({
start: 372,
end: 378,
text:'<div id="s38" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s38b
pop.text({
start: 376,
end: 387,
text:'<div id="s38b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39
pop.text({
start: 385,
end: 392,
text:'<div id="s39" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39b
pop.text({
start: 390,
end: 398,
text:'<div id="s39b" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39c
pop.text({
start: 396,
end: 404,
text:'<div id="s39c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39d
pop.text({
start: 402,
end: 411,
text:'<div id="s39d" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39e
pop.text({
start: 409,
end: 418,
text:'<div id="s39e" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39f
pop.text({
start: 416,
end: 426,
text:'<div id="s39f" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39g
pop.text({
start: 424,
end: 434,
text:'<div id="s39g" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s41a
pop.text({
start: 432,
end: 441,
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
start: 441,
end: 452,
text:'<div id="s42" class="txt-overlay animated fadeIn"><h2 id="lm"><a href="#learn">Learn more about #NPRboomtown below &darr;</a></h2></div>',
target:'chapter1'
});

/////////////// end     
},false);

