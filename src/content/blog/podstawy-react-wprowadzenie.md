---
title: "Podstawy React: Wprowadzenie do Tworzenia Interaktywnych Aplikacji"
description: "Poznaj podstawy React, najpopularniejszej biblioteki JavaScript do budowania dynamicznych aplikacji webowych."
pubDate: "2025-02-10"
category: "React"
slug: "podstawy-react-wprowadzenie"
author:
  name: "Dominik Bernatowicz"
  title: "Frontend Developer"
  image: "/assets/images/memoji-computer.png"
---

### Co to Jest React?

React to popularna biblioteka JavaScript, stworzona przez Facebooka, która umożliwia budowanie dynamicznych, interaktywnych aplikacji internetowych. Dzięki React możesz tworzyć komponenty, które renderują się na podstawie danych, a także reagują na zmiany w tych danych bez konieczności przeładowania strony. React ułatwia zarządzanie interfejsem użytkownika, dzięki czemu aplikacje stają się bardziej responsywne i łatwiejsze w utrzymaniu.

### Instalacja React

Aby rozpocząć pracę z React, najlepiej jest użyć narzędzia `Create React App`, które pozwala na szybkie stworzenie podstawowego projektu React bez potrzeby ręcznego konfigurowania środowiska.

1. Jeśli jeszcze nie masz zainstalowanego Node.js, pobierz go ze strony: [https://nodejs.org/](https://nodejs.org/).
2. Zainstaluj `Create React App` za pomocą npm:
    ```bash
    npx create-react-app my-app
    cd my-app
    npm start
    ```

Po wykonaniu powyższych kroków, aplikacja React zostanie uruchomiona na lokalnym serwerze, a Ty będziesz mógł edytować kod i od razu zobaczyć zmiany w przeglądarce.

### Podstawowa Struktura Aplikacji React

Aplikacja React składa się z komponentów, które można traktować jako małe, niezależne części interfejsu użytkownika. Komponenty te mogą być funkcjami lub klasami.

### Funkcjonalne Komponenty

Funkcjonalne komponenty to podstawowa jednostka w React, która przyjmuje dane (props) i zwraca JSX — składnię, która wygląda podobnie do HTML, ale jest używana w JavaScript.

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Witaj, {props.name}!</h1>;
}

export default Greeting;
```

W powyższym przykładzie, Greeting jest funkcjonalnym komponentem, który przyjmuje props i zwraca element &lt;h1&gt;. Komponent może być użyty w innym miejscu aplikacji w następujący sposób:

```jsx
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Dominik" />
    </div>
  );
}

export default App;
```

### Komponenty Klasowe

Komponenty klasowe to starszy sposób definiowania komponentów, który pozwala na użycie stanu (state) i metod cyklu życia. W większości nowoczesnych aplikacji React używa się komponentów funkcjonalnych z hookami, ale warto znać klasyczne podejście.

```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Witaj, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

### JSX – JavaScript XML
JSX to składnia, która pozwala łączyć JavaScript z HTML. Dzięki JSX możemy pisać HTML bezpośrednio w kodzie JavaScript, co ułatwia tworzenie i zarządzanie komponentami. JSX jest transformowane przez React do czystego JavaScriptu.

```jsx
const element = <h1>Witaj, React!</h1>;
```

JSX umożliwia również osadzanie wyrażeń JavaScript w nawiasach {}:

```jsx
const name = "Dominik";
const element = <h1>Witaj, {name}!</h1>;
```

### Zarządzanie Stanem w React
Stan (ang. state) to dane, które mogą się zmieniać w czasie działania aplikacji. Stan przechowuje wartości, które wpływają na wygląd komponentu.

### Użycie Stanu w Komponencie Funkcjonalnym
W React 16.8 wprowadzono hooki, które umożliwiają użycie stanu w komponentach funkcyjnych. Najpopularniejszym hookiem do zarządzania stanem jest useState.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Liczba kliknięć: {count}</p>
      <button onClick={() => setCount(count + 1)}>Kliknij mnie</button>
    </div>
  );
}

export default Counter;
```

W tym przykładzie używamy useState, aby przechować liczbę kliknięć w przycisku. Funkcja setCount zmienia wartość stanu, co powoduje ponowne renderowanie komponentu.

### React Hooki i Zarządzanie Efektami
React oferuje także hooki do zarządzania efektami ubocznymi w komponentach, np. pobieranie danych z API lub manipulacja DOM. Najczęściej używanym hookiem do tego celu jest useEffect.

```jsx
import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Pusta tablica oznacza, że efekt uruchomi się tylko raz, po załadowaniu komponentu.

  if (!data) {
    return <p>Ładowanie danych...</p>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default FetchData;
```

W tym przykładzie hook useEffect używany jest do pobrania danych z API zaraz po zamontowaniu komponentu. Dzięki temu mamy pełną kontrolę nad tym, kiedy i jak wykonać operacje asynchroniczne.

### Podsumowanie
React to potężna biblioteka do tworzenia dynamicznych aplikacji internetowych. Zrozumienie podstaw takich jak komponenty, JSX, stan i hooki to kluczowe umiejętności, które pozwolą Ci zbudować interaktywne aplikacje. Jeśli jesteś gotowy na dalszą naukę, poznanie zaawansowanych tematów, takich jak zarządzanie stanem z biblioteką Redux, routing czy testowanie komponentów, pomoże Ci jeszcze bardziej rozwinąć Twoje umiejętności w React.

### Co Dalej?
Zarządzanie stanem z Redux – Poznaj zaawansowane techniki zarządzania stanem.
React Router – Twórz aplikacje z wieloma stronami za pomocą React Routera.
Testowanie w React – Dowiedz się, jak testować swoje aplikacje React.
Śledź mojego bloga, aby nie przegapić kolejnych artykułów o React!