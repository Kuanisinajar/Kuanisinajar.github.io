var myHeartIsEmpty = true ;
var day = [];

/* Daily Line */
/* [how I feel about today, did I make friends happy, did I have any achievement, did I see improvements of myself, did I like my self a little bit more] */
day[0] = [7, true, true, true, true];
day[1] = [6, true, false, false, false];
day[2] = [6, true, false, false, false];
day[3] = [6, true, false, false, false];
day[4] = [4, false, false, false, false];
day[5] = [4, false, false, false, false];
day[6] = [4, false, false, false, false];
day[7] = [5, true, false, false, false];
day[8] = [6, true, false, false, false];
day[9] = [6, true, false, false, false];
day[10] = [6, true, false, false, false];
day[11] = [7, true, false, false, false];
day[12] = [7, true, false, false, false];
day[13] = [7, true, false, false, false];
day[14] = [7, true, false, false, false];
day[15] = [6, true, false, false, false];
day[16] = [6, false, false, false, false];
day[17] = [7, true, false, false, false];
day[18] = [6, false, false, false, false];
day[19] = [7, true, false, false, false];
day[20] = [5, false, false, false, false];
day[21] = [7, false, false, false, false];
day[22] = [7, false, false, false, false];
day[23] = [6, false, false, false, false];
day[24] = [7, true, false, false, false];
day[25] = [6, false, false, false, false];
day[26] = [5, false, false, false, false];
day[27] = [5, false, false, false, false];
day[28] = [5, false, false, false, false];
day[29] = [5, false, false, false, false];
day[30] = [6, false, false, true, false];
day[31] = [6, false, true, false, false];
day[32] = [6, false, false, false, false];
day[33] = [6, true, false, true, false];
day[34] = [6, true, false, true, false];
day[35] = [7, true, false, true, false];
day[36] = [7, true, false, false, true];
day[37] = [6, false, false, false, false];
day[38] = [7, false, false, false, true];
day[39] = [6, false, false, true, false];
day[40] = [6, false, false, true, true];
day[41] = [6, true, false, true, false];
day[42] = [6, true, false, true, false];
day[43] = [7, true, false, true, true];
day[44] = [5, false, false, false, false];
day[45] = [7, true, false, true, true];
day[46] = [7, true, false, true, true];
day[47] = [5, false, false, false, false];
day[48] = [6, false, false, true, true];
day[49] = [6, false, false, true, false];
day[50] = [6, false, false, true, false];
day[51] = [7, false, false, true, false];
day[52] = [6, false, false, false, false];
day[53] = [6, false, false, false, false];
day[54] = [6, true, false, false, false];
day[55] = [6, true, false, false, false];
day[56] = [6, false, false, true, false];
day[57] = [5, false, false, false, false];
day[58] = [5, false, false, false, false];
day[59] = [4, false, false, false, false];
day[60] = [5, true, false, false, false];
day[61] = [5, false, false, false, false];
day[62] = [5, false, false, false, false];
day[63] = [5, true, false, false, false];

