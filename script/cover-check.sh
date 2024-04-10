#!/usr/bin/env sh

set -e

cd "$(dirname "$0")/.."

FILE=$1

while read -r URI; do
  curl -s -o /dev/null --head -w '%{url}: %{http_code}\n' "$URI"
done <"${FILE}"