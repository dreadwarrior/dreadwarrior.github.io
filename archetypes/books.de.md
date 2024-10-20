{{- $isbn := .File.ContentBaseName -}}
{{- $dnbUrl := printf "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=num%%3D%s&recordSchema=oai_dc&maximumRecords=1" $isbn -}}
---
date: "{{ .Date }}"
{{- with resources.GetRemote $dnbUrl | transform.Unmarshal -}}
{{- with partial "dnb/oai_dc/title-parser-re.html" .records.record.recordData.dc.title }}
title: "{{ with .preferredTitle }}{{ . }} - {{ end }}{{ .mainTitle }}"
{{- with .titleAddition }}
subtitle: "{{ . | strings.FirstUpper }}"
{{- end }}
slug: "{{ .mainTitle | anchorize }}"
{{- end }}
isbn: "{{ $isbn }}"
coverUri: "https://portal.dnb.de/opac/mvb/cover?isbn={{ $isbn }}"
cataloguePermalink: "https://d-nb.info/{{ partial "dnb/oai_dc/idn.html" .records.record.recordData.dc.identifier }}"
author: "{{ partial "dnb/oai_dc/author.html" .records.record.recordData.dc.creator }}"
publishedAt: "{{ .records.record.recordData.dc.date }}"
topics:
  - "Add topics here. Repeat as much as you like."
source: "https://url/to/source/of/excerpt/"
booklists: []
resources:
  - name: cover
    src: cover.jpg
---

Add the excerpt here. E.g. perform a Google search by using the book's title and
its bibliographic publisher:

{{ with partial "dnb/oai_dc/title-parser-re.html" .records.record.recordData.dc.title -}}
"{{ with .preferredTitle }}{{ . }} - {{ end }}{{ .mainTitle }}{{ with .titleAddition }} {{ . | strings.FirstUpper }}{{ end }}"
{{- end }} {{ .records.record.recordData.dc.publisher }}

**Don't forget to paste the excerpt's source into the "source" front matter 
variable.**

{{- end -}}