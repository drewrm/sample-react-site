#!/bin/bash -xe

fly -t local login -u concourse -p changeme -c http://localhost:8080
fly -t local set-team -n teamy-mcteam --no-really-i-dont-want-any-auth --non-interactive
fly -t teamy-mcteam login -n teamy-mcteam -c http://localhost:8080
fly -t teamy-mcteam set-pipeline -p sample-react-site -c concourse.yml -n
fly -t teamy-mcteam unpause-pipeline -p sample-react-site

