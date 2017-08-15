(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
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


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgBgJIADALIgEAH");
	this.shape.setTransform(70.7,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AABgLIACANIgHAH");
	this.shape_1.setTransform(71.9,93);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAEgLIgGAMIAFAM");
	this.shape_2.setTransform(61.8,81);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_3.setTransform(4.1,150.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_4.setTransform(14.9,150.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_5.setTransform(14.6,147.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_6.setTransform(14.6,143.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_7.setTransform(14.3,140.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_8.setTransform(14.2,137);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_9.setTransform(14.1,134.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_10.setTransform(14,130.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_11.setTransform(13.8,127.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_12.setTransform(13.8,124);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AhbgoIC3BR");
	this.shape_13.setTransform(71,155.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AhbgnIC3BP");
	this.shape_14.setTransform(70.9,149.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AhagnIC2BP");
	this.shape_15.setTransform(70.7,143.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AhcgpIC5BS");
	this.shape_16.setTransform(70.6,138.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AhdgoIC7BR");
	this.shape_17.setTransform(70.6,132.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AhdgoIC7BR");
	this.shape_18.setTransform(70.4,126.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AhdgqIC7BV");
	this.shape_19.setTransform(70.4,121.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AgCjeIAFG9");
	this.shape_20.setTransform(73.4,139.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AgEkKIAJIV");
	this.shape_21.setTransform(67.1,140.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AgGkhIANJD");
	this.shape_22.setTransform(47.6,139);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AgGkhIANJD");
	this.shape_23.setTransform(40.9,141.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AhdAaIC7gz");
	this.shape_24.setTransform(45.4,154.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AhdAaIC7gz");
	this.shape_25.setTransform(45.1,147);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AhfAaIC/gz");
	this.shape_26.setTransform(45,139.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AhfAaIC/gz");
	this.shape_27.setTransform(44.9,132.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AhfAaIC+gz");
	this.shape_28.setTransform(44.6,125.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AheAaIC9gz");
	this.shape_29.setTransform(44.7,118.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAyA8IABgwIhnhD");
	this.shape_30.setTransform(71.5,105.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AgFhXQANAygCB+");
	this.shape_31.setTransform(62.5,67.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AgJhhQgFBegIBNIAugdIgBA1");
	this.shape_32.setTransform(63.8,95.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AACAfIgDg8");
	this.shape_33.setTransform(72.9,101.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAEBHQgEhHgChG");
	this.shape_34.setTransform(71.6,80.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AgBAqQgBhCAFgN");
	this.shape_35.setTransform(71.4,63.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AgCjZIAGGz");
	this.shape_36.setTransform(67,78.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("ABNANIgYACIgzgcIgzAVIgbgC");
	this.shape_37.setTransform(66.4,58.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AACgDIhOAiIABglIBLgkIBNAqIAAAnIhLgqIgCgn");
	this.shape_38.setTransform(66.4,55.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AAeAAQAAANgJAJQgJAIgMAAQgMAAgJgJQgJgJABgMQAAgMAJgJQAJgIALAAQANAAAIAJQAJAJAAALg");
	this.shape_39.setTransform(70.4,70.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AAjABQgBATgKANQgLAOgNgBQgPAAgKgOQgKgOABgSQAAgTALgNQAKgOANABQAPAAAKAOQAKANAAATg");
	this.shape_40.setTransform(62.4,81);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AApABQgBAWgMAQQgMAQgQAAQgRAAgMgRQgMgQABgWQAAgWAMgQQAMgQAQAAQASABALAQQAMAQAAAWg");
	this.shape_41.setTransform(71.4,93);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AgMgoIARAZIgPAaIAUAbIgTAZIAAAAIAAABIAAgBgAgMgoIAAAAAgMgoIgChFIAOATIgNALIAPAVgAgJBAIAXAbIgVAWg");
	this.shape_42.setTransform(48.4,88.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AgBjSIADGk");
	this.shape_43.setTransform(80,141.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AByAXIgnAWIi8hb");
	this.shape_44.setTransform(72.2,116.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AB4EkIgMnNIjjhyIAQIw");
	this.shape_45.setTransform(72.8,135.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AiflHIEtCoIAPHr");
	this.shape_46.setTransform(72.3,132.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AgzA3IgChlIBtA/");
	this.shape_47.setTransform(39.8,102.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AgMmJIAZMT");
	this.shape_48.setTransform(18.8,138.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AgIgGIARAN");
	this.shape_49.setTransform(13.5,104.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AgGBAIgEhrIARgLIAEBv");
	this.shape_50.setTransform(11.9,109.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AgNgIIAaAR");
	this.shape_51.setTransform(10.9,119.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AAQk0IgbAHIAXJm");
	this.shape_52.setTransform(13.4,151);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AgBFMIgYqAIA3gS");
	this.shape_53.setTransform(12.1,149.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAkl+IglgOIgfARIAbMN");
	this.shape_54.setTransform(17.7,138.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AAHHKIgQuIIAYgG");
	this.shape_55.setTransform(22.4,131.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("Ah0HvIgQuGIEICgIgVjtIgNgEIgLAKIAAABIgBAlIAAABIAAAAIAAgBIANgTIgMgSABWmLIAOgZIgOgTgABWlXIAQgYIgQgaIgBgBIABgBIAAACgABWlUIgBBAIASgnIgRgZIgBgBIABgCg");
	this.shape_56.setTransform(37.1,126.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AgElFIAJKL");
	this.shape_57.setTransform(29.4,142);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AgTgKIAnAV");
	this.shape_58.setTransform(32.9,112.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AhPFDIgNpHIC9g5");
	this.shape_59.setTransform(44.2,140);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AB5ETIgOpsIjjBQIAPJq");
	this.shape_60.setTransform(43,138.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("AEBDoIgTqHInuCuIAXKY");
	this.shape_61.setTransform(32.5,141.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAfNjQgClLggrLIghqKIBMgg");
	this.shape_62.setTransform(3.7,231.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgW");
	this.shape_63.setTransform(10.3,303.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgW");
	this.shape_64.setTransform(10.2,300.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AgiALIBFgW");
	this.shape_65.setTransform(10,297);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgX");
	this.shape_66.setTransform(10,293.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_67.setTransform(9.7,289.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AgiALIBFgV");
	this.shape_68.setTransform(9.6,286.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_69.setTransform(9.5,283.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AghAMIBEgW");
	this.shape_70.setTransform(9.5,280);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgW");
	this.shape_71.setTransform(9.3,276.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AghALIBDgW");
	this.shape_72.setTransform(9.1,273.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("AghALIBDgW");
	this.shape_73.setTransform(9.1,269.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("AghAMIBDgX");
	this.shape_74.setTransform(8.9,266.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_75.setTransform(8.8,263.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_76.setTransform(8.8,259.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_77.setTransform(8.6,256.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_78.setTransform(8.5,253.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_79.setTransform(8.3,249.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_80.setTransform(8.1,246.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_81.setTransform(8.1,243.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_82.setTransform(7.8,239.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_83.setTransform(7.8,236.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgjAMIBGgX");
	this.shape_84.setTransform(7.6,233.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_85.setTransform(7.4,229.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_86.setTransform(7.3,226.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_87.setTransform(7.1,223.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgjANIBGgZ");
	this.shape_88.setTransform(7.1,219.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_89.setTransform(6.7,216.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgiANIBFgZ");
	this.shape_90.setTransform(6.8,213.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AghAMIBEgX");
	this.shape_91.setTransform(6.8,209.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgX");
	this.shape_92.setTransform(6.6,206.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_93.setTransform(6.4,203.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("AgiANIBGgZ");
	this.shape_94.setTransform(6.3,200.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AgiAMIBFgX");
	this.shape_95.setTransform(6.1,196.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AgjAMIBHgX");
	this.shape_96.setTransform(6,193.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AgkANIBJgZ");
	this.shape_97.setTransform(5.9,190.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgdAKIA7gU");
	this.shape_98.setTransform(4.9,187.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_99.setTransform(5.5,183.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_100.setTransform(5.4,180.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_101.setTransform(5.2,177);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AglANIBLgZ");
	this.shape_102.setTransform(5,173.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_103.setTransform(5,170.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_104.setTransform(4.9,167.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_105.setTransform(4.7,164);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_106.setTransform(4.7,160.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_107.setTransform(4,157.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgmANIBNgZ");
	this.shape_108.setTransform(4.1,154.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AgIADIARgF");
	this.shape_109.setTransform(15.4,180.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_110.setTransform(15.7,178);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_111.setTransform(15.6,175.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_112.setTransform(15.6,172.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_113.setTransform(15.5,170.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgMADIAZgF");
	this.shape_114.setTransform(15.4,167.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgNADIAbgF");
	this.shape_115.setTransform(15.3,165.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_116.setTransform(15.2,162.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_117.setTransform(15.1,160.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgNADIAcgF");
	this.shape_118.setTransform(15,156.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgOADIAcgF");
	this.shape_119.setTransform(14.8,153.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgBgcIADA5");
	this.shape_120.setTransform(14.8,201.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AgSljIAlLH");
	this.shape_121.setTransform(17.1,251.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AAWHmIgrvL");
	this.shape_122.setTransform(14.7,259.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AACA2IgDhr");
	this.shape_123.setTransform(12.3,199.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgChPIAFCf");
	this.shape_124.setTransform(9.9,197.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AAAgmIABBN");
	this.shape_125.setTransform(10.3,210.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AgSngIAlPB");
	this.shape_126.setTransform(12.3,262.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AhFgXICKAv");
	this.shape_127.setTransform(69.1,159.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("Ag8AOIB5gb");
	this.shape_128.setTransform(42.2,169.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AheAaIC9gz");
	this.shape_129.setTransform(45.5,161.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_130.setTransform(9.1,315.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AgkANIBJgZ");
	this.shape_131.setTransform(10.5,311.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AgkALIBJgV");
	this.shape_132.setTransform(10.3,308);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("AjvBiIDCi8IEhgG");
	this.shape_133.setTransform(118.4,32.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("Ai+i6IEIDXIB1Cf");
	this.shape_134.setTransform(161.9,41.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("Ai+i6IEaDpIBjCM");
	this.shape_135.setTransform(161.6,36.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AjvBdIDCiyIEhgF");
	this.shape_136.setTransform(118.4,27.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AgMgEIAZAJ");
	this.shape_137.setTransform(114.7,1.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AgPgFIAfAL");
	this.shape_138.setTransform(119.3,1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AgOgGIAeAN");
	this.shape_139.setTransform(124.1,1.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AgPgGIAfAN");
	this.shape_140.setTransform(128.9,1.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AgOgHIAdAP");
	this.shape_141.setTransform(133.6,1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AgOgHIAdAP");
	this.shape_142.setTransform(138.6,1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AAfXNMgA8guZ");
	this.shape_143.setTransform(145.5,148.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AlXpeIArggIABAjIAvgiIABAmIAvgnIACAmIAvgnIABAlIAwgmIABAnIA1gpIEaDqIBjCNIANOX");
	this.shape_144.setTransform(147.8,64.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AgT0UUAA2AoLgAUAAZ");
	this.shape_145.setTransform(139.1,130.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AgQ0LUAAoAoBgAJAAR");
	this.shape_146.setTransform(133.9,129.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AgMuaQAQQ+AJL3");
	this.shape_147.setTransform(128.7,92.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AgPuEQAnbzgJAS");
	this.shape_148.setTransform(124.2,90.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("AgQt7QAobggJAS");
	this.shape_149.setTransform(119.4,89.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AhVMVQgY0bgCiiIC+jCQAobKgJAS");
	this.shape_150.setTransform(105.5,88.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("AAAjIQADGHgDAG");
	this.shape_151.setTransform(130.5,237.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_152.setTransform(144.8,310.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_153.setTransform(142.7,310.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABW");
	this.shape_154.setTransform(140.7,310.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AAAgqIAABV");
	this.shape_155.setTransform(138.6,310.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AAAgpIAABT");
	this.shape_156.setTransform(136.5,310.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AAAgoIAABR");
	this.shape_157.setTransform(134.4,310.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("AAAgnIAABP");
	this.shape_158.setTransform(132.3,310.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABM");
	this.shape_159.setTransform(130.2,310);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABM");
	this.shape_160.setTransform(128.1,310);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(0.3).p("AAkAAIhHAA");
	this.shape_161.setTransform(130,306);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("Ag0gFIBHACIAgAK");
	this.shape_162.setTransform(131.7,305.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_163.setTransform(134,303.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_164.setTransform(134,300.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_165.setTransform(134,298.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_166.setTransform(134,295.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_167.setTransform(134,292.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_168.setTransform(134,290.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_169.setTransform(134,287.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_170.setTransform(134,285);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_171.setTransform(134,282.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_172.setTransform(134,279.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_173.setTransform(134,277.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_174.setTransform(134,274.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_175.setTransform(134,271.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_176.setTransform(134,269.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_177.setTransform(134,266.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(0.3).p("AhLgOIBIACIBNAb");
	this.shape_178.setTransform(134,264);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#292929").ss(0.3).p("AgojvIBOAfIAAHE");
	this.shape_179.setTransform(137.7,281.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(0.3).p("AhfjyIBHAAIAAHlIB4AA");
	this.shape_180.setTransform(136.1,281.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#292929").ss(0.3).p("AB7hdIAAAVIj1CnIAAgRg");
	this.shape_181.setTransform(212.3,63.8,1,1,0,0,0,0,0.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(0.3).p("AB7hdIAAAVIj1CnIAAgRg");
	this.shape_182.setTransform(212.3,57.3,1,1,0,0,0,0,0.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#292929").ss(0.3).p("AEBqYIjsB2IAAC2IiMBJIAABvIiHA/IAAMS");
	this.shape_183.setTransform(202.5,145.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(0.3).p("AgFthIALbD");
	this.shape_184.setTransform(228.4,125.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#292929").ss(0.3).p("ADuhNIAAieIiph+IkyDlIAGH0");
	this.shape_185.setTransform(220.9,75.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(0.3).p("AhIiRICPBYIAADQ");
	this.shape_186.setTransform(251.9,82.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#292929").ss(0.3).p("AhlpuIDIBdIAASF");
	this.shape_187.setTransform(269.2,159.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_188.setTransform(29.3,293.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_189.setTransform(29.3,275.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_190.setTransform(29.3,257.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#292929").ss(0.3).p("ABXgPIitAf");
	this.shape_191.setTransform(29.3,239.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(0.3).p("AkGg2IINBu");
	this.shape_192.setTransform(102.1,301.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#292929").ss(0.3).p("Aj+gzIH9Bn");
	this.shape_193.setTransform(101,280.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(0.3).p("Aj+g1IH+Br");
	this.shape_194.setTransform(101,260.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#292929").ss(0.3).p("AEmA4IoOhuIg+AK");
	this.shape_195.setTransform(97.1,239.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(0.3).p("AgnhhIBPDD");
	this.shape_196.setTransform(51.5,205.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#292929").ss(0.3).p("AgwisIBgDDIAACZ");
	this.shape_197.setTransform(34.2,217.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(0.3).p("AgwhhIBhDD");
	this.shape_198.setTransform(29.5,188.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#292929").ss(0.3).p("AAxBpIhhjR");
	this.shape_199.setTransform(50,182.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(0.3).p("AAqomIhTDBIAAOP");
	this.shape_200.setTransform(116.3,258.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#292929").ss(0.3).p("AAtoZIhZDLIAANq");
	this.shape_201.setTransform(100,251.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(0.3).p("AgqBjIBVjF");
	this.shape_202.setTransform(101.7,185.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#292929").ss(0.3).p("AgoBgIBQi/");
	this.shape_203.setTransform(117.6,191.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(0.3).p("AADmqIgFNV");
	this.shape_204.setTransform(20.4,265.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#292929").ss(0.3).p("AAAm3IAANv");
	this.shape_205.setTransform(126.7,270.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(0.3).p("ABtAAIjYAA");
	this.shape_206.setTransform(74.7,191.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#292929").ss(0.3).p("AAAFVIABqo");
	this.shape_207.setTransform(73.9,200.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(0.3).p("AAOApIBxjWIHxCwIhVCtgAi3BRIlPA6IhoiwIIViJIBnDXIi0Ag");
	this.shape_208.setTransform(72.8,208.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#292929").ss(0.3).p("AEVivIojCoIBrC5");
	this.shape_209.setTransform(35.3,184.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(0.3).p("Aj7jAIHyDNIhWC3");
	this.shape_210.setTransform(111.2,186.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#292929").ss(0.3).p("Ahyh6IDlAAIh3Dug");
	this.shape_211.setTransform(74.8,179.4,1,1,0,0,0,0.2,0);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(0.3).p("AAAgbIAAA3");
	this.shape_212.setTransform(79.3,164.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#292929").ss(0.3).p("AImB3IAAgdInljKIhxgBIn1CtIAAAZ");
	this.shape_213.setTransform(72.7,172.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(0.3).p("AgbAQIA3gf");
	this.shape_214.setTransform(308.3,272.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgu");
	this.shape_215.setTransform(307,268.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_216.setTransform(307,263.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_217.setTransform(307,258.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(0.3).p("AgoAXIBRgt");
	this.shape_218.setTransform(307,253.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#292929").ss(0.3).p("AgnAXIBPgt");
	this.shape_219.setTransform(307.1,248.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(0.3).p("AAAAzIAAhl");
	this.shape_220.setTransform(295.6,283);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#292929").ss(0.3).p("AgCABIicAVIg9gbICegQgADvABIjxAA");
	this.shape_221.setTransform(311.3,275.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(0.3).p("AAAEFIAAoJ");
	this.shape_222.setTransform(289.5,272.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#292929").ss(0.3).p("AAvABIhdgB");
	this.shape_223.setTransform(290.5,221.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(0.3).p("Ah3AWIBqgrICHAA");
	this.shape_224.setTransform(291,248.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#292929").ss(0.3).p("AgpAZIBTgx");
	this.shape_225.setTransform(307.1,243.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_226.setTransform(303.2,240.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_227.setTransform(303.2,235.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_228.setTransform(303.2,230.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_229.setTransform(303.2,225.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_230.setTransform(303.2,219.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_231.setTransform(303.2,214.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_232.setTransform(303.2,209.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_233.setTransform(303.2,204.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_234.setTransform(303.2,199);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_235.setTransform(303.2,193.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_236.setTransform(303.2,188.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_237.setTransform(303.2,183.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_238.setTransform(303.2,178.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_239.setTransform(303.2,172.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_240.setTransform(303.2,167.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_241.setTransform(303.2,162.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_242.setTransform(303.2,157.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhi");
	this.shape_243.setTransform(303.2,152);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_244.setTransform(303.2,146.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_245.setTransform(303.2,141.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_246.setTransform(303.2,136.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#292929").ss(0.3).p("AhQAyIChhi");
	this.shape_247.setTransform(303.2,131.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_248.setTransform(303.2,125.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_249.setTransform(303.2,120.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#292929").ss(0.3).p("AhQAxIChhh");
	this.shape_250.setTransform(303.2,114.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_251.setTransform(323.2,271);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_252.setTransform(323.2,266);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_253.setTransform(323.2,261);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_254.setTransform(323.2,256);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_255.setTransform(323.2,251);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_256.setTransform(323.2,246);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_257.setTransform(323.2,241);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_258.setTransform(323.2,236);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_259.setTransform(323.2,231);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_260.setTransform(323.2,226);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_261.setTransform(323.2,221);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_262.setTransform(323.2,216);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_263.setTransform(323.2,211);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_264.setTransform(323.2,206);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_265.setTransform(323.2,201);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_266.setTransform(323.2,196);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_267.setTransform(323.2,191);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_268.setTransform(323.2,186);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_269.setTransform(323.2,181);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_270.setTransform(323.2,176);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_271.setTransform(323.2,171);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_272.setTransform(323.2,166);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_273.setTransform(323.2,161);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_274.setTransform(323.2,156);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_275.setTransform(323.2,151);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#292929").ss(0.3).p("Ah4AAIDxAA");
	this.shape_276.setTransform(323.2,146);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_277.setTransform(324.3,141);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_278.setTransform(324.3,136);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_279.setTransform(324.3,131);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_280.setTransform(324.3,126);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_281.setTransform(324.3,121);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_282.setTransform(324.3,115.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#292929").ss(0.3).p("AiDAAIEHAA");
	this.shape_283.setTransform(324.3,110.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_284.setTransform(340.1,278);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_285.setTransform(340.1,271);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_286.setTransform(340.1,264);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_287.setTransform(340.1,257);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#292929").ss(0.3).p("AgxALIBjgW");
	this.shape_288.setTransform(340.1,250);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_289.setTransform(340.1,242.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_290.setTransform(340.1,235.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_291.setTransform(340.1,228.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_292.setTransform(340.1,221.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_293.setTransform(340.1,214.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_294.setTransform(340.1,207.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_295.setTransform(340.1,200.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_296.setTransform(340.1,193.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_297.setTransform(340.1,186.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_298.setTransform(340.1,179.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgW");
	this.shape_299.setTransform(340.1,172.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_300.setTransform(340.1,165.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_301.setTransform(340.1,158.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_302.setTransform(340.1,151.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#292929").ss(0.3).p("AgOgGIAcAN");
	this.shape_303.setTransform(339,142.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_304.setTransform(356.5,286.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_305.setTransform(356.5,279.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_306.setTransform(356.5,272.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_307.setTransform(356.5,265);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_308.setTransform(356.5,257.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_309.setTransform(356.5,250.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_310.setTransform(356.5,243.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_311.setTransform(356.5,236.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_312.setTransform(356.5,229);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_313.setTransform(356.5,221.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_314.setTransform(356.5,214.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_315.setTransform(356.5,207.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_316.setTransform(356.5,200.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCI");
	this.shape_317.setTransform(356.5,193.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_318.setTransform(356.5,185.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCI");
	this.shape_319.setTransform(356.5,178.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_320.setTransform(356.5,171.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#292929").ss(0.3).p("AhzhDIDnCH");
	this.shape_321.setTransform(356.5,164.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#292929").ss(0.3).p("ABMAxIiXhh");
	this.shape_322.setTransform(345.2,114.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_323.setTransform(345.2,120.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_324.setTransform(345.2,125.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_325.setTransform(345.2,130.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_326.setTransform(345.2,135.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#292929").ss(0.3).p("AhLgsICXBZ");
	this.shape_327.setTransform(345.2,140.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#292929").ss(0.3).p("AB0BFIjniI");
	this.shape_328.setTransform(356.5,157.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#292929").ss(0.3).p("ABeAAIi7AA");
	this.shape_329.setTransform(322.9,95.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#292929").ss(0.3).p("AhGBQIAAg8ICNhaIAABI");
	this.shape_330.setTransform(306.4,102.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#292929").ss(0.3).p("ABPBYIAAg9IidhpIAABS");
	this.shape_331.setTransform(340.1,103);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#292929").ss(0.3).p("AAArhIAAXD");
	this.shape_332.setTransform(357.1,223.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#292929").ss(0.3).p("AAAv9IAAf7");
	this.shape_333.setTransform(311.1,205.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#292929").ss(0.3).p("AAADOIAAmb");
	this.shape_334.setTransform(337.5,124);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#292929").ss(0.3).p("AAAsMIAAYZ");
	this.shape_335.setTransform(345.1,219.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#292929").ss(0.3).p("AClNbIAA4SIjmidIhjAmIAAXA");
	this.shape_336.setTransform(351.6,226.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#292929").ss(0.3).p("AlwMzIAAm8IBEAAIAAkLIBeADIAAs0ICfhoIEEADICcB3IAAE8");
	this.shape_337.setTransform(315.9,184.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#292929").ss(0.3).p("AAbAMIg1gX");
	this.shape_338.setTransform(365.4,306.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#292929").ss(0.3).p("AgeAAIA9AA");
	this.shape_339.setTransform(314.2,296);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#292929").ss(0.3).p("Ag0AAIBpAA");
	this.shape_340.setTransform(316.3,291);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#292929").ss(0.3).p("AhFAAICKAA");
	this.shape_341.setTransform(318,286);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#292929").ss(0.3).p("AhHAAICPAA");
	this.shape_342.setTransform(318.3,281);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#292929").ss(0.3).p("AgxAJIBjgR");
	this.shape_343.setTransform(340.1,291.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#292929").ss(0.3).p("AgxAMIBjgX");
	this.shape_344.setTransform(340.1,285);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#292929").ss(0.3).p("AhzhEIDnCJ");
	this.shape_345.setTransform(356.5,293.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#292929").ss(0.3).p("AAAj8IAAH5");
	this.shape_346.setTransform(295.2,220.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#292929").ss(0.3).p("AgRgDIAjAAIAAAHIgjAAg");
	this.shape_347.setTransform(47.8,277.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#292929").ss(0.3).p("AADgUIgFAAIAAAqIAFAAg");
	this.shape_348.setTransform(45.5,276.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#292929").ss(0.3).p("AgRgDIAjAAIAAAHIgjAAg");
	this.shape_349.setTransform(67.2,276.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#292929").ss(0.3).p("AADgUIgFAAIAAApIAFAAg");
	this.shape_350.setTransform(64.9,275.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#292929").ss(0.3).p("AgBhKIgGBnIAPAs");
	this.shape_351.setTransform(38.6,241.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#292929").ss(0.3).p("AALhEIgUBsIAOAb");
	this.shape_352.setTransform(53.4,237.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#292929").ss(0.3).p("AgHg5IAOBYIgHAa");
	this.shape_353.setTransform(73.3,238.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#292929").ss(0.3).p("AAtAAQAAAVgNAOQgNAOgTAAQgSAAgNgOQgNgOAAgVQAAgUANgOQANgOASAAQATAAANAOQANAOAAAUg");
	this.shape_354.setTransform(46.4,277.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#292929").ss(0.3).p("AA6AAQAAAXgRAQQgRARgYAAQgXAAgRgRQgRgQAAgXQAAgWARgRQARgQAXAAQAYAAARAQQARARAAAWg");
	this.shape_355.setTransform(65.2,276.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#292929").ss(0.3).p("AAZASQgKgUgRgPQgDADgFAIQgJANgFAR");
	this.shape_356.setTransform(94.8,313.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#292929").ss(0.3).p("AAzg6IhlB1");
	this.shape_357.setTransform(13.3,311.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#292929").ss(0.3).p("AgMAWIALggIAOAd");
	this.shape_358.setTransform(35.4,322);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#292929").ss(0.3).p("AhTBVIAnivICBC/");
	this.shape_359.setTransform(22.9,314.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#292929").ss(0.3).p("AB8AxIhKhfIixAA");
	this.shape_360.setTransform(36.3,317.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#292929").ss(0.3).p("AAYAVIgvgq");
	this.shape_361.setTransform(80.2,315.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#292929").ss(0.3).p("AAfhAIg9CB");
	this.shape_362.setTransform(91.3,310.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#292929").ss(0.3).p("AgQAcIAQgrIASAn");
	this.shape_363.setTransform(103.9,311.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#292929").ss(0.3).p("AB/A4IhAhrIilBeIgdAB");
	this.shape_364.setTransform(88.1,308.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#292929").ss(0.3).p("AA7AAQAAAcgRATQgSAUgYAAQgXAAgRgUQgRgTAAgcQAAgbARgUQARgTAXAAQAYAAASATQARAUAAAbg");
	this.shape_365.setTransform(46.7,277.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#292929").ss(0.3).p("ABHAAQAAAegVAWQgUAVgeAAQgcAAgVgVQgVgWAAgeQAAgeAVgVQAVgVAcAAQAeAAAUAVQAVAVAAAeg");
	this.shape_366.setTransform(64.8,276.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#292929").ss(0.3).p("AAGAOIAAgVIgMABIAAAS");
	this.shape_367.setTransform(48.8,320.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#292929").ss(0.3).p("AAGAOIAAgWIgLACIgBAV");
	this.shape_368.setTransform(50.9,320.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#292929").ss(0.3).p("AACAKIAAgNIgIAC");
	this.shape_369.setTransform(42.8,314.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#292929").ss(0.3).p("AAGAYIAAgpIgLABIAAAX");
	this.shape_370.setTransform(44.5,315.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_371.setTransform(46.6,315.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_372.setTransform(48.8,315.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_373.setTransform(50.9,315.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_374.setTransform(42.4,309.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_375.setTransform(44.5,309.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_376.setTransform(46.6,309.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_377.setTransform(48.8,309);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_378.setTransform(50.9,308.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_379.setTransform(42.4,303);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_380.setTransform(44.5,302.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_381.setTransform(46.6,302.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_382.setTransform(48.8,302.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_383.setTransform(50.9,302);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_384.setTransform(42.4,296.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_385.setTransform(44.5,296);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_386.setTransform(46.6,295.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_387.setTransform(48.8,295.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgLACg");
	this.shape_388.setTransform(50.9,295.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_389.setTransform(42.4,289.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_390.setTransform(44.5,289.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#292929").ss(0.3).p("AgFAbIAMgCIAAgzIgMACg");
	this.shape_391.setTransform(46.6,289);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#292929").ss(0.3).p("AgGAbIAMgCIAAgzIgMACg");
	this.shape_392.setTransform(48.8,288.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#292929").ss(0.3).p("AgFAbIALgCIAAgzIgLACg");
	this.shape_393.setTransform(50.9,288.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#292929").ss(0.3).p("AgGARIAAgcIANACIABAY");
	this.shape_394.setTransform(69.8,317.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#292929").ss(0.3).p("AgGAUIgBgiIAOACIABAe");
	this.shape_395.setTransform(67.4,317.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#292929").ss(0.3).p("AgGAXIgBgoIAOABIABAm");
	this.shape_396.setTransform(65,317.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#292929").ss(0.3).p("AgGAaIgBgtIAOABIABAr");
	this.shape_397.setTransform(62.6,317.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#292929").ss(0.3).p("AgFAcIgCgyIAOABIABAw");
	this.shape_398.setTransform(60.1,317.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOABg");
	this.shape_399.setTransform(69.9,311.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOACg");
	this.shape_400.setTransform(67.5,311.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANACg");
	this.shape_401.setTransform(65.1,311.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANACg");
	this.shape_402.setTransform(62.6,311.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_403.setTransform(60.2,311);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOACg");
	this.shape_404.setTransform(69.9,304.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_405.setTransform(67.5,304.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgBIgBg8IANACg");
	this.shape_406.setTransform(65.1,304);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANABg");
	this.shape_407.setTransform(62.6,303.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_408.setTransform(60.2,303.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_409.setTransform(69.9,297);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANABg");
	this.shape_410.setTransform(67.5,296.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgCIgBg7IANABg");
	this.shape_411.setTransform(65.1,296.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IANABg");
	this.shape_412.setTransform(62.6,296.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_413.setTransform(60.1,296);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_414.setTransform(69.9,289.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgCIgCg7IAOABg");
	this.shape_415.setTransform(67.5,289.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#292929").ss(0.3).p("AAIAfIgOgBIgBg8IANABg");
	this.shape_416.setTransform(65.1,289);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IANACg");
	this.shape_417.setTransform(62.6,288.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#292929").ss(0.3).p("AAIAfIgNgBIgCg8IAOACg");
	this.shape_418.setTransform(60.2,288.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#292929").ss(0.3).p("AhGgHICNAP");
	this.shape_419.setTransform(64.7,284.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_420.setTransform(64.9,263.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_421.setTransform(64.9,264.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_422.setTransform(64.8,266.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#292929").ss(0.3).p("AhHgIICPAR");
	this.shape_423.setTransform(64.6,269);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#292929").ss(0.3).p("AhHgKICPAV");
	this.shape_424.setTransform(64.7,258.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#292929").ss(0.3).p("Ag7AQIB3gf");
	this.shape_425.setTransform(46.7,259.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#292929").ss(0.3).p("Ag6AJIB1gR");
	this.shape_426.setTransform(46.6,284.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#292929").ss(0.3).p("AA8gOIh3Ad");
	this.shape_427.setTransform(46.6,270.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#292929").ss(0.3).p("Ag6APIB1gd");
	this.shape_428.setTransform(46.7,266.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#292929").ss(0.3).p("AA7gPIh0Af");
	this.shape_429.setTransform(46.7,265.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#292929").ss(0.3).p("Ag7ARIB3gh");
	this.shape_430.setTransform(46.6,263.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA9IAbAEIACg9g");
	this.shape_431.setTransform(69,254.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA9IAbAEIACg9g");
	this.shape_432.setTransform(64.9,254.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#292929").ss(0.3).p("AALgiIABA8IgVAJIgCg9g");
	this.shape_433.setTransform(42.8,255.8,1,1,0,0,0,0,0.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#292929").ss(0.3).p("AALgiIABA8IgVAJIgBg9g");
	this.shape_434.setTransform(46.4,254.7,1,1,0,0,0,0,0.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#292929").ss(0.3).p("AALggIABA8IgVAFIgBg9g");
	this.shape_435.setTransform(50.1,253.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#292929").ss(0.3).p("AgOggIAAA8IAbAFIACg9g");
	this.shape_436.setTransform(60.8,253.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#292929").ss(0.3).p("AgHBlIAPjK");
	this.shape_437.setTransform(54.2,224);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#292929").ss(0.3).p("ACUCDIiYj+IiPD3");
	this.shape_438.setTransform(55.5,226.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#292929").ss(0.3).p("ABJFfIAAqzIiRgXIAALd");
	this.shape_439.setTransform(64.8,283.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#292929").ss(0.3).p("Ag7EcIAApnIB3giIAALh");
	this.shape_440.setTransform(46.6,284.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#292929").ss(0.3).p("AC/G+IAArEIATgxIgphhIgkBdIAZA0IiJgZIATgoIgyhpIgsByIARAkIhsAdIAQguIguhlIgiB0IAZAoIAAJ7");
	this.shape_441.setTransform(56,273.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#292929").ss(0.3).p("AAMgCIgXAF");
	this.shape_442.setTransform(40.8,236.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#292929").ss(0.3).p("AANgMQgHgDgGAFQgCACgFAIQgCAGABADQABAGAFgB");
	this.shape_443.setTransform(186.8,391.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgKAJQAAgDACgGQAEgIAEgCQAFgFAGADIgPAaIgBAAQgEAAgBgFg");
	this.shape_444.setTransform(187,391.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#292929").ss(0.3).p("AgLAZQgEACgDgFQgCgDAAgFQABgRAYgRQAFgEAFAAQADAAACACQACACgBAD");
	this.shape_445.setTransform(186,397.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgSAWQgCgDAAgFQABgRAYgRQAFgEAFAAQADAAACACQACACgBADIggAqIgCAAQgDAAgCgDg");
	this.shape_446.setTransform(186,397.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#292929").ss(0.3).p("AAPgCQABgGgGgCQgEgCgGACQgIACgEAHQgEAHAFAG");
	this.shape_447.setTransform(196.1,399.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgMgBQAEgHAIgCQAGgCAEACQAGACgBAGIgaAOQgFgGAEgHg");
	this.shape_448.setTransform(196.1,399.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#292929").ss(0.3).p("AgbgBQAKgIANgDQAPgDAJAHQAGAEABAGQACAHgFAF");
	this.shape_449.setTransform(190.1,400.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgbgBQAKgIANgDQAPgDAJAHQAGAEABAGQACAHgFAFg");
	this.shape_450.setTransform(190.1,400.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#292929").ss(0.3).p("AAOgKQgBgCgCgBIgFABQgLAFgEAFQgDADgBAFQAAAFADAE");
	this.shape_451.setTransform(186.8,404.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgNAFQABgEADgEQAEgEALgGIAFgBQAAABABAAQAAAAABABQAAAAAAABQABAAAAABIgYAYQgDgDAAgGg");
	this.shape_452.setTransform(186.8,404.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#292929").ss(0.3).p("AgYAUQgCgIAEgKQAEgMAMgGQAHgEAJACQAJACAGAG");
	this.shape_453.setTransform(181.3,405.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgWACQAEgMAMgGQAHgEAJACQAJACAGAGIgxAeQgCgIAEgKg");
	this.shape_454.setTransform(181.3,405.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#292929").ss(0.3).p("AgEAHQAEgIAIgD");
	this.shape_455.setTransform(166.3,408.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#292929").ss(0.3).p("AAMgBQgBACgEgDQgFgDgFAEQgFACgDAF");
	this.shape_456.setTransform(170,409.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgCgCQAGgEAEADIACACIgTAGQADgFAEgCg");
	this.shape_457.setTransform(169.8,409.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#292929").ss(0.3).p("AgTALQAIgPARgDQAGgBADAEQACACADAE");
	this.shape_458.setTransform(165.5,413);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AAFgIQAGgBAEADIAFAGIgnAKQAHgQARgCg");
	this.shape_459.setTransform(165.5,413.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#292929").ss(0.3).p("AhiCTQgJABgGgIQgFgJADgIQgNgEgDgNQgBgOALgIQABAAAGgDQAEgCACgCQADgEAAgFQAAgFgCgLQgDgJACgFQADgLAMgFQAGgCAQgCQAFAAACgCQAEgEgFgMQgBgDABgEQABgFAEAAQgEAAgBgFQgBgFADgFQAHgLgDgFQgBgCgFgDQgEgCgBgCQgEgIALgIQAMgJAOgEQADgBABgBQABgDgGgDQgGgFgBgJQgCgIADgHQAEgKAQgPQAHgFADADQABABAAAGQgEAQANAKQADADAGAEQAFAFABAEQABACAAAEQAAADABACIAEACIAUAHQAFACABABQAEAEgDAMQgDAMADAEQABABADADQADACAAACQABADgCAEQgBAFAAACQAAADAEAHQADAGgDADQAJAAADABQgBgDAAgBQgBgPAJgDQgDgBgBgEQgCgDABgEQAEgIACgEQACgGABgNIACgWQABgPAHgDQACARAHAOQAEAGAAAEQAAADgBAGIADAFQAFAJgEALQAHgBAEAGQAEAHgDAGQAGgDAGAEQAGADAAAHQAAADABACABDAJQgCAHADAAABBABQADADAAAEQgBAAAAABQAAgBAAgCQgBgDgBgCg");
	this.shape_460.setTransform(188.2,396.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AhxCMQgGgJAEgIQgOgEgCgNQgCgOAMgIIAGgDIAGgEQADgEAAgFIgCgQQgCgJABgFQADgLANgFQAFgCARgCQAEAAACgCQAEgEgEgMQgCgDABgEQABgFAEAAQgEAAgBgFQAAgFACgFQAHgLgDgFQgBgCgEgDIgGgEQgEgIALgIQANgJAOgEIADgCQACgDgGgDQgGgFgCgJQgBgIADgHQADgKARgPQAGgFADADQABABAAAGQgDAQANAKIAIAHQAGAFABAEIAAAGQAAADACACIAEACIATAHQAGACABABQAEAEgDAMQgDAMADAEIAEAEQACACABACQABADgCAEIgCAHQAAADAEAHQADAGgCADQAIAAAEABIgBgEQgBgPAJgDQgDgBgCgEQgBgDABgEIAFgMQADgGABgNIABgWQABgPAIgDQABARAIAOQADAGAAAEIAAAJIACAFQAFAJgDALQAGgBAEAGQAFAHgDAGQAFgDAHAEQAGADAAAHIABAFIjoCOIgCAAQgHAAgFgHg");
	this.shape_461.setTransform(188.2,396.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#292929").ss(0.3).p("Ag2BOQgHgGAAgKQAAgLAIgFQgFgEABgHQAAgGADgHQAIgPAMgIQgBgJACgMIABgNQAFgjAQgGQAFgCAFABQAEACABAEQABADgBAEQgBACgCAFQgBAHACAMQADAQAIAGQADACAIAEQADACABADQACAEgCABQAJAAAHAHQAHAIgCAJQAEgBAEADQADACABAEQACAFgCAKIgCAN");
	this.shape_462.setTransform(167.2,407.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("Ag9A+QAAgLAIgFQgFgEABgHQAAgGADgHQAIgPAMgIQgBgJACgMIABgNQAFgjAQgGQAFgCAFABQAEACABAEQABADgBAEIgDAHQgBAHACAMQADAQAIAGIALAGQADACABADQACAEgCABQAJAAAHAHQAHAIgCAJQAEgBAEADQADACABAEQACAFgCAKIgCANIhxASQgHgGAAgKg");
	this.shape_463.setTransform(167.2,407.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#292929").ss(0.3).p("AgNgFQALgDAHAHQAHAEgCAI");
	this.shape_464.setTransform(362.8,309);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#292929").ss(0.3).p("AAOAZQAAgNgMgUQgJgRgLAB");
	this.shape_465.setTransform(357.9,302.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#292929").ss(0.3).p("AgbgGQAHgFAKgBQAJgBAIADQARAIAEAT");
	this.shape_466.setTransform(353.5,302.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#292929").ss(0.3).p("AAcATQgJgWgJgGQgHgFgSgBQgJgBgDAE");
	this.shape_467.setTransform(356.7,308.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#292929").ss(0.3).p("AgPgPQAHABAFAEQAFAEACAGIACAKQADAHAGgB");
	this.shape_468.setTransform(351.1,308.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#292929").ss(0.3).p("AAegKQgIgKgPADQgJADgMALQgPAMgBAO");
	this.shape_469.setTransform(328.4,292.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#292929").ss(0.3).p("AgPAPQAAABgCAAQgCAAAAgCQgBgBABgEQAFgMANgHQAMgHANAD");
	this.shape_470.setTransform(324.8,299.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#292929").ss(0.3).p("AAggUQgMgGgMABQgMAAgLAGQgKAGgEAJQgBAEAAALQABAKgCAF");
	this.shape_471.setTransform(332,300);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#292929").ss(0.3).p("AgMAgQgBABgCgBQgFAAgDgEQgEgEgBgGQgBgHAFgMQAHgSAJgHQAGgFAHgBQAIAAAGAFQAHAGADgB");
	this.shape_472.setTransform(337.6,306.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#292929").ss(0.3).p("AgWAPQAFgNANgHQALgHAOACIAGAB");
	this.shape_473.setTransform(330.8,304.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#292929").ss(0.3).p("AgdARQAMgQAPgMQABgBABgBIAEABQAQAJAKAR");
	this.shape_474.setTransform(319.9,305.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#292929").ss(0.3).p("AgUAJIAKgIQAIgFAGgCQAKgCAFAH");
	this.shape_475.setTransform(293.3,303);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#292929").ss(0.3).p("AAKAYQAEgXgGgIQgGgIgQgE");
	this.shape_476.setTransform(297.7,297.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#292929").ss(0.3).p("AgMAKIARgPQACgDACAAQABABABAB");
	this.shape_477.setTransform(303.2,300);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#292929").ss(0.3).p("AgSgDQAGgIAHgDQAKgFAJAJQAJAKgFAJIADgC");
	this.shape_478.setTransform(299.5,304.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#292929").ss(0.3).p("AgIAAIARAA");
	this.shape_479.setTransform(336.4,291.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#292929").ss(0.3).p("AgWAGIAtgL");
	this.shape_480.setTransform(344.7,299.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#292929").ss(0.3).p("AhxADQACgJADgDQAEgHAHACQgEgFAAgIQAAgHAEgGQAEgFAHgDQAHgDAGACQgCgHAEgHQAEgGAHgBQgGgMAFgLQADgFAGgCQAFgDAGACQAKADACAMQABAIgEAMQALABAEALQAIgFAKAAQALABAIAGQAIAHADAKQADALgEAKQAIgDAEAJQACADAAAKQARgEALAOQAMANgGARQAMAEABALIABAFQABADAHAHQAFAFgCAFQAJACACAJQABADgCACQgBADgDgB");
	this.shape_481.setTransform(356.7,302.7);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#292929").ss(0.3).p("Agpg2QgDgCgCgEQgCgFACgFQADgFAEgCQAFgDAFACQgBgGACgGQADgGAFgEQgFgEABgHQAAgIAEgEQAAgDgEgCQABgDABgNQABgKAHgEQAHgDAGAHQADAFABAJQAAADABABQABADAHAAQAHAAAGADQAHAEABAHIAAAFQAAAEADAGQADAGAAAEQgBAEgCAIQAAAGAMAGQAMAFAAAGQAAADgCAFQgBAEAFAIQAFAHgCAEQAOgCAIAHQAEAEACAGQACAGgDAFQAHAAAGADQAGAEACAGQAHANgKAMIAFgEQALAGADAKQAKgCAJAIQAIAIABALQABAQgQAVQAFgBAFAEQAFAFgBAFQABgCADABQACAAACACQADADgBAGQgCASgRAJAibCRQgGgGgCgIQgDgIACgIQAEgSARgFQgCABgCgDQgBgCAAgDQABgJAGgHQAGgIAJgCQgHgQAJgNQAIgOAQgBQgFgDABgGQAAgGAEgEQARgYAfgBQgGgCgCgGQgDgHADgFQADgFAHgBQAFgBAEACQABABABAB");
	this.shape_482.setTransform(329.6,296.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#292929").ss(0.3).p("AB+BzQAGgDgBgIQgCgIgEAAQAGgIgCgJQgCgKgIgCQgEgBgDACQgDACgBADQAAgGgDgGQgEgHgGgDQADgUgKgTIgDgIQADgLgDgFQgCgCgEgCQgHgCgBAAQgFgDgEgPQgEgNgHgCQAFgHgCgJQgBgJgHgFQgFgDgBgBIgBgGQgCgOgNgCQADgDgDgEQgCgDgEAAQgFAAgIAIQgeAhgFAYQAAABABAEQACAEAAABQgBABgEAAQgEgBAAABQgOALgDAIQgCAGABAGQACAHAGADQgKgBgJAGQgIAGgCAJQAAgDgCgDQgDgEgEgBQgEAAgEACQgCACgBABQAAgBgCgCQgDgFgFABQgGABgHAKQgKAOAHAHQgFABgCAGQgDAGACAFQACAFAGACQAFACAFgCQgCAFACAFQACAFAEACQAFACAFgDQACgBACgCQABgCABgCAhfAOQgBACgBACAhbBNIgCADQgCAHADAA");
	this.shape_483.setTransform(297.9,298.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#292929").ss(0.3).p("AgrAFIBXgJ");
	this.shape_484.setTransform(280.9,305.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#292929").ss(0.3).p("AhvANIDfgZ");
	this.shape_485.setTransform(274.7,301.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_486.setTransform(276.7,297.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_487.setTransform(276.7,293.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_488.setTransform(276.7,289);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_489.setTransform(276.7,284.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_490.setTransform(276.7,280.6);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_491.setTransform(276.7,276.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#292929").ss(0.3).p("AiDAPIEHgd");
	this.shape_492.setTransform(276.7,272.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#292929").ss(0.3).p("Ai5gOIFCAKIkJAU");
	this.shape_493.setTransform(276.3,267.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#292929").ss(0.3).p("AAaCwIAAlYIg4gD");
	this.shape_494.setTransform(260.8,286.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#292929").ss(0.3).p("AAAihIAAFD");
	this.shape_495.setTransform(290,283.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#292929").ss(0.3).p("AApAMIhRgX");
	this.shape_496.setTransform(196.1,298.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_497.setTransform(196.9,296.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_498.setTransform(196.9,293.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgd");
	this.shape_499.setTransform(196.9,290.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_500.setTransform(196.9,287.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_501.setTransform(196.9,284.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_502.setTransform(196.9,281.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_503.setTransform(196.9,278.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_504.setTransform(196.9,275.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_505.setTransform(196.9,272.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#292929").ss(0.3).p("AAxAPIhhgc");
	this.shape_506.setTransform(196.9,269.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgc");
	this.shape_507.setTransform(196.9,266.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_508.setTransform(199.4,232.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_509.setTransform(199.4,235.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_510.setTransform(199.4,237.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_511.setTransform(199.4,239.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_512.setTransform(199.4,242);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_513.setTransform(199.4,244.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_514.setTransform(199.4,246.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_515.setTransform(199.4,248.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_516.setTransform(199.4,251.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_517.setTransform(199.4,253.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#292929").ss(0.3).p("AAaAHIgzgN");
	this.shape_518.setTransform(199.4,255.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#292929").ss(0.3).p("AAaAIIgzgP");
	this.shape_519.setTransform(199.4,258);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgb");
	this.shape_520.setTransform(196.9,259.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#292929").ss(0.3).p("AAxAOIhhgc");
	this.shape_521.setTransform(196.9,263.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#292929").ss(0.3).p("AAbi2QABEvAEAGIhGgPIAABH");
	this.shape_522.setTransform(202,212.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#292929").ss(0.3).p("ABPAoIAAgoIhLglIhSAjIAAAu");
	this.shape_523.setTransform(204.4,194);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#292929").ss(0.3).p("ABBASIhBghIhAAh");
	this.shape_524.setTransform(204.7,196.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#292929").ss(0.3).p("ABBANIhAgZIhBAZ");
	this.shape_525.setTransform(204.7,200.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#292929").ss(0.3).p("ABBAEIg/gGIhCAG");
	this.shape_526.setTransform(204.7,204.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#292929").ss(0.3).p("ABBADIhAgEIhBAE");
	this.shape_527.setTransform(204.7,209.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#292929").ss(0.3).p("ABBAAIiBAA");
	this.shape_528.setTransform(204.7,213.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#292929").ss(0.3).p("ABBgHIg9APIhEgP");
	this.shape_529.setTransform(204.7,219);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#292929").ss(0.3).p("Ai0BDIAAg1IFthL");
	this.shape_530.setTransform(179.6,230.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#292929").ss(0.3).p("AAuAlIAAhDIhbAOIAAAh");
	this.shape_531.setTransform(193.6,201.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#292929").ss(0.3).p("AA5AlIAAhEIhxASIAAAe");
	this.shape_532.setTransform(192.5,204.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#292929").ss(0.3).p("ABLAkIAAhDIiVAYIAAAt");
	this.shape_533.setTransform(190.7,207.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#292929").ss(0.3).p("ABkAfIAAhEIjHAiIAAAv");
	this.shape_534.setTransform(188.2,212.9);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#292929").ss(0.3).p("ACfAJIAAhEIk9BEIAAA5");
	this.shape_535.setTransform(182.4,224.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#292929").ss(0.3).p("AgtAlIAAhDIBbAOIAAAi");
	this.shape_536.setTransform(215.9,201.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#292929").ss(0.3).p("AhFAlIAAhEICKAWIAAAg");
	this.shape_537.setTransform(218.2,204.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#292929").ss(0.3).p("AhXAjIAAhEICvAdIAAAr");
	this.shape_538.setTransform(220.1,208);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#292929").ss(0.3).p("AiBAcIAAhEIECApIAAAt");
	this.shape_539.setTransform(224.2,213.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#292929").ss(0.3).p("AibAYIAAhEIE3AyIAAAs");
	this.shape_540.setTransform(226.9,218.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#292929").ss(0.3).p("Ai2APIAAhEIFtA5IAAA4");
	this.shape_541.setTransform(229.5,223.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#292929").ss(0.3).p("AjRALIAAhEIGiBBIAAA4");
	this.shape_542.setTransform(232.2,229.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#292929").ss(0.3).p("AgbIGIAAv1IA7gR");
	this.shape_543.setTransform(208,275.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#292929").ss(0.3).p("AAAnQIAAOh");
	this.shape_544.setTransform(208.8,279.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#292929").ss(0.3).p("AAAneIAAO9");
	this.shape_545.setTransform(213,277.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#292929").ss(0.3).p("AkWlTIAggjIAjAjIArgmIG+BLIAAKu");
	this.shape_546.setTransform(229.9,267.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#292929").ss(0.3).p("AgalaIAyAcIgCKd");
	this.shape_547.setTransform(199.6,265.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#292929").ss(0.3).p("AjECgIAAjvIGJhKIAAEiIgwgO");
	this.shape_548.setTransform(177.2,245.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#292929").ss(0.3).p("AjDDKIAAl0IGHglIABGk");
	this.shape_549.setTransform(172.4,278.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#292929").ss(0.3).p("AgjgFIBGAL");
	this.shape_550.setTransform(216.7,322.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#292929").ss(0.3).p("AhRgMICjAZ");
	this.shape_551.setTransform(221.3,319.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#292929").ss(0.3).p("AiFgVIELAr");
	this.shape_552.setTransform(226.5,316.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#292929").ss(0.3).p("AibgZIE3Az");
	this.shape_553.setTransform(228.8,312.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#292929").ss(0.3).p("AiygcIFlA5");
	this.shape_554.setTransform(231,309);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#292929").ss(0.3).p("AjIggIGRBB");
	this.shape_555.setTransform(233.3,305.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_556.setTransform(235.3,301.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_557.setTransform(235.3,297.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_558.setTransform(235.3,293.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_559.setTransform(235.3,289.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_560.setTransform(235.3,285.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_561.setTransform(235.3,281.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_562.setTransform(235.3,277.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_563.setTransform(235.3,273.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_564.setTransform(235.3,269.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_565.setTransform(235.3,265.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_566.setTransform(235.3,261.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_567.setTransform(235.3,257.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_568.setTransform(235.3,253.5);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_569.setTransform(235.3,249.5);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_570.setTransform(235.3,245.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_571.setTransform(235.3,241.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#292929").ss(0.3).p("AjdgjIG7BH");
	this.shape_572.setTransform(235.3,237.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hB");
	this.shape_573.setTransform(193.6,308.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hC");
	this.shape_574.setTransform(193.6,312.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hC");
	this.shape_575.setTransform(193.6,316.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hC");
	this.shape_576.setTransform(193.6,320.4);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hC");
	this.shape_577.setTransform(193.6,324.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#292929").ss(0.3).p("AheAiIC9hD");
	this.shape_578.setTransform(193.6,328.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#292929").ss(0.3).p("AhMAbICZg1");
	this.shape_579.setTransform(191.8,332.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#292929").ss(0.3).p("AhOAcICdg3");
	this.shape_580.setTransform(192,336.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#292929").ss(0.3).p("AhQAcIChg4");
	this.shape_581.setTransform(192.2,340.4);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#292929").ss(0.3).p("AhSAdIClg5");
	this.shape_582.setTransform(192.4,344.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#292929").ss(0.3).p("AhTAeICng7");
	this.shape_583.setTransform(192.5,348.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#292929").ss(0.3).p("AhVAfICrg9");
	this.shape_584.setTransform(192.7,352);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#292929").ss(0.3).p("AhXAfICvg9");
	this.shape_585.setTransform(192.9,355.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#292929").ss(0.3).p("AhZAfICzg9");
	this.shape_586.setTransform(193.1,359.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#292929").ss(0.3).p("AhaAgIC1g/");
	this.shape_587.setTransform(193.2,363.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#292929").ss(0.3).p("AhcAhIC5hC");
	this.shape_588.setTransform(193.4,367.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#292929").ss(0.3).p("AheAhIC9hB");
	this.shape_589.setTransform(193.6,371);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#292929").ss(0.3).p("AisgFICcAmIC9hC");
	this.shape_590.setTransform(185.8,374.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#292929").ss(0.3).p("AAGABIgLgB");
	this.shape_591.setTransform(183.5,312.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#292929").ss(0.3).p("AAIACIgPgD");
	this.shape_592.setTransform(183.4,316.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#292929").ss(0.3).p("AAMADIgXgF");
	this.shape_593.setTransform(182.9,320.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#292929").ss(0.3).p("AAQAEIgfgH");
	this.shape_594.setTransform(182.5,324);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#292929").ss(0.3).p("AATAFIgmgJ");
	this.shape_595.setTransform(182.2,327.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#292929").ss(0.3).p("AAWAGIgrgL");
	this.shape_596.setTransform(181.9,331.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#292929").ss(0.3).p("AAfAIIg9gP");
	this.shape_597.setTransform(181,335.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#292929").ss(0.3).p("AAaAHIg0gN");
	this.shape_598.setTransform(181.5,339.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#292929").ss(0.3).p("AAkAJIhHgR");
	this.shape_599.setTransform(180.5,342.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#292929").ss(0.3).p("AA2AOIhrga");
	this.shape_600.setTransform(178.7,346.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#292929").ss(0.3).p("ABEARIiHgh");
	this.shape_601.setTransform(177.3,349.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_602.setTransform(176.3,353.2);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#292929").ss(0.3).p("ABOATIibgm");
	this.shape_603.setTransform(176.3,357.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_604.setTransform(176.3,360.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#292929").ss(0.3).p("ABOATIibgl");
	this.shape_605.setTransform(176.3,364.8);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#292929").ss(0.3).p("ABOAUIibgm");
	this.shape_606.setTransform(176.3,368.6);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#292929").ss(0.3).p("ABOAUIibgn");
	this.shape_607.setTransform(176.3,372.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#292929").ss(0.3).p("AisgFICcAmIC9hC");
	this.shape_608.setTransform(185.8,374.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#292929").ss(0.3).p("ABdAnIC2hCIoOgKg");
	this.shape_609.setTransform(174.3,303.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#292929").ss(0.3).p("AAACGIAAkL");
	this.shape_610.setTransform(204.7,313.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#292929").ss(0.3).p("Ahfl0IAALhIDDhO");
	this.shape_611.setTransform(193.6,345.6);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#292929").ss(0.3).p("AkuhVIAAgDIJJALIjQBPgAkmBeIgIiz");
	this.shape_612.setTransform(176.4,308.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#292929").ss(0.3).p("AhNgWICbAt");
	this.shape_613.setTransform(176.1,379.8);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#292929").ss(0.3).p("AiBA2IAAgzIEDgxIAABE");
	this.shape_614.setTransform(185.2,218.4);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#292929").ss(0.3).p("ACchJIk3CT");
	this.shape_615.setTransform(183.3,409.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#292929").ss(0.3).p("AAlAXIgbgeIgwgN");
	this.shape_616.setTransform(218,390.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#292929").ss(0.3).p("ADGhbImICzIAAg9");
	this.shape_617.setTransform(271.6,439.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AjDAdIGHh2ImHCzg");
	this.shape_618.setTransform(271.7,439.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_619.setTransform(290.3,321.4);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#292929").ss(0.3).p("AAMAXIAwgeIhGgOIg7Ad");
	this.shape_620.setTransform(284.3,318.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#292929").ss(0.3).p("AApAaIAAgzIhRgPIAABX");
	this.shape_621.setTransform(281.4,323);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#292929").ss(0.3).p("AAYA0IgtgcIAAhP");
	this.shape_622.setTransform(256.4,319.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#292929").ss(0.3).p("AAHAtIgvAIIAAhaIBRgPIAAA9");
	this.shape_623.setTransform(263,319.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAEgOgKgL");
	this.shape_624.setTransform(271.1,324.3);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_625.setTransform(265.7,324.7);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_626.setTransform(268.6,325);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#292929").ss(0.3).p("AgDgMIAHAZ");
	this.shape_627.setTransform(271.4,327.6);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#292929").ss(0.3).p("AgFARIAKgh");
	this.shape_628.setTransform(265.9,328.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#292929").ss(0.3).p("AAtgEQABANgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQASgCAOAJQAOAIACAPg");
	this.shape_629.setTransform(268.2,323.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#292929").ss(0.3).p("AAjgEQABAFgKAGQgJAFgPACQgNADgLgDQgKgDgBgGQgBgFAJgGQAKgFAOgCQANgCALACQALADABAGg");
	this.shape_630.setTransform(268.1,321.6);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#292929").ss(0.3).p("AgEAUQAEgFACgIQAEgOgKgL");
	this.shape_631.setTransform(238.7,327.9);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_632.setTransform(233.3,328.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#292929").ss(0.3).p("AgEAUQAEgFACgIQAFgOgLgL");
	this.shape_633.setTransform(236.2,328.7);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngZIALgf");
	this.shape_634.setTransform(236.1,332.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#292929").ss(0.3).p("AAtgEQABANgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAPAJQAOAIACAPg");
	this.shape_635.setTransform(235.8,327.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAGQgKAFgOACQgOACgKgCQgLgDgBgGQgBgFAKgGQAJgFAOgDQAOgCALADQAKADABAGg");
	this.shape_636.setTransform(235.6,325.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#292929").ss(0.3).p("AnVgkIARgCIBrBmIITiAIEHAAIASAN");
	this.shape_637.setTransform(267.6,331.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#292929").ss(0.3).p("ABWBgIirjA");
	this.shape_638.setTransform(224.3,420.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_639.setTransform(229.8,412);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_640.setTransform(229.8,400.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#292929").ss(0.3).p("AAfAjIg9hF");
	this.shape_641.setTransform(229.8,385.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hH");
	this.shape_642.setTransform(229.8,371.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#292929").ss(0.3).p("AAfAkIg9hG");
	this.shape_643.setTransform(229.8,359.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#292929").ss(0.3).p("AAAjuIAAHd");
	this.shape_644.setTransform(350.5,342.8);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#292929").ss(0.3).p("AAAmaIAAM2");
	this.shape_645.setTransform(339.9,362.2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABl");
	this.shape_646.setTransform(339.9,420.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#292929").ss(0.3).p("AAAkxIAAJj");
	this.shape_647.setTransform(329.4,365.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#292929").ss(0.3).p("AAAhPIAACe");
	this.shape_648.setTransform(329.4,418.1);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#292929").ss(0.3).p("AAAmRIAAMj");
	this.shape_649.setTransform(318.8,387.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#292929").ss(0.3).p("AAAn5IAAPz");
	this.shape_650.setTransform(308.2,377.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#292929").ss(0.3).p("AAAoAIAAQB");
	this.shape_651.setTransform(297.6,377.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#292929").ss(0.3).p("AAAoFIAAQL");
	this.shape_652.setTransform(287.1,378.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#292929").ss(0.3).p("AAAn+IAAP9");
	this.shape_653.setTransform(276.5,380.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#292929").ss(0.3).p("AAAn9IAAP7");
	this.shape_654.setTransform(265.9,383.1);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#292929").ss(0.3).p("AAAoQIAAQh");
	this.shape_655.setTransform(255.3,387.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#292929").ss(0.3).p("AAAohIAARD");
	this.shape_656.setTransform(244.7,391.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#292929").ss(0.3).p("AG3g7IkhAJIoKBtIg+hG");
	this.shape_657.setTransform(270.6,343.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#292929").ss(0.3).p("AD2gkInrBJ");
	this.shape_658.setTransform(354,331);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#292929").ss(0.3).p("AmYBNIMxiZ");
	this.shape_659.setTransform(274,354.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#292929").ss(0.3).p("AjbASIG4gk");
	this.shape_660.setTransform(346.3,343.7);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#292929").ss(0.3).p("AJ1hiIzpDF");
	this.shape_661.setTransform(295.8,365);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#292929").ss(0.3).p("Ao7BbIR2i2");
	this.shape_662.setTransform(290.4,379.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#292929").ss(0.3).p("AIihgQgEAAkFAaQkHAagHACQgiAJj9A9QjUAzg9AR");
	this.shape_663.setTransform(288,394.4);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#292929").ss(0.3).p("Am1BgIHUiZIGZgl");
	this.shape_664.setTransform(276.8,406.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#292929").ss(0.3).p("AhJAHICTgN");
	this.shape_665.setTransform(336.9,395.2);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#292929").ss(0.3).p("AnUB1IGki8IIHgt");
	this.shape_666.setTransform(279.9,418.4);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#292929").ss(0.3).p("AgTACIAngD");
	this.shape_667.setTransform(344.8,405.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#292929").ss(0.3).p("ApBB/IGGjIIL/g0");
	this.shape_668.setTransform(290.7,428.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#292929").ss(0.3).p("AhigKIDFAV");
	this.shape_669.setTransform(188.6,422.8);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#292929").ss(0.3).p("ABWALIirgV");
	this.shape_670.setTransform(189.8,449.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#292929").ss(0.3).p("ApWgtIIpA9IKEAd");
	this.shape_671.setTransform(318.5,310.5);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#292929").ss(0.3).p("AieAjIE+hF");
	this.shape_672.setTransform(222.3,324.1);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#292929").ss(0.3).p("ABnhcIAAAdIjMCSIgBgZ");
	this.shape_673.setTransform(248.3,312.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#292929").ss(0.3).p("AjpBRIFNidIAAASICIAJ");
	this.shape_674.setTransform(189,408);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#292929").ss(0.3).p("AgkAAIBJAA");
	this.shape_675.setTransform(318.1,344.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#292929").ss(0.3).p("ABIh9IgbAKIhvDeIARAU");
	this.shape_676.setTransform(328.5,334.2);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("#292929").ss(0.3).p("AgZAuIAzhb");
	this.shape_677.setTransform(340,410.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#292929").ss(0.3).p("AgiA0IBFhn");
	this.shape_678.setTransform(334.6,407.4);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#292929").ss(0.3).p("AgcAtIA6hZ");
	this.shape_679.setTransform(330.5,403.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#292929").ss(0.3).p("AgXAlIAvhI");
	this.shape_680.setTransform(327.2,399.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#292929").ss(0.3).p("AgTAcIAng3");
	this.shape_681.setTransform(324.2,396.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#292929").ss(0.3).p("ACBB+IgVhiIjOiYIgeA0IB0Cxg");
	this.shape_682.setTransform(333,403.4);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#292929").ss(0.3).p("AsJK4IFpjPIMshQIhZnAIHVqS");
	this.shape_683.setTransform(310.9,383.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#292929").ss(0.3).p("AA6j9IgEAUIAgBBIisCOIAAEMICqi2");
	this.shape_684.setTransform(207.2,426.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#292929").ss(0.3).p("ACvoDIAARvIisjMIAAjlIgbhVIiNgIIApiIIgzpO");
	this.shape_685.setTransform(215.5,390.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#292929").ss(0.3).p("ApeCWIh8h2IjjgGIGQheIDOiXIIzBIILfAiIoQBRIh6D8IhbAAIAAjLIkSAAg");
	this.shape_686.setTransform(293.8,325);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#292929").ss(0.3).p("AAACTIAAkl");
	this.shape_687.setTransform(224.4,428.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#292929").ss(0.3).p("ABWBhIirjB");
	this.shape_688.setTransform(224.3,430.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#292929").ss(0.3).p("AARgdIghgEIAAA/IAhAEg");
	this.shape_689.setTransform(183.9,444.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#292929").ss(0.3).p("AgIAQIgvgRIBGgOIA6AQ");
	this.shape_690.setTransform(259.8,314.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#292929").ss(0.3).p("AAAgmIAABN");
	this.shape_691.setTransform(382.3,318.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#292929").ss(0.3).p("AAAhpIAADT");
	this.shape_692.setTransform(371.7,326.8);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#292929").ss(0.3).p("AAAirIAAFX");
	this.shape_693.setTransform(361.1,334.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#292929").ss(0.3).p("AATARIgmgh");
	this.shape_694.setTransform(250.2,446.5);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#292929").ss(0.3).p("AB3hVIAWABIAAATIkcCY");
	this.shape_695.setTransform(158.7,400.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#292929").ss(0.3).p("ACBhYIAdAEIAAAUIk9CZ");
	this.shape_696.setTransform(154.7,397.9);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAf");
	this.shape_697.setTransform(115.9,314.4);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#292929").ss(0.3).p("AghFeIApgWIAApSQABgPADgRQAGgkAPgO");
	this.shape_698.setTransform(51.1,391);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#292929").ss(0.3).p("AKGgUImyguItZCF");
	this.shape_699.setTransform(94.7,322.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#292929").ss(0.3).p("ADgicIHrA7Is+D+IpYipg");
	this.shape_700.setTransform(93.4,328.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#292929").ss(0.3).p("AAABBQgBgagCgaQgDgzAEAAIAHgd");
	this.shape_701.setTransform(81.3,351.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#292929").ss(0.3).p("AhsgLIBhAbIB4gg");
	this.shape_702.setTransform(82.2,345.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#292929").ss(0.3).p("AAWgkQgLAEgLALQgVAWAAAp");
	this.shape_703.setTransform(33.9,355.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#292929").ss(0.3).p("AAXgzQgMABgLAPQgWAdAAA/");
	this.shape_704.setTransform(33,353.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#292929").ss(0.3).p("AgJDxIAAmDQAAgRADgUQAGgnAMgN");
	this.shape_705.setTransform(43.9,377.3);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#292929").ss(0.3).p("AAOj+IgNATQgNAbAAArIAAGn");
	this.shape_706.setTransform(42.4,374.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#292929").ss(0.3).p("AgwlmIAPAPQASAUAPAYQAwBOAABfIAAHp");
	this.shape_707.setTransform(41.9,375.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#292929").ss(0.3).p("AATlmIgSAZQgSAoAABKIAAJF");
	this.shape_708.setTransform(50.9,386.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#292929").ss(0.3).p("AgpmXIApBFQAqBWAABaIAAI9");
	this.shape_709.setTransform(52.3,384.4);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#292929").ss(0.3).p("AgLFcIAApeQABgPADgTQAHglANgO");
	this.shape_710.setTransform(63.1,389.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#292929").ss(0.3).p("ABGl6IgMAYQgNAvAABrIAAI/Ih1gn");
	this.shape_711.setTransform(54.8,388.7);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#292929").ss(0.3).p("AAmFyIAAnzQABgngKgxQgThjgxgy");
	this.shape_712.setTransform(63.9,385.6);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#292929").ss(0.3).p("AALlCQgVAvAACLIAAHQ");
	this.shape_713.setTransform(73.6,388.2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#292929").ss(0.3).p("AAQlNQgCABgDAEQgGAJgFARQgPA2AABzIAAHY");
	this.shape_714.setTransform(71.9,387.8);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#292929").ss(0.3).p("AA3kKQgbAJgcAfQg2A9AABpIAAFM");
	this.shape_715.setTransform(89.8,374.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#292929").ss(0.3).p("AiIgzQAAiZg5hfQgSgdgVgUIgSgPIGbCLIARAJQAVAMARATQA3A9AABqIAAGK");
	this.shape_716.setTransform(52.1,372.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#292929").ss(0.3).p("AMUgRIpeg0IvJCL");
	this.shape_717.setTransform(98.2,319.8);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#292929").ss(0.3).p("AEhGAIAAniQgIgegOggQgchAghgJInyiS");
	this.shape_718.setTransform(52.5,368.4);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#292929").ss(0.3).p("AFiFsIAUgJIAAmWQAAg6ALhDQAWiHA8gsItXEIQgpANgZAhQgiAtAAAx");
	this.shape_719.setTransform(130.3,353.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#292929").ss(0.3).p("AAiC8IAAi6QAAhjgagwQgNgZgNgLQgEgCgEABQgFABgCAD");
	this.shape_720.setTransform(91,373.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#292929").ss(0.3).p("AAfClIgBiJQAAhmgXgvQgLgagMgKQgDgDgFABQgEABgBAE");
	this.shape_721.setTransform(89.5,373);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#292929").ss(0.3).p("AAuEPIgBlcQAAhmgagwQgOgagMgKQgDgDgFABQgFABgBAEQgYA7AABA");
	this.shape_722.setTransform(102.4,379.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#292929").ss(0.3).p("AAlEBIgBlLQAAhhgUgtQgLgXgKgKQgDgDgDABQgEABgCAEQgTA1AAA+IAAEo");
	this.shape_723.setTransform(101.5,381.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#292929").ss(0.3).p("AAuEPIgBlYQAAhogagxQgPgbgLgJQgEgDgEABQgFABgCAEQgXA9AABA");
	this.shape_724.setTransform(114.9,374.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#292929").ss(0.3).p("AAlDxIgBlEQAAhigVguQgKgYgKgLQgDgCgEABQgEABgBADQgTA5AAA9IAAGa");
	this.shape_725.setTransform(113.9,378.2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#292929").ss(0.3).p("AAsEyIgBmgQAAhngZgxQgOgbgKgJQgEgDgFABQgEABgCAEQgWA7AABB");
	this.shape_726.setTransform(127.7,374.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#292929").ss(0.3).p("AAjEeIgBmCQAAhhgTgvQgMgagIgIQgDgCgDABQgEABgBADQgSA6AAA8IAAGo");
	this.shape_727.setTransform(126.8,375.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#292929").ss(0.3).p("AArElIgBmCQAAhqgYgxQgNgbgLgKQgDgDgFABQgEABgCAEQgWBAAAA/");
	this.shape_728.setTransform(139.5,369.9);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#292929").ss(0.3).p("AAiEJIAAl2QAAhjgUgvQgKgagIgJQgDgDgEABQgDABgBAEQgSA2AABCIAAHR");
	this.shape_729.setTransform(138.7,374);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#292929").ss(0.3).p("AArEhIgBl9QAAhngYgyQgNgZgLgLQgEgDgEABQgEABgCAEQgWA6AABD");
	this.shape_730.setTransform(150.9,365.7);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#292929").ss(0.3).p("AAiEFIgBlwQAAhigTguQgJgYgKgLQgCgCgEABQgEABgBADQgRA4AAA+IAAHK");
	this.shape_731.setTransform(150,369.7);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#292929").ss(0.3).p("ABPjlQAAg/AVg7QACgEAEgBQAFgBADADQANAKAMAZQAYAwAABmIABF2IlKCZ");
	this.shape_732.setTransform(149.2,369.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#292929").ss(0.3).p("AAiD/IgBlnQAAhggTgtQgLgZgIgJQgCgCgEABQgEABgBADQgRA3AAA8IAAHA");
	this.shape_733.setTransform(160.5,365.3);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#292929").ss(0.3).p("AARgHQgCAFgGACQgLAIgSgE");
	this.shape_734.setTransform(127.2,416.5);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#292929").ss(0.3).p("AANgNQAAAFgEAGQgIAMgRAE");
	this.shape_735.setTransform(127,414.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#292929").ss(0.3).p("AAEgUIACAMQgBANgMAL");
	this.shape_736.setTransform(125.7,413.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#292929").ss(0.3).p("AgDgSIAFAKQAEANgIAO");
	this.shape_737.setTransform(124.1,412.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_738.setTransform(122.1,413.1);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_739.setTransform(120.3,413.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_740.setTransform(118.5,414.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_741.setTransform(116.7,415.2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_742.setTransform(114.8,416.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_743.setTransform(113,416.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#292929").ss(0.3).p("AgHgPIAIAIQAIAKgDAQ");
	this.shape_744.setTransform(111.2,417.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_745.setTransform(109.4,418.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_746.setTransform(107.6,419.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_747.setTransform(105.8,419.8);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#292929").ss(0.3).p("AgHgQIAIAIQAIAKgDAR");
	this.shape_748.setTransform(103.8,420.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#292929").ss(0.3).p("AAwhAIAAAxIhhBM");
	this.shape_749.setTransform(179.3,513.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_750.setTransform(172.3,516);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#292929").ss(0.3).p("ABkhOIAKAUIh2BUIhbgqIBBBTQAJAHALACQALACAGgEQAEgCACgFQACgFgCgEIgEgEIgHgHIgDgCIgGgBQgEgBgFADIgFAEIgCADQgBAEAGAGQAGADACABQAGABADgDIABgBQACgDgBgDQgBgFgEAA");
	this.shape_751.setTransform(173.1,512.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#292929").ss(0.3).p("AAWglIAAA6QgCAFgHAEQgNAGgYgJ");
	this.shape_752.setTransform(172,522.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#292929").ss(0.3).p("AgcAfIA3gtIAAgPIgKAA");
	this.shape_753.setTransform(166.7,527.1);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#292929").ss(0.3).p("AgYAcIAvgmIAAgQIgLAA");
	this.shape_754.setTransform(166.1,525.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#292929").ss(0.3).p("AgVAaIAqgiIAAgPIgLAA");
	this.shape_755.setTransform(165.3,523.3);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#292929").ss(0.3).p("AgWAbIAsgkIAAgPIgLAA");
	this.shape_756.setTransform(164.1,521.8);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#292929").ss(0.3).p("AgYAcIAvgmIAAgQIgLAA");
	this.shape_757.setTransform(163,520.3);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#292929").ss(0.3).p("AAXgcIAAAPIguAm");
	this.shape_758.setTransform(161.9,518.9);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#292929").ss(0.3).p("AgfAYIA3gsIgLgC");
	this.shape_759.setTransform(161.9,518.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#292929").ss(0.3).p("AAAAJIAAgR");
	this.shape_760.setTransform(170.3,518.7);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#292929").ss(0.3).p("AAQANIgfgZ");
	this.shape_761.setTransform(156.3,529.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#292929").ss(0.3).p("AgzhdIBcBoQAHAIABALIACAmQgEAVgVADQgVACgMgTIAAgn");
	this.shape_762.setTransform(158.8,524.3);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#292929").ss(0.3).p("AArAsQgBgGgDgFIgDgFIhPhhAArAsQgBgBAAgBQgCgIgLgFIgHgCQgKAAgGAHQgGAHACAIQABAIAIAGQAGAFAIAAQAJAAAGgJQABgEABgEAAYAnQgHABgBAFQgBAFAGAEQAIAGAHgCQAEgCACgFQABgEAAgD");
	this.shape_763.setTransform(157.9,523.4);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#292929").ss(0.3).p("AAAA1IAAhp");
	this.shape_764.setTransform(160.8,512.3);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABm");
	this.shape_765.setTransform(161.4,511.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#292929").ss(0.3).p("AAZhJIAABoIgzAo");
	this.shape_766.setTransform(160.7,512.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#292929").ss(0.3).p("AgsAQIA9gpIAWALIg8Aq");
	this.shape_767.setTransform(159.3,506.8);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#292929").ss(0.3).p("AgKAdIAAhMIAWALIAABc");
	this.shape_768.setTransform(156,513.2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#292929").ss(0.3).p("AiPAkIBHglIBlAZIBzg7");
	this.shape_769.setTransform(167.1,439.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#292929").ss(0.3).p("AAQASIAAgsIgfATIABAq");
	this.shape_770.setTransform(209.5,451.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#292929").ss(0.3).p("AgPgKIABAeIAdgSIAAge");
	this.shape_771.setTransform(209.7,458.5);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#292929").ss(0.3).p("AASAUIAAgzIgjAUIAAAz");
	this.shape_772.setTransform(199.8,456.6);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#292929").ss(0.3).p("AgRgLIABAiIAigVIAAgh");
	this.shape_773.setTransform(200,464.5);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#292929").ss(0.3).p("AiIEMQAIgGAGg1QACgRAAgVIgBkLQAAgNADgQQAIggAXgKQAXgKA4geQA+giBIgoIAJANIjLB6QgcAVAAAiIAAEDIADAsQAGAuAQAHQgSAQgNACQgSADgQgSg");
	this.shape_774.setTransform(202.5,479.6);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#292929").ss(0.3).p("AAEA8IgGAIIAAh/IAGgIg");
	this.shape_775.setTransform(186.7,496.4);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#292929").ss(0.3).p("AgLAnIAAg1IAXgYIAAA3g");
	this.shape_776.setTransform(186.6,486.7,1,1,0,0,0,0,-0.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#292929").ss(0.3).p("AAQAIIgfgP");
	this.shape_777.setTransform(188.7,498.6);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#292929").ss(0.3).p("AARAJIghgR");
	this.shape_778.setTransform(184.6,496.5);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#292929").ss(0.3).p("AAAgZIAAAz");
	this.shape_779.setTransform(79.1,416.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgM");
	this.shape_780.setTransform(158.4,419.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_781.setTransform(153.1,420.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgM");
	this.shape_782.setTransform(156,420.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngaIALge");
	this.shape_783.setTransform(155.9,424.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#292929").ss(0.3).p("AAsgFQACAOgMAMQgLAMgTACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAOAIQAPAJABAOg");
	this.shape_784.setTransform(155.6,419.1);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAFQgKAGgOACQgOACgKgDQgLgCgBgGQAAgFAJgGQAJgFAPgDQANgCALADQALADAAAGg");
	this.shape_785.setTransform(155.4,417.2);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_786.setTransform(130.9,436.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#292929").ss(0.3).p("AgFASQAFgFACgHQAFgMgMgL");
	this.shape_787.setTransform(125.6,437.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#292929").ss(0.3).p("AgEATQAEgFACgHQAFgOgLgL");
	this.shape_788.setTransform(128.5,437.6);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#292929").ss(0.3).p("AgfgkIASBKIAsgFIgVhK");
	this.shape_789.setTransform(96.8,434.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#292929").ss(0.3).p("ABtgXIAQABQAQAEAAAIQAAASgpAOQgqANg6AAQg6AAgpgNQgpgOAAgSIAIgLQANgLAbgC");
	this.shape_790.setTransform(91.9,426.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#292929").ss(0.3).p("ABOgNQgUAMgeAHQg6AQgvgT");
	this.shape_791.setTransform(95.1,418.4);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#292929").ss(0.3).p("AAAg0IAABp");
	this.shape_792.setTransform(87.4,422.1);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#292929").ss(0.3).p("ABkhBIAABeQhrA7hdgwIAAhl");
	this.shape_793.setTransform(92.8,421.8);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#292929").ss(0.3).p("ACQBnIiUjxIiJDzQCgBOB9hQg");
	this.shape_794.setTransform(92.2,403);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_795.setTransform(81.3,416.6);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#292929").ss(0.3).p("AgTgGIAnAN");
	this.shape_796.setTransform(109.9,476.4);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#292929").ss(0.3).p("AgQgEIAhAK");
	this.shape_797.setTransform(111.7,489.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#292929").ss(0.3).p("AgPgFIAeAL");
	this.shape_798.setTransform(112.1,465.5);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#292929").ss(0.3).p("ACOgaQAAAYgqANQglAMg/AAQg7AAgpgOQgsgNAEgW");
	this.shape_799.setTransform(91.8,428.5);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_800.setTransform(101.8,431.8);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#292929").ss(0.3).p("AALgbIAAAuIgOADIgHgHIAAgj");
	this.shape_801.setTransform(102,431.8);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_802.setTransform(82.9,431.8);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#292929").ss(0.3).p("AgKgZIAAAqIAOAEIAHgHIAAgi");
	this.shape_803.setTransform(82.7,432);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#292929").ss(0.3).p("AA5AUIg9gSIgzgV");
	this.shape_804.setTransform(115.5,500);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_805.setTransform(155.2,493.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#292929").ss(0.3).p("AgWgbIAogQIACBJIgoAR");
	this.shape_806.setTransform(155.9,493.1);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#292929").ss(0.3).p("AAOgFIgbAK");
	this.shape_807.setTransform(154.8,482.5);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAQ");
	this.shape_808.setTransform(155.6,482.4);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_809.setTransform(154.8,471.8);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAR");
	this.shape_810.setTransform(155.6,471.7);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#292929").ss(0.3).p("AAOgFIgbAK");
	this.shape_811.setTransform(154.8,461.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#292929").ss(0.3).p("AgVgbIAmgQIACBJIgoAQ");
	this.shape_812.setTransform(155.6,461.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#292929").ss(0.3).p("AAOgEIgbAJ");
	this.shape_813.setTransform(154.8,450.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#292929").ss(0.3).p("AgVgbIAngPIACBJIgqAP");
	this.shape_814.setTransform(155.6,450.3);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#292929").ss(0.3).p("AAAgdIAAA7");
	this.shape_815.setTransform(108,484.2);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhN");
	this.shape_816.setTransform(110.1,485.7);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_817.setTransform(109,487.1);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_818.setTransform(109,486.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_819.setTransform(109,485.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_820.setTransform(109,484.2);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_821.setTransform(109,483.3);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_822.setTransform(109,482.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_823.setTransform(109,481.7);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#292929").ss(0.3).p("AgDgnIAABHIAKAD");
	this.shape_824.setTransform(112.3,474.6);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#292929").ss(0.3).p("AAAAkIAAhH");
	this.shape_825.setTransform(114.1,474.2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#292929").ss(0.3).p("AgIgCIARAF");
	this.shape_826.setTransform(112.9,477.5);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_827.setTransform(113,476.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_828.setTransform(113,476.2);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_829.setTransform(113,475.5);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_830.setTransform(113,474.9);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_831.setTransform(113,473.7);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_832.setTransform(113,472.8);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_833.setTransform(113,471.9);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#292929").ss(0.3).p("AgJgDIAUAH");
	this.shape_834.setTransform(113,471.1);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#292929").ss(0.3).p("AAHhSQAAgXgHgIQgDgDgGgBQgHAAgGAFQgFAGAAAIIAADOIAVAHIAAjVQAAgIAFgGQABAAAAgBQAEgEAHAAQATABgCAq");
	this.shape_835.setTransform(111.1,453.6);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_836.setTransform(109.4,464.1);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_837.setTransform(109.4,463.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_838.setTransform(109.4,462.7);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_839.setTransform(109.4,462);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_840.setTransform(109.4,460.6);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_841.setTransform(109.4,459.9);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_842.setTransform(109.4,459.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_843.setTransform(109.4,458.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_844.setTransform(109.4,457.7);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_845.setTransform(109.4,456.9);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_846.setTransform(109.4,456.2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_847.setTransform(109.4,455.3);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_848.setTransform(109.4,453.8);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_849.setTransform(109.4,453.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_850.setTransform(109.4,452.5);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_851.setTransform(109.4,451.7);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_852.setTransform(109.4,451);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_853.setTransform(109.4,450.3);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_854.setTransform(109.4,449.5);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_855.setTransform(109.4,448.8);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_856.setTransform(109.4,448.1);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_857.setTransform(109.4,446.6);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_858.setTransform(109.4,445.8);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#292929").ss(0.3).p("AgKgDIAVAH");
	this.shape_859.setTransform(109.4,445.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#292929").ss(0.3).p("AiDASIClhDQAxgXAhAZQANAJAAAQIAAAYQAAAFgIAEQgIAEgLAAQgHABgCgEQgCgCAAgHIAAgNQAAgFgGgEQgFgFgGABQgVAFgjARIiVA/");
	this.shape_860.setTransform(116.1,417.1);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#292929").ss(0.3).p("AAUgaQAOACAKAIQALAHAAAIQAAALgQAIQgQAJgXAAQgWAAgQgJQgQgIAAgLQAAgHAJgGQAIgHARgC");
	this.shape_861.setTransform(127,417.8);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#292929").ss(0.3).p("AAYgZIAJAdQgaAhgngZIALgf");
	this.shape_862.setTransform(128.4,441.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#292929").ss(0.3).p("AAsgFQACAOgMAMQgMAMgSACQgSACgOgJQgOgIgCgPQgCgNAMgMQAMgMATgCQARgCAOAIQAPAJABAOg");
	this.shape_863.setTransform(128.1,436);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#292929").ss(0.3).p("AAigEQABAFgJAGQgKAGgOACQgOACgKgDQgLgDgBgGQAAgFAJgFQAJgGAPgCQANgCALADQALACAAAGg");
	this.shape_864.setTransform(127.9,434.2);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#292929").ss(0.3).p("AGCCFIgWhdIpWinIiaA7");
	this.shape_865.setTransform(142.7,415.3);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#292929").ss(0.3).p("AArgRIhVAj");
	this.shape_866.setTransform(73.8,429);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#292929").ss(0.3).p("ApEALIJ0DXIAkgXIB4ANIBbgqIgEhaIBag4IBkAaIBgg5IgPhAIo9ieIiUA+");
	this.shape_867.setTransform(121.1,427.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#292929").ss(0.3).p("ACWgfIjFBVIhOABIEThu");
	this.shape_868.setTransform(67.8,423.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#292929").ss(0.3).p("AjehUIG9Cq");
	this.shape_869.setTransform(79.7,456.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#292929").ss(0.3).p("AjehYIG9Cx");
	this.shape_870.setTransform(79.6,466.3);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_871.setTransform(122.5,499.8);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_872.setTransform(122.5,499.7,1,1,0,0,0,0,0.1);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_873.setTransform(122.5,488.9);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_874.setTransform(122.5,488.8,1,1,0,0,0,0,0.1);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_875.setTransform(122.5,478);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_876.setTransform(122.5,477.9,1,1,0,0,0,0,0.1);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_877.setTransform(122.5,467.1);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_878.setTransform(122.5,467,1,1,0,0,0,0,0.1);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#292929").ss(0.3).p("AgMmKIAZMV");
	this.shape_879.setTransform(170.9,474.6);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#292929").ss(0.3).p("AiSj3IgFhfIBKgtIBeAbIB1hBIASMJIhtBNIhZgr");
	this.shape_880.setTransform(167.9,471.2);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#292929").ss(0.3).p("AAIFoIgPrQ");
	this.shape_881.setTransform(160.7,468.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_882.setTransform(166.7,505.9);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_883.setTransform(166.3,505.7);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_884.setTransform(166.4,495.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChG");
	this.shape_885.setTransform(166.1,495.2);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_886.setTransform(165.7,482.8);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKg");
	this.shape_887.setTransform(165.8,482.7);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_888.setTransform(166.3,472.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_889.setTransform(165.9,471.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_890.setTransform(165.3,459);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_891.setTransform(164.9,458.8);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#292929").ss(0.3).p("AgKAAIAVAA");
	this.shape_892.setTransform(164.9,446.6);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("#292929").ss(0.3).p("AANghIgcgHIAEBGIAbAKIgChH");
	this.shape_893.setTransform(164.5,446.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_894.setTransform(176.9,505.1);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_895.setTransform(177.3,504.8);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_896.setTransform(176.6,494.6);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_897.setTransform(176.7,494.2);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_898.setTransform(176.6,481.7);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_899.setTransform(176.3,481.6);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_900.setTransform(174.9,470.9);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_901.setTransform(175.3,470.7);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_902.setTransform(175.3,457.7);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_903.setTransform(175.7,457.3);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_904.setTransform(174.9,445.1);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_905.setTransform(175.3,444.9);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_906.setTransform(149.2,523.7);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_907.setTransform(149.6,523.5);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_908.setTransform(148.9,513.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_909.setTransform(149,512.9);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_910.setTransform(148.9,500.3);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_911.setTransform(148.5,500.3);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_912.setTransform(147.2,489.6);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_913.setTransform(147.6,489.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_914.setTransform(147.6,476.3);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("#292929").ss(0.3).p("AgTgbIAogUIAABGIgnAYIgChH");
	this.shape_915.setTransform(148,476);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#292929").ss(0.3).p("AAQgGIgfAN");
	this.shape_916.setTransform(147.2,463.8);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#292929").ss(0.3).p("AgTgaIAogVIAABHIgnAYIgChH");
	this.shape_917.setTransform(147.6,463.4);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_918.setTransform(136.3,504.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAGIAABSIgpgIg");
	this.shape_919.setTransform(136.2,504);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_920.setTransform(136.3,491.6);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAFIAABTIgpgJg");
	this.shape_921.setTransform(136.2,491.3);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_922.setTransform(136.3,478.8);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#292929").ss(0.3).p("AgWgrIAtAFIAABTIgtgFg");
	this.shape_923.setTransform(136.2,478.5);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#292929").ss(0.3).p("AgSgCIAlAF");
	this.shape_924.setTransform(136.3,466.1);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#292929").ss(0.3).p("AgWgsIAtAFIAABTIgpgJg");
	this.shape_925.setTransform(136.2,465.8);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#292929").ss(0.3).p("AAVgEIgpAJ");
	this.shape_926.setTransform(105.7,484.9);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_927.setTransform(110.1,491.8);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_928.setTransform(110.9,492.1);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_929.setTransform(111.7,492.2);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_930.setTransform(112.6,492.5);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_931.setTransform(113.4,492.4);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_932.setTransform(114.2,492);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_933.setTransform(114.9,491.6);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_934.setTransform(115.7,491.3);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_935.setTransform(116.5,491);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_936.setTransform(117.2,490.7);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("#292929").ss(0.3).p("AAmgkIAAAuIgvAWIgfgM");
	this.shape_937.setTransform(114,491.7);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#292929").ss(0.3).p("Ag4geIBlAkIg2AYIgZgJ");
	this.shape_938.setTransform(113.3,487.4);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("#292929").ss(0.3).p("AAAgCIAAAG");
	this.shape_939.setTransform(103,474.6);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#292929").ss(0.3).p("AAAgEIAAAJ");
	this.shape_940.setTransform(103.6,474.6);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("#292929").ss(0.3).p("AAAgGIAAAN");
	this.shape_941.setTransform(104.1,474.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_942.setTransform(104.7,474.6);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("#292929").ss(0.3).p("AAAgKIAAAW");
	this.shape_943.setTransform(105.3,474.6);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#292929").ss(0.3).p("AAAgNIAAAb");
	this.shape_944.setTransform(105.9,474.5);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("#292929").ss(0.3).p("AAAgQIAAAg");
	this.shape_945.setTransform(106.5,474.5);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_946.setTransform(107.1,474.3);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_947.setTransform(103,477);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_948.setTransform(103.8,477.3);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_949.setTransform(104.6,477.7);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_950.setTransform(105.4,478);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("#292929").ss(0.3).p("AgHAoIAAgqIAPgEIAAgi");
	this.shape_951.setTransform(107,476.4);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_952.setTransform(107,478.6);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_953.setTransform(107.8,478.9);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAo");
	this.shape_954.setTransform(108.6,479.2);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_955.setTransform(109.4,479.5);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_956.setTransform(110.1,479.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_957.setTransform(110.9,480.2);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_958.setTransform(111.7,480.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_959.setTransform(112.6,480.6);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_960.setTransform(113.4,480.5);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_961.setTransform(114.2,480.1);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_962.setTransform(114.9,479.7);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_963.setTransform(115.7,479.4);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_964.setTransform(116.5,479.1);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_965.setTransform(117.2,478.8);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#292929").ss(0.3).p("ABOgdIAAAuIgwAXIhrgrIgBgp");
	this.shape_966.setTransform(110,479.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("#292929").ss(0.3).p("AgNgaIgJgDIg4AVIBlAmIA4gYIhHgY");
	this.shape_967.setTransform(110,475.5);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#292929").ss(0.3).p("AAAgCIAAAG");
	this.shape_968.setTransform(103,462.7);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("#292929").ss(0.3).p("AAAgEIAAAJ");
	this.shape_969.setTransform(103.6,462.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#292929").ss(0.3).p("AAAgGIAAAN");
	this.shape_970.setTransform(104.1,462.7);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAR");
	this.shape_971.setTransform(104.7,462.7);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#292929").ss(0.3).p("AAAgKIAAAW");
	this.shape_972.setTransform(105.3,462.7);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("#292929").ss(0.3).p("AAAgNIAAAb");
	this.shape_973.setTransform(105.9,462.6);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_974.setTransform(106.5,462.6);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAg");
	this.shape_975.setTransform(107.1,462.4);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAq");
	this.shape_976.setTransform(103,465.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_977.setTransform(103.8,465.4);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_978.setTransform(104.6,465.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_979.setTransform(105.4,466.1);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#292929").ss(0.3).p("AgHAoIAAgqIAPgDIAAgj");
	this.shape_980.setTransform(107,464.5);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_981.setTransform(107,466.7);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_982.setTransform(107.8,467);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAo");
	this.shape_983.setTransform(108.6,467.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_984.setTransform(109.4,467.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_985.setTransform(110.1,467.9);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_986.setTransform(110.9,468.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f().s("#292929").ss(0.3).p("AAAgVIAAAr");
	this.shape_987.setTransform(111.7,468.4);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_988.setTransform(112.6,468.7);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f().s("#292929").ss(0.3).p("AAAgYIAAAx");
	this.shape_989.setTransform(113.4,468.6);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_990.setTransform(114.2,468.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_991.setTransform(114.9,467.8);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_992.setTransform(115.7,467.5);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_993.setTransform(116.5,467.2);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_994.setTransform(117.2,466.8);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().s("#292929").ss(0.3).p("ABOgdIAAAuIgwAXIhrgrIgBgp");
	this.shape_995.setTransform(110,467.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#292929").ss(0.3).p("AgWgdIg4AVIBlAmIA4gYg");
	this.shape_996.setTransform(110,463.6);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#292929").ss(0.3).p("AAAicIAAE5");
	this.shape_997.setTransform(96.6,466.4);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#292929").ss(0.3).p("AAAieIAAE9");
	this.shape_998.setTransform(94.8,465.5);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("#292929").ss(0.3).p("AAAiHIAAEP");
	this.shape_999.setTransform(82,459.2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#292929").ss(0.3).p("AAAiJIAAET");
	this.shape_1000.setTransform(80.2,458.3);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#292929").ss(0.3).p("AAAiWIAAEt");
	this.shape_1001.setTransform(71,456.4);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#292929").ss(0.3).p("AAAiUIAAEp");
	this.shape_1002.setTransform(69.1,455.7);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("#292929").ss(0.3).p("Ag6gBIB1AD");
	this.shape_1003.setTransform(136.2,451.3);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#292929").ss(0.3).p("AgSgHIAjgVIAABC");
	this.shape_1004.setTransform(128.6,454);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("#292929").ss(0.3).p("AAAjDIAAGH");
	this.shape_1005.setTransform(126.7,480);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#292929").ss(0.3).p("AAAi3IAAFw");
	this.shape_1006.setTransform(130.4,476.3);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f().s("#292929").ss(0.3).p("ADiCfIAAhHIrKj1IAGBGILED3IAAgBIAmgZIB2AIIBugz");
	this.shape_1007.setTransform(104.1,444.4);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#292929").ss(0.3).p("AA6FyIgFsjIhuAzIAdM4");
	this.shape_1008.setTransform(147.9,489.8);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f().s("#292929").ss(0.3).p("AhpBEIAIAHIBuAAIBchQIAAhAIhiBSIhiAAIgOgH");
	this.shape_1009.setTransform(144.2,532.7);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1010.setTransform(63.7,465.9);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("#292929").ss(0.3).p("AATApIAAg7IglgPIAAA5");
	this.shape_1011.setTransform(63.7,465);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1012.setTransform(63.7,455);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1013.setTransform(63.7,454.9,1,1,0,0,0,0,0.1);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1014.setTransform(63.7,444.1);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1015.setTransform(63.7,444,1,1,0,0,0,0,0.1);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1016.setTransform(75,470.4);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().s("#292929").ss(0.3).p("AATAmIAAg0IglgPIAAA9");
	this.shape_1017.setTransform(75.1,469.1);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1018.setTransform(75,459.5);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1019.setTransform(75.1,459.4,1,1,0,0,0,0,0.1);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1020.setTransform(75,448.6);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1021.setTransform(75.1,448.5,1,1,0,0,0,0,0.1);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#292929").ss(0.3).p("AATAZIAAgbIglgPIAAAf");
	this.shape_1022.setTransform(87.9,473);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1023.setTransform(87.9,464.6);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_1024.setTransform(87.9,464.5,1,1,0,0,0,0,0.1);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1025.setTransform(87.9,453.7);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhEg");
	this.shape_1026.setTransform(87.9,453.6,1,1,0,0,0,0,0.1);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1027.setTransform(101.5,481);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1028.setTransform(101.6,480.9,1,1,0,0,0,0,0.1);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1029.setTransform(101.5,470.1);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1030.setTransform(101.6,470,1,1,0,0,0,0,0.1);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAJ");
	this.shape_1031.setTransform(101.5,459.2);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#292929").ss(0.3).p("AgSgpIAABFIAlAOIAAhDg");
	this.shape_1032.setTransform(101.6,459.1,1,1,0,0,0,0,0.1);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#292929").ss(0.3).p("AAAiPIAAEf");
	this.shape_1033.setTransform(57.3,450.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(-1,-1.1,390.5,542.4), null);


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


(lib.Path_121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_121, null, null);


(lib.WholeCity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// First Ave
	this.instance = new lib.right();
	this.instance.parent = this;
	this.instance.setTransform(676,277.4,1,1,0,0,0,194.7,269.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(0.3).p("AgGgSIAMgCIgGAKIAJANIgNgGIgLAOIACgP");
	this.shape.setTransform(488.9,646.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgNgHIgLAQIACgQIgNgDIAMgFIAEgRIAFANIAMgEg");
	this.shape_1.setTransform(492.5,642.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_2.setTransform(497.1,639.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_3.setTransform(501.7,636.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(0.3).p("AAKAAIAIAMIgNgHIgLAPIACgPIgMgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_4.setTransform(506.2,633.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_5.setTransform(510.9,630.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(0.3).p("AAIAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIAMgEg");
	this.shape_6.setTransform(515.5,626.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(0.3).p("AgUAFIAGgDIAEgQIAGANIALgEIgHAKIAJANIgMgHIgIAK");
	this.shape_7.setTransform(489.2,639.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_8.setTransform(492.9,637);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_9.setTransform(497.5,633.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_10.setTransform(502,630.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAFgRIAEANIAMgEg");
	this.shape_11.setTransform(506.6,627.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(0.3).p("AAIgBIAJAMIgNgHIgLAQIACgQIgNgDIAMgFIAEgRIAFANIAMgEg");
	this.shape_12.setTransform(511.3,624.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIALgEg");
	this.shape_13.setTransform(515.8,621.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_14.setTransform(482.6,661.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_15.setTransform(482.2,655);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_16.setTransform(481.2,632.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAFgRIAEANIAMgEg");
	this.shape_17.setTransform(480.8,625.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEAOIAMgEg");
	this.shape_18.setTransform(488.6,634.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_19.setTransform(493.2,631.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIALgEg");
	this.shape_20.setTransform(497.8,628);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_21.setTransform(502.4,624.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEAOIAMgEg");
	this.shape_22.setTransform(507,621.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIALgEg");
	this.shape_23.setTransform(511.5,618.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_24.setTransform(516.1,615.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAEgRIAFANIAMgEg");
	this.shape_25.setTransform(481.2,619.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_26.setTransform(489,628.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIALgEg");
	this.shape_27.setTransform(493.5,625.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_28.setTransform(498.1,622.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAEgRIAFANIAMgEg");
	this.shape_29.setTransform(502.7,619);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgNgHIgLAQIACgQIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_30.setTransform(507.3,615.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_31.setTransform(511.9,612.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(0.3).p("AAIAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAEgRIAFANIAMgEg");
	this.shape_32.setTransform(516.5,609.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_33.setTransform(481.5,614);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgNgHIgLAQIACgQIgNgDIAMgFIAEgRIAFANIAMgEg");
	this.shape_34.setTransform(489.3,622.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_35.setTransform(493.9,619.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_36.setTransform(498.5,616.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(0.3).p("AAKAAIAIAMIgNgHIgLAPIACgPIgMgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_37.setTransform(503,613.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_38.setTransform(507.6,610.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(0.3).p("AAIAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIAMgEg");
	this.shape_39.setTransform(512.3,606.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_40.setTransform(516.8,603.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_41.setTransform(481.9,608.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAFANIALgEg");
	this.shape_42.setTransform(488.8,617.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgOgHIgKAPIACgPIgNgEIAMgEIAEgRIAEANIAMgEg");
	this.shape_43.setTransform(493.4,613.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(0.3).p("AAKAAIAIAMIgNgHIgLAPIACgPIgMgDIAMgFIAEgRIAEANIAMgEg");
	this.shape_44.setTransform(498.7,610.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(0.3).p("AAJgBIAJAMIgOgHIgKAQIACgQIgNgDIAMgFIAEgRIAEAOIAMgEg");
	this.shape_45.setTransform(503.4,607.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(0.3).p("AAIAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIAMgEg");
	this.shape_46.setTransform(508,604.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgEIAMgEIAEgRIAFANIALgEg");
	this.shape_47.setTransform(512.5,601.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(0.3).p("AAJAAIAJAMIgNgHIgLAPIACgPIgNgDIAMgFIAFgRIAEANIAMgEg");
	this.shape_48.setTransform(517.1,597.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(0.3).p("AAAgqIAABV");
	this.shape_49.setTransform(379,596.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(0.3).p("AAAgqIAABV");
	this.shape_50.setTransform(383.2,593.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(0.3).p("AgwhaIA3AlIAqghIg2ghgAgxB+IAAjZIABAB");
	this.shape_51.setTransform(378.3,597.2,1,1,0,0,0,0.1,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.3).p("AhFACIAtAgIBdhF");
	this.shape_52.setTransform(527.1,620.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(0.3).p("AAAA6IAAhz");
	this.shape_53.setTransform(408.2,666.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(0.3).p("AAAhAIAACC");
	this.shape_54.setTransform(460.1,667.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(0.3).p("AGLgzQgwA0heAeQhbAchyAAQj7AAjBh1");
	this.shape_55.setTransform(432.7,671.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(0.3).p("AAmgYIhMAx");
	this.shape_56.setTransform(388.8,604.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(0.3).p("AAlCQIAAjlIhLg2");
	this.shape_57.setTransform(381.3,615.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(0.3).p("AhLC2IAAkyIBIgyIBPA2IAACc");
	this.shape_58.setTransform(385,614.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(0.3).p("AglgYIBLAx");
	this.shape_59.setTransform(473.7,604.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(0.3).p("AgkCrIAAkcIBLg1");
	this.shape_60.setTransform(481.2,618.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(0.3).p("ABNDQIAAluIhKgrIhPAvIAAC6");
	this.shape_61.setTransform(477.5,617.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(0.3).p("AAhhQIAAByIhDAr");
	this.shape_62.setTransform(389.7,662);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(0.3).p("Agdg+IAABdIA+Ab");
	this.shape_63.setTransform(475.2,662.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(0.3).p("AgtiOIAADIIBbBKIAAjG");
	this.shape_64.setTransform(381.6,656.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(0.3).p("AAkhqIAACOIhHA8IAAiV");
	this.shape_65.setTransform(482.1,659.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(0.3).p("AHKhxIAhAJQAlAMAYAQQASAMAEAVQADAWgNARQgvA8h8AyQiHA3icAKQi1AMigg0Qi7g+iHiOQgRgRAHgYQAGgYAXgHIBagb");
	this.shape_66.setTransform(430.9,646.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(0.3).p("AHHg4QgaA3hmAoQhpAriFAHQiUAIiHgoQiaguhrhm");
	this.shape_67.setTransform(431.4,626.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(0.3).p("AlXixIMfAgIAACuQhLBSh+AnQh4AmiIgIQiKgIh2gzQh9g1hJhXIAAihIBsAF");
	this.shape_68.setTransform(431.4,635.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(0.3).p("AEggMIgQAsIosgXIAVgs");
	this.shape_69.setTransform(431.3,613.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(0.3).p("AE1gQIgQA8IpXgcIAeg+");
	this.shape_70.setTransform(430.8,614.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(0.3).p("AgKAJIAVgR");
	this.shape_71.setTransform(464.2,564.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(0.3).p("AlhjtIAlgXIKcAmIAAHGIgYAf");
	this.shape_72.setTransform(430.3,585.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(0.3).p("ADTD1ICCAGIAAnRIqpgkIACHXIByAF");
	this.shape_73.setTransform(429,587.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(0.3).p("Ag0gBIBqAD");
	this.shape_74.setTransform(414.8,610.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(0.3).p("Ag0gBIBpAD");
	this.shape_75.setTransform(428.3,610.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(0.3).p("Ag1gBIBrAD");
	this.shape_76.setTransform(441.8,611.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(0.3).p("AASgcQgCAYgGAKQgJAQgWAC");
	this.shape_77.setTransform(411.5,605.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(0.3).p("AgtgSIBaALQAAAcgtgCQgugCABgjg");
	this.shape_78.setTransform(408.8,603.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(0.3).p("AgMgoIgBBLIAbABIAAhM");
	this.shape_79.setTransform(408,610.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(0.3).p("AgMgfQgBAaAEAKQAGARAVAF");
	this.shape_80.setTransform(418.6,606.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(0.3).p("AAQgfQABAXgGANQgJARgVAF");
	this.shape_81.setTransform(425,606.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(0.3).p("AgtgPIBbAAQABAOgQAJQgQAJgTgBQgRgBgKgHQgMgIgCgPg");
	this.shape_82.setTransform(422,604.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(0.3).p("AgMgoIgBBLIAbACIAAhO");
	this.shape_83.setTransform(421.6,611.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(0.3).p("AgKgfQgDAZAEAKQAFASAUAG");
	this.shape_84.setTransform(432.2,606.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(0.3).p("AASgdQgBAXgHAMQgKAQgVAE");
	this.shape_85.setTransform(438.6,607.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(0.3).p("AgtgRIBbAHQABAcguAAQgtAAgBgjg");
	this.shape_86.setTransform(435.8,605.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(0.3).p("AgMgoIgBBLIAbABIAAhN");
	this.shape_87.setTransform(435.2,612);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(0.3).p("AgMgeQgBAZAEAKQAGARAVAF");
	this.shape_88.setTransform(445.8,607.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(0.3).p("AAQgfQABAYgHAMQgIARgVAF");
	this.shape_89.setTransform(452.2,607.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(0.3).p("AgtgPIBbAAQADAbguAEQgtADgDgig");
	this.shape_90.setTransform(449.2,605.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(0.3).p("AgMgoIgBBLIAbACIAAhO");
	this.shape_91.setTransform(448.7,612.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(0.3).p("AgJggQgEAZADALQAFARAUAI");
	this.shape_92.setTransform(405.1,605.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(0.3).p("AAAjYIAAGy");
	this.shape_93.setTransform(520,613.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(0.3).p("ACsh3IlXDv");
	this.shape_94.setTransform(502.9,647);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(0.3).p("AjFinIGLFP");
	this.shape_95.setTransform(357.7,596.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(0.3).p("AoJJpImGljIAAmaIPBnSINbJIIlgDn");
	this.shape_96.setTransform(429.2,594.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(0.3).p("AirB3IFXjt");
	this.shape_97.setTransform(502.7,641.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_98.setTransform(373,646.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_99.setTransform(368.4,642.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgNgGIgDgTIgFAOIgMgFg");
	this.shape_100.setTransform(363.9,639.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_101.setTransform(359.3,635.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgNgGIgDgTIgFAPIgMgGg");
	this.shape_102.setTransform(354.8,631.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_103.setTransform(350.3,627.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgCIgMgGIgDgUIgGAPIgMgFg");
	this.shape_104.setTransform(345.8,624);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgCgRIAOgDIgMgFIgDgUIgGAPIgMgGg");
	this.shape_105.setTransform(341.2,620.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgCgRIAOgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_106.setTransform(372.9,640.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgGIgEgTIgFAPIgMgGg");
	this.shape_107.setTransform(368.4,636.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgBgRIANgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_108.setTransform(363.9,632.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(0.3).p("AgGAAIgLAMIAPgGIAKARIgBgRIANgDIgMgGIgDgTIgFAOIgMgFg");
	this.shape_109.setTransform(359.3,628.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALASIgBgRIANgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_110.setTransform(354.8,625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(0.3).p("AgGgBIgLANIAPgHIAKARIgBgRIANgDIgMgGIgDgTIgFAOIgMgFg");
	this.shape_111.setTransform(350.3,621.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgNgGIgDgTIgFAOIgMgFg");
	this.shape_112.setTransform(345.8,617.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgFIgEgUIgFAPIgMgFg");
	this.shape_113.setTransform(341.3,613.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgBgRIANgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_114.setTransform(380.8,661.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_115.setTransform(380.9,654.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(0.3).p("AgGgBIgLANIAPgHIAKARIgBgRIANgDIgMgGIgDgTIgFAPIgMgGg");
	this.shape_116.setTransform(380.9,648.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_117.setTransform(381.1,627.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgCgRIAOgCIgMgGIgDgUIgGAPIgMgFg");
	this.shape_118.setTransform(381,621.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_119.setTransform(381.1,614.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgGIgEgTIgFAOIgMgFg");
	this.shape_120.setTransform(381.1,608.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgCIgMgGIgDgUIgGAPIgMgFg");
	this.shape_121.setTransform(373,633.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_122.setTransform(368.5,629.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_123.setTransform(363.9,626.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgNgGIgDgTIgFAOIgMgFg");
	this.shape_124.setTransform(359.4,622.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_125.setTransform(354.9,618.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgNgGIgDgTIgFAPIgMgGg");
	this.shape_126.setTransform(350.4,614.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIALASIgCgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_127.setTransform(345.8,611.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgFIgEgUIgFAPIgMgFg");
	this.shape_128.setTransform(341.3,607.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALASIgBgRIANgDIgMgGIgDgUIgGAPIgMgFg");
	this.shape_129.setTransform(375.9,607.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIALASIgCgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_130.setTransform(375.9,600.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgGIgEgTIgFAOIgMgFg");
	this.shape_131.setTransform(376,594.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgEgUIgFAPIgMgFg");
	this.shape_132.setTransform(373,627.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALASIgBgRIANgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_133.setTransform(368.5,623.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(0.3).p("AgGgBIgLANIAPgHIAKARIgBgRIANgDIgMgGIgDgTIgFAPIgMgGg");
	this.shape_134.setTransform(363.9,619.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAPgHIAKASIgBgRIANgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_135.setTransform(359.4,616);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(0.3).p("AgHAAIgKAMIAOgGIAKARIgBgRIAOgDIgMgGIgEgTIgFAOIgMgFg");
	this.shape_136.setTransform(354.9,612.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgGg");
	this.shape_137.setTransform(350.5,608.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_138.setTransform(345.9,604.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgNgGIgDgTIgFAOIgMgFg");
	this.shape_139.setTransform(341.4,600.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgNgGIgDgTIgFAOIgMgFg");
	this.shape_140.setTransform(373.1,620.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgCIgMgGIgDgUIgGAPIgMgFg");
	this.shape_141.setTransform(368.5,617);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgGg");
	this.shape_142.setTransform(364.1,613.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIALASIgCgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_143.setTransform(359.5,609.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgGIgEgTIgFAOIgMgFg");
	this.shape_144.setTransform(355,605.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgCgRIAOgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_145.setTransform(350.4,602);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgEgTIgFAOIgMgFg");
	this.shape_146.setTransform(345.9,598.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIALASIgCgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_147.setTransform(341.4,594.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIALARIgBgRIANgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_148.setTransform(373.1,614.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgEgUIgFAPIgMgFg");
	this.shape_149.setTransform(368.6,610.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_150.setTransform(364.1,606.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgGIgEgTIgFAPIgMgGg");
	this.shape_151.setTransform(359.5,603.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgNgGIgDgTIgFAOIgMgFg");
	this.shape_152.setTransform(355,599.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(0.3).p("AgHgBIgKANIAOgHIAKARIgBgRIAOgDIgMgFIgDgUIgGAPIgMgFg");
	this.shape_153.setTransform(350.5,595.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(0.3).p("AgIgBIgKANIAPgHIAKARIgBgRIANgDIgMgFIgDgUIgGAPIgMgGg");
	this.shape_154.setTransform(346,591.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(0.3).p("AgHgCIgKANIAOgHIAKASIgBgRIAOgDIgMgGIgDgTIgGAOIgMgFg");
	this.shape_155.setTransform(341.4,588.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(0.3).p("AA9CSIgbAAQgggCg/gEIg4gFQgGgBAAgGIAIhOQAAgCgEgGIgFgGQgEgFAHgGQAGgEAAgHIgDgZQgBgYABgMQAAgRgDgSQgBgFAAgYIAAgWIA9AFQAEAAACgDQAAgEABgDQAAgEAAgBQABgCADABQAGABABAEQACAKAAAJQABAFAHAEQACAAAJACQAHACADAFQABABADgBQAEAAACgBQADgDAJACQAJABADADIAKAOQADgEACAAQACAAAFAEQAHAHAHADQADACAHgEQADAAAFgEQABAAACAAQABAAAAAAQADAFAFAAQADABAGAAQAJAAAEAEQACABAHAAQACAAACACQgNAHgEABQgXAGgSAUQgCACgTAPQgKAJgBABQgFAHACAHIAAAHQAAAJgIADQgFABgDAEQgCADgDAFQgBADADACQAGAGgDAGQgCADgBANIAAAFQgBAJALAHQADADAIAEQAGAEACAGQADAFAJAFQAJAHAAAJg");
	this.shape_156.setTransform(433.6,583.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(0.3).p("AA9CSIAAgLQAAgJgJgHQgJgFgDgFQgCgGgGgEQgIgEgDgDQgLgHABgJIAAgFQABgNACgDQADgGgGgGQgDgCABgDQADgFACgDQADgEAFgBQAIgDAAgJIAAgHQgCgHAFgHQABgBAKgJQATgPACgCQASgUAXgGQAEgBANgHQgCgCgCAAQgHAAgCgBQgEgEgJAAQgGAAgDgBQgFAAgDgFQAAAAgBAAQgCAAgBAAQgFAEgDAAQgHAEgDgCQgHgDgHgHQgFgEgCAAQgCAAgDAEIgKgOQgDgDgJgBQgJgCgDADQgCABgEAAQgDABgBgBQgDgFgHgCQgJgCgCAAQgHgEgBgFQAAgJgCgKQgBgEgGgBQgDgBgBACQAAABAAAEQgBADAAAEQgCADgEAAIg9gFIAAAWQAAAYABAFQADASAAARQgBAMABAYIADAZQAAAHgGAEQgHAGAEAFIAFAGQAEAGAAACIgIBOQAAAGAGABIA4AFQA/AEAgACg");
	this.shape_157.setTransform(433.6,583.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(0.3).p("AAABBIAAiC");
	this.shape_158.setTransform(454.3,668.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(0.3).p("AAAg6IAAB1");
	this.shape_159.setTransform(413.8,667.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// RichFolk
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(0.3).p("Ag6AMIAgglIAjADIAKgQIApBFIhdAMIANgUg");
	this.shape_160.setTransform(591.9,577,1,1,0,0,0,0.2,0);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(0.3).p("AgkABIAAgcIACgQQAGgMARASQAKALAKAJQARAPAEAGQAHALAAARIAAAW");
	this.shape_161.setTransform(555.1,606.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(0.3).p("ACwhkIgCASIjPCmQgJAGgNAEQgZAIgWgLIhJgkIAAgPIAXgWIAAgQIAUgR");
	this.shape_162.setTransform(550.7,610.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(0.3).p("AiwA9IBJAjIAXADQAaAAAVgRIDNicQADgCAAgEQgCgHgWgHIgTgE");
	this.shape_163.setTransform(550.8,608.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(0.3).p("ACOhUIgCAZQiPBjggAZQgTAPgUAAIgQgDIg2gc");
	this.shape_164.setTransform(549.8,607.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(0.3).p("AiPA2IA+AhIAKABQANgBAQgNQAagUCahqQAEgGgBgHQgBgOgXgEQgOgCgDgD");
	this.shape_165.setTransform(549.8,605.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABX");
	this.shape_166.setTransform(545.5,601.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_167.setTransform(549.7,598.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(0.3).p("AAFgwIAABVIgLAI");
	this.shape_168.setTransform(555.1,595.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(0.3).p("Ag3BQIBthLIAAhY");
	this.shape_169.setTransform(549,599.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABl");
	this.shape_170.setTransform(572.4,514.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(0.3).p("AAAgyIAABl");
	this.shape_171.setTransform(574.7,513.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(0.3).p("AAAgwIAABh");
	this.shape_172.setTransform(577,512.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#292929").ss(0.3).p("AAAgvIAABf");
	this.shape_173.setTransform(579.2,511);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(0.3).p("AAAgvIAABf");
	this.shape_174.setTransform(581.5,509.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABa");
	this.shape_175.setTransform(583.8,508.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_176.setTransform(586.1,507.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_177.setTransform(588.4,505.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(0.3).p("AAAgsIAABZ");
	this.shape_178.setTransform(590.6,504.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#292929").ss(0.3).p("AAAggIAABB");
	this.shape_179.setTransform(542,587.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(0.3).p("AAAggIAABC");
	this.shape_180.setTransform(550.3,582.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_181.setTransform(558.6,576.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_182.setTransform(566.9,571);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_183.setTransform(542,578);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_184.setTransform(550.3,572.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#292929").ss(0.3).p("AAAggIAABB");
	this.shape_185.setTransform(558.6,567.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_186.setTransform(566.9,561.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_187.setTransform(542,568.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_188.setTransform(550.3,562.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_189.setTransform(558.6,557.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_190.setTransform(566.9,551.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#292929").ss(0.3).p("AAAgaIAAA1");
	this.shape_191.setTransform(542,559.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(0.3).p("AAAgZIAAA0");
	this.shape_192.setTransform(550.3,554);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#292929").ss(0.3).p("AAAgZIAAAz");
	this.shape_193.setTransform(558.6,548.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(0.3).p("AAAgaIAAA1");
	this.shape_194.setTransform(566.9,542.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#292929").ss(0.3).p("AAAgPIAAAf");
	this.shape_195.setTransform(575.3,563.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABE");
	this.shape_196.setTransform(575.3,555.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_197.setTransform(575.3,546.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(0.3).p("AAAgaIAAA1");
	this.shape_198.setTransform(575.3,537.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#292929").ss(0.3).p("AjKhYIiKA5IAAAhICLg7IFKCRIDXhs");
	this.shape_199.setTransform(558.2,501.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(0.3).p("AIlgyIlOicIiIBEIj+iUIltDCIJtF8");
	this.shape_200.setTransform(516.3,525.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#292929").ss(0.3).p("AFxkDIreHVIgBA2");
	this.shape_201.setTransform(561,533.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAq");
	this.shape_202.setTransform(596.3,544.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_203.setTransform(594.4,545.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_204.setTransform(592.4,546.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_205.setTransform(590.3,547.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_206.setTransform(587.9,549.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_207.setTransform(585.4,550.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(0.3).p("ABShHIijBiIAAApIClhh");
	this.shape_208.setTransform(591,547.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_209.setTransform(596.3,536.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_210.setTransform(594.4,537.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_211.setTransform(592.4,538.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(0.3).p("AAAgSIAAAl");
	this.shape_212.setTransform(590.3,539.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_213.setTransform(587.9,541.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAm");
	this.shape_214.setTransform(585.4,542.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#292929").ss(0.3).p("ABShHIijBiIAAApIClhh");
	this.shape_215.setTransform(591,539.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_216.setTransform(596.3,528.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_217.setTransform(594.4,529.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_218.setTransform(592.4,530.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#292929").ss(0.3).p("AAAgSIAAAl");
	this.shape_219.setTransform(590.3,531.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_220.setTransform(587.9,533.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#292929").ss(0.3).p("AAAgSIAAAm");
	this.shape_221.setTransform(585.4,534.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(0.3).p("ABShHIijBiIAAApIClhh");
	this.shape_222.setTransform(591,531.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_223.setTransform(596.3,520.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_224.setTransform(594.4,521.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_225.setTransform(592.4,522.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(0.3).p("AAAgSIAAAl");
	this.shape_226.setTransform(590.3,523.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_227.setTransform(587.9,525.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(0.3).p("AAAgSIAAAm");
	this.shape_228.setTransform(585.4,526.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#292929").ss(0.3).p("ABShHIijBiIAAApIClhh");
	this.shape_229.setTransform(591,523.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(0.3).p("ABshWIAAB6IjXCBIAAiLgAhNioIC5BS");
	this.shape_230.setTransform(582,504);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#292929").ss(0.3).p("AgihJIBBAIIAACIIgpgX");
	this.shape_231.setTransform(556.6,594);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#292929").ss(0.3).p("ABTg3IilBv");
	this.shape_232.setTransform(551.5,593);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#292929").ss(0.3).p("AgghLIA+AMIADCIIg8gkQgCgcgBgbQgEg5ACAAg");
	this.shape_233.setTransform(540.2,604.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#292929").ss(0.3).p("ABNg0IiZBq");
	this.shape_234.setTransform(567.5,589.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#292929").ss(0.3).p("AieA/ID8ivIA+AdIgWA3IjUCP");
	this.shape_235.setTransform(591.1,559.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#292929").ss(0.3).p("AiDCzIAkgVIAAiKIgkgUIENiy");
	this.shape_236.setTransform(592.8,568.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#292929").ss(0.3).p("AgWhoIAAC3IAtAbIAAizg");
	this.shape_237.setTransform(577.4,576.3,1,1,0,0,0,0,0.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#292929").ss(0.3).p("AJ3jbIBxAwIscH6Iq0myIG0jt");
	this.shape_238.setTransform(529.6,526.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#292929").ss(0.3).p("ApijEIK3GvIIMlaIAAgoIoMFaIq3mv");
	this.shape_239.setTransform(516.1,544.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#292929").ss(0.3).p("AphjJIK2GtIILlaIAAgbIoLFaIq2mu");
	this.shape_240.setTransform(516.2,553.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#292929").ss(0.3).p("AphjlIK2GuIILlaIAAAbIoLFaIq2mu");
	this.shape_241.setTransform(516.2,563.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#292929").ss(0.3).p("Aphj4IK1HVIILlaQABAagBABIoLFaIgtgg");
	this.shape_242.setTransform(516.3,570.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#292929").ss(0.3).p("AkTB8IAtAgIH4lPIAAAbIn4FPIgtgg");
	this.shape_243.setTransform(547.8,587.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#292929").ss(0.3).p("AhUAHIAtAhIB8hR");
	this.shape_244.setTransform(528.6,607.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#292929").ss(0.3).p("AhMAzICZhl");
	this.shape_245.setTransform(567.5,583.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#292929").ss(0.3).p("AAAAxIAAhh");
	this.shape_246.setTransform(522.6,505.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#292929").ss(0.3).p("AAAAxIAAhh");
	this.shape_247.setTransform(520.5,504.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#292929").ss(0.3).p("AAAAvIAAhd");
	this.shape_248.setTransform(518.5,503.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#292929").ss(0.3).p("AAAAuIAAhb");
	this.shape_249.setTransform(516.4,502.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#292929").ss(0.3).p("AAAAtIAAhZ");
	this.shape_250.setTransform(514.3,501.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#292929").ss(0.3).p("AAAAsIAAhX");
	this.shape_251.setTransform(512.3,500.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#292929").ss(0.3).p("AAAArIAAhV");
	this.shape_252.setTransform(510.2,499.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#292929").ss(0.3).p("AAAArIAAhV");
	this.shape_253.setTransform(508.2,498.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_254.setTransform(506.1,497.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhN");
	this.shape_255.setTransform(504.1,496);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhN");
	this.shape_256.setTransform(502,494.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#292929").ss(0.3).p("AAAAmIAAhL");
	this.shape_257.setTransform(500.1,493.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#292929").ss(0.3).p("AADASIgFgDIAAggIAFADg");
	this.shape_258.setTransform(561.2,491.6,1,1,0,0,0,0,-0.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#292929").ss(0.3).p("AADASIgGgDIAAggIAGADg");
	this.shape_259.setTransform(559.9,491.2,1,1,0,0,0,0,-0.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#292929").ss(0.3).p("AADASIgFgDIAAggIAFADg");
	this.shape_260.setTransform(558.6,490.8,1,1,0,0,0,0,-0.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#292929").ss(0.3).p("AAEASIgGgDIAAggIAGADg");
	this.shape_261.setTransform(557.3,490.4,1,1,0,0,0,0,-0.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_262.setTransform(540.9,483.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#292929").ss(0.3).p("Ah3AvIAXgJQgBgHADgJQAFgRATgHIBbgrIBkAl");
	this.shape_263.setTransform(538.7,489);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_264.setTransform(531.4,479.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#292929").ss(0.3).p("AhUAvIAYgKQgBgGACgJQAGgRASgHQAcgMBAgfIAcAK");
	this.shape_265.setTransform(525.7,485.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#292929").ss(0.3).p("ADIABIjShOIiOBBQgVAKgLAPQgPAVADAbIAjAPQgDgaAPgWQALgRAUgJIBjgsIA5AW");
	this.shape_266.setTransform(533.4,482.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#292929").ss(0.3).p("AAFhDIhhAsQgUAKgMAPQgPAVADAbIAjAPQgEgaAQgWQALgRAVgIIBhgsIBlAp");
	this.shape_267.setTransform(536.8,487);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#292929").ss(0.3).p("AixBQIFjif");
	this.shape_268.setTransform(515.4,477.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#292929").ss(0.3).p("AB/A2Ij9hr");
	this.shape_269.setTransform(545.8,475.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#292929").ss(0.3).p("Ag7hJIAABeIB6Ax");
	this.shape_270.setTransform(556.9,491);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#292929").ss(0.3).p("AB6gCIh5gnIhtArIB5Ap");
	this.shape_271.setTransform(561.8,483.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#292929").ss(0.3).p("AAQAmIhFAkIAAhmIBrguIAABM");
	this.shape_272.setTransform(568.6,490.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#292929").ss(0.3).p("ABOAMIhpgnIgnASIBpAm");
	this.shape_273.setTransform(574.8,493);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#292929").ss(0.3).p("AA2AmIgagNIAAgWIhPgdIAAgP");
	this.shape_274.setTransform(573.5,496.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#292929").ss(0.3).p("AgRAcIAlgWIAAgiIgmARg");
	this.shape_275.setTransform(580.7,496.9,1,1,0,0,0,0,-0.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#292929").ss(0.3).p("Ah4gWIgKgFIAAghIEIB8");
	this.shape_276.setTransform(510.7,491.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#292929").ss(0.3).p("ACoBIIlMiMIAAAf");
	this.shape_277.setTransform(554.4,499.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#292929").ss(0.3).p("Ah+gfIAAhLID9B4IAABl");
	this.shape_278.setTransform(511.4,500.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#292929").ss(0.3).p("AAQAsIgcgMIAAhP");
	this.shape_279.setTransform(602.9,563.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#292929").ss(0.3).p("AgMgiIAABvIAZgaIgEiL");
	this.shape_280.setTransform(605.8,559.8);

	this.instance_1 = new lib.Path_121();
	this.instance_1.parent = this;
	this.instance_1.setTransform(525.1,502.7);
	this.instance_1.alpha = 0.328;

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_281.setTransform(597.8,543.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_282.setTransform(597.8,535.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_283.setTransform(597.8,527.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#292929").ss(0.3).p("AAAgUIAAAp");
	this.shape_284.setTransform(597.8,519.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#292929").ss(0.3).p("AAAC4IAAlv");
	this.shape_285.setTransform(599.3,530.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABG");
	this.shape_286.setTransform(533.7,593.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_287.setTransform(533.7,583.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#292929").ss(0.3).p("AAAghIAABC");
	this.shape_288.setTransform(533.7,573.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#292929").ss(0.3).p("AggCcIAAkyIBFAA");
	this.shape_289.setTransform(458.4,531.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#292929").ss(0.3).p("AAAgaIAAA1");
	this.shape_290.setTransform(533.7,565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.instance_1},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]}).wait(1));

	// Layer 1
	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#292929").ss(0.3).p("AAdAyIg4hVIADgP");
	this.shape_291.setTransform(231.3,18.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#292929").ss(0.3).p("AAdBAIg7hdIASgKQAXgMAagK");
	this.shape_292.setTransform(231.9,16.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#292929").ss(0.3).p("ADiBdIAAgoIgYAQIgCgmIgYAPIgCghIgVARIgFghIgUAUIgFgfIgVAWIgEghIgWAZIgJghIgPAbIgMgfIgNAcIgMgdIgNAcIgLgdIgPAfIgPgbIgOAcIgRgYIgMAeIgTgVIgHAbIgWgRIgGAZIgcgLIgFALIg4hZIAEgP");
	this.shape_293.setTransform(256.6,15.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#292929").ss(0.3).p("AAjHmIAAvAIhFBFIAANx");
	this.shape_294.setTransform(235.7,66.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#292929").ss(0.3).p("ADgB6Qg7hRhVghQh7guicBEIg6hdIAvgXQA7gZA7gKQCCgUBgAxQBKAmAyBMQAEAHgDAHg");
	this.shape_295.setTransform(260.2,12.4,1,1,0,0,0,0,-0.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#292929").ss(0.3).p("ADiCjIAAhbQAAg3gfgpQg7hShVggQh7gwicBF");
	this.shape_296.setTransform(262.1,30.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#292929").ss(0.3).p("AApkxIhQBqIAAH8");
	this.shape_297.setTransform(228.1,85.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#292929").ss(0.3).p("AChKNIAAwkQhbjJjqgn");
	this.shape_298.setTransform(280.2,103.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#292929").ss(0.3).p("AgmGdIAAsBIBMhKIAANp");
	this.shape_299.setTransform(259.9,81.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#292929").ss(0.3).p("AiCiQIEAAAIAAEm");
	this.shape_300.setTransform(296.3,182.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_301.setTransform(485.1,311.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_302.setTransform(484.7,304.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#292929").ss(0.3).p("AAAgTIABAo");
	this.shape_303.setTransform(483.9,295.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_304.setTransform(483.5,287);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAo");
	this.shape_305.setTransform(483.1,278.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_306.setTransform(482.7,270.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_307.setTransform(482.1,262.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_308.setTransform(481.6,253.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAo");
	this.shape_309.setTransform(481.1,245.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_310.setTransform(480.6,236.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_311.setTransform(480.3,228.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#292929").ss(0.3).p("AAAgUIABAp");
	this.shape_312.setTransform(479.8,220.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_313.setTransform(462.3,268.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_314.setTransform(461.3,268.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_315.setTransform(460.2,268.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_316.setTransform(462.4,260.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_317.setTransform(461.3,260.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_318.setTransform(460.3,260.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_319.setTransform(462.5,252.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_320.setTransform(461.4,252.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_321.setTransform(460.3,252.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_322.setTransform(462.5,243.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_323.setTransform(461.4,243.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAu");
	this.shape_324.setTransform(460.3,243.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_325.setTransform(462.6,235.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_326.setTransform(461.5,235.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_327.setTransform(460.4,235.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_328.setTransform(462.6,226.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_329.setTransform(461.6,226.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_330.setTransform(460.5,226.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_331.setTransform(462.6,218.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_332.setTransform(461.6,218.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_333.setTransform(460.5,218.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_334.setTransform(462.6,210.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_335.setTransform(461.6,210.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_336.setTransform(460.5,210.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#292929").ss(0.3).p("AAsgWIAAAWIhXAXIABgUg");
	this.shape_337.setTransform(454,223.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_338.setTransform(454.5,271.4,1,1,0,0,0,0,-0.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_339.setTransform(456.6,270.8,1,1,0,0,0,0,-0.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_340.setTransform(450.3,264.1,1,1,0,0,0,0,-0.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_341.setTransform(452.4,263.4,1,1,0,0,0,0,-0.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgEIAAgsIgNAEg");
	this.shape_342.setTransform(454.5,262.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNADg");
	this.shape_343.setTransform(456.7,262.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_344.setTransform(450.3,255.5,1,1,0,0,0,0,-0.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_345.setTransform(452.4,254.8,1,1,0,0,0,0,-0.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_346.setTransform(454.5,254.2,1,1,0,0,0,0,-0.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_347.setTransform(456.7,253.5,1,1,0,0,0,0,-0.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_348.setTransform(450.4,246.9,1,1,0,0,0,0,-0.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_349.setTransform(452.6,246.2,1,1,0,0,0,0,-0.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_350.setTransform(454.7,245.6,1,1,0,0,0,0,-0.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_351.setTransform(456.8,244.9,1,1,0,0,0,0,-0.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_352.setTransform(450.5,238.3,1,1,0,0,0,0,-0.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_353.setTransform(452.6,237.6,1,1,0,0,0,0,-0.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_354.setTransform(454.8,237,1,1,0,0,0,0,-0.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_355.setTransform(456.9,236.3,1,1,0,0,0,0,-0.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_356.setTransform(450.7,229.6,1,1,0,0,0,0,-0.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_357.setTransform(452.8,229,1,1,0,0,0,0,-0.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_358.setTransform(455,228.3,1,1,0,0,0,0,-0.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNADg");
	this.shape_359.setTransform(457.1,227.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_360.setTransform(450.7,221,1,1,0,0,0,0,-0.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_361.setTransform(452.8,220.4,1,1,0,0,0,0,-0.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_362.setTransform(455,219.7,1,1,0,0,0,0,-0.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAEg");
	this.shape_363.setTransform(457.1,219.1,1,1,0,0,0,0,-0.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#292929").ss(0.3).p("AhCgRIAAAWICFANIAAgTg");
	this.shape_364.setTransform(471.1,222.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#292929").ss(0.3).p("AhFgIICLAR");
	this.shape_365.setTransform(470.7,203.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#292929").ss(0.3).p("Ag1AVIBsgp");
	this.shape_366.setTransform(454.1,205.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#292929").ss(0.3).p("AgboCIA3QF");
	this.shape_367.setTransform(480.6,254.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#292929").ss(0.3).p("AACnBIgDOD");
	this.shape_368.setTransform(463.4,246.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#292929").ss(0.3).p("AACm6IgDN1");
	this.shape_369.setTransform(459.3,246.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_370.setTransform(477.1,270.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_371.setTransform(473.7,270.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_372.setTransform(470.5,269.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVACg");
	this.shape_373.setTransform(467.2,269.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_374.setTransform(476.9,262);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_375.setTransform(473.6,261.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_376.setTransform(470.3,261.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_377.setTransform(467.1,260.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_378.setTransform(476.7,253.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_379.setTransform(473.5,253.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_380.setTransform(470.1,252.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_381.setTransform(466.9,252.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_382.setTransform(476.5,245.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_383.setTransform(473.3,244.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVACg");
	this.shape_384.setTransform(470,244.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_385.setTransform(466.7,244.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_386.setTransform(476.4,236.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_387.setTransform(473.1,236.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_388.setTransform(469.9,236.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_389.setTransform(466.5,235.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_390.setTransform(476.3,228.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_391.setTransform(472.9,228.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_392.setTransform(469.7,227.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgBgsIAUADg");
	this.shape_393.setTransform(466.4,227.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_394.setTransform(476.1,220.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAUACg");
	this.shape_395.setTransform(472.8,219.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_396.setTransform(469.5,219.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_397.setTransform(466.3,219);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#292929").ss(0.3).p("AAUAAIgVgCIgRAF");
	this.shape_398.setTransform(462.6,183.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#292929").ss(0.3).p("AApAAIgqgGIgmAN");
	this.shape_399.setTransform(462.6,186.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#292929").ss(0.3).p("AA+AAIhDgJIg2AU");
	this.shape_400.setTransform(462.7,189.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#292929").ss(0.3).p("ABSAAIhZgNIhJAc");
	this.shape_401.setTransform(462.8,192);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#292929").ss(0.3).p("ABngBIhwgQIhcAk");
	this.shape_402.setTransform(462.9,195);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#292929").ss(0.3).p("AB8gCIiIgTIhuAr");
	this.shape_403.setTransform(463,198.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#292929").ss(0.3).p("AiPAaICCgzICeAW");
	this.shape_404.setTransform(463.1,201.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#292929").ss(0.3).p("ACmgEIi1gZIiVA7");
	this.shape_405.setTransform(463.2,204.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#292929").ss(0.3).p("AgDBbIAHi1");
	this.shape_406.setTransform(462,192);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#292929").ss(0.3).p("AhPINIAUsqICMjt");
	this.shape_407.setTransform(452.7,235.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#292929").ss(0.3).p("AhyrEICaDNIBKS+");
	this.shape_408.setTransform(475.9,254);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_409.setTransform(446.4,264.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_410.setTransform(446.6,256.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_411.setTransform(446.7,247.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_412.setTransform(447,239.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_413.setTransform(447.1,230.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_414.setTransform(447.3,221.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#292929").ss(0.3).p("AgHGbIAQs1");
	this.shape_415.setTransform(447.8,247.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_416.setTransform(477.5,295.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_417.setTransform(474.3,295.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_418.setTransform(470.9,294.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_419.setTransform(467.7,294.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_420.setTransform(477.3,287.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_421.setTransform(474.1,286.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_422.setTransform(470.8,286.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_423.setTransform(467.5,286);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgDIgCgsIAVADg");
	this.shape_424.setTransform(477.2,278.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_425.setTransform(473.9,278.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVADg");
	this.shape_426.setTransform(470.7,278);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVADg");
	this.shape_427.setTransform(467.3,277.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_428.setTransform(462.3,285.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_429.setTransform(461.2,285.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAu");
	this.shape_430.setTransform(460.1,285.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_431.setTransform(462.3,277.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_432.setTransform(461.3,277.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#292929").ss(0.3).p("AAAgXIAAAv");
	this.shape_433.setTransform(460.2,277.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#292929").ss(0.3).p("AAHATIAAgeIgNAEIAAAW");
	this.shape_434.setTransform(450.3,287.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#292929").ss(0.3).p("AAHAXIAAgnIgNAFIAAAg");
	this.shape_435.setTransform(452.4,287.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#292929").ss(0.3).p("AgGAYIANgDIAAgsIgNAFg");
	this.shape_436.setTransform(454.5,287.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_437.setTransform(456.7,286.7,1,1,0,0,0,0,-0.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_438.setTransform(450.1,281.2,1,1,0,0,0,0,-0.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_439.setTransform(452.3,280.5,1,1,0,0,0,0,-0.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_440.setTransform(454.4,279.9,1,1,0,0,0,0,-0.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_441.setTransform(456.5,279.2,1,1,0,0,0,0,-0.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_442.setTransform(450.2,272.7,1,1,0,0,0,0,-0.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_443.setTransform(446,282.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#292929").ss(0.3).p("AAAgTIAAAn");
	this.shape_444.setTransform(446.1,273.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#292929").ss(0.3).p("AgGAZIANgFIAAgsIgNAFg");
	this.shape_445.setTransform(452.3,272.1,1,1,0,0,0,0,-0.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#292929").ss(0.3).p("AgJAWIgBglIAVADIAAAQ");
	this.shape_446.setTransform(471.5,327.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_447.setTransform(468.3,327.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#292929").ss(0.3).p("AAAAPIgBgYIAHAB");
	this.shape_448.setTransform(477,319.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_449.setTransform(474.7,320.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgDIgBgsIAVACg");
	this.shape_450.setTransform(471.5,320);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_451.setTransform(468.1,319.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#292929").ss(0.3).p("AAAAXIgEAAIgBgtIAQAC");
	this.shape_452.setTransform(477.3,312.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgDIgBgsIAVACg");
	this.shape_453.setTransform(474.5,312);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_454.setTransform(471.3,311.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#292929").ss(0.3).p("AALAYIgUgCIgBgtIAUADg");
	this.shape_455.setTransform(468,311.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_456.setTransform(477.7,303.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAUADg");
	this.shape_457.setTransform(474.4,303.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#292929").ss(0.3).p("AAMAYIgVgCIgBgtIAVADg");
	this.shape_458.setTransform(471.1,303.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#292929").ss(0.3).p("AALAYIgVgCIgBgtIAVADg");
	this.shape_459.setTransform(467.9,302.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#292929").ss(0.3).p("AAbiGIgyARIAAEA");
	this.shape_460.setTransform(321.1,181.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#292929").ss(0.3).p("AgpidIBQAjIAAEc");
	this.shape_461.setTransform(367.7,132.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#292929").ss(0.3).p("AAAvrIAAfX");
	this.shape_462.setTransform(374.5,248.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_463.setTransform(384.4,66);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#292929").ss(0.3).p("AAAAoIAAhP");
	this.shape_464.setTransform(385.4,65.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#292929").ss(0.3).p("ADvgjIAAhCQgHgEgMgDQgZgGgcAJImVCRIAABN");
	this.shape_465.setTransform(369.6,72);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#292929").ss(0.3).p("AAAgrIABBX");
	this.shape_466.setTransform(340.2,92.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#292929").ss(0.3).p("AjCCAQgBgbAAgcQAAg3ABgBIGJiR");
	this.shape_467.setTransform(353.9,97.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#292929").ss(0.3).p("Ai4CFIgGiPIGBh2");
	this.shape_468.setTransform(345.9,113.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#292929").ss(0.3).p("AgSBTIAAirIAlAjIABCZ");
	this.shape_469.setTransform(367.3,109.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#292929").ss(0.3).p("AC9QtMAAJghTImLBxIAAKp");
	this.shape_470.setTransform(343.7,223.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#292929").ss(0.3).p("ABIhLIAAs3Ig1gTIhZAaIAAcX");
	this.shape_471.setTransform(373.7,239.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#292929").ss(0.3).p("AAkI+IAAx0IhIAUIAAEe");
	this.shape_472.setTransform(380.6,174.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#292929").ss(0.3).p("AA9kCIh2g5IAHJ+");
	this.shape_473.setTransform(379.6,116);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#292929").ss(0.3).p("ADKDAIAAlPIApgiInbCsIgWAcIHIim");
	this.shape_474.setTransform(365.6,85.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#292929").ss(0.3).p("AAThTIgiASIABCZ");
	this.shape_475.setTransform(379.9,110.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#292929").ss(0.3).p("AglBWIgCijIBSAw");
	this.shape_476.setTransform(385.8,110.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#292929").ss(0.3).p("AgSEJIgEoLIAyAL");
	this.shape_477.setTransform(392.2,93.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#292929").ss(0.3).p("AANEGIgBnYIgYgjIAAH0");
	this.shape_478.setTransform(396.3,93.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#292929").ss(0.3).p("AgkhWIBGAhQAAAAgDBJQgCAwABAT");
	this.shape_479.setTransform(401.3,103.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#292929").ss(0.3).p("AAuBaQgCgkACg0QACgsABgCIhmgu");
	this.shape_480.setTransform(403,118.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#292929").ss(0.3).p("AAfAMIg9gX");
	this.shape_481.setTransform(387.4,119.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#292929").ss(0.3).p("AAToIIghAIIAAQO");
	this.shape_482.setTransform(391.9,170.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#292929").ss(0.3).p("AgeIIIAAwMIA9AVIAAP7");
	this.shape_483.setTransform(396.9,170.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#292929").ss(0.3).p("AAxH4IAAu+Ihkgs");
	this.shape_484.setTransform(405.2,173.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#292929").ss(0.3).p("AAWFIIAApyIgtgY");
	this.shape_485.setTransform(412.5,192.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#292929").ss(0.3).p("AAcpMIg0AYIAASG");
	this.shape_486.setTransform(379.1,290.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#292929").ss(0.3).p("AA3jOIAAlzIhtgVIAAS0");
	this.shape_487.setTransform(387.4,291.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#292929").ss(0.3).p("AgfA9IAAhbIBCga");
	this.shape_488.setTransform(392.2,227.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#292929").ss(0.3).p("ABuDkIAAmpIjbguIAAHt");
	this.shape_489.setTransform(406.8,245.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#292929").ss(0.3).p("AAhCyIgBlKIhDgU");
	this.shape_490.setTransform(421.2,251.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#292929").ss(0.3).p("AheA6IAAgIIC/hn");
	this.shape_491.setTransform(97.5,51.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#292929").ss(0.3).p("ABgA9IAAgWIi/hbIAAAT");
	this.shape_492.setTransform(116.8,51.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#292929").ss(0.3).p("AhnFrIAAsWIDPBWIAAMI");
	this.shape_493.setTransform(121.2,132.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#292929").ss(0.3).p("ABXGAIAAr3IitBOIAAJT");
	this.shape_494.setTransform(92.9,127.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#292929").ss(0.3).p("AAAAeIAAg6");
	this.shape_495.setTransform(106.2,50.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#292929").ss(0.3).p("AjMBnIAAhfIAhgRIAEAhIBng4IAEgmIAvgaIA4AcIAFA9IBvA3IAEg3IApAUIAABD");
	this.shape_496.setTransform(107.8,57.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#292929").ss(0.3).p("AAAB7IAAj1");
	this.shape_497.setTransform(106.1,65.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#292929").ss(0.3).p("Aj1DLIAAkIIAmgVIAAAdICPhNIgBgnIAwgbIAsAUIABAnICtBXIgBgdIAuAXIAAEC");
	this.shape_498.setTransform(108.2,72.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#292929").ss(0.3).p("AAAnCIAAOF");
	this.shape_499.setTransform(106.7,122.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#292929").ss(0.3).p("AkfEFIAAp/IAsgWIABBBIC3hbIgCguIAygXIA0AWIABAvIDMBXIAChHIAoAQIAAN/");
	this.shape_500.setTransform(107.9,127);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#292929").ss(0.3).p("AhcB2IAAiOIC8hY");
	this.shape_501.setTransform(69.7,123.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#292929").ss(0.3).p("Ai6APIBjgeQBdgTBKAYIBrAj");
	this.shape_502.setTransform(331,318.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#292929").ss(0.3).p("AjoAlIBygpIBOgYQBcgSBLAYIBqAh");
	this.shape_503.setTransform(326.4,311.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#292929").ss(0.3).p("AkWA2IDNhLIBNgXQBdgTBLAYIBrAk");
	this.shape_504.setTransform(321.9,304.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#292929").ss(0.3).p("AlBA+ID7hcIBNgXQBdgTBLAZQBtAjAjAM");
	this.shape_505.setTransform(317.7,296.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#292929").ss(0.3).p("AlAA+ID7hbIBNgYQBdgTBLAZICSAv");
	this.shape_506.setTransform(317.6,287.8);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_507.setTransform(317.5,279.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#292929").ss(0.3).p("AlCikID7hdIBNgXQBdgTBLAZQB3AnAbALIAAIG");
	this.shape_508.setTransform(317.8,293.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_509.setTransform(317.5,261.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#292929").ss(0.3).p("AlAA+ID7hcIBNgXQBdgTBLAZICSAv");
	this.shape_510.setTransform(317.6,252.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#292929").ss(0.3).p("Ak/A+ID7hbIBNgYQBdgTBLAZICQAv");
	this.shape_511.setTransform(317.5,244.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#292929").ss(0.3).p("AlClTID7hdIBNgYQBdgTBLAZQB3AnAbALIAANm");
	this.shape_512.setTransform(317.8,276.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#292929").ss(0.3).p("AlCA1ID7hbIBNgYQBdgTBLAZQB3AnAbALIAABS");
	this.shape_513.setTransform(317.8,228.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#292929").ss(0.3).p("ADeBXIAAhmQgcgMh3goQhLgahPAQIhAAWIhOApIAABn");
	this.shape_514.setTransform(322,203.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#292929").ss(0.3).p("AD9BBIAAhTQgcgLh3gnQhLgZhPAQIhAAUIiMA+IAABU");
	this.shape_515.setTransform(318.9,214);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#292929").ss(0.3).p("AklHJIAAsVIDdhdIBBgVQBPgPBKAZQB4AnAbAKIAAA4");
	this.shape_516.setTransform(314.8,259.2);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(329.3,283.3,1,1,0,0,0,63.9,35.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#292929").ss(0.3).p("AA+g6Ih7B1");
	this.shape_517.setTransform(13.8,291.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#292929").ss(0.3).p("AhQANQBdAgBEgCIAAg2QhBADhgghg");
	this.shape_518.setTransform(121.1,335.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AhQAMIAAg2QBgAhBBgDIAAA2IgIABQhBAAhYgfg");
	this.shape_519.setTransform(121.1,335.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#292929").ss(0.3).p("AAaBDIgzAAIAAiFIAzAAg");
	this.shape_520.setTransform(142.8,321.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgZBDIAAiFIAzAAIAACFg");
	this.shape_521.setTransform(142.8,321.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#292929").ss(0.3).p("AguhSQAKAOAiAPQAhAPAPgDQABBzgBAGQgPAEgTgCQgmgFgUgiIAAh9IAAgC");
	this.shape_522.setTransform(104.5,318.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AAMBTQgmgFgUghIAAiAIABADQAJAOAiAPQAhAOAPgCQABBzgBAFQgKADgLAAIgNgBg");
	this.shape_523.setTransform(104.5,318.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#292929").ss(0.3).p("AExAhIn8ASIgGhQIhegV");
	this.shape_524.setTransform(40.1,280.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AjRgdIhegVIJfBTIn7ASg");
	this.shape_525.setTransform(40.1,280.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#292929").ss(0.3).p("AgcAKIA4gT");
	this.shape_526.setTransform(91.6,353.6);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#292929").ss(0.3).p("AkejOIF6FhIBDAnQBNAiAxgW");
	this.shape_527.setTransform(97.4,371.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#292929").ss(0.3).p("AkojZIGPF2IBDAnQBMAiAxgW");
	this.shape_528.setTransform(96.3,367.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#292929").ss(0.3).p("AkvjfIGcGDIBDAmQBNAiAxgW");
	this.shape_529.setTransform(95.7,364.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#292929").ss(0.3).p("AEtDWQgxAWhNgiIhDgnImZmC");
	this.shape_530.setTransform(95.8,361.8);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#292929").ss(0.3).p("AC1BjQgxAWhMgjIhCgmIisic");
	this.shape_531.setTransform(107.7,370.8);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#292929").ss(0.3).p("AjAhwIDAClIBCAmQBMAjAxgW");
	this.shape_532.setTransform(106.7,367.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#292929").ss(0.3).p("AC6BoQgxAWhNgjIhCgmIizieIAAAe");
	this.shape_533.setTransform(107.3,365.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#292929").ss(0.3).p("AlkhaQAoA5BZAsQBVAqBsAUQDxAtCZhS");
	this.shape_534.setTransform(130.4,301.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgjBKQhsgUhVgqQhZgsgog5ILLB+QhiA1iIAAQhKAAhVgQg");
	this.shape_535.setTransform(130.6,301.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#292929").ss(0.3).p("AgpgiIBTBF");
	this.shape_536.setTransform(63.9,328.8);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#292929").ss(0.3).p("AA4AOIhShMIgWAAIBpBeIgBAYIhnhpIgBgN");
	this.shape_537.setTransform(62.2,333);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgzgtIgBgNIBpBeIgBAXgAg0g6IAWAAIBSBLg");
	this.shape_538.setTransform(62.6,332.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#292929").ss(0.3).p("AgQhvIAAC9IAjAe");
	this.shape_539.setTransform(96.2,344.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgRBQIAAi9IAjDbg");
	this.shape_540.setTransform(96.3,344.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#292929").ss(0.3).p("AAlBQIhFANIAAi+");
	this.shape_541.setTransform(101.4,346.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgihfIBFCyIhFAMg");
	this.shape_542.setTransform(101.6,346.1);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#292929").ss(0.3).p("AghhwIAACYIBEBF");
	this.shape_543.setTransform(108.4,352.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AghAqIAAiYIBDDdg");
	this.shape_544.setTransform(108.4,352.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#292929").ss(0.3).p("AgohjIAADAIBRgSIAAiU");
	this.shape_545.setTransform(115.6,354.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgohgIBRAbIAACTIhRASg");
	this.shape_546.setTransform(115.6,353.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#292929").ss(0.3).p("ACkEpQhDADhZgSQiyglhyhqIAJmVII1ge");
	this.shape_547.setTransform(122.3,319);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AAFEaQiyglhyhqIAKmVII1geIh+JRIgTAAQg9AAhNgPg");
	this.shape_548.setTransform(122.5,319);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#292929").ss(0.3).p("AAxAJIg8gQIgkAP");
	this.shape_549.setTransform(156.3,247.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgvAIIAkgQIA8ARg");
	this.shape_550.setTransform(156.4,247.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#292929").ss(0.3).p("AgVDtIAogdIAAm4IgoAS");
	this.shape_551.setTransform(159.3,271.4);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgUjYIApgSIAAG4IgpAdg");
	this.shape_552.setTransform(159.2,271.6);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#292929").ss(0.3).p("AAcDrIg3giIAAm1IA3ATg");
	this.shape_553.setTransform(154.2,271.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgbDKIAAm1IA3ATIAAHEg");
	this.shape_554.setTransform(154.2,271.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#292929").ss(0.3).p("AAugHIhWAFIAAAP");
	this.shape_555.setTransform(63.9,325.6);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgrgEIBWgFIhWATg");
	this.shape_556.setTransform(64.1,325.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#292929").ss(0.3).p("AhEiQIABCUICBCDIAHkZ");
	this.shape_557.setTransform(53.6,311.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AhDAKIgBiUICJgCIgIEZg");
	this.shape_558.setTransform(53.6,311.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#292929").ss(0.3).p("AFcBnIpvAHIhJghIB3hbIgXhfIJjAD");
	this.shape_559.setTransform(34.9,286.4);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AlhBNIB3hbIgWhfIJiADIgLDRIpvAHg");
	this.shape_560.setTransform(35.4,286.4);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#292929").ss(0.3).p("AAAhJIAACT");
	this.shape_561.setTransform(49.2,268.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#292929").ss(0.3).p("ABAA0Ih1hmIB0AA");
	this.shape_562.setTransform(54.6,266);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("Ag6gzIB1AAIAABng");
	this.shape_563.setTransform(55.1,266);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#292929").ss(0.3).p("AAAhSIAACl");
	this.shape_564.setTransform(61.1,267.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#292929").ss(0.3).p("Ah8gEIA1AMIDEgQ");
	this.shape_565.setTransform(68.3,258.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("Ah8gEID5gDIjFAQg");
	this.shape_566.setTransform(68.4,258.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#292929").ss(0.3).p("AgghNIA9ATIAACGIg7gX");
	this.shape_567.setTransform(78,249.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgcA2IgCiCIA9ATIAACGg");
	this.shape_568.setTransform(77.8,249.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#292929").ss(0.3).p("ABfA0IgCiBIi7AuIAABug");
	this.shape_569.setTransform(65.4,249.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AheggIC8guIABCCIi9Abg");
	this.shape_570.setTransform(65.4,250);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#292929").ss(0.3).p("AhJnUIgmLgIDCC9IAdr8");
	this.shape_571.setTransform(79,312);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AhvERIAmrfIC5ChIgeL8g");
	this.shape_572.setTransform(79,311.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#292929").ss(0.3).p("AC/hRIpGACIC7ChIJSgig");
	this.shape_573.setTransform(110.7,272.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AmGhPIJGgCIDHCBIpSAig");
	this.shape_574.setTransform(110.6,272.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#292929").ss(0.3).p("AAADLIAAmV");
	this.shape_575.setTransform(95.9,244);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#292929").ss(0.3).p("AFUDQIAAlMIlThNIgBAAIlTBUIAACB");
	this.shape_576.setTransform(95.7,243.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AlTAJIAAiBIFThUIABAAIFTBNIAAFMg");
	this.shape_577.setTransform(95.7,244.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#292929").ss(0.3).p("AAAi1IAAFr");
	this.shape_578.setTransform(87.9,207.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#292929").ss(0.3).p("AgvC/IAAldIA7gaIAlAbIAAFE");
	this.shape_579.setTransform(86.8,207.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgvihIA6gaIAlAbIAAFEIhfAYg");
	this.shape_580.setTransform(86.8,208.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#292929").ss(0.3).p("AgcAAIA4AA");
	this.shape_581.setTransform(164.3,288.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#292929").ss(0.3).p("AAAg4IAABx");
	this.shape_582.setTransform(150,283.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#292929").ss(0.3).p("AhEB2QgCgLAAgWQAAgVABgHQABgKALgQIBeiGQAMgRAKADQAIADABARQACAWABAm");
	this.shape_583.setTransform(99.1,370);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#292929").ss(0.3).p("ABxB9IiZgDIhBjrIBJgL");
	this.shape_584.setTransform(10.6,256.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#292929").ss(0.3).p("Ag7BUIBpAPIA3iTIjJgwg");
	this.shape_585.setTransform(64.2,190.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#292929").ss(0.3).p("AgBgLIADAX");
	this.shape_586.setTransform(11.7,261.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#292929").ss(0.3).p("AAzBEIgciCIhNAI");
	this.shape_587.setTransform(12.7,256.9);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#292929").ss(0.3).p("ABDBSIgkieQgHACheAL");
	this.shape_588.setTransform(15.1,248.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#292929").ss(0.3).p("ABFBjIgqjAQgGAChdAT");
	this.shape_589.setTransform(19,239.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#292929").ss(0.3).p("ABNCVIhDklIhaAW");
	this.shape_590.setTransform(24.1,234.8);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#292929").ss(0.3).p("ABXDGIhYmGIhZAj");
	this.shape_591.setTransform(28.4,229.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#292929").ss(0.3).p("ABeD7IhwnvIhOAk");
	this.shape_592.setTransform(33.5,224.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#292929").ss(0.3).p("ABkEwIiGpZIhDAk");
	this.shape_593.setTransform(38.5,219.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#292929").ss(0.3).p("ABsFiIifq8Ig6Ac");
	this.shape_594.setTransform(43.5,214.6);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#292929").ss(0.3).p("ABxI+IiqryIg3AmIAAmw");
	this.shape_595.setTransform(47.6,188);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#292929").ss(0.3).p("AAAmyIAANl");
	this.shape_596.setTransform(29.7,146);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#292929").ss(0.3).p("AC6oQIlyN9IAuCk");
	this.shape_597.setTransform(24.5,210.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#292929").ss(0.3).p("Ag2H6IhxgEIFRvy");
	this.shape_598.setTransform(27.4,213);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#292929").ss(0.3).p("AAAhUIAACp");
	this.shape_599.setTransform(36,266.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#292929").ss(0.3).p("AAAB/IAAj8");
	this.shape_600.setTransform(22,262.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#292929").ss(0.3).p("ACkgoIlRAAICNBSIDgAA");
	this.shape_601.setTransform(39.3,254.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#292929").ss(0.3).p("AgTg0IAoBp");
	this.shape_602.setTransform(183.5,195);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#292929").ss(0.3).p("ALPFrIApiIIuekkIpOpEIE+ULIEQrH");
	this.shape_603.setTransform(105.4,167.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#292929").ss(0.3).p("AgNgEIAbAI");
	this.shape_604.setTransform(63.6,230.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#292929").ss(0.3).p("Ag+gSIB9Al");
	this.shape_605.setTransform(70.2,226.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#292929").ss(0.3).p("AhtghIDbBD");
	this.shape_606.setTransform(77.2,221.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#292929").ss(0.3).p("AkPhUIIfCp");
	this.shape_607.setTransform(95.6,221);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#292929").ss(0.3).p("AhLgXICXAv");
	this.shape_608.setTransform(137,234);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#292929").ss(0.3).p("AlxhzILjDn");
	this.shape_609.setTransform(107.7,218.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#292929").ss(0.3).p("AlxhzILkDo");
	this.shape_610.setTransform(110,212.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#292929").ss(0.3).p("Al1h1ILrDr");
	this.shape_611.setTransform(112.6,206.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#292929").ss(0.3).p("Al8h2IL5Du");
	this.shape_612.setTransform(115.6,201.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#292929").ss(0.3).p("AmXh/IMvD/");
	this.shape_613.setTransform(120.5,196.3);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#292929").ss(0.3).p("Am8iLIN5EX");
	this.shape_614.setTransform(126.5,191.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#292929").ss(0.3).p("AnTiSIOoEl");
	this.shape_615.setTransform(131,186.6);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#292929").ss(0.3).p("AnSiRIOlEj");
	this.shape_616.setTransform(133.1,180.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#292929").ss(0.3).p("AAiheIhDC9");
	this.shape_617.setTransform(171.1,197.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#292929").ss(0.3).p("AArh4IhVDx");
	this.shape_618.setTransform(163.7,197.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#292929").ss(0.3).p("ABJjLIiRGX");
	this.shape_619.setTransform(154,204);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#292929").ss(0.3).p("AAehVIg7Cr");
	this.shape_620.setTransform(141.7,238.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#292929").ss(0.3).p("ABxk9IjhJ7");
	this.shape_621.setTransform(143.4,213.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#292929").ss(0.3).p("ABdkEIi5IJ");
	this.shape_622.setTransform(138.7,205.4);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#292929").ss(0.3).p("ABdkFIi5IK");
	this.shape_623.setTransform(132.1,203.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#292929").ss(0.3).p("ABfkIIi9IR");
	this.shape_624.setTransform(125.3,201.8);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#292929").ss(0.3).p("ABgkLIi/IX");
	this.shape_625.setTransform(118.7,199.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#292929").ss(0.3).p("ABgkNIi/Ib");
	this.shape_626.setTransform(111.9,197.9);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#292929").ss(0.3).p("ABikRIjDIi");
	this.shape_627.setTransform(105.2,196.3);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#292929").ss(0.3).p("ABpkkIjQJK");
	this.shape_628.setTransform(97.8,196);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#292929").ss(0.3).p("ABwk4IjfJx");
	this.shape_629.setTransform(90.5,196);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#292929").ss(0.3).p("AB3lMIjtKZ");
	this.shape_630.setTransform(83.1,196);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#292929").ss(0.3).p("AggrqIBBgRIAAX4IhBAAg");
	this.shape_631.setTransform(267.7,233.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AggL8IAA3nIBBgRIAAX4g");
	this.shape_632.setTransform(267.7,233.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_633.setTransform(256,311.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_634.setTransform(256,307.8);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_635.setTransform(256,304);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_636.setTransform(256,300.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_637.setTransform(256,296.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_638.setTransform(256,292.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_639.setTransform(256,289);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_640.setTransform(256,285.3);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_641.setTransform(256,281.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_642.setTransform(256,277.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_643.setTransform(256,274);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_644.setTransform(256,270.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_645.setTransform(256,266.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_646.setTransform(256,262.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_647.setTransform(256,259);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_648.setTransform(256,255.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_649.setTransform(256,251.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_650.setTransform(256,247.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_651.setTransform(256,244);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_652.setTransform(256,240.3);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_653.setTransform(256,236.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_654.setTransform(256,232.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_655.setTransform(256,229);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_656.setTransform(256,225.3);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#292929").ss(0.3).p("AhWgjICtBI");
	this.shape_657.setTransform(256,221.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_658.setTransform(256,217.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_659.setTransform(256,214);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_660.setTransform(256,210.3);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_661.setTransform(256,206.5);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_662.setTransform(256,202.8);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_663.setTransform(256,199);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_664.setTransform(256,195.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_665.setTransform(256,191.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_666.setTransform(256,187.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_667.setTransform(256,158.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#292929").ss(0.3).p("AhRghICjBE");
	this.shape_668.setTransform(256.5,155.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#292929").ss(0.3).p("Ag4gXIBwAv");
	this.shape_669.setTransform(256.4,151.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#292929").ss(0.3).p("AgdgMIA7AZ");
	this.shape_670.setTransform(256.1,147.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#292929").ss(0.3).p("AgHgDIAPAG");
	this.shape_671.setTransform(256.2,143.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_672.setTransform(256,184);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_673.setTransform(256,180.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_674.setTransform(256,176.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_675.setTransform(256,172.7);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_676.setTransform(256,169);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_677.setTransform(256,165.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#292929").ss(0.3).p("AhWgkICtBJ");
	this.shape_678.setTransform(256,161.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#292929").ss(0.3).p("AAAsCIAAYF");
	this.shape_679.setTransform(263.2,233);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#292929").ss(0.3).p("AAAsaIAAY1");
	this.shape_680.setTransform(260.3,230.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#292929").ss(0.3).p("AAAsxIAAZj");
	this.shape_681.setTransform(257.5,228.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#292929").ss(0.3).p("AAAs6IAAZ1");
	this.shape_682.setTransform(254.6,227.4);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#292929").ss(0.3).p("AAAsqIAAZV");
	this.shape_683.setTransform(251.8,229);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#292929").ss(0.3).p("AAAsaIAAY1");
	this.shape_684.setTransform(248.9,230.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_685.setTransform(226.4,284.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_686.setTransform(226.4,284.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_687.setTransform(226.4,276.9);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_688.setTransform(226.4,277);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_689.setTransform(226.4,269.7);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_690.setTransform(226.4,269.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_691.setTransform(226.4,262.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_692.setTransform(226.4,262.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_693.setTransform(226.4,255.2);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAmIhfAdg");
	this.shape_694.setTransform(226.4,255.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_695.setTransform(226.4,247.9);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_696.setTransform(226.4,247.9);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_697.setTransform(226.4,240.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_698.setTransform(226.4,240.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_699.setTransform(226.4,233.4);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_700.setTransform(226.4,233.4);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_701.setTransform(226.4,226.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_702.setTransform(226.4,226.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_703.setTransform(226.4,218.9);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_704.setTransform(226.4,218.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_705.setTransform(226.4,210.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_706.setTransform(226.4,210.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#292929").ss(0.3).p("AgTgNIAlgIIAAAmIgnAH");
	this.shape_707.setTransform(216.7,213.4);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgRgOIAlgIIAAAnIgnAGg");
	this.shape_708.setTransform(216.5,213.5);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_709.setTransform(226.4,203.1);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_710.setTransform(226.4,203.2);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#292929").ss(0.3).p("AgsACIBVgXIAAAmIgZAH");
	this.shape_711.setTransform(195.9,202.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgqABIBVgXIAAAmIgZAHg");
	this.shape_712.setTransform(195.7,202.9);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_713.setTransform(226.4,195.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_714.setTransform(226.4,195.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#292929").ss(0.3).p("AhQAKICdgoIAAAnIhaAY");
	this.shape_715.setTransform(210.8,206.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AhOAJICdgoIAAAnIhbAYg");
	this.shape_716.setTransform(210.6,206.2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_717.setTransform(210.6,199.9);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_718.setTransform(210.6,199.9);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgnIBXgYg");
	this.shape_719.setTransform(195.6,196.1);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAmIhXAZg");
	this.shape_720.setTransform(195.6,196.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_721.setTransform(226.4,187.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_722.setTransform(226.4,187.8);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_723.setTransform(210.6,192.2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_724.setTransform(210.6,192.2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgmIBXgZg");
	this.shape_725.setTransform(195.6,188.4);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_726.setTransform(195.6,188.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_727.setTransform(226.4,180.1);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAmIhfAdg");
	this.shape_728.setTransform(226.4,180.1);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_729.setTransform(210.6,184.5);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_730.setTransform(210.6,184.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgmIBXgZg");
	this.shape_731.setTransform(195.6,180.7);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_732.setTransform(195.6,180.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_733.setTransform(226.4,172.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_734.setTransform(226.4,172.4);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_735.setTransform(210.6,176.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_736.setTransform(210.6,176.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgmIBXgZg");
	this.shape_737.setTransform(195.6,173);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAnIhXAYg");
	this.shape_738.setTransform(195.6,173);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_739.setTransform(226.4,164.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAmIhfAdg");
	this.shape_740.setTransform(226.4,164.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgpg");
	this.shape_741.setTransform(210.6,169.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidApg");
	this.shape_742.setTransform(210.6,169.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_743.setTransform(195.6,165.3);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAmIhXAZg");
	this.shape_744.setTransform(195.6,165.3);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_745.setTransform(226.4,157);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_746.setTransform(226.4,157);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgpg");
	this.shape_747.setTransform(210.6,161.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_748.setTransform(210.6,161.4);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_749.setTransform(195.6,157.6);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_750.setTransform(195.6,157.6);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_751.setTransform(226.4,149.3);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_752.setTransform(226.4,149.3);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgpg");
	this.shape_753.setTransform(210.6,153.7);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidApg");
	this.shape_754.setTransform(210.6,153.7);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgnIBXgYg");
	this.shape_755.setTransform(195.6,149.9);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAnIhXAYg");
	this.shape_756.setTransform(195.6,149.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgmIBfgdg");
	this.shape_757.setTransform(226.4,141.6);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_758.setTransform(226.4,141.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#292929").ss(0.3).p("ABPAAIidApIAAgoICdgog");
	this.shape_759.setTransform(210.6,146);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AhOABICdgpIAAAoIidAog");
	this.shape_760.setTransform(210.6,146);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#292929").ss(0.3).p("AAsAHIhXAZIAAgnIBXgYg");
	this.shape_761.setTransform(195.6,142.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AgrgGIBXgZIAAAmIhXAZg");
	this.shape_762.setTransform(195.6,142.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#292929").ss(0.3).p("AAwAGIhfAcIAAgnIBfgcg");
	this.shape_763.setTransform(226.4,133.9);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgvgFIBfgcIAAAnIhfAcg");
	this.shape_764.setTransform(226.4,133.9);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_765.setTransform(210.6,138.3);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_766.setTransform(210.6,138.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#292929").ss(0.3).p("AAsAIIhXAYIAAgmIBXgZg");
	this.shape_767.setTransform(195.6,134.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgrgHIBXgYIAAAnIhXAYg");
	this.shape_768.setTransform(195.6,134.5);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#292929").ss(0.3).p("AAwAFIhfAdIAAgnIBfgcg");
	this.shape_769.setTransform(226.4,126.3);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgvgEIBfgdIAAAnIhfAcg");
	this.shape_770.setTransform(226.4,126.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#292929").ss(0.3).p("ABPAAIidAoIAAgnICdgog");
	this.shape_771.setTransform(210.6,130.6);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AhOABICdgoIAAAnIidAog");
	this.shape_772.setTransform(210.6,130.6);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#292929").ss(0.3).p("AgtAAIBXgZIAAAmIguAP");
	this.shape_773.setTransform(226.9,290.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgrAAIBXgaIAAAmIgvAPg");
	this.shape_774.setTransform(226.7,290.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#292929").ss(0.3).p("AhIAcIAFiVIA5geQgCCRABAIIABAAIgnARQgBAAgBAAQgCABgDACQgIADgIADIBMB/IBEgRIhSiI");
	this.shape_775.setTransform(263.8,142.8);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AhHAbIAEiVIA5geQgCCRACAIIAAAAIBTCIIhFARg");
	this.shape_776.setTransform(263.8,143);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#292929").ss(0.3).p("AgIOFIAA3eIhTiIIAAiaIC3BhIAAaa");
	this.shape_777.setTransform(271.9,216.8);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgHpeIhUiHIAAiaIC3BhIAAaaIhjAEg");
	this.shape_778.setTransform(271.9,217.3);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#292929").ss(0.3).p("AAJPMIAA4bIBlh0IAAifIjZhnIgCeb");
	this.shape_779.setTransform(246,212.2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AhrvNIDZBnIAACfIhlB0IAAYbIh2AGg");
	this.shape_780.setTransform(246,212.6);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#292929").ss(0.3).p("AD1PUIAA+hInpCKIABLRIERBtIgCAgIAoAXIAABIIAoANIgFKCICBBYIgFB0");
	this.shape_781.setTransform(210.6,212.6);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("ADoNeIiBhYIAFqCIgogNIAAhIIgogYIACgfIkRhtIgBrRIHpiLIAAehIgSABg");
	this.shape_782.setTransform(210.6,213);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#292929").ss(0.3).p("AhWI7ICtk1IirkcICskPIixkV");
	this.shape_783.setTransform(255.5,211.3);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#292929").ss(0.3).p("AhVLaICtk1IiskcICtkPIixkVICyk+");
	this.shape_784.setTransform(255.4,215);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#292929").ss(0.3).p("AhVLaICtk1IiskcICtkPIixkVICyk+");
	this.shape_785.setTransform(255.4,234.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_786.setTransform(418.6,381.6);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_787.setTransform(418.6,381.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_788.setTransform(429.1,283.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_789.setTransform(429.1,285.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#292929").ss(0.3).p("AiKAmIEVhM");
	this.shape_790.setTransform(429.1,287.8);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#292929").ss(0.3).p("AiKAnIEVhM");
	this.shape_791.setTransform(429.1,290);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_792.setTransform(418.6,384.3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_793.setTransform(418.6,378.8);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_794.setTransform(418.6,376);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_795.setTransform(418.6,373.2);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_796.setTransform(418.6,370.5);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_797.setTransform(418.6,367.7);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_798.setTransform(418.6,364.9);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_799.setTransform(418.6,362.1);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_800.setTransform(418.6,359.3);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_801.setTransform(418.6,356.6);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_802.setTransform(418.6,353.8);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_803.setTransform(418.6,351);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_804.setTransform(418.6,348.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_805.setTransform(418.6,345.5);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_806.setTransform(418.6,342.7);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_807.setTransform(418.6,339.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_808.setTransform(418.6,337.1);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_809.setTransform(418.6,334.3);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_810.setTransform(418.6,331.6);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_811.setTransform(418.6,328.8);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_812.setTransform(418.6,326);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_813.setTransform(418.6,323.2);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_814.setTransform(418.6,320.4);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_815.setTransform(418.6,317.7);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_816.setTransform(418.6,314.9);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_817.setTransform(418.6,312.1);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_818.setTransform(418.6,309.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_819.setTransform(418.6,306.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_820.setTransform(418.6,303.8);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_821.setTransform(418.6,301);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_822.setTransform(418.6,298.2);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#292929").ss(0.3).p("AghAKIBDgT");
	this.shape_823.setTransform(418.6,295.4);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#292929").ss(0.3).p("AgNAEIAbgH");
	this.shape_824.setTransform(390.7,278.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#292929").ss(0.3).p("AAhADIhBgF");
	this.shape_825.setTransform(439.7,277.3);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#292929").ss(0.3).p("ACJA3IAAhnIkVBF");
	this.shape_826.setTransform(429.3,282.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#292929").ss(0.3).p("AiBDFIAAr0IEDA3IgBQv");
	this.shape_827.setTransform(402.3,335.1);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#292929").ss(0.3).p("AAAgvIAABf");
	this.shape_828.setTransform(436.6,274.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#292929").ss(0.3).p("AAAg1IAABr");
	this.shape_829.setTransform(413.8,279);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#292929").ss(0.3).p("AAAgpIAABT");
	this.shape_830.setTransform(391.9,275.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#292929").ss(0.3).p("AjdADIDaAaIDlgoIi9gRg");
	this.shape_831.setTransform(416,270.7,1,1,0,0,0,2,0);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_832.setTransform(403.8,391.2);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_833.setTransform(404.7,391.7);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#292929").ss(0.3).p("AgPAGIAegL");
	this.shape_834.setTransform(424.3,401);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#292929").ss(0.3).p("AgOAGIAdgL");
	this.shape_835.setTransform(425.3,401.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#292929").ss(0.3).p("AgdgNIA6gYIgZBJg");
	this.shape_836.setTransform(416.1,393.3,1,1,0,0,0,0.2,0);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#292929").ss(0.3).p("AgUAOIAlgOQAFgFAAgJIgnAOg");
	this.shape_837.setTransform(429.1,410,1,1,0,0,0,0.1,-0.2);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#292929").ss(0.3).p("AAWALIgrgV");
	this.shape_838.setTransform(412.3,404.4);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#292929").ss(0.3).p("AANAGIgZgM");
	this.shape_839.setTransform(407.5,402.1);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#292929").ss(0.3).p("AAQAcIgcgOIAAglIAcAO");
	this.shape_840.setTransform(403.5,398.1);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#292929").ss(0.3).p("AgMgFIAZAL");
	this.shape_841.setTransform(407.5,398.3);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#292929").ss(0.3).p("AgXgaIAsAWIAAAj");
	this.shape_842.setTransform(412.5,402.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#292929").ss(0.3).p("AAAAiIAAhC");
	this.shape_843.setTransform(407.4,400);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#292929").ss(0.3).p("AgMgnIAABAIAZAOIAAhCg");
	this.shape_844.setTransform(407.4,400.4,1,1,0,0,0,0,0.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_845.setTransform(409.7,389.5);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#292929").ss(0.3).p("ABJgIIgbgFIh2Ac");
	this.shape_846.setTransform(405.4,384.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#292929").ss(0.3).p("AjnhqIHQDU");
	this.shape_847.setTransform(421.4,395.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#292929").ss(0.3).p("ABBgUIiAAp");
	this.shape_848.setTransform(438.2,402.2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#292929").ss(0.3).p("AgYgMIAxAZ");
	this.shape_849.setTransform(429.2,414.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#292929").ss(0.3).p("AgZgNIAzAb");
	this.shape_850.setTransform(432.8,412.8);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#292929").ss(0.3).p("AAHgOIAWANIglAQIgVgPg");
	this.shape_851.setTransform(437.5,409.7);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#292929").ss(0.3).p("AgXgHIASgHIAWANIglAQIgEgD");
	this.shape_852.setTransform(434.6,407);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#292929").ss(0.3).p("AgIAMIgMgIIAkgOIAMAH");
	this.shape_853.setTransform(421.3,419.6);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_854.setTransform(417.7,417.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgOg");
	this.shape_855.setTransform(413.1,414.6);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#292929").ss(0.3).p("AAGgOIAXANIglAQIgVgPg");
	this.shape_856.setTransform(408.9,411.9);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#292929").ss(0.3).p("AgegfIBFAkIhZAb");
	this.shape_857.setTransform(404.3,408.3);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABX");
	this.shape_858.setTransform(410.1,401.6);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#292929").ss(0.3).p("AAAgrIAABY");
	this.shape_859.setTransform(405.1,399.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#292929").ss(0.3).p("Ah4g5IDxBz");
	this.shape_860.setTransform(413.5,407.5);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#292929").ss(0.3).p("AAEAyQANgPgCgcQgBgjgfgV");
	this.shape_861.setTransform(430.7,405.9);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#292929").ss(0.3).p("AAPghIgpAQQASASAAAfIAmgPQABgHgBgKQgDgSgMgPg");
	this.shape_862.setTransform(428.1,406.1);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#292929").ss(0.3).p("AgQgaQAkAPgCAmIgjgPg");
	this.shape_863.setTransform(423.2,407.3,1,1,0,0,0,0,0.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#292929").ss(0.3).p("AAsAYIg4AXQAJgZgDgWQgFgigggQ");
	this.shape_864.setTransform(426.9,408.5);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#292929").ss(0.3).p("AiOgiIDSBrIBBgZIj8h5");
	this.shape_865.setTransform(415.7,396.1);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#292929").ss(0.3).p("ABGAyIgBhdIiOAl");
	this.shape_866.setTransform(405.8,387.8);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#292929").ss(0.3).p("AA+gxIAAg3IhgAaIAACvIgfAJ");
	this.shape_867.setTransform(404.8,397.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#292929").ss(0.3).p("AgUAGIApgL");
	this.shape_868.setTransform(435.5,400.6);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#292929").ss(0.3).p("AjyhvIHlDf");
	this.shape_869.setTransform(420.4,390);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#292929").ss(0.3).p("AgCjdIAFG6");
	this.shape_870.setTransform(464.2,313.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#292929").ss(0.3).p("AgJgtIjLA1ICdAnIEGg0g");
	this.shape_871.setTransform(443.2,292.4);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#292929").ss(0.3).p("AAAluIAALd");
	this.shape_872.setTransform(453.9,330.2);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#292929").ss(0.3).p("AAAl1IAALq");
	this.shape_873.setTransform(452.4,331.3);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#292929").ss(0.3).p("AAAmHIAAMP");
	this.shape_874.setTransform(448.2,334.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#292929").ss(0.3).p("AAAmOIAAMd");
	this.shape_875.setTransform(446.7,335.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#292929").ss(0.3).p("AAAnUIAAOp");
	this.shape_876.setTransform(426.3,341.2);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#292929").ss(0.3).p("AAAnUIAAOp");
	this.shape_877.setTransform(427.9,341.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#292929").ss(0.3).p("AAAnYIAAOx");
	this.shape_878.setTransform(432.1,343.2);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#292929").ss(0.3).p("AAAnYIAAOx");
	this.shape_879.setTransform(433.6,343.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_880.setTransform(431.8,395.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_881.setTransform(430.9,395.2);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_882.setTransform(430.1,394.7);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_883.setTransform(429.2,394.3);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_884.setTransform(426.6,393.3);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_885.setTransform(425.8,392.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_886.setTransform(424.9,392.4);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgj");
	this.shape_887.setTransform(424.1,392.1);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#292929").ss(0.3).p("AA5AZIhxgx");
	this.shape_888.setTransform(427.6,395.4);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("#292929").ss(0.3).p("AhfgPIAygMICMA4");
	this.shape_889.setTransform(428.2,389.8);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#292929").ss(0.3).p("AAWgIIgrAR");
	this.shape_890.setTransform(435.6,393.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("#292929").ss(0.3).p("AgrgvIgdgNIACA8IAegNgABKBFIAAhDIh1gx");
	this.shape_891.setTransform(426,394.3);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#292929").ss(0.3).p("AggoFIAAQEIBFgX");
	this.shape_892.setTransform(440.9,348.8);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("#292929").ss(0.3).p("AAAnWIAAOt");
	this.shape_893.setTransform(421.9,340.3);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#292929").ss(0.3).p("AC0F+IAAp/Ilqh3");
	this.shape_894.setTransform(203.2,251.9);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("#292929").ss(0.3).p("AidhZIE4BrIAABN");
	this.shape_895.setTransform(202.1,215.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#292929").ss(0.3).p("AiGhEIEKBeIAAAw");
	this.shape_896.setTransform(200.9,208.4);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("#292929").ss(0.3).p("AjLEvIAAnpIGXiAIAAJ8");
	this.shape_897.setTransform(164.4,245.7);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#292929").ss(0.3).p("Ai4BkIAAg+IFxiBIAABW");
	this.shape_898.setTransform(167.8,215.3);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("#292929").ss(0.3).p("ACugbIgCgzIlYB9IAAAn");
	this.shape_899.setTransform(170.2,209.3);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#292929").ss(0.3).p("AgiAKIBCggIAAApIgQAI");
	this.shape_900.setTransform(164.5,183);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AghAIIBDggIgBApIgPAIg");
	this.shape_901.setTransform(164.4,183.2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_902.setTransform(163.3,178.7);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_903.setTransform(163.3,178.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#292929").ss(0.3).p("AgVAIIAogTIgBAf");
	this.shape_904.setTransform(155.3,180.8);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AgTAEIAngTIAAAfg");
	this.shape_905.setTransform(155.2,181.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_906.setTransform(163.3,172.5);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_907.setTransform(163.3,172.5);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#292929").ss(0.3).p("AgrAfIAAgXIBXgqIgBAoIhAAh");
	this.shape_908.setTransform(152.8,176.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgrAdIAAgXIBXgqIgBAoIhAAhg");
	this.shape_909.setTransform(152.8,177.1);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_910.setTransform(163.3,166.2);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_911.setTransform(163.3,166.2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_912.setTransform(152.8,171.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_913.setTransform(152.8,171.4);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_914.setTransform(163.3,160);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_915.setTransform(163.3,160);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_916.setTransform(152.8,165.1);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_917.setTransform(152.8,165.1);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_918.setTransform(163.3,153.8);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_919.setTransform(163.3,153.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_920.setTransform(152.8,158.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXArg");
	this.shape_921.setTransform(152.8,158.9);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_922.setTransform(163.3,147.5);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_923.setTransform(163.3,147.5);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_924.setTransform(152.8,152.7);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_925.setTransform(152.8,152.7);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_926.setTransform(163.3,141.3);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_927.setTransform(163.3,141.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_928.setTransform(152.8,146.4);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_929.setTransform(152.8,146.4);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_930.setTransform(163.3,135);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXAqg");
	this.shape_931.setTransform(163.3,135);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_932.setTransform(152.8,140.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_933.setTransform(152.8,140.2);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgrIBXgqg");
	this.shape_934.setTransform(163.3,128.8);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_935.setTransform(163.3,128.8);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_936.setTransform(152.8,133.9);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_937.setTransform(152.8,133.9);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_938.setTransform(163.3,122.5);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_939.setTransform(163.3,122.5);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_940.setTransform(152.8,127.6);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_941.setTransform(152.8,127.7);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_942.setTransform(163.3,116.2);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_943.setTransform(163.3,116.3);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_944.setTransform(152.8,121.4);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_945.setTransform(152.8,121.4);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_946.setTransform(211.1,201.7);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_947.setTransform(211.1,201.7);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_948.setTransform(202.4,197.6);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_949.setTransform(202.4,197.6);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_950.setTransform(193.6,193.5);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_951.setTransform(193.6,193.5);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_952.setTransform(184.8,189.4);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_953.setTransform(184.8,189.4);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_954.setTransform(176,185.4);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_955.setTransform(176,185.4);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_956.setTransform(211.1,195.4);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_957.setTransform(211.1,195.4);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_958.setTransform(202.4,191.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_959.setTransform(202.4,191.3);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_960.setTransform(193.6,187.3);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAog");
	this.shape_961.setTransform(193.6,187.3);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_962.setTransform(184.8,183.2);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_963.setTransform(184.8,183.2);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_964.setTransform(176,179.1);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAng");
	this.shape_965.setTransform(176,179.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_966.setTransform(211.1,189.2);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_967.setTransform(211.1,189.2);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_968.setTransform(202.4,185.1);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_969.setTransform(202.4,185.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_970.setTransform(193.6,181);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_971.setTransform(193.6,181);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_972.setTransform(184.8,176.9);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_973.setTransform(184.8,176.9);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_974.setTransform(176,172.8);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_975.setTransform(176,172.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_976.setTransform(211.1,182.9);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_977.setTransform(211.1,182.9);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_978.setTransform(202.4,178.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_979.setTransform(202.4,178.8);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_980.setTransform(193.6,174.7);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_981.setTransform(193.6,174.7);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_982.setTransform(184.8,170.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_983.setTransform(184.8,170.7);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_984.setTransform(176,166.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_985.setTransform(176,166.6);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_986.setTransform(211.1,176.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_987.setTransform(211.1,176.6);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_988.setTransform(202.4,172.6);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_989.setTransform(202.4,172.6);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_990.setTransform(193.6,168.5);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_991.setTransform(193.6,168.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_992.setTransform(184.8,164.4);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_993.setTransform(184.8,164.4);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_994.setTransform(176,160.3);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_995.setTransform(176,160.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_996.setTransform(211.1,170.4);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_997.setTransform(211.1,170.4);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_998.setTransform(202.4,166.3);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_999.setTransform(202.4,166.3);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1000.setTransform(193.6,162.2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1001.setTransform(193.6,162.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1002.setTransform(184.8,158.1);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1003.setTransform(184.8,158.1);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1004.setTransform(176,154.1);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1005.setTransform(176,154.1);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1006.setTransform(211.1,164.1);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1007.setTransform(211.1,164.1);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1008.setTransform(202.4,160);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1009.setTransform(202.4,160);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1010.setTransform(193.6,156);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1011.setTransform(193.6,156);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1012.setTransform(184.8,151.9);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1013.setTransform(184.8,151.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1014.setTransform(176,147.8);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1015.setTransform(176,147.8);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1016.setTransform(211.1,157.9);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1017.setTransform(211.1,157.9);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1018.setTransform(202.4,153.8);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1019.setTransform(202.4,153.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1020.setTransform(193.6,149.7);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1021.setTransform(193.6,149.7);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1022.setTransform(184.8,145.6);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIgBAog");
	this.shape_1023.setTransform(184.8,145.6);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1024.setTransform(176,141.5);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1025.setTransform(176,141.5);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1026.setTransform(211.1,151.6);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1027.setTransform(211.1,151.6);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1028.setTransform(202.4,147.5);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1029.setTransform(202.4,147.5);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1030.setTransform(193.6,143.4);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1031.setTransform(193.6,143.4);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1032.setTransform(184.8,139.3);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1033.setTransform(184.8,139.3);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1034.setTransform(176,135.3);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1035.setTransform(176,135.3);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1036.setTransform(211.1,145.3);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1037.setTransform(211.1,145.3);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1038.setTransform(202.4,141.2);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1039.setTransform(202.4,141.2);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1040.setTransform(193.6,137.2);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1041.setTransform(193.6,137.2);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1042.setTransform(184.8,133.1);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1043.setTransform(184.8,133.1);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1044.setTransform(176,129);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1045.setTransform(176,129);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1046.setTransform(211.1,139.1);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1047.setTransform(211.1,139.1);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1048.setTransform(202.4,135);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1049.setTransform(202.4,135);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1050.setTransform(193.6,130.9);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1051.setTransform(193.6,130.9);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1052.setTransform(184.8,126.8);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1053.setTransform(184.8,126.8);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1054.setTransform(176,122.7);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1055.setTransform(176,122.7);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1056.setTransform(211.1,132.8);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1057.setTransform(211.1,132.8);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1058.setTransform(202.4,128.7);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1059.setTransform(202.4,128.7);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1060.setTransform(193.6,124.6);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1061.setTransform(193.6,124.6);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1062.setTransform(184.8,120.5);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1063.setTransform(184.8,120.6);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1064.setTransform(176,116.5);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1065.setTransform(176,116.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1066.setTransform(211.1,126.5);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1067.setTransform(211.1,126.5);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1068.setTransform(202.4,122.5);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAog");
	this.shape_1069.setTransform(202.4,122.5);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1070.setTransform(193.6,118.4);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1071.setTransform(193.6,118.4);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1072.setTransform(184.8,114.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1073.setTransform(184.8,114.3);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1074.setTransform(176,110.2);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1075.setTransform(176,110.2);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1076.setTransform(211.1,120.3);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1077.setTransform(211.1,120.3);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1078.setTransform(202.4,116.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1079.setTransform(202.4,116.2);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1080.setTransform(193.6,112.1);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1081.setTransform(193.6,112.1);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1082.setTransform(184.8,108);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1083.setTransform(184.8,108);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1084.setTransform(176,104);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAng");
	this.shape_1085.setTransform(176,104);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1086.setTransform(211.1,114);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1087.setTransform(211.1,114);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1088.setTransform(202.4,109.9);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1089.setTransform(202.4,109.9);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1090.setTransform(193.6,105.9);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1091.setTransform(193.6,105.9);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1092.setTransform(184.8,101.8);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1093.setTransform(184.8,101.8);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1094.setTransform(176,97.7);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1095.setTransform(176,97.7);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1096.setTransform(211.1,107.8);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1097.setTransform(211.1,107.8);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1098.setTransform(202.4,103.7);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1099.setTransform(202.4,103.7);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1100.setTransform(193.6,99.6);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1101.setTransform(193.6,99.6);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAlIABgoIhJgkg");
	this.shape_1102.setTransform(184.8,95.5);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1103.setTransform(184.8,95.5);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1104.setTransform(176,91.4);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1105.setTransform(176,91.4);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1106.setTransform(211.1,101.5);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1107.setTransform(211.1,101.5);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1108.setTransform(202.4,97.4);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1109.setTransform(202.4,97.4);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1110.setTransform(193.6,93.3);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1111.setTransform(193.6,93.3);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1112.setTransform(184.8,89.2);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1113.setTransform(184.8,89.2);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1114.setTransform(176,85.2);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1115.setTransform(176,85.2);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1116.setTransform(211.1,95.2);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1117.setTransform(211.1,95.2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1118.setTransform(202.4,91.1);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1119.setTransform(202.4,91.1);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1120.setTransform(193.6,87.1);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1121.setTransform(193.6,87.1);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1122.setTransform(184.8,83);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1123.setTransform(184.8,83);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJglg");
	this.shape_1124.setTransform(176,78.9);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1125.setTransform(176,78.9);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1126.setTransform(211.1,89);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1127.setTransform(211.1,89);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1128.setTransform(202.4,84.9);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1129.setTransform(202.4,84.9);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAlIAAgoIhJgkg");
	this.shape_1130.setTransform(193.6,80.8);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("AgkACIAAgoIBJAlIAAAog");
	this.shape_1131.setTransform(193.6,80.8);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#292929").ss(0.3).p("AgkACIBIAkIABgnIhJgkg");
	this.shape_1132.setTransform(184.8,76.7);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIgBAng");
	this.shape_1133.setTransform(184.8,76.7);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#292929").ss(0.3).p("AgkACIBJAkIAAgnIhJgkg");
	this.shape_1134.setTransform(176,72.6);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AgkACIAAgnIBJAkIAAAng");
	this.shape_1135.setTransform(176,72.6);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXArIAAgqIBXgqg");
	this.shape_1136.setTransform(163.3,110);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1137.setTransform(163.3,110);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1138.setTransform(152.8,115.2);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1139.setTransform(152.8,115.2);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1140.setTransform(163.3,103.8);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1141.setTransform(163.3,103.8);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1142.setTransform(152.8,108.9);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1143.setTransform(152.8,108.9);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1144.setTransform(163.3,97.5);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1145.setTransform(163.3,97.5);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1146.setTransform(152.8,102.7);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1147.setTransform(152.8,102.7);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1148.setTransform(163.3,91.3);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1149.setTransform(163.3,91.3);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgpIBXgqg");
	this.shape_1150.setTransform(152.8,96.4);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1151.setTransform(152.8,96.4);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1152.setTransform(163.3,85.1);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXAqg");
	this.shape_1153.setTransform(163.3,85.1);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1154.setTransform(152.8,90.2);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1155.setTransform(152.8,90.2);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1156.setTransform(163.3,78.8);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgrAAIBXgpIAAApIhXAqg");
	this.shape_1157.setTransform(163.3,78.8);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1158.setTransform(152.8,84);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFFFFF").s().p("AgrABIBXgqIAAApIhXAqg");
	this.shape_1159.setTransform(152.8,84);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1160.setTransform(163.3,72.6);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFFFFF").s().p("AgrABIBXgrIAAAqIhXArg");
	this.shape_1161.setTransform(163.3,72.6);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#292929").ss(0.3).p("AAsAAIhXAqIAAgqIBXgqg");
	this.shape_1162.setTransform(152.8,77.7);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFFFFF").s().p("AgrAAIBXgqIAAAqIhXArg");
	this.shape_1163.setTransform(152.8,77.7);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#292929").ss(0.3).p("AlgJ0IAAxfIDviCIHSDrIAAGT");
	this.shape_1164.setTransform(181.3,116.5);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFFFFF").s().p("AlgnuIDviCIHSDrIAAGTIrBJjg");
	this.shape_1165.setTransform(181.3,116.8);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#292929").ss(0.3).p("AKSAaImAieIuqCnICMBig");
	this.shape_1166.setTransform(311.1,331.8);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFFFFF").s().p("AqUAjIOpinIGBCeIyeBrg");
	this.shape_1167.setTransform(310.8,331.9);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#292929").ss(0.3).p("Ag3gXIBvAv");
	this.shape_1168.setTransform(284.6,346.8);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().s("#292929").ss(0.3).p("AlkAxILIhg");
	this.shape_1169.setTransform(326.2,344.5);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#292929").ss(0.3).p("AJPgtIiWgOIwHB4");
	this.shape_1170.setTransform(317.8,339.1);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f().s("#292929").ss(0.3).p("Ak0jhIJqHD");
	this.shape_1171.setTransform(265.9,387.9);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#292929").ss(0.3).p("ADRChImhlB");
	this.shape_1172.setTransform(255.9,375.4);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#292929").ss(0.3).p("ADuCIIg2AJImjki");
	this.shape_1173.setTransform(258.5,362.5);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#292929").ss(0.3).p("ADuCJIg2AJImjkl");
	this.shape_1174.setTransform(258.6,358.4);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f().s("#292929").ss(0.3).p("AD+CBIhXASImikm");
	this.shape_1175.setTransform(260.2,352.2);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FFFFFF").s().p("Aj8iSIH5EUIhXASg");
	this.shape_1176.setTransform(260.3,352.1);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f().s("#292929").ss(0.3).p("AjyiVIGhEqIBGgQ");
	this.shape_1177.setTransform(259.3,345.3);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FFFFFF").s().p("AjziVIHnEaIhGARg");
	this.shape_1178.setTransform(259.4,345.3);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f().s("#292929").ss(0.3).p("AFZBAIjMh+InnA+");
	this.shape_1179.setTransform(269.8,318.1);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FFFFFF").s().p("AlZAAIHog+IDLB9g");
	this.shape_1180.setTransform(269.7,318.2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f().s("#292929").ss(0.3).p("AFyBMIj/iXInnA2");
	this.shape_1181.setTransform(272.5,316.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FFFFFF").s().p("AlzgVIHng2IEACXg");
	this.shape_1182.setTransform(272.4,316.1);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#292929").ss(0.3).p("ABjBDIjFiF");
	this.shape_1183.setTransform(244.9,326.6);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#292929").ss(0.3).p("ABGAwIiLhf");
	this.shape_1184.setTransform(241.9,329.9);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#292929").ss(0.3).p("AA6ARIgeAHIhTgw");
	this.shape_1185.setTransform(274.4,346.8);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FFFFFF").s().p("Ag4gYIBxAqIgeAHg");
	this.shape_1186.setTransform(274.5,346.8);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#292929").ss(0.3).p("AhIgsICRBZ");
	this.shape_1187.setTransform(269.6,349.4);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#292929").ss(0.3).p("AArCyIhRAQIAAl4IAugM");
	this.shape_1188.setTransform(280.7,372.1);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#292929").ss(0.3).p("Ag4iDIAACsIB0BX");
	this.shape_1189.setTransform(290.7,391.4);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#292929").ss(0.3).p("AAAgcIAAA5");
	this.shape_1190.setTransform(311.4,394.8);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#292929").ss(0.3).p("AAAgeIAAA9");
	this.shape_1191.setTransform(316,393.5);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#292929").ss(0.3).p("AFvhOIAVAMIp6CQIiYhg");
	this.shape_1192.setTransform(359.6,388.9);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#292929").ss(0.3).p("AgsAHIBagN");
	this.shape_1193.setTransform(299.4,370.3);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#292929").ss(0.3).p("AgwAHIBhgN");
	this.shape_1194.setTransform(299,365.9);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#292929").ss(0.3).p("Ag2AHIBtgN");
	this.shape_1195.setTransform(298.4,361.5);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#292929").ss(0.3).p("Ag6AHIB0gN");
	this.shape_1196.setTransform(298.1,357.1);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#292929").ss(0.3).p("Ag9AHIB7gN");
	this.shape_1197.setTransform(297.7,352.7);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#292929").ss(0.3).p("AgogTIBRAn");
	this.shape_1198.setTransform(290.9,369.1);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#292929").ss(0.3).p("AgtgVIBbAr");
	this.shape_1199.setTransform(289.2,363.5);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#292929").ss(0.3).p("Ag0gZIBpAz");
	this.shape_1200.setTransform(287.1,355.9);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#292929").ss(0.3).p("AlngjIHUhJID7CBInbBXg");
	this.shape_1201.setTransform(350.4,354.6,1,1,0,0,0,0.6,0);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#292929").ss(0.3).p("AHPgPIpXB4IlEjS");
	this.shape_1202.setTransform(350,376);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#292929").ss(0.3).p("AHPgPIpXB4IlEjS");
	this.shape_1203.setTransform(350,368.4);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#292929").ss(0.3).p("AHXhcIllivIpCBUIFEDSIJjh3IABgBIgNBDIAACgIpeCGIighmIAAAwIiGArIAAAP");
	this.shape_1204.setTransform(350.4,367.7);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#292929").ss(0.3).p("Ah3hvIAAAqIDuCrIAAgz");
	this.shape_1205.setTransform(294.3,383.2);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#292929").ss(0.3).p("AiAhVIg4AHIDtCjICGgpIidhu");
	this.shape_1206.setTransform(300.9,379.9);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#292929").ss(0.3).p("AhVieIBcEVIBNApIhClH");
	this.shape_1207.setTransform(287.3,359.4);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#292929").ss(0.3).p("AGcBaIlGiyInuAsIAAAv");
	this.shape_1208.setTransform(275.8,313.5);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FFFFFF").s().p("AmaADIAAgwIHugrIFHCxg");
	this.shape_1209.setTransform(276,313.5);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#292929").ss(0.3).p("AAniuIAAFDIhRAW");
	this.shape_1210.setTransform(300,358.4);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#292929").ss(0.3).p("AluAqILdhT");
	this.shape_1211.setTransform(326.5,341.7);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#292929").ss(0.3).p("AAAgRIAAAj");
	this.shape_1212.setTransform(360.7,345.5);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#292929").ss(0.3).p("AEyA2IjAhqImlBD");
	this.shape_1213.setTransform(349.3,352.3);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FFFFFF").s().p("AkyAOIGlhCIDABpg");
	this.shape_1214.setTransform(349.2,352.4);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#292929").ss(0.3).p("AAAgeIAAA9");
	this.shape_1215.setTransform(319.6,392.2);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#292929").ss(0.3).p("AgRAbIAjg1");
	this.shape_1216.setTransform(362.8,338.3);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#292929").ss(0.3).p("AAAAnIAAhO");
	this.shape_1217.setTransform(334.8,400.7);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1218.setTransform(293.4,464.4);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIAMAF");
	this.shape_1219.setTransform(265.6,478.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#292929").ss(0.3).p("AgFgCIALAF");
	this.shape_1220.setTransform(257.8,481);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1221.setTransform(293.4,450.4);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1222.setTransform(275.4,457);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#292929").ss(0.3).p("AAAgfIAAA/");
	this.shape_1223.setTransform(252.7,489.5);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgJAAgM");
	this.shape_1224.setTransform(128.9,419.6);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgIAAgN");
	this.shape_1225.setTransform(136.4,427.8);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#292929").ss(0.3).p("AAnAPQgfgCgUgKQgVgIAAgN");
	this.shape_1226.setTransform(143.7,435.5);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#292929").ss(0.3).p("AA1AOIgRAAQgjAAgYgKQgYgJAAgN");
	this.shape_1227.setTransform(152.6,443.4);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#292929").ss(0.3).p("AAmAUQghgHgSgMQgUgLAAgO");
	this.shape_1228.setTransform(236.5,505.7);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#292929").ss(0.3).p("AA9AVQgwAAgigOQgjgNAAgT");
	this.shape_1229.setTransform(163.5,464.2);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_1230.setTransform(175.6,475.7);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_1231.setTransform(187.6,487.5);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#292929").ss(0.3).p("AA+AXQgzgCghgPQgjgNAAgU");
	this.shape_1232.setTransform(199.6,499.9);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#292929").ss(0.3).p("ACIgbQAAAVgoAOQgoAPg4AAQg4AAgogPQgogOAAgV");
	this.shape_1233.setTransform(219.5,509.6);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#292929").ss(0.3).p("AAAiUIAAEp");
	this.shape_1234.setTransform(256.4,437.6);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#292929").ss(0.3).p("AAAAtIAAhZ");
	this.shape_1235.setTransform(273,441.8);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#292929").ss(0.3).p("AAAA2IAAhr");
	this.shape_1236.setTransform(271.3,441.3);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f().s("#292929").ss(0.3).p("AASgYIgjAx");
	this.shape_1237.setTransform(266.5,435.6);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#292929").ss(0.3).p("AATgYIglAx");
	this.shape_1238.setTransform(261.3,442.5);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#292929").ss(0.3).p("AgaAlIA1hJ");
	this.shape_1239.setTransform(262.2,445);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("#292929").ss(0.3).p("AgQAYIAhgv");
	this.shape_1240.setTransform(268,437);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f().s("#292929").ss(0.3).p("Ag7gfIB1BWIAAgZIh1ha");
	this.shape_1241.setTransform(265.4,440.1);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("#292929").ss(0.3).p("AgjAwIBHhg");
	this.shape_1242.setTransform(224.9,376.7);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f().s("#292929").ss(0.3).p("AgiA1IBFhp");
	this.shape_1243.setTransform(228.7,379.5);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("#292929").ss(0.3).p("AgjA3IBHht");
	this.shape_1244.setTransform(232.7,382.6);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_1245.setTransform(232.3,405.4);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("#292929").ss(0.3).p("AgQAHIAAglIAhAeIAAAq");
	this.shape_1246.setTransform(162.2,378.4);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1247.setTransform(157.4,373.6);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1248.setTransform(152.7,368.8);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1249.setTransform(147.9,364);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#292929").ss(0.3).p("AgQAIIAAgmIAhAeIAAAq");
	this.shape_1250.setTransform(143.2,359.2);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f().s("#292929").ss(0.3).p("ACoCbQgWAFgPgGQgJgFgPgOIkBj+QgKgLgCgHQgEgKAHgK");
	this.shape_1251.setTransform(141.8,371.7);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("#292929").ss(0.3).p("ACoCxQggAGgWgWIkCj+QgbgcAMgVQAJgRAlgJQAwgMAsAD");
	this.shape_1252.setTransform(141.1,371.1);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#292929").ss(0.3).p("AhcBDIC2gyIAAhSIi2An");
	this.shape_1253.setTransform(232.6,419.6);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#F7F6F7").s().p("AhagbIC1gmIAABRIi1Ayg");
	this.shape_1254.setTransform(232.5,419.6);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#292929").ss(0.3).p("AAmAUQghgHgSgMQgUgLAAgO");
	this.shape_1255.setTransform(236.5,505);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("#292929").ss(0.3).p("AgtgeQAnAFAXANQAYANAAARQAAAHgFAH");
	this.shape_1256.setTransform(217,395.1);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#292929").ss(0.3).p("AgvgeQAoAEAZAMQAaAMAAAPQAAAKgKAI");
	this.shape_1257.setTransform(227.9,402.8);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("#292929").ss(0.3).p("ACJAAQAAAVgoAPQgoAPg5AAQg3AAgogPQgogPAAgVQAAgUAogPQAogPA3AAQA5AAAoAPQAoAPAAAUg");
	this.shape_1258.setTransform(238.3,420.1);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#292929").ss(0.3).p("AAAGJIAAsR");
	this.shape_1259.setTransform(233.1,466.8);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("#292929").ss(0.3).p("AAAkbIAAI3");
	this.shape_1260.setTransform(125.5,388.8);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f().s("#292929").ss(0.3).p("AAAkeIAAI9");
	this.shape_1261.setTransform(132.9,396.7);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#292929").ss(0.3).p("AAAkgIAAJB");
	this.shape_1262.setTransform(140.3,404);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f().s("#292929").ss(0.3).p("AAAEkIAApG");
	this.shape_1263.setTransform(147.8,411.7);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgJAAgM");
	this.shape_1264.setTransform(128.9,419.1);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgWgIAAgN");
	this.shape_1265.setTransform(136.4,427.3);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#292929").ss(0.3).p("AAnAOQgfgBgUgKQgVgJAAgN");
	this.shape_1266.setTransform(143.7,434.9);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#292929").ss(0.3).p("AA1AOIgRAAQgjAAgYgKQgYgJAAgN");
	this.shape_1267.setTransform(152.6,442.8);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#292929").ss(0.3).p("AAAloIAALR");
	this.shape_1268.setTransform(157.8,425.1);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("#292929").ss(0.3).p("AAAlyIAALl");
	this.shape_1269.setTransform(169.8,435.7);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#292929").ss(0.3).p("AAAl/IAAL/");
	this.shape_1270.setTransform(181.8,446.6);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("#292929").ss(0.3).p("AAAmIIAAMR");
	this.shape_1271.setTransform(193.8,457.2);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#292929").ss(0.3).p("AAAGJIAAsR");
	this.shape_1272.setTransform(205.8,466.8);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("#292929").ss(0.3).p("AFvDRIo3mfIipAN");
	this.shape_1273.setTransform(204.4,392);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#F7F6F7").s().p("AlwjCICqgNII3Gfg");
	this.shape_1274.setTransform(204.3,392.1);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#292929").ss(0.3).p("AEWEOIAAhnIorm1IAABHg");
	this.shape_1275.setTransform(195.2,399.8);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#F7F6F7").s().p("AkVjHIAAhHIIrG1IAABng");
	this.shape_1276.setTransform(195.2,399.8);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#292929").ss(0.3).p("AA9AVQgwAAgigOQgjgNAAgT");
	this.shape_1277.setTransform(163.5,463.4);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgOQgjgOAAgU");
	this.shape_1278.setTransform(175.6,474.9);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("#292929").ss(0.3).p("AA/AXQg0gCghgPQgjgNAAgU");
	this.shape_1279.setTransform(187.6,486.7);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#292929").ss(0.3).p("AA+AXQgzgCghgPQgjgNAAgU");
	this.shape_1280.setTransform(199.6,499.2);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("#292929").ss(0.3).p("ACIgbQAAAVgoAOQgoAPg4AAQg3AAgpgPQgogOAAgV");
	this.shape_1281.setTransform(219.5,508.9);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAWgoAPQgoAPg4AAQg4AAgogPQgogPAAgWQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_1282.setTransform(171.5,389);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAWgoAPQgoAPg4AAQg4AAgogPQgogPAAgWQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_1283.setTransform(183.5,398.6);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgVAogPQAogPA4AAQA4AAAoAPQAoAPAAAVg");
	this.shape_1284.setTransform(195.5,408.3);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgVAogPQAogPA4AAQA4AAAoAPQAoAPAAAVg");
	this.shape_1285.setTransform(207.5,417.9);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("#292929").ss(0.3).p("ACIAAQAAAVgoAPQgoAPg4AAQg4AAgogPQgogPAAgVQAAgUAogPQAogPA4AAQA4AAAoAPQAoAPAAAUg");
	this.shape_1286.setTransform(219.5,427.6);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f().s("#292929").ss(0.3).p("AASAiQgSAGgRgGIAAhEQARAFASgFg");
	this.shape_1287.setTransform(212.6,380.1);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#292929").ss(0.3).p("AEcEqIo1nwIAAhn");
	this.shape_1288.setTransform(249.1,411.4);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#292929").ss(0.3).p("AEECYIhXCJIoknnIBJhbII4GRIBrCIIgeAAgAF1D4IgYgGIhUhhIgFAH");
	this.shape_1289.setTransform(257.1,399.4);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1290.setTransform(185.5,363.7);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#292929").ss(0.3).p("AAAhuIAADd");
	this.shape_1291.setTransform(204.2,375.8);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f().s("#292929").ss(0.3).p("AiJAvICHh/ICMBOQABAagjAXQggAVgxAJQgxAKgrgHQgvgHgVgag");
	this.shape_1292.setTransform(217.9,360);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#292929").ss(0.3).p("AiFixIAABQIEMEQ");
	this.shape_1293.setTransform(152.3,367.1);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f().s("#292929").ss(0.3).p("AgbiUQgQAKgpgCQgqgDgTAMIEoEZ");
	this.shape_1294.setTransform(153.1,361.9);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#292929").ss(0.3).p("ACIgkIAAEqIkPjsIAAkp");
	this.shape_1295.setTransform(163.9,344.4);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f().s("#292929").ss(0.3).p("AgMALQgCgUAOAAQANgBAAAZ");
	this.shape_1296.setTransform(247.8,422.3);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#292929").ss(0.3).p("AgMALQgCgTAOgBQANgBAAAZ");
	this.shape_1297.setTransform(243.1,423.4);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1298.setTransform(246.7,454.8);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1299.setTransform(246.7,453.4);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1300.setTransform(246.7,452);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1301.setTransform(246.7,450.6);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1302.setTransform(246.7,449.2);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1303.setTransform(246.7,447.8);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1304.setTransform(246.7,446.3);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1305.setTransform(246.7,444.9);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1306.setTransform(246.7,443.5);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1307.setTransform(246.7,442.1);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1308.setTransform(246.7,440.7);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1309.setTransform(246.7,439.3);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1310.setTransform(246.7,437.9);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1311.setTransform(246.7,436.4);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1312.setTransform(246.7,435);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1313.setTransform(246.7,433.6);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1314.setTransform(246.7,432.2);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1315.setTransform(246.7,430.8);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1316.setTransform(246.7,429.4);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1317.setTransform(246.7,428);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1318.setTransform(246.7,426.6);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("#292929").ss(0.3).p("AgWAFIAtgJ");
	this.shape_1319.setTransform(246.7,425.1);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f().s("#292929").ss(0.3).p("AABCeIgBk7");
	this.shape_1320.setTransform(249.2,439.7);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("#292929").ss(0.3).p("AAAChIAAlB");
	this.shape_1321.setTransform(244.4,441);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f().s("#292929").ss(0.3).p("AAACvIAAld");
	this.shape_1322.setTransform(252.1,436.7);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#292929").ss(0.3).p("AAAiCIAAEF");
	this.shape_1323.setTransform(259.4,438.4);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#292929").ss(0.3).p("AAAiIIAAER");
	this.shape_1324.setTransform(258.3,438.1);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#292929").ss(0.3).p("AAACcIAAk3");
	this.shape_1325.setTransform(255.6,437.4);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f().s("#292929").ss(0.3).p("AAaAiIgvASIgEhcIAwgMg");
	this.shape_1326.setTransform(284,430.4);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("#292929").ss(0.3).p("AA1gJIhpAT");
	this.shape_1327.setTransform(283.1,421.8);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#292929").ss(0.3).p("AhBhJIAICiIB6gyIAAiH");
	this.shape_1328.setTransform(283.4,432.2);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#292929").ss(0.3).p("AgnA9IBPh5");
	this.shape_1329.setTransform(240.5,388.9);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f().s("#292929").ss(0.3).p("AgnA9IBPh5");
	this.shape_1330.setTransform(244.5,392);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("#292929").ss(0.3).p("AgpBAIBTh/");
	this.shape_1331.setTransform(248.4,395.2);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f().s("#292929").ss(0.3).p("AgqBCIBWiD");
	this.shape_1332.setTransform(252.4,398.3);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#292929").ss(0.3).p("AgsBFIBZiJ");
	this.shape_1333.setTransform(256.4,401.5);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("#292929").ss(0.3).p("AguBHIBdiN");
	this.shape_1334.setTransform(260.4,404.6);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().s("#292929").ss(0.3).p("AgvBJIBfiR");
	this.shape_1335.setTransform(264.3,407.7);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#292929").ss(0.3).p("AgxBMIBjiX");
	this.shape_1336.setTransform(268.2,410.8);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#292929").ss(0.3).p("AgzBPIBnid");
	this.shape_1337.setTransform(272.2,414);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#292929").ss(0.3).p("Ag0BQIBpif");
	this.shape_1338.setTransform(276.1,417.2);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#292929").ss(0.3).p("AglA5IBLhx");
	this.shape_1339.setTransform(236.6,385.8);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1340.setTransform(226.1,337.4);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1341.setTransform(226.1,323.3);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("#292929").ss(0.3).p("AAWAnIgqAAIAAhNIAqAAg");
	this.shape_1342.setTransform(202.5,309.2);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1343.setTransform(226.1,309.2);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("#292929").ss(0.3).p("AANAiIgXgUIgCgvIAYATg");
	this.shape_1344.setTransform(172.3,342.9,1,1,0,0,0,0,-0.3);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#292929").ss(0.3).p("AAQA9IgfgcIAAhdIAfAdg");
	this.shape_1345.setTransform(188.3,323.2,1,1,0,0,0,0,-0.4);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("#292929").ss(0.3).p("AAQA9IgfgdIAAhcIAfAcg");
	this.shape_1346.setTransform(188.3,302.9,1,1,0,0,0,0,-0.4);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().s("#292929").ss(0.3).p("AAPA6IgdgbIAAhYIAdAbg");
	this.shape_1347.setTransform(182.1,298.2,1,1,0,0,0,0,-0.4);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagYIAAhXIAaAZg");
	this.shape_1348.setTransform(176.2,293.2,1,1,0,0,0,0,-0.4);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagZIAAhWIAaAYg");
	this.shape_1349.setTransform(170.8,309.8,1,1,0,0,0,0,-0.4);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("#292929").ss(0.3).p("AAOA4IgagZIAAhWIAaAYg");
	this.shape_1350.setTransform(170.8,289.2,1,1,0,0,0,0,-0.4);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("#292929").ss(0.3).p("ADkBwIiuATIkOjrICiga");
	this.shape_1351.setTransform(172.1,327.7);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f().s("#292929").ss(0.3).p("ABYhcIAAGXIkZjzIAAmIIGIAW");
	this.shape_1352.setTransform(186.1,307.3);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("#292929").ss(0.3).p("AlYhyIEaDkIGLgMIkcjA");
	this.shape_1353.setTransform(201.2,286.7);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYAUg");
	this.shape_1354.setTransform(170.8,360,1,1,0,0,0,0,-0.3);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgwIAYAUg");
	this.shape_1355.setTransform(166.6,352.1,1,1,0,0,0,0,-0.3);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAXATg");
	this.shape_1356.setTransform(160.9,347.3,1,1,0,0,0,0,-0.3);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYAUg");
	this.shape_1357.setTransform(155.1,342.6,1,1,0,0,0,0,-0.3);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgwIAYAUg");
	this.shape_1358.setTransform(166.6,338.1,1,1,0,0,0,0,-0.3);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgTIgBgwIAXAUg");
	this.shape_1359.setTransform(160.9,333.3,1,1,0,0,0,0,-0.3);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f().s("#292929").ss(0.3).p("AANAiIgYgUIgBgvIAYATg");
	this.shape_1360.setTransform(155.1,328.6,1,1,0,0,0,0,-0.3);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("#292929").ss(0.3).p("AAVAnIgpAAIAAhNIApAAg");
	this.shape_1361.setTransform(185.5,349.7);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#292929").ss(0.3).p("AAAhGIAACN");
	this.shape_1362.setTransform(231.7,366.8);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#292929").ss(0.3).p("AAAmKIAAMW");
	this.shape_1363.setTransform(234.5,336.5);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#292929").ss(0.3).p("AkWj0IIrGWIAABX");
	this.shape_1364.setTransform(262.4,394.1);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#292929").ss(0.3).p("AgWAJIAtgR");
	this.shape_1365.setTransform(287.7,411.6);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#292929").ss(0.3).p("AgIABIANgDIAAAM");
	this.shape_1366.setTransform(230.9,293.8);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#FFFFFF").s().p("AgGgBIANgFIAAANg");
	this.shape_1367.setTransform(230.7,294.2);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#292929").ss(0.3).p("AANAAQAAgBgBgBQgCgBgDAAIgKgBIgFABQgEABAAAEQAAACABAF");
	this.shape_1368.setTransform(510,474.6);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#292929").ss(0.3).p("AgHgFQAGABADAEQADAFgBAG");
	this.shape_1369.setTransform(506.6,481.9);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#292929").ss(0.3).p("AgLgJQABgFAHACQAIADAFAJQAEAIgDAJ");
	this.shape_1370.setTransform(511,478.1);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#292929").ss(0.3).p("AgIgDQAFAAADADQAEADABAF");
	this.shape_1371.setTransform(508.9,479.3);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#292929").ss(0.3).p("AAOgFQgJgDgHAGQgHAFAAAJ");
	this.shape_1372.setTransform(503.8,476.6);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#292929").ss(0.3).p("AgJAGQgDgCACgDQABgBADgCQAGgDADAAQAGAAACAF");
	this.shape_1373.setTransform(509.7,470.8);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#292929").ss(0.3).p("AAMAEQgIgFgDAAQgIgBgCAF");
	this.shape_1374.setTransform(502,470.5);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#292929").ss(0.3).p("AAQAEQABgGgJgCQgGgCgHAEQgLAEABAI");
	this.shape_1375.setTransform(500,467.8);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#292929").ss(0.3).p("AgPAMQAAgGAFgEQADgDAHgDQADgCADAAQAGAAAGAG");
	this.shape_1376.setTransform(497.4,464.3);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#292929").ss(0.3).p("AATgKQgEgEgHADQgJADgIAIQgGAHgDAK");
	this.shape_1377.setTransform(496.4,460);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#292929").ss(0.3).p("AgOAMQAFgKAIgHIAEgDQAGgBAHAI");
	this.shape_1378.setTransform(492.6,465);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#292929").ss(0.3).p("AgKALQAAgKAHgDQADgDADABQAFAAACAD");
	this.shape_1379.setTransform(492.3,469.1);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#292929").ss(0.3).p("AANgNQgBgDgEAAIgFADQgIAFgEAHQgGAJAEAI");
	this.shape_1380.setTransform(495.3,474.6);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#292929").ss(0.3).p("AgMAHQAAgCADgCIAHgEQAEgEADgBQAGgBACAF");
	this.shape_1381.setTransform(497,476.8);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#292929").ss(0.3).p("AARAIIgHgIQgCgEgDAAQgCgBgDABQgKADgGAG");
	this.shape_1382.setTransform(493.8,479);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#292929").ss(0.3).p("AANgBQgDgEgFgBQgEAAgDACQgHAEgDAL");
	this.shape_1383.setTransform(499.1,479.7);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#292929").ss(0.3).p("AAHgIQABgCgDAAQgBABgBAAQgDAEgEAFQgEAIAEAE");
	this.shape_1384.setTransform(500,484.9);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#292929").ss(0.3).p("AgPAJQgCgDADgEQACgCAEgCQAHgDAIgDQAIgCACAE");
	this.shape_1385.setTransform(496.5,482.9);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#292929").ss(0.3).p("AgNAHQgBAAAAgCIACgDQAHgEAFgCQAEgCACAAQAEgBAHAG");
	this.shape_1386.setTransform(492.1,482);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#292929").ss(0.3).p("AAKAFQAAgDgDgCQgDgBgEAAQgEAAgHAF");
	this.shape_1387.setTransform(492.1,485.9);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#292929").ss(0.3).p("AgQAOQgEgDAFgGQAHgIAIgGQAMgHAHAG");
	this.shape_1388.setTransform(484.8,482.9);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#292929").ss(0.3).p("AgQAKQAEgKAKgEQAEgDAGACQAFABAFAG");
	this.shape_1389.setTransform(481.1,487);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#292929").ss(0.3).p("AAOgKQgEgDgHADQgDABgFAFQgKAJACAL");
	this.shape_1390.setTransform(485.7,489.4);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#292929").ss(0.3).p("AgPAEQAHgIAKABQAGAAAEADQAEAEAAAF");
	this.shape_1391.setTransform(482.5,492.3);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#292929").ss(0.3).p("AgEA2QgCgnADggQACgXAJgJ");
	this.shape_1392.setTransform(496.4,491.1);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#292929").ss(0.3).p("AgBAuQAGgjgEgjQgBgNgCgE");
	this.shape_1393.setTransform(493.3,493.4);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#292929").ss(0.3).p("AAJAAQgBAAgCAAQgCACgEgBIgEgBQgDAAgBAA");
	this.shape_1394.setTransform(491.4,488.9);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#292929").ss(0.3).p("AAAgZQgCAaAEAd");
	this.shape_1395.setTransform(484.9,499.1);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#292929").ss(0.3).p("AABglQAFAlgIAi");
	this.shape_1396.setTransform(482.8,500.4);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#292929").ss(0.3).p("AA6CfQAJgHAEgLQAEgKgCgLQAGgBAEgFQAEgGgBgGQAGgIgCgLQgDgLgJgFQAQgHgFgHQgJgIgPgDQAGgCACgLQADgLgDgHQgDgDAAgCIAAgIQAAgIgFgHQgFgHgIgBQACgDAAgDIgOADQAGgJgGgMQgEgIgKgHQAHgBADgHQAEgHgDgHQgCgIgQgOQgDgDgBgCQgBgBAAgEQAAgLgJgWQgDgGgCgBQgGAAgBAKIgEAjQgKACgBAJQgMgCgHAFQgFADgCAEQgCAFABAFQgJAEgDADQgFAIAEAFQgNAGADAIIACADQADAGgIAGQgEADgCABQgDADgCADQgFAJAKAPQAEAGABADIgBAHQgCALgEAIIgBADQAAACAFACQAFACABAHQABAGgEAEQgEACgBACIgBAFQAAABgFAKQgHARALAP");
	this.shape_1397.setTransform(497.9,467.1);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#292929").ss(0.3).p("AAeBUQABABACgBQAEgFgBgIQgCgHgGgDQAGgGgBgIIgBgFIACgEQAEgIABgFQABgFgBgIQgDgJgNAJQgEgCgEADQACgEACgHIAAgCIgDgCQAAgBAAgDQADgLgDgMIgBgCIgFgDQgDgCgDgDQgMgJgGgJQgCgEACgKQABgJgEgDQgEgDgKAMQgIALABgC");
	this.shape_1398.setTransform(512.3,471.5);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#292929").ss(0.3).p("AANglQgBAFgCACQAAAAgGADQgGAEgBAFQgBAFAAABQgBABgCADQgIAIAFAJQACAEAAACIgCAFQgBABAEAFIAEAFIAAAI");
	this.shape_1399.setTransform(507.1,468.5);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#292929").ss(0.3).p("ABFBhQAKgIgDgOQgCgNgNgEQAIgKgFgOQgFgPgNgDQAMgKABgIQABgKgIgGQgJgHgKABQgDABgCgCQgBAAgBgDIgHgOQgBgBgFgFQgCgDACgDQADgIgCAAQgFAAAAgCQgDgNgDgHQgDgMgGAAQgIAAAAANQAAASgCADQgDAHgGAIQgEAHAGAGQgIACgDAJIgCAGIgHAHQgGAGgDAIQgCAJACAIQgGgBgJAPQgKASABAX");
	this.shape_1400.setTransform(496,475.7);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#292929").ss(0.3).p("AghASIACACQAIACAHgDQAIgEgBgJQAFABAEgDQAFgDADgEQADgHABgKQAAgCAAgCAAMgUQAAAFADAFQAEAGAGADQAHABAAAE");
	this.shape_1401.setTransform(495.6,486.9);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#292929").ss(0.3).p("ABEAeQACAMgEAIQgCAEgFADQgFADgEgBQAEALgJALQgIALgMgCQACAHgEAHQgDAGgHACQgDABgMABQgKAAgEAFQgJgKABgNQgNABgKgJQgLgKABgNQgIgFgCgLQgCgKAEgJQADgFAAgDQABgCgCgIQgBgNASgLQgKgEgCgMQgDgLAGgIQAEACABAFQACAFgDAEQAMAEADANQADgMAJgKQgDgVAQgNQgEgCgBgFQAAgFACgEQACgDAEgFQADgFgBgEIgBgHQAAgIAHgCQAGgCAFAGQACAGABABQABACAEABQAEACABACQADADABAKQABADAGAIQAFAGAAAFQAAACgDAGQAAAEADAEQABACADAFQADAGgCAHQgBAGgGAEQAHgEADALQACAGABAIQACADAIAGQAFAHACAOg");
	this.shape_1402.setTransform(483.6,485.1);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#292929").ss(0.3).p("AhEgIQAIgdASgSQASgSAXAAQAcAAAVAcQAVAcAAAnQAAAcgMAY");
	this.shape_1403.setTransform(404.2,442.5);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#292929").ss(0.3).p("AAMgKQgKAAgEAHQgHAHAHAH");
	this.shape_1404.setTransform(404.2,420.6);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#292929").ss(0.3).p("AgQAIQgCgBADgDQAJgHAGgDQAMgDAGAH");
	this.shape_1405.setTransform(402.2,424.2);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#292929").ss(0.3).p("ADPCCIi4kBIjoAj");
	this.shape_1406.setTransform(406,442.7);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#292929").ss(0.3).p("AgPAAIAfAA");
	this.shape_1407.setTransform(482.6,300.4);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#292929").ss(0.3).p("AACAbQAJgMgFgPQgDgJgKgT");
	this.shape_1408.setTransform(485.1,311.6);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#292929").ss(0.3).p("AAFAmQgIgQAAgNIAAgw");
	this.shape_1409.setTransform(482.9,303.4);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#292929").ss(0.3).p("AgBAbQgJgMAFgPQADgIAKgV");
	this.shape_1410.setTransform(480,311.6);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#292929").ss(0.3).p("AgEAQQAIgRAAgL");
	this.shape_1411.setTransform(482.2,305.6);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1412.setTransform(484.5,320);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1413.setTransform(480.4,320);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1414.setTransform(479,319.5);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABG");
	this.shape_1415.setTransform(483.2,320.2);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1416.setTransform(481.8,320.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#292929").ss(0.3).p("AgGABIANgB");
	this.shape_1417.setTransform(481.1,320.5);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#292929").ss(0.3).p("AgGAAIANAA");
	this.shape_1418.setTransform(483.9,320.4);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#292929").ss(0.3).p("AAigNQAKAEAAAGQABAGgNAFQgNAGgTAAQgRABgNgFQgNgEgBgGQAAgGAJgE");
	this.shape_1419.setTransform(482.6,322.3);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#292929").ss(0.3).p("AgsgOIAAANQABAGANAEQANAFARgBQATgBANgFQANgFgBgGIAAgN");
	this.shape_1420.setTransform(482.6,323.7);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#292929").ss(0.3).p("AgmgLIAAAKQAAAEAMADQALAEAPgBQARAAALgEQALgFAAgEIAAgK");
	this.shape_1421.setTransform(482.6,325.4);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#292929").ss(0.3).p("AASAAQAAACgFACQgGACgHAAQgRABAAgHQAAgFARgBQAHAAAGACQAFACAAACg");
	this.shape_1422.setTransform(482.6,306.6);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#292929").ss(0.3).p("AgRgHIAAAGQAAAFARAAQASgBAAgGIAAgF");
	this.shape_1423.setTransform(482.6,307.4);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#292929").ss(0.3).p("AAGgHQAPACAAAFQAAADgGACQgGADgJAAQgIABgGgDQgGgCAAgDQgBgEAPgE");
	this.shape_1424.setTransform(482.6,307.5);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#292929").ss(0.3).p("AgUgIIAAAHQAAACAGACQAGACAIAAQAJgBAGgCQAGgCAAgDIAAgG");
	this.shape_1425.setTransform(482.6,308.4);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#292929").ss(0.3).p("AAggLQAHAEAAAEQAAAFgLAEQgLAFgRABQgPAAgLgEQgMgDAAgGQAAgEAGgE");
	this.shape_1426.setTransform(482.6,314.4);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#292929").ss(0.3).p("AgmgNIAAAMQAAAFAMAEQALAEAPgBQAQgBAMgEQALgFAAgFIAAgL");
	this.shape_1427.setTransform(482.6,315.6);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#292929").ss(0.3).p("AAsAPIhXgd");
	this.shape_1428.setTransform(473.6,385.6);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#292929").ss(0.3).p("AAUAHIgmgN");
	this.shape_1429.setTransform(465.4,382.7);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1430.setTransform(459.6,380.7);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#292929").ss(0.3).p("AAbAJIg1gR");
	this.shape_1431.setTransform(453.1,378.5);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f().s("#292929").ss(0.3).p("AAsAPIhXgd");
	this.shape_1432.setTransform(474,384.7);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1433.setTransform(466,381.9);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f().s("#292929").ss(0.3).p("AATAHIgmgN");
	this.shape_1434.setTransform(460.3,379.9);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#292929").ss(0.3).p("AAbAJIg1gS");
	this.shape_1435.setTransform(453.7,377.7);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f().s("#292929").ss(0.3).p("AArAPIhVgd");
	this.shape_1436.setTransform(474.6,383.8);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1437.setTransform(466.6,381);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1438.setTransform(460.8,379);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#292929").ss(0.3).p("AAbAKIg1gS");
	this.shape_1439.setTransform(454.4,376.7);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f().s("#292929").ss(0.3).p("AApAPIhRgc");
	this.shape_1440.setTransform(474.9,383);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#292929").ss(0.3).p("AATAGIglgM");
	this.shape_1441.setTransform(467.1,380.2);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1442.setTransform(461.4,378.1);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1443.setTransform(454.9,375.8);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_1444.setTransform(475.3,382);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1445.setTransform(467.6,379.3);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f().s("#292929").ss(0.3).p("AAUAHIgmgN");
	this.shape_1446.setTransform(461.9,377.3);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1447.setTransform(455.5,375);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_1448.setTransform(475.8,381.2);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1449.setTransform(468.1,378.5);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1450.setTransform(462.4,376.5);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1451.setTransform(456.1,374.3);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f().s("#292929").ss(0.3).p("AAoAOIhPgb");
	this.shape_1452.setTransform(476.4,380.4);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1453.setTransform(468.7,377.6);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1454.setTransform(463,375.6);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#292929").ss(0.3).p("AAaAJIgzgR");
	this.shape_1455.setTransform(456.8,373.4);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f().s("#292929").ss(0.3).p("AAnAOIhNgb");
	this.shape_1456.setTransform(476.9,379.3);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1457.setTransform(469.2,376.6);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1458.setTransform(463.5,374.7);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#292929").ss(0.3).p("AAZAJIgxgR");
	this.shape_1459.setTransform(457.3,372.5);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f().s("#292929").ss(0.3).p("AAmANIhLgZ");
	this.shape_1460.setTransform(477.4,378.5);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#292929").ss(0.3).p("AATAHIglgM");
	this.shape_1461.setTransform(469.9,375.9);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f().s("#292929").ss(0.3).p("AAUAHIgngN");
	this.shape_1462.setTransform(464.2,373.9);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#292929").ss(0.3).p("AAZAIIgxgQ");
	this.shape_1463.setTransform(457.8,371.7);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f().s("#292929").ss(0.3).p("AgiALIBGgV");
	this.shape_1464.setTransform(495.4,385.9);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngL");
	this.shape_1465.setTransform(502.7,383.6);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f().s("#292929").ss(0.3).p("AgUAHIApgN");
	this.shape_1466.setTransform(508.5,381.7);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#292929").ss(0.3).p("AgYAIIAxgP");
	this.shape_1467.setTransform(514.9,379.7);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f().s("#292929").ss(0.3).p("AghALIBDgV");
	this.shape_1468.setTransform(494.9,385.1);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1469.setTransform(502.1,382.7);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1470.setTransform(507.9,380.9);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#292929").ss(0.3).p("AgXAIIAwgP");
	this.shape_1471.setTransform(514.2,378.9);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f().s("#292929").ss(0.3).p("AggALIBBgV");
	this.shape_1472.setTransform(494.5,384.2);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1473.setTransform(501.5,381.9);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngM");
	this.shape_1474.setTransform(507.3,379.9);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#292929").ss(0.3).p("AgWAIIAtgP");
	this.shape_1475.setTransform(513.4,378);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f().s("#292929").ss(0.3).p("AgfALIA/gV");
	this.shape_1476.setTransform(494.1,383.3);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngM");
	this.shape_1477.setTransform(501,381);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1478.setTransform(506.7,379.1);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#292929").ss(0.3).p("AgXAIIAvgP");
	this.shape_1479.setTransform(512.8,377.1);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f().s("#292929").ss(0.3).p("AgdAKIA7gT");
	this.shape_1480.setTransform(493.5,382.4);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#292929").ss(0.3).p("AgTAGIAmgL");
	this.shape_1481.setTransform(500.5,380.1);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1482.setTransform(506.2,378.2);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#292929").ss(0.3).p("AgUAHIApgN");
	this.shape_1483.setTransform(512.2,376.3);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f().s("#292929").ss(0.3).p("AgcAJIA5gR");
	this.shape_1484.setTransform(493.1,381.6);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1485.setTransform(499.9,379.4);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1486.setTransform(505.7,377.5);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1487.setTransform(511.6,375.5);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#292929").ss(0.3).p("AgbAJIA3gR");
	this.shape_1488.setTransform(492.7,380.7);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#292929").ss(0.3).p("AgSAGIAlgL");
	this.shape_1489.setTransform(499.4,378.5);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1490.setTransform(505.1,376.6);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1491.setTransform(510.9,374.7);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#292929").ss(0.3).p("AgaAJIA0gR");
	this.shape_1492.setTransform(492.3,379.8);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1493.setTransform(498.8,377.6);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngM");
	this.shape_1494.setTransform(504.6,375.7);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#292929").ss(0.3).p("AgSAGIAlgL");
	this.shape_1495.setTransform(510.3,373.8);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f().s("#292929").ss(0.3).p("AgZAJIAzgR");
	this.shape_1496.setTransform(491.9,378.9);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1497.setTransform(498.2,376.8);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#292929").ss(0.3).p("AgTAHIAngN");
	this.shape_1498.setTransform(504.1,374.8);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#292929").ss(0.3).p("AgRAGIAjgL");
	this.shape_1499.setTransform(509.6,373);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f().s("#292929").ss(0.3).p("AAUgGIgnAN");
	this.shape_1500.setTransform(503.4,373.8);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#292929").ss(0.3).p("AAVgGIgpAN");
	this.shape_1501.setTransform(497.7,375.8);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f().s("#292929").ss(0.3).p("AAagHIgzAQ");
	this.shape_1502.setTransform(491.4,377.9);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#292929").ss(0.3).p("AgTAGIAngL");
	this.shape_1503.setTransform(503,384.1);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f().s("#292929").ss(0.3).p("AgTAGIAogM");
	this.shape_1504.setTransform(508.9,382.2);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#292929").ss(0.3).p("Ah7jyIC+CoIAbAmQAbAxAAA+QAABjACA2IgpAO");
	this.shape_1505.setTransform(499,348.4);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f().s("#292929").ss(0.3).p("AhCDcIgCmFICMgu");
	this.shape_1506.setTransform(491.9,406.9);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f().s("#292929").ss(0.3).p("AgqBCIAxgQIAqgEIhnhx");
	this.shape_1507.setTransform(516.9,374.3);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAIAAgPIhNh3g");
	this.shape_1508.setTransform(497.6,379.4);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAJAAgQIhNh3g");
	this.shape_1509.setTransform(503.3,377.5);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f().s("#292929").ss(0.3).p("AgjgUIA6BZQARAIAAgPIhNh3IACAgg");
	this.shape_1510.setTransform(509.1,375.5);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIABgQIBMh2g");
	this.shape_1511.setTransform(470.3,378.8);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIAAgPIBNh3g");
	this.shape_1512.setTransform(464.5,376.9);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f().s("#292929").ss(0.3).p("AAkgUIg6BZQgRAIAAgQIBNh2g");
	this.shape_1513.setTransform(458.8,375);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f().s("#292929").ss(0.3).p("ABVAWIiogr");
	this.shape_1514.setTransform(475.7,339.7);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f().s("#292929").ss(0.3).p("ABCgOIiDAd");
	this.shape_1515.setTransform(493.4,340.5);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f().s("#292929").ss(0.3).p("ABsAfIjXg9");
	this.shape_1516.setTransform(473.8,344.3);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f().s("#292929").ss(0.3).p("ABWgWIiqAu");
	this.shape_1517.setTransform(495.7,345.1);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#292929").ss(0.3).p("ACBAnIkBhO");
	this.shape_1518.setTransform(469.9,371.7);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f().s("#292929").ss(0.3).p("Ah/jsIAOA6QANA+ACAbQABAXAKBOQAHBdgIB+IDbhE");
	this.shape_1519.setTransform(496.2,350);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#292929").ss(0.3).p("ABpjqIALA3QAMA9AAAbQABAXAHBOQAFBegNB+IkMhN");
	this.shape_1520.setTransform(471.2,349.8);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f().s("#292929").ss(0.3).p("AB0jRIiuCcQgOALgNAXQgbAtAAA+QAABjgBAW");
	this.shape_1521.setTransform(468.4,347.1);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f().s("#292929").ss(0.3).p("AB5jrIi4CjQgNANgNAZQgbAxAAA+QAABjgCAmIA+AV");
	this.shape_1522.setTransform(466.5,348.2);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f().s("#292929").ss(0.3).p("AgUgGIAqAN");
	this.shape_1523.setTransform(464.6,372.9);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#292929").ss(0.3).p("AgUgGIApAN");
	this.shape_1524.setTransform(470.3,374.8);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f().s("#292929").ss(0.3).p("AgmgMIBNAZ");
	this.shape_1525.setTransform(477.8,377.3);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().s("#292929").ss(0.3).p("Ah1j5ICyCeIAbAiQAbAuAAA9QAABjABAkIjVBA");
	this.shape_1526.setTransform(497.3,350.8);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAiAQIABg3QAAgTgFgNQgEgNgJAAQgHAAgFANQgFAMAAAUg");
	this.shape_1527.setTransform(454.7,392.4);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAjAQIAAg3QAAgTgFgMQgEgNgJAAQgHAAgFANQgFAMAAATg");
	this.shape_1528.setTransform(463.4,395.7);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f().s("#292929").ss(0.3).p("AgQgGIgBAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgHAAgFANQgEAMAAATg");
	this.shape_1529.setTransform(472.1,399);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().s("#292929").ss(0.3).p("ABIBcIhDitIhMCu");
	this.shape_1530.setTransform(484.9,378.2);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f().s("#292929").ss(0.3).p("AgZgGIAzAN");
	this.shape_1531.setTransform(482.4,389.2);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().s("#292929").ss(0.3).p("AguA2IBdhr");
	this.shape_1532.setTransform(449.9,372.7);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f().s("#292929").ss(0.3).p("AAYCkIAAlIIgvAAIAAFO");
	this.shape_1533.setTransform(447.6,394.6);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f().s("#292929").ss(0.3).p("AA2DGIAAlfIhugn");
	this.shape_1534.setTransform(474.4,403.9);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1535.setTransform(465,383.3);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#292929").ss(0.3).p("AATAHIglgN");
	this.shape_1536.setTransform(459.4,381.3);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f().s("#292929").ss(0.3).p("AAcAwIg2gTIA5hO");
	this.shape_1537.setTransform(452.7,375.1);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAFAMAAATg");
	this.shape_1538.setTransform(511.6,393.7);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAJAAAFANQAEAMAAATg");
	this.shape_1539.setTransform(503.7,396.4);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_1540.setTransform(495.8,399);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f().s("#292929").ss(0.3).p("AA3iFIgEFFIgkANIAAlPIhGhO");
	this.shape_1541.setTransform(516.3,392.3);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().s("#292929").ss(0.3).p("AiBAHIDODDIAzgYIAAmB");
	this.shape_1542.setTransform(477.6,408.9);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f().s("#292929").ss(0.3).p("AgbA2IA3AZIAAhmQAAgJgDgLQgUg7gVAgQgJAOAAATg");
	this.shape_1543.setTransform(431.5,483.3);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#292929").ss(0.3).p("AAAhTIAACn");
	this.shape_1544.setTransform(508.1,457.1);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgNQAEgNAIAAQAIAAAFANQAFAMAAAUg");
	this.shape_1545.setTransform(473.8,497.1);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_1546.setTransform(466.4,500.3);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f().s("#292929").ss(0.3).p("AgfBZIA/gcIAAhIQAAgjgIgWQgJgXgPAAQgOAAgJAXQgIAWAAAjg");
	this.shape_1547.setTransform(478,464.1,1,1,0,0,0,0,-0.2);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f().s("#292929").ss(0.3).p("AgeBXIA+gbIAAhDQAAgjgIgWQgJgYgPAAQgOAAgJAYQgIAWAAAjg");
	this.shape_1548.setTransform(468.1,468.4,1,1,0,0,0,0,-0.1);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f().s("#292929").ss(0.3).p("AgfgGQAAgiAIgUQAJgXAOAAQAQAAAIAXQAIAUAAAiIAAA/Ig/Ab");
	this.shape_1549.setTransform(458.2,472.5);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAFAMAAATg");
	this.shape_1550.setTransform(459.1,503.5);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f().s("#292929").ss(0.3).p("AgRgGIAAAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgIAAgEANQgFAMAAATg");
	this.shape_1551.setTransform(433.8,449);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgTAFgMQAFgNAHAAQAJAAAEANQAFAMAAATg");
	this.shape_1552.setTransform(444.7,449.8);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f().s("#292929").ss(0.3).p("AASgGIAAAnIgiAQIgBg3QAAgUAFgMQAFgNAHAAQAJAAAEANQAFANAAATg");
	this.shape_1553.setTransform(451.8,506.7);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f().s("#292929").ss(0.3).p("ACag7IkzB2");
	this.shape_1554.setTransform(469.4,452.9);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f().s("#292929").ss(0.3).p("AikBAIFJh/");
	this.shape_1555.setTransform(468.4,449.9);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f().s("#292929").ss(0.3).p("AAAjmIAAHN");
	this.shape_1556.setTransform(526.6,451.8);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f().s("#292929").ss(0.3).p("ABvAKQgFA2gkAiQgkAigtgEQgugEgdgpQgdgoAFg0QAFg1AkgjQAkgiAsAEQAvAEAdApQAdAogFA0g");
	this.shape_1557.setTransform(507.2,436);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f().s("#292929").ss(0.3).p("ABJAHQgEAjgXAXQgYAXgdgCQgegDgTgbQgTgbADgjQAEgjAXgYQAYgXAdADQAeADATAbQATAbgDAjg");
	this.shape_1558.setTransform(507.7,436.1);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f().s("#292929").ss(0.3).p("Ag0BbIBmgkIAAiW");
	this.shape_1559.setTransform(523.2,422.6);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f().s("#292929").ss(0.3).p("ADQjhIhyAtQACEdgDAAIkrB6");
	this.shape_1560.setTransform(475.5,461.6);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f().s("#292929").ss(0.3).p("AhPBtICGjXIAXAAIACC3");
	this.shape_1561.setTransform(498.6,415.7);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f().s("#292929").ss(0.3).p("AiSBKIiRiEIABARQADAWALAaQAiBVBfBigADZiLIBDAaIhvAsIhqh8IiNDpIhIAi");
	this.shape_1562.setTransform(499.7,424.4);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f().s("#292929").ss(0.3).p("AiaggIIujBIjPAXIpTDQID0gmIC7EI");
	this.shape_1563.setTransform(424.2,432.2);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f().s("#292929").ss(0.3).p("ABlArIhhhTIhpBC");
	this.shape_1564.setTransform(439.6,431.5);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f().s("#292929").ss(0.3).p("Ag0AhIAAgdIBcA0IANh2");
	this.shape_1565.setTransform(434.7,433.7);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f().s("#292929").ss(0.3).p("AA3gCIAAgcIhtAiIAAAh");
	this.shape_1566.setTransform(444.2,438.9);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f().s("#292929").ss(0.3).p("ABoAPIAXgHIAAgJIgVgMIh2ApIhcg3IgWAEIAAAJIASAK");
	this.shape_1567.setTransform(440,439.8);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f().s("#292929").ss(0.3).p("AADhNIAACCIgEAHIADAQ");
	this.shape_1568.setTransform(438.4,452.8);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f().s("#292929").ss(0.3).p("AhqBCIAAiCIBhA6IB0gmIAAB2");
	this.shape_1569.setTransform(439.7,445.8);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f().s("#292929").ss(0.3).p("ABvABIAGgMIAAgJIgMAAIh0AwIhgg4IgJAAIAAALIAKAO");
	this.shape_1570.setTransform(439.9,455.3);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f().s("#292929").ss(0.3).p("ACFgBIgXgVIiAAyIhZg3IgaAK");
	this.shape_1571.setTransform(439.9,457.7);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f().s("#292929").ss(0.3).p("Ag5gYIAAgMIBwBKIADgd");
	this.shape_1572.setTransform(432.3,459.6);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f().s("#292929").ss(0.3).p("AA+ApIhxhQIgMAA");
	this.shape_1573.setTransform(431.6,461.1);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f().s("#292929").ss(0.3).p("ABHgYIAAgOIiZA6IAAASgABYgXIgRAAIAAgB");
	this.shape_1574.setTransform(446.1,461.4);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f().s("#292929").ss(0.3).p("AARhwIAADYIgjgZ");
	this.shape_1575.setTransform(444.5,510);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f().s("#292929").ss(0.3).p("AAOAkIgZgSIAAg5");
	this.shape_1576.setTransform(438.9,512.6);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f().s("#292929").ss(0.3).p("AAAA/IAAh9");
	this.shape_1577.setTransform(437.8,500.3);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f().s("#292929").ss(0.3).p("AjDAWIBUAsIE0iE");
	this.shape_1578.setTransform(457.4,492.1);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f().s("#292929").ss(0.3).p("AgWiiIgBABIh8hXIAAHiIAeAVAgWiiIAAEaICqhHIAAkXg");
	this.shape_1579.setTransform(440.1,482.3);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f().s("#292929").ss(0.3).p("AgLgDIAXAH");
	this.shape_1580.setTransform(398.4,427.1);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f().s("#292929").ss(0.3).p("AgKAEIAVgH");
	this.shape_1581.setTransform(375.2,425.9);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f().s("#292929").ss(0.3).p("AgKBgIhggzIAAiIIBhA7IBzgmIAAB/g");
	this.shape_1582.setTransform(386.7,421);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f().s("#292929").ss(0.3).p("AgQgGIgBAnIAjAQIAAg3QAAgTgEgMQgFgNgJAAQgHAAgFANQgEAMAAATg");
	this.shape_1583.setTransform(381,422);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f().s("#292929").ss(0.3).p("AARgGIABAnIgjAQIAAg3QAAgTAFgMQAEgNAIAAQAIAAAFANQAEAMAAATg");
	this.shape_1584.setTransform(391.8,422.8);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f().s("#292929").ss(0.3).p("ABlArIhhhTIhpBC");
	this.shape_1585.setTransform(386.5,404);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f().s("#292929").ss(0.3).p("Ag0AhIAAgdIBcA0IANh2");
	this.shape_1586.setTransform(381.6,406.2);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f().s("#292929").ss(0.3).p("AA3gDIAAgbIhtAiIAAAh");
	this.shape_1587.setTransform(391.1,411.4);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f().s("#292929").ss(0.3).p("ABoAQIAYgIIAAgJIgXgMIh1ApIhdg3IgWAEIAAAJIATAK");
	this.shape_1588.setTransform(386.9,412.3);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f().s("#292929").ss(0.3).p("AADhLIAACCIgEAHIACAN");
	this.shape_1589.setTransform(385.3,425.1);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f().s("#292929").ss(0.3).p("Ai3BiIFvjD");
	this.shape_1590.setTransform(464.6,510.6);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f().s("#292929").ss(0.3).p("AgrAXIBXgt");
	this.shape_1591.setTransform(489.2,497.5);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f().s("#292929").ss(0.3).p("AgLAGIAXgL");
	this.shape_1592.setTransform(497.1,493.4);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f().s("#292929").ss(0.3).p("AgJgCIATAF");
	this.shape_1593.setTransform(529.2,422.9);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f().s("#292929").ss(0.3).p("AgKjsIASgJIAAHy");
	this.shape_1594.setTransform(529.4,447.7);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f().s("#292929").ss(0.3).p("AAUgGIgnAN");
	this.shape_1595.setTransform(515.8,413.5);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f().s("#292929").ss(0.3).p("AgQgLIAhAX");
	this.shape_1596.setTransform(436,513.2);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f().s("#292929").ss(0.3).p("AAAgjIAABH");
	this.shape_1597.setTransform(485.9,319.6);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f().s("#292929").ss(0.3).p("Ag1BAQgCgEADgFQADgFAFgBQgCgEAHgHQAHgFABgEQABgBAAgIQAAgUARgMQADgCAAgCIAAgFQAAgCAFgGQAFgHADgPQAHgPAKADQAHACABAHQABAHgHADQAIADAEAJQADAIgDAIQAJAEABALQABAGgFAMQAEACABAEQACAEgBAEIAIAAIABAG");
	this.shape_1598.setTransform(403.5,420.2);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f().s("#292929").ss(0.3).p("AASAgIgjAQIAAhPIAjgQg");
	this.shape_1599.setTransform(292.4,466.1);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f().s("#292929").ss(0.3).p("AASAfIgjAQIAAhOIAjgQg");
	this.shape_1600.setTransform(292.4,452);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f().s("#292929").ss(0.3).p("AASAgIgjAQIAAhPIAjgQg");
	this.shape_1601.setTransform(283.4,469.3);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f().s("#292929").ss(0.3).p("AASAfIgjAQIAAhOIAjgQg");
	this.shape_1602.setTransform(283.4,455.2);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f().s("#292929").ss(0.3).p("AASAgIgjAQIAAhPIAjgQg");
	this.shape_1603.setTransform(274.4,472.4);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f().s("#292929").ss(0.3).p("AASAfIgjAQIAAhOIAjgQg");
	this.shape_1604.setTransform(274.4,458.3);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f().s("#292929").ss(0.3).p("AASAgIgjAQIAAhPIAjgQg");
	this.shape_1605.setTransform(265.4,475.6);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f().s("#292929").ss(0.3).p("AASAfIgjAQIAAhOIAjgQg");
	this.shape_1606.setTransform(265.4,461.5);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f().s("#292929").ss(0.3).p("AgRgYIAhgPIAABPIgIAD");
	this.shape_1607.setTransform(256.6,477.9);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f().s("#292929").ss(0.3).p("AAKgfIgbgWIAABOIAjAdIAAg7");
	this.shape_1608.setTransform(253,491.2);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f().s("#292929").ss(0.3).p("AgSAZIAlAdIAAhPIglgcg");
	this.shape_1609.setTransform(245.4,485.8);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f().s("#292929").ss(0.3).p("AgSAaIAlAcIAAhPIglgcg");
	this.shape_1610.setTransform(245.4,472.9);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f().s("#292929").ss(0.3).p("AASAfIgjAQIAAhOIAjgQg");
	this.shape_1611.setTransform(256.4,464.6);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAVIAAgUIArgUg");
	this.shape_1612.setTransform(405.9,544.4);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAVIAAgUIArgUg");
	this.shape_1613.setTransform(410.1,534.9);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgUg");
	this.shape_1614.setTransform(409.3,480.1);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1615.setTransform(402,469.6);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAVIAAgUIArgUg");
	this.shape_1616.setTransform(411.6,517.7);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1617.setTransform(401.4,518.3);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1618.setTransform(416.5,529.3);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgUg");
	this.shape_1619.setTransform(416.1,466.2);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgTg");
	this.shape_1620.setTransform(416.1,484.7);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1621.setTransform(404.5,492.1);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgTg");
	this.shape_1622.setTransform(408.6,499.6);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1623.setTransform(403.9,505);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f().s("#292929").ss(0.3).p("AAMARIgWgUIgBgNIAXAUg");
	this.shape_1624.setTransform(266.4,546.6,1,1,0,0,0,0,-0.4);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f().s("#292929").ss(0.3).p("AAMARIgXgUIAAgNIAWAUg");
	this.shape_1625.setTransform(263.9,528.7,1,1,0,0,0,0,-0.4);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f().s("#292929").ss(0.3).p("AAMARIgXgUIAAgNIAWAUg");
	this.shape_1626.setTransform(290.8,560.6,1,1,0,0,0,0,-0.4);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f().s("#292929").ss(0.3).p("AAMASIgWgVIgBgOIAXAVg");
	this.shape_1627.setTransform(251.8,531.1,1,1,0,0,0,0,-0.4);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f().s("#292929").ss(0.3).p("AAMARIgXgUIAAgNIAWAUg");
	this.shape_1628.setTransform(298.9,577.9,1,1,0,0,0,0,-0.4);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f().s("#292929").ss(0.3).p("AAMARIgXgUIAAgNIAWAUg");
	this.shape_1629.setTransform(244,501.9,1,1,0,0,0,0,-0.4);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f().s("#292929").ss(0.3).p("AAMARIgWgUIgBgNIAWAUg");
	this.shape_1630.setTransform(308.5,569.5,1,1,0,0,0,0,-0.4);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f().s("#292929").ss(0.3).p("AAMARIgWgUIgBgNIAWAUg");
	this.shape_1631.setTransform(252.4,503.4,1,1,0,0,0,0,-0.4);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f().s("#292929").ss(0.3).p("AAMARIgXgUIAAgNIAWAUg");
	this.shape_1632.setTransform(248.9,520.1,1,1,0,0,0,0,-0.4);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f().s("#292929").ss(0.3).p("AAMARIgWgUIgBgNIAWAUg");
	this.shape_1633.setTransform(242.7,526.3,1,1,0,0,0,0,-0.4);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgUg");
	this.shape_1634.setTransform(320.4,550);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1635.setTransform(377.7,543.2);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1636.setTransform(384.8,544.2);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgUg");
	this.shape_1637.setTransform(390.2,529.8);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAVIAAgUIArgUg");
	this.shape_1638.setTransform(393.2,551);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1639.setTransform(365.3,558.5);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgTg");
	this.shape_1640.setTransform(363.6,566.1);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAVIAAgUIArgUg");
	this.shape_1641.setTransform(328.8,555.4);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgTIArgUg");
	this.shape_1642.setTransform(322.6,587.1);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgTg");
	this.shape_1643.setTransform(340,575.7);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f().s("#292929").ss(0.3).p("AAWAAIgrAUIAAgUIArgTg");
	this.shape_1644.setTransform(325.2,572.8);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f().s("#292929").ss(0.3).p("AhFAjICMhF");
	this.shape_1645.setTransform(295.5,515.8);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f().s("#292929").ss(0.3).p("AA6gYIhzAy");
	this.shape_1646.setTransform(283.8,509.7);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f().s("#292929").ss(0.3).p("AhHAWIB8gzIAKAIIh7A0");
	this.shape_1647.setTransform(283.3,508.7);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f().s("#292929").ss(0.3).p("AAChuIAADVIgFAE");
	this.shape_1648.setTransform(276.6,524);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f().s("#292929").ss(0.3).p("AhKD+IANgMIgBmsICHg/IAACW");
	this.shape_1649.setTransform(282.3,512.5);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f().s("#292929").ss(0.3).p("Ag9gxIB6BcIAAgJIhghH");
	this.shape_1650.setTransform(282.3,515.9);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f().s("#292929").ss(0.3).p("AA+CKIgKgEIAAi6IhwhW");
	this.shape_1651.setTransform(282.2,526.3);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f().s("#292929").ss(0.3).p("AhCDHIAAlJICHg/");
	this.shape_1652.setTransform(281.6,506.2);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f().s("#292929").ss(0.3).p("AAQgxQgIgDgIAFQgPAKAAAWIAABH");
	this.shape_1653.setTransform(278.7,558.8);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f().s("#292929").ss(0.3).p("AAfBXIAAhXQAAgbgKgZQgJgVgKgGQgHgEgJAGQgQAKAAAVIAABE");
	this.shape_1654.setTransform(279.3,561);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f().s("#292929").ss(0.3).p("AgQAGIAhgL");
	this.shape_1655.setTransform(391.1,516.7);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f().s("#292929").ss(0.3).p("AgDAOIAAgSIAJAF");
	this.shape_1656.setTransform(389.8,517.8);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f().s("#292929").ss(0.3).p("Ag+ASIBFgbIAJAJIArgPIABASIgUAFIAAAN");
	this.shape_1657.setTransform(388.7,520.2);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f().s("#292929").ss(0.3).p("AAJAAIgPgHIAAAW");
	this.shape_1658.setTransform(383.1,522.7);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f().s("#292929").ss(0.3).p("AAXACIgQgHIgdAL");
	this.shape_1659.setTransform(381.7,524.8);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f().s("#292929").ss(0.3).p("AAJgBIgOgGIAAAW");
	this.shape_1660.setTransform(380,526.2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f().s("#292929").ss(0.3).p("AAcgEIgPgEIgnAS");
	this.shape_1661.setTransform(378.1,528.7);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f().s("#292929").ss(0.3).p("AAIgNIgMgEIAAAfIAMAG");
	this.shape_1662.setTransform(375.9,531.6);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f().s("#292929").ss(0.3).p("AAIAGIgJABIgBgS");
	this.shape_1663.setTransform(380.1,533.4);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f().s("#292929").ss(0.3).p("AAbABIgQgGIgmAM");
	this.shape_1664.setTransform(379.7,535.5);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f().s("#292929").ss(0.3).p("AgGgBIANAD");
	this.shape_1665.setTransform(371.3,537.2);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().s("#292929").ss(0.3).p("AgPAZIgMgDIgBgbIArgSIASAE");
	this.shape_1666.setTransform(373.5,537.6);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f().s("#292929").ss(0.3).p("AAHARIAFgLIgbgU");
	this.shape_1667.setTransform(280.3,539.5);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f().s("#292929").ss(0.3).p("AgLAHIAIgKIAKAAIgHAK");
	this.shape_1668.setTransform(278.1,538.4);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f().s("#292929").ss(0.3).p("AAAAeIAAg8");
	this.shape_1669.setTransform(274.8,541.3);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f().s("#292929").ss(0.3).p("AgIAJIAMgJIgOgI");
	this.shape_1670.setTransform(275.8,531.7);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f().s("#292929").ss(0.3).p("AgGAgIALgJIAAg6");
	this.shape_1671.setTransform(274.2,528.5);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f().s("#292929").ss(0.3).p("AAAAMIALgJIgcgN");
	this.shape_1672.setTransform(273.6,524.6);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f().s("#292929").ss(0.3).p("AgHAcIANgJIAAgz");
	this.shape_1673.setTransform(271.2,521.6);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f().s("#292929").ss(0.3).p("AAAgIIAAAS");
	this.shape_1674.setTransform(269.9,516.2);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f().s("#292929").ss(0.3).p("AAAAMIAOgJIgTgMIgOAJ");
	this.shape_1675.setTransform(270.5,518);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f().s("#292929").ss(0.3).p("AgIAFIAQgK");
	this.shape_1676.setTransform(270.3,515);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f().s("#292929").ss(0.3).p("AgIANIAOgGIAAgY");
	this.shape_1677.setTransform(272.7,513.3);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f().s("#292929").ss(0.3).p("AgYgMIAoARIgOAI");
	this.shape_1678.setTransform(271.7,511);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f().s("#292929").ss(0.3).p("AAGgRIAAAVIgOAK");
	this.shape_1679.setTransform(268.6,509.3);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f().s("#292929").ss(0.3).p("AAMAQIAPgJIgugUIgQAG");
	this.shape_1680.setTransform(266.5,506.8);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_1681.setTransform(261.5,512);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f().s("#292929").ss(0.3).p("AgMgIIASAJIgLAI");
	this.shape_1682.setTransform(260.8,510.7);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f().s("#292929").ss(0.3).p("AgGBFIALgHIAAh9IgLAI");
	this.shape_1683.setTransform(259,503.6);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f().s("#292929").ss(0.3).p("AAJAGIgRgL");
	this.shape_1684.setTransform(258.6,496.6);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f().s("#292929").ss(0.3).p("AAFgfIAAA0IgMAH");
	this.shape_1685.setTransform(257.2,493.9);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f().s("#292929").ss(0.3).p("AAXBJIAAARIgMAIIAAgZIAMAAIAGABIAAgfIgbgVIAAhMIgQABIAAgaIgMgIIgCgT");
	this.shape_1686.setTransform(253.1,478.3);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f().s("#292929").ss(0.3).p("AAAAOIAMgLIgOgNIgNAM");
	this.shape_1687.setTransform(256.5,490.4);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f().s("#292929").ss(0.3).p("AgHASIANgLIAAgc");
	this.shape_1688.setTransform(256.8,483.8);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f().s("#292929").ss(0.3).p("AgCAPIAMgKIgYgT");
	this.shape_1689.setTransform(256.3,481.1);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f().s("#292929").ss(0.3).p("AAHgnIAABBIgPAK");
	this.shape_1690.setTransform(254.1,477);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f().s("#292929").ss(0.3).p("AgKAIIAOgIIgLgH");
	this.shape_1691.setTransform(254.3,473);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f().s("#292929").ss(0.3).p("AAIgTIAAAcIgSAG");
	this.shape_1692.setTransform(252.7,471.4);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f().s("#292929").ss(0.3).p("AgIAEIARgH");
	this.shape_1693.setTransform(251.3,469.1);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f().s("#292929").ss(0.3).p("AgNAPIASgJIgNgGIAAgS");
	this.shape_1694.setTransform(253,468.8);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f().s("#292929").ss(0.3).p("AAwiLIiWBMIAADHIAMgGIAAi4IALgGICJhIIAAC8IiJh0AA6A4IAAAFIANAHg");
	this.shape_1695.setTransform(298.7,526.6);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f().s("#292929").ss(0.3).p("AAhgNIhBAb");
	this.shape_1696.setTransform(294.3,500.7);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f().s("#292929").ss(0.3).p("AghAOIBDgb");
	this.shape_1697.setTransform(293.6,500.3);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f().s("#292929").ss(0.3).p("AgDACIAHgD");
	this.shape_1698.setTransform(288.1,501.1);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f().s("#292929").ss(0.3).p("AgbALIA3gV");
	this.shape_1699.setTransform(293.2,499.2);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f().s("#292929").ss(0.3).p("Ah+hSID9Cl");
	this.shape_1700.setTransform(366.8,515.5);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f().s("#292929").ss(0.3).p("AgzggIBSA/IAWgI");
	this.shape_1701.setTransform(361.3,496.2);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f().s("#292929").ss(0.3).p("AAAg+IAAB9");
	this.shape_1702.setTransform(361.4,495.3);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f().s("#292929").ss(0.3).p("AAAg+IAAB9");
	this.shape_1703.setTransform(358.4,493.1);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f().s("#292929").ss(0.3).p("AhnBnIDLhWIgDh8");
	this.shape_1704.setTransform(344,505.4);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f().s("#292929").ss(0.3).p("AgFgLIALAAIAAAXIgLAAg");
	this.shape_1705.setTransform(392.2,504.8);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f().s("#292929").ss(0.3).p("AhwgwICUBgIBOgf");
	this.shape_1706.setTransform(378,516.1);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f().s("#292929").ss(0.3).p("AiBgwICUBgIBvgt");
	this.shape_1707.setTransform(379.7,511.2);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f().s("#292929").ss(0.3).p("AiBgwICUBgIBwgt");
	this.shape_1708.setTransform(379.7,506.3);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f().s("#292929").ss(0.3).p("Ah8gwICUBgIBmgp");
	this.shape_1709.setTransform(379.2,501.5);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f().s("#292929").ss(0.3).p("Ah6gwICUBgIBigo");
	this.shape_1710.setTransform(379,496.6);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f().s("#292929").ss(0.3).p("AAAhQIAACg");
	this.shape_1711.setTransform(332.4,511);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f().s("#292929").ss(0.3).p("AAAhFIAACL");
	this.shape_1712.setTransform(290.4,511.3);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f().s("#292929").ss(0.3).p("AAAhKIAACV");
	this.shape_1713.setTransform(289.6,511.3);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f().s("#292929").ss(0.3).p("AgIBKIAAiXIARAEIAACd");
	this.shape_1714.setTransform(289.5,494.5);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_1715.setTransform(288.6,504.5);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f().s("#292929").ss(0.3).p("AAAg5IAAB0");
	this.shape_1716.setTransform(288.6,513.4);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f().s("#292929").ss(0.3).p("AgPAPIAPgGIAAgRIAQgG");
	this.shape_1717.setTransform(394.5,504.6);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f().s("#292929").ss(0.3).p("AABAnIAAgfIAHAAIAAgSIgIAAIgHga");
	this.shape_1718.setTransform(392.8,513.1);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f().s("#292929").ss(0.3).p("AABgHIgIALIAYAD");
	this.shape_1719.setTransform(392.8,509);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f().s("#292929").ss(0.3).p("AgGglIAGA+IAIAK");
	this.shape_1720.setTransform(392,500.1);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f().s("#292929").ss(0.3).p("ABFgeIiIA9");
	this.shape_1721.setTransform(318.9,513.4);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f().s("#292929").ss(0.3).p("AAdAOIg5gb");
	this.shape_1722.setTransform(323.9,509.3);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f().s("#292929").ss(0.3).p("AhwgJIBDArICfhE");
	this.shape_1723.setTransform(316.5,514.7);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f().s("#292929").ss(0.3).p("AFHhkInnDIIilho");
	this.shape_1724.setTransform(323,502.2);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#292929").ss(0.3).p("Aj0BlIEKhzIDghW");
	this.shape_1725.setTransform(331.4,503.8);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f().s("#292929").ss(0.3).p("AgggNIA5AaIgEgJIgsgW");
	this.shape_1726.setTransform(325.3,508.9);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f().s("#292929").ss(0.3).p("ACJC+IhEgkIAAjAIithvQABgMgBgBIDxCgIABgJIgqgc");
	this.shape_1727.setTransform(298.3,517.6);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f().s("#292929").ss(0.3).p("AhOg9IAADBICdhQIAAi3g");
	this.shape_1728.setTransform(319.9,523.5);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f().s("#292929").ss(0.3).p("AAAiqIAAFV");
	this.shape_1729.setTransform(376.2,500.9);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f().s("#292929").ss(0.3).p("AAAilIAAFL");
	this.shape_1730.setTransform(380.7,503.4);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f().s("#292929").ss(0.3).p("AAAilIAAFL");
	this.shape_1731.setTransform(373.9,498.7);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f().s("#292929").ss(0.3).p("AAAieIAAE9");
	this.shape_1732.setTransform(372.9,497.3);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f().s("#292929").ss(0.3).p("AAAiyIAAFm");
	this.shape_1733.setTransform(370,497.5);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f().s("#292929").ss(0.3).p("AAAitIAAFa");
	this.shape_1734.setTransform(367.8,495.3);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f().s("#292929").ss(0.3).p("AAMgEIgXAJ");
	this.shape_1735.setTransform(365.6,503.6);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f().s("#292929").ss(0.3).p("AAAgxIAABj");
	this.shape_1736.setTransform(366.8,508.5);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f().s("#292929").ss(0.3).p("AAAiBIAAEC");
	this.shape_1737.setTransform(366.7,497.6);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f().s("#292929").ss(0.3).p("AAAiaIAAE1");
	this.shape_1738.setTransform(381.7,503.1);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f().s("#292929").ss(0.3).p("ABlgkIjJBJ");
	this.shape_1739.setTransform(323.4,493.4);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f().s("#292929").ss(0.3).p("ACqg5IlTBz");
	this.shape_1740.setTransform(330.3,480.9);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f().s("#292929").ss(0.3).p("ABlgkIjJBK");
	this.shape_1741.setTransform(323.4,472.7);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f().s("#292929").ss(0.3).p("AhUgsICpBZ");
	this.shape_1742.setTransform(304.5,492.6);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f().s("#292929").ss(0.3).p("AhUgrICpBY");
	this.shape_1743.setTransform(304.5,482.2);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f().s("#292929").ss(0.3).p("AhUgsICpBZ");
	this.shape_1744.setTransform(304.5,471.8);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f().s("#292929").ss(0.3).p("AErhUImmCoIivh3");
	this.shape_1745.setTransform(325.8,498.8);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f().s("#292929").ss(0.3).p("AAAmGIAAMN");
	this.shape_1746.setTransform(326.7,464.6);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f().s("#292929").ss(0.3).p("AAAmEIAAMJ");
	this.shape_1747.setTransform(301.5,463);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f().s("#292929").ss(0.3).p("AAAmFIAAML");
	this.shape_1748.setTransform(307.7,466.9);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f().s("#292929").ss(0.3).p("AAAmGIAAMN");
	this.shape_1749.setTransform(320.3,467.4);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f().s("#292929").ss(0.3).p("Ai9GUIAAhVIgYADIAAgaIAigHIALgYIgEgOIgUAEIgGgVIAqgQIAHAVIAWgKIgGgoIAegOIAPgZIAAgYIAtgQIAAgUIgWAIIAAgbIAxgSIAAAVIA2gVIAAgVIgOAGIAAgZIgqAUIAAghIApgTIAAgXIAfgKIAAgXIBAgaIAAgWIApgOIAAhEIgQgPIgDhyIATgEIAAgZIAxgcIgRgH");
	this.shape_1750.setTransform(378.6,530.3);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f().s("#292929").ss(0.3).p("AAhgiIAAgBIAWgJAAhgiIhTg8IgBB4IBUBEg");
	this.shape_1751.setTransform(361.1,494.7);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f().s("#292929").ss(0.3).p("AEDhAIlWCAIiuhi");
	this.shape_1752.setTransform(321.5,460.3);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f().s("#292929").ss(0.3).p("AEChAIlWCAIishk");
	this.shape_1753.setTransform(321.6,449);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f().s("#292929").ss(0.3).p("AEChAIlWCAIithu");
	this.shape_1754.setTransform(321.6,438);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f().s("#292929").ss(0.3).p("AAcnuIAAO5Ig6Ag");
	this.shape_1755.setTransform(330.8,472.6);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f().s("#292929").ss(0.3).p("AheHcIAEtdIC8hV");
	this.shape_1756.setTransform(408.7,502.9);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f().s("#292929").ss(0.3).p("AAdgMIg5AZ");
	this.shape_1757.setTransform(333.9,606.5);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f().s("#292929").ss(0.3).p("AAdhOIAACSIg7gz");
	this.shape_1758.setTransform(328.1,601);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f().s("#292929").ss(0.3).p("AA8AAIg6AYIg8gw");
	this.shape_1759.setTransform(331,590.7);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f().s("#292929").ss(0.3).p("AhdBxIBFgfIAAiRIB2gx");
	this.shape_1760.setTransform(327.5,594.5);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f().s("#292929").ss(0.3).p("ABgJ4Ilyl3IAAqjIIojU");
	this.shape_1761.setTransform(267.6,501.2);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f().s("#292929").ss(0.3).p("Aizg4IFlFoIAApWIgjgPIgLAI");
	this.shape_1762.setTransform(300.3,575.4);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f().s("#292929").ss(0.3).p("AnTmnIAPANIAAAwIASANIAAB+IAUALIAAARIASAAIAMgaIgDgvIAwAYIAAAXIApAQIAAAWIgYgIIAAASIgKgDIAAAcIAUAMIAAA0IAeAOIAAA7IAOAJIAAA0IgLATIAAA2IASgQIAOAAIAAguIAMAAIAdAVIAAARIASAAIAAgSIBAAdIAAAgIgagKIAAAXIAnARIAGAQIBfA+IAAARIAkATIAAg3IAWAAIAAgbIATAAIAAhVIAzAZIAAgWIAuAUIBkgwIAAAeIAUgJIAAAhIgNAHIABAPIAWgJIABAmIARgFIAAASIAVAZIAAAaIgRAVIAAA3IAogTIAABCIBIgJIAoAw");
	this.shape_1763.setTransform(301.7,532.9);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f().s("#292929").ss(0.3).p("AjmA/IgCAAIglgIIBmBTIAVgHgAEgiKIoGDJ");
	this.shape_1764.setTransform(267.1,453.8);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f().s("#292929").ss(0.3).p("AhVoKIAAOZICrBzIAAu2");
	this.shape_1765.setTransform(304.5,458.2);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f().s("#292929").ss(0.3).p("AgzgdIBSA6IAXgI");
	this.shape_1766.setTransform(361.3,491.9);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f().s("#292929").ss(0.3).p("AAAgkIAABJ");
	this.shape_1767.setTransform(348.4,481.5);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f().s("#292929").ss(0.3).p("AAQANIgfgZ");
	this.shape_1768.setTransform(354.4,485.1);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f().s("#292929").ss(0.3).p("AhhAwIDAhGIAAge");
	this.shape_1769.setTransform(343.4,486);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f().s("#292929").ss(0.3).p("AijgwICVBgICyhH");
	this.shape_1770.setTransform(383.1,491.8);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f().s("#292929").ss(0.3).p("AijgwICVBgICyhH");
	this.shape_1771.setTransform(383.1,486.9);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f().s("#292929").ss(0.3).p("ABhFdIi+iEIABo5");
	this.shape_1772.setTransform(356.9,455.3);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f().s("#292929").ss(0.3).p("AAOgFIgPAGIAMAF");
	this.shape_1773.setTransform(391.5,496.2);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f().s("#292929").ss(0.3).p("AAJAPIgPgIIAAgZ");
	this.shape_1774.setTransform(393.6,494.9);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f().s("#292929").ss(0.3).p("AgNAlIgPgJIAugaIAQgo");
	this.shape_1775.setTransform(395.9,490.2);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f().s("#292929").ss(0.3).p("AhGCoIAAjHICPiE");
	this.shape_1776.setTransform(362.8,463.2);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f().s("#292929").ss(0.3).p("AirDaIAAjIICWiHIDDhg");
	this.shape_1777.setTransform(377.1,461.2);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f().s("#292929").ss(0.3).p("AgSAnIAhgKIAAhI");
	this.shape_1778.setTransform(365.1,481.6);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f().s("#292929").ss(0.3).p("AgLACIAWgD");
	this.shape_1779.setTransform(357.2,485);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f().s("#292929").ss(0.3).p("AAAhFIAACK");
	this.shape_1780.setTransform(383,461.2);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f().s("#292929").ss(0.3).p("AByAjIhyhEIhyAp");
	this.shape_1781.setTransform(383.1,471.5);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_1782.setTransform(376.4,467.2);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f().s("#292929").ss(0.3).p("AgdArIA6gUIABhCIg7ATg");
	this.shape_1783.setTransform(376.5,467.1,1,1,0,0,0,0,-0.1);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f().s("#292929").ss(0.3).p("AjoiZIAADEIByBVIAAhsIC4CAICqhG");
	this.shape_1784.setTransform(375.1,472.7);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f().s("#292929").ss(0.3).p("ABPggIidBB");
	this.shape_1785.setTransform(380.1,438.9);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f().s("#292929").ss(0.3).p("AAiCDIAAjdIhFgj");
	this.shape_1786.setTransform(337.2,443.2);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f().s("#292929").ss(0.3).p("AgSgLIAlgKIAAAiIglAJg");
	this.shape_1787.setTransform(336.5,463.4);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f().s("#292929").ss(0.3).p("AgeBJIA5gSIAAiE");
	this.shape_1788.setTransform(336.8,467.3);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f().s("#292929").ss(0.3).p("AgiAPIA5gQIgdgO");
	this.shape_1789.setTransform(337.1,459.7);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f().s("#292929").ss(0.3).p("AhIgyICRBl");
	this.shape_1790.setTransform(367,455.9);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f().s("#292929").ss(0.3).p("AhYg8ICxB5");
	this.shape_1791.setTransform(373.1,473.5);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f().s("#292929").ss(0.3).p("ABZhEIirA/IgDBP");
	this.shape_1792.setTransform(390.3,480.2);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1793.setTransform(383.8,480.8);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1794.setTransform(385.4,480.2);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1795.setTransform(386.6,479.8);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1796.setTransform(387.9,479.5);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1797.setTransform(389.1,478.9);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1798.setTransform(390.4,478.4);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1799.setTransform(391.7,477.8);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1800.setTransform(392.8,477.6);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1801.setTransform(393.9,477.1);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1802.setTransform(395,476.6);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1803.setTransform(396,476.2);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1804.setTransform(397.1,475.7);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f().s("#292929").ss(0.3).p("AAAARIAAgh");
	this.shape_1805.setTransform(398.2,475.2);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1806.setTransform(380.3,480.2);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1807.setTransform(378.6,479.1);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1808.setTransform(377.3,478.2);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgk");
	this.shape_1809.setTransform(375.9,477.4);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1810.setTransform(374.5,476.3);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgk");
	this.shape_1811.setTransform(373.1,475.2);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1812.setTransform(371.6,474.2);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1813.setTransform(370,473.2);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f().s("#292929").ss(0.3).p("AAAASIAAgk");
	this.shape_1814.setTransform(368.5,472.2);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1815.setTransform(367,471.2);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f().s("#292929").ss(0.3).p("AAAATIAAgl");
	this.shape_1816.setTransform(365.6,470);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f().s("#292929").ss(0.3).p("ACxBUIisBFIixh6IAAg3ICeiB");
	this.shape_1817.setTransform(381.5,468);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f().s("#292929").ss(0.3).p("AheAsIC9hX");
	this.shape_1818.setTransform(400.2,454.5);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f().s("#292929").ss(0.3).p("Ag6goIB1BR");
	this.shape_1819.setTransform(353.7,446.8);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f().s("#292929").ss(0.3).p("AhdhvIiYB8ICSBjICliBIC6hg");
	this.shape_1820.setTransform(376.4,456);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f().s("#292929").ss(0.3).p("AAAgWIAAAt");
	this.shape_1821.setTransform(368.1,442);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f().s("#292929").ss(0.3).p("AAAAkIAAhH");
	this.shape_1822.setTransform(363.1,444.6);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f().s("#292929").ss(0.3).p("AhlB3IgDjnIDVAf");
	this.shape_1823.setTransform(365.2,435.9);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f().s("#292929").ss(0.3).p("AiCA5IgEhxID8A8g");
	this.shape_1824.setTransform(376.2,435.2);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f().s("#292929").ss(0.3).p("ACmBuIlLjb");
	this.shape_1825.setTransform(392.3,449.2);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f().s("#292929").ss(0.3).p("ACnB7IlFjCIA1gaIgqgZ");
	this.shape_1826.setTransform(382.8,452);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f().s("#292929").ss(0.3).p("ACVBdIkpi5");
	this.shape_1827.setTransform(348.5,431.8);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f().s("#292929").ss(0.3).p("AGnKCIAAtWIp8moIjUBS");
	this.shape_1828.setTransform(376.2,477.1);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f().s("#292929").ss(0.3).p("Ai8g1ICuBpIDMhN");
	this.shape_1829.setTransform(314.7,428.7);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f().s("#292929").ss(0.3).p("Ai9AIICpBsIDQhQIAAid");
	this.shape_1830.setTransform(314.8,419.6);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f().s("#292929").ss(0.3).p("AiDg5Ig9AVIC5BdIDQhKIAAgTIhqAm");
	this.shape_1831.setTransform(313.9,408.8);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f().s("#292929").ss(0.3).p("AAHgEIgNAJ");
	this.shape_1832.setTransform(312.4,400.3);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f().s("#292929").ss(0.3).p("AAzBWIAOgKIgGhnIhsg5IgTAG");
	this.shape_1833.setTransform(307.2,402.5);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f().s("#292929").ss(0.3).p("Ag7hUIBwA+IAGBnIhwhCQgBgYgBgZQgDgygBAAg");
	this.shape_1834.setTransform(306.4,403);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f().s("#292929").ss(0.3).p("AhGAdICNg5");
	this.shape_1835.setTransform(340.7,426);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f().s("#292929").ss(0.3).p("ABwgaIjLgTICaBe");
	this.shape_1836.setTransform(356.3,424.6);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f().s("#292929").ss(0.3).p("AAfgKIg8AV");
	this.shape_1837.setTransform(371.3,541.6);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f().s("#292929").ss(0.3).p("AgCAPIgCgYIAOAB");
	this.shape_1838.setTransform(368.7,543.8);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f().s("#292929").ss(0.3).p("AARgKIgNAAIgPAX");
	this.shape_1839.setTransform(368,546.3);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f().s("#292929").ss(0.3).p("AAWgEIgOgCIgbAO");
	this.shape_1840.setTransform(366,548.3);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f().s("#292929").ss(0.3).p("AAJgNIgLgBIAEAi");
	this.shape_1841.setTransform(364.3,550.5);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f().s("#292929").ss(0.3).p("AAMAEIgMgGIgLAF");
	this.shape_1842.setTransform(364.6,552.8);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f().s("#292929").ss(0.3).p("AAGACIgLgD");
	this.shape_1843.setTransform(358.1,553.5);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f().s("#292929").ss(0.3).p("AgGAVIgMgDIgGgUIApgRIAMAE");
	this.shape_1844.setTransform(360,553.6);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f().s("#292929").ss(0.3).p("AAIgMIgPAa");
	this.shape_1845.setTransform(360,556.9);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f().s("#292929").ss(0.3).p("AAWAFIgNgIIggAI");
	this.shape_1846.setTransform(358.3,558.6);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f().s("#292929").ss(0.3).p("AAHATIgLgHIAAgZIALAI");
	this.shape_1847.setTransform(356.4,560.5);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f().s("#292929").ss(0.3).p("AAAgqIAABV");
	this.shape_1848.setTransform(358.4,566.7);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f().s("#292929").ss(0.3).p("AAIADIgIgEIgIAC");
	this.shape_1849.setTransform(332.2,552);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f().s("#292929").ss(0.3).p("AAMADIgMgEIgLAE");
	this.shape_1850.setTransform(330,548.8);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f().s("#292929").ss(0.3).p("AAKADIgMgFIgHAC");
	this.shape_1851.setTransform(329.1,544.1);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f().s("#292929").ss(0.3).p("AgxAWIBWgqIANAI");
	this.shape_1852.setTransform(323.1,543.7);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f().s("#292929").ss(0.3).p("AgZgBIAQgGIAjAQ");
	this.shape_1853.setTransform(311,545);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f().s("#292929").ss(0.3).p("AAAgOIAAAd");
	this.shape_1854.setTransform(301.5,558.6);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f().s("#292929").ss(0.3).p("AAiAiIAJgIIhbg7");
	this.shape_1855.setTransform(297.2,554.5);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f().s("#292929").ss(0.3).p("AgGAKIAKgGIgHgP");
	this.shape_1856.setTransform(291.9,550.7);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f().s("#292929").ss(0.3).p("AAEALIAKgHIglgO");
	this.shape_1857.setTransform(290.1,549.1);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f().s("#292929").ss(0.3).p("AAEgLIAAAOIgKAE");
	this.shape_1858.setTransform(287.3,547.7);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f().s("#292929").ss(0.3).p("AAFgVIAAAeIgLAJ");
	this.shape_1859.setTransform(289.9,545.4);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f().s("#292929").ss(0.3).p("AgqgKIAMgGIBAAbIgNAH");
	this.shape_1860.setTransform(287.1,542.1);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f().s("#292929").ss(0.3).p("AAAgMIAAAZ");
	this.shape_1861.setTransform(281.6,541.4);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f().s("#292929").ss(0.3).p("AAAAZIAAgx");
	this.shape_1862.setTransform(333.9,552.4);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1863.setTransform(335.6,551.7);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1864.setTransform(337.3,550.8);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1865.setTransform(339,550);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1866.setTransform(340.7,549.2);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1867.setTransform(342.4,548.3);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1868.setTransform(344.1,547.5);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1869.setTransform(345.8,546.7);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1870.setTransform(347.5,545.8);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1871.setTransform(349.2,545);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1872.setTransform(350.9,544.2);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f().s("#292929").ss(0.3).p("AhtA1IDYhmIAAAx");
	this.shape_1873.setTransform(342.2,545.8);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f().s("#292929").ss(0.3).p("AAAAZIAAgx");
	this.shape_1874.setTransform(336.2,556.3);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1875.setTransform(337.9,555.6);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1876.setTransform(339.6,554.7);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1877.setTransform(341.3,553.9);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1878.setTransform(343,553.1);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1879.setTransform(344.8,552.2);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1880.setTransform(346.5,551.4);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1881.setTransform(348.2,550.6);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1882.setTransform(349.9,549.7);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1883.setTransform(351.6,548.9);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f().s("#292929").ss(0.3).p("AAAAYIAAgv");
	this.shape_1884.setTransform(353.3,548.1);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f().s("#292929").ss(0.3).p("AhtA1IDYhmIAAAx");
	this.shape_1885.setTransform(344.5,549.7);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f().s("#292929").ss(0.3).p("AgkAGIA9gKIAJAL");
	this.shape_1886.setTransform(341.2,569.9);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f().s("#292929").ss(0.3).p("AgNAHIAcgN");
	this.shape_1887.setTransform(334.8,565);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIAMAF");
	this.shape_1888.setTransform(292.4,469);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1889.setTransform(284.1,468.3);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f().s("#292929").ss(0.3).p("AgSAHIAYgLIAMAF");
	this.shape_1890.setTransform(283.4,472.3);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1891.setTransform(275.1,471.6);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIANAF");
	this.shape_1892.setTransform(274.4,475.6);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1893.setTransform(266.1,474.7);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f().s("#292929").ss(0.3).p("AAAghIAABE");
	this.shape_1894.setTransform(257.1,477.8);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIAMAF");
	this.shape_1895.setTransform(292.4,454.9);

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABF");
	this.shape_1896.setTransform(284.1,454.2);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f().s("#292929").ss(0.3).p("AgSAHIAYgLIAMAF");
	this.shape_1897.setTransform(283.4,458.2);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIANAF");
	this.shape_1898.setTransform(274.4,461.5);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f().s("#292929").ss(0.3).p("AAAghIAABD");
	this.shape_1899.setTransform(266.1,460.6);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgMIAMAG");
	this.shape_1900.setTransform(265.4,464.6);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f().s("#292929").ss(0.3).p("AAAgiIAABE");
	this.shape_1901.setTransform(257.1,463.7);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f().s("#292929").ss(0.3).p("AgRAHIAXgLIANAF");
	this.shape_1902.setTransform(256.3,467.7);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f().s("#292929").ss(0.3).p("AAAgfIAAA/");
	this.shape_1903.setTransform(244.8,471.7);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f().s("#292929").ss(0.3).p("AASAKIgXgRIgNAF");
	this.shape_1904.setTransform(245.4,475.7);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f().s("#292929").ss(0.3).p("AAAgfIAAA/");
	this.shape_1905.setTransform(244.8,484.7);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f().s("#292929").ss(0.3).p("AASAKIgXgRIgNAF");
	this.shape_1906.setTransform(245.4,488.8);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f().s("#292929").ss(0.3).p("AASAKIgYgRIgMAF");
	this.shape_1907.setTransform(253.1,494);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f().s("#292929").ss(0.3).p("AgOAEIAdgH");
	this.shape_1908.setTransform(123.9,396.1);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f().s("#292929").ss(0.3).p("AAQgOIgZAOIAUAOIAGgC");
	this.shape_1909.setTransform(452.2,535.5);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f().s("#292929").ss(0.3).p("AAkgHIgUgMIgsAYIAVAPIAqgV");
	this.shape_1910.setTransform(450.3,532.2);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.f().s("#292929").ss(0.3).p("AgiAFIAVAPIAwgYIgZgPg");
	this.shape_1911.setTransform(447.5,529.5,1,1,0,0,0,0.3,0);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.f().s("#292929").ss(0.3).p("AgcgSIALgGIAqAiIgXAPIgfga");
	this.shape_1912.setTransform(421.2,538.8);

	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.f().s("#292929").ss(0.3).p("AAhAJIgXAQIgqgkIAYgNg");
	this.shape_1913.setTransform(423.7,536.5,1,1,0,0,0,-0.3,0);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.f().s("#292929").ss(0.3).p("AAhAJIgXAQIgqgkIAYgNg");
	this.shape_1914.setTransform(427.3,534.2,1,1,0,0,0,-0.3,0);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.f().s("#292929").ss(0.3).p("AAhAKIgXAPIgqgjIAYgOg");
	this.shape_1915.setTransform(430.9,531.9,1,1,0,0,0,-0.3,0);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.f().s("#292929").ss(0.3).p("AAhAJIgWAQIgrgkIAYgNg");
	this.shape_1916.setTransform(434.5,529.7,1,1,0,0,0,-0.3,0);

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.f().s("#292929").ss(0.3).p("AgjAkIBAgeIhBgq");
	this.shape_1917.setTransform(421.9,506.2);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.f().s("#292929").ss(0.3).p("AgiAQIBFgg");
	this.shape_1918.setTransform(423.2,511.7);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.f().s("#292929").ss(0.3).p("AgRAIIAjgP");
	this.shape_1919.setTransform(424.9,515.3);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.f().s("#292929").ss(0.3).p("AgtAXIBbgt");
	this.shape_1920.setTransform(432.1,517.4);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.f().s("#292929").ss(0.3).p("AgmAVIBNgp");
	this.shape_1921.setTransform(435.4,520.7);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.f().s("#292929").ss(0.3).p("AAoASIgxghIgeAP");
	this.shape_1922.setTransform(446.1,522.6);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.f().s("#292929").ss(0.3).p("AATgJIglAT");
	this.shape_1923.setTransform(437.2,525);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.f().s("#292929").ss(0.3).p("AANgUIAAAVIgZAMIAAgW");
	this.shape_1924.setTransform(428.1,514.2);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.f().s("#292929").ss(0.3).p("AgMAVIAAgWIAZgLIAAAX");
	this.shape_1925.setTransform(428.1,508.9);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.f().s("#292929").ss(0.3).p("AAFAAQABAJgEABQgEABgCgKQgBgJAEgBQAEgBACAKg");
	this.shape_1926.setTransform(425,512.8);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.f().s("#292929").ss(0.3).p("AhagnICmg/QADgBADAHQADAHgEAFIgIAEQgBBFAHA8QAEAeAEARQgSAOgQgOQAGhggEhLIiMA4");
	this.shape_1927.setTransform(433.8,515.8);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.f().s("#292929").ss(0.3).p("AiwhWIDXCrICLhH");
	this.shape_1928.setTransform(436.1,521.2);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.f().s("#292929").ss(0.3).p("AHWD1IiMA/QguAYgzgHQg0gIglgkIpipFIAAge");
	this.shape_1929.setTransform(192.9,491.6);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f().s("#292929").ss(0.3).p("ADiEIIm1nQQgQgRAEgWQADgNAFgN");
	this.shape_1930.setTransform(128.5,429.7);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.f().s("#292929").ss(0.3).p("AKcIhIiNBAQguAXgzgHQgzgIglgkIpdpBQgJgJAEgMQAEgNANgCIAugGIm6nVQgXgXAJgfQAIggAggIIBcgZ");
	this.shape_1931.setTransform(173.1,459.7);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.f().s("#292929").ss(0.3).p("AgSAAQAAADAGACQAFADAHAAQAIAAAFgDQAGgCAAgDQAAgDgGgCQgFgCgIAAQgHAAgFACQgGACAAADg");
	this.shape_1932.setTransform(210,485.2);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.f("#FFFFFF").s().p("AgMAFQgGgCAAgDQAAgDAGgCQAFgCAHAAQAIAAAFACQAGACAAADQAAADgGACQgFADgIAAQgHAAgFgDg");
	this.shape_1933.setTransform(210,485.2);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.f().s("#292929").ss(0.3).p("AgTAAQAAAFAGADQAFACAIAAQAIAAAGgCQAGgDAAgFQAAgEgGgDQgGgCgIAAQgIAAgFACQgGADAAAEg");
	this.shape_1934.setTransform(210.1,485.5);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.f("#FFFFFF").s().p("AgNAIQgGgDAAgFQAAgEAGgDQAGgCAHAAQAIAAAGACQAGADAAAEQAAAFgGADQgGACgIAAQgHAAgGgCg");
	this.shape_1935.setTransform(210.1,485.5);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.f().s("#292929").ss(0.3).p("ABRgDQgrgXgogBIghAEQAvgEAoAXQATALAKAMg");
	this.shape_1936.setTransform(212.7,487);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.f("#FFFFFF").s().p("AAdAAQgmgWgxADIAhgDQAoABArAWIAAAWQgJgMgUgLg");
	this.shape_1937.setTransform(215,486.6);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.f().s("#292929").ss(0.3).p("AAOABIgMAFIgOgIIAMgDg");
	this.shape_1938.setTransform(220.7,485.1);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.f("#FFFFFF").s().p("AgMgBIAMgEIANAGIgMAFg");
	this.shape_1939.setTransform(220.7,485.1);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f().s("#292929").ss(0.3).p("AAAimIAAE6QABAOAEAB");
	this.shape_1940.setTransform(220.9,502.4);

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f("#FFFFFF").s().p("AgBBxIAAjvIADD9QgDAAAAgOg");
	this.shape_1941.setTransform(221.2,506);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.f().s("#292929").ss(0.3).p("AgMisIAAEmQAAAVgFAGQAAAIAFAFQAGAGAGAAQAIAAAFgGQAGgFAAgIQgGgEAAgVIAAkk");
	this.shape_1942.setTransform(220.8,502.2);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f("#FFFFFF").s().p("AgMClQgFgGgBgHQAGgGAAgVIAAkmIAZADIAAEkQAAAVAFAFQABAHgGAGQgGAFgHAAQgGAAgGgFg");
	this.shape_1943.setTransform(220.8,501.9);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.f().s("#292929").ss(0.3).p("AgQAAQAAAEAFACQAFADAGAAQAHAAAFgDQAFgCAAgEQAAgCgFgDQgFgCgHAAQgGAAgFACQgFADAAACg");
	this.shape_1944.setTransform(111.8,371.3);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.f("#FFFFFF").s().p("AgLAGQgFgDAAgDQAAgDAFgCQAFgCAGgBQAHABAFACQAFACAAADQAAADgFADQgFADgHgBQgGAAgFgCg");
	this.shape_1945.setTransform(111.8,371.3);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f().s("#292929").ss(0.3).p("AgRAAQAAAFAGADQAFADAGAAQAHAAAGgDQAFgDAAgFQAAgEgFgDQgGgDgHAAQgGAAgFADQgGADAAAEg");
	this.shape_1946.setTransform(111.8,371.6);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f("#FFFFFF").s().p("AgLAIQgGgDAAgFQAAgEAGgDQAFgDAGAAQAHAAAGADQAFADAAAEQAAAFgFADQgGADgHAAQgGAAgFgDg");
	this.shape_1947.setTransform(111.8,371.6);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.f().s("#292929").ss(0.3).p("ABLgEQgngZgkAAIgcAEQAqgEAiAYQASALAIANg");
	this.shape_1948.setTransform(113.9,373.3);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f("#FFFFFF").s().p("AAaAAQgigYgrAFIAdgFQAjABAnAYIAAAYQgJgNgRgMg");
	this.shape_1949.setTransform(116.2,372.8);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f().s("#292929").ss(0.3).p("AANABIgLAFIgMgHIALgEg");
	this.shape_1950.setTransform(121.2,371.2);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.f("#FFFFFF").s().p("AgLgBIALgEIAMAGIgLAFg");
	this.shape_1951.setTransform(121.3,371.2);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f().s("#292929").ss(0.3).p("AAAiuIAAFJQABAPADAB");
	this.shape_1952.setTransform(121.4,389.4);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f("#FFFFFF").s().p("AgBBYIABi/IACDPQgCgBgBgPg");
	this.shape_1953.setTransform(121.6,396);

	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.f().s("#292929").ss(0.3).p("AgLi0IAAE0QAAAWgEAGQAAAIAFAGQAFAGAFAAQAHAAAFgGQAEgFAAgJQgFgEAAgWIAAkz");
	this.shape_1954.setTransform(121.3,389.1);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.f("#FFFFFF").s().p("AgKCtQgFgHAAgIQAEgFAAgXIAAkzIAWADIAAEyQAAAXAFADQAAAJgEAGQgFAFgHABQgFgBgFgFg");
	this.shape_1955.setTransform(121.3,388.9);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f().s("#292929").ss(0.3).p("AmRCbIAXAFQAdAFAfADQB6APBngNQCTgSBPhLQCViKB1hz");
	this.shape_1956.setTransform(740.9,456.8);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.f().s("#292929").ss(0.3).p("AEPi8Qh7B8imCbQhWBRikAPIABgX");
	this.shape_1957.setTransform(756.1,457.7);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.f().s("#292929").ss(0.3).p("An7EnIBZgKQBogCBNAjILgpOIhdgv");
	this.shape_1958.setTransform(634.2,543.1);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.f().s("#292929").ss(0.3).p("AcUljIgDATI5fU2I/F+7IAAgW");
	this.shape_1959.setTransform(408,627.2);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.f().s("#292929").ss(0.3).p("AbLlcIBIApI5hUyI/F+6ICFhF");
	this.shape_1960.setTransform(408,622.4);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.f().s("#292929").ss(0.3).p("AApgYIhRAx");
	this.shape_1961.setTransform(341.8,634.3);

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.f().s("#292929").ss(0.3).p("AAtgZIhZAz");
	this.shape_1962.setTransform(351.2,643.1);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f().s("#292929").ss(0.3).p("AAugcIhbA5");
	this.shape_1963.setTransform(360.1,652);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f().s("#292929").ss(0.3).p("AAugcIhbA5");
	this.shape_1964.setTransform(369.5,660.7);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f().s("#292929").ss(0.3).p("AAegTIg7An");
	this.shape_1965.setTransform(376.8,670.5);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f().s("#292929").ss(0.3).p("ABOgvIibBf");
	this.shape_1966.setTransform(390.6,676.7);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f().s("#292929").ss(0.3).p("AB1hGIjpCN");
	this.shape_1967.setTransform(405.7,685.5);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f().s("#292929").ss(0.3).p("ABQgyIifBl");
	this.shape_1968.setTransform(436.6,684.8);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f().s("#292929").ss(0.3).p("ABihHIjDCO");
	this.shape_1969.setTransform(417.1,698.2);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f().s("#292929").ss(0.3).p("ACUCQIknkf");
	this.shape_1970.setTransform(432.2,692.7);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f().s("#292929").ss(0.3).p("ABVBOIipib");
	this.shape_1971.setTransform(453.1,687.4);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f().s("#292929").ss(0.3).p("AA6AwIhzhf");
	this.shape_1972.setTransform(470.6,678.9);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f().s("#292929").ss(0.3).p("AAgAZIg/gy");
	this.shape_1973.setTransform(484.9,671.1);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f().s("#292929").ss(0.3).p("AgqggIBVBB");
	this.shape_1974.setTransform(503.3,654.8);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f().s("#292929").ss(0.3).p("AgsghIBYBD");
	this.shape_1975.setTransform(496.9,659.6);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f().s("#292929").ss(0.3).p("AgugjIBdBH");
	this.shape_1976.setTransform(490.6,664.5);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f().s("#292929").ss(0.3).p("AgmgeIBNA9");
	this.shape_1977.setTransform(516,645.3);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f().s("#292929").ss(0.3).p("AgngfIBQA/");
	this.shape_1978.setTransform(509.6,650);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f().s("#292929").ss(0.3).p("AhPgZICfA0");
	this.shape_1979.setTransform(671.6,465);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f().s("#292929").ss(0.3).p("AlUgUICSAwIA7AKQBKALBFAAQDhABBrhj");
	this.shape_1980.setTransform(720.2,471.9);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f().s("#292929").ss(0.3).p("Ah9AvQCigPBWhP");
	this.shape_1981.setTransform(741.9,469.4);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f().s("#292929").ss(0.3).p("AhRgaICjA1");
	this.shape_1982.setTransform(671.7,462.7);

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f().s("#292929").ss(0.3).p("AgMgDIAZAH");
	this.shape_1983.setTransform(684.5,467);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f().s("#292929").ss(0.3).p("AgFgBIALAD");
	this.shape_1984.setTransform(689.2,468.5);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f().s("#292929").ss(0.3).p("AgqgNIBVAb");
	this.shape_1985.setTransform(696.4,470.9);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gV");
	this.shape_1986.setTransform(713.8,478.7);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gU");
	this.shape_1987.setTransform(711,481.1);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gV");
	this.shape_1988.setTransform(708.2,483.4);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gU");
	this.shape_1989.setTransform(705.4,485.8);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f().s("#292929").ss(0.3).p("AAgAKIg/gU");
	this.shape_1990.setTransform(702.6,488.2);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gV");
	this.shape_1991.setTransform(699.7,490.5);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_1992.setTransform(698,488.3);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_1993.setTransform(703.6,483.6);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f().s("#292929").ss(0.3).p("AgMALIAZgV");
	this.shape_1994.setTransform(709.2,478.8);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_1995.setTransform(704.3,490.4);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_1996.setTransform(710,485.7);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_1997.setTransform(715.6,480.9);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f().s("#292929").ss(0.3).p("AAgAKIg/gT");
	this.shape_1998.setTransform(697.3,493.2);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gV");
	this.shape_1999.setTransform(694.4,495.6);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f().s("#292929").ss(0.3).p("AAgAKIg/gT");
	this.shape_2000.setTransform(691.6,498);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gV");
	this.shape_2001.setTransform(688.8,500.3);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f().s("#292929").ss(0.3).p("AAgAKIg/gT");
	this.shape_2002.setTransform(686,502.7);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gU");
	this.shape_2003.setTransform(683.2,505.1);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gV");
	this.shape_2004.setTransform(680.4,507.4);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f().s("#292929").ss(0.3).p("AAgALIg/gU");
	this.shape_2005.setTransform(677.6,509.8);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2006.setTransform(675.8,507.6);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2007.setTransform(681.4,502.8);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f().s("#292929").ss(0.3).p("AgMALIAZgV");
	this.shape_2008.setTransform(687,498.1);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2009.setTransform(692.7,493.4);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2010.setTransform(682.1,509.7);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2011.setTransform(687.8,504.9);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2012.setTransform(693.4,500.2);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f().s("#292929").ss(0.3).p("AgNAMIAbgX");
	this.shape_2013.setTransform(699.1,495.4);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f().s("#292929").ss(0.3).p("AALgTIAAAUIgVALIAAgV");
	this.shape_2014.setTransform(432.2,512.6);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f().s("#292929").ss(0.3).p("AgKAVIAAgYIAVgJIAAAX");
	this.shape_2015.setTransform(432.2,507.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2015},{t:this.shape_2014},{t:this.shape_2013},{t:this.shape_2012},{t:this.shape_2011},{t:this.shape_2010},{t:this.shape_2009},{t:this.shape_2008},{t:this.shape_2007},{t:this.shape_2006},{t:this.shape_2005},{t:this.shape_2004},{t:this.shape_2003},{t:this.shape_2002},{t:this.shape_2001},{t:this.shape_2000},{t:this.shape_1999},{t:this.shape_1998},{t:this.shape_1997},{t:this.shape_1996},{t:this.shape_1995},{t:this.shape_1994},{t:this.shape_1993},{t:this.shape_1992},{t:this.shape_1991},{t:this.shape_1990},{t:this.shape_1989},{t:this.shape_1988},{t:this.shape_1987},{t:this.shape_1986},{t:this.shape_1985},{t:this.shape_1984},{t:this.shape_1983},{t:this.shape_1982},{t:this.shape_1981},{t:this.shape_1980},{t:this.shape_1979},{t:this.shape_1978},{t:this.shape_1977},{t:this.shape_1976},{t:this.shape_1975},{t:this.shape_1974},{t:this.shape_1973},{t:this.shape_1972},{t:this.shape_1971},{t:this.shape_1970},{t:this.shape_1969},{t:this.shape_1968},{t:this.shape_1967},{t:this.shape_1966},{t:this.shape_1965},{t:this.shape_1964},{t:this.shape_1963},{t:this.shape_1962},{t:this.shape_1961},{t:this.shape_1960},{t:this.shape_1959},{t:this.shape_1958},{t:this.shape_1957},{t:this.shape_1956},{t:this.shape_1955},{t:this.shape_1954},{t:this.shape_1953},{t:this.shape_1952},{t:this.shape_1951},{t:this.shape_1950},{t:this.shape_1949},{t:this.shape_1948},{t:this.shape_1947},{t:this.shape_1946},{t:this.shape_1945},{t:this.shape_1944},{t:this.shape_1943},{t:this.shape_1942},{t:this.shape_1941},{t:this.shape_1940},{t:this.shape_1939},{t:this.shape_1938},{t:this.shape_1937},{t:this.shape_1936},{t:this.shape_1935},{t:this.shape_1934},{t:this.shape_1933},{t:this.shape_1932},{t:this.shape_1931},{t:this.shape_1930},{t:this.shape_1929},{t:this.shape_1928},{t:this.shape_1927},{t:this.shape_1926},{t:this.shape_1925},{t:this.shape_1924},{t:this.shape_1923},{t:this.shape_1922},{t:this.shape_1921},{t:this.shape_1920},{t:this.shape_1919},{t:this.shape_1918},{t:this.shape_1917},{t:this.shape_1916},{t:this.shape_1915},{t:this.shape_1914},{t:this.shape_1913},{t:this.shape_1912},{t:this.shape_1911},{t:this.shape_1910},{t:this.shape_1909},{t:this.shape_1908},{t:this.shape_1907},{t:this.shape_1906},{t:this.shape_1905},{t:this.shape_1904},{t:this.shape_1903},{t:this.shape_1902},{t:this.shape_1901},{t:this.shape_1900},{t:this.shape_1899},{t:this.shape_1898},{t:this.shape_1897},{t:this.shape_1896},{t:this.shape_1895},{t:this.shape_1894},{t:this.shape_1893},{t:this.shape_1892},{t:this.shape_1891},{t:this.shape_1890},{t:this.shape_1889},{t:this.shape_1888},{t:this.shape_1887},{t:this.shape_1886},{t:this.shape_1885},{t:this.shape_1884},{t:this.shape_1883},{t:this.shape_1882},{t:this.shape_1881},{t:this.shape_1880},{t:this.shape_1879},{t:this.shape_1878},{t:this.shape_1877},{t:this.shape_1876},{t:this.shape_1875},{t:this.shape_1874},{t:this.shape_1873},{t:this.shape_1872},{t:this.shape_1871},{t:this.shape_1870},{t:this.shape_1869},{t:this.shape_1868},{t:this.shape_1867},{t:this.shape_1866},{t:this.shape_1865},{t:this.shape_1864},{t:this.shape_1863},{t:this.shape_1862},{t:this.shape_1861},{t:this.shape_1860},{t:this.shape_1859},{t:this.shape_1858},{t:this.shape_1857},{t:this.shape_1856},{t:this.shape_1855},{t:this.shape_1854},{t:this.shape_1853},{t:this.shape_1852},{t:this.shape_1851},{t:this.shape_1850},{t:this.shape_1849},{t:this.shape_1848},{t:this.shape_1847},{t:this.shape_1846},{t:this.shape_1845},{t:this.shape_1844},{t:this.shape_1843},{t:this.shape_1842},{t:this.shape_1841},{t:this.shape_1840},{t:this.shape_1839},{t:this.shape_1838},{t:this.shape_1837},{t:this.shape_1836},{t:this.shape_1835},{t:this.shape_1834},{t:this.shape_1833},{t:this.shape_1832},{t:this.shape_1831},{t:this.shape_1830},{t:this.shape_1829},{t:this.shape_1828},{t:this.shape_1827},{t:this.shape_1826},{t:this.shape_1825},{t:this.shape_1824},{t:this.shape_1823},{t:this.shape_1822},{t:this.shape_1821},{t:this.shape_1820},{t:this.shape_1819},{t:this.shape_1818},{t:this.shape_1817},{t:this.shape_1816},{t:this.shape_1815},{t:this.shape_1814},{t:this.shape_1813},{t:this.shape_1812},{t:this.shape_1811},{t:this.shape_1810},{t:this.shape_1809},{t:this.shape_1808},{t:this.shape_1807},{t:this.shape_1806},{t:this.shape_1805},{t:this.shape_1804},{t:this.shape_1803},{t:this.shape_1802},{t:this.shape_1801},{t:this.shape_1800},{t:this.shape_1799},{t:this.shape_1798},{t:this.shape_1797},{t:this.shape_1796},{t:this.shape_1795},{t:this.shape_1794},{t:this.shape_1793},{t:this.shape_1792},{t:this.shape_1791},{t:this.shape_1790},{t:this.shape_1789},{t:this.shape_1788},{t:this.shape_1787},{t:this.shape_1786},{t:this.shape_1785},{t:this.shape_1784},{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1781},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1778},{t:this.shape_1777},{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.instance_2},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.WholeCity, new cjs.Rectangle(-1,-1,871.8,729), null);


// stage content:
(lib.heartcityidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CITY
	this.instance = new lib.WholeCity();
	this.instance.parent = this;
	this.instance.setTransform(466.6,375.5,1,1,0,0,0,391.6,363.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:436.9,regY:363.6,scaleX:1,scaleY:1,x:511.7,y:375.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:511.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:511.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:511.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:512.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:513.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:512.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:512.2},0).wait(1).to({scaleX:1,scaleY:1,x:511.8},0).wait(1).to({scaleX:1,scaleY:1,x:512.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:512.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:513.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:512.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:512.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:512.2},0).wait(1).to({scaleX:1,scaleY:1,x:511.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(586.8,386.9,871,727.2);
// library properties:
lib.properties = {
	width: 1024,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;