---
id: 1
title: ChatGPT Plugins
subtitle: Implementierung von ChatGPT Plugins
date: '2023-04-10T11:09:49+00:00'
status: publish
permalink: /dienstleistungen/chatgpt-plugins
author: 'Markus Tanner'
templateKey: service
image: ./chatgpt.svg
---

Plugins helfen ChatGPT (Chatbot Generative Pre-trained Transformer), auf aktuelle Informationen zuzugreifen, Berechnungen durchzuführen oder Dienste von Drittanbietern zu nutzen. Mit Ihrem eigenen ChatGPT Plugin können Sie Ihren Mitarbeitern und Kunden Zugang zu Daten Ihres Unternehmens ermöglichen.

### Problemstellung

ChatGPT ist ein KI-gestütztes Chatbot-System von OpenAI. Es funktioniert, indem es natürliche Spracheingaben verarbeitet und darauf abgestimmte Antworten generiert.

Das für ChatGPT verwendete Sprachmodell wird mit einem sehr grossen Datensatz von Texten aus Büchern, Artikeln und Websites trainiert. Diese Informationen können veraltet sein und sind für alle Anwendungen gleich. Ausserdem ist das Einzige, was Sprachmodelle von Haus aus können, die Ausgabe von Text. Dieser Text kann nützliche Anweisungen enthalten, aber um diese Anweisungen tatsächlich zu befolgen, ist ein weiterer Prozess erforderlich.

### Lösung

Mithilfe von Plugins kann man ChatGPT Zugang zu aktuellen und persönlichen Informationen geben (z.B. Börsenkurse oder eigene Einkaufsliste). Zudem kann man damit ChatGPT mit der Funktion ausstatten, Aktionen für den Benutzer durchzuführen (z.B. Produkte zur Einkaufsliste hinzufügen).

Jeder Benutzer entscheidet selbst, welche Plugins er nutzen will. Je nach Plugin ist es notwendig, dass sich der Benutzer authentifiziert, damit das Plugin auf seine persönlichen Daten zugreifen kann.

Für einen Anwendungsfall können mehrere Plugins kombiniert werden. So kann z.B. ein Plugin Daten liefern, die dann von einem anderen Plugin weiterverarbeitet werden.

### Anwendungsbeispiele

Mithilfe von Plugins kann man ChatGPT ermöglichen, Dinge zu tun wie zum Beispiel:

- Abrufen von Echtzeit-Informationen<br/>
  z.B. Sportergebnisse, Börsenkurse, die neuesten Nachrichten, etc.
- Abrufen von Informationen aus der Wissensdatenbank<br/>
  z.B. Firmendokumente, persönliche Notizen, etc.
- Aktionen im Namen des Benutzers durchführen<br/>
  z.B. Essen bestellen, Zutaten zur Einkaufsliste hinzufügen, etc.

### Funktionsweise

Plugins werden durch eine Manifest-Datei beschrieben, die eine maschinenlesbare Beschreibung der Fähigkeiten des Plugins und der Art und Weise, wie sie aufgerufen werden können, enthält. ChatGPT weiss dadurch, welche Anfragen an das Plugin delegiert werden können und wie die Struktur der Daten aussieht.

Plugins bieten zahlreiche Authentifizierungsmöglichkeiten an, um verschiedene Anwendungsfälle zu berücksichtigen. Damit ist ein sicherer Zugang zu persönlichen Daten gewährleistet und das Plugin kann Aktionen stellvertretend für den Benutzer ausführen.

Wenn ein Benutzer eine Konversation auf chat.openai.com beginnt, kann er auswählen, welche Plugins er aktivieren möchte. Die Dokumentation über die aktivierten Plugins wird dem Sprachmodell als Teil des Gesprächskontexts angezeigt, sodass das Modell bei Bedarf die entsprechenden Plugin-APIs aufrufen kann, um die Benutzerabsicht zu erfüllen.

### ChatGPT Plugin Entwicklung

Seit 2016 entwickeln wir in der Botfabrik Chatbots. Unsere Bots schwatzen nicht nur mit Personen, sondern auch mit Systemen (CRM, CMS, ERP usw.). Diese Erfahrung nutzen wir, um nützliche Plugins für ChatGPT zu schreiben. Nehmen Sie mit uns Kontakt auf, wenn Sie Ihren Mitarbeitern oder Ihren Kunden via ChatGPT Zugang zu Ihren Firmendaten ermöglichen wollen.
