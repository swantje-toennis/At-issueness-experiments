/*************** 
 * Pilot2 Test *
 ***************/


// store info about the experiment session:
let expName = 'pilot2';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(block1RoutineBegin());
flowScheduler.add(block1RoutineEachFrame());
flowScheduler.add(block1RoutineEnd());
flowScheduler.add(instructions2RoutineBegin());
flowScheduler.add(instructions2RoutineEachFrame());
flowScheduler.add(instructions2RoutineEnd());
const trials_block1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_block1LoopBegin(trials_block1LoopScheduler));
flowScheduler.add(trials_block1LoopScheduler);
flowScheduler.add(trials_block1LoopEnd);
flowScheduler.add(block2RoutineBegin());
flowScheduler.add(block2RoutineEachFrame());
flowScheduler.add(block2RoutineEnd());
const trials_block2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_block2LoopBegin(trials_block2LoopScheduler));
flowScheduler.add(trials_block2LoopScheduler);
flowScheduler.add(trials_block2LoopEnd);
flowScheduler.add(block3RoutineBegin());
flowScheduler.add(block3RoutineEachFrame());
flowScheduler.add(block3RoutineEnd());
flowScheduler.add(explanationRoutineBegin());
flowScheduler.add(explanationRoutineEachFrame());
flowScheduler.add(explanationRoutineEnd());
flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'logo.png', 'path': 'logo.png'},
    {'name': 'input2.xlsx', 'path': 'input2.xlsx'},
    {'name': 'input1.xlsx', 'path': 'input1.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=16A7637A', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["participant"]}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var logo1;
