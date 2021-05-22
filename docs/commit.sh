#!/bin/bash
git fetch --all && git pull --all

git add .

git commit -m 'Auto commit code'

git push -u origin master

