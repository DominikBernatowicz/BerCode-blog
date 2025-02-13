---
title: "Podstawy HTML: Struktura Dokumentu"
description: "Dowiedz się, jak zbudować poprawną strukturę dokumentu HTML i dlaczego jest to kluczowe dla tworzenia stron internetowych."
pubDate: "2025-02-02"
category: "HTML"
slug: "podstawy-html-struktura-dokumentu"
author:
  name: "Dominik Bernatowicz"
  title: "Frontend Developer"
  image: "/assets/images/memoji-computer.png"
---

## Co to jest HTML?

HTML (HyperText Markup Language) to podstawowy język znaczników używany do tworzenia stron internetowych. Odpowiada za strukturę i organizację treści na stronie, definiując nagłówki, akapity, obrazy, linki i inne elementy. HTML nie jest językiem programowania – nie pozwala na wykonywanie obliczeń czy logiki, ale umożliwia opisanie zawartości strony w sposób zrozumiały dla przeglądarek internetowych.

### Podstawowa Struktura Dokumentu HTML

Każdy dokument HTML zaczyna się od deklaracji typu (`<!DOCTYPE html>`) i składa się z dwóch głównych sekcji: `<head>` oraz `<body>`. Oto przykład najprostszego dokumentu HTML:

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Moja Pierwsza Strona</title>
  </head>
  <body>
    <h1>Witaj na mojej stronie!</h1>
    <p>To jest mój pierwszy dokument HTML.</p>
  </body>
</html>
```

**Wyjaśnienie Elementów:**
- &lt;!DOCTYPE html&gt; – Deklaracja typu dokumentu, która informuje przeglądarkę, że używamy najnowszej wersji HTML (HTML5).
- &lt;html lang="pl"&gt; – Element główny dokumentu. Atrybut lang określa język zawartości.
- &lt;head&gt; – Sekcja zawierająca meta informacje o dokumencie, takie jak:
- &lt;meta charset="UTF-8"&gt; – Ustawia kodowanie znaków, co pozwala na poprawne wyświetlanie polskich znaków.
- &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; – Zapewnia responsywność strony na - urządzeniach mobilnych.
- &lt;title&gt; – Tytuł strony wyświetlany na karcie przeglądarki.
- &lt;body&gt; – Główna zawartość strony, czyli to, co użytkownik widzi na ekranie:
- &lt;h1&gt; – Nagłówek główny strony.
- &lt;p&gt; – Akapit tekstu.

### Dlaczego Poprawna Struktura Jest Ważna?

Poprawna struktura dokumentu HTML ma kluczowe znaczenie dla:

- **SEO** (optymalizacji pod kątem wyszukiwarek) – Nagłówki (&lt;h1&gt;, &lt;h2&gt; itd.) pomagają wyszukiwarkom zrozumieć hierarchię treści.
- **Dostępności** – Poprawnie oznaczone elementy ułatwiają nawigację osobom korzystającym z czytników ekranowych.
- **Responsywności** – Meta tag viewport zapewnia poprawne skalowanie strony na różnych urządzeniach.

### Częste Błędy Początkujących

- **Brak deklaracji &lt;!DOCTYPE html&gt;** – Może to powodować niezgodne z oczekiwaniami renderowanie strony.
- **Niewłaściwe zagnieżdżanie tagów** – Wszystkie tagi otwierające muszą mieć odpowiadające im tagi zamykające.
- **Brak atrybutu lang** – Utrudnia to wyszukiwarkom i czytnikom ekranowym zrozumienie języka treści.

### Podsumowanie

Znajomość i stosowanie poprawnej struktury dokumentu HTML to podstawa każdej strony internetowej. Dzięki temu nie tylko poprawiamy dostępność i SEO, ale także zapewniamy lepsze wrażenia użytkownikom. Jeśli dopiero zaczynasz swoją przygodę z HTML, pamiętaj, aby ćwiczyć tworzenie prostych stron, zwracając uwagę na poprawność składni.

### Co Dalej?

Jeżeli opanowałeś już podstawy struktury dokumentu HTML, kolejnym krokiem może być nauka formatowania treści za pomocą tagów takich jak &lt;strong&gt;, &lt;em&gt;, czy &lt;blockquote&gt;. Śledź mojego bloga, aby nie przegapić kolejnych wpisów na temat HTML i tworzenia stron internetowych!