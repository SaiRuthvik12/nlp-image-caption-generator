# -*- coding: utf-8 -*-
"""Text to speech.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1gnkgkwku8hFWiCdEIrdHZWTzB9hOUqra

## Installing libraries for text to speech synthesis

gTTS (Google Text-to-Speech), a Python library and CLI tool to interface with Google Translate's text-to-speech API.
"""

pip install gTTS

"""## Import Statements"""

import gtts

from IPython.display import Audio
from IPython.display import display

"""IPython is an interactive command-line terminal for Python.

## Make request to google to get synthesis
"""

tts = gtts.gTTS("Hello, my name is Keerthika")

"""## Save the audio file"""

tts.save("hello.mp3")

"""## Play the audio file"""

wn = Audio("hello.mp3", autoplay=True)
display(wn)

"""## Text to speech for Hindi"""

tts1 = gtts.gTTS("मुझे यह विषय बहुत पसंद है", lang="hi")
tts1.save("hindi.mp3")
wn1 = Audio("hindi.mp3", autoplay=True)
display(wn1)