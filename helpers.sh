#!/usr/bin/env bash

# Usage: ./helpers.sh {operation} {?args}

OPERATION=$1
shift
ARGS=$*

case ${OPERATION} in
    "generate") php runner.php phpsw:generate-website ${ARGS};;
esac
