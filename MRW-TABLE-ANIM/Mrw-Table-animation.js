(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Mrw_Table_animation_atlas_", frames: [[456,656,41,87],[506,29,6,27],[506,0,6,27],[490,379,14,21],[473,353,33,24],[408,780,46,36],[473,232,36,61],[449,477,57,95],[408,745,71,33],[473,448,26,23],[335,717,71,86],[456,574,50,80],[499,295,10,7],[162,731,73,43],[334,477,113,151],[456,780,50,32],[237,731,57,48],[0,387,101,243],[225,781,40,39],[0,738,48,55],[162,776,61,31],[240,387,92,230],[267,781,47,28],[88,699,72,88],[0,632,86,104],[103,387,135,159],[103,548,113,149],[342,0,162,230],[342,232,129,243],[335,630,119,85],[218,630,115,99],[473,425,31,21],[473,379,15,44],[408,717,29,14],[162,699,46,29],[0,0,340,385],[473,295,24,56]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.flash0ai = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_4 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_5 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_6 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_7 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_8 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_9 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_10 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_11 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_12 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_13 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_14 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_15 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_16 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_17 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_18 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_19 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_20 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_21 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_22 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_23 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_24 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_25 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_26 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_27 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_28 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_29 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_30 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_31 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_32 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_33 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_34 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_35 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_36 = function() {
	this.spriteSheet = ss["Mrw_Table_animation_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,6,27), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,33,24), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,14,21), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,46,36), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,26,23), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,57,95), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,71,33), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,71,86), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,73,43), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,10,7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,50,32), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,57,48), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,48,55), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,61,31), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,40,39), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_22();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.343,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,16.1,9.6), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,72,88), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,86,104), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,135,159), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,113,149), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,162,230), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,129,243), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,385);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,119,85), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,115,99), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,31,21), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_32();
	this.instance.parent = this;
	this.instance.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-10,15,44), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,29,14), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,46,29), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,56);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170,192.5,1,1,0,0,0,170,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,340,385), null);


