#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on April 07, 2023, at 10:20
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'expectedness'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expName, expInfo['participant'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Swantje\\Desktop\\At-issueness\\q-evoke experiment\\at_issue_experiment\\expectedness rating - 1 proposal_list5\\expectedness_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=False, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = True
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "instructions" ---
logo1 = visual.ImageStim(
    win=win,
    name='logo1', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text_instr = visual.TextStim(win=win, name='text_instr',
    text='Welcome to our study!',
    font='Open Sans',
    pos=(0, 0.4), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
introduction = visual.TextBox2(
     win, text='The goal of this study is to investigate how humans understand English utterances. The study consists of two parts. In both parts, you will read 12  3-sentence statements by different speakers. Here is an example:', font='Open Sans',
     pos=(0, 0.5),     letterHeight=0.025,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='top-center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='introduction',
     autoLog=True,
)
introduction_2 = visual.TextBox2(
     win, text='Phil said: I went shopping last Tuesday. I had a day off from work. I bought lots of beautiful things.', font='Open Sans',
     pos=(0, 0.18),     letterHeight=0.025,
     size=(0.9, 0.1), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='top-center',
     fillColor=None, borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='introduction_2',
     autoLog=True,
)
introduction_3 = visual.TextBox2(
     win, text='In part 1, we are interested in understanding what the speaker might say in the next sentence (e.g., Phil might say next what else he did on his day off). We will make a proposal and ask you to rate how expected that proposal is. \n\nIn part 2, you will see each statement again, but we will show you what the speaker actually said next. Phil, for instance, said next: "My favorite piece was a blue fake leather jacket." We will ask you a question about what the speaker is certain about, e.g., "Is Phil certain that the leather jacket is fake?".\n\nEach part will start with one practice trial to get you acquainted with the procedure. At the end of the study, we will ask you for your demographic information. Please pay close attention during your participation! The study should take approximately 15 minutes. ', font='Open Sans',
     pos=(0, 0.1),     letterHeight=0.025,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='top-center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='introduction_3',
     autoLog=True,
)
continue1 = visual.TextBox2(
     win, text='Continue', font='Open Sans',
     pos=(0, -0.42),     letterHeight=0.03,
     size=(0.17,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue1',
     autoLog=True,
)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# --- Initialize components for Routine "consent" ---
logo2 = visual.ImageStim(
    win=win,
    name='logo2', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Heading = visual.TextStim(win=win, name='Heading',
    text='CONSENT',
    font='Open Sans',
    pos=(0, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
consent_text = visual.TextBox2(
     win, text='By clicking on the "I want to participate"-button below you agree to participate in this study, which is conducted by researchers at the University of Stuttgart. You may withdraw from this study at any time without penalty or loss of benefits, including loss or reduction of payment. If you do withdraw from the study before the end, please contact the researchers for information on how to collect payment (swantje.toennis@ling.uni-stuttgart.de). The data collected will be anonymous and confidential. You give permission for your data from this study to be shared with other researchers. If you have any questions, you may contact the requester through Prolific\'s platform or via email (swantje.toennis@ling.uni-stuttgart.de). ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.025,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='consent_text',
     autoLog=True,
)
continue2 = visual.TextBox2(
     win, text='I want to participate', font='Open Sans',
     pos=(0, -0.35),     letterHeight=0.03,
     size=(0.45,0.04), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue2',
     autoLog=True,
)
mouse_consent = event.Mouse(win=win)
x, y = [None, None]
mouse_consent.mouseClock = core.Clock()

# --- Initialize components for Routine "block1" ---
logo3 = visual.ImageStim(
    win=win,
    name='logo3', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text_5 = visual.TextStim(win=win, name='text_5',
    text='You are now entering part 1 of the study!\n',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
intro_block2_2 = visual.TextBox2(
     win, text='Remember: In this part you will read statements by different speakers and will indicate what you expect them to say  in the next sentence.\nClick "Continue" to go through a practice trial.', font='Open Sans',
     pos=(0, -0.15),     letterHeight=0.025,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='intro_block2_2',
     autoLog=True,
)
continue6_2 = visual.TextBox2(
     win, text='Continue', font='Open Sans',
     pos=(0, -0.3),     letterHeight=0.03,
     size=(0.17,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue6_2',
     autoLog=True,
)
mouse_9 = event.Mouse(win=win)
x, y = [None, None]
mouse_9.mouseClock = core.Clock()

# --- Initialize components for Routine "practice_trial1" ---
logo4 = visual.ImageStim(
    win=win,
    name='logo4', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Heading_3 = visual.TextStim(win=win, name='Heading_3',
    text='PRACTICE',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
read_context_3 = visual.TextBox2(
     win, text='Read the statement in the box.', font='Open Sans',
     pos=(0, 0.32),     letterHeight=0.03,
     size=(1., 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='read_context_3',
     autoLog=True,
)
textbox_2 = visual.TextBox2(
     win, text='Julia said: Kim was at the party yesterday. I had a lot of fun with her. But then she suddenly left.', font='Open Sans',
     pos=(0, 0.17),     letterHeight=0.025,
     size=(1, 0.2), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='textbox_2',
     autoLog=True,
)
text2_2 = visual.TextStim(win=win, name='text2_2',
    text='What do you expect that the next sentence will be about? Rate the following proposal by adjusting the slider.\n',
    font='Open Sans',
    pos=(0, -0.03), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
proposal1_2 = visual.TextStim(win=win, name='proposal1_2',
    text='about why Kim left the party',
    font='Open Sans',
    pos=(0,-0.13), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
exp_rate1_2 = visual.Slider(win=win, name='exp_rate1_2',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.19), units=None,
    labels=("very unexpected","very expected"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-6, readOnly=False)
continue3_2 = visual.TextBox2(
     win, text='Continue to part 1 of the study', font='Open Sans',
     pos=(0, -0.42),     letterHeight=0.03,
     size=(0.47,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue3_2',
     autoLog=True,
)
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()

# --- Initialize components for Routine "trial_expectedness" ---
read_context_2 = visual.TextBox2(
     win, text='Read the statement in the box.', font='Open Sans',
     pos=(0, 0.35),     letterHeight=0.03,
     size=(1., 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='read_context_2',
     autoLog=True,
)
textbox = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=(0, 0.2),     letterHeight=0.025,
     size=(1, 0.2), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='textbox',
     autoLog=True,
)
text2 = visual.TextStim(win=win, name='text2',
    text='What do you expect that the next sentence will be about? Rate the following proposal by adjusting the slider.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
proposal1 = visual.TextStim(win=win, name='proposal1',
    text='',
    font='Open Sans',
    pos=(0, -0.13), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
exp_rate1 = visual.Slider(win=win, name='exp_rate1',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.19), units=None,
    labels=("very unexpected","very expected"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-4, readOnly=False)
continue3 = visual.TextBox2(
     win, text='Continue', font='Open Sans',
     pos=(0, -0.42),     letterHeight=0.03,
     size=(0.17,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue3',
     autoLog=True,
)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# --- Initialize components for Routine "block2" ---
logo5 = visual.ImageStim(
    win=win,
    name='logo5', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text_3 = visual.TextStim(win=win, name='text_3',
    text='You are now entering part 2 of the study!\n',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
intro_block2 = visual.TextBox2(
     win, text='Remember: In this part you will read the same statements from the previous part again but with one more sentence. You will evaluate whether the speaker is certain about something.\nClick "Continue" to go through a practice trial.', font='Open Sans',
     pos=(0, -0.15),     letterHeight=0.025,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='intro_block2',
     autoLog=True,
)
continue6 = visual.TextBox2(
     win, text='Continue', font='Open Sans',
     pos=(0, -0.3),     letterHeight=0.03,
     size=(0.17,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue6',
     autoLog=True,
)
mouse_5 = event.Mouse(win=win)
x, y = [None, None]
mouse_5.mouseClock = core.Clock()

# --- Initialize components for Routine "practice_trial2" ---
logo6 = visual.ImageStim(
    win=win,
    name='logo6', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Heading_5 = visual.TextStim(win=win, name='Heading_5',
    text='PRACTICE',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
read_context_4 = visual.TextBox2(
     win, text='Read the statement in the box.', font='Open Sans',
     pos=(0, 0.29),     letterHeight=0.025,
     size=(1., 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='read_context_4',
     autoLog=True,
)
textbox_5 = visual.TextBox2(
     win, text='Julia said: Kim was at the party yesterday. I had a lot of fun with her. But then she suddenly left. I guess she had met a guy.', font='Open Sans',
     pos=(0, 0.17),     letterHeight=0.025,
     size=(1, 0.2), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='textbox_5',
     autoLog=True,
)
task1_2 = visual.TextBox2(
     win, text='Is Julia certain that Kim met a guy? Please adjust the slider.', font='Open Sans',
     pos=(0, -0.03),     letterHeight=0.025,
     size=(1., 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='task1_2',
     autoLog=True,
)
certainty_rate_2 = visual.Slider(win=win, name='certainty_rate_2',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.13), units=None,
    labels=("no","yes"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-5, readOnly=False)
continue3_5 = visual.TextBox2(
     win, text='Continue to part 2 of the study', font='Open Sans',
     pos=(0, -0.3),     letterHeight=0.03,
     size=(0.47,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue3_5',
     autoLog=True,
)
mouse_8 = event.Mouse(win=win)
x, y = [None, None]
mouse_8.mouseClock = core.Clock()

# --- Initialize components for Routine "trial_certainty" ---
read_context = visual.TextBox2(
     win, text='Read the statement in the box.', font='Open Sans',
     pos=(0, 0.35),     letterHeight=0.03,
     size=(1., 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='read_context',
     autoLog=True,
)
textbox_4 = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=(0, 0.2),     letterHeight=0.025,
     size=(1, 0.2), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='textbox_4',
     autoLog=True,
)
task1 = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1., 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='task1',
     autoLog=True,
)
certainty_rate = visual.Slider(win=win, name='certainty_rate',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.1), units=None,
    labels=("no","yes"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-3, readOnly=False)
continue3_4 = visual.TextBox2(
     win, text='Continue', font='Open Sans',
     pos=(0, -0.3),     letterHeight=0.03,
     size=(0.17,0.035), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue3_4',
     autoLog=True,
)
mouse_7 = event.Mouse(win=win)
x, y = [None, None]
mouse_7.mouseClock = core.Clock()

# --- Initialize components for Routine "demographics" ---
logo7 = visual.ImageStim(
    win=win,
    name='logo7', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Heading_4 = visual.TextStim(win=win, name='Heading_4',
    text='DEMOGRAPHICS',
    font='Open Sans',
    pos=(0, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
age = visual.TextStim(win=win, name='age',
    text='Your age:',
    font='Open Sans',
    pos=(-0.3, 0.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
age_enter = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0.2),     letterHeight=0.03,
     size=(0.6, 0.04), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center-left',
     fillColor='white', borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='age_enter',
     autoLog=True,
)
gender = visual.TextStim(win=win, name='gender',
    text='Your gender:',
    font='Open Sans',
    pos=(-0.3, 0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
gender_slider = visual.Slider(win=win, name='gender_slider',
    startValue=None, size=(0.4, 0.03), pos=(0.3, 0.1), units=None,
    labels=["female", "male", "non-binary", "other"], ticks=(1, 2, 3, 4), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.03,
    flip=False, ori=0.0, depth=-5, readOnly=False)
native_lang = visual.TextStim(win=win, name='native_lang',
    text='Native language(s) (spoken at home\nwhen you were a child):',
    font='Open Sans',
    pos=(-0.4, -0.05), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
lang_enter = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, -0.05),     letterHeight=0.03,
     size=(0.6, 0.04), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center-left',
     fillColor='white', borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='lang_enter',
     autoLog=True,
)
finish_comment = visual.TextBox2(
     win, text='After clicking on "Back to Prolific", you will have to click "ok" one more time in order to be redirected to Prolific.', font='Open Sans',
     pos=(0, -0.3),     letterHeight=0.025,
     size=(1.0, 0.05), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='finish_comment',
     autoLog=True,
)
continue4 = visual.TextBox2(
     win, text='Back to Prolific', font='Open Sans',
     pos=(0, -0.4),     letterHeight=0.03,
     size=(0.35,0.04), borderWidth=4.0,
     color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[1.0000, 1.0000, 1.0000], borderColor=[-1.0000, 0.0039, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='continue4',
     autoLog=True,
)
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "instructions" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
introduction.reset()
introduction_2.reset()
introduction_3.reset()
continue1.reset()
# setup some python lists for storing info about the mouse
mouse.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionsComponents = [logo1, text_instr, introduction, introduction_2, introduction_3, continue1, mouse]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instructions" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo1* updates
    if logo1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo1.frameNStart = frameN  # exact frame index
        logo1.tStart = t  # local t and not account for scr refresh
        logo1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo1, 'tStartRefresh')  # time at next scr refresh
        logo1.setAutoDraw(True)
    
    # *text_instr* updates
    if text_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instr.frameNStart = frameN  # exact frame index
        text_instr.tStart = t  # local t and not account for scr refresh
        text_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instr, 'tStartRefresh')  # time at next scr refresh
        text_instr.setAutoDraw(True)
    
    # *introduction* updates
    if introduction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction.frameNStart = frameN  # exact frame index
        introduction.tStart = t  # local t and not account for scr refresh
        introduction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction, 'tStartRefresh')  # time at next scr refresh
        introduction.setAutoDraw(True)
    
    # *introduction_2* updates
    if introduction_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_2.frameNStart = frameN  # exact frame index
        introduction_2.tStart = t  # local t and not account for scr refresh
        introduction_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_2, 'tStartRefresh')  # time at next scr refresh
        introduction_2.setAutoDraw(True)
    
    # *introduction_3* updates
    if introduction_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_3.frameNStart = frameN  # exact frame index
        introduction_3.tStart = t  # local t and not account for scr refresh
        introduction_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_3, 'tStartRefresh')  # time at next scr refresh
        introduction_3.setAutoDraw(True)
    
    # *continue1* updates
    if continue1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue1.frameNStart = frameN  # exact frame index
        continue1.tStart = t  # local t and not account for scr refresh
        continue1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue1, 'tStartRefresh')  # time at next scr refresh
        continue1.setAutoDraw(True)
    # *mouse* updates
    if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse.frameNStart = frameN  # exact frame index
        mouse.tStart = t  # local t and not account for scr refresh
        mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
        mouse.status = STARTED
        mouse.mouseClock.reset()
        prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
    if mouse.status == STARTED:  # only update if started and not finished!
        buttons = mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue1)
                    clickableList = continue1
                except:
                    clickableList = [continue1]
                for obj in clickableList:
                    if obj.contains(mouse):
                        gotValidClick = True
                        mouse.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instructions" ---
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
consent_text.reset()
continue2.reset()
# setup some python lists for storing info about the mouse_consent
mouse_consent.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
consentComponents = [logo2, Heading, consent_text, continue2, mouse_consent]
for thisComponent in consentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo2* updates
    if logo2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo2.frameNStart = frameN  # exact frame index
        logo2.tStart = t  # local t and not account for scr refresh
        logo2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo2, 'tStartRefresh')  # time at next scr refresh
        logo2.setAutoDraw(True)
    
    # *Heading* updates
    if Heading.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Heading.frameNStart = frameN  # exact frame index
        Heading.tStart = t  # local t and not account for scr refresh
        Heading.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Heading, 'tStartRefresh')  # time at next scr refresh
        Heading.setAutoDraw(True)
    
    # *consent_text* updates
    if consent_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_text.frameNStart = frameN  # exact frame index
        consent_text.tStart = t  # local t and not account for scr refresh
        consent_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_text, 'tStartRefresh')  # time at next scr refresh
        consent_text.setAutoDraw(True)
    
    # *continue2* updates
    if continue2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue2.frameNStart = frameN  # exact frame index
        continue2.tStart = t  # local t and not account for scr refresh
        continue2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue2, 'tStartRefresh')  # time at next scr refresh
        continue2.setAutoDraw(True)
    # *mouse_consent* updates
    if mouse_consent.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_consent.frameNStart = frameN  # exact frame index
        mouse_consent.tStart = t  # local t and not account for scr refresh
        mouse_consent.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_consent, 'tStartRefresh')  # time at next scr refresh
        mouse_consent.status = STARTED
        mouse_consent.mouseClock.reset()
        prevButtonState = mouse_consent.getPressed()  # if button is down already this ISN'T a new click
    if mouse_consent.status == STARTED:  # only update if started and not finished!
        buttons = mouse_consent.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue2)
                    clickableList = continue2
                except:
                    clickableList = [continue2]
                for obj in clickableList:
                    if obj.contains(mouse_consent):
                        gotValidClick = True
                        mouse_consent.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent" ---
for thisComponent in consentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "consent" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "block1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
intro_block2_2.reset()
continue6_2.reset()
# setup some python lists for storing info about the mouse_9
mouse_9.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
block1Components = [logo3, text_5, intro_block2_2, continue6_2, mouse_9]
for thisComponent in block1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "block1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo3* updates
    if logo3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo3.frameNStart = frameN  # exact frame index
        logo3.tStart = t  # local t and not account for scr refresh
        logo3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo3, 'tStartRefresh')  # time at next scr refresh
        logo3.setAutoDraw(True)
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *intro_block2_2* updates
    if intro_block2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_block2_2.frameNStart = frameN  # exact frame index
        intro_block2_2.tStart = t  # local t and not account for scr refresh
        intro_block2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_block2_2, 'tStartRefresh')  # time at next scr refresh
        intro_block2_2.setAutoDraw(True)
    
    # *continue6_2* updates
    if continue6_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue6_2.frameNStart = frameN  # exact frame index
        continue6_2.tStart = t  # local t and not account for scr refresh
        continue6_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue6_2, 'tStartRefresh')  # time at next scr refresh
        continue6_2.setAutoDraw(True)
    # *mouse_9* updates
    if mouse_9.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_9.frameNStart = frameN  # exact frame index
        mouse_9.tStart = t  # local t and not account for scr refresh
        mouse_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_9, 'tStartRefresh')  # time at next scr refresh
        mouse_9.status = STARTED
        mouse_9.mouseClock.reset()
        prevButtonState = mouse_9.getPressed()  # if button is down already this ISN'T a new click
    if mouse_9.status == STARTED:  # only update if started and not finished!
        buttons = mouse_9.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue6_2)
                    clickableList = continue6_2
                except:
                    clickableList = [continue6_2]
                for obj in clickableList:
                    if obj.contains(mouse_9):
                        gotValidClick = True
                        mouse_9.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in block1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "block1" ---
for thisComponent in block1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "block1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "practice_trial1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
read_context_3.reset()
textbox_2.reset()
exp_rate1_2.reset()
continue3_2.reset()
# setup some python lists for storing info about the mouse_4
mouse_4.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
practice_trial1Components = [logo4, Heading_3, read_context_3, textbox_2, text2_2, proposal1_2, exp_rate1_2, continue3_2, mouse_4]
for thisComponent in practice_trial1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "practice_trial1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo4* updates
    if logo4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo4.frameNStart = frameN  # exact frame index
        logo4.tStart = t  # local t and not account for scr refresh
        logo4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo4, 'tStartRefresh')  # time at next scr refresh
        logo4.setAutoDraw(True)
    
    # *Heading_3* updates
    if Heading_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Heading_3.frameNStart = frameN  # exact frame index
        Heading_3.tStart = t  # local t and not account for scr refresh
        Heading_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Heading_3, 'tStartRefresh')  # time at next scr refresh
        Heading_3.setAutoDraw(True)
    
    # *read_context_3* updates
    if read_context_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        read_context_3.frameNStart = frameN  # exact frame index
        read_context_3.tStart = t  # local t and not account for scr refresh
        read_context_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(read_context_3, 'tStartRefresh')  # time at next scr refresh
        read_context_3.setAutoDraw(True)
    
    # *textbox_2* updates
    if textbox_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_2.frameNStart = frameN  # exact frame index
        textbox_2.tStart = t  # local t and not account for scr refresh
        textbox_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_2, 'tStartRefresh')  # time at next scr refresh
        textbox_2.setAutoDraw(True)
    
    # *text2_2* updates
    if text2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text2_2.frameNStart = frameN  # exact frame index
        text2_2.tStart = t  # local t and not account for scr refresh
        text2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text2_2, 'tStartRefresh')  # time at next scr refresh
        text2_2.setAutoDraw(True)
    
    # *proposal1_2* updates
    if proposal1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        proposal1_2.frameNStart = frameN  # exact frame index
        proposal1_2.tStart = t  # local t and not account for scr refresh
        proposal1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(proposal1_2, 'tStartRefresh')  # time at next scr refresh
        proposal1_2.setAutoDraw(True)
    
    # *exp_rate1_2* updates
    if exp_rate1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp_rate1_2.frameNStart = frameN  # exact frame index
        exp_rate1_2.tStart = t  # local t and not account for scr refresh
        exp_rate1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp_rate1_2, 'tStartRefresh')  # time at next scr refresh
        exp_rate1_2.setAutoDraw(True)
    
    # *continue3_2* updates
    if continue3_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue3_2.frameNStart = frameN  # exact frame index
        continue3_2.tStart = t  # local t and not account for scr refresh
        continue3_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue3_2, 'tStartRefresh')  # time at next scr refresh
        continue3_2.setAutoDraw(True)
    # *mouse_4* updates
    if mouse_4.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_4.frameNStart = frameN  # exact frame index
        mouse_4.tStart = t  # local t and not account for scr refresh
        mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
        mouse_4.status = STARTED
        mouse_4.mouseClock.reset()
        prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
    if mouse_4.status == STARTED:  # only update if started and not finished!
        buttons = mouse_4.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue3_2)
                    clickableList = continue3_2
                except:
                    clickableList = [continue3_2]
                for obj in clickableList:
                    if obj.contains(mouse_4):
                        gotValidClick = True
                        mouse_4.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_trial1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "practice_trial1" ---
for thisComponent in practice_trial1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "practice_trial1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_block1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('input1.xlsx'),
    seed=None, name='trials_block1')
thisExp.addLoop(trials_block1)  # add the loop to the experiment
thisTrials_block1 = trials_block1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_block1.rgb)
if thisTrials_block1 != None:
    for paramName in thisTrials_block1:
        exec('{} = thisTrials_block1[paramName]'.format(paramName))

for thisTrials_block1 in trials_block1:
    currentLoop = trials_block1
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_block1.rgb)
    if thisTrials_block1 != None:
        for paramName in thisTrials_block1:
            exec('{} = thisTrials_block1[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial_expectedness" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    read_context_2.reset()
    textbox.reset()
    textbox.setText(context)
    proposal1.setText(question)
    exp_rate1.reset()
    continue3.reset()
    # setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trial_expectednessComponents = [read_context_2, textbox, text2, proposal1, exp_rate1, continue3, mouse_2]
    for thisComponent in trial_expectednessComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial_expectedness" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *read_context_2* updates
        if read_context_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            read_context_2.frameNStart = frameN  # exact frame index
            read_context_2.tStart = t  # local t and not account for scr refresh
            read_context_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(read_context_2, 'tStartRefresh')  # time at next scr refresh
            read_context_2.setAutoDraw(True)
        
        # *textbox* updates
        if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox.frameNStart = frameN  # exact frame index
            textbox.tStart = t  # local t and not account for scr refresh
            textbox.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
            textbox.setAutoDraw(True)
        
        # *text2* updates
        if text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text2.frameNStart = frameN  # exact frame index
            text2.tStart = t  # local t and not account for scr refresh
            text2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text2, 'tStartRefresh')  # time at next scr refresh
            text2.setAutoDraw(True)
        
        # *proposal1* updates
        if proposal1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            proposal1.frameNStart = frameN  # exact frame index
            proposal1.tStart = t  # local t and not account for scr refresh
            proposal1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(proposal1, 'tStartRefresh')  # time at next scr refresh
            proposal1.setAutoDraw(True)
        
        # *exp_rate1* updates
        if exp_rate1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp_rate1.frameNStart = frameN  # exact frame index
            exp_rate1.tStart = t  # local t and not account for scr refresh
            exp_rate1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_rate1, 'tStartRefresh')  # time at next scr refresh
            exp_rate1.setAutoDraw(True)
        
        # *continue3* updates
        if continue3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            continue3.frameNStart = frameN  # exact frame index
            continue3.tStart = t  # local t and not account for scr refresh
            continue3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continue3, 'tStartRefresh')  # time at next scr refresh
            continue3.setAutoDraw(True)
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(continue3)
                        clickableList = continue3
                    except:
                        clickableList = [continue3]
                    for obj in clickableList:
                        if obj.contains(mouse_2):
                            gotValidClick = True
                            mouse_2.clicked_name.append(obj.name)
                    if gotValidClick:  
                        continueRoutine = False  # abort routine on response
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_expectednessComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_expectedness" ---
    for thisComponent in trial_expectednessComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_block1.addData('exp_rate1.response', exp_rate1.getRating())
    # store data for trials_block1 (TrialHandler)
    # the Routine "trial_expectedness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_block1'


# --- Prepare to start Routine "block2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
intro_block2.reset()
continue6.reset()
# setup some python lists for storing info about the mouse_5
mouse_5.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
block2Components = [logo5, text_3, intro_block2, continue6, mouse_5]
for thisComponent in block2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "block2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo5* updates
    if logo5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo5.frameNStart = frameN  # exact frame index
        logo5.tStart = t  # local t and not account for scr refresh
        logo5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo5, 'tStartRefresh')  # time at next scr refresh
        logo5.setAutoDraw(True)
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # *intro_block2* updates
    if intro_block2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_block2.frameNStart = frameN  # exact frame index
        intro_block2.tStart = t  # local t and not account for scr refresh
        intro_block2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_block2, 'tStartRefresh')  # time at next scr refresh
        intro_block2.setAutoDraw(True)
    
    # *continue6* updates
    if continue6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue6.frameNStart = frameN  # exact frame index
        continue6.tStart = t  # local t and not account for scr refresh
        continue6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue6, 'tStartRefresh')  # time at next scr refresh
        continue6.setAutoDraw(True)
    # *mouse_5* updates
    if mouse_5.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_5.frameNStart = frameN  # exact frame index
        mouse_5.tStart = t  # local t and not account for scr refresh
        mouse_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_5, 'tStartRefresh')  # time at next scr refresh
        mouse_5.status = STARTED
        mouse_5.mouseClock.reset()
        prevButtonState = mouse_5.getPressed()  # if button is down already this ISN'T a new click
    if mouse_5.status == STARTED:  # only update if started and not finished!
        buttons = mouse_5.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue6)
                    clickableList = continue6
                except:
                    clickableList = [continue6]
                for obj in clickableList:
                    if obj.contains(mouse_5):
                        gotValidClick = True
                        mouse_5.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in block2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "block2" ---
