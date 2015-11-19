#!/bin/bash
set -e

cd "$(dirname "${BASH_SOURCE[0]}")"

cat \
    <(echo File mode:) \
    <(cd ../ && mohawk test/index.hbs) \
    <(echo; echo Pipe mode:) \
    <(mohawk <index.hbs) \
    | ./check.js
