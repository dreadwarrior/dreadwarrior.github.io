---
title: "Deutsche Nationalbibliothek - Verfasserdatenzerlegung"
layout: "dnb-authors"
draft: true
samples:
  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=978-3-641-26688-2&recordSchema=oai_dc&maximumRecords=100"
    creator:
      - "Henry, Christina [Verfasser]"
      - "Zühlke, Sigrun [Übersetzer]"
  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=978-3-499-25556-4&recordSchema=oai_dc&maximumRecords=100"
    creator: "Kubin, Alfred [Verfasser]"
  - source: "https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=978-3-85881-846-1&recordSchema=oai_dc&maximumRecords=100"
    creator:
      - "Krasnjanskaja, Kristina Georgievna [Verfasser]"
      - "Semenov, Aleksandr A. [Verfasser]"
      - "Likhatcheva, Elisaveta Verfasser eines Geleitworts]"
      - "[Lodder, Christina [Verfasser eines Geleitworts]"

---

Diese Seite testet die Zerlegung von Verfasserdaten der Deutschen 
Nationalbibliothek.

Aktuell implementiert ist der [Aufbau der Anzeige der/des geistigen Schöpferin/Schöpfers der Reihe A](https://www.dnb.de/DE/Professionell/Metadatendienste/Metadaten/Nationalbibliografie/hinweistexteReiheA.html).

## Änderungsverlauf

_2023-12-10_

* Verarbeitung von mehreren, als _Verfasser_ gekennzeichneten Schöpfer:innen.
* 