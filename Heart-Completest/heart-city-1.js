(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"heart_city_1_atlas_P_", frames: [[1329,1665,78,133],[1976,229,66,131],[1802,1273,188,175],[1802,688,158,223],[1973,845,73,153],[1294,1508,130,155],[1227,1665,100,113],[1426,1508,91,220],[681,1508,198,146],[1985,362,45,149],[1802,229,172,239],[1519,1508,97,202],[1802,913,169,204],[1912,1450,90,317],[1802,0,224,227],[843,1663,166,108],[1618,1695,79,91],[681,1656,160,115],[881,1508,163,153],[1138,1508,154,152],[1802,1119,225,152],[1962,688,77,155],[1618,1508,104,185],[0,1508,679,359],[1046,1508,90,269],[1802,470,181,216],[1985,513,27,64],[1138,1662,87,199],[0,0,1800,1506],[1802,1450,108,293]]}
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



(lib.apts = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backlib = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bankstadiumsymb = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.basillica = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boring = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.chops = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.clock = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cute = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.firstave = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.foshay = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.GoldMf = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.gov = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.guthrie = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.IDS = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.lego = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.library = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.normal = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.pillars = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.poor = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Richfolk = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.stadium = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.station = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.stepsscraper = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.street = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.tallapts = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.trainstation = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.ufobldng = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Web = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.welsfargo = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(29);
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


(lib.wellsfargosymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.welsfargo();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wellsfargosymb, new cjs.Rectangle(-1,-1,108,293), null);


(lib.ufobldngsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ufobldng();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ufobldngsymb, new cjs.Rectangle(-1,-1,87,199), null);


(lib.treesymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.treesymb, new cjs.Rectangle(-1,-1,27,64), null);


(lib.trainstationsym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trainstation();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trainstationsym, new cjs.Rectangle(-1,-1,181,216), null);


(lib.tallaptssymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tallapts();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tallaptssymb, new cjs.Rectangle(-1,-1,90,269), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.street();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,679,359), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tallapts();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,90,269), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chops();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,130,155), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cute();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,91,220), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clock();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,100,113), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.guthrie();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,169,204), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bankstadiumsymb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,188,175), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gov();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,97,202), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lego();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,224,227), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.station();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,77,155), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.normal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,79,91), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boring();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,73,153), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stadium();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,225,152), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pillars();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,160,115), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.library();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,166,108), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GoldMf();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,172,239), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basillica();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,158,223), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,163,153), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Richfolk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,154,152), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trainstation();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,181,216), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backlib();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,66,131), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stepsscraper();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,104,185), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.658,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,51.3,60.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.welsfargo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,108,293), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IDS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,90,317), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foshay();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,45,149), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ufobldng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,87,199), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,27,64), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Web();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.59,0.59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1062.9,889.3), null);


(lib.stepsscrappersymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stepsscraper();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stepsscrappersymb, new cjs.Rectangle(-1,-1,104,185), null);


(lib.stationsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.station();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stationsymb, new cjs.Rectangle(-1,-1,77,155), null);


(lib.stadiumsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stadium();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stadiumsymb, new cjs.Rectangle(-1,-1,225,152), null);


(lib.richfolksymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Richfolk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.richfolksymb, new cjs.Rectangle(0,0,154,152), null);


(lib.poorsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poor();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.poorsymb, new cjs.Rectangle(-1,-1,163,153), null);


(lib.pillarssymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pillars();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pillarssymb, new cjs.Rectangle(-1,-1,160,115), null);


(lib.normalsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.normal();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.normalsymb, new cjs.Rectangle(-1,-1,79,91), null);


(lib.librarysymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.library();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.librarysymb, new cjs.Rectangle(-1,-1,166,108), null);


(lib.legosymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lego();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legosymb, new cjs.Rectangle(-1,-1,224,227), null);


(lib.IDSsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IDS();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.IDSsymb, new cjs.Rectangle(-1,-1,90,317), null);


(lib.guthriesymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.guthrie();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.guthriesymb, new cjs.Rectangle(-1,-1,169,204), null);


(lib.govsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gov();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.govsymb, new cjs.Rectangle(-1,-1,97,202), null);


(lib.goldmfsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GoldMf();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.goldmfsymb, new cjs.Rectangle(-1,-1,172,239), null);


(lib.foshaysymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foshay();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foshaysymb, new cjs.Rectangle(-1,-1,45,149), null);


(lib.firstavesymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firstave();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.firstavesymb, new cjs.Rectangle(0,0,198,146), null);


(lib.cutesymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cute();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cutesymb, new cjs.Rectangle(-1,-1,91,220), null);


(lib.clocksymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clock();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clocksymb, new cjs.Rectangle(-1,-1,100,113), null);


(lib.chopssymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chops();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chopssymb, new cjs.Rectangle(-1,-1,130,155), null);


(lib.boringsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boring();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boringsymb, new cjs.Rectangle(-1,-1,73,153), null);


(lib.basnkstadiumsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bankstadiumsymb();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.basnkstadiumsymb, new cjs.Rectangle(-1,-1,188,175), null);


(lib.basillicasymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basillica();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.basillicasymb, new cjs.Rectangle(-1,-1,158,223), null);


(lib.backlibsymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backlib();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backlibsymb, new cjs.Rectangle(-1,-1,66,131), null);


(lib.aptssymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apts();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.aptssymb, new cjs.Rectangle(-1,-1,78,133), null);


