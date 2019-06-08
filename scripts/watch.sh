#!/usr/bin/env bash

nodemon \
  -x 'php runner.php phpsw:generate-website' \
  -w app/resources \
  -e 'html,twig'
