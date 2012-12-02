document.addEventListener('DOMContentLoaded',function(e){
var pop = Popcorn( '#jp_audio_0');

/////////////// !CHAPTER 1

pop.code({
	start: 1,
	onStart: function( options ) {  
		$.smoothScroll({
			speed: 800,
			scrollTarget: '#chapter1'
			});
	}
});

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
		$('#s1b').css('background-image', 'url(' + 'img/sleepy.jpg' + ')');
		$('#s2').css('background-image', 'url(' + 'img/chief-photo.jpg' + ')');
		$('#s2b').css('background-image', 'url(' + 'img/boro.jpg' + ')');
		$('#s3').css('background-image', 'url(' + 'img/shale-well1a.jpg' + ')');
		$('#s3a').css('background-image', 'url(' + 'img/shale-well2.jpg' + ')');
		$('#s3b').css('background-image', 'url(' + 'img/rural.jpg' + ')');
		$('#s4').css('background-image', 'url(' + 'img/old-towanda.jpg' + ')');
		$('#s4b').css('background-image', 'url(' + 'img/truck3.jpg' + ')');
		$('#s4c').css('background-image', 'url(' + 'img/epler.jpg' + ')');
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

/*CON ADDED THIS */
//s4c
pop.text({
start: 77,
end: 81,
text:'<div id="s4c" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s4

pop.text({
start: 81,
end: 87,
text:'<div id="s4" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s5

pop.text({
start: 87,
end: 95,
text:'<div id="s5" class="segment animated fadeIn"></div>',
target:'chapter1'
});


//s6

pop.text({
start: 95,
end: 100,
text:'<div id="s6" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*CON ADDED THIS */
//sb6
pop.text({
start: 100,
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
end: 137,
text:'<div id="s11" class="segment animated fadeIn"></div>',
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
end: 210,
text:'<div id="s16"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

/*
//s17
pop.text({
start: 210,
end: 213,
text:'<div id="s17"><h2>Holy smokes, we better get some pull on boots.</h2></div>',
target:'chapter1'
});
*/

/*CON STOPPED HERE */

//s18
pop.text({
start: 213,
end: 229,
text:'<div id="s18"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s18a
pop.text({
start: 213,
end: 225,
text:'<div id="s18a"><h2>Sales Tax collected in Bradford County jumped 61% over 4 years.</h2></div>',
target:'chapter1'
});

//s19
pop.text({
start: 225,
end: 235,
text:'<div id="s19"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20
pop.text({
start: 231,
end: 244,
text:'<div id="s20"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20a
pop.text({
start: 240,
end: 252,
text:'<div id="s20a"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s20b
pop.text({
start: 248,
end: 257,
text:'<div id="s20b"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s21
pop.text({
start: 253,
end: 274,
text:'<div id="s21"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s22
pop.text({
start: 270,
end: 292,
text:'<div id="s22"  class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s23
pop.text({
start: 273,
end: 292,
text:'<div id="s23"><h2>Number of Commitments to the Bradford Co. Correctional Facility, 2008- 2012 (projected)</h2><p>From Bradford Co. District Attorney¹s office 2008: 895 2009: 1,002 2010: 1,065 2011: 1,173 2012*: 1,319 *(PROJECTED by Bradford Co. D.A., based on data collected before 5/7/12)</p></div>',
target:'chapter1'
});

//s24
pop.text({
start: 288,
end: 312,
text:'<div id="s24" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s25
pop.text({
start: 299.5,
end: 312,
text:'<div id="s25"><h2>I\'m pretty sure you can\'t shoot them in Texas either</h2></div>',
target:'chapter1'
});

//s26
pop.text({
start: 308,
end: 318,
text:'<div id="s26" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s26a
pop.text({
start: 314,
end: 344,
text:'<div id="s26a"><h2>1 Bedroom Apartment: 2008 275-300 <br> 2011 1,000+</h2></div>',
target:'chapter1'
});

//s27
pop.text({
start: 314,
end: 344,
text:'<div id="s27" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s28
pop.text({
start: 340,
end: 363,
text:'<div id="s28" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s29
pop.text({
start: 359,
end: 363,
text:'<div id="s29" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s30
pop.text({
start: 369,
end: 389,
text:'<div id="s30" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s31
pop.text({
start: 385,
end: 405,
text:'<div id="s31" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s32
pop.text({
start: 401,
end: 414,
text:'<div id="s32" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s33
pop.text({
start: 410,
end: 434,
text:'<div id="s33" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s34
pop.text({
start: 430,
end: 437,
text:'<div id="s34" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s35
pop.text({
start: 433,
end: 439,
text:'<div id="s35" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s36
pop.text({
start: 435,
end: 444,
text:'<div id="s36" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s37
pop.text({
start: 440,
end: 457,
text:'<div id="s37" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s38
pop.text({
start: 453,
end: 470,
text:'<div id="s38" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s39
pop.text({
start: 466,
end: 476,
text:'<div id="s39" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s40
pop.text({
start: 472,
end: 490,
text:'<div id="s40" class="segment animated fadeIn"></div>',
target:'chapter1'
});

//s41
pop.text({
start: 486,
/*end: 495,*/
text:'<div id="s41" class="segment animated fadeIn"></div>',
target:'chapter1'
});

/////////Part2
pop.code({
	start: 30,
	end: 40,
	onStart: function( options ) {  
		$.smoothScroll({
			speed: 800,
			scrollTarget: '#chapter1',
			afterScroll: function() {$("#c2").addClass("active");}
			});
			return false;
	},
	onEnd: function( options ) {$("#c2").removeClass("active");}
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

