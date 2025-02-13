---
title: "Podstawy CSS: Stylizacja Stron Internetowych"
description: "Poznaj podstawy CSS i dowiedz się, jak skutecznie stylizować strony internetowe, aby były estetyczne i funkcjonalne."
pubDate: "2025-02-08"
category: "CSS"
slug: "podstawy-css-stylizacja-stron"
author:
  name: "Dominik Bernatowicz"
  title: "Frontend Developer"
  image: "/assets/images/memoji-computer.png"
---

## Czym Jest CSS?

CSS (Cascading Style Sheets) to język arkuszy stylów, który służy do nadawania wyglądu stronom internetowym stworzonym przy użyciu HTML. Dzięki CSS możemy kontrolować kolorystykę, czcionki, odstępy, rozmiary elementów oraz ich rozmieszczenie na stronie. Oddzielenie struktury (HTML) od stylu (CSS) pozwala na lepszą organizację kodu i ułatwia utrzymanie projektu.

### Jak Dodać CSS do Dokumentu HTML?

Istnieją trzy sposoby dodawania CSS do strony internetowej:

1. **Inline (wewnętrzny styl w atrybucie)** – bezpośrednio w tagu HTML:
    ```html
    <h1 style="color: blue;">Witaj na mojej stronie!</h1>
    ```

2. **Internal (wewnętrzny arkusz stylów)** – w sekcji `<head>` dokumentu HTML:
    ```html
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
    </style>
    ```

3. **External (zewnętrzny plik CSS)** – najbardziej zalecany sposób, który umożliwia oddzielenie stylu od struktury:
    ```html
    <link rel="stylesheet" href="style.css">
    ```
    A w pliku `style.css`:
    ```css
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }
    ```

## Podstawowa Składnia CSS

Każde reguły CSS składają się z:
- **Selektora** – określa, do jakiego elementu HTML ma zostać zastosowany styl.
- **Deklaracji** – określa właściwości i ich wartości, np. kolor czy rozmiar czcionki.

Przykład:
```css
h1 {
  color: #333;
  font-size: 2em;
  text-align: center;
}
```

## Rodzaje Selektorów
1. Selektor Tagu – stylizuje wszystkie wystąpienia danego tagu:

```css
p {
  line-height: 1.6;
}
```

2. Selektor Klasy – używany dla wybranych elementów, zaczyna się od kropki:

```css
.highlight {
  background-color: yellow;
}
```

I w HTML:

```html
Kopiuj
<p class="highlight">To jest wyróżniony tekst.</p>
```

3. Selektor ID – unikalny dla jednego elementu na stronie, zaczyna się od hash (#):

css
Kopiuj
#main-header {
  background-color: #4CAF50;
  color: white;
}
I w HTML:

```html
<h1 id="main-header">Nagłówek strony</h1>
```

## Kaskadowość i Dziedziczenie
CSS jest kaskadowy, co oznacza, że style mogą się nadpisywać zgodnie z regułami:

Specyficzności – style bardziej szczegółowe mają wyższy priorytet.
Kolejności – style umieszczone później w kodzie mają wyższy priorytet.
Dziedziczenia – niektóre właściwości (np. color, font-family) dziedziczą się automatycznie po rodzicu.
Przykład:

```css
body {
  color: black;
}
p {
  color: red;
}
```

Wszystkie akapity będą czerwone, mimo że body ma kolor czarny, ponieważ selektor p jest bardziej szczegółowy.

## Przykład Stylizacji Prostej Strony
``` html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Podstawy CSS</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        color: #333;
        line-height: 1.6;
      }

      h1 {
        text-align: center;
        color: #4CAF50;
      }

      p {
        max-width: 600px;
        margin: 0 auto 20px;
      }

      .highlight {
        background-color: #ffeb3b;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Witaj w świecie CSS!</h1>
    <p>
      CSS pozwala na nadawanie wyglądu Twoim stronom internetowym. Dzięki niemu możesz zmieniać kolory, czcionki, odstępy i wiele więcej.
    </p>
    <p class="highlight">
      Ten akapit jest wyróżniony za pomocą klasy CSS!
    </p>
  </body>
</html>
```

# Wyjaśnienie Kodu
body – Stylizuje całe tło strony na jasny szary oraz ustawia czcionkę i kolor tekstu.
h1 – Wyrównuje tekst nagłówka do środka i nadaje mu zielony kolor.
p – Ogranicza szerokość akapitów, aby były bardziej czytelne.
.highlight – Klasa nadająca żółte tło i wewnętrzne odstępy dla wyróżnionego akapitu.
Podsumowanie
CSS to potężne narzędzie pozwalające na pełną kontrolę nad wyglądem strony internetowej. Zrozumienie podstaw selektorów, dziedziczenia oraz specyficzności jest kluczowe, aby skutecznie stylizować swoje projekty. Warto zacząć od prostych przykładów i stopniowo odkrywać zaawansowane możliwości CSS, takie jak flexbox, grid czy animacje.

## Co Dalej?
Jeżeli opanowałeś podstawy CSS, możesz przejść do nauki bardziej zaawansowanych technik, takich jak:

- Flexbox i Grid – Nowoczesne sposoby układania elementów na stronie.
- Animacje CSS – Tworzenie dynamicznych efektów przejść.
- Responsywność – Tworzenie stron dopasowanych do różnych rozmiarów ekranów.

Śledź mojego bloga, aby nie przegapić kolejnych wpisów na temat CSS i tworzenia nowoczesnych stron internetowych!