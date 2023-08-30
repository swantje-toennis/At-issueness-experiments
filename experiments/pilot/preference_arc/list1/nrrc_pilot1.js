/******************** 
 * Nrrc_Pilot1 Test *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'nrrc_pilot1';  // from the Builder filename that created this script
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
flowScheduler.add(practice_trial1RoutineBegin());
flowScheduler.add(practice_trial1RoutineEachFrame());
flowScheduler.add(practice_trial1RoutineEnd());
const trials_block1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_block1LoopBegin(trials_block1LoopScheduler));
flowScheduler.add(trials_block1LoopScheduler);
flowScheduler.add(trials_block1LoopEnd);
flowScheduler.add(block2RoutineBegin());
flowScheduler.add(block2RoutineEachFrame());
flowScheduler.add(block2RoutineEnd());
flowScheduler.add(practice_trial2RoutineBegin());
flowScheduler.add(practice_trial2RoutineEachFrame());
flowScheduler.add(practice_trial2RoutineEnd());
const trials_block2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_block2LoopBegin(trials_block2LoopScheduler));
flowScheduler.add(trials_block2LoopScheduler);
flowScheduler.add(trials_block2LoopEnd);
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
    {'name': 'input1.xlsx', 'path': 'input1.xlsx'},
    {'name': 'input2.xlsx', 'path': 'input2.xlsx'}
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
var logo1_2;
var text_instr_2;
var introduction_4;
var introduction_5;
var introduction_6;
var continue1_2;
var mouse_6;
var consentClock;
var logo2_2;
var Heading_2;
var consent_text_2;
var continue2_2;
var mouse_consent_2;
var block1Clock;
var logo3_2;
var text;
var intro_block2_3;
var continue6_3;
var mouse;
var practice_trial1Clock;
var logo4;
var Heading_3;
var text2_2;
var read_context_3;
var textbox_2;
var proposal1_3;
var exp_rate1_2;
var proposal2_2;
var exp_rate2_2;
var continue3_2;
var mouse_4;
var trial_expClock;
var master_positions;
var read_context_2;
var textbox;
var text2;
var proposal1;
var exp1;
var proposal2;
var exp2;
var continue3;
var mouse_2;
var block2Clock;
var logo5_2;
var text_4;
var intro_block2_2;
var continue6_2;
var mouse_9;
var practice_trial2Clock;
var read_context_4;
var textbox_4;
var text2_4;
var A_2;
var cont_mc_2;
var B_2;
var cont_rc_2;
var pref_2;
var continue3_5;
var mouse_7;
var trial_preferenceClock;
var master_positions2;
var read_context;
var textbox_3;
var text2_3;
var A;
var cont_mc;
var B;
var cont_rc;
var pref;
var continue3_3;
var mouse_5;
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
  logo1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo1_2', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_instr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_2',
    text: 'Welcome to our study!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  introduction_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction_4',
    text: 'The goal of this study is to investigate how humans understand English utterances. The study consists of two parts. In both parts, you will read one statement by a speaker. Here is an example:',
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
  
  introduction_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction_5',
    text: 'Phil said: I went shopping last Tuesday.',
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
  
  introduction_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introduction_6',
    text: 'In part 1, we are interested in understanding what the speaker might say next (e.g., Phil might talk about the things he bought). We will make 2 proposals and ask you to rate how expected they are. \n\nIn part 2, you will see the statement again, but we will show 2 sentences the speaker could say next. Phil, for instance, could say next: "I bought a blue fake leather jacket." We will ask you which of the 2 sentences you prefer as a continuation of Phil\'s statement.\n\nEach part will start with one practice trial to get you acquainted with the procedure. At the end of the study, we will ask you for your demographic information. Please pay close attention during your participation! The study should take approximately 2 minutes. ',
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
  
  continue1_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue1_2',
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
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  logo2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo2_2', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Heading_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Heading_2',
    text: 'CONSENT',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consent_text_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'consent_text_2',
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
  
  continue2_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue2_2',
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
  
  mouse_consent_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_consent_2.mouseClock = new util.Clock();
  // Initialize components for Routine "block1"
  block1Clock = new util.Clock();
  logo3_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo3_2', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You are now entering part 1 of the study!\n',
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
    text: 'Remember: In this part you will read a statement by a speaker and will indicate what you expect her/him to say  in the next sentence.\nClick "Continue" to go through a practice trial.',
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
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "practice_trial1"
  practice_trial1Clock = new util.Clock();
  logo4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo4', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Heading_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Heading_3',
    text: 'PRACTICE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2_2',
    text: 'What do you expect that the next sentence will be about? Rate the following proposals by adjusting the sliders.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  read_context_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'read_context_3',
    text: 'Read the statement in the box.',
    font: 'Open Sans',
    pos: [0, 0.32], letterHeight: 0.03,
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
    depth: -3.0 
  });
  
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: 'Julia said: Kim was at the party yesterday.',
    font: 'Open Sans',
    pos: [0, 0.17], letterHeight: 0.03,
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
    depth: -4.0 
  });
  
  proposal1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'proposal1_3',
    text: 'about when Kim left the party',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.08)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  exp_rate1_2 = new visual.Slider({
    win: psychoJS.window, name: 'exp_rate1_2',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.14)], ori: 0.0, units: 'height',
    labels: ["very unexpected", "very expected"], fontSize: 0.025, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  proposal2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'proposal2_2',
    text: 'about when the party started',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  exp_rate2_2 = new visual.Slider({
    win: psychoJS.window, name: 'exp_rate2_2',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.31)], ori: 0.0, units: 'height',
    labels: ["very unexpected", "very expected"], fontSize: 0.025, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  continue3_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue3_2',
    text: 'Continue to part 1 of the study',
    font: 'Open Sans',
    pos: [0, (- 0.42)], letterHeight: 0.03,
    size: [0.47, 0.035],  units: undefined, 
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
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_exp"
  trial_expClock = new util.Clock();
  // Run 'Begin Experiment' code from code_randomize
  master_positions = [].concat(Array(1).fill([0, (- 0.08)]), Array(1).fill([0, (- 0.25)]));
  
  read_context_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'read_context_2',
    text: 'Read the statement in the box. ',
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
    depth: -1.0 
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
    depth: -2.0 
  });
  
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'What do you expect that the next sentence will be about? Rate the following proposals by adjusting the sliders.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  proposal1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'proposal1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  exp1 = new visual.Slider({
    win: psychoJS.window, name: 'exp1',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.14)], ori: 0.0, units: 'height',
    labels: ["very unexpected", "very expected"], fontSize: 0.025, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  proposal2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'proposal2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  exp2 = new visual.Slider({
    win: psychoJS.window, name: 'exp2',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.31)], ori: 0.0, units: 'height',
    labels: ["very unexpected", "very expected"], fontSize: 0.025, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
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
    depth: -8.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "block2"
  block2Clock = new util.Clock();
  logo5_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo5_2', units : undefined, 
    image : 'logo.png', mask : undefined,
    ori : 0.0, pos : [0.5, 0.4], size : [0.4, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You are now entering part 2 of the study!\n',
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
    text: 'Remember: In this part you will read the same statement from the previous part again. We will present two continuations for the statement (marked with A and B), and we will ask you to tell us which one you prefer and how strongly.\nClick "Continue" to go through a practice trial.',
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
  // Initialize components for Routine "practice_trial2"
  practice_trial2Clock = new util.Clock();
  read_context_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'read_context_4',
    text: 'Read the statement in the box. ',
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
    text: 'George said: Before the movie started Mary kissed Peter.',
    font: 'Open Sans',
    pos: [0, 0.25], letterHeight: 0.03,
    size: [1, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text2_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2_4',
    text: "Which out of sentence A and B do you prefer as the next sentence of George's statement?\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  A_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'A_2',
    text: 'A',
    font: 'Open Sans',
    pos: [(- 0.5), 0], letterHeight: 0.03,
    size: [0.05, 0.05],  units: undefined, 
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
    depth: -3.0 
  });
  
  cont_mc_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'cont_mc_2',
    text: 'Afterwards Mary kissed Peter.',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [0.9, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [0.0, 0.0, 0.0],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  B_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'B_2',
    text: 'B',
    font: 'Open Sans',
    pos: [(- 0.5), (- 0.1)], letterHeight: 0.03,
    size: [0.05, 0.05],  units: undefined, 
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
    depth: -5.0 
  });
  
  cont_rc_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'cont_rc_2',
    text: 'Afterwards Peter kissed Mary.',
    font: 'Open Sans',
    pos: [0, (- 0.1)], letterHeight: 0.03,
    size: [0.9, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [0.0, 0.0, 0.0],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  pref_2 = new visual.Slider({
    win: psychoJS.window, name: 'pref_2',
    startValue: 0.5,
    size: [1.0, 0.03], pos: [0, (- 0.25)], ori: 0.0, units: 'height',
    labels: ["A much better", "both equally good", "B much better"], fontSize: 0.025, ticks: [0, 0.5, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  continue3_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue3_5',
    text: 'Continue to part 2 of the study',
    font: 'Open Sans',
    pos: [0, (- 0.42)], letterHeight: 0.03,
    size: [0.47, 0.035],  units: undefined, 
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
    depth: -8.0 
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_preference"
  trial_preferenceClock = new util.Clock();
  // Run 'Begin Experiment' code from code_randomize_2
  master_positions2 = [].concat(Array(1).fill([0, 0]), Array(1).fill([0, (- 0.1)]));
  
  read_context = new visual.TextBox({
    win: psychoJS.window,
    name: 'read_context',
    text: 'Read the statement in the box. ',
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
    depth: -1.0 
  });
  
  textbox_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_3',
    text: '',
    font: 'Open Sans',
    pos: [0, 0.25], letterHeight: 0.03,
    size: [1, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.02,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2_3',
    text: "Which out of sentence A and B do you prefer as the next sentence of Emma's statement?\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  A = new visual.TextBox({
    win: psychoJS.window,
    name: 'A',
    text: 'A',
    font: 'Open Sans',
    pos: [(- 0.5), 0], letterHeight: 0.03,
    size: [0.05, 0.05],  units: undefined, 
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
    depth: -4.0 
  });
  
  cont_mc = new visual.TextBox({
    win: psychoJS.window,
    name: 'cont_mc',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [0.9, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [0.0, 0.0, 0.0],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  B = new visual.TextBox({
    win: psychoJS.window,
    name: 'B',
    text: 'B',
    font: 'Open Sans',
    pos: [(- 0.5), (- 0.1)], letterHeight: 0.03,
    size: [0.05, 0.05],  units: undefined, 
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
    depth: -6.0 
  });
  
  cont_rc = new visual.TextBox({
    win: psychoJS.window,
    name: 'cont_rc',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [0.9, 0.05],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0039, 0.0039, 0.0039], borderColor: [0.0, 0.0, 0.0],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  pref = new visual.Slider({
    win: psychoJS.window, name: 'pref',
    startValue: 0,
    size: [1.0, 0.03], pos: [0, (- 0.25)], ori: 0.0, units: 'height',
    labels: ["A much better", "both equally good", "B much better"], fontSize: 0.025, ticks: [(- 1), 0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), (- 1.0), 0.0902]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  continue3_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue3_3',
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
    depth: -9.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
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
    pos: [0, (- 0.3)], letterHeight: 0.03,
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
    // setup some python lists for storing info about the mouse_6
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(logo1_2);
    instructionsComponents.push(text_instr_2);
    instructionsComponents.push(introduction_4);
    instructionsComponents.push(introduction_5);
    instructionsComponents.push(introduction_6);
    instructionsComponents.push(continue1_2);
    instructionsComponents.push(mouse_6);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *logo1_2* updates
    if (t >= 0.0 && logo1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo1_2.tStart = t;  // (not accounting for frame time here)
      logo1_2.frameNStart = frameN;  // exact frame index
      
      logo1_2.setAutoDraw(true);
    }

    
    // *text_instr_2* updates
    if (t >= 0.0 && text_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_2.tStart = t;  // (not accounting for frame time here)
      text_instr_2.frameNStart = frameN;  // exact frame index
      
      text_instr_2.setAutoDraw(true);
    }

    
    // *introduction_4* updates
    if (t >= 0.0 && introduction_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_4.tStart = t;  // (not accounting for frame time here)
      introduction_4.frameNStart = frameN;  // exact frame index
      
      introduction_4.setAutoDraw(true);
    }

    
    // *introduction_5* updates
    if (t >= 0.0 && introduction_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_5.tStart = t;  // (not accounting for frame time here)
      introduction_5.frameNStart = frameN;  // exact frame index
      
      introduction_5.setAutoDraw(true);
    }

    
    // *introduction_6* updates
    if (t >= 0.0 && introduction_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_6.tStart = t;  // (not accounting for frame time here)
      introduction_6.frameNStart = frameN;  // exact frame index
      
      introduction_6.setAutoDraw(true);
    }

    
    // *continue1_2* updates
    if (t >= 0.0 && continue1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue1_2.tStart = t;  // (not accounting for frame time here)
      continue1_2.frameNStart = frameN;  // exact frame index
      
      continue1_2.setAutoDraw(true);
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
          for (const obj of [continue1_2]) {
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    // setup some python lists for storing info about the mouse_consent_2
    mouse_consent_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(logo2_2);
    consentComponents.push(Heading_2);
    consentComponents.push(consent_text_2);
    consentComponents.push(continue2_2);
    consentComponents.push(mouse_consent_2);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *logo2_2* updates
    if (t >= 0.0 && logo2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo2_2.tStart = t;  // (not accounting for frame time here)
      logo2_2.frameNStart = frameN;  // exact frame index
      
      logo2_2.setAutoDraw(true);
    }

    
    // *Heading_2* updates
    if (t >= 0.0 && Heading_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Heading_2.tStart = t;  // (not accounting for frame time here)
      Heading_2.frameNStart = frameN;  // exact frame index
      
      Heading_2.setAutoDraw(true);
    }

    
    // *consent_text_2* updates
    if (t >= 0.0 && consent_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text_2.tStart = t;  // (not accounting for frame time here)
      consent_text_2.frameNStart = frameN;  // exact frame index
      
      consent_text_2.setAutoDraw(true);
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    block1Components = [];
    block1Components.push(logo3_2);
    block1Components.push(text);
    block1Components.push(intro_block2_3);
    block1Components.push(continue6_3);
    block1Components.push(mouse);
    
    for (const thisComponent of block1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *logo3_2* updates
    if (t >= 0.0 && logo3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo3_2.tStart = t;  // (not accounting for frame time here)
      logo3_2.frameNStart = frameN;  // exact frame index
      
      logo3_2.setAutoDraw(true);
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
          for (const obj of [continue6_3]) {
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of block1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var practice_trial1Components;
function practice_trial1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial1' ---
    t = 0;
    practice_trial1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp_rate1_2.reset()
    exp_rate2_2.reset()
    // setup some python lists for storing info about the mouse_4
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practice_trial1Components = [];
    practice_trial1Components.push(logo4);
    practice_trial1Components.push(Heading_3);
    practice_trial1Components.push(text2_2);
    practice_trial1Components.push(read_context_3);
    practice_trial1Components.push(textbox_2);
    practice_trial1Components.push(proposal1_3);
    practice_trial1Components.push(exp_rate1_2);
    practice_trial1Components.push(proposal2_2);
    practice_trial1Components.push(exp_rate2_2);
    practice_trial1Components.push(continue3_2);
    practice_trial1Components.push(mouse_4);
    
    for (const thisComponent of practice_trial1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_trial1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial1' ---
    // get current time
    t = practice_trial1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *logo4* updates
    if (t >= 0.0 && logo4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo4.tStart = t;  // (not accounting for frame time here)
      logo4.frameNStart = frameN;  // exact frame index
      
      logo4.setAutoDraw(true);
    }

    
    // *Heading_3* updates
    if (t >= 0.0 && Heading_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Heading_3.tStart = t;  // (not accounting for frame time here)
      Heading_3.frameNStart = frameN;  // exact frame index
      
      Heading_3.setAutoDraw(true);
    }

    
    // *text2_2* updates
    if (t >= 0.0 && text2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2_2.tStart = t;  // (not accounting for frame time here)
      text2_2.frameNStart = frameN;  // exact frame index
      
      text2_2.setAutoDraw(true);
    }

    
    // *read_context_3* updates
    if (t >= 0.0 && read_context_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      read_context_3.tStart = t;  // (not accounting for frame time here)
      read_context_3.frameNStart = frameN;  // exact frame index
      
      read_context_3.setAutoDraw(true);
    }

    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }

    
    // *proposal1_3* updates
    if (t >= 0.0 && proposal1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proposal1_3.tStart = t;  // (not accounting for frame time here)
      proposal1_3.frameNStart = frameN;  // exact frame index
      
      proposal1_3.setAutoDraw(true);
    }

    
    // *exp_rate1_2* updates
    if (t >= 0.0 && exp_rate1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_rate1_2.tStart = t;  // (not accounting for frame time here)
      exp_rate1_2.frameNStart = frameN;  // exact frame index
      
      exp_rate1_2.setAutoDraw(true);
    }

    
    // *proposal2_2* updates
    if (t >= 0.0 && proposal2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proposal2_2.tStart = t;  // (not accounting for frame time here)
      proposal2_2.frameNStart = frameN;  // exact frame index
      
      proposal2_2.setAutoDraw(true);
    }

    
    // *exp_rate2_2* updates
    if (t >= 0.0 && exp_rate2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_rate2_2.tStart = t;  // (not accounting for frame time here)
      exp_rate2_2.frameNStart = frameN;  // exact frame index
      
      exp_rate2_2.setAutoDraw(true);
    }

    
    // *continue3_2* updates
    if (t >= 0.0 && continue3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue3_2.tStart = t;  // (not accounting for frame time here)
      continue3_2.frameNStart = frameN;  // exact frame index
      
      continue3_2.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue3_2]) {
            if (obj.contains(mouse_4)) {
              gotValidClick = true;
              mouse_4.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_trial1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial1' ---
    for (const thisComponent of practice_trial1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "practice_trial1" was not non-slip safe, so reset the non-slip timer
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
    for (const thisTrials_block1 of trials_block1) {
      snapshot = trials_block1.getSnapshot();
      trials_block1LoopScheduler.add(importConditions(snapshot));
      trials_block1LoopScheduler.add(trial_expRoutineBegin(snapshot));
      trials_block1LoopScheduler.add(trial_expRoutineEachFrame());
      trials_block1LoopScheduler.add(trial_expRoutineEnd(snapshot));
      trials_block1LoopScheduler.add(trials_block1LoopEndIteration(trials_block1LoopScheduler, snapshot));
    }
    
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
    for (const thisTrials_block2 of trials_block2) {
      snapshot = trials_block2.getSnapshot();
      trials_block2LoopScheduler.add(importConditions(snapshot));
      trials_block2LoopScheduler.add(trial_preferenceRoutineBegin(snapshot));
      trials_block2LoopScheduler.add(trial_preferenceRoutineEachFrame());
      trials_block2LoopScheduler.add(trial_preferenceRoutineEnd(snapshot));
      trials_block2LoopScheduler.add(trials_block2LoopEndIteration(trials_block2LoopScheduler, snapshot));
    }
    
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


var positions;
var trial_expComponents;
function trial_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_exp' ---
    t = 0;
    trial_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_randomize
    positions = master_positions;
    util.shuffle(positions);
    textbox.setText(context);
    proposal1.setPos(positions[0]);
    proposal1.setText(Q_ai);
    exp1.reset()
    proposal2.setPos(positions[1]);
    proposal2.setText(Q_nai);
    exp2.reset()
    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trial_expComponents = [];
    trial_expComponents.push(read_context_2);
    trial_expComponents.push(textbox);
    trial_expComponents.push(text2);
    trial_expComponents.push(proposal1);
    trial_expComponents.push(exp1);
    trial_expComponents.push(proposal2);
    trial_expComponents.push(exp2);
    trial_expComponents.push(continue3);
    trial_expComponents.push(mouse_2);
    
    for (const thisComponent of trial_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_exp' ---
    // get current time
    t = trial_expClock.getTime();
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

    
    // *proposal1* updates
    if (t >= 0.0 && proposal1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proposal1.tStart = t;  // (not accounting for frame time here)
      proposal1.frameNStart = frameN;  // exact frame index
      
      proposal1.setAutoDraw(true);
    }

    
    // *exp1* updates
    if (t >= 0.0 && exp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1.tStart = t;  // (not accounting for frame time here)
      exp1.frameNStart = frameN;  // exact frame index
      
      exp1.setAutoDraw(true);
    }

    
    // *proposal2* updates
    if (t >= 0.0 && proposal2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proposal2.tStart = t;  // (not accounting for frame time here)
      proposal2.frameNStart = frameN;  // exact frame index
      
      proposal2.setAutoDraw(true);
    }

    
    // *exp2* updates
    if (t >= 0.0 && exp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2.tStart = t;  // (not accounting for frame time here)
      exp2.frameNStart = frameN;  // exact frame index
      
      exp2.setAutoDraw(true);
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_exp' ---
    for (const thisComponent of trial_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_randomize
    psychoJS.experiment.addData("position_prop", positions);
    
    psychoJS.experiment.addData('exp1.response', exp1.getRating());
    psychoJS.experiment.addData('exp2.response', exp2.getRating());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trial_exp" was not non-slip safe, so reset the non-slip timer
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
    // setup some python lists for storing info about the mouse_9
    mouse_9.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    block2Components = [];
    block2Components.push(logo5_2);
    block2Components.push(text_4);
    block2Components.push(intro_block2_2);
    block2Components.push(continue6_2);
    block2Components.push(mouse_9);
    
    for (const thisComponent of block2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *logo5_2* updates
    if (t >= 0.0 && logo5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo5_2.tStart = t;  // (not accounting for frame time here)
      logo5_2.frameNStart = frameN;  // exact frame index
      
      logo5_2.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of block2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var practice_trial2Components;
function practice_trial2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial2' ---
    t = 0;
    practice_trial2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    pref_2.reset()
    // setup some python lists for storing info about the mouse_7
    mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practice_trial2Components = [];
    practice_trial2Components.push(read_context_4);
    practice_trial2Components.push(textbox_4);
    practice_trial2Components.push(text2_4);
    practice_trial2Components.push(A_2);
    practice_trial2Components.push(cont_mc_2);
    practice_trial2Components.push(B_2);
    practice_trial2Components.push(cont_rc_2);
    practice_trial2Components.push(pref_2);
    practice_trial2Components.push(continue3_5);
    practice_trial2Components.push(mouse_7);
    
    for (const thisComponent of practice_trial2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_trial2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial2' ---
    // get current time
    t = practice_trial2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *read_context_4* updates
    if (t >= 0.0 && read_context_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      read_context_4.tStart = t;  // (not accounting for frame time here)
      read_context_4.frameNStart = frameN;  // exact frame index
      
      read_context_4.setAutoDraw(true);
    }

    
    // *textbox_4* updates
    if (t >= 0.0 && textbox_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_4.tStart = t;  // (not accounting for frame time here)
      textbox_4.frameNStart = frameN;  // exact frame index
      
      textbox_4.setAutoDraw(true);
    }

    
    // *text2_4* updates
    if (t >= 0.0 && text2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2_4.tStart = t;  // (not accounting for frame time here)
      text2_4.frameNStart = frameN;  // exact frame index
      
      text2_4.setAutoDraw(true);
    }

    
    // *A_2* updates
    if (t >= 0.0 && A_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A_2.tStart = t;  // (not accounting for frame time here)
      A_2.frameNStart = frameN;  // exact frame index
      
      A_2.setAutoDraw(true);
    }

    
    // *cont_mc_2* updates
    if (t >= 0.0 && cont_mc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_mc_2.tStart = t;  // (not accounting for frame time here)
      cont_mc_2.frameNStart = frameN;  // exact frame index
      
      cont_mc_2.setAutoDraw(true);
    }

    
    // *B_2* updates
    if (t >= 0.0 && B_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_2.tStart = t;  // (not accounting for frame time here)
      B_2.frameNStart = frameN;  // exact frame index
      
      B_2.setAutoDraw(true);
    }

    
    // *cont_rc_2* updates
    if (t >= 0.0 && cont_rc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_rc_2.tStart = t;  // (not accounting for frame time here)
      cont_rc_2.frameNStart = frameN;  // exact frame index
      
      cont_rc_2.setAutoDraw(true);
    }

    
    // *pref_2* updates
    if (t >= 0.0 && pref_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pref_2.tStart = t;  // (not accounting for frame time here)
      pref_2.frameNStart = frameN;  // exact frame index
      
      pref_2.setAutoDraw(true);
    }

    
    // *continue3_5* updates
    if (t >= 0.0 && continue3_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue3_5.tStart = t;  // (not accounting for frame time here)
      continue3_5.frameNStart = frameN;  // exact frame index
      
      continue3_5.setAutoDraw(true);
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
          for (const obj of [continue3_5]) {
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_trial2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial2' ---
    for (const thisComponent of practice_trial2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "practice_trial2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var positions2;
var trial_preferenceComponents;
function trial_preferenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_preference' ---
    t = 0;
    trial_preferenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_randomize_2
    positions2 = master_positions2;
    util.shuffle(positions2);
    textbox_3.setText(context);
    cont_mc.setPos(positions2[0]);
    cont_mc.setText(mc);
    cont_rc.setPos(positions2[1]);
    cont_rc.setText(rc);
    pref.reset()
    // setup some python lists for storing info about the mouse_5
    mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trial_preferenceComponents = [];
    trial_preferenceComponents.push(read_context);
    trial_preferenceComponents.push(textbox_3);
    trial_preferenceComponents.push(text2_3);
    trial_preferenceComponents.push(A);
    trial_preferenceComponents.push(cont_mc);
    trial_preferenceComponents.push(B);
    trial_preferenceComponents.push(cont_rc);
    trial_preferenceComponents.push(pref);
    trial_preferenceComponents.push(continue3_3);
    trial_preferenceComponents.push(mouse_5);
    
    for (const thisComponent of trial_preferenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_preferenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_preference' ---
    // get current time
    t = trial_preferenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *read_context* updates
    if (t >= 0.0 && read_context.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      read_context.tStart = t;  // (not accounting for frame time here)
      read_context.frameNStart = frameN;  // exact frame index
      
      read_context.setAutoDraw(true);
    }

    
    // *textbox_3* updates
    if (t >= 0.0 && textbox_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_3.tStart = t;  // (not accounting for frame time here)
      textbox_3.frameNStart = frameN;  // exact frame index
      
      textbox_3.setAutoDraw(true);
    }

    
    // *text2_3* updates
    if (t >= 0.0 && text2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2_3.tStart = t;  // (not accounting for frame time here)
      text2_3.frameNStart = frameN;  // exact frame index
      
      text2_3.setAutoDraw(true);
    }

    
    // *A* updates
    if (t >= 0.0 && A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A.tStart = t;  // (not accounting for frame time here)
      A.frameNStart = frameN;  // exact frame index
      
      A.setAutoDraw(true);
    }

    
    // *cont_mc* updates
    if (t >= 0.0 && cont_mc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_mc.tStart = t;  // (not accounting for frame time here)
      cont_mc.frameNStart = frameN;  // exact frame index
      
      cont_mc.setAutoDraw(true);
    }

    
    // *B* updates
    if (t >= 0.0 && B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B.tStart = t;  // (not accounting for frame time here)
      B.frameNStart = frameN;  // exact frame index
      
      B.setAutoDraw(true);
    }

    
    // *cont_rc* updates
    if (t >= 0.0 && cont_rc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_rc.tStart = t;  // (not accounting for frame time here)
      cont_rc.frameNStart = frameN;  // exact frame index
      
      cont_rc.setAutoDraw(true);
    }

    
    // *pref* updates
    if (t >= 0.0 && pref.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pref.tStart = t;  // (not accounting for frame time here)
      pref.frameNStart = frameN;  // exact frame index
      
      pref.setAutoDraw(true);
    }

    
    // *continue3_3* updates
    if (t >= 0.0 && continue3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue3_3.tStart = t;  // (not accounting for frame time here)
      continue3_3.frameNStart = frameN;  // exact frame index
      
      continue3_3.setAutoDraw(true);
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
          for (const obj of [continue3_3]) {
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_preferenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_preferenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_preference' ---
    for (const thisComponent of trial_preferenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_randomize_2
    psychoJS.experiment.addData("position_prop2", positions2);
    
    psychoJS.experiment.addData('pref.response', pref.getRating());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trial_preference" was not non-slip safe, so reset the non-slip timer
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
    
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of demographicsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