for thisComponent in block2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "block2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "practice_trial2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
read_context_4.reset()
textbox_5.reset()
task1_2.reset()
certainty_rate_2.reset()
continue3_5.reset()
# setup some python lists for storing info about the mouse_8
mouse_8.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
practice_trial2Components = [logo6, Heading_5, read_context_4, textbox_5, task1_2, certainty_rate_2, continue3_5, mouse_8]
for thisComponent in practice_trial2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "practice_trial2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo6* updates
    if logo6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo6.frameNStart = frameN  # exact frame index
        logo6.tStart = t  # local t and not account for scr refresh
        logo6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo6, 'tStartRefresh')  # time at next scr refresh
        logo6.setAutoDraw(True)
    
    # *Heading_5* updates
    if Heading_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Heading_5.frameNStart = frameN  # exact frame index
        Heading_5.tStart = t  # local t and not account for scr refresh
        Heading_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Heading_5, 'tStartRefresh')  # time at next scr refresh
        Heading_5.setAutoDraw(True)
    
    # *read_context_4* updates
    if read_context_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        read_context_4.frameNStart = frameN  # exact frame index
        read_context_4.tStart = t  # local t and not account for scr refresh
        read_context_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(read_context_4, 'tStartRefresh')  # time at next scr refresh
        read_context_4.setAutoDraw(True)
    
    # *textbox_5* updates
    if textbox_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_5.frameNStart = frameN  # exact frame index
        textbox_5.tStart = t  # local t and not account for scr refresh
        textbox_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_5, 'tStartRefresh')  # time at next scr refresh
        textbox_5.setAutoDraw(True)
    
    # *task1_2* updates
    if task1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        task1_2.frameNStart = frameN  # exact frame index
        task1_2.tStart = t  # local t and not account for scr refresh
        task1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(task1_2, 'tStartRefresh')  # time at next scr refresh
        task1_2.setAutoDraw(True)
    
    # *certainty_rate_2* updates
    if certainty_rate_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        certainty_rate_2.frameNStart = frameN  # exact frame index
        certainty_rate_2.tStart = t  # local t and not account for scr refresh
        certainty_rate_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(certainty_rate_2, 'tStartRefresh')  # time at next scr refresh
        certainty_rate_2.setAutoDraw(True)
    
    # *continue3_5* updates
    if continue3_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue3_5.frameNStart = frameN  # exact frame index
        continue3_5.tStart = t  # local t and not account for scr refresh
        continue3_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue3_5, 'tStartRefresh')  # time at next scr refresh
        continue3_5.setAutoDraw(True)
    # *mouse_8* updates
    if mouse_8.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_8.frameNStart = frameN  # exact frame index
        mouse_8.tStart = t  # local t and not account for scr refresh
        mouse_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_8, 'tStartRefresh')  # time at next scr refresh
        mouse_8.status = STARTED
        mouse_8.mouseClock.reset()
        prevButtonState = mouse_8.getPressed()  # if button is down already this ISN'T a new click
    if mouse_8.status == STARTED:  # only update if started and not finished!
        buttons = mouse_8.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue3_5)
                    clickableList = continue3_5
                except:
                    clickableList = [continue3_5]
                for obj in clickableList:
                    if obj.contains(mouse_8):
                        gotValidClick = True
                        mouse_8.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_trial2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "practice_trial2" ---
