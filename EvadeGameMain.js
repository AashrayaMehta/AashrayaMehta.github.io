$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

/*
This game is called EVADE AND CONSISTS OF THREE MINI-GAMES called Investigations. THE THEME REVOLVES AROUND A DETECTIVE WHO IS SEARCHING FOR CLUES
	
MINI-GAME 1) car with acceleration control that searches for clues. The player has to evade the light of the guards. 
			Player cannot touch walls or score cannot be less than 0 else game ends. Player earns points for clues and rewards increase as game progresses.  
			The lasers of the enemy also cause more damage as player progresses through levels. 
			Difficulty of obstacles also increases in every level along with more enemies.
`			There are 5 levels In this mini-game.			

MINI-GAME 2) A while loop and number generator determine the number of clues player has to find. Global variable "result" is used in functions player2(); 
and player2new();. As a result the respective number of clues are hidden under various objects. The Clue meter goes off during every click that triggers
the sound of a clue found.   

MINI-GAME 3) Dodge the incoming rocks. The number of rocks increase when score is high and decrease when score is low. Uses splice to do this.

*/
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var screen = 1; //////0 = game over/////1 = menue////2 = help menue////3 = choose player screen///4 = player 1 game//////5 = player 2 game///////6 = player 3 game//
	var background1 = new Image (); //////menue//////
	var menuscreen = new Image ();
	var playx,playy,playsx,playsy; //////menue/////
	var footglass = new Image ();
	var footglassx,footglassy,footglasssx,footglasssy;
	var helpx,helpy,helpsx,helpsy; //////menue//////
	var inhelpx,inhelpy,inhelpsx,inhelpsy; ////////menue/////
	var keyboard = new Image (); /////menue///////
	var keyx,keyy,keysx,keysy; //////help window///
	var helpbg = new Image ();	//////////help Window Background/////////
	var menu = new Image ();/////////button to go back to menu///////////////
	var menux,menuy,menusx,menusy;///////////menue button////////
	var back = new Image ();/////////////////back button///////////
	var backx,backy,backsx,backsy;	///////////back button To Choose Player Screen//////////
	var playagain = new Image ();	///////////////Play Again for Investigation 1 If Game Over/////////////////////
	var investigation = new Image ();	///////////////////Game Over Investigation Sign//////////////////////
	var investigationx,investigationy,investigationsx,investigationsy;
	var one = new Image ();	/////////////////Game Over Investigation 1 Replay////////////////////
	var onex,oney,onesx,onesy;
	var two = new Image ();	////////////////////Game Over Investigation 2 Replay////////////////////
	var twox,twoy,twosx,twosy;
	var three = new Image ();	//////////////Game Over Investigation 3 Replay////////////////////
	var threex,threey,threesx,threesy;
	var solved = new Image (); ////////////Marks the end of MINI-GAME 1//////////////
	var check = new Image (); ////////////Marks the end of MINI-GAME 2//////////////
	var checkx,checky,checksx,checksy; 
	///////////////////////////////////////////////////////
	var playagainx,playagainy,playagainsx,playagainsy;	
	var choosex,choosey,choosesx,choosesy; ///////choose players/////
	var show1x,show1y,show1sx,show1sy; /////////choose players////
	var show2x,show2y,show2sx,show2sy; /////////choose players////
	var show3x,show3y,show3sx,show3sy; /////////choose players////
	var show1 = new Image (); //////choose player//////
	var show2 = new Image (); ////////choose players//////
	var show3 = new Image (); ////////choose players/////
	var show1speedxr,show1speedyd,show1speedxl,show1speedyu; //////////Player 1 speed////////
	var show2speedxr,show2speedyd,show2speedxl,show2speedyu; //////////Player 2 speed////////
	var show3speedxr,show3speedyd,show3speedxl,show3speedyu; //////////Player 3 speed////////
	var wallx = [];
	var wally = [];
	var wallsx = [];
	var wallsy = []; ///////Walls INVESTIGATION 1/////////////
	var wall1x = [];
	var wall1y = [];
	var wall1sx = [];
	var wall1sy = [];
	var wall2x = [];
	var wall2y = [];
	var wall2sx = [];
	var wall2sy = [];
	var wall3x = [];
	var wall3y = [];
	var wall3sx = [];
	var wall3sy = [];
	var wall4x = [];
	var wall4y = [];
	var wall4sx = [];
	var wall4sy = [];
	var gameoverx,gameovery,gameoversx,gameoversy; /////game over//////
	////////////Audio Effects//////////
	//////Audio///////
	var laser1 = new Audio ();
	var laser2 = new Audio ();
	var laser3 = new Audio ();
	var laser4 = new Audio ();
	var laser5 = new Audio ();
	var door = new Audio ();
	var gameover = new Audio ();
	var warning = new Audio ();
	var foundclue = new Audio ();
	var rockhit = new Audio ();
	var myalert = new Audio ();
	/////////////////////////////////
	var key = new Image ();
	var keyx,keyy,keysx,keysy;
	var pencil = new Image ();
	var pencilx,pencily,pencilsx,pencilsy;
	var pencilclue = true;
	var file = new Image ();
	var filex,filey,filesx,filesy;
	var usb =  new Image ();
	var usbx,usby,usbsx,usbsy;	////Evidence that you have to collect screen 4 - Level 1 Investigation 1////////
	var ballclue = true;
	var ballx,bally,ballsx,ballsy;
	var ball = new Image ();
	var paper = new Image ();
	var pen = new Image ();
	var paperclue = true;            /////////////////Clues////////////////////
	var pencil = new Image ();
	var paperx,papery,papersx,papersy;
	var penclue = true;
	var penx,peny,pensx,pensy;
	var keyclue = true;
	var fileclue = true;
	var usbclue = true;
	//////////Clues LEVEL 1 INVESTIGATION 1/////////////
	var pan = new Image ();
	var panclue = true;
	var panx,pany,pansx,pansy;
	var bookclue = true;
	var book = new Image();
	var bookx,booky,booksx,booksy;
	var hairclue = true;
	var hair = new Image();
	var hairx,hairy,hairsx,hairsy;
	var scissorsclue = true;
	var scissors = new Image ();
	var scissorsx,scissorsy,scissorssx,scissorssy;
	var wireclue = true;
	var wire = new Image();
	var wirex,wirey,wiresx,wiresy;
