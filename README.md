# Bercode Blog

Bercode Blog to nowoczesny blog stworzony przy użyciu Astro, Reacta, TailwindCSS oraz TypeScript. Aplikacja korzysta również z Framer Motion do animacji oraz tailwind-merge do zarządzania klasami Tailwind.

## 🔥 Funkcjonalności
Szybki rendering dzięki Astro i Reactowi.
Responsywny design przy użyciu TailwindCSS.
Płynne animacje dzięki Framer Motion.
Optymalizacja klas Tailwind przy pomocy tailwind-merge.

## ⚙️ Technologie
Astro – Static Site Generator.
React – Dynamiczne komponenty.
TailwindCSS – Stylowanie.
TypeScript – Typowanie statyczne.
Framer Motion – Animacje.
tailwind-merge – Optymalizacja klas Tailwind.

## 🚀 Instalacja i uruchomienie
1. Klonowanie repozytorium:

```bash
git clone https://github.com/uzytkownik/bercode-blog.git
cd bercode-blog
```

2. Instalacja zależności:
```bash
npm install
```

3. Uruchomienie trybu deweloperskiego:
```bash
npm run dev
```

4. Budowanie na produkcję:
```bash
npm run build
```

5. Podgląd wersji produkcyjnej:
```bash
npm run preview
```

## 📁 Struktura projektu
```csharp
bercode-blog/
│   package.json
│   astro.config.mjs
│   tailwind.config.cjs
│   tsconfig.json
│
├── public/          # Pliki statyczne
├── src/
│   ├── components/  # Komponenty React
│   ├── layouts/     # Układy stron
│   ├── pages/       # Strony aplikacji
│   └── styles/      # Style globalne
└── ...
```
## 📦 Zależności

### Główne:
* Astro (astro) – Framework.
* React (react, react-dom) – UI.
* TailwindCSS (tailwindcss) – Stylowanie.
* TypeScript (typescript) – Typowanie.

### Dodatkowe:
* Framer Motion (framer-motion) – Animacje.
* tailwind-merge – Optymalizacja klas Tailwind.

### DevDependencies:
* @tailwindcss/typography – Plugin Tailwind dla lepszej typografii.

## 🌐 Skrypty
* dev – Uruchamia tryb deweloperski na localhost:3000.
* start – Alias do dev.
* build – Sprawdza kod (astro check) i buduje projekt na produkcję.
* preview – Podgląd zbudowanej aplikacji.
* astro – Narzędzie CLI dla Astro.

## ✨ Konfiguracja TailwindCSS
TailwindCSS jest skonfigurowany za pomocą @astrojs/tailwind oraz pluginu @tailwindcss/typography dla lepszej typografii w treściach blogowych.

## 🔧 Przyszły rozwój
* Dodanie systemu komentarzy.
* Integracja z CMS (np. Sanity, Contentful).

