# van-tomas.de

Personal landing page, including booklist management.

## Requirements

- [SDKMAN!](https://sdkman.io/)
- JDK 17, e.g. `sdk install java 17.0.2-open`
- [JBang](https://www.jbang.dev/), e.g. `sdk install jbang`
- [hugo](https://gohugo.io/installation/)
- [go-task](https://taskfile.dev/installation/)

_Optional_

For automated synopsis extraction:

- [htmlq](https://github.com/mgdm/htmlq)
- [yq](https://github.com/mikefarah/yq)
- curl

## Recommendations

A lot of Copy & Paste action is involved when managing book content. Using a
[clipboard manager](https://github.com/p0deje/Maccy) will improve the workflow.

## Run

    hugo server -D

## Usage

### Add a new book

1. Go and find the ISBN of the book title, e.g from a book catalogue like dnb.de or openlibrary.org.
2. Make note of the ISBN 13, ideally formatted. Example: **978-3-7645-3237-6**.
3. Run the following command to add a new book, published in the german language area to the wishlist:

       ISBN=978-3-7645-3237-6 task [--silent] de.book.wishlist

---

**NOTE**: _Language area and booklist variations_

To create a book in the _english language area_, replace the prefix `de.` by
`en.`. Example:

```
ISBN=9780553381689 task [--silent] en.book.wishlist
```

To create a _completed_ book, replace the suffix `.wishlist` by `.completed`.
Example:

```
ISBN=978-3-7645-3237-6 task [--silent] de.book.completed
```

Likewise, to create a book in the _unread_ booklist, use the suffix
`.unread`. Example:

```
ISBN=9783895840227 task [--silent] de.book.unread
```

---

4. Open the newly generated file and adjust the front matter variable `topics`.
5. If you like, add the book's synopsis to it's content area, cf.
   [Add book synopsis](#add-book-synopsis).

### Add book synopsis

A book's synopsis can be used from various sources, e.g. from a publisher's
landing page of the book.

To re-use this content and fulfill the obligation to indicate the source of
supply, follow these steps:

1. Make note of the URL of that page.
2. Make note of the CSS selector to the book's synopsis, e.g. by using the
   [browser's developer toolbar](https://devtoolstips.org/tips/en/copy-css-selector/).
3. Add value from 1. to front matter field `source` of the book's content file.

Then run the following command:

```
BOOK=./content/books/978-3-641-26688-2/index.md SELECTOR='.column-count-md-2 > p:nth-child(1)' task synopsis
```

### Mark an existing book as currently read

Determine the path to the book's content file. Then run the following command:

```
BOOK=<insert path to book's content file here> task --silent book.start-reading
```

### Mark an existing book as completed

Determine the path to the book's content file. Then run the following command:

```
BOOK=<insert path to book's content file here> task --silent book.completed
```

## Howto

### Format an ISBN 13

_Motivation_: Some tools and apps don't use properly formatted ISBN 13 values.
I want to have that in this project. Therefore, a JBang script exists to
support this right away from the CLI.

Run the following command, replace `9783442735648` with _your_ ISBN:

```
> jbang ./script/isbn13.java 9783442735648
< 978-3-442-73564-8
```

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
