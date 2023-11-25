# van-tomas.de

Personal, minimal landing page.

## Run

    hugo server -D

## Howto

### Format an ISBN 13

_Motivation_: Some tools and apps don't use properly formatted ISBN 13 values.
I want to have that in this project. Therefore, a make target is introduced to
support this right away from the CLI.

*Requirements*:

- [SDKMAN!](https://sdkman.io/)
- JDK 17, e.g. `sdk install java 17.0.2-open`
- [JBang](https://www.jbang.dev/), e.g. `sdk install jbang`

Run `formatted_isbn` `make` target with parameter `isbn`.

Example: 

```
> make formatted_isbn isbn=9780571330638
< 978-0-571-33063-8
```

### Add a book to the wishlist

1. Search for the book title at dnb.de.
2. Make note of the ISBN 13, ideally formatted. Example: **978-3-7645-3237-6**.
3. Generate a book page for that ISBN.
   1. For a german book, run:

          make wishlist_book isbn=<isbn>
   2. For an english book, run:

          make en_wishlist_book isbn=<isbn>

4. Open the newly generated file and adjust the front matter variable `topics`.
5. If you like, add an excerpt to the file's content area.

### Add a completed book

1. Search for the book title at dnb.de or.
2. Make note of the ISBN 13, ideally formatted. Example: **978-3-7645-3237-6**.
3. Generate a book page for that ISBN.
   1. For a german book, run:

          make completed_book isbn=<isbn>
   2. For a german book, run:

          make en_completed_book isbn=<isbn>

4. Open the newly generated file and adjust the front matter variable `topics`.
5. If you like, add an excerpt to the file's content area.

## Decisions

### Decision: Use self-hosted Google Fonts

Currently, a wave of cease-and-desist letters is rolling over Germany. This may
affect website providers when loading Google Fonts from Google servers. To be
spared from this, the fonts and stylesheets were compiled and generated using
[google-webfonts-helper](https://gwfh.mranftl.com/fonts) and
are included in the VCS of this project.

The font packages are compiled by using the _latin_ charset only. The used
styles are constrained to the _regular_, _italic_, _700_ and _700italic_ if
available. For CSS generation the "Best Support" option was used.
