#!/bin/sh
git add .
git commit -m "update"
git push production master
echo Press Enter...
read