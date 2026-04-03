#!/bin/bash
# Getting the byte size of HTTP header for a given URL.
curl -s  "$1" | wc -c
