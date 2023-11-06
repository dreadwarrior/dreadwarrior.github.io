---
title: "Deutsche Nationalbibliothek - Titeldatenzerlegung"
layout: "dnb-titles"
draft: true
titleSamples:
  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=num%3D978-3-453-43686-2&recordSchema=oai_dc&maximumRecords=100"
    title: "Albträume = Nightmares &amp; Dreamscapes / Stephen King. Aus dem Amerikan. von Joachim Körber"

  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=num%3D978-3-940138-90-3&recordSchema=oai_dc&maximumRecords=100"
    title: "[Wilde Welle] ; Axel Prahl präsentiert: Wilde Welle : die besten Geschichten alter Kapitäne / ausgew., eingeleitet und kommentiert von Axel Prahl. Aufgeschrieben von Stefan Kruecken"

  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=num%3D978-3-596-29770-2&recordSchema=oai_dc&maximumRecords=100"
    title: "[Dick] ; Blade runner - träumen Androiden von elektrischen Schafen? : Roman / Philip K. Dick ; aus dem Amerikanischen von Manfred Allie"

  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=num%3D978-3-471-36062-0&recordSchema=oai_dc&maximumRecords=100"
    title: "[Kashiwai] ; Das Restaurant der verlorenen Rezepte : Roman / Hisashi Kashiwai ; aus dem Japanischen von Ekaterina Mikulich"
---
Diese Seite testet die Zerlegung von Titeldaten der Deutschen Nationalbibliothek 
("DNB").

Aktuell implementiert ist der [Aufbau der Titelanzeige der Reihe A](https://www.dnb.de/DE/Professionell/Metadatendienste/Metadaten/Nationalbibliografie/hinweistexteReiheA.html).

## Änderungsverlauf

_2023-11-06_

* Das Zeichen "=" wurde bei der Trennung des Titelzusatzes implementiert. Dies 
  ergänzt den im "Reihe A"-Titeldatenformat dokumentierten Doppelpunkt.

* Von der SRU-Schnittstelle der DNB wird der bevorzugte Werkstitel mit der 
  Zeichenfolge `(Leerzeichen);(Leerzeichen)` getrennt. Dies wurde beim Zerlegen 
  der Titeldaten berücksichtigt.