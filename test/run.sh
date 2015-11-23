#!/bin/bash
set -e

script_dir="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

cd "$script_dir"

mohawk_bin="$script_dir/../main.sh"

cat \
    <(echo File mode:) \
    <(cd ../ && "$mohawk_bin" test/index.hbs) \
    <(echo; echo Pipe mode:) \
    <("$mohawk_bin" <index.hbs) \
    | ./check.js