/* ------- */
var totalDays = day.length;
var dailyDots = document.getElementsByClassName('dots');
var checkList = new Array(4);
checkList[0] = [];
checkList[1] = [];
checkList[2] = [];
checkList[3] = [];
var buildList = function(){
	for (var i=0; i < dailyDots.length; i++) {
		checkList[0].push(day[i][1]);
		checkList[1].push(day[i][2]);
		checkList[2].push(day[i][3]);
		checkList[3].push(day[i][4]);
	}
};
var dailyValue=[];
var drainSpeed = 0;
var credits = -totalDays;
var checkDay = function(i){
	var a = (day[i].filter(function(z){return z;}).length-1)/4;
	if (a === 0){return 0.9}
	else if (a === 0.25){return 1}
	else if (a === 0.5){ return 1.125}
	else if (a === 0.75){return 1.15}
	else if (a ===1){return 1.2}
};
var calcDailyValue = function(){
	for (i=0; i < dailyDots.length; i++) {
		dailyValue[i] = day[i][0]*0.1*checkDay(i);
	};
};
var dailyBase = function(i){
	return day[i][0]*0.1*checkDay(i);
};
var calcDrainSpeed = function(){
	for (i=0; i < 4; i++){
		drainSpeed += checkList[i].filter(function(x){return !x;}).length * 0.001;
		drainSpeed -= checkList[i].filter(function(x){return x;}).length * 0.001;
	}
};
var compare1 = function(){
	for (i=0; i < dailyDots.length; i++){
		dailyValue[i] -= checkList[0].filter(function(x){return !x;}).length * 0.003;
		dailyValue[i] -= checkList[1].filter(function(x){return !x;}).length * 0.002;
		dailyValue[i] -= checkList[2].filter(function(x){return !x;}).length * 0.002;
		dailyValue[i] -= checkList[3].filter(function(x){return !x;}).length * 0.003;
		dailyValue[i] += checkList[0].filter(function(x){return x;}).length * 0.005;
		dailyValue[i] += checkList[1].filter(function(x){return x;}).length * 0.03;
		dailyValue[i] += checkList[2].filter(function(x){return x;}).length * 0.003;
		dailyValue[i] += checkList[3].filter(function(x){return x;}).length * 0.003;
	}
};
var compare2 = function(){
	for (i=0; i < dailyDots.length; i++){
		for (ii=0; ii<4; ii++){
			if (checkList[ii][i]===true && checkList[ii][i-1]===false){
				var iii=1;
				var iiii = 0;
				var a = 0;
				var b = 0;
				while (checkList[ii][i - iii]===false){
					a+=1;
					iii++;
					dailyValue[i-iii] -= a*0.002;
					drainSpeed += a*0.0001;
				};
				while (checkList[ii][i + iiii]===true){
					b+=1;
					iiii++;
					dailyValue[i + iiii] += b*0.002;
					drainSpeed -= b*0.001;
				};
				for (iiiii=0; iiiii < dailyDots.length; iiiii++){
					dailyValue[iiiii] -= a*0.001;
					dailyValue[iiiii] += b*0.002;
				}
				dailyValue[i] += a*0.001;
				credits += b+1;
			}
		}
	}
};
var drain = function(){
	for (i=0; i < dailyDots.length; i++){
		var d = drainSpeed;
		if (d < 0) {d === 0};
		dailyValue[i] -= d * (totalDays - i) * 0.01;
	}
};
var paintDots = function(){
	for (i=0; i < dailyDots.length; i++){
		if (dailyValue[i]<0){dailyValue[i]=0.001};
		dailyDots[i].style.opacity = dailyValue[i];
	}
};
var calcCredits = function(){
	for (i=0; i < dailyDots.length; i++){
		if (day[i].filter(function(x){return x;}).length > 2){
			credits += day[i].filter(function(x){return x;}).length - 3;
		};
		if (dailyValue[i]>0.5){
			credits += 1;
		}
	};
	credits += checkList[1].filter(function(x){return x;}).length * 10;
};
var check = function(){
	if (credits > 1020){
		myHeartIsEmpty = false;
	}
};
var logIndex = document.getElementsByClassName('log');
var showLog = function(i){
	dailyDots[i].onclick = function(){
		$('.log-area').show();
		logIndex[i].style.display = 'block';
	};
};
function closeDiary(){
	$('.log-area').hide();
	$('.log').hide();
};
/* Welcome Animation */
var secondPartAnime = function(){
	$('.notification').fadeOut(1600, function(){
		$('.welcome').fadeOut(1600);
	});
};
var playSecondPartAnime = function(){
	setTimeout(secondPartAnime, 2400);
};
var opening = function(){
	$('.title').fadeOut(1600, function(){
		$('.notification').fadeIn(1600, playSecondPartAnime);
	});
};
var txtNum = 0;
var clickClose = function(){
	$('.title').hide();
	$('.notification').show();
	txtNum += 1;
	if (txtNum === 1){
		$('.welcome').on('click', function(){$(this).hide();});
	}
};
var killWelcome = function(){
	$('.welcome').on('click', function(){clickClose();});
	setTimeout(opening, 2400);
};
/* Long Press*/
var timer;
var longPress = false;
var timeDuration = 2100;
var startCount = function(){
	longPress = true;
	timer = setTimeout(function(){callAbout();}, timeDuration);
};
var callAbout = function(){
	if(timer){
		clearTimeout(timer);
	};
	if(longPress){
		$('.about').show();
	}
};
var revert = function(){
	longPress = false;
};
/* Change about and appendix */
var appendix = function(){
	$('.appendix').toggle();
	$('.story').toggle();
	$('.appendix-button').toggle();
	$('.about-button').toggle()
}
var closeAbout = function(){
	$('.about').hide();
};
/* commands */
var command = function(){
	console.log("Try to type these commands:");
	console.log("rules()");
	console.log("myHeartIsEmpty")
	console.log("totalDays");
	console.log("day[the number of the day]");
	console.log("dailyBase(the number of the day)");
	console.log("dailyValue[the number of the day]");
	console.log("credits");
	console.log("//");
	console.log("If you want more hard code, here you can type:");
	console.log("checkDay");
	console.log("calcDailyValue");
	console.log("compare1");
	console.log("compare2");
	console.log("drain");
	console.log("paintDots");
	console.log("calcCredits");
};
var rules = function(){
	console.log("Every Day I create an array.");
	console.log("It appears like this: " + "[" + day[0] + "]");
	console.log("It means [how i feel about today in 1-10 scale, did I make friends happy, did I achieve something, did I see improvements of myself, did I love myself a bit more]");
	console.log("Try typing \"day[the number of the day]\" in this console.");
	console.log("Now let's talk about the rules.");
	console.log("The performance would be calculated and printed as a dot.");
	console.log("To see the daily base, type \"dailyBase(the number of the day)\"");
	console.log("In general, if I keep having false, the dots will slowly disapper.");
	console.log("If I have true, the dots will appear more solid.");
	console.log("Try typing \"dailyValue[the number of the day]\" to see the end result of the day.")
	console.log("The performance will also be calculated into credits.");
	console.log("Try typing \"credits\" in this console.");
	console.log("When the value is over 1020, myHeartIsEmpty will be false.");
	console.log("If you would like to know how it is calculated,");
	console.log("try typing: ");
	console.log("checkDay");
	console.log("calcDailyValue");
	console.log("compare1");
	console.log("compare2");
};
$(document).ready(
	function(){
		killWelcome();
		calcDailyValue();
		buildList();
		calcDrainSpeed();
		compare1();
		compare2();
		drain();
		paintDots();
		calcCredits();
		check();
		for(i=0; i < dailyDots.length; i++){
			showLog(i);
		};
		$('body').mousedown(function(){startCount();});
		$('body').mouseup(function(){revert()});
		$('body').on('touchstart', function(){startCount();});
		$('body').on('touchend', function(){revert();});

	}
);
