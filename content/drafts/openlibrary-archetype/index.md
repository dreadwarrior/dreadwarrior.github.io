---
title: "openlibrary.com - Hugo Archetype Reaktor"
layout: "ol-archetype-generator"
draft: true
debug:
  printResponse: false
titleSamples:
  - source: "978-0-606-40840-0"
    title: "(The) Impossible Fortress by Jason Rekulak (Turtleback Edition)"
  - source: "978-1-68324-433-2"
    title: "(The) Impossible Fortress by Jason Rekulak (Work)"
  - source: "978-3-7645-3236-9"
    title: "Die Chroniken von Peter Pan von Christina Henry"
---
Diese Seite begleitet die Erstellung eines [Hugo Archetyps](https://gohugo.io/content-management/archetypes/) 
für die Erstellung von Inhalten für die Sektion "books", auf Basis von 
openlibrary.org-Daten.s

Als Grundlage der Implementierung dient die Dokumentation der "[Books API 
(generic)](https://openlibrary.org/dev/docs/api/books)" von openlibrary.org.

## Änderungsverlauf

_2023-11-24_

* Initiale Implementierung zum Ermitteln der folgenden, grundlegenden Titeldaten:
  - Haupt- und Untertitels
  - Autor:in
  - URI zum Cover
  - Katalog-Permalinks
  - Veröffentlichungsjahr
  - Themen
  - Verlagsangabe