for thisComponent in practice_trial2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "practice_trial2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_block2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('input2.xlsx'),
    seed=None, name='trials_block2')
thisExp.addLoop(trials_block2)  # add the loop to the experiment
thisTrials_block2 = trials_block2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_block2.rgb)
if thisTrials_block2 != None:
    for paramName in thisTrials_block2:
        exec('{} = thisTrials_block2[paramName]'.format(paramName))

for thisTrials_block2 in trials_block2:
    currentLoop = trials_block2
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_block2.rgb)
    if thisTrials_block2 != None:
        for paramName in thisTrials_block2:
            exec('{} = thisTrials_block2[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial_certainty" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    read_context.reset()
    textbox_4.reset()
    textbox_4.setText(context)
    task1.reset()
    task1.setText(target)
    certainty_rate.reset()
    continue3_4.reset()
    # setup some python lists for storing info about the mouse_7
    mouse_7.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trial_certaintyComponents = [read_context, textbox_4, task1, certainty_rate, continue3_4, mouse_7]
    for thisComponent in trial_certaintyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial_certainty" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *read_context* updates
        if read_context.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            read_context.frameNStart = frameN  # exact frame index
            read_context.tStart = t  # local t and not account for scr refresh
            read_context.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(read_context, 'tStartRefresh')  # time at next scr refresh
            read_context.setAutoDraw(True)
        
        # *textbox_4* updates
        if textbox_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox_4.frameNStart = frameN  # exact frame index
            textbox_4.tStart = t  # local t and not account for scr refresh
            textbox_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox_4, 'tStartRefresh')  # time at next scr refresh
            textbox_4.setAutoDraw(True)
        
        # *task1* updates
        if task1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            task1.frameNStart = frameN  # exact frame index
            task1.tStart = t  # local t and not account for scr refresh
            task1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(task1, 'tStartRefresh')  # time at next scr refresh
            task1.setAutoDraw(True)
        
        # *certainty_rate* updates
        if certainty_rate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            certainty_rate.frameNStart = frameN  # exact frame index
            certainty_rate.tStart = t  # local t and not account for scr refresh
            certainty_rate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(certainty_rate, 'tStartRefresh')  # time at next scr refresh
            certainty_rate.setAutoDraw(True)
        
        # *continue3_4* updates
        if continue3_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            continue3_4.frameNStart = frameN  # exact frame index
            continue3_4.tStart = t  # local t and not account for scr refresh
            continue3_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continue3_4, 'tStartRefresh')  # time at next scr refresh
            continue3_4.setAutoDraw(True)
        # *mouse_7* updates
        if mouse_7.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_7.frameNStart = frameN  # exact frame index
            mouse_7.tStart = t  # local t and not account for scr refresh
            mouse_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_7, 'tStartRefresh')  # time at next scr refresh
            mouse_7.status = STARTED
            mouse_7.mouseClock.reset()
            prevButtonState = mouse_7.getPressed()  # if button is down already this ISN'T a new click
        if mouse_7.status == STARTED:  # only update if started and not finished!
            buttons = mouse_7.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(continue3_4)
                        clickableList = continue3_4
                    except:
                        clickableList = [continue3_4]
                    for obj in clickableList:
                        if obj.contains(mouse_7):
                            gotValidClick = True
                            mouse_7.clicked_name.append(obj.name)
                    if gotValidClick:  
                        continueRoutine = False  # abort routine on response
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_certaintyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_certainty" ---
    for thisComponent in trial_certaintyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_block2.addData('certainty_rate.response', certainty_rate.getRating())
    # store data for trials_block2 (TrialHandler)
    # the Routine "trial_certainty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_block2'


