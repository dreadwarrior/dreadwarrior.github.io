# van-tomas.de

Personal landing page, including booklist management.

## Requirements

- [SDKMAN!](https://sdkman.io/)
- JDK 17, e.g. `sdk install java 17.0.2-open`
- [JBang](https://www.jbang.dev/), e.g. `sdk install jbang`
- [hugo](https://gohugo.io/installation/)
- [go-task](https://taskfile.dev/installation/)
- [Pagefind](https://pagefind.app/docs/installation/) (see [Decision: Assume `pagefind` in `PATH` or aliased](#decision-assume-pagefind-in-path-or-aliased))

_Optional_

To automated synopsis extraction (via task `new.book:synopsis`):

- [htmlq](https://github.com/mgdm/htmlq)
- [yq](https://github.com/mikefarah/yq)
- curl

To run broken link checks (via task namespace `maintenance:broken-links.*`):

- [lychee](https://lychee.cli.rs/)

## Recommendations

A lot of Copy & Paste action is involved when managing book content. Using a
[clipboard manager](https://github.com/p0deje/Maccy) will improve the workflow.

## Run

    task dev:run

## Usage

### General information

Managing book content is performed by using go-task via command line interface.

To list all available commands and a short description, execute the following
command:

    task --list-all

To display help of a command, e.g. about required variables and usage examples, 
use go-task's `--summary` command line option. For example:

    task --summary book:completed

### Selecting the right command for different languages

Currently, fetching bibliographic data is supported for german and english 
books. The ISBN 13 indicates, which language space the book was published in:

* ISBN beginning with **978-3** indicates a book published in german language area.
* ISBN beginning with **978-1** indicates a book published in english language area.

Fetching bibliographic data is different for those language areas, and you have 
to choose the correct command.

### Adding books without ISBNs

For german books, support for IDN identifiers of Deutsche Nationalbibliothek is
available.

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

### Decision: Assume `pagefind` in PATH or aliased

I opted in to use [Pagefind](https://pagefind.app/docs/installation/) as a 
precompiled binary instead of managing installation of a Node.js stack at my 
local machine. The binary is located in a directory made available to `PATH`. 

The task `dev:run` assumes `pagefind` is made available that way, or an alias 
`pagefind` of `npx pagefind` exists.

### Decision: Denote lending resources

In order to keep track of lending resources, a content resource can contain a
URN-based reference to the resource in its `params.resources` section.

As of now, this only serves internal, informational usage.

The following relations are currently defined:

* `to-be-lend-from`

The URN syntax should be as follows: `urn:<appname>:<resource-description>#<resource-name>`,
where:

* `<appname>` must be set to *ahoi*
* `<resource-description>` must be one of `person`, `library`
* `<resource-name>` must be set to a uniquely identifiable name, e.g., the name 
  of the Person or Library where the content can be lent from.

Complete example:

```yaml
params:
  references:
    - rel: to-be-lend-from
      url: "urn:ahoi:library:Voebb"
```

This marks a content item of type book to be lend from VÖBB, the Verbund der 
Öffentlichen Bibliotheken Berlins.