---
title: "Podstawy JavaScript: Wprowadzenie do Programowania w JavaScript"
description: "Poznaj podstawy JavaScript, jednego z najważniejszych języków programowania dla aplikacji webowych."
pubDate: "2025-02-11"
category: "JavaScript"
slug: "podstawy-javascript-wprowadzenie"
author:
  name: "Dominik Bernatowicz"
  title: "Frontend Developer"
  image: "/assets/images/memoji-computer.png"
---

## Co to Jest JavaScript?

JavaScript to jeden z najpopularniejszych języków programowania, który służy do tworzenia dynamicznych stron internetowych. Jest językiem skryptowym, który działa po stronie klienta (w przeglądarce) i pozwala na interakcję użytkownika z elementami strony. Dzięki JavaScript możemy dodawać różnorodne funkcjonalności do naszych stron, takie jak walidacja formularzy, animacje, obsługa zdarzeń oraz manipulacja elementami DOM.

JavaScript jest wykorzystywany nie tylko w przeglądarkach, ale także na serwerach, zwłaszcza przy użyciu Node.js, co czyni go wszechstronnym narzędziem w tworzeniu aplikacji webowych.

### Pierwszy Skrypt w JavaScript

Aby zacząć programować w JavaScript, wystarczy edytor tekstu (np. Visual Studio Code) i przeglądarka. Oto przykład najprostszego skryptu:

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Podstawy JavaScript</title>
</head>
<body>
    <h1>Witaj w świecie JavaScript!</h1>
    <button onclick="greet()">Kliknij mnie</button>

    <script>
        function greet() {
            alert("Witaj w JavaScript!");
        }
    </script>
</body>
</html>
```

W powyższym przykładzie mamy prostą stronę HTML z przyciskiem, który po kliknięciu wywołuje funkcję greet() w JavaScript. Funkcja ta wyświetla komunikat "Witaj w JavaScript!" za pomocą alert().

### Zmienne i Typy Danych
W JavaScript, zmienne mogą przechowywać różne typy danych, takie jak liczby, tekst, tablice, obiekty i inne. Istnieją trzy główne sposoby deklarowania zmiennych:

- var – używane w starszych wersjach JavaScript, teraz rzadko stosowane.
- let – zmienne, których wartość może się zmieniać w czasie działania programu.
- const – zmienne, których wartość nie może być zmieniana po przypisaniu.

### Przykład deklaracji zmiennych:

```javascript
let name = "Dominik"; // Zmienna, której wartość może się zmieniać
const age = 25; // Zmienna, której wartość nie może się zmieniać

console.log(name); // Dominik
console.log(age);  // 25
```
JavaScript obsługuje różne typy danych, takie jak:

- String – ciągi znaków, np. "Hello, World!"
- Number – liczby, np. 42 lub 3.14
- Boolean – wartości logiczne, np. true lub false
- Array – tablice, np. [1, 2, 3]
- Object – obiekty, np. { name: "Dominik", age: 25 }

### Operatory
JavaScript oferuje szeroką gamę operatorów, w tym operatorów arytmetycznych, porównania, logicznych i przypisania.

```javascript
let a = 5;
let b = 10;

console.log(a + b); // 15 - operator dodawania
console.log(a === b); // false - operator porównania
```

### Funkcje w JavaScript
Funkcje to podstawowe jednostki kodu, które wykonują określone operacje. Możemy je wywołać w dowolnym momencie w programie.

### Definiowanie funkcji:
```javascript
function greet(name) {
    return "Witaj, " + name + "!";
}

console.log(greet("Dominik")); // Witaj, Dominik!
```

Funkcje mogą przyjmować argumenty i zwracać wyniki, które mogą być używane w innych częściach programu.

### Funkcje Strzałkowe
W nowszych wersjach JavaScript, możemy używać funkcji strzałkowych (arrow functions), które są krótszą formą zapisu funkcji.

```javascript
const greet = (name) => "Witaj, " + name + "!";

console.log(greet("Dominik")); // Witaj, Dominik!
```

### Instrukcje Warunkowe
Instrukcje warunkowe pozwalają na podejmowanie decyzji w zależności od spełnionych warunków.

### Przykład użycia instrukcji if:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Jesteś dorosły.");
} else {
    console.log("Jesteś niepełnoletni.");
}
```

JavaScript oferuje również inne instrukcje warunkowe, takie jak switch, które umożliwiają sprawdzenie różnych przypadków.

### Pętle w JavaScript
Pętle pozwalają na wielokrotne wykonywanie tego samego kawałka kodu. Najczęściej używaną pętlą jest for.

### Przykład pętli for:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i); // Wydrukuje liczby od 1 do 5
}
```

Pętle są przydatne, gdy musimy powtarzać pewne czynności, np. iterować po elementach tablicy.

### Manipulacja DOM
JavaScript pozwala na interakcję z elementami HTML na stronie, co umożliwia tworzenie dynamicznych i interaktywnych aplikacji. Możemy używać metod takich jak document.getElementById() lub document.querySelector() do uzyskania dostępu do elementów HTML, a następnie modyfikowania ich.

### Przykład manipulacji DOM:

```javascript
document.getElementById("myButton").onclick = function() {
    alert("Przycisk został kliknięty!");
};
```

W tym przypadku, po kliknięciu przycisku, wyświetli się alert z komunikatem.

### Podsumowanie
JavaScript to wszechstronny język, który umożliwia tworzenie dynamicznych, interaktywnych stron internetowych. Pozwala na manipulację danymi, obsługę zdarzeń użytkownika, tworzenie funkcji i pętli, a także dynamiczną zmianę treści stron. Nauka JavaScriptu jest podstawą do dalszego rozwoju w programowaniu webowym.

### Co Dalej?
Praca z Frameworkami – Dowiedz się, jak używać bibliotek i frameworków, takich jak React, Angular lub Vue.js.
Zarządzanie Danymi – Poznaj technologie do zarządzania danymi, takie jak API RESTful i AJAX.
Node.js – Rozpocznij pracę z Node.js i twórz aplikacje serwerowe w JavaScript.
Śledź mojego bloga, aby kontynuować swoją przygodę z JavaScript!