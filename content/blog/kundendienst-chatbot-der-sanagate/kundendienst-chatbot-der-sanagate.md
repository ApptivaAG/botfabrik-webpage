---
title: 'Kundendienst-Chatbot der Sanagate'
date: '2017-10-31T17:25:08+00:00'
status: publish
permalink: /blog/2017/10/31/kundendienst-chatbot-der-sanagate
author: 'Philip Schönholzer'
templateKey: blog-post
id: 577
image: ./Blog.png
category:
  - Allgemein
tag: []
post_format: []
seo-keywords:
  - Kundendienst-Chatbot
---

Seit Kurzem beantwortet unser neuster Kundendienst-Chatbot einen Teil der Kundenanfragen der [Sanagate](https://www.sanagate.ch/de/home.html). 🚀

## Anforderungen an den Kundendienst-Chatbot

Der Sanagate Chatbot erkennt heute über 200 Absichten, ist aber immer noch in der Trainingsphase und lernt somit täglich dazu. Dies ist auch nötig, da das Spektrum beim Kundendienst sehr breit ist. Vom Fitness-Abo über die Schwangerschaft bis hin zu den Vorteilen von Sanagate soll der Chatbot sinnvolle Antworten geben. Zudem unterstützt der Chatbot Kunden bei der Wahl der passenden Grund- und Zusatzversicherung.

<video autoplay="1" class="wp-video-shortcode" controls="controls" height="640" id="video-0-3" loop="1" preload="auto" width="360"><source src="Sanagate_720p.mp4" type="video/mp4"></source>[Sanagate_720p.mp4](Sanagate_720p.mp4)</video>

## Umsetzung des Chatbots

Der Aufbau des Sanagate Chatbots ist wieder sehr ähnlich zu unseren bisherigen Projekten. Für die Absichten- und Entitätserkennung (NLP) haben wir auf API.AI gesetzt, welches seit Sommer 2017 neu Dialogflow heisst. An und für sich sind wir mit Dialogflow zufrieden, hatten aber zwei unschöne Überraschungen. Erstens unterstützte Dialogflow im Laufe des Projekts den IE11 Browser nicht mehr. Dies ist ein Problem, da wir sehr gute Erfahrungen gemacht haben, wenn der Kundendienst die Inhalte des Bots selber pflegen kann. Ohne IE11 war dies für den Kunden sehr umständlich. Zweitens bietet Dialogflow keine Möglichkeit, gelöschte Inhalte wiederherzustellen. Wenn etwas fälschlicherweise gelöscht wurde, ist es definitiv weg.

Beim Sanagate Chatbot setzen wir das erste Mal unsere neue Bot-Engine ein. Diese erlaubt uns, sehr schnell unterschiedliche Clients (Web, Facebook, Slack, usw.) und NLP-Dienste einzubinden und direkt die projektspezifischen Anpassungen vorzunehmen. Unsere Bot-Engine läuft auf Node.js und wird mittels NPM-Modulen eingebunden. Damit war es für uns sehr einfach, im Laufe des Projekts den Chatbot auch auf Facebook anzubieten.

Wer uns beim Training des Chatbots helfen will, erreicht diesen über Facebook oder die Webseite. Viel Spass! 🤖

Facebook: [facebook.com/sanagate/](https://www.facebook.com/sanagate/)  
Webseite: [sanagate.ch/](https://www.sanagate.ch/)