var text_instr;
var introduction;
var introduction_2;
var introduction_3;
var continue1;
var mouse;
var consentClock;
var logo2;
var Heading;
var consent_text;
var continue2;
var mouse_consent;
var block1Clock;
var logo3;
var text_5;
var intro_block2_2;
var continue6_2;
var mouse_9;
var instructions2Clock;
var logo1_3;
var introduction_5;
var continue1_3;
var mouse_6;
var trial_expectednessClock;
var read_context_2;
var textbox;
var text2;
var proposal;
var exp;
var continue3;
var mouse_2;
var block2Clock;
var logo5;
var text_3;
var intro_block2;
var continue6;
var mouse_5;
var trial_certaintyClock;
var read_context;
var textbox_4;
var task1;
var certainty_rate;
var continue3_4;
var mouse_7;
var block3Clock;
var logo5_2;
var text;
var intro_block2_3;
var continue6_3;
var mouse_8;
var explanationClock;
var heading;
var prev_trial;
var Heading_2;
var explanation_enter;
var continue2_2;
var mouse_consent_2;
var demographicsClock;
var logo7;
var Heading_4;
var age;
var age_enter;
var gender;
var gender_slider;
var native_lang;
var lang_enter;
var finish_comment;
var continue4;
var mouse_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  logo1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo1', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr',
    text: 'Welcome to our study!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  introduction = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction',
    text: 'The goal of this study is to investigate how humans understand English utterances. The study consists of three parts. In each part, you will read the same  3-sentence statement by a speaker. Here is an example:',
    font: 'Open Sans',
    pos: [0, 0.35], letterHeight: 0.03,
    size: [0.9, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'top-center',
    depth: -2.0 
  });
  
  introduction_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction_2',
    text: 'Phil said: I went shopping last Tuesday. I had a day off from work. I bought lots of beautiful things.',
    font: 'Open Sans',
    pos: [0, 0.18], letterHeight: 0.03,
    size: [0.9, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'top-center',
    depth: -3.0 
  });
  
  introduction_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction_3',
    text: 'In part 1, we are interested in understanding what the speaker might say in the next sentence (e.g., Phil might say next what else he did on his day off). We will make a proposal and ask you to rate how expected that proposal is. \n\nIn part 2, you will see the statement again, but we will show you what the speaker actually said next. Phil, for instance, said next: "My favorite piece was a blue fake leather jacket." We will ask you a question about what the speaker is certain about, e.g., "Is Phil certain that the leather jacket is fake?".\n\nIn part 3, we will ask you to explain your judgment to us.\n\nAt the end of the study, we will ask you for your demographic information. Please pay close attention during your participation! The study should take approximately 4 minutes. ',
    font: 'Open Sans',
    pos: [0, 0.05], letterHeight: 0.03,
    size: [0.9, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'top-center',
    depth: -4.0 
  });
  
  continue1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue1',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.42)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  logo2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo2', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Heading = new visual.TextStim({
    win: psychoJS.window,
    name: 'Heading',
    text: 'CONSENT',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consent_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'consent_text',
    text: 'By clicking on the "I want to participate"-button below you agree to participate in this study, which is conducted by researchers at the University of Stuttgart. You may withdraw from this study at any time without penalty or loss of benefits, including loss or reduction of payment. If you do withdraw from the study before the end, please contact the researchers for information on how to collect payment (swantje.toennis@ling.uni-stuttgart.de). The data collected will be anonymous and confidential. You give permission for your data from this study to be shared with other researchers. If you have any questions, you may contact the requester through Prolific\'s platform or via email (swantje.toennis@ling.uni-stuttgart.de). ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [0.9, 1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  continue2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue2',
    text: 'I want to participate',
    font: 'Open Sans',
    pos: [0, (- 0.35)], letterHeight: 0.03,
    size: [0.45, 0.04],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  mouse_consent = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_consent.mouseClock = new util.Clock();
  // Initialize components for Routine "block1"
  block1Clock = new util.Clock();
  logo3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo3', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'You are now entering part 1 of the study!\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_block2_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'intro_block2_2',
    text: 'Remember: In this part you will read a statement by a speaker, and you will indicate what you expect that speaker to say in the next sentence.\nClick "Continue" to start the experiment.',
    font: 'Open Sans',
    pos: [0, (- 0.15)], letterHeight: 0.03,
    size: [1, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  continue6_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue6_2',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions2"
  instructions2Clock = new util.Clock();
  logo1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo1_3', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  introduction_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction_5',
    text: 'Before you answer our questions, imagine the following scenario for this study: \n\nYou are at a party and have just gotten into the kitchen to get yourself a drink. While you search for a cup and something you would like to drink, you overhear a conversation by a couple of people behind you. They know each other well and meet regularly. You have seen them at other parties but never talked to them.',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [0.9, 1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  continue1_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue1_3',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.42)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_expectedness"
  trial_expectednessClock = new util.Clock();
  read_context_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'read_context_2',
    text: 'One girl says:',
    font: 'Open Sans',
    pos: [0, 0.35], letterHeight: 0.03,
    size: [1.0, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Open Sans',
    pos: [0, 0.2], letterHeight: 0.03,
    size: [1, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: "What do you expect that the girl's next sentence will be about? Rate the following proposal by adjusting the slider.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  proposal = new visual.TextStim({
    win: psychoJS.window,
    name: 'proposal',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.13)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  exp = new visual.Slider({
    win: psychoJS.window, name: 'exp',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.19)], ori: 0.0, units: 'height',
    labels: ["very unexpected", "very expected"], fontSize: 0.025, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  continue3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue3',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.42)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "block2"
  block2Clock = new util.Clock();
  logo5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo5', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You are now entering part 2 of the study!\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_block2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'intro_block2',
    text: 'Remember: In this part you will read the girl\'s statement and what she said next. You will evaluate whether the girl is certain about something.\nClick "Continue" to start part 2 of the study.',
    font: 'Open Sans',
    pos: [0, (- 0.15)], letterHeight: 0.03,
    size: [1, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  continue6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue6',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_certainty"
  trial_certaintyClock = new util.Clock();
  read_context = new visual.TextBox({
    win: psychoJS.window,
    name: 'read_context',
    text: 'Read again what the girl said and what she said next:',
    font: 'Open Sans',
    pos: [0, 0.35], letterHeight: 0.03,
    size: [1.0, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  textbox_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_4',
    text: '',
    font: 'Open Sans',
    pos: [0, 0.2], letterHeight: 0.03,
    size: [1, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  task1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'task1',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1.0, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  certainty_rate = new visual.Slider({
    win: psychoJS.window, name: 'certainty_rate',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["no", "yes"], fontSize: 0.025, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  continue3_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue3_4',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "block3"
  block3Clock = new util.Clock();
  logo5_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo5_2', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You are now entering part 3 of the study!\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_block2_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'intro_block2_3',
    text: 'Remember: In this part you will read the girl\'s statement again and will be asked to explain your judgment from part 1.\nClick "Continue" to start part 3 of the study.',
    font: 'Open Sans',
    pos: [0, (- 0.15)], letterHeight: 0.03,
    size: [1, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  continue6_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue6_3',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  // Initialize components for Routine "explanation"
  explanationClock = new util.Clock();
  heading = new visual.TextStim({
    win: psychoJS.window,
    name: 'heading',
    text: 'Here is the example from part 1 again:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  prev_trial = new visual.TextBox({
    win: psychoJS.window,
    name: 'prev_trial',
    text: '',
    font: 'Open Sans',
    pos: [0, 0.25], letterHeight: 0.03,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  Heading_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Heading_2',
    text: 'Please explain to us how you decided whether our proposal that the next sentence is about where Tom is every Monday was more or less expected.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  explanation_enter = new visual.TextBox({
    win: psychoJS.window,
    name: 'explanation_enter',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.15)], letterHeight: 0.03,
    size: [1, 0.25],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  continue2_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue2_2',
    text: 'Continue',
    font: 'Open Sans',
    pos: [0, (- 0.35)], letterHeight: 0.03,
    size: [0.17, 0.035],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  mouse_consent_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_consent_2.mouseClock = new util.Clock();
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  logo7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo7', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Heading_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Heading_4',
    text: 'DEMOGRAPHICS',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  age = new visual.TextStim({
    win: psychoJS.window,
    name: 'age',
    text: 'Your age:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  age_enter = new visual.TextBox({
    win: psychoJS.window,
    name: 'age_enter',
    text: '',
    font: 'Open Sans',
    pos: [0, 0.2], letterHeight: 0.03,
    size: [0.6, 0.04],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -3.0 
  });
  
  gender = new visual.TextStim({
    win: psychoJS.window,
    name: 'gender',
    text: 'Your gender:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  gender_slider = new visual.Slider({
    win: psychoJS.window, name: 'gender_slider',
    startValue: undefined,
    size: [0.4, 0.03], pos: [0.3, 0.1], ori: 0.0, units: 'height',
    labels: ["female", "male", "non-binary", "other"], fontSize: 0.03, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  native_lang = new visual.TextStim({
    win: psychoJS.window,
    name: 'native_lang',
    text: 'Native language(s) (spoken at home\nwhen you were a child):',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.05)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  lang_enter = new visual.TextBox({
    win: psychoJS.window,
    name: 'lang_enter',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.05)], letterHeight: 0.03,
    size: [0.6, 0.04],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -7.0 
  });
  
  finish_comment = new visual.TextBox({
    win: psychoJS.window,
    name: 'finish_comment',
    text: 'After clicking on "Back to Prolific", you will have to click "ok" one more time in order to be redirected to Prolific.',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.025,
    size: [1.0, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  continue4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue4',
    text: 'Back to Prolific',
    font: 'Open Sans',
    pos: [0, (- 0.4)], letterHeight: 0.03,
    size: [0.35, 0.04],  units: undefined, 
    color: [(- 1.0), 0.0039, (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), 0.0039, (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(logo1);
    instructionsComponents.push(text_instr);
    instructionsComponents.push(introduction);
    instructionsComponents.push(introduction_2);
    instructionsComponents.push(introduction_3);
    instructionsComponents.push(continue1);
    instructionsComponents.push(mouse);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo1* updates
    if (t >= 0.0 && logo1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo1.tStart = t;  // (not accounting for frame time here)
      logo1.frameNStart = frameN;  // exact frame index
      
      logo1.setAutoDraw(true);
    }

    
    // *text_instr* updates
    if (t >= 0.0 && text_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr.tStart = t;  // (not accounting for frame time here)
      text_instr.frameNStart = frameN;  // exact frame index
      
      text_instr.setAutoDraw(true);
    }

    
    // *introduction* updates
    if (t >= 0.0 && introduction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction.tStart = t;  // (not accounting for frame time here)
      introduction.frameNStart = frameN;  // exact frame index
      
      introduction.setAutoDraw(true);
    }

    
    // *introduction_2* updates
    if (t >= 0.0 && introduction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_2.tStart = t;  // (not accounting for frame time here)
      introduction_2.frameNStart = frameN;  // exact frame index
      
      introduction_2.setAutoDraw(true);
    }

    
    // *introduction_3* updates
    if (t >= 0.0 && introduction_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_3.tStart = t;  // (not accounting for frame time here)
      introduction_3.frameNStart = frameN;  // exact frame index
      
      introduction_3.setAutoDraw(true);
    }

    
    // *continue1* updates
    if (t >= 0.0 && continue1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue1.tStart = t;  // (not accounting for frame time here)
      continue1.frameNStart = frameN;  // exact frame index
      
      continue1.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue1]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_consent
    mouse_consent.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(logo2);
    consentComponents.push(Heading);
    consentComponents.push(consent_text);
    consentComponents.push(continue2);
    consentComponents.push(mouse_consent);
    
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo2* updates
    if (t >= 0.0 && logo2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo2.tStart = t;  // (not accounting for frame time here)
      logo2.frameNStart = frameN;  // exact frame index
      
      logo2.setAutoDraw(true);
    }

    
    // *Heading* updates
    if (t >= 0.0 && Heading.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Heading.tStart = t;  // (not accounting for frame time here)
      Heading.frameNStart = frameN;  // exact frame index
      
      Heading.setAutoDraw(true);
    }

    
    // *consent_text* updates
    if (t >= 0.0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }

    
    // *continue2* updates
    if (t >= 0.0 && continue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue2.tStart = t;  // (not accounting for frame time here)
      continue2.frameNStart = frameN;  // exact frame index
      
      continue2.setAutoDraw(true);
    }

    // *mouse_consent* updates
    if (t >= 0.0 && mouse_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_consent.tStart = t;  // (not accounting for frame time here)
      mouse_consent.frameNStart = frameN;  // exact frame index
      
      mouse_consent.status = PsychoJS.Status.STARTED;
      mouse_consent.mouseClock.reset();
      prevButtonState = mouse_consent.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_consent.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_consent.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue2]) {
            if (obj.contains(mouse_consent)) {
              gotValidClick = true;
              mouse_consent.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    consentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block1Components;
function block1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block1' ---
    t = 0;
    block1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_9
    mouse_9.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    block1Components = [];
    block1Components.push(logo3);
    block1Components.push(text_5);
    block1Components.push(intro_block2_2);
    block1Components.push(continue6_2);
    block1Components.push(mouse_9);
    
    block1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block1' ---
    // get current time
    t = block1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo3* updates
    if (t >= 0.0 && logo3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo3.tStart = t;  // (not accounting for frame time here)
      logo3.frameNStart = frameN;  // exact frame index
      
      logo3.setAutoDraw(true);
    }

    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *intro_block2_2* updates
    if (t >= 0.0 && intro_block2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_block2_2.tStart = t;  // (not accounting for frame time here)
      intro_block2_2.frameNStart = frameN;  // exact frame index
      
      intro_block2_2.setAutoDraw(true);
    }

    
    // *continue6_2* updates
    if (t >= 0.0 && continue6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue6_2.tStart = t;  // (not accounting for frame time here)
      continue6_2.frameNStart = frameN;  // exact frame index
      
      continue6_2.setAutoDraw(true);
    }

    // *mouse_9* updates
    if (t >= 0.0 && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue6_2]) {
            if (obj.contains(mouse_9)) {
              gotValidClick = true;
              mouse_9.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block1' ---
    block1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions2Components;
function instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions2' ---
    t = 0;
    instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions2Components = [];
    instructions2Components.push(logo1_3);
    instructions2Components.push(introduction_5);
    instructions2Components.push(continue1_3);
    instructions2Components.push(mouse_6);
    
    instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions2' ---
    // get current time
    t = instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo1_3* updates
    if (t >= 0.0 && logo1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo1_3.tStart = t;  // (not accounting for frame time here)
      logo1_3.frameNStart = frameN;  // exact frame index
      
      logo1_3.setAutoDraw(true);
    }

    
    // *introduction_5* updates
    if (t >= 0.0 && introduction_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_5.tStart = t;  // (not accounting for frame time here)
      introduction_5.frameNStart = frameN;  // exact frame index
      
      introduction_5.setAutoDraw(true);
    }

    
    // *continue1_3* updates
    if (t >= 0.0 && continue1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue1_3.tStart = t;  // (not accounting for frame time here)
      continue1_3.frameNStart = frameN;  // exact frame index
      
      continue1_3.setAutoDraw(true);
    }

    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue1_3]) {
            if (obj.contains(mouse_6)) {
              gotValidClick = true;
              mouse_6.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions2' ---
    instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_block1;
function trials_block1LoopBegin(trials_block1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_block1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'input1.xlsx',
      seed: undefined, name: 'trials_block1'
    });
    psychoJS.experiment.addLoop(trials_block1); // add the loop to the experiment
    currentLoop = trials_block1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_block1.forEach(function() {
      snapshot = trials_block1.getSnapshot();
    
      trials_block1LoopScheduler.add(importConditions(snapshot));
      trials_block1LoopScheduler.add(trial_expectednessRoutineBegin(snapshot));
      trials_block1LoopScheduler.add(trial_expectednessRoutineEachFrame());
      trials_block1LoopScheduler.add(trial_expectednessRoutineEnd(snapshot));
      trials_block1LoopScheduler.add(trials_block1LoopEndIteration(trials_block1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_block1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_block1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_block1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_block2;
function trials_block2LoopBegin(trials_block2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_block2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'input2.xlsx',
      seed: undefined, name: 'trials_block2'
    });
    psychoJS.experiment.addLoop(trials_block2); // add the loop to the experiment
    currentLoop = trials_block2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_block2.forEach(function() {
      snapshot = trials_block2.getSnapshot();
    
      trials_block2LoopScheduler.add(importConditions(snapshot));
      trials_block2LoopScheduler.add(trial_certaintyRoutineBegin(snapshot));
      trials_block2LoopScheduler.add(trial_certaintyRoutineEachFrame());
      trials_block2LoopScheduler.add(trial_certaintyRoutineEnd(snapshot));
      trials_block2LoopScheduler.add(trials_block2LoopEndIteration(trials_block2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_block2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_block2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_block2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_expectednessComponents;
function trial_expectednessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_expectedness' ---
    t = 0;
    trial_expectednessClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.setText(context);
    proposal.setText(Q_cc);
    exp.reset()
    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trial_expectednessComponents = [];
    trial_expectednessComponents.push(read_context_2);
    trial_expectednessComponents.push(textbox);
    trial_expectednessComponents.push(text2);
    trial_expectednessComponents.push(proposal);
    trial_expectednessComponents.push(exp);
    trial_expectednessComponents.push(continue3);
    trial_expectednessComponents.push(mouse_2);
    
    trial_expectednessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_expectednessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_expectedness' ---
    // get current time
    t = trial_expectednessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *read_context_2* updates
    if (t >= 0.0 && read_context_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      read_context_2.tStart = t;  // (not accounting for frame time here)
      read_context_2.frameNStart = frameN;  // exact frame index
      
      read_context_2.setAutoDraw(true);
    }

    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    
    // *text2* updates
    if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }

    
    // *proposal* updates
    if (t >= 0.0 && proposal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proposal.tStart = t;  // (not accounting for frame time here)
      proposal.frameNStart = frameN;  // exact frame index
      
      proposal.setAutoDraw(true);
    }

    
    // *exp* updates
    if (t >= 0.0 && exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp.tStart = t;  // (not accounting for frame time here)
      exp.frameNStart = frameN;  // exact frame index
      
      exp.setAutoDraw(true);
    }

    
    // *continue3* updates
    if (t >= 0.0 && continue3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue3.tStart = t;  // (not accounting for frame time here)
      continue3.frameNStart = frameN;  // exact frame index
      
      continue3.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue3]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_expectednessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_expectednessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_expectedness' ---
    trial_expectednessComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp.response', exp.getRating());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trial_expectedness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block2Components;
function block2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block2' ---
    t = 0;
    block2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    block2Components = [];
    block2Components.push(logo5);
    block2Components.push(text_3);
    block2Components.push(intro_block2);
    block2Components.push(continue6);
    block2Components.push(mouse_5);
    
    block2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block2' ---
    // get current time
    t = block2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo5* updates
    if (t >= 0.0 && logo5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo5.tStart = t;  // (not accounting for frame time here)
      logo5.frameNStart = frameN;  // exact frame index
      
      logo5.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *intro_block2* updates
    if (t >= 0.0 && intro_block2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_block2.tStart = t;  // (not accounting for frame time here)
      intro_block2.frameNStart = frameN;  // exact frame index
      
      intro_block2.setAutoDraw(true);
    }

    
    // *continue6* updates
    if (t >= 0.0 && continue6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue6.tStart = t;  // (not accounting for frame time here)
      continue6.frameNStart = frameN;  // exact frame index
      
      continue6.setAutoDraw(true);
    }

    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue6]) {
            if (obj.contains(mouse_5)) {
              gotValidClick = true;
              mouse_5.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block2' ---
    block2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "block2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_certaintyComponents;
function trial_certaintyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_certainty' ---
    t = 0;
    trial_certaintyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_4.setText(context);
    task1.setText(certainty);
    certainty_rate.reset()
    // setup some python lists for storing info about the mouse_7
    mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trial_certaintyComponents = [];
    trial_certaintyComponents.push(read_context);
    trial_certaintyComponents.push(textbox_4);
    trial_certaintyComponents.push(task1);
    trial_certaintyComponents.push(certainty_rate);
    trial_certaintyComponents.push(continue3_4);
    trial_certaintyComponents.push(mouse_7);
    
    trial_certaintyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_certaintyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_certainty' ---
    // get current time
    t = trial_certaintyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *read_context* updates
    if (t >= 0.0 && read_context.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      read_context.tStart = t;  // (not accounting for frame time here)
      read_context.frameNStart = frameN;  // exact frame index
      
      read_context.setAutoDraw(true);
    }

    
    // *textbox_4* updates
    if (t >= 0.0 && textbox_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_4.tStart = t;  // (not accounting for frame time here)
      textbox_4.frameNStart = frameN;  // exact frame index
      
      textbox_4.setAutoDraw(true);
    }

    
    // *task1* updates
    if (t >= 0.0 && task1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task1.tStart = t;  // (not accounting for frame time here)
      task1.frameNStart = frameN;  // exact frame index
      
      task1.setAutoDraw(true);
    }

    
    // *certainty_rate* updates
    if (t >= 0.0 && certainty_rate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      certainty_rate.tStart = t;  // (not accounting for frame time here)
      certainty_rate.frameNStart = frameN;  // exact frame index
      
      certainty_rate.setAutoDraw(true);
    }

    
    // *continue3_4* updates
    if (t >= 0.0 && continue3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue3_4.tStart = t;  // (not accounting for frame time here)
      continue3_4.frameNStart = frameN;  // exact frame index
      
      continue3_4.setAutoDraw(true);
    }

    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue3_4]) {
            if (obj.contains(mouse_7)) {
              gotValidClick = true;
              mouse_7.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_certaintyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_certaintyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_certainty' ---
    trial_certaintyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('certainty_rate.response', certainty_rate.getRating());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trial_certainty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block3Components;
function block3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block3' ---
    t = 0;
    block3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_8
    mouse_8.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    block3Components = [];
    block3Components.push(logo5_2);
    block3Components.push(text);
    block3Components.push(intro_block2_3);
    block3Components.push(continue6_3);
    block3Components.push(mouse_8);
    
    block3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block3' ---
    // get current time
    t = block3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo5_2* updates
    if (t >= 0.0 && logo5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo5_2.tStart = t;  // (not accounting for frame time here)
      logo5_2.frameNStart = frameN;  // exact frame index
      
      logo5_2.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *intro_block2_3* updates
    if (t >= 0.0 && intro_block2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_block2_3.tStart = t;  // (not accounting for frame time here)
      intro_block2_3.frameNStart = frameN;  // exact frame index
      
      intro_block2_3.setAutoDraw(true);
    }

    
    // *continue6_3* updates
    if (t >= 0.0 && continue6_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue6_3.tStart = t;  // (not accounting for frame time here)
      continue6_3.frameNStart = frameN;  // exact frame index
      
      continue6_3.setAutoDraw(true);
    }

    // *mouse_8* updates
    if (t >= 0.0 && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue6_3]) {
            if (obj.contains(mouse_8)) {
              gotValidClick = true;
              mouse_8.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block3' ---
    block3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "block3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var explanationComponents;
function explanationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'explanation' ---
    t = 0;
    explanationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prev_trial.setText("It's so curious! Nobody knows where Sue's boyfriend Tom is every Monday. Just now I saw Sue yelling at Tom, so she seems to have figured it out and I also have an idea now.");
    explanation_enter.setText('');
    explanation_enter.refresh();
    // setup some python lists for storing info about the mouse_consent_2
    mouse_consent_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    explanationComponents = [];
    explanationComponents.push(heading);
    explanationComponents.push(prev_trial);
    explanationComponents.push(Heading_2);
    explanationComponents.push(explanation_enter);
    explanationComponents.push(continue2_2);
    explanationComponents.push(mouse_consent_2);
    
    explanationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function explanationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'explanation' ---
    // get current time
    t = explanationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *heading* updates
    if (t >= 0.0 && heading.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      heading.tStart = t;  // (not accounting for frame time here)
      heading.frameNStart = frameN;  // exact frame index
      
      heading.setAutoDraw(true);
    }

    
    // *prev_trial* updates
    if (t >= 0.0 && prev_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_trial.tStart = t;  // (not accounting for frame time here)
      prev_trial.frameNStart = frameN;  // exact frame index
      
      prev_trial.setAutoDraw(true);
    }

    
    // *Heading_2* updates
    if (t >= 0.0 && Heading_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Heading_2.tStart = t;  // (not accounting for frame time here)
      Heading_2.frameNStart = frameN;  // exact frame index
      
      Heading_2.setAutoDraw(true);
    }

    
    // *explanation_enter* updates
    if (t >= 0 && explanation_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      explanation_enter.tStart = t;  // (not accounting for frame time here)
      explanation_enter.frameNStart = frameN;  // exact frame index
      
      explanation_enter.setAutoDraw(true);
    }

    
    // *continue2_2* updates
    if (t >= 0.0 && continue2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue2_2.tStart = t;  // (not accounting for frame time here)
      continue2_2.frameNStart = frameN;  // exact frame index
      
      continue2_2.setAutoDraw(true);
    }

    // *mouse_consent_2* updates
    if (t >= 0.0 && mouse_consent_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_consent_2.tStart = t;  // (not accounting for frame time here)
      mouse_consent_2.frameNStart = frameN;  // exact frame index
      
      mouse_consent_2.status = PsychoJS.Status.STARTED;
      mouse_consent_2.mouseClock.reset();
      prevButtonState = mouse_consent_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_consent_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_consent_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue2_2]) {
            if (obj.contains(mouse_consent_2)) {
              gotValidClick = true;
              mouse_consent_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    explanationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function explanationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'explanation' ---
    explanationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('explanation_enter.text',explanation_enter.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "explanation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics' ---
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    age_enter.setText('');
    age_enter.refresh();
    gender_slider.reset()
    lang_enter.setText('');
    lang_enter.refresh();
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(logo7);
    demographicsComponents.push(Heading_4);
    demographicsComponents.push(age);
    demographicsComponents.push(age_enter);
    demographicsComponents.push(gender);
    demographicsComponents.push(gender_slider);
    demographicsComponents.push(native_lang);
    demographicsComponents.push(lang_enter);
    demographicsComponents.push(finish_comment);
    demographicsComponents.push(continue4);
    demographicsComponents.push(mouse_3);
    
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function demographicsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics' ---
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo7* updates
    if (t >= 0.0 && logo7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo7.tStart = t;  // (not accounting for frame time here)
      logo7.frameNStart = frameN;  // exact frame index
      
      logo7.setAutoDraw(true);
    }

    
    // *Heading_4* updates
    if (t >= 0.0 && Heading_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Heading_4.tStart = t;  // (not accounting for frame time here)
      Heading_4.frameNStart = frameN;  // exact frame index
      
      Heading_4.setAutoDraw(true);
    }

    
    // *age* updates
    if (t >= 0.0 && age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age.tStart = t;  // (not accounting for frame time here)
      age.frameNStart = frameN;  // exact frame index
      
      age.setAutoDraw(true);
    }

    
    // *age_enter* updates
    if (t >= 0 && age_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_enter.tStart = t;  // (not accounting for frame time here)
      age_enter.frameNStart = frameN;  // exact frame index
      
      age_enter.setAutoDraw(true);
    }

    
    // *gender* updates
    if (t >= 0.0 && gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender.tStart = t;  // (not accounting for frame time here)
      gender.frameNStart = frameN;  // exact frame index
      
      gender.setAutoDraw(true);
    }

    
    // *gender_slider* updates
    if (t >= 0.0 && gender_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_slider.tStart = t;  // (not accounting for frame time here)
      gender_slider.frameNStart = frameN;  // exact frame index
      
      gender_slider.setAutoDraw(true);
    }

    
    // *native_lang* updates
    if (t >= 0.0 && native_lang.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      native_lang.tStart = t;  // (not accounting for frame time here)
      native_lang.frameNStart = frameN;  // exact frame index
      
      native_lang.setAutoDraw(true);
    }

    
    // *lang_enter* updates
    if (t >= 0 && lang_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lang_enter.tStart = t;  // (not accounting for frame time here)
      lang_enter.frameNStart = frameN;  // exact frame index
      
      lang_enter.setAutoDraw(true);
    }

    
    // *finish_comment* updates
    if (t >= 0.0 && finish_comment.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_comment.tStart = t;  // (not accounting for frame time here)
      finish_comment.frameNStart = frameN;  // exact frame index
      
      finish_comment.setAutoDraw(true);
    }

    
    // *continue4* updates
    if (t >= 0.0 && continue4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue4.tStart = t;  // (not accounting for frame time here)
      continue4.frameNStart = frameN;  // exact frame index
      
      continue4.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue4]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics' ---
    demographicsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('age_enter.text',age_enter.text)
    psychoJS.experiment.addData('gender_slider.response', gender_slider.getRating());
    psychoJS.experiment.addData('lang_enter.text',lang_enter.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
