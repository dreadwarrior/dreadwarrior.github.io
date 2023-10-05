#!/usr/bin/env sh

set -e

cd "$(dirname "$0")/.."

# Note: brew install csvkit required.
# Installs the following dependencies: python-pytz, mpdecimal, python@3.11 and six.
for isbn in `csvsql -d ";" -q '"' --query "select ISBN from wishlist" assets/data/books/wishlist.csv 2>/dev/null | tail -n +2`
do
  hugo new content books/$isbn.md
done