/////////////////////////////	
	var door1 = new Image (); //////Door///////
	var door1x,door1y,door1sx,door1sy;
	var door2 = new Image (); //////Door///////
	var door2x,door2y,door2sx,door2sy;
	var door3 = new Image();
	var door3x,door3y,door3sx,door3sy;
	var door4 = new Image();
	var door4x,door4y,door4sx,door4sy;
	var door5 = new Image();
	var door5x,door5y,door5sx,door5sy;
	//////Level 1 Investigation 1///////
	var ai1 =  new Image ();
	var ai2 = new Image ();
	var ai3 = new Image (); /////////Enemy level 1 - screen 4////////////
	var angle1b2,angle2b2,angle3b2;					
	var light1x,light1y,light2x,light2y,light3x,light3y;
	var ligh1sx,light1sy,light2sx,light2sy,light3sx,light3sy;
	var ai1speedx,ai1speedy;
	var ai2speedx,ai2speedy;
	var ai3speedx,ai3speedy;
	var ai1x,ai1y,ai1sx,ai1sy;
	var ai2x,ai2y,ai2sx,ai2sy;
	var ai3x,ai3y,ai3sx,ai3sy;
	///////Level 1 Investigation 2////////////////////////////
	var bi1 =  new Image ();
	var bi2 = new Image ();
	var bi3 = new Image (); /////////Enemy////////////
	var bi4 = new Image ();
	var bi1x,bi1y,bi1sx,bi1sy;
	var bi2x,bi2y,bi2sx,bi2sy;
	var bi3x,bi3y,bi3sx,bi3sy;
	var bi4x,bi4y,bi4sx,bi4sy;
	var bi1speedx,bi1speedy;
	var bi2speedx,bi2speedy;
	var bi3speedx,bi3speedy;
	var bi4speedx,bi4speedy;
	var angle1b2,angle2b2,angle3b2,angle4b2;
	var light1x2,light1y2,light2x2,light2y2,light3x2,light3y2,light4x2,light4y2;
	var light1sx2,light1sy2,light2sx2,light2sy2,light3sx2,light3sy2,light4sx2,light4sy2;
	////////////////////////LEVEL 3 INVESTIGATION 1////////////////////////
	var ci1 =  new Image ();
	var ci2 = new Image ();
	var ci3 = new Image (); /////////Enemy////////////
	var ci4 = new Image ();
	var ci5 =  new Image ();
	var ci1x,ci1y,ci1sx,ci1sy;
	var ci2x,ci2y,ci2sx,ci2sy;
	var ci3x,ci3y,ci3sx,ci3sy;
	var ci4x,ci4y,ci4sx,ci4sy;
	var ci5x,ci5y,ci5sx,ci5sy;
	var ci1speedx,ci1speedy;
	var ci2speedx,ci2speedy;
	var ci3speedx,ci3speedy;
	var ci4speedx,ci4speedy;
	var ci5speedx,ci5speedy;
	var angle1b3,angle2b3,angle3b3,angle4b3,angle5b3;;
	var light1x3,light1y3,light2x3,light2y3,light3x3,light3y3,light4x3,light4y3,light5x3,light5y3;
	var light1sx3,light1sy3,light2sx3,light2sy3,light3sx3,light3sy3,light4sx3,light4sy3,light5sx3,light5sy3;
	////////////////////////LEVEL 4 INVESTIGATION 1////////////////////////
	var di1 =  new Image ();
	var di2 = new Image ();
	var di3 = new Image (); /////////Enemy////////////
	var di4 = new Image ();
	var di5 =  new Image ();
	var di1x,di1y,di1sx,di1sy;
	var di2x,di2y,di2sx,di2sy;
	var di3x,di3y,di3sx,di3sy;
	var di4x,di4y,di4sx,di4sy;
	var di5x,di5y,di5sx,di5sy;
	var di1speedx,di1speedy;
	var di2speedx,di2speedy;
	var di3speedx,di3speedy;
	var di4speedx,di4speedy;
	var di5speedx,di5speedy;
	var angle1b4,angle2b4,angle3b4,angle4b4,angle5b4;
	var light1x4,light1y4,light2x4,light2y4,light3x4,light3y4,light4x4,light4y4,light5x4,light5y4;
	var light1sx4,light1sy4,light2sx4,light2sy4,light3sx4,light3sy4,light4sx4,light4sy4,light5sx4,light5sy4;
	////////////////////////LEVEL 5 INVESTIGATION 1////////////////////////
	var ei1 =  new Image ();
	var ei2 = new Image ();
	var ei3 = new Image (); /////////Enemy////////////
	var ei4 = new Image ();
	var ei5 =  new Image ();
	var ei1x,ei1y,ei1sx,ei1sy;
	var ei2x,ei2y,ei2sx,ei2sy;
	var ei3x,ei3y,ei3sx,ei3sy;
	var ei4x,ei4y,ei4sx,ei4sy;
	var ei5x,ei5y,ei5sx,ei5sy;
	var ei1speedx,ei1speedy;
	var ei2speedx,ei2speedy;
	var ei3speedx,ei3speedy;
	var ei4speedx,ei4speedy;
	var ei5speedx,ei5speedy;
	var angle1b5,angle2b5,angle3b5,angle4b5,angle5b5;
	var light1x5,light1y5,light2x5,light2y5,light3x5,light3y5,light4x5,light4y5,light5x5,light5y5;
	var light1sx5,light1sy5,light2sx5,light2sy5,light3sx5,light3sy5,light4sx5,light4sy5,light5sx5,light5sy5;
	///////////Clues For Level 4 Investigation 1//////////////////
	var lamp = new Image();
	var laptop = new Image();
	var ruler = new Image();
	var bin = new Image();
	var phone = new Image();
	var lampx,lampy,lampsx,lampsy;
	var laptopx,laptopy,laptopsx,laptopsy;
	var rulerx,rulery,rulersx,rulersy;
	var binx,biny,binsx,binsy;
	var phonex,phoney,phonesx,phonesy;
	var lampclue = true;
	var laptopclue = true;
	var rulerclue = true;
	var binclue = true;
	var phoneclue = true;
	///////////Clues For Level 5 Investigation 1//////////////////
	var remote = new Image();
	var clip = new Image();
	var ipad = new Image();
	var dvd = new Image();
	var computer = new Image();
	var remotex,remotey,remotesx,remotesy;
	var clipx,clipy,clipsx,clipsy;
	var ipadx,ipady,ipadsx,ipadsy;
	var dvdx,dvdy,dvdsx,dvdsy;
	var computerx,computery,computersx,computersy;
	var remoteclue = true;
	var clipclue = true;
	var ipadclue = true;
	var dvdclue = true;
	var computerclue = true;
	//////////////////////////////////////////////
	/////////////////////////OBSTACLES IN ALL LEVELS FOR MINI-GAME 1///////////////////////////////////////////////
	var rock1 = new Image();
	var rock1x = [];
	var rock1y = [];
	var rock1sx = [];
	var rock1sy = [];
	var rock1speedx = [];
	var rock1speedy = [];
	var rock2 = new Image ();
	var rock2x = [];
	var rock2y = [];
	var rock2sx = [];
	var rock2sy = [];
	var rock2speedx = [];
	var rock2speedy = [];
	var rock3 = new Image();						//////some obstacles to make the game more fun//////////////
	var rock3x = [];
	var rock3y = [];
	var rock3sx = [];
	var rock3sy = [];
	var rock3speedx = [];
	var rock3speedy = [];
	var rock4 = new Image();
	var rock4x = [];
	var rock4y = [];
	var rock4sx = [];
	var rock4sy = [];
	var rock4speedx = [];
	var rock4speedy = [];
	var rock5 = new Image();
	var rock5x = [];
	var rock5y = [];
	var rock5sx = [];
	var rock5sy = [];
	var rock5speedx = [];
	var rock5speedy = [];
	//////////////////////////////////////////////
	//////////////////////////////////////////////
	var screen4score;
	//////////Investigation 2 MINI-GAME 2/////////////////////
	var mutantnumber; ///////////////////This Global variable is accessed by two functions in investigation 2/////////////////////////////
	var result;		///////////This is equal to the mutantnumber but after the while loop ends/////////////////
	var glass = new Image ();
	var glasssx,glasssy;	////////////////Mouse Pointer for Player 2///////////////
	var background2 = new Image ();	//////////background for investigation2////////////////
	var car = new Image ();	//////////Car that hides object////////////
	var carx,cary,carsx,carsy;
	var mat = new Image ();		//////////mat that hides object///////////////
	var matx,maty,matsx,matsy;	////////////
	var start = new Image ();
	var startx,starty,startsx,startsy;
	var movecarx = [];
	var movecarindex;
	var usb2 = new Image ();
	var usb2x,usb2y,usb2sx,usb2sy;
	var usb2speedx;
	var pan2 = new Image ();
	var pan2x,pan2y,pan2sx,pan2sy;
	var appletree = new Image ();
	var appletreex,appletreey,appletreesx,appletreesy;
	var book2 = new Image();
	var book2x,book2y,book2sx,book2sy;
	var book2speedy;
	var factory = new Image();
	var facotryx,facotryy,factorysx,factorysy;
	var tuna = new Image ();
	var tunax = [];
	var tunay,tunasx,tunasy,tunaspeedx;	
	var usb3 = new Image();
	var usb3x,usb3y,usb3sx,usb3sy;
	var hair3 = new Image();
	var hair3x,hair3y,hair3sx,hair3sy;
	var book3 = new Image ();
	var book3x,book3y,book3sx,book3sy;
	var usb3speedx,book3speedx,hair3speedx;	
	var seagull = new Image ();
	var seagullx,seagully,seagullsx,seagullsy;
	var seagullspeedx;
	var bird = new Image ();
	var birdx,birdy,birdsx,birdsy;
	var birdspeedx;
	var freezer = new Image ();
	var freezerx,freezery,freezersx,freezersy;
	var bush = new Image ();
	var bushx,bushy,bushsx,bushsy;
	var swingtree = new Image ();
	var swingtreex,swingtreey,swingtreesx,swingtreesy;
	var soccerball = new Image ();
	var soccerballx,soccerbally,soccerballsx,soccerballsy;
	var soccerballspeedx;
	var tire = new Image ();
	var tirex,tirey,tiresx,tiresy;
	var tirespeedx;
	var clock = new Image ();
	var clockx,clocky,clocksx,clocksy;
	var clockspeedx;
	var leaf = new Image ();
	var leafx,leafy,leafsx,leafsy;
	var leafspeedx; 
	var paypencil = new Image ();
	var paypencilx,paypencily,paypencilsx,paypencilsy;
	var paypencilspeedx;
	var pencilcase = new Image ();
	var pencilcasex,pencilcasey,pencilcasesx,pencilcasesy;
	var cluemeter;
	var cluemeterx,cluemetery;
	////////////////////////////////////MINI-GAME 3 OR INVESTIGATION 3///////////////////////////////////////
	var speedx = 5;
	var speedy = 5;
	var city = new Image ();
	var spaceship = new Image ();
	var bpsx = 50;
	var bpsy = 50;
	var boxx = [];
	var boxy = [];
	var boxspeedx = [];
	var boxspeedy = [];
	var boxsx = [];
	var boxsy = [];
	var rocks = new Image ();
	var pic1 = true;
	var score = 50;
	var bpx = [];
	var bpy = [];
	var battery = new Image ();
	var batteryx = [];
	var batteryy = [];
	var batterysx = [];
	var batterysy = [];
	var batteryspeedx = [];
	var batteryspeedy = [];
	///////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	//////////
	///STATE VARIABLES
	///////Buttons to Go back and to menu///////////////
	menu.src = 'Images/mainmenu1.png';
	menuscreen.src = 'Images/menuscreen1.png';
	back.src = 'Images/back1.jpg';
	helpbg.src = 'Images/bg3.jpg';
	menux = 275;
	footglass.src = 'Images/footglass1.jpg';
	footglassx = 75;
	footglassy = 100;
	footglasssx = 100;
	footglasssy = 100;
	menuy = 5;
	menusx = 85;
	menusy = 40;
	backx = 5;
	backy = 5;
	backsx = 60;
	backsy = 30;
	solved.src = 'Images/solved1.jpg';
	check.src = 'Images/check1.png';
	checkx = 600;
	checky = 10;
	checksx = 30;
	checksy = 20;
	/////////////////////////
	///////////Button During Game Over For Investigation 1,2, and 3//////////////////////
	investigation.src = 'Images/investigation1.jpg';
	investigationx = 5;
	investigationy = 300;
	investigationsx = 145;
	investigationsy = 75;
	one.src = 'Images/1.png';
	onex = 200;
	oney = 300;
	onesx = 100;
	onesy = 75;
	two.src = 'Images/2.jpg';
	twox = 325;
	twoy = 300;
	twosx = 100;
	twosy = 75;
	three.src = 'Images/3.png';
	threex = 450;
	threey = 300;
	threesx = 100;
	threesy = 75;
	////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////Buttons to Play Again After Game Over//////////////////////
	playagain.src = 'Images/playagain1.png';
	playagainx = 275;
	playagainy = 275;
	playagainsx = 50;
	playagainsy = 30;
	/////////////////////
	background1.src = 'Images/bg1.jpg';
	playx = 250;
	playy = 150;
	playsx = 100;
	playsy = 50;
	helpx = 250;
	helpy = 300;
	helpsx = 100;
	helpsy = 50;
	inhelpx = 5;
	inhelpy = 100;
	inhelpsx = 630;
	inhelpsy = 200;
	keyboard.src = 'Images/keys.png';
	keyboardx = 240;
	keyboardy = 300;
	keyboardsx = 150;
	keyboardsy = 150;
	choosex = 225;
	choosey = 20;
	choosesx = 175;
	choosesy = 50;
	show1.src = 'Images/player1.jpg';
	show2.src = 'Images/player2.jpg';
	show3.src = 'Images/player3.jpg';
	door1.src = 'Images/mydoor.png';
	door2.src = 'Images/mydoor.png';
	door3.src = 'Images/mydoor.png';
	door4.src = 'Images/mydoor.png';
	door5.src = 'Images/mydoor.png';
	pencil.src = 'Images/pencil1.jpg';
	/////Door Position/////
	door1x = 600;
	door1y = 100;
	door1sx = 40;
	door1sy = 40;
	door2x = 120;
	door2y = 430;
	door2sx = 40;
	door2sy = 40;
	door3x = 555;
	door3y = 435;
	door3sx = 40;
	door3sy = 40;
	door4x = 60;
	door4y = 390;
	door4sx = 40;
	door4sy = 40;
	door5x = 555;
	door5y = 435;
	door5sx = 40;
	door5sy = 40;
	show1x = 50;
	show1y = 360;
	show1sx = 60;
	show1sy = 60;
	show2x = 450;
	show2y = 100;
	show2sx = 60;
	show2sy = 60;
	show3x = 275;
	show3y = 325;
	show3sx = 60;
	show3sy = 60;
	//////Walls/////
	////Wall 1//////
	wallx[0] = 0;
	wally[0] = 300;
	wallsx[0] = 25;
	wallsy[0] = 280;
	//////Wall 2////
	wallx[1] = 0;
	wally[1] = 0;
	wallsx[1] = 50;
	wallsy[1] = 360;
	///////Wall 3//////
	wallx[2] = 0;
	wally[2] = 0;
	wallsx[2] = 300;
	wallsy[2] = 50;
	////Wall 4/////
	wallx[3] = 300;
	wally[3] = 0;
	wallsx[3] = 50;
	wallsy[3] = 200;
	/////Walls 5/////
	wallx[4] = 130;
	wally[4] = 150;
	wallsx[4] = 80;
	wallsy[4] = 80;
	///////Walls 6/////
	wallx[5] = 160;
	wally[5] = 440;
	wallsx[5] = 300;
	wallsy[5] = 40;
	//////Walls 7//////
	wallx[6] = 300;
	wally[6] = 0;
	wallsx[6] = 300;
	wallsy[6] = 50;
	//////Walls 8//////
	wallx[7] = 500;
	wally[7] = 0;
	wallsx[7] = 50;
	wallsy[7] = 300;
	//////Walls 9//////
	wallx[8] = 545;
	wally[8] = 420;
	wallsx[8] = 200;
	wallsy[8] = 60;
	//////Walls 10//////
	wallx[9] = 390;
	wally[9] = 370;
	wallsx[9] = 40;
	wallsy[9] = 110;
	/////End Walls////
	//////Walls1 - Level 2 INVESTIGATION 1/////
	////Wall 1//////
	wall1x[0] = 0;
	wall1y[0] = 300;
	wall1sx[0] = 100;
	wall1sy[0] = 280;
	//////Wall 2////
	wall1x[1] = 0;
	wall1y[1] = 0;
	wall1sx[1] = 50;
	wall1sy[1] = 360;
	///////Wall 3//////
	wall1x[2] = 0;
	wall1y[2] = 0;
	wall1sx[2] = 300;
	wall1sy[2] = 50;
	////Wall 4/////
	wall1x[3] = 300;
	wall1y[3] = 0;
	wall1sx[3] = 50;
	wall1sy[3] = 200;
	/////Walls 5/////
	wall1x[4] = 130;
	wall1y[4] = 150;
	wall1sx[4] = 80;
	wall1sy[4] = 80;
	///////Walls 6/////
	wall1x[5] = 300;
	wall1y[5] = 440;
	wall1sx[5] = 300;
	wall1sy[5] = 40;
	//////Walls 7//////
	wall1x[6] = 300;
	wall1y[6] = 0;
	wall1sx[6] = 300;
	wall1sy[6] = 50;
	//////Walls 8//////
	wall1x[7] = 500;
	wall1y[7] = 180;
	wall1sx[7] = 50;
	wall1sy[7] = 300;
	//////Walls 9//////
	wall1x[8] = 545;
	wall1y[8] = 420;
	wall1sx[8] = 200;
	wall1sy[8] = 60;
	//////Walls 10//////
	wall1x[9] = 390;
	wall1y[9] = 370;
	wall1sx[9] = 40;
	wall1sy[9] = 110;
	///////////WALLS LEVEL 3 INVESTIGATION 1///////////////////
	////Wall 1//////
	wall2x[0] = 0;
	wall2y[0] = 0;
	wall2sx[0] = 40;
	wall2sy[0] = 480;
	//////Wall 2////
	wall2x[1] = 0;
	wall2y[1] = 250;
	wall2sx[1] = 200;
	wall2sy[1] = 40;
	///////Wall 3//////
	wall2x[2] = 200;
	wall2y[2] = 0;
	wall2sx[2] = 440;
	wall2sy[2] = 40;
	////Wall 4/////
	wall2x[3] = 350;
	wall2y[3] = 0;
	wall2sx[3] = 20;
	wall2sy[3] = 250;
	/////Walls 5/////
	wall2x[4] = 580;
	wall2y[4] = 0;
	wallsx[4] = 30;
	wall2sy[4] = 480;
	///////Walls 6/////
	wall2x[5] = 0;
	wall2y[5] = 460;
	wall2sx[5] = 520;
	wall2sy[5] = 20;
	//////Walls 7//////
	wall2x[6] = 0;
	wall2y[6] = 0;
	wall2sx[6] = 250;
	wall2sy[6] = 40;
	//////Walls 8//////
	wall2x[7] = 480;
	wall2y[7] = 470;
	wall2sx[7] = 30;
	wall2sy[7] = -300;
	//////Walls 9//////
	wall2x[8] = 620;
	wall2y[8] = 0;
	wall2sx[8] = 20;
	wall2sy[8] = 480;
	//////Walls 10//////
	wall2x[9] = 130;
	wall2y[9] = 120;
	wall2sx[9] = 100;
	wall2sy[9] = 40;
	/////End Walls////
	///////////WALLS LEVEL 4 INVESTIGATION 1///////////////////
	////Wall 1//////
	wall3x[0] = 0;
	wall3y[0] = 0;
	wall3sx[0] = 40;
	wall3sy[0] = 480;
	//////Wall 2////
	wall3x[1] = 0;
	wall3y[1] = 250;
	wall3sx[1] = 200;
	wall3sy[1] = 40;
	///////Wall 3//////
	wall3x[2] = 200;
	wall3y[2] = 0;
	wall3sx[2] = 440;
	wall3sy[2] = 40;
	////Wall 4/////
	wall3x[3] = 350;
	wall3y[3] = 0;
	wall3sx[3] = 20;
	wall3sy[3] = 250;
	/////Walls 5/////
	wall3x[4] = 0;
	wall3y[4] = 0;
	wall3sx[4] = 0;
	wall3sy[4] = 0;
	///////Walls 6/////
	wall3x[5] = 0;
	wall3y[5] = 460;
	wall3sx[5] = 520;
	wall3sy[5] = 20;
	//////Walls 7//////
	wall3x[6] = 0;
	wall3y[6] = 0;
	wall3sx[6] = 250;
	wall3sy[6] = 40;
	//////Walls 8//////
	wall3x[7] = 480;
	wall3y[7] = 470;
	wall3sx[7] = 30;
	wall3sy[7] = -300;
	//////Walls 9//////
	wall3x[8] = 620;
	wall3y[8] = 0;
	wall3sx[8] = 20;
	wall3sy[8] = 480;
	//////Walls 10//////
	wall3x[9] = 130;
	wall3y[9] = 120;
	wall3sx[9] = 100;
	wall3sy[9] = 40;
	///////////WALLS LEVEL 5 INVESTIGATION 1///////////////////
	////Wall 1//////
	wall4x[0] = 0;
	wall4y[0] = 0;
	wall4sx[0] = 40;
	wall4sy[0] = 480;
	//////Wall 2////
	wall4x[1] = 0;
	wall4y[1] = 250;
	wall4sx[1] = 200;
	wall4sy[1] = 40;
	///////Wall 3//////
	wall4x[2] = 200;
	wall4y[2] = 0;
	wall4sx[2] = 440;
	wall4sy[2] = 40;
	////Wall 4/////
	wall4x[3] = 350;
	wall4y[3] = 0;
	wall4sx[3] = 20;
	wall4sy[3] = 250;
	/////Walls 5/////
	wall4x[4] = 0;
	wall4y[4] = 0;
	wall4sx[4] = 0;
	wall4sy[4] = 0;
	///////Walls 6/////
	wall4x[5] = 0;
	wall4y[5] = 460;
	wall4sx[5] = 520;
	wall4sy[5] = 20;
	//////Walls 7//////
	wall4x[6] = 0;
	wall4y[6] = 0;
	wall4sx[6] = 250;
	wall4sy[6] = 40;
	//////Walls 8//////
	wall4x[7] = 480;
	wall4y[7] = 470;
	wall4sx[7] = 30;
	wall4sy[7] = -300;
	//////Walls 9//////
	wall4x[8] = 620;
	wall4y[8] = 0;
	wall4sx[8] = 20;
	wall4sy[8] = 480;
	//////Walls 10//////
	wall4x[9] = 130;
	wall4y[9] = 120;
	wall4sx[9] = 100;
	wall4sy[9] = 40;
	/////End Walls////
	gameoverx = 175; ////Game over////
	gameovery = 15;
	gameoversx = 250;
	gameoversy = 150;
	/////end game over////////////////////////////////////////
	//////////////AUDIO///////////////////////////////////////
	foundclue.src = 'Audio/1found.wav';
	laser1.src = 'Audio/1laser.wav';
	laser2.src = 'Audio/2laser.wav';
	laser3.src = 'Audio/3laser.wav';
	laser4.src = 'Audio/4laser.wav';
	laser5.src = 'Audio/5laser.ogg';
	door.src = 'Audio/1door.wav';
	gameover.src = 'Audio/1gameover.wav';
	warning.src = 'Audio/1warning.flac';
	rockhit.src = 'Audio/1rock.aiff';
	myalert.src = 'Audio/alert1.mp3';
	/////Clues From all Levels/////
	key.src = 'Images/key1.jpg';
	file.src = 'Images/file1.jpg';
	usb.src = 'Images/usb1.png';
	ball.src = 'Images/ball1.jpg';
	paper.src = 'Images/paper1.png';
	pan.src = 'Images/pan1.jpg';
	scissors.src = 'Images/scissors1.png';
	book.src = 'Images/book1.jpg';
	wire.src = 'Images/wire1.jpg';
	hair.src = 'Images/hair1.png';
	pen.src = 'Images/pen1.jpg';
	lamp.src = 'Images/lamp1.jpg';
	laptop.src = 'Images/laptop1.jpg';
	bin.src = 'Images/bin1.png';
	ruler.src = 'Images/ruler1.png';
	phone.src = 'Images/phone1.jpg';
	keyx = 90;
	filex = 400;
	usbx = 550;
	keyy = 90;
	filey = 70;
	usby = 390;
	keysx = 20;
	filesx = 20;
	usbsx = 20;
	keysy = 20;
	filesy = 20;
	usbsy  = 20;
	ballx = 200;
	bally = 400;
	ballsx = 20;
	ballsy = 20;
	penx = 400;
	peny = 100;
	pensx = 20;
	pensy = 20;
	paperx = 460;
	papery = 400;
	papersx = 20;
	papersy = 20;
	pencilx = 100;
	pencily = 100;
	pencilsx = 20; 
	pencilsy = 20;
	//////////Clues LEVEL 3 INVESTIGATION 1///////////
	panx = 100;
	pany = 100;
	pansx = 20; 
	pansy = 20;
	wirex = 400;
	wirey = 100;
	wiresx = 20; 
	wiresy = 20;
	scissorsx = 100;
	scissorsy = 400;
	scissorssx = 20; 
	scissorssy = 20;
	bookx = 300;
	booky = 200;
	booksx = 20; 
	booksy = 20;
	hairx = 300;
	hairy = 400;
	hairsx = 20; 
	hairsy = 20;
	/////////////////////////////OBSTACLES FOR FUN AND TO MAKE THE GAME DIFFICULT///////////////////////////////////////////////////////////////////////////////
	rock1.src = 'Images/myrock.png';
	rock1x[0] = 100;
	rock1x[1] = 100;
	rock1x[2] = 400;
	rock1x[3] = 400;
	rock1y[0] = 75;
	rock1y[1] = 100;
	rock1y[2] = 75;
	rock1y[3] = 75;
	rock1sx[0] = 30;
	rock1sx[1] = 20;
	rock1sx[2] = 30;
	rock1sx[3] = 30;
	rock1sy[0] = 30;
	rock1sy[1] = 20;
	rock1sy[2] = 30;
	rock1sy[3] = 20;		
	rock1speedx[0] = 2;
	rock1speedx[1] = 2;
	rock1speedx[2] = 2;
	rock1speedx[3] = 0;
	rock1speedy[0] = 0;
	rock1speedy[1] = 0;
	rock1speedy[2] = 0;
	rock1speedy[3] = 2;
	rock2.src = 'Images/myrock.png';
	rock2x[0] = 100;
	rock2x[1] = 100;
	rock2x[2] = 400;
	rock2x[3] = 400;
	rock2y[0] = 75;
	rock2y[1] = 100;
	rock2y[2] = 75;
	rock2y[3] = 75;
	rock2sx[0] = 30;
	rock2sx[1] = 20;
	rock2sx[2] = 30;
	rock2sx[3] = 30;
	rock2sy[0] = 30;
	rock2sy[1] = 20;
	rock2sy[2] = 30;
	rock2sy[3] = 20;		
	rock2speedx[0] = 2;
	rock2speedx[1] = 2;
	rock2speedx[2] = 2;
	rock2speedx[3] = 0;
	rock2speedy[0] = 0;
	rock2speedy[1] = 0;
	rock2speedy[2] = 0;
	rock2speedy[3] = 2;
	rock3.src = 'Images/myrock.png';
	rock3x[0] = 100;
	rock3x[1] = 100;
	rock3x[2] = 400;
	rock3x[3] = 400;
	rock3y[0] = 75;
	rock3y[1] = 100;
	rock3y[2] = 75;
	rock3y[3] = 75;
	rock3sx[0] = 30;
	rock3sx[1] = 20;
	rock3sx[2] = 30;
	rock3sx[3] = 30;
	rock3sy[0] = 30;
	rock3sy[1] = 20;
	rock3sy[2] = 30;
	rock3sy[3] = 20;		
	rock3speedx[0] = 2;
	rock3speedx[1] = 2;
	rock3speedx[2] = 2;
	rock3speedx[3] = 0;
	rock3speedy[0] = 0;
	rock3speedy[1] = 0;
	rock3speedy[2] = 0;
	rock3speedy[3] = 2;
	rock4.src = 'Images/myrock.png';
	rock4x[0] = 100;
	rock4x[1] = 100;
	rock4x[2] = 400;
	rock4x[3] = 400;
	rock4y[0] = 75;
	rock4y[1] = 100;
	rock4y[2] = 75;
	rock4y[3] = 75;
	rock4sx[0] = 30;
	rock4sx[1] = 20;
	rock4sx[2] = 30;
	rock4sx[3] = 30;
	rock4sy[0] = 30;
	rock4sy[1] = 20;
	rock4sy[2] = 30;
	rock4sy[3] = 20;		
	rock4speedx[0] = 2;
	rock4speedx[1] = 2;
	rock4speedx[2] = 2;
	rock4speedx[3] = 0;
	rock4speedy[0] = 0;
	rock4speedy[1] = 0;
	rock4speedy[2] = 0;
	rock4speedy[3] = 2;
	rock5.src = 'Images/myrock.png';
	rock5x[0] = 100;
	rock5x[1] = 100;
	rock5x[2] = 400;
	rock5x[3] = 400;
	rock5y[0] = 75;
	rock5y[1] = 100;
	rock5y[2] = 75;
	rock5y[3] = 75;
	rock5sx[0] = 30;
	rock5sx[1] = 20;
	rock5sx[2] = 30;
	rock5sx[3] = 30;
	rock5sy[0] = 30;
	rock5sy[1] = 20;
	rock5sy[2] = 30;
	rock5sy[3] = 20;		
	rock5speedx[0] = 2;
	rock5speedx[1] = 2;
	rock5speedx[2] = 2;
	rock5speedx[3] = 0;
	rock5speedy[0] = 0;
	rock5speedy[1] = 0;
	rock5speedy[2] = 0;
	rock5speedy[3] = 2;