# --- Prepare to start Routine "demographics" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
age_enter.reset()
gender_slider.reset()
lang_enter.reset()
finish_comment.reset()
continue4.reset()
# setup some python lists for storing info about the mouse_3
mouse_3.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
demographicsComponents = [logo7, Heading_4, age, age_enter, gender, gender_slider, native_lang, lang_enter, finish_comment, continue4, mouse_3]
for thisComponent in demographicsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "demographics" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *logo7* updates
    if logo7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo7.frameNStart = frameN  # exact frame index
        logo7.tStart = t  # local t and not account for scr refresh
        logo7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo7, 'tStartRefresh')  # time at next scr refresh
        logo7.setAutoDraw(True)
    
    # *Heading_4* updates
    if Heading_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Heading_4.frameNStart = frameN  # exact frame index
        Heading_4.tStart = t  # local t and not account for scr refresh
        Heading_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Heading_4, 'tStartRefresh')  # time at next scr refresh
        Heading_4.setAutoDraw(True)
    
    # *age* updates
    if age.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        age.frameNStart = frameN  # exact frame index
        age.tStart = t  # local t and not account for scr refresh
        age.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age, 'tStartRefresh')  # time at next scr refresh
        age.setAutoDraw(True)
    
    # *age_enter* updates
    if age_enter.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        age_enter.frameNStart = frameN  # exact frame index
        age_enter.tStart = t  # local t and not account for scr refresh
        age_enter.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age_enter, 'tStartRefresh')  # time at next scr refresh
        age_enter.setAutoDraw(True)
    
    # *gender* updates
    if gender.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender.frameNStart = frameN  # exact frame index
        gender.tStart = t  # local t and not account for scr refresh
        gender.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender, 'tStartRefresh')  # time at next scr refresh
        gender.setAutoDraw(True)
    
    # *gender_slider* updates
    if gender_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender_slider.frameNStart = frameN  # exact frame index
        gender_slider.tStart = t  # local t and not account for scr refresh
        gender_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender_slider, 'tStartRefresh')  # time at next scr refresh
        gender_slider.setAutoDraw(True)
    
    # *native_lang* updates
    if native_lang.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        native_lang.frameNStart = frameN  # exact frame index
        native_lang.tStart = t  # local t and not account for scr refresh
        native_lang.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(native_lang, 'tStartRefresh')  # time at next scr refresh
        native_lang.setAutoDraw(True)
    
    # *lang_enter* updates
    if lang_enter.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        lang_enter.frameNStart = frameN  # exact frame index
        lang_enter.tStart = t  # local t and not account for scr refresh
        lang_enter.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lang_enter, 'tStartRefresh')  # time at next scr refresh
        lang_enter.setAutoDraw(True)
    
    # *finish_comment* updates
    if finish_comment.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        finish_comment.frameNStart = frameN  # exact frame index
        finish_comment.tStart = t  # local t and not account for scr refresh
        finish_comment.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(finish_comment, 'tStartRefresh')  # time at next scr refresh
        finish_comment.setAutoDraw(True)
    
    # *continue4* updates
    if continue4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue4.frameNStart = frameN  # exact frame index
        continue4.tStart = t  # local t and not account for scr refresh
        continue4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue4, 'tStartRefresh')  # time at next scr refresh
        continue4.setAutoDraw(True)
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        mouse_3.status = STARTED
        mouse_3.mouseClock.reset()
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue4)
                    clickableList = continue4
                except:
                    clickableList = [continue4]
                for obj in clickableList:
                    if obj.contains(mouse_3):
                        gotValidClick = True
                        mouse_3.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in demographicsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "demographics" ---
for thisComponent in demographicsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('age_enter.text',age_enter.text)
thisExp.addData('gender_slider.response', gender_slider.getRating())
thisExp.addData('lang_enter.text',lang_enter.text)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "demographics" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