// stage content:
(lib.heartcity1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_88 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_69 = new cjs.Graphics().p("AhGBHQgdgdAAgqQAAgoAdgeQAegdAoAAQAqAAAcAdQAeAeAAAoQAAAqgeAdQgcAdgqAAQgoAAgegdg");
	var mask_graphics_70 = new cjs.Graphics().p("AkbEbQh1h1AAimQAAilB1h2QB2h1ClAAQCmAAB2B1QB1B2AAClQAACmh1B1Qh2B2imAAQilAAh2h2g");
	var mask_graphics_71 = new cjs.Graphics().p("AnwHxQjNjOAAkjQAAkiDNjOQDOjNEiAAQEjAADODNQDNDOAAEiQAAEjjNDOQjODNkjAAQkiAAjOjNg");
	var mask_graphics_72 = new cjs.Graphics().p("ArFLGQkmkmAAmgQAAmeEmknQEmkmGfABQGggBElEmQEmEnAAGeQAAGgkmEmQklEmmgAAQmfAAkmkmg");
	var mask_graphics_73 = new cjs.Graphics().p("AuaOaQl+l+ABocQgBobF+l/QF+l+IcAAQIcAAF+F+QF/F/AAIbQAAIcl/F+Ql+F/ocAAQocAAl+l/g");
	var mask_graphics_74 = new cjs.Graphics().p("AxuRvQnXnWAAqZQAAqZHXnVQHWnXKYAAQKZAAHWHXQHXHVAAKZQAAKZnXHWQnWHWqZAAQqYAAnWnWg");
	var mask_graphics_75 = new cjs.Graphics().p("A1DVEQovouAAsWQAAsVIvovQIuouMVAAQMWAAIuIuQIvIvAAMVQAAMWovIuQouIvsWAAQsVAAouovg");
	var mask_graphics_76 = new cjs.Graphics().p("A4YYZQqHqGAAuTQAAuSKHqGQKGqHOSAAQOTAAKGKHQKHKGAAOSQAAOTqHKGQqGKHuTAAQuSAAqGqHg");
	var mask_graphics_77 = new cjs.Graphics().p("A7tbuQrfreAAwQQAAwPLfreQLfrfQOAAQQPAALfLfQLfLeAAQPQAAQQrfLeQrfLfwPAAQwOAArfrfg");
	var mask_graphics_78 = new cjs.Graphics().p("A/CfDQs3s3AAyMQAAyLM3s3QM3s3SLAAQSMAAM3M3QM3M3AASLQAASMs3M3Qs3M3yMAAQyLAAs3s3g");
	var mask_graphics_79 = new cjs.Graphics().p("EgiXAiYQuPuPAA0JQAA0IOPuPQOPuPUIAAQUJAAOPOPQOPOPAAUIQAAUJuPOPQuPOP0JAAQ0IAAuPuPg");
	var mask_graphics_80 = new cjs.Graphics().p("EglsAltQvnvnAA2GQAA2FPnvnQPnvoWFAAQWGAAPnPoQPnPnAAWFQAAWGvnPnQvnPn2GABQ2FgBvnvng");
	var mask_graphics_81 = new cjs.Graphics().p("EgpBApCQxAxAAA4CQAA4BRAxAQRAxAYBAAQYCAARARAQRARAAAYBQAAYCxARAQxARA4CAAQ4BAAxAxAg");
	var mask_graphics_82 = new cjs.Graphics().p("EgsWAsXQyYyYAA5/QAA5+SYyYQSYyYZ+AAQZ/AASYSYQSYSYAAZ+QAAZ/yYSYQyYSY5/AAQ5+AAyYyYg");
	var mask_graphics_83 = new cjs.Graphics().p("EgvrAvsQzwzwAA78QAA76TwzxQTwzwb7AAQb8AATwTwQTwTxAAb6QAAb8zwTwQzwTw78AAQ77AAzwzwg");
	var mask_graphics_84 = new cjs.Graphics().p("Egy/AzBQ1J1IAA95QAA94VJ1IQVH1Id4AAQd4AAVJVIQVIVIAAd4QAAd51IVIQ1JVI94AAQ94AA1H1Ig");
	var mask_graphics_85 = new cjs.Graphics().p("Eg2VA2WQ2g2hAA/1QAA/0Wg2hQWh2gf0AAQf1AAWhWgQWgWhAAf0QAAf12gWhQ2hWg/1AAQ/0AA2h2gg");
	var mask_graphics_86 = new cjs.Graphics().p("Eg5qA5qUgX4gX4AAAghyUAAAghxAX4gX5UAX5gX4AhxAAAUAhyAAAAX4AX4UAX5AX5AAAAhxUAAAAhygX5AX4UgX4AX5ghyAAAUghxAAAgX5gX5g");
	var mask_graphics_87 = new cjs.Graphics().p("Eg8+A9AUgZSgZRAAAgjvUAAAgjuAZSgZRUAZRgZQAjtAAAUAjvAAAAZQAZQUAZRAZRAAAAjuUAAAAjvgZRAZRUgZQAZQgjvAAAUgjtAAAgZRgZQg");
	var mask_graphics_88 = new cjs.Graphics().p("EhAUBAVUgapgaqAAAglrUAAAglrAapgaoUAaqgaqAlqAAAUAlsAAAAaoAaqUAaqAaoAAAAlrUAAAAlrgaqAaqUgaoAaoglsAAAUglqAAAgaqgaog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_graphics_69,x:529,y:353}).wait(1).to({graphics:mask_graphics_70,x:526.9,y:357.1}).wait(1).to({graphics:mask_graphics_71,x:524.7,y:361.3}).wait(1).to({graphics:mask_graphics_72,x:522.6,y:365.5}).wait(1).to({graphics:mask_graphics_73,x:520.4,y:369.6}).wait(1).to({graphics:mask_graphics_74,x:518.2,y:373.8}).wait(1).to({graphics:mask_graphics_75,x:516.1,y:378}).wait(1).to({graphics:mask_graphics_76,x:513.9,y:382.1}).wait(1).to({graphics:mask_graphics_77,x:511.8,y:386.3}).wait(1).to({graphics:mask_graphics_78,x:509.6,y:390.5}).wait(1).to({graphics:mask_graphics_79,x:507.5,y:394.6}).wait(1).to({graphics:mask_graphics_80,x:505.3,y:398.8}).wait(1).to({graphics:mask_graphics_81,x:503.2,y:403}).wait(1).to({graphics:mask_graphics_82,x:501,y:407.1}).wait(1).to({graphics:mask_graphics_83,x:498.9,y:411.3}).wait(1).to({graphics:mask_graphics_84,x:496.7,y:415.5}).wait(1).to({graphics:mask_graphics_85,x:494.6,y:419.7}).wait(1).to({graphics:mask_graphics_86,x:492.4,y:423.8}).wait(1).to({graphics:mask_graphics_87,x:490.3,y:428}).wait(1).to({graphics:mask_graphics_88,x:488.1,y:432.2}).wait(1));

	// Colore
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(514.9,377.1,1,1,0,0,0,531.4,444.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).wait(1).to({x:515.1,y:376.9,alpha:0.045},0).wait(1).to({x:515.2,y:376.8,alpha:0.089},0).wait(1).to({x:515.3,y:376.6,alpha:0.134},0).wait(1).to({x:515.4,y:376.5,alpha:0.179},0).wait(1).to({x:515.5,y:376.3,alpha:0.224},0).wait(1).to({x:515.6,y:376.2,alpha:0.268},0).wait(1).to({x:515.7,y:376,alpha:0.313},0).wait(1).to({x:515.8,y:375.9,alpha:0.358},0).wait(1).to({x:516,y:375.7,alpha:0.403},0).wait(1).to({x:516.1,y:375.6,alpha:0.447},0).wait(1).to({x:516.2,y:375.4,alpha:0.492},0).wait(1).to({x:516.3,y:375.2,alpha:0.537},0).wait(1).to({x:516.4,y:375.1,alpha:0.582},0).wait(1).to({x:516.5,y:374.9,alpha:0.626},0).wait(1).to({x:516.6,y:374.8,alpha:0.671},0).wait(1).to({x:516.7,y:374.6,alpha:0.716},0).wait(1).to({x:516.9,y:374.5,alpha:0.761},0).wait(1).to({x:517,y:374.3,alpha:0.805},0).wait(1).to({x:517.1,y:374.2,alpha:0.85},0).wait(1));

	// tall-apt-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_53 = new cjs.Graphics().p("AkmENIiikiIhcArIihqEIV8urIAPZpIkNg7IoEDZIABAEIAfIgIAmKXIhtBxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_1_graphics_53,x:576.7,y:180.2}).wait(12).to({graphics:null,x:0,y:0}).wait(24));

	// tall-apt
	this.instance_1 = new lib.tallaptssymb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600.7,435.5,1,1,0,0,0,44,133.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.tallapts();
	this.instance_2.parent = this;
	this.instance_2.setTransform(556,71);

	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(601,205.5,1,1,0,0,0,45,134.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},54).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(1).to({regY:133.5,y:406.1},0).wait(1).to({y:376.7},0).wait(1).to({y:347.3},0).wait(1).to({y:317.9},0).wait(1).to({y:288.4},0).wait(1).to({y:259},0).wait(1).to({y:229.6},0).wait(1).to({y:200.2},0).wait(1).to({y:202.2},0).wait(1).to({y:204.2},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// tree-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_17 = new cjs.Graphics().p("AjsFmIAArLIHZAAIAALLg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_2_graphics_17,x:695.5,y:545.4}).wait(10).to({graphics:null,x:0,y:0}).wait(62));

	// tree
	this.instance_4 = new lib.treesymb();
	this.instance_4.parent = this;
	this.instance_4.setTransform(647.6,558.5,0.999,0.999,-60,0,0,12.4,30.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.tree();
	this.instance_5.parent = this;
	this.instance_5.setTransform(672,514);

	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(685.5,546,1,1,0,0,0,13.5,32);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},17).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},47).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).wait(1).to({regX:12.5,regY:31,scaleX:1,scaleY:1,rotation:-47.1,x:654.8,y:557},0).wait(1).to({rotation:-34.3,x:661.9,y:555.4},0).wait(1).to({rotation:-21.4,x:669,y:553.9},0).wait(1).to({rotation:-8.5,x:676,y:552.4},0).wait(1).to({rotation:4.3,x:683,y:550.9},0).wait(1).to({rotation:17.2,x:690.1,y:549.4},0).wait(1).to({rotation:30,x:697.2,y:547.9},0).wait(1).to({rotation:15,x:691.1,y:546.9},0).wait(1).to({rotation:0,x:685.2,y:545.8},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// ufo-mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_55 = new cjs.Graphics().p("ADREYInMjcQhfA1gqgBQglgCgJgrQgCgIgHhcQgGhIgWgtIAAgBIAowYIN6AUIAOfqIkdFhg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_3_graphics_55,x:338.2,y:122}).wait(10).to({graphics:null,x:0,y:0}).wait(24));

	// Ufo-bldng
	this.instance_7 = new lib.ufobldngsymb();
	this.instance_7.parent = this;
	this.instance_7.setTransform(339.5,385.9,1,1,0,0,0,42.4,98.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.ufobldng();
	this.instance_8.parent = this;
	this.instance_8.setTransform(298,14);

	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(341.5,113.5,1,1,0,0,0,43.5,99.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},55).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({_off:false},0).wait(1).to({regX:42.5,regY:98.5,x:339.8,y:350.3},0).wait(1).to({x:340,y:314.9},0).wait(1).to({x:340.2,y:279.4},0).wait(1).to({x:340.4,y:244},0).wait(1).to({x:340.6,y:208.6},0).wait(1).to({x:340.8,y:173.2},0).wait(1).to({x:340.9,y:137.8},0).wait(1).to({x:341.2,y:102.4},0).wait(1).to({y:106.4},0).wait(1).to({y:110.5},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// foshay-mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_47 = new cjs.Graphics().p("AA1GqIjFgeIkXj+ICXrIIFRlaIDNFBQAAAaAvDkQAxDlgBAaIA7LfIhtBxQAAADgxiCQgxiEAAADIgWDQIh6DLg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_4_graphics_47,x:533.7,y:260.2}).wait(10).to({graphics:null,x:0,y:0}).wait(32));

	// foshay
	this.instance_10 = new lib.foshaysymb();
	this.instance_10.parent = this;
	this.instance_10.setTransform(541,425.5,1,1,0,0,0,21.3,73.7);
	this.instance_10._off = true;

	this.instance_11 = new lib.foshay();
	this.instance_11.parent = this;
	this.instance_11.setTransform(519,194);

	this.instance_12 = new lib.Symbol5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(541.5,268.5,1,1,0,0,0,22.5,74.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},47).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},17).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).wait(1).to({regX:21.5,regY:73.5,x:541.2,y:402.1},0).wait(1).to({y:378.8},0).wait(1).to({y:355.6},0).wait(1).to({y:332.3},0).wait(1).to({y:309.1},0).wait(1).to({y:285.8},0).wait(1).to({y:262.6},0).wait(1).to({y:265.5},0).wait(1).to({y:268.5},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// ids-mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_47 = new cjs.Graphics().p("AihVGQAXgRASgXQAYgdgGgRQgRgvAChFQADhKgKgnIglh5QgSg+AHglQAFgaAJgRIAEgHICMmaInbjRIj18IIO1AxIIIHXIjcNmIidAgIgHFUIgBH6IilDnIgtFoIhYGdIjEAmg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_5_graphics_47,x:696.6,y:173.6}).wait(11).to({graphics:null,x:0,y:0}).wait(31));

	// IDS
	this.instance_13 = new lib.IDSsymb();
	this.instance_13.parent = this;
	this.instance_13.setTransform(694.9,492.4,1,1,0,0,0,43.8,157.1);
	this.instance_13._off = true;

	this.instance_14 = new lib.IDS();
	this.instance_14.parent = this;
	this.instance_14.setTransform(650,20);

	this.instance_15 = new lib.Symbol6();
	this.instance_15.parent = this;
	this.instance_15.setTransform(695,178.5,1,1,0,0,0,45,158.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},47).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},15).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).wait(1).to({regX:44,regY:157.5,x:695.1,y:456.5},0).wait(1).to({y:420.2},0).wait(1).to({y:383.9},0).wait(1).to({y:347.6},0).wait(1).to({y:311.4},0).wait(1).to({y:275.1},0).wait(1).to({y:238.8},0).wait(1).to({y:202.5},0).wait(1).to({y:166.2},0).wait(1).to({y:171.9},0).wait(1).to({y:177.6},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// wells-mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_50 = new cjs.Graphics().p("AhqVzQgHgLA+gbQA+gcgIgKIgDgEIjihWIgKveIg7AZIgBkhIlQgrICD2YIOhgjMADNAhwIngA2IAMNZg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_6_graphics_50,x:448.8,y:213.6}).wait(14).to({graphics:null,x:0,y:0}).wait(25));

	// wells-fargo
	this.instance_16 = new lib.wellsfargosymb();
	this.instance_16.parent = this;
	this.instance_16.setTransform(446.7,516.4,1,1,0,0,0,52.9,145.7);
	this.instance_16._off = true;

	this.instance_17 = new lib.welsfargo();
	this.instance_17.parent = this;
	this.instance_17.setTransform(392,70);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.parent = this;
	this.instance_18.setTransform(446,216.5,1,1,0,0,0,54,146.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},50).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},9).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50).to({_off:false},0).wait(1).to({regX:53,regY:145.5,x:446.8,y:467.1},0).wait(1).to({y:421.7},0).wait(1).to({y:379.9},0).wait(1).to({y:341.8},0).wait(1).to({y:307.3},0).wait(1).to({y:276.4},0).wait(1).to({y:249.2},0).wait(1).to({y:225.6},0).wait(1).to({y:211.6},0).wait(1).to({y:213.2},0).wait(1).to({y:214.4},0).wait(1).to({y:215.3},0).wait(1).to({y:215.9},0).wait(1).to({y:216.1},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// apts-mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_44 = new cjs.Graphics().p("AhuHcIrYqlIGpnuIRrhSIB5YTg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_76 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_77 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_81 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AFXLCIrWqmIGnntIRthSIB4YTg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_7_graphics_44,x:174.7,y:123.8}).wait(30).to({graphics:mask_7_graphics_74,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_75,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_76,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_77,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_78,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_79,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_80,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_81,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_82,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_83,x:129.3,y:100.8}).wait(1).to({graphics:mask_7_graphics_84,x:129.3,y:100.8}).wait(5));

	// apts
	this.instance_19 = new lib.aptssymb();
	this.instance_19.parent = this;
	this.instance_19.setTransform(185.5,251.5,0.718,0.406,0,0,0,38.1,65.5);
	this.instance_19._off = true;

	this.instance_20 = new lib.apts();
	this.instance_20.parent = this;
	this.instance_20.setTransform(162,125,0.658,0.456);

	this.instance_21 = new lib.Symbol8();
	this.instance_21.parent = this;
	this.instance_21.setTransform(187.7,155.4,1,1,0,0,0,25.7,30.4);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_19,this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},44).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},21).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).wait(1).to({regX:38,scaleX:0.71,scaleY:0.42,x:186.4,y:233.4},0).wait(1).to({scaleX:0.7,scaleY:0.43,x:187.4,y:215.3},0).wait(1).to({scaleX:0.69,scaleY:0.43,x:188.3,y:197.2},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:189.2,y:179.1},0).wait(1).to({scaleX:0.67,scaleY:0.45,x:190.2,y:161},0).wait(1).to({scaleX:0.66,scaleY:0.46,x:191.2,y:143},0).wait(1).to({scaleX:0.65,scaleY:0.47,x:189.8,y:149.2},0).wait(1).to({scaleX:0.64,scaleY:0.48,x:188.4,y:155.4},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// steps-mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_42 = new cjs.Graphics().p("AEETTIgFkdIigi0IkrkEIhMgKIhPAoIjcC9Ig32jIFIoiIOtIdIgoc5Ih6CDg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_8_graphics_42,x:789.7,y:162.1}).wait(8).to({graphics:null,x:0,y:0}).wait(39));

	// steps-scraper
	this.instance_22 = new lib.stepsscrappersymb();
	this.instance_22.parent = this;
	this.instance_22.setTransform(784.8,388.8,1,1,0,0,0,51.1,91.5);
	this.instance_22._off = true;

	this.instance_23 = new lib.stepsscraper();
	this.instance_23.parent = this;
	this.instance_23.setTransform(733,59);

	this.instance_24 = new lib.Symbol10();
	this.instance_24.parent = this;
	this.instance_24.setTransform(785,151.5,1,1,0,0,0,52,92.5);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_22,this.instance_23,this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},42).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},23).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(42).to({_off:false},0).wait(1).to({regX:51,x:784.7,y:347.8},0).wait(1).to({y:306.9},0).wait(1).to({y:265.9},0).wait(1).to({y:224.9},0).wait(1).to({y:184},0).wait(1).to({y:143},0).wait(1).to({y:145.9},0).wait(1).to({y:148.8},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// back-lib-mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_39 = new cjs.Graphics().p("AprJMIACyDITVjwIk6ZNIkvgoIjmAqg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_9_graphics_39,x:414.1,y:254.8}).wait(7).to({graphics:null,x:0,y:0}).wait(43));

	// back-lib
	this.instance_25 = new lib.backlibsymb();
	this.instance_25.parent = this;
	this.instance_25.setTransform(393.4,419.5,1,1,0,0,0,32.1,64.3);
	this.instance_25._off = true;

	this.instance_26 = new lib.backlib();
	this.instance_26.parent = this;
	this.instance_26.setTransform(359,206);

	this.instance_27 = new lib.Symbol11();
	this.instance_27.parent = this;
	this.instance_27.setTransform(392,271.5,1,1,0,0,0,33,65.5);
	this.instance_27._off = true;

	var maskedShapeInstanceList = [this.instance_25,this.instance_26,this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},39).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},27).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(39).to({_off:false},0).wait(1).to({regX:32,regY:64.5,x:393.1,y:394.4},0).wait(1).to({x:393,y:369.2},0).wait(1).to({x:392.8,y:344},0).wait(1).to({x:392.7,y:318.7},0).wait(1).to({x:392.5,y:293.5},0).wait(1).to({x:392.4,y:268.3},0).wait(1).to({x:392.3,y:272},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// chops-mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_38 = new cjs.Graphics().p("AB4C5Ijlk1Ii+ENIAYKKIiaAoIkEqeIg8mtIgylKIPxksII6HMIAUUUImagcIiMh6IijCzg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_10_graphics_38,x:623.2,y:250.6}).wait(8).to({graphics:null,x:0,y:0}).wait(43));

	// chops
	this.instance_28 = new lib.chopssymb();
	this.instance_28.parent = this;
	this.instance_28.setTransform(628.8,434.6,1,1,0,0,0,63.9,76.5);
	this.instance_28._off = true;

	this.instance_29 = new lib.chops();
	this.instance_29.parent = this;
	this.instance_29.setTransform(564,181);

	this.instance_30 = new lib.Symbol29();
	this.instance_30.parent = this;
	this.instance_30.setTransform(629,258.5,1,1,0,0,0,65,77.5);
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_28,this.instance_29,this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},38).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},28).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(38).to({_off:false},0).wait(1).to({regX:64,x:628.9,y:403.9},0).wait(1).to({y:373.2},0).wait(1).to({y:342.5},0).wait(1).to({y:311.8},0).wait(1).to({y:281.1},0).wait(1).to({y:250.5},0).wait(1).to({y:258.7},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// Cute-mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_37 = new cjs.Graphics().p("AhIMYIirEXIlkm0IgFlLIgK14ITNgxMgCWAjsIg6AIg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_11_graphics_37,x:893.7,y:220.7}).wait(10).to({graphics:null,x:0,y:0}).wait(42));

	// cute
	this.instance_31 = new lib.cutesymb();
	this.instance_31.parent = this;
	this.instance_31.setTransform(879.8,450.1,1,1,0,0,0,44.6,108.8);
	this.instance_31._off = true;

	this.instance_32 = new lib.cute();
	this.instance_32.parent = this;
	this.instance_32.setTransform(835,115);

	this.instance_33 = new lib.Symbol28();
	this.instance_33.parent = this;
	this.instance_33.setTransform(880.5,225,1,1,0,0,0,45.5,110);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_31,this.instance_32,this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},37).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},27).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(37).to({_off:false},0).wait(1).to({regX:44.5,regY:109,x:879.7,y:417.2},0).wait(1).to({x:879.8,y:384.1},0).wait(1).to({x:879.9,y:350.9},0).wait(1).to({x:880,y:317.8},0).wait(1).to({y:284.7},0).wait(1).to({x:880.1,y:251.6},0).wait(1).to({x:880.2,y:218.5},0).wait(1).to({y:221.7},0).wait(1).to({y:225},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// clock-mask (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_31 = new cjs.Graphics().p("AnXIDIjYsLIKklpIK7GgIgoKsIvYCWg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_12_graphics_31,x:608.3,y:285.1}).wait(8).to({graphics:null,x:0,y:0}).wait(50));

	// clock
	this.instance_34 = new lib.clocksymb();
	this.instance_34.parent = this;
	this.instance_34.setTransform(613.7,398.7,1,1,0,0,0,48.8,55.3);
	this.instance_34._off = true;

	this.instance_35 = new lib.clock();
	this.instance_35.parent = this;
	this.instance_35.setTransform(564,234);

	this.instance_36 = new lib.Symbol27();
	this.instance_36.parent = this;
	this.instance_36.setTransform(614,290.5,1,1,0,0,0,50,56.5);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_34,this.instance_35,this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34}]},31).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},35).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(31).to({_off:false},0).wait(1).to({regX:49,regY:55.5,x:613.9,y:380.1},0).wait(1).to({y:361.3},0).wait(1).to({y:342.5},0).wait(1).to({y:323.7},0).wait(1).to({y:305},0).wait(1).to({y:286.2},0).wait(1).to({y:290.8},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// guthrie-mask (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_22 = new cjs.Graphics().p("Ag/O/IpVqtIn0jIIhuwBIfPhPIIcEcIACMdIj9jEIm/gpIAPGLIiYgDIgSFDIjrBzIgKGDg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_13_graphics_22,x:182.7,y:304.2}).wait(11).to({graphics:null,x:0,y:0}).wait(56));

	// gutrie
	this.instance_37 = new lib.guthriesymb();
	this.instance_37.parent = this;
	this.instance_37.setTransform(158.5,496.7,1,1,0,0,0,83.5,101.2);
	this.instance_37._off = true;

	this.instance_38 = new lib.guthrie();
	this.instance_38.parent = this;
	this.instance_38.setTransform(74,200);

	this.instance_39 = new lib.Symbol26();
	this.instance_39.parent = this;
	this.instance_39.setTransform(158.5,302,1,1,0,0,0,84.5,102);
	this.instance_39._off = true;

	var maskedShapeInstanceList = [this.instance_37,this.instance_38,this.instance_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37}]},22).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},42).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(22).to({_off:false},0).wait(1).to({regY:101,y:441.4},0).wait(1).to({y:392.8},0).wait(1).to({y:350.7},0).wait(1).to({y:315.1},0).wait(1).to({x:158.4,y:293.5},0).wait(1).to({x:158.1,y:297.5},0).wait(1).to({x:157.9,y:300.3},0).wait(1).to({x:157.8,y:302},0).wait(1).to({y:302.6},0).to({_off:true},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// bank-stad-mask (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_38 = new cjs.Graphics().p("AyHwFMAkjABKIgKQyIlABgIhfCbIgFHgI+JC0g");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_14_graphics_38,x:144.1,y:201.1}).wait(9).to({graphics:null,x:0,y:0}).wait(42));

	// Bank-stadium
	this.instance_40 = new lib.basnkstadiumsymb();
	this.instance_40.parent = this;
	this.instance_40.setTransform(354.2,230.1,1,1,0,0,0,92.8,86.2);
	this.instance_40._off = true;

	this.instance_41 = new lib.bankstadiumsymb();
	this.instance_41.parent = this;
	this.instance_41.setTransform(74,113);

	this.instance_42 = new lib.Symbol25();
	this.instance_42.parent = this;
	this.instance_42.setTransform(168,200.5,1,1,0,0,0,94,87.5);
	this.instance_42._off = true;

	var maskedShapeInstanceList = [this.instance_40,this.instance_41,this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40}]},38).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},26).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(38).to({_off:false},0).wait(1).to({regX:93,regY:86.5,x:325.8,y:225.5},0).wait(1).to({x:297.3,y:220.7},0).wait(1).to({x:268.7,y:215.9},0).wait(1).to({x:240.2,y:211},0).wait(1).to({x:211.7,y:206.2},0).wait(1).to({x:183.1,y:201.4},0).wait(1).to({x:154.6,y:196.5},0).wait(1).to({x:161.6,y:198.7},0).wait(1).to({x:168.6,y:201},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// gov-mask (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_34 = new cjs.Graphics().p("AAVN8IiHhJIADqZIgtgCIADhdIgZAAIAAgqIkLhmIhBAKIgPt6IQcgkIgDe3IjaAGIkTAWg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_15_graphics_34,x:307.7,y:220.1}).wait(10).to({graphics:null,x:0,y:0}).wait(45));

	// Gov
	this.instance_43 = new lib.govsymb();
	this.instance_43.parent = this;
	this.instance_43.setTransform(308.6,424,1,1,0,0,0,47.5,100);
	this.instance_43._off = true;

	this.instance_44 = new lib.gov();
	this.instance_44.parent = this;
	this.instance_44.setTransform(260,126);

	this.instance_45 = new lib.Symbol24();
	this.instance_45.parent = this;
	this.instance_45.setTransform(308.5,227,1,1,0,0,0,48.5,101);
	this.instance_45._off = true;

	var maskedShapeInstanceList = [this.instance_43,this.instance_44,this.instance_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_43}]},34).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},32).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(34).to({_off:false},0).wait(1).to({y:382.5},0).wait(1).to({y:341},0).wait(1).to({y:299.6},0).wait(1).to({y:258.1},0).wait(1).to({y:216.6},0).wait(1).to({x:308.7,y:222},0).wait(1).to({x:308.9,y:227.5},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// lego-mask (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_29 = new cjs.Graphics().p("AvPSzIECjCIgvoDIAei8IlXgwIkcwuIYvnBIR1XqIzPh4IjHCgImCBzIgJLHIk2CPg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_16_graphics_29,x:804,y:309.2}).wait(9).to({graphics:null,x:0,y:0}).wait(51));

	// Lego-bldng
	this.instance_46 = new lib.legosymb();
	this.instance_46.parent = this;
	this.instance_46.setTransform(816.9,551.8,1,1,0,0,0,111.1,112.7);
	this.instance_46._off = true;

	this.instance_47 = new lib.lego();
	this.instance_47.parent = this;
	this.instance_47.setTransform(702,210);

	this.instance_48 = new lib.Symbol23();
	this.instance_48.parent = this;
	this.instance_48.setTransform(814,323.5,1,1,0,0,0,112,113.5);
	this.instance_48._off = true;

	var maskedShapeInstanceList = [this.instance_46,this.instance_47,this.instance_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},29).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},35).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(29).to({_off:false},0).wait(1).to({regX:111,regY:112.5,x:816.2,y:517.6},0).wait(1).to({x:815.6,y:483.6},0).wait(1).to({x:815,y:449.5},0).wait(1).to({x:814.5,y:415.5},0).wait(1).to({x:813.9,y:381.5},0).wait(1).to({x:813.3,y:347.5},0).wait(1).to({x:812.7,y:313.5},0).wait(1).to({x:813.2,y:318.2},0).wait(1).to({x:813.8,y:323},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// statoions-mask (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_27 = new cjs.Graphics().p("AlTObIgComIiyhfIAArZIH+osIH9HqIAUHbIkPHwIhyHGIlnBkg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_17_graphics_27,x:505.6,y:333.3}).wait(8).to({graphics:null,x:0,y:0}).wait(54));

	// stations
	this.instance_49 = new lib.stationsymb();
	this.instance_49.parent = this;
	this.instance_49.setTransform(503.4,515.8,1,1,0,0,0,37.6,76.5);
	this.instance_49._off = true;

	this.instance_50 = new lib.station();
	this.instance_50.parent = this;
	this.instance_50.setTransform(463,279);

	this.instance_51 = new lib.Symbol22();
	this.instance_51.parent = this;
	this.instance_51.setTransform(501.5,356.5,1,1,0,0,0,38.5,77.5);
	this.instance_51._off = true;

	var maskedShapeInstanceList = [this.instance_49,this.instance_50,this.instance_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_17;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_49}]},27).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},40).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(27).to({_off:false},0).wait(1).to({regX:37.5,x:502.3,y:455.1},0).wait(1).to({x:501.6,y:405.4},0).wait(1).to({x:501,y:366.8},0).wait(1).to({x:501.1,y:352.4},0).wait(1).to({x:501.6,y:355.7},0).wait(1).to({x:501.8,y:356.8},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// normal-mask (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_29 = new cjs.Graphics().p("ADIFdIm+gpIAFCOIlIjsIAcptIRXiLIh1RFg");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_18_graphics_29,x:264.5,y:254.7}).wait(7).to({graphics:null,x:0,y:0}).wait(53));

	// normal
	this.instance_52 = new lib.normalsymb();
	this.instance_52.parent = this;
	this.instance_52.setTransform(257.6,345.8,1,1,0,0,0,38.6,43.7);
	this.instance_52._off = true;

	this.instance_53 = new lib.normal();
	this.instance_53.parent = this;
	this.instance_53.setTransform(218,212);

	this.instance_54 = new lib.Symbol21();
	this.instance_54.parent = this;
	this.instance_54.setTransform(257.5,257.5,1,1,0,0,0,39.5,45.5);
	this.instance_54._off = true;

	var maskedShapeInstanceList = [this.instance_52,this.instance_53,this.instance_54];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_18;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_52}]},29).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},38).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(29).to({_off:false},0).wait(1).to({regX:38.5,regY:44.5,x:257.5,y:323.3},0).wait(1).to({y:300},0).wait(1).to({y:276.7},0).wait(1).to({y:253.4},0).wait(1).to({y:255.7},0).wait(1).to({y:258},0).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// boring-mask (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_49 = new cjs.Graphics().p("Am0H2IAixfIBNiVIK+AxIA8KjIl8BjIAKLGg");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_19_graphics_49,x:255.3,y:135.3}).wait(8).to({graphics:null,x:0,y:0}).wait(32));

	// Boring
	this.instance_55 = new lib.boringsymb();
	this.instance_55.parent = this;
	this.instance_55.setTransform(254.3,282.4,1,1,0,0,0,35.3,75.6);
	this.instance_55._off = true;

	this.instance_56 = new lib.boring();
	this.instance_56.parent = this;
	this.instance_56.setTransform(220,65);

	this.instance_57 = new lib.Symbol20();
	this.instance_57.parent = this;
	this.instance_57.setTransform(256.5,141.5,1,1,0,0,0,36.5,76.5);
	this.instance_57._off = true;

	var maskedShapeInstanceList = [this.instance_55,this.instance_56,this.instance_57];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_19;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_55}]},49).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},16).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(49).to({_off:false},0).wait(1).to({regX:35.5,regY:75.5,x:254.8,y:257.7},0).wait(1).to({x:255.2,y:233},0).wait(1).to({x:255.5,y:208.4},0).wait(1).to({x:255.8,y:183.8},0).wait(1).to({x:256.2,y:159.1},0).wait(1).to({x:256.5,y:134.5},0).wait(1).to({x:256.3,y:138.5},0).wait(1).to({x:256,y:142.5},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// statium-mask (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_25 = new cjs.Graphics().p("AxSHrIlSh/IEmikIgjhkIgPoMIBBibIZEksIPQHFIsmRSI6tDIg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_20_graphics_25,x:847.3,y:390.1}).wait(12).to({graphics:null,x:0,y:0}).wait(52));

	// stadium
	this.instance_58 = new lib.stadiumsymb();
	this.instance_58.parent = this;
	this.instance_58.setTransform(561,398.9,1,1,0,0,0,111.9,75);
	this.instance_58._off = true;

	this.instance_59 = new lib.stadium();
	this.instance_59.parent = this;
	this.instance_59.setTransform(721,323);

	this.instance_60 = new lib.Symbol19();
	this.instance_60.parent = this;
	this.instance_60.setTransform(833.5,399,1,1,0,0,0,112.5,76);
	this.instance_60._off = true;

	var maskedShapeInstanceList = [this.instance_58,this.instance_59,this.instance_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_20;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_58}]},25).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},40).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(25).to({_off:false},0).wait(1).to({regX:111.5,x:650.4},0).wait(1).to({x:728.2},0).wait(1).to({x:794.1},0).wait(1).to({x:848},0).wait(1).to({x:841.7},0).wait(1).to({x:837.3},0).wait(1).to({x:834.6},0).wait(1).to({x:833.7},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// pillars-mask (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_22 = new cjs.Graphics().p("AoxHIIhxmkIgtj5IiKjmIazjjIgSPzIkGClIlzh1IibBVIh2jTIiPElIjxB0g");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_21_graphics_22,x:655.1,y:381}).wait(67));

	// Pillars
	this.instance_61 = new lib.pillarssymb();
	this.instance_61.parent = this;
	this.instance_61.setTransform(662.4,525.3,1,1,0,0,0,79,56.7);
	this.instance_61._off = true;

	this.instance_62 = new lib.pillars();
	this.instance_62.parent = this;
	this.instance_62.setTransform(575,333);

	this.instance_63 = new lib.Symbol18();
	this.instance_63.parent = this;
	this.instance_63.setTransform(655,390.5,1,1,0,0,0,80,57.5);
	this.instance_63._off = true;

	var maskedShapeInstanceList = [this.instance_61,this.instance_62,this.instance_63];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_21;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_61}]},22).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},43).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(22).to({_off:false},0).wait(1).to({regY:56.5,x:661.7,y:479.9},0).wait(1).to({x:659.8,y:440.7},0).wait(1).to({x:656.7,y:407.5},0).wait(1).to({x:655.4,y:380.4},0).wait(1).to({x:656.3,y:384.6},0).wait(1).to({x:655.4,y:387.6},0).wait(1).to({y:389.4},0).wait(1).to({y:390.1},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// Library--mask (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_20 = new cjs.Graphics().p("AF2IYIjeBTIAIiqIiZhfIhRAZIhfgjIADBJIgrAdIgIBfIpimrIgDroIRygZIILIJIgGJYIiHiJIhuBpIgXDeg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_22_graphics_20,x:392.9,y:372.4}).wait(69));

	// Library
	this.instance_64 = new lib.librarysymb();
	this.instance_64.parent = this;
	this.instance_64.setTransform(391.8,476.2,1,1,0,0,0,81.9,53);
	this.instance_64._off = true;

	this.instance_65 = new lib.library();
	this.instance_65.parent = this;
	this.instance_65.setTransform(309,316);

	this.instance_66 = new lib.Symbol17();
	this.instance_66.parent = this;
	this.instance_66.setTransform(392,370,1,1,0,0,0,83,54);
	this.instance_66._off = true;

	var maskedShapeInstanceList = [this.instance_64,this.instance_65,this.instance_66];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_22;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_64}]},20).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},44).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(20).to({_off:false},0).wait(1).to({regX:82,x:391.9,y:446},0).wait(1).to({y:419.4},0).wait(1).to({y:396.3},0).wait(1).to({y:376.7},0).wait(1).to({y:365},0).wait(1).to({y:367.2},0).wait(1).to({y:368.8},0).wait(1).to({y:369.8},0).wait(1).to({y:370.1},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// gold-mask (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	var mask_23_graphics_12 = new cjs.Graphics().p("AA8TmIucvxIg835IUJA8IIwU7IAAEsIpNDcIATKKg");

	this.timeline.addTween(cjs.Tween.get(mask_23).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_23_graphics_12,x:278.6,y:406.6}).wait(77));

	// Gold-Mf
	this.instance_67 = new lib.goldmfsymb();
	this.instance_67.parent = this;
	this.instance_67.setTransform(284.6,650.4,1,1,0,0,0,84.8,118.4);
	this.instance_67._off = true;

	this.instance_68 = new lib.GoldMf();
	this.instance_68.parent = this;
	this.instance_68.setTransform(199,286);

	this.instance_69 = new lib.Symbol16();
	this.instance_69.parent = this;
	this.instance_69.setTransform(285,405.5,1,1,0,0,0,86,119.5);
	this.instance_69._off = true;

	var maskedShapeInstanceList = [this.instance_67,this.instance_68,this.instance_69];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_23;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_67}]},12).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},50).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(12).to({_off:false},0).wait(1).to({regX:85,regY:118.5,x:284.8,y:597.4},0).wait(1).to({y:549.4},0).wait(1).to({y:506.5},0).wait(1).to({y:468.6},0).wait(1).to({y:435.8},0).wait(1).to({y:408},0).wait(1).to({y:401.8},0).wait(1).to({y:403.4},0).wait(1).to({y:404.5},0).wait(1).to({y:405.2},0).wait(1).to({y:405.4},0).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// Basillica-mask (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	var mask_24_graphics_14 = new cjs.Graphics().p("Aj5PvIgInNIp5mfIgWjnISgw+IJtKtIAFP/IAPCQImGDKIgBBFInvD6g");

	this.timeline.addTween(cjs.Tween.get(mask_24).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_24_graphics_14,x:519.4,y:413}).wait(75));

	// Basillica
	this.instance_70 = new lib.basillicasymb();
	this.instance_70.parent = this;
	this.instance_70.setTransform(524,618.3,1,1,0,0,0,78,110.6);
	this.instance_70._off = true;

	this.instance_71 = new lib.basillica();
	this.instance_71.parent = this;
	this.instance_71.setTransform(448,310);

	this.instance_72 = new lib.Symbol15();
	this.instance_72.parent = this;
	this.instance_72.setTransform(527,421.5,1,1,0,0,0,79,111.5);
	this.instance_72._off = true;

	var maskedShapeInstanceList = [this.instance_70,this.instance_71,this.instance_72];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_24;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_70}]},14).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},51).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(14).to({_off:false},0).wait(1).to({regY:110.5,x:524.5,y:584.5},0).wait(1).to({x:525,y:550.8},0).wait(1).to({x:525.5,y:517.1},0).wait(1).to({x:526,y:483.5},0).wait(1).to({x:526.5,y:449.8},0).wait(1).to({x:527,y:416.1},0).wait(1).to({y:419.1},0).wait(1).to({y:422.1},0).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// Poor-mask (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	var mask_25_graphics_17 = new cjs.Graphics().p("Ag3MjIgLlAIAkg8IhzgyIAChVIixhTIgHgwImriGIgapTIDdkYITbGGIBhNUIpNHQg");

	this.timeline.addTween(cjs.Tween.get(mask_25).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_25_graphics_17,x:680.2,y:480.8}).wait(72));

	// poor
	this.instance_73 = new lib.poorsymb();
	this.instance_73.parent = this;
	this.instance_73.setTransform(694.5,663.4,1,1,0,0,0,80.2,75.5);
	this.instance_73._off = true;

	this.instance_74 = new lib.poor();
	this.instance_74.parent = this;
	this.instance_74.setTransform(611,409);

	this.instance_75 = new lib.Symbol14();
	this.instance_75.parent = this;
	this.instance_75.setTransform(692.5,485.5,1,1,0,0,0,81.5,76.5);
	this.instance_75._off = true;

	var maskedShapeInstanceList = [this.instance_73,this.instance_74,this.instance_75];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_25;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_73}]},17).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},47).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_75}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(17).to({_off:false},0).wait(1).to({regX:80.5,y:613.5},0).wait(1).to({x:693.9,y:569.4},0).wait(1).to({x:692.8,y:531.2},0).wait(1).to({x:691.4,y:498.9},0).wait(1).to({x:691.9,y:479.1},0).wait(1).to({x:691.7,y:482.1},0).wait(1).to({x:691.4,y:484.2},0).wait(1).to({x:691.3,y:485.4},0).wait(1).to({y:485.9},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// Rickfolk-mask (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	var mask_26_graphics_11 = new cjs.Graphics().p("AiSIPIrJndIh9oHIOYpOIQZIXIigMiIvBMOg");

	this.timeline.addTween(cjs.Tween.get(mask_26).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_26_graphics_11,x:609.1,y:554.6}).wait(78));

	// RichFolk
	this.instance_76 = new lib.richfolksymb();
	this.instance_76.parent = this;
	this.instance_76.setTransform(604.9,711.4,1,1,0,0,0,76,75.2);
	this.instance_76._off = true;

	this.instance_77 = new lib.Richfolk();
	this.instance_77.parent = this;
	this.instance_77.setTransform(528,483);

	this.instance_78 = new lib.Symbol13();
	this.instance_78.parent = this;
	this.instance_78.setTransform(605,559,1,1,0,0,0,77,76);
	this.instance_78._off = true;

	var maskedShapeInstanceList = [this.instance_76,this.instance_77,this.instance_78];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_26;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_76}]},11).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},53).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(11).to({_off:false},0).wait(1).to({regX:77,regY:76,x:605.8,y:659.5},0).wait(1).to({y:613},0).wait(1).to({x:605.7,y:572.6},0).wait(1).to({x:605.5,y:545.8},0).wait(1).to({x:605.6,y:550.8},0).wait(1).to({x:605.5,y:554.7},0).wait(1).to({y:557.5},0).wait(1).to({x:605.4,y:559.1},0).wait(1).to({y:559.7},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// train-station-mask (mask)
	var mask_27 = new cjs.Shape();
	mask_27._off = true;
	var mask_27_graphics_6 = new cjs.Graphics().p("AvxFjIAJ4MIdaDgIAyIeIBONYIvIHwIgMDhIinAsg");

	this.timeline.addTween(cjs.Tween.get(mask_27).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_27_graphics_6,x:408.1,y:503.6}).wait(83));

	// train-station\
	this.instance_79 = new lib.trainstationsym();
	this.instance_79.parent = this;
	this.instance_79.setTransform(404.5,715.3,1,1,0,0,0,89.1,107);
	this.instance_79._off = true;

	this.instance_80 = new lib.trainstation();
	this.instance_80.parent = this;
	this.instance_80.setTransform(314,405);

	this.instance_81 = new lib.Symbol12();
	this.instance_81.parent = this;
	this.instance_81.setTransform(404.5,513,1,1,0,0,0,90.5,108);
	this.instance_81._off = true;

	var maskedShapeInstanceList = [this.instance_79,this.instance_80,this.instance_81];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_27;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_79}]},6).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},54).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_81}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(6).to({_off:false},0).wait(1).to({regX:89.5,x:404.9,y:677.1},0).wait(1).to({y:642},0).wait(1).to({y:610},0).wait(1).to({y:581},0).wait(1).to({y:555.1},0).wait(1).to({y:532.2},0).wait(1).to({y:512.4},0).wait(1).to({x:404.8,y:497.7},0).wait(1).to({y:503.1},0).wait(1).to({x:404.7,y:507.3},0).wait(1).to({x:404.6,y:510.3},0).wait(1).to({y:512.1},0).wait(1).to({y:512.7},0).to({_off:true},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

	// First-ave-mask (mask)
	var mask_28 = new cjs.Shape();
	mask_28._off = true;
	mask_28.graphics.p("AvDC7Ig/oEIRJn3IO8KSIhnIRIuWHeg");
	mask_28.setTransform(503.2,617.6);

	// First-Ave
	this.instance_82 = new lib.firstavesymb();
	this.instance_82.parent = this;
	this.instance_82.setTransform(509.1,806.6,1,1,0,0,0,98,72);

	var maskedShapeInstanceList = [this.instance_82];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_28;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(1).to({regX:99,regY:73,x:510.1,y:775.9},0).wait(1).to({y:746.5},0).wait(1).to({y:719.4},0).wait(1).to({y:694.7},0).wait(1).to({y:672.4},0).wait(1).to({y:652.4},0).wait(1).to({y:634.7},0).wait(1).to({y:619.5},0).wait(1).to({y:611.3},0).wait(1).to({y:614.9},0).wait(1).to({y:617.7},0).wait(1).to({y:619.7},0).wait(1).to({y:620.9},0).wait(1).to({y:621.4},0).wait(1).to({regX:98,regY:72,x:509.1,y:620.4},0).wait(59).to({regX:99,regY:73,x:510.1,y:621.4},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

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
	var mask_29_graphics_39 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_40 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_41 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_42 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_43 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_44 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_45 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_46 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_47 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_48 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_49 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_50 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_51 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_52 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_53 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_54 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_55 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_56 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_57 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_58 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_59 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_60 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_61 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_62 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_63 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_64 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_65 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_66 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_67 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_68 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_69 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_70 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_71 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_72 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_73 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_74 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_75 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_76 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_77 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_78 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_79 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_80 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_81 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_82 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_83 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");
	var mask_29_graphics_84 = new cjs.Graphics().p("EhKOAn3MAAAhPsMCUdAAAMAAABPsg");

	this.timeline.addTween(cjs.Tween.get(mask_29).to({graphics:mask_29_graphics_0,x:512.6,y:747.7}).wait(1).to({graphics:mask_29_graphics_1,x:512.8,y:741}).wait(1).to({graphics:mask_29_graphics_2,x:513,y:734.3}).wait(1).to({graphics:mask_29_graphics_3,x:513.1,y:727.6}).wait(1).to({graphics:mask_29_graphics_4,x:513.3,y:720.9}).wait(1).to({graphics:mask_29_graphics_5,x:513.5,y:714.2}).wait(1).to({graphics:mask_29_graphics_6,x:513.6,y:707.5}).wait(1).to({graphics:mask_29_graphics_7,x:513.8,y:700.8}).wait(1).to({graphics:mask_29_graphics_8,x:514,y:694.1}).wait(1).to({graphics:mask_29_graphics_9,x:514.2,y:687.4}).wait(1).to({graphics:mask_29_graphics_10,x:514.3,y:680.7}).wait(1).to({graphics:mask_29_graphics_11,x:514.5,y:674}).wait(1).to({graphics:mask_29_graphics_12,x:514.7,y:667.3}).wait(1).to({graphics:mask_29_graphics_13,x:514.8,y:660.6}).wait(1).to({graphics:mask_29_graphics_14,x:515,y:653.9}).wait(1).to({graphics:mask_29_graphics_15,x:515.2,y:647.2}).wait(1).to({graphics:mask_29_graphics_16,x:515.4,y:640.5}).wait(1).to({graphics:mask_29_graphics_17,x:515.5,y:633.8}).wait(1).to({graphics:mask_29_graphics_18,x:515.7,y:627.1}).wait(1).to({graphics:mask_29_graphics_19,x:515.9,y:620.4}).wait(1).to({graphics:mask_29_graphics_20,x:516.1,y:613.7}).wait(1).to({graphics:mask_29_graphics_21,x:516.2,y:607}).wait(1).to({graphics:mask_29_graphics_22,x:516.4,y:600.3}).wait(1).to({graphics:mask_29_graphics_23,x:516.6,y:593.6}).wait(1).to({graphics:mask_29_graphics_24,x:516.7,y:586.9}).wait(1).to({graphics:mask_29_graphics_25,x:516.9,y:580.2}).wait(1).to({graphics:mask_29_graphics_26,x:517.1,y:573.5}).wait(1).to({graphics:mask_29_graphics_27,x:517.2,y:566.8}).wait(1).to({graphics:mask_29_graphics_28,x:517.4,y:560.1}).wait(1).to({graphics:mask_29_graphics_29,x:517.6,y:553.4}).wait(1).to({graphics:mask_29_graphics_30,x:517.8,y:546.7}).wait(1).to({graphics:mask_29_graphics_31,x:517.9,y:540}).wait(1).to({graphics:mask_29_graphics_32,x:518.1,y:533.3}).wait(1).to({graphics:mask_29_graphics_33,x:518.3,y:526.6}).wait(1).to({graphics:mask_29_graphics_34,x:518.5,y:519.9}).wait(1).to({graphics:mask_29_graphics_35,x:518.6,y:513.2}).wait(1).to({graphics:mask_29_graphics_36,x:518.8,y:506.5}).wait(1).to({graphics:mask_29_graphics_37,x:519,y:499.8}).wait(1).to({graphics:mask_29_graphics_38,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_39,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_40,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_41,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_42,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_43,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_44,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_45,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_46,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_47,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_48,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_49,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_50,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_51,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_52,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_53,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_54,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_55,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_56,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_57,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_58,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_59,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_60,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_61,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_62,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_63,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_64,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_65,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_66,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_67,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_68,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_69,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_70,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_71,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_72,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_73,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_74,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_75,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_76,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_77,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_78,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_79,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_80,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_81,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_82,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_83,x:519.1,y:493.1}).wait(1).to({graphics:mask_29_graphics_84,x:519.1,y:493.1}).wait(5));

	// front-street
	this.instance_83 = new lib.street();
	this.instance_83.parent = this;
	this.instance_83.setTransform(180,381);

	this.instance_84 = new lib.Symbol31();
	this.instance_84.parent = this;
	this.instance_84.setTransform(519.5,560.5,1,1,0,0,0,339.5,179.5);
	this.instance_84._off = true;

	var maskedShapeInstanceList = [this.instance_83,this.instance_84];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_29;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_83}]}).to({state:[{t:this.instance_84}]},74).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_84}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(74).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '2226B092913CDE4393FD3753C54333D8',
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
an.compositions['2226B092913CDE4393FD3753C54333D8'] = {
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