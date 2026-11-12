#!/bin/sh
# Stamps index.html with a new build id so installed phone apps know an update is out.
# Run before committing a change to index.html:  sh tools/stamp-build.sh
cd "$(dirname "$0")/.." || exit 1
B=$(date -u +%Y%m%d%H%M%S)
sed -i '' "s/<meta name=\"omnifit-build\" content=\"[^\"]*\">/<meta name=\"omnifit-build\" content=\"$B\">/" index.html
echo "build $B"
