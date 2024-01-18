{{- $isbn := .File.ContentBaseName -}}
{{- $url := printf "http://openlibrary.org/api/books?bibkeys=ISBN:%s&format=json&jscmd=data" $isbn -}}
---
date: "{{ .Date }}"
{{- with resources.GetRemote $url | transform.Unmarshal }}
title: "{{ index . (printf "ISBN:%s" $isbn) "title" }}"
{{- with (index . (printf "ISBN:%s" $isbn) "subtitle") }}
subtitle: "{{ . }}"
{{- end }}
slug: "{{ index . (printf "ISBN:%s" $isbn) "title" | anchorize }}"
isbn: "{{ $isbn }}"
coverUri: "{{ index . (printf "ISBN:%s" $isbn) "cover" "large" }}"
cataloguePermalink: "https://openlibrary.org{{ index . (printf "ISBN:%s" $isbn) "key" }}"
author: "{{ index . (printf "ISBN:%s" $isbn) "authors" 0 "name" }}"
publishedAt: "{{ index . (printf "ISBN:%s" $isbn) "publish_date" }}"
topics:
{{- range (index . (printf "ISBN:%s" $isbn) "subjects") }}
  - "{{ .name }}"
{{- end }}
source: "https://url/to/source/of/excerpt/"
booklists: []
---

Add the excerpt here. E.g. perform a Google search by using the book's title and
its bibliographic publisher:

"{{ index . (printf "ISBN:%s" $isbn) "title" }}" {{ index . (printf "ISBN:%s" $isbn) "publishers" 0 "name" }}

**Don't forget to paste the excerpt's source into the "source" front matter 
variable.**

{{- end -}}