////////////END OBSTACLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Clues LEVEL 4 INVESTIGATION 1///////////
	lampx = 105;
	lampy = 80;
	lampsx = 20; 
	lampsy = 20;
	laptopx = 400;
	laptopy = 120;
	laptopsx = 20; 
	laptopsy = 20;
	rulerx = 290;
	rulery = 150;
	rulersx = 20; 
	rulersy = 20;
	binx = 300;
	biny = 300;
	binsx = 20; 
	binsy = 20;
	phonex = 120;
	phoney = 380;
	phonesx = 20; 
	phonesy = 20;
	/////////////////Clues LEVEL 5 INVESTIGATION 1/////////////////////
	remote.src = 'Images/remote1.jpg';
	clip.src = 'Images/clip1.png';
	ipad.src = 'Images/ipad1.png';
	dvd.src = 'Images/dvd1.jpg';
	computer.src = 'Images/computer1.png';
	remotex = 105;
	remotey = 80;
	remotesx = 20; 
	remotesy = 20;
	clipx = 400;
	clipy = 120;
	clipsx = 20; 
	clipsy = 20;
	ipadx = 290;
	ipady = 150;
	ipadsx = 20; 
	ipadsy = 20;
	dvdx = 300;
	dvdy = 300;
	dvdsx = 20; 
	dvdsy = 20;
	computerx = 120;
	computery = 380;
	computersx = 20; 
	computersy = 20;
	/////player speed Universal////
	show1speedxr = 20;
	show1speedyd = 20;
	show1speedxl = -20;
	show1speedyu = -20;
	show2speedxr = 4.5;
	show2peedyd = 4.5;
	show2speedxl = -4.5;
	show2speedyu = -4.5;
	show3speedxr = 1.5;
	show3speedyd = 1.5;
	show3speedxl = -1.5;
	show3speedyu = -1.5;
	/////enemy/////
	//////////////////Level 1 Investigation 1/////////////////
	ai1.src = 'Images/enemy.png';
	ai2.src = 'Images/enemy.png';
	ai3.src = 'Images/enemy.png';
	ai1x = 100;
	ai1y = 90;
	ai1sx = 40;
	ai1sy = 40;
	ai2x = 400;
	ai2y = 90;
	ai2sx = 40;
	ai2sy = 40;
	ai3x = 500;
	ai3y = 320;
	ai3sx = 40;
	ai3sy = 40;
	ai1speedx = 2.5;
	ai2speedx = 2.5;
	ai3speedx = 2.5;
	ai1speedy = 2.5;
	ai2speedy = 2.5;												//////angles//////
	ai3speedy = 2.5;
	angle1b = 0.1 * Math.PI;
	angle2b = 0.1 * Math.PI;
	angle3b = 0.1 * Math.PI;
	light1sx = 10;
	light1sy = 10;
	light2sx = 10;
	light2sy = 10;
	light3sx = 10;
	light3sy = 10;	
	////////////////Level 1 Investigation 2///////////////////
	bi1.src = 'Images/enemy2.png';
	bi2.src = 'Images/enemy2.png';
	bi3.src = 'Images/enemy2.png';
	bi4.src = 'Images/enemy2.png';
	bi1x = 105;
	bi1y = 360;
	bi1sx = 40;
	bi1sy = 40;
	bi2x = 360;
	bi2y = 90;
	bi2sx = 40;
	bi2sy = 40;
	bi3x = 400;
	bi3y = 280;
	bi3sx = 40;
	bi3sy = 40;
	bi4x = 70;
	bi4y = 160;
	bi4sx = 40;
	bi4sy = 40;
	bi1speedx = 3.0;
	bi2speedx = 3.0;
	bi3speedx = 3.0;
	bi4speedx = 3.0;
	bi1speedy = 3.0;
	bi2speedy = 3.0;										
	bi3speedy = 3.0;	
	bi4speedy = 3.0;
	angle1b2 = 0.1 * Math.PI;
	angle2b2 = 0.1 * Math.PI;
	angle3b2 = 0.1 * Math.PI;
	angle4b2 = 0.1 * Math.PI;
	light1sx2 = 10;
	light1sy2 = 10;
	light2sx2 = 10;
	light2sy2 = 10;
	light3sx2 = 10;
	light3sy2 = 10;
	light4sx2 = 10;
	light4sy2 = 10;
	/////////////LEVEL 3 INVESTIGATION 1//////////////////////
	ci1.src = 'Images/bowser1.jpg';
	ci2.src = 'Images/bowser1.jpg';
	ci3.src = 'Images/bowser1.jpg';
	ci4.src = 'Images/bowser1.jpg';
	ci5.src = 'Images/bowser1.jpg';
	ci1x = 41;
	ci1y = 360;
	ci1sx = 40;
	ci1sy = 40;
	ci2x = 400;
	ci2y = 50;
	ci2sx = 40;
	ci2sy = 40;
	ci3x = 200;
	ci3y = 270;
	ci3sx = 40;
	ci3sy = 40;
	ci4x = 70;
	ci4y = 50;
	ci4sx = 40;
	ci4sy = 40;
	ci5x = 400;
	ci5y =  100;
	ci5sx = 40;
	ci5sy = 40;	
	ci1speedx = 3.0;
	ci1speedy = 3.0;
	ci2speedx = 3.0;
	ci2speedy = 3.0;
	ci3speedx = 3.0;
	ci3speedy = 3.0;
	ci4speedx = 3.0;
	ci4speedy = 3.0;
	ci5speedx = 3.0;
	ci5speedy = 3.0;
	angle1b3 = 0.1 * Math.PI;
	angle2b3 = 0.1 * Math.PI; 
	angle3b3 = 0.1 * Math.PI;
	angle4b3 = 0.1 * Math.PI;
	angle5b3 = 0.1 * Math.PI;;
	light1sx3 = 10;
	light1sy3 = 10;
	light2sx3 = 10;
	light2sy3 = 10;
	light3sx3 = 10;
	light3sy3 = 10;
	light4sx3 = 10;
	light4sy3 = 10;
	light5sx3 = 10;
	light5sy3 = 10;
	//////////////LEVEL 3 INVESTIGATION 1 END///////////////////
	/////////////LEVEL 4 INVESTIGATION 1//////////////////////
	di1.src = 'Images/alien1.jpg';
	di2.src = 'Images/alien1.jpg';
	di3.src = 'Images/alien1.jpg';
	di4.src = 'Images/alien1.jpg';
	di5.src = 'Images/alien1.jpg';
	di1x = 41;
	di1y = 360;
	di1sx = 40;
	di1sy = 40;
	di2x = 400;
	di2y = 50;
	di2sx = 40;
	di2sy = 40;
	di3x = 200;
	di3y = 270;
	di3sx = 40;
	di3sy = 40;
	di4x = 70;
	di4y = 50;
	di4sx = 40;
	di4sy = 40;
	di5x = 400;
	di5y =  100;
	di5sx = 40;
	di5sy = 40;	
	di1speedx = 3.0;
	di1speedy = 3.0;
	di2speedx = 3.0;
	di2speedy = 3.0;
	di3speedx = 3.0;
	di3speedy = 3.0;
	di4speedx = 3.0;
	di4speedy = 3.0;
	di5speedx = 3.0;
	di5speedy = 3.0;
	angle1b4 = 0.1 * Math.PI;
	angle2b4 = 0.1 * Math.PI; 
	angle3b4 = 0.1 * Math.PI;
	angle4b4 = 0.1 * Math.PI;
	angle5b4 = 0.1 * Math.PI;;
	light1sx4 = 10;
	light1sy4 = 10;
	light2sx4 = 10;
	light2sy4 = 10;
	light3sx4 = 10;
	light3sy4 = 10;
	light4sx4 = 10;
	light4sy4 = 10;
	light5sx4 = 10;
	light5sy4 = 10;
	//////////////LEVEL 4 INVESTIGATION 1 END///////////////////
	/////////////LEVEL 5 INVESTIGATION 1//////////////////////
	ei1.src = 'Images/evilperson.jpg';
	ei2.src = 'Images/evilperson.jpg';
	ei3.src = 'Images/evilperson.jpg';
	ei4.src = 'Images/evilperson.jpg';
	ei5.src = 'Images/evilperson.jpg';
	ei1x = 41;
	ei1y = 360;
	ei1sx = 40;
	ei1sy = 40;
	ei2x = 400;
	ei2y = 50;
	ei2sx = 40;
	ei2sy = 40;
	ei3x = 200;
	ei3y = 270;
	ei3sx = 40;
	ei3sy = 40;
	ei4x = 70;
	ei4y = 50;
	ei4sx = 40;
	ei4sy = 40;
	ei5x = 400;
	ei5y =  100;
	ei5sx = 40;
	ei5sy = 40;	
	ei1speedx = 3.0;
	ei1speedy = 3.0;
	ei2speedx = 3.0;
	ei2speedy = 3.0;
	ei3speedx = 3.0;
	ei3speedy = 3.0;
	ei4speedx = 3.0;
	ei4speedy = 3.0;
	ei5speedx = 3.0;
	ei5speedy = 3.0;
	angle1b5 = 0.1 * Math.PI;
	angle2b5 = 0.1 * Math.PI; 
	angle3b5 = 0.1 * Math.PI;
	angle4b5 = 0.1 * Math.PI;
	angle5b5 = 0.1 * Math.PI;;
	light1sx5 = 10;
	light1sy5 = 10;
	light2sx5 = 10;
	light2sy5 = 10;
	light3sx5 = 10;
	light3sy5 = 10;
	light4sx5 = 10;
	light4sy5 = 10;
	light5sx5 = 10;
	light5sy5 = 10;
	//////////////LEVEL 5 INVESTIGATION 1 END///////////////////
	///////////////////////////
	screen4score = 75000;											/////scores/////
	////////////////////Investigation 2 Player 2//////////////////////////
	glass.src = 'Images/glass1.png';
	mat.src = 'Images/mat1.jpg';
	matx = 280;
	maty = 350;
	matsx = 150;
	matsy = 80;
	car.src = 'Images/car1.png';
	carx = 100;
	cary = 200;
	carsx = 250;
	carsy = 125;
	glasssx = 30;
	glasssy = 30;
	background2.src = 'Images/bg2.jpg';	
	glassx = mx;
	glassy = my;
	result = Math.floor (Math.random()*10 + 5);
	start.src = 'Images/start1.png';
	startx = 100;
	starty = 300;
	startsx = 125;
	startsy = 100;
	movecarx[0] = 0;
	movecarx[1] = 50;
	movecarx[2] = 100;
	movecarx[3] = 150;
	movecarx[4] = 200;
	movecarx[5] = 250;
	movecarindex = 0;
	usb2.src = 'Images/usb1.png';
	usb2x = matx + matsx/2;
	usb2y = maty + matsy/2;
	usb2sx = 40;
	usb2sy = 40;
	usb2speedx = 2;
	pan2.src = 'Images/pan1.jpg';
	pan2x = movecarx[movecarindex] + carsx/2;
	pan2y = cary + carsy/2;
	pan2sx = 40;
	pan2sy = 40;
	pan2speedx = 2;
	book2.src = 'Images/book1.jpg';
	book2x = 500;
	book2y = 350;
	book2sx = 40;
	book2sy = 40;
	book2speedy = 3;
	appletree.src = 'Images/appletree1.gif';
	appletreex = 445;
	appletreey = 180;
	appletreesx = 200;
	appletreesy = 300;
	factory.src = 'Images/factory1.jpg';
	factoryx = 5;
	factoryy = 5;
	factorysx = 630;
	factorysy = 200;
	tuna.src = 'Images/tuna1.gif';
	tunax[0] = 10;
	tunax[1] = 45;
	tunax[2] = 85;
	tunax[3] = 120;
	tunax[4] = 155;
	tunax[5] = 190;
	tunax[6] = 225;
	tunax[7] = 260;
	tunax[8] = 295;
	tunax[9] = 330;
	tunay = 50;
	tunasx = 30;
	tunasy = 35;
	tunaspeedx = 2;
	hair3.src = 'Images/hair1.png';
	book3.src = 'Images/book1.jpg';
	usb3.src = 'Images/usb1.png';
	usb3x = 420;
	usb3y = 50;
	usb3sx = 30;
	usb3sy = 35;
	hair3x = 455;
	hair3y = 50;
	hair3sx = 30;
	hair3sy = 35;
	book3x = 490;
	book3y = 50;
	book3sx = 30;
	book3sy = 35;
	usb3speedx = 2;
	book3speedx = 2;
	hair3speedx = 2;
	mutantnumber = 50;
	seagull.src = 'Images/bird2.jpg';
	seagullx = 150;
	seagully = 300; 
	seagullsx = 30; 
	seagullsy = 30;
	seagullspeedx = 3;
	bird.src = 'Images/bird1.jpg';
	birdx = 230;
	birdy = 360;
	birdsx = 30;
	birdsy  = 30;
	birdspeedx = 3;
	freezer.src = 'Images/freezer1.jpg';
	freezerx = 100;
	freezery = 280;
	freezersx = 100;
	freezersy = 150;
 	bush.src = 'Images/bush1.png';
	bushx = 190;
	bushy = 340;
	bushsx = 100;
	bushsy = 80;
	swingtree.src = 'Images/swingtree1.jpg';
	swingtreex = 50;
	swingtreey = 260;
	swingtreesx	= 75;
	swingtreesy = 150;
	soccerball.src = 'Images/soccerball1.png';
	soccerballx = 55;
	soccerbally = 265;
	soccerballsx = 30;
	soccerballsy = 30;
	soccerballspeedx = 3;
	tire.src = 'Images/tire1.png';
	tirex = 525;
	tirey = 50;
	tiresx = 35;
	tiresy = 30;
	tirespeedx = 3;
	clock.src = 'Images/clock1.png';
	clockx = 560;
	clocky = 50;
	clocksx = 35;
	clocksy = 30;
	clockspeedx = 5;
	leaf.src = 'Images/leaf1.jpg';
	leafx = 595;
	leafy = 50;
	leafsx = 35;
	leafsy = 30;
	leafspeedx = 4;
	paypencil.src = 'Images/pencil1.jpg';
	pencilcase.src = 'Images/case1.png';
	pencilcasex = 90;
	pencilcasey = 240;
	pencilcasesx = 70;
	pencilcasesy = 50;
	paypencilx = 100;
	paypencily = 250;
	paypencilsx = 20;
	paypencilsy = 20;
	paypencilspeedx = 3;
	cluemeter = 0;
	cluemeterx = 100;
	cluemetery = 30;
