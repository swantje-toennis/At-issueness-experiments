#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on August 09, 2023, at 11:45
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
expName = 'aboutness'  # from the Builder filename that created this script
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
    originPath='C:\\Users\\Swantje\\Desktop\\At-issueness\\q-evoke experiment\\at-issue_expectedness_projection\\at-issueness-expectations\\experiments\\pilot\\preference_nrrc\\list2\\nrrc_pilot2_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
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
logo1_2 = visual.ImageStim(
    win=win,
    name='logo1_2', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text_instr_2 = visual.TextStim(win=win, name='text_instr_2',
    text='Welcome to our study!',
    font='Open Sans',
    pos=(0, 0.4), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
introduction_4 = visual.TextBox2(
     win, text='The goal of this study is to investigate how humans understand English utterances. The study consists of two parts. In both parts, you will read one statement by a speaker. Here is an example:', font='Open Sans',
     pos=(0, 0.35),     letterHeight=0.03,
     size=(0.9, 0.2), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='top-center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='introduction_4',
     autoLog=True,
)
introduction_5 = visual.TextBox2(
     win, text='Phil said: I went shopping last Tuesday.', font='Open Sans',
     pos=(0, 0.18),     letterHeight=0.03,
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
     name='introduction_5',
     autoLog=True,
)
introduction_6 = visual.TextBox2(
     win, text='In part 1, we are interested in understanding what the speaker might say next (e.g., Phil might talk about the things he bought). We will make 2 proposals and ask you to rate how expected they are. \n\nIn part 2, you will see the statement again, but we will show 2 sentences the speaker could say next. Phil, for instance, could say next: "I bought a blue fake leather jacket." We will ask you which of the 2 sentences you prefer as a continuation of Phil\'s statement.\n\nEach part will start with one practice trial to get you acquainted with the procedure. At the end of the study, we will ask you for your demographic information. Please pay close attention during your participation! The study should take approximately 2 minutes. ', font='Open Sans',
     pos=(0, 0.05),     letterHeight=0.03,
     size=(0.9, 0.4), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='top-center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='introduction_6',
     autoLog=True,
)
continue1_2 = visual.TextBox2(
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
     name='continue1_2',
     autoLog=True,
)
mouse_6 = event.Mouse(win=win)
x, y = [None, None]
mouse_6.mouseClock = core.Clock()

# --- Initialize components for Routine "consent" ---
logo2_2 = visual.ImageStim(
    win=win,
    name='logo2_2', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Heading_2 = visual.TextStim(win=win, name='Heading_2',
    text='CONSENT',
    font='Open Sans',
    pos=(0, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
consent_text_2 = visual.TextBox2(
     win, text='By clicking on the "I want to participate"-button below you agree to participate in this study, which is conducted by researchers at the University of Stuttgart. You may withdraw from this study at any time without penalty or loss of benefits, including loss or reduction of payment. If you do withdraw from the study before the end, please contact the researchers for information on how to collect payment (swantje.toennis@ling.uni-stuttgart.de). The data collected will be anonymous and confidential. You give permission for your data from this study to be shared with other researchers. If you have any questions, you may contact the requester through Prolific\'s platform or via email (swantje.toennis@ling.uni-stuttgart.de). ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(0.9, 1), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='consent_text_2',
     autoLog=True,
)
continue2_2 = visual.TextBox2(
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
     name='continue2_2',
     autoLog=True,
)
mouse_consent_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_consent_2.mouseClock = core.Clock()

# --- Initialize components for Routine "block1" ---
logo3_2 = visual.ImageStim(
    win=win,
    name='logo3_2', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text = visual.TextStim(win=win, name='text',
    text='You are now entering part 1 of the study!\n',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
intro_block2_3 = visual.TextBox2(
     win, text='Remember: In this part you will read a statement by a speaker and will indicate what you expect her/him to say  in the next sentence.\nClick "Continue" to go through a practice trial.', font='Open Sans',
     pos=(0, -0.15),     letterHeight=0.03,
     size=(1, 0.2), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='intro_block2_3',
     autoLog=True,
)
continue6_3 = visual.TextBox2(
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
     name='continue6_3',
     autoLog=True,
)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

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
text2_2 = visual.TextStim(win=win, name='text2_2',
    text='What do you expect that the next sentence will be about? Rate the following proposals by adjusting the sliders.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
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
     win, text='Julia said: Kim was at the party yesterday.', font='Open Sans',
     pos=(0, 0.17),     letterHeight=0.03,
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
proposal1_3 = visual.TextStim(win=win, name='proposal1_3',
    text='about when Kim left the party',
    font='Open Sans',
    pos=(0, -0.08), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
exp_rate1_2 = visual.Slider(win=win, name='exp_rate1_2',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.14), units=None,
    labels=("very unexpected","very expected"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-6, readOnly=False)
proposal2_2 = visual.TextStim(win=win, name='proposal2_2',
    text='about when the party started',
    font='Open Sans',
    pos=(0, -0.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
exp_rate2_2 = visual.Slider(win=win, name='exp_rate2_2',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.31), units=None,
    labels=("very unexpected","very expected"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-8, readOnly=False)
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

# --- Initialize components for Routine "trial_exp" ---
# Run 'Begin Experiment' code from code_randomize
import random, copy
from random import randint
from decimal import *

#create list of positions for proposal text:
master_positions=[[0,-0.08],[0,-0.25]]
positions = copy.deepcopy(master_positions)
read_context_2 = visual.TextBox2(
     win, text='Read the statement in the box. ', font='Open Sans',
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
     pos=(0, 0.2),     letterHeight=0.03,
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
    text='What do you expect that the next sentence will be about? Rate the following proposals by adjusting the sliders.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
proposal1 = visual.TextStim(win=win, name='proposal1',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
exp1 = visual.Slider(win=win, name='exp1',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.14), units=None,
    labels=("very unexpected","very expected"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-5, readOnly=False)
proposal2 = visual.TextStim(win=win, name='proposal2',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
exp2 = visual.Slider(win=win, name='exp2',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.31), units=None,
    labels=("very unexpected","very expected"), ticks=(0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-7, readOnly=False)
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
logo5_2 = visual.ImageStim(
    win=win,
    name='logo5_2', 
    image='logo.png', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0.4), size=(0.4, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text_4 = visual.TextStim(win=win, name='text_4',
    text='You are now entering part 2 of the study!\n',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
intro_block2_2 = visual.TextBox2(
     win, text='Remember: In this part you will read the same statement from the previous part again. We will present two continuations for the statement (marked with A and B), and we will ask you to tell us which one you prefer and how strongly.\nClick "Continue" to go through a practice trial.', font='Open Sans',
     pos=(0, -0.15),     letterHeight=0.03,
     size=(1, 0.2), borderWidth=2.0,
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

# --- Initialize components for Routine "practice_trial2" ---
read_context_4 = visual.TextBox2(
     win, text='Read the statement in the box. ', font='Open Sans',
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
     name='read_context_4',
     autoLog=True,
)
textbox_4 = visual.TextBox2(
     win, text='George said: Before the movie started Alice kissed Bob.', font='Open Sans',
     pos=(0, 0.25),     letterHeight=0.03,
     size=(1, 0.1), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='textbox_4',
     autoLog=True,
)
text2_4 = visual.TextStim(win=win, name='text2_4',
    text="Which out of sentence A and B do you prefer as the next sentence of George's statement?\n",
    font='Open Sans',
    pos=(0, 0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
A_2 = visual.TextBox2(
     win, text='A', font='Open Sans',
     pos=(-0.5, 0),     letterHeight=0.03,
     size=(0.05, 0.05), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='A_2',
     autoLog=True,
)
cont_mc_2 = visual.TextBox2(
     win, text='Afterwards Bob kissed Alice.', font='Open Sans',
     pos=(0,0),     letterHeight=0.03,
     size=(0.9, 0.05), borderWidth=0.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=None, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[0.0000, 0.0000, 0.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='cont_mc_2',
     autoLog=True,
)
B_2 = visual.TextBox2(
     win, text='B', font='Open Sans',
     pos=(-0.5, -0.1),     letterHeight=0.03,
     size=(0.05, 0.05), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='B_2',
     autoLog=True,
)
cont_rc_2 = visual.TextBox2(
     win, text='Afterwards Alice kissed Bob.', font='Open Sans',
     pos=(0,-0.1),     letterHeight=0.03,
     size=(0.9, 0.05), borderWidth=0.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[0.0000, 0.0000, 0.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='cont_rc_2',
     autoLog=True,
)
pref_2 = visual.Slider(win=win, name='pref_2',
    startValue=0.5, size=(1.0, 0.03), pos=(0, -0.25), units=None,
    labels=("A much better", "both equally good", "B much better"), ticks=(0,0.5,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-7, readOnly=False)
continue3_5 = visual.TextBox2(
     win, text='Continue to part 2 of the study', font='Open Sans',
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
     name='continue3_5',
     autoLog=True,
)
mouse_7 = event.Mouse(win=win)
x, y = [None, None]
mouse_7.mouseClock = core.Clock()

# --- Initialize components for Routine "trial_preference" ---
# Run 'Begin Experiment' code from code_randomize_2
import random, copy
from random import randint
from decimal import *

#create list of positions for proposal text:
master_positions2=[[0,0],[0,-0.1]]
positions2 = copy.deepcopy(master_positions2)
read_context = visual.TextBox2(
     win, text='Read the statement in the box. ', font='Open Sans',
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
textbox_3 = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=(0, 0.25),     letterHeight=0.03,
     size=(1, 0.1), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='textbox_3',
     autoLog=True,
)
text2_3 = visual.TextStim(win=win, name='text2_3',
    text="Which out of sentence A and B do you prefer as the next sentence of Emma's statement?\n",
    font='Open Sans',
    pos=(0, 0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
A = visual.TextBox2(
     win, text='A', font='Open Sans',
     pos=(-0.5, 0),     letterHeight=0.03,
     size=(0.05, 0.05), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='A',
     autoLog=True,
)
cont_mc = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=[0,0],     letterHeight=0.03,
     size=(0.9, 0.05), borderWidth=0.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=None, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[0.0000, 0.0000, 0.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='cont_mc',
     autoLog=True,
)
B = visual.TextBox2(
     win, text='B', font='Open Sans',
     pos=(-0.5, -0.1),     letterHeight=0.03,
     size=(0.05, 0.05), borderWidth=4.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.2,
     padding=0.02, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='B',
     autoLog=True,
)
cont_rc = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=[0,0],     letterHeight=0.03,
     size=(0.9, 0.05), borderWidth=0.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None, alignment='center-left',
     anchor='center',
     fillColor=[0.0039, 0.0039, 0.0039], borderColor=[0.0000, 0.0000, 0.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='cont_rc',
     autoLog=True,
)
pref = visual.Slider(win=win, name='pref',
    startValue=0, size=(1.0, 0.03), pos=(0, -0.25), units=None,
    labels=("A much better", "both equally good", "B much better"), ticks=(-1,0,1), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, -1.0000, 0.0902], lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-8, readOnly=False)
continue3_3 = visual.TextBox2(
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
     name='continue3_3',
     autoLog=True,
)
mouse_5 = event.Mouse(win=win)
x, y = [None, None]
mouse_5.mouseClock = core.Clock()

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
     pos=(0, -0.3),     letterHeight=0.03,
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
introduction_4.reset()
introduction_5.reset()
introduction_6.reset()
continue1_2.reset()
# setup some python lists for storing info about the mouse_6
mouse_6.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionsComponents = [logo1_2, text_instr_2, introduction_4, introduction_5, introduction_6, continue1_2, mouse_6]
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
    
    # *logo1_2* updates
    if logo1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo1_2.frameNStart = frameN  # exact frame index
        logo1_2.tStart = t  # local t and not account for scr refresh
        logo1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo1_2, 'tStartRefresh')  # time at next scr refresh
        logo1_2.setAutoDraw(True)
    
    # *text_instr_2* updates
    if text_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instr_2.frameNStart = frameN  # exact frame index
        text_instr_2.tStart = t  # local t and not account for scr refresh
        text_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instr_2, 'tStartRefresh')  # time at next scr refresh
        text_instr_2.setAutoDraw(True)
    
    # *introduction_4* updates
    if introduction_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_4.frameNStart = frameN  # exact frame index
        introduction_4.tStart = t  # local t and not account for scr refresh
        introduction_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_4, 'tStartRefresh')  # time at next scr refresh
        introduction_4.setAutoDraw(True)
    
    # *introduction_5* updates
    if introduction_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_5.frameNStart = frameN  # exact frame index
        introduction_5.tStart = t  # local t and not account for scr refresh
        introduction_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_5, 'tStartRefresh')  # time at next scr refresh
        introduction_5.setAutoDraw(True)
    
    # *introduction_6* updates
    if introduction_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        introduction_6.frameNStart = frameN  # exact frame index
        introduction_6.tStart = t  # local t and not account for scr refresh
        introduction_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introduction_6, 'tStartRefresh')  # time at next scr refresh
        introduction_6.setAutoDraw(True)
    
    # *continue1_2* updates
    if continue1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue1_2.frameNStart = frameN  # exact frame index
        continue1_2.tStart = t  # local t and not account for scr refresh
        continue1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue1_2, 'tStartRefresh')  # time at next scr refresh
        continue1_2.setAutoDraw(True)
    # *mouse_6* updates
    if mouse_6.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_6.frameNStart = frameN  # exact frame index
        mouse_6.tStart = t  # local t and not account for scr refresh
        mouse_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_6, 'tStartRefresh')  # time at next scr refresh
        mouse_6.status = STARTED
        mouse_6.mouseClock.reset()
        prevButtonState = mouse_6.getPressed()  # if button is down already this ISN'T a new click
    if mouse_6.status == STARTED:  # only update if started and not finished!
        buttons = mouse_6.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue1_2)
                    clickableList = continue1_2
                except:
                    clickableList = [continue1_2]
                for obj in clickableList:
                    if obj.contains(mouse_6):
                        gotValidClick = True
                        mouse_6.clicked_name.append(obj.name)
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
consent_text_2.reset()
continue2_2.reset()
# setup some python lists for storing info about the mouse_consent_2
mouse_consent_2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
consentComponents = [logo2_2, Heading_2, consent_text_2, continue2_2, mouse_consent_2]
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
    
    # *logo2_2* updates
    if logo2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo2_2.frameNStart = frameN  # exact frame index
        logo2_2.tStart = t  # local t and not account for scr refresh
        logo2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo2_2, 'tStartRefresh')  # time at next scr refresh
        logo2_2.setAutoDraw(True)
    
    # *Heading_2* updates
    if Heading_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Heading_2.frameNStart = frameN  # exact frame index
        Heading_2.tStart = t  # local t and not account for scr refresh
        Heading_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Heading_2, 'tStartRefresh')  # time at next scr refresh
        Heading_2.setAutoDraw(True)
    
    # *consent_text_2* updates
    if consent_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_text_2.frameNStart = frameN  # exact frame index
        consent_text_2.tStart = t  # local t and not account for scr refresh
        consent_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_text_2, 'tStartRefresh')  # time at next scr refresh
        consent_text_2.setAutoDraw(True)
    
    # *continue2_2* updates
    if continue2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue2_2.frameNStart = frameN  # exact frame index
        continue2_2.tStart = t  # local t and not account for scr refresh
        continue2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue2_2, 'tStartRefresh')  # time at next scr refresh
        continue2_2.setAutoDraw(True)
    # *mouse_consent_2* updates
    if mouse_consent_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_consent_2.frameNStart = frameN  # exact frame index
        mouse_consent_2.tStart = t  # local t and not account for scr refresh
        mouse_consent_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_consent_2, 'tStartRefresh')  # time at next scr refresh
        mouse_consent_2.status = STARTED
        mouse_consent_2.mouseClock.reset()
        prevButtonState = mouse_consent_2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_consent_2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_consent_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(continue2_2)
                    clickableList = continue2_2
                except:
                    clickableList = [continue2_2]
                for obj in clickableList:
                    if obj.contains(mouse_consent_2):
                        gotValidClick = True
                        mouse_consent_2.clicked_name.append(obj.name)
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
intro_block2_3.reset()
continue6_3.reset()
# setup some python lists for storing info about the mouse
mouse.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
block1Components = [logo3_2, text, intro_block2_3, continue6_3, mouse]
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
    
    # *logo3_2* updates
    if logo3_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo3_2.frameNStart = frameN  # exact frame index
        logo3_2.tStart = t  # local t and not account for scr refresh
        logo3_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo3_2, 'tStartRefresh')  # time at next scr refresh
        logo3_2.setAutoDraw(True)
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *intro_block2_3* updates
    if intro_block2_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_block2_3.frameNStart = frameN  # exact frame index
        intro_block2_3.tStart = t  # local t and not account for scr refresh
        intro_block2_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_block2_3, 'tStartRefresh')  # time at next scr refresh
        intro_block2_3.setAutoDraw(True)
    
    # *continue6_3* updates
    if continue6_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue6_3.frameNStart = frameN  # exact frame index
        continue6_3.tStart = t  # local t and not account for scr refresh
        continue6_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue6_3, 'tStartRefresh')  # time at next scr refresh
        continue6_3.setAutoDraw(True)
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
                    iter(continue6_3)
                    clickableList = continue6_3
                except:
                    clickableList = [continue6_3]
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
exp_rate2_2.reset()
continue3_2.reset()
# setup some python lists for storing info about the mouse_4
mouse_4.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
practice_trial1Components = [logo4, Heading_3, text2_2, read_context_3, textbox_2, proposal1_3, exp_rate1_2, proposal2_2, exp_rate2_2, continue3_2, mouse_4]
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
    
    # *text2_2* updates
    if text2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text2_2.frameNStart = frameN  # exact frame index
        text2_2.tStart = t  # local t and not account for scr refresh
        text2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text2_2, 'tStartRefresh')  # time at next scr refresh
        text2_2.setAutoDraw(True)
    
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
    
    # *proposal1_3* updates
    if proposal1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        proposal1_3.frameNStart = frameN  # exact frame index
        proposal1_3.tStart = t  # local t and not account for scr refresh
        proposal1_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(proposal1_3, 'tStartRefresh')  # time at next scr refresh
        proposal1_3.setAutoDraw(True)
    
    # *exp_rate1_2* updates
    if exp_rate1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp_rate1_2.frameNStart = frameN  # exact frame index
        exp_rate1_2.tStart = t  # local t and not account for scr refresh
        exp_rate1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp_rate1_2, 'tStartRefresh')  # time at next scr refresh
        exp_rate1_2.setAutoDraw(True)
    
    # *proposal2_2* updates
    if proposal2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        proposal2_2.frameNStart = frameN  # exact frame index
        proposal2_2.tStart = t  # local t and not account for scr refresh
        proposal2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(proposal2_2, 'tStartRefresh')  # time at next scr refresh
        proposal2_2.setAutoDraw(True)
    
    # *exp_rate2_2* updates
    if exp_rate2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp_rate2_2.frameNStart = frameN  # exact frame index
        exp_rate2_2.tStart = t  # local t and not account for scr refresh
        exp_rate2_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp_rate2_2, 'tStartRefresh')  # time at next scr refresh
        exp_rate2_2.setAutoDraw(True)
    
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
    
    # --- Prepare to start Routine "trial_exp" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_randomize
    # reset 'positions' 
    positions = master_positions
    
    #randomise this for each trial
    random.shuffle(positions)
    
    #pair text and slider positions
    #slider_position = (positions + [0,-0.04])
    read_context_2.reset()
    textbox.reset()
    textbox.setText(context)
    proposal1.setPos([positions[0]])
    proposal1.setText(Q_ai)
    exp1.reset()
    proposal2.setPos([positions[1]])
    proposal2.setText(Q_nai)
    exp2.reset()
    continue3.reset()
    # setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trial_expComponents = [read_context_2, textbox, text2, proposal1, exp1, proposal2, exp2, continue3, mouse_2]
    for thisComponent in trial_expComponents:
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
    
    # --- Run Routine "trial_exp" ---
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
        
        # *exp1* updates
        if exp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp1.frameNStart = frameN  # exact frame index
            exp1.tStart = t  # local t and not account for scr refresh
            exp1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1, 'tStartRefresh')  # time at next scr refresh
            exp1.setAutoDraw(True)
        
        # *proposal2* updates
        if proposal2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            proposal2.frameNStart = frameN  # exact frame index
            proposal2.tStart = t  # local t and not account for scr refresh
            proposal2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(proposal2, 'tStartRefresh')  # time at next scr refresh
            proposal2.setAutoDraw(True)
        
        # *exp2* updates
        if exp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp2.frameNStart = frameN  # exact frame index
            exp2.tStart = t  # local t and not account for scr refresh
            exp2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp2, 'tStartRefresh')  # time at next scr refresh
            exp2.setAutoDraw(True)
        
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
        for thisComponent in trial_expComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_exp" ---
    for thisComponent in trial_expComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_randomize
    thisExp.addData('position_prop', positions)
    trials_block1.addData('exp1.response', exp1.getRating())
    trials_block1.addData('exp2.response', exp2.getRating())
    # store data for trials_block1 (TrialHandler)
    # the Routine "trial_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_block1'


# --- Prepare to start Routine "block2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
intro_block2_2.reset()
continue6_2.reset()
# setup some python lists for storing info about the mouse_9
mouse_9.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
block2Components = [logo5_2, text_4, intro_block2_2, continue6_2, mouse_9]
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
    
    # *logo5_2* updates
    if logo5_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        logo5_2.frameNStart = frameN  # exact frame index
        logo5_2.tStart = t  # local t and not account for scr refresh
        logo5_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(logo5_2, 'tStartRefresh')  # time at next scr refresh
        logo5_2.setAutoDraw(True)
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
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
textbox_4.reset()
A_2.reset()
cont_mc_2.reset()
B_2.reset()
cont_rc_2.reset()
pref_2.reset()
continue3_5.reset()
# setup some python lists for storing info about the mouse_7
mouse_7.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
practice_trial2Components = [read_context_4, textbox_4, text2_4, A_2, cont_mc_2, B_2, cont_rc_2, pref_2, continue3_5, mouse_7]
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
    
    # *read_context_4* updates
    if read_context_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        read_context_4.frameNStart = frameN  # exact frame index
        read_context_4.tStart = t  # local t and not account for scr refresh
        read_context_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(read_context_4, 'tStartRefresh')  # time at next scr refresh
        read_context_4.setAutoDraw(True)
    
    # *textbox_4* updates
    if textbox_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_4.frameNStart = frameN  # exact frame index
        textbox_4.tStart = t  # local t and not account for scr refresh
        textbox_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_4, 'tStartRefresh')  # time at next scr refresh
        textbox_4.setAutoDraw(True)
    
    # *text2_4* updates
    if text2_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text2_4.frameNStart = frameN  # exact frame index
        text2_4.tStart = t  # local t and not account for scr refresh
        text2_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text2_4, 'tStartRefresh')  # time at next scr refresh
        text2_4.setAutoDraw(True)
    
    # *A_2* updates
    if A_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        A_2.frameNStart = frameN  # exact frame index
        A_2.tStart = t  # local t and not account for scr refresh
        A_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(A_2, 'tStartRefresh')  # time at next scr refresh
        A_2.setAutoDraw(True)
    
    # *cont_mc_2* updates
    if cont_mc_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        cont_mc_2.frameNStart = frameN  # exact frame index
        cont_mc_2.tStart = t  # local t and not account for scr refresh
        cont_mc_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(cont_mc_2, 'tStartRefresh')  # time at next scr refresh
        cont_mc_2.setAutoDraw(True)
    
    # *B_2* updates
    if B_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        B_2.frameNStart = frameN  # exact frame index
        B_2.tStart = t  # local t and not account for scr refresh
        B_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(B_2, 'tStartRefresh')  # time at next scr refresh
        B_2.setAutoDraw(True)
    
    # *cont_rc_2* updates
    if cont_rc_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        cont_rc_2.frameNStart = frameN  # exact frame index
        cont_rc_2.tStart = t  # local t and not account for scr refresh
        cont_rc_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(cont_rc_2, 'tStartRefresh')  # time at next scr refresh
        cont_rc_2.setAutoDraw(True)
    
    # *pref_2* updates
    if pref_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        pref_2.frameNStart = frameN  # exact frame index
        pref_2.tStart = t  # local t and not account for scr refresh
        pref_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(pref_2, 'tStartRefresh')  # time at next scr refresh
        pref_2.setAutoDraw(True)
    
    # *continue3_5* updates
    if continue3_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue3_5.frameNStart = frameN  # exact frame index
        continue3_5.tStart = t  # local t and not account for scr refresh
        continue3_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue3_5, 'tStartRefresh')  # time at next scr refresh
        continue3_5.setAutoDraw(True)
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
                    iter(continue3_5)
                    clickableList = continue3_5
                except:
                    clickableList = [continue3_5]
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
    
    # --- Prepare to start Routine "trial_preference" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_randomize_2
    # reset 'positions' 
    positions2 = master_positions2
    
    #randomise this for each trial
    random.shuffle(positions2)
    
    #pair text and slider positions
    #slider_position = (positions + [0,-0.04])
    read_context.reset()
    textbox_3.reset()
    textbox_3.setText(context)
    A.reset()
    cont_mc.reset()
    cont_mc.setPos([positions2[0]])
    cont_mc.setText(mc)
    B.reset()
    cont_rc.reset()
    cont_rc.setPos([positions2[1]])
    cont_rc.setText(rc)
    pref.reset()
    continue3_3.reset()
    # setup some python lists for storing info about the mouse_5
    mouse_5.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trial_preferenceComponents = [read_context, textbox_3, text2_3, A, cont_mc, B, cont_rc, pref, continue3_3, mouse_5]
    for thisComponent in trial_preferenceComponents:
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
    
    # --- Run Routine "trial_preference" ---
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
        
        # *textbox_3* updates
        if textbox_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox_3.frameNStart = frameN  # exact frame index
            textbox_3.tStart = t  # local t and not account for scr refresh
            textbox_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox_3, 'tStartRefresh')  # time at next scr refresh
            textbox_3.setAutoDraw(True)
        
        # *text2_3* updates
        if text2_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text2_3.frameNStart = frameN  # exact frame index
            text2_3.tStart = t  # local t and not account for scr refresh
            text2_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text2_3, 'tStartRefresh')  # time at next scr refresh
            text2_3.setAutoDraw(True)
        
        # *A* updates
        if A.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            A.frameNStart = frameN  # exact frame index
            A.tStart = t  # local t and not account for scr refresh
            A.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(A, 'tStartRefresh')  # time at next scr refresh
            A.setAutoDraw(True)
        
        # *cont_mc* updates
        if cont_mc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cont_mc.frameNStart = frameN  # exact frame index
            cont_mc.tStart = t  # local t and not account for scr refresh
            cont_mc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cont_mc, 'tStartRefresh')  # time at next scr refresh
            cont_mc.setAutoDraw(True)
        
        # *B* updates
        if B.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            B.frameNStart = frameN  # exact frame index
            B.tStart = t  # local t and not account for scr refresh
            B.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(B, 'tStartRefresh')  # time at next scr refresh
            B.setAutoDraw(True)
        
        # *cont_rc* updates
        if cont_rc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cont_rc.frameNStart = frameN  # exact frame index
            cont_rc.tStart = t  # local t and not account for scr refresh
            cont_rc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cont_rc, 'tStartRefresh')  # time at next scr refresh
            cont_rc.setAutoDraw(True)
        
        # *pref* updates
        if pref.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pref.frameNStart = frameN  # exact frame index
            pref.tStart = t  # local t and not account for scr refresh
            pref.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pref, 'tStartRefresh')  # time at next scr refresh
            pref.setAutoDraw(True)
        
        # *continue3_3* updates
        if continue3_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            continue3_3.frameNStart = frameN  # exact frame index
            continue3_3.tStart = t  # local t and not account for scr refresh
            continue3_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continue3_3, 'tStartRefresh')  # time at next scr refresh
            continue3_3.setAutoDraw(True)
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
                        iter(continue3_3)
                        clickableList = continue3_3
                    except:
                        clickableList = [continue3_3]
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
        for thisComponent in trial_preferenceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_preference" ---
    for thisComponent in trial_preferenceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_randomize_2
    thisExp.addData('position_prop2', positions2)
    trials_block2.addData('pref.response', pref.getRating())
    # store data for trials_block2 (TrialHandler)
    # the Routine "trial_preference" was not non-slip safe, so reset the non-slip timer
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