// stage content:
(lib.MrwTableanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_180 = function() {
		this.gotoAndPlay(64);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(180).call(this.frame_180).wait(1));

	// Vup
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(210,64.5,1,1,0,0,0,7,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(1).to({rotation:0.1},0).wait(2).to({rotation:0.2},0).wait(1).to({rotation:0.3},0).wait(2).to({rotation:0.4},0).wait(1).to({rotation:0.5},0).wait(2).to({rotation:0.6},0).wait(1).to({rotation:0.7},0).wait(2).to({rotation:0.8},0).wait(1).to({rotation:0.9},0).wait(2).to({rotation:1},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:1.2},0).wait(2).to({rotation:1.3},0).wait(1).to({rotation:1.4},0).wait(2).to({rotation:1.5},0).wait(1).to({rotation:1.6},0).wait(2).to({rotation:1.7},0).wait(1).to({rotation:1.8},0).wait(2).to({rotation:1.9},0).wait(1).to({rotation:2},0).wait(2).to({rotation:2.1},0).wait(1).to({rotation:2.2},0).wait(2).to({rotation:2.3},0).wait(1).to({rotation:2.4},0).wait(2).to({rotation:2.5},0).wait(1).to({rotation:2.6},0).wait(2).to({rotation:2.7},0).wait(1).to({rotation:2.8},0).wait(2).to({rotation:2.9},0).wait(1).to({rotation:3},0).wait(2).to({rotation:3.1},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:14},0).wait(1).to({rotation:24.9,x:211.7,y:65.9},0).wait(1).to({rotation:35.7,x:213.3,y:67.3},0).wait(1).to({rotation:46.6,x:214.9,y:68.8},0).wait(1).to({rotation:57.4,x:216.6,y:70.2},0).wait(1).to({rotation:68.3,x:218.3,y:71.7},0).wait(1).to({rotation:79.1,x:219.9,y:73.1},0).wait(1).to({rotation:90,x:221.6,y:74.5},0).wait(1).to({rotation:88},0).wait(1).to({rotation:85.9,x:221.7,y:74.7},0).wait(1).to({rotation:83.9,y:74.9},0).wait(1).to({rotation:81.8,x:221.8,y:75.2},0).wait(1).to({rotation:79.8,x:221.9,y:75.4},0).wait(1).to({rotation:77.7,x:222,y:75.6},0).wait(1).to({rotation:75.7,x:222.1,y:75.8},0).wait(1).to({rotation:73.6,y:76},0).wait(1).to({rotation:71.6,x:222.2,y:76.2},0).wait(1).to({rotation:69.5,y:76.4},0).wait(1).to({rotation:67.5,x:222.3,y:76.6},0).wait(1).to({rotation:65.5,x:222.4,y:76.9},0).wait(1).to({rotation:63.4,x:222.5,y:77.1},0).wait(1).to({rotation:61.4,x:222.6,y:77.4},0).wait(1).to({rotation:59.3,y:77.5},0).wait(1).to({rotation:57.3,x:222.7,y:77.8},0).wait(1).to({rotation:55.2,x:222.8,y:78},0).wait(1).to({rotation:53.2,y:78.2},0).wait(1).to({rotation:51.1,x:222.9,y:78.4},0).wait(1).to({rotation:49.1,x:223,y:78.7},0).wait(1).to({rotation:47,y:78.8},0).wait(1).to({rotation:45,x:223.2,y:79.1},0).wait(1).to({rotation:43,y:79.3},0).wait(1).to({rotation:40.9,x:222.7,y:78.8},0).wait(1).to({rotation:38.9,x:222.2,y:78.2},0).wait(1).to({rotation:36.8,x:221.7,y:77.6},0).wait(1).to({rotation:34.8,x:221.2,y:77.1},0).wait(1).to({rotation:32.7,x:220.8,y:76.6},0).wait(1).to({rotation:30.7,x:220.3,y:76},0).wait(1).to({rotation:28.6,x:219.8,y:75.4},0).wait(1).to({rotation:26.6,x:219.3,y:74.9},0).wait(1).to({rotation:24.5,x:218.8,y:74.3},0).wait(1).to({rotation:22.5,x:218.3,y:73.8},0).wait(1).to({rotation:20.5,x:217.9,y:73.2},0).wait(1).to({rotation:18.4,x:217.4,y:72.6},0).wait(1).to({rotation:16.4,x:216.9,y:72.1},0).wait(1).to({rotation:14.3,x:216.4,y:71.6},0).wait(1).to({rotation:12.3,x:215.9,y:71},0).wait(1).to({rotation:10.2,x:215.5,y:70.5},0).wait(1).to({rotation:8.2,x:215,y:69.9},0).wait(1).to({rotation:6.1,x:214.5,y:69.4},0).wait(1).to({rotation:4.1,x:214,y:68.8},0).wait(1).to({rotation:2,x:213.5,y:68.3},0).wait(1).to({rotation:0,x:213,y:67.7},0).wait(1).to({x:212.8,y:67.5},0).wait(1).to({x:212.7,y:67.3},0).wait(1).to({x:212.5,y:67.2},0).wait(1).to({x:212.3,y:67},0).wait(1).to({x:212.2,y:66.8},0).wait(1).to({x:212,y:66.6},0).wait(1).to({x:211.8,y:66.5},0).wait(1).to({x:211.7,y:66.3},0).wait(1).to({x:211.5,y:66.1},0).wait(1).to({x:211.3,y:65.9},0).wait(1).to({x:211.2,y:65.7},0).wait(1).to({x:211,y:65.6},0).wait(1).to({x:210.8,y:65.4},0).wait(1).to({x:210.7,y:65.2},0).wait(1).to({x:210.5,y:65},0).wait(1).to({x:210.3,y:64.9},0).wait(1).to({x:210.2,y:64.7},0).wait(1).to({x:210,y:64.5},0).wait(1));

	// Right-Arm
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176,83,1,1,0,0,0,23,18);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(1).to({rotation:-0.7,x:176.1,y:82.9},0).wait(1).to({rotation:-1.5,x:176.2,y:82.7},0).wait(1).to({rotation:-2.2,x:176.4,y:82.6},0).wait(1).to({rotation:-3,x:176.5,y:82.5},0).wait(1).to({rotation:-3.7,x:176.6,y:82.3},0).wait(1).to({rotation:-4.5,x:176.7,y:82.2},0).wait(1).to({rotation:-5.2,x:176.8,y:82},0).wait(1).to({rotation:-6,x:177,y:81.9},0).wait(1).to({rotation:-6.7,x:177.1,y:81.8},0).wait(1).to({rotation:-7.5,x:177.2,y:81.6},0).wait(1).to({rotation:-8.2,x:177.3,y:81.4},0).wait(1).to({rotation:-9,x:177.4,y:81.3},0).wait(1).to({rotation:-9.7,x:177.5,y:81.2},0).wait(1).to({rotation:-10.5,x:177.7,y:81},0).wait(1).to({rotation:-11.2,x:177.8,y:80.9},0).wait(1).to({rotation:-12,x:177.9,y:80.7},0).wait(1).to({rotation:-12.7,x:178,y:80.6},0).wait(1).to({rotation:-13.5,x:178.1,y:80.5},0).wait(1).to({rotation:-14.2,x:178.3,y:80.4},0).wait(1).to({rotation:-15,x:178.4,y:80.2},0).wait(1).to({rotation:-13.6,x:177.9,y:80.3},0).wait(1).to({rotation:-12.3,x:177.4},0).wait(1).to({rotation:-10.9,x:176.9,y:80.4},0).wait(1).to({rotation:-9.5,x:176.4},0).wait(1).to({rotation:-8.1,x:175.9,y:80.5},0).wait(1).to({rotation:-6.8,x:175.4},0).wait(1).to({rotation:-5.4,x:175,y:80.6},0).wait(1).to({rotation:-4,x:174.5},0).wait(1).to({rotation:-2.7,x:174,y:80.7},0).wait(1).to({rotation:-1.3,x:173.5,y:80.8},0).wait(1).to({rotation:0.1,x:173},0).wait(1).to({rotation:1.5,x:172.5,y:80.9},0).wait(1).to({rotation:2.8,x:172},0).wait(1).to({rotation:4.2,x:171.6,y:81},0).wait(1).to({rotation:5.6,x:171},0).wait(1).to({rotation:6.9,x:170.5,y:81.1},0).wait(1).to({rotation:8.3,x:170.1},0).wait(1).to({rotation:9.7,x:169.5,y:81.2},0).wait(1).to({rotation:11.1,x:169.1},0).wait(1).to({rotation:12.4,x:168.5,y:81.3},0).wait(1).to({rotation:13.8,x:168.1,y:81.4},0).wait(1).to({rotation:15.2,x:167.6},0).wait(1).to({rotation:14.6,x:167.8},0).wait(1).to({rotation:14.1,x:168,y:81.5},0).wait(1).to({rotation:13.5,x:168.2},0).wait(1).to({rotation:12.9,x:168.4},0).wait(1).to({rotation:12.4,x:168.6,y:81.6},0).wait(1).to({rotation:11.8,x:168.8},0).wait(1).to({rotation:11.2,x:169.1},0).wait(1).to({rotation:10.7,x:169.2},0).wait(1).to({rotation:10.1,x:169.5,y:81.7},0).wait(1).to({rotation:9.6,x:169.7},0).wait(1).to({rotation:9,x:169.9,y:81.8},0).wait(1).to({rotation:8.4,x:170.1,y:81.7},0).wait(1).to({rotation:7.9,x:170.3,y:81.8},0).wait(1).to({rotation:7.3,x:170.5},0).wait(1).to({rotation:6.7,x:170.7,y:81.9},0).wait(1).to({rotation:6.2,x:170.9},0).wait(1).to({rotation:5.6,x:171.1},0).wait(1).to({rotation:5.1,x:171.3,y:82},0).wait(1).to({rotation:4.5,x:171.6},0).wait(1).to({rotation:3.9,x:171.7},0).wait(1).to({rotation:3.4,x:172},0).wait(1).to({rotation:2.8,x:172.1,y:82.1},0).wait(1).to({rotation:2.2,x:172.4},0).wait(1).to({rotation:1.7,x:172.6},0).wait(1).to({rotation:1.1,x:172.8},0).wait(1).to({rotation:0.6,x:173,y:82.2},0).wait(1).to({rotation:0,x:173.2},0).wait(1).to({rotation:1.4,x:172.7},0).wait(1).to({rotation:2.7,x:172.2},0).wait(1).to({rotation:4.1,x:171.7},0).wait(1).to({rotation:5.5,x:171.2},0).wait(1).to({rotation:6.8,x:170.7},0).wait(1).to({rotation:8.2,x:170.1},0).wait(1).to({rotation:9.5,x:169.6},0).wait(1).to({rotation:10.9,x:169.1},0).wait(1).to({rotation:12.3,x:168.6},0).wait(1).to({rotation:13.6,x:168.1},0).wait(1).to({rotation:15,x:167.6},0).wait(1).to({rotation:14.6,x:167.8},0).wait(1).to({rotation:14.2,x:168.1,y:82.3},0).wait(1).to({rotation:13.8,x:168.3},0).wait(1).to({rotation:13.4,x:168.5},0).wait(1).to({rotation:13,x:168.7},0).wait(1).to({rotation:12.6,x:169},0).wait(1).to({rotation:12.2,x:169.2,y:82.4},0).wait(1).to({rotation:11.8,x:169.4},0).wait(1).to({rotation:11.4,x:169.6},0).wait(1).to({rotation:10.9,x:169.9},0).wait(1).to({rotation:10.5,x:170.1},0).wait(1).to({rotation:10.1,x:170.4},0).wait(1).to({rotation:9.7,x:170.5,y:82.5},0).wait(1).to({rotation:9.3,x:170.8},0).wait(1).to({rotation:8.9,x:171},0).wait(1).to({rotation:8.5,x:171.3},0).wait(1).to({rotation:8.1,x:171.4,y:82.6},0).wait(1).to({rotation:7.7,x:171.7},0).wait(1).to({rotation:7.3,x:171.9},0).wait(1).to({rotation:6.9,x:172.2},0).wait(1).to({rotation:6.5,x:172.3,y:82.7},0).wait(1).to({rotation:6.1,x:172.6},0).wait(1).to({rotation:5.7,x:172.8},0).wait(1).to({rotation:5.3,x:173},0).wait(1).to({rotation:4.9,x:173.2,y:82.8},0).wait(1).to({rotation:4.5,x:173.5},0).wait(1).to({rotation:4.1,x:173.8},0).wait(1).to({rotation:3.6,x:173.9},0).wait(1).to({rotation:3.2,x:174.2},0).wait(1).to({rotation:2.8,x:174.4,y:82.9},0).wait(1).to({rotation:2.4,x:174.7},0).wait(1).to({rotation:2,x:174.9},0).wait(1).to({rotation:1.6,x:175.1},0).wait(1).to({rotation:1.2,x:175.3,y:83},0).wait(1).to({rotation:0.8,x:175.6},0).wait(1).to({rotation:0.4,x:175.8},0).wait(1).to({rotation:0,x:176},0).wait(1));

	// Pencl
	this.instance_2 = new lib.Symbol37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(197,93.5,1,1,0,0,0,3,13.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).wait(1).to({rotation:-0.7,x:197.1,y:93.3},0).wait(1).to({rotation:-1.4,x:197.3,y:93.2},0).wait(1).to({rotation:-2.1,x:197.5,y:93},0).wait(1).to({rotation:-2.9,x:197.6,y:92.8},0).wait(1).to({rotation:-3.6,x:197.8,y:92.6},0).wait(1).to({rotation:-4.3,x:198,y:92.4},0).wait(1).to({rotation:-5,x:198.2,y:92.3},0).wait(1).to({rotation:-5.7,x:198.3,y:92.1},0).wait(1).to({rotation:-6.4,x:198.4,y:91.9},0).wait(1).to({rotation:-7.1,x:198.6,y:91.8},0).wait(1).to({rotation:-7.9,x:198.7,y:91.5},0).wait(1).to({rotation:-8.6,x:198.9,y:91.4},0).wait(1).to({rotation:-9.3,x:199.1,y:91.2},0).wait(1).to({rotation:-10,x:199.2,y:91},0).wait(1).to({rotation:-10.7,x:199.4,y:90.8},0).wait(1).to({rotation:-11.4,x:199.5,y:90.7},0).wait(1).to({rotation:-12.1,x:199.7,y:90.5},0).wait(1).to({rotation:-12.9,x:199.9,y:90.3},0).wait(1).to({rotation:-13.6,x:200,y:90.1},0).wait(1).to({rotation:-14.3,x:200.2,y:90},0).wait(1).to({rotation:-15,x:199.4,y:90.3},0).wait(1).to({rotation:-15.7,x:198.6,y:90.6},0).wait(1).to({rotation:-16.4,x:197.7,y:90.9},0).wait(1).to({rotation:-17.1,x:196.9,y:91.2},0).wait(1).to({rotation:-17.9,x:196.1,y:91.6},0).wait(1).to({rotation:-18.6,x:195.3,y:91.9},0).wait(1).to({rotation:-19.3,x:194.5,y:92.2},0).wait(1).to({rotation:-20,x:193.6,y:92.5},0).wait(1).to({rotation:-20.7,x:192.8,y:92.8},0).wait(1).to({rotation:-21.4,x:192,y:93.1},0).wait(1).to({rotation:-22.1,x:191.2,y:93.4},0).wait(1).to({rotation:-22.9,x:190.3,y:93.8},0).wait(1).to({rotation:-23.6,x:189.5,y:94.1},0).wait(1).to({rotation:-24.3,x:188.7,y:94.4},0).wait(1).to({rotation:-25,x:187.8,y:94.8},0).wait(1).to({rotation:-25.7,x:187,y:95},0).wait(1).to({rotation:-26.4,x:186.2,y:95.4},0).wait(1).to({rotation:-27.1,x:185.4,y:95.7},0).wait(1).to({rotation:-27.9,x:184.6,y:96},0).wait(1).to({rotation:-28.6,x:183.8,y:96.3},0).wait(1).to({rotation:-29.3,x:182.9,y:96.6},0).wait(1).to({rotation:-30,x:182.1,y:97},0).wait(1).to({rotation:-28.3,x:182.4,y:96.9},0).wait(1).to({rotation:-26.7,x:182.8,y:96.7},0).wait(1).to({rotation:-25,x:183.1},0).wait(1).to({rotation:-23.3,x:183.5,y:96.6},0).wait(1).to({rotation:-21.6,x:183.8,y:96.5},0).wait(1).to({rotation:-20,x:184.1,y:96.4},0).wait(1).to({rotation:-18.3,x:184.5,y:96.3},0).wait(1).to({rotation:-16.6,x:184.8,y:96.2},0).wait(1).to({rotation:-15,x:185.2,y:96.1},0).wait(1).to({rotation:-13.3,x:185.5,y:96},0).wait(1).to({rotation:-11.6,x:185.8,y:95.9},0).wait(1).to({rotation:-9.9,x:186.2,y:95.8},0).wait(1).to({rotation:-8.3,x:186.5,y:95.7},0).wait(1).to({rotation:-6.6,x:186.9,y:95.6},0).wait(1).to({rotation:-4.9,x:187.2,y:95.5},0).wait(1).to({rotation:-3.2,x:187.5},0).wait(1).to({rotation:-1.6,x:187.8,y:95.3},0).wait(1).to({rotation:0.1,x:188.2,y:95.2},0).wait(1).to({rotation:1.8,x:188.6,y:95.1},0).wait(1).to({rotation:3.4,x:188.9},0).wait(1).to({rotation:5.1,x:189.2,y:94.9},0).wait(1).to({rotation:6.8,x:189.6,y:94.8},0).wait(1).to({rotation:8.5,x:189.9,y:94.7},0).wait(1).to({rotation:10.1,x:190.3},0).wait(1).to({rotation:11.8,x:190.6,y:94.5},0).wait(1).to({rotation:13.5,x:190.9},0).wait(1).to({rotation:15.1,x:191.2,y:94.4},0).wait(1).to({rotation:14.8,x:190.5,y:94.6},0).wait(1).to({rotation:14.5,x:189.7,y:94.9},0).wait(1).to({rotation:14.2,x:189,y:95.3},0).wait(1).to({rotation:13.9,x:188.2,y:95.5},0).wait(1).to({rotation:13.6,x:187.5,y:95.8},0).wait(1).to({rotation:13.2,x:186.8,y:96.1},0).wait(1).to({rotation:12.9,x:186,y:96.4},0).wait(1).to({rotation:12.6,x:185.3,y:96.7},0).wait(1).to({rotation:12.3,x:184.5,y:97},0).wait(1).to({rotation:12,x:183.8,y:97.3},0).wait(1).to({rotation:11.7,x:183,y:97.6},0).wait(1).to({rotation:11.4,x:183.4,y:97.5},0).wait(1).to({rotation:11,x:183.8,y:97.4},0).wait(1).to({rotation:10.7,x:184.2,y:97.2},0).wait(1).to({rotation:10.4,x:184.5},0).wait(1).to({rotation:10.1,x:184.9,y:97.1},0).wait(1).to({rotation:9.8,x:185.3,y:96.9},0).wait(1).to({rotation:9.5,x:185.7,y:96.8},0).wait(1).to({rotation:9.1,x:186.1},0).wait(1).to({rotation:8.8,x:186.5,y:96.6},0).wait(1).to({rotation:8.5,x:186.8,y:96.5},0).wait(1).to({rotation:8.2,x:187.2,y:96.4},0).wait(1).to({rotation:7.9,x:187.6,y:96.2},0).wait(1).to({rotation:7.6,x:187.9},0).wait(1).to({rotation:7.3,x:188.4,y:96.1},0).wait(1).to({rotation:6.9,x:188.7,y:95.9},0).wait(1).to({rotation:6.6,x:189.1,y:95.8},0).wait(1).to({rotation:6.3,x:189.5,y:95.7},0).wait(1).to({rotation:6,x:189.9,y:95.6},0).wait(1).to({rotation:5.7,x:190.2,y:95.5},0).wait(1).to({rotation:5.4,x:190.6,y:95.4},0).wait(1).to({rotation:5,x:191,y:95.3},0).wait(1).to({rotation:4.7,x:191.4,y:95.2},0).wait(1).to({rotation:4.4,x:191.7,y:95.1},0).wait(1).to({rotation:4.1,x:192.1,y:94.9},0).wait(1).to({rotation:3.8,x:192.5,y:94.8},0).wait(1).to({rotation:3.5,x:192.9},0).wait(1).to({rotation:3.2,x:193.2,y:94.6},0).wait(1).to({rotation:2.8,x:193.6,y:94.5},0).wait(1).to({rotation:2.5,x:194,y:94.4},0).wait(1).to({rotation:2.2,x:194.4,y:94.3},0).wait(1).to({rotation:1.9,x:194.7,y:94.2},0).wait(1).to({rotation:1.6,x:195.1,y:94.1},0).wait(1).to({rotation:1.3,x:195.5,y:93.9},0).wait(1).to({rotation:0.9,x:195.9,y:93.8},0).wait(1).to({rotation:0.6,x:196.2,y:93.7},0).wait(1).to({rotation:0.3,x:196.6,y:93.6},0).wait(1).to({rotation:0,x:197,y:93.5},0).wait(1));

	// Head
	this.instance_3 = new lib.flash0ai_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148,13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).wait(118));

	// Left Arm
	this.instance_4 = new lib.Symbol36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.5,64,1,1,0,0,0,16.5,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4,x:194.6,y:63.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.6,y:64},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.8,x:194.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:1},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:1.2,y:63.9},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:1.5},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:1.7,y:64},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:1.9,x:194.8},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:2.1,y:63.9},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:2.3,x:194.9},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:2.5,y:64},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:2.7},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:2.9,y:63.9},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:3.1},0).wait(1).to({scaleX:1.02,scaleY:0.98,rotation:3.3,x:195,y:64},0).wait(1).to({scaleX:1.02,scaleY:0.98,rotation:3.5,y:63.9},0).wait(1).to({scaleX:1.02,scaleY:0.98,rotation:3.7,x:195.1},0).wait(1).to({scaleX:1.02,scaleY:0.98,rotation:4},0).wait(1).to({scaleX:1.02,scaleY:0.98,rotation:4.2},0).wait(1).to({scaleX:1.02,scaleY:0.98,rotation:4.4},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:4.6,x:195.2},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:4.8,y:63.8},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:5,x:195.3,y:63.9},0).wait(1).to({scaleX:1.03,scaleY:0.97,rotation:5.2},0).wait(1).to({scaleX:1.03,scaleY:0.97,rotation:5.4},0).wait(1).to({scaleX:1.03,scaleY:0.97,rotation:5.6,y:63.8},0).wait(1).to({scaleX:1.03,scaleY:0.97,rotation:5.8,y:63.9},0).wait(1).to({scaleX:1.03,scaleY:0.97,rotation:6,x:195.4},0).wait(1).to({scaleX:1.04,scaleY:0.97,rotation:6.2,x:195.5,y:63.8},0).wait(1).to({scaleX:1.04,scaleY:0.97,rotation:6.5},0).wait(1).to({scaleX:1.04,scaleY:0.97,rotation:6.7,y:63.9},0).wait(1).to({scaleX:1.04,scaleY:0.97,rotation:6.9,y:63.8},0).wait(1).to({scaleX:1.04,scaleY:0.97,rotation:7.1,x:195.6},0).wait(1).to({scaleX:1.04,scaleY:0.96,rotation:7.3},0).wait(1).to({scaleX:1.04,scaleY:0.96,rotation:7.5},0).wait(1).to({scaleX:1.04,scaleY:0.96,rotation:7.7},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:7.9,x:195.7},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:8.1},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:8.3,x:195.8},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:8.5,y:63.7},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:8.7,y:63.8},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:9},0).wait(1).to({scaleX:1.05,scaleY:0.96,rotation:9.2,x:195.9,y:63.7},0).wait(1).to({scaleX:1.05,scaleY:0.95,rotation:9.4,y:63.8},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:9.6,y:63.7},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:9.8},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:10,x:196,y:63.8},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:10.2,x:196.1,y:63.7},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:10.4},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:10.6},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:10.8},0).wait(1).to({scaleX:1.06,scaleY:0.95,rotation:11,x:196.2},0).wait(1).to({scaleX:1.06,scaleY:0.94,rotation:11.2},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:11.5},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:11.7},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:11.9,x:196.3},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:12.1},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:12.3},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:12.5,x:196.4},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:12.7},0).wait(1).to({scaleX:1.07,scaleY:0.94,rotation:12.9},0).wait(1).to({scaleX:1.08,scaleY:0.94,rotation:13.1},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:13.3,x:196.5},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:13.5,x:196.6},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:13.7},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:14},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:14.2,y:63.6},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:14.4,x:196.7},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:14.6},0).wait(1).to({scaleX:1.08,scaleY:0.93,rotation:14.8},0).wait(1).to({scaleX:1.09,scaleY:0.93,rotation:15,x:196.8},0).wait(1).to({scaleX:1.13,scaleY:0.93,rotation:15.4,x:197,y:64.5},0).wait(1).to({scaleX:1.18,scaleY:0.92,rotation:15.8,x:197.4,y:65.4},0).wait(1).to({scaleX:1.22,scaleY:0.92,rotation:16.1,x:197.6,y:66.3},0).wait(1).to({scaleX:1.27,scaleY:0.92,rotation:16.5,x:197.9,y:67.2},0).wait(1).to({scaleX:1.31,scaleY:0.92,rotation:16.9,x:198.2,y:68.1},0).wait(1).to({scaleX:1.36,scaleY:0.92,rotation:17.3,x:198.5,y:69},0).wait(1).to({scaleX:1.34,scaleY:0.92,rotation:16.3,x:198.3,y:68.7},0).wait(1).to({scaleX:1.33,rotation:15.3,y:68.3},0).wait(1).to({scaleX:1.31,rotation:14.3,x:198.1,y:68},0).wait(1).to({scaleX:1.3,rotation:13.3,x:197.9,y:67.7},0).wait(1).to({scaleX:1.28,rotation:12.3,x:197.8,y:67.4},0).wait(1).to({scaleX:1.26,rotation:11.3,x:197.7,y:67.1},0).wait(1).to({scaleX:1.25,rotation:10.3,x:197.6,y:66.7},0).wait(1).to({scaleX:1.23,rotation:9.3,x:197.4,y:66.5},0).wait(1).to({scaleX:1.22,rotation:8.3,x:197.3,y:66.1},0).wait(1).to({scaleX:1.2,rotation:7.3,x:197.1,y:65.8},0).wait(1).to({scaleX:1.19,rotation:6.3,x:197,y:65.5},0).wait(1).to({scaleX:1.17,rotation:5.3,x:196.9,y:65.1},0).wait(1).to({scaleX:1.15,rotation:4.3,x:196.8,y:64.8},0).wait(1).to({scaleX:1.14,rotation:3.3,x:196.6,y:64.5},0).wait(1).to({scaleX:1.12,rotation:2.3,x:196.5,y:64.2},0).wait(25));

	// Lady
	this.instance_5 = new lib.Symbol20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(167,67,1,1,0,0,0,43,52);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.flash0ai();
	this.instance_6.parent = this;
	this.instance_6.setTransform(130,36);

	this.instance_7 = new lib.flash0ai_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(279,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},51).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).wait(1).to({x:167.7,alpha:0.091},0).wait(1).to({x:168.4,alpha:0.182},0).wait(1).to({x:169.1,alpha:0.273},0).wait(1).to({x:169.8,alpha:0.364},0).wait(1).to({x:170.5,alpha:0.455},0).wait(1).to({x:171.1,alpha:0.545},0).wait(1).to({x:171.8,alpha:0.636},0).wait(1).to({x:172.5,alpha:0.727},0).wait(1).to({x:173.2,alpha:0.818},0).wait(1).to({x:173.9,alpha:0.909},0).wait(1).to({x:174.6,alpha:1},0).to({_off:true},1).wait(118));

	// Left Arm
	this.instance_8 = new lib.Symbol31();
	this.instance_8.parent = this;
	this.instance_8.setTransform(367.5,172.5,1,1,0,0,0,35.5,16.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).wait(1).to({rotation:0.9,x:367.6,y:172.3},0).wait(1).to({rotation:1.9,x:367.7,y:172.1},0).wait(1).to({rotation:2.8,x:367.8,y:172},0).wait(1).to({rotation:3.7,y:171.7},0).wait(1).to({rotation:4.7,x:368,y:171.6},0).wait(1).to({rotation:5.6,x:368.1,y:171.4},0).wait(1).to({rotation:6.6,y:171.2},0).wait(1).to({rotation:7.5,x:368.2,y:171},0).wait(1).to({rotation:8.4,x:368.3,y:170.8},0).wait(1).to({rotation:9.4,x:368.4,y:170.7},0).wait(1).to({rotation:10.3,x:368.5,y:170.4},0).wait(1).to({rotation:11.2,x:368.6,y:170.2},0).wait(1).to({rotation:12.2,x:368.7,y:170.1},0).wait(1).to({rotation:13.1,y:169.8},0).wait(1).to({rotation:14.1,x:368.9,y:169.7},0).wait(1).to({rotation:15,x:369,y:169.5},0).wait(1).to({rotation:14.5,x:369.1},0).wait(1).to({rotation:13.9,x:369.2,y:169.6},0).wait(1).to({rotation:13.4,x:369.3},0).wait(1).to({rotation:12.8,x:369.4},0).wait(1).to({rotation:12.3,x:369.5},0).wait(1).to({rotation:11.7,x:369.6,y:169.7},0).wait(1).to({rotation:11.2},0).wait(1).to({rotation:10.7,x:369.8},0).wait(1).to({rotation:10.1,x:369.9,y:169.8},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:9,x:370},0).wait(1).to({rotation:8.5,x:370.1},0).wait(1).to({rotation:8,x:370.2,y:169.9},0).wait(1).to({rotation:7.4,x:370.3},0).wait(1).to({rotation:6.9,x:370.5,y:170},0).wait(1).to({rotation:6.3,x:370.6,y:169.9},0).wait(1).to({rotation:5.8,y:170},0).wait(1).to({rotation:5.2,x:370.8},0).wait(1).to({rotation:4.7,x:370.9},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:3.6,x:371.1,y:170.1},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:2.5,x:371.2,y:170.2},0).wait(1).to({rotation:2,x:371.4},0).wait(1).to({rotation:1.4,x:371.5},0).wait(1).to({rotation:0.9,x:371.6},0).wait(1).to({rotation:0.4,x:371.7,y:170.3},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.5,y:170.2},0).wait(1).to({rotation:-0.7,x:371.6},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.3,x:371.5,y:170.1},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.8,x:371.4,y:170},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2.4,x:371.3,y:169.9},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.9,x:371.2,y:169.8},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.4,y:169.7},0).wait(1).to({rotation:-3.6,x:371.1},0).wait(1).to({rotation:-3.8,x:371},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-4.2,y:169.6},0).wait(1).to({rotation:-4.4},0).wait(1).to({rotation:-4.5,x:370.9},0).wait(1).to({rotation:-4.7,y:169.5},0).wait(1).to({rotation:-4.9,x:370.8},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.3,y:169.4},0).wait(1).to({rotation:-5.4,x:370.7},0).wait(1).to({rotation:-5.6,y:169.3},0).wait(1).to({rotation:-5.8,x:370.6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-6.4,y:169.2},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-6.4,x:370.5,y:169.3},0).wait(1).to({rotation:-6.2,x:370.4,y:169.4},0).wait(1).to({rotation:-6,x:370.3},0).wait(1).to({rotation:-5.9,x:370.2,y:169.6},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.5,x:370.1,y:169.7},0).wait(1).to({rotation:-5.3,x:370,y:169.8},0).wait(1).to({rotation:-5.2,x:369.9,y:169.9},0).wait(1).to({rotation:-5,x:369.8,y:170},0).wait(1).to({rotation:-4.8,x:369.7,y:170.1},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.5,x:369.6,y:170.3},0).wait(1).to({rotation:-4.3,x:369.5},0).wait(1).to({rotation:-4.1,x:369.4,y:170.4},0).wait(1).to({rotation:-4,x:369.3,y:170.5},0).wait(1).to({rotation:-3.8,y:170.6},0).wait(1).to({rotation:-3.6,x:369.2},0).wait(1).to({rotation:-3.4,x:369.1,y:170.7},0).wait(1).to({rotation:-3.3,x:369,y:170.9},0).wait(1).to({rotation:-3.1,y:171},0).wait(1).to({rotation:-2.9,x:368.9,y:171.1},0).wait(1).to({rotation:-2.8,x:368.8},0).wait(1).to({rotation:-2.6,x:368.7,y:171.2},0).wait(1).to({rotation:-2.4,x:368.6,y:171.3},0).wait(1).to({rotation:-2.2,x:368.5,y:171.4},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-1.9,x:368.4,y:171.6},0).wait(1).to({rotation:-1.7,x:368.3,y:171.7},0).wait(1).to({rotation:-1.5,x:368.2},0).wait(1).to({rotation:-1.4,y:171.8},0).wait(1).to({rotation:-1.2,x:368.1,y:171.9},0).wait(1).to({rotation:-1,x:368,y:172},0).wait(1).to({rotation:-0.9,x:367.9,y:172.1},0).wait(1).to({rotation:-0.7,x:367.8},0).wait(1).to({rotation:-0.5,x:367.7,y:172.3},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.2,x:367.6,y:172.4},0).wait(1).to({rotation:0,x:367.5,y:172.5},0).wait(1));

	// Right Arm
	this.instance_9 = new lib.Symbol33();
	this.instance_9.parent = this;
	this.instance_9.setTransform(370,149.5,1,1,0,0,0,13,11.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).wait(1).to({y:149.4},0).wait(1).to({y:149.3},0).wait(1).to({y:149.1},0).wait(1).to({y:149},0).wait(1).to({y:148.9},0).wait(1).to({y:148.8},0).wait(1).to({y:148.7},0).wait(1).to({y:148.5},0).wait(1).to({y:148.4},0).wait(1).to({y:148.3},0).wait(1).to({y:148.2},0).wait(1).to({y:148.1},0).wait(1).to({y:147.9},0).wait(1).to({y:147.8},0).wait(1).to({y:147.7},0).wait(1).to({y:147.6},0).wait(1).to({y:147.5},0).wait(1).to({y:147.3},0).wait(1).to({y:147.2},0).wait(1).to({y:147.1},0).wait(1).to({y:147},0).wait(1).to({y:146.9},0).wait(1).to({y:146.7},0).wait(1).to({y:146.6},0).wait(1).to({y:146.5},0).wait(1).to({y:146.4},0).wait(1).to({y:146.3},0).wait(1).to({y:146.1},0).wait(1).to({y:146},0).wait(1).to({y:145.9},0).wait(1).to({y:146.2},0).wait(1).to({y:146.5},0).wait(1).to({y:146.8},0).wait(1).to({y:147.1},0).wait(1).to({y:147.4},0).wait(1).to({y:147.7},0).wait(1).to({y:148},0).wait(1).to({y:148.3},0).wait(1).to({y:148.6},0).wait(1).to({y:148.9},0).wait(1).to({y:149.2},0).wait(1).to({y:149.5},0).wait(1).to({y:149.8},0).wait(1).to({y:150},0).wait(1).to({y:150.3},0).wait(1).to({y:150.6},0).wait(1).to({y:150.9},0).wait(1).to({y:151.2},0).wait(1).to({y:151.5},0).wait(1).to({y:151.8},0).wait(1).to({y:152.1},0).wait(1).to({y:152.4},0).wait(1).to({y:152.7},0).wait(1).to({y:153},0).wait(1).to({y:153.3},0).wait(1).to({y:153.6},0).wait(1).to({y:153.9},0).wait(1).to({y:153.7},0).wait(1).to({y:153.6},0).wait(1).to({y:153.4},0).wait(1).to({y:153.3},0).wait(1).to({y:153.1},0).wait(1).to({y:153},0).wait(1).to({y:152.8},0).wait(1).to({y:152.6},0).wait(1).to({y:152.5},0).wait(1).to({y:152.3},0).wait(1).to({y:152.2},0).wait(1).to({y:152},0).wait(1).to({y:151.9},0).wait(1).to({y:151.7},0).wait(1).to({y:151.6},0).wait(1).to({y:151.4},0).wait(1).to({y:151.2},0).wait(1).to({y:151.1},0).wait(1).to({y:150.9},0).wait(1).to({y:150.8},0).wait(1).to({y:150.6},0).wait(1).to({y:150.5},0).wait(1).to({y:150.3},0).wait(3).to({y:150.4},0).wait(6).to({y:150.5},0).wait(5).to({y:150.6},0).wait(6).to({y:150.7},0).wait(3).to({y:150.6},0).wait(1).to({y:150.5},0).wait(2).to({y:150.4},0).wait(1).to({y:150.3},0).wait(1).to({y:150.2},0).wait(1).to({y:150.1},0).wait(2).to({y:150},0).wait(1).to({y:149.9},0).wait(1).to({y:149.8},0).wait(1).to({y:149.7},0).wait(2).to({y:149.6},0).wait(1).to({y:149.5},0).wait(1));

	// Newspaper
	this.instance_10 = new lib.Symbol32();
	this.instance_10.parent = this;
	this.instance_10.setTransform(340.5,121.5,1,1,0,0,0,28.5,47.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).wait(1).to({x:340.7,y:121.2},0).wait(1).to({x:340.8,y:120.9},0).wait(1).to({x:341,y:120.6},0).wait(1).to({x:341.2,y:120.3},0).wait(1).to({x:341.3,y:120},0).wait(1).to({x:341.5,y:119.7},0).wait(1).to({x:341.7,y:119.4},0).wait(1).to({x:341.8,y:119.1},0).wait(1).to({x:342,y:118.7},0).wait(1).to({x:342.1,y:118.4},0).wait(1).to({x:342.3,y:118.1},0).wait(1).to({x:342.5,y:117.8},0).wait(1).to({x:342.6,y:117.5},0).wait(1).to({x:342.8,y:117.2},0).wait(1).to({x:343,y:116.9},0).wait(1).to({x:343.1,y:116.6},0).wait(1).to({x:343.3,y:116.3},0).wait(1).to({y:116.5},0).wait(1).to({x:343.2,y:116.6},0).wait(1).to({y:116.8},0).wait(1).to({y:117},0).wait(1).to({y:117.2},0).wait(1).to({x:343.1,y:117.3},0).wait(1).to({y:117.5},0).wait(1).to({y:117.7},0).wait(1).to({x:343,y:117.8},0).wait(1).to({y:118},0).wait(1).to({y:118.2},0).wait(1).to({y:118.4},0).wait(1).to({x:342.9,y:118.5},0).wait(1).to({y:118.7},0).wait(1).to({y:118.9},0).wait(1).to({x:342.8,y:119},0).wait(1).to({y:119.2},0).wait(1).to({y:119.4},0).wait(1).to({y:119.6},0).wait(1).to({x:342.7,y:119.7},0).wait(1).to({y:119.9},0).wait(1).to({y:120.1},0).wait(1).to({x:342.6,y:120.2},0).wait(1).to({y:120.4},0).wait(1).to({y:120.6},0).wait(1).to({y:120.8},0).wait(1).to({x:342.5,y:120.9},0).wait(1).to({y:121.1},0).wait(2).to({x:342.4,y:121.2},0).wait(2).to({x:342.3},0).wait(1).to({y:121.3},0).wait(1).to({x:342.2},0).wait(2).to({x:342.1,y:121.4},0).wait(2).to({x:342,y:121.5},0).wait(2).to({x:341.9},0).wait(1).to({y:121.6},0).wait(1).to({x:341.8},0).wait(2).to({x:341.7,y:121.7},0).wait(3).to({x:341.6,y:121.8},0).wait(2).to({x:341.5},0).wait(1).to({y:121.9},0).wait(1).to({x:341.4},0).wait(2).to({x:341.3,y:122},0).wait(2).to({x:341.2,y:122.1},0).wait(2).to({x:341.1},0).wait(1).to({y:122.2},0).wait(1).to({x:341},0).wait(2).to({x:340.9,y:122.3},0).wait(4).to({y:122.2},0).wait(2).to({x:340.8},0).wait(3).to({y:122.1},0).wait(4).to({y:122},0).wait(3).to({x:340.7},0).wait(2).to({y:121.9},0).wait(5).to({y:121.8},0).wait(2).to({x:340.6},0).wait(3).to({y:121.7},0).wait(4).to({y:121.6},0).wait(3).to({x:340.5},0).wait(2).to({y:121.5},0).wait(3));

	// Head
	this.instance_11 = new lib.Symbol30();
	this.instance_11.parent = this;
	this.instance_11.setTransform(410.3,145.9,1,1,0,0,0,35.4,80);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(63).to({_off:false},0).wait(1).to({regX:35.5,regY:43,rotation:0.9,x:410.7,y:108.9},0).wait(1).to({rotation:1.9,x:411.1},0).wait(1).to({rotation:2.8,x:411.4,y:109},0).wait(1).to({rotation:3.7,x:411.8},0).wait(1).to({rotation:4.7,x:412.2},0).wait(1).to({rotation:5.6,x:412.5,y:109.1},0).wait(1).to({rotation:6.6,x:412.8},0).wait(1).to({rotation:7.5,x:413.2,y:109.3},0).wait(1).to({rotation:8.4,x:413.5},0).wait(1).to({rotation:9.4,x:413.9,y:109.5},0).wait(1).to({rotation:10.3,x:414.3},0).wait(1).to({rotation:11.2,x:414.5,y:109.6},0).wait(1).to({rotation:12.2,x:414.9,y:109.8},0).wait(1).to({rotation:13.1,x:415.3,y:109.9},0).wait(1).to({rotation:14.1,x:415.6,y:110},0).wait(1).to({rotation:15,x:415.9,y:110.2},0).wait(1).to({rotation:14.7,x:415.8,y:110.1},0).wait(1).to({rotation:14.4,x:415.7},0).wait(1).to({rotation:14.1,x:415.5,y:110},0).wait(1).to({rotation:13.8,x:415.4},0).wait(1).to({rotation:13.5,x:415.2},0).wait(1).to({rotation:13.2,x:415.1,y:109.9},0).wait(1).to({rotation:12.9,x:414.9,y:109.8},0).wait(1).to({rotation:12.6,x:414.8},0).wait(1).to({rotation:12.3,x:414.6},0).wait(1).to({rotation:12,x:414.5,y:109.7},0).wait(1).to({rotation:11.7,x:414.3},0).wait(1).to({rotation:11.4,x:414.2,y:109.6},0).wait(1).to({rotation:11.1,x:414.1},0).wait(1).to({rotation:10.8,x:413.9},0).wait(1).to({rotation:10.5,x:413.8,y:109.5},0).wait(1).to({rotation:10.2,x:413.6},0).wait(1).to({rotation:9.9,x:413.4},0).wait(1).to({rotation:9.6,x:413.3,y:109.4},0).wait(1).to({rotation:9.3,x:413.2},0).wait(1).to({rotation:9,x:413},0).wait(1).to({rotation:8.7,x:412.9,y:109.3},0).wait(1).to({rotation:8.4,x:412.7},0).wait(1).to({rotation:8.1,x:412.6},0).wait(1).to({rotation:7.8,x:412.4},0).wait(1).to({rotation:7.5,x:412.2,y:109.2},0).wait(1).to({rotation:7.1,x:412.1},0).wait(1).to({rotation:6.8,x:411.9},0).wait(1).to({rotation:6.4},0).wait(1).to({rotation:5.9,x:411.7,y:109.1},0).wait(1).to({rotation:5.5,x:411.6},0).wait(1).to({rotation:5,x:411.5},0).wait(1).to({rotation:4.5,x:411.4,y:109},0).wait(1).to({rotation:4.1,x:411.3},0).wait(1).to({rotation:3.6,x:411.2},0).wait(1).to({rotation:3.1,x:411.1},0).wait(1).to({rotation:2.7,x:411,y:108.9},0).wait(1).to({rotation:2.2,x:410.8},0).wait(1).to({rotation:1.7,y:109},0).wait(1).to({rotation:1.3,x:410.7,y:108.9},0).wait(1).to({rotation:0.8,x:410.5},0).wait(1).to({rotation:0.4,x:410.4},0).wait(1).to({rotation:-0.1,x:410.3},0).wait(1).to({rotation:-0.6,x:410.2},0).wait(1).to({rotation:-1,x:410.1},0).wait(1).to({rotation:-1.5,x:409.9},0).wait(1).to({rotation:-2,x:409.8},0).wait(1).to({rotation:-2.4,x:409.7},0).wait(1).to({rotation:-2.9,x:409.6},0).wait(1).to({rotation:-3.4,x:409.5,y:109},0).wait(1).to({rotation:-3.8,x:409.4},0).wait(1).to({rotation:-4.3,x:409.3},0).wait(1).to({rotation:-4.7,x:409.2},0).wait(1).to({rotation:-5.2,x:409.1},0).wait(1).to({rotation:-5.7,x:409,y:109.1},0).wait(1).to({rotation:-6.1,x:408.8},0).wait(1).to({rotation:-6.6,x:408.7},0).wait(1).to({rotation:-7.1,y:109.2},0).wait(1).to({rotation:-7.5,x:408.5},0).wait(1).to({rotation:-8,x:408.4},0).wait(1).to({rotation:-7.8},0).wait(1).to({rotation:-7.6,x:408.5},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.2,x:408.6},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-6.8,x:408.7,y:109.1},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-6.3,x:408.8},0).wait(1).to({rotation:-6.1,x:408.9},0).wait(1).to({rotation:-5.9},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.5,x:409},0).wait(1).to({rotation:-5.3,x:409.1,y:109},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-4.8,x:409.2},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.4,x:409.3},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4,x:409.4},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-3.6,x:409.5,y:108.9},0).wait(1).to({rotation:-3.4,y:109},0).wait(1).to({rotation:-3.2,x:409.6},0).wait(1).to({rotation:-3,y:108.9},0).wait(1).to({rotation:-2.9,x:409.7,y:109},0).wait(1).to({rotation:-2.7,y:108.9},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.3,x:409.8},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-1.9,x:409.9},0).wait(1).to({rotation:-1.7,x:410},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.1,x:410.1},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.6,x:410.2},0).wait(1).to({rotation:-0.4,x:410.3},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:0,x:410.4},0).wait(1));

	// Newspaper-guy
	this.instance_12 = new lib.Symbol19();
	this.instance_12.parent = this;
	this.instance_12.setTransform(396.7,147.3,1,1,0,0,0,67.5,79.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.flash0ai_25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(311,67);

	this.instance_14 = new lib.flash0ai_11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(377,146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},44).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},4).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).wait(1).to({x:395.4,alpha:0.071},0).wait(1).to({x:394.2,alpha:0.143},0).wait(1).to({x:392.9,alpha:0.214},0).wait(1).to({x:391.7,alpha:0.286},0).wait(1).to({x:390.4,alpha:0.357},0).wait(1).to({x:389.2,y:147.4,alpha:0.429},0).wait(1).to({x:387.9,alpha:0.5},0).wait(1).to({x:386.6,alpha:0.571},0).wait(1).to({x:385.4,alpha:0.643},0).wait(1).to({x:384.1,alpha:0.714},0).wait(1).to({x:382.9,alpha:0.786},0).wait(1).to({x:381.6,y:147.5,alpha:0.857},0).wait(1).to({x:380.4,alpha:0.929},0).wait(1).to({x:379.1,alpha:1},0).to({_off:true},1).wait(122));

	// Right Hand
	this.instance_15 = new lib.Symbol29();
	this.instance_15.parent = this;
	this.instance_15.setTransform(130.2,148.4,1,1,0,0,0,6.2,6.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(63).to({_off:false},0).wait(1).to({regX:36.5,regY:21.5,rotation:-0.4,x:160.6,y:163.3},0).wait(1).to({rotation:-0.8,x:160.7,y:163.1},0).wait(1).to({rotation:-1.1,x:160.8,y:162.9},0).wait(1).to({rotation:-1.5,x:160.9,y:162.7},0).wait(1).to({rotation:-1.9,x:161,y:162.5},0).wait(1).to({rotation:-2.3,x:161.1,y:162.3},0).wait(1).to({rotation:-2.6,x:161.2,y:162.1},0).wait(1).to({rotation:-3,x:161.3,y:161.9},0).wait(1).to({rotation:-3.4,y:161.7},0).wait(1).to({rotation:-3.8,x:161.4,y:161.5},0).wait(1).to({rotation:-4.1,x:161.5,y:161.3},0).wait(1).to({rotation:-4.5,x:161.6,y:161.1},0).wait(1).to({rotation:-4.9,x:161.7,y:160.9},0).wait(1).to({rotation:-5.3,y:160.6},0).wait(1).to({rotation:-5.6,x:161.8,y:160.4},0).wait(1).to({rotation:-6,x:161.9,y:160.3},0).wait(1).to({rotation:-6.4,x:162,y:160},0).wait(1).to({rotation:-6.8,x:162.1,y:159.8},0).wait(1).to({rotation:-6.4,x:162,y:160},0).wait(1).to({rotation:-6,x:161.9,y:160.3},0).wait(1).to({rotation:-5.6,y:160.5},0).wait(1).to({rotation:-5.2,x:161.7,y:160.7},0).wait(1).to({rotation:-4.8,x:161.6,y:160.9},0).wait(1).to({rotation:-4.4,y:161.1},0).wait(1).to({rotation:-4,x:161.5,y:161.4},0).wait(1).to({rotation:-3.6,x:161.4,y:161.6},0).wait(1).to({rotation:-3.3,x:161.3,y:161.8},0).wait(1).to({rotation:-2.9,x:161.2,y:161.9},0).wait(1).to({rotation:-2.5,x:161.1,y:162.2},0).wait(1).to({rotation:-2.1,y:162.4},0).wait(1).to({rotation:-1.7,x:161,y:162.6},0).wait(1).to({rotation:-1.3,x:160.9,y:162.8},0).wait(1).to({rotation:-0.9,x:160.7,y:163},0).wait(1).to({rotation:-0.5,x:160.6,y:163.2},0).wait(1).to({rotation:-0.1,x:160.5,y:163.4},0).wait(1).to({rotation:0.2,x:160.4,y:163.6},0).wait(1).to({rotation:0.6,x:160.3,y:163.8},0).wait(1).to({rotation:1,x:160.2,y:164},0).wait(1).to({rotation:1.4,x:160.1,y:164.2},0).wait(1).to({rotation:1.8,x:160,y:164.5},0).wait(1).to({rotation:2.2,x:159.9,y:164.7},0).wait(1).to({rotation:2.6,x:159.8,y:164.9},0).wait(1).to({rotation:3,x:159.7,y:165},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:2.7,x:159.8,y:164.9},0).wait(1).to({rotation:2.5,y:164.8},0).wait(1).to({rotation:2.4,y:164.7},0).wait(1).to({rotation:2.2,x:159.9},0).wait(1).to({rotation:2.1,y:164.6},0).wait(1).to({rotation:1.9,x:160,y:164.5},0).wait(1).to({rotation:1.8,x:160.1},0).wait(1).to({rotation:1.6,y:164.4},0).wait(1).to({rotation:1.5,y:164.3},0).wait(1).to({rotation:1.3,x:160.2,y:164.2},0).wait(1).to({rotation:1.2,y:164.1},0).wait(1).to({rotation:1,y:164},0).wait(1).to({rotation:0.9,x:160.3},0).wait(1).to({rotation:0.7,y:163.9},0).wait(1).to({rotation:0.6,x:160.4,y:163.8},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.3,y:163.7},0).wait(1).to({rotation:0.2,x:160.5,y:163.6},0).wait(1).to({rotation:0,y:163.5},0).wait(1).to({rotation:-0.1,y:163.4},0).wait(1).to({rotation:-0.3,x:160.6,y:163.3},0).wait(1).to({rotation:-0.4,y:163.2},0).wait(1).to({rotation:-0.7,x:160.7},0).wait(1).to({rotation:-0.9,x:160.8,y:163},0).wait(1).to({rotation:-1.1,y:162.9},0).wait(1).to({rotation:-1.3,x:160.9,y:162.8},0).wait(1).to({rotation:-1.5,y:162.7},0).wait(1).to({rotation:-1.7,x:161,y:162.6},0).wait(1).to({rotation:-1.9,y:162.5},0).wait(1).to({rotation:-2.1,y:162.4},0).wait(1).to({rotation:-2.4,x:161.1,y:162.3},0).wait(1).to({rotation:-2.6,y:162.1},0).wait(1).to({rotation:-2.8,x:161.2,y:162},0).wait(1).to({rotation:-3,x:161.3,y:161.9},0).wait(1).to({rotation:-3.2,y:161.8},0).wait(1).to({rotation:-3.4,x:161.4,y:161.6},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.9,y:161.4},0).wait(1).to({rotation:-4.1,x:161.5,y:161.3},0).wait(1).to({rotation:-4.3,y:161.2},0).wait(1).to({rotation:-4.5,x:161.6,y:161.1},0).wait(1).to({rotation:-4.7,y:161},0).wait(1).to({rotation:-4.9,x:161.7,y:160.8},0).wait(1).to({rotation:-5.1,y:160.7},0).wait(1).to({rotation:-5.3,x:161.8,y:160.6},0).wait(1).to({rotation:-5.6,x:161.9,y:160.5},0).wait(1).to({rotation:-5.8,x:161.8,y:160.4},0).wait(1).to({rotation:-6,x:161.9,y:160.3},0).wait(1).to({rotation:-5.7,x:161.8,y:160.4},0).wait(1).to({rotation:-5.5,y:160.5},0).wait(1).to({rotation:-5.3,x:161.7,y:160.6},0).wait(1).to({rotation:-5,y:160.8},0).wait(1).to({rotation:-4.8,x:161.6,y:160.9},0).wait(1).to({rotation:-4.6,y:161.1},0).wait(1).to({rotation:-4.3,x:161.5,y:161.2},0).wait(1).to({rotation:-4.1,y:161.3},0).wait(1).to({rotation:-3.8,x:161.4,y:161.4},0).wait(1).to({rotation:-3.6,y:161.6},0).wait(1).to({rotation:-3.4,x:161.3,y:161.7},0).wait(1).to({rotation:-3.1,y:161.8},0).wait(1).to({rotation:-2.9,x:161.2,y:161.9},0).wait(1).to({rotation:-2.6,y:162.1},0).wait(1).to({rotation:-2.4,x:161.1,y:162.3},0).wait(1).to({rotation:-2.2,x:161,y:162.4},0).wait(1).to({rotation:-1.9,y:162.5},0).wait(1).to({rotation:-1.7,y:162.6},0).wait(1).to({rotation:-1.4,x:160.9,y:162.8},0).wait(1).to({rotation:-1.2,x:160.8,y:162.9},0).wait(1).to({rotation:-1,x:160.7,y:163},0).wait(1).to({rotation:-0.7,y:163.1},0).wait(1).to({rotation:-0.5,x:160.6,y:163.3},0).wait(1).to({rotation:-0.2,y:163.4},0).wait(1).to({rotation:0,x:160.5,y:163.5},0).wait(1));

	// Thumg
	this.instance_16 = new lib.Symbol28();
	this.instance_16.parent = this;
	this.instance_16.setTransform(187,131.5,1,1,0,0,0,5,3.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(63).to({_off:false},0).wait(1).to({x:186.6,y:131.9},0).wait(1).to({x:186.3,y:132.2},0).wait(1).to({x:185.9,y:132.6},0).wait(1).to({x:185.6,y:132.9},0).wait(1).to({x:185.2,y:133.3},0).wait(1).to({x:184.9,y:133.6},0).wait(1).to({x:184.5,y:134},0).wait(1).to({x:184.2,y:134.3},0).wait(1).to({x:183.8,y:134.7},0).wait(1).to({x:183.5,y:135},0).wait(1).to({x:183.1,y:135.4},0).wait(1).to({x:182.8,y:135.7},0).wait(1).to({x:182.4,y:136.1},0).wait(1).to({x:182.1,y:136.4},0).wait(1).to({x:181.7,y:136.8},0).wait(1).to({x:181.4,y:137.1},0).wait(1).to({x:181,y:137.5},0).wait(1).to({x:181.5,y:137},0).wait(1).to({x:182,y:136.5},0).wait(1).to({x:182.5,y:136},0).wait(1).to({x:183,y:135.5},0).wait(1).to({x:183.5,y:135},0).wait(1).to({x:184,y:134.5},0).wait(1).to({x:184.6,y:133.9},0).wait(1).to({x:185.1,y:133.4},0).wait(1).to({x:185.6,y:132.9},0).wait(1).to({x:186.1,y:132.4},0).wait(1).to({x:186.6,y:131.9},0).wait(1).to({x:187.1,y:131.4},0).wait(1).to({x:187.6,y:130.9},0).wait(1).to({x:187.5,y:131},0).wait(1).to({x:187.4,y:131.1},0).wait(1).to({x:187.3,y:131.2},0).wait(1).to({x:187.2,y:131.3},0).wait(1).to({x:187.1,y:131.4},0).wait(1).to({x:187,y:131.5},0).wait(1).to({x:186.9,y:131.6},0).wait(1).to({x:186.8,y:131.7},0).wait(1).to({x:186.7,y:131.8},0).wait(1).to({x:186.6,y:131.9},0).wait(1).to({x:186.5,y:132},0).wait(1).to({x:186.4,y:132.1},0).wait(1).to({x:186.3,y:132.2},0).wait(1).to({x:186.2,y:132.3},0).wait(1).to({x:186.1,y:132.4},0).wait(1).to({x:186,y:132.5},0).wait(1).to({x:185.9,y:132.6},0).wait(1).to({x:185.8,y:132.7},0).wait(1).to({x:185.7,y:132.8},0).wait(1).to({x:185.6,y:132.9},0).wait(1).to({x:185.5,y:133},0).wait(1).to({x:185.4,y:133.1},0).wait(1).to({x:185.3,y:133.2},0).wait(1).to({x:185.2,y:133.3},0).wait(1).to({x:185.1,y:133.4},0).wait(1).to({x:185,y:133.5},0).wait(1).to({x:184.9,y:133.6},0).wait(1).to({x:184.8,y:133.7},0).wait(1).to({x:184.3,y:134.2},0).wait(1).to({x:183.8,y:134.7},0).wait(1).to({x:183.3,y:135.2},0).wait(1).to({x:182.8,y:135.7},0).wait(1).to({x:182.3,y:136.2},0).wait(1).to({x:181.8,y:136.7},0).wait(1).to({x:181.3,y:137.2},0).wait(1).to({x:180.8,y:137.7},0).wait(1).to({x:181.6,y:136.9},0).wait(1).to({x:182.4,y:136.2},0).wait(1).to({x:183.1,y:135.4},0).wait(1).to({x:183.9,y:134.6},0).wait(1).to({x:184.7,y:133.8},0).wait(1).to({x:185.5,y:133.1},0).wait(1).to({x:186.2,y:132.3},0).wait(1).to({x:187,y:131.5},0).wait(1).to({x:186.6,y:132},0).wait(1).to({x:186.1,y:132.4},0).wait(1).to({x:185.7,y:132.9},0).wait(1).to({x:185.3,y:133.3},0).wait(1).to({x:184.9,y:133.8},0).wait(1).to({x:184.4,y:134.2},0).wait(1).to({x:184,y:134.7},0).wait(1).to({x:183.6,y:135.1},0).wait(1).to({x:183.2,y:135.6},0).wait(1).to({x:182.7,y:136},0).wait(1).to({x:182.3,y:136.5},0).wait(1).to({x:182.8,y:136},0).wait(1).to({x:183.4,y:135.5},0).wait(1).to({x:183.9,y:135},0).wait(1).to({x:184.4,y:134.5},0).wait(1).to({x:184.9,y:134},0).wait(1).to({x:185.5,y:133.5},0).wait(1).to({x:186,y:133},0).wait(1).to({x:186.5,y:132.5},0).wait(1).to({x:187.1,y:132},0).wait(1).to({x:187.6,y:131.5},0).wait(1).to({x:188.1,y:131},0).wait(1).to({x:188.6,y:130.5},0).wait(1).to({x:189.2,y:130},0).wait(1).to({x:189.7,y:129.5},0).wait(1).to({x:189.6,y:129.6},0).wait(1).to({x:189.4,y:129.7},0).wait(1).to({x:189.3,y:129.8},0).wait(1).to({x:189.1,y:129.9},0).wait(1).to({x:189,y:130.1},0).wait(1).to({x:188.8,y:130.2},0).wait(1).to({x:188.7,y:130.3},0).wait(1).to({x:188.5,y:130.4},0).wait(1).to({x:188.4,y:130.5},0).wait(1).to({x:188.2,y:130.6},0).wait(1).to({x:188.1,y:130.7},0).wait(1).to({x:187.9,y:130.8},0).wait(1).to({x:187.8,y:130.9},0).wait(1).to({x:187.6,y:131.1},0).wait(1).to({x:187.5,y:131.2},0).wait(1).to({x:187.3,y:131.3},0).wait(1).to({x:187.2,y:131.4},0).wait(1).to({x:187,y:131.5},0).wait(1));

	// phone Guy
	this.instance_17 = new lib.Symbol18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(132.9,140.3,1,1,0,0,0,56.5,74.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_18 = new lib.flash0ai_14();
	this.instance_18.parent = this;
	this.instance_18.setTransform(93,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},44).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},4).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(44).to({_off:false},0).wait(1).to({x:134.1,y:140.1,alpha:0.071},0).wait(1).to({x:135.2,y:140,alpha:0.143},0).wait(1).to({x:136.4,y:139.9,alpha:0.214},0).wait(1).to({x:137.5,y:139.8,alpha:0.286},0).wait(1).to({x:138.7,y:139.7,alpha:0.357},0).wait(1).to({x:139.8,y:139.6,alpha:0.429},0).wait(1).to({x:141,y:139.5,alpha:0.5},0).wait(1).to({x:142.2,y:139.3,alpha:0.571},0).wait(1).to({x:143.3,y:139.2,alpha:0.643},0).wait(1).to({x:144.5,y:139.1,alpha:0.714},0).wait(1).to({x:145.6,y:139,alpha:0.786},0).wait(1).to({x:146.8,y:138.9,alpha:0.857},0).wait(1).to({x:147.9,y:138.8,alpha:0.929},0).wait(1).to({x:149.1,y:138.7,alpha:1},0).wait(1).to({x:149.3,y:139},0).to({_off:true},4).wait(118));

	// Right-Arm
	this.instance_19 = new lib.Symbol24();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150.5,281.5,1,1,0,0,0,30.5,15.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(63).to({_off:false},0).wait(1).to({scaleX:1,rotation:0.8,x:150.4,y:281.9},0).wait(1).to({scaleX:1,rotation:1.6,x:150.2,y:282.3},0).wait(1).to({rotation:2.4,x:150.1,y:282.6},0).wait(1).to({scaleX:1,rotation:3.2,x:150,y:283.1},0).wait(1).to({scaleX:1,rotation:3.9,x:149.9,y:283.4},0).wait(1).to({scaleX:1,rotation:4.7,x:149.7,y:283.8},0).wait(1).to({rotation:5.5,x:149.6,y:284.2},0).wait(1).to({scaleX:1.01,rotation:6.3,x:149.5,y:284.6},0).wait(1).to({scaleX:1.01,rotation:7.1,x:149.4,y:284.9},0).wait(1).to({rotation:7.9,x:149.2,y:285.3},0).wait(1).to({scaleX:1.01,rotation:8.7,x:149.1,y:285.7},0).wait(1).to({scaleX:1.01,rotation:9.5,x:149,y:286},0).wait(1).to({scaleX:1.01,rotation:10.3,x:148.9,y:286.4},0).wait(1).to({scaleX:1.01,rotation:11.1,x:148.8,y:286.8},0).wait(1).to({rotation:11.8,x:148.6,y:287.2},0).wait(1).to({scaleX:1.01,rotation:12.6,x:148.4,y:287.5},0).wait(1).to({scaleX:1.01,rotation:13.4,y:287.9},0).wait(1).to({rotation:14.2,x:148.2,y:288.4},0).wait(1).to({scaleX:1.01,rotation:15,x:148.1,y:288.7},0).wait(1).to({scaleX:1.01,rotation:13.7,y:288.1},0).wait(1).to({scaleX:1.02,rotation:12.5,y:287.5},0).wait(1).to({scaleX:1.02,rotation:11.2,y:286.9},0).wait(1).to({rotation:9.9,y:286.3},0).wait(1).to({scaleX:1.02,rotation:8.7,y:285.7},0).wait(1).to({scaleX:1.02,rotation:7.4,y:285.1},0).wait(1).to({rotation:6.1,y:284.5},0).wait(1).to({scaleX:1.02,rotation:4.9,y:283.9},0).wait(1).to({scaleX:1.02,rotation:3.6,y:283.3},0).wait(1).to({scaleX:1.02,rotation:2.4,y:282.7},0).wait(1).to({scaleX:1.02,rotation:1.1,y:282.1},0).wait(1).to({rotation:-0.2,y:281.5},0).wait(1).to({scaleX:1.02,rotation:-0.7,y:281.3},0).wait(1).to({scaleX:1.02,rotation:-1.3,x:148,y:281},0).wait(1).to({rotation:-1.9,y:280.8},0).wait(1).to({scaleX:1.03,rotation:-2.5,x:147.9,y:280.5},0).wait(1).to({scaleX:1.03,rotation:-3,y:280.3},0).wait(1).to({scaleX:1.03,rotation:-3.6,x:148,y:280},0).wait(1).to({rotation:-4.2,x:147.9,y:279.8},0).wait(1).to({scaleX:1.03,rotation:-4.8,y:279.5},0).wait(1).to({scaleX:1.03,rotation:-5.3,y:279.3},0).wait(1).to({scaleX:1.03,rotation:-5.9,x:147.8,y:279},0).wait(1).to({rotation:-6.5,y:278.8},0).wait(1).to({scaleX:1.03,rotation:-7,x:147.7,y:278.6},0).wait(1).to({scaleX:1.03,rotation:-7.6,y:278.3},0).wait(1).to({scaleX:1.03,rotation:-8.2,y:278},0).wait(1).to({rotation:-8.8,x:147.6,y:277.8},0).wait(1).to({scaleX:1.03,rotation:-9.3,y:277.6},0).wait(1).to({scaleX:1.04,rotation:-9.9,y:277.3},0).wait(1).to({scaleX:1.04,rotation:-10.5,x:147.5,y:277.1},0).wait(1).to({rotation:-11,y:276.8},0).wait(1).to({scaleX:1.04,rotation:-11.6,x:147.4,y:276.6},0).wait(1).to({scaleX:1.04,rotation:-12.2,y:276.3},0).wait(1).to({scaleX:1.04,rotation:-12.8,y:276.1},0).wait(1).to({rotation:-13.3,y:275.9},0).wait(1).to({scaleX:1.04,rotation:-13.9,y:275.6},0).wait(1).to({scaleX:1.04,rotation:-14.5,x:147.3,y:275.3},0).wait(1).to({scaleX:1.04,rotation:-15,y:275.1},0).wait(1).to({rotation:-14.6,y:275.3},0).wait(1).to({scaleX:1.04,rotation:-14.1,y:275.6},0).wait(1).to({scaleX:1.05,rotation:-13.6,x:147.4,y:275.8},0).wait(1).to({scaleX:1.05,rotation:-13.1,y:276},0).wait(1).to({rotation:-12.6,y:276.3},0).wait(1).to({scaleX:1.05,rotation:-12.1,x:147.5,y:276.5},0).wait(1).to({scaleX:1.05,rotation:-11.6,y:276.7},0).wait(1).to({scaleX:1.05,rotation:-11.2,y:276.9},0).wait(1).to({rotation:-10.7,y:277.2},0).wait(1).to({scaleX:1.05,rotation:-10.2,x:147.6,y:277.4},0).wait(1).to({scaleX:1.05,rotation:-9.7,y:277.7},0).wait(1).to({scaleX:1.05,rotation:-9.2,y:277.9},0).wait(1).to({rotation:-8.7,x:147.7,y:278.1},0).wait(1).to({scaleX:1.05,rotation:-8.2,x:147.6,y:278.4},0).wait(1).to({scaleX:1.05,rotation:-7.8,x:147.7,y:278.6},0).wait(1).to({scaleX:1.06,rotation:-7.3,y:278.8},0).wait(1).to({rotation:-6.8,y:279.1},0).wait(1).to({scaleX:1.06,rotation:-6.3,y:279.3},0).wait(1).to({scaleX:1.06,rotation:-5.8,y:279.5},0).wait(1).to({scaleX:1.06,rotation:-5.3,x:147.8,y:279.8},0).wait(1).to({rotation:-4.9,y:280},0).wait(1).to({scaleX:1.06,rotation:-4.4,x:147.9,y:280.2},0).wait(1).to({scaleX:1.06,rotation:-3.9,y:280.4},0).wait(1).to({scaleX:1.06,rotation:-3.4,y:280.7},0).wait(1).to({rotation:-2.9,x:148,y:280.9},0).wait(1).to({scaleX:1.06,rotation:-2.4,x:147.9,y:281.2},0).wait(1).to({scaleX:1.06,rotation:-1.9,x:148,y:281.4},0).wait(1).to({scaleX:1.06,rotation:-1.5,y:281.6},0).wait(1).to({rotation:-1,y:281.8},0).wait(1).to({scaleX:1.07,rotation:-0.5,x:148.1,y:282},0).wait(1).to({scaleX:1.07,rotation:0,y:282.3},0).wait(1).to({scaleX:1.07,x:148.3},0).wait(1).to({x:148.4,y:282.2},0).wait(1).to({scaleX:1.07,x:148.5},0).wait(1).to({scaleX:1.07,x:148.7,y:282.1},0).wait(1).to({scaleX:1.07,x:148.8},0).wait(1).to({x:148.9,y:282},0).wait(1).to({scaleX:1.07,x:149.1},0).wait(1).to({scaleX:1.07,x:149.2,y:281.9},0).wait(1).to({scaleX:1.07,x:149.4},0).wait(1).to({x:149.5,y:281.8},0).wait(1).to({scaleX:1.07,x:149.6},0).wait(1).to({scaleX:1.08,x:149.8,y:281.7},0).wait(1).to({scaleX:1.08,x:149.9},0).wait(1).to({x:150.1,y:281.6},0).wait(1).to({scaleX:1.08,x:150.2},0).wait(1).to({scaleX:1.08,x:150.4,y:281.5},0).wait(1).to({scaleX:1.08,x:150.5},0).wait(1).to({scaleX:1.07},0).wait(1).to({scaleX:1.07},0).wait(1).to({scaleX:1.06},0).wait(1).to({scaleX:1.05},0).wait(1).to({scaleX:1.05},0).wait(1).to({scaleX:1.04},0).wait(1).to({scaleX:1.03},0).wait(1).to({scaleX:1.03},0).wait(1).to({scaleX:1.02},0).wait(1).to({scaleX:1.01},0).wait(1).to({scaleX:1.01},0).wait(1).to({scaleX:1},0).wait(1));

	// Penicl
	this.instance_20 = new lib.Symbol23();
	this.instance_20.parent = this;
	this.instance_20.setTransform(182,274.5,1,1,0,0,0,20,19.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(63).to({_off:false},0).wait(1).to({rotation:3,x:181},0).wait(1).to({rotation:6,x:180.1},0).wait(1).to({rotation:9,x:179.1},0).wait(1).to({rotation:12,x:178.2},0).wait(1).to({rotation:15,x:177.2},0).wait(1).to({rotation:17.1,x:176.8,y:275.7},0).wait(1).to({rotation:19.3,x:176.4,y:276.9},0).wait(1).to({rotation:21.4,x:176,y:278.1},0).wait(1).to({rotation:23.6,x:175.6,y:279.3},0).wait(1).to({rotation:25.7,x:175.2,y:280.5},0).wait(1).to({rotation:27.8,x:174.8,y:281.7},0).wait(1).to({rotation:30,x:174.4,y:282.9},0).wait(1).to({rotation:32.1,x:174.1,y:284.1},0).wait(1).to({rotation:34.2,x:173.7,y:285.3},0).wait(1).to({rotation:36.4,x:173.3,y:286.5},0).wait(1).to({rotation:38.5,x:172.8,y:287.7},0).wait(1).to({rotation:40.7,x:172.4,y:288.9},0).wait(1).to({rotation:42.8,x:172,y:290.1},0).wait(1).to({rotation:44.9,x:171.7,y:291.3},0).wait(1).to({rotation:41.2,x:172.1,y:289.9},0).wait(1).to({rotation:37.5,x:172.6,y:288.5},0).wait(1).to({rotation:33.7,x:173.1,y:287.1},0).wait(1).to({rotation:30,x:173.5,y:285.7},0).wait(1).to({rotation:26.2,x:174,y:284.3},0).wait(1).to({rotation:22.5,x:174.5,y:282.9},0).wait(1).to({rotation:18.7,x:174.9,y:281.5},0).wait(1).to({rotation:15,x:175.3,y:280.1},0).wait(1).to({rotation:11.2,x:175.8,y:278.7},0).wait(1).to({rotation:7.5,x:176.3,y:277.3},0).wait(1).to({rotation:3.7,x:176.8,y:275.9},0).wait(1).to({rotation:0,x:177.2,y:274.5},0).wait(1).to({rotation:1.2,x:176.9,y:274.1},0).wait(1).to({rotation:2.3,x:176.6,y:273.7},0).wait(1).to({rotation:3.5,x:176.4,y:273.2},0).wait(1).to({rotation:4.6,x:176.1,y:272.8},0).wait(1).to({rotation:5.8,x:175.8,y:272.3},0).wait(1).to({rotation:6.9,x:175.5,y:271.9},0).wait(1).to({rotation:8.1,x:175.2,y:271.5},0).wait(1).to({rotation:9.2,x:175,y:271.1},0).wait(1).to({rotation:10.4,x:174.7,y:270.6},0).wait(1).to({rotation:11.5,x:174.4,y:270.2},0).wait(1).to({rotation:12.7,x:174.2,y:269.8},0).wait(1).to({rotation:13.8,x:173.9,y:269.3},0).wait(1).to({rotation:15,x:173.6,y:268.9},0).wait(1).to({rotation:16.1,x:173.3,y:268.5},0).wait(1).to({rotation:17.3,x:173,y:268},0).wait(1).to({rotation:18.4,x:172.8,y:267.6},0).wait(1).to({rotation:19.6,x:172.5,y:267.2},0).wait(1).to({rotation:20.7,x:172.2,y:266.7},0).wait(1).to({rotation:21.9,x:171.9,y:266.3},0).wait(1).to({rotation:23,x:171.7,y:265.9},0).wait(1).to({rotation:24.2,x:171.4,y:265.5},0).wait(1).to({rotation:25.3,x:171.1,y:265},0).wait(1).to({rotation:26.5,x:170.8,y:264.6},0).wait(1).to({rotation:27.6,x:170.5,y:264.2},0).wait(1).to({rotation:28.8,x:170.3,y:263.7},0).wait(1).to({rotation:29.9,x:170,y:263.3},0).wait(1).to({rotation:28.5,x:170.2,y:263.7},0).wait(1).to({rotation:27,x:170.3,y:264},0).wait(1).to({rotation:25.5,x:170.5,y:264.4},0).wait(1).to({rotation:24.1,x:170.6,y:264.7},0).wait(1).to({rotation:22.6,x:170.8,y:265.1},0).wait(1).to({rotation:21.2,x:170.9,y:265.5},0).wait(1).to({rotation:19.7,x:171,y:265.8},0).wait(1).to({rotation:18.3,x:171.3,y:266.2},0).wait(1).to({rotation:16.8,x:171.4,y:266.5},0).wait(1).to({rotation:15.4,x:171.6,y:266.9},0).wait(1).to({rotation:13.9,x:171.7,y:267.3},0).wait(1).to({rotation:12.5,x:171.9,y:267.6},0).wait(1).to({rotation:11,x:172,y:268},0).wait(1).to({rotation:9.6,x:172.1,y:268.4},0).wait(1).to({rotation:8.1,x:172.3,y:268.7},0).wait(1).to({rotation:6.7,x:172.5,y:269.1},0).wait(1).to({rotation:5.2,x:172.6,y:269.4},0).wait(1).to({rotation:3.8,x:172.8,y:269.8},0).wait(1).to({rotation:2.3,x:172.9,y:270.2},0).wait(1).to({rotation:0.9,x:173.1,y:270.5},0).wait(1).to({rotation:-0.6,x:173.3,y:270.9},0).wait(1).to({rotation:-2,x:173.4,y:271.3},0).wait(1).to({rotation:-3.5,x:173.6,y:271.6},0).wait(1).to({rotation:-4.9,x:173.8,y:272},0).wait(1).to({rotation:-6.4,x:173.9,y:272.4},0).wait(1).to({rotation:-7.8,x:174,y:272.7},0).wait(1).to({rotation:-9.3,x:174.2,y:273},0).wait(1).to({rotation:-10.7,x:174.4,y:273.4},0).wait(1).to({rotation:-12.2,x:174.5,y:273.8},0).wait(1).to({rotation:-13.6,x:174.7,y:274.2},0).wait(1).to({rotation:-15.1,x:174.8,y:274.5},0).wait(1).to({rotation:-13.4,x:175,y:274.4},0).wait(1).to({rotation:-11.8,x:175.2},0).wait(1).to({rotation:-10.1,x:175.3},0).wait(1).to({rotation:-8.4,x:175.5,y:274.3},0).wait(1).to({rotation:-6.7,x:175.7},0).wait(1).to({rotation:-5.1,x:175.9,y:274.2},0).wait(1).to({rotation:-3.4,x:176},0).wait(1).to({rotation:-1.7,x:176.2},0).wait(1).to({rotation:-0.1,x:176.4,y:274.1},0).wait(1).to({rotation:1.6,x:176.6},0).wait(1).to({rotation:3.3,x:176.8,y:274},0).wait(1).to({rotation:4.9,x:176.9},0).wait(1).to({rotation:6.6,x:177.1,y:273.9},0).wait(1).to({rotation:8.3,x:177.3},0).wait(1).to({rotation:10,x:177.5,y:273.8},0).wait(1).to({rotation:11.6,x:177.6},0).wait(1).to({rotation:13.3,x:177.8},0).wait(1).to({rotation:15,x:178,y:273.7},0).wait(1).to({rotation:13.6,x:178.4,y:273.8},0).wait(1).to({rotation:12.2,x:178.7},0).wait(1).to({rotation:10.9,x:179.1,y:273.9},0).wait(1).to({rotation:9.5,x:179.4,y:274},0).wait(1).to({rotation:8.2,x:179.8,y:274.1},0).wait(1).to({rotation:6.8,x:180.2},0).wait(1).to({rotation:5.4,x:180.5,y:274.2},0).wait(1).to({rotation:4.1,x:180.9,y:274.3},0).wait(1).to({rotation:2.7,x:181.3,y:274.4},0).wait(1).to({rotation:1.4,x:181.7},0).wait(1).to({rotation:0,x:182,y:274.5},0).wait(1));

	// Left-Arm
	this.instance_21 = new lib.Symbol25();
	this.instance_21.parent = this;
	this.instance_21.setTransform(133,237.5,1,1,0,0,0,24,27.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(63).to({_off:false},0).wait(1).to({rotation:-0.3},0).wait(1).to({scaleY:1,rotation:-0.7},0).wait(1).to({rotation:-1,x:133.1},0).wait(1).to({rotation:-1.4},0).wait(1).to({scaleY:1,rotation:-1.7},0).wait(1).to({rotation:-2},0).wait(1).to({scaleY:1,rotation:-2.4,x:133.2},0).wait(1).to({rotation:-2.7,x:133.1},0).wait(1).to({rotation:-3},0).wait(1).to({scaleY:1,rotation:-3.4},0).wait(1).to({rotation:-3.7,x:133.2},0).wait(1).to({rotation:-4.1},0).wait(1).to({scaleY:1,rotation:-4.4},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-5.1},0).wait(1).to({scaleY:0.99,rotation:-5.4,x:133.3},0).wait(1).to({rotation:-5.8},0).wait(1).to({scaleY:0.99,rotation:-6.1},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-6.8},0).wait(1).to({scaleY:0.99,rotation:-7.1},0).wait(1).to({rotation:-7.4,x:133.4},0).wait(1).to({rotation:-7.8},0).wait(1).to({scaleY:0.99,rotation:-8.1},0).wait(1).to({rotation:-8.5},0).wait(1).to({rotation:-8.4,y:237.7},0).wait(1).to({scaleY:0.99,x:133.5,y:237.9},0).wait(1).to({y:238.1},0).wait(1).to({scaleY:0.99,y:238.2},0).wait(1).to({x:133.6,y:238.4},0).wait(1).to({x:133.5,y:238.6},0).wait(1).to({scaleY:0.99,x:133.6,y:238.7},0).wait(1).to({y:238.9},0).wait(1).to({y:239},0).wait(1).to({scaleY:0.99,x:133.7,y:239.2},0).wait(1).to({rotation:-8.3,y:239.4},0).wait(1).to({y:239.6},0).wait(1).to({scaleY:0.99,y:239.8},0).wait(1).to({y:239.9},0).wait(1).to({scaleY:0.99,x:133.8,y:240.1},0).wait(1).to({y:240.3},0).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-8.1,y:240.4},0).wait(1).to({scaleY:0.99,rotation:-7.9,x:133.7},0).wait(1).to({rotation:-7.8},0).wait(1).to({rotation:-7.7},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.5},0).wait(1).to({scaleY:0.99,rotation:-7.4},0).wait(1).to({rotation:-7.3},0).wait(1).to({rotation:-7.2},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-6.9,x:133.6,y:240.5},0).wait(1).to({scaleY:0.99,rotation:-6.8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-6.4},0).wait(1).to({scaleY:0.99,rotation:-6.3,x:133.5},0).wait(1).to({rotation:-6.1,y:240.6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-5.9},0).wait(1).to({rotation:-5.8},0).wait(1).to({scaleY:0.99,rotation:-5.7},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5.2},0).wait(1).to({scaleY:0.99,rotation:-5.1,x:133.4,y:240.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-4.8,x:133.3},0).wait(1).to({rotation:-4.7},0).wait(1).to({scaleY:0.99,rotation:-4.6,y:240.8},0).wait(1).to({rotation:-4.4},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4.1},0).wait(1).to({scaleY:0.99,rotation:-4,y:240.9},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-3.6,y:240.8},0).wait(1).to({rotation:-3.5,x:133.2},0).wait(1).to({scaleY:0.99,rotation:-3.4},0).wait(1).to({rotation:-3.3,y:240.9},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-3.1,x:133.1},0).wait(1).to({rotation:-3},0).wait(1).to({scaleY:1,rotation:-2.9},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.6,y:241},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.4},0).wait(1).to({scaleY:1,rotation:-2.3},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-2,y:241.1},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.7,x:133},0).wait(1).to({scaleY:1,rotation:-1.6},0).wait(1).to({rotation:-1.5,y:240.9},0).wait(1).to({rotation:-1.4,y:240.7},0).wait(1).to({rotation:-1.3,y:240.5},0).wait(1).to({rotation:-1.2,y:240.2},0).wait(1).to({scaleY:1,rotation:-1.1,y:240},0).wait(1).to({rotation:-1,y:239.8},0).wait(1).to({rotation:-0.9,y:239.6},0).wait(1).to({y:239.4},0).wait(1).to({rotation:-0.8,y:239.2},0).wait(1).to({scaleY:1,rotation:-0.7,y:239},0).wait(1).to({rotation:-0.6,y:238.7},0).wait(1).to({rotation:-0.5,y:238.5},0).wait(1).to({rotation:-0.4,y:238.4},0).wait(1).to({rotation:-0.3,y:238.2},0).wait(1).to({scaleY:1,rotation:-0.2,y:237.9},0).wait(1).to({rotation:-0.1,y:237.7},0).wait(1).to({rotation:0,y:237.5},0).wait(1));

	// Drawing Guy
	this.instance_22 = new lib.Symbol17();
	this.instance_22.parent = this;
	this.instance_22.setTransform(86,254,1,1,0,0,0,81,115);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.instance_23 = new lib.flash0ai_21();
	this.instance_23.parent = this;
	this.instance_23.setTransform(38,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},36).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},10).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(36).to({_off:false},0).wait(1).to({x:88.2,alpha:0.063},0).wait(1).to({x:90.4,y:254.1,alpha:0.125},0).wait(1).to({x:92.6,y:254.2,alpha:0.188},0).wait(1).to({x:94.8,y:254.3,alpha:0.25},0).wait(1).to({x:97,y:254.4,alpha:0.313},0).wait(1).to({x:99.1,y:254.5,alpha:0.375},0).wait(1).to({x:101.3,alpha:0.438},0).wait(1).to({x:103.5,y:254.6,alpha:0.5},0).wait(1).to({x:105.7,y:254.7,alpha:0.563},0).wait(1).to({x:107.9,y:254.8,alpha:0.625},0).wait(1).to({x:110.1,y:254.9,alpha:0.688},0).wait(1).to({x:112.3,y:255,alpha:0.75},0).wait(1).to({x:114.5,alpha:0.813},0).wait(1).to({x:116.7,y:255.1,alpha:0.875},0).wait(1).to({x:118.9,y:255.2,alpha:0.938},0).wait(1).to({x:121.1,y:255.3,alpha:1},0).wait(1).to({x:120.6,y:255},0).to({_off:true},10).wait(118));

	// Chair
	this.instance_24 = new lib.Symbol21();
	this.instance_24.parent = this;
	this.instance_24.setTransform(393,92,1,1,0,0,0,36,44);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.instance_25 = new lib.flash0ai_23();
	this.instance_25.parent = this;
	this.instance_25.setTransform(348,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},51).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(51).to({_off:false},0).wait(1).to({x:392.2,alpha:0.091},0).wait(1).to({x:391.5,alpha:0.182},0).wait(1).to({x:390.7,alpha:0.273},0).wait(1).to({x:389.9,alpha:0.364},0).wait(1).to({x:389.2,alpha:0.455},0).wait(1).to({x:388.4,alpha:0.545},0).wait(1).to({x:387.7,alpha:0.636},0).wait(1).to({x:386.9,alpha:0.727},0).wait(1).to({x:386.1,alpha:0.818},0).wait(1).to({x:385.4,alpha:0.909},0).wait(1).to({x:384.6,alpha:1},0).to({_off:true},1).wait(118));

	// Left Arm
	this.instance_26 = new lib.Symbol26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(384.5,323,1,1,0,0,0,28.5,24);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(63).to({_off:false},0).wait(1).to({rotation:-0.6,y:323.2},0).wait(1).to({rotation:-1.2,x:384.6,y:323.5},0).wait(1).to({rotation:-1.9,y:323.6},0).wait(1).to({rotation:-2.5,y:323.9},0).wait(1).to({rotation:-3.1,x:384.7,y:324.1},0).wait(1).to({rotation:-3.7,y:324.3},0).wait(1).to({rotation:-4.4,x:384.8,y:324.6},0).wait(1).to({rotation:-5,y:324.7},0).wait(1).to({rotation:-5.6,y:325},0).wait(1).to({rotation:-6.2,x:384.9,y:325.2},0).wait(1).to({rotation:-6.9,y:325.4},0).wait(1).to({rotation:-7.5,y:325.6},0).wait(1).to({rotation:-8.1,x:385,y:325.8},0).wait(1).to({rotation:-8.7,y:326},0).wait(1).to({rotation:-9.4,y:326.3},0).wait(1).to({rotation:-10,y:326.5},0).wait(1).to({rotation:-10.6,x:385.1,y:326.7},0).wait(1).to({rotation:-11.2,x:385.2,y:326.9},0).wait(1).to({rotation:-11.9,y:327.1},0).wait(1).to({rotation:-12.5,y:327.4},0).wait(1).to({rotation:-13.1,y:327.5},0).wait(1).to({rotation:-13.7,x:385.3,y:327.8},0).wait(1).to({rotation:-14.4,y:328},0).wait(1).to({rotation:-15,x:385.4,y:328.2},0).wait(1).to({rotation:-15.2,x:385.2,y:328.3},0).wait(1).to({rotation:-15.5,x:385.1,y:328.5},0).wait(1).to({rotation:-15.7,x:385,y:328.7},0).wait(1).to({rotation:-15.9,x:384.9,y:328.9},0).wait(1).to({rotation:-16.1,x:384.8,y:329},0).wait(1).to({rotation:-16.4,x:384.6,y:329.2},0).wait(1).to({rotation:-16.6,x:384.5,y:329.3},0).wait(1).to({rotation:-16.8,x:384.4,y:329.5},0).wait(1).to({rotation:-17,x:384.3,y:329.6},0).wait(1).to({rotation:-17.3,x:384.2,y:329.8},0).wait(1).to({rotation:-17.5,x:384.1,y:330},0).wait(1).to({rotation:-15.4,x:384.3,y:329.2},0).wait(1).to({rotation:-13.2,x:384.6,y:328.5},0).wait(1).to({rotation:-11.1,x:384.8,y:327.8},0).wait(1).to({rotation:-9,x:385.1,y:327.1},0).wait(1).to({rotation:-6.8,x:385.4,y:326.4},0).wait(1).to({rotation:-4.7,x:385.6,y:325.6},0).wait(1).to({rotation:-2.6,x:385.9,y:324.9},0).wait(1).to({rotation:-0.4,x:386.2,y:324.2},0).wait(1).to({rotation:1.7,x:386.5,y:323.5},0).wait(1).to({rotation:3.8,x:386.7,y:322.7},0).wait(1).to({rotation:6,x:387,y:322},0).wait(1).to({rotation:8.1,x:387.2,y:321.3},0).wait(1).to({rotation:10.2,x:387.5,y:320.5},0).wait(1).to({rotation:12.3,x:387.7,y:319.9},0).wait(1).to({rotation:14.5,x:388,y:319.2},0).wait(1).to({rotation:13.4,x:387.8,y:319.4},0).wait(1).to({rotation:12.3,x:387.6,y:319.7},0).wait(1).to({rotation:11.3,x:387.4,y:319.9},0).wait(1).to({rotation:10.2,x:387.2,y:320.2},0).wait(1).to({rotation:9.1,x:387,y:320.5},0).wait(1).to({rotation:8.1,x:386.8,y:320.7},0).wait(1).to({rotation:7,x:386.7,y:320.9},0).wait(1).to({rotation:5.9,x:386.4,y:321.2},0).wait(1).to({rotation:4.9,x:386.2,y:321.5},0).wait(1).to({rotation:3.8,x:386,y:321.8},0).wait(1).to({rotation:2.7,x:385.8,y:322},0).wait(1).to({rotation:1.7,x:385.6,y:322.3},0).wait(1).to({rotation:0.6,x:385.4,y:322.6},0).wait(1).to({rotation:-0.5,x:385.2,y:322.9},0).wait(1).to({rotation:-1.5,x:385,y:323.2},0).wait(1).to({rotation:-2.6,x:384.8,y:323.4},0).wait(1).to({rotation:-3.7,x:384.7,y:323.7},0).wait(1).to({rotation:-4.8,x:384.4,y:323.9},0).wait(1).to({rotation:-5.8,x:384.2,y:324.2},0).wait(1).to({rotation:-6.9,x:384.1,y:324.5},0).wait(1).to({rotation:-8,x:383.8,y:324.7},0).wait(1).to({rotation:-7.6,x:383.9},0).wait(1).to({rotation:-7.1,y:324.6},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.3,x:384},0).wait(1).to({rotation:-5.9,y:324.5},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.1,x:384.1,y:324.4},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.3,y:324.3},0).wait(1).to({rotation:-3.9,x:384.2},0).wait(1).to({rotation:-3.5,y:324.2},0).wait(1).to({rotation:-3.1,x:384.3},0).wait(1).to({rotation:-2.7,y:324.1},0).wait(1).to({rotation:-2.3,x:384.4,y:324.2},0).wait(1).to({rotation:-1.9,y:324.1},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1,x:384.5,y:324},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.2,y:323.9},0).wait(1).to({rotation:0.2},0).wait(1).to({x:384.6,y:323.8},0).wait(3).to({y:323.7},0).wait(1).to({rotation:0.1},0).wait(1).to({x:384.5,y:323.6},0).wait(3).to({y:323.5},0).wait(4).to({y:323.4},0).wait(3).to({y:323.3},0).wait(3).to({rotation:0,y:323.2},0).wait(2).to({y:323.1},0).wait(4).to({y:323},0).wait(2));

	// Laptop Guy
	this.instance_27 = new lib.Symbol16();
	this.instance_27.parent = this;
	this.instance_27.setTransform(476.3,292.6,1,1,0,0,0,64.5,121.5);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.instance_28 = new lib.flash0ai_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(355,169);

	this.instance_29 = new lib.flash0ai_17();
	this.instance_29.parent = this;
	this.instance_29.setTransform(383,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27}]},36).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},10).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(36).to({_off:false},0).wait(1).to({x:472.8,alpha:0.063},0).wait(1).to({x:469.4,y:292.5,alpha:0.125},0).wait(1).to({x:465.9,alpha:0.188},0).wait(1).to({x:462.5,y:292.4,alpha:0.25},0).wait(1).to({x:459,alpha:0.313},0).wait(1).to({x:455.5,y:292.3,alpha:0.375},0).wait(1).to({x:452.1,alpha:0.438},0).wait(1).to({x:448.6,alpha:0.5},0).wait(1).to({x:445.1,y:292.2,alpha:0.563},0).wait(1).to({x:441.7,alpha:0.625},0).wait(1).to({x:438.2,y:292.1,alpha:0.688},0).wait(1).to({x:434.8,alpha:0.75},0).wait(1).to({x:431.3,y:292,alpha:0.813},0).wait(1).to({x:427.8,alpha:0.875},0).wait(1).to({x:424.4,y:291.9,alpha:0.938},0).wait(1).to({x:420.9,alpha:1},0).to({_off:true},1).wait(128));

	// Right Arm
	this.instance_30 = new lib.Symbol27();
	this.instance_30.parent = this;
	this.instance_30.setTransform(418.6,258.4,1,1,0,0,0,49.5,12.4);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(63).to({_off:false},0).wait(1).to({regX:25,regY:16,scaleX:1.02,scaleY:0.99,rotation:-1.1,x:393.6,y:262.3},0).wait(1).to({scaleX:1.03,scaleY:0.99,rotation:-2.1,x:393.2,y:262.7},0).wait(1).to({scaleX:1.05,scaleY:0.98,rotation:-3.2,x:392.8,y:263.1},0).wait(1).to({scaleX:1.06,scaleY:0.97,rotation:-4.3,x:392.3,y:263.5},0).wait(1).to({scaleX:1.08,scaleY:0.96,rotation:-5.4,x:391.9,y:263.9},0).wait(1).to({scaleX:1.1,scaleY:0.96,rotation:-6.4,x:391.4,y:264.3},0).wait(1).to({scaleX:1.11,scaleY:0.95,rotation:-7.5,x:391,y:264.8},0).wait(1).to({scaleX:1.13,scaleY:0.94,rotation:-8.6,x:390.6,y:265.2},0).wait(1).to({scaleX:1.14,scaleY:0.93,rotation:-9.7,x:390.2,y:265.6},0).wait(1).to({scaleX:1.16,scaleY:0.93,rotation:-10.7,x:389.8,y:266.1},0).wait(1).to({scaleX:1.15,scaleY:0.93,rotation:-11.8,x:390,y:266.6},0).wait(1).to({scaleX:1.15,scaleY:0.93,rotation:-12.9,y:267},0).wait(1).to({scaleX:1.15,scaleY:0.93,rotation:-14,x:390.2,y:267.4},0).wait(1).to({scaleX:1.14,scaleY:0.94,rotation:-15,x:390.3,y:267.8},0).wait(1).to({scaleX:1.14,scaleY:0.94,rotation:-16.1,x:390.4,y:268.2},0).wait(1).to({scaleX:1.13,scaleY:0.94,rotation:-17.2,x:390.6,y:268.6},0).wait(1).to({scaleX:1.13,scaleY:0.94,rotation:-18.3,x:390.8,y:268.9},0).wait(1).to({scaleX:1.13,scaleY:0.95,rotation:-19.3,x:391,y:269.3},0).wait(1).to({scaleX:1.12,scaleY:0.95,rotation:-20.4,x:391.1,y:269.7},0).wait(1).to({scaleX:1.12,scaleY:0.95,rotation:-21.5,x:391.3,y:270},0).wait(1).to({scaleX:1.11,scaleY:0.95,rotation:-22.5,x:391.5,y:270.4},0).wait(1).to({scaleX:1.11,scaleY:0.96,rotation:-22.2,x:391.6,y:270.2},0).wait(1).to({scaleX:1.11,scaleY:0.96,rotation:-21.8,y:270},0).wait(1).to({scaleX:1.1,scaleY:0.96,rotation:-21.4,y:269.9},0).wait(1).to({scaleX:1.1,scaleY:0.97,rotation:-21,x:391.7,y:269.7},0).wait(1).to({scaleX:1.09,scaleY:0.97,rotation:-20.7,y:269.5},0).wait(1).to({scaleX:1.09,scaleY:0.97,rotation:-20.3,x:391.8,y:269.3},0).wait(1).to({scaleX:1.09,scaleY:0.97,rotation:-19.9,x:391.9,y:269.2},0).wait(1).to({scaleX:1.08,scaleY:0.98,rotation:-19.5,y:269},0).wait(1).to({scaleX:1.08,scaleY:0.98,rotation:-19.2,y:268.9},0).wait(1).to({scaleX:1.07,scaleY:0.98,rotation:-18.8,x:392,y:268.7},0).wait(1).to({scaleX:1.07,scaleY:0.98,rotation:-18.4,y:268.6},0).wait(1).to({scaleX:1.06,scaleY:0.99,rotation:-18,x:392.1,y:268.4},0).wait(1).to({scaleX:1.06,scaleY:0.99,rotation:-17.6,x:392.2,y:268.2},0).wait(1).to({scaleX:1.06,scaleY:0.99,rotation:-17.3,y:268.1},0).wait(1).to({scaleX:1.05,scaleY:0.99,rotation:-16.9,y:267.9},0).wait(1).to({scaleX:1.05,scaleY:1,rotation:-16.5,x:392.3,y:267.8},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:-16.1,x:392.4,y:267.6},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:-15.8,y:267.4},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:-15.4,x:392.5,y:267.3},0).wait(1).to({scaleX:1.03,scaleY:1.01,rotation:-15,x:392.6,y:267.1},0).wait(1).to({scaleX:1.04,rotation:-15.1,x:392.5,y:267.2},0).wait(1).to({scaleX:1.04,rotation:-15.3,y:267.3},0).wait(1).to({scaleX:1.05,rotation:-15.4,x:392.4,y:267.4},0).wait(1).to({scaleX:1.05,rotation:-15.5,y:267.5},0).wait(1).to({scaleX:1.05,rotation:-15.6,x:392.3,y:267.6},0).wait(1).to({scaleX:1.06,rotation:-15.8,y:267.7},0).wait(1).to({scaleX:1.06,rotation:-15.9,x:392.2,y:267.8},0).wait(1).to({scaleX:1.07,rotation:-16,y:267.9},0).wait(1).to({scaleX:1.07,rotation:-16.1,y:268},0).wait(1).to({scaleX:1.08,rotation:-16.3,x:392.1,y:268.1},0).wait(1).to({scaleX:1.08,rotation:-16.4,y:268.2},0).wait(1).to({scaleX:1.09,rotation:-16.5,x:392,y:268.3},0).wait(1).to({scaleX:1.09,rotation:-16.6,y:268.4},0).wait(1).to({scaleX:1.09,rotation:-16.8,y:268.5},0).wait(1).to({scaleX:1.1,rotation:-16.9,x:391.9,y:268.6},0).wait(1).to({scaleX:1.1,rotation:-17,x:391.8,y:268.7},0).wait(1).to({scaleX:1.11,rotation:-17.1,y:268.8},0).wait(1).to({scaleX:1.11,rotation:-17.3,y:268.9},0).wait(1).to({scaleX:1.12,rotation:-16.6,x:391.6,y:268.7},0).wait(1).to({scaleX:1.12,rotation:-15.9,x:391.4,y:268.4},0).wait(1).to({scaleX:1.13,rotation:-15.2,x:391.1,y:268.2},0).wait(1).to({scaleX:1.13,rotation:-14.5,x:390.9,y:267.9},0).wait(1).to({scaleX:1.13,rotation:-13.8,x:390.7,y:267.6},0).wait(1).to({scaleX:1.14,rotation:-13.1,x:390.5,y:267.4},0).wait(1).to({scaleX:1.14,rotation:-12.4,x:390.4,y:267.1},0).wait(1).to({scaleX:1.15,rotation:-11.7,x:390.2,y:266.8},0).wait(1).to({scaleX:1.15,rotation:-11.1,x:390,y:266.5},0).wait(1).to({scaleX:1.16,rotation:-10.4,x:389.8,y:266.2},0).wait(1).to({scaleX:1.16,rotation:-9.7,x:389.6,y:266},0).wait(1).to({scaleX:1.16,rotation:-9,y:265.6},0).wait(1).to({scaleX:1.15,scaleY:1.01,rotation:-8.3,x:389.7,y:265.3},0).wait(1).to({scaleX:1.15,rotation:-7.6,y:264.9},0).wait(1).to({scaleX:1.15,rotation:-6.9,y:264.6},0).wait(1).to({scaleX:1.14,rotation:-6.2,x:389.8,y:264.3},0).wait(1).to({scaleX:1.14,rotation:-5.5,y:263.9},0).wait(1).to({scaleX:1.14,rotation:-4.8,y:263.6},0).wait(1).to({scaleX:1.13,rotation:-4.1,x:389.9,y:263.3},0).wait(1).to({scaleX:1.13,scaleY:1,rotation:-3.5,y:263},0).wait(1).to({scaleX:1.13,rotation:-2.8,x:390,y:262.7},0).wait(1).to({scaleX:1.12,rotation:-2.1,x:390.1,y:262.4},0).wait(1).to({scaleX:1.12,rotation:-1.4,y:262},0).wait(1).to({scaleX:1.12,rotation:-0.7,x:390.2,y:261.7},0).wait(1).to({scaleX:1.11,rotation:0,y:261.4},0).wait(1).to({scaleX:1.11,x:390.3},0).wait(1).to({scaleX:1.11,scaleY:1,x:390.5},0).wait(1).to({scaleX:1.1,x:390.6},0).wait(1).to({scaleX:1.1,x:390.7,y:261.5},0).wait(1).to({scaleX:1.1,x:390.9},0).wait(1).to({scaleX:1.09,x:391},0).wait(1).to({scaleX:1.09,x:391.1},0).wait(1).to({scaleX:1.09,x:391.2},0).wait(1).to({scaleX:1.08,scaleY:1,x:391.3,y:261.6},0).wait(1).to({scaleX:1.08,x:391.4},0).wait(1).to({scaleX:1.08,x:391.5},0).wait(1).to({scaleX:1.07,x:391.7},0).wait(1).to({scaleX:1.07,x:391.8},0).wait(1).to({scaleX:1.07,x:391.9,y:261.7},0).wait(1).to({scaleX:1.06,x:392},0).wait(1).to({scaleX:1.06,scaleY:1,x:392.1},0).wait(1).to({scaleX:1.05,x:392.2},0).wait(1).to({scaleX:1.05,x:392.4},0).wait(1).to({scaleX:1.05,x:392.5},0).wait(1).to({scaleX:1.04,x:392.6,y:261.8},0).wait(1).to({scaleX:1.04,x:392.7},0).wait(1).to({scaleX:1.04,x:392.8,y:261.7},0).wait(1).to({scaleX:1.03,scaleY:1,x:392.9,y:261.8},0).wait(1).to({scaleX:1.03,x:393},0).wait(1).to({scaleX:1.03,x:393.2},0).wait(1).to({scaleX:1.02,x:393.3},0).wait(1).to({scaleX:1.02,x:393.4},0).wait(1).to({scaleX:1.02,x:393.5,y:261.9},0).wait(1).to({scaleX:1.01,x:393.6},0).wait(1).to({scaleX:1.01,scaleY:1,x:393.7},0).wait(1).to({scaleX:1.01,x:393.8},0).wait(1).to({scaleX:1,x:394},0).wait(1).to({scaleX:1,x:394.1,y:262},0).wait(1));

	// Sketchbook
	this.instance_31 = new lib.Symbol14();
	this.instance_31.parent = this;
	this.instance_31.setTransform(248.9,44.5,0.236,0.236,-37.9,0,0,46.5,36.1);
	this.instance_31.alpha = 0.109;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(7).to({_off:false},0).wait(1).to({regX:59.5,regY:42.5,scaleX:0.24,scaleY:0.24,rotation:-36.6,x:242.4,y:55,alpha:0.187},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-35.1,x:232.5,y:66.2,alpha:0.263},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-33.7,x:222.6,y:77.4,alpha:0.34},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-32.3,x:212.7,y:88.7,alpha:0.417},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-30.8,x:202.9,y:99.8,alpha:0.493},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-29.4,x:193,y:111.1,alpha:0.57},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-28,x:194,y:124.1,alpha:0.624},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-26.5,x:194.9,y:137.1,alpha:0.678},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-25.1,x:195.9,y:150.1,alpha:0.731},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:-23.7,x:196.8,y:163.2,alpha:0.785},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-22.2,x:197.7,y:176.3,alpha:0.839},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-20.8,x:198.7,y:189.5,alpha:0.892},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-19.4,x:199.6,y:202.6,alpha:0.946},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-17.9,x:200.5,y:215.8,alpha:1},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-16.5,x:200.3,y:221.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-15.1,x:200.1,y:226.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-13.6,x:199.8,y:231.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-12.2,x:199.6,y:236.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-10.7,x:199.4,y:242.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-9.3,x:199.1,y:247.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-7.9,x:198.8,y:252.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-7.6,x:198.9,y:254.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-7.4,x:199,y:255.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-7.2,x:199.1,y:256.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-6.9,x:199.2,y:258.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-6.7,x:199.3,y:259.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-6.5,y:260.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-6.2,x:199.4,y:262},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-6,x:199.5,y:263.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-5.8,x:199.6,y:264.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-5.5,x:199.7,y:266},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-5.3,x:199.8,y:267.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-5,y:268.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-4.8,x:200,y:269.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-4.6,y:271.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-4.3,x:200.1,y:272.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-4.1,x:200.2,y:273.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-3.9,x:200.3,y:275.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-3.6,y:276.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-3.4,x:200.4,y:277.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-3.2,x:200.5,y:279.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-2.9,y:280.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-2.7,x:200.6,y:281.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-2.5,x:200.7,y:283},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-2.2,x:200.8,y:284.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-2,x:200.9,y:285.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1.7,y:287},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1.5,x:201,y:288.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-1.3,x:201.1,y:289.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-1,x:201.2,y:290.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.8,x:201.3,y:292.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.6,x:201.4,y:293.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.3,y:294.9},0).wait(1).to({regX:54.6,regY:40.6,scaleX:0.95,scaleY:0.95,rotation:0.9,x:196,y:295.2},0).wait(12).to({rotation:0.9},0).wait(108));

	// Laptop
	this.instance_32 = new lib.Symbol13();
	this.instance_32.parent = this;
	this.instance_32.setTransform(202.3,29.3,0.149,0.056,15.1,0,0,10.4,-0.1);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(8).to({_off:false},0).wait(1).to({regX:57.5,regY:49.5,scaleX:0.21,scaleY:0.13,rotation:15.2,x:215.5,y:47.6,alpha:0.091},0).wait(1).to({scaleX:0.28,scaleY:0.21,x:222.7,y:61.5,alpha:0.182},0).wait(1).to({scaleX:0.34,scaleY:0.29,x:229.9,y:75.2,alpha:0.273},0).wait(1).to({scaleX:0.4,scaleY:0.37,rotation:15.1,x:237.1,y:89.1,alpha:0.364},0).wait(1).to({scaleX:0.47,scaleY:0.45,x:244.3,y:103,alpha:0.455},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:251.3,y:116.8,alpha:0.545},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:258.5,y:130.6,alpha:0.636},0).wait(1).to({scaleX:0.66,scaleY:0.68,x:265.7,y:144.4,alpha:0.727},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:272.9,y:158.2,alpha:0.818},0).wait(1).to({scaleX:0.79,scaleY:0.84,x:280.1,y:172.1,alpha:0.909},0).wait(1).to({scaleX:0.85,scaleY:0.92,x:287.2,y:185.9,alpha:1},0).wait(1).to({scaleX:0.86,scaleY:0.92,rotation:14.2,x:289,y:189.6},0).wait(1).to({scaleX:0.87,scaleY:0.92,rotation:13.3,x:290.7,y:193.3},0).wait(1).to({scaleX:0.88,scaleY:0.93,rotation:12.4,x:292.5,y:197},0).wait(1).to({scaleX:0.89,scaleY:0.93,rotation:11.6,x:294.2,y:200.7},0).wait(1).to({scaleX:0.89,scaleY:0.94,rotation:10.7,x:295.9,y:204.3},0).wait(1).to({scaleX:0.9,scaleY:0.94,rotation:9.8,x:297.7,y:207.9},0).wait(1).to({scaleX:0.91,scaleY:0.94,rotation:8.9,x:299.4,y:211.5},0).wait(1).to({scaleX:0.92,scaleY:0.95,rotation:8,x:301.2,y:215.1},0).wait(1).to({scaleX:0.93,scaleY:0.95,rotation:7.2,x:302.9,y:218.6},0).wait(1).to({scaleX:0.94,scaleY:0.96,rotation:6.3,x:304.7,y:222.2},0).wait(1).to({scaleX:0.95,scaleY:0.96,rotation:5.4,x:306.4,y:225.6},0).wait(1).to({scaleX:0.95,scaleY:0.96,rotation:4.5,x:308.1,y:229.1},0).wait(1).to({scaleX:0.96,scaleY:0.97,rotation:3.6,x:309.8,y:232.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:2.8,x:311.6,y:236},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:2.6,x:312.7,y:237.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.5,x:313.8,y:239.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.4,x:314.9,y:241},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.3,x:316.1,y:242.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.2,x:317.2,y:244.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:2.1,x:318.3,y:246},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:1.9,x:319.5,y:247.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:1.8,x:320.6,y:249.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:1.7,x:321.8,y:250.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.6,x:322.9,y:252.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:324,y:254.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.4,x:325.1,y:255.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:326.3,y:257.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.1,x:327.4,y:259.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1,x:328.5,y:260.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.9,x:329.7,y:262.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.8,x:330.8,y:264.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.7,x:331.9,y:265.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:0.6,x:333.1,y:267.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:0.5,x:334.2,y:269.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:0.3,x:335.4,y:270.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:0.2,x:336.5,y:272.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:0.1,x:337.6,y:274.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:0,x:338.7,y:275.8},0).wait(1).to({regX:48,regY:29.8,scaleX:1.03,scaleY:1.03,x:328.7,y:255.8},0).wait(123));

	// Pen 2
	this.instance_33 = new lib.Symbol12();
	this.instance_33.parent = this;
	this.instance_33.setTransform(284.7,32.1,0.105,0.105,44.9);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(8).to({_off:false},0).wait(1).to({regX:15.5,regY:10.5,scaleX:0.17,scaleY:0.17,rotation:44.1,x:281.7,y:44.8,alpha:0.067},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:43.1,x:278.3,y:55.7,alpha:0.133},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:42.2,x:275,y:66.4,alpha:0.2},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:41.3,x:271.8,y:77.2,alpha:0.267},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:40.3,x:268.6,y:88,alpha:0.333},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:39.4,x:265.4,y:98.8,alpha:0.4},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:38.5,x:262.2,y:109.5,alpha:0.467},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:37.5,x:259.1,y:120.3,alpha:0.533},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:36.6,x:256,y:131,alpha:0.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:35.7,x:253,y:141.7,alpha:0.667},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:34.7,x:250,y:152.4,alpha:0.733},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:33.8,x:247,y:163.1,alpha:0.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:32.9,x:244.1,y:173.8,alpha:0.867},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:31.9,x:241.2,y:184.4,alpha:0.933},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:31,x:238.3,y:195.1,alpha:1},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:30.1,x:237.7,y:196.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:29.1,x:237,y:198},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:28.2,x:236.3,y:199.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:27.3,x:235.6,y:201},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:26.3,x:234.8,y:202.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:25.4,x:234.2,y:203.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:24.5,x:233.5,y:205.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:23.5,x:232.8,y:206.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:22.6,x:232,y:208.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:21.7,x:231.4,y:209.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:20.7,x:230.6,y:211.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:19.8,x:229.9,y:212.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:18.9,x:229.2,y:214.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:17.9,x:228.5,y:215.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:17,x:227.7,y:216.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:16.1,x:227,y:218.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:15.2,x:226.3,y:219.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:14.2,x:225.5,y:221.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:13.3,x:224.8,y:222.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:12.4,x:224,y:224.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:11.4,x:223.3,y:225.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:10.5,x:222.5,y:226.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:9.6,x:221.8,y:228.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:8.6,x:221,y:229.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:7.7,x:220.2,y:231.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:6.8,x:219.4,y:232.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:5.8,x:218.7,y:234},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:4.9,x:217.9,y:235.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:4,x:217,y:236.7},0).wait(1).to({regX:7.1,regY:7,rotation:3.8,x:209.7,y:233.6},0).wait(128));

	// paper
	this.instance_34 = new lib.Symbol22();
	this.instance_34.parent = this;
	this.instance_34.setTransform(214.1,64.8,1,1,0,0,0,8.1,4.8);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(8).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:2.2,x:214.3,y:43.6,alpha:0.039},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:4.3,x:214.2,y:46.1,alpha:0.079},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:6.5,x:214.3,y:48.6,alpha:0.118},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:8.6,x:214.2,y:51,alpha:0.157},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:10.8,y:53.5,alpha:0.196},0).wait(1).to({scaleX:1.62,scaleY:1.62,rotation:12.9,y:56,alpha:0.236},0).wait(1).to({scaleX:1.72,scaleY:1.72,rotation:15.1,y:58.5,alpha:0.275},0).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:17.2,y:60.9,alpha:0.314},0).wait(1).to({scaleX:1.93,scaleY:1.93,rotation:19.4,y:63.5,alpha:0.354},0).wait(1).to({scaleX:2.03,scaleY:2.03,rotation:21.5,y:65.9,alpha:0.393},0).wait(1).to({scaleX:2.13,scaleY:2.13,rotation:23.7,y:68.4,alpha:0.432},0).wait(1).to({scaleX:2.24,scaleY:2.24,rotation:25.8,x:214.1,y:70.9,alpha:0.471},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:28,x:214.2,y:73.4,alpha:0.511},0).wait(1).to({scaleX:2.44,scaleY:2.44,rotation:30.1,x:214.1,y:75.9,alpha:0.55},0).wait(1).to({scaleX:2.51,scaleY:2.51,rotation:28.8,x:213.7,y:77.1,alpha:0.57},0).wait(1).to({scaleX:2.57,scaleY:2.57,rotation:27.4,x:213.2,y:78.5,alpha:0.591},0).wait(1).to({scaleX:2.63,scaleY:2.63,rotation:26.1,x:212.8,y:79.7,alpha:0.611},0).wait(1).to({scaleX:2.69,scaleY:2.69,rotation:24.7,x:212.4,y:81,alpha:0.632},0).wait(1).to({scaleX:2.76,scaleY:2.76,rotation:23.3,x:211.9,y:82.3,alpha:0.652},0).wait(1).to({scaleX:2.82,scaleY:2.82,rotation:22,x:211.5,y:83.6,alpha:0.673},0).wait(1).to({scaleX:2.88,scaleY:2.88,rotation:20.6,x:211,y:84.9,alpha:0.693},0).wait(1).to({scaleX:2.95,scaleY:2.95,rotation:19.2,x:210.6,y:86.2,alpha:0.714},0).wait(1).to({scaleX:3.01,scaleY:3.01,rotation:17.9,x:210.1,y:87.5,alpha:0.734},0).wait(1).to({scaleX:3.07,scaleY:3.07,rotation:16.5,x:209.6,y:88.8,alpha:0.755},0).wait(1).to({scaleX:3.14,scaleY:3.14,rotation:15.1,x:209.1,y:90.1,alpha:0.775},0).wait(1).to({scaleX:3.2,scaleY:3.2,rotation:13.8,x:208.7,y:91.3,alpha:0.795},0).wait(1).to({scaleX:3.26,scaleY:3.26,rotation:12.4,x:208.3,y:92.7,alpha:0.816},0).wait(1).to({scaleX:3.33,scaleY:3.33,rotation:11.1,x:207.9,y:93.9,alpha:0.836},0).wait(1).to({scaleX:3.39,scaleY:3.39,rotation:9.7,x:207.4,y:95.2,alpha:0.857},0).wait(1).to({scaleX:3.45,scaleY:3.45,rotation:8.3,x:206.9,y:96.5,alpha:0.877},0).wait(1).to({scaleX:3.52,scaleY:3.52,rotation:7,x:206.5,y:97.8,alpha:0.898},0).wait(1).to({scaleX:3.58,scaleY:3.58,rotation:5.6,x:206.1,y:99.1,alpha:0.918},0).wait(1).to({scaleX:3.64,scaleY:3.64,rotation:4.2,x:205.6,y:100.4,alpha:0.939},0).wait(1).to({scaleX:3.7,scaleY:3.7,rotation:2.9,x:205.1,y:101.7,alpha:0.959},0).wait(1).to({scaleX:3.77,scaleY:3.77,rotation:1.5,x:204.7,y:103,alpha:0.98},0).wait(1).to({scaleX:3.83,scaleY:3.83,rotation:0.1,x:204.2,y:104.3,alpha:1},0).wait(1).to({rotation:0.1},0).wait(11).to({rotation:0,x:204.8,y:104.6},0).wait(125));

	// Canister
	this.instance_35 = new lib.Symbol11("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(224.8,37.8,0.082,0.082,0,0,0,7.3,40.1);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(8).to({_off:false},0).wait(1).to({regX:7.5,regY:12,scaleX:0.15,scaleY:0.15,rotation:0.4,x:224.5,y:44.3,alpha:0.077},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:0.9,x:224.1,y:53.1,alpha:0.154},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:1.3,x:223.8,y:61.9,alpha:0.231},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:1.8,x:223.6,y:70.7,alpha:0.308},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:2.2,x:223.4,y:79.5,alpha:0.385},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:2.6,x:223.2,y:88.3,alpha:0.462},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:3.1,x:223.1,y:97.1,alpha:0.538},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:3.5,x:223,y:106,alpha:0.615},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:4,x:222.8,y:114.7,alpha:0.692},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:4.4,y:123.6,alpha:0.769},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:4.8,y:132.4,alpha:0.846},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:5.3,y:141.2,alpha:0.923},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.7,y:150.1,alpha:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.4,x:220.3,y:151.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.1,x:217.7,y:153},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-1.2,x:215.2,y:154.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-3.5,x:212.6,y:156},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-5.8,x:210,y:157.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-8.1,x:207.4,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-10.4,x:204.8,y:161},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-12.7,x:202.2,y:162.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-13,x:202,y:163.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-13.3,x:201.7,y:164},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-13.6,x:201.5,y:164.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-13.8,x:201.2,y:165.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-14.1,x:200.9,y:166},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-14.4,x:200.6,y:166.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.7,x:200.4,y:167.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15,x:200.1,y:167.9},0).wait(1).to({rotation:-12.9,x:201,y:167.7},0).wait(1).to({rotation:-10.7,x:201.9,y:167.5},0).wait(1).to({rotation:-8.6,x:202.8,y:167.3},0).wait(1).to({rotation:-6.5,x:203.7,y:167.1},0).wait(1).to({rotation:-4.3,x:204.6,y:167},0).wait(1).to({rotation:-2.2,x:205.5},0).wait(1).to({rotation:-0.1,x:206.4},0).wait(1).to({rotation:2.1,x:207.3,y:166.9},0).wait(1).to({rotation:4.2,x:208.2,y:167},0).wait(1).to({rotation:6.3,x:209.1,y:167.2},0).wait(1).to({rotation:8.5,x:210},0).wait(1).to({rotation:7.4,x:209.4,y:167.1},0).wait(1).to({rotation:6.4,x:208.7},0).wait(1).to({rotation:5.3,x:208,y:167},0).wait(1).to({rotation:4.2,x:207.4,y:166.9},0).wait(1).to({rotation:3.2,x:206.7},0).wait(1).to({rotation:2.1,x:206},0).wait(1).to({rotation:1.1,x:205.4,y:166.8},0).wait(1).to({rotation:0,x:204.7},0).wait(1).to({regX:7.4,regY:40.1,x:204.6,y:194.6,mode:"independent"},0).wait(124));

	// Pen-1
	this.instance_36 = new lib.Symbol10("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(192.8,45.8,0.071,0.071,-75);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(8).to({_off:false},0).wait(1).to({regX:14.5,regY:7,scaleX:0.16,scaleY:0.17,rotation:-82.2,x:198.4,y:48.1,alpha:0.061},0).wait(1).to({scaleX:0.24,scaleY:0.28,rotation:-89.3,x:203,y:51,alpha:0.123},0).wait(1).to({scaleX:0.33,scaleY:0.38,rotation:-96.3,x:207.1,y:54,alpha:0.184},0).wait(1).to({scaleX:0.42,scaleY:0.49,rotation:-103.2,x:211,y:56.7,alpha:0.245},0).wait(1).to({scaleX:0.51,scaleY:0.59,rotation:-110,x:214.6,y:59.6,alpha:0.306},0).wait(1).to({scaleX:0.59,scaleY:0.69,rotation:-111.4,x:218.7,y:62.5,alpha:0.368},0).wait(1).to({scaleX:0.68,scaleY:0.8,rotation:-105.5,x:224.2,y:65.7,alpha:0.429},0).wait(1).to({scaleX:0.77,scaleY:0.9,rotation:-99.7,x:229.8,y:69.1,alpha:0.49},0).wait(1).to({scaleX:0.77,scaleY:0.91,rotation:-94,x:232.3,y:70.3,alpha:0.529},0).wait(1).to({scaleX:0.78,scaleY:0.91,rotation:-88.4,x:234.9,y:71.6,alpha:0.568},0).wait(1).to({scaleX:0.79,scaleY:0.91,rotation:-82.9,x:237.3,y:73,alpha:0.608},0).wait(1).to({scaleX:0.8,scaleY:0.92,rotation:-77.6,x:239.7,y:74.5,alpha:0.647},0).wait(1).to({scaleX:0.81,scaleY:0.92,rotation:-72.3,x:242.1,y:76,alpha:0.686},0).wait(1).to({scaleX:0.82,scaleY:0.92,rotation:-67.2,x:244.3,y:77.6,alpha:0.725},0).wait(1).to({scaleX:0.83,scaleY:0.93,rotation:-62.1,x:246.5,y:79.4,alpha:0.765},0).wait(1).to({scaleX:0.84,scaleY:0.93,rotation:-57.1,x:248.6,y:81.1,alpha:0.804},0).wait(1).to({scaleX:0.85,scaleY:0.94,rotation:-52.3,x:250.6,y:82.9,alpha:0.843},0).wait(1).to({scaleX:0.86,scaleY:0.94,rotation:-47.5,x:252.5,y:84.7,alpha:0.882},0).wait(1).to({scaleX:0.87,scaleY:0.94,rotation:-42.9,x:254.4,y:86.5,alpha:0.922},0).wait(1).to({scaleX:0.87,scaleY:0.95,rotation:-38.4,x:256.1,y:88.4,alpha:0.961},0).wait(1).to({scaleX:0.88,scaleY:0.95,rotation:-33.9,x:257.7,y:90.2,alpha:1},0).wait(1).to({scaleX:0.89,scaleY:0.95,rotation:-29.6,x:259.8,y:92.3},0).wait(1).to({scaleX:0.9,scaleY:0.96,rotation:-25.4,x:261.7,y:94.5},0).wait(1).to({scaleX:0.91,scaleY:0.96,rotation:-21.3,x:263.5,y:96.5},0).wait(1).to({scaleX:0.92,scaleY:0.97,rotation:-17.3,x:265.2,y:98.6},0).wait(1).to({scaleX:0.93,scaleY:0.97,rotation:-13.3,x:267,y:100.7},0).wait(1).to({scaleX:0.94,scaleY:0.97,rotation:-9.5,x:268.7,y:102.7},0).wait(1).to({scaleX:0.95,scaleY:0.98,rotation:-5.8,x:270.2,y:104.7},0).wait(1).to({scaleX:0.96,scaleY:0.98,rotation:-2.2,x:271.8,y:106.7},0).wait(1).to({scaleX:0.96,scaleY:0.99,rotation:0,x:273.4,y:108.3},0).wait(1).to({scaleX:0.97,scaleY:0.99,x:275.3,y:109.4},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:277.2,y:110.5},0).wait(1).to({scaleX:0.99,scaleY:1,x:279.1,y:111.6},0).wait(1).to({scaleX:1,scaleY:1,x:281.1,y:112.7},0).wait(1).to({x:281.5,y:113.4},0).wait(1).to({x:282,y:114.1},0).wait(1).to({x:282.5,y:114.8},0).wait(1).to({x:283,y:115.5},0).wait(1).to({x:283.5,y:116.2},0).wait(1).to({x:284,y:116.9},0).wait(1).to({x:284.5,y:117.6},0).wait(1).to({x:285,y:118.3},0).wait(1).to({regX:6.2,regY:1.4,x:277.1,y:112.8},0).wait(22).to({startPosition:0},0).wait(108));

	// nobtebook
	this.instance_37 = new lib.Symbol9();
	this.instance_37.parent = this;
	this.instance_37.setTransform(232.1,29.1,0.2,0.118,0,0,0,22.8,14.1);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(8).to({_off:false},0).wait(1).to({regX:23,regY:14.5,scaleX:0.26,scaleY:0.18,rotation:0.6,x:240,y:39,alpha:0.091},0).wait(1).to({scaleX:0.32,scaleY:0.23,rotation:1.1,x:247.7,y:48.8,alpha:0.182},0).wait(1).to({scaleX:0.38,scaleY:0.29,rotation:1.7,x:255.3,y:58.7,alpha:0.273},0).wait(1).to({scaleX:0.44,scaleY:0.35,rotation:2.3,x:262.8,y:68.5,alpha:0.364},0).wait(1).to({scaleX:0.5,scaleY:0.41,rotation:2.9,x:270.2,y:78.4,alpha:0.455},0).wait(1).to({scaleX:0.56,scaleY:0.47,rotation:3.4,x:277.5,y:88.2,alpha:0.545},0).wait(1).to({scaleX:0.62,scaleY:0.53,rotation:4,x:284.7,y:98,alpha:0.636},0).wait(1).to({scaleX:0.68,scaleY:0.59,rotation:4.6,x:290.6,y:107.9,alpha:0.727},0).wait(1).to({scaleX:0.74,scaleY:0.64,rotation:5.1,x:293.2,y:117.8,alpha:0.818},0).wait(1).to({scaleX:0.8,scaleY:0.7,rotation:5.7,x:295.8,y:127.6,alpha:0.909},0).wait(1).to({scaleX:0.86,scaleY:0.76,rotation:6.3,x:298.4,y:137.4,alpha:1},0).wait(1).to({scaleX:0.87,scaleY:0.77,rotation:6.9,x:300.8,y:140},0).wait(1).to({scaleX:0.87,scaleY:0.77,rotation:7.4,x:303.4,y:142.6},0).wait(1).to({scaleX:0.87,scaleY:0.78,rotation:8,x:305.8,y:145.1},0).wait(1).to({scaleX:0.88,scaleY:0.79,rotation:8.6,x:308.1,y:147.7},0).wait(1).to({scaleX:0.88,scaleY:0.79,rotation:9.1,x:310.5,y:150.3},0).wait(1).to({scaleX:0.88,scaleY:0.8,rotation:9.7,x:312.8,y:152.8},0).wait(1).to({scaleX:0.89,scaleY:0.81,rotation:10.3,x:314.1,y:155.4},0).wait(1).to({scaleX:0.89,scaleY:0.81,rotation:10.9,x:314.9,y:158},0).wait(1).to({scaleX:0.9,scaleY:0.82,rotation:11.4,x:315.7,y:160.6},0).wait(1).to({scaleX:0.9,scaleY:0.82,rotation:12,x:316.4,y:163.1},0).wait(1).to({scaleX:0.9,scaleY:0.83,rotation:11.6,x:317.2,y:165.7},0).wait(1).to({scaleX:0.91,scaleY:0.84,rotation:11.1,x:317.9,y:168.3},0).wait(1).to({scaleX:0.91,scaleY:0.84,rotation:10.7,x:318.7,y:170.1},0).wait(1).to({scaleX:0.91,scaleY:0.85,rotation:10.3,x:319.3,y:171.9},0).wait(1).to({scaleX:0.92,scaleY:0.86,rotation:9.9,x:320,y:173.7},0).wait(1).to({scaleX:0.92,scaleY:0.86,rotation:9.4,x:320.7,y:175.6},0).wait(1).to({scaleX:0.92,scaleY:0.87,rotation:9,x:321.4,y:177.4},0).wait(1).to({scaleX:0.93,scaleY:0.87,rotation:8.6,x:322.2,y:179.3},0).wait(1).to({scaleX:0.93,scaleY:0.88,rotation:8.1,x:323,y:181.1},0).wait(1).to({scaleX:0.94,scaleY:0.89,rotation:7.7,x:323.8,y:183},0).wait(1).to({scaleX:0.94,scaleY:0.89,rotation:7.3,x:324.6,y:184.8},0).wait(1).to({scaleX:0.94,scaleY:0.9,rotation:6.9,x:325.3,y:186.6},0).wait(1).to({scaleX:0.95,scaleY:0.91,rotation:6.4,x:326.1,y:188.5},0).wait(1).to({scaleX:0.95,scaleY:0.91,rotation:6,x:326.7,y:189.1},0).wait(1).to({scaleX:0.95,scaleY:0.92,rotation:5.6,x:327.4,y:189.7},0).wait(1).to({scaleX:0.96,scaleY:0.92,rotation:5.1,x:328.1,y:190.3},0).wait(1).to({scaleX:0.96,scaleY:0.93,rotation:4.7,x:328.8,y:191},0).wait(1).to({scaleX:0.96,scaleY:0.94,rotation:4.3,x:329.5,y:191.6},0).wait(1).to({scaleX:0.97,scaleY:0.94,rotation:3.9,x:330.1,y:192.3},0).wait(1).to({scaleX:0.97,scaleY:0.95,rotation:3.4,x:330.7,y:192.9},0).wait(1).to({scaleX:0.98,scaleY:0.96,rotation:3,x:331.2,y:193.5},0).wait(1).to({scaleX:0.98,scaleY:0.96,rotation:2.6,x:331.8,y:194.2},0).wait(1).to({scaleX:0.98,scaleY:0.97,rotation:2.1,x:332.3,y:194.8},0).wait(1).to({scaleX:0.99,scaleY:0.98,rotation:1.7,x:332.9,y:195.5},0).wait(1).to({scaleX:0.99,scaleY:0.98,rotation:1.3,x:333.4,y:196},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.9,x:333.9,y:196.7},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:0.4,x:334.4,y:197.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:334.9,y:198},0).wait(1).to({regX:22.8,regY:14.1,x:334.8,y:197.2},0).wait(123));

	// Shake
	this.instance_38 = new lib.Symbol7();
	this.instance_38.parent = this;
	this.instance_38.setTransform(293.6,29.6,0.05,0.05,0,0,0,13.1,41.1);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(8).to({_off:false},0).wait(1).to({regX:12,regY:28,scaleX:0.1,scaleY:0.1,rotation:-1,x:293.5,y:35.7,alpha:0.11},0).wait(1).to({scaleX:0.15,scaleY:0.14,rotation:-2,y:42.5,alpha:0.22},0).wait(1).to({scaleX:0.19,scaleY:0.19,rotation:-3,x:292.5,y:49.2,alpha:0.33},0).wait(1).to({scaleX:0.24,scaleY:0.23,rotation:-3.9,x:289,y:56,alpha:0.44},0).wait(1).to({scaleX:0.34,scaleY:0.33,rotation:-4.9,x:285.4,y:64.8,alpha:0.479},0).wait(1).to({scaleX:0.45,scaleY:0.43,rotation:-5.9,x:281.9,y:73.7,alpha:0.517},0).wait(1).to({scaleX:0.55,scaleY:0.52,rotation:-6.9,x:278.3,y:82.5,alpha:0.556},0).wait(1).to({scaleX:0.65,scaleY:0.62,rotation:-7.9,x:274.8,y:91.4,alpha:0.594},0).wait(1).to({scaleX:0.76,scaleY:0.72,rotation:-8.9,x:272.2,y:100.4,alpha:0.633},0).wait(1).to({scaleX:0.86,scaleY:0.82,rotation:-9.9,x:269.6,y:109.3,alpha:0.671},0).wait(1).to({scaleX:0.96,scaleY:0.91,rotation:-10.8,x:267,y:118.2,alpha:0.71},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:-9.4,x:265.3,y:121.7,alpha:0.751},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:-8,x:263.6,y:125.2,alpha:0.793},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:-6.7,x:262,y:128.8,alpha:0.834},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:-5.3,x:266.2,y:132.4,alpha:0.876},0).wait(1).to({scaleX:0.98,scaleY:0.93,rotation:-3.9,x:270.7,y:135.9,alpha:0.917},0).wait(1).to({scaleX:0.98,scaleY:0.93,rotation:-2.5,x:275,y:139.5,alpha:0.959},0).wait(1).to({scaleX:0.98,scaleY:0.93,rotation:-1.1,x:279.3,y:143.1,alpha:1},0).wait(1).to({scaleX:0.99,scaleY:0.94,rotation:0.3,x:283.4,y:147.6},0).wait(1).to({scaleX:0.99,scaleY:0.94,rotation:1.7,y:152.2},0).wait(1).to({scaleX:0.99,scaleY:0.94,rotation:3.1,x:282.7,y:156.8},0).wait(1).to({scaleX:1,scaleY:0.94,rotation:4.5,x:282.1,y:161.5},0).wait(1).to({scaleX:1,scaleY:0.95,rotation:5.9,x:281.4,y:166.1},0).wait(1).to({scaleX:1,scaleY:0.95,rotation:2.6,x:279.9,y:168.4},0).wait(1).to({scaleX:1,scaleY:0.95,rotation:-0.8,x:278.3,y:170.7},0).wait(1).to({scaleX:1.01,scaleY:0.96,rotation:-4.1,x:277.3,y:173.1},0).wait(1).to({scaleX:1.01,scaleY:0.96,rotation:-7.4,x:276.5,y:175.6},0).wait(1).to({scaleX:1.01,scaleY:0.96,rotation:-10.8,x:275.8,y:178},0).wait(1).to({rotation:-8.1,x:276.4},0).wait(1).to({rotation:-5.4,x:277},0).wait(1).to({rotation:-2.8,x:277.6,y:178.1},0).wait(1).to({rotation:-0.1,x:278.1,y:178.2},0).wait(1).to({rotation:2.6,x:278.7,y:178.3},0).wait(1).to({rotation:5.2,x:279.3,y:178.4},0).wait(1).to({rotation:7.9,x:279.9,y:178.5},0).wait(1).to({rotation:10.6,x:280.5,y:178.8},0).wait(1).to({rotation:13.2,x:281.1,y:178.9},0).wait(1).to({rotation:11.5,x:280.7,y:178.7},0).wait(1).to({rotation:9.7,x:280.4,y:178.6},0).wait(1).to({rotation:7.9,x:279.9,y:178.5},0).wait(1).to({rotation:6.2,x:279.5,y:178.3},0).wait(1).to({rotation:4.4,x:279.2,y:178.2},0).wait(1).to({rotation:2.6,x:278.8,y:178},0).wait(1).to({rotation:0.9,x:278.4},0).wait(1).to({rotation:-0.9,x:278.1,y:177.8},0).wait(1).to({rotation:-2.7,x:277.7,y:177.7},0).wait(1).to({rotation:-4.4,x:277.3,y:177.6},0).wait(1).to({rotation:-6.2,x:276.9},0).wait(1).to({rotation:-5.8,x:277.1,y:177.5},0).wait(1).to({rotation:-5.3,x:277.2,y:177.4},0).wait(1).to({rotation:-4.9,x:277.3,y:177.3},0).wait(1).to({rotation:-4.4,x:277.4,y:177.2},0).wait(1).to({rotation:-4,x:277.5,y:177.1},0).wait(1).to({rotation:-3.5,x:277.6,y:177},0).wait(1).to({rotation:-3.1,x:277.8,y:176.9},0).wait(1).to({rotation:-2.6,y:176.8},0).wait(1).to({rotation:-2.2,x:278,y:176.7},0).wait(1).to({rotation:-1.7,x:278.1,y:176.6},0).wait(1).to({rotation:-1.2,x:278.2},0).wait(1).to({rotation:-0.8,x:278.3,y:176.5},0).wait(1).to({rotation:-0.3,x:278.4,y:176.4},0).wait(1).to({rotation:0.1,x:278.5,y:176.3},0).wait(1).to({rotation:0.6,x:278.6,y:176.2},0).wait(2).to({regX:12.2,regY:28.2,rotation:0.9,x:279,y:176.4},0).wait(108));

	// Table
	this.instance_39 = new lib.Symbol8();
	this.instance_39.parent = this;
	this.instance_39.setTransform(263,18.5,0.238,0.04,0,0,0,169.6,384.4);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.instance_40 = new lib.flash0ai_35();
	this.instance_40.parent = this;
	this.instance_40.setTransform(92,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},45).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(2).to({_off:false},0).wait(1).to({regX:170,regY:192.5,scaleX:0.3,scaleY:0.06,x:264,y:19.5},0).wait(1).to({scaleX:0.36,scaleY:0.08,x:265,y:28.2},0).wait(1).to({scaleX:0.42,scaleY:0.1,x:266,y:36.9},0).wait(1).to({scaleX:0.48,scaleY:0.12,x:266.9,y:45.6},0).wait(1).to({scaleX:0.54,scaleY:0.14,x:267.9,y:54.3},0).wait(1).to({scaleX:0.6,scaleY:0.16,x:268.9,y:63},0).wait(1).to({scaleX:0.66,scaleY:0.18,x:269.8,y:71.7},0).wait(1).to({scaleX:0.68,scaleY:0.23,x:269.5,y:80.2,alpha:0.056},0).wait(1).to({scaleX:0.7,scaleY:0.27,x:269.1,y:88.7,alpha:0.111},0).wait(1).to({scaleX:0.72,scaleY:0.32,x:268.8,y:97.1,alpha:0.167},0).wait(1).to({scaleX:0.74,scaleY:0.36,x:268.4,y:105.7,alpha:0.222},0).wait(1).to({scaleX:0.76,scaleY:0.41,x:268.1,y:114.2,alpha:0.278},0).wait(1).to({scaleX:0.78,scaleY:0.45,x:267.7,y:122.7,alpha:0.333},0).wait(1).to({scaleX:0.8,scaleY:0.5,x:267.4,y:131.2,alpha:0.389},0).wait(1).to({scaleX:0.81,scaleY:0.55,x:267,y:139.7,alpha:0.444},0).wait(1).to({scaleX:0.83,scaleY:0.59,x:266.7,y:148.2,alpha:0.5},0).wait(1).to({scaleX:0.85,scaleY:0.64,x:266.3,y:156.7,alpha:0.556},0).wait(1).to({scaleX:0.87,scaleY:0.68,x:265.9,y:165.1,alpha:0.611},0).wait(1).to({scaleX:0.89,scaleY:0.73,x:265.6,y:173.6,alpha:0.667},0).wait(1).to({scaleX:0.91,scaleY:0.77,x:265.2,y:182.1,alpha:0.722},0).wait(1).to({scaleX:0.93,scaleY:0.82,x:264.8,y:190.7,alpha:0.778},0).wait(1).to({scaleX:0.94,scaleY:0.86,x:264.5,y:199.2,alpha:0.833},0).wait(1).to({scaleX:0.96,scaleY:0.91,x:264.1,y:207.7,alpha:0.889},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:263.7,y:216.2,alpha:0.944},0).wait(1).to({scaleX:1,scaleY:1,x:263.4,y:224.7,alpha:1},0).to({_off:true},1).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '4F2B9A664301894880380C7A3B0A496B',
	width: 530,
	height: 440,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Mrw_Table_animation_atlas_.png", id:"Mrw_Table_animation_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4F2B9A664301894880380C7A3B0A496B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;