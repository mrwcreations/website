(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"heart_city_1_atlas_P_", frames: [[0,985,163,153],[165,985,163,153],[348,579,158,223],[174,361,172,239],[0,1362,166,108],[553,1296,160,115],[171,602,169,204],[735,683,225,152],[580,837,198,146],[681,229,224,227],[778,1156,97,202],[190,808,188,175],[470,1413,100,113],[93,1140,91,220],[646,1139,130,155],[877,1156,104,185],[727,1470,78,133],[907,295,108,293],[572,1413,73,153],[780,837,90,317],[964,869,45,149],[186,1344,87,199],[874,458,27,64],[422,985,90,269],[380,837,198,146],[348,361,181,216],[0,1140,91,220],[531,458,181,216],[508,683,225,152],[681,0,224,227],[285,1256,104,185],[391,1296,160,115],[670,985,100,113],[514,1139,130,155],[330,985,90,269],[964,718,45,149],[907,0,108,293],[807,1470,66,131],[883,1343,87,199],[0,361,172,239],[715,1360,166,108],[186,1140,97,202],[0,602,169,204],[647,1470,78,133],[0,808,188,175],[962,590,56,126],[964,1020,49,115],[872,837,90,317],[275,1443,73,153],[68,1538,109,64],[514,985,154,152],[391,1413,77,155],[874,590,79,91],[531,361,79,91],[0,0,679,359],[68,1472,109,64],[714,458,158,223],[0,1472,66,131],[972,1343,49,115],[612,361,51,44]]}
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



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap52 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap58 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap59 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap69 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap71 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(59);
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


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap38();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-1,-1,181,216), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap37();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-1,-1,198,146), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap36();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-1,-1,90,269), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap35();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-1,-1,27,64), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-1,-1,87,199), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-1,-1,45,149), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-1,-1,90,317), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap30();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,73,153), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-1,-1,108,293), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1,-1,78,133), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-1,-1,104,185), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap70();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-1,-1,66,131), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-1,-1,130,155), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-1,-1,91,220), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-1,-1,100,113), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1,-1,188,175), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1,-1,97,202), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap20();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1,224,227), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap65();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1,-1,77,155), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap66();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1,-1,79,91), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-1,225,152), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1,-1,169,204), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-1,160,115), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,-1,166,108), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,172,239), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,158,223), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,154,152), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,163,153), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjbFaIjGhxIjdjQIABiEIFpjwILQgIIDDLHg");
	mask.setTransform(63.9,35.6);

	// Layer 3
	this.instance = new lib.Bitmap69();
	this.instance.parent = this;
	this.instance.setTransform(-1,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,5,108,64), null);


