document.addEventListener('DOMContentLoaded',function(e){
var pop = Popcorn( '#jp_audio_0');

/////////////// !CHAPTER 1



/*
pop.webpage({
        id: "webpages-f",
        start: 1,
        end: 9,
        src: "http://stateimpact.npr.org",
        target: "webpagediv"
      });
*/

//intro
pop.text({
start: 1,
end: 19,
text:'<div id="wl-intro" class="animated fadeIn"><h2>Music and Intro TBD</h2><p>Towanda has been a boom town before. First came coal in the 19th century. Then came timber, in the early 20th. Both times, companies swooped in, carved out the region\'s natural resources, made a lot of people rich and then abruptly left town.</p><p>Towanda\'s latest boom began in 2007. That\'s when energy companies began buying up land near Towanda. Soon, the surrounding area in northeast Pennsylvania was home to more natural gas wells than any otherpart of the state. And in town, the economic and social fabric of Towanda began to change.</p></div>',
target:'titlecard'
});



//pause
/*pop.code({
	start: 10,
	end: 11,
	onStart: function( options ) {         
		$("#pop-audio").jPlayer("pause", 2);
	}
	
});*/


/////////Part1
pop.code({
	start: 17,
	end: 29,
	onStart: function( options ) {  
		$.smoothScroll({
			speed: 800,
			scrollTarget: '#chapter1',
			afterScroll: function() {$("#c1").addClass("active");}
			});
			return false;
	},
	onEnd: function( options ) {$("#c1").removeClass("active");}
});


pop.text({
start: 21,
end: 29,
text:'<div id="c1s1" class="animated fadeIn"><h2>Towanda was like a Norman Rockwell picture as late as ten years ago.</h2></div>',
target:'chapter1'
});



//s2

pop.text({
start: 36,
end: 46,
text:'<div id="s2" class="segment"></div>',
target:'chapter1'
});


//s3
pop.text({
start: 46,
end: 53,
text:'<div id="s3" class="segment"></div>',
target:'chapter1'
});

//s3a

pop.text({
start: 53,
end: 71,
text:'<div id="s3a" class="segment"></div>',
target:'chapter1'
});

//s3b

pop.text({
start: 60,
end: 71,
text:'<div id="s3b"></div>',
target:'chapter1'
});

//s3c

pop.text({
start: 61,
end: 71,
text:'<div id="s3c" class="animated fadeIn"><p>There are xxxx drilled wells in Bradford County</div>',
target:'chapter1'
});

//s4

pop.text({
start: 71,
end: 87,
text:'<div id="s4" class="segment"></div>',
target:'chapter1'
});

//s5

pop.text({
start: 87,
end: 97,
text:'<div id="s5" class="segment"></div>',
target:'chapter1'
});


//s6

pop.text({
start: 97,
end: 107,
text:'<div id="s6" class="segment"></div>',
target:'chapter1'
});

//s7

pop.text({
start: 107,
end: 112,
text:'<div id="s7" class="segment"></div>',
target:'chapter1'
});

//s8

pop.text({
start: 112,
end: 117,
text:'<div id="s8" class="segment"></div>',
target:'chapter1'
});

//s9

pop.text({
start: 117,
end: 125,
text:'<div id="s9" class="segment"></div>',
target:'chapter1'
});

//s10

pop.text({
start: 125,
end: 138,
text:'<div id="s10" class="segment"></div>',
target:'chapter1'
});

//s11

pop.text({
start: 138,
end: 147,
text:'<div id="s11" class="segment"></div>',
target:'chapter1'
});

//s11a

pop.text({
start: 147,
end: 161,
text:'<div id="s11a" class="segment"></div>',
target:'chapter1'
});

//s12
pop.text({
start: 161,
end: 172,
text:'<div id="s12"  class="segment"></div>',
target:'chapter1'
});

//s13
pop.text({
start: 172,
end: 184,
text:'<div id="s13"  class="segment"></div>',
target:'chapter1'
});

//s14 charms

/*
pop.text({
start: 178,
end: 184,
text:'<div id="s14"  class="segment"></div>',
target:'chapter1'
});*/

//s15
pop.text({
start: 184,
end: 194,
text:'<div id="s15"  class="segment"></div>',
target:'chapter1'
});

//s16
pop.text({
start: 194,
end: 213,
text:'<div id="s16"  class="segment"></div>',
target:'chapter1'
});

//s17
pop.text({
start: 210,
end: 213,
text:'<div id="s17"><h2>Holy smokes, we better get some pull on boots.</h2></div>',
target:'chapter1'
});

//s18
pop.text({
start: 213,
end: 225,
text:'<div id="s18"  class="segment"></div>',
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
end: 231,
text:'<div id="s19"  class="segment"></div>',
target:'chapter1'
});

//s20
pop.text({
start: 231,
end: 240,
text:'<div id="s20"  class="segment"></div>',
target:'chapter1'
});

//s20a
pop.text({
start: 240,
end: 248,
text:'<div id="s20a"  class="segment"></div>',
target:'chapter1'
});

//s20b
pop.text({
start: 248,
end: 253,
text:'<div id="s20b"  class="segment"></div>',
target:'chapter1'
});

//s21
pop.text({
start: 253,
end: 270,
text:'<div id="s21"  class="segment"></div>',
target:'chapter1'
});

//s22
pop.text({
start: 270,
end: 288,
text:'<div id="s22"  class="segment"></div>',
target:'chapter1'
});

//s23
pop.text({
start: 273,
end: 288,
text:'<div id="s23"><h2>DATA Overlay TBD</h2></div>',
target:'chapter1'
});

//s24
pop.text({
start: 288,
end: 308,
text:'<div id="s24" class="segment"></div>',
target:'chapter1'
});

//s25
pop.text({
start: 299.5,
end: 308,
text:'<div id="s25"><h2>I\'m pretty sure you can\'t shoot them in Texas either</h2></div>',
target:'chapter1'
});

//s26
pop.text({
start: 308,
end: 314,
text:'<div id="s26" class="segment"></div>',
target:'chapter1'
});

//s26a
pop.text({
start: 314,
end: 340,
text:'<div id="s26a"><h2>1 Bedroom Apartment: 2008 275- 300 <br> 2011 1,000+</h2></div>',
target:'chapter1'
});

//s27
pop.text({
start: 314,
end: 340,
text:'<div id="s27" class="segment"></div>',
target:'chapter1'
});

//s28
pop.text({
start: 340,
end: 359,
text:'<div id="s28" class="segment"></div>',
target:'chapter1'
});

//s29
pop.text({
start: 359,
end: 369,
text:'<div id="s29" class="segment"></div>',
target:'chapter1'
});

//s30
pop.text({
start: 369,
end: 385,
text:'<div id="s30" class="segment"></div>',
target:'chapter1'
});

//s31
pop.text({
start: 385,
end: 401,
text:'<div id="s31" class="segment"></div>',
target:'chapter1'
});

//s32
pop.text({
start: 401,
end: 410,
text:'<div id="s32" class="segment"></div>',
target:'chapter1'
});

//s33
pop.text({
start: 410,
end: 430,
text:'<div id="s33" class="segment"></div>',
target:'chapter1'
});

//s34
pop.text({
start: 430,
end: 433,
text:'<div id="s34" class="segment"></div>',
target:'chapter1'
});

//s35
pop.text({
start: 433,
end: 435,
text:'<div id="s35" class="segment"></div>',
target:'chapter1'
});

//s36
pop.text({
start: 435,
end: 440,
text:'<div id="s36" class="segment"></div>',
target:'chapter1'
});

//s37
pop.text({
start: 440,
end: 453,
text:'<div id="s37" class="segment"></div>',
target:'chapter1'
});

//s38
pop.text({
start: 453,
end: 466,
text:'<div id="s38" class="segment"></div>',
target:'chapter1'
});

//s39
pop.text({
start: 466,
end: 472,
text:'<div id="s39" class="segment"></div>',
target:'chapter1'
});

//s40
pop.text({
start: 472,
end: 486,
text:'<div id="s40" class="segment"></div>',
target:'chapter1'
});

//s41
pop.text({
start: 486,
/*end: 495,*/
text:'<div id="s41" class="segment"></div>',
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

