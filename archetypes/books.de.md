{{- $isbn := .File.ContentBaseName -}}
{{- $dnbUrl := printf "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=num%%3D%s&recordSchema=oai_dc&maximumRecords=1" $isbn -}}
---
date: "{{ .Date }}"
{{- with resources.GetRemote $dnbUrl | transform.Unmarshal -}}
{{- with partial "dnb/oai_dc/title-parser-re.html" .records.record.recordData.dc.title }}
slug: "{{ .mainTitle | anchorize }}"
title: "{{ with .preferredTitle }}{{ . }} - {{ end }}{{ .mainTitle }}"
{{- end }}
params:
  author: "{{ partial "dnb/oai_dc/author.html" .records.record.recordData.dc.creator }}"
  isbn: "{{ $isbn }}"
  publishingYear: "{{ .records.record.recordData.dc.date }}"
  references:
    - rel: cover
      uri: "https://portal.dnb.de/opac/mvb/cover?isbn={{ $isbn }}"
    - rel: permalink
      uri: "https://d-nb.info/{{ partial "dnb/oai_dc/idn.html" .records.record.recordData.dc.identifier }}"
    - rel: synopsis
      uri: "https://url/to/source/of/excerpt/"
{{- with partial "dnb/oai_dc/title-parser-re.html" .records.record.recordData.dc.title -}}
{{- with .titleAddition }}
  subtitle: "{{ . | strings.FirstUpper }}"
{{- end -}}
{{- end }}
topics:
  - "Add topics here. Repeat as much as you like."
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