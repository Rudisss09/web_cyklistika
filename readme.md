# 🚴 Cyklistika – One-page web

Jednoduchý jednostránkový web na téma **cyklistika**, vytvořený jako školní projekt.

Cílem projektu je prakticky ukázat použití **HTML5, CSS a JavaScriptu (DOM)** bez použití frameworků nebo knihoven.

## 📁 Struktura projektu

```text
projekt/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── img/
    └── kolo.jpg
```

## 🌐 Použité technologie

* HTML5
* CSS3
* JavaScript
* DOM
* Flexbox
* CSS Grid
* Media Queries

Projekt nepoužívá žádný framework ani knihovnu, například Bootstrap, Tailwind nebo jQuery.

## 📝 Obsah webu

Web obsahuje několik částí:

* úvod do cyklistiky
* výhody cyklistiky
* základní vybavení
* bezpečnost při jízdě
* jednoduchý cyklistický kvíz
* výběr oblíbeného typu trasy

## 🧱 HTML

V projektu jsou použity sémantické HTML5 prvky:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<aside>`
* `<footer>`

Dále jsou použity:

* nadpisy `<h1>`, `<h2>` a `<h3>`
* odstavce
* seznam
* odkazy
* obrázek s atributem `alt`
* formulářový prvek `<select>`
* tlačítka

Stránka obsahuje také základní SEO prvky:

* `title`
* `meta description`
* `lang="cs"`
* `meta viewport`

## 🎨 CSS

Vzhled stránky je vytvořen pomocí vlastního CSS.

Používá:

* Flexbox
* CSS Grid
* vlastní barevné schéma
* typografii
* `:hover` efekty
* zaoblené rohy
* responzivní rozložení
* `@media` breakpoint pro mobilní zařízení

Stránka je navržena tak, aby fungovala na počítači i mobilním telefonu.

## ⚙️ JavaScript

JavaScript zajišťuje skutečnou interaktivitu stránky pomocí DOM.

### 1. Zobrazit další tip

Tlačítko umožňuje zobrazit nebo skrýt další informace o přípravě kola.

Používá například:

```javascript
getElementById()
addEventListener()
classList.toggle()
textContent
```

### 2. Cyklistický kvíz

Uživatel může vybrat odpověď a stránka zobrazí, zda byla odpověď správná.

Používá například:

```javascript
querySelectorAll()
addEventListener()
dataset
textContent
```

### 3. Výběr trasy

Uživatel si pomocí formuláře vybere typ cyklistické trasy a JavaScript následně zobrazí zvolenou možnost.

Používá:

```javascript
addEventListener()
preventDefault()
textContent
```

## 📱 Responzivita

Pro mobilní zařízení je použit breakpoint:

```css
@media (max-width: 700px)
```

Na menších obrazovkách se například karty zobrazí pod sebou a úvodní část stránky se přizpůsobí mobilnímu displeji.

## 🖼️ Obrázek

Obrázek kola se nachází ve složce:

```text
img/kolo.jpg
```

V HTML je použit například takto:

```html
<img src="img/kolo.jpg" alt="Horské kolo na lesní cestě">
```

## 🔍 Kontrola projektu

Před odevzdáním je vhodné zkontrolovat:

* HTML validaci
* CSS validaci
* responzivitu na mobilu
* konzoli prohlížeče
* funkčnost JavaScriptu
* odkazy a obrázky

## 🚦 Lighthouse

Projekt je určen ke kontrole pomocí Chrome Lighthouse.

Je potřeba provést audit minimálně pro:

* Performance
* Accessibility
* Best Practices
* SEO

Výsledek Lighthouse auditu bude odevzdán společně s projektem.

## 👨‍💻 Autor Rudolf Borovka 3IT

Školní projekt – One-page web

**Téma:** Sportovní aktivita – cyklistika

**Rok:** 2026