/////////////////////////////////////MINI-GAME 3 OR INVESTIGATION 3///////////////////////////////////////
	boxx[0] = 100;
	boxx[1] = 110;
	boxx[2] = 120;
	boxx[3] = 130;
	boxx[4] = 140;
	boxx[5] = 150;
	boxy[0] = 100;
	boxy[1] = 110;
	boxy[2] = 130;
	boxy[3] = 170;
	boxy [4] = 200;
	boxy [5] = 120;
	boxspeedx.push(9);
	boxspeedx.push(7);
	boxspeedx.push(9);
	boxspeedx.push(6);      ////////////ROCKS- x & y coordinates, width and length ////////////
	boxspeedx.push(6);
	boxspeedx.push(7);
	boxspeedy[0] = 6;
	boxspeedy[1] = 8;
	boxspeedy[2] = 8;
	boxspeedy[3] = 4;	
	boxspeedy[4] = 7;
	boxspeedy[5] = 3;	
	boxsx[0] = 50;
	boxsx[1] = 60;
	boxsx[2] = 50;
	boxsx[3] = 40;
	boxsx[4] = 30;
	boxsx[5] = 60;
	boxsy[0] = 50;
	boxsy[1] = 50;
	boxsy[2] = 50;
	boxsy[3] = 50;
	boxsy[4] = 20;
	boxsy[5] = 40;
	bpx [0] = 100;
	bpx [1] = 100; 					/////Mouse Follower X & y Coordinates Including Width and Length///////
	bpy [0] = 50;
	bpy [1] = 100;
	batteryx[0] = 25;
	batteryx[1] = 100;
	batteryx[2] = 300;
	batteryx[3] = 250;
	batteryy[0] = 10;
	batteryy[1] = 90;
	batteryy[2] = 140;
	batteryy[3] = 200;
	batterysx[0] = 40;
	batterysx[1] = 40;
	batterysx[2] = 70;
	batterysx[3] = 90;
	batterysy[0] = 40;
	batterysy[1] = 60;
	batterysy[2] = 30;
	batterysy[3] = 60;
	batteryspeedx.push(4);
	batteryspeedx.push(5);
	batteryspeedx.push(3);
	batteryspeedx.push(2);
	batteryspeedy.push(0.7);
	batteryspeedy.push(1);
	batteryspeedy.push(0.5);
	batteryspeedy.push(1.5);
	batteryspeedy.push(2);
	spaceship.src='Images/ufo1.png';
	city.src='Images/city1.png';      ////////////Images - rocks,Mouse Follower,background//////
	rocks.src='Images/myrock.png';
	battery.src = 'Images/battery1.jpg';
	///////////////////////////////////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}
	
	init();
							/////////////ALL FUNCTIONS THAT EXECUTE MINI-GAME 1 OR INVESTIGATION 1/////////
							
							
	function player1 () {	////////////////Executes Level 1 of Investigation 1//////////////////////		
		ctx.fillStyle = 'black';
		ctx.globalAlpha = 0.7;				//////light effects to make the room appear dark/////
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		ctx.font = '22px Sans Serif';
		ctx.fillText("Score: " + screen4score,60,75);		///////shows score. score cannot be less than 0 else game ends/////
		if(screen4score < 0) {
			screen = '0';
			gameover.play ();
		}
		if(screen4score < 20000) warning.play ();		////Warns Player about low score/////
		ctx.drawImage(show1,show1x,show1y,show1sx,show1sy);		////////draws player - car//////////////////
		for (var i = 0; i < wallx.length; i++) {						////Draws Array of walls that the player cannot touch else game ends/////////
			ctx.fillStyle = 'green';
			ctx.fillRect(wallx[i],wally[i],wallsx[i],wallsy[i]);
		if(show1x > wallx[i] && show1x < wallx[i] + wallsx[i] && show1y > wally[i] && show1y < wally[i] + wallsy[i]) {
			screen = '0';
			gameover.play ();
			alert("Game Over");
		}
		
		
		
		/////////////////Game Over Replay Button///////////// 
		////////////////Back or Main Menu////////////////
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
	
		if(show1x <= 0) show1x = 0;
		if(show1x + show1sx >= 640) show1x = 560;				//////To ensure that player car does not leave canvas////////
		if(show1y <= 0) show1y = 0;
		if(show1y + show1sy >= 480) show1y = 400;
		
			for(var j = 0; j < rock1x.length; j = j + 1) {
				ctx.drawImage(rock1,rock1x[j],rock1y[j],rock1sx[j],rock1sy[j]);			/////some obstacles for fun/////////
				rock1x[j] += rock1speedx[j];
				rock1y[j] += rock1speedy[j];

					if(rock1x[j] > show1x && rock1x[j] < show1x + show1sx && rock1y[j] > show1y && rock1y[j] < show1y + show1sy) {
						screen4score = screen4score - 100;
						rockhit.play ();
					}

					if(rock1x[j] > wall3x[i] && rock1x[j] < wall3x[i] + wall3sx[i] && rock1y[j] > wall3y[i] && rock1y[j] < wall3y[i] + wall3sy[i]) {
						rock1speedx[j] = rock1speedx[j] * (-1);
						rock1speedy[j] = rock1speedy[j] * (-1);	//////////////ARRAY OF OBSTACLES INTERACTS WITH ARRAY OF WALLS////////
					}
				
			}	
	
		}
		
		ctx.drawImage(door1,door1x,door1y,door1sx,door1sy);			//////Allows player car to enter level 2 - new screen///////////
		
		if(show1x > door1x && show1x < door1x + door1sx && show1y > door1y && show1y < door1y + door1sy) { ////Acquire evidence////
			ctx.globalAlpha = Math.random ()* 0.9 + 0.2;
			ctx.drawImage(door1,door1x,door1y,door1sx,door1sy);
			alert("Welcome to the investigation");
			screen = '4.1';
			door.play ();
		}
		
		
		if(keyclue == true) {
			ctx.drawImage(key,keyx,keyy,keysx,keysy); 						//////draws clues//////
		}
		
		
		
		if(fileclue == true) {
			ctx.drawImage(file,filex,filey,filesx,filesy);
		} 
		
		
		if(usbclue == true) {
			ctx.drawImage(usb,usbx,usby,usbsx,usbsy);
		}
		
		ctx.drawImage(ai1,ai1x,ai1y,ai1sx,ai1sy);
		ctx.drawImage(ai2,ai2x,ai2y,ai2sx,ai2sy);
		ctx.drawImage(ai3,ai3x,ai3y,ai3sx,ai3sy);								///////Draws Enemies//////
		
		
			ctx.globalAlpha = Math.random()*0.2;				//////Light Flickers//////////Syntax to draw Arc////////
			for(var i=0; i < 80;i++){
				ctx.beginPath();		/////Begins to draw arc/////
				ctx.moveTo(ai1x + 20,ai1y +20);	/////moves arc to player position + 20 pixels/////
				ctx.arc(ai1x + 20,ai1y + 20,i,angle1b,angle1b + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';		/////Lights effect white colour//////
				ctx.fill();		//////completes circle////
				ctx.closePath();		
			}
			ctx.globalAlpha = 1;
			angle1b +=0.1; //////Rotates light///////
		
			
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++){
				ctx.beginPath();
				ctx.moveTo(ai2x + 20,ai2y + 20);
				ctx.arc(ai2x + 20,ai2y + 20,i,angle2b,angle2b + 0.2*Math.PI);   ////////Light for A2///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle2b +=0.1; //////Rotate///////
			///////if(angle2b > 0.5) angle2b -= 0.5*Math.PI;
			///////if(angle2b < 0.0) angle2b += 0.3*Math.PI ; Control Light
			
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++) {
				ctx.beginPath();
				ctx.moveTo(ai3x + 20,ai3y + 20);
				ctx.arc(ai3x + 20,ai3y + 20,i,angle3b,angle3b + 0.2*Math.PI);				//////Light for A3///////////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle3b +=0.1; //////Rotate///////
			/////if(angle3b > 0.8) angle3b -= 0.5*Math.PI;
			//////if(angle23b < 0.0) angle3b += 0.3*Math.PI ; Control Light;
			light1x = 10 * Math.cos ((angle1b) + (0.075*Math.PI)); 
			light1y = 10 * Math.sin ((angle1b) + (0.075*Math.PI));
			light2x = 10 * Math.cos ((angle2b) + (0.075*Math.PI));			/////These are coordinates on the enemy AI/////
			light2y = 10 * Math.sin ((angle2b) + (0.075*Math.PI));			////useful for ctx.fillRect effect because determines length of light ray////
			light3x = 10 * Math.cos ((angle3b) + (0.075*Math.PI));
			light3y = 10 * Math.sin ((angle3b) + (0.075*Math.PI));   
			
			for(var i = 0; i < 7; i = i + 0.4) {			//////Draws small rectangles for collision detection/////////
				ctx.fillStyle = 'red';							//////////Enemy A1///////////
				ctx.globalAlpha = Math.random()*0.4;	//////Makes the rectangles less noticeable to make game user-friendly//////
				ctx.fillRect(light1x * i + (ai1x + 12) + Math.random()*1,light1y * i + (ai1y + 12) + Math.random()*1,light1sx,light1sy);
				ctx.globalAlpha = 1;	////////light1x is located at the top left corner of the light ray//////
				
				if((light1x * i + (ai1x + 12) + Math.random()*2*i*1.2) > show1x && (light1y * i + (ai1y + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light1y * i + (ai1y + 12) + Math.random()*2*i*1.2) > show1y && (light1y * i + (ai1y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
				screen4score -= 1;			//////If laser penetrates player car score decreases/////////	
				laser1.play ();
				}
			}
			
			for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light2x * i + (ai2x + 12) + Math.random()*1,light2y * i + (ai2y + 12) + Math.random()*1,light2sx,light2sy);
				ctx.globalAlpha = 1;
			
				if((light2x * i + (ai2x + 12) + Math.random()*1) > show1x && (light2x * i + (ai2x + 12) + Math.random()*1) < show1x + show1sx && (light2y * i + (ai2y + 12) + Math.random()*1) > show1y && (light2y * i + (ai2y + 12) + Math.random()*1) < show1y + show1sy) {
					screen4score -= 1;
					laser1.play ();
				}
			}
			
			for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light3x * i + (ai3x + 12) + Math.random()*1,light3y * i + (ai3y + 12) + Math.random()*1,light3sx,light3sy);
				ctx.globalAlpha = 1;
			
					if((light3x * i + (ai3x + 12) + Math.random()*1) > show1x && (light3x * i + (ai3x + 12) + Math.random()*1) < show1x + show1sx && (light3y * i + (ai3y + 12) + Math.random()*1) > show1y && (light3y * i + (ai3y + 12) + Math.random()*1) < show1y + show1sy) {
						screen4score -= 1;	
						laser1.play ();
					}
			
			}
		
				ai1x += ai1speedx;
				ai2x += ai2speedx;
				ai3x += ai3speedx;
				ai1y += ai1speedy;		//////Moves enemy AI////////
				ai2y += ai2speedy;
				ai3y += ai3speedy;
			
		
				if(ai1x > 260 || ai1x < 65) ai1speedx = ai1speedx * (-1);
				if(ai2x > 470 || ai2x < 345) ai2speedx = ai2speedx * (-1);
				if(ai3x > 590 || ai3x < 220) ai3speedx = ai3speedx * (-1);			//////defines the behaviour of enemy AI movement///////
				if(ai1y > 80 || ai1y < 130) ai1speedy = ai1speedy * (-1);
				if(ai2y > 80 || ai2y < 130) ai2speedy = ai2speedy * (-1);
				if(ai3y > 310 || ai3y < 340) ai3speedy = ai3speedy * (-1);
		
		
	}
	
	/////////////////////////////////
	/////////////////////////////////////////////////
	///////////////////////
	////////////////Level 2 Investigation 3///////////////////////////////
	
	function player1new () {		////Essentially the same as the previous function but improved to facilitate enemy difficulty//////
		ctx.fillStyle = 'black';
		ctx.globalAlpha = 0.7;
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		ctx.font = '22px Sans Serif';
		ctx.fillText("Score: " + screen4score,60,75);    ///////////////////////Keeps tracks of score//////////////
		ctx.drawImage(show1,show1x,show1y,show1sx,show1sy); ////////////////////Draws Player///////////////
		for (var i = 0; i < wall1x.length; i++) {   ////////////////For Loop For Walls//////////////
			ctx.fillStyle = 'green';
			ctx.fillRect(wall1x[i],wall1y[i],wall1sx[i],wall1sy[i]);
		if(show1x > wall1x[i] && show1x < wall1x[i] + wall1sx[i] && show1y > wall1y[i] && show1y < wall1y[i] + wall1sy[i]) {
			screen = '0';
			gameover.play ();									////////////////Collision Detection For Walls///////////////////
			alert("Game Over");
		}
		
		///////////////Go Back to Menu or Back to Player screen///////////////////
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		if(screen4score < 0) {
			screen = '0';
			gameover.play ();
		}
		if(screen4score < 20000) warning.play ();		////Warns Player about low score/////
		//////////////////////
		
		
		if(show1x <= 0) show1x = 0;
		if(show1x + show1sx >= 640) show1x = 560;     //////////////Keeps the Player within the the canvas//////////////////
		if(show1y <= 0) show1y = 0;
		if(show1y + show1sy >= 480) show1y = 400;
	
	
			for(var j = 0; j < rock2x.length; j = j + 1) {
				ctx.drawImage(rock2,rock2x[j],rock2y[j],rock2sx[j],rock2sy[j]);			/////some obstacles for fun/////////
				rock2x[j] += rock2speedx[j];
				rock2y[j] += rock2speedy[j];

					if(rock2x[j] > show1x && rock2x[j] < show1x + show1sx && rock2y[j] > show1y && rock2y[j] < show1y + show1sy) {
						screen4score = screen4score - 100;
						rockhit.play ();
					}

					if(rock2x[j] > wall3x[i] && rock2x[j] < wall3x[i] + wall3sx[i] && rock2y[j] > wall3y[i] && rock2y[j] < wall3y[i] + wall3sy[i]) {
						rock2speedx[j] = rock2speedx[j] * (-1);
						rock2speedy[j] = rock2speedy[j] * (-1);	//////////////ARRAY OF OBSTACLES INTERACTS WITH ARRAY OF WALLS////////
					}
				
			}	
		}
		
		ctx.drawImage(door2,door2x,door2y,door2sx,door2sy);     /////////////Draws Door to Enter Investigation 3//////////////////
		
		if(show1x > door2x && show1x < door2x + door2sx && show1y > door2y && show1y < door2y + door2sy) { 
			ctx.globalAlpha = Math.random ()* 0.9 + 0.2;////////////////////////////////Collision Detection For Door 2/////////////////////
			ctx.drawImage(door2,door2x,door2y,door2sx,door2sy);
			alert("Continue investigation"); 
			screen = '4.2';
			door.play ();
		}
		
		
		if(paperclue == true) {
			ctx.drawImage(paper,paperx,papery,papersx,papersy); //////Paper Clue//////
		}
		
		
		
		if(ballclue == true) { 				///////Ball Clue/////////////
			ctx.drawImage(ball,ballx,bally,ballsx,ballsy);
		} 
		
		
		if(penclue == true) {											/////////////Draws the Pen Clue if true//////////////
			ctx.drawImage(pen,penx,peny,pensx,pensy);
		}
		
		if(pencilclue == true) { 													////Draws the Pencil if true///////////
			ctx.drawImage(pencil,pencilx,pencily,pencilsx,pencilsy);
		}
		
		ctx.drawImage(bi1,bi1x,bi1y,bi1sx,bi1sy);
		ctx.drawImage(bi2,bi2x,bi2y,bi2sx,bi2sy);    /////////////Draws Enemies//////////////
		ctx.drawImage(bi3,bi3x,bi3y,bi3sx,bi3sy);
		ctx.drawImage(bi4,bi4x,bi4y,bi4sx,bi4sy);
		
		
		////////////////////////////Enemy 1 For Investigation 2////////////////////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){			/////Makes the light ray 80 pixels long//////////
				ctx.beginPath();
				ctx.moveTo(bi1x + 20,bi1y + 20);
				ctx.arc(bi1x + 20,bi1y + 20,i,angle1b2,angle1b2 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle1b2 +=0.2; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
		////////////////////////////////////////////////Enemy 2 For Investigation 2//////////////////	
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++){
				ctx.beginPath();
				ctx.moveTo(bi2x + 20,bi2y + 20);
				ctx.arc(bi2x + 20,bi2y + 20,i,angle2b2,angle2b2 + 0.2*Math.PI);   ////////Light for A2///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle2b2 +=0.2; //////Rotate///////
			///////if(angle2b > 0.5) angle2b -= 0.5*Math.PI;
			///////if(angle2b < 0.0) angle2b += 0.3*Math.PI ; Control Light
			
			////////////////Enemy 3 For Investigation 2////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++) {
				ctx.beginPath();
				ctx.moveTo(bi3x + 20,bi3y + 20);
				ctx.arc(bi3x + 20,bi3y + 20,i,angle3b2,angle3b2 + 0.2*Math.PI);				//////Light for A3///////////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle3b2 +=0.2; //////Rotate///////
			
			/////////////////Enemy 4 For Investigation 2/////////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++) {
				ctx.beginPath();
				ctx.moveTo(bi4x + 20,bi4y + 20);
				ctx.arc(bi4x + 20,bi4y + 20,i,angle4b2,angle4b2 + 0.2*Math.PI);				//////Light for A3///////////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle4b2 +=0.2; //////Rotate///////
			/////if(angle3b > 0.8) angle3b -= 0.5*Math.PI;
			//////if(angle23b < 0.0) angle3b += 0.3*Math.PI ; Control Light;
			
			//////////////////////////////////Angles For Lights that turn around 360 degrees////////////////////
			light1x2 = 10 * Math.cos ((angle1b2) + (0.075*Math.PI));
			light1y2 = 10 * Math.sin ((angle1b2) + (0.075*Math.PI));
			light2x2 = 10 * Math.cos ((angle2b2) + (0.075*Math.PI));										
			light2y2 = 10 * Math.sin ((angle2b2) + (0.075*Math.PI));
			light3x2 = 10 * Math.cos ((angle3b2) + (0.075*Math.PI));
			light3y2 = 10 * Math.sin ((angle3b2) + (0.075*Math.PI));   
			light4x2 = 10 * Math.cos ((angle4b2) + (0.075*Math.PI));
			light4y2 = 10 * Math.sin ((angle4b2) + (0.075*Math.PI)); 
		
		///////////Enemy 1 For Investigation 2 and Collision detection For rectangles that are on the light//////////////////////////
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.9;
			ctx.fillRect(light1x2 * i + (bi1x + 12) + Math.random()*2*i*1.2,light1y2 * i + (bi1y + 12) + Math.random()*2*i*1.2,light1sx2,light1sy2);
			ctx.globalAlpha = 1;
			
				if((light1x2 * i + (bi1x + 12) + Math.random()*2*i*1.2) > show1x && (light1x2 * i + (bi1x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light1y2 * i + (bi1y + 12) + Math.random()*2*i*1.2) > show1y && (light1y2 * i + (bi1y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 10;	
					laser2.play ();
				}
		}
		/////////////////Enemy 2 For Investigation 2 and Collision Detection for rectangles that are on the light////////////////	
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.9;
			ctx.fillRect(light2x2 * i + (bi2x + 12) + Math.random()*2*i*1.2,light2y2 * i + (bi2y + 12) + Math.random()*2*i*1.2,light2sx2,light2sy2);
			ctx.globalAlpha = 1;
			
				if((light2x2 * i + (bi2x + 12) + Math.random()*2*i*1.2) > show1x && (light2x2 * i + (bi2x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light2y2 * i + (bi2y + 12) + Math.random()*2*i*1.2) > show1y && (light2y2 * i + (bi2y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 10;	
					laser2.play ();
				}
		}
		
//////////////////////////////////Enemy 3 For Investigation 2 and Collision Detection For rectangles that are on the light///////////////////		
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.9;
			ctx.fillRect(light3x2 * i + (bi3x + 12) + Math.random()*2*i*1.2,light3y2 * i + (bi3y + 12) + Math.random()*2*i*1.2,light3sx2,light3sy2);
			ctx.globalAlpha = 1;
			
				if((light3x2 * i + (bi3x + 12) + Math.random()*2*i*1.2) > show1x && (light3x2 * i + (bi3x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light3y2 * i + (bi3y + 12) + Math.random()*2*i*1.2) > show1y && (light3y2 * i + (bi3y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 10;
					laser2.play ();
				}
		}
		
		//////////////////////////////////Enemy 4 For Investigation 2 and Collision Detection For rectangles that are on the light///////////////////		
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.9;
			ctx.fillRect(light4x2 * i + (bi4x + 12) + Math.random()*2*i*1.2,light4y2 * i + (bi4y + 12) + Math.random()*2*i*1.2,light4sx2,light4sy2);
			ctx.globalAlpha = 1;
			
				if((light4x2 * i + (bi4x + 12) + Math.random()*2*i*1.2) > show1x && (light4x2 * i + (bi4x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light4y2 * i + (bi4y + 12) + Math.random()*2*i*1.2) > show1y && (light4y2 * i + (bi4y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 10;
					laser2.play ();
				}
		}


			///////////////////////////Speed Movement For the Enemies in Investigation 2 In level 1/////////////////////
		bi1x += bi1speedx;
		bi2x += bi2speedx;
		bi3x += bi3speedx;
		bi4x += bi4speedx;
		bi1y += bi1speedy;
		bi2y += bi2speedy;
		bi3y += bi3speedy;
		bi4y += bi4speedy;
		////////////////////////////////Control Movement For Enemies In Level 2/////////////////////////////////////////
		if(bi1x > 360 || bi1x < 105) bi1speedx = bi1speedx * (-1);   //////////////////MOST LEFT ENEMY AT BOTTOM///////////////////////
		if(bi2x > 520 || bi2x < 360) bi2speedx = bi2speedx * (-1);   //////////////////////MOST RIGHT ENEMY AT TOP///////////////////////
		if(bi3x > 450 || bi3x < 200) bi3speedx = bi3speedx * (-1);   /////////////////////////MOST RIGHT ENEMY AT BOTTOM...............//////
		if(bi4x > 240 || bi4x < 60) bi4speedx = bi4speedx * (-1);   ///////////////////////MOST LEFT ENEMY AT TOP////////////////
		if(bi1y > 400 || bi1y < 360) bi1speedy = bi1speedy * (-1);
		if(bi2y > 80 || bi2y < 130) bi2speedy = bi2speedy * (-1);
		if(bi3y > 310 || bi3y < 270) bi3speedy = bi3speedy * (-1);
		if(bi4y > 200 || bi3y < 160) bi4speedy = bi4speedy * (-1);
		if(bi4y <= 70) bi4speedy = bi4speedy * (-1);
		
	}
	
	/////////////////////////////////////////////////////
	///////////////////////Level 3 - Investigation 1 - Includes OBSTACLES///////////////////////////////////
	/////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////
	
	function player1new2 () {
		ctx.fillStyle = 'black';
		ctx.globalAlpha = 0.7;
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		ctx.font = '22px Sans Serif';
		ctx.fillText("Score: " + screen4score,60,75);
		ctx.drawImage(show1,show1x,show1y,show1sx,show1sy);
		for (var i = 0; i < wall2x.length; i++) {
			ctx.fillStyle = 'green';
			ctx.fillRect(wall2x[i],wall2y[i],wall2sx[i],wall2sy[i]);
		if(show1x > wall2x[i] && show1x < wall2x[i] + wall2sx[i] && show1y > wall2y[i] && show1y < wall2y[i] + wall2sy[i]) {
			screen = '0';
			gameover.play ();
			alert("Game Over");
		}
		
		if(screen4score < 0) {
			screen = '0';
			gameover.play ();
		}	//////END GAME IF SCORE < 0//////////
		if(screen4score < 20000) warning.play ();		////Warns Player about low score/////
		///////////////Go Back to Menu or Back to Player screen///////////////////
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		/////////////////////

		
		if(show1x <= 0) show1x = 0;
		if(show1x + show1sx >= 640) show1x = 560;			////////////COLLISION DETECTION WITH WALLS FOR PLAYER/////////////
		if(show1y <= 0) show1y = 0;
		if(show1y + show1sy >= 480) show1y = 400;
		
			for(var j = 0; j < rock3x.length; j = j + 1) {
				ctx.drawImage(rock3,rock3x[j],rock3y[j],rock3sx[j],rock3sy[j]);			/////some obstacles for fun/////////
				rock3x[j] += rock3speedx[j];
				rock3y[j] += rock3speedy[j];

					if(rock3x[j] > show1x && rock3x[j] < show1x + show1sx && rock3y[j] > show1y && rock3y[j] < show1y + show1sy) {
						screen4score = screen4score - 100;
						rockhit.play ();
					}

					if(rock3x[j] > wall3x[i] && rock3x[j] < wall3x[i] + wall3sx[i] && rock3y[j] > wall3y[i] && rock3y[j] < wall3y[i] + wall3sy[i]) {
						rock3speedx[j] = rock3speedx[j] * (-1);
						rock3speedy[j] = rock3speedy[j] * (-1);	//////////////ARRAY OF OBSTACLES INTERACTS WITH ARRAY OF WALLS////////
					}
				
			}	
	
		}
		
		ctx.drawImage(door3,door3x,door3y,door3sx,door3sy);			////////DOOR TO PLAY NEXT LEVEL/////////
		
		if(show1x > door3x && show1x < door3x + door3sx && show1y > door3y && show1y < door3y + door3sy) { ////Acquire evidence////
			ctx.globalAlpha = Math.random ()* 0.9 + 0.2;
			ctx.drawImage(door3,door3x,door3y,door3sx,door3sy);
			ctx.globalAlpha = 1;
			prompt("Welcome to the MAZE Case!");
			screen = '4.3';
			door.play ();
		}
		
		
		if(panclue == true) {
			ctx.drawImage(pan,panx,pany,pansx,pansy); //////clues//////
		}
		
		
		
		if(hairclue == true) {
			ctx.drawImage(hair,hairx,hairy,hairsx,hairsy);
		} 
		
		
		if(wireclue == true) {
			ctx.drawImage(wire,wirex,wirey,wiresx,wiresy);
		}
		
		if(bookclue == true) {
			ctx.drawImage(book,bookx,booky,booksx,booksy);
		}
		
		if(scissorsclue == true) {
			ctx.drawImage(scissors,scissorsx,scissorsy,scissorssx,scissorssy);
		}
		
		
		ctx.drawImage(ci1,ci1x,ci1y,ci1sx,ci1sy);
		ctx.drawImage(ci2,ci2x,ci2y,ci2sx,ci2sy);
		ctx.drawImage(ci3,ci3x,ci3y,ci3sx,ci3sy);
		ctx.drawImage(ci4,ci4x,ci4y,ci4sx,ci4sy);
		ctx.drawImage(ci5,ci5x,ci5y,ci5sx,ci5sy);
		
		//////////////////Enemy 1//////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(ci1x + 20,ci1y + 20);
				ctx.arc(ci1x + 20,ci1y + 20,i,angle1b3,angle1b3 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle1b3 += Math.random()*0.5; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
			//////////Enemy 2//////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++){
				ctx.beginPath();
				ctx.moveTo(ci2x + 20,ci2y + 20);
				ctx.arc(ci2x + 20,ci2y + 20,i,angle2b3,angle2b3 + 0.2*Math.PI);   ////////Light for A2///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle2b3 += Math.random()*0.5; //////Rotate///////
			///////if(angle2b > 0.5) angle2b -= 0.5*Math.PI;
			///////if(angle2b < 0.0) angle2b += 0.3*Math.PI ; Control Light
			
			/////////////////Enemy 3////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++) {
				ctx.beginPath();
				ctx.moveTo(ci3x + 20,ci3y + 20);
				ctx.arc(ci3x + 20,ci3y + 20,i,angle3b3,angle3b3 + 0.2*Math.PI);				//////Light for A3///////////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle3b3 += Math.random()*0.5; //////Rotate///////
			/////if(angle3b > 0.8) angle3b -= 0.5*Math.PI;
			//////if(angle23b < 0.0) angle3b += 0.3*Math.PI ; Control Light;
			
			//////////////////Enemy 4//////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(ci4x + 20,ci4y + 20);
				ctx.arc(ci4x + 20,ci4y + 20,i,angle4b3,angle4b3 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle4b3 += Math.random()*0.5; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
			
			
			//////////////////Enemy 5/////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(ci5x + 20,ci5y + 20);
				ctx.arc(ci5x + 20,ci5y + 20,i,angle5b3,angle5b3 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle5b3 += Math.random()*0.5; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
		
			light1x3 = 10 * Math.cos ((angle1b3) + (0.075*Math.PI));
			light1y3 = 10 * Math.sin ((angle1b3) + (0.075*Math.PI));
			light2x3 = 10 * Math.cos ((angle2b3) + (0.075*Math.PI));										////angles collision detection/////////
			light2y3 = 10 * Math.sin ((angle2b3) + (0.075*Math.PI));
			light3x3 = 10 * Math.cos ((angle3b3) + (0.075*Math.PI));
			light3y3 = 10 * Math.sin ((angle3b3) + (0.075*Math.PI));
			light4x3 = 10 * Math.cos ((angle4b3) + (0.075*Math.PI));
			light4y3 = 10 * Math.sin ((angle4b3) + (0.075*Math.PI));
			light5x3 = 10 * Math.cos ((angle5b3) + (0.075*Math.PI));
			light5y3 = 10 * Math.sin ((angle5b3) + (0.075*Math.PI));	
			
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.4;
			ctx.fillRect(light1x3 * i + (ci1x + 12) + Math.random()*2*i*1.2,light1y3 * i + (ci1y + 12) + Math.random()*2*i*1.2,light1sx3,light1sy3);
			ctx.globalAlpha = 1;
			
			if((light1x3 * i + (ci1x + 12) + Math.random()*2*i*1.2) > show1x && (light1x3 * i + (ci1x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light1y3 * i + (ci1y + 12) + Math.random()*2*i*1.2) > show1y && (light1y3 * i + (ci1y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
				screen4score -= 100;
				laser3.play ();
			}
		}
			
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.4;
			ctx.fillRect(light2x3 * i + (ci2x + 12) + Math.random()*2*i*1.2,light2y3 * i + (ci2y + 12) + Math.random()*2*i*1.2,light2sx3,light2sy3);
			ctx.globalAlpha = 1;
			
			if((light2x3 * i + (ci2x + 12) + Math.random()*2*i*1.2) > show1x && (light2x3 * i + (ci2x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light2y3 * i + (ci2y + 12) + Math.random()*2*i*1.2) > show1y && (light2y3 * i + (ci2y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
				screen4score -= 100;
				laser3.play ();
			}
		}
			
		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light3x3 * i + (ci3x + 12) + Math.random()*2*i*1.2,light3y3 * i + (ci3y + 12) + Math.random()*2*i*1.2,light3sx3,light3sy3);
				ctx.globalAlpha = 1;
			
					if((light3x3 * i + (ci3x + 12) + Math.random()*2*i*1.2) > show1x && (light3x3 * i + (ci3x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light3y3 * i + (ci3y + 12) + Math.random()*2*i*1.2) > show1y && (light3y3 * i + (ci3y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser3.play ();
					}
		}
		
		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light4x3 * i + (ci4x + 12) + Math.random()*2*i*1.2,light4y3 * i + (ci4y + 12) + Math.random()*2*i*1.2,light4sx3,light4sy3);
				ctx.globalAlpha = 1;
			
					if((light4x3 * i + (ci4x + 12) + Math.random()*2*i*1.2) > show1x && (light4x3 * i + (ci4x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light4y3 * i + (ci4y + 12) + Math.random()*2*i*1.2) > show1y && (light4y3 * i + (ci4y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser3.play ();
					}
		}

		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light5x3 * i + (ci5x + 12) + Math.random()*2*i*1.2,light5y3 * i + (ci5y + 12) + Math.random()*2*i*1.2,light5sx3,light5sy3);
				ctx.globalAlpha = 1;
			
					if((light5x3 * i + (ci5x + 12) + Math.random()*2*i*1.2) > show1x && (light5x3 * i + (ci5x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light5y3 * i + (ci5y + 12) + Math.random()*2*i*1.2) > show1y && (light5y3 * i + (ci5y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser3.play ();
					}
		}				
		ci1x += ci1speedx;
		ci2x += ci2speedx;
		ci3x += ci3speedx;
		ci5x += ci5speedx;
		ci1y += ci1speedy;
		ci2y += ci2speedy;
		ci3y += ci3speedy;
		ci5y += ci5speedy;
		
		if(ci1x > 420 || ci1x < 41) ci1speedx = ci1speedx * (-1);   //////////////////MOST LEFT ENEMY AT BOTTOM///////////////////////WORKS
		if(ci2x > 575 || ci2x < 400) ci2speedx = ci2speedx * (-1);   //////////////////////TOP ENEMY AT RIGHT///////////////////////WORKS
		if(ci3x > 440 || ci3x < 200) ci3speedx = ci3speedx * (-1);   /////////////////////////MIDDLE ENEMY AT MIDDLE GURADING ENTRANCE...............//////
		if(ci4x > 69 && ci4y > 49) ci4x += ci4speedx;   ///////////////////////LEFT ENEMY AT TOP LEFT////////////////
		if(ci4x > 280 && ci4y > 49) {
			ci4y += ci4speedy; 
			ci4speedx = 0;
		}
		
		if(ci4x > 280 && ci4y > 220) {
			ci4speedx = ci4speedx * (-1);
			ci4x += ci4speedx;
			ci4speedy = 0; 
		}
		
		if(ci4x < 75 && ci4y > 220) {
			ci4speedy = ci4speedy * (-1);
			ci4y += ci4speedy; 
			ci4speedx = 0;
		}//////////////////LEFT ENEMY AT TOP LEFT/////////
		if(ci5x > 420 || ci5x < 400) ci5speedx = ci5speedx * (-1);   ///////////////////////GUARD GOING UP UP AND DOWN////////////////
		if(ci1y > 400 || ci1y < 360) ci1speedy = ci1speedy * (-1);	//////////////////MOST LEFT ENEMY AT BOTTOM/////////////////WORKS
		if(ci2y > 70|| ci2y < 50) ci2speedy = ci2speedy * (-1);	///////////////TOP ENEMY AT RIGHT////////////WORKS
		if(ci3y > 310 || ci3y < 270) ci3speedy = ci3speedy * (-1);	/////////////MIDDLE ENEMY AT MIDDLE GUARDING ENTRANCE//////////////
		if(ci5y > 400 || ci5y < 100) ci5speedy = ci5speedy * (-1);	////////////////GUARD GOING UP AND DOWN////////////////
	
	}
	
		////////////////////////////////////LEVEL 4 INVESTIGATION 1///////////////

		
	function player1new3 () {
		ctx.fillStyle = 'black';
		ctx.globalAlpha = 0.7;
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		ctx.font = '22px Sans Serif';
		ctx.fillText("Score: " + screen4score,60,75);
		ctx.drawImage(show1,show1x,show1y,show1sx,show1sy);
			for (var i = 0; i < wall3x.length; i++) {
				ctx.fillStyle = 'green';
				ctx.fillRect(wall3x[i],wall3y[i],wall3sx[i],wall3sy[i]);
			if(show1x > wall3x[i] && show1x < wall3x[i] + wall3sx[i] && show1y > wall3y[i] && show1y < wall3y[i] + wall3sy[i]) {
				screen = '0';
				gameover.play ();
				alert("Game Over");
			}
			
			if(screen4score < 0) {
			screen = '0';
			gameover.play ();
			}			//////END GAME IF SCORE < 0//////////
			if(screen4score < 20000) warning.play ();		////Warns Player about low score/////
		///////////////Go Back to Menu or Back to Player screen///////////////////
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		////////////////////////////////////////////////////////////////////////////////////
		
			if(show1x <= 0) show1x = 0;
			if(show1x + show1sx >= 640) show1x = 560;
			if(show1y <= 0) show1y = 0;				/////////////Collision Detection with walls for player////////////
			if(show1y + show1sy >= 480) show1y = 400;
		
			for(var j = 0; j < rock4x.length; j = j + 1) {
				ctx.drawImage(rock4,rock4x[j],rock4y[j],rock4sx[j],rock4sy[j]);			/////some obstacles for fun/////////
				rock4x[j] += rock4speedx[j];
				rock4y[j] += rock4speedy[j];

				if(rock4x[j] > show1x && rock4x[j] < show1x + show1sx && rock4y[j] > show1y && rock4y[j] < show1y + show1sy) {
					screen4score = screen4score - 100;
					rockhit.play ();
				}

				if(rock4x[j] > wall3x[i] && rock4x[j] < wall3x[i] + wall3sx[i] && rock4y[j] > wall3y[i] && rock4y[j] < wall3y[i] + wall3sy[i]) {
					rock4speedx[j] = rock4speedx[j] * (-1);
					rock4speedy[j] = rock4speedy[j] * (-1);	//////////////ARRAY OF OBSTACLES INTERACTS WITH ARRAY OF WALLS////////
				}
				
			}	
		
		}
		
			ctx.drawImage(door4,door4x,door4y,door4sx,door4sy);
		
		if(show1x > door4x && show1x < door4x + door4sx && show1y > door4y && show1y < door4y + door4sy) { ////Acquire evidence////
			ctx.globalAlpha = Math.random ()* 0.9 + 0.2;
			ctx.drawImage(door4,door4x,door4y,door4sx,door4sy);
			ctx.globalAlpha = 1;
			prompt("Well Done! CASE SOLVED");			
			screen = '4.4';
			door.play ();											//////Takes player car to Level 5///////////////
		}
		
		
		if(lampclue == true) {
			ctx.drawImage(lamp,lampx,lampy,lampsx,lampsy); //////clues//////
		}
		
		
		
		if(binclue == true) {
			ctx.drawImage(bin,binx,biny,binsx,binsy);
		} 
		
		
		if(laptopclue == true) {
			ctx.drawImage(laptop,laptopx,laptopy,laptopsx,laptopsy);
		}
		
		if(rulerclue == true) {
			ctx.drawImage(ruler,rulerx,rulery,rulersx,rulersy);
		}
		
		if(phoneclue == true) {
			ctx.drawImage(phone,phonesx,phoney,phonesx,phonesy);
		}
		
		
		ctx.drawImage(di1,di1x,di1y,di1sx,di1sy);
		ctx.drawImage(di2,di2x,di2y,di2sx,di2sy);
		ctx.drawImage(di3,di3x,di3y,di3sx,di3sy);				////////ENEMY A1///////////////
		ctx.drawImage(di4,di4x,di4y,di4sx,di4sy);
		ctx.drawImage(di5,di5x,di5y,di5sx,di5sy);
		
		
		//////////////////Enemy 1//////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(di1x + 20,di1y + 20);
				ctx.arc(di1x + 20,di1y + 20,i,angle1b4,angle1b4 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle1b4 += Math.random()*0.9; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
			//////////Enemy 2//////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++){
				ctx.beginPath();
				ctx.moveTo(di2x + 20,di2y + 20);
				ctx.arc(di2x + 20,di2y + 20,i,angle2b4,angle2b4 + 0.2*Math.PI);   ////////Light for A2///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle2b4 += Math.random()*0.9; //////Rotate///////
			///////if(angle2b > 0.5) angle2b -= 0.5*Math.PI;
			///////if(angle2b < 0.0) angle2b += 0.3*Math.PI ; Control Light
			
			/////////////////Enemy 3////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++) {
				ctx.beginPath();
				ctx.moveTo(di3x + 20,di3y + 20);
				ctx.arc(di3x + 20,di3y + 20,i,angle3b4,angle3b4 + 0.2*Math.PI);				//////Light for A3///////////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle3b4 += Math.random()*0.9; //////Rotate///////
			/////if(angle3b > 0.8) angle3b -= 0.5*Math.PI;
			//////if(angle23b < 0.0) angle3b += 0.3*Math.PI ; Control Light;
			
			//////////////////Enemy 4//////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(di4x + 20,di4y + 20);
				ctx.arc(di4x + 20,di4y + 20,i,angle4b4,angle4b4 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle4b3 += Math.random()*0.9; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
			
			
			//////////////////Enemy 5/////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(di5x + 20,di5y + 20);
				ctx.arc(di5x + 20,di5y + 20,i,angle5b4,angle5b4 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle5b3 += Math.random()*0.9; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
		
			light1x4 = 10 * Math.cos ((angle1b4) + (0.075*Math.PI));
			light1y4 = 10 * Math.sin ((angle1b4) + (0.075*Math.PI));
			light2x4 = 10 * Math.cos ((angle2b4) + (0.075*Math.PI));										////angles collision detection/////////
			light2y4 = 10 * Math.sin ((angle2b4) + (0.075*Math.PI));
			light3x4 = 10 * Math.cos ((angle3b4) + (0.075*Math.PI));
			light3y4 = 10 * Math.sin ((angle3b4) + (0.075*Math.PI));
			light4x4 = 10 * Math.cos ((angle4b4) + (0.075*Math.PI));
			light4y4 = 10 * Math.sin ((angle4b4) + (0.075*Math.PI));
			light5x4 = 10 * Math.cos ((angle5b4) + (0.075*Math.PI));
			light5y4 = 10 * Math.sin ((angle5b4) + (0.075*Math.PI));	
			
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.4;
			ctx.fillRect(light1x4 * i + (di1x + 12) + Math.random()*2*i*1.2,light1y4 * i + (di1y + 12) + Math.random()*2*i*1.2,light1sx4,light1sy4);
			ctx.globalAlpha = 1;
			
				if((light1x4 * i + (di1x + 12) + Math.random()*2*i*1.2) > show1x && (light1x4 * i + (di1x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light1y4 * i + (di1y + 12) + Math.random()*2*i*1.2) > show1y && (light1y4 * i + (di1y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 100;
					laser4.play ();
			}
		}
			
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.4;
			ctx.fillRect(light2x4 * i + (di2x + 12) + Math.random()*2*i*1.2,light2y4 * i + (di2y + 12) + Math.random()*2*i*1.2,light2sx4,light2sy4);
			ctx.globalAlpha = 1;
			
				if((light2x4 * i + (di2x + 12) + Math.random()*2*i*1.2) > show1x && (light2x4 * i + (di2x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light2y4 * i + (di2y + 12) + Math.random()*2*i*1.2) > show1y && (light2y4 * i + (di2y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 100;
					laser4.play ();
			}
		}
			
		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light3x4 * i + (di3x + 12) + Math.random()*2*i*1.2,light3y4 * i + (di3y + 12) + Math.random()*2*i*1.2,light3sx4,light3sy4);
				ctx.globalAlpha = 1;
			
					if((light3x4 * i + (di3x + 12) + Math.random()*2*i*1.2) > show1x && (light3x4 * i + (di3x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light3y4 * i + (di3y + 12) + Math.random()*2*i*1.2) > show1y && (light3y4 * i + (di3y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser4.play ();
					}
		}
		
		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light4x4 * i + (di4x + 12) + Math.random()*2*i*1.2,light4y4 * i + (di4y + 12) + Math.random()*2*i*1.2,light4sx4,light4sy4);
				ctx.globalAlpha = 1;
			
					if((light4x4 * i + (di4x + 12) + Math.random()*2*i*1.2) > show1x && (light4x4 * i + (di4x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light4y4 * i + (di4y + 12) + Math.random()*2*i*1.2) > show1y && (light4y4 * i + (di4y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser4.play ();
					}
		}

		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light5x4 * i + (di5x + 12) + Math.random()*2*i*1.2,light5y4 * i + (di5y + 12) + Math.random()*2*i*1.2,light5sx4,light5sy4);
				ctx.globalAlpha = 1;
			
					if((light5x4 * i + (di5x + 12) + Math.random()*2*i*1.2) > show1x && (light5x4 * i + (di5x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light5y4 * i + (di5y + 12) + Math.random()*2*i*1.2) > show1y && (light5y4 * i + (di5y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser4.play ();
					}
		}				
		di1x += di1speedx;
		di2x += di2speedx;
		di3x += di3speedx;
		di5x += di5speedx;
		di1y += di1speedy;
		di2y += di2speedy;
		di3y += di3speedy;
		di5y += di5speedy;
		
		if(di1x > 420 || di1x < 41) di1speedx = di1speedx * (-1);   //////////////////MOST LEFT ENEMY AT BOTTOM///////////////////////WORKS
		if(di2x > 575 || di2x < 400) di2speedx = di2speedx * (-1);   //////////////////////TOP ENEMY AT RIGHT///////////////////////WORKS
		if(di3x > 440 || di3x < 200) di3speedx = di3speedx * (-1);   /////////////////////////MIDDLE ENEMY AT MIDDLE GURADING ENTRANCE...............//////
		if(di4x > 69 && di4y > 49) di4x += di4speedx;   ///////////////////////LEFT ENEMY AT TOP LEFT////////////////
		if(di4x > 280 && di4y > 49) {
			di4y += di4speedy; 
			di4speedx = 0;
		}
		
		if(di4x > 280 && di4y > 220) {
			di4speedx = di4speedx * (-1);
			di4x += di4speedx;
			di4speedy = 0; 
		}
		
		if(di4x < 75 && di4y > 220) {
			di4speedy = di4speedy * (-1);
			di4y += di4speedy; 
			di4speedx = 0;
		}//////////////////LEFT ENEMY AT TOP LEFT/////////
		if(di5x > 420 || di5x < 400) di5speedx = di5speedx * (-1);   ///////////////////////GUARD GOING UP UP AND DOWN////////////////
		if(di1y > 400 || di1y < 360) di1speedy = di1speedy * (-1);	//////////////////MOST LEFT ENEMY AT BOTTOM/////////////////WORKS
		if(di2y > 70|| di2y < 50) di2speedy = di2speedy * (-1);	///////////////TOP ENEMY AT RIGHT////////////WORKS
		if(di3y > 310 || di3y < 270) di3speedy = di3speedy * (-1);	/////////////MIDDLE ENEMY AT MIDDLE GUARDING ENTRANCE//////////////
		if(di5y > 400 || di5y < 100) di5speedy = di5speedy * (-1);	////////////////GUARD GOING UP AND DOWN////////////////
	
	}
	
	function player1new4 () {
		ctx.fillStyle = 'black';
		ctx.globalAlpha = 0.7;
		ctx.fillRect(0,0,w,h);
		ctx.globalAlpha = 1;
		ctx.font = '22px Sans Serif';
		ctx.fillText("Score: " + screen4score,60,75);
		ctx.drawImage(show1,show1x,show1y,show1sx,show1sy);
			for (var i = 0; i < wall4x.length; i++) {
				ctx.fillStyle = 'green';
				ctx.fillRect(wall4x[i],wall4y[i],wall4sx[i],wall4sy[i]);
			if(show1x > wall4x[i] && show1x < wall4x[i] + wall4sx[i] && show1y > wall4y[i] && show1y < wall4y[i] + wall4sy[i]) {
				screen = '0';
				gameover.play ();
				alert("Game Over");
			}
			
			if(screen4score < 0) {
			screen = '0';
			gameover.play ();
			}			//////END GAME IF SCORE < 0//////////
			if(screen4score < 20000) warning.play ();		////Warns Player about low score/////
		///////////////Go Back to Menu or Back to Player screen///////////////////
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		/////////////////////
		
			if(show1x <= 0) show1x = 0;
			if(show1x + show1sx >= 640) show1x = 560;
			if(show1y <= 0) show1y = 0;				/////////////Collision Detection with walls for player////////////
			if(show1y + show1sy >= 480) show1y = 400;
		
			for(var j = 0; j < rock5x.length; j = j + 1) {
				ctx.drawImage(rock5,rock5x[j],rock5y[j],rock5sx[j],rock5sy[j]);			/////some obstacles for fun/////////
				rock5x[j] += rock5speedx[j];
				rock5y[j] += rock5speedy[j];

				if(rock5x[j] > show1x && rock5x[j] < show1x + show1sx && rock5y[j] > show1y && rock5y[j] < show1y + show1sy) {
					screen4score = screen4score - 100;
					rockhit.play ();
				}

				if(rock5x[j] > wall3x[i] && rock5x[j] < wall3x[i] + wall3sx[i] && rock5y[j] > wall3y[i] && rock5y[j] < wall3y[i] + wall3sy[i]) {
					rock5speedx[j] = rock5speedx[j] * (-1);
					rock5speedy[j] = rock5speedy[j] * (-1);	//////////////ARRAY OF OBSTACLES INTERACTS WITH ARRAY OF WALLS////////
				}
				
			}	
		
		}
		
			ctx.drawImage(door5,door5x,door5y,door5sx,door5sy);
		
		if(show1x > door5x && show1x < door5x + door5sx && show1y > door5y && show1y < door5y + door5sy) { ////Acquire evidence////
			ctx.globalAlpha = Math.random ()* 0.9 + 0.2;
			ctx.drawImage(door5,door5x,door5y,door5sx,door5sy);
			ctx.globalAlpha = 1;
			prompt("Well Done! CASE SOLVED");			
			screen = '4.5';
			door.play ();											//////Takes player car to Level 6///////////////
		}
		
		
		if(remoteclue == true) {
			ctx.drawImage(remote,remotex,remotey,remotesx,remotesy); //////clues//////
		}
		
		
		
		if(clipclue == true) {
			ctx.drawImage(clip,clipx,clipy,clipsx,clipsy);
		} 
		
		
		if(ipadclue == true) {
			ctx.drawImage(ipad,ipadx,ipady,ipadsx,ipadsy);
		}
		
		if(dvdclue == true) {
			ctx.drawImage(dvd,dvdx,dvdy,dvdsx,dvdsy);
		}
		
		if(computerclue == true) {
			ctx.drawImage(computer,computersx,computery,computersx,computersy);
		}
		
		
		ctx.drawImage(ei1,ei1x,ei1y,ei1sx,ei1sy);
		ctx.drawImage(ei2,ei2x,ei2y,ei2sx,ei2sy);
		ctx.drawImage(ei3,ei3x,ei3y,ei3sx,ei3sy);				////////ENEMY A1///////////////
		ctx.drawImage(ei4,ei4x,ei4y,ei4sx,ei4sy);
		ctx.drawImage(ei5,ei5x,ei5y,ei5sx,ei5sy);
		
		
		//////////////////Enemy 1//////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(ei1x + 20,ei1y + 20);
				ctx.arc(ei1x + 20,ei1y + 20,i,angle1b5,angle1b5 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle1b5 += Math.random()*0.6 + 0.1; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
			//////////Enemy 2//////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++){
				ctx.beginPath();
				ctx.moveTo(ei2x + 20,ei2y + 20);
				ctx.arc(ei2x + 20,ei2y + 20,i,angle2b5,angle2b5 + 0.2*Math.PI);   ////////Light for A2///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle2b5 += Math.random()*0.5 + 0.2; //////Rotate///////
			///////if(angle2b > 0.5) angle2b -= 0.5*Math.PI;
			///////if(angle2b < 0.0) angle2b += 0.3*Math.PI ; Control Light
			
			/////////////////Enemy 3////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i = 0; i < 80; i++) {
				ctx.beginPath();
				ctx.moveTo(ei3x + 20,ei3y + 20);
				ctx.arc(ei3x + 20,ei3y + 20,i,angle3b5,angle3b5 + 0.2*Math.PI);				//////Light for A3///////////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle3b5 += Math.random()*0.4 + 0.1; //////Rotate///////
			/////if(angle3b > 0.8) angle3b -= 0.5*Math.PI;
			//////if(angle23b < 0.0) angle3b += 0.3*Math.PI ; Control Light;
			
			//////////////////Enemy 4//////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(ei4x + 20,ei4y + 20);
				ctx.arc(ei4x + 20,ei4y + 20,i,angle4b5,angle4b5 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle4b5 += Math.random()*0.9; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
			
			
			//////////////////Enemy 5/////////////////////
			ctx.globalAlpha = Math.random()*0.2;
			for(var i=0; i < 80;i++){
				ctx.beginPath();
				ctx.moveTo(ei5x + 20,ei5y + 20);
				ctx.arc(ei5x + 20,ei5y + 20,i,angle5b5,angle5b5 + 0.2*Math.PI);					///////////Light for A1///////
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.closePath();
			}
			ctx.globalAlpha = 1;
			angle5b5 += Math.random()*0.8; //////Rotate///////
			/////if(angle1b > 0.5) angle1b -= 0.5*Math.PI; /////Control Light
			/////if(angle1b < 0.0) angle1b += 0.3*Math.PI ;
		
		
			light1x5 = 10 * Math.cos ((angle1b5) + (0.075*Math.PI));
			light1y5 = 10 * Math.sin ((angle1b5) + (0.075*Math.PI));
			light2x5 = 10 * Math.cos ((angle2b5) + (0.075*Math.PI));										////angles collision detection/////////
			light2y5 = 10 * Math.sin ((angle2b5) + (0.075*Math.PI));
			light3x5 = 10 * Math.cos ((angle3b5) + (0.075*Math.PI));
			light3y5 = 10 * Math.sin ((angle3b5) + (0.075*Math.PI));
			light4x5 = 10 * Math.cos ((angle4b5) + (0.075*Math.PI));
			light4y5 = 10 * Math.sin ((angle4b5) + (0.075*Math.PI));
			light5x5 = 10 * Math.cos ((angle5b5) + (0.075*Math.PI));
			light5y5 = 10 * Math.sin ((angle5b5) + (0.075*Math.PI));	
			
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.4;
			ctx.fillRect(light1x5 * i + (ei1x + 12) + Math.random()*2*i*1.2,light1y5 * i + (ei1y + 12) + Math.random()*2*i*1.2,light1sx5,light1sy5);
			ctx.globalAlpha = 1;
			
				if((light1x5 * i + (ei1x + 12) + Math.random()*2*i*1.2) > show1x && (light1x5 * i + (ei1x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light1y5 * i + (ei1y + 12) + Math.random()*2*i*1.2) > show1y && (light1y5 * i + (ei1y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 100;
					laser5.play ();
			}
		}
			
		for(var i = 0; i < 7; i = i + 0.4) {
			ctx.fillStyle = 'red';
			ctx.globalAlpha = Math.random()*0.4;
			ctx.fillRect(light2x5 * i + (ei2x + 12) + Math.random()*2*i*1.2,light2y5 * i + (ei2y + 12) + Math.random()*2*i*1.2,light2sx5,light2sy5);
			ctx.globalAlpha = 1;
			
				if((light2x5 * i + (ei2x + 12) + Math.random()*2*i*1.2) > show1x && (light2x5 * i + (ei2x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light2y5 * i + (ei2y + 12) + Math.random()*2*i*1.2) > show1y && (light2y5 * i + (ei2y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
					screen4score -= 100;
					laser5.play ();
			}
		}
			
		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light3x5 * i + (ei3x + 12) + Math.random()*2*i*1.2,light3y5 * i + (ei3y + 12) + Math.random()*2*i*1.2,light3sx5,light3sy5);
				ctx.globalAlpha = 1;
			
					if((light3x5 * i + (ei3x + 12) + Math.random()*2*i*1.2) > show1x && (light3x5 * i + (ei3x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light3y5 * i + (ei3y + 12) + Math.random()*2*i*1.2) > show1y && (light3y5 * i + (ei3y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser5.play ();
					}
		}
		
		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light4x5 * i + (ei4x + 12) + Math.random()*2*i*1.2,light4y5 * i + (ei4y + 12) + Math.random()*2*i*1.2,light4sx5,light4sy5);
				ctx.globalAlpha = 1;
			
					if((light4x5 * i + (ei4x + 12) + Math.random()*2*i*1.2) > show1x && (light4x5 * i + (ei4x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light4y5 * i + (ei4y + 12) + Math.random()*2*i*1.2) > show1y && (light4y5 * i + (ei4y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser5.play ();
					}
		}

		for(var i = 0; i < 7; i = i + 0.4) {
				ctx.fillStyle = 'red';
				ctx.globalAlpha = Math.random()*0.4;
				ctx.fillRect(light5x4 * i + (di5x + 12) + Math.random()*2*i*1.2,light5y4 * i + (di5y + 12) + Math.random()*2*i*1.2,light5sx4,light5sy4);
				ctx.globalAlpha = 1;
			
					if((light5x5 * i + (ei5x + 12) + Math.random()*2*i*1.2) > show1x && (light5x5 * i + (ei5x + 12) + Math.random()*2*i*1.2) < show1x + show1sx && (light5y5 * i + (ei5y + 12) + Math.random()*2*i*1.2) > show1y && (light5y5 * i + (ei5y + 12) + Math.random()*2*i*1.2) < show1y + show1sy) {
						screen4score -= 100;
						laser5.play ();
					}
		}				
		ei1x += ei1speedx;
		ei2x += ei2speedx;
		ei3x += ei3speedx;
		ei5x += ei5speedx;
		ei1y += ei1speedy;
		ei2y += ei2speedy;
		ei3y += ei3speedy;
		ei5y += ei5speedy;
		
		if(ei1x > 420 || ei1x < 41) ei1speedx = ei1speedx * (-1);   //////////////////MOST LEFT ENEMY AT BOTTOM///////////////////////WORKS
		if(ei2x > 575 || ei2x < 400) ei2speedx = ei2speedx * (-1);   //////////////////////TOP ENEMY AT RIGHT///////////////////////WORKS
		if(ei3x > 440 || ei3x < 200) ei3speedx = ei3speedx * (-1);   /////////////////////////MIDDLE ENEMY AT MIDDLE GURADING ENTRANCE...............//////
		if(ei4x > 69 && ei4y > 49) ei4x += ei4speedx;   ///////////////////////LEFT ENEMY AT TOP LEFT////////////////
		if(ei4x > 280 && ei4y > 49) {
			ei4y += ei4speedy; 
			ei4speedx = 0;
		}
		
		if(ei4x > 280 && ei4y > 220) {
			ei4speedx = ei4speedx * (-1);
			ei4x += ei4speedx;
			ei4speedy = 0; 
		}
		
		if(ei4x < 75 && ei4y > 220) {
			ei4speedy = ei4speedy * (-1);
			ei4y += ei4speedy; 
			ei4speedx = 0;
		}//////////////////LEFT ENEMY AT TOP LEFT/////////
		if(ei5x > 420 || ei5x < 400) ei5speedx = ei5speedx * (-1);   ///////////////////////GUARD GOING UP UP AND DOWN////////////////
		if(ei1y > 400 || ei1y < 360) ei1speedy = ei1speedy * (-1);	//////////////////MOST LEFT ENEMY AT BOTTOM/////////////////WORKS
		if(ei2y > 70|| ei2y < 50) ei2speedy = ei2speedy * (-1);	///////////////TOP ENEMY AT RIGHT////////////WORKS
		if(ei3y > 310 || ei3y < 270) ei3speedy = ei3speedy * (-1);	/////////////MIDDLE ENEMY AT MIDDLE GUARDING ENTRANCE//////////////
		if(ei5y > 400 || ei5y < 100) ei5speedy = ei5speedy * (-1);	////////////////GUARD GOING UP AND DOWN////////////////
	}	
	
	function player2 () {
		
		///////////////Go Back to Menu or Back to Player screen///////////////////
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		//////////////////////	
		glassx = mx;
		glassy = my;
		soldiersnumber=25;
		chance=0;
	
		ctx.drawImage(glass,glassx,glassy,glasssx,glasssy);
		while (soldiersnumber != 0) {
			chance = Math.floor(Math.random() * 10 + 3);	//////A number generator/////
			if(chance == 1 || chance == 2 || chance == 3 || chance == 4 || chance == 5) {		////Determines how many clues to find////////
				mutantnumber = mutantnumber - 1
			}else if(chance == 6 || chance == 7 || chance == 8 || chance == 9 || chance == 10) {
				soldiersnumber = soldiersnumber - 1
			}
				if(soldiersnumber = '0') {
					chance = '0';
					mutantnumber = result;		////The number of mutants left determines how many clues player has to find.
				}
			}
			
			if(result > 13) result = 13;		///////There are 13 scenarios generated and the Clue Meter ranges from 0 to 13/////
			
		ctx.fillText("Number of Detectives:" + soldiersnumber,400,100,200,200);	//////Because MINI-GAME 2 is a top-secret investigation you are the only detective///
		ctx.fillText("Number of Clues to Find:" + result,400,150,200,200);	////////Number of Clues to Find//////
		ctx.fillText("Detective Meter:" + chance,200,150,200,200);	//////The Detective Meter determines what occurs in the while loop////////
		chance = Math.floor(Math.random() * 10 + 3);
		ctx.font = '18px Sans Serif';
		ctx.fillText("Good Luck! You have to find..." + result + "...clues",100,100);
		ctx.fillText("Click on the Check Mark when Done",100,300);
		ctx.drawImage(start,startx,starty,startsx,startsy);		/////Start Button to Begin Investigation//////////	
		
	}	
		function player2new() {		////MINI-GAME 2 BEGINS//////
		
				glassx = mx;		//////A magnifying glass replaces the mouse///////// 
				glassy = my;
				ctx.drawImage(background2,0,0,w,h);	///////////Scene For Investigation 2//////////////
					//////////////"result" calculated from the previous function determines how many clues are to be found in this function////////////  
					if(result == 1) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;					
					}
					
					if(result == 2) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
					}
					
					if(result == 3) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
					}
					
					if(result == 4) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
					}
					
					if(result == 5) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
					}
					
					if(result == 6) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);
					}
					
					if(result == 7) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);		////To make the effect of a factory line//////
							tunax[i] += tunaspeedx;
								if(tunax[i] > 340) tunax[i] = 10;
						}
						
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
							if(usb3x > 610) usb3x = 420;	
					}
					
					if(result == 8) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);
							tunax[i] += tunaspeedx;
								if(tunax[i] > 340) tunax[i] = 10;
						}
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
							if(usb3x > 610) usb3x = 420;

						ctx.drawImage(hair3,hair3x,hair3y,hair3sx,hair3sy);
						hair3x += hair3speedx;
							if(hair3x > 610) hair3x = 420;	
					}
					
					if(result == 9) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);
							tunax[i] += tunaspeedx;
								if(tunax[i] > 340) tunax[i] = 10;
						}
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
								if(usb3x > 610) usb3x = 420;

						ctx.drawImage(hair3,hair3x,hair3y,hair3sx,hair3sy);
						hair3x += hair3speedx;
								if(hair3x > 610) hair3x = 420;
		
						ctx.drawImage(book3,book3x,book3y,book3sx,book3sy);
						book3x += book3speedx;
								if(book3x > 610) book3x = 420;	
					}
					
					if(result == 10) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);
							tunax[i] += tunaspeedx;
						if(tunax[i] > 340) tunax[i] = 10;
						}
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
							if(usb3x > 610) usb3x = 420;

						ctx.drawImage(hair3,hair3x,hair3y,hair3sx,hair3sy);
						hair3x += hair3speedx;
							if(hair3x > 610) hair3x = 420;

						ctx.drawImage(book3,book3x,book3y,book3sx,book3sy);
						book3x += book3speedx;
							if(book3x > 610) book3x = 420;

						ctx.drawImage(tire,tirex,tirey,tiresx,tiresy);
						tirex += tirespeedx;
							if(tirex > 610) tirex = 420;
						
					}

					if(result == 11) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);
							tunax[i] += tunaspeedx;
								if(tunax[i] > 340) tunax[i] = 10;
						}
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
							if(usb3x > 610) usb3x = 420;

						ctx.drawImage(hair3,hair3x,hair3y,hair3sx,hair3sy);
						hair3x += hair3speedx;
							if(hair3x > 610) hair3x = 420;

						ctx.drawImage(book3,book3x,book3y,book3sx,book3sy);
						book3x += book3speedx;
							if(book3x > 610) book3x = 420;

						ctx.drawImage(tire,tirex,tirey,tiresx,tiresy);
						tirex += tirespeedx;
							if(tirex > 610) tirex = 420;
						
						ctx.drawImage(clock,clockx,clocky,clocksx,clocksy);
						clockx += clockspeedx;
							if(clockx > 610) clockx = 420;
						
					}
					
					if(result == 12) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);
							tunax[i] += tunaspeedx;
								if(tunax[i] > 340) tunax[i] = 10;
						}
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
							if(usb3x > 610) usb3x = 420;

						ctx.drawImage(hair3,hair3x,hair3y,hair3sx,hair3sy);
						hair3x += hair3speedx;
							if(hair3x > 610) hair3x = 420;

						ctx.drawImage(book3,book3x,book3y,book3sx,book3sy);
						book3x += book3speedx;
							if(book3x > 610) book3x = 420;

						ctx.drawImage(tire,tirex,tirey,tiresx,tiresy);
						tirex += tirespeedx;
							if(tirex > 610) tirex = 420;
						
						ctx.drawImage(clock,clockx,clocky,clocksx,clocksy);
						clockx += clockspeedx;
							if(clockx > 610) clockx = 420;
							
						ctx.drawImage(leaf,leafx,leafy,leafsx,leafsy);
						leafx += leafspeedx;
							if(leafx > 610) leafx = 420;
						
					}
					
					if(result == 13) {						
						ctx.drawImage(pan2,pan2x,pan2y,pan2sx,pan2sy); 	
						ctx.drawImage(car,movecarx[movecarindex],cary,carsx,carsy);
						movecarindex++;
							if(movecarindex > 5) movecarindex = 5;
						ctx.drawImage(usb2,usb2x,usb2y,usb2sx,usb2sy);			
						ctx.drawImage(mat,matx,maty,matsx,matsy);
						ctx.drawImage(book2,book2x,book2y,book2sx,book2sy);
						ctx.drawImage(appletree,appletreex,appletreey,appletreesx,appletreesy);
						ctx.drawImage(bird,birdx,birdy,birdsx,birdsy);
						ctx.drawImage(bush,bushx,bushy,bushsx,bushsy);
						ctx.drawImage(seagull,seagullx,seagully,seagullsx,seagullsy);
						ctx.drawImage(freezer,freezerx,freezery,freezersx,freezersy);
						ctx.drawImage(factory,factoryx,factoryy,factorysx,factorysy);
						ctx.drawImage(soccerball,soccerballx,soccerbally,soccerballsx,soccerballsy);
						ctx.drawImage(swingtree,swingtreex,swingtreey,swingtreesx,swingtreesy);
						ctx.drawImage(paypencil,paypencilx,paypencily,paypencilsx,paypencilsy);
						ctx.drawImage(pencilcase,pencilcasex,pencilcasey,pencilcasesx,pencilcasesy);

						for(var i = 0; i < tunax.length; i++) {
							ctx.drawImage(tuna,tunax[i],tunay,tunasx,tunasy);
							tunax[i] += tunaspeedx;
								if(tunax[i] > 340) tunax[i] = 10;
						}
						ctx.drawImage(usb3,usb3x,usb3y,usb3sx,usb3y);
						usb3x += usb3speedx;
							if(usb3x > 610) usb3x = 420;

						ctx.drawImage(hair3,hair3x,hair3y,hair3sx,hair3sy);
						hair3x += hair3speedx;
							if(hair3x > 610) hair3x = 420;

						ctx.drawImage(book3,book3x,book3y,book3sx,book3sy);
						book3x += book3speedx;
							if(book3x > 610) book3x = 420;

						ctx.drawImage(tire,tirex,tirey,tiresx,tiresy);
						tirex += tirespeedx;
							if(tirex > 610) tirex = 420;
							
						ctx.drawImage(clock,clockx,clocky,clocksx,clocksy);
						clockx += clockspeedx;
							if(clockx > 610) clockx = 420;
						
						ctx.drawImage(leaf,leafx,leafy,leafsx,leafsy);
						leafx += leafspeedx;
							if(leafx > 610) leafx = 420;
						}				

					////////////This function is dependent on function player2(); to execute its if statements////////////
			
			///////////////Go Back to Menu or Back to Player screen///////////////////
			ctx.drawImage(menu,menux,menuy,menusx,menusy);
			ctx.drawImage(back,backx,backy,backsx,backsy);
			//////////////////////
			ctx.fillStyle = 'black';				//////Display the number of mouse clicks on objects that hide clues///////////
			ctx.font = '22px Sans Serif';
			ctx.fillText("Clue Meter: " + "..." + cluemeter,cluemeterx,cluemetery);	
			ctx.drawImage(check,checkx,checky,checksx,checksy);
			ctx.drawImage(glass,glassx,glassy,glasssx,glasssy);	/////Draws Magnifying Glass/////////
			}	
								
							///////////////MINI-GAME 3/////////////////
	function player3 () {
		ctx.fillStyle = 'red';
		ctx.drawImage(city,0,0, w,h);	
		ctx.fillStyle = 'blue';

		//////////control acceleration//////////		
		
		ctx.fillStyle='orange';
		
		for(var j = 0; j < bpx.length; j++) {     ///////Major For Loop To Have 2 Fireballs and Mouse Followers////////////
		for(var i = 0; i < 6; i = i + 0.5) {   ///////General For Loop for Fire Ball///////
			ctx.fillStyle='yellow'; ////////small rectangles move in the canvas and increase in size to simulate fire////////
			ctx.fillRect(bpx[j] + (Math.random()*60) + (i * speedx *(-1)), bpy[j] + (Math.random()*30) + (i * speedy * (-1)), 10 + (i/2),10 + (Math.random()*20))
		
		}	
		
		if(speedx > 10)    ///////////Mouse Follower Acceleration Control/////////////
			speedx = 8;
		else if(speedx < -10)
			speedx = -8;
			
		if(speedy > 10)
			speedy = 8;
		else if(speedy < -10)
			speedy = -8;		
		
		if(bpx[j] < mx) {   //////////////Mouse Follower Follow the Mouse - increase and decrease speed to stay near the mouse/////////
			speedx += 0.5
		}else speedx -= 0.5;
		
		bpx[j] += speedx;
		
		if(bpy[j] < my) {
			speedy += 0.5;
		}else speedy -= 0.5;
		
		bpy[j] += speedy; 
		
		ctx.fillStyle='blue';  ///////Colour for mouse follower rectangle//////////
		ctx.fillRect(bpx[j],bpy[j],bpsx,bpsy); //////////////Mouse Follower Rectangle///////
		ctx.drawImage(spaceship,bpx[j],bpy[j],bpsx,bpsy);  ///////////////Mouse Follower Image/////
			
		///////////////Rocks As Obstacles///////////
	
		if(pic1 == true) {	///////If score is less than a certain number, the rocks disappear - Bolean Math functions to End the Game/////////
			myalert.play ();
			for(var i = 0; i < boxx.length; i = i + 1) { /////////An array of rocks are displayed on the canvas and they update when more array values are added/////
				ctx.drawImage(rocks,boxx[i],boxy[i],boxsx[i],boxsy[i]);
				boxx[i] += boxspeedx[i]; ///////rocks move in the x plane of the canvas//////////
				boxy[i] += boxspeedy[i]; ///////rocks move in the y plane of the canvas////////
					if(boxx[i] > w) boxx[i] = -50; ////////Creates the affect that more rocks are coming on the canvas//////
					if(boxy[i] > h) boxy[i] = -50;
		
				if(bpx[j] > boxx[i] && bpx[j] < boxx[i] + boxsx[i] && bpy[j] > boxy[i] && bpy[j] < boxy[i] + boxsy[i] ) {
					///////Collision detection For the Mouse Follower with the array of rocks////////
					score += 75; ///////Here the loss (score) or number of hits update when collision detection works//////
					laser5.play ();
				}
			}
			
			for(var i = 0; i < batteryx.length; i = i + 1) { /////////An array of alien batteries are displayed on the canvas and they update when more array values are added/////
				ctx.drawImage(battery,batteryx[i],batteryy[i],batterysx[i],batterysy[i]);
				batteryx[i] += batteryspeedx[i]; ///////rocks move in the x plane of the canvas//////////
				batteryy[i] += batteryspeedy[i]; ///////rocks move in the y plane of the canvas////////
					if(batteryx[i] > w) batteryx[i] = -50; ////////Creates the affect that more batteries are coming on the canvas//////
					if(batteryy[i] > h) batteryy[i] = -50;
		
				if(bpx[j] > batteryx[i] && bpx[j] < batteryx[i] + batterysx[i] && bpy[j] > batteryy[i] && bpy[j] < batteryy[i] + batterysy[i] ) {
					///////Collision detection For the Mouse Follower with the array of alien batteries///////
					score += -200; ///////Here the score updates when collision detection works//////
						//////////The Alien batteries generate power for the flying spaceships so the loss decreases/////////
				}
			}
		}
		
		if(score > 500) {
			boxx.splice(2,1);		/////SPLICE ACTIVATES WHEN LOSS IS GREATER THAN 500 TO MAKE THE GAME A BIT EASIER////////
			boxy.splice(2,1);		////////IT DECREASES ONE ROCK FROM THE ARRAY OF ROCKS////////////
			boxsx.splice(2,1);		///////THE MOTHER SPACESHIP LOSES ITS CHILD WHEN THIS HAPPENS//////////
			bossy.splice(2,1);		////////THE MOTHER SPACESHIP CAN REVIVE ITSELF BY GETTING THE BATTERIES FLOATING AROUND//////////
		}
		
		if(score < 100) {		/////////////MORE ROCKS ARE ADDED WHEN THE GAME IS TO EASY- WHEN LOSS IS LESS THAN 100///////
			boxx.push(0);		////////GAME ENDS AFTER LOSS OF 1000 POINTS//////////////////
			boxx.push(100);
			boxx.push(500);
			boxy.push(200);
			boxy.push(10);
			boxy.push(400);
			boxsx.push(40);
			boxsx.push(40);
			boxsx.push(30);
			boxsy.push(40);
			boxsy.push(60);
			boxsy.push(50);
			boxspeedx.push(3);
			boxspeedx.push(4);
			boxspeedx.push(5);
			boxspeedy.push(7);
			boxspeedy.push(4);
			boxspeedy.push(3);
		}
		
		///////////////Go Back to Menu or Back to Player screen///////////////////
			ctx.drawImage(menu,menux,menuy,menusx,menusy);
			ctx.drawImage(back,backx,backy,backsx,backsy);
		//////////////////////////////////////////////////////////////////////////////////
	
	} //////End of Major For Loop for 2 Mouse Followers///////
	
	ctx.fillStyle="blue"; //////Colour of blue for text//////
	ctx.fillText("Loss:" + score,100,100,200,200); /////Display the number of hits or collisions the array of rocks have with the mouse followers///////
	
		if(score > 1000) { //////Functions to end the game after number of collisions exceed a score of 1000////////
			prompt("Game Over");
			ctx.fillText("Its Over",200,200); ////////Displays Game Over///////
			pic1 = false; /////All Rocks disappear - End Game////////
			screen = '0';
		}
	}	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle = 'red';
		ctx.fillRect(0,0, 640,480);	
		ctx.fillStyle = 'white';
		
		if(screen == '0') {      ///////Game Over screen//////////
			/////////////Play Again Button After Game Over/////////////////////
			init();
			ctx.drawImage(playagain,playagainx,playagainy,playagainsx,playagainsy);
			ctx.drawImage(investigation,investigationx,investigationy,investigationsx,investigationsy);	
			ctx.drawImage(one,onex,oney,onesx,onesy);
			ctx.drawImage(two,twox,twoy,twosx,twosy);
			ctx.drawImage(three,threex,threey,threesx,threesy);
			ctx.drawImage(menu,menux,menuy,menusx,menusy);
			ctx.fillStyle = 'black';
			ctx.globalAlpha = 0.9;
			ctx.fillText("Game Over", gameoverx + 75,gameovery + 75);
			ctx.fillStyle = 'orange';
			ctx.globalAlpha = Math.random ()* 0.6 + 0.1;
			ctx.fillRect(gameoverx,gameovery,gameoversx,gameoversy);
		}
			
		///////////////////////////////////////////////////
		
		
		if(screen == '1') {    //////////Main Menue///////
			init();
			ctx.drawImage(menuscreen,0,0,w,h);
			ctx.globalAlpha = (Math.random()*0.4 + 0.1)
			ctx.drawImage(footglass,footglassx,footglassy,footglasssx,footglasssy);
			ctx.globalAlpha = 1;
			ctx.fillStyle = 'black';
			ctx.font = '32px Sans Serif';
			ctx.fillText("Evade!",265,75,500,500);
			ctx.fillStyle = 'green';
			ctx.fillRect(playx,playy,playsx,playsy);
			ctx.fillStyle = 'black';
			ctx.font = '20px Sans Serif';
			ctx.fillText("Play!", playx + 32.5,playy + 30);
			ctx.fillStyle = 'green';
			ctx.fillRect(helpx,helpy,helpsx,helpsy);
			ctx.fillStyle = 'black';
			ctx.font = '20px Sans Serif';
			ctx.fillText("Help", helpx + 32.5,helpy + 30);
			////ctx.globalAlpha=0.1;////
			////ctx.drawImage(background1,0,0,w,h);/////
		}
		
		if(screen == '2') {			////////Help and Controls///////
			init();
			ctx.drawImage(helpbg,0,0,w,h);
			ctx.globalAlpha=1.0;
			ctx.fillStyle = 'black';
			ctx.font = '18px Sans Serif';
			ctx.drawImage(menu,menux,menuy,menusx,menusy);
			ctx.fillText("Use the Arrow Keys to move your player. Evade the guards and avoid the light!", inhelpx,inhelpy + 30);
			ctx.fillText("When you are in the safe zone, Go through the door to continue your next investigation. Hint: Try To Keep the score above 0!", inhelpx,inhelpy + 60);
			ctx.fillText("Hint: Try To Keep the score above 0!", inhelpx + 60,inhelpy + 100);
			ctx.fillStyle = 'blue';
			ctx.globalAlpha=0.7;
			ctx.fillRect(inhelpx,inhelpy,inhelpsx,inhelpsy);
			ctx.globalAlpha = 1;
			ctx.globalAlpha = (Math.random()* 0.4 + 0.1);
			ctx.drawImage(keyboard,keyboardx,keyboardy,keyboardsx,keyboardsy);
			ctx.globalAlpha = 1;
		}
		
		if(screen == '3') { ///////////Choose Player screen////////
			init();
			ctx.fillStyle = 'black';
			ctx.font = '18px Sans Serif';
			ctx.fillText("Choose your Player!", choosex + 15,choosey + 25);
			ctx.fillStyle = 'blue';
			ctx.globalAlpha=0.6;
			ctx.fillRect(choosex,choosey,choosesx,choosesy);
			ctx.globalAlpha=1.0;
			ctx.drawImage(show1,show1x,show1y,show1sx,show1sy);
			ctx.fillText("Moderate Speed",show1x,show1y - 10);
			ctx.drawImage(show2,show2x,show2y,show2sx,show2sy);
			ctx.fillText("Fast Speed",show2x,show2y - 10);
			ctx.drawImage(show3,show3x,show3y,show3sx,show3sy);
			ctx.fillText("Slow Speed",show3x,show3y - 10);
		}
		
			
		if(screen == '4') {
		player1();							////////Investigation 1 Level 1//////////
		}
		
		if(screen == '4.1') {					///////Investigation 1 Level 2//////////
		
		player1new();
		} 
		
		if(screen == '4.2') {					///////Investigation 1 Level 3//////////
		player1new2();
		} 
		
		if(screen == '4.3') {					///////Investigation 1 Level 4//////////
		player1new3();
		} 
		
		if(screen == '4.4') {					///////Investigation 1 Level 5//////////
		player1new4();
		}
		
		if(screen == '4.5') {					///////Investigation 1 Level 5//////////
		init();
		ctx.fillStyle = 'red';
		ctx.fillRect(0,0,w,h);
		ctx.drawImage(solved,0,0,w,h);
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		ctx.font = '32px Sans Serif';
		ctx.fillText("SCORE IS " + screen4score,100,100);
		alert("Great Job Detective! All Clues have been found. Try Investigation 2");
		} 
		
		if(screen == '5') {						////////Investigation 2 LOADING SCREEN//////////
		player2();
		}
		
		if(screen == '5.1') {						////////Investigation 2//////////
		player2new();		
		}
		
		if(screen == '5.2') {						////////Investigation 2//////////
		init();
		ctx.fillStyle = 'red';
		ctx.fillRect(0,0,w,h);
		ctx.drawImage(solved,0,0,w,h);
		ctx.drawImage(menu,menux,menuy,menusx,menusy);
		ctx.drawImage(back,backx,backy,backsx,backsy);
		ctx.font = '32px Sans Serif';
		ctx.fillText("SCORE IS " + cluemeter,100,100);
		alert("Great Job Detective! All Clues have been found. Try Investigation 1");
		}
		
		if(screen == '6') {						////////Investigation 3///////////
		player3();
		}
				

		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
			
		if(screen == '1') {				/////ALLOWS PLAYER TO MOVE TO THE NEXT SCREEN//////
		
		
			if(mx > playx && mx < playx + playsx && my > playy && my < playy + playsy) {
				screen = '3'; ///////////from Play to choose Players////	
			}
		
			if(mx > helpx && mx < helpx + helpsx && my > helpy && my < helpy + helpsy) {
				screen = '2'; ////////From menue to help window///////
			}
		
		}
		
		if(screen == '3') {
		
			if(mx > show1x && mx < show1x + show1sx && my > show1y && my < show1y + show1sy) {
				screen = '4'; ////////From player1 to game1///////
			}
		
			if(mx > show2x && mx < show2x + show2sx && my > show2y && my < show2y + show2sy) {
				screen = '5'; ////////From player2 to game2///////
			}
		
			if(mx > show3x && mx < show3x + show3sx && my > show3y && my < show3y + show3sy) {
				screen = '6'; ////////From player3 to game3///////
			}
		
		}
		/////////////THE MENU BUTTON ON SCREENS SO THAT PLAYER CAN RETURN TO MENU OR CHOOSE GAME SCREEN////////
		if(screen == '4' || screen == '4.1' || screen == '4.2' || screen == '4.3' || screen == '4.4' || screen == '4.5' || screen == '2' || screen == '5' || screen == '5.1' || screen == '5.2' || screen == '6') {
		
			if(mx > menux && mx < menux + menusx && my > menuy && my < menuy + menusy) {
				screen = '1';	/////////////menu Button////////////
			}
		
			if(mx > backx && mx < backx + backsx && my > backy && my < backy + backsy) {
				screen = '3';	/////////////Return to Choose Player Screen Button////////////
			}
		
		}
		
		/////////////ALLOWS PLAYER TO RETURN TO THEIR RESPECTIVE GAME AFTER ARRIVING AT GAME OVER SCREEN/////////////
		if(screen == '0') {
		
			if(mx > onex && mx < onex + onesx && my > oney && my < oney + onesy) {
				init();
				screen = '4';/////////////Return to Choose Player Screen Button////////////
			}
		
			if(mx > twox && mx < twox + twosx && my > twoy && my < twoy + twosy) {
				init();	/////////////Return to Choose Player Screen Button////////////
				screen = '5';
			}
		
			if(mx > threex && mx < threex + threesx && my > threey && my < threey + threesy) {
				init();	/////////////Return to Choose Player Screen Button////////////
				screen = '6';
			}
		
		}

////////////////////////////////Investigation 2/////////////////////
		
		if(screen == '5') {			//////ALLOWS PLAYER TO START INVESTIGATION 2 OR MINI-GAME 2/////////////////
		
			if(mx > startx && mx < startx + startsx && my > starty && my < starty + startsy) {
				screen = '5.1';
			}
		
		}
		
		if(screen == '5.1') {	////////////USED TO FIND CLUES IN INVESTIGATION 2//////////	
		
			if(mx > matx && mx < matx + matsx && my > maty && my < maty + matsy) {
				ctx.drawImage(mat,matx + Math.random ()*5,maty + Math.random()*5,matsx,matsy);
				usb2x += usb2speedx;
						if(usb2x > (matx + matsx) + (usb2sx*1.5)) usb2x = 0;
						if(usb2x > 0) usb2x = 0;
						cluemeter += 1;			
			}
		
			if(mx > carx && mx < carx + carsx && my > cary && my < cary + carsy) {
				ctx.drawImage(car,carx + Math.random ()*5,cary + Math.random()*5,carsx,carsy);
				pan2x += pan2speedx;
						if(pan2x > (carx + carsx) + (pan2sx*1.5)) pan2x = 0;
						if(pan2x > 0) pan2x = 0;
						cluemeter += 1;
			}
		
			if(mx > appletreex && mx < appletreex + appletreesx && my > appletreey && my < appletreey + appletreesy) {
				ctx.drawImage(appletree,appletreex + Math.random ()*5,appletreey + Math.random()*5,appletreesx,appletreesy);
				book2y += book2speedy;
					if(book2y > 440) book2x = 0;
					if(book2y > 0) {
					book2y = 440;
					cluemeter += 1;
					}
			}
			
			if(mx > swingtreex && mx < swingtreex + swingtreesx && my > swingtreey && my < swingtreey + swingtreesy) {
				ctx.drawImage(soccerball,soccerballx + Math.random ()*5,soccerbally + Math.random()*5,soccerballsx,soccerballsy);
				soccerballx += soccerballspeedx;
						if(soccerballx > (soccerballx + soccerballsx) + (soccerballsx*1.5)) {
							soccerballx = 0;
							soccerbally = 400;
						}
						if(soccerballx > 0) soccerballx = 0;
						cluemeter += 1;
			}
		
			if(mx > bushx && mx < bushx + bushsx && my > bushy && my < bushy + bushsy) {
				ctx.drawImage(bush,bushx + Math.random ()*5,bushy + Math.random()*5,bushsx,bushsy);
				birdx += birdspeedx;
						if(birdx > (bushx + bushsx) + (birdsx*1.5)) birdx = 0;
						if(birdx > 0) birdx = 0;
						cluemeter += 1;
			}
		
			if(mx > freezerx && mx < freezerx + freezersx && my > freezery && my < freezery + freezersy) {
				ctx.drawImage(freezer,freezerx + Math.random ()*5,freezery + Math.random()*5,freezersx,freezersy);
				seagullx += seagullspeedx;
						if(seagullx > (freezerx + freezersx) + (seagullsx*1.5)) seagullx = 0;
						if(seagullx > 0) seagullx = 0;
						cluemeter += 1;
			}
			
			if(mx > pencilcasex && mx < pencilcasex + pencilcasesx && my > pencilcasey && my < pencilcasey + pencilcasesy) {
				ctx.drawImage(pencilcase,pencilcasex + Math.random ()*5,pencilcasey + Math.random()*5,pencilcasesx,pencilcasesy);
				paypencilx += paypencilspeedx;
						if(paypencilx > (pencilcasex + pencilcasesx) + (paypencilsx*1.5)) paypencilx = 0;
						if(paypencilx > 0) paypencilx = 0;
						cluemeter += 1;
			}
		
			if(mx > usb3x && mx < usb3x + usb3sx && my > usb3y && my < usb3y + usb3sy) {
				ctx.drawImage(usb3,usb3x + Math.random ()*5,usb3y + Math.random()*5,usb3sx,usb3sy);
					usb3x = 0;	
					usb3y = 200;
					usb3speedx = 0;
					cluemeter += 1;					
			}
		
			if(mx > hair3x && mx < hair3x + hair3sx && my > hair3y && my < hair3y + hair3sy) {
				ctx.drawImage(hair3,hair3x + Math.random ()*5,hair3y + Math.random()*5,hair3sx,hair3sy);
					hair3x = 0;	
					hair3y = 140;
					hair3speedx = 0;
					cluemeter += 1;					
			}
			
			if(mx > book3x && mx < book3x + book3sx && my > book3y && my < book3y + book3sy) {
				ctx.drawImage(book3,book3x + Math.random ()*5,book3y + Math.random()*5,book3sx,book3sy);
					book3x = 0;	
					book3y = 180;
					book3speedx = 0;
					cluemeter += 1;				
			}
			
			if(mx > tirex && mx < tirex + tiresx && my > tirey && my < tirey + tiresy) {
				ctx.drawImage(tire,tirex + Math.random ()*5,tirey + Math.random()*5,tiresx,tiresy);
					tirex = 10;	
					tirey = 220;
					tirespeedx = 0;
					cluemeter += 1;				
			}
			
			if(mx > clockx && mx < clockx + clocksx && my > clocky && my < clocky + clocksy) {
				ctx.drawImage(clock,clockx + Math.random ()*5,clocky + Math.random()*5,clocksx,clocksy);
					clockx = 20;	
					clocky = 240;
					clockspeedx = 0;
					cluemeter += 1;				
			}
			
			if(mx > leafx && mx < leafx + leafsx && my > leafy && my < leafy + leafsy) {
				ctx.drawImage(leaf,leafx + Math.random ()*5,leafy + Math.random()*5,leafsx,leafsy);
					leafx = 35;	
					leafy = 290;
					leafspeedx = 0;
					cluemeter += 1;				
			}

			if(mx > checkx && mx < checkx + checksx && my > checky && my < checky + checksy) {
				init();
				screen = '5.2';
			}

	}
		
			      
		
	}, false);

	///////////////////////use boolean variables////////////////////////
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
		if(screen == '4') { ////////Investigation 1 Controls and Collision Detection///////////
							
			if(key == '39') { //////Right Control///////
			show1x += show1speedxr;
			}
			
			if(keyx > show1x && keyx < show1x + show1sx && keyy > show1y && keyy < show1y + show1sy) { ////Acquire evidence Collision detection////
			keyclue = false;
			////////alert("Evidence Retrieved");
			screen4score += 200;
			foundclue.play ();
			}
			
			if(filex > show1x && filex < show1x + show1sx && filey > show1y && filey < show1y + show1sy) { ////Acquire evidence collision detection////
			fileclue = false;
			screen4score += 200;
			foundclue.play ();
			/////////////alert("Evidence Retrieved");
			}
			
			if(usbx > show1x && usbx < show1x + show1sx && usby > show1y && usby < show1y + show1sy) { ////Acquire evidence collision detection////
			usbclue = false;
			screen4score += 500;
			foundclue.play ();
			////////////alert("Evidence Retrieved");
			}			
			
			if(door1x > show1x && door1x < show1x + show1sx && door1y > show1y && door1y < show1y + show1sy) {    ////////Door For Level 1 Collision Detection///////
			alert("Great! Welcome to the Investigation!");
			screen = '4.1';
			door.play ();
			}		
					
			if(key == '37') { ///////Left Control/////
			show1x += show1speedxl;
			}
			
			if(key == '38') { ///////Up Control/////
			show1y += show1speedyu;
			}
			
			if(key == '40') { ///////Down Control/////
			show1y += show1speedyd;
			}
		}else if(screen == '4.1') { ////////Investigation 2//////
							
			if(key == '39') {//////Right Control///////
			show1x += show1speedxr;
			}
			
			if(penx > show1x && penx < show1x + show1sx && peny > show1y && peny < show1y + show1sy) { ////Acquire evidence////
			penclue = false;
			///////alert("Evidence Retrieved");
			screen4score += 1000;	
			foundclue.play ();
			}
			
			if(paperx > show1x && paperx < show1x + show1sx && papery > show1y && papery < show1y + show1sy) { ////Acquire evidence////
			paperclue = false;
			screen4score += 1000;
			foundclue.play ();
			///////////alert("Evidence Retrieved");
			}
			
			if(ballx > show1x && ballx < show1x + show1sx && bally > show1y && bally < show1y + show1sy) { ////Acquire evidence////
			ballclue = false;
			screen4score += 1000;
			foundclue.play ();
			//////////////alert("Evidence Retrieved");
			}

			if(pencilx > show1x && pencilx < show1x + show1sx && pencily > show1y && pencily < show1y + show1sy) { ////Acquire evidence////
			pencilclue = false;
			screen4score += 1000;
			foundclue.play ();
			//////////////alert("Evidence Retrieved");
			}		
			
			if(door2x > show1x && door2x < show1x + show1sx && door2y > show1y && door2y < show1y + show1sy) {
			alert("Great! Continue to the Investigation!");
			screen = '4.2';
			door.play ();
			}	
					
			if(key == '37') { ///////Left Control/////
			show1x += show1speedxl;
			}
			
			if(key == '38') { ///////Up Control/////
			show1y += show1speedyu;
			}
			
			if(key == '40') { ///////Down Control/////
			show1y += show1speedyd;
			}
		}else if(screen == '4.2') { ////////Move Player2 Fast Speed//////
						
			if(key == '39') { /////Right Control///////
			show1x += show1speedxr;
			}
			
			if(key == '37') { ///////Left Control/////
			show1x += show1speedxl
			}
			
			if(key == '38') { ///////Up Control///
			show1y += show1speedyu;
			}
			
			if(key == '40') { /////Down Control////
			show1y += show1speedyd;
			}
			
			if(door3x > show1x && door3x < show1x + show1sx && door3y > show1y && door3y < show1y + show1sy) {
			//////////alert("Great! Continue to the Investigation!");
			screen = '4.3';
			door.play ();
			}

			if(wirex > show1x && wirex < show1x + show1sx && wirey > show1y && wirey < show1y + show1sy) { ////Acquire evidence Collision detection////
			wireclue = false;
			////////////alert("Evidence Retrieved");
			screen4score += 5000;	
			foundclue.play ();
			}
			
			if(hairx > show1x && hairx < show1x + show1sx && hairy > show1y && hairy < show1y + show1sy) { ////Acquire evidence Collision detection////
			hairclue = false;
			///////alert("Evidence Retrieved");
			screen4score += 1000;
			foundclue.play ();
			}
			
			if(panx > show1x && panx < show1x + show1sx && pany > show1y && pany < show1y + show1sy) { ////Acquire evidence Collision detection////
			panclue = false;
			/////////alert("Evidence Retrieved");
			screen4score += 5000;
			foundclue.play ();
			}
			
			if(scissorsx > show1x && scissorsx < show1x + show1sx && scissorsy > show1y && scissorsy < show1y + show1sy) { ////Acquire evidence Collision detection////
			scissorsclue = false;
			//////////alert("Evidence Retrieved");
			screen4score += 10000;
			foundclue.play ();
			}
			
			if(bookx > show1x && bookx < show1x + show1sx && booky > show1y && booky < show1y + show1sy) { ////Acquire evidence Collision detection////
			bookclue = false;
			////////////alert("Evidence Retrieved");
			screen4score += 10000;
			foundclue.play ();
			}
			
		}else if(screen == '4.3') { ////////Move Player2 Fast Speed//////
						
			if(key == '39') { /////Right Control///////
			show1x += show1speedxr;
			}
			
			if(key == '37') { ///////Left Control/////
			show1x += show1speedxl
			}
			
			if(key == '38') { ///////Up Control///
			show1y += show1speedyu;
			}
			
			if(key == '40') { /////Down Control////
			show1y += show1speedyd;
			}
			
			if(door4x > show1x && door4x < show1x + show1sx && door4y > show1y && door4y < show1y + show1sy) {
			alert("Great! Continue to the Investigation!");
			screen = '4.4';
			}

			if(lampx > show1x && lampx < show1x + show1sx && lampy > show1y && lampy < show1y + show1sy) { ////Acquire evidence Collision detection////
			lampclue = false;
			foundclue.play ();
			screen4score += 5000;			
			}
			
			if(laptopx > show1x && laptopx < show1x + show1sx && laptopy > show1y && laptopy < show1y + show1sy) { ////Acquire evidence Collision detection////
			laptopclue = false;
			foundclue.play ();
			screen4score += 1000;			
			}
			
			if(binx > show1x && binx < show1x + show1sx && biny > show1y && biny < show1y + show1sy) { ////Acquire evidence Collision detection////
			binclue = false;
			foundclue.play ();
			screen4score += 5000;			
			}
			
			if(rulerx > show1x && rulerx < show1x + show1sx && rulery > show1y && rulery < show1y + show1sy) { ////Acquire evidence Collision detection////
			rulerclue = false;
			foundclue.play ();
			screen4score += 1000;			
			}
			
			if(phonex > show1x && phonex < show1x + show1sx && phoney > show1y && phoney < show1y + show1sy) { ////Acquire evidence Collision detection////
			phoneclue = false;
			foundclue.play ();
			screen4score += 1000;			
			}
			
		}else if(screen == '4.4') { ////////Move Player2 Fast Speed//////
						
			if(key == '39') { /////Right Control///////
			show1x += show1speedxr;
			}
			
			if(key == '37') { ///////Left Control/////
			show1x += show1speedxl
			}
			
			if(key == '38') { ///////Up Control///
			show1y += show1speedyu;
			}
			
			if(key == '40') { /////Down Control////
			show1y += show1speedyd;
			}
			
			if(door5x > show1x && door5x < show1x + show1sx && door5y > show1y && door5y < show1y + show1sy) {
			alert("Great! Continue to the Investigation!");
			screen = '4.5';
			}

			if(remotex > show1x && remotex < show1x + show1sx && remotey > show1y && remotey < show1y + show1sy) { ////Acquire evidence Collision detection////
			remoteclue = false;
			foundclue.play ();
			screen4score += 5000;			
			}
			
			if(clipx > show1x && clipx < show1x + show1sx && clipy > show1y && clipy < show1y + show1sy) { ////Acquire evidence Collision detection////
			clipclue = false;
			foundclue.play ();
			screen4score += 1000;			
			}
			
			if(ipadx > show1x && ipadx < show1x + show1sx && ipady > show1y && ipady < show1y + show1sy) { ////Acquire evidence Collision detection////
			ipadclue = false;
			foundclue.play ();
			screen4score += 5000;			
			}
			
			if(dvdx > show1x && dvdx < show1x + show1sx && dvdy > show1y && dvdy < show1y + show1sy) { ////Acquire evidence Collision detection////
			dvdclue = false;
			foundclue.play ();
			screen4score += 1000;			
			}
			
			if(computerx > show1x && computerx < show1x + show1sx && computery > show1y && computery < show1y + show1sy) { ////Acquire evidence Collision detection////
			computerclue = false;
			foundclue.play ();
			screen4score += 1000;			
			}	
			
		}else if(screen == '6') { ////////Move Player3 Slow Speed//////
			
			if(key == '39') { //////Right Control/////
			show3x += show3speedxr;
			}
			
			if(key == '37') { //////////Left Control/////
			show3x += show3speedxr;
			}
			
			if(key == '38') { ////////////Up Control//////
			show3y += show3speedyu
			}
			
			if(key == '40') { ///////////Down control///////
			show3y += show3speedyd
			}
		}
		
		
		
		
		
		
		
	}, false);




})


