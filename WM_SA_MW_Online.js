/************************ 
 * Wm_Sa_Mw_Online *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'WM_SA_MW_Online';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

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
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(experiement_introRoutineBegin());
flowScheduler.add(experiement_introRoutineEachFrame());
flowScheduler.add(experiement_introRoutineEnd());
flowScheduler.add(ospan_introductionRoutineBegin());
flowScheduler.add(ospan_introductionRoutineEachFrame());
flowScheduler.add(ospan_introductionRoutineEnd());
flowScheduler.add(letter_practice_instructionsRoutineBegin());
flowScheduler.add(letter_practice_instructionsRoutineEachFrame());
flowScheduler.add(letter_practice_instructionsRoutineEnd());
const letterPracticeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(letterPracticeLoopLoopBegin(letterPracticeLoopLoopScheduler));
flowScheduler.add(letterPracticeLoopLoopScheduler);
flowScheduler.add(letterPracticeLoopLoopEnd);



flowScheduler.add(math_practice_instructionsRoutineBegin());
flowScheduler.add(math_practice_instructionsRoutineEachFrame());
flowScheduler.add(math_practice_instructionsRoutineEnd());
const mathPracticeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mathPracticeLoopLoopBegin(mathPracticeLoopLoopScheduler));
flowScheduler.add(mathPracticeLoopLoopScheduler);
flowScheduler.add(mathPracticeLoopLoopEnd);




flowScheduler.add(math_calibrationRoutineBegin());
flowScheduler.add(math_calibrationRoutineEachFrame());
flowScheduler.add(math_calibrationRoutineEnd());
flowScheduler.add(combined_practice_instructionsRoutineBegin());
flowScheduler.add(combined_practice_instructionsRoutineEachFrame());
flowScheduler.add(combined_practice_instructionsRoutineEnd());
const combinedPracticeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(combinedPracticeLoopLoopBegin(combinedPracticeLoopLoopScheduler));
flowScheduler.add(combinedPracticeLoopLoopScheduler);
flowScheduler.add(combinedPracticeLoopLoopEnd);





flowScheduler.add(main_ospan_instructionsRoutineBegin());
flowScheduler.add(main_ospan_instructionsRoutineEachFrame());
flowScheduler.add(main_ospan_instructionsRoutineEnd());
const setLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(setLoopLoopBegin(setLoopLoopScheduler));
flowScheduler.add(setLoopLoopScheduler);
flowScheduler.add(setLoopLoopEnd);








flowScheduler.add(sart_instructionsRoutineBegin());
flowScheduler.add(sart_instructionsRoutineEachFrame());
flowScheduler.add(sart_instructionsRoutineEnd());
const sartPracticeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sartPracticeLoopLoopBegin(sartPracticeLoopLoopScheduler));
flowScheduler.add(sartPracticeLoopLoopScheduler);
flowScheduler.add(sartPracticeLoopLoopEnd);


flowScheduler.add(sart_transitionRoutineBegin());
flowScheduler.add(sart_transitionRoutineEachFrame());
flowScheduler.add(sart_transitionRoutineEnd());
const sartMainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sartMainLoopLoopBegin(sartMainLoopLoopScheduler));
flowScheduler.add(sartMainLoopLoopScheduler);
flowScheduler.add(sartMainLoopLoopEnd);



flowScheduler.add(end_experimentRoutineBegin());
flowScheduler.add(end_experimentRoutineEachFrame());
flowScheduler.add(end_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'ospan_letter_practice.csv', 'path': 'ospan_letter_practice.csv'},
    {'name': 'ospan_math_practice_randomized.csv', 'path': 'ospan_math_practice_randomized.csv'},
    {'name': 'ospan_combined_practice.csv', 'path': 'ospan_combined_practice.csv'},
    {'name': 'ospan_sets_full.csv', 'path': 'ospan_sets_full.csv'},
    {'name': 'ospan_trials_full.csv', 'path': 'ospan_trials_full.csv'},
    {'name': 'sart_practice_conditions.csv', 'path': 'sart_practice_conditions.csv'},
    {'name': 'sart_main_conditions - Sheet1.csv', 'path': 'sart_main_conditions - Sheet1.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var experiement_introClock;
var experiment_intro_text;
var experiment_intro_key;
var ospan_introductionClock;
var ospan_introduction_text;
var ospan_intro_key_resp;
var letter_practice_instructionsClock;
var letter_practice_instructions_text;
var letter_practice_instructions_resp;
var letter_trialClock;
var letter_text;
var letter_recallClock;
var recall_instructions;
var recall_F;
var recall_H;
var recall_J;
var recall_K;
var recall_L;
var recall_N;
var recall_P;
var recall_Q;
var recall_R;
var recall_S;
var recall_T;
var recall_Y;
var clear_button;
var blank_button;
var submit_button;
var selected_letters;
var recall_display_text;
var presented_letters;
var ospan_absolute_total;
var ospan_position_total;
var ospan_any_position_total;
var recall_display;
var math_practice_instructionsClock;
var math_practice_instruction_text;
var math_practice_start_key;
var practice_math_solveClock;
var practice_solve_text;
var practice_ready_key;
var practice_math_verifyClock;
var practice_verify_text;
var practice_verify_key;
var practice_verify_instructions;
var practice_math_feedbackClock;
var practice_feedback_display;
var math_calibrationClock;
var calibration_message_text;
var calibration_continue_key;
var combined_practice_instructionsClock;
var combined_practice_text;
var combined_start_key;
var math_solveClock;
var math_problem;
var ready_key;
var Math_verifyClock;
var math_verify_text;
var verify_response;
var verify_instructions;
var main_ospan_instructionsClock;
var main_ospan_instruction_text;
var main_ospan_start_key;
var ospan_set_feedbackClock;
var feedback_display;
var sart_instructionsClock;
var sart_instruction_text;
var sart_instruction_key;
var sart_trialClock;
var sart_digit_text;
var sart_fixation;
var sart_response;
var sart_transitionClock;
var sart_transition_text;
var sart_transition_key;
var sart_probeClock;
var sart_probe_text;
var probe_on_Task;
var probe_off_task;
var end_experimentClock;
var end_text;
var end_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "experiement_intro"
  experiement_introClock = new util.Clock();
  experiment_intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'experiment_intro_text',
    text: 'WELCOME TO THE STUDY\n\nDuring this experiment, you will complete \ntwo computerised tasks:\n\n1. OPERATION SPAN TASK (OSPAN)\n\n2. SUSTAINED ATTENTION TASK (SART)\n\nThe study takes approximately 30–40 minutes.\n\nPlease follow the instructions presented\nbefore each task.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  experiment_intro_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ospan_introduction"
  ospan_introductionClock = new util.Clock();
  ospan_introduction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ospan_introduction_text',
    text: 'Operation Span (OSPAN)\nIn this task, you will be asked to do two things at the same time: solve simple math equations and memorize letters. You will first be trained in recall then math , and finally the two combined to make sure you are prepared and understand the task.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ospan_intro_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter_practice_instructions"
  letter_practice_instructionsClock = new util.Clock();
  letter_practice_instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_practice_instructions_text',
    text: 'LETTER MEMORY PRACTICE\nYou will see a sequence of letters, one at a time.Remember the letters in the exact order in which they appear.After the final letter, select the letters in their original order.If you cannot remember a letter, use BLANK.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  letter_practice_instructions_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter_trial"
  letter_trialClock = new util.Clock();
  letter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "letter_recall"
  letter_recallClock = new util.Clock();
  recall_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_instructions',
    text: 'Select the letters in the order they appeared.\n\n\n\nUse BLANK if you cannot remember a letter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.42], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  recall_F = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_F',
    text: 'F',
    font: 'Arvo',
    pos: [(- 0.45), 0.25],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_F.clock = new util.Clock();
  
  recall_H = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_H',
    text: 'H',
    font: 'Arvo',
    pos: [(- 0.15), 0.25],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_H.clock = new util.Clock();
  
  recall_J = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_J',
    text: 'J',
    font: 'Arvo',
    pos: [0.15, 0.25],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_J.clock = new util.Clock();
  
  recall_K = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_K',
    text: 'K',
    font: 'Arvo',
    pos: [0.45, 0.25],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_K.clock = new util.Clock();
  
  recall_L = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_L',
    text: 'L',
    font: 'Arvo',
    pos: [(- 0.45), 0.04],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_L.clock = new util.Clock();
  
  recall_N = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_N',
    text: 'N',
    font: 'Arvo',
    pos: [(- 0.15), 0.04],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_N.clock = new util.Clock();
  
  recall_P = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_P',
    text: 'P',
    font: 'Arvo',
    pos: [0.15, 0.04],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_P.clock = new util.Clock();
  
  recall_Q = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_Q',
    text: 'Q',
    font: 'Arvo',
    pos: [0.45, 0.04],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_Q.clock = new util.Clock();
  
  recall_R = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_R',
    text: 'R',
    font: 'Arvo',
    pos: [(- 0.45), (- 0.17)],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -10,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_R.clock = new util.Clock();
  
  recall_S = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_S',
    text: 'S',
    font: 'Arvo',
    pos: [(- 0.15), (- 0.17)],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -11,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_S.clock = new util.Clock();
  
  recall_T = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_T',
    text: 'T',
    font: 'Arvo',
    pos: [0.15, (- 0.17)],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -12,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_T.clock = new util.Clock();
  
  recall_Y = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'recall_Y',
    text: 'Y',
    font: 'Arvo',
    pos: [0.45, (- 0.17)],
    size: [0.18, 0.12],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -13,
    letterHeight: 0.07,
    bold: true,
    italic: false,
  });
  recall_Y.clock = new util.Clock();
  
  clear_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'clear_button',
    text: 'CLEAR',
    font: 'Arvo',
    pos: [(- 0.36), (- 0.44)],
    size: [0.24, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -14,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  clear_button.clock = new util.Clock();
  
  blank_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'blank_button',
    text: 'BLANK',
    font: 'Arvo',
    pos: [0, (- 0.44)],
    size: [0.24, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -15,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  blank_button.clock = new util.Clock();
  
  submit_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'submit_button',
    text: 'Submit',
    font: 'Arvo',
    pos: [0.36, (- 0.44)],
    size: [0.24, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -16,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  submit_button.clock = new util.Clock();
  
  // Run 'Begin Experiment' code from recall_logic
  selected_letters = [];
  recall_display_text = "";
  presented_letters = [];
  
  ospan_absolute_total = 0;
  ospan_position_total = 0;
  ospan_any_position_total = 0;
  
  var score_main_phase = false;
  
  var recall_phase = "letter_only";
  
  // Main-task math accuracy counters
  var main_math_total = 0;
  var main_math_correct_total = 0;
  var math_errors_this_set = 0;
  var main_math_accuracy_pct = 0;
  var letters_correct_position_current_set = 0;
  recall_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_display',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.32)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  // Initialize components for Routine "math_practice_instructions"
  math_practice_instructionsClock = new util.Clock();
  math_practice_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_practice_instruction_text',
    text: 'You will now complete a series of mathematical problems.\nFor each problem:\n1. An arithmetic operation will appear on the screen.\n2. Solve the operation mentally as quickly and accurately as possible.\n3. When you know the answer, press SPACE.\n4. A proposed answer will appear. \nDecide whether it is correct.\nResponse keys:\n- J = TRUE (the proposed answer is correct)\n- F = FALSE (the proposed answer is incorrect)\nYou will receive feedback after each problem.\nThere is no time limit during this practice phase. Please focus on both speed and accuracy.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  math_practice_start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_math_solve"
  practice_math_solveClock = new util.Clock();
  practice_solve_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_solve_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  practice_ready_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_math_verify"
  practice_math_verifyClock = new util.Clock();
  practice_verify_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_verify_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  practice_verify_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  practice_verify_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_verify_instructions',
    text: 'F = FALSE\n\nJ = TRUE',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from practice_trial_logging
  var mathPracticeRTs = [];
  var mathPracticeCorrectRTs = [];
  var mathPracticeAcc = [];
  var practice_feedback_text = "";
  // Initialize components for Routine "practice_math_feedback"
  practice_math_feedbackClock = new util.Clock();
  practice_feedback_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_feedback_display',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "math_calibration"
  math_calibrationClock = new util.Clock();
  // Run 'Begin Experiment' code from calculate_math_deadline
  var math_deadline = null;
  var math_calibration_ok = false;
  var mainLoopReps = 1;
  var calibration_message = "";
  calibration_message_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'calibration_message_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.055,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  calibration_continue_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "combined_practice_instructions"
  combined_practice_instructionsClock = new util.Clock();
  combined_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'combined_practice_text',
    text: 'COMBINED PRACTICE\nYou will now complete a practice version of the memory task.\nFor each trial:\n1. Solve the displayed mathematical operation as quickly and accurately as possible.\n2. Press SPACE when you have solved it.\n3. Evaluate the proposed answer using F or J.\n4. Remember the letter that appears next.\nAfter two letters, you will be asked to recall them in their original order.\nRemember:\n- F = FALSE\n- J = TRUE\nWork quickly and accurately. The mathematical solving stage now has an individual time limit based on your earlier practice.\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  combined_start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "math_solve"
  math_solveClock = new util.Clock();
  math_problem = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_problem',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ready_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from math_deadline_control
  var math_speed_error = 0;
  var math_solve_rt = null;
  // Initialize components for Routine "Math_verify"
  Math_verifyClock = new util.Clock();
  math_verify_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_verify_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  verify_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  verify_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'verify_instructions',
    text: 'F = FALSE\n\nJ = TRUE',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "main_ospan_instructions"
  main_ospan_instructionsClock = new util.Clock();
  main_ospan_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_ospan_instruction_text',
    text: 'MAIN MEMORY TASK\nYou will now complete the main memory task.\nFor each trial:\n1. Solve the mathematical operation before the time limit.\n2. Verify the proposed answer using F or J.\n3. Remember the letter presented afterward.\nAfter each set, recall the letters in their original order.\nWork as quickly and accurately as possible.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  main_ospan_start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ospan_set_feedback"
  ospan_set_feedbackClock = new util.Clock();
  feedback_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_display',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "sart_instructions"
  sart_instructionsClock = new util.Clock();
  sart_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sart_instruction_text',
    text: 'Sustained Attention to Response Task (SART)\n\nIn this task, you will see a series of digits presented one at a time.\n\nYour task is to respond by pressing the SPACEBAR whenever you see a digit, EXCEPT when the digit is 3.\n\nWhen you see the number 3, you must withhold your response.\n\nPlease respond as quickly and accurately as possible.\n\nYou will first complete a short practice session. \n\nKeep your response finger poised over the SPACEBAR.\n\nThe practice task will begin immediately\nafter you continue.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sart_instruction_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sart_trial"
  sart_trialClock = new util.Clock();
  sart_digit_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sart_digit_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sart_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'sart_fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.6,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  sart_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sart_transition"
  sart_transitionClock = new util.Clock();
  sart_transition_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sart_transition_text',
    text: 'MAIN SART – INSTRUCTIONS\n\nRespond by pressing SPACEBAR whenever you see\na digit, EXCEPT when you see the number 3.\n\nWhen you see 3, do not respond.\n\nDuring the task, occasional questions will appear\nabout your attention immediately before the question.\n\nSelect one of the following by using your mouse:\n\nON TASK – Your attention was focused on the task.\n\nOFF TASK – Your attention was elsewhere.\n\nThere are no right or wrong answers.\nPlease answer honestly.\n\nAfter answering, the task will continue.\n\nPress SPACEBAR when you are ready.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sart_transition_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sart_probe"
  sart_probeClock = new util.Clock();
  sart_probe_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sart_probe_text',
    text: 'MIND-WANDERING PROBE\n\nImmediately before this question appeared,\nwas your attention:\nAfter selecting your answer, the task\nwill resume immediately.\nKeep your response finger ready over\nthe SPACEBAR.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.18], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  probe_on_Task = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'probe_on_Task',
    text: 'ON TASK',
    font: 'Arvo',
    pos: [(- 0.23), (- 0.12)],
    size: [0.36, 0.13],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.045,
    bold: true,
    italic: false,
  });
  probe_on_Task.clock = new util.Clock();
  
  probe_off_task = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'probe_off_task',
    text: 'OFF TASK',
    font: 'Arvo',
    pos: [0.23, (- 0.12)],
    size: [0.36, 0.13],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.045,
    bold: true,
    italic: false,
  });
  probe_off_task.clock = new util.Clock();
  
  // Run 'Begin Experiment' code from sart_probe_control
  var sart_probe_state = [null];
  var sart_probe_due = false;
  // Initialize components for Routine "end_experiment"
  end_experimentClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'This is the end of the experiment.\nThank you very much for your participation.\nPress Space to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var experiement_introMaxDurationReached;
var _experiment_intro_key_allKeys;
var experiement_introMaxDuration;
var experiement_introComponents;
function experiement_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experiement_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    experiement_introClock.reset();
    routineTimer.reset();
    experiement_introMaxDurationReached = false;
    // update component parameters for each repeat
    experiment_intro_key.keys = undefined;
    experiment_intro_key.rt = undefined;
    _experiment_intro_key_allKeys = [];
    psychoJS.experiment.addData('experiement_intro.started', globalClock.getTime());
    experiement_introMaxDuration = null
    // keep track of which components have finished
    experiement_introComponents = [];
    experiement_introComponents.push(experiment_intro_text);
    experiement_introComponents.push(experiment_intro_key);
    
    for (const thisComponent of experiement_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experiement_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experiement_intro' ---
    // get current time
    t = experiement_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *experiment_intro_text* updates
    if (t >= 0.0 && experiment_intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiment_intro_text.tStart = t;  // (not accounting for frame time here)
      experiment_intro_text.frameNStart = frameN;  // exact frame index
      
      experiment_intro_text.setAutoDraw(true);
    }
    
    
    // if experiment_intro_text is active this frame...
    if (experiment_intro_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *experiment_intro_key* updates
    if (t >= 0.0 && experiment_intro_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiment_intro_key.tStart = t;  // (not accounting for frame time here)
      experiment_intro_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { experiment_intro_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { experiment_intro_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { experiment_intro_key.clearEvents(); });
    }
    
    // if experiment_intro_key is active this frame...
    if (experiment_intro_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = experiment_intro_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _experiment_intro_key_allKeys = _experiment_intro_key_allKeys.concat(theseKeys);
      if (_experiment_intro_key_allKeys.length > 0) {
        experiment_intro_key.keys = _experiment_intro_key_allKeys[_experiment_intro_key_allKeys.length - 1].name;  // just the last key pressed
        experiment_intro_key.rt = _experiment_intro_key_allKeys[_experiment_intro_key_allKeys.length - 1].rt;
        experiment_intro_key.duration = _experiment_intro_key_allKeys[_experiment_intro_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experiement_introComponents)
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


function experiement_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'experiement_intro' ---
    for (const thisComponent of experiement_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('experiement_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(experiment_intro_key.corr, level);
    }
    psychoJS.experiment.addData('experiment_intro_key.keys', experiment_intro_key.keys);
    if (typeof experiment_intro_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('experiment_intro_key.rt', experiment_intro_key.rt);
        psychoJS.experiment.addData('experiment_intro_key.duration', experiment_intro_key.duration);
        routineTimer.reset();
        }
    
    experiment_intro_key.stop();
    // the Routine "experiement_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ospan_introductionMaxDurationReached;
var _ospan_intro_key_resp_allKeys;
var ospan_introductionMaxDuration;
var ospan_introductionComponents;
function ospan_introductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ospan_introduction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ospan_introductionClock.reset();
    routineTimer.reset();
    ospan_introductionMaxDurationReached = false;
    // update component parameters for each repeat
    ospan_intro_key_resp.keys = undefined;
    ospan_intro_key_resp.rt = undefined;
    _ospan_intro_key_resp_allKeys = [];
    psychoJS.experiment.addData('ospan_introduction.started', globalClock.getTime());
    ospan_introductionMaxDuration = null
    // keep track of which components have finished
    ospan_introductionComponents = [];
    ospan_introductionComponents.push(ospan_introduction_text);
    ospan_introductionComponents.push(ospan_intro_key_resp);
    
    for (const thisComponent of ospan_introductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ospan_introductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ospan_introduction' ---
    // get current time
    t = ospan_introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ospan_introduction_text* updates
    if (t >= 0.0 && ospan_introduction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ospan_introduction_text.tStart = t;  // (not accounting for frame time here)
      ospan_introduction_text.frameNStart = frameN;  // exact frame index
      
      ospan_introduction_text.setAutoDraw(true);
    }
    
    
    // if ospan_introduction_text is active this frame...
    if (ospan_introduction_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ospan_intro_key_resp* updates
    if (t >= 0.0 && ospan_intro_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ospan_intro_key_resp.tStart = t;  // (not accounting for frame time here)
      ospan_intro_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ospan_intro_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ospan_intro_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ospan_intro_key_resp.clearEvents(); });
    }
    
    // if ospan_intro_key_resp is active this frame...
    if (ospan_intro_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ospan_intro_key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _ospan_intro_key_resp_allKeys = _ospan_intro_key_resp_allKeys.concat(theseKeys);
      if (_ospan_intro_key_resp_allKeys.length > 0) {
        ospan_intro_key_resp.keys = _ospan_intro_key_resp_allKeys[0].name;  // just the first key pressed
        ospan_intro_key_resp.rt = _ospan_intro_key_resp_allKeys[0].rt;
        ospan_intro_key_resp.duration = _ospan_intro_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ospan_introductionComponents)
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


function ospan_introductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ospan_introduction' ---
    for (const thisComponent of ospan_introductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ospan_introduction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ospan_intro_key_resp.corr, level);
    }
    psychoJS.experiment.addData('ospan_intro_key_resp.keys', ospan_intro_key_resp.keys);
    if (typeof ospan_intro_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ospan_intro_key_resp.rt', ospan_intro_key_resp.rt);
        psychoJS.experiment.addData('ospan_intro_key_resp.duration', ospan_intro_key_resp.duration);
        routineTimer.reset();
        }
    
    ospan_intro_key_resp.stop();
    // the Routine "ospan_introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter_practice_instructionsMaxDurationReached;
var _letter_practice_instructions_resp_allKeys;
var letter_practice_instructionsMaxDuration;
var letter_practice_instructionsComponents;
function letter_practice_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter_practice_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter_practice_instructionsClock.reset();
    routineTimer.reset();
    letter_practice_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    letter_practice_instructions_resp.keys = undefined;
    letter_practice_instructions_resp.rt = undefined;
    _letter_practice_instructions_resp_allKeys = [];
    psychoJS.experiment.addData('letter_practice_instructions.started', globalClock.getTime());
    letter_practice_instructionsMaxDuration = null
    // keep track of which components have finished
    letter_practice_instructionsComponents = [];
    letter_practice_instructionsComponents.push(letter_practice_instructions_text);
    letter_practice_instructionsComponents.push(letter_practice_instructions_resp);
    
    for (const thisComponent of letter_practice_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter_practice_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter_practice_instructions' ---
    // get current time
    t = letter_practice_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letter_practice_instructions_text* updates
    if (t >= 0.0 && letter_practice_instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_practice_instructions_text.tStart = t;  // (not accounting for frame time here)
      letter_practice_instructions_text.frameNStart = frameN;  // exact frame index
      
      letter_practice_instructions_text.setAutoDraw(true);
    }
    
    
    // if letter_practice_instructions_text is active this frame...
    if (letter_practice_instructions_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *letter_practice_instructions_resp* updates
    if (t >= 0.0 && letter_practice_instructions_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_practice_instructions_resp.tStart = t;  // (not accounting for frame time here)
      letter_practice_instructions_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { letter_practice_instructions_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { letter_practice_instructions_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { letter_practice_instructions_resp.clearEvents(); });
    }
    
    // if letter_practice_instructions_resp is active this frame...
    if (letter_practice_instructions_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = letter_practice_instructions_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _letter_practice_instructions_resp_allKeys = _letter_practice_instructions_resp_allKeys.concat(theseKeys);
      if (_letter_practice_instructions_resp_allKeys.length > 0) {
        letter_practice_instructions_resp.keys = _letter_practice_instructions_resp_allKeys[_letter_practice_instructions_resp_allKeys.length - 1].name;  // just the last key pressed
        letter_practice_instructions_resp.rt = _letter_practice_instructions_resp_allKeys[_letter_practice_instructions_resp_allKeys.length - 1].rt;
        letter_practice_instructions_resp.duration = _letter_practice_instructions_resp_allKeys[_letter_practice_instructions_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter_practice_instructionsComponents)
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


function letter_practice_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter_practice_instructions' ---
    for (const thisComponent of letter_practice_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter_practice_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(letter_practice_instructions_resp.corr, level);
    }
    psychoJS.experiment.addData('letter_practice_instructions_resp.keys', letter_practice_instructions_resp.keys);
    if (typeof letter_practice_instructions_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('letter_practice_instructions_resp.rt', letter_practice_instructions_resp.rt);
        psychoJS.experiment.addData('letter_practice_instructions_resp.duration', letter_practice_instructions_resp.duration);
        routineTimer.reset();
        }
    
    letter_practice_instructions_resp.stop();
    // the Routine "letter_practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letterPracticeLoop;
function letterPracticeLoopLoopBegin(letterPracticeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    letterPracticeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ospan_letter_practice.csv',
      seed: undefined, name: 'letterPracticeLoop'
    });
    psychoJS.experiment.addLoop(letterPracticeLoop); // add the loop to the experiment
    currentLoop = letterPracticeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLetterPracticeLoop of letterPracticeLoop) {
      snapshot = letterPracticeLoop.getSnapshot();
      letterPracticeLoopLoopScheduler.add(importConditions(snapshot));
      letterPracticeLoopLoopScheduler.add(letter_trialRoutineBegin(snapshot));
      letterPracticeLoopLoopScheduler.add(letter_trialRoutineEachFrame());
      letterPracticeLoopLoopScheduler.add(letter_trialRoutineEnd(snapshot));
      letterPracticeLoopLoopScheduler.add(letter_recallRoutineBegin(snapshot));
      letterPracticeLoopLoopScheduler.add(letter_recallRoutineEachFrame());
      letterPracticeLoopLoopScheduler.add(letter_recallRoutineEnd(snapshot));
      letterPracticeLoopLoopScheduler.add(letterPracticeLoopLoopEndIteration(letterPracticeLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function letterPracticeLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(letterPracticeLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function letterPracticeLoopLoopEndIteration(scheduler, snapshot) {
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


var mathPracticeLoop;
function mathPracticeLoopLoopBegin(mathPracticeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mathPracticeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ospan_math_practice_randomized.csv',
      seed: undefined, name: 'mathPracticeLoop'
    });
    psychoJS.experiment.addLoop(mathPracticeLoop); // add the loop to the experiment
    currentLoop = mathPracticeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMathPracticeLoop of mathPracticeLoop) {
      snapshot = mathPracticeLoop.getSnapshot();
      mathPracticeLoopLoopScheduler.add(importConditions(snapshot));
      mathPracticeLoopLoopScheduler.add(practice_math_solveRoutineBegin(snapshot));
      mathPracticeLoopLoopScheduler.add(practice_math_solveRoutineEachFrame());
      mathPracticeLoopLoopScheduler.add(practice_math_solveRoutineEnd(snapshot));
      mathPracticeLoopLoopScheduler.add(practice_math_verifyRoutineBegin(snapshot));
      mathPracticeLoopLoopScheduler.add(practice_math_verifyRoutineEachFrame());
      mathPracticeLoopLoopScheduler.add(practice_math_verifyRoutineEnd(snapshot));
      mathPracticeLoopLoopScheduler.add(practice_math_feedbackRoutineBegin(snapshot));
      mathPracticeLoopLoopScheduler.add(practice_math_feedbackRoutineEachFrame());
      mathPracticeLoopLoopScheduler.add(practice_math_feedbackRoutineEnd(snapshot));
      mathPracticeLoopLoopScheduler.add(mathPracticeLoopLoopEndIteration(mathPracticeLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mathPracticeLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mathPracticeLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mathPracticeLoopLoopEndIteration(scheduler, snapshot) {
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


var combinedPracticeLoop;
function combinedPracticeLoopLoopBegin(combinedPracticeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    combinedPracticeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ospan_combined_practice.csv',
      seed: undefined, name: 'combinedPracticeLoop'
    });
    psychoJS.experiment.addLoop(combinedPracticeLoop); // add the loop to the experiment
    currentLoop = combinedPracticeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCombinedPracticeLoop of combinedPracticeLoop) {
      snapshot = combinedPracticeLoop.getSnapshot();
      combinedPracticeLoopLoopScheduler.add(importConditions(snapshot));
      combinedPracticeLoopLoopScheduler.add(math_solveRoutineBegin(snapshot));
      combinedPracticeLoopLoopScheduler.add(math_solveRoutineEachFrame());
      combinedPracticeLoopLoopScheduler.add(math_solveRoutineEnd(snapshot));
      combinedPracticeLoopLoopScheduler.add(Math_verifyRoutineBegin(snapshot));
      combinedPracticeLoopLoopScheduler.add(Math_verifyRoutineEachFrame());
      combinedPracticeLoopLoopScheduler.add(Math_verifyRoutineEnd(snapshot));
      combinedPracticeLoopLoopScheduler.add(letter_trialRoutineBegin(snapshot));
      combinedPracticeLoopLoopScheduler.add(letter_trialRoutineEachFrame());
      combinedPracticeLoopLoopScheduler.add(letter_trialRoutineEnd(snapshot));
      combinedPracticeLoopLoopScheduler.add(letter_recallRoutineBegin(snapshot));
      combinedPracticeLoopLoopScheduler.add(letter_recallRoutineEachFrame());
      combinedPracticeLoopLoopScheduler.add(letter_recallRoutineEnd(snapshot));
      combinedPracticeLoopLoopScheduler.add(combinedPracticeLoopLoopEndIteration(combinedPracticeLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function combinedPracticeLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(combinedPracticeLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function combinedPracticeLoopLoopEndIteration(scheduler, snapshot) {
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


var setLoop;
function setLoopLoopBegin(setLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    setLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: mainLoopReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ospan_sets_full.csv',
      seed: undefined, name: 'setLoop'
    });
    psychoJS.experiment.addLoop(setLoop); // add the loop to the experiment
    currentLoop = setLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSetLoop of setLoop) {
      snapshot = setLoop.getSnapshot();
      setLoopLoopScheduler.add(importConditions(snapshot));
      const trialLoopLoopScheduler = new Scheduler(psychoJS);
      setLoopLoopScheduler.add(trialLoopLoopBegin(trialLoopLoopScheduler, snapshot));
      setLoopLoopScheduler.add(trialLoopLoopScheduler);
      setLoopLoopScheduler.add(trialLoopLoopEnd);
      setLoopLoopScheduler.add(setLoopLoopEndIteration(setLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trialLoop;
function trialLoopLoopBegin(trialLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ospan_trials_full.csv', trialRows),
      seed: undefined, name: 'trialLoop'
    });
    psychoJS.experiment.addLoop(trialLoop); // add the loop to the experiment
    currentLoop = trialLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialLoop of trialLoop) {
      snapshot = trialLoop.getSnapshot();
      trialLoopLoopScheduler.add(importConditions(snapshot));
      trialLoopLoopScheduler.add(math_solveRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(math_solveRoutineEachFrame());
      trialLoopLoopScheduler.add(math_solveRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(Math_verifyRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(Math_verifyRoutineEachFrame());
      trialLoopLoopScheduler.add(Math_verifyRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(letter_trialRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(letter_trialRoutineEachFrame());
      trialLoopLoopScheduler.add(letter_trialRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(letter_recallRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(letter_recallRoutineEachFrame());
      trialLoopLoopScheduler.add(letter_recallRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(ospan_set_feedbackRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(ospan_set_feedbackRoutineEachFrame());
      trialLoopLoopScheduler.add(ospan_set_feedbackRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(trialLoopLoopEndIteration(trialLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialLoopLoopEndIteration(scheduler, snapshot) {
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


async function setLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(setLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function setLoopLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var sartPracticeLoop;
function sartPracticeLoopLoopBegin(sartPracticeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sartPracticeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sart_practice_conditions.csv',
      seed: undefined, name: 'sartPracticeLoop'
    });
    psychoJS.experiment.addLoop(sartPracticeLoop); // add the loop to the experiment
    currentLoop = sartPracticeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSartPracticeLoop of sartPracticeLoop) {
      snapshot = sartPracticeLoop.getSnapshot();
      sartPracticeLoopLoopScheduler.add(importConditions(snapshot));
      sartPracticeLoopLoopScheduler.add(sart_trialRoutineBegin(snapshot));
      sartPracticeLoopLoopScheduler.add(sart_trialRoutineEachFrame());
      sartPracticeLoopLoopScheduler.add(sart_trialRoutineEnd(snapshot));
      sartPracticeLoopLoopScheduler.add(sartPracticeLoopLoopEndIteration(sartPracticeLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function sartPracticeLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sartPracticeLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function sartPracticeLoopLoopEndIteration(scheduler, snapshot) {
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


var sartMainLoop;
function sartMainLoopLoopBegin(sartMainLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sartMainLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sart_main_conditions - Sheet1.csv',
      seed: undefined, name: 'sartMainLoop'
    });
    psychoJS.experiment.addLoop(sartMainLoop); // add the loop to the experiment
    currentLoop = sartMainLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSartMainLoop of sartMainLoop) {
      snapshot = sartMainLoop.getSnapshot();
      sartMainLoopLoopScheduler.add(importConditions(snapshot));
      sartMainLoopLoopScheduler.add(sart_trialRoutineBegin(snapshot));
      sartMainLoopLoopScheduler.add(sart_trialRoutineEachFrame());
      sartMainLoopLoopScheduler.add(sart_trialRoutineEnd(snapshot));
      sartMainLoopLoopScheduler.add(sart_probeRoutineBegin(snapshot));
      sartMainLoopLoopScheduler.add(sart_probeRoutineEachFrame());
      sartMainLoopLoopScheduler.add(sart_probeRoutineEnd(snapshot));
      sartMainLoopLoopScheduler.add(sartMainLoopLoopEndIteration(sartMainLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function sartMainLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sartMainLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function sartMainLoopLoopEndIteration(scheduler, snapshot) {
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


var letter_trialMaxDurationReached;
var letter_trialMaxDuration;
var letter_trialComponents;
function letter_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter_trialClock.reset(routineTimer.getTime());
    routineTimer.add(0.800000);
    letter_trialMaxDurationReached = false;
    // update component parameters for each repeat
    letter_text.setText(letter);
    psychoJS.experiment.addData('letter_trial.started', globalClock.getTime());
    letter_trialMaxDuration = null
    // keep track of which components have finished
    letter_trialComponents = [];
    letter_trialComponents.push(letter_text);
    
    for (const thisComponent of letter_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function letter_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter_trial' ---
    // get current time
    t = letter_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letter_text* updates
    if (t >= 0.0 && letter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_text.tStart = t;  // (not accounting for frame time here)
      letter_text.frameNStart = frameN;  // exact frame index
      
      letter_text.setAutoDraw(true);
    }
    
    
    // if letter_text is active this frame...
    if (letter_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (letter_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      letter_text.tStop = t;  // not accounting for scr refresh
      letter_text.frameNStop = frameN;  // exact frame index
      // update status
      letter_text.status = PsychoJS.Status.FINISHED;
      letter_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter_trial' ---
    for (const thisComponent of letter_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter_trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from record_presented_letter
    presented_letters.push(String(letter));
    if (routineForceEnded) {
        routineTimer.reset();} else if (letter_trialMaxDurationReached) {
        letter_trialClock.add(letter_trialMaxDuration);
    } else {
        letter_trialClock.add(0.800000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter_recallMaxDurationReached;
var letter_recallMaxDuration;
var letter_recallComponents;
function letter_recallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter_recall' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter_recallClock.reset();
    routineTimer.reset();
    letter_recallMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from check_set_end
    if (Number(set_end) !== 1) {
        continueRoutine = false;
    }
    // reset recall_F to account for continued clicks & clear times on/off
    recall_F.reset()
    // reset recall_H to account for continued clicks & clear times on/off
    recall_H.reset()
    // reset recall_J to account for continued clicks & clear times on/off
    recall_J.reset()
    // reset recall_K to account for continued clicks & clear times on/off
    recall_K.reset()
    // reset recall_L to account for continued clicks & clear times on/off
    recall_L.reset()
    // reset recall_N to account for continued clicks & clear times on/off
    recall_N.reset()
    // reset recall_P to account for continued clicks & clear times on/off
    recall_P.reset()
    // reset recall_Q to account for continued clicks & clear times on/off
    recall_Q.reset()
    // reset recall_R to account for continued clicks & clear times on/off
    recall_R.reset()
    // reset recall_S to account for continued clicks & clear times on/off
    recall_S.reset()
    // reset recall_T to account for continued clicks & clear times on/off
    recall_T.reset()
    // reset recall_Y to account for continued clicks & clear times on/off
    recall_Y.reset()
    // reset clear_button to account for continued clicks & clear times on/off
    clear_button.reset()
    // reset blank_button to account for continued clicks & clear times on/off
    blank_button.reset()
    // reset submit_button to account for continued clicks & clear times on/off
    submit_button.reset()
    // Run 'Begin Routine' code from recall_logic
    selected_letters.length = 0;
    recall_display_text = "";
    psychoJS.experiment.addData('letter_recall.started', globalClock.getTime());
    letter_recallMaxDuration = null
    // keep track of which components have finished
    letter_recallComponents = [];
    letter_recallComponents.push(recall_instructions);
    letter_recallComponents.push(recall_F);
    letter_recallComponents.push(recall_H);
    letter_recallComponents.push(recall_J);
    letter_recallComponents.push(recall_K);
    letter_recallComponents.push(recall_L);
    letter_recallComponents.push(recall_N);
    letter_recallComponents.push(recall_P);
    letter_recallComponents.push(recall_Q);
    letter_recallComponents.push(recall_R);
    letter_recallComponents.push(recall_S);
    letter_recallComponents.push(recall_T);
    letter_recallComponents.push(recall_Y);
    letter_recallComponents.push(clear_button);
    letter_recallComponents.push(blank_button);
    letter_recallComponents.push(submit_button);
    letter_recallComponents.push(recall_display);
    
    for (const thisComponent of letter_recallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter_recallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter_recall' ---
    // get current time
    t = letter_recallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_instructions* updates
    if (t >= 0.0 && recall_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instructions.tStart = t;  // (not accounting for frame time here)
      recall_instructions.frameNStart = frameN;  // exact frame index
      
      recall_instructions.setAutoDraw(true);
    }
    
    
    // if recall_instructions is active this frame...
    if (recall_instructions.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *recall_F* updates
    if (t >= 0 && recall_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_F.tStart = t;  // (not accounting for frame time here)
      recall_F.frameNStart = frameN;  // exact frame index
      
      recall_F.setAutoDraw(true);
    }
    
    
    // if recall_F is active this frame...
    if (recall_F.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_F.status === PsychoJS.Status.STARTED) {
      // check whether recall_F has been pressed
      if (recall_F.isClicked) {
        if (!recall_F.wasClicked) {
          // store time of first click
          recall_F.timesOn.push(recall_F.clock.getTime());
          // store time clicked until
          recall_F.timesOff.push(recall_F.clock.getTime());
        } else {
          // update time clicked until;
          recall_F.timesOff[recall_F.timesOff.length - 1] = recall_F.clock.getTime();
        }
        if (!recall_F.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("F");
          }
        }
        // if recall_F is still clicked next frame, it is not a new click
        recall_F.wasClicked = true;
      } else {
        // if recall_F is clicked next frame, it is a new click
        recall_F.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_F hasn't started / has finished
      recall_F.clock.reset();
      // if recall_F is clicked next frame, it is a new click
      recall_F.wasClicked = false;
    }
    
    // *recall_H* updates
    if (t >= 0 && recall_H.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_H.tStart = t;  // (not accounting for frame time here)
      recall_H.frameNStart = frameN;  // exact frame index
      
      recall_H.setAutoDraw(true);
    }
    
    
    // if recall_H is active this frame...
    if (recall_H.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_H.status === PsychoJS.Status.STARTED) {
      // check whether recall_H has been pressed
      if (recall_H.isClicked) {
        if (!recall_H.wasClicked) {
          // store time of first click
          recall_H.timesOn.push(recall_H.clock.getTime());
          // store time clicked until
          recall_H.timesOff.push(recall_H.clock.getTime());
        } else {
          // update time clicked until;
          recall_H.timesOff[recall_H.timesOff.length - 1] = recall_H.clock.getTime();
        }
        if (!recall_H.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("H");
          }
        }
        // if recall_H is still clicked next frame, it is not a new click
        recall_H.wasClicked = true;
      } else {
        // if recall_H is clicked next frame, it is a new click
        recall_H.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_H hasn't started / has finished
      recall_H.clock.reset();
      // if recall_H is clicked next frame, it is a new click
      recall_H.wasClicked = false;
    }
    
    // *recall_J* updates
    if (t >= 0 && recall_J.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_J.tStart = t;  // (not accounting for frame time here)
      recall_J.frameNStart = frameN;  // exact frame index
      
      recall_J.setAutoDraw(true);
    }
    
    
    // if recall_J is active this frame...
    if (recall_J.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_J.status === PsychoJS.Status.STARTED) {
      // check whether recall_J has been pressed
      if (recall_J.isClicked) {
        if (!recall_J.wasClicked) {
          // store time of first click
          recall_J.timesOn.push(recall_J.clock.getTime());
          // store time clicked until
          recall_J.timesOff.push(recall_J.clock.getTime());
        } else {
          // update time clicked until;
          recall_J.timesOff[recall_J.timesOff.length - 1] = recall_J.clock.getTime();
        }
        if (!recall_J.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("J");
          }
        }
        // if recall_J is still clicked next frame, it is not a new click
        recall_J.wasClicked = true;
      } else {
        // if recall_J is clicked next frame, it is a new click
        recall_J.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_J hasn't started / has finished
      recall_J.clock.reset();
      // if recall_J is clicked next frame, it is a new click
      recall_J.wasClicked = false;
    }
    
    // *recall_K* updates
    if (t >= 0 && recall_K.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_K.tStart = t;  // (not accounting for frame time here)
      recall_K.frameNStart = frameN;  // exact frame index
      
      recall_K.setAutoDraw(true);
    }
    
    
    // if recall_K is active this frame...
    if (recall_K.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_K.status === PsychoJS.Status.STARTED) {
      // check whether recall_K has been pressed
      if (recall_K.isClicked) {
        if (!recall_K.wasClicked) {
          // store time of first click
          recall_K.timesOn.push(recall_K.clock.getTime());
          // store time clicked until
          recall_K.timesOff.push(recall_K.clock.getTime());
        } else {
          // update time clicked until;
          recall_K.timesOff[recall_K.timesOff.length - 1] = recall_K.clock.getTime();
        }
        if (!recall_K.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("K");
          }
        }
        // if recall_K is still clicked next frame, it is not a new click
        recall_K.wasClicked = true;
      } else {
        // if recall_K is clicked next frame, it is a new click
        recall_K.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_K hasn't started / has finished
      recall_K.clock.reset();
      // if recall_K is clicked next frame, it is a new click
      recall_K.wasClicked = false;
    }
    
    // *recall_L* updates
    if (t >= 0 && recall_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_L.tStart = t;  // (not accounting for frame time here)
      recall_L.frameNStart = frameN;  // exact frame index
      
      recall_L.setAutoDraw(true);
    }
    
    
    // if recall_L is active this frame...
    if (recall_L.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_L.status === PsychoJS.Status.STARTED) {
      // check whether recall_L has been pressed
      if (recall_L.isClicked) {
        if (!recall_L.wasClicked) {
          // store time of first click
          recall_L.timesOn.push(recall_L.clock.getTime());
          // store time clicked until
          recall_L.timesOff.push(recall_L.clock.getTime());
        } else {
          // update time clicked until;
          recall_L.timesOff[recall_L.timesOff.length - 1] = recall_L.clock.getTime();
        }
        if (!recall_L.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("L");
          }
        }
        // if recall_L is still clicked next frame, it is not a new click
        recall_L.wasClicked = true;
      } else {
        // if recall_L is clicked next frame, it is a new click
        recall_L.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_L hasn't started / has finished
      recall_L.clock.reset();
      // if recall_L is clicked next frame, it is a new click
      recall_L.wasClicked = false;
    }
    
    // *recall_N* updates
    if (t >= 0 && recall_N.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_N.tStart = t;  // (not accounting for frame time here)
      recall_N.frameNStart = frameN;  // exact frame index
      
      recall_N.setAutoDraw(true);
    }
    
    
    // if recall_N is active this frame...
    if (recall_N.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_N.status === PsychoJS.Status.STARTED) {
      // check whether recall_N has been pressed
      if (recall_N.isClicked) {
        if (!recall_N.wasClicked) {
          // store time of first click
          recall_N.timesOn.push(recall_N.clock.getTime());
          // store time clicked until
          recall_N.timesOff.push(recall_N.clock.getTime());
        } else {
          // update time clicked until;
          recall_N.timesOff[recall_N.timesOff.length - 1] = recall_N.clock.getTime();
        }
        if (!recall_N.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("N");
          }
        }
        // if recall_N is still clicked next frame, it is not a new click
        recall_N.wasClicked = true;
      } else {
        // if recall_N is clicked next frame, it is a new click
        recall_N.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_N hasn't started / has finished
      recall_N.clock.reset();
      // if recall_N is clicked next frame, it is a new click
      recall_N.wasClicked = false;
    }
    
    // *recall_P* updates
    if (t >= 0 && recall_P.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_P.tStart = t;  // (not accounting for frame time here)
      recall_P.frameNStart = frameN;  // exact frame index
      
      recall_P.setAutoDraw(true);
    }
    
    
    // if recall_P is active this frame...
    if (recall_P.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_P.status === PsychoJS.Status.STARTED) {
      // check whether recall_P has been pressed
      if (recall_P.isClicked) {
        if (!recall_P.wasClicked) {
          // store time of first click
          recall_P.timesOn.push(recall_P.clock.getTime());
          // store time clicked until
          recall_P.timesOff.push(recall_P.clock.getTime());
        } else {
          // update time clicked until;
          recall_P.timesOff[recall_P.timesOff.length - 1] = recall_P.clock.getTime();
        }
        if (!recall_P.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("P");
          }
        }
        // if recall_P is still clicked next frame, it is not a new click
        recall_P.wasClicked = true;
      } else {
        // if recall_P is clicked next frame, it is a new click
        recall_P.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_P hasn't started / has finished
      recall_P.clock.reset();
      // if recall_P is clicked next frame, it is a new click
      recall_P.wasClicked = false;
    }
    
    // *recall_Q* updates
    if (t >= 0 && recall_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_Q.tStart = t;  // (not accounting for frame time here)
      recall_Q.frameNStart = frameN;  // exact frame index
      
      recall_Q.setAutoDraw(true);
    }
    
    
    // if recall_Q is active this frame...
    if (recall_Q.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_Q.status === PsychoJS.Status.STARTED) {
      // check whether recall_Q has been pressed
      if (recall_Q.isClicked) {
        if (!recall_Q.wasClicked) {
          // store time of first click
          recall_Q.timesOn.push(recall_Q.clock.getTime());
          // store time clicked until
          recall_Q.timesOff.push(recall_Q.clock.getTime());
        } else {
          // update time clicked until;
          recall_Q.timesOff[recall_Q.timesOff.length - 1] = recall_Q.clock.getTime();
        }
        if (!recall_Q.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("Q");
          }
        }
        // if recall_Q is still clicked next frame, it is not a new click
        recall_Q.wasClicked = true;
      } else {
        // if recall_Q is clicked next frame, it is a new click
        recall_Q.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_Q hasn't started / has finished
      recall_Q.clock.reset();
      // if recall_Q is clicked next frame, it is a new click
      recall_Q.wasClicked = false;
    }
    
    // *recall_R* updates
    if (t >= 0 && recall_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_R.tStart = t;  // (not accounting for frame time here)
      recall_R.frameNStart = frameN;  // exact frame index
      
      recall_R.setAutoDraw(true);
    }
    
    
    // if recall_R is active this frame...
    if (recall_R.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_R.status === PsychoJS.Status.STARTED) {
      // check whether recall_R has been pressed
      if (recall_R.isClicked) {
        if (!recall_R.wasClicked) {
          // store time of first click
          recall_R.timesOn.push(recall_R.clock.getTime());
          // store time clicked until
          recall_R.timesOff.push(recall_R.clock.getTime());
        } else {
          // update time clicked until;
          recall_R.timesOff[recall_R.timesOff.length - 1] = recall_R.clock.getTime();
        }
        if (!recall_R.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("R");
          }
        }
        // if recall_R is still clicked next frame, it is not a new click
        recall_R.wasClicked = true;
      } else {
        // if recall_R is clicked next frame, it is a new click
        recall_R.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_R hasn't started / has finished
      recall_R.clock.reset();
      // if recall_R is clicked next frame, it is a new click
      recall_R.wasClicked = false;
    }
    
    // *recall_S* updates
    if (t >= 0 && recall_S.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_S.tStart = t;  // (not accounting for frame time here)
      recall_S.frameNStart = frameN;  // exact frame index
      
      recall_S.setAutoDraw(true);
    }
    
    
    // if recall_S is active this frame...
    if (recall_S.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_S.status === PsychoJS.Status.STARTED) {
      // check whether recall_S has been pressed
      if (recall_S.isClicked) {
        if (!recall_S.wasClicked) {
          // store time of first click
          recall_S.timesOn.push(recall_S.clock.getTime());
          // store time clicked until
          recall_S.timesOff.push(recall_S.clock.getTime());
        } else {
          // update time clicked until;
          recall_S.timesOff[recall_S.timesOff.length - 1] = recall_S.clock.getTime();
        }
        if (!recall_S.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("S");
          }
        }
        // if recall_S is still clicked next frame, it is not a new click
        recall_S.wasClicked = true;
      } else {
        // if recall_S is clicked next frame, it is a new click
        recall_S.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_S hasn't started / has finished
      recall_S.clock.reset();
      // if recall_S is clicked next frame, it is a new click
      recall_S.wasClicked = false;
    }
    
    // *recall_T* updates
    if (t >= 0 && recall_T.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_T.tStart = t;  // (not accounting for frame time here)
      recall_T.frameNStart = frameN;  // exact frame index
      
      recall_T.setAutoDraw(true);
    }
    
    
    // if recall_T is active this frame...
    if (recall_T.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_T.status === PsychoJS.Status.STARTED) {
      // check whether recall_T has been pressed
      if (recall_T.isClicked) {
        if (!recall_T.wasClicked) {
          // store time of first click
          recall_T.timesOn.push(recall_T.clock.getTime());
          // store time clicked until
          recall_T.timesOff.push(recall_T.clock.getTime());
        } else {
          // update time clicked until;
          recall_T.timesOff[recall_T.timesOff.length - 1] = recall_T.clock.getTime();
        }
        if (!recall_T.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("T");
          }
        }
        // if recall_T is still clicked next frame, it is not a new click
        recall_T.wasClicked = true;
      } else {
        // if recall_T is clicked next frame, it is a new click
        recall_T.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_T hasn't started / has finished
      recall_T.clock.reset();
      // if recall_T is clicked next frame, it is a new click
      recall_T.wasClicked = false;
    }
    
    // *recall_Y* updates
    if (t >= 0 && recall_Y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_Y.tStart = t;  // (not accounting for frame time here)
      recall_Y.frameNStart = frameN;  // exact frame index
      
      recall_Y.setAutoDraw(true);
    }
    
    
    // if recall_Y is active this frame...
    if (recall_Y.status === PsychoJS.Status.STARTED) {
    }
    
    if (recall_Y.status === PsychoJS.Status.STARTED) {
      // check whether recall_Y has been pressed
      if (recall_Y.isClicked) {
        if (!recall_Y.wasClicked) {
          // store time of first click
          recall_Y.timesOn.push(recall_Y.clock.getTime());
          // store time clicked until
          recall_Y.timesOff.push(recall_Y.clock.getTime());
        } else {
          // update time clicked until;
          recall_Y.timesOff[recall_Y.timesOff.length - 1] = recall_Y.clock.getTime();
        }
        if (!recall_Y.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("Y");
          }
        }
        // if recall_Y is still clicked next frame, it is not a new click
        recall_Y.wasClicked = true;
      } else {
        // if recall_Y is clicked next frame, it is a new click
        recall_Y.wasClicked = false;
      }
    } else {
      // keep clock at 0 if recall_Y hasn't started / has finished
      recall_Y.clock.reset();
      // if recall_Y is clicked next frame, it is a new click
      recall_Y.wasClicked = false;
    }
    
    // *clear_button* updates
    if (t >= 0 && clear_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clear_button.tStart = t;  // (not accounting for frame time here)
      clear_button.frameNStart = frameN;  // exact frame index
      
      clear_button.setAutoDraw(true);
    }
    
    
    // if clear_button is active this frame...
    if (clear_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (clear_button.status === PsychoJS.Status.STARTED) {
      // check whether clear_button has been pressed
      if (clear_button.isClicked) {
        if (!clear_button.wasClicked) {
          // store time of first click
          clear_button.timesOn.push(clear_button.clock.getTime());
          // store time clicked until
          clear_button.timesOff.push(clear_button.clock.getTime());
        } else {
          // update time clicked until;
          clear_button.timesOff[clear_button.timesOff.length - 1] = clear_button.clock.getTime();
        }
        if (!clear_button.wasClicked) {
          while ((selected_letters.length > 0)) {
              selected_letters.splice((selected_letters.length - 1), 1);
          }
        }
        // if clear_button is still clicked next frame, it is not a new click
        clear_button.wasClicked = true;
      } else {
        // if clear_button is clicked next frame, it is a new click
        clear_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if clear_button hasn't started / has finished
      clear_button.clock.reset();
      // if clear_button is clicked next frame, it is a new click
      clear_button.wasClicked = false;
    }
    
    // *blank_button* updates
    if (t >= 0 && blank_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_button.tStart = t;  // (not accounting for frame time here)
      blank_button.frameNStart = frameN;  // exact frame index
      
      blank_button.setAutoDraw(true);
    }
    
    
    // if blank_button is active this frame...
    if (blank_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (blank_button.status === PsychoJS.Status.STARTED) {
      // check whether blank_button has been pressed
      if (blank_button.isClicked) {
        if (!blank_button.wasClicked) {
          // store time of first click
          blank_button.timesOn.push(blank_button.clock.getTime());
          // store time clicked until
          blank_button.timesOff.push(blank_button.clock.getTime());
        } else {
          // update time clicked until;
          blank_button.timesOff[blank_button.timesOff.length - 1] = blank_button.clock.getTime();
        }
        if (!blank_button.wasClicked) {
          if ((selected_letters.length < Number.parseInt(set_size))) {
              selected_letters.push("BLANK");
          }
        }
        // if blank_button is still clicked next frame, it is not a new click
        blank_button.wasClicked = true;
      } else {
        // if blank_button is clicked next frame, it is a new click
        blank_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if blank_button hasn't started / has finished
      blank_button.clock.reset();
      // if blank_button is clicked next frame, it is a new click
      blank_button.wasClicked = false;
    }
    
    // *submit_button* updates
    if (t >= 0 && submit_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_button.tStart = t;  // (not accounting for frame time here)
      submit_button.frameNStart = frameN;  // exact frame index
      
      submit_button.setAutoDraw(true);
    }
    
    
    // if submit_button is active this frame...
    if (submit_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (submit_button.status === PsychoJS.Status.STARTED) {
      // check whether submit_button has been pressed
      if (submit_button.isClicked) {
        if (!submit_button.wasClicked) {
          // store time of first click
          submit_button.timesOn.push(submit_button.clock.getTime());
          // store time clicked until
          submit_button.timesOff.push(submit_button.clock.getTime());
        } else {
          // update time clicked until;
          submit_button.timesOff[submit_button.timesOff.length - 1] = submit_button.clock.getTime();
        }
        if (!submit_button.wasClicked) {
          if ((selected_letters.length === Number.parseInt(set_size))) {
              continueRoutine = false;
          }
        }
        // if submit_button is still clicked next frame, it is not a new click
        submit_button.wasClicked = true;
      } else {
        // if submit_button is clicked next frame, it is a new click
        submit_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if submit_button hasn't started / has finished
      submit_button.clock.reset();
      // if submit_button is clicked next frame, it is a new click
      submit_button.wasClicked = false;
    }
    // Run 'Each Frame' code from recall_logic
    recall_display_text = selected_letters.join("    ");
    
    // *recall_display* updates
    if (t >= 0.0 && recall_display.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      recall_display.setText(recall_display_text, false);
      // keep track of start time/frame for later
      recall_display.tStart = t;  // (not accounting for frame time here)
      recall_display.frameNStart = frameN;  // exact frame index
      
      recall_display.setAutoDraw(true);
    }
    
    
    // if recall_display is active this frame...
    if (recall_display.status === PsychoJS.Status.STARTED) {
      // update params
      recall_display.setText(recall_display_text, false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter_recallComponents)
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


var letters_correct_position_current_set;
function letter_recallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter_recall' ---
    for (const thisComponent of letter_recallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter_recall.stopped', globalClock.getTime());
    psychoJS.experiment.addData('recall_F.numClicks', recall_F.numClicks);
    psychoJS.experiment.addData('recall_F.timesOn', recall_F.timesOn);
    psychoJS.experiment.addData('recall_F.timesOff', recall_F.timesOff);
    psychoJS.experiment.addData('recall_H.numClicks', recall_H.numClicks);
    psychoJS.experiment.addData('recall_H.timesOn', recall_H.timesOn);
    psychoJS.experiment.addData('recall_H.timesOff', recall_H.timesOff);
    psychoJS.experiment.addData('recall_J.numClicks', recall_J.numClicks);
    psychoJS.experiment.addData('recall_J.timesOn', recall_J.timesOn);
    psychoJS.experiment.addData('recall_J.timesOff', recall_J.timesOff);
    psychoJS.experiment.addData('recall_K.numClicks', recall_K.numClicks);
    psychoJS.experiment.addData('recall_K.timesOn', recall_K.timesOn);
    psychoJS.experiment.addData('recall_K.timesOff', recall_K.timesOff);
    psychoJS.experiment.addData('recall_L.numClicks', recall_L.numClicks);
    psychoJS.experiment.addData('recall_L.timesOn', recall_L.timesOn);
    psychoJS.experiment.addData('recall_L.timesOff', recall_L.timesOff);
    psychoJS.experiment.addData('recall_N.numClicks', recall_N.numClicks);
    psychoJS.experiment.addData('recall_N.timesOn', recall_N.timesOn);
    psychoJS.experiment.addData('recall_N.timesOff', recall_N.timesOff);
    psychoJS.experiment.addData('recall_P.numClicks', recall_P.numClicks);
    psychoJS.experiment.addData('recall_P.timesOn', recall_P.timesOn);
    psychoJS.experiment.addData('recall_P.timesOff', recall_P.timesOff);
    psychoJS.experiment.addData('recall_Q.numClicks', recall_Q.numClicks);
    psychoJS.experiment.addData('recall_Q.timesOn', recall_Q.timesOn);
    psychoJS.experiment.addData('recall_Q.timesOff', recall_Q.timesOff);
    psychoJS.experiment.addData('recall_R.numClicks', recall_R.numClicks);
    psychoJS.experiment.addData('recall_R.timesOn', recall_R.timesOn);
    psychoJS.experiment.addData('recall_R.timesOff', recall_R.timesOff);
    psychoJS.experiment.addData('recall_S.numClicks', recall_S.numClicks);
    psychoJS.experiment.addData('recall_S.timesOn', recall_S.timesOn);
    psychoJS.experiment.addData('recall_S.timesOff', recall_S.timesOff);
    psychoJS.experiment.addData('recall_T.numClicks', recall_T.numClicks);
    psychoJS.experiment.addData('recall_T.timesOn', recall_T.timesOn);
    psychoJS.experiment.addData('recall_T.timesOff', recall_T.timesOff);
    psychoJS.experiment.addData('recall_Y.numClicks', recall_Y.numClicks);
    psychoJS.experiment.addData('recall_Y.timesOn', recall_Y.timesOn);
    psychoJS.experiment.addData('recall_Y.timesOff', recall_Y.timesOff);
    psychoJS.experiment.addData('clear_button.numClicks', clear_button.numClicks);
    psychoJS.experiment.addData('clear_button.timesOn', clear_button.timesOn);
    psychoJS.experiment.addData('clear_button.timesOff', clear_button.timesOff);
    psychoJS.experiment.addData('blank_button.numClicks', blank_button.numClicks);
    psychoJS.experiment.addData('blank_button.timesOn', blank_button.timesOn);
    psychoJS.experiment.addData('blank_button.timesOff', blank_button.timesOff);
    psychoJS.experiment.addData('submit_button.numClicks', submit_button.numClicks);
    psychoJS.experiment.addData('submit_button.timesOn', submit_button.timesOn);
    psychoJS.experiment.addData('submit_button.timesOff', submit_button.timesOff);
    // Run 'End Routine' code from recall_logic
    if (Number(set_end) === 1) {
    
        var expectedLetters = presented_letters.map(String);
        var recalledLetters = selected_letters.map(String);
    
        var size = parseInt(Number(set_size), 10);
    
        var correctPosition = 0;
    
        for (var i = 0; i < size; i++) {
            if (expectedLetters[i] === recalledLetters[i]) {
                correctPosition++;
            }
        }
    
        var remaining = expectedLetters.slice();
        var correctAnyPosition = 0;
    
        for (var response of recalledLetters) {
            var index = remaining.indexOf(response);
    
            if (index !== -1) {
                correctAnyPosition++;
                remaining.splice(index, 1);
            }
        }
    
        if (score_main_phase) {
            
            letters_correct_position_current_set = correctPosition;
    
            var setPerfect = (
                expectedLetters.length === size &&
                recalledLetters.length === size &&
                recalledLetters.every(
                    (letter, index) =>
                        letter === expectedLetters[index]
                )
            ) ? 1 : 0;
    
            var absolutePoints = setPerfect ? size : 0;
    
            ospan_absolute_total += absolutePoints;
            ospan_position_total += correctPosition;
            ospan_any_position_total += correctAnyPosition;
    
            psychoJS.experiment.addData("set_id", set_id);
            psychoJS.experiment.addData("set_size", size);
            psychoJS.experiment.addData(
                "presented_letters", expectedLetters.join(" ")
            );
            psychoJS.experiment.addData(
                "recall_response", recalledLetters.join(" ")
            );
            psychoJS.experiment.addData("set_perfect", setPerfect);
            psychoJS.experiment.addData(
                "letters_correct_position", correctPosition
            );
            psychoJS.experiment.addData(
                "letters_correct_any_position", correctAnyPosition
            );
            psychoJS.experiment.addData(
                "ospan_absolute_points", absolutePoints
            );
    
            psychoJS.experiment.addData(
                "ospan_absolute_total", ospan_absolute_total
            );
            psychoJS.experiment.addData(
                "ospan_position_total", ospan_position_total
            );
            psychoJS.experiment.addData(
                "ospan_any_position_total", ospan_any_position_total
            );
    
        } else {
            psychoJS.experiment.addData(
              "practice_recall_phase",recall_phase
            );
            psychoJS.experiment.addData(
                "letter_practice_set_id", set_id
            );
            psychoJS.experiment.addData(
                "letter_practice_set_size", size
            );
            psychoJS.experiment.addData(
                "letter_practice_presented", expectedLetters.join(" ")
            );
            psychoJS.experiment.addData(
                "letter_practice_recalled", recalledLetters.join(" ")
            );
            psychoJS.experiment.addData(
                "letter_practice_correct_positions", correctPosition
            );
        }
    
        presented_letters.length = 0;
    }
    // the Routine "letter_recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var math_practice_instructionsMaxDurationReached;
var _math_practice_start_key_allKeys;
var math_practice_instructionsMaxDuration;
var math_practice_instructionsComponents;
function math_practice_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'math_practice_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    math_practice_instructionsClock.reset();
    routineTimer.reset();
    math_practice_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    math_practice_start_key.keys = undefined;
    math_practice_start_key.rt = undefined;
    _math_practice_start_key_allKeys = [];
    psychoJS.experiment.addData('math_practice_instructions.started', globalClock.getTime());
    math_practice_instructionsMaxDuration = null
    // keep track of which components have finished
    math_practice_instructionsComponents = [];
    math_practice_instructionsComponents.push(math_practice_instruction_text);
    math_practice_instructionsComponents.push(math_practice_start_key);
    
    for (const thisComponent of math_practice_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function math_practice_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'math_practice_instructions' ---
    // get current time
    t = math_practice_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *math_practice_instruction_text* updates
    if (t >= 0.0 && math_practice_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_practice_instruction_text.tStart = t;  // (not accounting for frame time here)
      math_practice_instruction_text.frameNStart = frameN;  // exact frame index
      
      math_practice_instruction_text.setAutoDraw(true);
    }
    
    
    // if math_practice_instruction_text is active this frame...
    if (math_practice_instruction_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *math_practice_start_key* updates
    if (t >= 0.0 && math_practice_start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_practice_start_key.tStart = t;  // (not accounting for frame time here)
      math_practice_start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { math_practice_start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { math_practice_start_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { math_practice_start_key.clearEvents(); });
    }
    
    // if math_practice_start_key is active this frame...
    if (math_practice_start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = math_practice_start_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _math_practice_start_key_allKeys = _math_practice_start_key_allKeys.concat(theseKeys);
      if (_math_practice_start_key_allKeys.length > 0) {
        math_practice_start_key.keys = _math_practice_start_key_allKeys[0].name;  // just the first key pressed
        math_practice_start_key.rt = _math_practice_start_key_allKeys[0].rt;
        math_practice_start_key.duration = _math_practice_start_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of math_practice_instructionsComponents)
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


function math_practice_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'math_practice_instructions' ---
    for (const thisComponent of math_practice_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('math_practice_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(math_practice_start_key.corr, level);
    }
    psychoJS.experiment.addData('math_practice_start_key.keys', math_practice_start_key.keys);
    if (typeof math_practice_start_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('math_practice_start_key.rt', math_practice_start_key.rt);
        psychoJS.experiment.addData('math_practice_start_key.duration', math_practice_start_key.duration);
        routineTimer.reset();
        }
    
    math_practice_start_key.stop();
    // the Routine "math_practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_math_solveMaxDurationReached;
var _practice_ready_key_allKeys;
var practice_math_solveMaxDuration;
var practice_math_solveComponents;
function practice_math_solveRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_math_solve' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_math_solveClock.reset();
    routineTimer.reset();
    practice_math_solveMaxDurationReached = false;
    // update component parameters for each repeat
    practice_solve_text.setText(solve_text);
    practice_ready_key.keys = undefined;
    practice_ready_key.rt = undefined;
    _practice_ready_key_allKeys = [];
    psychoJS.experiment.addData('practice_math_solve.started', globalClock.getTime());
    practice_math_solveMaxDuration = null
    // keep track of which components have finished
    practice_math_solveComponents = [];
    practice_math_solveComponents.push(practice_solve_text);
    practice_math_solveComponents.push(practice_ready_key);
    
    for (const thisComponent of practice_math_solveComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_math_solveRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_math_solve' ---
    // get current time
    t = practice_math_solveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_solve_text* updates
    if (t >= 0.0 && practice_solve_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_solve_text.tStart = t;  // (not accounting for frame time here)
      practice_solve_text.frameNStart = frameN;  // exact frame index
      
      practice_solve_text.setAutoDraw(true);
    }
    
    
    // if practice_solve_text is active this frame...
    if (practice_solve_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_ready_key* updates
    if (t >= 0.0 && practice_ready_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_ready_key.tStart = t;  // (not accounting for frame time here)
      practice_ready_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_ready_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_ready_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_ready_key.clearEvents(); });
    }
    
    // if practice_ready_key is active this frame...
    if (practice_ready_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_ready_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _practice_ready_key_allKeys = _practice_ready_key_allKeys.concat(theseKeys);
      if (_practice_ready_key_allKeys.length > 0) {
        practice_ready_key.keys = _practice_ready_key_allKeys[0].name;  // just the first key pressed
        practice_ready_key.rt = _practice_ready_key_allKeys[0].rt;
        practice_ready_key.duration = _practice_ready_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_math_solveComponents)
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


function practice_math_solveRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_math_solve' ---
    for (const thisComponent of practice_math_solveComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_math_solve.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practice_ready_key.corr, level);
    }
    psychoJS.experiment.addData('practice_ready_key.keys', practice_ready_key.keys);
    if (typeof practice_ready_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_ready_key.rt', practice_ready_key.rt);
        psychoJS.experiment.addData('practice_ready_key.duration', practice_ready_key.duration);
        routineTimer.reset();
        }
    
    practice_ready_key.stop();
    // the Routine "practice_math_solve" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_math_verifyMaxDurationReached;
var answer_display;
var _practice_verify_key_allKeys;
var practice_math_verifyMaxDuration;
var practice_math_verifyComponents;
function practice_math_verifyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_math_verify' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_math_verifyClock.reset();
    routineTimer.reset();
    practice_math_verifyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from practice_format_answer
    answer_display = String(parseInt(answer_text, 10));
    practice_verify_text.setText(answer_display);
    practice_verify_key.keys = undefined;
    practice_verify_key.rt = undefined;
    _practice_verify_key_allKeys = [];
    psychoJS.experiment.addData('practice_math_verify.started', globalClock.getTime());
    practice_math_verifyMaxDuration = null
    // keep track of which components have finished
    practice_math_verifyComponents = [];
    practice_math_verifyComponents.push(practice_verify_text);
    practice_math_verifyComponents.push(practice_verify_key);
    practice_math_verifyComponents.push(practice_verify_instructions);
    
    for (const thisComponent of practice_math_verifyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_math_verifyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_math_verify' ---
    // get current time
    t = practice_math_verifyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_verify_text* updates
    if (t >= 0.0 && practice_verify_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_verify_text.tStart = t;  // (not accounting for frame time here)
      practice_verify_text.frameNStart = frameN;  // exact frame index
      
      practice_verify_text.setAutoDraw(true);
    }
    
    
    // if practice_verify_text is active this frame...
    if (practice_verify_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_verify_key* updates
    if (t >= 0.0 && practice_verify_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_verify_key.tStart = t;  // (not accounting for frame time here)
      practice_verify_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_verify_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_verify_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_verify_key.clearEvents(); });
    }
    
    // if practice_verify_key is active this frame...
    if (practice_verify_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_verify_key.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _practice_verify_key_allKeys = _practice_verify_key_allKeys.concat(theseKeys);
      if (_practice_verify_key_allKeys.length > 0) {
        practice_verify_key.keys = _practice_verify_key_allKeys[0].name;  // just the first key pressed
        practice_verify_key.rt = _practice_verify_key_allKeys[0].rt;
        practice_verify_key.duration = _practice_verify_key_allKeys[0].duration;
        // was this correct?
        if (practice_verify_key.keys == correct_key) {
            practice_verify_key.corr = 1;
        } else {
            practice_verify_key.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *practice_verify_instructions* updates
    if (t >= 0.0 && practice_verify_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_verify_instructions.tStart = t;  // (not accounting for frame time here)
      practice_verify_instructions.frameNStart = frameN;  // exact frame index
      
      practice_verify_instructions.setAutoDraw(true);
    }
    
    
    // if practice_verify_instructions is active this frame...
    if (practice_verify_instructions.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_math_verifyComponents)
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


var response;
var rt;
var practice_feedback_text;
function practice_math_verifyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_math_verify' ---
    for (const thisComponent of practice_math_verifyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_math_verify.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (practice_verify_key.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         practice_verify_key.corr = 1;  // correct non-response
      } else {
         practice_verify_key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practice_verify_key.corr, level);
    }
    psychoJS.experiment.addData('practice_verify_key.keys', practice_verify_key.keys);
    psychoJS.experiment.addData('practice_verify_key.corr', practice_verify_key.corr);
    if (typeof practice_verify_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_verify_key.rt', practice_verify_key.rt);
        psychoJS.experiment.addData('practice_verify_key.duration', practice_verify_key.duration);
        routineTimer.reset();
        }
    
    practice_verify_key.stop();
    // Run 'End Routine' code from practice_trial_logging
    var response = practice_verify_key.keys;
    
    if (Array.isArray(response)) {
        response = response.length ? response[0] : null;
    }
    
    response = response == null
        ? ""
        : String(response).toLowerCase();
    
    var expected = String(correct_key).trim().toLowerCase();
    
    var practice_correct = Number(response === expected);
    
    var rawRt = practice_ready_key.rt;
    
    var rt = Array.isArray(rawRt)
        ? (rawRt.length ? rawRt[0] : null)
        : rawRt;
    
    if (rt !== null && rt !== undefined) {
        rt = Number(rt);
    
        if (Number.isFinite(rt)) {
            mathPracticeRTs.push(rt);
    
            if (practice_correct === 1) {
                mathPracticeCorrectRTs.push(rt);
            }
        }
    }
    
    mathPracticeAcc.push(practice_correct);
    
    practice_feedback_text = practice_correct
        ? "Correct!"
        : "Incorrect";
    
    psychoJS.experiment.addData("practice_solve_rt", rt);
    psychoJS.experiment.addData("practice_verify_response", response);
    psychoJS.experiment.addData("practice_math_correct", practice_correct);
    // the Routine "practice_math_verify" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_math_feedbackMaxDurationReached;
var practice_math_feedbackMaxDuration;
var practice_math_feedbackComponents;
function practice_math_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_math_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_math_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    practice_math_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    practice_feedback_display.setText(practice_feedback_text);
    psychoJS.experiment.addData('practice_math_feedback.started', globalClock.getTime());
    practice_math_feedbackMaxDuration = null
    // keep track of which components have finished
    practice_math_feedbackComponents = [];
    practice_math_feedbackComponents.push(practice_feedback_display);
    
    for (const thisComponent of practice_math_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_math_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_math_feedback' ---
    // get current time
    t = practice_math_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_feedback_display* updates
    if (t >= 0.0 && practice_feedback_display.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_feedback_display.tStart = t;  // (not accounting for frame time here)
      practice_feedback_display.frameNStart = frameN;  // exact frame index
      
      practice_feedback_display.setAutoDraw(true);
    }
    
    
    // if practice_feedback_display is active this frame...
    if (practice_feedback_display.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_feedback_display.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_feedback_display.tStop = t;  // not accounting for scr refresh
      practice_feedback_display.frameNStop = frameN;  // exact frame index
      // update status
      practice_feedback_display.status = PsychoJS.Status.FINISHED;
      practice_feedback_display.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_math_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_math_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_math_feedback' ---
    for (const thisComponent of practice_math_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_math_feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (practice_math_feedbackMaxDurationReached) {
        practice_math_feedbackClock.add(practice_math_feedbackMaxDuration);
    } else {
        practice_math_feedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var math_calibrationMaxDurationReached;
var math_deadline;
var math_calibration_ok;
var mainLoopReps;
var calibration_message;
var _calibration_continue_key_allKeys;
var math_calibrationMaxDuration;
var math_calibrationComponents;
function math_calibrationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'math_calibration' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    math_calibrationClock.reset();
    routineTimer.reset();
    math_calibrationMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from calculate_math_deadline
    // Correctly verified practice RTs only
    var validRTs = mathPracticeCorrectRTs
        .map(Number)
        .filter(Number.isFinite);
    
    var nValid = validRTs.length;
    
    // Practice accuracy
    var accuracy = mathPracticeAcc.length
        ? mathPracticeAcc.reduce((a, b) => a + b, 0)
          / mathPracticeAcc.length
        : 0;
    
    var accuracyPct = accuracy * 100;
    
    var accuracyOK = accuracy >= 0.85;
    
    // Calculate deadline
    if (nValid >= 2) {
    
        var meanRT = validRTs.reduce((a, b) => a + b, 0)
            / nValid;
    
        var squaredDiffs = validRTs.map(
            rt => Math.pow(rt - meanRT, 2)
        );
    
        var variance = squaredDiffs.reduce(
            (a, b) => a + b, 0
        ) / (nValid - 1);
    
        var rtSD = Math.sqrt(variance);
    
        math_deadline = meanRT + (2.5 * rtSD);
    
        math_calibration_ok = true;
        mainLoopReps = 1;
    
    } else {
    
        var meanRT = null;
        var rtSD = null;
    
        math_deadline = null;
    
        math_calibration_ok = false;
        mainLoopReps = 0;
    }
    
    // Participant-facing message
    if (!math_calibration_ok) {
    
        calibration_message =
            "The practice phase did not produce enough " +
            "correct responses to calculate your time limit. " +
            "Please contact the researcher.";
    
    } else if (!accuracyOK) {
    
        calibration_message =
            "Math practice complete. Your practice accuracy was " +
            accuracyPct.toFixed(1) +
            "%. Please focus on both speed and accuracy " +
            "during the next task. Press SPACE to continue.";
    
    } else {
    
        calibration_message =
            "Math practice complete. Your accuracy was " +
            accuracyPct.toFixed(1) +
            "%. Please continue to work quickly and accurately. " +
            "Press SPACE to continue.";
    }
    
    // Save calibration data
    psychoJS.experiment.addData(
        "math_practice_accuracy",
        accuracyPct
    );
    
    psychoJS.experiment.addData("math_practice_valid_rts", nValid);
    psychoJS.experiment.addData("math_practice_mean_rt", meanRT);
    psychoJS.experiment.addData("math_practice_sd", rtSD);
    psychoJS.experiment.addData("math_deadline", math_deadline);
    psychoJS.experiment.addData(
        "math_practice_accuracy_85pct",
        Number(accuracyOK)
    );
    calibration_message_text.setText(calibration_message);
    calibration_continue_key.keys = undefined;
    calibration_continue_key.rt = undefined;
    _calibration_continue_key_allKeys = [];
    psychoJS.experiment.addData('math_calibration.started', globalClock.getTime());
    math_calibrationMaxDuration = null
    // keep track of which components have finished
    math_calibrationComponents = [];
    math_calibrationComponents.push(calibration_message_text);
    math_calibrationComponents.push(calibration_continue_key);
    
    for (const thisComponent of math_calibrationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function math_calibrationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'math_calibration' ---
    // get current time
    t = math_calibrationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *calibration_message_text* updates
    if (t >= 0.0 && calibration_message_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_message_text.tStart = t;  // (not accounting for frame time here)
      calibration_message_text.frameNStart = frameN;  // exact frame index
      
      calibration_message_text.setAutoDraw(true);
    }
    
    
    // if calibration_message_text is active this frame...
    if (calibration_message_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *calibration_continue_key* updates
    if (t >= 0.0 && calibration_continue_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_continue_key.tStart = t;  // (not accounting for frame time here)
      calibration_continue_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { calibration_continue_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { calibration_continue_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { calibration_continue_key.clearEvents(); });
    }
    
    // if calibration_continue_key is active this frame...
    if (calibration_continue_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = calibration_continue_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _calibration_continue_key_allKeys = _calibration_continue_key_allKeys.concat(theseKeys);
      if (_calibration_continue_key_allKeys.length > 0) {
        calibration_continue_key.keys = _calibration_continue_key_allKeys[0].name;  // just the first key pressed
        calibration_continue_key.rt = _calibration_continue_key_allKeys[0].rt;
        calibration_continue_key.duration = _calibration_continue_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of math_calibrationComponents)
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


function math_calibrationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'math_calibration' ---
    for (const thisComponent of math_calibrationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('math_calibration.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(calibration_continue_key.corr, level);
    }
    psychoJS.experiment.addData('calibration_continue_key.keys', calibration_continue_key.keys);
    if (typeof calibration_continue_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('calibration_continue_key.rt', calibration_continue_key.rt);
        psychoJS.experiment.addData('calibration_continue_key.duration', calibration_continue_key.duration);
        routineTimer.reset();
        }
    
    calibration_continue_key.stop();
    // the Routine "math_calibration" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var combined_practice_instructionsMaxDurationReached;
var _combined_start_key_allKeys;
var score_main_phase;
var recall_phase;
var combined_practice_instructionsMaxDuration;
var combined_practice_instructionsComponents;
function combined_practice_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'combined_practice_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    combined_practice_instructionsClock.reset();
    routineTimer.reset();
    combined_practice_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    combined_start_key.keys = undefined;
    combined_start_key.rt = undefined;
    _combined_start_key_allKeys = [];
    // Run 'Begin Routine' code from combined_phase_setup
    score_main_phase = false;
    recall_phase = "combined";
    psychoJS.experiment.addData('combined_practice_instructions.started', globalClock.getTime());
    combined_practice_instructionsMaxDuration = null
    // keep track of which components have finished
    combined_practice_instructionsComponents = [];
    combined_practice_instructionsComponents.push(combined_practice_text);
    combined_practice_instructionsComponents.push(combined_start_key);
    
    for (const thisComponent of combined_practice_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function combined_practice_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'combined_practice_instructions' ---
    // get current time
    t = combined_practice_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *combined_practice_text* updates
    if (t >= 0.0 && combined_practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      combined_practice_text.tStart = t;  // (not accounting for frame time here)
      combined_practice_text.frameNStart = frameN;  // exact frame index
      
      combined_practice_text.setAutoDraw(true);
    }
    
    
    // if combined_practice_text is active this frame...
    if (combined_practice_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *combined_start_key* updates
    if (t >= 0.0 && combined_start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      combined_start_key.tStart = t;  // (not accounting for frame time here)
      combined_start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { combined_start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { combined_start_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { combined_start_key.clearEvents(); });
    }
    
    // if combined_start_key is active this frame...
    if (combined_start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = combined_start_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _combined_start_key_allKeys = _combined_start_key_allKeys.concat(theseKeys);
      if (_combined_start_key_allKeys.length > 0) {
        combined_start_key.keys = _combined_start_key_allKeys[0].name;  // just the first key pressed
        combined_start_key.rt = _combined_start_key_allKeys[0].rt;
        combined_start_key.duration = _combined_start_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of combined_practice_instructionsComponents)
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


function combined_practice_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'combined_practice_instructions' ---
    for (const thisComponent of combined_practice_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('combined_practice_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(combined_start_key.corr, level);
    }
    psychoJS.experiment.addData('combined_start_key.keys', combined_start_key.keys);
    if (typeof combined_start_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('combined_start_key.rt', combined_start_key.rt);
        psychoJS.experiment.addData('combined_start_key.duration', combined_start_key.duration);
        routineTimer.reset();
        }
    
    combined_start_key.stop();
    // the Routine "combined_practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var math_solveMaxDurationReached;
var _ready_key_allKeys;
var math_solveMaxDuration;
var math_solveComponents;
function math_solveRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'math_solve' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    math_solveClock.reset();
    routineTimer.reset();
    math_solveMaxDurationReached = false;
    // update component parameters for each repeat
    math_problem.setText(solve_text);
    ready_key.keys = undefined;
    ready_key.rt = undefined;
    _ready_key_allKeys = [];
    // Run 'Begin Routine' code from math_deadline_control
    var math_speed_error = 0;
    var math_solve_rt = null;
    var mathSolveClock = new util.Clock();
    psychoJS.experiment.addData('math_solve.started', globalClock.getTime());
    math_solveMaxDuration = null
    // keep track of which components have finished
    math_solveComponents = [];
    math_solveComponents.push(math_problem);
    math_solveComponents.push(ready_key);
    
    for (const thisComponent of math_solveComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var math_speed_error;
function math_solveRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'math_solve' ---
    // get current time
    t = math_solveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *math_problem* updates
    if (t >= 0.0 && math_problem.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_problem.tStart = t;  // (not accounting for frame time here)
      math_problem.frameNStart = frameN;  // exact frame index
      
      math_problem.setAutoDraw(true);
    }
    
    
    // if math_problem is active this frame...
    if (math_problem.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ready_key* updates
    if (t >= 0.0 && ready_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_key.tStart = t;  // (not accounting for frame time here)
      ready_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_key.clearEvents(); });
    }
    
    // if ready_key is active this frame...
    if (ready_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _ready_key_allKeys = _ready_key_allKeys.concat(theseKeys);
      if (_ready_key_allKeys.length > 0) {
        ready_key.keys = _ready_key_allKeys[0].name;  // just the first key pressed
        ready_key.rt = _ready_key_allKeys[0].rt;
        ready_key.duration = _ready_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from math_deadline_control
    var keysNow = ready_key.keys;
    
    var noKeyPressed = (
        keysNow === null ||
        keysNow === undefined ||
        keysNow === "" ||
        (Array.isArray(keysNow) && keysNow.length === 0)
    );
    
    if (
        math_deadline !== null &&
        math_deadline !== undefined &&
        noKeyPressed &&
        mathSolveClock.getTime() >= Number(math_deadline)
    ) {
        math_speed_error = 1;
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of math_solveComponents)
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


var math_solve_rt;
var math_errors_this_set;
var main_math_accuracy_pct;
function math_solveRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'math_solve' ---
    for (const thisComponent of math_solveComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('math_solve.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ready_key.corr, level);
    }
    psychoJS.experiment.addData('ready_key.keys', ready_key.keys);
    if (typeof ready_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_key.rt', ready_key.rt);
        psychoJS.experiment.addData('ready_key.duration', ready_key.duration);
        routineTimer.reset();
        }
    
    ready_key.stop();
    // Run 'End Routine' code from math_deadline_control
    // Record solving reaction time
    math_solve_rt = ready_key.rt;
    
    if (math_speed_error === 1) {
        math_solve_rt = null;
    }
    
    psychoJS.experiment.addData(
        "math_deadline_used", math_deadline
    );
    
    psychoJS.experiment.addData(
        "math_solve_rt", math_solve_rt
    );
    
    psychoJS.experiment.addData(
        "math_speed_error", math_speed_error
    );
    
    psychoJS.experiment.addData(
        "math_solve_elapsed",
        mathSolveClock.getTime()
    );
    
    // Main OSPAN math monitoring
    if (score_main_phase) {
    
        if (parseInt(Number(serial_pos), 10) === 1) {
            math_errors_this_set = 0;
        }
    
        main_math_total++;
    
        if (math_speed_error === 1) {
    
            math_errors_this_set++;
    
            main_math_accuracy_pct =
                100 * main_math_correct_total / main_math_total;
    
            psychoJS.experiment.addData(
                "main_math_trial_correct", 0
            );
    
            psychoJS.experiment.addData(
                "main_math_correct_total",
                main_math_correct_total
            );
    
            psychoJS.experiment.addData(
                "main_math_accuracy_pct",
                main_math_accuracy_pct
            );
        }
    
        psychoJS.experiment.addData(
            "main_math_total",
            main_math_total
        );
    
        psychoJS.experiment.addData(
            "math_errors_this_set",
            math_errors_this_set
        );
    }
    // the Routine "math_solve" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Math_verifyMaxDurationReached;
var _verify_response_allKeys;
var Math_verifyMaxDuration;
var Math_verifyComponents;
function Math_verifyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Math_verify' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Math_verifyClock.reset();
    routineTimer.reset();
    Math_verifyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_verify_on_timeout
    if (math_speed_error === 1) {
        continueRoutine = false;
    }
    // Run 'Begin Routine' code from format_answer
    answer_display = String(parseInt(answer_text, 10));
    math_verify_text.setText(answer_display);
    verify_response.keys = undefined;
    verify_response.rt = undefined;
    _verify_response_allKeys = [];
    psychoJS.experiment.addData('Math_verify.started', globalClock.getTime());
    Math_verifyMaxDuration = null
    // keep track of which components have finished
    Math_verifyComponents = [];
    Math_verifyComponents.push(math_verify_text);
    Math_verifyComponents.push(verify_response);
    Math_verifyComponents.push(verify_instructions);
    
    for (const thisComponent of Math_verifyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Math_verifyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Math_verify' ---
    // get current time
    t = Math_verifyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *math_verify_text* updates
    if (t >= 0.0 && math_verify_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_verify_text.tStart = t;  // (not accounting for frame time here)
      math_verify_text.frameNStart = frameN;  // exact frame index
      
      math_verify_text.setAutoDraw(true);
    }
    
    
    // if math_verify_text is active this frame...
    if (math_verify_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *verify_response* updates
    if (t >= 0.0 && verify_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      verify_response.tStart = t;  // (not accounting for frame time here)
      verify_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { verify_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { verify_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { verify_response.clearEvents(); });
    }
    
    // if verify_response is active this frame...
    if (verify_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = verify_response.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _verify_response_allKeys = _verify_response_allKeys.concat(theseKeys);
      if (_verify_response_allKeys.length > 0) {
        verify_response.keys = _verify_response_allKeys[0].name;  // just the first key pressed
        verify_response.rt = _verify_response_allKeys[0].rt;
        verify_response.duration = _verify_response_allKeys[0].duration;
        // was this correct?
        if (verify_response.keys == correct_key) {
            verify_response.corr = 1;
        } else {
            verify_response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *verify_instructions* updates
    if (t >= 0.0 && verify_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      verify_instructions.tStart = t;  // (not accounting for frame time here)
      verify_instructions.frameNStart = frameN;  // exact frame index
      
      verify_instructions.setAutoDraw(true);
    }
    
    
    // if verify_instructions is active this frame...
    if (verify_instructions.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Math_verifyComponents)
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


function Math_verifyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Math_verify' ---
    for (const thisComponent of Math_verifyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Math_verify.stopped', globalClock.getTime());
    // Run 'End Routine' code from skip_verify_on_timeout
    if (score_main_phase && math_speed_error === 0) {
    
        var response = verify_response.keys;
    
        if (Array.isArray(response)) {
            response = response.length ? response[0] : null;
        }
    
        response = response == null
            ? ""
            : String(response).toLowerCase();
    
        var expected = String(correct_key).trim().toLowerCase();
    
        var mainMathTrialCorrect = Number(response === expected);
    
        if (mainMathTrialCorrect === 1) {
            main_math_correct_total++;
        } else {
            math_errors_this_set++;
        }
    
        main_math_accuracy_pct =
            100 * main_math_correct_total / main_math_total;
    
        psychoJS.experiment.addData(
            "main_math_trial_correct",
            mainMathTrialCorrect
        );
    
        psychoJS.experiment.addData(
            "main_math_correct_total",
            main_math_correct_total
        );
    
        psychoJS.experiment.addData(
            "main_math_accuracy_pct",
            main_math_accuracy_pct
        );
    
        psychoJS.experiment.addData(
            "math_errors_this_set",
            math_errors_this_set
        );
    }
    // was no response the correct answer?!
    if (verify_response.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         verify_response.corr = 1;  // correct non-response
      } else {
         verify_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(verify_response.corr, level);
    }
    psychoJS.experiment.addData('verify_response.keys', verify_response.keys);
    psychoJS.experiment.addData('verify_response.corr', verify_response.corr);
    if (typeof verify_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('verify_response.rt', verify_response.rt);
        psychoJS.experiment.addData('verify_response.duration', verify_response.duration);
        routineTimer.reset();
        }
    
    verify_response.stop();
    // the Routine "Math_verify" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_ospan_instructionsMaxDurationReached;
var main_math_total;
var main_math_correct_total;
var _main_ospan_start_key_allKeys;
var main_ospan_instructionsMaxDuration;
var main_ospan_instructionsComponents;
function main_ospan_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_ospan_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_ospan_instructionsClock.reset();
    routineTimer.reset();
    main_ospan_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from main_phase_setup
    score_main_phase = true;
    recall_phase = "main";
    
    main_math_total = 0;
    main_math_correct_total = 0;
    math_errors_this_set = 0;
    main_math_accuracy_pct = 0;
    letters_correct_position_current_set = 0;
    main_ospan_start_key.keys = undefined;
    main_ospan_start_key.rt = undefined;
    _main_ospan_start_key_allKeys = [];
    psychoJS.experiment.addData('main_ospan_instructions.started', globalClock.getTime());
    main_ospan_instructionsMaxDuration = null
    // keep track of which components have finished
    main_ospan_instructionsComponents = [];
    main_ospan_instructionsComponents.push(main_ospan_instruction_text);
    main_ospan_instructionsComponents.push(main_ospan_start_key);
    
    for (const thisComponent of main_ospan_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_ospan_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_ospan_instructions' ---
    // get current time
    t = main_ospan_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_ospan_instruction_text* updates
    if (t >= 0.0 && main_ospan_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_ospan_instruction_text.tStart = t;  // (not accounting for frame time here)
      main_ospan_instruction_text.frameNStart = frameN;  // exact frame index
      
      main_ospan_instruction_text.setAutoDraw(true);
    }
    
    
    // if main_ospan_instruction_text is active this frame...
    if (main_ospan_instruction_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *main_ospan_start_key* updates
    if (t >= 0.0 && main_ospan_start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_ospan_start_key.tStart = t;  // (not accounting for frame time here)
      main_ospan_start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { main_ospan_start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { main_ospan_start_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { main_ospan_start_key.clearEvents(); });
    }
    
    // if main_ospan_start_key is active this frame...
    if (main_ospan_start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = main_ospan_start_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _main_ospan_start_key_allKeys = _main_ospan_start_key_allKeys.concat(theseKeys);
      if (_main_ospan_start_key_allKeys.length > 0) {
        main_ospan_start_key.keys = _main_ospan_start_key_allKeys[_main_ospan_start_key_allKeys.length - 1].name;  // just the last key pressed
        main_ospan_start_key.rt = _main_ospan_start_key_allKeys[_main_ospan_start_key_allKeys.length - 1].rt;
        main_ospan_start_key.duration = _main_ospan_start_key_allKeys[_main_ospan_start_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_ospan_instructionsComponents)
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


function main_ospan_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_ospan_instructions' ---
    for (const thisComponent of main_ospan_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_ospan_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(main_ospan_start_key.corr, level);
    }
    psychoJS.experiment.addData('main_ospan_start_key.keys', main_ospan_start_key.keys);
    if (typeof main_ospan_start_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('main_ospan_start_key.rt', main_ospan_start_key.rt);
        psychoJS.experiment.addData('main_ospan_start_key.duration', main_ospan_start_key.duration);
        routineTimer.reset();
        }
    
    main_ospan_start_key.stop();
    // the Routine "main_ospan_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ospan_set_feedbackMaxDurationReached;
var feedback_text;
var ospan_set_feedbackMaxDuration;
var ospan_set_feedbackComponents;
function ospan_set_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ospan_set_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ospan_set_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    ospan_set_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from feedback_control
    // Always initialize the variable first
    feedback_text = "";
    
    if (Number(set_end) !== 1) {
        continueRoutine = false;
    
    } else {
    
        var size = parseInt(Number(set_size), 10);
    
        feedback_text =
            "You recalled " +
            letters_correct_position_current_set +
            " letters correctly out of " + size +
            "\n\nYou made " +
            math_errors_this_set +
            " math error(s) for this set." +
            "\n\nYour cumulative math accuracy is " +
            Number(main_math_accuracy_pct).toFixed(1) +
            "%.";
    }
    feedback_display.setText(feedback_text);
    psychoJS.experiment.addData('ospan_set_feedback.started', globalClock.getTime());
    ospan_set_feedbackMaxDuration = null
    // keep track of which components have finished
    ospan_set_feedbackComponents = [];
    ospan_set_feedbackComponents.push(feedback_display);
    
    for (const thisComponent of ospan_set_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ospan_set_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ospan_set_feedback' ---
    // get current time
    t = ospan_set_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_display* updates
    if (t >= 0.0 && feedback_display.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_display.tStart = t;  // (not accounting for frame time here)
      feedback_display.frameNStart = frameN;  // exact frame index
      
      feedback_display.setAutoDraw(true);
    }
    
    
    // if feedback_display is active this frame...
    if (feedback_display.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedback_display.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedback_display.tStop = t;  // not accounting for scr refresh
      feedback_display.frameNStop = frameN;  // exact frame index
      // update status
      feedback_display.status = PsychoJS.Status.FINISHED;
      feedback_display.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ospan_set_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ospan_set_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ospan_set_feedback' ---
    for (const thisComponent of ospan_set_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ospan_set_feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (ospan_set_feedbackMaxDurationReached) {
        ospan_set_feedbackClock.add(ospan_set_feedbackMaxDuration);
    } else {
        ospan_set_feedbackClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sart_instructionsMaxDurationReached;
var _sart_instruction_key_allKeys;
var sart_instructionsMaxDuration;
var sart_instructionsComponents;
function sart_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sart_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    sart_instructionsClock.reset();
    routineTimer.reset();
    sart_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    sart_instruction_key.keys = undefined;
    sart_instruction_key.rt = undefined;
    _sart_instruction_key_allKeys = [];
    psychoJS.experiment.addData('sart_instructions.started', globalClock.getTime());
    sart_instructionsMaxDuration = null
    // keep track of which components have finished
    sart_instructionsComponents = [];
    sart_instructionsComponents.push(sart_instruction_text);
    sart_instructionsComponents.push(sart_instruction_key);
    
    for (const thisComponent of sart_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sart_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sart_instructions' ---
    // get current time
    t = sart_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sart_instruction_text* updates
    if (t >= 0.0 && sart_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sart_instruction_text.tStart = t;  // (not accounting for frame time here)
      sart_instruction_text.frameNStart = frameN;  // exact frame index
      
      sart_instruction_text.setAutoDraw(true);
    }
    
    
    // if sart_instruction_text is active this frame...
    if (sart_instruction_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *sart_instruction_key* updates
    if (t >= 0.0 && sart_instruction_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sart_instruction_key.tStart = t;  // (not accounting for frame time here)
      sart_instruction_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sart_instruction_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sart_instruction_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sart_instruction_key.clearEvents(); });
    }
    
    // if sart_instruction_key is active this frame...
    if (sart_instruction_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = sart_instruction_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _sart_instruction_key_allKeys = _sart_instruction_key_allKeys.concat(theseKeys);
      if (_sart_instruction_key_allKeys.length > 0) {
        sart_instruction_key.keys = _sart_instruction_key_allKeys[_sart_instruction_key_allKeys.length - 1].name;  // just the last key pressed
        sart_instruction_key.rt = _sart_instruction_key_allKeys[_sart_instruction_key_allKeys.length - 1].rt;
        sart_instruction_key.duration = _sart_instruction_key_allKeys[_sart_instruction_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sart_instructionsComponents)
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


function sart_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sart_instructions' ---
    for (const thisComponent of sart_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sart_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sart_instruction_key.corr, level);
    }
    psychoJS.experiment.addData('sart_instruction_key.keys', sart_instruction_key.keys);
    if (typeof sart_instruction_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sart_instruction_key.rt', sart_instruction_key.rt);
        psychoJS.experiment.addData('sart_instruction_key.duration', sart_instruction_key.duration);
        routineTimer.reset();
        }
    
    sart_instruction_key.stop();
    // the Routine "sart_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sart_trialMaxDurationReached;
var _sart_response_allKeys;
var sart_trialMaxDuration;
var sart_trialComponents;
function sart_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sart_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    sart_trialClock.reset(routineTimer.getTime());
    routineTimer.add(1.400000);
    sart_trialMaxDurationReached = false;
    // update component parameters for each repeat
    sart_digit_text.setText(sart_digit);
    sart_digit_text.setHeight(sart_digit_height);
    sart_response.keys = undefined;
    sart_response.rt = undefined;
    _sart_response_allKeys = [];
    psychoJS.experiment.addData('sart_trial.started', globalClock.getTime());
    sart_trialMaxDuration = null
    // keep track of which components have finished
    sart_trialComponents = [];
    sart_trialComponents.push(sart_digit_text);
    sart_trialComponents.push(sart_fixation);
    sart_trialComponents.push(sart_response);
    
    for (const thisComponent of sart_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sart_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sart_trial' ---
    // get current time
    t = sart_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sart_digit_text* updates
    if (t >= 0.0 && sart_digit_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sart_digit_text.tStart = t;  // (not accounting for frame time here)
      sart_digit_text.frameNStart = frameN;  // exact frame index
      
      sart_digit_text.setAutoDraw(true);
    }
    
    
    // if sart_digit_text is active this frame...
    if (sart_digit_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sart_digit_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      sart_digit_text.tStop = t;  // not accounting for scr refresh
      sart_digit_text.frameNStop = frameN;  // exact frame index
      // update status
      sart_digit_text.status = PsychoJS.Status.FINISHED;
      sart_digit_text.setAutoDraw(false);
    }
    
    
    // *sart_fixation* updates
    if (t >= 0.25 && sart_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sart_fixation.tStart = t;  // (not accounting for frame time here)
      sart_fixation.frameNStart = frameN;  // exact frame index
      
      sart_fixation.setAutoDraw(true);
    }
    
    
    // if sart_fixation is active this frame...
    if (sart_fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.25 + 1.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sart_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      sart_fixation.tStop = t;  // not accounting for scr refresh
      sart_fixation.frameNStop = frameN;  // exact frame index
      // update status
      sart_fixation.status = PsychoJS.Status.FINISHED;
      sart_fixation.setAutoDraw(false);
    }
    
    
    // *sart_response* updates
    if (t >= 0.0 && sart_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sart_response.tStart = t;  // (not accounting for frame time here)
      sart_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sart_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sart_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sart_response.clearEvents(); });
    }
    frameRemains = 0.0 + 1.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sart_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      sart_response.tStop = t;  // not accounting for scr refresh
      sart_response.frameNStop = frameN;  // exact frame index
      // update status
      sart_response.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 1.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (sart_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        sart_response.tStop = t;  // not accounting for scr refresh
        sart_response.frameNStop = frameN;  // exact frame index
        // update status
        sart_response.status = PsychoJS.Status.FINISHED;
        sart_response.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if sart_response is active this frame...
      if (sart_response.status === PsychoJS.Status.STARTED) {
        let theseKeys = sart_response.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _sart_response_allKeys = _sart_response_allKeys.concat(theseKeys);
        if (_sart_response_allKeys.length > 0) {
          sart_response.keys = _sart_response_allKeys[0].name;  // just the first key pressed
          sart_response.rt = _sart_response_allKeys[0].rt;
          sart_response.duration = _sart_response_allKeys[0].duration;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of sart_trialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var sart_responded;
var sart_accuracy;
var sart_outcome;
function sart_trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'sart_trial' ---
      for (const thisComponent of sart_trialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('sart_trial.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(sart_response.corr, level);
      }
      psychoJS.experiment.addData('sart_response.keys', sart_response.keys);
      if (typeof sart_response.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('sart_response.rt', sart_response.rt);
          psychoJS.experiment.addData('sart_response.duration', sart_response.duration);
          }
      
      sart_response.stop();
      // Run 'End Routine' code from sart_trial_classify
      // Get the response and reaction time
      let sart_key = sart_response.keys;
      let sart_rt = sart_response.rt;
      
      // Check whether a response was made
      if (
          sart_key === null ||
          sart_key === undefined ||
          sart_key === "" ||
          (Array.isArray(sart_key) && sart_key.length === 0)
      ) {
          sart_responded = 0;
      } else {
          sart_responded = 1;
      }
      
      // Classify the trial
      if (sart_trial_type === "Go") {
      
          if (sart_responded === 1) {
              sart_accuracy = 1;
              sart_outcome = "hit";
      
          } else {
              sart_accuracy = 0;
              sart_outcome = "omission";
          }
      
      } else if (sart_trial_type === "NoGo") {
      
          if (sart_responded === 1) {
              sart_accuracy = 0;
              sart_outcome = "false_alarm";
      
          } else {
              sart_accuracy = 1;
              sart_outcome = "correct_rejection";
          }
      
      } else {
          sart_accuracy = null;
          sart_outcome = "unknown_trial_type";
      }
      
      // Save trial-level data
      psychoJS.experiment.addData("sart_key", sart_key);
      psychoJS.experiment.addData("sart_rt", sart_rt);
      psychoJS.experiment.addData("sart_responded", sart_responded);
      psychoJS.experiment.addData("sart_accuracy", sart_accuracy);
      psychoJS.experiment.addData("sart_outcome", sart_outcome);
      if (routineForceEnded) {
          routineTimer.reset();} else if (sart_trialMaxDurationReached) {
          sart_trialClock.add(sart_trialMaxDuration);
      } else {
          sart_trialClock.add(1.400000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var sart_transitionMaxDurationReached;
var _sart_transition_key_allKeys;
var sart_transitionMaxDuration;
var sart_transitionComponents;
function sart_transitionRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'sart_transition' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      sart_transitionClock.reset();
      routineTimer.reset();
      sart_transitionMaxDurationReached = false;
      // update component parameters for each repeat
      sart_transition_key.keys = undefined;
      sart_transition_key.rt = undefined;
      _sart_transition_key_allKeys = [];
      psychoJS.experiment.addData('sart_transition.started', globalClock.getTime());
      sart_transitionMaxDuration = null
      // keep track of which components have finished
      sart_transitionComponents = [];
      sart_transitionComponents.push(sart_transition_text);
      sart_transitionComponents.push(sart_transition_key);
      
      for (const thisComponent of sart_transitionComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function sart_transitionRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'sart_transition' ---
      // get current time
      t = sart_transitionClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *sart_transition_text* updates
      if (t >= 0.0 && sart_transition_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        sart_transition_text.tStart = t;  // (not accounting for frame time here)
        sart_transition_text.frameNStart = frameN;  // exact frame index
        
        sart_transition_text.setAutoDraw(true);
      }
      
      
      // if sart_transition_text is active this frame...
      if (sart_transition_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *sart_transition_key* updates
      if (t >= 0.0 && sart_transition_key.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        sart_transition_key.tStart = t;  // (not accounting for frame time here)
        sart_transition_key.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { sart_transition_key.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { sart_transition_key.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { sart_transition_key.clearEvents(); });
      }
      
      // if sart_transition_key is active this frame...
      if (sart_transition_key.status === PsychoJS.Status.STARTED) {
        let theseKeys = sart_transition_key.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _sart_transition_key_allKeys = _sart_transition_key_allKeys.concat(theseKeys);
        if (_sart_transition_key_allKeys.length > 0) {
          sart_transition_key.keys = _sart_transition_key_allKeys[_sart_transition_key_allKeys.length - 1].name;  // just the last key pressed
          sart_transition_key.rt = _sart_transition_key_allKeys[_sart_transition_key_allKeys.length - 1].rt;
          sart_transition_key.duration = _sart_transition_key_allKeys[_sart_transition_key_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of sart_transitionComponents)
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
  
  
function sart_transitionRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'sart_transition' ---
      for (const thisComponent of sart_transitionComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('sart_transition.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(sart_transition_key.corr, level);
      }
      psychoJS.experiment.addData('sart_transition_key.keys', sart_transition_key.keys);
      if (typeof sart_transition_key.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('sart_transition_key.rt', sart_transition_key.rt);
          psychoJS.experiment.addData('sart_transition_key.duration', sart_transition_key.duration);
          routineTimer.reset();
          }
      
      sart_transition_key.stop();
      // the Routine "sart_transition" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var sart_probeMaxDurationReached;
var sart_probe_trial;
var sart_probe_due;
var sart_probeMaxDuration;
var sart_probeComponents;
function sart_probeRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'sart_probe' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      sart_probeClock.reset();
      routineTimer.reset();
      sart_probeMaxDurationReached = false;
      // update component parameters for each repeat
      // reset probe_on_Task to account for continued clicks & clear times on/off
      probe_on_Task.reset()
      // reset probe_off_task to account for continued clicks & clear times on/off
      probe_off_task.reset()
      // Run 'Begin Routine' code from sart_probe_control
      sart_probe_state[0] = null;
      
      sart_probe_trial = sartMainLoop.thisN + 1;
      
      sart_probe_due = (
          sart_probe_trial % 45 === 0
      );
      
      if (!sart_probe_due) {
          continueRoutine = false;
      }
      psychoJS.experiment.addData('sart_probe.started', globalClock.getTime());
      sart_probeMaxDuration = null
      // keep track of which components have finished
      sart_probeComponents = [];
      sart_probeComponents.push(sart_probe_text);
      sart_probeComponents.push(probe_on_Task);
      sart_probeComponents.push(probe_off_task);
      
      for (const thisComponent of sart_probeComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function sart_probeRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'sart_probe' ---
      // get current time
      t = sart_probeClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *sart_probe_text* updates
      if (t >= 0.0 && sart_probe_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        sart_probe_text.tStart = t;  // (not accounting for frame time here)
        sart_probe_text.frameNStart = frameN;  // exact frame index
        
        sart_probe_text.setAutoDraw(true);
      }
      
      
      // if sart_probe_text is active this frame...
      if (sart_probe_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *probe_on_Task* updates
      if (t >= 0 && probe_on_Task.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        probe_on_Task.tStart = t;  // (not accounting for frame time here)
        probe_on_Task.frameNStart = frameN;  // exact frame index
        
        probe_on_Task.setAutoDraw(true);
      }
      
      
      // if probe_on_Task is active this frame...
      if (probe_on_Task.status === PsychoJS.Status.STARTED) {
      }
      
      if (probe_on_Task.status === PsychoJS.Status.STARTED) {
        // check whether probe_on_Task has been pressed
        if (probe_on_Task.isClicked) {
          if (!probe_on_Task.wasClicked) {
            // store time of first click
            probe_on_Task.timesOn.push(probe_on_Task.clock.getTime());
            // store time clicked until
            probe_on_Task.timesOff.push(probe_on_Task.clock.getTime());
          } else {
            // update time clicked until;
            probe_on_Task.timesOff[probe_on_Task.timesOff.length - 1] = probe_on_Task.clock.getTime();
          }
          if (!probe_on_Task.wasClicked) {
            // end routine when probe_on_Task is clicked
            continueRoutine = false;
            sart_probe_state[0] = "on_task";
          }
          // if probe_on_Task is still clicked next frame, it is not a new click
          probe_on_Task.wasClicked = true;
        } else {
          // if probe_on_Task is clicked next frame, it is a new click
          probe_on_Task.wasClicked = false;
        }
      } else {
        // keep clock at 0 if probe_on_Task hasn't started / has finished
        probe_on_Task.clock.reset();
        // if probe_on_Task is clicked next frame, it is a new click
        probe_on_Task.wasClicked = false;
      }
      
      // *probe_off_task* updates
      if (t >= 0 && probe_off_task.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        probe_off_task.tStart = t;  // (not accounting for frame time here)
        probe_off_task.frameNStart = frameN;  // exact frame index
        
        probe_off_task.setAutoDraw(true);
      }
      
      
      // if probe_off_task is active this frame...
      if (probe_off_task.status === PsychoJS.Status.STARTED) {
      }
      
      if (probe_off_task.status === PsychoJS.Status.STARTED) {
        // check whether probe_off_task has been pressed
        if (probe_off_task.isClicked) {
          if (!probe_off_task.wasClicked) {
            // store time of first click
            probe_off_task.timesOn.push(probe_off_task.clock.getTime());
            // store time clicked until
            probe_off_task.timesOff.push(probe_off_task.clock.getTime());
          } else {
            // update time clicked until;
            probe_off_task.timesOff[probe_off_task.timesOff.length - 1] = probe_off_task.clock.getTime();
          }
          if (!probe_off_task.wasClicked) {
            // end routine when probe_off_task is clicked
            continueRoutine = false;
            sart_probe_state[0] = "off_task";
          }
          // if probe_off_task is still clicked next frame, it is not a new click
          probe_off_task.wasClicked = true;
        } else {
          // if probe_off_task is clicked next frame, it is a new click
          probe_off_task.wasClicked = false;
        }
      } else {
        // keep clock at 0 if probe_off_task hasn't started / has finished
        probe_off_task.clock.reset();
        // if probe_off_task is clicked next frame, it is a new click
        probe_off_task.wasClicked = false;
      }
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of sart_probeComponents)
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
  
  
function sart_probeRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'sart_probe' ---
      for (const thisComponent of sart_probeComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('sart_probe.stopped', globalClock.getTime());
      psychoJS.experiment.addData('probe_on_Task.numClicks', probe_on_Task.numClicks);
      psychoJS.experiment.addData('probe_on_Task.timesOn', probe_on_Task.timesOn);
      psychoJS.experiment.addData('probe_on_Task.timesOff', probe_on_Task.timesOff);
      psychoJS.experiment.addData('probe_off_task.numClicks', probe_off_task.numClicks);
      psychoJS.experiment.addData('probe_off_task.timesOn', probe_off_task.timesOn);
      psychoJS.experiment.addData('probe_off_task.timesOff', probe_off_task.timesOff);
      // Run 'End Routine' code from sart_probe_control
      if (
          sart_probe_due &&
          sart_probe_state[0] !== null
      ) {
          psychoJS.experiment.addData(
              "mind_probe_response",
              sart_probe_state[0]
          );
      }
      // the Routine "sart_probe" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var end_experimentMaxDurationReached;
var _end_key_allKeys;
var end_experimentMaxDuration;
var end_experimentComponents;
function end_experimentRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end_experiment' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      end_experimentClock.reset();
      routineTimer.reset();
      end_experimentMaxDurationReached = false;
      // update component parameters for each repeat
      end_key.keys = undefined;
      end_key.rt = undefined;
      _end_key_allKeys = [];
      psychoJS.experiment.addData('end_experiment.started', globalClock.getTime());
      end_experimentMaxDuration = null
      // keep track of which components have finished
      end_experimentComponents = [];
      end_experimentComponents.push(end_text);
      end_experimentComponents.push(end_key);
      
      for (const thisComponent of end_experimentComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function end_experimentRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end_experiment' ---
      // get current time
      t = end_experimentClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *end_text* updates
      if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        end_text.tStart = t;  // (not accounting for frame time here)
        end_text.frameNStart = frameN;  // exact frame index
        
        end_text.setAutoDraw(true);
      }
      
      
      // if end_text is active this frame...
      if (end_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *end_key* updates
      if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        end_key.tStart = t;  // (not accounting for frame time here)
        end_key.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
      }
      
      // if end_key is active this frame...
      if (end_key.status === PsychoJS.Status.STARTED) {
        let theseKeys = end_key.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
        if (_end_key_allKeys.length > 0) {
          end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
          end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
          end_key.duration = _end_key_allKeys[_end_key_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of end_experimentComponents)
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
  
  
function end_experimentRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end_experiment' ---
      for (const thisComponent of end_experimentComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('end_experiment.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(end_key.corr, level);
      }
      psychoJS.experiment.addData('end_key.keys', end_key.keys);
      if (typeof end_key.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('end_key.rt', end_key.rt);
          psychoJS.experiment.addData('end_key.duration', end_key.duration);
          routineTimer.reset();
          }
      
      end_key.stop();
      // the Routine "end_experiment" was not non-slip safe, so reset the non-slip timer
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
