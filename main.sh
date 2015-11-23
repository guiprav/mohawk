#!/bin/bash
set -e

script_dir="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

node --harmony_destructuring "$script_dir/main.js" "$@"
