(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"heart_city_1_atlas_P_", frames: [[681,0,181,216],[0,361,154,152],[864,0,154,152],[681,218,198,146],[0,0,679,359]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.firstave = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.street = function() {
	this.spriteSheet = ss["heart_city_1_atlas_P_"];
	this.gotoAndStop(4);
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


(lib.trainstationsym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trainstationsym, new cjs.Rectangle(-1,-1,181,216), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,154,152), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgBgJIADALIgEAH");
	this.shape.setTransform(70.7,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AABgLIACANIgHAH");
	this.shape_1.setTransform(71.9,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAEgLIgGAMIAFAM");
	this.shape_2.setTransform(61.8,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_3.setTransform(4.1,99.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_4.setTransform(14.9,98.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_5.setTransform(14.6,95.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_6.setTransform(14.6,92.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_7.setTransform(14.3,89.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_8.setTransform(14.2,85.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_9.setTransform(14.1,82.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_10.setTransform(14,79.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_11.setTransform(13.8,76);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_12.setTransform(13.8,72.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AhbgoIC3BR");
	this.shape_13.setTransform(71,103.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AhbgnIC3BP");
	this.shape_14.setTransform(70.9,98.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AhagnIC2BP");
	this.shape_15.setTransform(70.7,92.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AhcgpIC5BS");
	this.shape_16.setTransform(70.6,87);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhdgoIC7BR");
	this.shape_17.setTransform(70.6,81.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AhdgoIC7BR");
	this.shape_18.setTransform(70.4,75.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AhdgqIC7BV");
	this.shape_19.setTransform(70.4,69.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AgCjeIAFG9");
	this.shape_20.setTransform(73.4,88.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgEkKIAJIV");
	this.shape_21.setTransform(67.1,89.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AgGkhIANJD");
	this.shape_22.setTransform(47.6,87.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgGkhIANJD");
	this.shape_23.setTransform(40.9,90.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AhdAaIC7gz");
	this.shape_24.setTransform(45.4,102.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AhdAaIC7gz");
	this.shape_25.setTransform(45.1,95.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AhfAaIC/gz");
	this.shape_26.setTransform(45,88.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AhfAaIC/gz");
	this.shape_27.setTransform(44.9,81.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AhfAaIC+gz");
	this.shape_28.setTransform(44.6,74.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AheAaIC9gz");
	this.shape_29.setTransform(44.7,67.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAyA8IABgwIhnhD");
	this.shape_30.setTransform(71.5,54);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgFhXQANAygCB+");
	this.shape_31.setTransform(62.5,16.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgJhhQgFBegIBNIAugdIgBA1");
	this.shape_32.setTransform(63.8,44);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AACAfIgDg8");
	this.shape_33.setTransform(72.9,49.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAEBHQgEhHgChG");
	this.shape_34.setTransform(71.6,29.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AgBAqQgBhCAFgN");
	this.shape_35.setTransform(71.4,12.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AgCjZIAGGz");
	this.shape_36.setTransform(67,27.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("ABNANIgYACIgzgcIgzAVIgbgC");
	this.shape_37.setTransform(66.4,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAAgqIBNAqIAAAnIhLgqIhOAiIABglgAACgDIgCgn");
	this.shape_38.setTransform(66.4,4.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AAeAAQAAANgJAJQgJAIgMAAQgMAAgJgJQgJgJABgMQAAgMAJgJQAJgIALAAQANAAAIAJQAJAJAAALg");
	this.shape_39.setTransform(70.4,19.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AAjABQgBATgKANQgLAOgNgBQgPAAgKgOQgKgOABgSQAAgTALgNQAKgOANABQAPAAAKAOQAKANAAATg");
	this.shape_40.setTransform(62.4,29.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AApABQgBAWgMAQQgMAQgQAAQgRAAgMgRQgMgQABgWQAAgWAMgQQAMgQAQAAQASABALAQQAMAQAAAWg");
	this.shape_41.setTransform(71.4,41.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgMgoIgChFIAOATIgNALIAPAVIgOASIAAAAIARAZIgPAaIAUAbIgTAZIgDhnAgJBAIAAgBIAAAAIAAABIAXAbIgVAWg");
	this.shape_42.setTransform(48.4,37.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AgBjSIADGk");
	this.shape_43.setTransform(80,90.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AByAXIgnAWIi8hb");
	this.shape_44.setTransform(72.2,64.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AB4EkIgMnNIjjhyIAQIw");
	this.shape_45.setTransform(72.8,84.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AiflHIEtCoIAPHr");
	this.shape_46.setTransform(72.3,81.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgzA3IgChlIBtA/");
	this.shape_47.setTransform(39.8,50.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgMmJIAZMT");
	this.shape_48.setTransform(18.8,87.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AgIgGIARAN");
	this.shape_49.setTransform(13.5,53.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgGBAIgEhrIARgLIAEBv");
	this.shape_50.setTransform(11.9,57.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AgNgIIAaAR");
	this.shape_51.setTransform(10.9,68.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAQk0IgbAHIAXJm");
	this.shape_52.setTransform(13.4,99.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AgBFMIgYqAIA3gS");
	this.shape_53.setTransform(12.1,98.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAkl+IglgOIgfARIAbMN");
	this.shape_54.setTransform(17.7,87.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AAHHKIgQuIIAYgG");
	this.shape_55.setTransform(22.4,79.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("Ah0HvIgQuGIEICgIgVjtIgNgEIgLAKIAAABIgBAlIAAABIAAAAIAAgBIANgTIgMgSABWmLIAOgZIgOgTIAAAsIAAACIgBgBgABWlXIAQgYIgQgaIAAAyIAAADIgBgBgABWlUIgBBAIASgng");
	this.shape_56.setTransform(37.1,75.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AgElFIAJKL");
	this.shape_57.setTransform(29.4,90.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AgTgKIAnAV");
	this.shape_58.setTransform(32.9,61.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AhPFDIgNpHIC9g5");
	this.shape_59.setTransform(44.2,88.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AB5ETIgOpsIjjBQIAPJq");
	this.shape_60.setTransform(43,87);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AEBDoIgTqHInuCuIAXKY");
	this.shape_61.setTransform(32.5,90.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAfNjQgClLggrLIghqKIBMgg");
	this.shape_62.setTransform(3.7,180.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgW");
	this.shape_63.setTransform(10.3,252.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgW");
	this.shape_64.setTransform(10.2,249);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AgiALIBFgW");
	this.shape_65.setTransform(10,245.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgX");
	this.shape_66.setTransform(10,242.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_67.setTransform(9.7,238.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AgiALIBFgV");
	this.shape_68.setTransform(9.6,235.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_69.setTransform(9.5,232);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AghAMIBEgW");
	this.shape_70.setTransform(9.5,228.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgW");
	this.shape_71.setTransform(9.3,225.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AghALIBDgW");
	this.shape_72.setTransform(9.1,221.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AghALIBDgW");
	this.shape_73.setTransform(9.1,218.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgX");
	this.shape_74.setTransform(8.9,215.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_75.setTransform(8.8,211.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_76.setTransform(8.8,208.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_77.setTransform(8.6,205.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_78.setTransform(8.5,201.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_79.setTransform(8.3,198.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_80.setTransform(8.1,195.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_81.setTransform(8.1,191.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_82.setTransform(7.8,188.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_83.setTransform(7.8,185.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_84.setTransform(7.6,181.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_85.setTransform(7.4,178.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_86.setTransform(7.3,175.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_87.setTransform(7.1,171.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_88.setTransform(7.1,168.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_89.setTransform(6.7,165.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_90.setTransform(6.8,161.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AghAMIBEgX");
	this.shape_91.setTransform(6.8,158.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgX");
	this.shape_92.setTransform(6.6,155.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_93.setTransform(6.4,151.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_94.setTransform(6.3,148.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_95.setTransform(6.1,145.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgX");
	this.shape_96.setTransform(6,142.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AgkANIBJgZ");
	this.shape_97.setTransform(5.9,138.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgdAKIA7gU");
	this.shape_98.setTransform(4.9,135.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_99.setTransform(5.5,132.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_100.setTransform(5.4,128.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_101.setTransform(5.2,125.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_102.setTransform(5,122.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_103.setTransform(5,119.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_104.setTransform(4.9,115.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_105.setTransform(4.7,112.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_106.setTransform(4.7,109.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_107.setTransform(4,106);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_108.setTransform(4.1,102.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AgIADIARgF");
	this.shape_109.setTransform(15.4,129.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_110.setTransform(15.7,126.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_111.setTransform(15.6,124.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_112.setTransform(15.6,121.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_113.setTransform(15.5,118.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_114.setTransform(15.4,116.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgNADIAbgF");
	this.shape_115.setTransform(15.3,113.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_116.setTransform(15.2,111.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_117.setTransform(15.1,108.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_118.setTransform(15,105.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_119.setTransform(14.8,102.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgBgcIADA5");
	this.shape_120.setTransform(14.8,149.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AgSljIAlLH");
	this.shape_121.setTransform(17.1,200.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AAWHmIgrvL");
	this.shape_122.setTransform(14.7,208.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AACA2IgDhr");
	this.shape_123.setTransform(12.3,147.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgChPIAFCf");
	this.shape_124.setTransform(9.9,145.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AAAgmIABBN");
	this.shape_125.setTransform(10.3,159.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AgSngIAlPB");
	this.shape_126.setTransform(12.3,211.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AhFgXICKAv");
	this.shape_127.setTransform(69.1,108.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("Ag8AOIB5gb");
	this.shape_128.setTransform(42.2,118.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AheAaIC9gz");
	this.shape_129.setTransform(45.5,109.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_130.setTransform(9.1,263.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AgkANIBJgZ");
	this.shape_131.setTransform(10.5,259.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AgkALIBJgV");
	this.shape_132.setTransform(10.3,256.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-1,-1,90,268.9), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgUAKQADgFAKgDQAHgCAHgDQAGgDADAAQADAAABACQACACgBAC");
	this.shape.setTransform(9.2,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AAOgHQABAAABgCQAAgCgDAAQgNAAgHAFQgFADgCAEQgCAGACAF");
	this.shape_1.setTransform(6.6,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAdgZQAAgDgFgDQgDgBgGAAQgNACgMANQgNALgEAMQgEARALAK");
	this.shape_2.setTransform(8.2,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgZAXQgDgGABgHQACgHAFgEQAGgIAQgGIARgGIAEAAQAFABAAAEQAAADgBAF");
	this.shape_3.setTransform(14.8,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgdCtQgCAJgIAGQgIAGgJgBQgKAAgHgHQgHgIgBgJQgQAIgHgHQgDgDgBgFQgIgUADgLIAGgMQADgKgMgTQgMgSAJgLQABgBAFgEQAEgDACgCQADgGgDgLQgFgfAQgIIAGgDQADgDgBgHQgDgHgBgDQgCgIAFgJQAFgIAIgEQALgEAYABQgHgGAEgJQAEgJAJABQgEgBgCgEQAEgDAFABQAFAAADADQAFgDgFgHQgFgGgBgDQgBgEACgFQAEgRAKAAQgJgSAFgKQACgEAGgGIALgMQgGgXAHgKQADARARAGIgEAHQAGADAOAAQAFACADAFQACAFgDADQACgCADACQACACAAACQAAADgEAGQgHAMAEAPQAGAXACAWQAAAFACADQABAEAGAHQAFAIgGADQAIgDAJAEQAJAEAFAHQAJAPgHAUQAKAFAGALQAHALgBALQgBAHAAADQABAEADAGQABAHgHAGQgFAFgIACQAHgCAGAGQAHAGABAIQABAOgOAPQAHAHABAKQAAALgFAIQgGAIgKACQgKADgJgFQAGANgFAGQgFAFgKgDQgOgDgCAAQABAFgDAHQgEAHAAADQAAACADAEQACADgCADQgDAJgUgDQgIgBgLgFQgLgFgFgBQgIgBgDAAQgEgBgCgHQgEgMAEgQg");
	this.shape_4.setTransform(12.4,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgfhaQASAlgFBFQgCAkgGAcQAlAfAUgoQgIgKgHgaQgOg0ABhQ");
	this.shape_5.setTransform(16.6,52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-1,-1,26.8,64.1), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AAdAyIg4hVIADgP");
	this.shape.setTransform(7.2,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AAdBAIg7hdIASgKQAXgMAagK");
	this.shape_1.setTransform(7.9,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("ADiBdIAAgoIgYAQIgCgmIgYAPIgCghIgVARIgFghIgUAUIgFgfIgVAWIgEghIgWAZIgJghIgPAbIgMgfIgNAcIgMgdIgNAcIgLgdIgPAfIgPgbIgOAcIgRgYIgMAeIgTgVIgHAbIgWgRIgGAZIgcgLIgFALIg4hZIAEgP");
	this.shape_2.setTransform(32.6,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAjHmIAAvAIhFBFIAANx");
	this.shape_3.setTransform(11.7,66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("ADgB6Qg7hRhVghQh7guicBEIg6hdIAvgXQA7gZA7gKQCCgUBgAxQBKAmAyBMQAEAHgDAHg");
	this.shape_4.setTransform(36.1,12.4,1,1,0,0,0,0,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("ADiCjIAAhbQAAg3gfgpQg7hShVggQh7gwicBF");
	this.shape_5.setTransform(38.1,30.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AApkxIhQBqIAAH8");
	this.shape_6.setTransform(4,85.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AChKNIAAwkQhbjJjqgn");
	this.shape_7.setTransform(56.2,103.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgmGdIAAsBIBMhKIAANp");
	this.shape_8.setTransform(35.8,81.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AiCiQIEAAAIAAEm");
	this.shape_9.setTransform(72.2,182.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-1,-1,86.8,199.5), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape.setTransform(40.4,128.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_1.setTransform(40,121.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAAgTIABAo");
	this.shape_2.setTransform(39.2,112.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_3.setTransform(38.8,104.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAo");
	this.shape_4.setTransform(38.4,96);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_5.setTransform(38,87.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_6.setTransform(37.4,79.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_7.setTransform(36.9,71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAo");
	this.shape_8.setTransform(36.4,62.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_9.setTransform(35.9,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_10.setTransform(35.6,45.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_11.setTransform(35.1,37.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_12.setTransform(17.6,86);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_13.setTransform(16.6,86);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_14.setTransform(15.5,86);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_15.setTransform(17.7,77.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_16.setTransform(16.6,77.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_17.setTransform(15.6,77.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_18.setTransform(17.8,69.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_19.setTransform(16.7,69.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_20.setTransform(15.6,69.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_21.setTransform(17.8,60.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_22.setTransform(16.7,60.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_23.setTransform(15.6,60.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_24.setTransform(17.9,52.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_25.setTransform(16.8,52.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_26.setTransform(15.7,52.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_27.setTransform(17.9,44);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_28.setTransform(16.9,44);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_29.setTransform(15.8,44);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_30.setTransform(17.9,35.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_31.setTransform(16.9,35.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_32.setTransform(15.8,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_33.setTransform(17.9,27.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_34.setTransform(16.9,27.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_35.setTransform(15.8,27.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAsgWIAAAWIhXAXIABgUg");
	this.shape_36.setTransform(9.3,40.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_37.setTransform(9.8,88.5,1,1,0,0,0,0,-0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_38.setTransform(11.9,87.9,1,1,0,0,0,0,-0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_39.setTransform(5.6,81.2,1,1,0,0,0,0,-0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_40.setTransform(7.7,80.5,1,1,0,0,0,0,-0.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgEIAAgsIgNAEg");
	this.shape_41.setTransform(9.8,79.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNADg");
	this.shape_42.setTransform(12,79.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_43.setTransform(5.6,72.6,1,1,0,0,0,0,-0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_44.setTransform(7.7,71.9,1,1,0,0,0,0,-0.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_45.setTransform(9.8,71.3,1,1,0,0,0,0,-0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_46.setTransform(12,70.6,1,1,0,0,0,0,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_47.setTransform(5.7,64,1,1,0,0,0,0,-0.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_48.setTransform(7.9,63.3,1,1,0,0,0,0,-0.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_49.setTransform(10,62.7,1,1,0,0,0,0,-0.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_50.setTransform(12.1,62,1,1,0,0,0,0,-0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_51.setTransform(5.8,55.4,1,1,0,0,0,0,-0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_52.setTransform(7.9,54.7,1,1,0,0,0,0,-0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_53.setTransform(10.1,54.1,1,1,0,0,0,0,-0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_54.setTransform(12.2,53.4,1,1,0,0,0,0,-0.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_55.setTransform(6,46.7,1,1,0,0,0,0,-0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_56.setTransform(8.1,46.1,1,1,0,0,0,0,-0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_57.setTransform(10.3,45.4,1,1,0,0,0,0,-0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNADg");
	this.shape_58.setTransform(12.4,44.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_59.setTransform(6,38.1,1,1,0,0,0,0,-0.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_60.setTransform(8.1,37.5,1,1,0,0,0,0,-0.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_61.setTransform(10.3,36.8,1,1,0,0,0,0,-0.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_62.setTransform(12.4,36.2,1,1,0,0,0,0,-0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AhCgRIAAAWICFANIAAgTg");
	this.shape_63.setTransform(26.4,39.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AhFgIICLAR");
	this.shape_64.setTransform(26,20.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("Ag1AVIBsgp");
	this.shape_65.setTransform(9.4,22.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AgboCIA3QF");
	this.shape_66.setTransform(35.9,72);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AACnBIgDOD");
	this.shape_67.setTransform(18.7,63.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AACm6IgDN1");
	this.shape_68.setTransform(14.6,63.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_69.setTransform(32.4,87.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_70.setTransform(29,87.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_71.setTransform(25.8,86.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVACg");
	this.shape_72.setTransform(22.5,86.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_73.setTransform(32.2,79.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_74.setTransform(28.9,78.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_75.setTransform(25.6,78.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_76.setTransform(22.4,77.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_77.setTransform(32,70.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_78.setTransform(28.8,70.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_79.setTransform(25.4,70);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_80.setTransform(22.2,69.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_81.setTransform(31.8,62.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_82.setTransform(28.6,62);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVACg");
	this.shape_83.setTransform(25.3,61.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_84.setTransform(22,61.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_85.setTransform(31.7,54);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_86.setTransform(28.4,53.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_87.setTransform(25.2,53.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_88.setTransform(21.8,52.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_89.setTransform(31.6,45.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_90.setTransform(28.2,45.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_91.setTransform(25,44.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgBgsIAUADg");
	this.shape_92.setTransform(21.7,44.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_93.setTransform(31.4,37.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAUACg");
	this.shape_94.setTransform(28.1,36.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_95.setTransform(24.8,36.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_96.setTransform(21.6,36.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AAUAAIgVgCIgRAF");
	this.shape_97.setTransform(17.9,0.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AApAAIgqgGIgmAN");
	this.shape_98.setTransform(17.9,3.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AA+AAIhDgJIg2AU");
	this.shape_99.setTransform(18,6.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("ABSAAIhZgNIhJAc");
	this.shape_100.setTransform(18.1,9.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("ABngBIhwgQIhcAk");
	this.shape_101.setTransform(18.2,12.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AB8gCIiIgTIhuAr");
	this.shape_102.setTransform(18.3,15.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AiPAaICCgzICeAW");
	this.shape_103.setTransform(18.4,18.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("ACmgEIi1gZIiVA7");
	this.shape_104.setTransform(18.5,21.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgDBbIAHi1");
	this.shape_105.setTransform(17.3,9.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AhPINIAUsqICMjt");
	this.shape_106.setTransform(8,52.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AhyrEICaDNIBKS+");
	this.shape_107.setTransform(31.2,71.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_108.setTransform(1.7,81.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_109.setTransform(1.9,73.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_110.setTransform(2,64.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_111.setTransform(2.3,56.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_112.setTransform(2.4,47.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_113.setTransform(2.6,38.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgHGbIAQs1");
	this.shape_114.setTransform(3.1,64.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_115.setTransform(32.8,112.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_116.setTransform(29.6,112.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_117.setTransform(26.2,111.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_118.setTransform(23,111.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_119.setTransform(32.6,104.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_120.setTransform(29.4,103.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_121.setTransform(26.1,103.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_122.setTransform(22.8,103.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVADg");
	this.shape_123.setTransform(32.5,95.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_124.setTransform(29.2,95.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_125.setTransform(26,95.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_126.setTransform(22.6,94.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_127.setTransform(17.6,102.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_128.setTransform(16.5,102.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_129.setTransform(15.4,102.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_130.setTransform(17.6,94.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_131.setTransform(16.6,94.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_132.setTransform(15.5,94.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("AAHATIAAgeIgNAEIAAAW");
	this.shape_133.setTransform(5.6,104.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("AAHAXIAAgnIgNAFIAAAg");
	this.shape_134.setTransform(7.7,104.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNAFg");
	this.shape_135.setTransform(9.8,104.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_136.setTransform(12,103.8,1,1,0,0,0,0,-0.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_137.setTransform(5.4,98.3,1,1,0,0,0,0,-0.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_138.setTransform(7.6,97.6,1,1,0,0,0,0,-0.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_139.setTransform(9.7,97,1,1,0,0,0,0,-0.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_140.setTransform(11.8,96.3,1,1,0,0,0,0,-0.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_141.setTransform(5.5,89.8,1,1,0,0,0,0,-0.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_142.setTransform(1.3,99.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_143.setTransform(1.4,90.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_144.setTransform(7.6,89.2,1,1,0,0,0,0,-0.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AgJAWIgBglIAVADIAAAQ");
	this.shape_145.setTransform(26.8,144.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_146.setTransform(23.6,145);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AAAAPIgBgYIAHAB");
	this.shape_147.setTransform(32.3,136.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_148.setTransform(30,137.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_149.setTransform(26.8,137.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_150.setTransform(23.4,136.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("AAAAXIgEAAIgBgtIAQAC");
	this.shape_151.setTransform(32.6,129.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_152.setTransform(29.8,129.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_153.setTransform(26.6,128.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgCIgBgtIAUADg");
	this.shape_154.setTransform(23.3,128.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_155.setTransform(33,121);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_156.setTransform(29.7,120.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_157.setTransform(26.4,120.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_158.setTransform(23.2,119.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-1,-1,44.6,149.4), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AjvBiIDCi8IEhgG");
	this.shape.setTransform(24.1,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("Ai+i6IEIDXIB1Cf");
	this.shape_1.setTransform(67.5,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("Ai+i6IEaDpIBjCM");
	this.shape_2.setTransform(67.2,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AjvBdIDCiyIEhgF");
	this.shape_3.setTransform(24.1,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgMgEIAZAJ");
	this.shape_4.setTransform(20.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgPgFIAfAL");
	this.shape_5.setTransform(25,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgOgGIAeAN");
	this.shape_6.setTransform(29.7,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgPgGIAfAN");
	this.shape_7.setTransform(34.5,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgOgHIAdAP");
	this.shape_8.setTransform(39.3,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgOgHIAdAP");
	this.shape_9.setTransform(44.2,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AAfXNMgA8guZ");
	this.shape_10.setTransform(51.2,148.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AlXpeIArggIABAjIAvgiIABAmIAvgnIACAmIAvgnIABAlIAwgmIABAnIA1gpIEaDqIBjCNIANOX");
	this.shape_11.setTransform(53.4,64.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgT0UUAA2AoLgAUAAZ");
	this.shape_12.setTransform(44.7,130.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AgQ0LUAAoAoBgAJAAR");
	this.shape_13.setTransform(39.5,129.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AgMuaQAQQ+AJL3");
	this.shape_14.setTransform(34.4,92.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AgPuEQAnbzgJAS");
	this.shape_15.setTransform(29.8,90.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AgQt7QAobggJAS");
	this.shape_16.setTransform(25,89.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhVMVQgY0bgCiiIC+jCQAobKgJAS");
	this.shape_17.setTransform(11.2,88.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AAAjIQADGHgDAG");
	this.shape_18.setTransform(36.2,237.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_19.setTransform(50.5,310.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_20.setTransform(48.4,310.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABW");
	this.shape_21.setTransform(46.3,310.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAAgqIAABV");
	this.shape_22.setTransform(44.2,310.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AAAgpIAABT");
	this.shape_23.setTransform(42.1,310.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAAgoIAABR");
	this.shape_24.setTransform(40,310.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAAgnIAABP");
	this.shape_25.setTransform(37.9,310.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABM");
	this.shape_26.setTransform(35.8,310);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABM");
	this.shape_27.setTransform(33.8,310);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAkAAIhHAA");
	this.shape_28.setTransform(35.7,306);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("Ag0gFIBHACIAgAK");
	this.shape_29.setTransform(37.4,305.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_30.setTransform(39.7,303.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_31.setTransform(39.7,300.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_32.setTransform(39.7,298.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_33.setTransform(39.7,295.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_34.setTransform(39.7,292.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_35.setTransform(39.7,290.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_36.setTransform(39.7,287.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_37.setTransform(39.7,285);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_38.setTransform(39.7,282.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_39.setTransform(39.7,279.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_40.setTransform(39.7,277.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_41.setTransform(39.7,274.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_42.setTransform(39.7,271.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_43.setTransform(39.7,269.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_44.setTransform(39.7,266.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_45.setTransform(39.7,264);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AgojvIBOAfIAAHE");
	this.shape_46.setTransform(43.4,281.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AhfjyIBHAAIAAHlIB4AA");
	this.shape_47.setTransform(41.7,281.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-1,-1.1,89.7,317.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgiAKIBCggIAAApIgQAI");
	this.shape.setTransform(18.5,128.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAIIBDggIgBApIgPAIg");
	this.shape_1.setTransform(18.4,128.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_2.setTransform(17.3,124.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_3.setTransform(17.3,124.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgVAIIAogTIgBAf");
	this.shape_4.setTransform(9.3,126.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAEIAngTIAAAfg");
	this.shape_5.setTransform(9.2,126.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_6.setTransform(17.3,118.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_7.setTransform(17.3,118.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgrAfIAAgXIBXgqIgBAoIhAAh");
	this.shape_8.setTransform(6.8,122.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAdIAAgXIBXgqIgBAoIhAAhg");
	this.shape_9.setTransform(6.8,122.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_10.setTransform(17.3,111.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_11.setTransform(17.3,111.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_12.setTransform(6.8,117);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_13.setTransform(6.8,117);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_14.setTransform(17.3,105.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_15.setTransform(17.3,105.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_16.setTransform(6.8,110.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_17.setTransform(6.8,110.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_18.setTransform(17.3,99.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_19.setTransform(17.3,99.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_20.setTransform(6.8,104.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXArg");
	this.shape_21.setTransform(6.8,104.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_22.setTransform(17.3,93.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_23.setTransform(17.3,93.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_24.setTransform(6.8,98.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_25.setTransform(6.8,98.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_26.setTransform(17.3,86.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_27.setTransform(17.3,86.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_28.setTransform(6.8,92.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_29.setTransform(6.8,92.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_30.setTransform(17.3,80.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXAqg");
	this.shape_31.setTransform(17.3,80.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_32.setTransform(6.8,85.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_33.setTransform(6.8,85.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_34.setTransform(17.3,74.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_35.setTransform(17.3,74.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_36.setTransform(6.8,79.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_37.setTransform(6.8,79.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_38.setTransform(17.3,68.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_39.setTransform(17.3,68.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_40.setTransform(6.8,73.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_41.setTransform(6.8,73.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_42.setTransform(17.3,61.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_43.setTransform(17.3,61.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_44.setTransform(6.8,67);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_45.setTransform(6.8,67.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_46.setTransform(65.1,147.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_47.setTransform(65.1,147.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_48.setTransform(56.4,143.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_49.setTransform(56.4,143.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_50.setTransform(47.6,139.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_51.setTransform(47.6,139.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_52.setTransform(38.8,135.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_53.setTransform(38.8,135.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_54.setTransform(30,131);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_55.setTransform(30,131);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_56.setTransform(65.1,141.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_57.setTransform(65.1,141.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_58.setTransform(56.4,137);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_59.setTransform(56.4,137);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_60.setTransform(47.6,132.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAog");
	this.shape_61.setTransform(47.6,132.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_62.setTransform(38.8,128.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_63.setTransform(38.8,128.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_64.setTransform(30,124.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAng");
	this.shape_65.setTransform(30,124.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_66.setTransform(65.1,134.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_67.setTransform(65.1,134.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_68.setTransform(56.4,130.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_69.setTransform(56.4,130.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_70.setTransform(47.6,126.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_71.setTransform(47.6,126.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_72.setTransform(38.8,122.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_73.setTransform(38.8,122.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_74.setTransform(30,118.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_75.setTransform(30,118.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_76.setTransform(65.1,128.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_77.setTransform(65.1,128.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_78.setTransform(56.4,124.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_79.setTransform(56.4,124.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_80.setTransform(47.6,120.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_81.setTransform(47.6,120.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_82.setTransform(38.8,116.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_83.setTransform(38.8,116.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_84.setTransform(30,112.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_85.setTransform(30,112.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_86.setTransform(65.1,122.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_87.setTransform(65.1,122.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_88.setTransform(56.4,118.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_89.setTransform(56.4,118.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_90.setTransform(47.6,114.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_91.setTransform(47.6,114.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_92.setTransform(38.8,110);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_93.setTransform(38.8,110);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_94.setTransform(30,106);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_95.setTransform(30,106);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_96.setTransform(65.1,116);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_97.setTransform(65.1,116);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_98.setTransform(56.4,111.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_99.setTransform(56.4,111.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_100.setTransform(47.6,107.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_101.setTransform(47.6,107.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_102.setTransform(38.8,103.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_103.setTransform(38.8,103.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_104.setTransform(30,99.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_105.setTransform(30,99.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_106.setTransform(65.1,109.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_107.setTransform(65.1,109.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_108.setTransform(56.4,105.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_109.setTransform(56.4,105.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_110.setTransform(47.6,101.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_111.setTransform(47.6,101.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_112.setTransform(38.8,97.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_113.setTransform(38.8,97.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_114.setTransform(30,93.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_115.setTransform(30,93.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_116.setTransform(65.1,103.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_117.setTransform(65.1,103.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_118.setTransform(56.4,99.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_119.setTransform(56.4,99.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_120.setTransform(47.6,95.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_121.setTransform(47.6,95.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_122.setTransform(38.8,91.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIgBAog");
	this.shape_123.setTransform(38.8,91.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_124.setTransform(30,87.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_125.setTransform(30,87.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_126.setTransform(65.1,97.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_127.setTransform(65.1,97.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_128.setTransform(56.4,93.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_129.setTransform(56.4,93.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_130.setTransform(47.6,89.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_131.setTransform(47.6,89.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_132.setTransform(38.8,85);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_133.setTransform(38.8,85);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_134.setTransform(30,80.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_135.setTransform(30,80.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_136.setTransform(65.1,91);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_137.setTransform(65.1,91);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_138.setTransform(56.4,86.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_139.setTransform(56.4,86.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_140.setTransform(47.6,82.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_141.setTransform(47.6,82.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_142.setTransform(38.8,78.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_143.setTransform(38.8,78.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_144.setTransform(30,74.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_145.setTransform(30,74.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_146.setTransform(65.1,84.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_147.setTransform(65.1,84.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_148.setTransform(56.4,80.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_149.setTransform(56.4,80.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_150.setTransform(47.6,76.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_151.setTransform(47.6,76.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_152.setTransform(38.8,72.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_153.setTransform(38.8,72.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_154.setTransform(30,68.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_155.setTransform(30,68.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_156.setTransform(65.1,78.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_157.setTransform(65.1,78.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_158.setTransform(56.4,74.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_159.setTransform(56.4,74.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_160.setTransform(47.6,70.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_161.setTransform(47.6,70.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_162.setTransform(38.8,66.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_163.setTransform(38.8,66.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_164.setTransform(30,62.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_165.setTransform(30,62.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_166.setTransform(65.1,72.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_167.setTransform(65.1,72.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_168.setTransform(56.4,68.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAog");
	this.shape_169.setTransform(56.4,68.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_170.setTransform(47.6,64);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_171.setTransform(47.6,64);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_172.setTransform(38.8,59.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_173.setTransform(38.8,59.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_174.setTransform(30,55.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_175.setTransform(30,55.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_176.setTransform(65.1,65.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_177.setTransform(65.1,65.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_178.setTransform(56.4,61.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_179.setTransform(56.4,61.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_180.setTransform(47.6,57.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_181.setTransform(47.6,57.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_182.setTransform(38.8,53.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_183.setTransform(38.8,53.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_184.setTransform(30,49.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAng");
	this.shape_185.setTransform(30,49.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_186.setTransform(65.1,59.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_187.setTransform(65.1,59.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_188.setTransform(56.4,55.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_189.setTransform(56.4,55.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_190.setTransform(47.6,51.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_191.setTransform(47.6,51.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_192.setTransform(38.8,47.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_193.setTransform(38.8,47.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_194.setTransform(30,43.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_195.setTransform(30,43.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_196.setTransform(65.1,53.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_197.setTransform(65.1,53.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_198.setTransform(56.4,49.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_199.setTransform(56.4,49.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_200.setTransform(47.6,45.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_201.setTransform(47.6,45.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_202.setTransform(38.8,41.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_203.setTransform(38.8,41.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_204.setTransform(30,37.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_205.setTransform(30,37.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_206.setTransform(65.1,47.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_207.setTransform(65.1,47.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_208.setTransform(56.4,43.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_209.setTransform(56.4,43.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_210.setTransform(47.6,39);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_211.setTransform(47.6,39);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_212.setTransform(38.8,34.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_213.setTransform(38.8,34.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_214.setTransform(30,30.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_215.setTransform(30,30.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_216.setTransform(65.1,40.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_217.setTransform(65.1,40.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_218.setTransform(56.4,36.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_219.setTransform(56.4,36.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_220.setTransform(47.6,32.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_221.setTransform(47.6,32.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_222.setTransform(38.8,28.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_223.setTransform(38.8,28.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_224.setTransform(30,24.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_225.setTransform(30,24.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_226.setTransform(65.1,34.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_227.setTransform(65.1,34.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_228.setTransform(56.4,30.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_229.setTransform(56.4,30.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_230.setTransform(47.6,26.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_231.setTransform(47.6,26.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_232.setTransform(38.8,22.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_233.setTransform(38.8,22.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_234.setTransform(30,18.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_235.setTransform(30,18.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_236.setTransform(17.3,55.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_237.setTransform(17.3,55.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_238.setTransform(6.8,60.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_239.setTransform(6.8,60.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_240.setTransform(17.3,49.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_241.setTransform(17.3,49.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_242.setTransform(6.8,54.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_243.setTransform(6.8,54.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_244.setTransform(17.3,43.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_245.setTransform(17.3,43.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_246.setTransform(6.8,48.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_247.setTransform(6.8,48.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_248.setTransform(17.3,36.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_249.setTransform(17.3,36.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_250.setTransform(6.8,42.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_251.setTransform(6.8,42.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_252.setTransform(17.3,30.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXAqg");
	this.shape_253.setTransform(17.3,30.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_254.setTransform(6.8,35.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_255.setTransform(6.8,35.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_256.setTransform(17.3,24.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_257.setTransform(17.3,24.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_258.setTransform(6.8,29.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_259.setTransform(6.8,29.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_260.setTransform(17.3,18.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_261.setTransform(17.3,18.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_262.setTransform(6.8,23.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_263.setTransform(6.8,23.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#292929").ss(0.3).p("AlgJ0IAAxfIDviCIHSDrIAAGT");
	this.shape_264.setTransform(35.3,62.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AlgnuIDviCIHSDrIAAGTIrBJjg");
	this.shape_265.setTransform(35.3,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,72.7,153.2), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AAbiGIgyARIAAEA");
	this.shape.setTransform(2.4,121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AgpidIBQAjIAAEc");
	this.shape_1.setTransform(48.9,72.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAAvrIAAfX");
	this.shape_2.setTransform(55.8,187.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_3.setTransform(65.7,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_4.setTransform(66.7,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("ADvgjIAAhCQgHgEgMgDQgZgGgcAJImVCRIAABN");
	this.shape_5.setTransform(50.8,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAAgrIABBX");
	this.shape_6.setTransform(21.4,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AjCCAQgBgbAAgcQAAg3ABgBIGJiR");
	this.shape_7.setTransform(35.1,36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("Ai4CFIgGiPIGBh2");
	this.shape_8.setTransform(27.2,52.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgSBTIAAirIAlAjIABCZ");
	this.shape_9.setTransform(48.6,48.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AC9QtMAAJghTImLBxIAAKp");
	this.shape_10.setTransform(24.9,162.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("ABIhLIAAs3Ig1gTIhZAaIAAcX");
	this.shape_11.setTransform(55,178.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAkI+IAAx0IhIAUIAAEe");
	this.shape_12.setTransform(61.9,113.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AA9kCIh2g5IAHJ+");
	this.shape_13.setTransform(60.9,55.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("ADKDAIAAlPIApgiInbCsIgWAcIHIim");
	this.shape_14.setTransform(46.8,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAThTIgiASIABCZ");
	this.shape_15.setTransform(61.1,49.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AglBWIgCijIBSAw");
	this.shape_16.setTransform(67,49.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AgSEJIgEoLIAyAL");
	this.shape_17.setTransform(73.5,32.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AANEGIgBnYIgYgjIAAH0");
	this.shape_18.setTransform(77.5,32.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AgkhWIBGAhQAAAAgDBJQgCAwABAT");
	this.shape_19.setTransform(82.5,42.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAuBaQgCgkACg0QACgsABgCIhmgu");
	this.shape_20.setTransform(84.2,57.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAfAMIg9gX");
	this.shape_21.setTransform(68.7,58.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAToIIghAIIAAQO");
	this.shape_22.setTransform(73.2,109.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgeIIIAAwMIA9AVIAAP7");
	this.shape_23.setTransform(78.2,109.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAxH4IAAu+Ihkgs");
	this.shape_24.setTransform(86.5,113.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAWFIIAApyIgtgY");
	this.shape_25.setTransform(93.7,131.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAcpMIg0AYIAASG");
	this.shape_26.setTransform(60.3,229.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AA3jOIAAlzIhtgVIAAS0");
	this.shape_27.setTransform(68.6,230.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AgfA9IAAhbIBCga");
	this.shape_28.setTransform(73.5,166.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("ABuDkIAAmpIjbguIAAHt");
	this.shape_29.setTransform(88,185);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAhCyIgBlKIhDgU");
	this.shape_30.setTransform(102.4,190.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-1,-1,107.7,293.5), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AheA6IAAgIIC/hn");
	this.shape.setTransform(37.2,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("ABgA9IAAgWIi/hbIAAAT");
	this.shape_1.setTransform(56.5,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AhnFrIAAsWIDPBWIAAMI");
	this.shape_2.setTransform(60.8,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("ABXGAIAAr3IitBOIAAJT");
	this.shape_3.setTransform(32.6,81.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAAAeIAAg6");
	this.shape_4.setTransform(45.9,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AjMBnIAAhfIAhgRIAEAhIBng4IAEgmIAvgaIA4AcIAFA9IBvA3IAEg3IApAUIAABD");
	this.shape_5.setTransform(47.5,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAAB7IAAj1");
	this.shape_6.setTransform(45.8,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("Aj1DLIAAkIIAmgVIAAAdICPhNIgBgnIAwgbIAsAUIABAnICtBXIgBgdIAuAXIAAEC");
	this.shape_7.setTransform(47.8,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAAnCIAAOF");
	this.shape_8.setTransform(46.4,76.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AkfEFIAAp/IAsgWIABBBIC3hbIgCguIAygXIA0AWIABAvIDMBXIAChHIAoAQIAAN/");
	this.shape_9.setTransform(47.5,81.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AhcB2IAAiOIC8hY");
	this.shape_10.setTransform(9.3,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1,-1,78.3,133.2), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AB7hdIAAAVIj1CnIAAgRg");
	this.shape.setTransform(35.3,24.7,1,1,0,0,0,0,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AB7hdIAAAVIj1CnIAAgRg");
	this.shape_1.setTransform(35.3,18.2,1,1,0,0,0,0,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AEBqYIjsB2IAAC2IiMBJIAABvIiHA/IAAMS");
	this.shape_2.setTransform(25.5,106);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgFthIALbD");
	this.shape_3.setTransform(51.4,86.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("ADuhNIAAieIiph+IkyDlIAGH0");
	this.shape_4.setTransform(43.9,36.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AhIiRICPBYIAADQ");
	this.shape_5.setTransform(74.9,43.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AhlpuIDIBdIAASF");
	this.shape_6.setTransform(92.2,120.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-1,-1,104.1,185.2), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("Ai6APIBjgeQBdgTBKAYIBrAj");
	this.shape.setTransform(45.6,123.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AjoAlIBygpIBOgYQBcgSBLAYIBqAh");
	this.shape_1.setTransform(40.9,116.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AkWA2IDNhLIBNgXQBdgTBLAYIBrAk");
	this.shape_2.setTransform(36.4,109.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AlBA+ID7hcIBNgXQBdgTBLAZQBtAjAjAM");
	this.shape_3.setTransform(32.2,101.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AlAA+ID7hbIBNgYQBdgTBLAZICSAv");
	this.shape_4.setTransform(32.1,93);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_5.setTransform(32,84.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AlCikID7hdIBNgXQBdgTBLAZQB3AnAbALIAAIG");
	this.shape_6.setTransform(32.3,99);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_7.setTransform(32,66.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AlAA+ID7hcIBNgXQBdgTBLAZICSAv");
	this.shape_8.setTransform(32.1,58);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_9.setTransform(32,49.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AlClTID7hdIBNgYQBdgTBLAZQB3AnAbALIAANm");
	this.shape_10.setTransform(32.3,81.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AlCA1ID7hbIBNgYQBdgTBLAZQB3AnAbALIAABS");
	this.shape_11.setTransform(32.3,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("ADeBXIAAhmQgcgMh3goQhLgahPAQIhAAWIhOApIAABn");
	this.shape_12.setTransform(36.5,8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AD9BBIAAhTQgcgLh3gnQhLgZhPAQIhAAUIiMA+IAABU");
	this.shape_13.setTransform(33.4,19.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AklHJIAAsVIDdhdIBBgVQBPgPBKAZQB4AnAbAKIAAA4");
	this.shape_14.setTransform(29.4,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-1,-1,66.4,130.5), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape.setTransform(21.1,131.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_1.setTransform(21.1,113.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_2.setTransform(21.1,96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_3.setTransform(21.1,78.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AkGg2IINBu");
	this.shape_4.setTransform(93.9,139.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("Aj+gzIH9Bn");
	this.shape_5.setTransform(92.8,119.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("Aj+g1IH+Br");
	this.shape_6.setTransform(92.8,99);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AEmA4IoOhuIg+AK");
	this.shape_7.setTransform(88.9,78.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgnhhIBPDD");
	this.shape_8.setTransform(43.3,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgwisIBgDDIAACZ");
	this.shape_9.setTransform(26,55.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgwhhIBhDD");
	this.shape_10.setTransform(21.3,27.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AAxBpIhhjR");
	this.shape_11.setTransform(41.8,21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAqomIhTDBIAAOP");
	this.shape_12.setTransform(108.1,97.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AAtoZIhZDLIAANq");
	this.shape_13.setTransform(91.8,90.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AgqBjIBVjF");
	this.shape_14.setTransform(93.5,24.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AgoBgIBQi/");
	this.shape_15.setTransform(109.4,30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AADmqIgFNV");
	this.shape_16.setTransform(12.2,104.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AAAm3IAANv");
	this.shape_17.setTransform(118.5,109.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("ABtAAIjYAA");
	this.shape_18.setTransform(66.5,29.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAAFVIABqo");
	this.shape_19.setTransform(65.7,39.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAOApIBxjWIHxCwIhVCtgAi3BRIlPA6IhoiwIIViJIBnDXIi0Ag");
	this.shape_20.setTransform(64.6,47.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AEVivIojCoIBrC5");
	this.shape_21.setTransform(27.1,23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("Aj7jAIHyDNIhWC3");
	this.shape_22.setTransform(103,25.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("Ahyh6IDlAAIh3Dug");
	this.shape_23.setTransform(66.6,18.1,1,1,0,0,0,0.2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAAgbIAAA3");
	this.shape_24.setTransform(71.1,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AImB3IAAgdInljKIhxgBIn1CtIAAAZ");
	this.shape_25.setTransform(64.5,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-1,-1,129.7,155.2), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgbAQIA3gf");
	this.shape.setTransform(29.3,177.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgu");
	this.shape_1.setTransform(28.1,173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_2.setTransform(28.1,168.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_3.setTransform(28.1,163.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_4.setTransform(28.1,158.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgnAXIBPgt");
	this.shape_5.setTransform(28.2,153.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAAAzIAAhl");
	this.shape_6.setTransform(16.6,187.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgCABIicAVIg9gbICegQgADvABIjxAA");
	this.shape_7.setTransform(32.4,180.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAAEFIAAoJ");
	this.shape_8.setTransform(10.6,177.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AAvABIhdgB");
	this.shape_9.setTransform(11.6,126.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("Ah3AWIBqgrICHAA");
	this.shape_10.setTransform(12,153);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgpAZIBTgx");
	this.shape_11.setTransform(28.2,148.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_12.setTransform(24.2,145.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_13.setTransform(24.2,140.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_14.setTransform(24.2,135.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_15.setTransform(24.2,130);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_16.setTransform(24.2,124.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_17.setTransform(24.2,119.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_18.setTransform(24.2,114.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_19.setTransform(24.2,109.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_20.setTransform(24.2,103.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_21.setTransform(24.2,98.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_22.setTransform(24.2,93.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_23.setTransform(24.2,88.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_24.setTransform(24.2,83);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_25.setTransform(24.2,77.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_26.setTransform(24.2,72.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_27.setTransform(24.2,67.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_28.setTransform(24.2,62.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_29.setTransform(24.2,56.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_30.setTransform(24.2,51.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_31.setTransform(24.2,46.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_32.setTransform(24.2,41.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_33.setTransform(24.2,36);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_34.setTransform(24.2,30.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_35.setTransform(24.2,25.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_36.setTransform(24.2,19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_37.setTransform(44.2,175.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_38.setTransform(44.2,170.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_39.setTransform(44.2,165.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_40.setTransform(44.2,160.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_41.setTransform(44.2,155.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_42.setTransform(44.2,150.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_43.setTransform(44.2,145.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_44.setTransform(44.2,140.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_45.setTransform(44.2,135.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_46.setTransform(44.2,130.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_47.setTransform(44.2,125.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_48.setTransform(44.2,120.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_49.setTransform(44.2,115.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_50.setTransform(44.2,110.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_51.setTransform(44.2,105.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_52.setTransform(44.2,100.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_53.setTransform(44.2,95.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_54.setTransform(44.2,90.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_55.setTransform(44.2,85.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_56.setTransform(44.2,80.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_57.setTransform(44.2,75.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_58.setTransform(44.2,70.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_59.setTransform(44.2,65.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_60.setTransform(44.2,60.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_61.setTransform(44.2,55.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_62.setTransform(44.2,50.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_63.setTransform(45.3,45.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_64.setTransform(45.3,40.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_65.setTransform(45.3,35.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_66.setTransform(45.3,30.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_67.setTransform(45.3,25.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_68.setTransform(45.3,20.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_69.setTransform(45.3,15);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_70.setTransform(61.2,182.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_71.setTransform(61.2,175.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_72.setTransform(61.2,168.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_73.setTransform(61.2,161.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AgxALIBjgW");
	this.shape_74.setTransform(61.2,154.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_75.setTransform(61.2,147.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_76.setTransform(61.2,140.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_77.setTransform(61.2,133.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_78.setTransform(61.2,126.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_79.setTransform(61.2,119.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_80.setTransform(61.2,112.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_81.setTransform(61.2,105.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_82.setTransform(61.2,98.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_83.setTransform(61.2,91.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_84.setTransform(61.2,84.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_85.setTransform(61.2,77.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_86.setTransform(61.2,70.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_87.setTransform(61.2,63.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_88.setTransform(61.2,56.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgOgGIAcAN");
	this.shape_89.setTransform(60,47.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_90.setTransform(77.6,191.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_91.setTransform(77.6,184.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_92.setTransform(77.6,177.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_93.setTransform(77.6,169.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_94.setTransform(77.6,162.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_95.setTransform(77.6,155.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_96.setTransform(77.6,148.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_97.setTransform(77.6,141.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_98.setTransform(77.6,133.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_99.setTransform(77.6,126.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_100.setTransform(77.6,119.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_101.setTransform(77.6,112.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_102.setTransform(77.6,105.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_103.setTransform(77.6,98);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_104.setTransform(77.6,90.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_105.setTransform(77.6,83.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_106.setTransform(77.6,76.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_107.setTransform(77.6,69.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("ABMAxIiXhh");
	this.shape_108.setTransform(66.3,19.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_109.setTransform(66.3,25.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_110.setTransform(66.3,30.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_111.setTransform(66.3,35.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_112.setTransform(66.3,40.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_113.setTransform(66.3,45.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AB0BFIjniI");
	this.shape_114.setTransform(77.6,62);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("ABeAAIi7AA");
	this.shape_115.setTransform(44,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AhGBQIAAg8ICNhaIAABI");
	this.shape_116.setTransform(27.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("ABPBYIAAg9IidhpIAABS");
	this.shape_117.setTransform(61.2,7.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AAArhIAAXD");
	this.shape_118.setTransform(78.1,128);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AAAv9IAAf7");
	this.shape_119.setTransform(32.2,110);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AAADOIAAmb");
	this.shape_120.setTransform(58.5,28.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AAAsMIAAYZ");
	this.shape_121.setTransform(66.1,124.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AClNbIAA4SIjmidIhjAmIAAXA");
	this.shape_122.setTransform(72.7,131.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AlwMzIAAm8IBEAAIAAkLIBeADIAAs0ICfhoIEEADICcB3IAAE8");
	this.shape_123.setTransform(37,89.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AAbAMIg1gX");
	this.shape_124.setTransform(86.5,211.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AgeAAIA9AA");
	this.shape_125.setTransform(35.2,200.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("Ag0AAIBpAA");
	this.shape_126.setTransform(37.4,195.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AhFAAICKAA");
	this.shape_127.setTransform(39.1,190.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AhHAAICPAA");
	this.shape_128.setTransform(39.3,185.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AgxAJIBjgR");
	this.shape_129.setTransform(61.2,196.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_130.setTransform(61.2,189.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_131.setTransform(77.6,198.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AAAj8IAAH5");
	this.shape_132.setTransform(16.3,125.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-1,-1,91.2,219.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgRgDIAjAAIAAAHIgjAAg");
	this.shape.setTransform(39.6,64.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AADgUIgFAAIAAAqIAFAAg");
	this.shape_1.setTransform(37.3,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AgRgDIAjAAIAAAHIgjAAg");
	this.shape_2.setTransform(59,63);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AADgUIgFAAIAAApIAFAAg");
	this.shape_3.setTransform(56.7,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgBhKIgGBnIAPAs");
	this.shape_4.setTransform(30.4,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AALhEIgUBsIAOAb");
	this.shape_5.setTransform(45.2,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgHg5IAOBYIgHAa");
	this.shape_6.setTransform(65.1,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AAtAAQAAAVgNAOQgNAOgTAAQgSAAgNgOQgNgOAAgVQAAgUANgOQANgOASAAQATAAANAOQANAOAAAUg");
	this.shape_7.setTransform(38.2,63.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AA6AAQAAAXgRAQQgRARgYAAQgXAAgRgRQgRgQAAgXQAAgWARgRQARgQAXAAQAYAAARAQQARARAAAWg");
	this.shape_8.setTransform(57,62.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AAZASQgKgUgRgPQgDADgFAIQgJANgFAR");
	this.shape_9.setTransform(86.6,99.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AAzg6IhlB1");
	this.shape_10.setTransform(5.1,97.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgMAWIALggIAOAd");
	this.shape_11.setTransform(27.2,108.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AhTBVIAnivICBC/");
	this.shape_12.setTransform(14.7,100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AB8AxIhKhfIixAA");
	this.shape_13.setTransform(28.1,103.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AAYAVIgvgq");
	this.shape_14.setTransform(72,101.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAfhAIg9CB");
	this.shape_15.setTransform(83.1,96.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AgQAcIAQgrIASAn");
	this.shape_16.setTransform(95.7,97.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AB/A4IhAhrIilBeIgdAB");
	this.shape_17.setTransform(79.9,94.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AA7AAQAAAcgRATQgSAUgYAAQgXAAgRgUQgRgTAAgcQAAgbARgUQARgTAXAAQAYAAASATQARAUAAAbg");
	this.shape_18.setTransform(38.5,63.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("ABHAAQAAAegVAWQgUAVgeAAQgcAAgVgVQgVgWAAgeQAAgeAVgVQAVgVAcAAQAeAAAUAVQAVAVAAAeg");
	this.shape_19.setTransform(56.6,62.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAGAOIAAgVIgMABIAAAS");
	this.shape_20.setTransform(40.6,106.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAGAOIAAgWIgLACIgBAV");
	this.shape_21.setTransform(42.7,106.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AACAKIAAgNIgIAC");
	this.shape_22.setTransform(34.6,100.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AAGAYIAAgpIgLABIAAAX");
	this.shape_23.setTransform(36.3,101.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_24.setTransform(38.4,102.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_25.setTransform(40.6,101.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_26.setTransform(42.7,101.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_27.setTransform(34.2,95.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_28.setTransform(36.3,95.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_29.setTransform(38.4,95.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_30.setTransform(40.6,95.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_31.setTransform(42.7,94.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_32.setTransform(34.2,89.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_33.setTransform(36.3,88.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_34.setTransform(38.4,88.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_35.setTransform(40.6,88.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_36.setTransform(42.7,88.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_37.setTransform(34.2,82.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_38.setTransform(36.3,82.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_39.setTransform(38.4,81.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_40.setTransform(40.6,81.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgLACg");
	this.shape_41.setTransform(42.7,81.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_42.setTransform(34.2,75.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_43.setTransform(36.3,75.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_44.setTransform(38.4,75.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_45.setTransform(40.6,74.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_46.setTransform(42.7,74.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgGARIAAgcIANACIABAY");
	this.shape_47.setTransform(61.6,103.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgGAUIgBgiIAOACIABAe");
	this.shape_48.setTransform(59.2,103.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AgGAXIgBgoIAOABIABAm");
	this.shape_49.setTransform(56.8,103.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgGAaIgBgtIAOABIABAr");
	this.shape_50.setTransform(54.4,103.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AgFAcIgCgyIAOABIABAw");
	this.shape_51.setTransform(51.9,103.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOABg");
	this.shape_52.setTransform(61.7,98);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOACg");
	this.shape_53.setTransform(59.3,97.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANACg");
	this.shape_54.setTransform(56.9,97.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANACg");
	this.shape_55.setTransform(54.4,97.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_56.setTransform(52,97.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOACg");
	this.shape_57.setTransform(61.7,90.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_58.setTransform(59.3,90.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgBIgBg8IANACg");
	this.shape_59.setTransform(56.9,90.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANABg");
	this.shape_60.setTransform(54.4,89.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_61.setTransform(52,89.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_62.setTransform(61.7,83.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANABg");
	this.shape_63.setTransform(59.3,82.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANABg");
	this.shape_64.setTransform(56.9,82.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IANABg");
	this.shape_65.setTransform(54.4,82.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_66.setTransform(51.9,82.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_67.setTransform(61.7,75.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_68.setTransform(59.3,75.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgBIgBg8IANABg");
	this.shape_69.setTransform(56.9,75.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANACg");
	this.shape_70.setTransform(54.4,75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_71.setTransform(52,74.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AhGgHICNAP");
	this.shape_72.setTransform(56.5,70.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_73.setTransform(56.7,49.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_74.setTransform(56.7,50.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_75.setTransform(56.6,52.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_76.setTransform(56.4,55.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AhHgKICPAV");
	this.shape_77.setTransform(56.5,44.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("Ag7AQIB3gf");
	this.shape_78.setTransform(38.5,45.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("Ag6AJIB1gR");
	this.shape_79.setTransform(38.4,70.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AA8gOIh3Ad");
	this.shape_80.setTransform(38.4,56.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("Ag6APIB1gd");
	this.shape_81.setTransform(38.5,52.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AA7gPIh0Af");
	this.shape_82.setTransform(38.5,51.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("Ag7ARIB3gh");
	this.shape_83.setTransform(38.4,49.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA9IAbAEIACg9g");
	this.shape_84.setTransform(60.8,41);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA9IAbAEIACg9g");
	this.shape_85.setTransform(56.7,40.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AALgiIABA8IgVAJIgCg9g");
	this.shape_86.setTransform(34.6,41.9,1,1,0,0,0,0,0.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AALgiIABA8IgVAJIgBg9g");
	this.shape_87.setTransform(38.2,40.8,1,1,0,0,0,0,0.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AALggIABA8IgVAFIgBg9g");
	this.shape_88.setTransform(41.9,39.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA8IAbAFIACg9g");
	this.shape_89.setTransform(52.6,39.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgHBlIAPjK");
	this.shape_90.setTransform(46,10.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("ACUCDIiYj+IiPD3");
	this.shape_91.setTransform(47.3,12.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("ABJFfIAAqzIiRgXIAALd");
	this.shape_92.setTransform(56.6,70.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("Ag7EcIAApnIB3giIAALh");
	this.shape_93.setTransform(38.4,70.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AC/G+IAArEIATgxIgphhIgkBdIAZA0IiJgZIATgoIgyhpIgsByIARAkIhsAdIAQguIguhlIgiB0IAZAoIAAJ7");
	this.shape_94.setTransform(47.8,60);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AAMgCIgXAF");
	this.shape_95.setTransform(32.6,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-1,-1,99.5,112.6), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("ABxB9IiZgDIhBjrIBJgL");
	this.shape.setTransform(10.6,154.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("Ag7BUIBpAPIA3iTIjJgwg");
	this.shape_1.setTransform(64.2,88.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AgBgLIADAX");
	this.shape_2.setTransform(11.7,159.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAzBEIgciCIhNAI");
	this.shape_3.setTransform(12.7,154.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("ABDBSIgkieQgHACheAL");
	this.shape_4.setTransform(15.1,146.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("ABFBjIgqjAQgGAChdAT");
	this.shape_5.setTransform(19,137.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("ABNCVIhDklIhaAW");
	this.shape_6.setTransform(24.1,132.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("ABXDGIhYmGIhZAj");
	this.shape_7.setTransform(28.4,127.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("ABeD7IhwnvIhOAk");
	this.shape_8.setTransform(33.5,122.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("ABkEwIiGpZIhDAk");
	this.shape_9.setTransform(38.5,117.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("ABsFiIifq8Ig6Ac");
	this.shape_10.setTransform(43.5,112.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("ABxI+IiqryIg3AmIAAmw");
	this.shape_11.setTransform(47.6,85.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAAmyIAANl");
	this.shape_12.setTransform(29.7,43.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AC6oQIlyN9IAuCk");
	this.shape_13.setTransform(24.5,107.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("Ag2H6IhxgEIFRvy");
	this.shape_14.setTransform(27.4,110.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAAhUIAACp");
	this.shape_15.setTransform(36,164.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAAB/IAAj8");
	this.shape_16.setTransform(22,160.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("ACkgoIlRAAICNBSIDgAA");
	this.shape_17.setTransform(39.3,151.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AgTg0IAoBp");
	this.shape_18.setTransform(183.5,92.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("ALPFrIApiIIuekkIpOpEIE+ULIEQrH");
	this.shape_19.setTransform(105.4,64.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAI");
	this.shape_20.setTransform(63.6,127.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("Ag+gSIB9Al");
	this.shape_21.setTransform(70.2,123.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AhtghIDbBD");
	this.shape_22.setTransform(77.2,119.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AkPhUIIfCp");
	this.shape_23.setTransform(95.6,118.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AhLgXICXAv");
	this.shape_24.setTransform(137,131.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AlxhzILjDn");
	this.shape_25.setTransform(107.7,115.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AlxhzILkDo");
	this.shape_26.setTransform(110,110.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("Al1h1ILrDr");
	this.shape_27.setTransform(112.6,104.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("Al8h2IL5Du");
	this.shape_28.setTransform(115.6,98.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AmXh/IMvD/");
	this.shape_29.setTransform(120.5,93.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("Am8iLIN5EX");
	this.shape_30.setTransform(126.5,89.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AnTiSIOoEl");
	this.shape_31.setTransform(131,84.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AnSiRIOlEj");
	this.shape_32.setTransform(133.1,78.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AAiheIhDC9");
	this.shape_33.setTransform(171.1,94.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AArh4IhVDx");
	this.shape_34.setTransform(163.7,95.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("ABJjLIiRGX");
	this.shape_35.setTransform(154,101.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAehVIg7Cr");
	this.shape_36.setTransform(141.7,136.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("ABxk9IjhJ7");
	this.shape_37.setTransform(143.4,110.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("ABdkEIi5IJ");
	this.shape_38.setTransform(138.7,103);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("ABdkFIi5IK");
	this.shape_39.setTransform(132.1,100.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("ABfkIIi9IR");
	this.shape_40.setTransform(125.3,99.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("ABgkLIi/IX");
	this.shape_41.setTransform(118.7,97.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("ABgkNIi/Ib");
	this.shape_42.setTransform(111.9,95.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("ABikRIjDIi");
	this.shape_43.setTransform(105.2,93.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("ABpkkIjQJK");
	this.shape_44.setTransform(97.8,93.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("ABwk4IjfJx");
	this.shape_45.setTransform(90.5,93.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AB3lMIjtKZ");
	this.shape_46.setTransform(83.1,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1,-1,187.5,174.8), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AggrqIBBgRIAAX4IhBAAg");
	this.shape.setTransform(81.6,117.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggL8IAA3nIBBgRIAAX4g");
	this.shape_1.setTransform(81.6,118);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_2.setTransform(69.9,196.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_3.setTransform(69.9,192.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_4.setTransform(69.9,188.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_5.setTransform(69.9,185.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_6.setTransform(69.9,181.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_7.setTransform(69.9,177.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_8.setTransform(69.9,173.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_9.setTransform(69.9,170.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_10.setTransform(69.9,166.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_11.setTransform(69.9,162.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_12.setTransform(69.9,158.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_13.setTransform(69.9,155.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_14.setTransform(69.9,151.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_15.setTransform(69.9,147.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_16.setTransform(69.9,143.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_17.setTransform(69.9,140.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_18.setTransform(69.9,136.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_19.setTransform(69.9,132.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_20.setTransform(69.9,128.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_21.setTransform(69.9,125.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_22.setTransform(69.9,121.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_23.setTransform(69.9,117.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_24.setTransform(69.9,113.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_25.setTransform(69.9,110.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_26.setTransform(69.9,106.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_27.setTransform(69.9,102.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_28.setTransform(69.9,98.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_29.setTransform(69.9,95.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_30.setTransform(69.9,91.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_31.setTransform(69.9,87.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_32.setTransform(69.9,83.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_33.setTransform(69.9,80.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_34.setTransform(69.9,76.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_35.setTransform(69.9,72.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_36.setTransform(69.9,43.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AhRghICjBE");
	this.shape_37.setTransform(70.4,40.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("Ag4gXIBwAv");
	this.shape_38.setTransform(70.3,36.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AgdgMIA7AZ");
	this.shape_39.setTransform(70,32.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AgHgDIAPAG");
	this.shape_40.setTransform(70.1,28.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_41.setTransform(69.9,68.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_42.setTransform(69.9,65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_43.setTransform(69.9,61.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_44.setTransform(69.9,57.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_45.setTransform(69.9,53.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_46.setTransform(69.9,50);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_47.setTransform(69.9,46.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AAAsCIAAYF");
	this.shape_48.setTransform(77.1,117.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AAAsaIAAY1");
	this.shape_49.setTransform(74.2,115.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AAAsxIAAZj");
	this.shape_50.setTransform(71.4,113.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAAs6IAAZ1");
	this.shape_51.setTransform(68.5,112.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAAsqIAAZV");
	this.shape_52.setTransform(65.7,113.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AAAsaIAAY1");
	this.shape_53.setTransform(62.8,115.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_54.setTransform(40.3,169.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_55.setTransform(40.3,169.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_56.setTransform(40.3,161.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_57.setTransform(40.3,161.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_58.setTransform(40.3,154.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_59.setTransform(40.3,154.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_60.setTransform(40.3,147.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_61.setTransform(40.3,147.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_62.setTransform(40.3,140);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAmIhfAdg");
	this.shape_63.setTransform(40.3,140);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_64.setTransform(40.3,132.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_65.setTransform(40.3,132.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_66.setTransform(40.3,125.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_67.setTransform(40.3,125.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_68.setTransform(40.3,118.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_69.setTransform(40.3,118.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_70.setTransform(40.3,110.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_71.setTransform(40.3,110.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_72.setTransform(40.3,103.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_73.setTransform(40.3,103.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_74.setTransform(40.3,95.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_75.setTransform(40.3,95.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgTgNIAlgIIAAAmIgnAH");
	this.shape_76.setTransform(30.6,98.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgRgOIAlgIIAAAnIgnAGg");
	this.shape_77.setTransform(30.4,98.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_78.setTransform(40.3,87.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_79.setTransform(40.3,88);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgsACIBVgXIAAAmIgZAH");
	this.shape_80.setTransform(9.8,87.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgqABIBVgXIAAAmIgZAHg");
	this.shape_81.setTransform(9.6,87.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_82.setTransform(40.3,80.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_83.setTransform(40.3,80.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AhQAKICdgoIAAAnIhaAY");
	this.shape_84.setTransform(24.7,90.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhOAJICdgoIAAAnIhbAYg");
	this.shape_85.setTransform(24.5,91);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_86.setTransform(24.5,84.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_87.setTransform(24.5,84.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgnIBXgYg");
	this.shape_88.setTransform(9.5,80.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAmIhXAZg");
	this.shape_89.setTransform(9.5,80.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_90.setTransform(40.3,72.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_91.setTransform(40.3,72.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_92.setTransform(24.5,77);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_93.setTransform(24.5,77);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgmIBXgZg");
	this.shape_94.setTransform(9.5,73.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_95.setTransform(9.5,73.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_96.setTransform(40.3,64.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_97.setTransform(40.3,64.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_98.setTransform(24.5,69.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_99.setTransform(24.5,69.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgmIBXgZg");
	this.shape_100.setTransform(9.5,65.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_101.setTransform(9.5,65.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_102.setTransform(40.3,57.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_103.setTransform(40.3,57.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_104.setTransform(24.5,61.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_105.setTransform(24.5,61.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgmIBXgZg");
	this.shape_106.setTransform(9.5,57.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAnIhXAYg");
	this.shape_107.setTransform(9.5,57.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_108.setTransform(40.3,49.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAmIhfAdg");
	this.shape_109.setTransform(40.3,49.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgpg");
	this.shape_110.setTransform(24.5,53.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidApg");
	this.shape_111.setTransform(24.5,53.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_112.setTransform(9.5,50.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAmIhXAZg");
	this.shape_113.setTransform(9.5,50.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_114.setTransform(40.3,41.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_115.setTransform(40.3,41.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgpg");
	this.shape_116.setTransform(24.5,46.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_117.setTransform(24.5,46.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_118.setTransform(9.5,42.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_119.setTransform(9.5,42.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_120.setTransform(40.3,34.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_121.setTransform(40.3,34.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgpg");
	this.shape_122.setTransform(24.5,38.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidApg");
	this.shape_123.setTransform(24.5,38.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_124.setTransform(9.5,34.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAnIhXAYg");
	this.shape_125.setTransform(9.5,34.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_126.setTransform(40.3,26.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_127.setTransform(40.3,26.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_128.setTransform(24.5,30.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_129.setTransform(24.5,30.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgnIBXgYg");
	this.shape_130.setTransform(9.5,27);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_131.setTransform(9.5,27);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_132.setTransform(40.3,18.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_133.setTransform(40.3,18.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_134.setTransform(24.5,23.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_135.setTransform(24.5,23.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgmIBXgZg");
	this.shape_136.setTransform(9.5,19.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAnIhXAYg");
	this.shape_137.setTransform(9.5,19.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_138.setTransform(40.3,11.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_139.setTransform(40.3,11.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_140.setTransform(24.5,15.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_141.setTransform(24.5,15.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AgtAAIBXgZIAAAmIguAP");
	this.shape_142.setTransform(40.8,175.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgrAAIBXgaIAAAmIgvAPg");
	this.shape_143.setTransform(40.6,175.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AhJAcIAFiVIA5geQgCCRABAIIABAAAhJAcIBMB/IBEgRIhSiIIgnARQgBAAgBAAQgDABgCACQgIADgIADg");
	this.shape_144.setTransform(77.8,27.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AhHAbIAEiVIA5geQgCCRACAIIAAAAIBTCIIhFARg");
	this.shape_145.setTransform(77.7,27.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AgIOFIAA3eIhTiIIAAiaIC3BhIAAaa");
	this.shape_146.setTransform(85.8,101.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgHpeIhUiHIAAiaIC3BhIAAaaIhjAEg");
	this.shape_147.setTransform(85.8,102.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AAJPMIAA4bIBlh0IAAifIjZhnIgCeb");
	this.shape_148.setTransform(59.9,97);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhrvNIDZBnIAACfIhlB0IAAYbIh2AGg");
	this.shape_149.setTransform(59.9,97.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AD1PUIAA+hInpCKIABLRIERBtIgCAgIAoAXIAABIIAoANIgFKCICBBYIgFB0");
	this.shape_150.setTransform(24.5,97.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("ADoNeIiBhYIAFqCIgogNIAAhIIgogYIACgfIkRhtIgBrRIHpiLIAAehIgSABg");
	this.shape_151.setTransform(24.5,97.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AhWI7ICtk1IirkcICskPIixkV");
	this.shape_152.setTransform(69.4,96.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AhVLaICtk1IiskcICtkPIixkVICyk+");
	this.shape_153.setTransform(69.3,99.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AhVLaICtk1IiskcICtkPIixkVICyk+");
	this.shape_154.setTransform(69.3,118.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1,-1,97,202), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AANgMQgHgDgGAFQgCACgFAIQgCAGABADQABAGAFgB");
	this.shape.setTransform(40.8,201.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAJQAAgDACgGQAEgIAEgCQAFgFAGADIgPAaIgBAAQgEAAgBgFg");
	this.shape_1.setTransform(40.9,201.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AgLAZQgEACgDgFQgCgDAAgFQABgRAYgRQAFgEAFAAQADAAACACQACACgBAD");
	this.shape_2.setTransform(39.9,207);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAWQgCgDAAgFQABgRAYgRQAFgEAFAAQADAAACACQACACgBADIggAqIgCAAQgDAAgCgDg");
	this.shape_3.setTransform(39.9,207);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAPgCQABgGgGgCQgEgCgGACQgIACgEAHQgEAHAFAG");
	this.shape_4.setTransform(50,209.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMgBQAEgHAIgCQAGgCAEACQAGACgBAGIgaAOQgFgGAEgHg");
	this.shape_5.setTransform(50,209.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgbgBQAKgIANgDQAPgDAJAHQAGAEABAGQACAHgFAF");
	this.shape_6.setTransform(44.1,210.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbgBQAKgIANgDQAPgDAJAHQAGAEABAGQACAHgFAFg");
	this.shape_7.setTransform(44.1,210.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAOgKQgBgCgCgBIgFABQgLAFgEAFQgDADgBAFQAAAFADAE");
	this.shape_8.setTransform(40.8,214);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAFQABgEADgEQAEgEALgGIAFgBQAAABABAAQAAAAABABQAAAAAAABQABAAAAABIgYAYQgDgDAAgGg");
	this.shape_9.setTransform(40.8,214);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgYAUQgCgIAEgKQAEgMAMgGQAHgEAJACQAJACAGAG");
	this.shape_10.setTransform(35.2,215.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWACQAEgMAMgGQAHgEAJACQAJACAGAGIgxAeQgCgIAEgKg");
	this.shape_11.setTransform(35.2,215.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgEAHQAEgIAIgD");
	this.shape_12.setTransform(20.3,218.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AAMgBQgBACgEgDQgFgDgFAEQgFACgDAF");
	this.shape_13.setTransform(23.9,219.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCgCQAGgEAEADIACACIgTAGQADgFAEgCg");
	this.shape_14.setTransform(23.8,219.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AgTALQAIgPARgDQAGgBADAEQACACADAE");
	this.shape_15.setTransform(19.4,222.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFgIQAGgBAEADIAFAGIgnAKQAHgQARgCg");
	this.shape_16.setTransform(19.5,223);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhiCTQgJABgGgIQgFgJADgIQgNgEgDgNQgBgOALgIQABAAAGgDQAEgCACgCQADgEAAgFQAAgFgCgLQgDgJACgFQADgLAMgFQAGgCAQgCQAFAAACgCQAEgEgFgMQgBgDABgEQABgFAEAAQgEAAgBgFQgBgFADgFQAHgLgDgFQgBgCgFgDQgEgCgBgCQgEgIALgIQAMgJAOgEQADgBABgBQABgDgGgDQgGgFgBgJQgCgIADgHQAEgKAQgPQAHgFADADQABABAAAGQgEAQANAKQADADAGAEQAFAFABAEQABACAAAEQAAADABACIAEACIAUAHQAFACABABQAEAEgDAMQgDAMADAEQABABADADQADACAAACQABADgCAEQgBAFAAACQAAADAEAHQADAGgDADQAJAAADABQgBgDAAgBQgBgPAJgDQgDgBgBgEQgCgDABgEQAEgIACgEQACgGABgNIACgWQABgPAHgDQACARAHAOQAEAGAAAEQAAADgBAGIADAFQAFAJgEALQAHgBAEAGQAEAHgDAGQAGgDAGAEQAGADAAAHQAAADABACABDAJQgCAHADAAABBABQADADAAAEQgBAAAAABQAAgBAAgCQgBgDgBgCg");
	this.shape_17.setTransform(42.1,206.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhxCMQgGgJAEgIQgOgEgCgNQgCgOAMgIIAGgDIAGgEQADgEAAgFIgCgQQgCgJABgFQADgLANgFQAFgCARgCQAEAAACgCQAEgEgEgMQgCgDABgEQABgFAEAAQgEAAgBgFQAAgFACgFQAHgLgDgFQgBgCgEgDIgGgEQgEgIALgIQANgJAOgEIADgCQACgDgGgDQgGgFgCgJQgBgIADgHQADgKARgPQAGgFADADQABABAAAGQgDAQANAKIAIAHQAGAFABAEIAAAGQAAADACACIAEACIATAHQAGACABABQAEAEgDAMQgDAMADAEIAEAEQACACABACQABADgCAEIgCAHQAAADAEAHQADAGgCADQAIAAAEABIgBgEQgBgPAJgDQgDgBgCgEQgBgDABgEIAFgMQADgGABgNIABgWQABgPAIgDQABARAIAOQADAGAAAEIAAAJIACAFQAFAJgDALQAGgBAEAGQAFAHgDAGQAFgDAHAEQAGADAAAHIABAFIjoCOIgCAAQgHAAgFgHg");
	this.shape_18.setTransform(42.2,206.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("Ag2BOQgHgGAAgKQAAgLAIgFQgFgEABgHQAAgGADgHQAIgPAMgIQgBgJACgMIABgNQAFgjAQgGQAFgCAFABQAEACABAEQABADgBAEQgBACgCAFQgBAHACAMQADAQAIAGQADACAIAEQADACABADQACAEgCABQAJAAAHAHQAHAIgCAJQAEgBAEADQADACABAEQACAFgCAKIgCAN");
	this.shape_19.setTransform(21.2,217.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag9A+QAAgLAIgFQgFgEABgHQAAgGADgHQAIgPAMgIQgBgJACgMIABgNQAFgjAQgGQAFgCAFABQAEACABAEQABADgBAEIgDAHQgBAHACAMQADAQAIAGIALAGQADACABADQACAEgCABQAJAAAHAHQAHAIgCAJQAEgBAEADQADACABAEQACAFgCAKIgCANIhxASQgHgGAAgKg");
	this.shape_20.setTransform(21.2,217.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgNgFQALgDAHAHQAHAEgCAI");
	this.shape_21.setTransform(216.7,118.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAOAZQAAgNgMgUQgJgRgLAB");
	this.shape_22.setTransform(211.9,112.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgbgGQAHgFAKgBQAJgBAIADQARAIAEAT");
	this.shape_23.setTransform(207.4,112.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAcATQgJgWgJgGQgHgFgSgBQgJgBgDAE");
	this.shape_24.setTransform(210.7,118.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AgPgPQAHABAFAEQAFAEACAGIACAKQADAHAGgB");
	this.shape_25.setTransform(205.1,118.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAegKQgIgKgPADQgJADgMALQgPAMgBAO");
	this.shape_26.setTransform(182.4,102.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AgPAPQAAABgCAAQgCAAAAgCQgBgBABgEQAFgMANgHQAMgHANAD");
	this.shape_27.setTransform(178.7,109.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAggUQgMgGgMABQgMAAgLAGQgKAGgEAJQgBAEAAALQABAKgCAF");
	this.shape_28.setTransform(185.9,109.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AgMAgQgBABgCgBQgFAAgDgEQgEgEgBgGQgBgHAFgMQAHgSAJgHQAGgFAHgBQAIAAAGAFQAHAGADgB");
	this.shape_29.setTransform(191.6,116.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AgWAPQAFgNANgHQALgHAOACIAGAB");
	this.shape_30.setTransform(184.8,114.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgdARQAMgQAPgMQABgBABgBIAEABQAQAJAKAR");
	this.shape_31.setTransform(173.8,115.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgUAJIAKgIQAIgFAGgCQAKgCAFAH");
	this.shape_32.setTransform(147.2,112.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AAKAYQAEgXgGgIQgGgIgQgE");
	this.shape_33.setTransform(151.7,107.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AgMAKIARgPQACgDACAAQABABABAB");
	this.shape_34.setTransform(157.1,109.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AgSgDQAGgIAHgDQAKgFAJAJQAJAKgFAJIADgC");
	this.shape_35.setTransform(153.4,114.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AgIAAIARAA");
	this.shape_36.setTransform(190.3,101.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AgWAGIAtgL");
	this.shape_37.setTransform(198.7,108.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AhxADQACgJADgDQAEgHAHACQgEgFAAgIQAAgHAEgGQAEgFAHgDQAHgDAGACQgCgHAEgHQAEgGAHgBQgGgMAFgLQADgFAGgCQAFgDAGACQAKADACAMQABAIgEAMQALABAEALQAIgFAKAAQALABAIAGQAIAHADAKQADALgEAKQAIgDAEAJQACADAAAKQARgEALAOQAMANgGARQAMAEABALIABAFQABADAHAHQAFAFgCAFQAJACACAJQABADgCACQgBADgDgB");
	this.shape_38.setTransform(210.7,112.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("Agpg2QgDgCgCgEQgCgFACgFQADgFAEgCQAFgDAFACQgBgGACgGQADgGAFgEQgFgEABgHQAAgIAEgEQAAgDgEgCQABgDABgNQABgKAHgEQAHgDAGAHQADAFABAJQAAADABABQABADAHAAQAHAAAGADQAHAEABAHIAAAFQAAAEADAGQADAGAAAEQgBAEgCAIQAAAGAMAGQAMAFAAAGQAAADgCAFQgBAEAFAIQAFAHgCAEQAOgCAIAHQAEAEACAGQACAGgDAFQAHAAAGADQAGAEACAGQAHANgKAMIAFgEQALAGADAKQAKgCAJAIQAIAIABALQABAQgQAVQAFgBAFAEQAFAFgBAFQABgCADABQACAAACACQADADgBAGQgCASgRAJAibCRQgGgGgCgIQgDgIACgIQAEgSARgFQgCABgCgDQgBgCAAgDQABgJAGgHQAGgIAJgCQgHgQAJgNQAIgOAQgBQgFgDABgGQAAgGAEgEQARgYAfgBQgGgCgCgGQgDgHADgFQADgFAHgBQAFgBAEACQABABABAB");
	this.shape_39.setTransform(183.6,106);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AB+BzQAGgDgBgIQgCgIgEAAQAGgIgCgJQgCgKgIgCQgEgBgDACQgDACgBADQAAgGgDgGQgEgHgGgDQADgUgKgTIgDgIQADgLgDgFQgCgCgEgCQgHgCgBAAQgFgDgEgPQgEgNgHgCQAFgHgCgJQgBgJgHgFQgFgDgBgBIgBgGQgCgOgNgCQADgDgDgEQgCgDgEAAQgFAAgIAIQgeAhgFAYQAAABABAEQACAEAAABQgBABgEAAQgEgBAAABQgOALgDAIQgCAGABAGQACAHAGADQgKgBgJAGQgIAGgCAJQAAgDgCgDQgDgEgEgBQgEAAgEACQgCACgBABQAAgBgCgCQgDgFgFABQgGABgHAKQgKAOAHAHQgFABgCAGQgDAGACAFQACAFAGACQAFACAFgCQgCAFACAFQACAFAEACQAFACAFgDQACgBACgCQABgCABgCAhfAOQgBACgBACAhbBNIgCADQgCAHADAA");
	this.shape_40.setTransform(151.9,108.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AgrAFIBXgJ");
	this.shape_41.setTransform(134.9,115.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AhvANIDfgZ");
	this.shape_42.setTransform(128.6,111.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_43.setTransform(130.7,107.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_44.setTransform(130.7,103);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_45.setTransform(130.7,98.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_46.setTransform(130.7,94.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_47.setTransform(130.7,90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_48.setTransform(130.7,86.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_49.setTransform(130.7,82.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("Ai5gOIFCAKIkJAU");
	this.shape_50.setTransform(130.3,77.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAaCwIAAlYIg4gD");
	this.shape_51.setTransform(114.8,96.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAAihIAAFD");
	this.shape_52.setTransform(144,93.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AApAMIhRgX");
	this.shape_53.setTransform(50,108.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_54.setTransform(50.8,106);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_55.setTransform(50.8,103);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgd");
	this.shape_56.setTransform(50.8,100);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_57.setTransform(50.8,97);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_58.setTransform(50.8,94);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_59.setTransform(50.8,91);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_60.setTransform(50.8,88);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_61.setTransform(50.8,85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_62.setTransform(50.8,82);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_63.setTransform(50.8,79);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgc");
	this.shape_64.setTransform(50.8,75.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_65.setTransform(53.3,42.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_66.setTransform(53.3,44.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_67.setTransform(53.3,47.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_68.setTransform(53.3,49.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_69.setTransform(53.3,51.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_70.setTransform(53.3,54.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_71.setTransform(53.3,56.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_72.setTransform(53.3,58.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_73.setTransform(53.3,60.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_74.setTransform(53.3,63.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_75.setTransform(53.3,65.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_76.setTransform(53.3,67.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_77.setTransform(50.8,69.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgc");
	this.shape_78.setTransform(50.8,72.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AAbi2QABEvAEAGIhGgPIAABH");
	this.shape_79.setTransform(56,22.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("ABPAoIAAgoIhLglIhSAjIAAAu");
	this.shape_80.setTransform(58.3,3.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("ABBASIhBghIhAAh");
	this.shape_81.setTransform(58.7,6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("ABBANIhAgZIhBAZ");
	this.shape_82.setTransform(58.7,10.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("ABBAEIg/gGIhCAG");
	this.shape_83.setTransform(58.7,14.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("ABBADIhAgEIhBAE");
	this.shape_84.setTransform(58.7,18.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("ABBAAIiBAA");
	this.shape_85.setTransform(58.7,23.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("ABBgHIg9APIhEgP");
	this.shape_86.setTransform(58.7,28.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("Ai0BDIAAg1IFthL");
	this.shape_87.setTransform(33.6,40.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AAuAlIAAhDIhbAOIAAAh");
	this.shape_88.setTransform(47.6,11);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AA5AlIAAhEIhxASIAAAe");
	this.shape_89.setTransform(46.5,14.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("ABLAkIAAhDIiVAYIAAAt");
	this.shape_90.setTransform(44.7,17.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("ABkAfIAAhEIjHAiIAAAv");
	this.shape_91.setTransform(42.2,22.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("ACfAJIAAhEIk9BEIAAA5");
	this.shape_92.setTransform(36.3,34);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AgtAlIAAhDIBbAOIAAAi");
	this.shape_93.setTransform(69.8,11);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AhFAlIAAhEICKAWIAAAg");
	this.shape_94.setTransform(72.2,14.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AhXAjIAAhEICvAdIAAAr");
	this.shape_95.setTransform(74,17.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AiBAcIAAhEIECApIAAAt");
	this.shape_96.setTransform(78.2,23);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AibAYIAAhEIE3AyIAAAs");
	this.shape_97.setTransform(80.9,28);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("Ai2APIAAhEIFtA5IAAA4");
	this.shape_98.setTransform(83.5,33.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AjRALIAAhEIGiBBIAAA4");
	this.shape_99.setTransform(86.2,39.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AgbIGIAAv1IA7gR");
	this.shape_100.setTransform(62,85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AAAnQIAAOh");
	this.shape_101.setTransform(62.7,89.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AAAneIAAO9");
	this.shape_102.setTransform(67,87.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AkWlTIAggjIAjAjIArgmIG+BLIAAKu");
	this.shape_103.setTransform(83.9,77);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgalaIAyAcIgCKd");
	this.shape_104.setTransform(53.5,74.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AjECgIAAjvIGJhKIAAEiIgwgO");
	this.shape_105.setTransform(31.1,55.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AjDDKIAAl0IGHglIABGk");
	this.shape_106.setTransform(26.4,88.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgjgFIBGAL");
	this.shape_107.setTransform(70.6,132.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AhRgMICjAZ");
	this.shape_108.setTransform(75.3,129.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AiFgVIELAr");
	this.shape_109.setTransform(80.4,126.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AibgZIE3Az");
	this.shape_110.setTransform(82.7,122.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AiygcIFlA5");
	this.shape_111.setTransform(85,118.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AjIggIGRBB");
	this.shape_112.setTransform(87.2,115.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_113.setTransform(89.3,111.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_114.setTransform(89.3,107.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_115.setTransform(89.3,103.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_116.setTransform(89.3,99.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_117.setTransform(89.3,95.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_118.setTransform(89.3,91.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_119.setTransform(89.3,87.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_120.setTransform(89.3,83.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_121.setTransform(89.3,79.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_122.setTransform(89.3,75.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_123.setTransform(89.3,71.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_124.setTransform(89.3,67.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_125.setTransform(89.3,63.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_126.setTransform(89.3,59.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_127.setTransform(89.3,55.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_128.setTransform(89.3,51.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_129.setTransform(89.3,47.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hB");
	this.shape_130.setTransform(47.6,118.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hC");
	this.shape_131.setTransform(47.6,122.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hC");
	this.shape_132.setTransform(47.6,126.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hC");
	this.shape_133.setTransform(47.6,130.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hC");
	this.shape_134.setTransform(47.6,134.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hD");
	this.shape_135.setTransform(47.6,138.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AhMAbICZg1");
	this.shape_136.setTransform(45.8,142.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AhOAcICdg3");
	this.shape_137.setTransform(46,146.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AhQAcIChg4");
	this.shape_138.setTransform(46.2,150.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AhSAdIClg5");
	this.shape_139.setTransform(46.3,154.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AhTAeICng7");
	this.shape_140.setTransform(46.5,158);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AhVAfICrg9");
	this.shape_141.setTransform(46.7,161.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AhXAfICvg9");
	this.shape_142.setTransform(46.8,165.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AhZAfICzg9");
	this.shape_143.setTransform(47,169.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AhaAgIC1g/");
	this.shape_144.setTransform(47.1,173.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AhcAhIC5hC");
	this.shape_145.setTransform(47.4,177);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hB");
	this.shape_146.setTransform(47.6,180.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AisgFICcAmIC9hC");
	this.shape_147.setTransform(39.7,184.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AAGABIgLgB");
	this.shape_148.setTransform(37.4,122.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("AAIACIgPgD");
	this.shape_149.setTransform(37.3,126.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AAMADIgXgF");
	this.shape_150.setTransform(36.9,130.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("AAQAEIgfgH");
	this.shape_151.setTransform(36.5,133.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AATAFIgmgJ");
	this.shape_152.setTransform(36.1,137.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AAWAGIgrgL");
	this.shape_153.setTransform(35.8,141.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AAfAIIg9gP");
	this.shape_154.setTransform(34.9,145);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AAaAHIg0gN");
	this.shape_155.setTransform(35.4,149);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AAkAJIhHgR");
	this.shape_156.setTransform(34.5,152.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AA2AOIhrga");
	this.shape_157.setTransform(32.6,156);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("ABEARIiHgh");
	this.shape_158.setTransform(31.2,159.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_159.setTransform(30.2,163.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("ABOATIibgm");
	this.shape_160.setTransform(30.2,166.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_161.setTransform(30.2,170.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_162.setTransform(30.2,174.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(0.3).p("ABOAUIibgm");
	this.shape_163.setTransform(30.2,178.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("ABOAUIibgn");
	this.shape_164.setTransform(30.2,182.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(0.3).p("AisgFICcAmIC9hC");
	this.shape_165.setTransform(39.7,184.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("ABdAnIC2hCIoOgKg");
	this.shape_166.setTransform(28.3,113.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(0.3).p("AAACGIAAkL");
	this.shape_167.setTransform(58.6,123.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("Ahfl0IAALhIDDhO");
	this.shape_168.setTransform(47.5,155.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(0.3).p("AkuhVIAAgDIJJALIjQBPgAkmBeIgIiz");
	this.shape_169.setTransform(30.3,117.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AhNgWICbAt");
	this.shape_170.setTransform(30.1,189.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(0.3).p("AiBA2IAAgzIEDgxIAABE");
	this.shape_171.setTransform(39.2,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1,224.1,227.3), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape.setTransform(29.4,113.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1.setTransform(29.4,114);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_2.setTransform(39.9,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_3.setTransform(39.9,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_4.setTransform(39.9,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AiKAnIEVhM");
	this.shape_5.setTransform(39.9,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_6.setTransform(29.4,116.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_7.setTransform(29.4,111);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_8.setTransform(29.4,108.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_9.setTransform(29.4,105.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_10.setTransform(29.4,102.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_11.setTransform(29.4,99.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_12.setTransform(29.4,97.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_13.setTransform(29.4,94.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_14.setTransform(29.4,91.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_15.setTransform(29.4,88.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_16.setTransform(29.4,86);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_17.setTransform(29.4,83.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_18.setTransform(29.4,80.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_19.setTransform(29.4,77.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_20.setTransform(29.4,74.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_21.setTransform(29.4,72.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_22.setTransform(29.4,69.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_23.setTransform(29.4,66.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_24.setTransform(29.4,63.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_25.setTransform(29.4,61);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_26.setTransform(29.4,58.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_27.setTransform(29.4,55.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_28.setTransform(29.4,52.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_29.setTransform(29.4,49.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_30.setTransform(29.4,47.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_31.setTransform(29.4,44.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_32.setTransform(29.4,41.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_33.setTransform(29.4,38.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_34.setTransform(29.4,36);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_35.setTransform(29.4,33.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_36.setTransform(29.4,30.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_37.setTransform(29.4,27.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AgNAEIAbgH");
	this.shape_38.setTransform(1.4,10.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AAhADIhBgF");
	this.shape_39.setTransform(50.5,9.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("ACJA3IAAhnIkVBF");
	this.shape_40.setTransform(40,14.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AiBDFIAAr0IEDA3IgBQv");
	this.shape_41.setTransform(13,67.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AAAgvIAABf");
	this.shape_42.setTransform(47.4,6.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AAAg1IAABr");
	this.shape_43.setTransform(24.5,11.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAAgpIAABT");
	this.shape_44.setTransform(2.6,7.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AjdADIDaAaIDlgoIi9gRg");
	this.shape_45.setTransform(26.8,2.9,1,1,0,0,0,2,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AgCjdIAFG6");
	this.shape_46.setTransform(74.9,46.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgJgtIjLA1ICdAnIEGg0g");
	this.shape_47.setTransform(54,24.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AAAluIAALd");
	this.shape_48.setTransform(64.7,62.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AAAl1IAALq");
	this.shape_49.setTransform(63.1,63.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AAAmHIAAMP");
	this.shape_50.setTransform(58.9,66.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAAmOIAAMd");
	this.shape_51.setTransform(57.4,67.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAAnUIAAOp");
	this.shape_52.setTransform(37.1,73.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AAAnUIAAOp");
	this.shape_53.setTransform(38.6,74);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAAnYIAAOx");
	this.shape_54.setTransform(42.8,75.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AAAnYIAAOx");
	this.shape_55.setTransform(44.4,76);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_56.setTransform(42.5,127.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_57.setTransform(41.7,127.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_58.setTransform(40.8,126.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_59.setTransform(40,126.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_60.setTransform(37.4,125.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_61.setTransform(36.5,125.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_62.setTransform(35.7,124.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_63.setTransform(34.8,124.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AA5AZIhxgx");
	this.shape_64.setTransform(38.4,127.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AhfgPIAygMICMA4");
	this.shape_65.setTransform(39,122);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AAWgIIgrAR");
	this.shape_66.setTransform(46.3,125.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("ABKBFIAAhDIh1gxIgdgNIACA8IAegNIgDgi");
	this.shape_67.setTransform(36.7,126.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AggoFIAAQEIBFgX");
	this.shape_68.setTransform(51.7,81);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AAAnWIAAOt");
	this.shape_69.setTransform(32.7,72.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_70.setTransform(14.5,123.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_71.setTransform(15.5,123.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_72.setTransform(35.1,133.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_73.setTransform(36,133.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AgdgNIA6gYIgZBJg");
	this.shape_74.setTransform(26.9,125.5,1,1,0,0,0,0.2,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AgUAOIAlgOQAFgFAAgJIgnAOg");
	this.shape_75.setTransform(39.9,142.2,1,1,0,0,0,0.1,-0.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AAWALIgrgV");
	this.shape_76.setTransform(23.1,136.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AANAGIgZgM");
	this.shape_77.setTransform(18.2,134.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AAQAcIgcgOIAAglIAcAO");
	this.shape_78.setTransform(14.2,130.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgMgFIAZAL");
	this.shape_79.setTransform(18.2,130.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgXgaIAsAWIAAAj");
	this.shape_80.setTransform(23.2,134.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AAAAiIAAhC");
	this.shape_81.setTransform(18.2,132.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgMgnIAABAIAZAOIAAhCg");
	this.shape_82.setTransform(18.2,132.6,1,1,0,0,0,0,0.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_83.setTransform(20.4,121.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("ABJgIIgbgFIh2Ac");
	this.shape_84.setTransform(16.1,116.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AjnhqIHQDU");
	this.shape_85.setTransform(32.2,127.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("ABBgUIiAAp");
	this.shape_86.setTransform(49,134.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgYgMIAxAZ");
	this.shape_87.setTransform(40,146.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgZgNIAzAb");
	this.shape_88.setTransform(43.5,145);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AAHgOIAWANIglAQIgVgPg");
	this.shape_89.setTransform(48.3,141.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgXgHIASgHIAWANIglAQIgEgD");
	this.shape_90.setTransform(45.3,139.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AgIAMIgMgIIAkgOIAMAH");
	this.shape_91.setTransform(32,151.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_92.setTransform(28.4,149.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_93.setTransform(23.8,146.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgPg");
	this.shape_94.setTransform(19.6,144.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AgegfIBFAkIhZAb");
	this.shape_95.setTransform(15,140.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABX");
	this.shape_96.setTransform(20.8,133.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABY");
	this.shape_97.setTransform(15.9,131.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("Ah4g5IDxBz");
	this.shape_98.setTransform(24.3,139.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AAEAyQANgPgCgcQgBgjgfgV");
	this.shape_99.setTransform(41.5,138.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AAPghIgpAQQASASAAAfIAmgPQABgHgBgKQgDgSgMgPg");
	this.shape_100.setTransform(38.9,138.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AgQgaQAkAPgCAmIgjgPg");
	this.shape_101.setTransform(34,139.5,1,1,0,0,0,0,0.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AAsAYIg4AXQAJgZgDgWQgFgigggQ");
	this.shape_102.setTransform(37.6,140.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AiOgiIDSBrIBBgZIj8h5");
	this.shape_103.setTransform(26.5,128.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("ABGAyIgBhdIiOAl");
	this.shape_104.setTransform(16.5,120);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AA+gxIAAg3IhgAaIAACvIgfAJ");
	this.shape_105.setTransform(15.5,129.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_106.setTransform(46.2,132.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AjyhvIHlDf");
	this.shape_107.setTransform(31.1,122.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1,-1,77.2,155), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AC0F+IAAp/Ilqh3");
	this.shape.setTransform(59.2,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AidhZIE4BrIAABN");
	this.shape_1.setTransform(58.1,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AiGhEIEKBeIAAAw");
	this.shape_2.setTransform(56.9,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AjLEvIAAnpIGXiAIAAJ8");
	this.shape_3.setTransform(20.4,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("Ai4BkIAAg+IFxiBIAABW");
	this.shape_4.setTransform(23.8,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("ACugbIgCgzIlYB9IAAAn");
	this.shape_5.setTransform(26.2,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1,-1.2,79.2,90.9), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("ACchJIk3CT");
	this.shape.setTransform(17.8,106.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AAlAXIgbgeIgwgN");
	this.shape_1.setTransform(52.4,87.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("ADGhbImICzIAAg9");
	this.shape_2.setTransform(106,136.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjDAdIGHh2ImHCzg");
	this.shape_3.setTransform(106.2,136.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_4.setTransform(124.7,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AAMAXIAwgeIhGgOIg7Ad");
	this.shape_5.setTransform(118.7,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AApAaIAAgzIhRgPIAABX");
	this.shape_6.setTransform(115.8,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AAYA0IgtgcIAAhP");
	this.shape_7.setTransform(90.9,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAHAtIgvAIIAAhaIBRgPIAAA9");
	this.shape_8.setTransform(97.4,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAEgOgKgL");
	this.shape_9.setTransform(105.6,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_10.setTransform(100.2,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_11.setTransform(103.1,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgDgMIAHAZ");
	this.shape_12.setTransform(105.9,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AgFARIAKgh");
	this.shape_13.setTransform(100.3,25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AAtgEQABANgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQASgCAOAJQAOAIACAPg");
	this.shape_14.setTransform(102.7,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAjgEQABAFgKAGQgJAFgPACQgNADgLgDQgKgDgBgGQgBgFAJgGQAKgFAOgCQANgCALACQALADABAGg");
	this.shape_15.setTransform(102.5,18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AgEAUQAEgFACgIQAEgOgKgL");
	this.shape_16.setTransform(73.1,24.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_17.setTransform(67.7,25.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AgEAUQAEgFACgIQAFgOgLgL");
	this.shape_18.setTransform(70.6,25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngZIALgf");
	this.shape_19.setTransform(70.5,29.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAtgEQABANgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAPAJQAOAIACAPg");
	this.shape_20.setTransform(70.2,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAGQgKAFgOACQgOACgKgCQgLgDgBgGQgBgFAKgGQAJgFAOgDQAOgCALADQAKADABAGg");
	this.shape_21.setTransform(70.1,22.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AnVgkIARgCIBrBmIITiAIEHAAIASAN");
	this.shape_22.setTransform(102.1,28.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("ABWBgIirjA");
	this.shape_23.setTransform(58.8,117.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_24.setTransform(64.3,109);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_25.setTransform(64.3,97.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAfAjIg9hF");
	this.shape_26.setTransform(64.3,82.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_27.setTransform(64.3,68.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hG");
	this.shape_28.setTransform(64.3,56.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AAAjuIAAHd");
	this.shape_29.setTransform(185,39.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAAmaIAAM2");
	this.shape_30.setTransform(174.4,59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABl");
	this.shape_31.setTransform(174.4,117.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAAkxIAAJj");
	this.shape_32.setTransform(163.8,62.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AAAhPIAACe");
	this.shape_33.setTransform(163.8,115.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAAmRIAAMj");
	this.shape_34.setTransform(153.2,84.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AAAn5IAAPz");
	this.shape_35.setTransform(142.7,74.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAAoAIAAQB");
	this.shape_36.setTransform(132.1,74.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AAAoFIAAQL");
	this.shape_37.setTransform(121.5,75.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAAn+IAAP9");
	this.shape_38.setTransform(110.9,77.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AAAn9IAAP7");
	this.shape_39.setTransform(100.3,80.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AAAoQIAAQh");
	this.shape_40.setTransform(89.8,84.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AAAohIAARD");
	this.shape_41.setTransform(79.2,88.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AG3g7IkhAJIoKBtIg+hG");
	this.shape_42.setTransform(105,40.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AD2gkInrBJ");
	this.shape_43.setTransform(188.5,28);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AmYBNIMxiZ");
	this.shape_44.setTransform(108.4,51.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AjbASIG4gk");
	this.shape_45.setTransform(180.7,40.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AJ1hiIzpDF");
	this.shape_46.setTransform(130.3,62);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("Ao7BbIR2i2");
	this.shape_47.setTransform(124.9,76.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AIihgQgEAAkFAaQkHAagHACQgiAJj9A9QjUAzg9AR");
	this.shape_48.setTransform(122.5,91.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("Am1BgIHUiZIGZgl");
	this.shape_49.setTransform(111.2,103.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AhJAHICTgN");
	this.shape_50.setTransform(171.4,92.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AnUB1IGki8IIHgt");
	this.shape_51.setTransform(114.3,115.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AgTACIAngD");
	this.shape_52.setTransform(179.2,102.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("ApBB/IGGjIIL/g0");
	this.shape_53.setTransform(125.2,125.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AhigKIDFAV");
	this.shape_54.setTransform(23,119.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("ABWALIirgV");
	this.shape_55.setTransform(24.3,146.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("ApWgtIIpA9IKEAd");
	this.shape_56.setTransform(153,7.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AieAjIE+hF");
	this.shape_57.setTransform(56.8,21.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("ABnhcIAAAdIjMCSIgBgZ");
	this.shape_58.setTransform(82.8,9.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AjpBRIFNidIAAASICIAJ");
	this.shape_59.setTransform(23.4,105);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AgkAAIBJAA");
	this.shape_60.setTransform(152.5,41.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("ABIh9IgbAKIhvDeIARAU");
	this.shape_61.setTransform(162.9,31.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AgZAuIAzhb");
	this.shape_62.setTransform(174.5,107.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AgiA0IBFhn");
	this.shape_63.setTransform(169,104.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgcAtIA6hZ");
	this.shape_64.setTransform(165,100.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AgXAlIAvhI");
	this.shape_65.setTransform(161.7,96.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AgTAcIAng3");
	this.shape_66.setTransform(158.7,93.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("ACBB+IgVhiIjOiYIgeA0IB0Cxg");
	this.shape_67.setTransform(167.5,100.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AsJK4IFpjPIMshQIhZnAIHVqS");
	this.shape_68.setTransform(145.3,80.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AA6j9IgEAUIAgBBIisCOIAAEMICqi2");
	this.shape_69.setTransform(41.6,123.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("ACvoDIAARvIisjMIAAjlIgbhVIiNgIIApiIIgzpO");
	this.shape_70.setTransform(50,87.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("ApeCWIh8h2IjjgGIGQheIDOiXIIzBIILfAiIoQBRIh6D8IhbAAIAAjLIkSAAg");
	this.shape_71.setTransform(128.2,22);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AAACTIAAkl");
	this.shape_72.setTransform(58.8,125.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("ABWBhIirjB");
	this.shape_73.setTransform(58.8,127.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AARgdIghgEIAAA/IAhAEg");
	this.shape_74.setTransform(18.3,141.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AgIAQIgvgRIBGgOIA6AQ");
	this.shape_75.setTransform(94.2,11.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABN");
	this.shape_76.setTransform(216.7,15.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AAAhpIAADT");
	this.shape_77.setTransform(206.1,23.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AAAirIAAFX");
	this.shape_78.setTransform(195.5,31.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AATARIgmgh");
	this.shape_79.setTransform(84.6,143.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-1,225,152), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AA+g6Ih7B1");
	this.shape.setTransform(13.8,102.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AhQANQBdAgBEgCIAAg2QhBADhgghg");
	this.shape_1.setTransform(121.1,146.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQAMIAAg2QBgAhBBgDIAAA2IgIABQhBAAhYgfg");
	this.shape_2.setTransform(121.1,146.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAaBDIgzAAIAAiFIAzAAg");
	this.shape_3.setTransform(142.8,132.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBDIAAiFIAzAAIAACFg");
	this.shape_4.setTransform(142.8,132.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AguhMIAAgDAguhMQAKAOAiAPQAhAOAPgCQABBzgBAFQgPAFgTgDQgmgFgUghg");
	this.shape_5.setTransform(104.5,129.4,1,1,0,0,0,0,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMBTQgmgFgUghIAAiAIABADQAJAOAiAPQAhAOAPgCQABBzgBAFQgKADgLAAIgNgBg");
	this.shape_6.setTransform(104.5,129.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AExAhIn8ASIgGhQIhegV");
	this.shape_7.setTransform(40.1,91.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjRgdIhegVIJfBTIn7ASg");
	this.shape_8.setTransform(40.1,91.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgcAKIA4gT");
	this.shape_9.setTransform(91.6,164.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AkejOIF6FhIBDAnQBNAiAxgW");
	this.shape_10.setTransform(97.4,181.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AkojZIGPF2IBDAnQBMAiAxgW");
	this.shape_11.setTransform(96.3,178.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AkvjfIGcGDIBDAmQBNAiAxgW");
	this.shape_12.setTransform(95.7,175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AEtDWQgxAWhNgiIhDgnImZmC");
	this.shape_13.setTransform(95.8,172.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AC1BjQgxAWhMgjIhCgmIisic");
	this.shape_14.setTransform(107.7,181.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AjAhwIDAClIBCAmQBMAjAxgW");
	this.shape_15.setTransform(106.7,178.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AC6BoQgxAWhNgjIhCgmIizieIAAAe");
	this.shape_16.setTransform(107.3,175.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AlkhaQAoA5BZAsQBVAqBsAUQDxAtCZhS");
	this.shape_17.setTransform(130.4,112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjBKQhsgUhVgqQhZgsgog5ILLB+QhiA1iIAAQhKAAhVgQg");
	this.shape_18.setTransform(130.6,111.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AgpgiIBTBF");
	this.shape_19.setTransform(63.9,139.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("Ag0g6IBpBeIgBAXIhnhogAA0ARIhShLIgWAA");
	this.shape_20.setTransform(62.6,143.7,1,1,0,0,0,0,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzgtIgBgNIBpBeIgBAXgAg0g6IAWAAIBSBLg");
	this.shape_21.setTransform(62.6,143.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AgQhvIAAC9IAjAe");
	this.shape_22.setTransform(96.2,155.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRBQIAAi9IAjDbg");
	this.shape_23.setTransform(96.3,155.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAlBQIhFANIAAi+");
	this.shape_24.setTransform(101.4,157);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgihfIBFCyIhFAMg");
	this.shape_25.setTransform(101.6,156.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AghhwIAACYIBEBF");
	this.shape_26.setTransform(108.4,163);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghAqIAAiYIBDDdg");
	this.shape_27.setTransform(108.4,162.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AgohjIAADAIBRgSIAAiU");
	this.shape_28.setTransform(115.6,164.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgohgIBRAbIAACTIhRASg");
	this.shape_29.setTransform(115.6,164.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("ACkEpQhDADhZgSQiyglhyhqIAJmVII1ge");
	this.shape_30.setTransform(122.3,129.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAFEaQiyglhyhqIAKmVII1geIh+JRIgTAAQg9AAhNgPg");
	this.shape_31.setTransform(122.5,129.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAxAJIg8gQIgkAP");
	this.shape_32.setTransform(156.3,57.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgvAIIAkgQIA8ARg");
	this.shape_33.setTransform(156.4,57.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AgVDtIAogdIAAm4IgoAS");
	this.shape_34.setTransform(159.3,82.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUjYIApgSIAAG4IgpAdg");
	this.shape_35.setTransform(159.2,82.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAcDrIg3giIAAm1IA3ATg");
	this.shape_36.setTransform(154.2,82.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgbDKIAAm1IA3ATIAAHEg");
	this.shape_37.setTransform(154.2,82.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAugHIhWAFIAAAP");
	this.shape_38.setTransform(63.9,136.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrgEIBWgFIhWATg");
	this.shape_39.setTransform(64.1,136.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AhEiQIABCUICBCDIAHkZ");
	this.shape_40.setTransform(53.6,122.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhDAKIgBiUICJgCIgIEZg");
	this.shape_41.setTransform(53.6,121.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AFcBnIpvAHIhJghIB3hbIgXhfIJjAD");
	this.shape_42.setTransform(34.9,97.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AlhBNIB3hbIgWhfIJiADIgLDRIpvAHg");
	this.shape_43.setTransform(35.4,97.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAAhJIAACT");
	this.shape_44.setTransform(49.2,78.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("ABAA0Ih1hmIB0AA");
	this.shape_45.setTransform(54.6,76.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag6gzIB1AAIAABng");
	this.shape_46.setTransform(55.1,76.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AAAhSIAACl");
	this.shape_47.setTransform(61.1,78.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("Ah8gEIA1AMIDEgQ");
	this.shape_48.setTransform(68.3,69);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ah8gEID5gDIjFAQg");
	this.shape_49.setTransform(68.4,69);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgghNIA9ATIAACGIg7gX");
	this.shape_50.setTransform(78,60.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcA2IgCiCIA9ATIAACGg");
	this.shape_51.setTransform(77.8,60.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("ABfA0IgCiBIi7AuIAABug");
	this.shape_52.setTransform(65.4,60.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AheggIC8guIABCCIi9Abg");
	this.shape_53.setTransform(65.4,60.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AhJnUIgmLgIDCC9IAdr8");
	this.shape_54.setTransform(79,122.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhvERIAmrfIC5ChIgeL8g");
	this.shape_55.setTransform(79,122.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AC/hRIpGACIC7ChIJSgig");
	this.shape_56.setTransform(110.7,83.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AmGhPIJGgCIDHCBIpSAig");
	this.shape_57.setTransform(110.6,83.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAADLIAAmV");
	this.shape_58.setTransform(95.9,54.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AFUDQIAAlMIlThNIgBAAIlTBUIAACB");
	this.shape_59.setTransform(95.7,54.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AlTAJIAAiBIFThUIABAAIFTBNIAAFMg");
	this.shape_60.setTransform(95.7,54.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AAAi1IAAFr");
	this.shape_61.setTransform(87.9,18.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AgvC/IAAldIA7gaIAlAbIAAFE");
	this.shape_62.setTransform(86.8,18.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgvihIA6gaIAlAbIAAFEIhfAYg");
	this.shape_63.setTransform(86.8,18.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgcAAIA4AA");
	this.shape_64.setTransform(164.3,99.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AAAg4IAABx");
	this.shape_65.setTransform(150,94.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AhEB2QgCgLAAgWQAAgVABgHQABgKALgQIBeiGQAMgRAKADQAIADABARQACAWABAm");
	this.shape_66.setTransform(99.1,180.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1,-1,169.1,204.4), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AB3hVIAWABIAAATIkcCY");
	this.shape.setTransform(139.2,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("ACBhYIAdAEIAAAUIk9CZ");
	this.shape_1.setTransform(135.3,85.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAf");
	this.shape_2.setTransform(96.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AghFeIApgWIAApSQABgPADgRQAGgkAPgO");
	this.shape_3.setTransform(31.7,78.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AKGgUImyguItZCF");
	this.shape_4.setTransform(75.2,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("ADgicIHrA7Is+D+IpYipg");
	this.shape_5.setTransform(74,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAABBQgBgagCgaQgDgzAEAAIAHgd");
	this.shape_6.setTransform(61.8,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AhsgLIBhAbIB4gg");
	this.shape_7.setTransform(62.7,32.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAWgkQgLAEgLALQgVAWAAAp");
	this.shape_8.setTransform(14.5,43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AAXgzQgMABgLAPQgWAdAAA/");
	this.shape_9.setTransform(13.5,40.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgJDxIAAmDQAAgRADgUQAGgnAMgN");
	this.shape_10.setTransform(24.4,64.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AAOj+IgNATQgNAbAAArIAAGn");
	this.shape_11.setTransform(23,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgwlmIAPAPQASAUAPAYQAwBOAABfIAAHp");
	this.shape_12.setTransform(22.4,63.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AATlmIgSAZQgSAoAABKIAAJF");
	this.shape_13.setTransform(31.5,73.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AgpmXIApBFQAqBWAABaIAAI9");
	this.shape_14.setTransform(32.8,71.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AgLFcIAApeQABgPADgTQAHglANgO");
	this.shape_15.setTransform(43.6,77.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("ABGl6IgMAYQgNAvAABrIAAI/Ih1gn");
	this.shape_16.setTransform(35.4,76);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AAmFyIAAnzQABgngKgxQgThjgxgy");
	this.shape_17.setTransform(44.5,72.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AALlCQgVAvAACLIAAHQ");
	this.shape_18.setTransform(54.1,75.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAQlNQgCABgDAEQgGAJgFARQgPA2AABzIAAHY");
	this.shape_19.setTransform(52.5,75.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AA3kKQgbAJgcAfQg2A9AABpIAAFM");
	this.shape_20.setTransform(70.4,62);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AiIgzQAAiZg5hfQgSgdgVgUIgSgPIGbCLIARAJQAVAMARATQA3A9AABqIAAGK");
	this.shape_21.setTransform(32.6,60.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AMUgRIpeg0IvJCL");
	this.shape_22.setTransform(78.8,7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AEhGAIAAniQgIgegOggQgchAghgJInyiS");
	this.shape_23.setTransform(33,55.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AFiFsIAUgJIAAmWQAAg6ALhDQAWiHA8gsItXEIQgpANgZAhQgiAtAAAx");
	this.shape_24.setTransform(110.8,40.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAiC8IAAi6QAAhjgagwQgNgZgNgLQgEgCgEABQgFABgCAD");
	this.shape_25.setTransform(71.6,60.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAfClIgBiJQAAhmgXgvQgLgagMgKQgDgDgFABQgEABgBAE");
	this.shape_26.setTransform(70.1,60.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAuEPIgBlcQAAhmgagwQgOgagMgKQgDgDgFABQgFABgBAEQgYA7AABA");
	this.shape_27.setTransform(83,66.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAlEBIgBlLQAAhhgUgtQgLgXgKgKQgDgDgDABQgEABgCAEQgTA1AAA+IAAEo");
	this.shape_28.setTransform(82,68.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AAuEPIgBlYQAAhogagxQgPgbgLgJQgEgDgEABQgFABgCAEQgXA9AABA");
	this.shape_29.setTransform(95.4,62);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAlDxIgBlEQAAhigVguQgKgYgKgLQgDgCgEABQgEABgBADQgTA5AAA9IAAGa");
	this.shape_30.setTransform(94.5,65.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AAsEyIgBmgQAAhngZgxQgOgbgKgJQgEgDgFABQgEABgCAEQgWA7AABB");
	this.shape_31.setTransform(108.2,61.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAjEeIgBmCQAAhhgTgvQgMgagIgIQgDgCgDABQgEABgBADQgSA6AAA8IAAGo");
	this.shape_32.setTransform(107.3,63.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AArElIgBmCQAAhqgYgxQgNgbgLgKQgDgDgFABQgEABgCAEQgWBAAAA/");
	this.shape_33.setTransform(120.1,57.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAiEJIAAl2QAAhjgUgvQgKgagIgJQgDgDgEABQgDABgBAEQgSA2AABCIAAHR");
	this.shape_34.setTransform(119.2,61.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AArEhIgBl9QAAhngYgyQgNgZgLgLQgEgDgEABQgEABgCAEQgWA6AABD");
	this.shape_35.setTransform(131.4,53);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAiEFIgBlwQAAhigTguQgJgYgKgLQgCgCgEABQgEABgBADQgRA4AAA+IAAHK");
	this.shape_36.setTransform(130.6,57);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("ABPjlQAAg/AVg7QACgEAEgBQAFgBADADQANAKAMAZQAYAwAABmIABF2IlKCZ");
	this.shape_37.setTransform(129.8,56.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAiD/IgBlnQAAhggTgtQgLgZgIgJQgCgCgEABQgEABgBADQgRA3AAA8IAAHA");
	this.shape_38.setTransform(141.1,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-1,159.6,115.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AKSAaImAieIuqCnICMBig");
	this.shape.setTransform(76.2,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqUAjIOpinIGBCeIyeBrg");
	this.shape_1.setTransform(75.9,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("Ag3gXIBvAv");
	this.shape_2.setTransform(49.7,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AlkAxILIhg");
	this.shape_3.setTransform(91.3,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AJPgtIiWgOIwHB4");
	this.shape_4.setTransform(82.9,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("Ak0jhIJqHD");
	this.shape_5.setTransform(31,83.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("ADRChImhlB");
	this.shape_6.setTransform(21,70.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("ADuCIIg2AJImjki");
	this.shape_7.setTransform(23.6,57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("ADuCJIg2AJImjkl");
	this.shape_8.setTransform(23.7,53.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AD+CBIhXASImikm");
	this.shape_9.setTransform(25.3,47.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj8iSIH5EUIhXASg");
	this.shape_10.setTransform(25.4,47.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AjyiVIGhEqIBGgQ");
	this.shape_11.setTransform(24.4,40.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjziVIHnEaIhGARg");
	this.shape_12.setTransform(24.5,40.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AFZBAIjMh+InnA+");
	this.shape_13.setTransform(34.9,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AlZAAIHog+IDLB9g");
	this.shape_14.setTransform(34.8,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AFyBMIj/iXInnA2");
	this.shape_15.setTransform(37.6,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AlzgVIHng2IEACXg");
	this.shape_16.setTransform(37.5,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("ABjBDIjFiF");
	this.shape_17.setTransform(10,22);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("ABGAwIiLhf");
	this.shape_18.setTransform(7,25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AA6ARIgeAHIhTgw");
	this.shape_19.setTransform(39.5,42.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4gYIBxAqIgeAHg");
	this.shape_20.setTransform(39.6,42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AhIgsICRBZ");
	this.shape_21.setTransform(34.7,44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AArCyIhRAQIAAl4IAugM");
	this.shape_22.setTransform(45.8,67.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("Ag4iDIAACsIB0BX");
	this.shape_23.setTransform(55.8,86.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAAgcIAAA5");
	this.shape_24.setTransform(76.5,90.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAAgeIAAA9");
	this.shape_25.setTransform(81.1,88.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AFvhOIAVAMIp6CQIiYhg");
	this.shape_26.setTransform(124.7,84.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AgsAHIBagN");
	this.shape_27.setTransform(64.5,65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AgwAHIBhgN");
	this.shape_28.setTransform(64.1,61.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("Ag2AHIBtgN");
	this.shape_29.setTransform(63.5,56.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("Ag6AHIB0gN");
	this.shape_30.setTransform(63.2,52.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("Ag9AHIB7gN");
	this.shape_31.setTransform(62.8,48.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgogTIBRAn");
	this.shape_32.setTransform(56,64.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AgtgVIBbAr");
	this.shape_33.setTransform(54.3,58.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("Ag0gZIBpAz");
	this.shape_34.setTransform(52.2,51.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AlngjIHUhJID7CBInbBXg");
	this.shape_35.setTransform(115.5,50,1,1,0,0,0,0.6,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AHPgPIpXB4IlEjS");
	this.shape_36.setTransform(115.1,71.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AHPgPIpXB4IlEjS");
	this.shape_37.setTransform(115.1,63.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AHXhcIllivIpCBUIFEDSIJjh3IABgBIgNBDIAACgIpeCGIighmIAAAwIiGArIAAAP");
	this.shape_38.setTransform(115.5,63.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("Ah3hvIAAAqIDuCrIAAgz");
	this.shape_39.setTransform(59.4,78.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AiAhVIg4AHIDtCjICGgpIidhu");
	this.shape_40.setTransform(66,75.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AhVieIBcEVIBNApIhClH");
	this.shape_41.setTransform(52.4,54.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AGcBaIlGiyInuAsIAAAv");
	this.shape_42.setTransform(40.9,8.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AmaADIAAgwIHugrIFHCxg");
	this.shape_43.setTransform(41.1,8.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAniuIAAFDIhRAW");
	this.shape_44.setTransform(65.1,53.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AluAqILdhT");
	this.shape_45.setTransform(91.6,37.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AAAgRIAAAj");
	this.shape_46.setTransform(125.8,40.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AEyA2IjAhqImlBD");
	this.shape_47.setTransform(114.4,47.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkyAOIGlhCIDABpg");
	this.shape_48.setTransform(114.3,47.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AAAgeIAAA9");
	this.shape_49.setTransform(84.7,87.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgRAbIAjg1");
	this.shape_50.setTransform(127.9,33.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhO");
	this.shape_51.setTransform(99.9,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,-1,165.5,107.9), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape.setTransform(168.7,189.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIAMAF");
	this.shape_1.setTransform(140.9,202.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AgFgCIALAF");
	this.shape_2.setTransform(133.1,205.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_3.setTransform(168.7,175.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_4.setTransform(150.6,181.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AAAgfIAAA/");
	this.shape_5.setTransform(128,214.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgJAAgM");
	this.shape_6.setTransform(4.2,144.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgIAAgN");
	this.shape_7.setTransform(11.6,152.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAnAPQgfgCgUgKQgVgIAAgN");
	this.shape_8.setTransform(19,160.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AA1AOIgRAAQgjAAgYgKQgYgJAAgN");
	this.shape_9.setTransform(27.8,168.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AAmAUQghgHgSgMQgUgLAAgO");
	this.shape_10.setTransform(111.7,230.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AA9AVQgwAAgigOQgjgNAAgT");
	this.shape_11.setTransform(38.7,189);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_12.setTransform(50.9,200.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_13.setTransform(62.9,212.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AA+AXQgzgCghgPQgjgNAAgU");
	this.shape_14.setTransform(74.8,224.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("ACIgbQAAAVgoAOQgoAPg4AAQg4AAgogPQgogOAAgV");
	this.shape_15.setTransform(94.7,234.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAAiUIAAEp");
	this.shape_16.setTransform(131.6,162.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AAAAtIAAhZ");
	this.shape_17.setTransform(148.2,166.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AAAA2IAAhr");
	this.shape_18.setTransform(146.6,166.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AASgYIgjAx");
	this.shape_19.setTransform(141.7,160.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AATgYIglAx");
	this.shape_20.setTransform(136.6,167.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgaAlIA1hJ");
	this.shape_21.setTransform(137.5,169.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AgQAYIAhgv");
	this.shape_22.setTransform(143.2,161.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("Ag7gfIB1BWIAAgZIh1ha");
	this.shape_23.setTransform(140.7,164.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AgjAwIBHhg");
	this.shape_24.setTransform(100.1,101.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AgiA1IBFhp");
	this.shape_25.setTransform(103.9,104.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AgjA3IBHht");
	this.shape_26.setTransform(108,107.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_27.setTransform(107.6,130.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AgQAHIAAglIAhAeIAAAq");
	this.shape_28.setTransform(37.4,103.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_29.setTransform(32.7,98.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_30.setTransform(27.9,93.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_31.setTransform(23.2,88.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_32.setTransform(18.4,84);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("ACoCbQgWAFgPgGQgJgFgPgOIkBj+QgKgLgCgHQgEgKAHgK");
	this.shape_33.setTransform(17,96.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("ACoCxQggAGgWgWIkCj+QgbgcAMgVQAJgRAlgJQAwgMAsAD");
	this.shape_34.setTransform(16.4,95.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AhcBDIC2gyIAAhSIi2An");
	this.shape_35.setTransform(107.9,144.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7F6F7").s().p("AhagbIC1gmIAABRIi1Ayg");
	this.shape_36.setTransform(107.7,144.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AAmAUQghgHgSgMQgUgLAAgO");
	this.shape_37.setTransform(111.7,229.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AgtgeQAnAFAXANQAYANAAARQAAAHgFAH");
	this.shape_38.setTransform(92.2,119.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AgvgeQAoAEAZAMQAaAMAAAPQAAAKgKAI");
	this.shape_39.setTransform(103.2,127.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("ACJAAQAAAVgoAPQgoAPg5AAQg3AAgogPQgogPAAgVQAAgUAogPQAogPA3AAQA5AAAoAPQAoAPAAAUg");
	this.shape_40.setTransform(113.5,144.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AAAGJIAAsR");
	this.shape_41.setTransform(108.4,191.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AAAkbIAAI3");
	this.shape_42.setTransform(0.7,113.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AAAkeIAAI9");
	this.shape_43.setTransform(8.2,121.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAAkgIAAJB");
	this.shape_44.setTransform(15.6,128.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AAAEkIAApG");
	this.shape_45.setTransform(23,136.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgJAAgM");
	this.shape_46.setTransform(4.2,143.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgIAAgN");
	this.shape_47.setTransform(11.6,152.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgVgJAAgN");
	this.shape_48.setTransform(19,159.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AA1AOIgRAAQgjAAgYgKQgYgJAAgN");
	this.shape_49.setTransform(27.8,167.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AAAloIAALR");
	this.shape_50.setTransform(33.1,149.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAAlyIAALl");
	this.shape_51.setTransform(45.1,160.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAAl/IAAL/");
	this.shape_52.setTransform(57.1,171.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AAAmIIAAMR");
	this.shape_53.setTransform(69.1,182);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAAGJIAAsR");
	this.shape_54.setTransform(81.1,191.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AFvDRIo3mfIipAN");
	this.shape_55.setTransform(79.7,116.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7F6F7").s().p("AlwjCICqgNII3Gfg");
	this.shape_56.setTransform(79.5,116.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AEWEOIAAhnIorm1IAABHg");
	this.shape_57.setTransform(70.5,124.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7F6F7").s().p("AkVjHIAAhHIIrG1IAABng");
	this.shape_58.setTransform(70.5,124.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AA9AVQgwAAgigOQgjgNAAgT");
	this.shape_59.setTransform(38.7,188.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgOQgjgOAAgU");
	this.shape_60.setTransform(50.9,199.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_61.setTransform(62.9,211.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AA+AXQgzgCghgPQgjgNAAgU");
	this.shape_62.setTransform(74.8,224);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("ACIgbQAAAVgoAOQgoAPg4AAQg3AAgpgPQgogOAAgV");
	this.shape_63.setTransform(94.7,233.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAWgoAPQgoAPg4AAQg4AAgogPQgogPAAgWQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_64.setTransform(46.7,113.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAWgoAPQgoAPg4AAQg4AAgogPQgogPAAgWQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_65.setTransform(58.7,123.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgVAogPQAogPA4AAQA4AAAoAPQAoAPAAAVg");
	this.shape_66.setTransform(70.7,133.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgVAogPQAogPA4AAQA4AAAoAPQAoAPAAAVg");
	this.shape_67.setTransform(82.7,142.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_68.setTransform(94.7,152.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AASAiQgSAGgRgGIAAhEQARAFASgFg");
	this.shape_69.setTransform(87.9,104.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AEcEqIo1nwIAAhn");
	this.shape_70.setTransform(124.4,136.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AEDCYIhXCJIolnnIBJhbII5GRIBrCIIgZgGIhThhgAF0D4IgfAAIhShg");
	this.shape_71.setTransform(132.5,124.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_72.setTransform(60.7,88.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AAAhuIAADd");
	this.shape_73.setTransform(79.4,100.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AiJAvICHh/ICMBOQABAagjAXQggAVgxAJQgxAKgrgHQgvgHgVgag");
	this.shape_74.setTransform(93.2,84.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AiFixIAABQIEMEQ");
	this.shape_75.setTransform(27.6,91.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgbiUQgQAKgpgCQgqgDgTAMIEoEZ");
	this.shape_76.setTransform(28.4,86.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("ACIgkIAAEqIkPjsIAAkp");
	this.shape_77.setTransform(39.2,69.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgMALQgCgUAOAAQANgBAAAZ");
	this.shape_78.setTransform(123,147.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgMALQgCgTAOgBQANgBAAAZ");
	this.shape_79.setTransform(118.3,148.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_80.setTransform(122,179.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_81.setTransform(122,178.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_82.setTransform(122,176.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_83.setTransform(122,175.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_84.setTransform(122,174);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_85.setTransform(122,172.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_86.setTransform(122,171.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_87.setTransform(122,169.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_88.setTransform(122,168.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_89.setTransform(122,166.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_90.setTransform(122,165.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_91.setTransform(122,164.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_92.setTransform(122,162.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_93.setTransform(122,161.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_94.setTransform(122,159.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_95.setTransform(122,158.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_96.setTransform(122,157);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_97.setTransform(122,155.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_98.setTransform(122,154.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_99.setTransform(122,152.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_100.setTransform(122,151.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_101.setTransform(122,149.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AABCeIgBk7");
	this.shape_102.setTransform(124.4,164.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AAAChIAAlB");
	this.shape_103.setTransform(119.7,165.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AAACvIAAld");
	this.shape_104.setTransform(127.4,161.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AAAiCIAAEF");
	this.shape_105.setTransform(134.6,163.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AAAiIIAAER");
	this.shape_106.setTransform(133.5,162.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AAACcIAAk3");
	this.shape_107.setTransform(130.8,162.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AAaAiIgvASIgEhcIAwgMg");
	this.shape_108.setTransform(159.2,155.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AA1gJIhpAT");
	this.shape_109.setTransform(158.4,146.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AhBhJIAICiIB6gyIAAiH");
	this.shape_110.setTransform(158.6,157);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgnA9IBPh5");
	this.shape_111.setTransform(115.8,113.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgnA9IBPh5");
	this.shape_112.setTransform(119.8,116.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgpBAIBTh/");
	this.shape_113.setTransform(123.7,120);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgqBCIBWiD");
	this.shape_114.setTransform(127.7,123.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgsBFIBZiJ");
	this.shape_115.setTransform(131.6,126.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AguBHIBdiN");
	this.shape_116.setTransform(135.6,129.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgvBJIBfiR");
	this.shape_117.setTransform(139.6,132.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgxBMIBjiX");
	this.shape_118.setTransform(143.5,135.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgzBPIBnid");
	this.shape_119.setTransform(147.4,138.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("Ag0BQIBpif");
	this.shape_120.setTransform(151.4,142);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AglA5IBLhx");
	this.shape_121.setTransform(111.9,110.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_122.setTransform(101.3,62.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_123.setTransform(101.3,48.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AAWAnIgqAAIAAhNIAqAAg");
	this.shape_124.setTransform(77.8,34);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_125.setTransform(101.3,34);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AANAiIgXgUIgCgvIAYATg");
	this.shape_126.setTransform(47.5,67.7,1,1,0,0,0,0,-0.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AAQA9IgfgcIAAhdIAfAdg");
	this.shape_127.setTransform(63.5,48,1,1,0,0,0,0,-0.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AAQA9IgfgdIAAhcIAfAcg");
	this.shape_128.setTransform(63.5,27.7,1,1,0,0,0,0,-0.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AAPA6IgdgbIAAhYIAdAbg");
	this.shape_129.setTransform(57.3,23,1,1,0,0,0,0,-0.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagYIAAhXIAaAZg");
	this.shape_130.setTransform(51.4,18,1,1,0,0,0,0,-0.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagZIAAhWIAaAYg");
	this.shape_131.setTransform(46,34.6,1,1,0,0,0,0,-0.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagZIAAhWIAaAYg");
	this.shape_132.setTransform(46,14,1,1,0,0,0,0,-0.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("ADkBwIiuATIkOjrICiga");
	this.shape_133.setTransform(47.4,52.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("ABYhcIAAGXIkZjzIAAmIIGIAW");
	this.shape_134.setTransform(61.3,32.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AlYhyIEaDkIGLgMIkcjA");
	this.shape_135.setTransform(76.4,11.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYAUg");
	this.shape_136.setTransform(46.1,84.8,1,1,0,0,0,0,-0.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgwIAYAUg");
	this.shape_137.setTransform(41.8,76.9,1,1,0,0,0,0,-0.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAXATg");
	this.shape_138.setTransform(36.1,72.1,1,1,0,0,0,0,-0.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYAUg");
	this.shape_139.setTransform(30.4,67.4,1,1,0,0,0,0,-0.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgwIAYAUg");
	this.shape_140.setTransform(41.8,62.9,1,1,0,0,0,0,-0.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgTIgBgwIAXAUg");
	this.shape_141.setTransform(36.1,58.1,1,1,0,0,0,0,-0.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYATg");
	this.shape_142.setTransform(30.4,53.4,1,1,0,0,0,0,-0.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_143.setTransform(60.7,74.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AAAhGIAACN");
	this.shape_144.setTransform(107,91.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AAAmKIAAMW");
	this.shape_145.setTransform(109.8,61.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AkWj0IIrGWIAABX");
	this.shape_146.setTransform(137.6,118.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AgWAJIAtgR");
	this.shape_147.setTransform(163,136.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AgIABIANgDIAAAM");
	this.shape_148.setTransform(106.1,18.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgGgBIANgFIAAANg");
	this.shape_149.setTransform(105.9,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,171.7,238.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AANAAQAAgBgBgBQgCgBgDAAIgKgBIgFABQgEABAAAEQAAACABAF");
	this.shape.setTransform(135.9,175.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AgHgFQAGABADAEQADAFgBAG");
	this.shape_1.setTransform(132.5,182.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AgLgJQABgFAHACQAIADAFAJQAEAIgDAJ");
	this.shape_2.setTransform(136.9,178.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgIgDQAFAAADADQAEADABAF");
	this.shape_3.setTransform(134.8,179.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAOgFQgJgDgHAGQgHAFAAAJ");
	this.shape_4.setTransform(129.7,177.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgJAGQgDgCACgDQABgBADgCQAGgDADAAQAGAAACAF");
	this.shape_5.setTransform(135.6,171.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAMAEQgIgFgDAAQgIgBgCAF");
	this.shape_6.setTransform(127.9,171.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AAQAEQABgGgJgCQgGgCgHAEQgLAEABAI");
	this.shape_7.setTransform(125.9,168.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgPAMQAAgGAFgEQADgDAHgDQADgCADAAQAGAAAGAG");
	this.shape_8.setTransform(123.3,165);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AATgKQgEgEgHADQgJADgIAIQgGAHgDAK");
	this.shape_9.setTransform(122.3,160.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgOAMQAFgKAIgHIAEgDQAGgBAHAI");
	this.shape_10.setTransform(118.5,165.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgKALQAAgKAHgDQADgDADABQAFAAACAD");
	this.shape_11.setTransform(118.2,169.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AANgNQgBgDgEAAIgFADQgIAFgEAHQgGAJAEAI");
	this.shape_12.setTransform(121.2,175.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AgLAIQgBgBAAgBQAAgCADgCIAHgEQAEgEAEgBQAGgBABAF");
	this.shape_13.setTransform(122.9,177.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AARAIIgHgIQgCgEgDAAQgCgBgDABQgKADgGAG");
	this.shape_14.setTransform(119.7,179.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AANgBQgDgEgFgBQgEAAgDACQgHAEgDAL");
	this.shape_15.setTransform(125,180.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAHgIQABgCgDAAQgBABgBAAQgDAEgEAFQgEAIAEAE");
	this.shape_16.setTransform(125.9,185.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AgPAJQgCgDADgEQACgCAEgCQAHgDAIgDQAIgCACAE");
	this.shape_17.setTransform(122.4,183.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AgNAHQgBAAAAgCIACgDQAHgEAFgCQAEgCACAAQAEgBAHAG");
	this.shape_18.setTransform(118,182.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAKAFQAAgDgDgCQgDgBgEAAQgEAAgHAF");
	this.shape_19.setTransform(118,186.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AgQAOQgEgDAFgGQAHgIAIgGQAMgHAHAG");
	this.shape_20.setTransform(110.7,183.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgQAKQAEgKAKgEQAEgDAGACQAFABAFAG");
	this.shape_21.setTransform(107,187.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAOgKQgEgDgHADQgDABgFAFQgKAJACAL");
	this.shape_22.setTransform(111.6,190);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgPAEQAHgIAKABQAGAAAEADQAEAEAAAF");
	this.shape_23.setTransform(108.4,193);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AgEA2QgCgnADggQACgXAJgJ");
	this.shape_24.setTransform(122.3,191.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AgBAuQAGgjgEgjQgBgNgCgE");
	this.shape_25.setTransform(119.2,194);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAJAAQgBAAgCAAQgCACgEgBIgEgBQgDAAgBAA");
	this.shape_26.setTransform(117.3,189.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAAgZQgCAaAEAd");
	this.shape_27.setTransform(110.8,199.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AABglQAFAlgIAi");
	this.shape_28.setTransform(108.7,201);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AA6CfQAJgHAEgLQAEgKgCgLQAGgBAEgFQAEgGgBgGQAGgIgCgLQgDgLgJgFQAQgHgFgHQgJgIgPgDQAGgCACgLQADgLgDgHQgDgDAAgCIAAgIQAAgIgFgHQgFgHgIgBQACgDAAgDIgOADQAGgJgGgMQgEgIgKgHQAHgBADgHQAEgHgDgHQgCgIgQgOQgDgDgBgCQgBgBAAgEQAAgLgJgWQgDgGgCgBQgGAAgBAKIgEAjQgKACgBAJQgMgCgHAFQgFADgCAEQgCAFABAFQgJAEgDADQgFAIAEAFQgNAGADAIIACADQADAGgIAGQgEADgCABQgDADgCADQgFAJAKAPQAEAGABADIgBAHQgCALgEAIIgBADQAAACAFACQAFACABAHQABAGgEAEQgEACgBACIgBAFQAAABgFAKQgHARALAP");
	this.shape_29.setTransform(123.8,167.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAeBUQABABACgBQAEgFgBgIQgCgHgGgDQAGgGgBgIIgBgFIACgEQAEgIABgFQABgFgBgIQgDgJgNAJQgEgCgEADQACgEACgHIAAgCIgDgCQAAgBAAgDQADgLgDgMIgBgCIgFgDQgDgCgDgDQgMgJgGgJQgCgEACgKQABgJgEgDQgEgDgKAMQgIALABgC");
	this.shape_30.setTransform(138.2,172.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AANglQgBAFgCACQAAAAgGADQgGAEgBAFQgBAFAAABQgBABgCADQgIAIAFAJQACAEAAACIgCAFQgBABAEAFIAEAFIAAAI");
	this.shape_31.setTransform(133,169.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("ABFBhQAKgIgDgOQgCgNgNgEQAIgKgFgOQgFgPgNgDQAMgKABgIQABgKgIgGQgJgHgKABQgDABgCgCQgBAAgBgDIgHgOQgBgBgFgFQgCgDACgDQADgIgCAAQgFAAAAgCQgDgNgDgHQgDgMgGAAQgIAAAAANQAAASgCADQgDAHgGAIQgEAHAGAGQgIACgDAJIgCAGIgHAHQgGAGgDAIQgCAJACAIQgGgBgJAPQgKASABAX");
	this.shape_32.setTransform(121.9,176.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AghASIACACQAIACAHgDQAIgEgBgJQAFABAEgDQAFgDADgEQADgHABgKQAAgCAAgCAAMgUQAAAFADAFQAEAGAGADQAHABAAAE");
	this.shape_33.setTransform(121.5,187.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("ABEAeQACAMgEAIQgCAEgFADQgFADgEgBQAEALgJALQgIALgMgCQACAHgEAHQgDAGgHACQgDABgMABQgKAAgEAFQgJgKABgNQgNABgKgJQgLgKABgNQgIgFgCgLQgCgKAEgJQADgFAAgDQABgCgCgIQgBgNASgLQgKgEgCgMQgDgLAGgIQAEACABAFQACAFgDAEQAMAEADANQADgMAJgKQgDgVAQgNQgEgCgBgFQAAgFACgEQACgDAEgFQADgFgBgEIgBgHQAAgIAHgCQAGgCAFAGQACAGABABQABACAEABQAEACABACQADADABAKQABADAGAIQAFAGAAAFQAAACgDAGQAAAEADAEQABACADAFQADAGgCAHQgBAGgGAEQAHgEADALQACAGABAIQACADAIAGQAFAHACAOg");
	this.shape_34.setTransform(109.5,185.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AhEgIQAIgdASgSQASgSAXAAQAcAAAVAcQAVAcAAAnQAAAcgMAY");
	this.shape_35.setTransform(30.1,143.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAKgJQgBgBgBAAQgIAAgGAHQgGAHAGAH");
	this.shape_36.setTransform(30.4,121.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AgQAIQgCgBADgDQAJgHAGgDQAMgDAGAH");
	this.shape_37.setTransform(28.1,124.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("ADPCCIi4kBIjoAj");
	this.shape_38.setTransform(31.9,143.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AgPAAIAfAA");
	this.shape_39.setTransform(108.5,1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AACAbQAJgMgFgPQgDgJgKgT");
	this.shape_40.setTransform(111,12.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AAFAmQgIgQAAgNIAAgw");
	this.shape_41.setTransform(108.8,4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgBAbQgJgMAFgPQADgIAKgV");
	this.shape_42.setTransform(105.9,12.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AgEAQQAIgRAAgL");
	this.shape_43.setTransform(108.1,6.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_44.setTransform(110.4,20.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_45.setTransform(106.3,20.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_46.setTransform(104.9,20.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABG");
	this.shape_47.setTransform(109.1,20.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_48.setTransform(107.7,20.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AgGABIANgB");
	this.shape_49.setTransform(107,21.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgGAAIANAA");
	this.shape_50.setTransform(109.8,21.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAigNQAKAEAAAGQABAGgNAFQgNAGgTAAQgRABgNgFQgNgEgBgGQAAgGAJgE");
	this.shape_51.setTransform(108.5,22.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AgsgOIAAANQABAGANAEQANAFARgBQATgBANgFQANgFgBgGIAAgN");
	this.shape_52.setTransform(108.5,24.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AgmgLIAAAKQAAAEAMADQALAEAPgBQARAAALgEQALgFAAgEIAAgK");
	this.shape_53.setTransform(108.5,26);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AASAAQAAACgFACQgGACgHAAQgRABAAgHQAAgFARgBQAHAAAGACQAFACAAACg");
	this.shape_54.setTransform(108.5,7.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AgRgHIAAAGQAAAFARAAQASgBAAgGIAAgF");
	this.shape_55.setTransform(108.5,8.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AAGgHQAPACAAAFQAAADgGACQgGADgJAAQgIABgGgDQgGgCAAgDQgBgEAPgE");
	this.shape_56.setTransform(108.5,8.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AgUgIIAAAHQAAACAGACQAGACAIAAQAJgBAGgCQAGgCAAgDIAAgG");
	this.shape_57.setTransform(108.5,9.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAggLQAHAEAAAEQAAAFgLAEQgLAFgRABQgPAAgLgEQgMgDAAgGQAAgEAGgE");
	this.shape_58.setTransform(108.5,15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AgmgNIAAAMQAAAFAMAEQALAEAPgBQAQgBAMgEQALgFAAgFIAAgL");
	this.shape_59.setTransform(108.5,16.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AAsAPIhXgd");
	this.shape_60.setTransform(99.5,86.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AAUAHIgmgN");
	this.shape_61.setTransform(91.3,83.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_62.setTransform(85.5,81.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AAbAJIg1gR");
	this.shape_63.setTransform(79,79.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AAsAPIhXgd");
	this.shape_64.setTransform(99.9,85.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_65.setTransform(91.9,82.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AATAHIgmgN");
	this.shape_66.setTransform(86.2,80.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AAbAJIg1gS");
	this.shape_67.setTransform(79.6,78.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AArAPIhVgd");
	this.shape_68.setTransform(100.5,84.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_69.setTransform(92.5,81.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_70.setTransform(86.7,79.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AAbAKIg1gS");
	this.shape_71.setTransform(80.3,77.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AApAPIhRgc");
	this.shape_72.setTransform(100.8,83.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AATAGIglgM");
	this.shape_73.setTransform(93,80.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_74.setTransform(87.3,78.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_75.setTransform(80.8,76.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_76.setTransform(101.2,82.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_77.setTransform(93.5,80);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AAUAHIgmgN");
	this.shape_78.setTransform(87.8,77.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_79.setTransform(81.4,75.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_80.setTransform(101.7,81.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_81.setTransform(94,79.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_82.setTransform(88.3,77.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_83.setTransform(82,74.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_84.setTransform(102.3,81);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_85.setTransform(94.6,78.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_86.setTransform(88.9,76.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_87.setTransform(82.7,74.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AAnAOIhNgb");
	this.shape_88.setTransform(102.8,80);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_89.setTransform(95.1,77.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_90.setTransform(89.4,75.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AAZAJIgxgR");
	this.shape_91.setTransform(83.2,73.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AAmANIhLgZ");
	this.shape_92.setTransform(103.3,79.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AATAHIglgM");
	this.shape_93.setTransform(95.8,76.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_94.setTransform(90.1,74.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AAZAIIgxgQ");
	this.shape_95.setTransform(83.7,72.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgiALIBGgV");
	this.shape_96.setTransform(121.3,86.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngL");
	this.shape_97.setTransform(128.6,84.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgUAHIApgN");
	this.shape_98.setTransform(134.4,82.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AgYAIIAxgP");
	this.shape_99.setTransform(140.8,80.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AghALIBDgV");
	this.shape_100.setTransform(120.8,85.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_101.setTransform(128,83.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_102.setTransform(133.8,81.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AgXAIIAwgP");
	this.shape_103.setTransform(140.1,79.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AggALIBBgV");
	this.shape_104.setTransform(120.4,84.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_105.setTransform(127.4,82.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngM");
	this.shape_106.setTransform(133.2,80.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgWAIIAtgP");
	this.shape_107.setTransform(139.3,78.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgfALIA/gV");
	this.shape_108.setTransform(120,83.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngM");
	this.shape_109.setTransform(126.9,81.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_110.setTransform(132.6,79.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgXAIIAvgP");
	this.shape_111.setTransform(138.7,77.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgdAKIA7gT");
	this.shape_112.setTransform(119.4,83.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgTAGIAmgL");
	this.shape_113.setTransform(126.4,80.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_114.setTransform(132.1,78.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgUAHIApgN");
	this.shape_115.setTransform(138.1,76.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgcAJIA5gR");
	this.shape_116.setTransform(119,82.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_117.setTransform(125.8,80);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_118.setTransform(131.6,78.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_119.setTransform(137.5,76.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgbAJIA3gR");
	this.shape_120.setTransform(118.6,81.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AgSAGIAlgL");
	this.shape_121.setTransform(125.3,79.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_122.setTransform(131,77.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_123.setTransform(136.8,75.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgaAJIA0gR");
	this.shape_124.setTransform(118.2,80.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_125.setTransform(124.7,78.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_126.setTransform(130.5,76.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AgSAGIAlgL");
	this.shape_127.setTransform(136.2,74.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AgZAJIAzgR");
	this.shape_128.setTransform(117.8,79.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_129.setTransform(124.1,77.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_130.setTransform(130,75.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AgRAGIAjgL");
	this.shape_131.setTransform(135.5,73.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AAUgGIgnAN");
	this.shape_132.setTransform(129.3,74.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("AAVgGIgpAN");
	this.shape_133.setTransform(123.6,76.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("AAagHIgzAQ");
	this.shape_134.setTransform(117.3,78.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngL");
	this.shape_135.setTransform(128.9,84.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AgTAGIAogM");
	this.shape_136.setTransform(134.8,82.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("Ah7jyIC+CoIAbAmQAbAxAAA+QAABjACA2IgpAO");
	this.shape_137.setTransform(124.9,49);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AhCDcIgCmFICMgu");
	this.shape_138.setTransform(117.8,107.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AgqBCIAxgQIAqgEIhnhx");
	this.shape_139.setTransform(142.8,75);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAIAAgPIhNh3g");
	this.shape_140.setTransform(123.5,80);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAJAAgQIhNh3g");
	this.shape_141.setTransform(129.2,78.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAIAAgPIhNh3IACAgg");
	this.shape_142.setTransform(135,76.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIABgQIBMh2g");
	this.shape_143.setTransform(96.2,79.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIAAgPIBNh3g");
	this.shape_144.setTransform(90.4,77.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIAAgQIBNh2g");
	this.shape_145.setTransform(84.7,75.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("ABVAWIiogr");
	this.shape_146.setTransform(101.6,40.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("ABCgOIiDAd");
	this.shape_147.setTransform(119.3,41.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("ABsAfIjXg9");
	this.shape_148.setTransform(99.7,44.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("ABWgWIiqAu");
	this.shape_149.setTransform(121.6,45.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("ACBAnIkBhO");
	this.shape_150.setTransform(95.8,72.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("Ah/jsIAOA6QANA+ACAbQABAXAKBOQAHBdgIB+IDbhE");
	this.shape_151.setTransform(122.1,50.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("ABpjqIALA3QAMA9AAAbQABAXAHBOQAFBegNB+IkMhN");
	this.shape_152.setTransform(97.1,50.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AB0jRIiuCcQgOALgNAXQgbAtAAA+QAABjgBAW");
	this.shape_153.setTransform(94.3,47.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AB5jrIi4CjQgNANgNAZQgbAxAAA+QAABjgCAmIA+AV");
	this.shape_154.setTransform(92.4,48.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AgUgGIAqAN");
	this.shape_155.setTransform(90.5,73.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AgUgGIApAN");
	this.shape_156.setTransform(96.2,75.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AgmgMIBNAZ");
	this.shape_157.setTransform(103.7,78);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("Ah1j5ICyCeIAbAiQAbAuAAA9QAABjABAkIjVBA");
	this.shape_158.setTransform(123.2,51.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAiAQIABg3QAAgTgFgNQgEgNgJAAQgHAAgFANQgFAMAAAUg");
	this.shape_159.setTransform(80.6,93);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAjAQIAAg3QAAgTgFgMQgEgNgJAAQgHAAgFANQgFAMAAATg");
	this.shape_160.setTransform(89.3,96.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(0.3).p("AgQgGIgBAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgHAAgFANQgEAMAAATg");
	this.shape_161.setTransform(98,99.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("ABIBcIhDitIhMCu");
	this.shape_162.setTransform(110.8,78.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(0.3).p("AgZgGIAzAN");
	this.shape_163.setTransform(108.3,89.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("AguA2IBdhr");
	this.shape_164.setTransform(75.8,73.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(0.3).p("AAYCkIAAlIIgvAAIAAFO");
	this.shape_165.setTransform(73.5,95.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("AA2DGIAAlfIhugn");
	this.shape_166.setTransform(100.3,104.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_167.setTransform(90.9,84);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_168.setTransform(85.3,82);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(0.3).p("AAcAwIg2gTIA5hO");
	this.shape_169.setTransform(78.6,75.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAFAMAAATg");
	this.shape_170.setTransform(137.5,94.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAJAAAFANQAEAMAAATg");
	this.shape_171.setTransform(129.6,97);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_172.setTransform(121.7,99.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#292929").ss(0.3).p("AA3iFIgEFFIgkANIAAlPIhGhO");
	this.shape_173.setTransform(142.2,93);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(0.3).p("AiBAHIDODDIAzgYIAAmB");
	this.shape_174.setTransform(103.5,109.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#292929").ss(0.3).p("AgbA2IA3AZIAAhmQAAgJgDgLQgUg7gVAgQgJAOAAATg");
	this.shape_175.setTransform(57.4,184);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(0.3).p("AAAhTIAACn");
	this.shape_176.setTransform(134,157.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgNQAEgNAIAAQAIAAAFANQAFAMAAAUg");
	this.shape_177.setTransform(99.7,197.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_178.setTransform(92.3,200.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#292929").ss(0.3).p("AgfBZIA/gcIAAhIQAAgjgIgWQgJgXgPAAQgOAAgJAXQgIAWAAAjg");
	this.shape_179.setTransform(103.9,164.7,1,1,0,0,0,0,-0.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(0.3).p("AgeBXIA+gbIAAhDQAAgjgIgWQgJgYgPAAQgOAAgJAYQgIAWAAAjg");
	this.shape_180.setTransform(94,169,1,1,0,0,0,0,-0.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#292929").ss(0.3).p("AgfgGQAAgiAIgUQAJgXAOAAQAQAAAIAXQAIAUAAAiIAAA/Ig/Ab");
	this.shape_181.setTransform(84.1,173.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAFAMAAATg");
	this.shape_182.setTransform(85,204.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgIAAgEANQgFAMAAATg");
	this.shape_183.setTransform(59.7,149.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_184.setTransform(70.6,150.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgUAFgMQAFgNAHAAQAJAAAEANQAFANAAATg");
	this.shape_185.setTransform(77.7,207.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(0.3).p("ACag7IkzB2");
	this.shape_186.setTransform(95.3,153.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#292929").ss(0.3).p("AikBAIFJh/");
	this.shape_187.setTransform(94.3,150.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(0.3).p("AAAjmIAAHN");
	this.shape_188.setTransform(152.5,152.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#292929").ss(0.3).p("ABvAKQgFA2gkAiQgkAigtgEQgugEgdgpQgdgoAFg0QAFg1AkgjQAkgiAsAEQAvAEAdApQAdAogFA0g");
	this.shape_189.setTransform(133.1,136.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(0.3).p("ABJAHQgEAjgXAXQgYAXgdgCQgegDgTgbQgTgbADgjQAEgjAXgYQAYgXAdADQAeADATAbQATAbgDAjg");
	this.shape_190.setTransform(133.6,136.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#292929").ss(0.3).p("Ag0BbIBmgkIAAiW");
	this.shape_191.setTransform(149.1,123.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(0.3).p("ADQjhIhyAtQACEdgDAAIkrB6");
	this.shape_192.setTransform(101.4,162.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#292929").ss(0.3).p("AhPBtICGjXIAXAAIACC3");
	this.shape_193.setTransform(124.5,116.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(0.3).p("ADZiLIBDAaIhvAsIhqh8IiNDpIhIAiIiRiEIABARQADAWALAaQAiBVBfBiIABh0");
	this.shape_194.setTransform(125.6,125.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#292929").ss(0.3).p("AiaggIIujBIjPAXIpTDQID0gmIC7EI");
	this.shape_195.setTransform(50.1,132.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(0.3).p("ABlArIhhhTIhpBC");
	this.shape_196.setTransform(65.5,132.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#292929").ss(0.3).p("Ag0AhIAAgdIBcA0IANh2");
	this.shape_197.setTransform(60.6,134.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(0.3).p("AA3gCIAAgcIhtAiIAAAh");
	this.shape_198.setTransform(70.1,139.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#292929").ss(0.3).p("ABoAPIAXgHIAAgJIgVgMIh2ApIhcg3IgWAEIAAAJIASAK");
	this.shape_199.setTransform(65.9,140.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(0.3).p("AADhNIAACCIgEAHIADAQ");
	this.shape_200.setTransform(64.3,153.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#292929").ss(0.3).p("AhqBCIAAiCIBhA6IB0gmIAAB2");
	this.shape_201.setTransform(65.6,146.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(0.3).p("ABvABIAGgMIAAgJIgMAAIh0AwIhgg4IgJAAIAAALIAKAO");
	this.shape_202.setTransform(65.8,155.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#292929").ss(0.3).p("ACFgBIgXgVIiAAyIhZg3IgaAK");
	this.shape_203.setTransform(65.8,158.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(0.3).p("Ag5gYIAAgMIBwBKIADgd");
	this.shape_204.setTransform(58.2,160.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#292929").ss(0.3).p("AA+ApIhxhQIgMAA");
	this.shape_205.setTransform(57.5,161.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(0.3).p("ABYgXIgRAAIAAgBIAAgOIiZA6IAAASICZg+");
	this.shape_206.setTransform(72,162);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#292929").ss(0.3).p("AARhwIAADYIgjgZ");
	this.shape_207.setTransform(70.4,210.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(0.3).p("AAOAkIgZgSIAAg5");
	this.shape_208.setTransform(64.8,213.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#292929").ss(0.3).p("AAAA/IAAh9");
	this.shape_209.setTransform(63.7,201);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(0.3).p("AjDAWIBUAsIE0iE");
	this.shape_210.setTransform(83.3,192.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#292929").ss(0.3).p("AgWiiIAAEaICqhHIAAkXIiqBEIgBABIh8hXIAAHiIAeAV");
	this.shape_211.setTransform(66,182.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(0.3).p("AgLgDIAXAH");
	this.shape_212.setTransform(24.3,127.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#292929").ss(0.3).p("AgKAEIAVgH");
	this.shape_213.setTransform(1.1,126.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(0.3).p("AgKBgIhggzIAAiIIBhA7IBzgmIAAB/g");
	this.shape_214.setTransform(12.6,121.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#292929").ss(0.3).p("AgQgGIgBAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgHAAgFANQgEAMAAATg");
	this.shape_215.setTransform(6.9,122.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(0.3).p("AARgGIABAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAEAMAAATg");
	this.shape_216.setTransform(17.7,123.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#292929").ss(0.3).p("ABlArIhhhTIhpBC");
	this.shape_217.setTransform(12.4,104.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(0.3).p("Ag0AhIAAgdIBcA0IANh2");
	this.shape_218.setTransform(7.5,106.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#292929").ss(0.3).p("AA3gDIAAgbIhtAiIAAAh");
	this.shape_219.setTransform(17,112.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(0.3).p("ABoAQIAYgIIAAgJIgXgMIh1ApIhdg3IgWAEIAAAJIATAK");
	this.shape_220.setTransform(12.8,113);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#292929").ss(0.3).p("AADhLIAACCIgEAHIACAN");
	this.shape_221.setTransform(11.2,125.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(0.3).p("Ai3BiIFvjD");
	this.shape_222.setTransform(90.5,211.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#292929").ss(0.3).p("AgrAXIBXgt");
	this.shape_223.setTransform(115.1,198.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(0.3).p("AgLAGIAXgL");
	this.shape_224.setTransform(123,194);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#292929").ss(0.3).p("AgJgCIATAF");
	this.shape_225.setTransform(155.1,123.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(0.3).p("AgKjsIASgJIAAHy");
	this.shape_226.setTransform(155.3,148.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#292929").ss(0.3).p("AAUgGIgnAN");
	this.shape_227.setTransform(141.7,114.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(0.3).p("AgQgLIAhAX");
	this.shape_228.setTransform(61.9,213.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_229.setTransform(111.8,20.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(0.3).p("Ag1BAQgCgEADgFQADgFAFgBQgCgEAHgHQAHgFABgEQABgBAAgIQAAgUARgMQADgCAAgCIAAgFQAAgCAFgGQAFgHADgPQAHgPAKADQAHACABAHQABAHgHADQAIADAEAJQADAIgDAIQAJAEABALQABAGgFAMQAEACABAEQACAEgBAEIAIAAIABAG");
	this.shape_230.setTransform(29.4,120.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,158.1,223), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AARgHQgCAFgGACQgLAIgSgE");
	this.shape.setTransform(72,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AANgNQAAAFgEAGQgIAMgRAE");
	this.shape_1.setTransform(71.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAEgUIACAMQgBANgMAL");
	this.shape_2.setTransform(70.5,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgDgSIAFAKQAEANgIAO");
	this.shape_3.setTransform(68.9,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_4.setTransform(66.9,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_5.setTransform(65.1,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_6.setTransform(63.3,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_7.setTransform(61.5,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_8.setTransform(59.6,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_9.setTransform(57.8,27.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_10.setTransform(56,28.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_11.setTransform(54.2,29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_12.setTransform(52.4,30);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_13.setTransform(50.6,30.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_14.setTransform(48.6,31.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAwhAIAAAxIhhBM");
	this.shape_15.setTransform(124.1,123.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_16.setTransform(117.1,126.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("ABkhOIAKAUIh2BUIhbgqIBBBTQAJAHALACQALACAGgEQAEgCACgFQACgFgCgEIgEgEIgHgHIgDgCIgGgBQgEgBgFADIgFAEIgCADQgBAEAGAGQAGADACABQAGABADgDIABgBQACgDgBgDQgBgFgEAA");
	this.shape_17.setTransform(117.9,123.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AAWglIAAA6QgCAFgHAEQgNAGgYgJ");
	this.shape_18.setTransform(116.8,133.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AgcAfIA3gtIAAgPIgKAA");
	this.shape_19.setTransform(111.5,138);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AgYAcIAvgmIAAgQIgLAA");
	this.shape_20.setTransform(110.9,136);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgVAaIAqgiIAAgPIgLAA");
	this.shape_21.setTransform(110.1,134.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AgWAbIAsgkIAAgPIgLAA");
	this.shape_22.setTransform(108.9,132.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgYAcIAvgmIAAgQIgLAA");
	this.shape_23.setTransform(107.8,131.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAXgcIAAAPIguAm");
	this.shape_24.setTransform(106.7,129.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AgfAYIA3gsIgLgC");
	this.shape_25.setTransform(106.7,129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAAAJIAAgR");
	this.shape_26.setTransform(115.1,129.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAQANIgfgZ");
	this.shape_27.setTransform(101.1,140.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AgzhdIBcBoQAHAIABALIACAmQgEAVgVADQgVACgMgTIAAgn");
	this.shape_28.setTransform(103.6,135.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AArAsQgBgGgDgFIgDgFIhPhhAArAsQgBgBAAgBQgCgIgLgFIgHgCQgKAAgGAHQgGAHACAIQABAIAIAGQAGAFAIAAQAJAAAGgJQABgEABgEAAYAnQgHABgBAFQgBAFAGAEQAIAGAHgCQAEgCACgFQABgEAAgD");
	this.shape_29.setTransform(102.7,134.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAAA1IAAhp");
	this.shape_30.setTransform(105.6,123.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABm");
	this.shape_31.setTransform(106.2,122.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAZhJIAABoIgzAo");
	this.shape_32.setTransform(105.5,123.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AgsAQIA9gpIAWALIg8Aq");
	this.shape_33.setTransform(104.1,117.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AgKAdIAAhMIAWALIAABc");
	this.shape_34.setTransform(100.8,124.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AiPAkIBHglIBlAZIBzg7");
	this.shape_35.setTransform(111.9,49.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAQASIAAgsIgfATIABAq");
	this.shape_36.setTransform(154.3,62.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AgPgKIABAeIAdgSIAAge");
	this.shape_37.setTransform(154.5,69.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AASAUIAAgzIgjAUIAAAz");
	this.shape_38.setTransform(144.6,67.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AgRgLIABAiIAigVIAAgh");
	this.shape_39.setTransform(144.8,75.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AiIEMQAIgGAGg1QACgRAAgVIgBkLQAAgNADgQQAIggAXgKQAXgKA4geQA+giBIgoIAJANIjLB6QgcAVAAAiIAAEDIADAsQAGAuAQAHQgSAQgNACQgSADgQgSg");
	this.shape_40.setTransform(147.3,90.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AAEA8IgGAIIAAh/IAGgIg");
	this.shape_41.setTransform(131.5,107.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgLAnIAAg1IAXgYIAAA3g");
	this.shape_42.setTransform(131.4,97.6,1,1,0,0,0,0,-0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AAQAIIgfgP");
	this.shape_43.setTransform(133.5,109.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AARAJIghgR");
	this.shape_44.setTransform(129.4,107.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AAAgZIAAAz");
	this.shape_45.setTransform(23.9,27.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgM");
	this.shape_46.setTransform(103.2,30.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_47.setTransform(97.9,31.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgM");
	this.shape_48.setTransform(100.8,31.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngaIALge");
	this.shape_49.setTransform(100.7,35.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AAsgFQACAOgMAMQgLAMgTACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAOAIQAPAJABAOg");
	this.shape_50.setTransform(100.4,29.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAFQgKAGgOACQgOACgKgDQgLgCgBgGQAAgFAJgGQAJgFAPgDQANgCALADQALADAAAGg");
	this.shape_51.setTransform(100.2,28.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_52.setTransform(75.7,47.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_53.setTransform(70.4,48.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_54.setTransform(73.3,48.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AgfgkIASBKIAsgFIgVhK");
	this.shape_55.setTransform(41.6,45.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("ABtgXIAQABQAQAEAAAIQAAASgpAOQgqANg6AAQg6AAgpgNQgpgOAAgSIAIgLQANgLAbgC");
	this.shape_56.setTransform(36.7,37.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("ABOgNQgUAMgeAHQg6AQgvgT");
	this.shape_57.setTransform(39.9,29.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AAAg0IAABp");
	this.shape_58.setTransform(32.2,33);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("ABkhBIAABeQhrA7hdgwIAAhl");
	this.shape_59.setTransform(37.6,32.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("ACQBnIiUjxIiJDzQCgBOB9hQg");
	this.shape_60.setTransform(37,13.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_61.setTransform(26.1,27.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AgTgGIAnAN");
	this.shape_62.setTransform(54.7,87.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AgQgEIAhAK");
	this.shape_63.setTransform(56.5,100.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgPgFIAeAL");
	this.shape_64.setTransform(56.9,76.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("ACOgaQAAAYgqANQglAMg/AAQg7AAgpgOQgsgNAEgW");
	this.shape_65.setTransform(36.6,39.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_66.setTransform(46.6,42.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AALgbIAAAuIgOADIgHgHIAAgj");
	this.shape_67.setTransform(46.8,42.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_68.setTransform(27.7,42.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AgKgZIAAAqIAOAEIAHgHIAAgi");
	this.shape_69.setTransform(27.5,42.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AA5AUIg9gSIgzgV");
	this.shape_70.setTransform(60.3,110.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_71.setTransform(100,104);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AgWgbIAogQIACBJIgoAR");
	this.shape_72.setTransform(100.7,103.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AAOgFIgbAK");
	this.shape_73.setTransform(99.6,93.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAQ");
	this.shape_74.setTransform(100.4,93.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_75.setTransform(99.6,82.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAR");
	this.shape_76.setTransform(100.4,82.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AAOgFIgbAK");
	this.shape_77.setTransform(99.6,72);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAQ");
	this.shape_78.setTransform(100.4,71.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_79.setTransform(99.6,61.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgVgbIAngPIACBJIgqAP");
	this.shape_80.setTransform(100.4,61.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AAAgdIAAA7");
	this.shape_81.setTransform(52.8,95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhN");
	this.shape_82.setTransform(54.9,96.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_83.setTransform(53.8,98);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_84.setTransform(53.8,97.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_85.setTransform(53.8,96.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_86.setTransform(53.8,95.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_87.setTransform(53.8,94.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_88.setTransform(53.8,93.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_89.setTransform(53.8,92.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgDgnIAABHIAKAD");
	this.shape_90.setTransform(57.1,85.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AAAAkIAAhH");
	this.shape_91.setTransform(58.9,85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgIgCIARAF");
	this.shape_92.setTransform(57.7,88.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_93.setTransform(57.8,87.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_94.setTransform(57.8,87);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_95.setTransform(57.8,86.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_96.setTransform(57.8,85.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_97.setTransform(57.8,84.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_98.setTransform(57.8,83.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_99.setTransform(57.8,82.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_100.setTransform(57.8,82);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AAHhSQAAgXgHgIQgDgDgGgBQgHAAgGAFQgFAGAAAIIAADOIAVAHIAAjVQAAgIAFgGQABAAAAgBQAEgEAHAAQATABgCAq");
	this.shape_101.setTransform(55.9,64.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_102.setTransform(54.2,74.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_103.setTransform(54.2,74.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_104.setTransform(54.2,73.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_105.setTransform(54.2,72.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_106.setTransform(54.2,71.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_107.setTransform(54.2,70.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_108.setTransform(54.2,70);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_109.setTransform(54.2,69.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_110.setTransform(54.2,68.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_111.setTransform(54.2,67.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_112.setTransform(54.2,67);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_113.setTransform(54.2,66.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_114.setTransform(54.2,64.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_115.setTransform(54.2,64.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_116.setTransform(54.2,63.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_117.setTransform(54.2,62.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_118.setTransform(54.2,61.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_119.setTransform(54.2,61.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_120.setTransform(54.2,60.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_121.setTransform(54.2,59.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_122.setTransform(54.2,58.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_123.setTransform(54.2,57.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_124.setTransform(54.2,56.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_125.setTransform(54.2,55.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AiDASIClhDQAxgXAhAZQANAJAAAQIAAAYQAAAFgIAEQgIAEgLAAQgHABgCgEQgCgCAAgHIAAgNQAAgFgGgEQgFgFgGABQgVAFgjARIiVA/");
	this.shape_126.setTransform(60.9,27.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AAUgaQAOACAKAIQALAHAAAIQAAALgQAIQgQAJgXAAQgWAAgQgJQgQgIAAgLQAAgHAJgGQAIgHARgC");
	this.shape_127.setTransform(71.8,28.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngZIALgf");
	this.shape_128.setTransform(73.2,52.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AAsgFQACAOgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAOAIQAPAJABAOg");
	this.shape_129.setTransform(72.9,46.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAGQgKAGgOACQgOACgKgDQgLgDgBgGQAAgFAJgFQAJgGAPgCQANgCALADQALACAAAGg");
	this.shape_130.setTransform(72.7,45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AGCCFIgWhdIpWinIiaA7");
	this.shape_131.setTransform(87.5,26.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AArgRIhVAj");
	this.shape_132.setTransform(18.6,39.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("ApEALIJ0DXIAkgXIB4ANIBbgqIgEhaIBag4IBkAaIBgg5IgPhAIo9ieIiUA+");
	this.shape_133.setTransform(65.9,38.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("ACWgfIjFBVIhOABIEThu");
	this.shape_134.setTransform(12.6,34);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AjehUIG9Cq");
	this.shape_135.setTransform(24.5,67);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AjehYIG9Cx");
	this.shape_136.setTransform(24.4,77.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_137.setTransform(67.3,110.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_138.setTransform(67.3,110.6,1,1,0,0,0,0,0.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_139.setTransform(67.3,99.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_140.setTransform(67.3,99.7,1,1,0,0,0,0,0.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_141.setTransform(67.3,88.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_142.setTransform(67.3,88.8,1,1,0,0,0,0,0.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_143.setTransform(67.3,78);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_144.setTransform(67.3,77.9,1,1,0,0,0,0,0.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AgMmKIAZMV");
	this.shape_145.setTransform(115.7,85.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AiSj3IgFhfIBKgtIBeAbIB1hBIASMJIhtBNIhZgr");
	this.shape_146.setTransform(112.7,82);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AAIFoIgPrQ");
	this.shape_147.setTransform(105.5,79.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_148.setTransform(111.5,116.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_149.setTransform(111.1,116.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_150.setTransform(111.2,106.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChG");
	this.shape_151.setTransform(110.9,106);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_152.setTransform(110.5,93.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKg");
	this.shape_153.setTransform(110.6,93.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_154.setTransform(111.1,83);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_155.setTransform(110.7,82.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_156.setTransform(110.1,69.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_157.setTransform(109.7,69.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_158.setTransform(109.7,57.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_159.setTransform(109.3,57.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_160.setTransform(121.7,115.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_161.setTransform(122.1,115.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_162.setTransform(121.4,105.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_163.setTransform(121.5,105);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_164.setTransform(121.4,92.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_165.setTransform(121.1,92.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_166.setTransform(119.7,81.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_167.setTransform(120.1,81.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_168.setTransform(120.1,68.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_169.setTransform(120.5,68.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_170.setTransform(119.7,56);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_171.setTransform(120.1,55.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_172.setTransform(94,134.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_173.setTransform(94.4,134.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_174.setTransform(93.7,124.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_175.setTransform(93.8,123.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_176.setTransform(93.7,111.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_177.setTransform(93.3,111.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_178.setTransform(92,100.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_179.setTransform(92.4,100.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_180.setTransform(92.4,87.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_181.setTransform(92.8,86.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_182.setTransform(92,74.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_183.setTransform(92.4,74.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_184.setTransform(81.1,115.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAGIAABSIgpgIg");
	this.shape_185.setTransform(81,114.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_186.setTransform(81.1,102.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAFIAABTIgpgJg");
	this.shape_187.setTransform(81,102.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_188.setTransform(81.1,89.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#292929").ss(0.3).p("AgWgrIAtAFIAABTIgtgFg");
	this.shape_189.setTransform(81,89.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_190.setTransform(81.1,77);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAFIAABTIgpgJg");
	this.shape_191.setTransform(81,76.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(0.3).p("AAVgEIgpAJ");
	this.shape_192.setTransform(50.5,95.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_193.setTransform(54.9,102.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_194.setTransform(55.7,102.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_195.setTransform(56.5,103.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_196.setTransform(57.4,103.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_197.setTransform(58.2,103.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_198.setTransform(59,102.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_199.setTransform(59.7,102.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_200.setTransform(60.5,102.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_201.setTransform(61.3,101.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_202.setTransform(62,101.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#292929").ss(0.3).p("AAmgkIAAAuIgvAWIgfgM");
	this.shape_203.setTransform(58.8,102.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(0.3).p("Ag4geIBlAkIg2AYIgZgJ");
	this.shape_204.setTransform(58.1,98.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#292929").ss(0.3).p("AAAgCIAAAG");
	this.shape_205.setTransform(47.8,85.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(0.3).p("AAAgEIAAAJ");
	this.shape_206.setTransform(48.4,85.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#292929").ss(0.3).p("AAAgGIAAAN");
	this.shape_207.setTransform(48.9,85.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_208.setTransform(49.5,85.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#292929").ss(0.3).p("AAAgKIAAAW");
	this.shape_209.setTransform(50.1,85.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(0.3).p("AAAgNIAAAb");
	this.shape_210.setTransform(50.7,85.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#292929").ss(0.3).p("AAAgQIAAAg");
	this.shape_211.setTransform(51.3,85.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_212.setTransform(51.9,85.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_213.setTransform(47.8,87.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_214.setTransform(48.6,88.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_215.setTransform(49.4,88.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_216.setTransform(50.2,88.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#292929").ss(0.3).p("AgHAoIAAgqIAPgEIAAgi");
	this.shape_217.setTransform(51.8,87.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_218.setTransform(51.8,89.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_219.setTransform(52.6,89.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAo");
	this.shape_220.setTransform(53.4,90.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_221.setTransform(54.2,90.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_222.setTransform(54.9,90.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_223.setTransform(55.7,91);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_224.setTransform(56.5,91.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_225.setTransform(57.4,91.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_226.setTransform(58.2,91.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_227.setTransform(59,91);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_228.setTransform(59.7,90.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_229.setTransform(60.5,90.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_230.setTransform(61.3,89.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_231.setTransform(62,89.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#292929").ss(0.3).p("ABOgdIAAAuIgwAXIhrgrIgBgp");
	this.shape_232.setTransform(54.8,89.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#292929").ss(0.3).p("AgNgaIgJgDIg4AVIBlAmIA4gYIhHgY");
	this.shape_233.setTransform(54.8,86.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#292929").ss(0.3).p("AAAgCIAAAG");
	this.shape_234.setTransform(47.8,73.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#292929").ss(0.3).p("AAAgEIAAAJ");
	this.shape_235.setTransform(48.4,73.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#292929").ss(0.3).p("AAAgGIAAAN");
	this.shape_236.setTransform(48.9,73.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_237.setTransform(49.5,73.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#292929").ss(0.3).p("AAAgKIAAAW");
	this.shape_238.setTransform(50.1,73.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#292929").ss(0.3).p("AAAgNIAAAb");
	this.shape_239.setTransform(50.7,73.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_240.setTransform(51.3,73.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_241.setTransform(51.9,73.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAq");
	this.shape_242.setTransform(47.8,76);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_243.setTransform(48.6,76.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_244.setTransform(49.4,76.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_245.setTransform(50.2,76.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#292929").ss(0.3).p("AgHAoIAAgqIAPgDIAAgj");
	this.shape_246.setTransform(51.8,75.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_247.setTransform(51.8,77.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_248.setTransform(52.6,77.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAo");
	this.shape_249.setTransform(53.4,78.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_250.setTransform(54.2,78.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_251.setTransform(54.9,78.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_252.setTransform(55.7,79.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_253.setTransform(56.5,79.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_254.setTransform(57.4,79.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_255.setTransform(58.2,79.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_256.setTransform(59,79);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_257.setTransform(59.7,78.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_258.setTransform(60.5,78.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_259.setTransform(61.3,78);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_260.setTransform(62,77.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#292929").ss(0.3).p("ABOgdIAAAuIgwAXIhrgrIgBgp");
	this.shape_261.setTransform(54.8,78);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#292929").ss(0.3).p("AgWgdIg4AVIBlAmIA4gYg");
	this.shape_262.setTransform(54.8,74.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#292929").ss(0.3).p("AAAicIAAE5");
	this.shape_263.setTransform(41.4,77.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#292929").ss(0.3).p("AAAieIAAE9");
	this.shape_264.setTransform(39.6,76.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#292929").ss(0.3).p("AAAiHIAAEP");
	this.shape_265.setTransform(26.8,70);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#292929").ss(0.3).p("AAAiJIAAET");
	this.shape_266.setTransform(25,69.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#292929").ss(0.3).p("AAAiWIAAEt");
	this.shape_267.setTransform(15.8,67.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#292929").ss(0.3).p("AAAiUIAAEp");
	this.shape_268.setTransform(13.9,66.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#292929").ss(0.3).p("Ag6gBIB1AD");
	this.shape_269.setTransform(81,62.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#292929").ss(0.3).p("AgSgHIAjgVIAABC");
	this.shape_270.setTransform(73.4,64.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#292929").ss(0.3).p("AAAjDIAAGH");
	this.shape_271.setTransform(71.5,90.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#292929").ss(0.3).p("AAAi3IAAFw");
	this.shape_272.setTransform(75.2,87.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#292929").ss(0.3).p("ADiCfIAAhHIrKj1IAGBGILED3IAAgBIAmgZIB2AIIBugz");
	this.shape_273.setTransform(48.9,55.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#292929").ss(0.3).p("AA6FyIgFsjIhuAzIAdM4");
	this.shape_274.setTransform(92.7,100.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#292929").ss(0.3).p("AhpBEIAIAHIBuAAIBchQIAAhAIhiBSIhiAAIgOgH");
	this.shape_275.setTransform(89,143.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_276.setTransform(8.5,76.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#292929").ss(0.3).p("AATApIAAg7IglgPIAAA5");
	this.shape_277.setTransform(8.5,75.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_278.setTransform(8.5,65.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_279.setTransform(8.5,65.8,1,1,0,0,0,0,0.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_280.setTransform(8.5,55);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_281.setTransform(8.5,54.9,1,1,0,0,0,0,0.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_282.setTransform(19.8,81.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#292929").ss(0.3).p("AATAmIAAg0IglgPIAAA9");
	this.shape_283.setTransform(19.9,79.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_284.setTransform(19.8,70.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_285.setTransform(19.9,70.3,1,1,0,0,0,0,0.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_286.setTransform(19.8,59.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_287.setTransform(19.9,59.4,1,1,0,0,0,0,0.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#292929").ss(0.3).p("AATAZIAAgbIglgPIAAAf");
	this.shape_288.setTransform(32.7,83.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_289.setTransform(32.7,75.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_290.setTransform(32.7,75.4,1,1,0,0,0,0,0.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_291.setTransform(32.7,64.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_292.setTransform(32.7,64.5,1,1,0,0,0,0,0.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_293.setTransform(46.3,91.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_294.setTransform(46.4,91.7,1,1,0,0,0,0,0.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_295.setTransform(46.3,80.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_296.setTransform(46.4,80.8,1,1,0,0,0,0,0.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_297.setTransform(46.3,70);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_298.setTransform(46.4,69.9,1,1,0,0,0,0,0.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#292929").ss(0.3).p("AAAiPIAAEf");
	this.shape_299.setTransform(2.1,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,162.8,153.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firstave();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,198,146), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjbFaIjGhxIjdjQIABiEIFpjwILQgIIDDLHg");
	mask.setTransform(63.9,35.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AHAhxIt/Dj");
	this.shape.setTransform(62,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("ABwglIgMATIi9A1IgXgP");
	this.shape_1.setTransform(34.6,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAXAAQAAAMgHAIQgGAIgKAAQgIAAgHgIQgHgIAAgMQAAgLAHgIQAHgIAIAAQAKAAAGAIQAHAIAAALg");
	this.shape_2.setTransform(103.5,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AASAAQAAAKgFAGQgFAHgIAAQgHAAgFgHQgFgGAAgKQAAgIAFgHQAFgHAHAAQAIAAAFAHQAFAHAAAIg");
	this.shape_3.setTransform(104,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AD/gOQgoAMhUAIQioASjegT");
	this.shape_4.setTransform(79,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("ABmAbQgZgQgmgNQhMgchEAG");
	this.shape_5.setTransform(42.2,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AjrBfQA7gwBTgvQClhfBzABIAwBg");
	this.shape_6.setTransform(34.3,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgFAnIALhN");
	this.shape_7.setTransform(63.8,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AnJBgINmjcIAhARIuGDo");
	this.shape_8.setTransform(63.2,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgMAGIALAGQABACADgDIAKgJQACgCAAgBQAAgCgCgBIgKgHQgCgCgCADIgLAKQgCAAAAADQAAACACABg");
	this.shape_9.setTransform(30.8,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgcAFIAggJIAZAF");
	this.shape_10.setTransform(30.2,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgdAHIAggMIAcAF");
	this.shape_11.setTransform(30,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAdgEIgkAIIgWgE");
	this.shape_12.setTransform(30.3,19.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AAFgnIAOB4IgCiHIghAKIgDhEIAhgN");
	this.shape_13.setTransform(29,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AADhGIgGCN");
	this.shape_14.setTransform(32.8,25.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AgKhEIAVCJ");
	this.shape_15.setTransform(28.4,26);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAOAnIgYgGIgDhGIAbAGg");
	this.shape_16.setTransform(31.8,14.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AgVAKIASALQAFACADgDIASgRQADgCAAgDQAAgEgDgCIgRgLQgEgEgEAEIgUASQgEABABAEQAAAEAEACg");
	this.shape_17.setTransform(30.8,34.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AgOAYQAAgJAJgKQANgOAIgO");
	this.shape_18.setTransform(26.7,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAPAYQAAgJgJgKQgMgOgIgO");
	this.shape_19.setTransform(34.9,36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AghAXIAAgSIBHgW");
	this.shape_20.setTransform(28.2,39.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAZAWIAAgUIgxgQIAAAU");
	this.shape_21.setTransform(34.5,38.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AATAHIAAiLIgkAMIAjA1IgkAYIAlAyIABABIgBAAgAATAIIglA7IAlA5g");
	this.shape_22.setTransform(34.3,54.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgZAPIAAiWIAyARIgxAvIAyAdIgzA5IgBABIABAAgAgZAQIAzAxIgzBAg");
	this.shape_23.setTransform(28.1,54.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAAiJIAAET");
	this.shape_24.setTransform(31.6,53.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AgTCIIAAkSIAlAqIgjAWIAiAyIgiAnIAiBGg");
	this.shape_25.setTransform(34.4,52.9,1,1,0,0,0,0,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAbiLIAAEUIg0g8IAzg6IgxgqIAxguIgygdg");
	this.shape_26.setTransform(28,53.9,1,1,0,0,0,0,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("ABBCFIAAj9Ig5gTIhJAXIAAEF");
	this.shape_27.setTransform(30.9,53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAnAVIgsAKIgagtIBCgR");
	this.shape_28.setTransform(3.6,33.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AgxAAIArAHIA4gN");
	this.shape_29.setTransform(12.4,38.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AgUA0IAmAGIAAhiIgmgT");
	this.shape_30.setTransform(15.5,32.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgcA/IA7gNIAAhvIg9AUg");
	this.shape_31.setTransform(10.3,32.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,4.9,108.8,64), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(98,72,1,1,0,0,0,99,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,198,146), null);


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

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgBgJIADALIgEAH");
	this.shape.setTransform(627.4,91.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AABgLIACANIgHAH");
	this.shape_1.setTransform(628.6,113.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAEgLIgGAMIAFAM");
	this.shape_2.setTransform(618.5,101.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_3.setTransform(560.8,171.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_4.setTransform(571.6,171);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_5.setTransform(571.3,168.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_6.setTransform(571.3,164.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_7.setTransform(571,161.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_8.setTransform(570.9,157.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_9.setTransform(570.8,155);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_10.setTransform(570.7,151.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_11.setTransform(570.5,148.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_12.setTransform(570.5,144.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AhbgoIC3BR");
	this.shape_13.setTransform(627.7,176);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AhbgnIC3BP");
	this.shape_14.setTransform(627.6,170.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AhagnIC2BP");
	this.shape_15.setTransform(627.4,164.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AhcgpIC5BS");
	this.shape_16.setTransform(627.3,159.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhdgoIC7BR");
	this.shape_17.setTransform(627.3,153.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AhdgoIC7BR");
	this.shape_18.setTransform(627.1,147.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AhdgqIC7BV");
	this.shape_19.setTransform(627.1,142.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AgCjeIAFG9");
	this.shape_20.setTransform(630.1,160.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgEkKIAJIV");
	this.shape_21.setTransform(623.8,161.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AgGkhIANJD");
	this.shape_22.setTransform(604.3,159.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgGkhIANJD");
	this.shape_23.setTransform(597.6,162.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AhdAaIC7gz");
	this.shape_24.setTransform(602.1,175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AhdAaIC7gz");
	this.shape_25.setTransform(601.8,167.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AhfAaIC/gz");
	this.shape_26.setTransform(601.7,160.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AhfAaIC/gz");
	this.shape_27.setTransform(601.6,153.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AhfAaIC+gz");
	this.shape_28.setTransform(601.3,146.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AheAaIC9gz");
	this.shape_29.setTransform(601.4,139.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAyA8IABgwIhnhD");
	this.shape_30.setTransform(628.2,126.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgFhXQANAygCB+");
	this.shape_31.setTransform(619.2,88.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgJhhQgFBegIBNIAugdIgBA1");
	this.shape_32.setTransform(620.5,116.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AACAfIgDg8");
	this.shape_33.setTransform(629.6,122.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAEBHQgEhHgChG");
	this.shape_34.setTransform(628.3,101.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AgBAqQgBhCAFgN");
	this.shape_35.setTransform(628.1,84.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AgCjZIAGGz");
	this.shape_36.setTransform(623.7,99.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("ABNANIgYACIgzgcIgzAVIgbgC");
	this.shape_37.setTransform(623.1,79.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAAgqIBNAqIAAAnIhLgqIhOAiIABglgAACgDIgCgn");
	this.shape_38.setTransform(623.1,76.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AAeAAQAAANgJAJQgJAIgMAAQgMAAgJgJQgJgJABgMQAAgMAJgJQAJgIALAAQANAAAIAJQAJAJAAALg");
	this.shape_39.setTransform(627.1,91.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AAjABQgBATgKANQgLAOgNgBQgPAAgKgOQgKgOABgSQAAgTALgNQAKgOANABQAPAAAKAOQAKANAAATg");
	this.shape_40.setTransform(619.1,101.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AApABQgBAWgMAQQgMAQgQAAQgRAAgMgRQgMgQABgWQAAgWAMgQQAMgQAQAAQASABALAQQAMAQAAAWg");
	this.shape_41.setTransform(628.1,113.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgMgoIgChFIAOATIgNALIAPAVIgOASIAAAAIARAZIgPAaIAUAbIgTAZIgDhnAgJBAIAAgBIAAAAIAAABIAXAbIgVAWg");
	this.shape_42.setTransform(605.1,109.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AgBjSIADGk");
	this.shape_43.setTransform(636.7,162.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AByAXIgnAWIi8hb");
	this.shape_44.setTransform(628.9,137.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AB4EkIgMnNIjjhyIAQIw");
	this.shape_45.setTransform(629.5,156.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AiflHIEtCoIAPHr");
	this.shape_46.setTransform(629,153.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgzA3IgChlIBtA/");
	this.shape_47.setTransform(596.5,123);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgMmJIAZMT");
	this.shape_48.setTransform(575.5,159.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AgIgGIARAN");
	this.shape_49.setTransform(570.2,125.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgGBAIgEhrIARgLIAEBv");
	this.shape_50.setTransform(568.6,130.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AgNgIIAaAR");
	this.shape_51.setTransform(567.6,140.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAQk0IgbAHIAXJm");
	this.shape_52.setTransform(570.1,171.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AgBFMIgYqAIA3gS");
	this.shape_53.setTransform(568.8,170.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAkl+IglgOIgfARIAbMN");
	this.shape_54.setTransform(574.4,159.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AAHHKIgQuIIAYgG");
	this.shape_55.setTransform(579.1,152);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("Ah0HvIgQuGIEICgIgVjtIgNgEIgLAKIAAABIgBAlIAAABIAAAAIAAgBIANgTIgMgSABWmLIAOgZIgOgTIAAAsIAAACIgBgBgABWlXIAQgYIgQgaIAAAyIAAADIgBgBgABWlUIgBBAIASgng");
	this.shape_56.setTransform(593.8,147.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AgElFIAJKL");
	this.shape_57.setTransform(586.1,162.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AgTgKIAnAV");
	this.shape_58.setTransform(589.6,133.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AhPFDIgNpHIC9g5");
	this.shape_59.setTransform(600.9,160.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AB5ETIgOpsIjjBQIAPJq");
	this.shape_60.setTransform(599.7,159.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AEBDoIgTqHInuCuIAXKY");
	this.shape_61.setTransform(589.2,162.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAfNjQgClLggrLIghqKIBMgg");
	this.shape_62.setTransform(560.4,252.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgW");
	this.shape_63.setTransform(567,324.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgW");
	this.shape_64.setTransform(566.9,321.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AgiALIBFgW");
	this.shape_65.setTransform(566.7,317.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgX");
	this.shape_66.setTransform(566.7,314.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_67.setTransform(566.4,310.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AgiALIBFgV");
	this.shape_68.setTransform(566.3,307.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_69.setTransform(566.2,304.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AghAMIBEgW");
	this.shape_70.setTransform(566.2,300.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgW");
	this.shape_71.setTransform(566,297.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AghALIBDgW");
	this.shape_72.setTransform(565.8,294.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AghALIBDgW");
	this.shape_73.setTransform(565.8,290.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgX");
	this.shape_74.setTransform(565.6,287.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_75.setTransform(565.5,284.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_76.setTransform(565.5,280.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_77.setTransform(565.3,277.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_78.setTransform(565.2,274.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_79.setTransform(565,270.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_80.setTransform(564.8,267.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_81.setTransform(564.8,264.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_82.setTransform(564.5,260.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_83.setTransform(564.5,257.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_84.setTransform(564.3,254.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_85.setTransform(564.1,250.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_86.setTransform(564,247.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_87.setTransform(563.8,244.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_88.setTransform(563.8,240.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_89.setTransform(563.4,237.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_90.setTransform(563.5,234.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AghAMIBEgX");
	this.shape_91.setTransform(563.5,230.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgX");
	this.shape_92.setTransform(563.3,227.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_93.setTransform(563.1,224.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_94.setTransform(563,221.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_95.setTransform(562.8,217.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgX");
	this.shape_96.setTransform(562.7,214.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AgkANIBJgZ");
	this.shape_97.setTransform(562.6,211.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgdAKIA7gU");
	this.shape_98.setTransform(561.6,208);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_99.setTransform(562.2,204.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_100.setTransform(562.1,201.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_101.setTransform(561.9,197.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_102.setTransform(561.7,194.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_103.setTransform(561.7,191.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_104.setTransform(561.6,188.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_105.setTransform(561.4,184.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_106.setTransform(561.4,181.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_107.setTransform(560.7,178.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_108.setTransform(560.8,175);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AgIADIARgF");
	this.shape_109.setTransform(572.1,201.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_110.setTransform(572.4,198.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_111.setTransform(572.3,196.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_112.setTransform(572.3,193.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_113.setTransform(572.2,191.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_114.setTransform(572.1,188.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgNADIAbgF");
	this.shape_115.setTransform(572,186);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_116.setTransform(571.9,183.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_117.setTransform(571.8,181.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_118.setTransform(571.7,177.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_119.setTransform(571.5,174.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgBgcIADA5");
	this.shape_120.setTransform(571.5,222);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AgSljIAlLH");
	this.shape_121.setTransform(573.8,272.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AAWHmIgrvL");
	this.shape_122.setTransform(571.4,280.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AACA2IgDhr");
	this.shape_123.setTransform(569,220);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgChPIAFCf");
	this.shape_124.setTransform(566.6,218.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AAAgmIABBN");
	this.shape_125.setTransform(567,231.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AgSngIAlPB");
	this.shape_126.setTransform(569,283.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AhFgXICKAv");
	this.shape_127.setTransform(625.8,180.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("Ag8AOIB5gb");
	this.shape_128.setTransform(598.9,190.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AheAaIC9gz");
	this.shape_129.setTransform(602.2,182.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_130.setTransform(565.8,336.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AgkANIBJgZ");
	this.shape_131.setTransform(567.2,332);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AgkALIBJgV");
	this.shape_132.setTransform(567,328.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},54).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regY:133.1,y:405.7},0).wait(1).to({y:376.3},0).wait(1).to({y:346.9},0).wait(1).to({y:317.5},0).wait(1).to({y:288},0).wait(1).to({y:258.6},0).wait(1).to({y:229.2},0).wait(1).to({y:199.8},0).wait(1).to({y:201.8},0).wait(1).to({y:203.8},0).to({_off:true},1).wait(29));

	// tree-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_17 = new cjs.Graphics().p("AjsFmIAArLIHZAAIAALLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_1_graphics_17,x:695.5,y:545.4}).wait(10).to({graphics:null,x:0,y:0}).wait(67));

	// tree
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(647.6,558.5,0.999,0.999,-60,0,0,12.4,30.9);
	this.instance_1._off = true;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("AgUAKQADgFAKgDQAHgCAHgDQAGgDADAAQADAAABACQACACgBAC");
	this.shape_133.setTransform(683.3,550.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("AAOgHQABAAABgCQAAgCgDAAQgNAAgHAFQgFADgCAEQgCAGACAF");
	this.shape_134.setTransform(680.8,548.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AAdgZQAAgDgFgDQgDgBgGAAQgNACgMANQgNALgEAMQgEARALAK");
	this.shape_135.setTransform(682.4,537.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AgZAXQgDgGABgHQACgHAFgEQAGgIAQgGIARgGIAEAAQAFABAAAEQAAADgBAF");
	this.shape_136.setTransform(689,542.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AgdCtQgCAJgIAGQgIAGgJgBQgKAAgHgHQgHgIgBgJQgQAIgHgHQgDgDgBgFQgIgUADgLIAGgMQADgKgMgTQgMgSAJgLQABgBAFgEQAEgDACgCQADgGgDgLQgFgfAQgIIAGgDQADgDgBgHQgDgHgBgDQgCgIAFgJQAFgIAIgEQALgEAYABQgHgGAEgJQAEgJAJABQgEgBgCgEQAEgDAFABQAFAAADADQAFgDgFgHQgFgGgBgDQgBgEACgFQAEgRAKAAQgJgSAFgKQACgEAGgGIALgMQgGgXAHgKQADARARAGIgEAHQAGADAOAAQAFACADAFQACAFgDADQACgCADACQACACAAACQAAADgEAGQgHAMAEAPQAGAXACAWQAAAFACADQABAEAGAHQAFAIgGADQAIgDAJAEQAJAEAFAHQAJAPgHAUQAKAFAGALQAHALgBALQgBAHAAADQABAEADAGQABAHgHAGQgFAFgIACQAHgCAGAGQAHAGABAIQABAOgOAPQAHAHABAKQAAALgFAIQgGAIgKACQgKADgJgFQAGANgFAGQgFAFgKgDQgOgDgCAAQABAFgDAHQgEAHAAADQAAACADAEQACADgCADQgDAJgUgDQgIgBgLgFQgLgFgFgBQgIgBgDAAQgEgBgCgHQgEgMAEgQg");
	this.shape_137.setTransform(686.5,536.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AgfhaQASAlgFBFQgCAkgGAcQAlAfAUgoQgIgKgHgaQgOg0ABhQ");
	this.shape_138.setTransform(690.7,567.3);

	var maskedShapeInstanceList = [this.instance_1,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},17).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(1).to({regY:30.7,scaleX:1,scaleY:1,rotation:-47.1,x:654.5,y:556.8},0).wait(1).to({rotation:-34.3,x:661.7,y:555.2},0).wait(1).to({rotation:-21.4,x:668.8,y:553.7},0).wait(1).to({rotation:-8.5,x:675.8,y:552.1},0).wait(1).to({rotation:4.3,x:683,y:550.6},0).wait(1).to({rotation:17.2,x:690.1,y:549.1},0).wait(1).to({rotation:30,x:697.3,y:547.5},0).wait(1).to({rotation:15,x:691.2,y:546.5},0).wait(1).to({rotation:0,x:685.1,y:545.5},0).to({_off:true},1).wait(67));

	// ufo-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_55 = new cjs.Graphics().p("ADREYInMjcQhfA1gqgBQglgCgJgrQgCgIgHhcQgGhIgWgtIAAgBIAowYIN6AUIAOfqIkdFhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_2_graphics_55,x:338.2,y:122}).wait(10).to({graphics:null,x:0,y:0}).wait(29));

	// Ufo-bldng
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.5,385.9,1,1,0,0,0,42.4,98.7);
	this.instance_2._off = true;

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AAdAyIg4hVIADgP");
	this.shape_139.setTransform(306.3,30.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AAdBAIg7hdIASgKQAXgMAagK");
	this.shape_140.setTransform(306.9,28.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("ADiBdIAAgoIgYAQIgCgmIgYAPIgCghIgVARIgFghIgUAUIgFgfIgVAWIgEghIgWAZIgJghIgPAbIgMgfIgNAcIgMgdIgNAcIgLgdIgPAfIgPgbIgOAcIgRgYIgMAeIgTgVIgHAbIgWgRIgGAZIgcgLIgFALIg4hZIAEgP");
	this.shape_141.setTransform(331.6,27.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AAjHmIAAvAIhFBFIAANx");
	this.shape_142.setTransform(310.7,78.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("ADgB6Qg7hRhVghQh7guicBEIg6hdIAvgXQA7gZA7gKQCCgUBgAxQBKAmAyBMQAEAHgDAHg");
	this.shape_143.setTransform(335.2,24.4,1,1,0,0,0,0,-0.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("ADiCjIAAhbQAAg3gfgpQg7hShVggQh7gwicBF");
	this.shape_144.setTransform(337.1,42.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AApkxIhQBqIAAH8");
	this.shape_145.setTransform(303.1,97.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AChKNIAAwkQhbjJjqgn");
	this.shape_146.setTransform(355.2,115.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AgmGdIAAsBIBMhKIAANp");
	this.shape_147.setTransform(334.9,93.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AiCiQIEAAAIAAEm");
	this.shape_148.setTransform(371.3,194.5);

	var maskedShapeInstanceList = [this.instance_2,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},55).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).wait(1).to({regY:98.5,x:339.7,y:350.3},0).wait(1).to({x:339.9,y:314.9},0).wait(1).to({x:340.1,y:279.4},0).wait(1).to({x:340.3,y:244},0).wait(1).to({x:340.5,y:208.6},0).wait(1).to({x:340.7,y:173.2},0).wait(1).to({x:340.8,y:137.8},0).wait(1).to({x:341.1,y:102.4},0).wait(1).to({y:106.4},0).wait(1).to({y:110.5},0).to({_off:true},1).wait(28));

	// foshay-mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_47 = new cjs.Graphics().p("AA1GqIjFgeIkXj+ICXrIIFRlaIDNFBQAAAaAvDkQAxDlgBAaIA7LfIhtBxQAAADgxiCQgxiEAAADIgWDQIh6DLg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_3_graphics_47,x:533.7,y:260.2}).wait(10).to({graphics:null,x:0,y:0}).wait(37));

	// foshay
	this.instance_3 = new lib.Symbol26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(541,425.5,1,1,0,0,0,21.3,73.7);
	this.instance_3._off = true;

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_149.setTransform(560.1,323.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_150.setTransform(559.7,316.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("AAAgTIABAo");
	this.shape_151.setTransform(558.9,307.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_152.setTransform(558.5,299);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAo");
	this.shape_153.setTransform(558.1,290.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_154.setTransform(557.7,282.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_155.setTransform(557.1,274.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_156.setTransform(556.6,265.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAo");
	this.shape_157.setTransform(556.1,257.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_158.setTransform(555.6,248.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_159.setTransform(555.3,240.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_160.setTransform(554.8,232.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_161.setTransform(537.3,280.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_162.setTransform(536.3,280.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_163.setTransform(535.2,280.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_164.setTransform(537.4,272.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_165.setTransform(536.3,272.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_166.setTransform(535.3,272.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_167.setTransform(537.5,264.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_168.setTransform(536.4,264.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_169.setTransform(535.3,264.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_170.setTransform(537.5,255.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_171.setTransform(536.4,255.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_172.setTransform(535.3,255.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_173.setTransform(537.6,247.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_174.setTransform(536.5,247.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_175.setTransform(535.4,247.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_176.setTransform(537.6,238.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_177.setTransform(536.6,238.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_178.setTransform(535.5,238.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_179.setTransform(537.6,230.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_180.setTransform(536.6,230.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_181.setTransform(535.5,230.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_182.setTransform(537.6,222.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_183.setTransform(536.6,222.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_184.setTransform(535.5,222.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#292929").ss(0.3).p("AAsgWIAAAWIhXAXIABgUg");
	this.shape_185.setTransform(529,235.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_186.setTransform(529.5,283.4,1,1,0,0,0,0,-0.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_187.setTransform(531.6,282.8,1,1,0,0,0,0,-0.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_188.setTransform(525.3,276.1,1,1,0,0,0,0,-0.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_189.setTransform(527.4,275.4,1,1,0,0,0,0,-0.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgEIAAgsIgNAEg");
	this.shape_190.setTransform(529.5,274.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNADg");
	this.shape_191.setTransform(531.7,274.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_192.setTransform(525.3,267.5,1,1,0,0,0,0,-0.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_193.setTransform(527.4,266.8,1,1,0,0,0,0,-0.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_194.setTransform(529.5,266.2,1,1,0,0,0,0,-0.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_195.setTransform(531.7,265.5,1,1,0,0,0,0,-0.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_196.setTransform(525.4,258.9,1,1,0,0,0,0,-0.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_197.setTransform(527.6,258.2,1,1,0,0,0,0,-0.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_198.setTransform(529.7,257.6,1,1,0,0,0,0,-0.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_199.setTransform(531.8,256.9,1,1,0,0,0,0,-0.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_200.setTransform(525.5,250.3,1,1,0,0,0,0,-0.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_201.setTransform(527.6,249.6,1,1,0,0,0,0,-0.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_202.setTransform(529.8,249,1,1,0,0,0,0,-0.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_203.setTransform(531.9,248.3,1,1,0,0,0,0,-0.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_204.setTransform(525.7,241.6,1,1,0,0,0,0,-0.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_205.setTransform(527.8,241,1,1,0,0,0,0,-0.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_206.setTransform(530,240.3,1,1,0,0,0,0,-0.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNADg");
	this.shape_207.setTransform(532.1,239.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_208.setTransform(525.7,233,1,1,0,0,0,0,-0.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_209.setTransform(527.8,232.4,1,1,0,0,0,0,-0.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_210.setTransform(530,231.7,1,1,0,0,0,0,-0.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_211.setTransform(532.1,231.1,1,1,0,0,0,0,-0.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(0.3).p("AhCgRIAAAWICFANIAAgTg");
	this.shape_212.setTransform(546.1,234.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#292929").ss(0.3).p("AhFgIICLAR");
	this.shape_213.setTransform(545.7,215.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(0.3).p("Ag1AVIBsgp");
	this.shape_214.setTransform(529.1,217.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#292929").ss(0.3).p("AgboCIA3QF");
	this.shape_215.setTransform(555.6,266.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(0.3).p("AACnBIgDOD");
	this.shape_216.setTransform(538.4,258.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#292929").ss(0.3).p("AACm6IgDN1");
	this.shape_217.setTransform(534.3,258.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_218.setTransform(552.1,282.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_219.setTransform(548.7,282.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_220.setTransform(545.5,281.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVACg");
	this.shape_221.setTransform(542.2,281.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_222.setTransform(551.9,274);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_223.setTransform(548.6,273.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_224.setTransform(545.3,273.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_225.setTransform(542.1,272.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_226.setTransform(551.7,265.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_227.setTransform(548.5,265.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_228.setTransform(545.1,264.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_229.setTransform(541.9,264.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_230.setTransform(551.5,257.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_231.setTransform(548.3,256.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVACg");
	this.shape_232.setTransform(545,256.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_233.setTransform(541.7,256.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_234.setTransform(551.4,248.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_235.setTransform(548.1,248.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_236.setTransform(544.9,248.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_237.setTransform(541.5,247.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_238.setTransform(551.3,240.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_239.setTransform(547.9,240.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_240.setTransform(544.7,239.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgBgsIAUADg");
	this.shape_241.setTransform(541.4,239.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_242.setTransform(551.1,232.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAUACg");
	this.shape_243.setTransform(547.8,231.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_244.setTransform(544.5,231.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_245.setTransform(541.3,231);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#292929").ss(0.3).p("AAUAAIgVgCIgRAF");
	this.shape_246.setTransform(537.6,195.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#292929").ss(0.3).p("AApAAIgqgGIgmAN");
	this.shape_247.setTransform(537.6,198.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#292929").ss(0.3).p("AA+AAIhDgJIg2AU");
	this.shape_248.setTransform(537.7,201.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#292929").ss(0.3).p("ABSAAIhZgNIhJAc");
	this.shape_249.setTransform(537.8,204);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#292929").ss(0.3).p("ABngBIhwgQIhcAk");
	this.shape_250.setTransform(537.9,207);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#292929").ss(0.3).p("AB8gCIiIgTIhuAr");
	this.shape_251.setTransform(538,210.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#292929").ss(0.3).p("AiPAaICCgzICeAW");
	this.shape_252.setTransform(538.1,213.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#292929").ss(0.3).p("ACmgEIi1gZIiVA7");
	this.shape_253.setTransform(538.2,216.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#292929").ss(0.3).p("AgDBbIAHi1");
	this.shape_254.setTransform(537,204);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#292929").ss(0.3).p("AhPINIAUsqICMjt");
	this.shape_255.setTransform(527.7,247.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#292929").ss(0.3).p("AhyrEICaDNIBKS+");
	this.shape_256.setTransform(550.9,266);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_257.setTransform(521.4,276.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_258.setTransform(521.6,268.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_259.setTransform(521.7,259.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_260.setTransform(522,251.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_261.setTransform(522.1,242.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_262.setTransform(522.3,233.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#292929").ss(0.3).p("AgHGbIAQs1");
	this.shape_263.setTransform(522.8,259.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_264.setTransform(552.5,307.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_265.setTransform(549.3,307.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_266.setTransform(545.9,306.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_267.setTransform(542.7,306.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_268.setTransform(552.3,299.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_269.setTransform(549.1,298.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_270.setTransform(545.8,298.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_271.setTransform(542.5,298);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVADg");
	this.shape_272.setTransform(552.2,290.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_273.setTransform(548.9,290.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_274.setTransform(545.7,290);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_275.setTransform(542.3,289.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_276.setTransform(537.3,297.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_277.setTransform(536.2,297.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_278.setTransform(535.1,297.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_279.setTransform(537.3,289.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_280.setTransform(536.3,289.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_281.setTransform(535.2,289.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#292929").ss(0.3).p("AAHATIAAgeIgNAEIAAAW");
	this.shape_282.setTransform(525.3,299.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#292929").ss(0.3).p("AAHAXIAAgnIgNAFIAAAg");
	this.shape_283.setTransform(527.4,299.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNAFg");
	this.shape_284.setTransform(529.5,299.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_285.setTransform(531.7,298.7,1,1,0,0,0,0,-0.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_286.setTransform(525.1,293.2,1,1,0,0,0,0,-0.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_287.setTransform(527.3,292.5,1,1,0,0,0,0,-0.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_288.setTransform(529.4,291.9,1,1,0,0,0,0,-0.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_289.setTransform(531.5,291.2,1,1,0,0,0,0,-0.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_290.setTransform(525.2,284.7,1,1,0,0,0,0,-0.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_291.setTransform(521,294.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_292.setTransform(521.1,285.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_293.setTransform(527.3,284.1,1,1,0,0,0,0,-0.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#292929").ss(0.3).p("AgJAWIgBglIAVADIAAAQ");
	this.shape_294.setTransform(546.5,339.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_295.setTransform(543.3,339.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#292929").ss(0.3).p("AAAAPIgBgYIAHAB");
	this.shape_296.setTransform(552,331.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_297.setTransform(549.7,332.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_298.setTransform(546.5,332);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_299.setTransform(543.1,331.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#292929").ss(0.3).p("AAAAXIgEAAIgBgtIAQAC");
	this.shape_300.setTransform(552.3,324.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_301.setTransform(549.5,324);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_302.setTransform(546.3,323.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgCIgBgtIAUADg");
	this.shape_303.setTransform(543,323.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_304.setTransform(552.7,315.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_305.setTransform(549.4,315.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_306.setTransform(546.1,315.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_307.setTransform(542.9,314.7);

	var maskedShapeInstanceList = [this.instance_3,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},47).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).wait(1).to({y:402.3},0).wait(1).to({y:379},0).wait(1).to({y:355.8},0).wait(1).to({y:332.5},0).wait(1).to({y:309.3},0).wait(1).to({y:286},0).wait(1).to({y:262.8},0).wait(1).to({y:265.7},0).wait(1).to({y:268.7},0).to({_off:true},1).wait(37));

	// ids-mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_47 = new cjs.Graphics().p("AihVGQAXgRASgXQAYgdgGgRQgRgvAChFQADhKgKgnIglh5QgSg+AHglQAFgaAJgRIAEgHICMmaInbjRIj18IIO1AxIIIHXIjcNmIidAgIgHFUIgBH6IilDnIgtFoIhYGdIjEAmg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_4_graphics_47,x:696.6,y:173.6}).wait(11).to({graphics:null,x:0,y:0}).wait(36));

	// IDS
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(694.9,492.4,1,1,0,0,0,43.8,157.1);
	this.instance_4._off = true;

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#292929").ss(0.3).p("AjvBiIDCi8IEhgG");
	this.shape_308.setTransform(675.1,53.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#292929").ss(0.3).p("Ai+i6IEIDXIB1Cf");
	this.shape_309.setTransform(718.6,62.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#292929").ss(0.3).p("Ai+i6IEaDpIBjCM");
	this.shape_310.setTransform(718.3,57);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#292929").ss(0.3).p("AjvBdIDCiyIEhgF");
	this.shape_311.setTransform(675.1,48.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#292929").ss(0.3).p("AgMgEIAZAJ");
	this.shape_312.setTransform(671.4,22.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#292929").ss(0.3).p("AgPgFIAfAL");
	this.shape_313.setTransform(676,21.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#292929").ss(0.3).p("AgOgGIAeAN");
	this.shape_314.setTransform(680.8,22.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#292929").ss(0.3).p("AgPgGIAfAN");
	this.shape_315.setTransform(685.6,22);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#292929").ss(0.3).p("AgOgHIAdAP");
	this.shape_316.setTransform(690.3,21.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#292929").ss(0.3).p("AgOgHIAdAP");
	this.shape_317.setTransform(695.3,21.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#292929").ss(0.3).p("AAfXNMgA8guZ");
	this.shape_318.setTransform(702.2,169.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#292929").ss(0.3).p("AlXpeIArggIABAjIAvgiIABAmIAvgnIACAmIAvgnIABAlIAwgmIABAnIA1gpIEaDqIBjCNIANOX");
	this.shape_319.setTransform(704.5,85.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#292929").ss(0.3).p("AgT0UUAA2AoLgAUAAZ");
	this.shape_320.setTransform(695.8,151.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#292929").ss(0.3).p("AgQ0LUAAoAoBgAJAAR");
	this.shape_321.setTransform(690.6,150.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#292929").ss(0.3).p("AgMuaQAQQ+AJL3");
	this.shape_322.setTransform(685.4,113.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#292929").ss(0.3).p("AgPuEQAnbzgJAS");
	this.shape_323.setTransform(680.9,111.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#292929").ss(0.3).p("AgQt7QAobggJAS");
	this.shape_324.setTransform(676.1,110.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#292929").ss(0.3).p("AhVMVQgY0bgCiiIC+jCQAobKgJAS");
	this.shape_325.setTransform(662.2,109.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#292929").ss(0.3).p("AAAjIQADGHgDAG");
	this.shape_326.setTransform(687.2,258.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_327.setTransform(701.5,331.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_328.setTransform(699.4,331.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABW");
	this.shape_329.setTransform(697.4,331.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#292929").ss(0.3).p("AAAgqIAABV");
	this.shape_330.setTransform(695.3,331.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#292929").ss(0.3).p("AAAgpIAABT");
	this.shape_331.setTransform(693.2,331.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#292929").ss(0.3).p("AAAgoIAABR");
	this.shape_332.setTransform(691.1,331.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#292929").ss(0.3).p("AAAgnIAABP");
	this.shape_333.setTransform(689,331);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABM");
	this.shape_334.setTransform(686.9,330.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABM");
	this.shape_335.setTransform(684.8,330.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#292929").ss(0.3).p("AAkAAIhHAA");
	this.shape_336.setTransform(686.7,326.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#292929").ss(0.3).p("Ag0gFIBHACIAgAK");
	this.shape_337.setTransform(688.4,326.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_338.setTransform(690.7,324.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_339.setTransform(690.7,321.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_340.setTransform(690.7,319);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_341.setTransform(690.7,316.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_342.setTransform(690.7,313.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_343.setTransform(690.7,311.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_344.setTransform(690.7,308.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_345.setTransform(690.7,305.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_346.setTransform(690.7,303.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_347.setTransform(690.7,300.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_348.setTransform(690.7,298);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_349.setTransform(690.7,295.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_350.setTransform(690.7,292.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_351.setTransform(690.7,290.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_352.setTransform(690.7,287.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_353.setTransform(690.7,284.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#292929").ss(0.3).p("AgojvIBOAfIAAHE");
	this.shape_354.setTransform(694.4,302.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#292929").ss(0.3).p("AhfjyIBHAAIAAHlIB4AA");
	this.shape_355.setTransform(692.8,302.6);

	var maskedShapeInstanceList = [this.instance_4,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308}]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).wait(1).to({regY:157.2,y:456.2},0).wait(1).to({y:419.9},0).wait(1).to({y:383.6},0).wait(1).to({y:347.3},0).wait(1).to({y:311.1},0).wait(1).to({y:274.8},0).wait(1).to({y:238.5},0).wait(1).to({y:202.2},0).wait(1).to({y:165.9},0).wait(1).to({y:171.6},0).wait(1).to({y:177.3},0).to({_off:true},1).wait(35));

	// wells-mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_50 = new cjs.Graphics().p("AhqVzQgHgLA+gbQA+gcgIgKIgDgEIjihWIgKveIg7AZIgBkhIlQgrICD2YIOhgjMADNAhwIngA2IAMNZg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_5_graphics_50,x:448.8,y:213.6}).wait(14).to({graphics:null,x:0,y:0}).wait(30));

	// wells-fargo
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(446.7,516.4,1,1,0,0,0,52.9,145.7);
	this.instance_5._off = true;

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#292929").ss(0.3).p("AAbiGIgyARIAAEA");
	this.shape_356.setTransform(396.1,193.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#292929").ss(0.3).p("AgpidIBQAjIAAEc");
	this.shape_357.setTransform(442.7,144.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#292929").ss(0.3).p("AAAvrIAAfX");
	this.shape_358.setTransform(449.5,260.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_359.setTransform(459.4,78);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_360.setTransform(460.4,77.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#292929").ss(0.3).p("ADvgjIAAhCQgHgEgMgDQgZgGgcAJImVCRIAABN");
	this.shape_361.setTransform(444.6,84);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#292929").ss(0.3).p("AAAgrIABBX");
	this.shape_362.setTransform(415.2,104.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#292929").ss(0.3).p("AjCCAQgBgbAAgcQAAg3ABgBIGJiR");
	this.shape_363.setTransform(428.9,109.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#292929").ss(0.3).p("Ai4CFIgGiPIGBh2");
	this.shape_364.setTransform(420.9,125.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#292929").ss(0.3).p("AgSBTIAAirIAlAjIABCZ");
	this.shape_365.setTransform(442.3,121.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#292929").ss(0.3).p("AC9QtMAAJghTImLBxIAAKp");
	this.shape_366.setTransform(418.7,235.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#292929").ss(0.3).p("ABIhLIAAs3Ig1gTIhZAaIAAcX");
	this.shape_367.setTransform(448.7,251.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#292929").ss(0.3).p("AAkI+IAAx0IhIAUIAAEe");
	this.shape_368.setTransform(455.6,186.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#292929").ss(0.3).p("AA9kCIh2g5IAHJ+");
	this.shape_369.setTransform(454.6,128);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#292929").ss(0.3).p("ADKDAIAAlPIApgiInbCsIgWAcIHIim");
	this.shape_370.setTransform(440.6,97.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#292929").ss(0.3).p("AAThTIgiASIABCZ");
	this.shape_371.setTransform(454.9,122.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#292929").ss(0.3).p("AglBWIgCijIBSAw");
	this.shape_372.setTransform(460.8,122.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#292929").ss(0.3).p("AgSEJIgEoLIAyAL");
	this.shape_373.setTransform(467.2,105.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#292929").ss(0.3).p("AANEGIgBnYIgYgjIAAH0");
	this.shape_374.setTransform(471.3,105.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#292929").ss(0.3).p("AgkhWIBGAhQAAAAgDBJQgCAwABAT");
	this.shape_375.setTransform(476.3,115.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#292929").ss(0.3).p("AAuBaQgCgkACg0QACgsABgCIhmgu");
	this.shape_376.setTransform(478,130.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#292929").ss(0.3).p("AAfAMIg9gX");
	this.shape_377.setTransform(462.4,131.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#292929").ss(0.3).p("AAToIIghAIIAAQO");
	this.shape_378.setTransform(466.9,182.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#292929").ss(0.3).p("AgeIIIAAwMIA9AVIAAP7");
	this.shape_379.setTransform(471.9,182.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#292929").ss(0.3).p("AAxH4IAAu+Ihkgs");
	this.shape_380.setTransform(480.2,185.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#292929").ss(0.3).p("AAWFIIAApyIgtgY");
	this.shape_381.setTransform(487.5,204.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#292929").ss(0.3).p("AAcpMIg0AYIAASG");
	this.shape_382.setTransform(454.1,302.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#292929").ss(0.3).p("AA3jOIAAlzIhtgVIAAS0");
	this.shape_383.setTransform(462.4,303.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#292929").ss(0.3).p("AgfA9IAAhbIBCga");
	this.shape_384.setTransform(467.2,239.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#292929").ss(0.3).p("ABuDkIAAmpIjbguIAAHt");
	this.shape_385.setTransform(481.8,257.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#292929").ss(0.3).p("AAhCyIgBlKIhDgU");
	this.shape_386.setTransform(496.2,263.3);

	var maskedShapeInstanceList = [this.instance_5,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},50).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).wait(1).to({regX:52.8,regY:145.5,x:446.6,y:467.1},0).wait(1).to({y:421.7},0).wait(1).to({y:379.9},0).wait(1).to({y:341.8},0).wait(1).to({y:307.3},0).wait(1).to({y:276.4},0).wait(1).to({y:249.2},0).wait(1).to({y:225.6},0).wait(1).to({y:211.6},0).wait(1).to({y:213.2},0).wait(1).to({y:214.4},0).wait(1).to({y:215.3},0).wait(1).to({y:215.9},0).wait(1).to({y:216.1},0).to({_off:true},1).wait(29));

	// apts-mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_44 = new cjs.Graphics().p("AhuHcIrYqlIGpnuIRrhSIB5YTg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_6_graphics_44,x:174.7,y:123.8}).wait(50));

	// apts
	this.instance_6 = new lib.Symbol21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(173.5,251,1,1,0,0,0,38.1,65.5);
	this.instance_6._off = true;

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#292929").ss(0.3).p("AheA6IAAgIIC/hn");
	this.shape_387.setTransform(172.5,63.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#292929").ss(0.3).p("ABgA9IAAgWIi/hbIAAAT");
	this.shape_388.setTransform(191.8,63.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#292929").ss(0.3).p("AhnFrIAAsWIDPBWIAAMI");
	this.shape_389.setTransform(196.2,144.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#292929").ss(0.3).p("ABXGAIAAr3IitBOIAAJT");
	this.shape_390.setTransform(167.9,139.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#292929").ss(0.3).p("AAAAeIAAg6");
	this.shape_391.setTransform(181.2,62.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#292929").ss(0.3).p("AjMBnIAAhfIAhgRIAEAhIBng4IAEgmIAvgaIA4AcIAFA9IBvA3IAEg3IApAUIAABD");
	this.shape_392.setTransform(182.8,69.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#292929").ss(0.3).p("AAAB7IAAj1");
	this.shape_393.setTransform(181.1,77.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#292929").ss(0.3).p("Aj1DLIAAkIIAmgVIAAAdICPhNIgBgnIAwgbIAsAUIABAnICtBXIgBgdIAuAXIAAEC");
	this.shape_394.setTransform(183.2,84.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#292929").ss(0.3).p("AAAnCIAAOF");
	this.shape_395.setTransform(181.7,134.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#292929").ss(0.3).p("AkfEFIAAp/IAsgWIABBBIC3hbIgCguIAygXIA0AWIABAvIDMBXIAChHIAoAQIAAN/");
	this.shape_396.setTransform(182.9,139);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#292929").ss(0.3).p("AhcB2IAAiOIC8hY");
	this.shape_397.setTransform(144.7,135.4);

	var maskedShapeInstanceList = [this.instance_6,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},44).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387}]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(1).to({regY:65.2,y:228.1},0).wait(1).to({y:205.5},0).wait(1).to({y:182.9},0).wait(1).to({y:160.3},0).wait(1).to({y:137.7},0).wait(1).to({y:115.2},0).wait(1).to({y:118.7},0).wait(1).to({y:122.2},0).to({_off:true},1).wait(41));

	// steps-mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_42 = new cjs.Graphics().p("AEETTIgFkdIigi0IkrkEIhMgKIhPAoIjcC9Ig32jIFIoiIOtIdIgoc5Ih6CDg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_7_graphics_42,x:789.7,y:162.1}).wait(8).to({graphics:null,x:0,y:0}).wait(44));

	// steps-scraper
	this.instance_7 = new lib.Symbol20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(784.8,388.8,1,1,0,0,0,51.1,91.5);
	this.instance_7._off = true;

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#292929").ss(0.3).p("AB7hdIAAAVIj1CnIAAgRg");
	this.shape_398.setTransform(769,84.7,1,1,0,0,0,0,0.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#292929").ss(0.3).p("AB7hdIAAAVIj1CnIAAgRg");
	this.shape_399.setTransform(769,78.2,1,1,0,0,0,0,0.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#292929").ss(0.3).p("AEBqYIjsB2IAAC2IiMBJIAABvIiHA/IAAMS");
	this.shape_400.setTransform(759.2,166);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#292929").ss(0.3).p("AgFthIALbD");
	this.shape_401.setTransform(785.1,146.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#292929").ss(0.3).p("ADuhNIAAieIiph+IkyDlIAGH0");
	this.shape_402.setTransform(777.6,96.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#292929").ss(0.3).p("AhIiRICPBYIAADQ");
	this.shape_403.setTransform(808.6,103.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#292929").ss(0.3).p("AhlpuIDIBdIAASF");
	this.shape_404.setTransform(825.9,180.4);

	var maskedShapeInstanceList = [this.instance_7,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},42).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398}]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).wait(1).to({regY:91.3,y:347.6},0).wait(1).to({y:306.7},0).wait(1).to({y:265.7},0).wait(1).to({y:224.7},0).wait(1).to({y:183.8},0).wait(1).to({y:142.8},0).wait(1).to({y:145.7},0).wait(1).to({y:148.6},0).to({_off:true},1).wait(43));

	// back-lib-mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_39 = new cjs.Graphics().p("AprJMIACyDITVjwIk6ZNIkvgoIjmAqg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_8_graphics_39,x:414.1,y:254.8}).wait(7).to({graphics:null,x:0,y:0}).wait(48));

	// back-lib
	this.instance_8 = new lib.Symbol19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(393.4,419.5,1,1,0,0,0,32.1,64.3);
	this.instance_8._off = true;

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#292929").ss(0.3).p("Ai6APIBjgeQBdgTBKAYIBrAj");
	this.shape_405.setTransform(406,330.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#292929").ss(0.3).p("AjoAlIBygpIBOgYQBcgSBLAYIBqAh");
	this.shape_406.setTransform(401.4,323.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#292929").ss(0.3).p("AkWA2IDNhLIBNgXQBdgTBLAYIBrAk");
	this.shape_407.setTransform(396.9,316.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#292929").ss(0.3).p("AlBA+ID7hcIBNgXQBdgTBLAZQBtAjAjAM");
	this.shape_408.setTransform(392.7,308.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#292929").ss(0.3).p("AlAA+ID7hbIBNgYQBdgTBLAZICSAv");
	this.shape_409.setTransform(392.6,299.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_410.setTransform(392.5,291.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#292929").ss(0.3).p("AlCikID7hdIBNgXQBdgTBLAZQB3AnAbALIAAIG");
	this.shape_411.setTransform(392.8,305.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_412.setTransform(392.5,273.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#292929").ss(0.3).p("AlAA+ID7hcIBNgXQBdgTBLAZICSAv");
	this.shape_413.setTransform(392.6,264.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_414.setTransform(392.5,256.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#292929").ss(0.3).p("AlClTID7hdIBNgYQBdgTBLAZQB3AnAbALIAANm");
	this.shape_415.setTransform(392.8,288.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#292929").ss(0.3).p("AlCA1ID7hbIBNgYQBdgTBLAZQB3AnAbALIAABS");
	this.shape_416.setTransform(392.8,240.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#292929").ss(0.3).p("ADeBXIAAhmQgcgMh3goQhLgahPAQIhAAWIhOApIAABn");
	this.shape_417.setTransform(397,215.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#292929").ss(0.3).p("AD9BBIAAhTQgcgLh3gnQhLgZhPAQIhAAUIiMA+IAABU");
	this.shape_418.setTransform(393.9,226);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#292929").ss(0.3).p("AklHJIAAsVIDdhdIBBgVQBPgPBKAZQB4AnAbAKIAAA4");
	this.shape_419.setTransform(389.8,271.2);

	var maskedShapeInstanceList = [this.instance_8,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},39).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405}]},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).wait(1).to({regX:32.2,regY:64,x:393.3,y:393.9},0).wait(1).to({x:393.2,y:368.7},0).wait(1).to({x:393,y:343.5},0).wait(1).to({x:392.9,y:318.2},0).wait(1).to({x:392.7,y:293},0).wait(1).to({x:392.6,y:267.8},0).wait(1).to({x:392.5,y:271.5},0).to({_off:true},1).wait(47));

	// chops-mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_38 = new cjs.Graphics().p("AB4C5Ijlk1Ii+ENIAYKKIiaAoIkEqeIg8mtIgylKIPxksII6HMIAUUUImagcIiMh6IijCzg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_9_graphics_38,x:623.2,y:250.6}).wait(8).to({graphics:null,x:0,y:0}).wait(48));

	// chops
	this.instance_9 = new lib.Symbol18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(628.8,434.6,1,1,0,0,0,63.9,76.5);
	this.instance_9._off = true;

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_420.setTransform(586,314);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_421.setTransform(586,296.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_422.setTransform(586,278.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_423.setTransform(586,260.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#292929").ss(0.3).p("AkGg2IINBu");
	this.shape_424.setTransform(658.8,322);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#292929").ss(0.3).p("Aj+gzIH9Bn");
	this.shape_425.setTransform(657.7,301.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#292929").ss(0.3).p("Aj+g1IH+Br");
	this.shape_426.setTransform(657.7,281.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#292929").ss(0.3).p("AEmA4IoOhuIg+AK");
	this.shape_427.setTransform(653.8,260.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#292929").ss(0.3).p("AgnhhIBPDD");
	this.shape_428.setTransform(608.2,226.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#292929").ss(0.3).p("AgwisIBgDDIAACZ");
	this.shape_429.setTransform(590.9,238);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#292929").ss(0.3).p("AgwhhIBhDD");
	this.shape_430.setTransform(586.2,209.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#292929").ss(0.3).p("AAxBpIhhjR");
	this.shape_431.setTransform(606.7,203.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#292929").ss(0.3).p("AAqomIhTDBIAAOP");
	this.shape_432.setTransform(673,279.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#292929").ss(0.3).p("AAtoZIhZDLIAANq");
	this.shape_433.setTransform(656.7,272.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#292929").ss(0.3).p("AgqBjIBVjF");
	this.shape_434.setTransform(658.4,206.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#292929").ss(0.3).p("AgoBgIBQi/");
	this.shape_435.setTransform(674.3,212.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#292929").ss(0.3).p("AADmqIgFNV");
	this.shape_436.setTransform(577.1,286.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#292929").ss(0.3).p("AAAm3IAANv");
	this.shape_437.setTransform(683.4,291.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#292929").ss(0.3).p("ABtAAIjYAA");
	this.shape_438.setTransform(631.4,212.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#292929").ss(0.3).p("AAAFVIABqo");
	this.shape_439.setTransform(630.6,221.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#292929").ss(0.3).p("AAOApIBxjWIHxCwIhVCtgAi3BRIlPA6IhoiwIIViJIBnDXIi0Ag");
	this.shape_440.setTransform(629.5,229.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#292929").ss(0.3).p("AEVivIojCoIBrC5");
	this.shape_441.setTransform(592,205.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#292929").ss(0.3).p("Aj7jAIHyDNIhWC3");
	this.shape_442.setTransform(667.9,207.5);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#292929").ss(0.3).p("Ahyh6IDlAAIh3Dug");
	this.shape_443.setTransform(631.5,200.3,1,1,0,0,0,0.2,0);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#292929").ss(0.3).p("AAAgbIAAA3");
	this.shape_444.setTransform(636,185.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#292929").ss(0.3).p("AImB3IAAgdInljKIhxgBIn1CtIAAAZ");
	this.shape_445.setTransform(629.4,193.5);

	var maskedShapeInstanceList = [this.instance_9,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},38).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420}]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off:false},0).wait(1).to({regX:63.8,regY:76.3,x:628.7,y:403.7},0).wait(1).to({y:373},0).wait(1).to({y:342.3},0).wait(1).to({y:311.6},0).wait(1).to({y:280.9},0).wait(1).to({y:250.3},0).wait(1).to({y:258.5},0).to({_off:true},1).wait(48));

	// crane-mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_28 = new cjs.Graphics().p("ADcHnIjmArIlRjBIndAlIgCn5IHAm2IN1BHIFAQsg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_10_graphics_28,x:392.4,y:282.6}).wait(12).to({graphics:null,x:0,y:0}).wait(54));

	// crane
	this.instance_10 = new lib.ClipGroup();
	this.instance_10.parent = this;
	this.instance_10.setTransform(381.6,301.2,0.998,0.998,-56.2,0,0,58.4,32.8);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({_off:false},0).wait(1).to({regX:54.6,regY:37.1,scaleX:1,scaleY:1,rotation:-39.5,x:385.5,y:307.6},0).wait(1).to({rotation:-24.3,x:387.6,y:307.8},0).wait(1).to({rotation:-10.5,x:389.8,y:307.7},0).wait(1).to({rotation:1.8,x:391.7,y:307.5},0).wait(1).to({rotation:12.6,x:393.7,y:307},0).wait(1).to({rotation:22,x:395.5,y:306.6},0).wait(1).to({rotation:15.3,y:303.4},0).wait(1).to({rotation:9.8,x:395.6,y:300.9},0).wait(1).to({rotation:5.5,x:395.7,y:298.9},0).wait(1).to({rotation:2.5,x:395.8,y:297.4},0).wait(1).to({rotation:0.6,y:296.5},0).wait(1).to({rotation:0,y:296.2},0).wait(1).to({regX:63.9,regY:35.6,x:404.3,y:295.3},0).wait(53));

	// Cute-mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_37 = new cjs.Graphics().p("AhIMYIirEXIlkm0IgFlLIgK14ITNgxMgCWAjsIg6AIg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_11_graphics_37,x:893.7,y:220.7}).wait(10).to({graphics:null,x:0,y:0}).wait(47));

	// cute
	this.instance_11 = new lib.Symbol17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(879.8,450.1,1,1,0,0,0,44.6,108.8);
	this.instance_11._off = true;

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#292929").ss(0.3).p("AgbAQIA3gf");
	this.shape_446.setTransform(865,293.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgu");
	this.shape_447.setTransform(863.7,289);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_448.setTransform(863.7,284.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_449.setTransform(863.7,279.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_450.setTransform(863.7,274.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#292929").ss(0.3).p("AgnAXIBPgt");
	this.shape_451.setTransform(863.8,269.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#292929").ss(0.3).p("AAAAzIAAhl");
	this.shape_452.setTransform(852.3,303.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#292929").ss(0.3).p("AgCABIicAVIg9gbICegQgADvABIjxAA");
	this.shape_453.setTransform(868,296.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#292929").ss(0.3).p("AAAEFIAAoJ");
	this.shape_454.setTransform(846.2,293.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#292929").ss(0.3).p("AAvABIhdgB");
	this.shape_455.setTransform(847.2,242.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#292929").ss(0.3).p("Ah3AWIBqgrICHAA");
	this.shape_456.setTransform(847.7,269);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#292929").ss(0.3).p("AgpAZIBTgx");
	this.shape_457.setTransform(863.8,264.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_458.setTransform(859.9,261.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_459.setTransform(859.9,256.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_460.setTransform(859.9,251.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_461.setTransform(859.9,246);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_462.setTransform(859.9,240.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_463.setTransform(859.9,235.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_464.setTransform(859.9,230.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_465.setTransform(859.9,225.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_466.setTransform(859.9,219.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_467.setTransform(859.9,214.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_468.setTransform(859.9,209.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_469.setTransform(859.9,204.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_470.setTransform(859.9,199);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_471.setTransform(859.9,193.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_472.setTransform(859.9,188.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_473.setTransform(859.9,183.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_474.setTransform(859.9,178.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_475.setTransform(859.9,172.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_476.setTransform(859.9,167.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_477.setTransform(859.9,162.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_478.setTransform(859.9,157.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_479.setTransform(859.9,152);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_480.setTransform(859.9,146.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_481.setTransform(859.9,141.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_482.setTransform(859.9,135.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_483.setTransform(879.9,291.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_484.setTransform(879.9,286.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_485.setTransform(879.9,281.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_486.setTransform(879.9,276.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_487.setTransform(879.9,271.9);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_488.setTransform(879.9,266.9);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_489.setTransform(879.9,261.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_490.setTransform(879.9,256.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_491.setTransform(879.9,251.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_492.setTransform(879.9,246.9);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_493.setTransform(879.9,241.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_494.setTransform(879.9,236.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_495.setTransform(879.9,231.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_496.setTransform(879.9,226.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_497.setTransform(879.9,221.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_498.setTransform(879.9,216.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_499.setTransform(879.9,211.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_500.setTransform(879.9,206.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_501.setTransform(879.9,201.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_502.setTransform(879.9,196.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_503.setTransform(879.9,191.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_504.setTransform(879.9,186.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_505.setTransform(879.9,181.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_506.setTransform(879.9,176.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_507.setTransform(879.9,171.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_508.setTransform(879.9,166.9);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_509.setTransform(881,161.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_510.setTransform(881,156.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_511.setTransform(881,151.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_512.setTransform(881,146.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_513.setTransform(881,141.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_514.setTransform(881,136.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_515.setTransform(881,131);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_516.setTransform(896.8,298.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_517.setTransform(896.8,291.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_518.setTransform(896.8,284.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_519.setTransform(896.8,277.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#292929").ss(0.3).p("AgxALIBjgW");
	this.shape_520.setTransform(896.8,270.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_521.setTransform(896.8,263.8);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_522.setTransform(896.8,256.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_523.setTransform(896.8,249.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_524.setTransform(896.8,242.8);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_525.setTransform(896.8,235.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_526.setTransform(896.8,228.8);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_527.setTransform(896.8,221.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_528.setTransform(896.8,214.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_529.setTransform(896.8,207.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_530.setTransform(896.8,200.7);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_531.setTransform(896.8,193.7);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_532.setTransform(896.8,186.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_533.setTransform(896.8,179.7);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_534.setTransform(896.8,172.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#292929").ss(0.3).p("AgOgGIAcAN");
	this.shape_535.setTransform(895.7,163.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_536.setTransform(913.2,307.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_537.setTransform(913.2,300.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_538.setTransform(913.2,293.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_539.setTransform(913.2,285.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_540.setTransform(913.2,278.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_541.setTransform(913.2,271.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_542.setTransform(913.2,264.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_543.setTransform(913.2,257.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_544.setTransform(913.2,249.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_545.setTransform(913.2,242.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_546.setTransform(913.2,235.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_547.setTransform(913.2,228.4);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_548.setTransform(913.2,221.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_549.setTransform(913.2,214);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_550.setTransform(913.2,206.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_551.setTransform(913.2,199.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_552.setTransform(913.2,192.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_553.setTransform(913.2,185.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#292929").ss(0.3).p("ABMAxIiXhh");
	this.shape_554.setTransform(901.9,135.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_555.setTransform(901.9,141.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_556.setTransform(901.9,146.4);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_557.setTransform(901.9,151.5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_558.setTransform(901.9,156.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_559.setTransform(901.9,161.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#292929").ss(0.3).p("AB0BFIjniI");
	this.shape_560.setTransform(913.2,178);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#292929").ss(0.3).p("ABeAAIi7AA");
	this.shape_561.setTransform(879.6,116);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#292929").ss(0.3).p("AhGBQIAAg8ICNhaIAABI");
	this.shape_562.setTransform(863.1,123.4);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#292929").ss(0.3).p("ABPBYIAAg9IidhpIAABS");
	this.shape_563.setTransform(896.8,123.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#292929").ss(0.3).p("AAArhIAAXD");
	this.shape_564.setTransform(913.8,244);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#292929").ss(0.3).p("AAAv9IAAf7");
	this.shape_565.setTransform(867.8,226);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#292929").ss(0.3).p("AAADOIAAmb");
	this.shape_566.setTransform(894.2,144.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#292929").ss(0.3).p("AAAsMIAAYZ");
	this.shape_567.setTransform(901.8,240.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#292929").ss(0.3).p("AClNbIAA4SIjmidIhjAmIAAXA");
	this.shape_568.setTransform(908.3,247.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#292929").ss(0.3).p("AlwMzIAAm8IBEAAIAAkLIBeADIAAs0ICfhoIEEADICcB3IAAE8");
	this.shape_569.setTransform(872.6,205.2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#292929").ss(0.3).p("AAbAMIg1gX");
	this.shape_570.setTransform(922.1,327.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#292929").ss(0.3).p("AgeAAIA9AA");
	this.shape_571.setTransform(870.9,316.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#292929").ss(0.3).p("Ag0AAIBpAA");
	this.shape_572.setTransform(873,311.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#292929").ss(0.3).p("AhFAAICKAA");
	this.shape_573.setTransform(874.7,306.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#292929").ss(0.3).p("AhHAAICPAA");
	this.shape_574.setTransform(875,301.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#292929").ss(0.3).p("AgxAJIBjgR");
	this.shape_575.setTransform(896.8,312.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_576.setTransform(896.8,305.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_577.setTransform(913.2,314.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#292929").ss(0.3).p("AAAj8IAAH5");
	this.shape_578.setTransform(851.9,241.6);

	var maskedShapeInstanceList = [this.instance_11,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.shape_527,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.shape_569,this.shape_570,this.shape_571,this.shape_572,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.shape_578];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},37).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446}]},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(37).to({_off:false},0).wait(1).to({regY:108.4,y:416.6},0).wait(1).to({x:879.9,y:383.5},0).wait(1).to({x:880,y:350.3},0).wait(1).to({x:880.1,y:317.2},0).wait(1).to({y:284.1},0).wait(1).to({x:880.2,y:251},0).wait(1).to({x:880.3,y:217.9},0).wait(1).to({y:221.1},0).wait(1).to({y:224.4},0).to({_off:true},1).wait(47));

	// gov-bldng-mask (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_31 = new cjs.Graphics().p("AnXIDIjYsLIKklpIK7GgIgoKsIvYCWg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_12_graphics_31,x:608.3,y:285.1}).wait(8).to({graphics:null,x:0,y:0}).wait(55));

	// gov-bldng
	this.instance_12 = new lib.Symbol16();
	this.instance_12.parent = this;
	this.instance_12.setTransform(613.7,398.7,1,1,0,0,0,48.8,55.3);
	this.instance_12._off = true;

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#292929").ss(0.3).p("AgRgDIAjAAIAAAHIgjAAg");
	this.shape_579.setTransform(604.5,298.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#292929").ss(0.3).p("AADgUIgFAAIAAAqIAFAAg");
	this.shape_580.setTransform(602.2,297.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#292929").ss(0.3).p("AgRgDIAjAAIAAAHIgjAAg");
	this.shape_581.setTransform(623.9,297.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#292929").ss(0.3).p("AADgUIgFAAIAAApIAFAAg");
	this.shape_582.setTransform(621.6,296.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#292929").ss(0.3).p("AgBhKIgGBnIAPAs");
	this.shape_583.setTransform(595.3,262);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#292929").ss(0.3).p("AALhEIgUBsIAOAb");
	this.shape_584.setTransform(610.1,258.1);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#292929").ss(0.3).p("AgHg5IAOBYIgHAa");
	this.shape_585.setTransform(630,259.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#292929").ss(0.3).p("AAtAAQAAAVgNAOQgNAOgTAAQgSAAgNgOQgNgOAAgVQAAgUANgOQANgOASAAQATAAANAOQANAOAAAUg");
	this.shape_586.setTransform(603.1,298.4);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#292929").ss(0.3).p("AA6AAQAAAXgRAQQgRARgYAAQgXAAgRgRQgRgQAAgXQAAgWARgRQARgQAXAAQAYAAARAQQARARAAAWg");
	this.shape_587.setTransform(621.9,297.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#292929").ss(0.3).p("AAZASQgKgUgRgPQgDADgFAIQgJANgFAR");
	this.shape_588.setTransform(651.5,334.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#292929").ss(0.3).p("AAzg6IhlB1");
	this.shape_589.setTransform(570,332.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#292929").ss(0.3).p("AgMAWIALggIAOAd");
	this.shape_590.setTransform(592.1,342.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#292929").ss(0.3).p("AhTBVIAnivICBC/");
	this.shape_591.setTransform(579.6,335.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#292929").ss(0.3).p("AB8AxIhKhfIixAA");
	this.shape_592.setTransform(593,338.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#292929").ss(0.3).p("AAYAVIgvgq");
	this.shape_593.setTransform(636.9,336);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#292929").ss(0.3).p("AAfhAIg9CB");
	this.shape_594.setTransform(648,331);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#292929").ss(0.3).p("AgQAcIAQgrIASAn");
	this.shape_595.setTransform(660.6,332.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#292929").ss(0.3).p("AB/A4IhAhrIilBeIgdAB");
	this.shape_596.setTransform(644.8,329.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#292929").ss(0.3).p("AA7AAQAAAcgRATQgSAUgYAAQgXAAgRgUQgRgTAAgcQAAgbARgUQARgTAXAAQAYAAASATQARAUAAAbg");
	this.shape_597.setTransform(603.4,298.4);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#292929").ss(0.3).p("ABHAAQAAAegVAWQgUAVgeAAQgcAAgVgVQgVgWAAgeQAAgeAVgVQAVgVAcAAQAeAAAUAVQAVAVAAAeg");
	this.shape_598.setTransform(621.5,297.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#292929").ss(0.3).p("AAGAOIAAgVIgMABIAAAS");
	this.shape_599.setTransform(605.5,341.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#292929").ss(0.3).p("AAGAOIAAgWIgLACIgBAV");
	this.shape_600.setTransform(607.6,341.3);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#292929").ss(0.3).p("AACAKIAAgNIgIAC");
	this.shape_601.setTransform(599.5,335.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#292929").ss(0.3).p("AAGAYIAAgpIgLABIAAAX");
	this.shape_602.setTransform(601.2,336.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_603.setTransform(603.3,336.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_604.setTransform(605.5,336.6);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_605.setTransform(607.6,336.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_606.setTransform(599.1,330.6);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_607.setTransform(601.2,330.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_608.setTransform(603.3,330.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_609.setTransform(605.5,329.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_610.setTransform(607.6,329.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_611.setTransform(599.1,323.9);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_612.setTransform(601.2,323.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_613.setTransform(603.3,323.4);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_614.setTransform(605.5,323.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_615.setTransform(607.6,322.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_616.setTransform(599.1,317.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_617.setTransform(601.2,316.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_618.setTransform(603.3,316.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_619.setTransform(605.5,316.4);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgLACg");
	this.shape_620.setTransform(607.6,316.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_621.setTransform(599.1,310.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_622.setTransform(601.2,310.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_623.setTransform(603.3,309.9);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_624.setTransform(605.5,309.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_625.setTransform(607.6,309.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#292929").ss(0.3).p("AgGARIAAgcIANACIABAY");
	this.shape_626.setTransform(626.5,338.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#292929").ss(0.3).p("AgGAUIgBgiIAOACIABAe");
	this.shape_627.setTransform(624.1,338.4);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#292929").ss(0.3).p("AgGAXIgBgoIAOABIABAm");
	this.shape_628.setTransform(621.7,338.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#292929").ss(0.3).p("AgGAaIgBgtIAOABIABAr");
	this.shape_629.setTransform(619.3,338.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#292929").ss(0.3).p("AgFAcIgCgyIAOABIABAw");
	this.shape_630.setTransform(616.8,338.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOABg");
	this.shape_631.setTransform(626.6,332.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOACg");
	this.shape_632.setTransform(624.2,332.6);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANACg");
	this.shape_633.setTransform(621.8,332.3);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANACg");
	this.shape_634.setTransform(619.3,332.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_635.setTransform(616.9,331.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOACg");
	this.shape_636.setTransform(626.6,325.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_637.setTransform(624.2,325.1);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgBIgBg8IANACg");
	this.shape_638.setTransform(621.8,324.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANABg");
	this.shape_639.setTransform(619.3,324.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_640.setTransform(616.9,324.4);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_641.setTransform(626.6,317.9);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANABg");
	this.shape_642.setTransform(624.2,317.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANABg");
	this.shape_643.setTransform(621.8,317.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IANABg");
	this.shape_644.setTransform(619.3,317.2);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_645.setTransform(616.8,316.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_646.setTransform(626.6,310.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_647.setTransform(624.2,310.2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgBIgBg8IANABg");
	this.shape_648.setTransform(621.8,309.9);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANACg");
	this.shape_649.setTransform(619.3,309.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_650.setTransform(616.9,309.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#292929").ss(0.3).p("AhGgHICNAP");
	this.shape_651.setTransform(621.4,305);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_652.setTransform(621.6,284);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_653.setTransform(621.6,285.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_654.setTransform(621.5,287);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_655.setTransform(621.3,289.9);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#292929").ss(0.3).p("AhHgKICPAV");
	this.shape_656.setTransform(621.4,279.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#292929").ss(0.3).p("Ag7AQIB3gf");
	this.shape_657.setTransform(603.4,280.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#292929").ss(0.3).p("Ag6AJIB1gR");
	this.shape_658.setTransform(603.3,305.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#292929").ss(0.3).p("AA8gOIh3Ad");
	this.shape_659.setTransform(603.3,291.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#292929").ss(0.3).p("Ag6APIB1gd");
	this.shape_660.setTransform(603.4,287.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#292929").ss(0.3).p("AA7gPIh0Af");
	this.shape_661.setTransform(603.4,286);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#292929").ss(0.3).p("Ag7ARIB3gh");
	this.shape_662.setTransform(603.3,284.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA9IAbAEIACg9g");
	this.shape_663.setTransform(625.7,275.7);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA9IAbAEIACg9g");
	this.shape_664.setTransform(621.6,275.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#292929").ss(0.3).p("AALgiIABA8IgVAJIgCg9g");
	this.shape_665.setTransform(599.5,276.7,1,1,0,0,0,0,0.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#292929").ss(0.3).p("AALgiIABA8IgVAJIgBg9g");
	this.shape_666.setTransform(603.1,275.6,1,1,0,0,0,0,0.1);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#292929").ss(0.3).p("AALggIABA8IgVAFIgBg9g");
	this.shape_667.setTransform(606.8,274.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA8IAbAFIACg9g");
	this.shape_668.setTransform(617.5,274.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#292929").ss(0.3).p("AgHBlIAPjK");
	this.shape_669.setTransform(610.9,244.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#292929").ss(0.3).p("ACUCDIiYj+IiPD3");
	this.shape_670.setTransform(612.2,247.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#292929").ss(0.3).p("ABJFfIAAqzIiRgXIAALd");
	this.shape_671.setTransform(621.5,304.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#292929").ss(0.3).p("Ag7EcIAApnIB3giIAALh");
	this.shape_672.setTransform(603.3,305.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#292929").ss(0.3).p("AC/G+IAArEIATgxIgphhIgkBdIAZA0IiJgZIATgoIgyhpIgsByIARAkIhsAdIAQguIguhlIgiB0IAZAoIAAJ7");
	this.shape_673.setTransform(612.7,294.8);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#292929").ss(0.3).p("AAMgCIgXAF");
	this.shape_674.setTransform(597.5,257.3);

	var maskedShapeInstanceList = [this.instance_12,this.shape_579,this.shape_580,this.shape_581,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593,this.shape_594,this.shape_595,this.shape_596,this.shape_597,this.shape_598,this.shape_599,this.shape_600,this.shape_601,this.shape_602,this.shape_603,this.shape_604,this.shape_605,this.shape_606,this.shape_607,this.shape_608,this.shape_609,this.shape_610,this.shape_611,this.shape_612,this.shape_613,this.shape_614,this.shape_615,this.shape_616,this.shape_617,this.shape_618,this.shape_619,this.shape_620,this.shape_621,this.shape_622,this.shape_623,this.shape_624,this.shape_625,this.shape_626,this.shape_627,this.shape_628,this.shape_629,this.shape_630,this.shape_631,this.shape_632,this.shape_633,this.shape_634,this.shape_635,this.shape_636,this.shape_637,this.shape_638,this.shape_639,this.shape_640,this.shape_641,this.shape_642,this.shape_643,this.shape_644,this.shape_645,this.shape_646,this.shape_647,this.shape_648,this.shape_649,this.shape_650,this.shape_651,this.shape_652,this.shape_653,this.shape_654,this.shape_655,this.shape_656,this.shape_657,this.shape_658,this.shape_659,this.shape_660,this.shape_661,this.shape_662,this.shape_663,this.shape_664,this.shape_665,this.shape_666,this.shape_667,this.shape_668,this.shape_669,this.shape_670,this.shape_671,this.shape_672,this.shape_673,this.shape_674];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},31).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579}]},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({_off:false},0).wait(1).to({regY:54.9,y:379.5},0).wait(1).to({y:360.7},0).wait(1).to({y:341.9},0).wait(1).to({y:323.1},0).wait(1).to({y:304.4},0).wait(1).to({y:285.6},0).wait(1).to({y:290.2},0).to({_off:true},1).wait(55));

	// guthrie-mask (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_22 = new cjs.Graphics().p("Ag/O/IpVqtIn0jIIhuwBIfPhPIIcEcIACMdIj9jEIm/gpIAPGLIiYgDIgSFDIjrBzIgKGDg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_13_graphics_22,x:182.7,y:304.2}).wait(11).to({graphics:null,x:0,y:0}).wait(61));

	// gutrie
	this.instance_13 = new lib.Symbol9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(158.5,496.7,1,1,0,0,0,83.5,101.2);
	this.instance_13._off = true;

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#292929").ss(0.3).p("AA+g6Ih7B1");
	this.shape_675.setTransform(88.8,303.5);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#292929").ss(0.3).p("AhQANQBdAgBEgCIAAg2QhBADhgghg");
	this.shape_676.setTransform(196.1,347.4);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AhQAMIAAg2QBgAhBBgDIAAA2IgIABQhBAAhYgfg");
	this.shape_677.setTransform(196.1,347.5);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#292929").ss(0.3).p("AAaBDIgzAAIAAiFIAzAAg");
	this.shape_678.setTransform(217.8,333.4);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgZBDIAAiFIAzAAIAACFg");
	this.shape_679.setTransform(217.8,333.4);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#292929").ss(0.3).p("AguhSQAKAOAiAPQAhAPAPgDQABBzgBAGQgPAEgTgCQgmgFgUgiIAAh9IAAgC");
	this.shape_680.setTransform(179.5,330.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AAMBTQgmgFgUghIAAiAIABADQAJAOAiAPQAhAOAPgCQABBzgBAFQgKADgLAAIgNgBg");
	this.shape_681.setTransform(179.5,330.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#292929").ss(0.3).p("AExAhIn8ASIgGhQIhegV");
	this.shape_682.setTransform(115.1,292.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AjRgdIhegVIJfBTIn7ASg");
	this.shape_683.setTransform(115.1,292.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#292929").ss(0.3).p("AgcAKIA4gT");
	this.shape_684.setTransform(166.6,365.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#292929").ss(0.3).p("AkejOIF6FhIBDAnQBNAiAxgW");
	this.shape_685.setTransform(172.4,383.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#292929").ss(0.3).p("AkojZIGPF2IBDAnQBMAiAxgW");
	this.shape_686.setTransform(171.3,379.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#292929").ss(0.3).p("AkvjfIGcGDIBDAmQBNAiAxgW");
	this.shape_687.setTransform(170.7,376.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#292929").ss(0.3).p("AEtDWQgxAWhNgiIhDgnImZmC");
	this.shape_688.setTransform(170.8,373.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#292929").ss(0.3).p("AC1BjQgxAWhMgjIhCgmIisic");
	this.shape_689.setTransform(182.7,382.8);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#292929").ss(0.3).p("AjAhwIDAClIBCAmQBMAjAxgW");
	this.shape_690.setTransform(181.7,379.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#292929").ss(0.3).p("AC6BoQgxAWhNgjIhCgmIizieIAAAe");
	this.shape_691.setTransform(182.3,377.2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#292929").ss(0.3).p("AlkhaQAoA5BZAsQBVAqBsAUQDxAtCZhS");
	this.shape_692.setTransform(205.4,313.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AgjBKQhsgUhVgqQhZgsgog5ILLB+QhiA1iIAAQhKAAhVgQg");
	this.shape_693.setTransform(205.6,313.2);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#292929").ss(0.3).p("AgpgiIBTBF");
	this.shape_694.setTransform(138.9,340.8);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#292929").ss(0.3).p("AA4AOIhShMIgWAAIBpBeIgBAYIhnhpIgBgN");
	this.shape_695.setTransform(137.2,345);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgzgtIgBgNIBpBeIgBAXgAg0g6IAWAAIBSBLg");
	this.shape_696.setTransform(137.6,344.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#292929").ss(0.3).p("AgQhvIAAC9IAjAe");
	this.shape_697.setTransform(171.2,356.8);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgRBQIAAi9IAjDbg");
	this.shape_698.setTransform(171.3,356.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#292929").ss(0.3).p("AAlBQIhFANIAAi+");
	this.shape_699.setTransform(176.4,358.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgihfIBFCyIhFAMg");
	this.shape_700.setTransform(176.6,358.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#292929").ss(0.3).p("AghhwIAACYIBEBF");
	this.shape_701.setTransform(183.4,364.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AghAqIAAiYIBDDdg");
	this.shape_702.setTransform(183.4,364.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#292929").ss(0.3).p("AgohjIAADAIBRgSIAAiU");
	this.shape_703.setTransform(190.6,366.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgohgIBRAbIAACTIhRASg");
	this.shape_704.setTransform(190.6,365.8);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#292929").ss(0.3).p("ACkEpQhDADhZgSQiyglhyhqIAJmVII1ge");
	this.shape_705.setTransform(197.3,331);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AAFEaQiyglhyhqIAKmVII1geIh+JRIgTAAQg9AAhNgPg");
	this.shape_706.setTransform(197.5,331);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#292929").ss(0.3).p("AAxAJIg8gQIgkAP");
	this.shape_707.setTransform(231.3,259.2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgvAIIAkgQIA8ARg");
	this.shape_708.setTransform(231.4,259.2);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#292929").ss(0.3).p("AgVDtIAogdIAAm4IgoAS");
	this.shape_709.setTransform(234.3,283.4);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgUjYIApgSIAAG4IgpAdg");
	this.shape_710.setTransform(234.2,283.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#292929").ss(0.3).p("AAcDrIg3giIAAm1IA3ATg");
	this.shape_711.setTransform(229.2,283.7);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgbDKIAAm1IA3ATIAAHEg");
	this.shape_712.setTransform(229.2,283.6);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#292929").ss(0.3).p("AAugHIhWAFIAAAP");
	this.shape_713.setTransform(138.9,337.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgrgEIBWgFIhWATg");
	this.shape_714.setTransform(139.1,337.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#292929").ss(0.3).p("AhEiQIABCUICBCDIAHkZ");
	this.shape_715.setTransform(128.6,323.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AhDAKIgBiUICJgCIgIEZg");
	this.shape_716.setTransform(128.6,323.2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#292929").ss(0.3).p("AFcBnIpvAHIhJghIB3hbIgXhfIJjAD");
	this.shape_717.setTransform(109.9,298.4);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AlhBNIB3hbIgWhfIJiADIgLDRIpvAHg");
	this.shape_718.setTransform(110.4,298.4);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#292929").ss(0.3).p("AAAhJIAACT");
	this.shape_719.setTransform(124.2,280.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#292929").ss(0.3).p("ABAA0Ih1hmIB0AA");
	this.shape_720.setTransform(129.6,278);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("Ag6gzIB1AAIAABng");
	this.shape_721.setTransform(130.1,278);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#292929").ss(0.3).p("AAAhSIAACl");
	this.shape_722.setTransform(136.1,279.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#292929").ss(0.3).p("Ah8gEIA1AMIDEgQ");
	this.shape_723.setTransform(143.3,270.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("Ah8gEID5gDIjFAQg");
	this.shape_724.setTransform(143.4,270.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#292929").ss(0.3).p("AgghNIA9ATIAACGIg7gX");
	this.shape_725.setTransform(153,261.9);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgcA2IgCiCIA9ATIAACGg");
	this.shape_726.setTransform(152.8,261.8);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#292929").ss(0.3).p("ABfA0IgCiBIi7AuIAABug");
	this.shape_727.setTransform(140.4,261.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AheggIC8guIABCCIi9Abg");
	this.shape_728.setTransform(140.4,262);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#292929").ss(0.3).p("AhJnUIgmLgIDCC9IAdr8");
	this.shape_729.setTransform(154,324);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AhvERIAmrfIC5ChIgeL8g");
	this.shape_730.setTransform(154,323.4);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#292929").ss(0.3).p("AC/hRIpGACIC7ChIJSgig");
	this.shape_731.setTransform(185.7,284.9);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AmGhPIJGgCIDHCBIpSAig");
	this.shape_732.setTransform(185.6,284.9);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#292929").ss(0.3).p("AAADLIAAmV");
	this.shape_733.setTransform(170.9,256);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#292929").ss(0.3).p("AFUDQIAAlMIlThNIgBAAIlTBUIAACB");
	this.shape_734.setTransform(170.7,255.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AlTAJIAAiBIFThUIABAAIFTBNIAAFMg");
	this.shape_735.setTransform(170.7,256.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#292929").ss(0.3).p("AAAi1IAAFr");
	this.shape_736.setTransform(162.9,219.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#292929").ss(0.3).p("AgvC/IAAldIA7gaIAlAbIAAFE");
	this.shape_737.setTransform(161.8,219.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgvihIA6gaIAlAbIAAFEIhfAYg");
	this.shape_738.setTransform(161.8,220.1);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#292929").ss(0.3).p("AgcAAIA4AA");
	this.shape_739.setTransform(239.3,300.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#292929").ss(0.3).p("AAAg4IAABx");
	this.shape_740.setTransform(225,295.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#292929").ss(0.3).p("AhEB2QgCgLAAgWQAAgVABgHQABgKALgQIBeiGQAMgRAKADQAIADABARQACAWABAm");
	this.shape_741.setTransform(174.1,382);

	var maskedShapeInstanceList = [this.instance_13,this.shape_675,this.shape_676,this.shape_677,this.shape_678,this.shape_679,this.shape_680,this.shape_681,this.shape_682,this.shape_683,this.shape_684,this.shape_685,this.shape_686,this.shape_687,this.shape_688,this.shape_689,this.shape_690,this.shape_691,this.shape_692,this.shape_693,this.shape_694,this.shape_695,this.shape_696,this.shape_697,this.shape_698,this.shape_699,this.shape_700,this.shape_701,this.shape_702,this.shape_703,this.shape_704,this.shape_705,this.shape_706,this.shape_707,this.shape_708,this.shape_709,this.shape_710,this.shape_711,this.shape_712,this.shape_713,this.shape_714,this.shape_715,this.shape_716,this.shape_717,this.shape_718,this.shape_719,this.shape_720,this.shape_721,this.shape_722,this.shape_723,this.shape_724,this.shape_725,this.shape_726,this.shape_727,this.shape_728,this.shape_729,this.shape_730,this.shape_731,this.shape_732,this.shape_733,this.shape_734,this.shape_735,this.shape_736,this.shape_737,this.shape_738,this.shape_739,this.shape_740,this.shape_741];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},22).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675}]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(22).to({_off:false},0).wait(1).to({regX:83.1,x:158.1,y:441.6},0).wait(1).to({y:393},0).wait(1).to({y:350.9},0).wait(1).to({y:315.3},0).wait(1).to({x:158,y:293.7},0).wait(1).to({x:157.7,y:297.7},0).wait(1).to({x:157.5,y:300.5},0).wait(1).to({x:157.4,y:302.2},0).wait(1).to({y:302.8},0).to({_off:true},1).wait(62));

	// bank-stad-mask (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_38 = new cjs.Graphics().p("AyHwFMAkjABKIgKQyIlABgIhfCbIgFHgI+JC0g");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_14_graphics_38,x:144.1,y:201.1}).wait(9).to({graphics:null,x:0,y:0}).wait(47));

	// Bank-stadium
	this.instance_14 = new lib.Symbol15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(354.2,230.1,1,1,0,0,0,92.8,86.2);
	this.instance_14._off = true;

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#292929").ss(0.3).p("ABxB9IiZgDIhBjrIBJgL");
	this.shape_742.setTransform(85.6,268.5);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#292929").ss(0.3).p("Ag7BUIBpAPIA3iTIjJgwg");
	this.shape_743.setTransform(139.2,202.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#292929").ss(0.3).p("AgBgLIADAX");
	this.shape_744.setTransform(86.7,273.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#292929").ss(0.3).p("AAzBEIgciCIhNAI");
	this.shape_745.setTransform(87.7,268.9);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#292929").ss(0.3).p("ABDBSIgkieQgHACheAL");
	this.shape_746.setTransform(90.1,260.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#292929").ss(0.3).p("ABFBjIgqjAQgGAChdAT");
	this.shape_747.setTransform(94,251.9);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#292929").ss(0.3).p("ABNCVIhDklIhaAW");
	this.shape_748.setTransform(99.1,246.8);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#292929").ss(0.3).p("ABXDGIhYmGIhZAj");
	this.shape_749.setTransform(103.4,241.9);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#292929").ss(0.3).p("ABeD7IhwnvIhOAk");
	this.shape_750.setTransform(108.5,236.7);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#292929").ss(0.3).p("ABkEwIiGpZIhDAk");
	this.shape_751.setTransform(113.5,231.6);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#292929").ss(0.3).p("ABsFiIifq8Ig6Ac");
	this.shape_752.setTransform(118.5,226.6);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#292929").ss(0.3).p("ABxI+IiqryIg3AmIAAmw");
	this.shape_753.setTransform(122.6,200);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#292929").ss(0.3).p("AAAmyIAANl");
	this.shape_754.setTransform(104.7,158);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#292929").ss(0.3).p("AC6oQIlyN9IAuCk");
	this.shape_755.setTransform(99.5,222.2);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#292929").ss(0.3).p("Ag2H6IhxgEIFRvy");
	this.shape_756.setTransform(102.4,225);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#292929").ss(0.3).p("AAAhUIAACp");
	this.shape_757.setTransform(111,278.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#292929").ss(0.3).p("AAAB/IAAj8");
	this.shape_758.setTransform(97,274.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#292929").ss(0.3).p("ACkgoIlRAAICNBSIDgAA");
	this.shape_759.setTransform(114.3,266.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#292929").ss(0.3).p("AgTg0IAoBp");
	this.shape_760.setTransform(258.5,207);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#292929").ss(0.3).p("ALPFrIApiIIuekkIpOpEIE+ULIEQrH");
	this.shape_761.setTransform(180.4,179.1);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAI");
	this.shape_762.setTransform(138.6,242.4);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#292929").ss(0.3).p("Ag+gSIB9Al");
	this.shape_763.setTransform(145.2,238.1);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#292929").ss(0.3).p("AhtghIDbBD");
	this.shape_764.setTransform(152.2,233.7);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#292929").ss(0.3).p("AkPhUIIfCp");
	this.shape_765.setTransform(170.6,233);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#292929").ss(0.3).p("AhLgXICXAv");
	this.shape_766.setTransform(212,246);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#292929").ss(0.3).p("AlxhzILjDn");
	this.shape_767.setTransform(182.7,230.3);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#292929").ss(0.3).p("AlxhzILkDo");
	this.shape_768.setTransform(185,224.5);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#292929").ss(0.3).p("Al1h1ILrDr");
	this.shape_769.setTransform(187.6,218.8);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#292929").ss(0.3).p("Al8h2IL5Du");
	this.shape_770.setTransform(190.6,213.2);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#292929").ss(0.3).p("AmXh/IMvD/");
	this.shape_771.setTransform(195.5,208.3);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#292929").ss(0.3).p("Am8iLIN5EX");
	this.shape_772.setTransform(201.5,203.6);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#292929").ss(0.3).p("AnTiSIOoEl");
	this.shape_773.setTransform(206,198.6);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#292929").ss(0.3).p("AnSiRIOlEj");
	this.shape_774.setTransform(208.1,192.6);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#292929").ss(0.3).p("AAiheIhDC9");
	this.shape_775.setTransform(246.1,209.3);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#292929").ss(0.3).p("AArh4IhVDx");
	this.shape_776.setTransform(238.7,209.8);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#292929").ss(0.3).p("ABJjLIiRGX");
	this.shape_777.setTransform(229,216);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#292929").ss(0.3).p("AAehVIg7Cr");
	this.shape_778.setTransform(216.7,250.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#292929").ss(0.3).p("ABxk9IjhJ7");
	this.shape_779.setTransform(218.4,225.1);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#292929").ss(0.3).p("ABdkEIi5IJ");
	this.shape_780.setTransform(213.7,217.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#292929").ss(0.3).p("ABdkFIi5IK");
	this.shape_781.setTransform(207.1,215.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#292929").ss(0.3).p("ABfkIIi9IR");
	this.shape_782.setTransform(200.3,213.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#292929").ss(0.3).p("ABgkLIi/IX");
	this.shape_783.setTransform(193.7,211.8);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#292929").ss(0.3).p("ABgkNIi/Ib");
	this.shape_784.setTransform(186.9,209.9);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#292929").ss(0.3).p("ABikRIjDIi");
	this.shape_785.setTransform(180.2,208.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#292929").ss(0.3).p("ABpkkIjQJK");
	this.shape_786.setTransform(172.8,208);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#292929").ss(0.3).p("ABwk4IjfJx");
	this.shape_787.setTransform(165.5,208);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#292929").ss(0.3).p("AB3lMIjtKZ");
	this.shape_788.setTransform(158.1,208);

	var maskedShapeInstanceList = [this.instance_14,this.shape_742,this.shape_743,this.shape_744,this.shape_745,this.shape_746,this.shape_747,this.shape_748,this.shape_749,this.shape_750,this.shape_751,this.shape_752,this.shape_753,this.shape_754,this.shape_755,this.shape_756,this.shape_757,this.shape_758,this.shape_759,this.shape_760,this.shape_761,this.shape_762,this.shape_763,this.shape_764,this.shape_765,this.shape_766,this.shape_767,this.shape_768,this.shape_769,this.shape_770,this.shape_771,this.shape_772,this.shape_773,this.shape_774,this.shape_775,this.shape_776,this.shape_777,this.shape_778,this.shape_779,this.shape_780,this.shape_781,this.shape_782,this.shape_783,this.shape_784,this.shape_785,this.shape_786,this.shape_787,this.shape_788];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},38).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742}]},1).to({state:[{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742}]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(38).to({_off:false},0).wait(1).to({regX:92.7,regY:85.6,x:325.5,y:224.6},0).wait(1).to({x:297,y:219.8},0).wait(1).to({x:268.4,y:215},0).wait(1).to({x:239.9,y:210.1},0).wait(1).to({x:211.4,y:205.3},0).wait(1).to({x:182.8,y:200.5},0).wait(1).to({x:154.3,y:195.6},0).wait(1).to({x:161.3,y:197.8},0).wait(1).to({x:168.3,y:200.1},0).to({_off:true},1).wait(46));

	// gov-mask (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_34 = new cjs.Graphics().p("AAVN8IiHhJIADqZIgtgCIADhdIgZAAIAAgqIkLhmIhBAKIgPt6IQcgkIgDe3IjaAGIkTAWg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_15_graphics_34,x:307.7,y:220.1}).wait(10).to({graphics:null,x:0,y:0}).wait(50));

	// Gov
	this.instance_15 = new lib.Symbol14();
	this.instance_15.parent = this;
	this.instance_15.setTransform(308.6,424,1,1,0,0,0,47.5,100);
	this.instance_15._off = true;

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#292929").ss(0.3).p("AggrqIBBgRIAAX4IhBAAg");
	this.shape_789.setTransform(342.7,245.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AggL8IAA3nIBBgRIAAX4g");
	this.shape_790.setTransform(342.7,245.2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_791.setTransform(331,323.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_792.setTransform(331,319.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_793.setTransform(331,316);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_794.setTransform(331,312.3);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_795.setTransform(331,308.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_796.setTransform(331,304.8);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_797.setTransform(331,301);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_798.setTransform(331,297.3);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_799.setTransform(331,293.5);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_800.setTransform(331,289.8);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_801.setTransform(331,286);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_802.setTransform(331,282.3);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_803.setTransform(331,278.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_804.setTransform(331,274.8);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_805.setTransform(331,271);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_806.setTransform(331,267.3);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_807.setTransform(331,263.5);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_808.setTransform(331,259.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_809.setTransform(331,256);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_810.setTransform(331,252.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_811.setTransform(331,248.5);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_812.setTransform(331,244.8);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_813.setTransform(331,241);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_814.setTransform(331,237.3);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_815.setTransform(331,233.5);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_816.setTransform(331,229.8);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_817.setTransform(331,226);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_818.setTransform(331,222.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_819.setTransform(331,218.5);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_820.setTransform(331,214.8);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_821.setTransform(331,211);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_822.setTransform(331,207.3);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_823.setTransform(331,203.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_824.setTransform(331,199.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_825.setTransform(331,170.9);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#292929").ss(0.3).p("AhRghICjBE");
	this.shape_826.setTransform(331.5,167.3);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#292929").ss(0.3).p("Ag4gXIBwAv");
	this.shape_827.setTransform(331.4,163.5);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#292929").ss(0.3).p("AgdgMIA7AZ");
	this.shape_828.setTransform(331.1,159.6);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#292929").ss(0.3).p("AgHgDIAPAG");
	this.shape_829.setTransform(331.2,155.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_830.setTransform(331,196);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_831.setTransform(331,192.2);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_832.setTransform(331,188.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_833.setTransform(331,184.7);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_834.setTransform(331,181);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_835.setTransform(331,177.2);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_836.setTransform(331,173.5);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#292929").ss(0.3).p("AAAsCIAAYF");
	this.shape_837.setTransform(338.2,245);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#292929").ss(0.3).p("AAAsaIAAY1");
	this.shape_838.setTransform(335.3,242.6);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#292929").ss(0.3).p("AAAsxIAAZj");
	this.shape_839.setTransform(332.5,240.3);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#292929").ss(0.3).p("AAAs6IAAZ1");
	this.shape_840.setTransform(329.6,239.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#292929").ss(0.3).p("AAAsqIAAZV");
	this.shape_841.setTransform(326.8,241);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#292929").ss(0.3).p("AAAsaIAAY1");
	this.shape_842.setTransform(323.9,242.6);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_843.setTransform(301.4,296.3);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_844.setTransform(301.4,296.3);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_845.setTransform(301.4,288.9);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_846.setTransform(301.4,289);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_847.setTransform(301.4,281.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_848.setTransform(301.4,281.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_849.setTransform(301.4,274.5);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_850.setTransform(301.4,274.5);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_851.setTransform(301.4,267.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAmIhfAdg");
	this.shape_852.setTransform(301.4,267.2);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_853.setTransform(301.4,259.9);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_854.setTransform(301.4,259.9);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_855.setTransform(301.4,252.6);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_856.setTransform(301.4,252.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_857.setTransform(301.4,245.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_858.setTransform(301.4,245.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_859.setTransform(301.4,238.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_860.setTransform(301.4,238.1);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_861.setTransform(301.4,230.9);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_862.setTransform(301.4,230.9);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_863.setTransform(301.4,222.9);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_864.setTransform(301.4,222.9);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#292929").ss(0.3).p("AgTgNIAlgIIAAAmIgnAH");
	this.shape_865.setTransform(291.7,225.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FFFFFF").s().p("AgRgOIAlgIIAAAnIgnAGg");
	this.shape_866.setTransform(291.5,225.5);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_867.setTransform(301.4,215.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_868.setTransform(301.4,215.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#292929").ss(0.3).p("AgsACIBVgXIAAAmIgZAH");
	this.shape_869.setTransform(270.9,214.8);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FFFFFF").s().p("AgqABIBVgXIAAAmIgZAHg");
	this.shape_870.setTransform(270.7,214.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_871.setTransform(301.4,207.5);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_872.setTransform(301.4,207.5);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#292929").ss(0.3).p("AhQAKICdgoIAAAnIhaAY");
	this.shape_873.setTransform(285.8,218.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("AhOAJICdgoIAAAnIhbAYg");
	this.shape_874.setTransform(285.6,218.2);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_875.setTransform(285.6,211.9);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_876.setTransform(285.6,211.9);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgnIBXgYg");
	this.shape_877.setTransform(270.6,208.1);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAmIhXAZg");
	this.shape_878.setTransform(270.6,208.1);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_879.setTransform(301.4,199.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_880.setTransform(301.4,199.8);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_881.setTransform(285.6,204.2);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_882.setTransform(285.6,204.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgmIBXgZg");
	this.shape_883.setTransform(270.6,200.4);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_884.setTransform(270.6,200.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_885.setTransform(301.4,192.1);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_886.setTransform(301.4,192.1);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_887.setTransform(285.6,196.5);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_888.setTransform(285.6,196.5);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgmIBXgZg");
	this.shape_889.setTransform(270.6,192.7);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_890.setTransform(270.6,192.7);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_891.setTransform(301.4,184.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_892.setTransform(301.4,184.4);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_893.setTransform(285.6,188.8);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_894.setTransform(285.6,188.8);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgmIBXgZg");
	this.shape_895.setTransform(270.6,185);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAnIhXAYg");
	this.shape_896.setTransform(270.6,185);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_897.setTransform(301.4,176.7);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAmIhfAdg");
	this.shape_898.setTransform(301.4,176.7);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgpg");
	this.shape_899.setTransform(285.6,181.1);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidApg");
	this.shape_900.setTransform(285.6,181.1);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_901.setTransform(270.6,177.3);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAmIhXAZg");
	this.shape_902.setTransform(270.6,177.3);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_903.setTransform(301.4,169);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_904.setTransform(301.4,169);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgpg");
	this.shape_905.setTransform(285.6,173.4);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_906.setTransform(285.6,173.4);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_907.setTransform(270.6,169.6);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_908.setTransform(270.6,169.6);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_909.setTransform(301.4,161.3);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_910.setTransform(301.4,161.3);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgpg");
	this.shape_911.setTransform(285.6,165.7);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidApg");
	this.shape_912.setTransform(285.6,165.7);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_913.setTransform(270.6,161.9);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAnIhXAYg");
	this.shape_914.setTransform(270.6,161.9);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_915.setTransform(301.4,153.6);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_916.setTransform(301.4,153.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_917.setTransform(285.6,158);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_918.setTransform(285.6,158);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgnIBXgYg");
	this.shape_919.setTransform(270.6,154.2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_920.setTransform(270.6,154.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_921.setTransform(301.4,145.9);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_922.setTransform(301.4,145.9);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_923.setTransform(285.6,150.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_924.setTransform(285.6,150.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgmIBXgZg");
	this.shape_925.setTransform(270.6,146.5);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAnIhXAYg");
	this.shape_926.setTransform(270.6,146.5);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_927.setTransform(301.4,138.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_928.setTransform(301.4,138.3);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_929.setTransform(285.6,142.6);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_930.setTransform(285.6,142.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("#292929").ss(0.3).p("AgtAAIBXgZIAAAmIguAP");
	this.shape_931.setTransform(301.9,302.7);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgrAAIBXgaIAAAmIgvAPg");
	this.shape_932.setTransform(301.7,302.8);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("#292929").ss(0.3).p("AhIAcIAFiVIA5geQgCCRABAIIABAAIgnARQgBAAgBAAQgCABgDACQgIADgIADIBMB/IBEgRIhSiI");
	this.shape_933.setTransform(338.8,154.8);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AhHAbIAEiVIA5geQgCCRACAIIAAAAIBTCIIhFARg");
	this.shape_934.setTransform(338.8,155);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("#292929").ss(0.3).p("AgIOFIAA3eIhTiIIAAiaIC3BhIAAaa");
	this.shape_935.setTransform(346.9,228.8);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgHpeIhUiHIAAiaIC3BhIAAaaIhjAEg");
	this.shape_936.setTransform(346.9,229.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("#292929").ss(0.3).p("AAJPMIAA4bIBlh0IAAifIjZhnIgCeb");
	this.shape_937.setTransform(321,224.2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AhrvNIDZBnIAACfIhlB0IAAYbIh2AGg");
	this.shape_938.setTransform(321,224.6);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("#292929").ss(0.3).p("AD1PUIAA+hInpCKIABLRIERBtIgCAgIAoAXIAABIIAoANIgFKCICBBYIgFB0");
	this.shape_939.setTransform(285.6,224.6);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("ADoNeIiBhYIAFqCIgogNIAAhIIgogYIACgfIkRhtIgBrRIHpiLIAAehIgSABg");
	this.shape_940.setTransform(285.6,225);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("#292929").ss(0.3).p("AhWI7ICtk1IirkcICskPIixkV");
	this.shape_941.setTransform(330.5,223.3);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#292929").ss(0.3).p("AhVLaICtk1IiskcICtkPIixkVICyk+");
	this.shape_942.setTransform(330.4,227);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("#292929").ss(0.3).p("AhVLaICtk1IiskcICtkPIixkVICyk+");
	this.shape_943.setTransform(330.4,246.1);

	var maskedShapeInstanceList = [this.instance_15,this.shape_789,this.shape_790,this.shape_791,this.shape_792,this.shape_793,this.shape_794,this.shape_795,this.shape_796,this.shape_797,this.shape_798,this.shape_799,this.shape_800,this.shape_801,this.shape_802,this.shape_803,this.shape_804,this.shape_805,this.shape_806,this.shape_807,this.shape_808,this.shape_809,this.shape_810,this.shape_811,this.shape_812,this.shape_813,this.shape_814,this.shape_815,this.shape_816,this.shape_817,this.shape_818,this.shape_819,this.shape_820,this.shape_821,this.shape_822,this.shape_823,this.shape_824,this.shape_825,this.shape_826,this.shape_827,this.shape_828,this.shape_829,this.shape_830,this.shape_831,this.shape_832,this.shape_833,this.shape_834,this.shape_835,this.shape_836,this.shape_837,this.shape_838,this.shape_839,this.shape_840,this.shape_841,this.shape_842,this.shape_843,this.shape_844,this.shape_845,this.shape_846,this.shape_847,this.shape_848,this.shape_849,this.shape_850,this.shape_851,this.shape_852,this.shape_853,this.shape_854,this.shape_855,this.shape_856,this.shape_857,this.shape_858,this.shape_859,this.shape_860,this.shape_861,this.shape_862,this.shape_863,this.shape_864,this.shape_865,this.shape_866,this.shape_867,this.shape_868,this.shape_869,this.shape_870,this.shape_871,this.shape_872,this.shape_873,this.shape_874,this.shape_875,this.shape_876,this.shape_877,this.shape_878,this.shape_879,this.shape_880,this.shape_881,this.shape_882,this.shape_883,this.shape_884,this.shape_885,this.shape_886,this.shape_887,this.shape_888,this.shape_889,this.shape_890,this.shape_891,this.shape_892,this.shape_893,this.shape_894,this.shape_895,this.shape_896,this.shape_897,this.shape_898,this.shape_899,this.shape_900,this.shape_901,this.shape_902,this.shape_903,this.shape_904,this.shape_905,this.shape_906,this.shape_907,this.shape_908,this.shape_909,this.shape_910,this.shape_911,this.shape_912,this.shape_913,this.shape_914,this.shape_915,this.shape_916,this.shape_917,this.shape_918,this.shape_919,this.shape_920,this.shape_921,this.shape_922,this.shape_923,this.shape_924,this.shape_925,this.shape_926,this.shape_927,this.shape_928,this.shape_929,this.shape_930,this.shape_931,this.shape_932,this.shape_933,this.shape_934,this.shape_935,this.shape_936,this.shape_937,this.shape_938,this.shape_939,this.shape_940,this.shape_941,this.shape_942,this.shape_943];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},34).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789}]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(34).to({_off:false},0).wait(1).to({regY:99.8,y:382.3},0).wait(1).to({y:340.8},0).wait(1).to({y:299.4},0).wait(1).to({y:257.9},0).wait(1).to({y:216.4},0).wait(1).to({x:308.7,y:221.8},0).wait(1).to({x:308.9,y:227.3},0).to({_off:true},1).wait(52));

	// lego-mask (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_29 = new cjs.Graphics().p("AvPSzIECjCIgvoDIAei8IlXgwIkcwuIYvnBIR1XqIzPh4IjHCgImCBzIgJLHIk2CPg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_16_graphics_29,x:804,y:309.2}).wait(9).to({graphics:null,x:0,y:0}).wait(56));

	// Lego-bldng
	this.instance_16 = new lib.Symbol13();
	this.instance_16.parent = this;
	this.instance_16.setTransform(816.9,551.8,1,1,0,0,0,111.1,112.7);
	this.instance_16._off = true;

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#292929").ss(0.3).p("AANgMQgHgDgGAFQgCACgFAIQgCAGABADQABAGAFgB");
	this.shape_944.setTransform(743.5,412.8);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgKAJQAAgDACgGQAEgIAEgCQAFgFAGADIgPAaIgBAAQgEAAgBgFg");
	this.shape_945.setTransform(743.7,412.8);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#292929").ss(0.3).p("AgLAZQgEACgDgFQgCgDAAgFQABgRAYgRQAFgEAFAAQADAAACACQACACgBAD");
	this.shape_946.setTransform(742.7,418.1);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AgSAWQgCgDAAgFQABgRAYgRQAFgEAFAAQADAAACACQACACgBADIggAqIgCAAQgDAAgCgDg");
	this.shape_947.setTransform(742.7,418.1);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#292929").ss(0.3).p("AAPgCQABgGgGgCQgEgCgGACQgIACgEAHQgEAHAFAG");
	this.shape_948.setTransform(752.8,420.8);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgMgBQAEgHAIgCQAGgCAEACQAGACgBAGIgaAOQgFgGAEgHg");
	this.shape_949.setTransform(752.8,420.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#292929").ss(0.3).p("AgbgBQAKgIANgDQAPgDAJAHQAGAEABAGQACAHgFAF");
	this.shape_950.setTransform(746.8,421.5);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgbgBQAKgIANgDQAPgDAJAHQAGAEABAGQACAHgFAFg");
	this.shape_951.setTransform(746.8,421.5);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#292929").ss(0.3).p("AAOgKQgBgCgCgBIgFABQgLAFgEAFQgDADgBAFQAAAFADAE");
	this.shape_952.setTransform(743.5,425);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgNAFQABgEADgEQAEgEALgGIAFgBQAAABABAAQAAAAABABQAAAAAAABQABAAAAABIgYAYQgDgDAAgGg");
	this.shape_953.setTransform(743.5,425.1);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#292929").ss(0.3).p("AgYAUQgCgIAEgKQAEgMAMgGQAHgEAJACQAJACAGAG");
	this.shape_954.setTransform(738,426.1);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AgWACQAEgMAMgGQAHgEAJACQAJACAGAGIgxAeQgCgIAEgKg");
	this.shape_955.setTransform(738,426.1);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#292929").ss(0.3).p("AgEAHQAEgIAIgD");
	this.shape_956.setTransform(723,429.3);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("#292929").ss(0.3).p("AAMgBQgBACgEgDQgFgDgFAEQgFACgDAF");
	this.shape_957.setTransform(726.7,430.3);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgCgCQAGgEAEADIACACIgTAGQADgFAEgCg");
	this.shape_958.setTransform(726.5,430.4);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().s("#292929").ss(0.3).p("AgTALQAIgPARgDQAGgBADAEQACACADAE");
	this.shape_959.setTransform(722.2,433.9);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AAFgIQAGgBAEADIAFAGIgnAKQAHgQARgCg");
	this.shape_960.setTransform(722.2,434);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("#292929").ss(0.3).p("ABBABQgBgDAAgBQgBgPAJgDQgDgBgBgEQgCgDABgEQAEgIACgEQACgGABgNIACgWQABgPAHgDQACARAHAOQAEAGAAAEQAAADgBAGIADAFQAFAJgEALQAHgBAEAGQAEAHgDAGQAGgDAGAEQAGADAAAHQAAADABACAhiCTQgJABgGgIQgFgJADgIQgNgEgDgNQgBgOALgIQABAAAGgDQAEgCACgCQADgEAAgFQAAgFgCgLQgDgJACgFQADgLAMgFQAGgCAQgCQAFAAACgCQAEgEgFgMQgBgDABgEQABgFAEAAQgEAAgBgFQgBgFADgFQAHgLgDgFQgBgCgFgDQgEgCgBgCQgEgIALgIQAMgJAOgEQADgBABgBQABgDgGgDQgGgFgBgJQgCgIADgHQAEgKAQgPQAHgFADADQABABAAAGQgEAQANAKQADADAGAEQAFAFABAEQABACAAAEQAAADABACIAEACIAUAHQAFACABABQAEAEgDAMQgDAMADAEQABABADADQADACAAACQABADgCAEQgBAFAAACQAAADAEAHQADAGgDADQAJAAADABABDAJQAAgBAAgCQgBgDgBgCQADADAAAEQgBAAAAABQgCAHADAA");
	this.shape_961.setTransform(744.9,417.6);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AhxCMQgGgJAEgIQgOgEgCgNQgCgOAMgIIAGgDIAGgEQADgEAAgFIgCgQQgCgJABgFQADgLANgFQAFgCARgCQAEAAACgCQAEgEgEgMQgCgDABgEQABgFAEAAQgEAAgBgFQAAgFACgFQAHgLgDgFQgBgCgEgDIgGgEQgEgIALgIQANgJAOgEIADgCQACgDgGgDQgGgFgCgJQgBgIADgHQADgKARgPQAGgFADADQABABAAAGQgDAQANAKIAIAHQAGAFABAEIAAAGQAAADACACIAEACIATAHQAGACABABQAEAEgDAMQgDAMADAEIAEAEQACACABACQABADgCAEIgCAHQAAADAEAHQADAGgCADQAIAAAEABIgBgEQgBgPAJgDQgDgBgCgEQgBgDABgEIAFgMQADgGABgNIABgWQABgPAIgDQABARAIAOQADAGAAAEIAAAJIACAFQAFAJgDALQAGgBAEAGQAFAHgDAGQAFgDAHAEQAGADAAAHIABAFIjoCOIgCAAQgHAAgFgHg");
	this.shape_962.setTransform(744.9,417.6);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f().s("#292929").ss(0.3).p("Ag2BOQgHgGAAgKQAAgLAIgFQgFgEABgHQAAgGADgHQAIgPAMgIQgBgJACgMIABgNQAFgjAQgGQAFgCAFABQAEACABAEQABADgBAEQgBACgCAFQgBAHACAMQADAQAIAGQADACAIAEQADACABADQACAEgCABQAJAAAHAHQAHAIgCAJQAEgBAEADQADACABAEQACAFgCAKIgCAN");
	this.shape_963.setTransform(723.9,428.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("Ag9A+QAAgLAIgFQgFgEABgHQAAgGADgHQAIgPAMgIQgBgJACgMIABgNQAFgjAQgGQAFgCAFABQAEACABAEQABADgBAEIgDAHQgBAHACAMQADAQAIAGIALAGQADACABADQACAEgCABQAJAAAHAHQAHAIgCAJQAEgBAEADQADACABAEQACAFgCAKIgCANIhxASQgHgGAAgKg");
	this.shape_964.setTransform(723.9,428.6);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("#292929").ss(0.3).p("AgNgFQALgDAHAHQAHAEgCAI");
	this.shape_965.setTransform(919.5,329.9);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#292929").ss(0.3).p("AAOAZQAAgNgMgUQgJgRgLAB");
	this.shape_966.setTransform(914.6,323.2);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("#292929").ss(0.3).p("AgbgGQAHgFAKgBQAJgBAIADQARAIAEAT");
	this.shape_967.setTransform(910.2,323.8);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#292929").ss(0.3).p("AAcATQgJgWgJgGQgHgFgSgBQgJgBgDAE");
	this.shape_968.setTransform(913.4,329.7);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("#292929").ss(0.3).p("AgPgPQAHABAFAEQAFAEACAGIACAKQADAHAGgB");
	this.shape_969.setTransform(907.8,329.3);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#292929").ss(0.3).p("AAegKQgIgKgPADQgJADgMALQgPAMgBAO");
	this.shape_970.setTransform(885.1,313.3);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("#292929").ss(0.3).p("AgPAPQAAABgCAAQgCAAAAgCQgBgBABgEQAFgMANgHQAMgHANAD");
	this.shape_971.setTransform(881.5,320.5);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#292929").ss(0.3).p("AAggUQgMgGgMABQgMAAgLAGQgKAGgEAJQgBAEAAALQABAKgCAF");
	this.shape_972.setTransform(888.7,320.9);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("#292929").ss(0.3).p("AgMAgQgBABgCgBQgFAAgDgEQgEgEgBgGQgBgHAFgMQAHgSAJgHQAGgFAHgBQAIAAAGAFQAHAGADgB");
	this.shape_973.setTransform(894.3,327.5);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#292929").ss(0.3).p("AgWAPQAFgNANgHQALgHAOACIAGAB");
	this.shape_974.setTransform(887.5,325.7);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("#292929").ss(0.3).p("AgdARQAMgQAPgMQABgBABgBIAEABQAQAJAKAR");
	this.shape_975.setTransform(876.6,326.5);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#292929").ss(0.3).p("AgUAJIAKgIQAIgFAGgCQAKgCAFAH");
	this.shape_976.setTransform(850,323.9);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("#292929").ss(0.3).p("AAKAYQAEgXgGgIQgGgIgQgE");
	this.shape_977.setTransform(854.4,318.7);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#292929").ss(0.3).p("AgMAKIARgPQACgDACAAQABABABAB");
	this.shape_978.setTransform(859.9,320.9);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f().s("#292929").ss(0.3).p("AgSgDQAGgIAHgDQAKgFAJAJQAJAKgFAJIADgC");
	this.shape_979.setTransform(856.2,325.3);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#292929").ss(0.3).p("AgIAAIARAA");
	this.shape_980.setTransform(893.1,312.5);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f().s("#292929").ss(0.3).p("AgWAGIAtgL");
	this.shape_981.setTransform(901.4,320);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#292929").ss(0.3).p("AhxADQACgJADgDQAEgHAHACQgEgFAAgIQAAgHAEgGQAEgFAHgDQAHgDAGACQgCgHAEgHQAEgGAHgBQgGgMAFgLQADgFAGgCQAFgDAGACQAKADACAMQABAIgEAMQALABAEALQAIgFAKAAQALABAIAGQAIAHADAKQADALgEAKQAIgDAEAJQACADAAAKQARgEALAOQAMANgGARQAMAEABALIABAFQABADAHAHQAFAFgCAFQAJACACAJQABADgCACQgBADgDgB");
	this.shape_982.setTransform(913.4,323.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f().s("#292929").ss(0.3).p("Agpg2QgDgCgCgEQgCgFACgFQADgFAEgCQAFgDAFACQgBgGACgGQADgGAFgEQgFgEABgHQAAgIAEgEQAAgDgEgCQABgDABgNQABgKAHgEQAHgDAGAHQADAFABAJQAAADABABQABADAHAAQAHAAAGADQAHAEABAHIAAAFQAAAEADAGQADAGAAAEQgBAEgCAIQAAAGAMAGQAMAFAAAGQAAADgCAFQgBAEAFAIQAFAHgCAEQAOgCAIAHQAEAEACAGQACAGgDAFQAHAAAGADQAGAEACAGQAHANgKAMIAFgEQALAGADAKQAKgCAJAIQAIAIABALQABAQgQAVQAFgBAFAEQAFAFgBAFQABgCADABQACAAACACQADADgBAGQgCASgRAJAibCRQgGgGgCgIQgDgIACgIQAEgSARgFQgCABgCgDQgBgCAAgDQABgJAGgHQAGgIAJgCQgHgQAJgNQAIgOAQgBQgFgDABgGQAAgGAEgEQARgYAfgBQgGgCgCgGQgDgHADgFQADgFAHgBQAFgBAEACQABABABAB");
	this.shape_983.setTransform(886.3,317.1);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#292929").ss(0.3).p("AB+BzQAGgDgBgIQgCgIgEAAQAGgIgCgJQgCgKgIgCQgEgBgDACQgDACgBADQAAgGgDgGQgEgHgGgDQADgUgKgTIgDgIQADgLgDgFQgCgCgEgCQgHgCgBAAQgFgDgEgPQgEgNgHgCQAFgHgCgJQgBgJgHgFQgFgDgBgBIgBgGQgCgOgNgCQADgDgDgEQgCgDgEAAQgFAAgIAIQgeAhgFAYQAAABABAEQACAEAAABQgBABgEAAQgEgBAAABQgOALgDAIQgCAGABAGQACAHAGADQgKgBgJAGQgIAGgCAJQAAgDgCgDQgDgEgEgBQgEAAgEACQgCACgBABQAAgBgCgCQgDgFgFABQgGABgHAKQgKAOAHAHQgFABgCAGQgDAGACAFQACAFAGACQAFACAFgCQgCAFACAFQACAFAEACQAFACAFgDQACgBACgCIgCADQgCAHADAAAhfAOQgBACgBACAhbBNQABgCABgC");
	this.shape_984.setTransform(854.6,319.4);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f().s("#292929").ss(0.3).p("AgrAFIBXgJ");
	this.shape_985.setTransform(837.6,326.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#292929").ss(0.3).p("AhvANIDfgZ");
	this.shape_986.setTransform(831.4,322.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_987.setTransform(833.4,318.2);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_988.setTransform(833.4,314);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_989.setTransform(833.4,309.9);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_990.setTransform(833.4,305.7);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_991.setTransform(833.4,301.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_992.setTransform(833.4,297.3);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_993.setTransform(833.4,293.1);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#292929").ss(0.3).p("Ai5gOIFCAKIkJAU");
	this.shape_994.setTransform(833,288.7);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().s("#292929").ss(0.3).p("AAaCwIAAlYIg4gD");
	this.shape_995.setTransform(817.5,307.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#292929").ss(0.3).p("AAAihIAAFD");
	this.shape_996.setTransform(846.7,304.5);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#292929").ss(0.3).p("AApAMIhRgX");
	this.shape_997.setTransform(752.8,319.8);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_998.setTransform(753.6,317.1);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_999.setTransform(753.6,314.1);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgd");
	this.shape_1000.setTransform(753.6,311);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1001.setTransform(753.6,308);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1002.setTransform(753.6,305);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1003.setTransform(753.6,302);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1004.setTransform(753.6,299);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1005.setTransform(753.6,296);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1006.setTransform(753.6,293);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_1007.setTransform(753.6,290);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgc");
	this.shape_1008.setTransform(753.6,287);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_1009.setTransform(756.1,253.7);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1010.setTransform(756.1,256);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1011.setTransform(756.1,258.3);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1012.setTransform(756.1,260.6);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_1013.setTransform(756.1,262.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1014.setTransform(756.1,265.1);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1015.setTransform(756.1,267.4);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_1016.setTransform(756.1,269.7);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1017.setTransform(756.1,272);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1018.setTransform(756.1,274.3);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_1019.setTransform(756.1,276.6);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_1020.setTransform(756.1,278.9);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_1021.setTransform(753.6,280.4);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgc");
	this.shape_1022.setTransform(753.6,284);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#292929").ss(0.3).p("AAbi2QABEvAEAGIhGgPIAABH");
	this.shape_1023.setTransform(758.7,233.7);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#292929").ss(0.3).p("ABPAoIAAgoIhLglIhSAjIAAAu");
	this.shape_1024.setTransform(761.1,214.9);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#292929").ss(0.3).p("ABBASIhBghIhAAh");
	this.shape_1025.setTransform(761.4,217.1);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#292929").ss(0.3).p("ABBANIhAgZIhBAZ");
	this.shape_1026.setTransform(761.4,221.2);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#292929").ss(0.3).p("ABBAEIg/gGIhCAG");
	this.shape_1027.setTransform(761.4,225.2);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#292929").ss(0.3).p("ABBADIhAgEIhBAE");
	this.shape_1028.setTransform(761.4,230);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#292929").ss(0.3).p("ABBAAIiBAA");
	this.shape_1029.setTransform(761.4,234.7);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#292929").ss(0.3).p("ABBgHIg9APIhEgP");
	this.shape_1030.setTransform(761.4,239.9);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#292929").ss(0.3).p("Ai0BDIAAg1IFthL");
	this.shape_1031.setTransform(736.3,251.2);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#292929").ss(0.3).p("AAuAlIAAhDIhbAOIAAAh");
	this.shape_1032.setTransform(750.3,222);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#292929").ss(0.3).p("AA5AlIAAhEIhxASIAAAe");
	this.shape_1033.setTransform(749.2,225.5);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#292929").ss(0.3).p("ABLAkIAAhDIiVAYIAAAt");
	this.shape_1034.setTransform(747.4,228.7);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("#292929").ss(0.3).p("ABkAfIAAhEIjHAiIAAAv");
	this.shape_1035.setTransform(744.9,233.8);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#292929").ss(0.3).p("ACfAJIAAhEIk9BEIAAA5");
	this.shape_1036.setTransform(739.1,245.1);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#292929").ss(0.3).p("AgtAlIAAhDIBbAOIAAAi");
	this.shape_1037.setTransform(772.6,222);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#292929").ss(0.3).p("AhFAlIAAhEICKAWIAAAg");
	this.shape_1038.setTransform(774.9,225.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#292929").ss(0.3).p("AhXAjIAAhEICvAdIAAAr");
	this.shape_1039.setTransform(776.8,228.9);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#292929").ss(0.3).p("AiBAcIAAhEIECApIAAAt");
	this.shape_1040.setTransform(780.9,234.1);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#292929").ss(0.3).p("AibAYIAAhEIE3AyIAAAs");
	this.shape_1041.setTransform(783.6,239);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#292929").ss(0.3).p("Ai2APIAAhEIFtA5IAAA4");
	this.shape_1042.setTransform(786.2,244.5);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#292929").ss(0.3).p("AjRALIAAhEIGiBBIAAA4");
	this.shape_1043.setTransform(788.9,250.6);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#292929").ss(0.3).p("AgbIGIAAv1IA7gR");
	this.shape_1044.setTransform(764.7,296.1);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#292929").ss(0.3).p("AAAnQIAAOh");
	this.shape_1045.setTransform(765.5,300.6);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#292929").ss(0.3).p("AAAneIAAO9");
	this.shape_1046.setTransform(769.7,298.1);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#292929").ss(0.3).p("AkWlTIAggjIAjAjIArgmIG+BLIAAKu");
	this.shape_1047.setTransform(786.6,288);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#292929").ss(0.3).p("AgalaIAyAcIgCKd");
	this.shape_1048.setTransform(756.3,286);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("#292929").ss(0.3).p("AjECgIAAjvIGJhKIAAEiIgwgO");
	this.shape_1049.setTransform(733.9,266.7);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#292929").ss(0.3).p("AjDDKIAAl0IGHglIABGk");
	this.shape_1050.setTransform(729.1,299.7);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#292929").ss(0.3).p("AgjgFIBGAL");
	this.shape_1051.setTransform(773.4,343.6);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#292929").ss(0.3).p("AhRgMICjAZ");
	this.shape_1052.setTransform(778,340.6);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#292929").ss(0.3).p("AiFgVIELAr");
	this.shape_1053.setTransform(783.2,337.2);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#292929").ss(0.3).p("AibgZIE3Az");
	this.shape_1054.setTransform(785.5,333.6);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("#292929").ss(0.3).p("AiygcIFlA5");
	this.shape_1055.setTransform(787.7,329.9);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#292929").ss(0.3).p("AjIggIGRBB");
	this.shape_1056.setTransform(790,326.3);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1057.setTransform(792,322.6);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1058.setTransform(792,318.6);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1059.setTransform(792,314.6);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1060.setTransform(792,310.6);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1061.setTransform(792,306.5);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1062.setTransform(792,302.5);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1063.setTransform(792,298.5);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1064.setTransform(792,294.5);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1065.setTransform(792,290.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1066.setTransform(792,286.5);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1067.setTransform(792,282.5);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1068.setTransform(792,278.5);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1069.setTransform(792,274.4);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1070.setTransform(792,270.4);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1071.setTransform(792,266.4);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1072.setTransform(792,262.4);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_1073.setTransform(792,258.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hB");
	this.shape_1074.setTransform(750.3,329.6);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hC");
	this.shape_1075.setTransform(750.3,333.5);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hC");
	this.shape_1076.setTransform(750.3,337.4);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hC");
	this.shape_1077.setTransform(750.3,341.3);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hC");
	this.shape_1078.setTransform(750.3,345.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hD");
	this.shape_1079.setTransform(750.3,349.1);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#292929").ss(0.3).p("AhMAbICZg1");
	this.shape_1080.setTransform(748.5,353.6);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().s("#292929").ss(0.3).p("AhOAcICdg3");
	this.shape_1081.setTransform(748.7,357.5);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#292929").ss(0.3).p("AhQAcIChg4");
	this.shape_1082.setTransform(748.9,361.3);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f().s("#292929").ss(0.3).p("AhSAdIClg5");
	this.shape_1083.setTransform(749.1,365.2);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#292929").ss(0.3).p("AhTAeICng7");
	this.shape_1084.setTransform(749.2,369);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f().s("#292929").ss(0.3).p("AhVAfICrg9");
	this.shape_1085.setTransform(749.4,372.9);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#292929").ss(0.3).p("AhXAfICvg9");
	this.shape_1086.setTransform(749.6,376.7);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f().s("#292929").ss(0.3).p("AhZAfICzg9");
	this.shape_1087.setTransform(749.8,380.6);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#292929").ss(0.3).p("AhaAgIC1g/");
	this.shape_1088.setTransform(749.9,384.4);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f().s("#292929").ss(0.3).p("AhcAhIC5hC");
	this.shape_1089.setTransform(750.1,388.1);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hB");
	this.shape_1090.setTransform(750.3,391.9);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("#292929").ss(0.3).p("AisgFICcAmIC9hC");
	this.shape_1091.setTransform(742.5,395.8);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#292929").ss(0.3).p("AAGABIgLgB");
	this.shape_1092.setTransform(740.2,333.6);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f().s("#292929").ss(0.3).p("AAIACIgPgD");
	this.shape_1093.setTransform(740.1,337.4);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#292929").ss(0.3).p("AAMADIgXgF");
	this.shape_1094.setTransform(739.6,341.2);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("#292929").ss(0.3).p("AAQAEIgfgH");
	this.shape_1095.setTransform(739.2,344.9);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#292929").ss(0.3).p("AATAFIgmgJ");
	this.shape_1096.setTransform(738.9,348.7);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f().s("#292929").ss(0.3).p("AAWAGIgrgL");
	this.shape_1097.setTransform(738.6,352.4);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#292929").ss(0.3).p("AAfAIIg9gP");
	this.shape_1098.setTransform(737.7,356.1);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("#292929").ss(0.3).p("AAaAHIg0gN");
	this.shape_1099.setTransform(738.2,360);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#292929").ss(0.3).p("AAkAJIhHgR");
	this.shape_1100.setTransform(737.2,363.6);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f().s("#292929").ss(0.3).p("AA2AOIhrga");
	this.shape_1101.setTransform(735.4,367);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#292929").ss(0.3).p("ABEARIiHgh");
	this.shape_1102.setTransform(734,370.5);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_1103.setTransform(733,374.1);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#292929").ss(0.3).p("ABOATIibgm");
	this.shape_1104.setTransform(733,378);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_1105.setTransform(733,381.8);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_1106.setTransform(733,385.7);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f().s("#292929").ss(0.3).p("ABOAUIibgm");
	this.shape_1107.setTransform(733,389.5);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#292929").ss(0.3).p("ABOAUIibgn");
	this.shape_1108.setTransform(733,393.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f().s("#292929").ss(0.3).p("AisgFICcAmIC9hC");
	this.shape_1109.setTransform(742.5,395.8);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#292929").ss(0.3).p("ABdAnIC2hCIoOgKg");
	this.shape_1110.setTransform(731,324.4);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("#292929").ss(0.3).p("AAACGIAAkL");
	this.shape_1111.setTransform(761.4,334.6);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#292929").ss(0.3).p("Ahfl0IAALhIDDhO");
	this.shape_1112.setTransform(750.3,366.5);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("#292929").ss(0.3).p("AkuhVIAAgDIJJALIjQBPgAkmBeIgIiz");
	this.shape_1113.setTransform(733.1,329);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#292929").ss(0.3).p("AhNgWICbAt");
	this.shape_1114.setTransform(732.8,400.7);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("#292929").ss(0.3).p("AiBA2IAAgzIEDgxIAABE");
	this.shape_1115.setTransform(741.9,239.3);

	var maskedShapeInstanceList = [this.instance_16,this.shape_944,this.shape_945,this.shape_946,this.shape_947,this.shape_948,this.shape_949,this.shape_950,this.shape_951,this.shape_952,this.shape_953,this.shape_954,this.shape_955,this.shape_956,this.shape_957,this.shape_958,this.shape_959,this.shape_960,this.shape_961,this.shape_962,this.shape_963,this.shape_964,this.shape_965,this.shape_966,this.shape_967,this.shape_968,this.shape_969,this.shape_970,this.shape_971,this.shape_972,this.shape_973,this.shape_974,this.shape_975,this.shape_976,this.shape_977,this.shape_978,this.shape_979,this.shape_980,this.shape_981,this.shape_982,this.shape_983,this.shape_984,this.shape_985,this.shape_986,this.shape_987,this.shape_988,this.shape_989,this.shape_990,this.shape_991,this.shape_992,this.shape_993,this.shape_994,this.shape_995,this.shape_996,this.shape_997,this.shape_998,this.shape_999,this.shape_1000,this.shape_1001,this.shape_1002,this.shape_1003,this.shape_1004,this.shape_1005,this.shape_1006,this.shape_1007,this.shape_1008,this.shape_1009,this.shape_1010,this.shape_1011,this.shape_1012,this.shape_1013,this.shape_1014,this.shape_1015,this.shape_1016,this.shape_1017,this.shape_1018,this.shape_1019,this.shape_1020,this.shape_1021,this.shape_1022,this.shape_1023,this.shape_1024,this.shape_1025,this.shape_1026,this.shape_1027,this.shape_1028,this.shape_1029,this.shape_1030,this.shape_1031,this.shape_1032,this.shape_1033,this.shape_1034,this.shape_1035,this.shape_1036,this.shape_1037,this.shape_1038,this.shape_1039,this.shape_1040,this.shape_1041,this.shape_1042,this.shape_1043,this.shape_1044,this.shape_1045,this.shape_1046,this.shape_1047,this.shape_1048,this.shape_1049,this.shape_1050,this.shape_1051,this.shape_1052,this.shape_1053,this.shape_1054,this.shape_1055,this.shape_1056,this.shape_1057,this.shape_1058,this.shape_1059,this.shape_1060,this.shape_1061,this.shape_1062,this.shape_1063,this.shape_1064,this.shape_1065,this.shape_1066,this.shape_1067,this.shape_1068,this.shape_1069,this.shape_1070,this.shape_1071,this.shape_1072,this.shape_1073,this.shape_1074,this.shape_1075,this.shape_1076,this.shape_1077,this.shape_1078,this.shape_1079,this.shape_1080,this.shape_1081,this.shape_1082,this.shape_1083,this.shape_1084,this.shape_1085,this.shape_1086,this.shape_1087,this.shape_1088,this.shape_1089,this.shape_1090,this.shape_1091,this.shape_1092,this.shape_1093,this.shape_1094,this.shape_1095,this.shape_1096,this.shape_1097,this.shape_1098,this.shape_1099,this.shape_1100,this.shape_1101,this.shape_1102,this.shape_1103,this.shape_1104,this.shape_1105,this.shape_1106,this.shape_1107,this.shape_1108,this.shape_1109,this.shape_1110,this.shape_1111,this.shape_1112,this.shape_1113,this.shape_1114,this.shape_1115];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},29).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944}]},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(29).to({_off:false},0).wait(1).to({regX:110.3,regY:112.6,x:815.5,y:517.7},0).wait(1).to({x:814.9,y:483.7},0).wait(1).to({x:814.3,y:449.6},0).wait(1).to({x:813.8,y:415.6},0).wait(1).to({x:813.2,y:381.6},0).wait(1).to({x:812.6,y:347.6},0).wait(1).to({x:812,y:313.6},0).wait(1).to({x:812.5,y:318.3},0).wait(1).to({x:813.1,y:323.1},0).to({_off:true},1).wait(55));

	// train-station-mask (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_27 = new cjs.Graphics().p("AlTObIgComIiyhfIAArZIH+osIH9HqIAUHbIkPHwIhyHGIlnBkg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_17_graphics_27,x:505.6,y:333.3}).wait(8).to({graphics:null,x:0,y:0}).wait(59));

	// train-stations
	this.instance_17 = new lib.Symbol12();
	this.instance_17.parent = this;
	this.instance_17.setTransform(503.4,515.8,1,1,0,0,0,37.6,76.5);
	this.instance_17._off = true;

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1116.setTransform(493.6,393.6);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1117.setTransform(493.6,393.8);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_1118.setTransform(504.1,295.3);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_1119.setTransform(504.1,297.6);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_1120.setTransform(504.1,299.8);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("#292929").ss(0.3).p("AiKAnIEVhM");
	this.shape_1121.setTransform(504.1,302);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1122.setTransform(493.6,396.3);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1123.setTransform(493.6,390.8);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1124.setTransform(493.6,388);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1125.setTransform(493.6,385.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1126.setTransform(493.6,382.5);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1127.setTransform(493.6,379.7);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1128.setTransform(493.6,376.9);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1129.setTransform(493.6,374.1);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1130.setTransform(493.6,371.3);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1131.setTransform(493.6,368.6);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1132.setTransform(493.6,365.8);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1133.setTransform(493.6,363);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1134.setTransform(493.6,360.2);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1135.setTransform(493.6,357.5);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1136.setTransform(493.6,354.7);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1137.setTransform(493.6,351.9);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1138.setTransform(493.6,349.1);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1139.setTransform(493.6,346.3);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1140.setTransform(493.6,343.6);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1141.setTransform(493.6,340.8);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1142.setTransform(493.6,338);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1143.setTransform(493.6,335.2);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1144.setTransform(493.6,332.4);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1145.setTransform(493.6,329.7);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1146.setTransform(493.6,326.9);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1147.setTransform(493.6,324.1);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1148.setTransform(493.6,321.3);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1149.setTransform(493.6,318.6);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1150.setTransform(493.6,315.8);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1151.setTransform(493.6,313);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1152.setTransform(493.6,310.2);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_1153.setTransform(493.6,307.4);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#292929").ss(0.3).p("AgNAEIAbgH");
	this.shape_1154.setTransform(465.7,290.7);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f().s("#292929").ss(0.3).p("AAhADIhBgF");
	this.shape_1155.setTransform(514.7,289.3);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#292929").ss(0.3).p("ACJA3IAAhnIkVBF");
	this.shape_1156.setTransform(504.3,294.4);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f().s("#292929").ss(0.3).p("AiBDFIAAr0IEDA3IgBQv");
	this.shape_1157.setTransform(477.3,347.1);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#292929").ss(0.3).p("AAAgvIAABf");
	this.shape_1158.setTransform(511.6,286.3);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f().s("#292929").ss(0.3).p("AAAg1IAABr");
	this.shape_1159.setTransform(488.8,291);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#292929").ss(0.3).p("AAAgpIAABT");
	this.shape_1160.setTransform(466.9,287.2);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f().s("#292929").ss(0.3).p("AjdADIDaAaIDlgoIi9gRg");
	this.shape_1161.setTransform(491,282.7,1,1,0,0,0,2,0);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#292929").ss(0.3).p("AgCjdIAFG6");
	this.shape_1162.setTransform(539.2,325.9);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f().s("#292929").ss(0.3).p("AgJgtIjLA1ICdAnIEGg0g");
	this.shape_1163.setTransform(518.2,304.4);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#292929").ss(0.3).p("AAAluIAALd");
	this.shape_1164.setTransform(528.9,342.2);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f().s("#292929").ss(0.3).p("AAAl1IAALq");
	this.shape_1165.setTransform(527.4,343.3);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#292929").ss(0.3).p("AAAmHIAAMP");
	this.shape_1166.setTransform(523.2,346.3);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f().s("#292929").ss(0.3).p("AAAmOIAAMd");
	this.shape_1167.setTransform(521.7,347.5);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#292929").ss(0.3).p("AAAnUIAAOp");
	this.shape_1168.setTransform(501.3,353.2);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().s("#292929").ss(0.3).p("AAAnUIAAOp");
	this.shape_1169.setTransform(502.9,353.8);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#292929").ss(0.3).p("AAAnYIAAOx");
	this.shape_1170.setTransform(507.1,355.2);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f().s("#292929").ss(0.3).p("AAAnYIAAOx");
	this.shape_1171.setTransform(508.6,355.8);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1172.setTransform(506.8,407.5);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1173.setTransform(505.9,407.2);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1174.setTransform(505.1,406.7);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1175.setTransform(504.2,406.3);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1176.setTransform(501.6,405.3);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1177.setTransform(500.8,404.9);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1178.setTransform(499.9,404.4);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_1179.setTransform(499.1,404.1);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#292929").ss(0.3).p("AA5AZIhxgx");
	this.shape_1180.setTransform(502.6,407.4);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f().s("#292929").ss(0.3).p("AhfgPIAygMICMA4");
	this.shape_1181.setTransform(503.2,401.8);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#292929").ss(0.3).p("AAWgIIgrAR");
	this.shape_1182.setTransform(510.6,405.6);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#292929").ss(0.3).p("ABKBFIAAhDIh1gxIgdgNIACA8IAegNIgDgi");
	this.shape_1183.setTransform(501,406.3);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#292929").ss(0.3).p("AggoFIAAQEIBFgX");
	this.shape_1184.setTransform(515.9,360.8);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#292929").ss(0.3).p("AAAnWIAAOt");
	this.shape_1185.setTransform(496.9,352.3);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_1186.setTransform(478.8,403.2);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_1187.setTransform(479.7,403.7);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_1188.setTransform(499.3,413);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_1189.setTransform(500.3,413.5);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#292929").ss(0.3).p("AgdgNIA6gYIgZBJg");
	this.shape_1190.setTransform(491.1,405.3,1,1,0,0,0,0.2,0);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#292929").ss(0.3).p("AgUAOIAlgOQAFgFAAgJIgnAOg");
	this.shape_1191.setTransform(504.1,422,1,1,0,0,0,0.1,-0.2);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#292929").ss(0.3).p("AAWALIgrgV");
	this.shape_1192.setTransform(487.3,416.4);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#292929").ss(0.3).p("AANAGIgZgM");
	this.shape_1193.setTransform(482.5,414.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#292929").ss(0.3).p("AAQAcIgcgOIAAglIAcAO");
	this.shape_1194.setTransform(478.5,410.1);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#292929").ss(0.3).p("AgMgFIAZAL");
	this.shape_1195.setTransform(482.5,410.3);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#292929").ss(0.3).p("AgXgaIAsAWIAAAj");
	this.shape_1196.setTransform(487.5,414.3);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#292929").ss(0.3).p("AAAAiIAAhC");
	this.shape_1197.setTransform(482.4,412);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#292929").ss(0.3).p("AgMgnIAABAIAZAOIAAhCg");
	this.shape_1198.setTransform(482.4,412.4,1,1,0,0,0,0,0.2);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_1199.setTransform(484.7,401.5);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#292929").ss(0.3).p("ABJgIIgbgFIh2Ac");
	this.shape_1200.setTransform(480.4,396.3);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#292929").ss(0.3).p("AjnhqIHQDU");
	this.shape_1201.setTransform(496.4,407.7);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#292929").ss(0.3).p("ABBgUIiAAp");
	this.shape_1202.setTransform(513.2,414.2);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#292929").ss(0.3).p("AgYgMIAxAZ");
	this.shape_1203.setTransform(504.2,426.1);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#292929").ss(0.3).p("AgZgNIAzAb");
	this.shape_1204.setTransform(507.8,424.8);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#292929").ss(0.3).p("AAHgOIAWANIglAQIgVgPg");
	this.shape_1205.setTransform(512.5,421.7);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#292929").ss(0.3).p("AgXgHIASgHIAWANIglAQIgEgD");
	this.shape_1206.setTransform(509.6,419);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#292929").ss(0.3).p("AgIAMIgMgIIAkgOIAMAH");
	this.shape_1207.setTransform(496.3,431.6);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_1208.setTransform(492.7,429.2);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_1209.setTransform(488.1,426.6);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgPg");
	this.shape_1210.setTransform(483.9,423.9);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#292929").ss(0.3).p("AgegfIBFAkIhZAb");
	this.shape_1211.setTransform(479.3,420.3);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABX");
	this.shape_1212.setTransform(485.1,413.6);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABY");
	this.shape_1213.setTransform(480.1,411.1);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#292929").ss(0.3).p("Ah4g5IDxBz");
	this.shape_1214.setTransform(488.5,419.5);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#292929").ss(0.3).p("AAEAyQANgPgCgcQgBgjgfgV");
	this.shape_1215.setTransform(505.7,417.9);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#292929").ss(0.3).p("AAPghIgpAQQASASAAAfIAmgPQABgHgBgKQgDgSgMgPg");
	this.shape_1216.setTransform(503.1,418.1);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#292929").ss(0.3).p("AgQgaQAkAPgCAmIgjgPg");
	this.shape_1217.setTransform(498.2,419.3,1,1,0,0,0,0,0.1);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#292929").ss(0.3).p("AAsAYIg4AXQAJgZgDgWQgFgigggQ");
	this.shape_1218.setTransform(501.9,420.5);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#292929").ss(0.3).p("AiOgiIDSBrIBBgZIj8h5");
	this.shape_1219.setTransform(490.7,408.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#292929").ss(0.3).p("ABGAyIgBhdIiOAl");
	this.shape_1220.setTransform(480.8,399.8);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#292929").ss(0.3).p("AA+gxIAAg3IhgAaIAACvIgfAJ");
	this.shape_1221.setTransform(479.8,409.2);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_1222.setTransform(510.5,412.6);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#292929").ss(0.3).p("AjyhvIHlDf");
	this.shape_1223.setTransform(495.4,402);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#292929").ss(0.3).p("AgrgvIgdgNIACA8IAegNgABKBFIAAhDIh1gx");
	this.shape_1224.setTransform(501,406.3);

	var maskedShapeInstanceList = [this.instance_17,this.shape_1116,this.shape_1117,this.shape_1118,this.shape_1119,this.shape_1120,this.shape_1121,this.shape_1122,this.shape_1123,this.shape_1124,this.shape_1125,this.shape_1126,this.shape_1127,this.shape_1128,this.shape_1129,this.shape_1130,this.shape_1131,this.shape_1132,this.shape_1133,this.shape_1134,this.shape_1135,this.shape_1136,this.shape_1137,this.shape_1138,this.shape_1139,this.shape_1140,this.shape_1141,this.shape_1142,this.shape_1143,this.shape_1144,this.shape_1145,this.shape_1146,this.shape_1147,this.shape_1148,this.shape_1149,this.shape_1150,this.shape_1151,this.shape_1152,this.shape_1153,this.shape_1154,this.shape_1155,this.shape_1156,this.shape_1157,this.shape_1158,this.shape_1159,this.shape_1160,this.shape_1161,this.shape_1162,this.shape_1163,this.shape_1164,this.shape_1165,this.shape_1166,this.shape_1167,this.shape_1168,this.shape_1169,this.shape_1170,this.shape_1171,this.shape_1172,this.shape_1173,this.shape_1174,this.shape_1175,this.shape_1176,this.shape_1177,this.shape_1178,this.shape_1179,this.shape_1180,this.shape_1181,this.shape_1182,this.shape_1183,this.shape_1184,this.shape_1185,this.shape_1186,this.shape_1187,this.shape_1188,this.shape_1189,this.shape_1190,this.shape_1191,this.shape_1192,this.shape_1193,this.shape_1194,this.shape_1195,this.shape_1196,this.shape_1197,this.shape_1198,this.shape_1199,this.shape_1200,this.shape_1201,this.shape_1202,this.shape_1203,this.shape_1204,this.shape_1205,this.shape_1206,this.shape_1207,this.shape_1208,this.shape_1209,this.shape_1210,this.shape_1211,this.shape_1212,this.shape_1213,this.shape_1214,this.shape_1215,this.shape_1216,this.shape_1217,this.shape_1218,this.shape_1219,this.shape_1220,this.shape_1221,this.shape_1222,this.shape_1223,this.shape_1224];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_17;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},27).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116}]},1).to({state:[{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1224},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116}]},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(27).to({_off:false},0).wait(1).to({regX:37.9,x:502.7,y:455.1},0).wait(1).to({x:502,y:405.4},0).wait(1).to({x:501.4,y:366.8},0).wait(1).to({x:501.5,y:352.4},0).wait(1).to({x:502,y:355.7},0).wait(1).to({x:502.2,y:356.8},0).to({_off:true},1).wait(60));

	// normal-mask (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_29 = new cjs.Graphics().p("ADIFdIm+gpIAFCOIlIjsIAcptIRXiLIh1RFg");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_18_graphics_29,x:264.5,y:254.7}).wait(7).to({graphics:null,x:0,y:0}).wait(58));

	// normal
	this.instance_18 = new lib.Symbol11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(257.6,345.8,1,1,0,0,0,38.6,43.7);
	this.instance_18._off = true;

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#292929").ss(0.3).p("AC0F+IAAp/Ilqh3");
	this.shape_1225.setTransform(278.2,263.9);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#292929").ss(0.3).p("AidhZIE4BrIAABN");
	this.shape_1226.setTransform(277.1,227.1);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#292929").ss(0.3).p("AiGhEIEKBeIAAAw");
	this.shape_1227.setTransform(275.9,220.4);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#292929").ss(0.3).p("AjLEvIAAnpIGXiAIAAJ8");
	this.shape_1228.setTransform(239.4,257.7);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#292929").ss(0.3).p("Ai4BkIAAg+IFxiBIAABW");
	this.shape_1229.setTransform(242.8,227.3);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#292929").ss(0.3).p("ACugbIgCgzIlYB9IAAAn");
	this.shape_1230.setTransform(245.2,221.3);

	var maskedShapeInstanceList = [this.instance_18,this.shape_1225,this.shape_1226,this.shape_1227,this.shape_1228,this.shape_1229,this.shape_1230];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_18;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},29).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225}]},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(29).to({_off:false},0).wait(1).to({regY:43.9,y:322.7},0).wait(1).to({y:299.4},0).wait(1).to({y:276.1},0).wait(1).to({y:252.8},0).wait(1).to({y:255.1},0).wait(1).to({y:257.4},0).to({_off:true},1).wait(58));

	// boring-mask (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_49 = new cjs.Graphics().p("Am0H2IAixfIBNiVIK+AxIA8KjIl8BjIAKLGg");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_19_graphics_49,x:255.3,y:135.3}).wait(8).to({graphics:null,x:0,y:0}).wait(37));

	// Boring
	this.instance_19 = new lib.Symbol23();
	this.instance_19.parent = this;
	this.instance_19.setTransform(254.3,282.4,1,1,0,0,0,35.3,75.6);
	this.instance_19._off = true;

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#292929").ss(0.3).p("AgiAKIBCggIAAApIgQAI");
	this.shape_1231.setTransform(239.5,195);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FFFFFF").s().p("AghAIIBDggIgBApIgPAIg");
	this.shape_1232.setTransform(239.4,195.2);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1233.setTransform(238.3,190.7);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1234.setTransform(238.3,190.7);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#292929").ss(0.3).p("AgVAIIAogTIgBAf");
	this.shape_1235.setTransform(230.3,192.8);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FFFFFF").s().p("AgTAEIAngTIAAAfg");
	this.shape_1236.setTransform(230.2,193.2);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1237.setTransform(238.3,184.5);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1238.setTransform(238.3,184.5);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#292929").ss(0.3).p("AgrAfIAAgXIBXgqIgBAoIhAAh");
	this.shape_1239.setTransform(227.8,188.9);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FFFFFF").s().p("AgrAdIAAgXIBXgqIgBAoIhAAhg");
	this.shape_1240.setTransform(227.8,189.1);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1241.setTransform(238.3,178.2);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1242.setTransform(238.3,178.2);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1243.setTransform(227.8,183.4);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1244.setTransform(227.8,183.4);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1245.setTransform(238.3,172);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1246.setTransform(238.3,172);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1247.setTransform(227.8,177.1);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1248.setTransform(227.8,177.1);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1249.setTransform(238.3,165.8);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_1250.setTransform(238.3,165.8);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1251.setTransform(227.8,170.9);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXArg");
	this.shape_1252.setTransform(227.8,170.9);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1253.setTransform(238.3,159.5);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1254.setTransform(238.3,159.5);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1255.setTransform(227.8,164.7);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1256.setTransform(227.8,164.7);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1257.setTransform(238.3,153.3);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_1258.setTransform(238.3,153.3);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1259.setTransform(227.8,158.4);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_1260.setTransform(227.8,158.4);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_1261.setTransform(238.3,147);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXAqg");
	this.shape_1262.setTransform(238.3,147);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_1263.setTransform(227.8,152.2);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_1264.setTransform(227.8,152.2);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_1265.setTransform(238.3,140.8);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_1266.setTransform(238.3,140.8);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1267.setTransform(227.8,145.9);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1268.setTransform(227.8,145.9);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1269.setTransform(238.3,134.5);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1270.setTransform(238.3,134.5);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1271.setTransform(227.8,139.6);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1272.setTransform(227.8,139.7);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1273.setTransform(238.3,128.2);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1274.setTransform(238.3,128.3);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1275.setTransform(227.8,133.4);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1276.setTransform(227.8,133.4);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1277.setTransform(286.1,213.7);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1278.setTransform(286.1,213.7);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1279.setTransform(277.4,209.6);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1280.setTransform(277.4,209.6);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1281.setTransform(268.6,205.5);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1282.setTransform(268.6,205.5);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1283.setTransform(259.8,201.4);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1284.setTransform(259.8,201.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1285.setTransform(251,197.4);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1286.setTransform(251,197.4);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1287.setTransform(286.1,207.4);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1288.setTransform(286.1,207.4);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1289.setTransform(277.4,203.3);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1290.setTransform(277.4,203.3);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1291.setTransform(268.6,199.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAog");
	this.shape_1292.setTransform(268.6,199.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1293.setTransform(259.8,195.2);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1294.setTransform(259.8,195.2);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1295.setTransform(251,191.1);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAng");
	this.shape_1296.setTransform(251,191.1);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1297.setTransform(286.1,201.2);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1298.setTransform(286.1,201.2);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1299.setTransform(277.4,197.1);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1300.setTransform(277.4,197.1);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1301.setTransform(268.6,193);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1302.setTransform(268.6,193);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1303.setTransform(259.8,188.9);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1304.setTransform(259.8,188.9);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1305.setTransform(251,184.8);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1306.setTransform(251,184.8);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1307.setTransform(286.1,194.9);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1308.setTransform(286.1,194.9);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1309.setTransform(277.4,190.8);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1310.setTransform(277.4,190.8);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1311.setTransform(268.6,186.7);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1312.setTransform(268.6,186.7);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1313.setTransform(259.8,182.6);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1314.setTransform(259.8,182.7);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1315.setTransform(251,178.6);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1316.setTransform(251,178.6);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1317.setTransform(286.1,188.6);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1318.setTransform(286.1,188.6);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1319.setTransform(277.4,184.6);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1320.setTransform(277.4,184.6);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1321.setTransform(268.6,180.5);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1322.setTransform(268.6,180.5);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1323.setTransform(259.8,176.4);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1324.setTransform(259.8,176.4);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1325.setTransform(251,172.3);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1326.setTransform(251,172.3);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1327.setTransform(286.1,182.4);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1328.setTransform(286.1,182.4);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1329.setTransform(277.4,178.3);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1330.setTransform(277.4,178.3);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1331.setTransform(268.6,174.2);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1332.setTransform(268.6,174.2);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1333.setTransform(259.8,170.1);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1334.setTransform(259.8,170.1);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1335.setTransform(251,166.1);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1336.setTransform(251,166.1);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1337.setTransform(286.1,176.1);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1338.setTransform(286.1,176.1);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1339.setTransform(277.4,172);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1340.setTransform(277.4,172);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1341.setTransform(268.6,168);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1342.setTransform(268.6,168);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1343.setTransform(259.8,163.9);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1344.setTransform(259.8,163.9);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1345.setTransform(251,159.8);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1346.setTransform(251,159.8);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1347.setTransform(286.1,169.9);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1348.setTransform(286.1,169.9);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1349.setTransform(277.4,165.8);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1350.setTransform(277.4,165.8);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1351.setTransform(268.6,161.7);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1352.setTransform(268.6,161.7);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1353.setTransform(259.8,157.6);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIgBAog");
	this.shape_1354.setTransform(259.8,157.6);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1355.setTransform(251,153.5);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1356.setTransform(251,153.5);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1357.setTransform(286.1,163.6);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1358.setTransform(286.1,163.6);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1359.setTransform(277.4,159.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1360.setTransform(277.4,159.5);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1361.setTransform(268.6,155.4);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1362.setTransform(268.6,155.4);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1363.setTransform(259.8,151.3);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1364.setTransform(259.8,151.3);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1365.setTransform(251,147.3);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1366.setTransform(251,147.3);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1367.setTransform(286.1,157.3);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1368.setTransform(286.1,157.3);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1369.setTransform(277.4,153.2);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1370.setTransform(277.4,153.2);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1371.setTransform(268.6,149.2);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1372.setTransform(268.6,149.2);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1373.setTransform(259.8,145.1);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1374.setTransform(259.8,145.1);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1375.setTransform(251,141);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1376.setTransform(251,141);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1377.setTransform(286.1,151.1);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1378.setTransform(286.1,151.1);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1379.setTransform(277.4,147);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1380.setTransform(277.4,147);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1381.setTransform(268.6,142.9);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1382.setTransform(268.6,142.9);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1383.setTransform(259.8,138.8);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1384.setTransform(259.8,138.8);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1385.setTransform(251,134.7);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1386.setTransform(251,134.7);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1387.setTransform(286.1,144.8);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1388.setTransform(286.1,144.8);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1389.setTransform(277.4,140.7);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1390.setTransform(277.4,140.7);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1391.setTransform(268.6,136.6);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1392.setTransform(268.6,136.6);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1393.setTransform(259.8,132.5);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1394.setTransform(259.8,132.6);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1395.setTransform(251,128.5);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1396.setTransform(251,128.5);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1397.setTransform(286.1,138.5);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1398.setTransform(286.1,138.5);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1399.setTransform(277.4,134.5);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAog");
	this.shape_1400.setTransform(277.4,134.5);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1401.setTransform(268.6,130.4);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1402.setTransform(268.6,130.4);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1403.setTransform(259.8,126.3);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1404.setTransform(259.8,126.3);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1405.setTransform(251,122.2);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1406.setTransform(251,122.2);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1407.setTransform(286.1,132.3);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1408.setTransform(286.1,132.3);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1409.setTransform(277.4,128.2);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1410.setTransform(277.4,128.2);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1411.setTransform(268.6,124.1);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1412.setTransform(268.6,124.1);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1413.setTransform(259.8,120);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1414.setTransform(259.8,120);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1415.setTransform(251,116);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAng");
	this.shape_1416.setTransform(251,116);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1417.setTransform(286.1,126);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1418.setTransform(286.1,126);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1419.setTransform(277.4,121.9);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1420.setTransform(277.4,121.9);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1421.setTransform(268.6,117.9);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1422.setTransform(268.6,117.9);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1423.setTransform(259.8,113.8);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1424.setTransform(259.8,113.8);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1425.setTransform(251,109.7);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1426.setTransform(251,109.7);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1427.setTransform(286.1,119.8);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1428.setTransform(286.1,119.8);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1429.setTransform(277.4,115.7);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1430.setTransform(277.4,115.7);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1431.setTransform(268.6,111.6);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1432.setTransform(268.6,111.6);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1433.setTransform(259.8,107.5);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1434.setTransform(259.8,107.5);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1435.setTransform(251,103.4);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1436.setTransform(251,103.4);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1437.setTransform(286.1,113.5);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1438.setTransform(286.1,113.5);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1439.setTransform(277.4,109.4);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1440.setTransform(277.4,109.4);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1441.setTransform(268.6,105.3);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1442.setTransform(268.6,105.3);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1443.setTransform(259.8,101.2);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1444.setTransform(259.8,101.2);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1445.setTransform(251,97.2);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1446.setTransform(251,97.2);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1447.setTransform(286.1,107.2);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1448.setTransform(286.1,107.2);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1449.setTransform(277.4,103.1);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1450.setTransform(277.4,103.1);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1451.setTransform(268.6,99.1);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1452.setTransform(268.6,99.1);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1453.setTransform(259.8,95);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1454.setTransform(259.8,95);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1455.setTransform(251,90.9);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1456.setTransform(251,90.9);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1457.setTransform(286.1,101);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1458.setTransform(286.1,101);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1459.setTransform(277.4,96.9);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1460.setTransform(277.4,96.9);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1461.setTransform(268.6,92.8);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1462.setTransform(268.6,92.8);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1463.setTransform(259.8,88.7);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1464.setTransform(259.8,88.7);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1465.setTransform(251,84.6);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1466.setTransform(251,84.6);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1467.setTransform(238.3,122);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1468.setTransform(238.3,122);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1469.setTransform(227.8,127.2);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1470.setTransform(227.8,127.2);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1471.setTransform(238.3,115.8);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1472.setTransform(238.3,115.8);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1473.setTransform(227.8,120.9);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1474.setTransform(227.8,120.9);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1475.setTransform(238.3,109.5);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1476.setTransform(238.3,109.5);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1477.setTransform(227.8,114.7);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1478.setTransform(227.8,114.7);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1479.setTransform(238.3,103.3);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1480.setTransform(238.3,103.3);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1481.setTransform(227.8,108.4);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1482.setTransform(227.8,108.4);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1483.setTransform(238.3,97.1);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXAqg");
	this.shape_1484.setTransform(238.3,97.1);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1485.setTransform(227.8,102.2);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1486.setTransform(227.8,102.2);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1487.setTransform(238.3,90.8);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_1488.setTransform(238.3,90.8);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1489.setTransform(227.8,96);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1490.setTransform(227.8,96);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1491.setTransform(238.3,84.6);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1492.setTransform(238.3,84.6);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1493.setTransform(227.8,89.7);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_1494.setTransform(227.8,89.7);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#292929").ss(0.3).p("AlgJ0IAAxfIDviCIHSDrIAAGT");
	this.shape_1495.setTransform(256.3,128.5);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#FFFFFF").s().p("AlgnuIDviCIHSDrIAAGTIrBJjg");
	this.shape_1496.setTransform(256.3,128.8);

	var maskedShapeInstanceList = [this.instance_19,this.shape_1231,this.shape_1232,this.shape_1233,this.shape_1234,this.shape_1235,this.shape_1236,this.shape_1237,this.shape_1238,this.shape_1239,this.shape_1240,this.shape_1241,this.shape_1242,this.shape_1243,this.shape_1244,this.shape_1245,this.shape_1246,this.shape_1247,this.shape_1248,this.shape_1249,this.shape_1250,this.shape_1251,this.shape_1252,this.shape_1253,this.shape_1254,this.shape_1255,this.shape_1256,this.shape_1257,this.shape_1258,this.shape_1259,this.shape_1260,this.shape_1261,this.shape_1262,this.shape_1263,this.shape_1264,this.shape_1265,this.shape_1266,this.shape_1267,this.shape_1268,this.shape_1269,this.shape_1270,this.shape_1271,this.shape_1272,this.shape_1273,this.shape_1274,this.shape_1275,this.shape_1276,this.shape_1277,this.shape_1278,this.shape_1279,this.shape_1280,this.shape_1281,this.shape_1282,this.shape_1283,this.shape_1284,this.shape_1285,this.shape_1286,this.shape_1287,this.shape_1288,this.shape_1289,this.shape_1290,this.shape_1291,this.shape_1292,this.shape_1293,this.shape_1294,this.shape_1295,this.shape_1296,this.shape_1297,this.shape_1298,this.shape_1299,this.shape_1300,this.shape_1301,this.shape_1302,this.shape_1303,this.shape_1304,this.shape_1305,this.shape_1306,this.shape_1307,this.shape_1308,this.shape_1309,this.shape_1310,this.shape_1311,this.shape_1312,this.shape_1313,this.shape_1314,this.shape_1315,this.shape_1316,this.shape_1317,this.shape_1318,this.shape_1319,this.shape_1320,this.shape_1321,this.shape_1322,this.shape_1323,this.shape_1324,this.shape_1325,this.shape_1326,this.shape_1327,this.shape_1328,this.shape_1329,this.shape_1330,this.shape_1331,this.shape_1332,this.shape_1333,this.shape_1334,this.shape_1335,this.shape_1336,this.shape_1337,this.shape_1338,this.shape_1339,this.shape_1340,this.shape_1341,this.shape_1342,this.shape_1343,this.shape_1344,this.shape_1345,this.shape_1346,this.shape_1347,this.shape_1348,this.shape_1349,this.shape_1350,this.shape_1351,this.shape_1352,this.shape_1353,this.shape_1354,this.shape_1355,this.shape_1356,this.shape_1357,this.shape_1358,this.shape_1359,this.shape_1360,this.shape_1361,this.shape_1362,this.shape_1363,this.shape_1364,this.shape_1365,this.shape_1366,this.shape_1367,this.shape_1368,this.shape_1369,this.shape_1370,this.shape_1371,this.shape_1372,this.shape_1373,this.shape_1374,this.shape_1375,this.shape_1376,this.shape_1377,this.shape_1378,this.shape_1379,this.shape_1380,this.shape_1381,this.shape_1382,this.shape_1383,this.shape_1384,this.shape_1385,this.shape_1386,this.shape_1387,this.shape_1388,this.shape_1389,this.shape_1390,this.shape_1391,this.shape_1392,this.shape_1393,this.shape_1394,this.shape_1395,this.shape_1396,this.shape_1397,this.shape_1398,this.shape_1399,this.shape_1400,this.shape_1401,this.shape_1402,this.shape_1403,this.shape_1404,this.shape_1405,this.shape_1406,this.shape_1407,this.shape_1408,this.shape_1409,this.shape_1410,this.shape_1411,this.shape_1412,this.shape_1413,this.shape_1414,this.shape_1415,this.shape_1416,this.shape_1417,this.shape_1418,this.shape_1419,this.shape_1420,this.shape_1421,this.shape_1422,this.shape_1423,this.shape_1424,this.shape_1425,this.shape_1426,this.shape_1427,this.shape_1428,this.shape_1429,this.shape_1430,this.shape_1431,this.shape_1432,this.shape_1433,this.shape_1434,this.shape_1435,this.shape_1436,this.shape_1437,this.shape_1438,this.shape_1439,this.shape_1440,this.shape_1441,this.shape_1442,this.shape_1443,this.shape_1444,this.shape_1445,this.shape_1446,this.shape_1447,this.shape_1448,this.shape_1449,this.shape_1450,this.shape_1451,this.shape_1452,this.shape_1453,this.shape_1454,this.shape_1455,this.shape_1456,this.shape_1457,this.shape_1458,this.shape_1459,this.shape_1460,this.shape_1461,this.shape_1462,this.shape_1463,this.shape_1464,this.shape_1465,this.shape_1466,this.shape_1467,this.shape_1468,this.shape_1469,this.shape_1470,this.shape_1471,this.shape_1472,this.shape_1473,this.shape_1474,this.shape_1475,this.shape_1476,this.shape_1477,this.shape_1478,this.shape_1479,this.shape_1480,this.shape_1481,this.shape_1482,this.shape_1483,this.shape_1484,this.shape_1485,this.shape_1486,this.shape_1487,this.shape_1488,this.shape_1489,this.shape_1490,this.shape_1491,this.shape_1492,this.shape_1493,this.shape_1494,this.shape_1495,this.shape_1496];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_19;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},49).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231}]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(49).to({_off:false},0).wait(1).to({regY:75.7,x:254.6,y:257.9},0).wait(1).to({x:255,y:233.2},0).wait(1).to({x:255.3,y:208.6},0).wait(1).to({x:255.6,y:184},0).wait(1).to({x:256,y:159.3},0).wait(1).to({x:256.3,y:134.7},0).wait(1).to({x:256.1,y:138.7},0).wait(1).to({x:255.8,y:142.7},0).to({_off:true},1).wait(36));

	// Layer 17 (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_25 = new cjs.Graphics().p("AxSHrIlSh/IEmikIgjhkIgPoMIBBibIZEksIPQHFIsmRSI6tDIg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_20_graphics_25,x:847.3,y:390.1}).wait(12).to({graphics:null,x:0,y:0}).wait(57));

	// Layer 16
	this.instance_20 = new lib.Symbol10();
	this.instance_20.parent = this;
	this.instance_20.setTransform(561,398.9,1,1,0,0,0,111.9,75);
	this.instance_20._off = true;

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#292929").ss(0.3).p("ACchJIk3CT");
	this.shape_1497.setTransform(740,430.4);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#292929").ss(0.3).p("AAlAXIgbgeIgwgN");
	this.shape_1498.setTransform(774.7,411.5);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#292929").ss(0.3).p("ADGhbImICzIAAg9");
	this.shape_1499.setTransform(828.3,460.2);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#FFFFFF").s().p("AjDAdIGHh2ImHCzg");
	this.shape_1500.setTransform(828.4,460.1);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_1501.setTransform(847,342.3);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f().s("#292929").ss(0.3).p("AAMAXIAwgeIhGgOIg7Ad");
	this.shape_1502.setTransform(841,339);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#292929").ss(0.3).p("AApAaIAAgzIhRgPIAABX");
	this.shape_1503.setTransform(838.1,343.9);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f().s("#292929").ss(0.3).p("AAYA0IgtgcIAAhP");
	this.shape_1504.setTransform(813.1,340.4);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#292929").ss(0.3).p("AAHAtIgvAIIAAhaIBRgPIAAA9");
	this.shape_1505.setTransform(819.7,340.3);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAEgOgKgL");
	this.shape_1506.setTransform(827.8,345.2);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_1507.setTransform(822.4,345.6);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_1508.setTransform(825.3,345.9);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f().s("#292929").ss(0.3).p("AgDgMIAHAZ");
	this.shape_1509.setTransform(828.1,348.5);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f().s("#292929").ss(0.3).p("AgFARIAKgh");
	this.shape_1510.setTransform(822.6,349.5);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f().s("#292929").ss(0.3).p("AAtgEQABANgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQASgCAOAJQAOAIACAPg");
	this.shape_1511.setTransform(824.9,344.4);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f().s("#292929").ss(0.3).p("AAjgEQABAFgKAGQgJAFgPACQgNADgLgDQgKgDgBgGQgBgFAJgGQAKgFAOgCQANgCALACQALADABAGg");
	this.shape_1512.setTransform(824.8,342.5);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f().s("#292929").ss(0.3).p("AgEAUQAEgFACgIQAEgOgKgL");
	this.shape_1513.setTransform(795.4,348.8);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_1514.setTransform(790,349.2);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f().s("#292929").ss(0.3).p("AgEAUQAEgFACgIQAFgOgLgL");
	this.shape_1515.setTransform(792.9,349.6);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngZIALgf");
	this.shape_1516.setTransform(792.8,353.4);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f().s("#292929").ss(0.3).p("AAtgEQABANgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAPAJQAOAIACAPg");
	this.shape_1517.setTransform(792.5,348);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAGQgKAFgOACQgOACgKgCQgLgDgBgGQgBgFAKgGQAJgFAOgDQAOgCALADQAKADABAGg");
	this.shape_1518.setTransform(792.3,346.2);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f().s("#292929").ss(0.3).p("AnVgkIARgCIBrBmIITiAIEHAAIASAN");
	this.shape_1519.setTransform(824.3,352.7);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#292929").ss(0.3).p("ABWBgIirjA");
	this.shape_1520.setTransform(781,441.1);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_1521.setTransform(786.5,432.9);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_1522.setTransform(786.5,421.1);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f().s("#292929").ss(0.3).p("AAfAjIg9hF");
	this.shape_1523.setTransform(786.5,406.1);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_1524.setTransform(786.5,392);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hG");
	this.shape_1525.setTransform(786.5,380);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().s("#292929").ss(0.3).p("AAAjuIAAHd");
	this.shape_1526.setTransform(907.2,363.7);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f().s("#292929").ss(0.3).p("AAAmaIAAM2");
	this.shape_1527.setTransform(896.6,383.1);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABl");
	this.shape_1528.setTransform(896.6,441.2);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f().s("#292929").ss(0.3).p("AAAkxIAAJj");
	this.shape_1529.setTransform(886.1,386.2);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().s("#292929").ss(0.3).p("AAAhPIAACe");
	this.shape_1530.setTransform(886.1,439);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f().s("#292929").ss(0.3).p("AAAmRIAAMj");
	this.shape_1531.setTransform(875.5,408);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().s("#292929").ss(0.3).p("AAAn5IAAPz");
	this.shape_1532.setTransform(864.9,398.5);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f().s("#292929").ss(0.3).p("AAAoAIAAQB");
	this.shape_1533.setTransform(854.3,398.8);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f().s("#292929").ss(0.3).p("AAAoFIAAQL");
	this.shape_1534.setTransform(843.8,399.3);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f().s("#292929").ss(0.3).p("AAAn+IAAP9");
	this.shape_1535.setTransform(833.2,401.4);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#292929").ss(0.3).p("AAAn9IAAP7");
	this.shape_1536.setTransform(822.6,404);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f().s("#292929").ss(0.3).p("AAAoQIAAQh");
	this.shape_1537.setTransform(812,408.3);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#292929").ss(0.3).p("AAAohIAARD");
	this.shape_1538.setTransform(801.4,412.5);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f().s("#292929").ss(0.3).p("AG3g7IkhAJIoKBtIg+hG");
	this.shape_1539.setTransform(827.3,364.5);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#292929").ss(0.3).p("AD2gkInrBJ");
	this.shape_1540.setTransform(910.7,351.9);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f().s("#292929").ss(0.3).p("AmYBNIMxiZ");
	this.shape_1541.setTransform(830.7,375.7);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().s("#292929").ss(0.3).p("AjbASIG4gk");
	this.shape_1542.setTransform(903,364.6);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f().s("#292929").ss(0.3).p("AJ1hiIzpDF");
	this.shape_1543.setTransform(852.5,385.9);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#292929").ss(0.3).p("Ao7BbIR2i2");
	this.shape_1544.setTransform(847.1,400.8);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f().s("#292929").ss(0.3).p("AIihgQgEAAkFAaQkHAagHACQgiAJj9A9QjUAzg9AR");
	this.shape_1545.setTransform(844.7,415.3);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f().s("#292929").ss(0.3).p("Am1BgIHUiZIGZgl");
	this.shape_1546.setTransform(833.5,427.1);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f().s("#292929").ss(0.3).p("AhJAHICTgN");
	this.shape_1547.setTransform(893.6,416.1);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f().s("#292929").ss(0.3).p("AnUB1IGki8IIHgt");
	this.shape_1548.setTransform(836.6,439.3);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f().s("#292929").ss(0.3).p("AgTACIAngD");
	this.shape_1549.setTransform(901.5,426.1);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f().s("#292929").ss(0.3).p("ApBB/IGGjIIL/g0");
	this.shape_1550.setTransform(847.4,449.4);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f().s("#292929").ss(0.3).p("AhigKIDFAV");
	this.shape_1551.setTransform(745.3,443.7);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f().s("#292929").ss(0.3).p("ABWALIirgV");
	this.shape_1552.setTransform(746.5,470.5);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f().s("#292929").ss(0.3).p("ApWgtIIpA9IKEAd");
	this.shape_1553.setTransform(875.2,331.4);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f().s("#292929").ss(0.3).p("AieAjIE+hF");
	this.shape_1554.setTransform(779,345);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f().s("#292929").ss(0.3).p("ABnhcIAAAdIjMCSIgBgZ");
	this.shape_1555.setTransform(805,333.2);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f().s("#292929").ss(0.3).p("AjpBRIFNidIAAASICIAJ");
	this.shape_1556.setTransform(745.7,428.9);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f().s("#292929").ss(0.3).p("AgkAAIBJAA");
	this.shape_1557.setTransform(874.8,365.7);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f().s("#292929").ss(0.3).p("ABIh9IgbAKIhvDeIARAU");
	this.shape_1558.setTransform(885.2,355.1);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f().s("#292929").ss(0.3).p("AgZAuIAzhb");
	this.shape_1559.setTransform(896.7,431);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f().s("#292929").ss(0.3).p("AgiA0IBFhn");
	this.shape_1560.setTransform(891.3,428.3);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f().s("#292929").ss(0.3).p("AgcAtIA6hZ");
	this.shape_1561.setTransform(887.2,424.2);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f().s("#292929").ss(0.3).p("AgXAlIAvhI");
	this.shape_1562.setTransform(883.9,420.5);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f().s("#292929").ss(0.3).p("AgTAcIAng3");
	this.shape_1563.setTransform(880.9,417);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f().s("#292929").ss(0.3).p("ACBB+IgVhiIjOiYIgeA0IB0Cxg");
	this.shape_1564.setTransform(889.7,424.3);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f().s("#292929").ss(0.3).p("AsJK4IFpjPIMshQIhZnAIHVqS");
	this.shape_1565.setTransform(867.6,404.2);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f().s("#292929").ss(0.3).p("AA6j9IgEAUIAgBBIisCOIAAEMICqi2");
	this.shape_1566.setTransform(763.9,447.4);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f().s("#292929").ss(0.3).p("ACvoDIAARvIisjMIAAjlIgbhVIiNgIIApiIIgzpO");
	this.shape_1567.setTransform(772.2,411.8);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f().s("#292929").ss(0.3).p("ApeCWIh8h2IjjgGIGQheIDOiXIIzBIILfAiIoQBRIh6D8IhbAAIAAjLIkSAAg");
	this.shape_1568.setTransform(850.5,345.9);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f().s("#292929").ss(0.3).p("AAACTIAAkl");
	this.shape_1569.setTransform(781.1,449.1);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f().s("#292929").ss(0.3).p("ABWBhIirjB");
	this.shape_1570.setTransform(781,451.7);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f().s("#292929").ss(0.3).p("AARgdIghgEIAAA/IAhAEg");
	this.shape_1571.setTransform(740.6,465.2);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f().s("#292929").ss(0.3).p("AgIAQIgvgRIBGgOIA6AQ");
	this.shape_1572.setTransform(816.5,335);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABN");
	this.shape_1573.setTransform(939,339.3);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f().s("#292929").ss(0.3).p("AAAhpIAADT");
	this.shape_1574.setTransform(928.4,347.7);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f().s("#292929").ss(0.3).p("AAAirIAAFX");
	this.shape_1575.setTransform(917.8,355.7);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f().s("#292929").ss(0.3).p("AATARIgmgh");
	this.shape_1576.setTransform(806.9,467.4);

	var maskedShapeInstanceList = [this.instance_20,this.shape_1497,this.shape_1498,this.shape_1499,this.shape_1500,this.shape_1501,this.shape_1502,this.shape_1503,this.shape_1504,this.shape_1505,this.shape_1506,this.shape_1507,this.shape_1508,this.shape_1509,this.shape_1510,this.shape_1511,this.shape_1512,this.shape_1513,this.shape_1514,this.shape_1515,this.shape_1516,this.shape_1517,this.shape_1518,this.shape_1519,this.shape_1520,this.shape_1521,this.shape_1522,this.shape_1523,this.shape_1524,this.shape_1525,this.shape_1526,this.shape_1527,this.shape_1528,this.shape_1529,this.shape_1530,this.shape_1531,this.shape_1532,this.shape_1533,this.shape_1534,this.shape_1535,this.shape_1536,this.shape_1537,this.shape_1538,this.shape_1539,this.shape_1540,this.shape_1541,this.shape_1542,this.shape_1543,this.shape_1544,this.shape_1545,this.shape_1546,this.shape_1547,this.shape_1548,this.shape_1549,this.shape_1550,this.shape_1551,this.shape_1552,this.shape_1553,this.shape_1554,this.shape_1555,this.shape_1556,this.shape_1557,this.shape_1558,this.shape_1559,this.shape_1560,this.shape_1561,this.shape_1562,this.shape_1563,this.shape_1564,this.shape_1565,this.shape_1566,this.shape_1567,this.shape_1568,this.shape_1569,this.shape_1570,this.shape_1571,this.shape_1572,this.shape_1573,this.shape_1574,this.shape_1575,this.shape_1576];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_20;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},25).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497}]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(25).to({_off:false},0).wait(1).to({regX:113.9,regY:75.4,x:652.8,y:399.3},0).wait(1).to({x:730.6},0).wait(1).to({x:796.5},0).wait(1).to({x:850.4},0).wait(1).to({x:844.1},0).wait(1).to({x:839.7},0).wait(1).to({x:837},0).wait(1).to({x:836.1},0).to({_off:true},1).wait(60));

	// pillars-mask (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_22 = new cjs.Graphics().p("AoxHIIhxmkIgtj5IiKjmIazjjIgSPzIkGClIlzh1IibBVIh2jTIiPElIjxB0g");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_21_graphics_22,x:655.1,y:381}).wait(72));

	// Pillars
	this.instance_21 = new lib.Symbol8();
	this.instance_21.parent = this;
	this.instance_21.setTransform(662.4,525.3,1,1,0,0,0,79,56.7);
	this.instance_21._off = true;

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f().s("#292929").ss(0.3).p("AB3hVIAWABIAAATIkcCY");
	this.shape_1577.setTransform(715.4,421);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f().s("#292929").ss(0.3).p("ACBhYIAdAEIAAAUIk9CZ");
	this.shape_1578.setTransform(711.4,418.8);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAf");
	this.shape_1579.setTransform(672.6,335.3);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f().s("#292929").ss(0.3).p("AghFeIApgWIAApSQABgPADgRQAGgkAPgO");
	this.shape_1580.setTransform(607.8,411.9);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f().s("#292929").ss(0.3).p("AKGgUImyguItZCF");
	this.shape_1581.setTransform(651.4,343.6);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f().s("#292929").ss(0.3).p("ADgicIHrA7Is+D+IpYipg");
	this.shape_1582.setTransform(650.1,349.4);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f().s("#292929").ss(0.3).p("AAABBQgBgagCgaQgDgzAEAAIAHgd");
	this.shape_1583.setTransform(638,372);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f().s("#292929").ss(0.3).p("AhsgLIBhAbIB4gg");
	this.shape_1584.setTransform(638.9,366.5);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f().s("#292929").ss(0.3).p("AAWgkQgLAEgLALQgVAWAAAp");
	this.shape_1585.setTransform(590.6,376.7);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f().s("#292929").ss(0.3).p("AAXgzQgMABgLAPQgWAdAAA/");
	this.shape_1586.setTransform(589.7,374.1);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f().s("#292929").ss(0.3).p("AgJDxIAAmDQAAgRADgUQAGgnAMgN");
	this.shape_1587.setTransform(600.6,398.2);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f().s("#292929").ss(0.3).p("AAOj+IgNATQgNAbAAArIAAGn");
	this.shape_1588.setTransform(599.1,395.7);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f().s("#292929").ss(0.3).p("AgwlmIAPAPQASAUAPAYQAwBOAABfIAAHp");
	this.shape_1589.setTransform(598.6,396.8);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f().s("#292929").ss(0.3).p("AATlmIgSAZQgSAoAABKIAAJF");
	this.shape_1590.setTransform(607.6,407.5);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f().s("#292929").ss(0.3).p("AgpmXIApBFQAqBWAABaIAAI9");
	this.shape_1591.setTransform(609,405.3);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f().s("#292929").ss(0.3).p("AgLFcIAApeQABgPADgTQAHglANgO");
	this.shape_1592.setTransform(619.8,410.8);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f().s("#292929").ss(0.3).p("ABGl6IgMAYQgNAvAABrIAAI/Ih1gn");
	this.shape_1593.setTransform(611.5,409.6);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f().s("#292929").ss(0.3).p("AAmFyIAAnzQABgngKgxQgThjgxgy");
	this.shape_1594.setTransform(620.6,406.5);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f().s("#292929").ss(0.3).p("AALlCQgVAvAACLIAAHQ");
	this.shape_1595.setTransform(630.3,409.1);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f().s("#292929").ss(0.3).p("AAQlNQgCABgDAEQgGAJgFARQgPA2AABzIAAHY");
	this.shape_1596.setTransform(628.6,408.7);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f().s("#292929").ss(0.3).p("AA3kKQgbAJgcAfQg2A9AABpIAAFM");
	this.shape_1597.setTransform(646.5,395.7);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f().s("#292929").ss(0.3).p("AiIgzQAAiZg5hfQgSgdgVgUIgSgPIGbCLIARAJQAVAMARATQA3A9AABqIAAGK");
	this.shape_1598.setTransform(608.8,393.8);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f().s("#292929").ss(0.3).p("AMUgRIpeg0IvJCL");
	this.shape_1599.setTransform(654.9,340.7);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f().s("#292929").ss(0.3).p("AEhGAIAAniQgIgegOggQgchAghgJInyiS");
	this.shape_1600.setTransform(609.2,389.3);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f().s("#292929").ss(0.3).p("AFiFsIAUgJIAAmWQAAg6ALhDQAWiHA8gsItXEIQgpANgZAhQgiAtAAAx");
	this.shape_1601.setTransform(687,374.4);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f().s("#292929").ss(0.3).p("AAiC8IAAi6QAAhjgagwQgNgZgNgLQgEgCgEABQgFABgCAD");
	this.shape_1602.setTransform(647.7,394);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f().s("#292929").ss(0.3).p("AAfClIgBiJQAAhmgXgvQgLgagMgKQgDgDgFABQgEABgBAE");
	this.shape_1603.setTransform(646.2,393.9);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f().s("#292929").ss(0.3).p("AAuEPIgBlcQAAhmgagwQgOgagMgKQgDgDgFABQgFABgBAEQgYA7AABA");
	this.shape_1604.setTransform(659.1,400.1);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f().s("#292929").ss(0.3).p("AAlEBIgBlLQAAhhgUgtQgLgXgKgKQgDgDgDABQgEABgCAEQgTA1AAA+IAAEo");
	this.shape_1605.setTransform(658.2,402.2);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f().s("#292929").ss(0.3).p("AAuEPIgBlYQAAhogagxQgPgbgLgJQgEgDgEABQgFABgCAEQgXA9AABA");
	this.shape_1606.setTransform(671.6,395.6);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f().s("#292929").ss(0.3).p("AAlDxIgBlEQAAhigVguQgKgYgKgLQgDgCgEABQgEABgBADQgTA5AAA9IAAGa");
	this.shape_1607.setTransform(670.6,399.1);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f().s("#292929").ss(0.3).p("AAsEyIgBmgQAAhngZgxQgOgbgKgJQgEgDgFABQgEABgCAEQgWA7AABB");
	this.shape_1608.setTransform(684.4,395.3);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f().s("#292929").ss(0.3).p("AAjEeIgBmCQAAhhgTgvQgMgagIgIQgDgCgDABQgEABgBADQgSA6AAA8IAAGo");
	this.shape_1609.setTransform(683.5,396.8);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f().s("#292929").ss(0.3).p("AArElIgBmCQAAhqgYgxQgNgbgLgKQgDgDgFABQgEABgCAEQgWBAAAA/");
	this.shape_1610.setTransform(696.2,390.8);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f().s("#292929").ss(0.3).p("AAiEJIAAl2QAAhjgUgvQgKgagIgJQgDgDgEABQgDABgBAEQgSA2AABCIAAHR");
	this.shape_1611.setTransform(695.4,394.9);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f().s("#292929").ss(0.3).p("AArEhIgBl9QAAhngYgyQgNgZgLgLQgEgDgEABQgEABgCAEQgWA6AABD");
	this.shape_1612.setTransform(707.6,386.6);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f().s("#292929").ss(0.3).p("AAiEFIgBlwQAAhigTguQgJgYgKgLQgCgCgEABQgEABgBADQgRA4AAA+IAAHK");
	this.shape_1613.setTransform(706.7,390.6);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f().s("#292929").ss(0.3).p("ABPjlQAAg/AVg7QACgEAEgBQAFgBADADQANAKAMAZQAYAwAABmIABF2IlKCZ");
	this.shape_1614.setTransform(705.9,390.3);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f().s("#292929").ss(0.3).p("AAiD/IgBlnQAAhggTgtQgLgZgIgJQgCgCgEABQgEABgBADQgRA3AAA8IAAHA");
	this.shape_1615.setTransform(717.2,386.2);

	var maskedShapeInstanceList = [this.instance_21,this.shape_1577,this.shape_1578,this.shape_1579,this.shape_1580,this.shape_1581,this.shape_1582,this.shape_1583,this.shape_1584,this.shape_1585,this.shape_1586,this.shape_1587,this.shape_1588,this.shape_1589,this.shape_1590,this.shape_1591,this.shape_1592,this.shape_1593,this.shape_1594,this.shape_1595,this.shape_1596,this.shape_1597,this.shape_1598,this.shape_1599,this.shape_1600,this.shape_1601,this.shape_1602,this.shape_1603,this.shape_1604,this.shape_1605,this.shape_1606,this.shape_1607,this.shape_1608,this.shape_1609,this.shape_1610,this.shape_1611,this.shape_1612,this.shape_1613,this.shape_1614,this.shape_1615];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_21;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},22).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577}]},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(22).to({_off:false},0).wait(1).to({regX:80.1,regY:56.8,x:662.8,y:480.2},0).wait(1).to({x:660.9,y:441},0).wait(1).to({x:657.8,y:407.8},0).wait(1).to({x:656.5,y:380.7},0).wait(1).to({x:657.4,y:384.9},0).wait(1).to({x:656.5,y:387.9},0).wait(1).to({y:389.7},0).wait(1).to({y:390.4},0).to({_off:true},1).wait(63));

	// Library--mask (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_20 = new cjs.Graphics().p("AF2IYIjeBTIAIiqIiZhfIhRAZIhfgjIADBJIgrAdIgIBfIpimrIgDroIRygZIILIJIgGJYIiHiJIhuBpIgXDeg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_22_graphics_20,x:392.9,y:372.4}).wait(74));

	// Library
	this.instance_22 = new lib.Symbol7();
	this.instance_22.parent = this;
	this.instance_22.setTransform(391.8,476.2,1,1,0,0,0,81.9,53);
	this.instance_22._off = true;

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f().s("#292929").ss(0.3).p("AKSAaImAieIuqCnICMBig");
	this.shape_1616.setTransform(386.1,343.8);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#FFFFFF").s().p("AqUAjIOpinIGBCeIyeBrg");
	this.shape_1617.setTransform(385.8,343.9);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f().s("#292929").ss(0.3).p("Ag3gXIBvAv");
	this.shape_1618.setTransform(359.6,358.8);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f().s("#292929").ss(0.3).p("AlkAxILIhg");
	this.shape_1619.setTransform(401.2,356.5);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f().s("#292929").ss(0.3).p("AJPgtIiWgOIwHB4");
	this.shape_1620.setTransform(392.8,351.1);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f().s("#292929").ss(0.3).p("Ak0jhIJqHD");
	this.shape_1621.setTransform(340.9,399.9);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f().s("#292929").ss(0.3).p("ADRChImhlB");
	this.shape_1622.setTransform(330.9,387.4);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f().s("#292929").ss(0.3).p("ADuCIIg2AJImjki");
	this.shape_1623.setTransform(333.5,374.5);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f().s("#292929").ss(0.3).p("ADuCJIg2AJImjkl");
	this.shape_1624.setTransform(333.6,370.4);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f().s("#292929").ss(0.3).p("AD+CBIhXASImikm");
	this.shape_1625.setTransform(335.2,364.2);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#FFFFFF").s().p("Aj8iSIH5EUIhXASg");
	this.shape_1626.setTransform(335.3,364.1);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f().s("#292929").ss(0.3).p("AjyiVIGhEqIBGgQ");
	this.shape_1627.setTransform(334.3,357.3);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#FFFFFF").s().p("AjziVIHnEaIhGARg");
	this.shape_1628.setTransform(334.4,357.3);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f().s("#292929").ss(0.3).p("AFZBAIjMh+InnA+");
	this.shape_1629.setTransform(344.8,330.1);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#FFFFFF").s().p("AlZAAIHog+IDLB9g");
	this.shape_1630.setTransform(344.7,330.2);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f().s("#292929").ss(0.3).p("AFyBMIj/iXInnA2");
	this.shape_1631.setTransform(347.5,328.1);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#FFFFFF").s().p("AlzgVIHng2IEACXg");
	this.shape_1632.setTransform(347.4,328.1);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f().s("#292929").ss(0.3).p("ABjBDIjFiF");
	this.shape_1633.setTransform(319.9,338.6);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f().s("#292929").ss(0.3).p("ABGAwIiLhf");
	this.shape_1634.setTransform(316.9,341.9);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f().s("#292929").ss(0.3).p("AA6ARIgeAHIhTgw");
	this.shape_1635.setTransform(349.4,358.8);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#FFFFFF").s().p("Ag4gYIBxAqIgeAHg");
	this.shape_1636.setTransform(349.5,358.8);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f().s("#292929").ss(0.3).p("AhIgsICRBZ");
	this.shape_1637.setTransform(344.6,361.4);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f().s("#292929").ss(0.3).p("AArCyIhRAQIAAl4IAugM");
	this.shape_1638.setTransform(355.7,384.1);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f().s("#292929").ss(0.3).p("Ag4iDIAACsIB0BX");
	this.shape_1639.setTransform(365.7,403.4);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f().s("#292929").ss(0.3).p("AAAgcIAAA5");
	this.shape_1640.setTransform(386.4,406.8);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f().s("#292929").ss(0.3).p("AAAgeIAAA9");
	this.shape_1641.setTransform(391,405.5);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f().s("#292929").ss(0.3).p("AFvhOIAVAMIp6CQIiYhg");
	this.shape_1642.setTransform(434.6,400.9);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f().s("#292929").ss(0.3).p("AgsAHIBagN");
	this.shape_1643.setTransform(374.4,382.3);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f().s("#292929").ss(0.3).p("AgwAHIBhgN");
	this.shape_1644.setTransform(374,377.9);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f().s("#292929").ss(0.3).p("Ag2AHIBtgN");
	this.shape_1645.setTransform(373.4,373.5);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f().s("#292929").ss(0.3).p("Ag6AHIB0gN");
	this.shape_1646.setTransform(373.1,369.1);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f().s("#292929").ss(0.3).p("Ag9AHIB7gN");
	this.shape_1647.setTransform(372.7,364.7);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f().s("#292929").ss(0.3).p("AgogTIBRAn");
	this.shape_1648.setTransform(365.9,381.1);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f().s("#292929").ss(0.3).p("AgtgVIBbAr");
	this.shape_1649.setTransform(364.2,375.5);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f().s("#292929").ss(0.3).p("Ag0gZIBpAz");
	this.shape_1650.setTransform(362.1,367.9);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f().s("#292929").ss(0.3).p("AlngjIHUhJID7CBInbBXg");
	this.shape_1651.setTransform(425.4,366.6,1,1,0,0,0,0.6,0);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f().s("#292929").ss(0.3).p("AHPgPIpXB4IlEjS");
	this.shape_1652.setTransform(425,388);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f().s("#292929").ss(0.3).p("AHPgPIpXB4IlEjS");
	this.shape_1653.setTransform(425,380.4);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f().s("#292929").ss(0.3).p("AHXhcIllivIpCBUIFEDSIJjh3IABgBIgNBDIAACgIpeCGIighmIAAAwIiGArIAAAP");
	this.shape_1654.setTransform(425.4,379.7);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f().s("#292929").ss(0.3).p("Ah3hvIAAAqIDuCrIAAgz");
	this.shape_1655.setTransform(369.3,395.2);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f().s("#292929").ss(0.3).p("AiAhVIg4AHIDtCjICGgpIidhu");
	this.shape_1656.setTransform(375.9,391.9);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f().s("#292929").ss(0.3).p("AhVieIBcEVIBNApIhClH");
	this.shape_1657.setTransform(362.3,371.4);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f().s("#292929").ss(0.3).p("AGcBaIlGiyInuAsIAAAv");
	this.shape_1658.setTransform(350.8,325.5);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#FFFFFF").s().p("AmaADIAAgwIHugrIFHCxg");
	this.shape_1659.setTransform(351,325.5);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f().s("#292929").ss(0.3).p("AAniuIAAFDIhRAW");
	this.shape_1660.setTransform(375,370.4);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f().s("#292929").ss(0.3).p("AluAqILdhT");
	this.shape_1661.setTransform(401.5,353.7);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f().s("#292929").ss(0.3).p("AAAgRIAAAj");
	this.shape_1662.setTransform(435.7,357.5);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f().s("#292929").ss(0.3).p("AEyA2IjAhqImlBD");
	this.shape_1663.setTransform(424.3,364.3);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#FFFFFF").s().p("AkyAOIGlhCIDABpg");
	this.shape_1664.setTransform(424.2,364.4);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f().s("#292929").ss(0.3).p("AAAgeIAAA9");
	this.shape_1665.setTransform(394.6,404.2);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().s("#292929").ss(0.3).p("AgRAbIAjg1");
	this.shape_1666.setTransform(437.8,350.3);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhO");
	this.shape_1667.setTransform(409.8,412.7);

	var maskedShapeInstanceList = [this.instance_22,this.shape_1616,this.shape_1617,this.shape_1618,this.shape_1619,this.shape_1620,this.shape_1621,this.shape_1622,this.shape_1623,this.shape_1624,this.shape_1625,this.shape_1626,this.shape_1627,this.shape_1628,this.shape_1629,this.shape_1630,this.shape_1631,this.shape_1632,this.shape_1633,this.shape_1634,this.shape_1635,this.shape_1636,this.shape_1637,this.shape_1638,this.shape_1639,this.shape_1640,this.shape_1641,this.shape_1642,this.shape_1643,this.shape_1644,this.shape_1645,this.shape_1646,this.shape_1647,this.shape_1648,this.shape_1649,this.shape_1650,this.shape_1651,this.shape_1652,this.shape_1653,this.shape_1654,this.shape_1655,this.shape_1656,this.shape_1657,this.shape_1658,this.shape_1659,this.shape_1660,this.shape_1661,this.shape_1662,this.shape_1663,this.shape_1664,this.shape_1665,this.shape_1666,this.shape_1667];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_22;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},20).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616}]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(20).to({_off:false},0).wait(1).to({regX:82.2,regY:52.9,x:392.1,y:445.9},0).wait(1).to({y:419.3},0).wait(1).to({y:396.2},0).wait(1).to({y:376.6},0).wait(1).to({y:364.9},0).wait(1).to({y:367.1},0).wait(1).to({y:368.7},0).wait(1).to({y:369.7},0).wait(1).to({y:370},0).to({_off:true},1).wait(64));

	// gold-mask (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	var mask_23_graphics_12 = new cjs.Graphics().p("AA8TmIucvxIg835IUJA8IIwU7IAAEsIpNDcIATKKg");

	this.timeline.addTween(cjs.Tween.get(mask_23).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_23_graphics_12,x:278.6,y:406.6}).wait(82));

	// Gold-Mf
	this.instance_23 = new lib.Symbol6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(284.6,650.4,1,1,0,0,0,84.8,118.4);
	this.instance_23._off = true;

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1668.setTransform(368.4,476.4);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIAMAF");
	this.shape_1669.setTransform(340.6,490.1);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f().s("#292929").ss(0.3).p("AgFgCIALAF");
	this.shape_1670.setTransform(332.8,493);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1671.setTransform(368.4,462.4);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1672.setTransform(350.4,469);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f().s("#292929").ss(0.3).p("AAAgfIAAA/");
	this.shape_1673.setTransform(327.7,501.5);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgJAAgM");
	this.shape_1674.setTransform(203.9,431.6);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgIAAgN");
	this.shape_1675.setTransform(211.4,439.8);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f().s("#292929").ss(0.3).p("AAnAPQgfgCgUgKQgVgIAAgN");
	this.shape_1676.setTransform(218.7,447.5);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f().s("#292929").ss(0.3).p("AA1AOIgRAAQgjAAgYgKQgYgJAAgN");
	this.shape_1677.setTransform(227.6,455.4);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f().s("#292929").ss(0.3).p("AAmAUQghgHgSgMQgUgLAAgO");
	this.shape_1678.setTransform(311.5,517.7);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f().s("#292929").ss(0.3).p("AA9AVQgwAAgigOQgjgNAAgT");
	this.shape_1679.setTransform(238.5,476.2);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_1680.setTransform(250.6,487.7);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_1681.setTransform(262.6,499.5);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f().s("#292929").ss(0.3).p("AA+AXQgzgCghgPQgjgNAAgU");
	this.shape_1682.setTransform(274.6,511.9);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f().s("#292929").ss(0.3).p("ACIgbQAAAVgoAOQgoAPg4AAQg4AAgogPQgogOAAgV");
	this.shape_1683.setTransform(294.5,521.6);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f().s("#292929").ss(0.3).p("AAAiUIAAEp");
	this.shape_1684.setTransform(331.4,449.6);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f().s("#292929").ss(0.3).p("AAAAtIAAhZ");
	this.shape_1685.setTransform(348,453.8);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f().s("#292929").ss(0.3).p("AAAA2IAAhr");
	this.shape_1686.setTransform(346.3,453.3);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f().s("#292929").ss(0.3).p("AASgYIgjAx");
	this.shape_1687.setTransform(341.5,447.6);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f().s("#292929").ss(0.3).p("AATgYIglAx");
	this.shape_1688.setTransform(336.3,454.5);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f().s("#292929").ss(0.3).p("AgaAlIA1hJ");
	this.shape_1689.setTransform(337.2,457);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f().s("#292929").ss(0.3).p("AgQAYIAhgv");
	this.shape_1690.setTransform(343,449);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f().s("#292929").ss(0.3).p("Ag7gfIB1BWIAAgZIh1ha");
	this.shape_1691.setTransform(340.4,452.1);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f().s("#292929").ss(0.3).p("AgjAwIBHhg");
	this.shape_1692.setTransform(299.9,388.7);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f().s("#292929").ss(0.3).p("AgiA1IBFhp");
	this.shape_1693.setTransform(303.7,391.5);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f().s("#292929").ss(0.3).p("AgjA3IBHht");
	this.shape_1694.setTransform(307.7,394.6);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_1695.setTransform(307.3,417.4);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f().s("#292929").ss(0.3).p("AgQAHIAAglIAhAeIAAAq");
	this.shape_1696.setTransform(237.2,390.4);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1697.setTransform(232.4,385.6);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1698.setTransform(227.7,380.8);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1699.setTransform(222.9,376);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1700.setTransform(218.2,371.2);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f().s("#292929").ss(0.3).p("ACoCbQgWAFgPgGQgJgFgPgOIkBj+QgKgLgCgHQgEgKAHgK");
	this.shape_1701.setTransform(216.8,383.7);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f().s("#292929").ss(0.3).p("ACoCxQggAGgWgWIkCj+QgbgcAMgVQAJgRAlgJQAwgMAsAD");
	this.shape_1702.setTransform(216.1,383.1);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f().s("#292929").ss(0.3).p("AhcBDIC2gyIAAhSIi2An");
	this.shape_1703.setTransform(307.6,431.6);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#F7F6F7").s().p("AhagbIC1gmIAABRIi1Ayg");
	this.shape_1704.setTransform(307.5,431.6);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f().s("#292929").ss(0.3).p("AAmAUQghgHgSgMQgUgLAAgO");
	this.shape_1705.setTransform(311.5,517);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f().s("#292929").ss(0.3).p("AgtgeQAnAFAXANQAYANAAARQAAAHgFAH");
	this.shape_1706.setTransform(292,407.1);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f().s("#292929").ss(0.3).p("AgvgeQAoAEAZAMQAaAMAAAPQAAAKgKAI");
	this.shape_1707.setTransform(302.9,414.8);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f().s("#292929").ss(0.3).p("ACJAAQAAAVgoAPQgoAPg5AAQg3AAgogPQgogPAAgVQAAgUAogPQAogPA3AAQA5AAAoAPQAoAPAAAUg");
	this.shape_1708.setTransform(313.3,432.1);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f().s("#292929").ss(0.3).p("AAAGJIAAsR");
	this.shape_1709.setTransform(308.1,478.8);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f().s("#292929").ss(0.3).p("AAAkbIAAI3");
	this.shape_1710.setTransform(200.5,400.8);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f().s("#292929").ss(0.3).p("AAAkeIAAI9");
	this.shape_1711.setTransform(207.9,408.7);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f().s("#292929").ss(0.3).p("AAAkgIAAJB");
	this.shape_1712.setTransform(215.3,416);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f().s("#292929").ss(0.3).p("AAAEkIAApG");
	this.shape_1713.setTransform(222.8,423.7);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgJAAgM");
	this.shape_1714.setTransform(203.9,431.1);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgIAAgN");
	this.shape_1715.setTransform(211.4,439.3);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgVgJAAgN");
	this.shape_1716.setTransform(218.7,446.9);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f().s("#292929").ss(0.3).p("AA1AOIgRAAQgjAAgYgKQgYgJAAgN");
	this.shape_1717.setTransform(227.6,454.8);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f().s("#292929").ss(0.3).p("AAAloIAALR");
	this.shape_1718.setTransform(232.8,437.1);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f().s("#292929").ss(0.3).p("AAAlyIAALl");
	this.shape_1719.setTransform(244.8,447.7);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f().s("#292929").ss(0.3).p("AAAl/IAAL/");
	this.shape_1720.setTransform(256.8,458.6);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f().s("#292929").ss(0.3).p("AAAmIIAAMR");
	this.shape_1721.setTransform(268.8,469.2);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f().s("#292929").ss(0.3).p("AAAGJIAAsR");
	this.shape_1722.setTransform(280.8,478.8);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f().s("#292929").ss(0.3).p("AFvDRIo3mfIipAN");
	this.shape_1723.setTransform(279.4,404);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#F7F6F7").s().p("AlwjCICqgNII3Gfg");
	this.shape_1724.setTransform(279.3,404.1);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#292929").ss(0.3).p("AEWEOIAAhnIorm1IAABHg");
	this.shape_1725.setTransform(270.2,411.8);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#F7F6F7").s().p("AkVjHIAAhHIIrG1IAABng");
	this.shape_1726.setTransform(270.2,411.8);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f().s("#292929").ss(0.3).p("AA9AVQgwAAgigOQgjgNAAgT");
	this.shape_1727.setTransform(238.5,475.4);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgOQgjgOAAgU");
	this.shape_1728.setTransform(250.6,486.9);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_1729.setTransform(262.6,498.7);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f().s("#292929").ss(0.3).p("AA+AXQgzgCghgPQgjgNAAgU");
	this.shape_1730.setTransform(274.6,511.2);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f().s("#292929").ss(0.3).p("ACIgbQAAAVgoAOQgoAPg4AAQg3AAgpgPQgogOAAgV");
	this.shape_1731.setTransform(294.5,520.9);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAWgoAPQgoAPg4AAQg4AAgogPQgogPAAgWQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_1732.setTransform(246.5,401);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAWgoAPQgoAPg4AAQg4AAgogPQgogPAAgWQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_1733.setTransform(258.5,410.6);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgVAogPQAogPA4AAQA4AAAoAPQAoAPAAAVg");
	this.shape_1734.setTransform(270.5,420.3);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgVAogPQAogPA4AAQA4AAAoAPQAoAPAAAVg");
	this.shape_1735.setTransform(282.5,429.9);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_1736.setTransform(294.5,439.6);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f().s("#292929").ss(0.3).p("AASAiQgSAGgRgGIAAhEQARAFASgFg");
	this.shape_1737.setTransform(287.6,392.1);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f().s("#292929").ss(0.3).p("AEcEqIo1nwIAAhn");
	this.shape_1738.setTransform(324.1,423.4);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f().s("#292929").ss(0.3).p("AEECYIhXCJIoknnIBJhbII4GRIBrCIIgeAAgAF1D4IgYgGIhUhhIgFAH");
	this.shape_1739.setTransform(332.1,411.4);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1740.setTransform(260.5,375.7);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f().s("#292929").ss(0.3).p("AAAhuIAADd");
	this.shape_1741.setTransform(279.2,387.8);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f().s("#292929").ss(0.3).p("AiJAvICHh/ICMBOQABAagjAXQggAVgxAJQgxAKgrgHQgvgHgVgag");
	this.shape_1742.setTransform(292.9,372);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f().s("#292929").ss(0.3).p("AiFixIAABQIEMEQ");
	this.shape_1743.setTransform(227.3,379.1);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f().s("#292929").ss(0.3).p("AgbiUQgQAKgpgCQgqgDgTAMIEoEZ");
	this.shape_1744.setTransform(228.1,373.9);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f().s("#292929").ss(0.3).p("ACIgkIAAEqIkPjsIAAkp");
	this.shape_1745.setTransform(238.9,356.4);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f().s("#292929").ss(0.3).p("AgMALQgCgUAOAAQANgBAAAZ");
	this.shape_1746.setTransform(322.8,434.3);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f().s("#292929").ss(0.3).p("AgMALQgCgTAOgBQANgBAAAZ");
	this.shape_1747.setTransform(318.1,435.4);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1748.setTransform(321.7,466.8);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1749.setTransform(321.7,465.4);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1750.setTransform(321.7,464);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1751.setTransform(321.7,462.6);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1752.setTransform(321.7,461.2);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1753.setTransform(321.7,459.8);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1754.setTransform(321.7,458.3);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1755.setTransform(321.7,456.9);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1756.setTransform(321.7,455.5);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1757.setTransform(321.7,454.1);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1758.setTransform(321.7,452.7);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1759.setTransform(321.7,451.3);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1760.setTransform(321.7,449.9);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1761.setTransform(321.7,448.4);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1762.setTransform(321.7,447);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1763.setTransform(321.7,445.6);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1764.setTransform(321.7,444.2);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1765.setTransform(321.7,442.8);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1766.setTransform(321.7,441.4);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1767.setTransform(321.7,440);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1768.setTransform(321.7,438.6);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1769.setTransform(321.7,437.1);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f().s("#292929").ss(0.3).p("AABCeIgBk7");
	this.shape_1770.setTransform(324.2,451.7);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f().s("#292929").ss(0.3).p("AAAChIAAlB");
	this.shape_1771.setTransform(319.4,453);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f().s("#292929").ss(0.3).p("AAACvIAAld");
	this.shape_1772.setTransform(327.1,448.7);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f().s("#292929").ss(0.3).p("AAAiCIAAEF");
	this.shape_1773.setTransform(334.4,450.4);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f().s("#292929").ss(0.3).p("AAAiIIAAER");
	this.shape_1774.setTransform(333.3,450.1);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f().s("#292929").ss(0.3).p("AAACcIAAk3");
	this.shape_1775.setTransform(330.6,449.4);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f().s("#292929").ss(0.3).p("AAaAiIgvASIgEhcIAwgMg");
	this.shape_1776.setTransform(359,442.4);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f().s("#292929").ss(0.3).p("AA1gJIhpAT");
	this.shape_1777.setTransform(358.1,433.8);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f().s("#292929").ss(0.3).p("AhBhJIAICiIB6gyIAAiH");
	this.shape_1778.setTransform(358.4,444.2);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f().s("#292929").ss(0.3).p("AgnA9IBPh5");
	this.shape_1779.setTransform(315.5,400.9);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f().s("#292929").ss(0.3).p("AgnA9IBPh5");
	this.shape_1780.setTransform(319.5,404);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f().s("#292929").ss(0.3).p("AgpBAIBTh/");
	this.shape_1781.setTransform(323.4,407.2);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f().s("#292929").ss(0.3).p("AgqBCIBWiD");
	this.shape_1782.setTransform(327.4,410.3);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f().s("#292929").ss(0.3).p("AgsBFIBZiJ");
	this.shape_1783.setTransform(331.4,413.5);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f().s("#292929").ss(0.3).p("AguBHIBdiN");
	this.shape_1784.setTransform(335.4,416.6);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f().s("#292929").ss(0.3).p("AgvBJIBfiR");
	this.shape_1785.setTransform(339.3,419.7);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f().s("#292929").ss(0.3).p("AgxBMIBjiX");
	this.shape_1786.setTransform(343.2,422.8);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f().s("#292929").ss(0.3).p("AgzBPIBnid");
	this.shape_1787.setTransform(347.2,426);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f().s("#292929").ss(0.3).p("Ag0BQIBpif");
	this.shape_1788.setTransform(351.1,429.2);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f().s("#292929").ss(0.3).p("AglA5IBLhx");
	this.shape_1789.setTransform(311.6,397.8);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1790.setTransform(301.1,349.4);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1791.setTransform(301.1,335.3);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f().s("#292929").ss(0.3).p("AAWAnIgqAAIAAhNIAqAAg");
	this.shape_1792.setTransform(277.5,321.2);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1793.setTransform(301.1,321.2);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f().s("#292929").ss(0.3).p("AANAiIgXgUIgCgvIAYATg");
	this.shape_1794.setTransform(247.3,354.9,1,1,0,0,0,0,-0.3);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f().s("#292929").ss(0.3).p("AAQA9IgfgcIAAhdIAfAdg");
	this.shape_1795.setTransform(263.3,335.2,1,1,0,0,0,0,-0.4);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f().s("#292929").ss(0.3).p("AAQA9IgfgdIAAhcIAfAcg");
	this.shape_1796.setTransform(263.3,314.9,1,1,0,0,0,0,-0.4);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f().s("#292929").ss(0.3).p("AAPA6IgdgbIAAhYIAdAbg");
	this.shape_1797.setTransform(257.1,310.2,1,1,0,0,0,0,-0.4);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagYIAAhXIAaAZg");
	this.shape_1798.setTransform(251.2,305.2,1,1,0,0,0,0,-0.4);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagZIAAhWIAaAYg");
	this.shape_1799.setTransform(245.8,321.8,1,1,0,0,0,0,-0.4);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagZIAAhWIAaAYg");
	this.shape_1800.setTransform(245.8,301.2,1,1,0,0,0,0,-0.4);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f().s("#292929").ss(0.3).p("ADkBwIiuATIkOjrICiga");
	this.shape_1801.setTransform(247.1,339.7);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f().s("#292929").ss(0.3).p("ABYhcIAAGXIkZjzIAAmIIGIAW");
	this.shape_1802.setTransform(261.1,319.3);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f().s("#292929").ss(0.3).p("AlYhyIEaDkIGLgMIkcjA");
	this.shape_1803.setTransform(276.2,298.7);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYAUg");
	this.shape_1804.setTransform(245.8,372,1,1,0,0,0,0,-0.3);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgwIAYAUg");
	this.shape_1805.setTransform(241.6,364.1,1,1,0,0,0,0,-0.3);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAXATg");
	this.shape_1806.setTransform(235.9,359.3,1,1,0,0,0,0,-0.3);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYAUg");
	this.shape_1807.setTransform(230.1,354.6,1,1,0,0,0,0,-0.3);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgwIAYAUg");
	this.shape_1808.setTransform(241.6,350.1,1,1,0,0,0,0,-0.3);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgTIgBgwIAXAUg");
	this.shape_1809.setTransform(235.9,345.3,1,1,0,0,0,0,-0.3);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYATg");
	this.shape_1810.setTransform(230.1,340.6,1,1,0,0,0,0,-0.3);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1811.setTransform(260.5,361.7);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f().s("#292929").ss(0.3).p("AAAhGIAACN");
	this.shape_1812.setTransform(306.7,378.8);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f().s("#292929").ss(0.3).p("AAAmKIAAMW");
	this.shape_1813.setTransform(309.5,348.5);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f().s("#292929").ss(0.3).p("AkWj0IIrGWIAABX");
	this.shape_1814.setTransform(337.4,406.1);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f().s("#292929").ss(0.3).p("AgWAJIAtgR");
	this.shape_1815.setTransform(362.7,423.6);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f().s("#292929").ss(0.3).p("AgIABIANgDIAAAM");
	this.shape_1816.setTransform(305.9,305.8);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f("#FFFFFF").s().p("AgGgBIANgFIAAANg");
	this.shape_1817.setTransform(305.7,306.2);

	var maskedShapeInstanceList = [this.instance_23,this.shape_1668,this.shape_1669,this.shape_1670,this.shape_1671,this.shape_1672,this.shape_1673,this.shape_1674,this.shape_1675,this.shape_1676,this.shape_1677,this.shape_1678,this.shape_1679,this.shape_1680,this.shape_1681,this.shape_1682,this.shape_1683,this.shape_1684,this.shape_1685,this.shape_1686,this.shape_1687,this.shape_1688,this.shape_1689,this.shape_1690,this.shape_1691,this.shape_1692,this.shape_1693,this.shape_1694,this.shape_1695,this.shape_1696,this.shape_1697,this.shape_1698,this.shape_1699,this.shape_1700,this.shape_1701,this.shape_1702,this.shape_1703,this.shape_1704,this.shape_1705,this.shape_1706,this.shape_1707,this.shape_1708,this.shape_1709,this.shape_1710,this.shape_1711,this.shape_1712,this.shape_1713,this.shape_1714,this.shape_1715,this.shape_1716,this.shape_1717,this.shape_1718,this.shape_1719,this.shape_1720,this.shape_1721,this.shape_1722,this.shape_1723,this.shape_1724,this.shape_1725,this.shape_1726,this.shape_1727,this.shape_1728,this.shape_1729,this.shape_1730,this.shape_1731,this.shape_1732,this.shape_1733,this.shape_1734,this.shape_1735,this.shape_1736,this.shape_1737,this.shape_1738,this.shape_1739,this.shape_1740,this.shape_1741,this.shape_1742,this.shape_1743,this.shape_1744,this.shape_1745,this.shape_1746,this.shape_1747,this.shape_1748,this.shape_1749,this.shape_1750,this.shape_1751,this.shape_1752,this.shape_1753,this.shape_1754,this.shape_1755,this.shape_1756,this.shape_1757,this.shape_1758,this.shape_1759,this.shape_1760,this.shape_1761,this.shape_1762,this.shape_1763,this.shape_1764,this.shape_1765,this.shape_1766,this.shape_1767,this.shape_1768,this.shape_1769,this.shape_1770,this.shape_1771,this.shape_1772,this.shape_1773,this.shape_1774,this.shape_1775,this.shape_1776,this.shape_1777,this.shape_1778,this.shape_1779,this.shape_1780,this.shape_1781,this.shape_1782,this.shape_1783,this.shape_1784,this.shape_1785,this.shape_1786,this.shape_1787,this.shape_1788,this.shape_1789,this.shape_1790,this.shape_1791,this.shape_1792,this.shape_1793,this.shape_1794,this.shape_1795,this.shape_1796,this.shape_1797,this.shape_1798,this.shape_1799,this.shape_1800,this.shape_1801,this.shape_1802,this.shape_1803,this.shape_1804,this.shape_1805,this.shape_1806,this.shape_1807,this.shape_1808,this.shape_1809,this.shape_1810,this.shape_1811,this.shape_1812,this.shape_1813,this.shape_1814,this.shape_1815,this.shape_1816,this.shape_1817];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_23;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},12).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.shape_1817},{t:this.shape_1816},{t:this.shape_1815},{t:this.shape_1814},{t:this.shape_1813},{t:this.shape_1812},{t:this.shape_1811},{t:this.shape_1810},{t:this.shape_1809},{t:this.shape_1808},{t:this.shape_1807},{t:this.shape_1806},{t:this.shape_1805},{t:this.shape_1804},{t:this.shape_1803},{t:this.shape_1802},{t:this.shape_1801},{t:this.shape_1800},{t:this.shape_1799},{t:this.shape_1798},{t:this.shape_1797},{t:this.shape_1796},{t:this.shape_1795},{t:this.shape_1794},{t:this.shape_1793},{t:this.shape_1792},{t:this.shape_1791},{t:this.shape_1790},{t:this.shape_1789},{t:this.shape_1788},{t:this.shape_1787},{t:this.shape_1786},{t:this.shape_1785},{t:this.shape_1784},{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1781},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1778},{t:this.shape_1777},{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668}]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(12).to({_off:false},0).wait(1).to({regX:85.2,regY:118.3,x:285,y:597.2},0).wait(1).to({y:549.2},0).wait(1).to({y:506.3},0).wait(1).to({y:468.4},0).wait(1).to({y:435.6},0).wait(1).to({y:407.8},0).wait(1).to({y:401.6},0).wait(1).to({y:403.2},0).wait(1).to({y:404.3},0).wait(1).to({y:405},0).wait(1).to({y:405.2},0).to({_off:true},1).wait(70));

	// Basillica-mask (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	var mask_24_graphics_14 = new cjs.Graphics().p("Aj5PvIgInNIp5mfIgWjnISgw+IJtKtIAFP/IAPCQImGDKIgBBFInvD6g");

	this.timeline.addTween(cjs.Tween.get(mask_24).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_24_graphics_14,x:519.4,y:413}).wait(80));

	// Basillica
	this.instance_24 = new lib.Symbol5();
	this.instance_24.parent = this;
	this.instance_24.setTransform(524,618.3,1,1,0,0,0,78,110.6);
	this.instance_24._off = true;

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f().s("#292929").ss(0.3).p("AANAAQAAgBgBgBQgCgBgDAAIgKgBIgFABQgEABAAAEQAAACABAF");
	this.shape_1818.setTransform(585,486.6);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f().s("#292929").ss(0.3).p("AgHgFQAGABADAEQADAFgBAG");
	this.shape_1819.setTransform(581.6,493.9);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f().s("#292929").ss(0.3).p("AgLgJQABgFAHACQAIADAFAJQAEAIgDAJ");
	this.shape_1820.setTransform(586,490.1);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f().s("#292929").ss(0.3).p("AgIgDQAFAAADADQAEADABAF");
	this.shape_1821.setTransform(583.9,491.3);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f().s("#292929").ss(0.3).p("AAOgFQgJgDgHAGQgHAFAAAJ");
	this.shape_1822.setTransform(578.8,488.6);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f().s("#292929").ss(0.3).p("AgJAGQgDgCACgDQABgBADgCQAGgDADAAQAGAAACAF");
	this.shape_1823.setTransform(584.7,482.8);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f().s("#292929").ss(0.3).p("AAMAEQgIgFgDAAQgIgBgCAF");
	this.shape_1824.setTransform(577,482.5);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f().s("#292929").ss(0.3).p("AAQAEQABgGgJgCQgGgCgHAEQgLAEABAI");
	this.shape_1825.setTransform(575,479.8);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f().s("#292929").ss(0.3).p("AgPAMQAAgGAFgEQADgDAHgDQADgCADAAQAGAAAGAG");
	this.shape_1826.setTransform(572.4,476.3);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f().s("#292929").ss(0.3).p("AATgKQgEgEgHADQgJADgIAIQgGAHgDAK");
	this.shape_1827.setTransform(571.4,472);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f().s("#292929").ss(0.3).p("AgOAMQAFgKAIgHIAEgDQAGgBAHAI");
	this.shape_1828.setTransform(567.6,477);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f().s("#292929").ss(0.3).p("AgKALQAAgKAHgDQADgDADABQAFAAACAD");
	this.shape_1829.setTransform(567.3,481.1);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f().s("#292929").ss(0.3).p("AANgNQgBgDgEAAIgFADQgIAFgEAHQgGAJAEAI");
	this.shape_1830.setTransform(570.3,486.6);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f().s("#292929").ss(0.3).p("AgMAHQAAgCADgCIAHgEQAEgEADgBQAGgBACAF");
	this.shape_1831.setTransform(572,488.8);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f().s("#292929").ss(0.3).p("AARAIIgHgIQgCgEgDAAQgCgBgDABQgKADgGAG");
	this.shape_1832.setTransform(568.8,491);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f().s("#292929").ss(0.3).p("AANgBQgDgEgFgBQgEAAgDACQgHAEgDAL");
	this.shape_1833.setTransform(574.1,491.7);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f().s("#292929").ss(0.3).p("AAHgIQABgCgDAAQgBABgBAAQgDAEgEAFQgEAIAEAE");
	this.shape_1834.setTransform(575,496.9);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f().s("#292929").ss(0.3).p("AgPAJQgCgDADgEQACgCAEgCQAHgDAIgDQAIgCACAE");
	this.shape_1835.setTransform(571.5,494.9);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f().s("#292929").ss(0.3).p("AgNAHQgBAAAAgCIACgDQAHgEAFgCQAEgCACAAQAEgBAHAG");
	this.shape_1836.setTransform(567.1,494);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f().s("#292929").ss(0.3).p("AAKAFQAAgDgDgCQgDgBgEAAQgEAAgHAF");
	this.shape_1837.setTransform(567.1,497.9);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f().s("#292929").ss(0.3).p("AgQAOQgEgDAFgGQAHgIAIgGQAMgHAHAG");
	this.shape_1838.setTransform(559.8,494.9);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f().s("#292929").ss(0.3).p("AgQAKQAEgKAKgEQAEgDAGACQAFABAFAG");
	this.shape_1839.setTransform(556.1,499);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f().s("#292929").ss(0.3).p("AAOgKQgEgDgHADQgDABgFAFQgKAJACAL");
	this.shape_1840.setTransform(560.7,501.4);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f().s("#292929").ss(0.3).p("AgPAEQAHgIAKABQAGAAAEADQAEAEAAAF");
	this.shape_1841.setTransform(557.5,504.3);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f().s("#292929").ss(0.3).p("AgEA2QgCgnADggQACgXAJgJ");
	this.shape_1842.setTransform(571.4,503.1);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f().s("#292929").ss(0.3).p("AgBAuQAGgjgEgjQgBgNgCgE");
	this.shape_1843.setTransform(568.3,505.4);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f().s("#292929").ss(0.3).p("AAJAAQgBAAgCAAQgCACgEgBIgEgBQgDAAgBAA");
	this.shape_1844.setTransform(566.4,500.9);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f().s("#292929").ss(0.3).p("AAAgZQgCAaAEAd");
	this.shape_1845.setTransform(559.9,511.1);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f().s("#292929").ss(0.3).p("AABglQAFAlgIAi");
	this.shape_1846.setTransform(557.8,512.4);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f().s("#292929").ss(0.3).p("AA6CfQAJgHAEgLQAEgKgCgLQAGgBAEgFQAEgGgBgGQAGgIgCgLQgDgLgJgFQAQgHgFgHQgJgIgPgDQAGgCACgLQADgLgDgHQgDgDAAgCIAAgIQAAgIgFgHQgFgHgIgBQACgDAAgDIgOADQAGgJgGgMQgEgIgKgHQAHgBADgHQAEgHgDgHQgCgIgQgOQgDgDgBgCQgBgBAAgEQAAgLgJgWQgDgGgCgBQgGAAgBAKIgEAjQgKACgBAJQgMgCgHAFQgFADgCAEQgCAFABAFQgJAEgDADQgFAIAEAFQgNAGADAIIACADQADAGgIAGQgEADgCABQgDADgCADQgFAJAKAPQAEAGABADIgBAHQgCALgEAIIgBADQAAACAFACQAFACABAHQABAGgEAEQgEACgBACIgBAFQAAABgFAKQgHARALAP");
	this.shape_1847.setTransform(572.9,479.1);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f().s("#292929").ss(0.3).p("AAeBUQABABACgBQAEgFgBgIQgCgHgGgDQAGgGgBgIIgBgFIACgEQAEgIABgFQABgFgBgIQgDgJgNAJQgEgCgEADQACgEACgHIAAgCIgDgCQAAgBAAgDQADgLgDgMIgBgCIgFgDQgDgCgDgDQgMgJgGgJQgCgEACgKQABgJgEgDQgEgDgKAMQgIALABgC");
	this.shape_1848.setTransform(587.3,483.5);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f().s("#292929").ss(0.3).p("AANglQgBAFgCACQAAAAgGADQgGAEgBAFQgBAFAAABQgBABgCADQgIAIAFAJQACAEAAACIgCAFQgBABAEAFIAEAFIAAAI");
	this.shape_1849.setTransform(582.1,480.5);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f().s("#292929").ss(0.3).p("ABFBhQAKgIgDgOQgCgNgNgEQAIgKgFgOQgFgPgNgDQAMgKABgIQABgKgIgGQgJgHgKABQgDABgCgCQgBAAgBgDIgHgOQgBgBgFgFQgCgDACgDQADgIgCAAQgFAAAAgCQgDgNgDgHQgDgMgGAAQgIAAAAANQAAASgCADQgDAHgGAIQgEAHAGAGQgIACgDAJIgCAGIgHAHQgGAGgDAIQgCAJACAIQgGgBgJAPQgKASABAX");
	this.shape_1850.setTransform(571,487.7);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f().s("#292929").ss(0.3).p("AghASIACACQAIACAHgDQAIgEgBgJQAFABAEgDQAFgDADgEQADgHABgKQAAgCAAgCAAMgUQAAAFADAFQAEAGAGADQAHABAAAE");
	this.shape_1851.setTransform(570.6,498.9);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f().s("#292929").ss(0.3).p("ABEAeQACAMgEAIQgCAEgFADQgFADgEgBQAEALgJALQgIALgMgCQACAHgEAHQgDAGgHACQgDABgMABQgKAAgEAFQgJgKABgNQgNABgKgJQgLgKABgNQgIgFgCgLQgCgKAEgJQADgFAAgDQABgCgCgIQgBgNASgLQgKgEgCgMQgDgLAGgIQAEACABAFQACAFgDAEQAMAEADANQADgMAJgKQgDgVAQgNQgEgCgBgFQAAgFACgEQACgDAEgFQADgFgBgEIgBgHQAAgIAHgCQAGgCAFAGQACAGABABQABACAEABQAEACABACQADADABAKQABADAGAIQAFAGAAAFQAAACgDAGQAAAEADAEQABACADAFQADAGgCAHQgBAGgGAEQAHgEADALQACAGABAIQACADAIAGQAFAHACAOg");
	this.shape_1852.setTransform(558.6,497.1);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f().s("#292929").ss(0.3).p("AhEgIQAIgdASgSQASgSAXAAQAcAAAVAcQAVAcAAAnQAAAcgMAY");
	this.shape_1853.setTransform(479.2,454.5);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f().s("#292929").ss(0.3).p("AAMgKQgKAAgEAHQgHAHAHAH");
	this.shape_1854.setTransform(479.2,432.6);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f().s("#292929").ss(0.3).p("AgQAIQgCgBADgDQAJgHAGgDQAMgDAGAH");
	this.shape_1855.setTransform(477.2,436.2);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f().s("#292929").ss(0.3).p("ADPCCIi4kBIjoAj");
	this.shape_1856.setTransform(481,454.7);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f().s("#292929").ss(0.3).p("AgPAAIAfAA");
	this.shape_1857.setTransform(557.6,312.4);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f().s("#292929").ss(0.3).p("AACAbQAJgMgFgPQgDgJgKgT");
	this.shape_1858.setTransform(560.1,323.6);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f().s("#292929").ss(0.3).p("AAFAmQgIgQAAgNIAAgw");
	this.shape_1859.setTransform(557.9,315.4);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f().s("#292929").ss(0.3).p("AgBAbQgJgMAFgPQADgIAKgV");
	this.shape_1860.setTransform(555,323.6);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f().s("#292929").ss(0.3).p("AgEAQQAIgRAAgL");
	this.shape_1861.setTransform(557.2,317.6);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1862.setTransform(559.5,332);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1863.setTransform(555.4,332);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1864.setTransform(554,331.5);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABG");
	this.shape_1865.setTransform(558.2,332.2);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1866.setTransform(556.8,332.1);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f().s("#292929").ss(0.3).p("AgGABIANgB");
	this.shape_1867.setTransform(556.1,332.5);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f().s("#292929").ss(0.3).p("AgGAAIANAA");
	this.shape_1868.setTransform(558.9,332.4);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f().s("#292929").ss(0.3).p("AAigNQAKAEAAAGQABAGgNAFQgNAGgTAAQgRABgNgFQgNgEgBgGQAAgGAJgE");
	this.shape_1869.setTransform(557.6,334.3);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f().s("#292929").ss(0.3).p("AgsgOIAAANQABAGANAEQANAFARgBQATgBANgFQANgFgBgGIAAgN");
	this.shape_1870.setTransform(557.6,335.7);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f().s("#292929").ss(0.3).p("AgmgLIAAAKQAAAEAMADQALAEAPgBQARAAALgEQALgFAAgEIAAgK");
	this.shape_1871.setTransform(557.6,337.4);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f().s("#292929").ss(0.3).p("AASAAQAAACgFACQgGACgHAAQgRABAAgHQAAgFARgBQAHAAAGACQAFACAAACg");
	this.shape_1872.setTransform(557.6,318.6);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f().s("#292929").ss(0.3).p("AgRgHIAAAGQAAAFARAAQASgBAAgGIAAgF");
	this.shape_1873.setTransform(557.6,319.4);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f().s("#292929").ss(0.3).p("AAGgHQAPACAAAFQAAADgGACQgGADgJAAQgIABgGgDQgGgCAAgDQgBgEAPgE");
	this.shape_1874.setTransform(557.6,319.5);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f().s("#292929").ss(0.3).p("AgUgIIAAAHQAAACAGACQAGACAIAAQAJgBAGgCQAGgCAAgDIAAgG");
	this.shape_1875.setTransform(557.6,320.4);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f().s("#292929").ss(0.3).p("AAggLQAHAEAAAEQAAAFgLAEQgLAFgRABQgPAAgLgEQgMgDAAgGQAAgEAGgE");
	this.shape_1876.setTransform(557.6,326.4);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f().s("#292929").ss(0.3).p("AgmgNIAAAMQAAAFAMAEQALAEAPgBQAQgBAMgEQALgFAAgFIAAgL");
	this.shape_1877.setTransform(557.6,327.6);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f().s("#292929").ss(0.3).p("AAsAPIhXgd");
	this.shape_1878.setTransform(548.6,397.6);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f().s("#292929").ss(0.3).p("AAUAHIgmgN");
	this.shape_1879.setTransform(540.4,394.7);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1880.setTransform(534.6,392.7);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f().s("#292929").ss(0.3).p("AAbAJIg1gR");
	this.shape_1881.setTransform(528.1,390.5);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f().s("#292929").ss(0.3).p("AAsAPIhXgd");
	this.shape_1882.setTransform(549,396.7);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1883.setTransform(541,393.9);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f().s("#292929").ss(0.3).p("AATAHIgmgN");
	this.shape_1884.setTransform(535.3,391.9);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f().s("#292929").ss(0.3).p("AAbAJIg1gS");
	this.shape_1885.setTransform(528.7,389.7);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f().s("#292929").ss(0.3).p("AArAPIhVgd");
	this.shape_1886.setTransform(549.6,395.8);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1887.setTransform(541.6,393);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1888.setTransform(535.8,391);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f().s("#292929").ss(0.3).p("AAbAKIg1gS");
	this.shape_1889.setTransform(529.4,388.7);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f().s("#292929").ss(0.3).p("AApAPIhRgc");
	this.shape_1890.setTransform(549.9,395);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f().s("#292929").ss(0.3).p("AATAGIglgM");
	this.shape_1891.setTransform(542.1,392.2);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1892.setTransform(536.4,390.1);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1893.setTransform(529.9,387.8);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_1894.setTransform(550.3,394);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1895.setTransform(542.6,391.3);

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f().s("#292929").ss(0.3).p("AAUAHIgmgN");
	this.shape_1896.setTransform(536.9,389.3);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1897.setTransform(530.5,387);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_1898.setTransform(550.8,393.2);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1899.setTransform(543.1,390.5);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1900.setTransform(537.4,388.5);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1901.setTransform(531.1,386.3);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_1902.setTransform(551.4,392.4);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1903.setTransform(543.7,389.6);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1904.setTransform(538,387.6);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1905.setTransform(531.8,385.4);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f().s("#292929").ss(0.3).p("AAnAOIhNgb");
	this.shape_1906.setTransform(551.9,391.3);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1907.setTransform(544.2,388.6);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1908.setTransform(538.5,386.7);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f().s("#292929").ss(0.3).p("AAZAJIgxgR");
	this.shape_1909.setTransform(532.3,384.5);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f().s("#292929").ss(0.3).p("AAmANIhLgZ");
	this.shape_1910.setTransform(552.4,390.5);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.f().s("#292929").ss(0.3).p("AATAHIglgM");
	this.shape_1911.setTransform(544.9,387.9);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1912.setTransform(539.2,385.9);

	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.f().s("#292929").ss(0.3).p("AAZAIIgxgQ");
	this.shape_1913.setTransform(532.8,383.7);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.f().s("#292929").ss(0.3).p("AgiALIBGgV");
	this.shape_1914.setTransform(570.4,397.9);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngL");
	this.shape_1915.setTransform(577.7,395.6);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.f().s("#292929").ss(0.3).p("AgUAHIApgN");
	this.shape_1916.setTransform(583.5,393.7);

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.f().s("#292929").ss(0.3).p("AgYAIIAxgP");
	this.shape_1917.setTransform(589.9,391.7);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.f().s("#292929").ss(0.3).p("AghALIBDgV");
	this.shape_1918.setTransform(569.9,397.1);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1919.setTransform(577.1,394.7);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1920.setTransform(582.9,392.9);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.f().s("#292929").ss(0.3).p("AgXAIIAwgP");
	this.shape_1921.setTransform(589.2,390.9);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.f().s("#292929").ss(0.3).p("AggALIBBgV");
	this.shape_1922.setTransform(569.5,396.2);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1923.setTransform(576.5,393.9);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngM");
	this.shape_1924.setTransform(582.3,391.9);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.f().s("#292929").ss(0.3).p("AgWAIIAtgP");
	this.shape_1925.setTransform(588.4,390);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.f().s("#292929").ss(0.3).p("AgfALIA/gV");
	this.shape_1926.setTransform(569.1,395.3);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngM");
	this.shape_1927.setTransform(576,393);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1928.setTransform(581.7,391.1);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.f().s("#292929").ss(0.3).p("AgXAIIAvgP");
	this.shape_1929.setTransform(587.8,389.1);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f().s("#292929").ss(0.3).p("AgdAKIA7gT");
	this.shape_1930.setTransform(568.5,394.4);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.f().s("#292929").ss(0.3).p("AgTAGIAmgL");
	this.shape_1931.setTransform(575.5,392.1);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1932.setTransform(581.2,390.2);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.f().s("#292929").ss(0.3).p("AgUAHIApgN");
	this.shape_1933.setTransform(587.2,388.3);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.f().s("#292929").ss(0.3).p("AgcAJIA5gR");
	this.shape_1934.setTransform(568.1,393.6);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1935.setTransform(574.9,391.4);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1936.setTransform(580.7,389.5);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1937.setTransform(586.6,387.5);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.f().s("#292929").ss(0.3).p("AgbAJIA3gR");
	this.shape_1938.setTransform(567.7,392.7);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.f().s("#292929").ss(0.3).p("AgSAGIAlgL");
	this.shape_1939.setTransform(574.4,390.5);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1940.setTransform(580.1,388.6);

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1941.setTransform(585.9,386.7);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.f().s("#292929").ss(0.3).p("AgaAJIA0gR");
	this.shape_1942.setTransform(567.3,391.8);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1943.setTransform(573.8,389.6);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1944.setTransform(579.6,387.7);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.f().s("#292929").ss(0.3).p("AgSAGIAlgL");
	this.shape_1945.setTransform(585.3,385.8);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f().s("#292929").ss(0.3).p("AgZAJIAzgR");
	this.shape_1946.setTransform(566.9,390.9);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1947.setTransform(573.2,388.8);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1948.setTransform(579.1,386.8);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f().s("#292929").ss(0.3).p("AgRAGIAjgL");
	this.shape_1949.setTransform(584.6,385);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f().s("#292929").ss(0.3).p("AAUgGIgnAN");
	this.shape_1950.setTransform(578.4,385.8);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.f().s("#292929").ss(0.3).p("AAVgGIgpAN");
	this.shape_1951.setTransform(572.7,387.8);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f().s("#292929").ss(0.3).p("AAagHIgzAQ");
	this.shape_1952.setTransform(566.4,389.9);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngL");
	this.shape_1953.setTransform(578,396.1);

	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.f().s("#292929").ss(0.3).p("AgTAGIAogM");
	this.shape_1954.setTransform(583.9,394.2);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.f().s("#292929").ss(0.3).p("Ah7jyIC+CoIAbAmQAbAxAAA+QAABjACA2IgpAO");
	this.shape_1955.setTransform(574,360.4);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f().s("#292929").ss(0.3).p("AhCDcIgCmFICMgu");
	this.shape_1956.setTransform(566.9,418.9);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.f().s("#292929").ss(0.3).p("AgqBCIAxgQIAqgEIhnhx");
	this.shape_1957.setTransform(591.9,386.3);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAIAAgPIhNh3g");
	this.shape_1958.setTransform(572.6,391.4);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAJAAgQIhNh3g");
	this.shape_1959.setTransform(578.3,389.5);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAIAAgPIhNh3IACAgg");
	this.shape_1960.setTransform(584.1,387.5);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIABgQIBMh2g");
	this.shape_1961.setTransform(545.3,390.8);

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIAAgPIBNh3g");
	this.shape_1962.setTransform(539.5,388.9);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIAAgQIBNh2g");
	this.shape_1963.setTransform(533.8,387);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f().s("#292929").ss(0.3).p("ABVAWIiogr");
	this.shape_1964.setTransform(550.7,351.7);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f().s("#292929").ss(0.3).p("ABCgOIiDAd");
	this.shape_1965.setTransform(568.4,352.5);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f().s("#292929").ss(0.3).p("ABsAfIjXg9");
	this.shape_1966.setTransform(548.8,356.3);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f().s("#292929").ss(0.3).p("ABWgWIiqAu");
	this.shape_1967.setTransform(570.7,357.1);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f().s("#292929").ss(0.3).p("ACBAnIkBhO");
	this.shape_1968.setTransform(544.9,383.7);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f().s("#292929").ss(0.3).p("Ah/jsIAOA6QANA+ACAbQABAXAKBOQAHBdgIB+IDbhE");
	this.shape_1969.setTransform(571.2,362);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f().s("#292929").ss(0.3).p("ABpjqIALA3QAMA9AAAbQABAXAHBOQAFBegNB+IkMhN");
	this.shape_1970.setTransform(546.2,361.8);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f().s("#292929").ss(0.3).p("AB0jRIiuCcQgOALgNAXQgbAtAAA+QAABjgBAW");
	this.shape_1971.setTransform(543.4,359.1);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f().s("#292929").ss(0.3).p("AB5jrIi4CjQgNANgNAZQgbAxAAA+QAABjgCAmIA+AV");
	this.shape_1972.setTransform(541.5,360.2);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f().s("#292929").ss(0.3).p("AgUgGIAqAN");
	this.shape_1973.setTransform(539.6,384.9);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f().s("#292929").ss(0.3).p("AgUgGIApAN");
	this.shape_1974.setTransform(545.3,386.8);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f().s("#292929").ss(0.3).p("AgmgMIBNAZ");
	this.shape_1975.setTransform(552.8,389.3);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f().s("#292929").ss(0.3).p("Ah1j5ICyCeIAbAiQAbAuAAA9QAABjABAkIjVBA");
	this.shape_1976.setTransform(572.3,362.8);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAiAQIABg3QAAgTgFgNQgEgNgJAAQgHAAgFANQgFAMAAAUg");
	this.shape_1977.setTransform(529.7,404.4);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAjAQIAAg3QAAgTgFgMQgEgNgJAAQgHAAgFANQgFAMAAATg");
	this.shape_1978.setTransform(538.4,407.7);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f().s("#292929").ss(0.3).p("AgQgGIgBAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgHAAgFANQgEAMAAATg");
	this.shape_1979.setTransform(547.1,411);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f().s("#292929").ss(0.3).p("ABIBcIhDitIhMCu");
	this.shape_1980.setTransform(559.9,390.2);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f().s("#292929").ss(0.3).p("AgZgGIAzAN");
	this.shape_1981.setTransform(557.4,401.2);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f().s("#292929").ss(0.3).p("AguA2IBdhr");
	this.shape_1982.setTransform(524.9,384.7);

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f().s("#292929").ss(0.3).p("AAYCkIAAlIIgvAAIAAFO");
	this.shape_1983.setTransform(522.6,406.6);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f().s("#292929").ss(0.3).p("AA2DGIAAlfIhugn");
	this.shape_1984.setTransform(549.4,415.9);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1985.setTransform(540,395.3);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1986.setTransform(534.4,393.3);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f().s("#292929").ss(0.3).p("AAcAwIg2gTIA5hO");
	this.shape_1987.setTransform(527.7,387.1);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAFAMAAATg");
	this.shape_1988.setTransform(586.6,405.7);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAJAAAFANQAEAMAAATg");
	this.shape_1989.setTransform(578.7,408.4);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_1990.setTransform(570.8,411);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f().s("#292929").ss(0.3).p("AA3iFIgEFFIgkANIAAlPIhGhO");
	this.shape_1991.setTransform(591.3,404.3);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f().s("#292929").ss(0.3).p("AiBAHIDODDIAzgYIAAmB");
	this.shape_1992.setTransform(552.6,420.9);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f().s("#292929").ss(0.3).p("AgbA2IA3AZIAAhmQAAgJgDgLQgUg7gVAgQgJAOAAATg");
	this.shape_1993.setTransform(506.5,495.3);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f().s("#292929").ss(0.3).p("AAAhTIAACn");
	this.shape_1994.setTransform(583.1,469.1);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgNQAEgNAIAAQAIAAAFANQAFAMAAAUg");
	this.shape_1995.setTransform(548.8,509.1);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_1996.setTransform(541.4,512.3);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f().s("#292929").ss(0.3).p("AgfBZIA/gcIAAhIQAAgjgIgWQgJgXgPAAQgOAAgJAXQgIAWAAAjg");
	this.shape_1997.setTransform(553,476.1,1,1,0,0,0,0,-0.2);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f().s("#292929").ss(0.3).p("AgeBXIA+gbIAAhDQAAgjgIgWQgJgYgPAAQgOAAgJAYQgIAWAAAjg");
	this.shape_1998.setTransform(543.1,480.4,1,1,0,0,0,0,-0.1);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f().s("#292929").ss(0.3).p("AgfgGQAAgiAIgUQAJgXAOAAQAQAAAIAXQAIAUAAAiIAAA/Ig/Ab");
	this.shape_1999.setTransform(533.2,484.5);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAFAMAAATg");
	this.shape_2000.setTransform(534.1,515.5);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgIAAgEANQgFAMAAATg");
	this.shape_2001.setTransform(508.8,461);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_2002.setTransform(519.7,461.8);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgUAFgMQAFgNAHAAQAJAAAEANQAFANAAATg");
	this.shape_2003.setTransform(526.8,518.7);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f().s("#292929").ss(0.3).p("ACag7IkzB2");
	this.shape_2004.setTransform(544.4,464.9);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f().s("#292929").ss(0.3).p("AikBAIFJh/");
	this.shape_2005.setTransform(543.4,461.9);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f().s("#292929").ss(0.3).p("AAAjmIAAHN");
	this.shape_2006.setTransform(601.6,463.8);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f().s("#292929").ss(0.3).p("ABvAKQgFA2gkAiQgkAigtgEQgugEgdgpQgdgoAFg0QAFg1AkgjQAkgiAsAEQAvAEAdApQAdAogFA0g");
	this.shape_2007.setTransform(582.2,448);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f().s("#292929").ss(0.3).p("ABJAHQgEAjgXAXQgYAXgdgCQgegDgTgbQgTgbADgjQAEgjAXgYQAYgXAdADQAeADATAbQATAbgDAjg");
	this.shape_2008.setTransform(582.7,448.1);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f().s("#292929").ss(0.3).p("Ag0BbIBmgkIAAiW");
	this.shape_2009.setTransform(598.2,434.6);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f().s("#292929").ss(0.3).p("ADQjhIhyAtQACEdgDAAIkrB6");
	this.shape_2010.setTransform(550.5,473.6);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f().s("#292929").ss(0.3).p("AhPBtICGjXIAXAAIACC3");
	this.shape_2011.setTransform(573.6,427.7);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f().s("#292929").ss(0.3).p("AiSBKIiRiEIABARQADAWALAaQAiBVBfBigADZiLIBDAaIhvAsIhqh8IiNDpIhIAi");
	this.shape_2012.setTransform(574.7,436.4);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f().s("#292929").ss(0.3).p("AiaggIIujBIjPAXIpTDQID0gmIC7EI");
	this.shape_2013.setTransform(499.2,444.2);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f().s("#292929").ss(0.3).p("ABlArIhhhTIhpBC");
	this.shape_2014.setTransform(514.6,443.5);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f().s("#292929").ss(0.3).p("Ag0AhIAAgdIBcA0IANh2");
	this.shape_2015.setTransform(509.7,445.7);

	this.shape_2016 = new cjs.Shape();
	this.shape_2016.graphics.f().s("#292929").ss(0.3).p("AA3gCIAAgcIhtAiIAAAh");
	this.shape_2016.setTransform(519.2,450.9);

	this.shape_2017 = new cjs.Shape();
	this.shape_2017.graphics.f().s("#292929").ss(0.3).p("ABoAPIAXgHIAAgJIgVgMIh2ApIhcg3IgWAEIAAAJIASAK");
	this.shape_2017.setTransform(515,451.8);

	this.shape_2018 = new cjs.Shape();
	this.shape_2018.graphics.f().s("#292929").ss(0.3).p("AADhNIAACCIgEAHIADAQ");
	this.shape_2018.setTransform(513.4,464.8);

	this.shape_2019 = new cjs.Shape();
	this.shape_2019.graphics.f().s("#292929").ss(0.3).p("AhqBCIAAiCIBhA6IB0gmIAAB2");
	this.shape_2019.setTransform(514.7,457.8);

	this.shape_2020 = new cjs.Shape();
	this.shape_2020.graphics.f().s("#292929").ss(0.3).p("ABvABIAGgMIAAgJIgMAAIh0AwIhgg4IgJAAIAAALIAKAO");
	this.shape_2020.setTransform(514.9,467.3);

	this.shape_2021 = new cjs.Shape();
	this.shape_2021.graphics.f().s("#292929").ss(0.3).p("ACFgBIgXgVIiAAyIhZg3IgaAK");
	this.shape_2021.setTransform(514.9,469.7);

	this.shape_2022 = new cjs.Shape();
	this.shape_2022.graphics.f().s("#292929").ss(0.3).p("Ag5gYIAAgMIBwBKIADgd");
	this.shape_2022.setTransform(507.3,471.6);

	this.shape_2023 = new cjs.Shape();
	this.shape_2023.graphics.f().s("#292929").ss(0.3).p("AA+ApIhxhQIgMAA");
	this.shape_2023.setTransform(506.6,473.1);

	this.shape_2024 = new cjs.Shape();
	this.shape_2024.graphics.f().s("#292929").ss(0.3).p("ABHgYIAAgOIiZA6IAAASgABYgXIgRAAIAAgB");
	this.shape_2024.setTransform(521.1,473.4);

	this.shape_2025 = new cjs.Shape();
	this.shape_2025.graphics.f().s("#292929").ss(0.3).p("AARhwIAADYIgjgZ");
	this.shape_2025.setTransform(519.5,522);

	this.shape_2026 = new cjs.Shape();
	this.shape_2026.graphics.f().s("#292929").ss(0.3).p("AAOAkIgZgSIAAg5");
	this.shape_2026.setTransform(513.9,524.6);

	this.shape_2027 = new cjs.Shape();
	this.shape_2027.graphics.f().s("#292929").ss(0.3).p("AAAA/IAAh9");
	this.shape_2027.setTransform(512.8,512.3);

	this.shape_2028 = new cjs.Shape();
	this.shape_2028.graphics.f().s("#292929").ss(0.3).p("AjDAWIBUAsIE0iE");
	this.shape_2028.setTransform(532.4,504.1);

	this.shape_2029 = new cjs.Shape();
	this.shape_2029.graphics.f().s("#292929").ss(0.3).p("AgWiiIgBABIh8hXIAAHiIAeAVAgWiiIAAEaICqhHIAAkXg");
	this.shape_2029.setTransform(515.1,494.3);

	this.shape_2030 = new cjs.Shape();
	this.shape_2030.graphics.f().s("#292929").ss(0.3).p("AgLgDIAXAH");
	this.shape_2030.setTransform(473.4,439.1);

	this.shape_2031 = new cjs.Shape();
	this.shape_2031.graphics.f().s("#292929").ss(0.3).p("AgKAEIAVgH");
	this.shape_2031.setTransform(450.2,437.9);

	this.shape_2032 = new cjs.Shape();
	this.shape_2032.graphics.f().s("#292929").ss(0.3).p("AgKBgIhggzIAAiIIBhA7IBzgmIAAB/g");
	this.shape_2032.setTransform(461.7,433);

	this.shape_2033 = new cjs.Shape();
	this.shape_2033.graphics.f().s("#292929").ss(0.3).p("AgQgGIgBAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgHAAgFANQgEAMAAATg");
	this.shape_2033.setTransform(456,434);

	this.shape_2034 = new cjs.Shape();
	this.shape_2034.graphics.f().s("#292929").ss(0.3).p("AARgGIABAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAEAMAAATg");
	this.shape_2034.setTransform(466.8,434.8);

	this.shape_2035 = new cjs.Shape();
	this.shape_2035.graphics.f().s("#292929").ss(0.3).p("ABlArIhhhTIhpBC");
	this.shape_2035.setTransform(461.5,416);

	this.shape_2036 = new cjs.Shape();
	this.shape_2036.graphics.f().s("#292929").ss(0.3).p("Ag0AhIAAgdIBcA0IANh2");
	this.shape_2036.setTransform(456.6,418.2);

	this.shape_2037 = new cjs.Shape();
	this.shape_2037.graphics.f().s("#292929").ss(0.3).p("AA3gDIAAgbIhtAiIAAAh");
	this.shape_2037.setTransform(466.1,423.4);

	this.shape_2038 = new cjs.Shape();
	this.shape_2038.graphics.f().s("#292929").ss(0.3).p("ABoAQIAYgIIAAgJIgXgMIh1ApIhdg3IgWAEIAAAJIATAK");
	this.shape_2038.setTransform(461.9,424.3);

	this.shape_2039 = new cjs.Shape();
	this.shape_2039.graphics.f().s("#292929").ss(0.3).p("AADhLIAACCIgEAHIACAN");
	this.shape_2039.setTransform(460.3,437.1);

	this.shape_2040 = new cjs.Shape();
	this.shape_2040.graphics.f().s("#292929").ss(0.3).p("Ai3BiIFvjD");
	this.shape_2040.setTransform(539.6,522.6);

	this.shape_2041 = new cjs.Shape();
	this.shape_2041.graphics.f().s("#292929").ss(0.3).p("AgrAXIBXgt");
	this.shape_2041.setTransform(564.2,509.5);

	this.shape_2042 = new cjs.Shape();
	this.shape_2042.graphics.f().s("#292929").ss(0.3).p("AgLAGIAXgL");
	this.shape_2042.setTransform(572.1,505.4);

	this.shape_2043 = new cjs.Shape();
	this.shape_2043.graphics.f().s("#292929").ss(0.3).p("AgJgCIATAF");
	this.shape_2043.setTransform(604.2,434.9);

	this.shape_2044 = new cjs.Shape();
	this.shape_2044.graphics.f().s("#292929").ss(0.3).p("AgKjsIASgJIAAHy");
	this.shape_2044.setTransform(604.4,459.7);

	this.shape_2045 = new cjs.Shape();
	this.shape_2045.graphics.f().s("#292929").ss(0.3).p("AAUgGIgnAN");
	this.shape_2045.setTransform(590.8,425.5);

	this.shape_2046 = new cjs.Shape();
	this.shape_2046.graphics.f().s("#292929").ss(0.3).p("AgQgLIAhAX");
	this.shape_2046.setTransform(511,525.2);

	this.shape_2047 = new cjs.Shape();
	this.shape_2047.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_2047.setTransform(560.9,331.6);

	this.shape_2048 = new cjs.Shape();
	this.shape_2048.graphics.f().s("#292929").ss(0.3).p("Ag1BAQgCgEADgFQADgFAFgBQgCgEAHgHQAHgFABgEQABgBAAgIQAAgUARgMQADgCAAgCIAAgFQAAgCAFgGQAFgHADgPQAHgPAKADQAHACABAHQABAHgHADQAIADAEAJQADAIgDAIQAJAEABALQABAGgFAMQAEACABAEQACAEgBAEIAIAAIABAG");
	this.shape_2048.setTransform(478.5,432.2);

	var maskedShapeInstanceList = [this.instance_24,this.shape_1818,this.shape_1819,this.shape_1820,this.shape_1821,this.shape_1822,this.shape_1823,this.shape_1824,this.shape_1825,this.shape_1826,this.shape_1827,this.shape_1828,this.shape_1829,this.shape_1830,this.shape_1831,this.shape_1832,this.shape_1833,this.shape_1834,this.shape_1835,this.shape_1836,this.shape_1837,this.shape_1838,this.shape_1839,this.shape_1840,this.shape_1841,this.shape_1842,this.shape_1843,this.shape_1844,this.shape_1845,this.shape_1846,this.shape_1847,this.shape_1848,this.shape_1849,this.shape_1850,this.shape_1851,this.shape_1852,this.shape_1853,this.shape_1854,this.shape_1855,this.shape_1856,this.shape_1857,this.shape_1858,this.shape_1859,this.shape_1860,this.shape_1861,this.shape_1862,this.shape_1863,this.shape_1864,this.shape_1865,this.shape_1866,this.shape_1867,this.shape_1868,this.shape_1869,this.shape_1870,this.shape_1871,this.shape_1872,this.shape_1873,this.shape_1874,this.shape_1875,this.shape_1876,this.shape_1877,this.shape_1878,this.shape_1879,this.shape_1880,this.shape_1881,this.shape_1882,this.shape_1883,this.shape_1884,this.shape_1885,this.shape_1886,this.shape_1887,this.shape_1888,this.shape_1889,this.shape_1890,this.shape_1891,this.shape_1892,this.shape_1893,this.shape_1894,this.shape_1895,this.shape_1896,this.shape_1897,this.shape_1898,this.shape_1899,this.shape_1900,this.shape_1901,this.shape_1902,this.shape_1903,this.shape_1904,this.shape_1905,this.shape_1906,this.shape_1907,this.shape_1908,this.shape_1909,this.shape_1910,this.shape_1911,this.shape_1912,this.shape_1913,this.shape_1914,this.shape_1915,this.shape_1916,this.shape_1917,this.shape_1918,this.shape_1919,this.shape_1920,this.shape_1921,this.shape_1922,this.shape_1923,this.shape_1924,this.shape_1925,this.shape_1926,this.shape_1927,this.shape_1928,this.shape_1929,this.shape_1930,this.shape_1931,this.shape_1932,this.shape_1933,this.shape_1934,this.shape_1935,this.shape_1936,this.shape_1937,this.shape_1938,this.shape_1939,this.shape_1940,this.shape_1941,this.shape_1942,this.shape_1943,this.shape_1944,this.shape_1945,this.shape_1946,this.shape_1947,this.shape_1948,this.shape_1949,this.shape_1950,this.shape_1951,this.shape_1952,this.shape_1953,this.shape_1954,this.shape_1955,this.shape_1956,this.shape_1957,this.shape_1958,this.shape_1959,this.shape_1960,this.shape_1961,this.shape_1962,this.shape_1963,this.shape_1964,this.shape_1965,this.shape_1966,this.shape_1967,this.shape_1968,this.shape_1969,this.shape_1970,this.shape_1971,this.shape_1972,this.shape_1973,this.shape_1974,this.shape_1975,this.shape_1976,this.shape_1977,this.shape_1978,this.shape_1979,this.shape_1980,this.shape_1981,this.shape_1982,this.shape_1983,this.shape_1984,this.shape_1985,this.shape_1986,this.shape_1987,this.shape_1988,this.shape_1989,this.shape_1990,this.shape_1991,this.shape_1992,this.shape_1993,this.shape_1994,this.shape_1995,this.shape_1996,this.shape_1997,this.shape_1998,this.shape_1999,this.shape_2000,this.shape_2001,this.shape_2002,this.shape_2003,this.shape_2004,this.shape_2005,this.shape_2006,this.shape_2007,this.shape_2008,this.shape_2009,this.shape_2010,this.shape_2011,this.shape_2012,this.shape_2013,this.shape_2014,this.shape_2015,this.shape_2016,this.shape_2017,this.shape_2018,this.shape_2019,this.shape_2020,this.shape_2021,this.shape_2022,this.shape_2023,this.shape_2024,this.shape_2025,this.shape_2026,this.shape_2027,this.shape_2028,this.shape_2029,this.shape_2030,this.shape_2031,this.shape_2032,this.shape_2033,this.shape_2034,this.shape_2035,this.shape_2036,this.shape_2037,this.shape_2038,this.shape_2039,this.shape_2040,this.shape_2041,this.shape_2042,this.shape_2043,this.shape_2044,this.shape_2045,this.shape_2046,this.shape_2047,this.shape_2048];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_24;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},14).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.shape_2048},{t:this.shape_2047},{t:this.shape_2046},{t:this.shape_2045},{t:this.shape_2044},{t:this.shape_2043},{t:this.shape_2042},{t:this.shape_2041},{t:this.shape_2040},{t:this.shape_2039},{t:this.shape_2038},{t:this.shape_2037},{t:this.shape_2036},{t:this.shape_2035},{t:this.shape_2034},{t:this.shape_2033},{t:this.shape_2032},{t:this.shape_2031},{t:this.shape_2030},{t:this.shape_2029},{t:this.shape_2028},{t:this.shape_2027},{t:this.shape_2026},{t:this.shape_2025},{t:this.shape_2024},{t:this.shape_2023},{t:this.shape_2022},{t:this.shape_2021},{t:this.shape_2020},{t:this.shape_2019},{t:this.shape_2018},{t:this.shape_2017},{t:this.shape_2016},{t:this.shape_2015},{t:this.shape_2014},{t:this.shape_2013},{t:this.shape_2012},{t:this.shape_2011},{t:this.shape_2010},{t:this.shape_2009},{t:this.shape_2008},{t:this.shape_2007},{t:this.shape_2006},{t:this.shape_2005},{t:this.shape_2004},{t:this.shape_2003},{t:this.shape_2002},{t:this.shape_2001},{t:this.shape_2000},{t:this.shape_1999},{t:this.shape_1998},{t:this.shape_1997},{t:this.shape_1996},{t:this.shape_1995},{t:this.shape_1994},{t:this.shape_1993},{t:this.shape_1992},{t:this.shape_1991},{t:this.shape_1990},{t:this.shape_1989},{t:this.shape_1988},{t:this.shape_1987},{t:this.shape_1986},{t:this.shape_1985},{t:this.shape_1984},{t:this.shape_1983},{t:this.shape_1982},{t:this.shape_1981},{t:this.shape_1980},{t:this.shape_1979},{t:this.shape_1978},{t:this.shape_1977},{t:this.shape_1976},{t:this.shape_1975},{t:this.shape_1974},{t:this.shape_1973},{t:this.shape_1972},{t:this.shape_1971},{t:this.shape_1970},{t:this.shape_1969},{t:this.shape_1968},{t:this.shape_1967},{t:this.shape_1966},{t:this.shape_1965},{t:this.shape_1964},{t:this.shape_1963},{t:this.shape_1962},{t:this.shape_1961},{t:this.shape_1960},{t:this.shape_1959},{t:this.shape_1958},{t:this.shape_1957},{t:this.shape_1956},{t:this.shape_1955},{t:this.shape_1954},{t:this.shape_1953},{t:this.shape_1952},{t:this.shape_1951},{t:this.shape_1950},{t:this.shape_1949},{t:this.shape_1948},{t:this.shape_1947},{t:this.shape_1946},{t:this.shape_1945},{t:this.shape_1944},{t:this.shape_1943},{t:this.shape_1942},{t:this.shape_1941},{t:this.shape_1940},{t:this.shape_1939},{t:this.shape_1938},{t:this.shape_1937},{t:this.shape_1936},{t:this.shape_1935},{t:this.shape_1934},{t:this.shape_1933},{t:this.shape_1932},{t:this.shape_1931},{t:this.shape_1930},{t:this.shape_1929},{t:this.shape_1928},{t:this.shape_1927},{t:this.shape_1926},{t:this.shape_1925},{t:this.shape_1924},{t:this.shape_1923},{t:this.shape_1922},{t:this.shape_1921},{t:this.shape_1920},{t:this.shape_1919},{t:this.shape_1918},{t:this.shape_1917},{t:this.shape_1916},{t:this.shape_1915},{t:this.shape_1914},{t:this.shape_1913},{t:this.shape_1912},{t:this.shape_1911},{t:this.shape_1910},{t:this.shape_1909},{t:this.shape_1908},{t:this.shape_1907},{t:this.shape_1906},{t:this.shape_1905},{t:this.shape_1904},{t:this.shape_1903},{t:this.shape_1902},{t:this.shape_1901},{t:this.shape_1900},{t:this.shape_1899},{t:this.shape_1898},{t:this.shape_1897},{t:this.shape_1896},{t:this.shape_1895},{t:this.shape_1894},{t:this.shape_1893},{t:this.shape_1892},{t:this.shape_1891},{t:this.shape_1890},{t:this.shape_1889},{t:this.shape_1888},{t:this.shape_1887},{t:this.shape_1886},{t:this.shape_1885},{t:this.shape_1884},{t:this.shape_1883},{t:this.shape_1882},{t:this.shape_1881},{t:this.shape_1880},{t:this.shape_1879},{t:this.shape_1878},{t:this.shape_1877},{t:this.shape_1876},{t:this.shape_1875},{t:this.shape_1874},{t:this.shape_1873},{t:this.shape_1872},{t:this.shape_1871},{t:this.shape_1870},{t:this.shape_1869},{t:this.shape_1868},{t:this.shape_1867},{t:this.shape_1866},{t:this.shape_1865},{t:this.shape_1864},{t:this.shape_1863},{t:this.shape_1862},{t:this.shape_1861},{t:this.shape_1860},{t:this.shape_1859},{t:this.shape_1858},{t:this.shape_1857},{t:this.shape_1856},{t:this.shape_1855},{t:this.shape_1854},{t:this.shape_1853},{t:this.shape_1852},{t:this.shape_1851},{t:this.shape_1850},{t:this.shape_1849},{t:this.shape_1848},{t:this.shape_1847},{t:this.shape_1846},{t:this.shape_1845},{t:this.shape_1844},{t:this.shape_1843},{t:this.shape_1842},{t:this.shape_1841},{t:this.shape_1840},{t:this.shape_1839},{t:this.shape_1838},{t:this.shape_1837},{t:this.shape_1836},{t:this.shape_1835},{t:this.shape_1834},{t:this.shape_1833},{t:this.shape_1832},{t:this.shape_1831},{t:this.shape_1830},{t:this.shape_1829},{t:this.shape_1828},{t:this.shape_1827},{t:this.shape_1826},{t:this.shape_1825},{t:this.shape_1824},{t:this.shape_1823},{t:this.shape_1822},{t:this.shape_1821},{t:this.shape_1820},{t:this.shape_1819},{t:this.shape_1818}]},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(14).to({_off:false},0).wait(1).to({regX:78.1,regY:111,x:524.6,y:585},0).wait(1).to({x:525.1,y:551.3},0).wait(1).to({x:525.6,y:517.6},0).wait(1).to({x:526.1,y:484},0).wait(1).to({x:526.6,y:450.3},0).wait(1).to({x:527.1,y:416.6},0).wait(1).to({y:419.6},0).wait(1).to({y:422.6},0).to({_off:true},1).wait(71));

	// Poor-mask (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	var mask_25_graphics_17 = new cjs.Graphics().p("Ag3MjIgLlAIAkg8IhzgyIAChVIixhTIgHgwImriGIgapTIDdkYITbGGIBhNUIpNHQg");

	this.timeline.addTween(cjs.Tween.get(mask_25).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_25_graphics_17,x:680.2,y:480.8}).wait(77));

	// poor
	this.instance_25 = new lib.Symbol3();
	this.instance_25.parent = this;
	this.instance_25.setTransform(694.5,663.4,1,1,0,0,0,80.2,75.5);
	this.instance_25._off = true;

	this.shape_2049 = new cjs.Shape();
	this.shape_2049.graphics.f().s("#292929").ss(0.3).p("AARgHQgCAFgGACQgLAIgSgE");
	this.shape_2049.setTransform(683.9,437.4);

	this.shape_2050 = new cjs.Shape();
	this.shape_2050.graphics.f().s("#292929").ss(0.3).p("AANgNQAAAFgEAGQgIAMgRAE");
	this.shape_2050.setTransform(683.7,435.4);

	this.shape_2051 = new cjs.Shape();
	this.shape_2051.graphics.f().s("#292929").ss(0.3).p("AAEgUIACAMQgBANgMAL");
	this.shape_2051.setTransform(682.4,434.4);

	this.shape_2052 = new cjs.Shape();
	this.shape_2052.graphics.f().s("#292929").ss(0.3).p("AgDgSIAFAKQAEANgIAO");
	this.shape_2052.setTransform(680.8,433.7);

	this.shape_2053 = new cjs.Shape();
	this.shape_2053.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_2053.setTransform(678.8,434);

	this.shape_2054 = new cjs.Shape();
	this.shape_2054.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2054.setTransform(677,434.7);

	this.shape_2055 = new cjs.Shape();
	this.shape_2055.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2055.setTransform(675.2,435.4);

	this.shape_2056 = new cjs.Shape();
	this.shape_2056.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_2056.setTransform(673.4,436.1);

	this.shape_2057 = new cjs.Shape();
	this.shape_2057.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2057.setTransform(671.5,437);

	this.shape_2058 = new cjs.Shape();
	this.shape_2058.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2058.setTransform(669.7,437.7);

	this.shape_2059 = new cjs.Shape();
	this.shape_2059.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_2059.setTransform(667.9,438.4);

	this.shape_2060 = new cjs.Shape();
	this.shape_2060.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2060.setTransform(666.1,439.1);

	this.shape_2061 = new cjs.Shape();
	this.shape_2061.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2061.setTransform(664.3,440);

	this.shape_2062 = new cjs.Shape();
	this.shape_2062.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2062.setTransform(662.5,440.7);

	this.shape_2063 = new cjs.Shape();
	this.shape_2063.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_2063.setTransform(660.5,441.5);

	this.shape_2064 = new cjs.Shape();
	this.shape_2064.graphics.f().s("#292929").ss(0.3).p("AAwhAIAAAxIhhBM");
	this.shape_2064.setTransform(736,534);

	this.shape_2065 = new cjs.Shape();
	this.shape_2065.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_2065.setTransform(729,536.9);

	this.shape_2066 = new cjs.Shape();
	this.shape_2066.graphics.f().s("#292929").ss(0.3).p("ABkhOIAKAUIh2BUIhbgqIBBBTQAJAHALACQALACAGgEQAEgCACgFQACgFgCgEIgEgEIgHgHIgDgCIgGgBQgEgBgFADIgFAEIgCADQgBAEAGAGQAGADACABQAGABADgDIABgBQACgDgBgDQgBgFgEAA");
	this.shape_2066.setTransform(729.8,533.4);

	this.shape_2067 = new cjs.Shape();
	this.shape_2067.graphics.f().s("#292929").ss(0.3).p("AAWglIAAA6QgCAFgHAEQgNAGgYgJ");
	this.shape_2067.setTransform(728.7,543.3);

	this.shape_2068 = new cjs.Shape();
	this.shape_2068.graphics.f().s("#292929").ss(0.3).p("AgcAfIA3gtIAAgPIgKAA");
	this.shape_2068.setTransform(723.4,548);

	this.shape_2069 = new cjs.Shape();
	this.shape_2069.graphics.f().s("#292929").ss(0.3).p("AgYAcIAvgmIAAgQIgLAA");
	this.shape_2069.setTransform(722.8,546.1);

	this.shape_2070 = new cjs.Shape();
	this.shape_2070.graphics.f().s("#292929").ss(0.3).p("AgVAaIAqgiIAAgPIgLAA");
	this.shape_2070.setTransform(722,544.2);

	this.shape_2071 = new cjs.Shape();
	this.shape_2071.graphics.f().s("#292929").ss(0.3).p("AgWAbIAsgkIAAgPIgLAA");
	this.shape_2071.setTransform(720.8,542.7);

	this.shape_2072 = new cjs.Shape();
	this.shape_2072.graphics.f().s("#292929").ss(0.3).p("AgYAcIAvgmIAAgQIgLAA");
	this.shape_2072.setTransform(719.7,541.2);

	this.shape_2073 = new cjs.Shape();
	this.shape_2073.graphics.f().s("#292929").ss(0.3).p("AAXgcIAAAPIguAm");
	this.shape_2073.setTransform(718.6,539.8);

	this.shape_2074 = new cjs.Shape();
	this.shape_2074.graphics.f().s("#292929").ss(0.3).p("AgfAYIA3gsIgLgC");
	this.shape_2074.setTransform(718.6,539);

	this.shape_2075 = new cjs.Shape();
	this.shape_2075.graphics.f().s("#292929").ss(0.3).p("AAAAJIAAgR");
	this.shape_2075.setTransform(727,539.6);

	this.shape_2076 = new cjs.Shape();
	this.shape_2076.graphics.f().s("#292929").ss(0.3).p("AAQANIgfgZ");
	this.shape_2076.setTransform(713,550.3);

	this.shape_2077 = new cjs.Shape();
	this.shape_2077.graphics.f().s("#292929").ss(0.3).p("AgzhdIBcBoQAHAIABALIACAmQgEAVgVADQgVACgMgTIAAgn");
	this.shape_2077.setTransform(715.5,545.2);

	this.shape_2078 = new cjs.Shape();
	this.shape_2078.graphics.f().s("#292929").ss(0.3).p("AArAsQgBgGgDgFIgDgFIhPhhAArAsQgBgBAAgBQgCgIgLgFIgHgCQgKAAgGAHQgGAHACAIQABAIAIAGQAGAFAIAAQAJAAAGgJQABgEABgEAAYAnQgHABgBAFQgBAFAGAEQAIAGAHgCQAEgCACgFQABgEAAgD");
	this.shape_2078.setTransform(714.6,544.3);

	this.shape_2079 = new cjs.Shape();
	this.shape_2079.graphics.f().s("#292929").ss(0.3).p("AAAA1IAAhp");
	this.shape_2079.setTransform(717.5,533.2);

	this.shape_2080 = new cjs.Shape();
	this.shape_2080.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABm");
	this.shape_2080.setTransform(718.1,532.7);

	this.shape_2081 = new cjs.Shape();
	this.shape_2081.graphics.f().s("#292929").ss(0.3).p("AAZhJIAABoIgzAo");
	this.shape_2081.setTransform(717.4,533.6);

	this.shape_2082 = new cjs.Shape();
	this.shape_2082.graphics.f().s("#292929").ss(0.3).p("AgsAQIA9gpIAWALIg8Aq");
	this.shape_2082.setTransform(716,527.7);

	this.shape_2083 = new cjs.Shape();
	this.shape_2083.graphics.f().s("#292929").ss(0.3).p("AgKAdIAAhMIAWALIAABc");
	this.shape_2083.setTransform(712.7,534.1);

	this.shape_2084 = new cjs.Shape();
	this.shape_2084.graphics.f().s("#292929").ss(0.3).p("AiPAkIBHglIBlAZIBzg7");
	this.shape_2084.setTransform(723.8,460);

	this.shape_2085 = new cjs.Shape();
	this.shape_2085.graphics.f().s("#292929").ss(0.3).p("AAQASIAAgsIgfATIABAq");
	this.shape_2085.setTransform(766.2,472.7);

	this.shape_2086 = new cjs.Shape();
	this.shape_2086.graphics.f().s("#292929").ss(0.3).p("AgPgKIABAeIAdgSIAAge");
	this.shape_2086.setTransform(766.4,479.4);

	this.shape_2087 = new cjs.Shape();
	this.shape_2087.graphics.f().s("#292929").ss(0.3).p("AASAUIAAgzIgjAUIAAAz");
	this.shape_2087.setTransform(756.5,477.5);

	this.shape_2088 = new cjs.Shape();
	this.shape_2088.graphics.f().s("#292929").ss(0.3).p("AgRgLIABAiIAigVIAAgh");
	this.shape_2088.setTransform(756.7,485.4);

	this.shape_2089 = new cjs.Shape();
	this.shape_2089.graphics.f().s("#292929").ss(0.3).p("AiIEMQAIgGAGg1QACgRAAgVIgBkLQAAgNADgQQAIggAXgKQAXgKA4geQA+giBIgoIAJANIjLB6QgcAVAAAiIAAEDIADAsQAGAuAQAHQgSAQgNACQgSADgQgSg");
	this.shape_2089.setTransform(759.2,500.5);

	this.shape_2090 = new cjs.Shape();
	this.shape_2090.graphics.f().s("#292929").ss(0.3).p("AAEA8IgGAIIAAh/IAGgIg");
	this.shape_2090.setTransform(743.4,517.3);

	this.shape_2091 = new cjs.Shape();
	this.shape_2091.graphics.f().s("#292929").ss(0.3).p("AgLAnIAAg1IAXgYIAAA3g");
	this.shape_2091.setTransform(743.3,507.6,1,1,0,0,0,0,-0.4);

	this.shape_2092 = new cjs.Shape();
	this.shape_2092.graphics.f().s("#292929").ss(0.3).p("AAQAIIgfgP");
	this.shape_2092.setTransform(745.4,519.5);

	this.shape_2093 = new cjs.Shape();
	this.shape_2093.graphics.f().s("#292929").ss(0.3).p("AARAJIghgR");
	this.shape_2093.setTransform(741.3,517.4);

	this.shape_2094 = new cjs.Shape();
	this.shape_2094.graphics.f().s("#292929").ss(0.3).p("AAAgZIAAAz");
	this.shape_2094.setTransform(635.8,437.5);

	this.shape_2095 = new cjs.Shape();
	this.shape_2095.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgM");
	this.shape_2095.setTransform(715.1,440.8);

	this.shape_2096 = new cjs.Shape();
	this.shape_2096.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_2096.setTransform(709.8,441.2);

	this.shape_2097 = new cjs.Shape();
	this.shape_2097.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgM");
	this.shape_2097.setTransform(712.7,441.5);

	this.shape_2098 = new cjs.Shape();
	this.shape_2098.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngaIALge");
	this.shape_2098.setTransform(712.6,445.4);

	this.shape_2099 = new cjs.Shape();
	this.shape_2099.graphics.f().s("#292929").ss(0.3).p("AAsgFQACAOgMAMQgLAMgTACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAOAIQAPAJABAOg");
	this.shape_2099.setTransform(712.3,440);

	this.shape_2100 = new cjs.Shape();
	this.shape_2100.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAFQgKAGgOACQgOACgKgDQgLgCgBgGQAAgFAJgGQAJgFAPgDQANgCALADQALADAAAGg");
	this.shape_2100.setTransform(712.1,438.1);

	this.shape_2101 = new cjs.Shape();
	this.shape_2101.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_2101.setTransform(687.6,457.7);

	this.shape_2102 = new cjs.Shape();
	this.shape_2102.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_2102.setTransform(682.3,458.1);

	this.shape_2103 = new cjs.Shape();
	this.shape_2103.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_2103.setTransform(685.2,458.5);

	this.shape_2104 = new cjs.Shape();
	this.shape_2104.graphics.f().s("#292929").ss(0.3).p("AgfgkIASBKIAsgFIgVhK");
	this.shape_2104.setTransform(653.5,455.4);

	this.shape_2105 = new cjs.Shape();
	this.shape_2105.graphics.f().s("#292929").ss(0.3).p("ABtgXIAQABQAQAEAAAIQAAASgpAOQgqANg6AAQg6AAgpgNQgpgOAAgSIAIgLQANgLAbgC");
	this.shape_2105.setTransform(648.6,447.4);

	this.shape_2106 = new cjs.Shape();
	this.shape_2106.graphics.f().s("#292929").ss(0.3).p("ABOgNQgUAMgeAHQg6AQgvgT");
	this.shape_2106.setTransform(651.8,439.3);

	this.shape_2107 = new cjs.Shape();
	this.shape_2107.graphics.f().s("#292929").ss(0.3).p("AAAg0IAABp");
	this.shape_2107.setTransform(644.1,443);

	this.shape_2108 = new cjs.Shape();
	this.shape_2108.graphics.f().s("#292929").ss(0.3).p("ABkhBIAABeQhrA7hdgwIAAhl");
	this.shape_2108.setTransform(649.5,442.7);

	this.shape_2109 = new cjs.Shape();
	this.shape_2109.graphics.f().s("#292929").ss(0.3).p("ACQBnIiUjxIiJDzQCgBOB9hQg");
	this.shape_2109.setTransform(648.9,423.9);

	this.shape_2110 = new cjs.Shape();
	this.shape_2110.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_2110.setTransform(638,437.5);

	this.shape_2111 = new cjs.Shape();
	this.shape_2111.graphics.f().s("#292929").ss(0.3).p("AgTgGIAnAN");
	this.shape_2111.setTransform(666.6,497.3);

	this.shape_2112 = new cjs.Shape();
	this.shape_2112.graphics.f().s("#292929").ss(0.3).p("AgQgEIAhAK");
	this.shape_2112.setTransform(668.4,510.3);

	this.shape_2113 = new cjs.Shape();
	this.shape_2113.graphics.f().s("#292929").ss(0.3).p("AgPgFIAeAL");
	this.shape_2113.setTransform(668.8,486.4);

	this.shape_2114 = new cjs.Shape();
	this.shape_2114.graphics.f().s("#292929").ss(0.3).p("ACOgaQAAAYgqANQglAMg/AAQg7AAgpgOQgsgNAEgW");
	this.shape_2114.setTransform(648.5,449.4);

	this.shape_2115 = new cjs.Shape();
	this.shape_2115.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_2115.setTransform(658.5,452.7);

	this.shape_2116 = new cjs.Shape();
	this.shape_2116.graphics.f().s("#292929").ss(0.3).p("AALgbIAAAuIgOADIgHgHIAAgj");
	this.shape_2116.setTransform(658.7,452.7);

	this.shape_2117 = new cjs.Shape();
	this.shape_2117.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_2117.setTransform(639.6,452.7);

	this.shape_2118 = new cjs.Shape();
	this.shape_2118.graphics.f().s("#292929").ss(0.3).p("AgKgZIAAAqIAOAEIAHgHIAAgi");
	this.shape_2118.setTransform(639.4,452.9);

	this.shape_2119 = new cjs.Shape();
	this.shape_2119.graphics.f().s("#292929").ss(0.3).p("AA5AUIg9gSIgzgV");
	this.shape_2119.setTransform(672.2,520.9);

	this.shape_2120 = new cjs.Shape();
	this.shape_2120.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_2120.setTransform(711.9,514);

	this.shape_2121 = new cjs.Shape();
	this.shape_2121.graphics.f().s("#292929").ss(0.3).p("AgWgbIAogQIACBJIgoAR");
	this.shape_2121.setTransform(712.6,514);

	this.shape_2122 = new cjs.Shape();
	this.shape_2122.graphics.f().s("#292929").ss(0.3).p("AAOgFIgbAK");
	this.shape_2122.setTransform(711.5,503.4);

	this.shape_2123 = new cjs.Shape();
	this.shape_2123.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAQ");
	this.shape_2123.setTransform(712.3,503.3);

	this.shape_2124 = new cjs.Shape();
	this.shape_2124.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_2124.setTransform(711.5,492.7);

	this.shape_2125 = new cjs.Shape();
	this.shape_2125.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAR");
	this.shape_2125.setTransform(712.3,492.6);

	this.shape_2126 = new cjs.Shape();
	this.shape_2126.graphics.f().s("#292929").ss(0.3).p("AAOgFIgbAK");
	this.shape_2126.setTransform(711.5,482);

	this.shape_2127 = new cjs.Shape();
	this.shape_2127.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAQ");
	this.shape_2127.setTransform(712.3,482);

	this.shape_2128 = new cjs.Shape();
	this.shape_2128.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_2128.setTransform(711.5,471.3);

	this.shape_2129 = new cjs.Shape();
	this.shape_2129.graphics.f().s("#292929").ss(0.3).p("AgVgbIAngPIACBJIgqAP");
	this.shape_2129.setTransform(712.3,471.2);

	this.shape_2130 = new cjs.Shape();
	this.shape_2130.graphics.f().s("#292929").ss(0.3).p("AAAgdIAAA7");
	this.shape_2130.setTransform(664.7,505.1);

	this.shape_2131 = new cjs.Shape();
	this.shape_2131.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhN");
	this.shape_2131.setTransform(666.8,506.6);

	this.shape_2132 = new cjs.Shape();
	this.shape_2132.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2132.setTransform(665.7,508);

	this.shape_2133 = new cjs.Shape();
	this.shape_2133.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2133.setTransform(665.7,507.4);

	this.shape_2134 = new cjs.Shape();
	this.shape_2134.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2134.setTransform(665.7,506.5);

	this.shape_2135 = new cjs.Shape();
	this.shape_2135.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2135.setTransform(665.7,505.1);

	this.shape_2136 = new cjs.Shape();
	this.shape_2136.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2136.setTransform(665.7,504.2);

	this.shape_2137 = new cjs.Shape();
	this.shape_2137.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2137.setTransform(665.7,503.3);

	this.shape_2138 = new cjs.Shape();
	this.shape_2138.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2138.setTransform(665.7,502.6);

	this.shape_2139 = new cjs.Shape();
	this.shape_2139.graphics.f().s("#292929").ss(0.3).p("AgDgnIAABHIAKAD");
	this.shape_2139.setTransform(669,495.5);

	this.shape_2140 = new cjs.Shape();
	this.shape_2140.graphics.f().s("#292929").ss(0.3).p("AAAAkIAAhH");
	this.shape_2140.setTransform(670.8,495.1);

	this.shape_2141 = new cjs.Shape();
	this.shape_2141.graphics.f().s("#292929").ss(0.3).p("AgIgCIARAF");
	this.shape_2141.setTransform(669.6,498.4);

	this.shape_2142 = new cjs.Shape();
	this.shape_2142.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2142.setTransform(669.7,497.8);

	this.shape_2143 = new cjs.Shape();
	this.shape_2143.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2143.setTransform(669.7,497.1);

	this.shape_2144 = new cjs.Shape();
	this.shape_2144.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2144.setTransform(669.7,496.4);

	this.shape_2145 = new cjs.Shape();
	this.shape_2145.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2145.setTransform(669.7,495.8);

	this.shape_2146 = new cjs.Shape();
	this.shape_2146.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2146.setTransform(669.7,494.6);

	this.shape_2147 = new cjs.Shape();
	this.shape_2147.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2147.setTransform(669.7,493.7);

	this.shape_2148 = new cjs.Shape();
	this.shape_2148.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2148.setTransform(669.7,492.8);

	this.shape_2149 = new cjs.Shape();
	this.shape_2149.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_2149.setTransform(669.7,492);

	this.shape_2150 = new cjs.Shape();
	this.shape_2150.graphics.f().s("#292929").ss(0.3).p("AAAhxQAEgEAHAAQATABgCAqAAAhxQgDgDgGgBQgHAAgGAFQgFAGAAAIIAADOIAVAHIAAjVQAAgIAFgGQABAAAAgBgAAHhSQAAgXgHgI");
	this.shape_2150.setTransform(667.8,474.5);

	this.shape_2151 = new cjs.Shape();
	this.shape_2151.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2151.setTransform(666.1,485);

	this.shape_2152 = new cjs.Shape();
	this.shape_2152.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2152.setTransform(666.1,484.4);

	this.shape_2153 = new cjs.Shape();
	this.shape_2153.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2153.setTransform(666.1,483.6);

	this.shape_2154 = new cjs.Shape();
	this.shape_2154.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2154.setTransform(666.1,482.9);

	this.shape_2155 = new cjs.Shape();
	this.shape_2155.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2155.setTransform(666.1,481.5);

	this.shape_2156 = new cjs.Shape();
	this.shape_2156.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2156.setTransform(666.1,480.8);

	this.shape_2157 = new cjs.Shape();
	this.shape_2157.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2157.setTransform(666.1,480);

	this.shape_2158 = new cjs.Shape();
	this.shape_2158.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2158.setTransform(666.1,479.3);

	this.shape_2159 = new cjs.Shape();
	this.shape_2159.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2159.setTransform(666.1,478.6);

	this.shape_2160 = new cjs.Shape();
	this.shape_2160.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2160.setTransform(666.1,477.8);

	this.shape_2161 = new cjs.Shape();
	this.shape_2161.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2161.setTransform(666.1,477.1);

	this.shape_2162 = new cjs.Shape();
	this.shape_2162.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2162.setTransform(666.1,476.2);

	this.shape_2163 = new cjs.Shape();
	this.shape_2163.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2163.setTransform(666.1,474.7);

	this.shape_2164 = new cjs.Shape();
	this.shape_2164.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2164.setTransform(666.1,474.1);

	this.shape_2165 = new cjs.Shape();
	this.shape_2165.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2165.setTransform(666.1,473.4);

	this.shape_2166 = new cjs.Shape();
	this.shape_2166.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2166.setTransform(666.1,472.6);

	this.shape_2167 = new cjs.Shape();
	this.shape_2167.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2167.setTransform(666.1,471.9);

	this.shape_2168 = new cjs.Shape();
	this.shape_2168.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2168.setTransform(666.1,471.2);

	this.shape_2169 = new cjs.Shape();
	this.shape_2169.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2169.setTransform(666.1,470.4);

	this.shape_2170 = new cjs.Shape();
	this.shape_2170.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2170.setTransform(666.1,469.7);

	this.shape_2171 = new cjs.Shape();
	this.shape_2171.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2171.setTransform(666.1,469);

	this.shape_2172 = new cjs.Shape();
	this.shape_2172.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2172.setTransform(666.1,467.5);

	this.shape_2173 = new cjs.Shape();
	this.shape_2173.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2173.setTransform(666.1,466.7);

	this.shape_2174 = new cjs.Shape();
	this.shape_2174.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_2174.setTransform(666.1,466);

	this.shape_2175 = new cjs.Shape();
	this.shape_2175.graphics.f().s("#292929").ss(0.3).p("AiDASIClhDQAxgXAhAZQANAJAAAQIAAAYQAAAFgIAEQgIAEgLAAQgHABgCgEQgCgCAAgHIAAgNQAAgFgGgEQgFgFgGABQgVAFgjARIiVA/");
	this.shape_2175.setTransform(672.8,438);

	this.shape_2176 = new cjs.Shape();
	this.shape_2176.graphics.f().s("#292929").ss(0.3).p("AAUgaQAOACAKAIQALAHAAAIQAAALgQAIQgQAJgXAAQgWAAgQgJQgQgIAAgLQAAgHAJgGQAIgHARgC");
	this.shape_2176.setTransform(683.7,438.7);

	this.shape_2177 = new cjs.Shape();
	this.shape_2177.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngZIALgf");
	this.shape_2177.setTransform(685.1,462.3);

	this.shape_2178 = new cjs.Shape();
	this.shape_2178.graphics.f().s("#292929").ss(0.3).p("AAsgFQACAOgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAOAIQAPAJABAOg");
	this.shape_2178.setTransform(684.8,456.9);

	this.shape_2179 = new cjs.Shape();
	this.shape_2179.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAGQgKAGgOACQgOACgKgDQgLgDgBgGQAAgFAJgFQAJgGAPgCQANgCALADQALACAAAGg");
	this.shape_2179.setTransform(684.6,455.1);

	this.shape_2180 = new cjs.Shape();
	this.shape_2180.graphics.f().s("#292929").ss(0.3).p("AGCCFIgWhdIpWinIiaA7");
	this.shape_2180.setTransform(699.4,436.2);

	this.shape_2181 = new cjs.Shape();
	this.shape_2181.graphics.f().s("#292929").ss(0.3).p("AArgRIhVAj");
	this.shape_2181.setTransform(630.5,449.9);

	this.shape_2182 = new cjs.Shape();
	this.shape_2182.graphics.f().s("#292929").ss(0.3).p("ApEALIJ0DXIAkgXIB4ANIBbgqIgEhaIBag4IBkAaIBgg5IgPhAIo9ieIiUA+");
	this.shape_2182.setTransform(677.8,448.4);

	this.shape_2183 = new cjs.Shape();
	this.shape_2183.graphics.f().s("#292929").ss(0.3).p("ACWgfIjFBVIhOABIEThu");
	this.shape_2183.setTransform(624.5,444.1);

	this.shape_2184 = new cjs.Shape();
	this.shape_2184.graphics.f().s("#292929").ss(0.3).p("AjehUIG9Cq");
	this.shape_2184.setTransform(636.4,477.1);

	this.shape_2185 = new cjs.Shape();
	this.shape_2185.graphics.f().s("#292929").ss(0.3).p("AjehYIG9Cx");
	this.shape_2185.setTransform(636.3,487.2);

	this.shape_2186 = new cjs.Shape();
	this.shape_2186.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2186.setTransform(679.2,520.7);

	this.shape_2187 = new cjs.Shape();
	this.shape_2187.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_2187.setTransform(679.2,520.6,1,1,0,0,0,0,0.1);

	this.shape_2188 = new cjs.Shape();
	this.shape_2188.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2188.setTransform(679.2,509.8);

	this.shape_2189 = new cjs.Shape();
	this.shape_2189.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_2189.setTransform(679.2,509.7,1,1,0,0,0,0,0.1);

	this.shape_2190 = new cjs.Shape();
	this.shape_2190.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2190.setTransform(679.2,498.9);

	this.shape_2191 = new cjs.Shape();
	this.shape_2191.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_2191.setTransform(679.2,498.8,1,1,0,0,0,0,0.1);

	this.shape_2192 = new cjs.Shape();
	this.shape_2192.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2192.setTransform(679.2,488);

	this.shape_2193 = new cjs.Shape();
	this.shape_2193.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2193.setTransform(679.2,487.9,1,1,0,0,0,0,0.1);

	this.shape_2194 = new cjs.Shape();
	this.shape_2194.graphics.f().s("#292929").ss(0.3).p("AgMmKIAZMV");
	this.shape_2194.setTransform(727.6,495.5);

	this.shape_2195 = new cjs.Shape();
	this.shape_2195.graphics.f().s("#292929").ss(0.3).p("AiSj3IgFhfIBKgtIBeAbIB1hBIASMJIhtBNIhZgr");
	this.shape_2195.setTransform(724.6,492.1);

	this.shape_2196 = new cjs.Shape();
	this.shape_2196.graphics.f().s("#292929").ss(0.3).p("AAIFoIgPrQ");
	this.shape_2196.setTransform(717.4,489.3);

	this.shape_2197 = new cjs.Shape();
	this.shape_2197.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_2197.setTransform(723.4,526.8);

	this.shape_2198 = new cjs.Shape();
	this.shape_2198.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_2198.setTransform(723,526.6);

	this.shape_2199 = new cjs.Shape();
	this.shape_2199.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_2199.setTransform(723.1,516.5);

	this.shape_2200 = new cjs.Shape();
	this.shape_2200.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChG");
	this.shape_2200.setTransform(722.8,516.1);

	this.shape_2201 = new cjs.Shape();
	this.shape_2201.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_2201.setTransform(722.4,503.7);

	this.shape_2202 = new cjs.Shape();
	this.shape_2202.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKg");
	this.shape_2202.setTransform(722.5,503.6);

	this.shape_2203 = new cjs.Shape();
	this.shape_2203.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_2203.setTransform(723,493);

	this.shape_2204 = new cjs.Shape();
	this.shape_2204.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_2204.setTransform(722.6,492.8);

	this.shape_2205 = new cjs.Shape();
	this.shape_2205.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_2205.setTransform(722,479.9);

	this.shape_2206 = new cjs.Shape();
	this.shape_2206.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_2206.setTransform(721.6,479.7);

	this.shape_2207 = new cjs.Shape();
	this.shape_2207.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_2207.setTransform(721.6,467.5);

	this.shape_2208 = new cjs.Shape();
	this.shape_2208.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_2208.setTransform(721.2,467.3);

	this.shape_2209 = new cjs.Shape();
	this.shape_2209.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2209.setTransform(733.6,526);

	this.shape_2210 = new cjs.Shape();
	this.shape_2210.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2210.setTransform(734,525.7);

	this.shape_2211 = new cjs.Shape();
	this.shape_2211.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2211.setTransform(733.3,515.5);

	this.shape_2212 = new cjs.Shape();
	this.shape_2212.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_2212.setTransform(733.4,515.1);

	this.shape_2213 = new cjs.Shape();
	this.shape_2213.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2213.setTransform(733.3,502.6);

	this.shape_2214 = new cjs.Shape();
	this.shape_2214.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_2214.setTransform(733,502.5);

	this.shape_2215 = new cjs.Shape();
	this.shape_2215.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2215.setTransform(731.6,491.8);

	this.shape_2216 = new cjs.Shape();
	this.shape_2216.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2216.setTransform(732,491.6);

	this.shape_2217 = new cjs.Shape();
	this.shape_2217.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2217.setTransform(732,478.6);

	this.shape_2218 = new cjs.Shape();
	this.shape_2218.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_2218.setTransform(732.4,478.2);

	this.shape_2219 = new cjs.Shape();
	this.shape_2219.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2219.setTransform(731.6,466);

	this.shape_2220 = new cjs.Shape();
	this.shape_2220.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2220.setTransform(732,465.8);

	this.shape_2221 = new cjs.Shape();
	this.shape_2221.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2221.setTransform(705.9,544.6);

	this.shape_2222 = new cjs.Shape();
	this.shape_2222.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2222.setTransform(706.3,544.4);

	this.shape_2223 = new cjs.Shape();
	this.shape_2223.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2223.setTransform(705.6,534.1);

	this.shape_2224 = new cjs.Shape();
	this.shape_2224.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2224.setTransform(705.7,533.8);

	this.shape_2225 = new cjs.Shape();
	this.shape_2225.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2225.setTransform(705.6,521.2);

	this.shape_2226 = new cjs.Shape();
	this.shape_2226.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2226.setTransform(705.2,521.2);

	this.shape_2227 = new cjs.Shape();
	this.shape_2227.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2227.setTransform(703.9,510.5);

	this.shape_2228 = new cjs.Shape();
	this.shape_2228.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2228.setTransform(704.3,510.2);

	this.shape_2229 = new cjs.Shape();
	this.shape_2229.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2229.setTransform(704.3,497.2);

	this.shape_2230 = new cjs.Shape();
	this.shape_2230.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_2230.setTransform(704.7,496.9);

	this.shape_2231 = new cjs.Shape();
	this.shape_2231.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_2231.setTransform(703.9,484.7);

	this.shape_2232 = new cjs.Shape();
	this.shape_2232.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_2232.setTransform(704.3,484.3);

	this.shape_2233 = new cjs.Shape();
	this.shape_2233.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_2233.setTransform(693,525.2);

	this.shape_2234 = new cjs.Shape();
	this.shape_2234.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAGIAABSIgpgIg");
	this.shape_2234.setTransform(692.9,524.9);

	this.shape_2235 = new cjs.Shape();
	this.shape_2235.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_2235.setTransform(693,512.5);

	this.shape_2236 = new cjs.Shape();
	this.shape_2236.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAFIAABTIgpgJg");
	this.shape_2236.setTransform(692.9,512.2);

	this.shape_2237 = new cjs.Shape();
	this.shape_2237.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_2237.setTransform(693,499.7);

	this.shape_2238 = new cjs.Shape();
	this.shape_2238.graphics.f().s("#292929").ss(0.3).p("AgWgrIAtAFIAABTIgtgFg");
	this.shape_2238.setTransform(692.9,499.4);

	this.shape_2239 = new cjs.Shape();
	this.shape_2239.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_2239.setTransform(693,487);

	this.shape_2240 = new cjs.Shape();
	this.shape_2240.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAFIAABTIgpgJg");
	this.shape_2240.setTransform(692.9,486.7);

	this.shape_2241 = new cjs.Shape();
	this.shape_2241.graphics.f().s("#292929").ss(0.3).p("AAVgEIgpAJ");
	this.shape_2241.setTransform(662.4,505.8);

	this.shape_2242 = new cjs.Shape();
	this.shape_2242.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2242.setTransform(666.8,512.7);

	this.shape_2243 = new cjs.Shape();
	this.shape_2243.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2243.setTransform(667.6,513);

	this.shape_2244 = new cjs.Shape();
	this.shape_2244.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2244.setTransform(668.4,513.1);

	this.shape_2245 = new cjs.Shape();
	this.shape_2245.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2245.setTransform(669.3,513.4);

	this.shape_2246 = new cjs.Shape();
	this.shape_2246.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_2246.setTransform(670.1,513.3);

	this.shape_2247 = new cjs.Shape();
	this.shape_2247.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_2247.setTransform(670.9,512.9);

	this.shape_2248 = new cjs.Shape();
	this.shape_2248.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2248.setTransform(671.6,512.5);

	this.shape_2249 = new cjs.Shape();
	this.shape_2249.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2249.setTransform(672.4,512.2);

	this.shape_2250 = new cjs.Shape();
	this.shape_2250.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2250.setTransform(673.2,511.9);

	this.shape_2251 = new cjs.Shape();
	this.shape_2251.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2251.setTransform(673.9,511.6);

	this.shape_2252 = new cjs.Shape();
	this.shape_2252.graphics.f().s("#292929").ss(0.3).p("AAmgkIAAAuIgvAWIgfgM");
	this.shape_2252.setTransform(670.7,512.6);

	this.shape_2253 = new cjs.Shape();
	this.shape_2253.graphics.f().s("#292929").ss(0.3).p("Ag4geIBlAkIg2AYIgZgJ");
	this.shape_2253.setTransform(670,508.3);

	this.shape_2254 = new cjs.Shape();
	this.shape_2254.graphics.f().s("#292929").ss(0.3).p("AAAgCIAAAG");
	this.shape_2254.setTransform(659.7,495.5);

	this.shape_2255 = new cjs.Shape();
	this.shape_2255.graphics.f().s("#292929").ss(0.3).p("AAAgEIAAAJ");
	this.shape_2255.setTransform(660.3,495.5);

	this.shape_2256 = new cjs.Shape();
	this.shape_2256.graphics.f().s("#292929").ss(0.3).p("AAAgGIAAAN");
	this.shape_2256.setTransform(660.8,495.5);

	this.shape_2257 = new cjs.Shape();
	this.shape_2257.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_2257.setTransform(661.4,495.5);

	this.shape_2258 = new cjs.Shape();
	this.shape_2258.graphics.f().s("#292929").ss(0.3).p("AAAgKIAAAW");
	this.shape_2258.setTransform(662,495.5);

	this.shape_2259 = new cjs.Shape();
	this.shape_2259.graphics.f().s("#292929").ss(0.3).p("AAAgNIAAAb");
	this.shape_2259.setTransform(662.6,495.4);

	this.shape_2260 = new cjs.Shape();
	this.shape_2260.graphics.f().s("#292929").ss(0.3).p("AAAgQIAAAg");
	this.shape_2260.setTransform(663.2,495.4);

	this.shape_2261 = new cjs.Shape();
	this.shape_2261.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_2261.setTransform(663.8,495.2);

	this.shape_2262 = new cjs.Shape();
	this.shape_2262.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_2262.setTransform(659.7,497.9);

	this.shape_2263 = new cjs.Shape();
	this.shape_2263.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2263.setTransform(660.5,498.2);

	this.shape_2264 = new cjs.Shape();
	this.shape_2264.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_2264.setTransform(661.3,498.6);

	this.shape_2265 = new cjs.Shape();
	this.shape_2265.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2265.setTransform(662.1,498.9);

	this.shape_2266 = new cjs.Shape();
	this.shape_2266.graphics.f().s("#292929").ss(0.3).p("AgHAoIAAgqIAPgEIAAgi");
	this.shape_2266.setTransform(663.7,497.3);

	this.shape_2267 = new cjs.Shape();
	this.shape_2267.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2267.setTransform(663.7,499.5);

	this.shape_2268 = new cjs.Shape();
	this.shape_2268.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2268.setTransform(664.5,499.8);

	this.shape_2269 = new cjs.Shape();
	this.shape_2269.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAo");
	this.shape_2269.setTransform(665.3,500.1);

	this.shape_2270 = new cjs.Shape();
	this.shape_2270.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2270.setTransform(666.1,500.4);

	this.shape_2271 = new cjs.Shape();
	this.shape_2271.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2271.setTransform(666.8,500.7);

	this.shape_2272 = new cjs.Shape();
	this.shape_2272.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2272.setTransform(667.6,501.1);

	this.shape_2273 = new cjs.Shape();
	this.shape_2273.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2273.setTransform(668.4,501.2);

	this.shape_2274 = new cjs.Shape();
	this.shape_2274.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2274.setTransform(669.3,501.5);

	this.shape_2275 = new cjs.Shape();
	this.shape_2275.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_2275.setTransform(670.1,501.4);

	this.shape_2276 = new cjs.Shape();
	this.shape_2276.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_2276.setTransform(670.9,501);

	this.shape_2277 = new cjs.Shape();
	this.shape_2277.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2277.setTransform(671.6,500.6);

	this.shape_2278 = new cjs.Shape();
	this.shape_2278.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2278.setTransform(672.4,500.3);

	this.shape_2279 = new cjs.Shape();
	this.shape_2279.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2279.setTransform(673.2,500);

	this.shape_2280 = new cjs.Shape();
	this.shape_2280.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2280.setTransform(673.9,499.7);

	this.shape_2281 = new cjs.Shape();
	this.shape_2281.graphics.f().s("#292929").ss(0.3).p("ABOgdIAAAuIgwAXIhrgrIgBgp");
	this.shape_2281.setTransform(666.7,500);

	this.shape_2282 = new cjs.Shape();
	this.shape_2282.graphics.f().s("#292929").ss(0.3).p("AgNgaIgJgDIg4AVIBlAmIA4gYIhHgY");
	this.shape_2282.setTransform(666.7,496.4);

	this.shape_2283 = new cjs.Shape();
	this.shape_2283.graphics.f().s("#292929").ss(0.3).p("AAAgCIAAAG");
	this.shape_2283.setTransform(659.7,483.6);

	this.shape_2284 = new cjs.Shape();
	this.shape_2284.graphics.f().s("#292929").ss(0.3).p("AAAgEIAAAJ");
	this.shape_2284.setTransform(660.3,483.6);

	this.shape_2285 = new cjs.Shape();
	this.shape_2285.graphics.f().s("#292929").ss(0.3).p("AAAgGIAAAN");
	this.shape_2285.setTransform(660.8,483.6);

	this.shape_2286 = new cjs.Shape();
	this.shape_2286.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_2286.setTransform(661.4,483.6);

	this.shape_2287 = new cjs.Shape();
	this.shape_2287.graphics.f().s("#292929").ss(0.3).p("AAAgKIAAAW");
	this.shape_2287.setTransform(662,483.6);

	this.shape_2288 = new cjs.Shape();
	this.shape_2288.graphics.f().s("#292929").ss(0.3).p("AAAgNIAAAb");
	this.shape_2288.setTransform(662.6,483.5);

	this.shape_2289 = new cjs.Shape();
	this.shape_2289.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_2289.setTransform(663.2,483.5);

	this.shape_2290 = new cjs.Shape();
	this.shape_2290.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_2290.setTransform(663.8,483.3);

	this.shape_2291 = new cjs.Shape();
	this.shape_2291.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAq");
	this.shape_2291.setTransform(659.7,486);

	this.shape_2292 = new cjs.Shape();
	this.shape_2292.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2292.setTransform(660.5,486.3);

	this.shape_2293 = new cjs.Shape();
	this.shape_2293.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_2293.setTransform(661.3,486.7);

	this.shape_2294 = new cjs.Shape();
	this.shape_2294.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2294.setTransform(662.1,487);

	this.shape_2295 = new cjs.Shape();
	this.shape_2295.graphics.f().s("#292929").ss(0.3).p("AgHAoIAAgqIAPgDIAAgj");
	this.shape_2295.setTransform(663.7,485.4);

	this.shape_2296 = new cjs.Shape();
	this.shape_2296.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2296.setTransform(663.7,487.6);

	this.shape_2297 = new cjs.Shape();
	this.shape_2297.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2297.setTransform(664.5,487.9);

	this.shape_2298 = new cjs.Shape();
	this.shape_2298.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAo");
	this.shape_2298.setTransform(665.3,488.2);

	this.shape_2299 = new cjs.Shape();
	this.shape_2299.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2299.setTransform(666.1,488.5);

	this.shape_2300 = new cjs.Shape();
	this.shape_2300.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_2300.setTransform(666.8,488.8);

	this.shape_2301 = new cjs.Shape();
	this.shape_2301.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2301.setTransform(667.6,489.2);

	this.shape_2302 = new cjs.Shape();
	this.shape_2302.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_2302.setTransform(668.4,489.3);

	this.shape_2303 = new cjs.Shape();
	this.shape_2303.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2303.setTransform(669.3,489.6);

	this.shape_2304 = new cjs.Shape();
	this.shape_2304.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_2304.setTransform(670.1,489.5);

	this.shape_2305 = new cjs.Shape();
	this.shape_2305.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_2305.setTransform(670.9,489.1);

	this.shape_2306 = new cjs.Shape();
	this.shape_2306.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2306.setTransform(671.6,488.7);

	this.shape_2307 = new cjs.Shape();
	this.shape_2307.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2307.setTransform(672.4,488.4);

	this.shape_2308 = new cjs.Shape();
	this.shape_2308.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2308.setTransform(673.2,488.1);

	this.shape_2309 = new cjs.Shape();
	this.shape_2309.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_2309.setTransform(673.9,487.7);

	this.shape_2310 = new cjs.Shape();
	this.shape_2310.graphics.f().s("#292929").ss(0.3).p("ABOgdIAAAuIgwAXIhrgrIgBgp");
	this.shape_2310.setTransform(666.7,488.1);

	this.shape_2311 = new cjs.Shape();
	this.shape_2311.graphics.f().s("#292929").ss(0.3).p("AgWgdIg4AVIBlAmIA4gYg");
	this.shape_2311.setTransform(666.7,484.5);

	this.shape_2312 = new cjs.Shape();
	this.shape_2312.graphics.f().s("#292929").ss(0.3).p("AAAicIAAE5");
	this.shape_2312.setTransform(653.3,487.3);

	this.shape_2313 = new cjs.Shape();
	this.shape_2313.graphics.f().s("#292929").ss(0.3).p("AAAieIAAE9");
	this.shape_2313.setTransform(651.5,486.4);

	this.shape_2314 = new cjs.Shape();
	this.shape_2314.graphics.f().s("#292929").ss(0.3).p("AAAiHIAAEP");
	this.shape_2314.setTransform(638.7,480.1);

	this.shape_2315 = new cjs.Shape();
	this.shape_2315.graphics.f().s("#292929").ss(0.3).p("AAAiJIAAET");
	this.shape_2315.setTransform(636.9,479.2);

	this.shape_2316 = new cjs.Shape();
	this.shape_2316.graphics.f().s("#292929").ss(0.3).p("AAAiWIAAEt");
	this.shape_2316.setTransform(627.7,477.3);

	this.shape_2317 = new cjs.Shape();
	this.shape_2317.graphics.f().s("#292929").ss(0.3).p("AAAiUIAAEp");
	this.shape_2317.setTransform(625.8,476.6);

	this.shape_2318 = new cjs.Shape();
	this.shape_2318.graphics.f().s("#292929").ss(0.3).p("Ag6gBIB1AD");
	this.shape_2318.setTransform(692.9,472.2);

	this.shape_2319 = new cjs.Shape();
	this.shape_2319.graphics.f().s("#292929").ss(0.3).p("AgSgHIAjgVIAABC");
	this.shape_2319.setTransform(685.3,474.9);

	this.shape_2320 = new cjs.Shape();
	this.shape_2320.graphics.f().s("#292929").ss(0.3).p("AAAjDIAAGH");
	this.shape_2320.setTransform(683.4,500.9);

	this.shape_2321 = new cjs.Shape();
	this.shape_2321.graphics.f().s("#292929").ss(0.3).p("AAAi3IAAFw");
	this.shape_2321.setTransform(687.1,497.2);

	this.shape_2322 = new cjs.Shape();
	this.shape_2322.graphics.f().s("#292929").ss(0.3).p("ADiCfIAmgZIB2AIIBugzADiCfIAAhHIrKj1IAGBGILED3g");
	this.shape_2322.setTransform(660.8,465.3);

	this.shape_2323 = new cjs.Shape();
	this.shape_2323.graphics.f().s("#292929").ss(0.3).p("AA6FyIgFsjIhuAzIAdM4");
	this.shape_2323.setTransform(704.6,510.7);

	this.shape_2324 = new cjs.Shape();
	this.shape_2324.graphics.f().s("#292929").ss(0.3).p("AhpBEIAIAHIBuAAIBchQIAAhAIhiBSIhiAAIgOgH");
	this.shape_2324.setTransform(700.9,553.6);

	this.shape_2325 = new cjs.Shape();
	this.shape_2325.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2325.setTransform(620.4,486.8);

	this.shape_2326 = new cjs.Shape();
	this.shape_2326.graphics.f().s("#292929").ss(0.3).p("AATApIAAg7IglgPIAAA5");
	this.shape_2326.setTransform(620.4,485.9);

	this.shape_2327 = new cjs.Shape();
	this.shape_2327.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2327.setTransform(620.4,475.9);

	this.shape_2328 = new cjs.Shape();
	this.shape_2328.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2328.setTransform(620.4,475.8,1,1,0,0,0,0,0.1);

	this.shape_2329 = new cjs.Shape();
	this.shape_2329.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2329.setTransform(620.4,465);

	this.shape_2330 = new cjs.Shape();
	this.shape_2330.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2330.setTransform(620.4,464.9,1,1,0,0,0,0,0.1);

	this.shape_2331 = new cjs.Shape();
	this.shape_2331.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2331.setTransform(631.7,491.3);

	this.shape_2332 = new cjs.Shape();
	this.shape_2332.graphics.f().s("#292929").ss(0.3).p("AATAmIAAg0IglgPIAAA9");
	this.shape_2332.setTransform(631.8,490);

	this.shape_2333 = new cjs.Shape();
	this.shape_2333.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2333.setTransform(631.7,480.4);

	this.shape_2334 = new cjs.Shape();
	this.shape_2334.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2334.setTransform(631.8,480.3,1,1,0,0,0,0,0.1);

	this.shape_2335 = new cjs.Shape();
	this.shape_2335.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2335.setTransform(631.7,469.5);

	this.shape_2336 = new cjs.Shape();
	this.shape_2336.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2336.setTransform(631.8,469.4,1,1,0,0,0,0,0.1);

	this.shape_2337 = new cjs.Shape();
	this.shape_2337.graphics.f().s("#292929").ss(0.3).p("AATAZIAAgbIglgPIAAAf");
	this.shape_2337.setTransform(644.6,493.9);

	this.shape_2338 = new cjs.Shape();
	this.shape_2338.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2338.setTransform(644.6,485.5);

	this.shape_2339 = new cjs.Shape();
	this.shape_2339.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_2339.setTransform(644.6,485.4,1,1,0,0,0,0,0.1);

	this.shape_2340 = new cjs.Shape();
	this.shape_2340.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2340.setTransform(644.6,474.6);

	this.shape_2341 = new cjs.Shape();
	this.shape_2341.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_2341.setTransform(644.6,474.5,1,1,0,0,0,0,0.1);

	this.shape_2342 = new cjs.Shape();
	this.shape_2342.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2342.setTransform(658.2,501.9);

	this.shape_2343 = new cjs.Shape();
	this.shape_2343.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2343.setTransform(658.3,501.8,1,1,0,0,0,0,0.1);

	this.shape_2344 = new cjs.Shape();
	this.shape_2344.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2344.setTransform(658.2,491);

	this.shape_2345 = new cjs.Shape();
	this.shape_2345.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2345.setTransform(658.3,490.9,1,1,0,0,0,0,0.1);

	this.shape_2346 = new cjs.Shape();
	this.shape_2346.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_2346.setTransform(658.2,480.1);

	this.shape_2347 = new cjs.Shape();
	this.shape_2347.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_2347.setTransform(658.3,480,1,1,0,0,0,0,0.1);

	this.shape_2348 = new cjs.Shape();
	this.shape_2348.graphics.f().s("#292929").ss(0.3).p("AAAiPIAAEf");
	this.shape_2348.setTransform(614,471.7);

	var maskedShapeInstanceList = [this.instance_25,this.shape_2049,this.shape_2050,this.shape_2051,this.shape_2052,this.shape_2053,this.shape_2054,this.shape_2055,this.shape_2056,this.shape_2057,this.shape_2058,this.shape_2059,this.shape_2060,this.shape_2061,this.shape_2062,this.shape_2063,this.shape_2064,this.shape_2065,this.shape_2066,this.shape_2067,this.shape_2068,this.shape_2069,this.shape_2070,this.shape_2071,this.shape_2072,this.shape_2073,this.shape_2074,this.shape_2075,this.shape_2076,this.shape_2077,this.shape_2078,this.shape_2079,this.shape_2080,this.shape_2081,this.shape_2082,this.shape_2083,this.shape_2084,this.shape_2085,this.shape_2086,this.shape_2087,this.shape_2088,this.shape_2089,this.shape_2090,this.shape_2091,this.shape_2092,this.shape_2093,this.shape_2094,this.shape_2095,this.shape_2096,this.shape_2097,this.shape_2098,this.shape_2099,this.shape_2100,this.shape_2101,this.shape_2102,this.shape_2103,this.shape_2104,this.shape_2105,this.shape_2106,this.shape_2107,this.shape_2108,this.shape_2109,this.shape_2110,this.shape_2111,this.shape_2112,this.shape_2113,this.shape_2114,this.shape_2115,this.shape_2116,this.shape_2117,this.shape_2118,this.shape_2119,this.shape_2120,this.shape_2121,this.shape_2122,this.shape_2123,this.shape_2124,this.shape_2125,this.shape_2126,this.shape_2127,this.shape_2128,this.shape_2129,this.shape_2130,this.shape_2131,this.shape_2132,this.shape_2133,this.shape_2134,this.shape_2135,this.shape_2136,this.shape_2137,this.shape_2138,this.shape_2139,this.shape_2140,this.shape_2141,this.shape_2142,this.shape_2143,this.shape_2144,this.shape_2145,this.shape_2146,this.shape_2147,this.shape_2148,this.shape_2149,this.shape_2150,this.shape_2151,this.shape_2152,this.shape_2153,this.shape_2154,this.shape_2155,this.shape_2156,this.shape_2157,this.shape_2158,this.shape_2159,this.shape_2160,this.shape_2161,this.shape_2162,this.shape_2163,this.shape_2164,this.shape_2165,this.shape_2166,this.shape_2167,this.shape_2168,this.shape_2169,this.shape_2170,this.shape_2171,this.shape_2172,this.shape_2173,this.shape_2174,this.shape_2175,this.shape_2176,this.shape_2177,this.shape_2178,this.shape_2179,this.shape_2180,this.shape_2181,this.shape_2182,this.shape_2183,this.shape_2184,this.shape_2185,this.shape_2186,this.shape_2187,this.shape_2188,this.shape_2189,this.shape_2190,this.shape_2191,this.shape_2192,this.shape_2193,this.shape_2194,this.shape_2195,this.shape_2196,this.shape_2197,this.shape_2198,this.shape_2199,this.shape_2200,this.shape_2201,this.shape_2202,this.shape_2203,this.shape_2204,this.shape_2205,this.shape_2206,this.shape_2207,this.shape_2208,this.shape_2209,this.shape_2210,this.shape_2211,this.shape_2212,this.shape_2213,this.shape_2214,this.shape_2215,this.shape_2216,this.shape_2217,this.shape_2218,this.shape_2219,this.shape_2220,this.shape_2221,this.shape_2222,this.shape_2223,this.shape_2224,this.shape_2225,this.shape_2226,this.shape_2227,this.shape_2228,this.shape_2229,this.shape_2230,this.shape_2231,this.shape_2232,this.shape_2233,this.shape_2234,this.shape_2235,this.shape_2236,this.shape_2237,this.shape_2238,this.shape_2239,this.shape_2240,this.shape_2241,this.shape_2242,this.shape_2243,this.shape_2244,this.shape_2245,this.shape_2246,this.shape_2247,this.shape_2248,this.shape_2249,this.shape_2250,this.shape_2251,this.shape_2252,this.shape_2253,this.shape_2254,this.shape_2255,this.shape_2256,this.shape_2257,this.shape_2258,this.shape_2259,this.shape_2260,this.shape_2261,this.shape_2262,this.shape_2263,this.shape_2264,this.shape_2265,this.shape_2266,this.shape_2267,this.shape_2268,this.shape_2269,this.shape_2270,this.shape_2271,this.shape_2272,this.shape_2273,this.shape_2274,this.shape_2275,this.shape_2276,this.shape_2277,this.shape_2278,this.shape_2279,this.shape_2280,this.shape_2281,this.shape_2282,this.shape_2283,this.shape_2284,this.shape_2285,this.shape_2286,this.shape_2287,this.shape_2288,this.shape_2289,this.shape_2290,this.shape_2291,this.shape_2292,this.shape_2293,this.shape_2294,this.shape_2295,this.shape_2296,this.shape_2297,this.shape_2298,this.shape_2299,this.shape_2300,this.shape_2301,this.shape_2302,this.shape_2303,this.shape_2304,this.shape_2305,this.shape_2306,this.shape_2307,this.shape_2308,this.shape_2309,this.shape_2310,this.shape_2311,this.shape_2312,this.shape_2313,this.shape_2314,this.shape_2315,this.shape_2316,this.shape_2317,this.shape_2318,this.shape_2319,this.shape_2320,this.shape_2321,this.shape_2322,this.shape_2323,this.shape_2324,this.shape_2325,this.shape_2326,this.shape_2327,this.shape_2328,this.shape_2329,this.shape_2330,this.shape_2331,this.shape_2332,this.shape_2333,this.shape_2334,this.shape_2335,this.shape_2336,this.shape_2337,this.shape_2338,this.shape_2339,this.shape_2340,this.shape_2341,this.shape_2342,this.shape_2343,this.shape_2344,this.shape_2345,this.shape_2346,this.shape_2347,this.shape_2348];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_25;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},17).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.shape_2348},{t:this.shape_2347},{t:this.shape_2346},{t:this.shape_2345},{t:this.shape_2344},{t:this.shape_2343},{t:this.shape_2342},{t:this.shape_2341},{t:this.shape_2340},{t:this.shape_2339},{t:this.shape_2338},{t:this.shape_2337},{t:this.shape_2336},{t:this.shape_2335},{t:this.shape_2334},{t:this.shape_2333},{t:this.shape_2332},{t:this.shape_2331},{t:this.shape_2330},{t:this.shape_2329},{t:this.shape_2328},{t:this.shape_2327},{t:this.shape_2326},{t:this.shape_2325},{t:this.shape_2324},{t:this.shape_2323},{t:this.shape_2322},{t:this.shape_2321},{t:this.shape_2320},{t:this.shape_2319},{t:this.shape_2318},{t:this.shape_2317},{t:this.shape_2316},{t:this.shape_2315},{t:this.shape_2314},{t:this.shape_2313},{t:this.shape_2312},{t:this.shape_2311},{t:this.shape_2310},{t:this.shape_2309},{t:this.shape_2308},{t:this.shape_2307},{t:this.shape_2306},{t:this.shape_2305},{t:this.shape_2304},{t:this.shape_2303},{t:this.shape_2302},{t:this.shape_2301},{t:this.shape_2300},{t:this.shape_2299},{t:this.shape_2298},{t:this.shape_2297},{t:this.shape_2296},{t:this.shape_2295},{t:this.shape_2294},{t:this.shape_2293},{t:this.shape_2292},{t:this.shape_2291},{t:this.shape_2290},{t:this.shape_2289},{t:this.shape_2288},{t:this.shape_2287},{t:this.shape_2286},{t:this.shape_2285},{t:this.shape_2284},{t:this.shape_2283},{t:this.shape_2282},{t:this.shape_2281},{t:this.shape_2280},{t:this.shape_2279},{t:this.shape_2278},{t:this.shape_2277},{t:this.shape_2276},{t:this.shape_2275},{t:this.shape_2274},{t:this.shape_2273},{t:this.shape_2272},{t:this.shape_2271},{t:this.shape_2270},{t:this.shape_2269},{t:this.shape_2268},{t:this.shape_2267},{t:this.shape_2266},{t:this.shape_2265},{t:this.shape_2264},{t:this.shape_2263},{t:this.shape_2262},{t:this.shape_2261},{t:this.shape_2260},{t:this.shape_2259},{t:this.shape_2258},{t:this.shape_2257},{t:this.shape_2256},{t:this.shape_2255},{t:this.shape_2254},{t:this.shape_2253},{t:this.shape_2252},{t:this.shape_2251},{t:this.shape_2250},{t:this.shape_2249},{t:this.shape_2248},{t:this.shape_2247},{t:this.shape_2246},{t:this.shape_2245},{t:this.shape_2244},{t:this.shape_2243},{t:this.shape_2242},{t:this.shape_2241},{t:this.shape_2240},{t:this.shape_2239},{t:this.shape_2238},{t:this.shape_2237},{t:this.shape_2236},{t:this.shape_2235},{t:this.shape_2234},{t:this.shape_2233},{t:this.shape_2232},{t:this.shape_2231},{t:this.shape_2230},{t:this.shape_2229},{t:this.shape_2228},{t:this.shape_2227},{t:this.shape_2226},{t:this.shape_2225},{t:this.shape_2224},{t:this.shape_2223},{t:this.shape_2222},{t:this.shape_2221},{t:this.shape_2220},{t:this.shape_2219},{t:this.shape_2218},{t:this.shape_2217},{t:this.shape_2216},{t:this.shape_2215},{t:this.shape_2214},{t:this.shape_2213},{t:this.shape_2212},{t:this.shape_2211},{t:this.shape_2210},{t:this.shape_2209},{t:this.shape_2208},{t:this.shape_2207},{t:this.shape_2206},{t:this.shape_2205},{t:this.shape_2204},{t:this.shape_2203},{t:this.shape_2202},{t:this.shape_2201},{t:this.shape_2200},{t:this.shape_2199},{t:this.shape_2198},{t:this.shape_2197},{t:this.shape_2196},{t:this.shape_2195},{t:this.shape_2194},{t:this.shape_2193},{t:this.shape_2192},{t:this.shape_2191},{t:this.shape_2190},{t:this.shape_2189},{t:this.shape_2188},{t:this.shape_2187},{t:this.shape_2186},{t:this.shape_2185},{t:this.shape_2184},{t:this.shape_2183},{t:this.shape_2182},{t:this.shape_2181},{t:this.shape_2180},{t:this.shape_2179},{t:this.shape_2178},{t:this.shape_2177},{t:this.shape_2176},{t:this.shape_2175},{t:this.shape_2174},{t:this.shape_2173},{t:this.shape_2172},{t:this.shape_2171},{t:this.shape_2170},{t:this.shape_2169},{t:this.shape_2168},{t:this.shape_2167},{t:this.shape_2166},{t:this.shape_2165},{t:this.shape_2164},{t:this.shape_2163},{t:this.shape_2162},{t:this.shape_2161},{t:this.shape_2160},{t:this.shape_2159},{t:this.shape_2158},{t:this.shape_2157},{t:this.shape_2156},{t:this.shape_2155},{t:this.shape_2154},{t:this.shape_2153},{t:this.shape_2152},{t:this.shape_2151},{t:this.shape_2150},{t:this.shape_2149},{t:this.shape_2148},{t:this.shape_2147},{t:this.shape_2146},{t:this.shape_2145},{t:this.shape_2144},{t:this.shape_2143},{t:this.shape_2142},{t:this.shape_2141},{t:this.shape_2140},{t:this.shape_2139},{t:this.shape_2138},{t:this.shape_2137},{t:this.shape_2136},{t:this.shape_2135},{t:this.shape_2134},{t:this.shape_2133},{t:this.shape_2132},{t:this.shape_2131},{t:this.shape_2130},{t:this.shape_2129},{t:this.shape_2128},{t:this.shape_2127},{t:this.shape_2126},{t:this.shape_2125},{t:this.shape_2124},{t:this.shape_2123},{t:this.shape_2122},{t:this.shape_2121},{t:this.shape_2120},{t:this.shape_2119},{t:this.shape_2118},{t:this.shape_2117},{t:this.shape_2116},{t:this.shape_2115},{t:this.shape_2114},{t:this.shape_2113},{t:this.shape_2112},{t:this.shape_2111},{t:this.shape_2110},{t:this.shape_2109},{t:this.shape_2108},{t:this.shape_2107},{t:this.shape_2106},{t:this.shape_2105},{t:this.shape_2104},{t:this.shape_2103},{t:this.shape_2102},{t:this.shape_2101},{t:this.shape_2100},{t:this.shape_2099},{t:this.shape_2098},{t:this.shape_2097},{t:this.shape_2096},{t:this.shape_2095},{t:this.shape_2094},{t:this.shape_2093},{t:this.shape_2092},{t:this.shape_2091},{t:this.shape_2090},{t:this.shape_2089},{t:this.shape_2088},{t:this.shape_2087},{t:this.shape_2086},{t:this.shape_2085},{t:this.shape_2084},{t:this.shape_2083},{t:this.shape_2082},{t:this.shape_2081},{t:this.shape_2080},{t:this.shape_2079},{t:this.shape_2078},{t:this.shape_2077},{t:this.shape_2076},{t:this.shape_2075},{t:this.shape_2074},{t:this.shape_2073},{t:this.shape_2072},{t:this.shape_2071},{t:this.shape_2070},{t:this.shape_2069},{t:this.shape_2068},{t:this.shape_2067},{t:this.shape_2066},{t:this.shape_2065},{t:this.shape_2064},{t:this.shape_2063},{t:this.shape_2062},{t:this.shape_2061},{t:this.shape_2060},{t:this.shape_2059},{t:this.shape_2058},{t:this.shape_2057},{t:this.shape_2056},{t:this.shape_2055},{t:this.shape_2054},{t:this.shape_2053},{t:this.shape_2052},{t:this.shape_2051},{t:this.shape_2050},{t:this.shape_2049}]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(17).to({_off:false},0).wait(1).to({regX:79.4,regY:75.3,x:693.4,y:613.3},0).wait(1).to({x:692.8,y:569.2},0).wait(1).to({x:691.7,y:531},0).wait(1).to({x:690.3,y:498.7},0).wait(1).to({x:690.8,y:478.9},0).wait(1).to({x:690.6,y:481.9},0).wait(1).to({x:690.3,y:484},0).wait(1).to({x:690.2,y:485.2},0).wait(1).to({y:485.7},0).to({_off:true},1).wait(67));

	// Rickfolk-mask (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	var mask_26_graphics_11 = new cjs.Graphics().p("AiSIPIrJndIh9oHIOYpOIQZIXIigMiIvBMOg");

	this.timeline.addTween(cjs.Tween.get(mask_26).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_26_graphics_11,x:609.1,y:554.6}).wait(83));

	// RichFolk
	this.instance_26 = new lib.Symbol30();
	this.instance_26.parent = this;
	this.instance_26.setTransform(604.9,711.4,1,1,0,0,0,76,75.2);
	this.instance_26._off = true;

	this.instance_27 = new lib.Bitmap3();
	this.instance_27.parent = this;
	this.instance_27.setTransform(528,483);

	var maskedShapeInstanceList = [this.instance_26,this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_26;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},11).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(11).to({_off:false},0).wait(1).to({regX:77,regY:76,x:605.8,y:659.5},0).wait(1).to({y:613},0).wait(1).to({x:605.7,y:572.6},0).wait(1).to({x:605.5,y:545.8},0).wait(1).to({x:605.6,y:550.8},0).wait(1).to({x:605.5,y:554.7},0).wait(1).to({y:557.5},0).wait(1).to({x:605.4,y:559.1},0).wait(1).to({y:559.7},0).to({_off:true},1).wait(73));

	// train-station-mask (mask)
	var mask_27 = new cjs.Shape();
	mask_27._off = true;
	var mask_27_graphics_6 = new cjs.Graphics().p("AvxFjIAJ4MIdaDgIAyIeIBONYIvIHwIgMDhIinAsg");

	this.timeline.addTween(cjs.Tween.get(mask_27).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_27_graphics_6,x:408.1,y:503.6}).wait(88));

	// train-station\
	this.instance_28 = new lib.trainstationsym();
	this.instance_28.parent = this;
	this.instance_28.setTransform(404.5,715.3,1,1,0,0,0,89.1,107);
	this.instance_28._off = true;

	this.instance_29 = new lib.Bitmap1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(314,405);

	var maskedShapeInstanceList = [this.instance_28,this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_27;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},6).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(6).to({_off:false},0).wait(1).to({regX:89.5,x:404.9,y:677.1},0).wait(1).to({y:642},0).wait(1).to({y:610},0).wait(1).to({y:581},0).wait(1).to({y:555.1},0).wait(1).to({y:532.2},0).wait(1).to({y:512.4},0).wait(1).to({x:404.8,y:497.7},0).wait(1).to({y:503.1},0).wait(1).to({x:404.7,y:507.3},0).wait(1).to({x:404.6,y:510.3},0).wait(1).to({y:512.1},0).wait(1).to({y:512.7},0).to({_off:true},1).wait(74));

	// First-ave-mask (mask)
	var mask_28 = new cjs.Shape();
	mask_28._off = true;
	mask_28.graphics.p("AvDC7Ig/oEIRJn3IO8KSIhnIRIuWHeg");
	mask_28.setTransform(503.2,617.6);

	// First-Ave
	this.instance_30 = new lib.Symbol1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(509.1,806.6,1,1,0,0,0,98,72);

	this.instance_31 = new lib.Symbol4();
	this.instance_31.parent = this;
	this.instance_31.setTransform(509.1,620.4,1,1,0,0,0,98,72);

	var maskedShapeInstanceList = [this.instance_30,this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_28;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30}]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({regX:99,regY:73,x:510.1,y:775.9},0).wait(1).to({y:746.5},0).wait(1).to({y:719.4},0).wait(1).to({y:694.7},0).wait(1).to({y:672.4},0).wait(1).to({y:652.4},0).wait(1).to({y:634.7},0).wait(1).to({y:619.5},0).wait(1).to({y:611.3},0).wait(1).to({y:614.9},0).wait(1).to({y:617.7},0).wait(1).to({y:619.7},0).wait(1).to({y:620.9},0).wait(1).to({y:621.4},0).to({_off:true},1).wait(79));

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
	this.instance_32 = new lib.street();
	this.instance_32.parent = this;
	this.instance_32.setTransform(180,381);

	var maskedShapeInstanceList = [this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_29;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1024,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/heart_city_1_atlas_P_.png?1502768306917", id:"heart_city_1_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;