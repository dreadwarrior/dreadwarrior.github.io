{{- $isbn := .File.ContentBaseName -}}
{{- $url := printf "http://openlibrary.org/api/books?bibkeys=ISBN:%s&format=json&jscmd=data" $isbn -}}
---
date: "{{ .Date }}"
slug: "{{ index . (printf "ISBN:%s" $isbn) "title" | anchorize }}"
{{- with resources.GetRemote $url | transform.Unmarshal }}
title: "{{ index . (printf "ISBN:%s" $isbn) "title" }}"
params:
  author: "{{ index . (printf "ISBN:%s" $isbn) "authors" 0 "name" }}"
  isbn: "{{ $isbn }}"
  publishingYear: "{{ index . (printf "ISBN:%s" $isbn) "publish_date" }}"
  references:
    - rel: cover
      uri: "{{ index . (printf "ISBN:%s" $isbn) "cover" "large" }}"
    - rel: permalink
      uri: "https://openlibrary.org{{ index . (printf "ISBN:%s" $isbn) "key" }}"
    - rel: synopsis
      uri: "https://url/to/source/of/excerpt/"
{{- with (index . (printf "ISBN:%s" $isbn) "subtitle") }}
  subtitle: "{{ . }}"
{{- end }}
topics:
{{- range (index . (printf "ISBN:%s" $isbn) "subjects") }}
  - "{{ .name }}"
{{- end }}
booklists: []
resources:
  - name: cover
    src: cover.jpg
---

Add the excerpt here. E.g. perform a Google search by using the book's title and
its bibliographic publisher:

"{{ index . (printf "ISBN:%s" $isbn) "title" }}" {{ index . (printf "ISBN:%s" $isbn) "publishers" 0 "name" }}

**Don't forget to paste the excerpt's source into the "source" front matter 
variable.**

{{- end -}}