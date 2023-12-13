# van-tomas.de

Personal, minimal landing page (with personal bookshelf management).

## Requirements

- [SDKMAN!](https://sdkman.io/)
- JDK 17, e.g. `sdk install java 17.0.2-open`
- [JBang](https://www.jbang.dev/), e.g. `sdk install jbang`
- [hugo](https://gohugo.io/installation/)
- [go-task](https://taskfile.dev/installation/)

## Run

    hugo server -D

## Howto

### Format an ISBN 13

_Motivation_: Some tools and apps don't use properly formatted ISBN 13 values.
I want to have that in this project. Therefore, a make target is introduced to
support this right away from the CLI.

Run the following command, replace `9783442735648` with _your_ ISBN:

```
> jbang ./script/isbn13.java 9783442735648
< 978-3-442-73564-8
```

### Add a new book

1. Go and find the ISBN of the book title, e.g from a book catalogue like dnb.de or openlibrary.org.
2. Make note of the ISBN 13, ideally formatted. Example: **978-3-7645-3237-6**.
3. Run the following command to add a new book, published in the german language area to the wishlist:

       ISBN=978-3-7645-3237-6 task de.book.wishlist

---
   
**NOTE**: _Language area and bookshelf variations_

To create a book in the _english language area_, replace the prefix `de.` by 
`en.`. Example:

```
ISBN=9780553381689 task en.book.wishlist
```

To create a _completed_ book, replace the suffix `.wishlist` by `.completed`.
Example:

```
ISBN=978-3-7645-3237-6 task de.book.completed
```

---

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
