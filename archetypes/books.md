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
  {{/* 'with' block used for migration phase. */}}
  {{- with index $.Site.Data.books $isbn "genres" -}}
    {{ range . }}
  - "{{ . }}"
    {{ end }}
  {{- else -}}
  - "Add genres here. Repeat as much as you like."
  {{- end }}
{{/* 'with' block used for migration phase. */}}
{{- with index $.Site.Data.books $isbn "source" -}}
  source: "{{ . }}"
{{- else -}}
  source: "https://url/to/source/of/excerpt/"
{{- end }}
books: 
  - "wishlist"
---
{{/* 'with' block used for migration phase. */}}
{{- with index $.Site.Data.books $isbn "excerpt" -}}
  {{ . }}
{{- else -}}
  Add the excerpt here...
{{- end -}}

    {{- end -}}
{{- end -}}