# JSX vs JS — Micro-App (Vite + styled-components)

**Live:** https://a2rp.github.io/jsx-vs-js/  
**Code:** https://github.com/a2rp/jsx-vs-js

A focused demo showing how **JSX** is just syntax sugar for **`React.createElement`**.  
We render the **same UI** two ways-JSX on the left, `createElement` on the right—and keep them in sync as state changes.

## Why this exists

-   Build the mental model: JSX → `React.createElement(...)`.
-   See identical UI and behavior from both syntaxes.
-   Use this as a polished baseline (tokens, a11y, styled-components) for future micro-apps.

## Tech

-   React 18
-   Vite
-   styled-components

## Quick Start

```bash
git clone https://github.com/a2rp/jsx-vs-js
cd jsx-vs-js
npm i
npm run dev
```
