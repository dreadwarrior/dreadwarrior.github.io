# van-tomas.de

Personal, minimal landing page.

## Run

    hugo server -D

## Update theme

     git submodule update --remote --rebase

## Howto

### Add a new book to the wishlist

1. Generate a DNB Datenshop export with CSV format for title data.
2. Override `assets/data/books/wishlist.csv`.
3. Generate a book page for each ISBN by executing

       hugo new content books/<isbn>.md

4. Open the newly generated file and adjust the front matter variable `genres`.
5. Add an excerpt to the file's content area and adjust the front matter 
   variable `source` to point to the source of the excerpt.

## Decisions

### Decision: Use self-hosted Google Fonts

Currently, a wave of cease-and-desist letters is rolling over Germany. This may
affect website providers when loading Google Fonts from Google servers. To be
spared from this, the fonts and stylesheets were compiled and generated using
[google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts) and
are included in the VCS of this project.

The font packages are compiled by using the _latin_ charset only. The used
styles are constrained to the _regular_, _italic_, _700_ and _700italic_ if
available. For CSS generation the "Best Support" option was used.
