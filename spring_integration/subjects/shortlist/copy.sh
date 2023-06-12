#!/usr/local/bin/bash

COMMONSDIR="/Users/jmr/Systems/commons2016"
while IFS='' read -r jfile ; do
    cp -i "${COMMONSDIR}/${jfile}" commons/
done < "commons.txt"

SF110DIR="/Users/jmr/Systems/SF110-20130704-src"
while IFS='' read -r jfile ; do
    cp -i "${SF110DIR}/${jfile}" sf110/
done < "sf110.txt"
