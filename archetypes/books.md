{{- $isbn := .File.ContentBaseName -}}

{{- with partial "archetype/book/list" "assets/data/books/wishlist.csv" -}}
    {{- range where . "isbn" $isbn -}}

---
title: "{{ trim .title " " }}"
slug: "{{ trim .title " " | anchorize }}"
isbn: "{{ .isbn }}"
idn: "{{ .idn }}"
author: "{{ trim .author " " }}"
publishedAt: "{{ .publishedAt }}"
genres:
  - "Add genres here. Repeat as much as you like."
source: "https://url/to/source/of/excerpt/"
books: 
  - "wishlist"
---

Add the excerpt here...

    {{- end -}}
{{- end -}}