// stage content:
(lib.heartcity1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_91 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(91).call(this.frame_91).wait(3));

	// tall-apt-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_53 = new cjs.Graphics().p("AkmENIiikiIhcArIihqEIV8urIAPZpIkNg7IoEDZIABAEIAfIgIAmKXIhtBxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_graphics_53,x:576.7,y:180.2}).wait(12).to({graphics:null,x:0,y:0}).wait(29));

	// tall-apt
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(600.7,435.5,1,1,0,0,0,44,133.4);
	this.instance._off = true;

	this.instance_1 = new lib.Bitmap46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(556,71);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},54).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regY:133.5,y:406.1},0).wait(1).to({y:376.7},0).wait(1).to({y:347.3},0).wait(1).to({y:317.9},0).wait(1).to({y:288.4},0).wait(1).to({y:259},0).wait(1).to({y:229.6},0).wait(1).to({y:200.2},0).wait(1).to({y:202.2},0).wait(1).to({y:204.2},0).to({_off:true},1).wait(29));

	// tree-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_17 = new cjs.Graphics().p("AjsFmIAArLIHZAAIAALLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_1_graphics_17,x:695.5,y:545.4}).wait(10).to({graphics:null,x:0,y:0}).wait(67));

	// tree
	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(647.6,558.5,0.999,0.999,-60,0,0,12.4,30.9);
	this.instance_2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgUAKQADgFAKgDQAHgCAHgDQAGgDADAAQADAAABACQACACgBAC");
	this.shape.setTransform(683.3,550.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AAOgHQABAAABgCQAAgCgDAAQgNAAgHAFQgFADgCAEQgCAGACAF");
	this.shape_1.setTransform(680.8,548.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAdgZQAAgDgFgDQgDgBgGAAQgNACgMANQgNALgEAMQgEARALAK");
	this.shape_2.setTransform(682.4,537.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgZAXQgDgGABgHQACgHAFgEQAGgIAQgGIARgGIAEAAQAFABAAAEQAAADgBAF");
	this.shape_3.setTransform(689,542.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgdCtQgCAJgIAGQgIAGgJgBQgKAAgHgHQgHgIgBgJQgQAIgHgHQgDgDgBgFQgIgUADgLIAGgMQADgKgMgTQgMgSAJgLQABgBAFgEQAEgDACgCQADgGgDgLQgFgfAQgIIAGgDQADgDgBgHQgDgHgBgDQgCgIAFgJQAFgIAIgEQALgEAYABQgHgGAEgJQAEgJAJABQgEgBgCgEQAEgDAFABQAFAAADADQAFgDgFgHQgFgGgBgDQgBgEACgFQAEgRAKAAQgJgSAFgKQACgEAGgGIALgMQgGgXAHgKQADARARAGIgEAHQAGADAOAAQAFACADAFQACAFgDADQACgCADACQACACAAACQAAADgEAGQgHAMAEAPQAGAXACAWQAAAFACADQABAEAGAHQAFAIgGADQAIgDAJAEQAJAEAFAHQAJAPgHAUQAKAFAGALQAHALgBALQgBAHAAADQABAEADAGQABAHgHAGQgFAFgIACQAHgCAGAGQAHAGABAIQABAOgOAPQAHAHABAKQAAALgFAIQgGAIgKACQgKADgJgFQAGANgFAGQgFAFgKgDQgOgDgCAAQABAFgDAHQgEAHAAADQAAACADAEQACADgCADQgDAJgUgDQgIgBgLgFQgLgFgFgBQgIgBgDAAQgEgBgCgHQgEgMAEgQg");
	this.shape_4.setTransform(686.5,536.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgfhaQASAlgFBFQgCAkgGAcQAlAfAUgoQgIgKgHgaQgOg0ABhQ");
	this.shape_5.setTransform(690.7,567.3);

	var maskedShapeInstanceList = [this.instance_2,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({regX:12.5,regY:31,scaleX:1,scaleY:1,rotation:-47.1,x:654.8,y:557},0).wait(1).to({rotation:-34.3,x:661.9,y:555.4},0).wait(1).to({rotation:-21.4,x:669,y:553.9},0).wait(1).to({rotation:-8.5,x:676,y:552.4},0).wait(1).to({rotation:4.3,x:683,y:550.9},0).wait(1).to({rotation:17.2,x:690.1,y:549.4},0).wait(1).to({rotation:30,x:697.2,y:547.9},0).wait(1).to({rotation:15,x:691.1,y:546.9},0).wait(1).to({rotation:0,x:685.2,y:545.8},0).to({_off:true},1).wait(67));

	// ufo-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_55 = new cjs.Graphics().p("ADREYInMjcQhfA1gqgBQglgCgJgrQgCgIgHhcQgGhIgWgtIAAgBIAowYIN6AUIAOfqIkdFhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_2_graphics_55,x:338.2,y:122}).wait(10).to({graphics:null,x:0,y:0}).wait(29));

	// Ufo-bldng
	this.instance_3 = new lib.Symbol27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(339.5,385.9,1,1,0,0,0,42.4,98.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Bitmap52();
	this.instance_4.parent = this;
	this.instance_4.setTransform(298,11);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},55).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).wait(1).to({regX:42.5,regY:98.5,x:339.8,y:350.3},0).wait(1).to({x:340,y:314.9},0).wait(1).to({x:340.2,y:279.4},0).wait(1).to({x:340.4,y:244},0).wait(1).to({x:340.6,y:208.6},0).wait(1).to({x:340.8,y:173.2},0).wait(1).to({x:340.9,y:137.8},0).wait(1).to({x:341.2,y:102.4},0).wait(1).to({y:106.4},0).wait(1).to({y:110.5},0).to({_off:true},1).wait(28));

	// foshay-mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_47 = new cjs.Graphics().p("AA1GqIjFgeIkXj+ICXrIIFRlaIDNFBQAAAaAvDkQAxDlgBAaIA7LfIhtBxQAAADgxiCQgxiEAAADIgWDQIh6DLg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_3_graphics_47,x:533.7,y:260.2}).wait(10).to({graphics:null,x:0,y:0}).wait(37));

	// foshay
	this.instance_5 = new lib.Symbol26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(541,425.5,1,1,0,0,0,21.3,73.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.Bitmap47();
	this.instance_6.parent = this;
	this.instance_6.setTransform(519,194);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},47).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).wait(1).to({regX:21.5,regY:73.5,x:541.2,y:402.1},0).wait(1).to({y:378.8},0).wait(1).to({y:355.6},0).wait(1).to({y:332.3},0).wait(1).to({y:309.1},0).wait(1).to({y:285.8},0).wait(1).to({y:262.6},0).wait(1).to({y:265.5},0).wait(1).to({y:268.5},0).to({_off:true},1).wait(37));

	// ids-mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_47 = new cjs.Graphics().p("AihVGQAXgRASgXQAYgdgGgRQgRgvAChFQADhKgKgnIglh5QgSg+AHglQAFgaAJgRIAEgHICMmaInbjRIj18IIO1AxIIIHXIjcNmIidAgIgHFUIgBH6IilDnIgtFoIhYGdIjEAmg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_4_graphics_47,x:696.6,y:173.6}).wait(11).to({graphics:null,x:0,y:0}).wait(36));

	// IDS
	this.instance_7 = new lib.Symbol25();
	this.instance_7.parent = this;
	this.instance_7.setTransform(694.9,492.4,1,1,0,0,0,43.8,157.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.Bitmap61();
	this.instance_8.parent = this;
	this.instance_8.setTransform(650,20);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},47).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).wait(1).to({regX:44,regY:157.5,x:695.1,y:456.5},0).wait(1).to({y:420.2},0).wait(1).to({y:383.9},0).wait(1).to({y:347.6},0).wait(1).to({y:311.4},0).wait(1).to({y:275.1},0).wait(1).to({y:238.8},0).wait(1).to({y:202.5},0).wait(1).to({y:166.2},0).wait(1).to({y:171.9},0).wait(1).to({y:177.6},0).to({_off:true},1).wait(35));

	// wells-mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_50 = new cjs.Graphics().p("AhqVzQgHgLA+gbQA+gcgIgKIgDgEIjihWIgKveIg7AZIgBkhIlQgrICD2YIOhgjMADNAhwIngA2IAMNZg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_5_graphics_50,x:448.8,y:213.6}).wait(14).to({graphics:null,x:0,y:0}).wait(30));

	// wells-fargo
	this.instance_9 = new lib.Symbol22();
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.7,516.4,1,1,0,0,0,52.9,145.7);
	this.instance_9._off = true;

	this.instance_10 = new lib.Bitmap49();
	this.instance_10.parent = this;
	this.instance_10.setTransform(393,72);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},50).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).wait(1).to({regX:53,regY:145.5,x:446.8,y:467.1},0).wait(1).to({y:421.7},0).wait(1).to({y:379.9},0).wait(1).to({y:341.8},0).wait(1).to({y:307.3},0).wait(1).to({y:276.4},0).wait(1).to({y:249.2},0).wait(1).to({y:225.6},0).wait(1).to({y:211.6},0).wait(1).to({y:213.2},0).wait(1).to({y:214.4},0).wait(1).to({y:215.3},0).wait(1).to({y:215.9},0).wait(1).to({y:216.1},0).to({_off:true},1).wait(29));

	// apts-mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_44 = new cjs.Graphics().p("AhuHcIrYqlIGpnuIRrhSIB5YTg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_6_graphics_44,x:174.7,y:123.8}).wait(50));

	// apts
	this.instance_11 = new lib.Symbol21();
	this.instance_11.parent = this;
	this.instance_11.setTransform(173.5,251,1,1,0,0,0,38.1,65.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Bitmap57();
	this.instance_12.parent = this;
	this.instance_12.setTransform(134,57);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},44).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).wait(1).to({regX:38,x:173.4,y:228.4},0).wait(1).to({y:205.8},0).wait(1).to({y:183.2},0).wait(1).to({y:160.6},0).wait(1).to({y:138},0).wait(1).to({y:115.5},0).wait(1).to({y:119},0).wait(1).to({y:122.5},0).to({_off:true},1).wait(41));

	// steps-mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_42 = new cjs.Graphics().p("AEETTIgFkdIigi0IkrkEIhMgKIhPAoIjcC9Ig32jIFIoiIOtIdIgoc5Ih6CDg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_7_graphics_42,x:789.7,y:162.1}).wait(8).to({graphics:null,x:0,y:0}).wait(44));

	// steps-scraper
	this.instance_13 = new lib.Symbol20();
	this.instance_13.parent = this;
	this.instance_13.setTransform(784.8,388.8,1,1,0,0,0,51.1,91.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.Bitmap42();
	this.instance_14.parent = this;
	this.instance_14.setTransform(733,59);

	var maskedShapeInstanceList = [this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},42).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(42).to({_off:false},0).wait(1).to({regX:51,x:784.7,y:347.8},0).wait(1).to({y:306.9},0).wait(1).to({y:265.9},0).wait(1).to({y:224.9},0).wait(1).to({y:184},0).wait(1).to({y:143},0).wait(1).to({y:145.9},0).wait(1).to({y:148.8},0).to({_off:true},1).wait(43));

	// back-lib-mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_39 = new cjs.Graphics().p("AprJMIACyDITVjwIk6ZNIkvgoIjmAqg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_8_graphics_39,x:414.1,y:254.8}).wait(7).to({graphics:null,x:0,y:0}).wait(48));

	// back-lib
	this.instance_15 = new lib.Symbol19();
	this.instance_15.parent = this;
	this.instance_15.setTransform(393.4,419.5,1,1,0,0,0,32.1,64.3);
	this.instance_15._off = true;

	this.instance_16 = new lib.Bitmap50();
	this.instance_16.parent = this;
	this.instance_16.setTransform(359,206);

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},39).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(39).to({_off:false},0).wait(1).to({regX:32,regY:64.5,x:393.1,y:394.4},0).wait(1).to({x:393,y:369.2},0).wait(1).to({x:392.8,y:344},0).wait(1).to({x:392.7,y:318.7},0).wait(1).to({x:392.5,y:293.5},0).wait(1).to({x:392.4,y:268.3},0).wait(1).to({x:392.3,y:272},0).to({_off:true},1).wait(47));

	// chops-mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_38 = new cjs.Graphics().p("AB4C5Ijlk1Ii+ENIAYKKIiaAoIkEqeIg8mtIgylKIPxksII6HMIAUUUImagcIiMh6IijCzg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_9_graphics_38,x:623.2,y:250.6}).wait(8).to({graphics:null,x:0,y:0}).wait(48));

	// chops
	this.instance_17 = new lib.Symbol18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(628.8,434.6,1,1,0,0,0,63.9,76.5);
	this.instance_17._off = true;

	this.instance_18 = new lib.Bitmap45();
	this.instance_18.parent = this;
	this.instance_18.setTransform(564,181);

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},38).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(38).to({_off:false},0).wait(1).to({regX:64,x:628.9,y:403.9},0).wait(1).to({y:373.2},0).wait(1).to({y:342.5},0).wait(1).to({y:311.8},0).wait(1).to({y:281.1},0).wait(1).to({y:250.5},0).wait(1).to({y:258.7},0).to({_off:true},1).wait(48));

	// crane-mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_28 = new cjs.Graphics().p("ADcHnIjmArIlRjBIndAlIgCn5IHAm2IN1BHIFAQsg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_10_graphics_28,x:392.4,y:282.6}).wait(12).to({graphics:null,x:0,y:0}).wait(54));

	// crane
	this.instance_19 = new lib.ClipGroup();
	this.instance_19.parent = this;
	this.instance_19.setTransform(381.6,301.2,0.998,0.998,-56.2,0,0,58.4,32.8);
	this.instance_19._off = true;

	this.instance_20 = new lib.Bitmap63();
	this.instance_20.parent = this;
	this.instance_20.setTransform(340,265);

	var maskedShapeInstanceList = [this.instance_19,this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},28).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(28).to({_off:false},0).wait(1).to({regX:54,regY:37,scaleX:1,scaleY:1,rotation:-39.5,x:384.9,y:307.8},0).wait(1).to({rotation:-24.3,x:387,y:308},0).wait(1).to({rotation:-10.5,x:389.1,y:307.8},0).wait(1).to({rotation:1.8,x:391.1,y:307.3},0).wait(1).to({rotation:12.6,x:393.1,y:306.8},0).wait(1).to({rotation:22,x:394.9,y:306.2},0).wait(1).to({rotation:15.3,x:395,y:303.2},0).wait(1).to({rotation:9.8,y:300.7},0).wait(1).to({rotation:5.5,x:395.1,y:298.7},0).wait(1).to({rotation:2.5,x:395.2,y:297.2},0).wait(1).to({rotation:0.6,y:296.4},0).wait(1).to({rotation:0,y:296.1},0).to({_off:true},1).wait(53));

	// Cute-mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_37 = new cjs.Graphics().p("AhIMYIirEXIlkm0IgFlLIgK14ITNgxMgCWAjsIg6AIg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_11_graphics_37,x:893.7,y:220.7}).wait(10).to({graphics:null,x:0,y:0}).wait(47));

	// cute
	this.instance_21 = new lib.Symbol17();
	this.instance_21.parent = this;
	this.instance_21.setTransform(879.8,450.1,1,1,0,0,0,44.6,108.8);
	this.instance_21._off = true;

	this.instance_22 = new lib.Bitmap39();
	this.instance_22.parent = this;
	this.instance_22.setTransform(835,115);

	var maskedShapeInstanceList = [this.instance_21,this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},37).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(37).to({_off:false},0).wait(1).to({regX:44.5,regY:109,x:879.7,y:417.2},0).wait(1).to({x:879.8,y:384.1},0).wait(1).to({x:879.9,y:350.9},0).wait(1).to({x:880,y:317.8},0).wait(1).to({y:284.7},0).wait(1).to({x:880.1,y:251.6},0).wait(1).to({x:880.2,y:218.5},0).wait(1).to({y:221.7},0).wait(1).to({y:225},0).to({_off:true},1).wait(47));

	// gov-bldng-mask (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_31 = new cjs.Graphics().p("AnXIDIjYsLIKklpIK7GgIgoKsIvYCWg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_12_graphics_31,x:608.3,y:285.1}).wait(8).to({graphics:null,x:0,y:0}).wait(55));

	// gov-bldng
	this.instance_23 = new lib.Symbol16();
	this.instance_23.parent = this;
	this.instance_23.setTransform(613.7,398.7,1,1,0,0,0,48.8,55.3);
	this.instance_23._off = true;

	this.instance_24 = new lib.Bitmap44();
	this.instance_24.parent = this;
	this.instance_24.setTransform(564,234);

	var maskedShapeInstanceList = [this.instance_23,this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},31).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(31).to({_off:false},0).wait(1).to({regX:49,regY:55.5,x:613.9,y:380.1},0).wait(1).to({y:361.3},0).wait(1).to({y:342.5},0).wait(1).to({y:323.7},0).wait(1).to({y:305},0).wait(1).to({y:286.2},0).wait(1).to({y:290.8},0).to({_off:true},1).wait(55));

	// guthrie-mask (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_22 = new cjs.Graphics().p("Ag/O/IpVqtIn0jIIhuwBIfPhPIIcEcIACMdIj9jEIm/gpIAPGLIiYgDIgSFDIjrBzIgKGDg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_13_graphics_22,x:182.7,y:304.2}).wait(11).to({graphics:null,x:0,y:0}).wait(61));

	// gutrie
	this.instance_25 = new lib.Symbol9();
	this.instance_25.parent = this;
	this.instance_25.setTransform(158.5,496.7,1,1,0,0,0,83.5,101.2);
	this.instance_25._off = true;

	this.instance_26 = new lib.Bitmap56();
	this.instance_26.parent = this;
	this.instance_26.setTransform(74,200);

	var maskedShapeInstanceList = [this.instance_25,this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},22).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(22).to({_off:false},0).wait(1).to({regY:101,y:441.4},0).wait(1).to({y:392.8},0).wait(1).to({y:350.7},0).wait(1).to({y:315.1},0).wait(1).to({x:158.4,y:293.5},0).wait(1).to({x:158.1,y:297.5},0).wait(1).to({x:157.9,y:300.3},0).wait(1).to({x:157.8,y:302},0).wait(1).to({y:302.6},0).to({_off:true},1).wait(62));

	// bank-stad-mask (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_38 = new cjs.Graphics().p("AyHwFMAkjABKIgKQyIlABgIhfCbIgFHgI+JC0g");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_14_graphics_38,x:144.1,y:201.1}).wait(9).to({graphics:null,x:0,y:0}).wait(47));

	// Bank-stadium
	this.instance_27 = new lib.Symbol15();
	this.instance_27.parent = this;
	this.instance_27.setTransform(354.2,230.1,1,1,0,0,0,92.8,86.2);
	this.instance_27._off = true;

	this.instance_28 = new lib.Bitmap58();
	this.instance_28.parent = this;
	this.instance_28.setTransform(74,113);

	var maskedShapeInstanceList = [this.instance_27,this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27}]},38).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(38).to({_off:false},0).wait(1).to({regX:93,regY:86.5,x:325.8,y:225.5},0).wait(1).to({x:297.3,y:220.7},0).wait(1).to({x:268.7,y:215.9},0).wait(1).to({x:240.2,y:211},0).wait(1).to({x:211.7,y:206.2},0).wait(1).to({x:183.1,y:201.4},0).wait(1).to({x:154.6,y:196.5},0).wait(1).to({x:161.6,y:198.7},0).wait(1).to({x:168.6,y:201},0).to({_off:true},1).wait(46));

	// gov-mask (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_34 = new cjs.Graphics().p("AAVN8IiHhJIADqZIgtgCIADhdIgZAAIAAgqIkLhmIhBAKIgPt6IQcgkIgDe3IjaAGIkTAWg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_15_graphics_34,x:307.7,y:220.1}).wait(10).to({graphics:null,x:0,y:0}).wait(50));

	// Gov
	this.instance_29 = new lib.Symbol14();
	this.instance_29.parent = this;
	this.instance_29.setTransform(308.6,424,1,1,0,0,0,47.5,100);
	this.instance_29._off = true;

	this.instance_30 = new lib.Bitmap55();
	this.instance_30.parent = this;
	this.instance_30.setTransform(260,126);

	var maskedShapeInstanceList = [this.instance_29,this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},34).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(34).to({_off:false},0).wait(1).to({y:382.5},0).wait(1).to({y:341},0).wait(1).to({y:299.6},0).wait(1).to({y:258.1},0).wait(1).to({y:216.6},0).wait(1).to({x:308.7,y:222},0).wait(1).to({x:308.9,y:227.5},0).to({_off:true},1).wait(52));

	// lego-mask (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_29 = new cjs.Graphics().p("AvPSzIECjCIgvoDIAei8IlXgwIkcwuIYvnBIR1XqIzPh4IjHCgImCBzIgJLHIk2CPg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_16_graphics_29,x:804,y:309.2}).wait(9).to({graphics:null,x:0,y:0}).wait(56));

	// Lego-bldng
	this.instance_31 = new lib.Symbol13();
	this.instance_31.parent = this;
	this.instance_31.setTransform(816.9,551.8,1,1,0,0,0,111.1,112.7);
	this.instance_31._off = true;

	this.instance_32 = new lib.Bitmap41();
	this.instance_32.parent = this;
	this.instance_32.setTransform(702,210);

	var maskedShapeInstanceList = [this.instance_31,this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},29).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(29).to({_off:false},0).wait(1).to({regX:111,regY:112.5,x:816.2,y:517.6},0).wait(1).to({x:815.6,y:483.6},0).wait(1).to({x:815,y:449.5},0).wait(1).to({x:814.5,y:415.5},0).wait(1).to({x:813.9,y:381.5},0).wait(1).to({x:813.3,y:347.5},0).wait(1).to({x:812.7,y:313.5},0).wait(1).to({x:813.2,y:318.2},0).wait(1).to({x:813.8,y:323},0).to({_off:true},1).wait(55));

	// train-station-mask (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_27 = new cjs.Graphics().p("AlTObIgComIiyhfIAArZIH+osIH9HqIAUHbIkPHwIhyHGIlnBkg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_17_graphics_27,x:505.6,y:333.3}).wait(8).to({graphics:null,x:0,y:0}).wait(59));

	// train-stations
	this.instance_33 = new lib.Symbol12();
	this.instance_33.parent = this;
	this.instance_33.setTransform(503.4,515.8,1,1,0,0,0,37.6,76.5);
	this.instance_33._off = true;

	this.instance_34 = new lib.Bitmap72();
	this.instance_34.parent = this;
	this.instance_34.setTransform(470,390);

	this.instance_35 = new lib.Bitmap71();
	this.instance_35.parent = this;
	this.instance_35.setTransform(491,299);

	this.instance_36 = new lib.Bitmap59();
	this.instance_36.parent = this;
	this.instance_36.setTransform(463,279);

	this.instance_37 = new lib.Bitmap60();
	this.instance_37.parent = this;
	this.instance_37.setTransform(491,299);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_6.setTransform(478.8,403.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_7.setTransform(479.7,403.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_8.setTransform(499.3,413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_9.setTransform(500.3,413.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgdgNIA6gYIgZBJg");
	this.shape_10.setTransform(491.1,405.3,1,1,0,0,0,0.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgUAOIAlgOQAFgFAAgJIgnAOg");
	this.shape_11.setTransform(504.1,422,1,1,0,0,0,0.1,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAWALIgrgV");
	this.shape_12.setTransform(487.3,416.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AANAGIgZgM");
	this.shape_13.setTransform(482.5,414.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AAQAcIgcgOIAAglIAcAO");
	this.shape_14.setTransform(478.5,410.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AgMgFIAZAL");
	this.shape_15.setTransform(482.5,410.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AgXgaIAsAWIAAAj");
	this.shape_16.setTransform(487.5,414.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AAAAiIAAhC");
	this.shape_17.setTransform(482.4,412);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AgMgnIAABAIAZAOIAAhCg");
	this.shape_18.setTransform(482.4,412.4,1,1,0,0,0,0,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_19.setTransform(484.7,401.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("ABJgIIgbgFIh2Ac");
	this.shape_20.setTransform(480.4,396.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AjnhqIHQDU");
	this.shape_21.setTransform(496.4,407.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("ABBgUIiAAp");
	this.shape_22.setTransform(513.2,414.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgYgMIAxAZ");
	this.shape_23.setTransform(504.2,426.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AgZgNIAzAb");
	this.shape_24.setTransform(507.8,424.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAHgOIAWANIglAQIgVgPg");
	this.shape_25.setTransform(512.5,421.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AgXgHIASgHIAWANIglAQIgEgD");
	this.shape_26.setTransform(509.6,419);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AgIAMIgMgIIAkgOIAMAH");
	this.shape_27.setTransform(496.3,431.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_28.setTransform(492.7,429.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_29.setTransform(488.1,426.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgPg");
	this.shape_30.setTransform(483.9,423.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgegfIBFAkIhZAb");
	this.shape_31.setTransform(479.3,420.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABX");
	this.shape_32.setTransform(485.1,413.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABY");
	this.shape_33.setTransform(480.1,411.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("Ah4g5IDxBz");
	this.shape_34.setTransform(488.5,419.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AAEAyQANgPgCgcQgBgjgfgV");
	this.shape_35.setTransform(505.7,417.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAPghIgpAQQASASAAAfIAmgPQABgHgBgKQgDgSgMgPg");
	this.shape_36.setTransform(503.1,418.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AgQgaQAkAPgCAmIgjgPg");
	this.shape_37.setTransform(498.2,419.3,1,1,0,0,0,0,0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAsAYIg4AXQAJgZgDgWQgFgigggQ");
	this.shape_38.setTransform(501.9,420.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AiOgiIDSBrIBBgZIj8h5");
	this.shape_39.setTransform(490.7,408.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("ABGAyIgBhdIiOAl");
	this.shape_40.setTransform(480.8,399.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AA+gxIAAg3IhgAaIAACvIgfAJ");
	this.shape_41.setTransform(479.8,409.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_42.setTransform(510.5,412.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AjyhvIHlDf");
	this.shape_43.setTransform(495.4,402);

	var maskedShapeInstanceList = [this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_17;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},27).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_36},{t:this.instance_37}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(27).to({_off:false},0).wait(1).to({regX:37.5,x:502.3,y:455.1},0).wait(1).to({x:501.6,y:405.4},0).wait(1).to({x:501,y:366.8},0).wait(1).to({x:501.1,y:352.4},0).wait(1).to({x:501.6,y:355.7},0).wait(1).to({x:501.8,y:356.8},0).to({_off:true},1).wait(60));

	// normal-mask (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_29 = new cjs.Graphics().p("ADIFdIm+gpIAFCOIlIjsIAcptIRXiLIh1RFg");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_18_graphics_29,x:264.5,y:254.7}).wait(7).to({graphics:null,x:0,y:0}).wait(58));

	// normal
	this.instance_38 = new lib.Symbol11();
	this.instance_38.parent = this;
	this.instance_38.setTransform(257.6,345.8,1,1,0,0,0,38.6,43.7);
	this.instance_38._off = true;

	this.instance_39 = new lib.Bitmap67();
	this.instance_39.parent = this;
	this.instance_39.setTransform(218,212);

	var maskedShapeInstanceList = [this.instance_38,this.instance_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_18;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_38}]},29).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(29).to({_off:false},0).wait(1).to({regX:38.5,regY:44.5,x:257.5,y:323.3},0).wait(1).to({y:300},0).wait(1).to({y:276.7},0).wait(1).to({y:253.4},0).wait(1).to({y:255.7},0).wait(1).to({y:258},0).to({_off:true},1).wait(58));

	// boring-mask (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_49 = new cjs.Graphics().p("Am0H2IAixfIBNiVIK+AxIA8KjIl8BjIAKLGg");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_19_graphics_49,x:255.3,y:135.3}).wait(8).to({graphics:null,x:0,y:0}).wait(37));

	// Boring
	this.instance_40 = new lib.Symbol23();
	this.instance_40.parent = this;
	this.instance_40.setTransform(254.3,282.4,1,1,0,0,0,35.3,75.6);
	this.instance_40._off = true;

	this.instance_41 = new lib.Bitmap62();
	this.instance_41.parent = this;
	this.instance_41.setTransform(220,65);

	var maskedShapeInstanceList = [this.instance_40,this.instance_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_19;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40}]},49).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(49).to({_off:false},0).wait(1).to({regX:35.5,regY:75.5,x:254.8,y:257.7},0).wait(1).to({x:255.2,y:233},0).wait(1).to({x:255.5,y:208.4},0).wait(1).to({x:255.8,y:183.8},0).wait(1).to({x:256.2,y:159.1},0).wait(1).to({x:256.5,y:134.5},0).wait(1).to({x:256.3,y:138.5},0).wait(1).to({x:256,y:142.5},0).to({_off:true},1).wait(36));

	// Layer 17 (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_25 = new cjs.Graphics().p("AxSHrIlSh/IEmikIgjhkIgPoMIBBibIZEksIPQHFIsmRSI6tDIg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_20_graphics_25,x:847.3,y:390.1}).wait(12).to({graphics:null,x:0,y:0}).wait(57));

	// Layer 16
	this.instance_42 = new lib.Symbol10();
	this.instance_42.parent = this;
	this.instance_42.setTransform(561,398.9,1,1,0,0,0,111.9,75);
	this.instance_42._off = true;

	this.instance_43 = new lib.Bitmap40();
	this.instance_43.parent = this;
	this.instance_43.setTransform(721,323);

	var maskedShapeInstanceList = [this.instance_42,this.instance_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_20;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42}]},25).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(25).to({_off:false},0).wait(1).to({regX:111.5,x:650.4},0).wait(1).to({x:728.2},0).wait(1).to({x:794.1},0).wait(1).to({x:848},0).wait(1).to({x:841.7},0).wait(1).to({x:837.3},0).wait(1).to({x:834.6},0).wait(1).to({x:833.7},0).to({_off:true},1).wait(60));

	// pillars-mask (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_22 = new cjs.Graphics().p("AoxHIIhxmkIgtj5IiKjmIazjjIgSPzIkGClIlzh1IibBVIh2jTIiPElIjxB0g");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_21_graphics_22,x:655.1,y:381}).wait(72));

	// Pillars
	this.instance_44 = new lib.Symbol8();
	this.instance_44.parent = this;
	this.instance_44.setTransform(662.4,525.3,1,1,0,0,0,79,56.7);
	this.instance_44._off = true;

	this.instance_45 = new lib.Bitmap43();
	this.instance_45.parent = this;
	this.instance_45.setTransform(575,333);

	var maskedShapeInstanceList = [this.instance_44,this.instance_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_21;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_44}]},22).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(22).to({_off:false},0).wait(1).to({regY:56.5,x:661.7,y:479.9},0).wait(1).to({x:659.8,y:440.7},0).wait(1).to({x:656.7,y:407.5},0).wait(1).to({x:655.4,y:380.4},0).wait(1).to({x:656.3,y:384.6},0).wait(1).to({x:655.4,y:387.6},0).wait(1).to({y:389.4},0).wait(1).to({y:390.1},0).to({_off:true},1).wait(63));

	// Library--mask (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_20 = new cjs.Graphics().p("AF2IYIjeBTIAIiqIiZhfIhRAZIhfgjIADBJIgrAdIgIBfIpimrIgDroIRygZIILIJIgGJYIiHiJIhuBpIgXDeg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_22_graphics_20,x:392.9,y:372.4}).wait(74));

	// Library
	this.instance_46 = new lib.Symbol7();
	this.instance_46.parent = this;
	this.instance_46.setTransform(391.8,476.2,1,1,0,0,0,81.9,53);
	this.instance_46._off = true;

	this.instance_47 = new lib.Bitmap54();
	this.instance_47.parent = this;
	this.instance_47.setTransform(309,316);

	var maskedShapeInstanceList = [this.instance_46,this.instance_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_22;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},20).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(20).to({_off:false},0).wait(1).to({regX:82,x:391.9,y:446},0).wait(1).to({y:419.4},0).wait(1).to({y:396.3},0).wait(1).to({y:376.7},0).wait(1).to({y:365},0).wait(1).to({y:367.2},0).wait(1).to({y:368.8},0).wait(1).to({y:369.8},0).wait(1).to({y:370.1},0).to({_off:true},1).wait(64));

	// gold-mask (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	var mask_23_graphics_12 = new cjs.Graphics().p("AA8TmIucvxIg835IUJA8IIwU7IAAEsIpNDcIATKKg");

	this.timeline.addTween(cjs.Tween.get(mask_23).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_23_graphics_12,x:278.6,y:406.6}).wait(82));

	// Gold-Mf
	this.instance_48 = new lib.Symbol6();
	this.instance_48.parent = this;
	this.instance_48.setTransform(284.6,650.4,1,1,0,0,0,84.8,118.4);
	this.instance_48._off = true;

	this.instance_49 = new lib.Bitmap53();
	this.instance_49.parent = this;
	this.instance_49.setTransform(199,286);

	var maskedShapeInstanceList = [this.instance_48,this.instance_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_23;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_48}]},12).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(12).to({_off:false},0).wait(1).to({regX:85,regY:118.5,x:284.8,y:597.4},0).wait(1).to({y:549.4},0).wait(1).to({y:506.5},0).wait(1).to({y:468.6},0).wait(1).to({y:435.8},0).wait(1).to({y:408},0).wait(1).to({y:401.8},0).wait(1).to({y:403.4},0).wait(1).to({y:404.5},0).wait(1).to({y:405.2},0).wait(1).to({y:405.4},0).to({_off:true},1).wait(70));

	// Basillica-mask (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	var mask_24_graphics_14 = new cjs.Graphics().p("Aj5PvIgInNIp5mfIgWjnISgw+IJtKtIAFP/IAPCQImGDKIgBBFInvD6g");

	this.timeline.addTween(cjs.Tween.get(mask_24).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_24_graphics_14,x:519.4,y:413}).wait(80));

	// Basillica
	this.instance_50 = new lib.Symbol5();
	this.instance_50.parent = this;
	this.instance_50.setTransform(524,618.3,1,1,0,0,0,78,110.6);
	this.instance_50._off = true;

	this.instance_51 = new lib.Bitmap7();
	this.instance_51.parent = this;
	this.instance_51.setTransform(448,310);

	var maskedShapeInstanceList = [this.instance_50,this.instance_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_24;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50}]},14).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(14).to({_off:false},0).wait(1).to({regY:110.5,x:524.5,y:584.5},0).wait(1).to({x:525,y:550.8},0).wait(1).to({x:525.5,y:517.1},0).wait(1).to({x:526,y:483.5},0).wait(1).to({x:526.5,y:449.8},0).wait(1).to({x:527,y:416.1},0).wait(1).to({y:419.1},0).wait(1).to({y:422.1},0).to({_off:true},1).wait(71));

	// Poor-mask (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	var mask_25_graphics_17 = new cjs.Graphics().p("Ag3MjIgLlAIAkg8IhzgyIAChVIixhTIgHgwImriGIgapTIDdkYITbGGIBhNUIpNHQg");

	this.timeline.addTween(cjs.Tween.get(mask_25).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_25_graphics_17,x:680.2,y:480.8}).wait(77));

	// poor
	this.instance_52 = new lib.Symbol1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(694.5,663.4,1,1,0,0,0,80.2,75.5);
	this.instance_52._off = true;

	this.instance_53 = new lib.Bitmap10();
	this.instance_53.parent = this;
	this.instance_53.setTransform(611,409);

	var maskedShapeInstanceList = [this.instance_52,this.instance_53];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_25;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_52}]},17).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(17).to({_off:false},0).wait(1).to({regX:81.5,regY:76.5,x:694.9,y:614.5},0).wait(1).to({x:694.1,y:570.4},0).wait(1).to({x:693.4,y:532.2},0).wait(1).to({x:692.9,y:499.9},0).wait(1).to({x:692.5,y:480.1},0).wait(1).to({x:692.4,y:483.1},0).wait(1).to({x:692.3,y:485.2},0).wait(1).to({y:486.4},0).wait(1).to({y:486.9},0).to({_off:true},1).wait(67));

	// Rickfolk-mask (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	var mask_26_graphics_11 = new cjs.Graphics().p("AiSIPIrJndIh9oHIOYpOIQZIXIigMiIvBMOg");

	this.timeline.addTween(cjs.Tween.get(mask_26).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_26_graphics_11,x:609.1,y:554.6}).wait(83));

	// RichFolk
	this.instance_54 = new lib.Symbol2();
	this.instance_54.parent = this;
	this.instance_54.setTransform(601,753,1,1,0,0,0,77,76);
	this.instance_54._off = true;

	this.instance_55 = new lib.Bitmap64();
	this.instance_55.parent = this;
	this.instance_55.setTransform(528,483);

	var maskedShapeInstanceList = [this.instance_54,this.instance_55];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_26;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_54}]},11).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(11).to({_off:false},0).wait(1).to({x:601.7,y:719.6},0).wait(1).to({x:602.4,y:686.2},0).wait(1).to({x:603.1,y:652.8},0).wait(1).to({x:603.8,y:619.4},0).wait(1).to({x:604.5,y:586},0).wait(1).to({x:605.2,y:552.7},0).wait(1).to({y:555.3},0).wait(1).to({y:558},0).wait(1).to({y:560.7},0).to({_off:true},1).wait(73));

	// train-station-mask (mask)
	var mask_27 = new cjs.Shape();
	mask_27._off = true;
	var mask_27_graphics_6 = new cjs.Graphics().p("AvxFjIAJ4MIdaDgIAyIeIBONYIvIHwIgMDhIinAsg");

	this.timeline.addTween(cjs.Tween.get(mask_27).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_27_graphics_6,x:408.1,y:503.6}).wait(88));

	// train-station\
	this.instance_56 = new lib.Symbol31();
	this.instance_56.parent = this;
	this.instance_56.setTransform(404.5,715.3,1,1,0,0,0,89.1,107);
	this.instance_56._off = true;

	this.instance_57 = new lib.Bitmap4();
	this.instance_57.parent = this;
	this.instance_57.setTransform(314,405);

	var maskedShapeInstanceList = [this.instance_56,this.instance_57];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_27;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56}]},6).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(6).to({_off:false},0).wait(1).to({regX:89.5,x:404.9,y:677.1},0).wait(1).to({y:642},0).wait(1).to({y:610},0).wait(1).to({y:581},0).wait(1).to({y:555.1},0).wait(1).to({y:532.2},0).wait(1).to({y:512.4},0).wait(1).to({x:404.8,y:497.7},0).wait(1).to({y:503.1},0).wait(1).to({x:404.7,y:507.3},0).wait(1).to({x:404.6,y:510.3},0).wait(1).to({y:512.1},0).wait(1).to({y:512.7},0).to({_off:true},1).wait(74));

	// First-ave-mask (mask)
	var mask_28 = new cjs.Shape();
	mask_28._off = true;
	mask_28.graphics.p("AvDC7Ig/oEIRJn3IO8KSIhnIRIuWHeg");
	mask_28.setTransform(503.2,617.6);

	// First-Ave
	this.instance_58 = new lib.Symbol30();
	this.instance_58.parent = this;
	this.instance_58.setTransform(509.1,806.6,1,1,0,0,0,98,72);

	this.instance_59 = new lib.Bitmap2();
	this.instance_59.parent = this;
	this.instance_59.setTransform(410,547);

	var maskedShapeInstanceList = [this.instance_58,this.instance_59];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_28;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_58}]}).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(1).to({y:774.9},0).wait(1).to({y:745.5},0).wait(1).to({y:718.4},0).wait(1).to({y:693.7},0).wait(1).to({y:671.4},0).wait(1).to({y:651.4},0).wait(1).to({y:633.7},0).wait(1).to({y:618.5},0).wait(1).to({y:610.3},0).wait(1).to({y:613.9},0).wait(1).to({y:616.7},0).wait(1).to({y:618.7},0).wait(1).to({y:619.9},0).wait(1).to({y:620.4},0).to({_off:true},1).wait(79));

	// Front-Street-mask (mask)
	var mask_29 = new cjs.Shape();
	mask_29._off = true;
	var mask_29_graphics_0 = new cjs.Graphics().p("A9SAjIAAhFMA6lAAAIAABFg");
	var mask_29_graphics_1 = new cjs.Graphics().p("A+eBlIAAjJMA89AAAIAADJg");
	var mask_29_graphics_2 = new cjs.Graphics().p("A/qCnIAAlOMA/VAAAIAAFOg");
	var mask_29_graphics_3 = new cjs.Graphics().p("Egg1ADpIAAnSMBBrAAAIAAHSg");
	var mask_29_graphics_4 = new cjs.Graphics().p("EgiBAEsIAApXMBEDAAAIAAJXg");
	var mask_29_graphics_5 = new cjs.Graphics().p("EgjNAFuIAArbMBGbAAAIAALbg");
	var mask_29_graphics_6 = new cjs.Graphics().p("EgkZAGwIAAtfMBIzAAAIAANfg");
	var mask_29_graphics_7 = new cjs.Graphics().p("EglkAHyIAAvkMBLJAAAIAAPkg");
	var mask_29_graphics_8 = new cjs.Graphics().p("EgmwAI1IAAxpMBNhAAAIAARpg");
	var mask_29_graphics_9 = new cjs.Graphics().p("Egn8AJ3IAAztMBP4AAAIAATtg");
	var mask_29_graphics_10 = new cjs.Graphics().p("EgpHAK5IAA1xMBSPAAAIAAVxg");
	var mask_29_graphics_11 = new cjs.Graphics().p("EgqTAL7IAA31MBUnAAAIAAX1g");
	var mask_29_graphics_12 = new cjs.Graphics().p("EgrfAM9IAA55MBW/AAAIAAZ5g");
	var mask_29_graphics_13 = new cjs.Graphics().p("EgsqAN/IAA7+MBZVAAAIAAb+g");
	var mask_29_graphics_14 = new cjs.Graphics().p("Egt2APCIAA+DMBbtAAAIAAeDg");
	var mask_29_graphics_15 = new cjs.Graphics().p("EgvCAQEMAAAggHMBeFAAAMAAAAgHg");
	var mask_29_graphics_16 = new cjs.Graphics().p("EgwNARGMAAAgiLMBgcAAAMAAAAiLg");
	var mask_29_graphics_17 = new cjs.Graphics().p("EgxZASIMAAAgkPMBizAAAMAAAAkPg");
	var mask_29_graphics_18 = new cjs.Graphics().p("EgylATLMAAAgmVMBlLAAAMAAAAmVg");
	var mask_29_graphics_19 = new cjs.Graphics().p("EgzwAUNMAAAgoZMBnhAAAMAAAAoZg");
	var mask_29_graphics_20 = new cjs.Graphics().p("Eg08AVPMAAAgqdMBp5AAAMAAAAqdg");
	var mask_29_graphics_21 = new cjs.Graphics().p("Eg2IAWRMAAAgshMBsRAAAMAAAAshg");
	var mask_29_graphics_22 = new cjs.Graphics().p("Eg3TAXTMAAAgulMBunAAAMAAAAulg");
	var mask_29_graphics_23 = new cjs.Graphics().p("Eg4fAYWMAAAgwrMBw/AAAMAAAAwrg");
	var mask_29_graphics_24 = new cjs.Graphics().p("Eg5rAZYMAAAgyvMBzXAAAMAAAAyvg");
	var mask_29_graphics_25 = new cjs.Graphics().p("Eg63AaaMAAAg0zMB1uAAAMAAAA0zg");
	var mask_29_graphics_26 = new cjs.Graphics().p("Eg8CAbcMAAAg23MB4FAAAMAAAA23g");
	var mask_29_graphics_27 = new cjs.Graphics().p("Eg9OAceMAAAg47MB6dAAAMAAAA47g");
	var mask_29_graphics_28 = new cjs.Graphics().p("Eg+ZAdhMAAAg7BMB8zAAAMAAAA7Bg");
	var mask_29_graphics_29 = new cjs.Graphics().p("Eg/lAejMAAAg9FMB/LAAAMAAAA9Fg");
	var mask_29_graphics_30 = new cjs.Graphics().p("EhAxAflMAAAg/JMCBjAAAMAAAA/Jg");
	var mask_29_graphics_31 = new cjs.Graphics().p("EhB9AgnMAAAhBNMCD7AAAMAAABBNg");
	var mask_29_graphics_32 = new cjs.Graphics().p("EhDIAhpMAAAhDRMCGRAAAMAAABDRg");
	var mask_29_graphics_33 = new cjs.Graphics().p("EhEUAirMAAAhFWMCIpAAAMAAABFWg");
	var mask_29_graphics_34 = new cjs.Graphics().p("EhFfAjtMAAAhHaMCK/AAAMAAABHag");
	var mask_29_graphics_35 = new cjs.Graphics().p("EhGrAkwMAAAhJfMCNXAAAMAAABJfg");
	var mask_29_graphics_36 = new cjs.Graphics().p("EhH3AlyMAAAhLjMCPvAAAMAAABLjg");
	var mask_29_graphics_37 = new cjs.Graphics().p("EhJDAm1MAAAhNoMCSGAAAMAAABNog");
	var mask_29_graphics_38 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");

	this.timeline.addTween(cjs.Tween.get(mask_29).to({graphics:mask_29_graphics_0,x:512.6,y:747.7}).wait(1).to({graphics:mask_29_graphics_1,x:512.8,y:741}).wait(1).to({graphics:mask_29_graphics_2,x:513,y:734.3}).wait(1).to({graphics:mask_29_graphics_3,x:513.1,y:727.6}).wait(1).to({graphics:mask_29_graphics_4,x:513.3,y:720.9}).wait(1).to({graphics:mask_29_graphics_5,x:513.5,y:714.2}).wait(1).to({graphics:mask_29_graphics_6,x:513.6,y:707.5}).wait(1).to({graphics:mask_29_graphics_7,x:513.8,y:700.8}).wait(1).to({graphics:mask_29_graphics_8,x:514,y:694.1}).wait(1).to({graphics:mask_29_graphics_9,x:514.2,y:687.4}).wait(1).to({graphics:mask_29_graphics_10,x:514.3,y:680.7}).wait(1).to({graphics:mask_29_graphics_11,x:514.5,y:674}).wait(1).to({graphics:mask_29_graphics_12,x:514.7,y:667.3}).wait(1).to({graphics:mask_29_graphics_13,x:514.8,y:660.6}).wait(1).to({graphics:mask_29_graphics_14,x:515,y:653.9}).wait(1).to({graphics:mask_29_graphics_15,x:515.2,y:647.2}).wait(1).to({graphics:mask_29_graphics_16,x:515.4,y:640.5}).wait(1).to({graphics:mask_29_graphics_17,x:515.5,y:633.8}).wait(1).to({graphics:mask_29_graphics_18,x:515.7,y:627.1}).wait(1).to({graphics:mask_29_graphics_19,x:515.9,y:620.4}).wait(1).to({graphics:mask_29_graphics_20,x:516.1,y:613.7}).wait(1).to({graphics:mask_29_graphics_21,x:516.2,y:607}).wait(1).to({graphics:mask_29_graphics_22,x:516.4,y:600.3}).wait(1).to({graphics:mask_29_graphics_23,x:516.6,y:593.6}).wait(1).to({graphics:mask_29_graphics_24,x:516.7,y:586.9}).wait(1).to({graphics:mask_29_graphics_25,x:516.9,y:580.2}).wait(1).to({graphics:mask_29_graphics_26,x:517.1,y:573.5}).wait(1).to({graphics:mask_29_graphics_27,x:517.2,y:566.8}).wait(1).to({graphics:mask_29_graphics_28,x:517.4,y:560.1}).wait(1).to({graphics:mask_29_graphics_29,x:517.6,y:553.4}).wait(1).to({graphics:mask_29_graphics_30,x:517.8,y:546.7}).wait(1).to({graphics:mask_29_graphics_31,x:517.9,y:540}).wait(1).to({graphics:mask_29_graphics_32,x:518.1,y:533.3}).wait(1).to({graphics:mask_29_graphics_33,x:518.3,y:526.6}).wait(1).to({graphics:mask_29_graphics_34,x:518.5,y:519.9}).wait(1).to({graphics:mask_29_graphics_35,x:518.6,y:513.2}).wait(1).to({graphics:mask_29_graphics_36,x:518.8,y:506.5}).wait(1).to({graphics:mask_29_graphics_37,x:519,y:499.8}).wait(1).to({graphics:mask_29_graphics_38,x:519.1,y:493.1}).wait(56));

	// front-street
	this.instance_60 = new lib.Bitmap68();
	this.instance_60.parent = this;
	this.instance_60.setTransform(180,381);

	var maskedShapeInstanceList = [this.instance_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_29;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '004E1E2CD5453241B325111ED05480F7',
	width: 1024,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/heart_city_1_atlas_P_.png", id:"heart_city_1_atlas_P_"}
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
an.compositions['004E1E2CD5453241B325111ED05480F7'] = {
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