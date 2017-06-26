#!/bin/sh

$(npm bin)/node-sass --version >> /dev/null || npm rebuild node-sass
