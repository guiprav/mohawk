#!/bin/bash
set -e

cd "$(dirname "${BASH_SOURCE[0]}")"

echo File mode:
(cd ../ && mohawk test/index.hbs | test/check.js)

echo
echo Pipe mode:
mohawk <index.hbs | ./check.js
