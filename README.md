# airlogos

A lightweight and easy-to-use NPM package to get airline logos (SVG and PNG) in JavaScript or TypeScript projects.  
Compatible with **React**, **Angular**, **Vue**, or any modern frontend framework.

---

## Installation

```bash
npm install airlogos
# or
yarn add airlogos
```

---

## Quick Usage

```ts
import airlineLogos from "airlogos";

const { EK, BA, QR } = airlineLogos;

console.log(EK.svg);
console.log(EK.png);
```

Each airline is accessible via its IATA code (e.g., `EK`, `BA`, `QR`), with two formats:

- `.svg` → Returns the path/URL to the SVG logo  
- `.png` → Returns the path/URL to the PNG logo

---

## Usage in Popular Frameworks

---

### React Example

```tsx
import React from "react";
import airlineLogos from "airlogos";

const { EK, QR } = airlineLogos;

const AirlineLogo = () => (
  <div>
    <h2>Emirates Logo</h2>
    <img src={EK.svg} alt="Emirates Logo" width={100} />
    
    <h2>Qatar Airways Logo</h2>
    <img src={QR.png} alt="Qatar Airways Logo" width={100} />
  </div>
);

export default AirlineLogo;
```

---

### Angular Example

#### airline.component.ts

```ts
import { Component } from '@angular/core';
import airlineLogos from 'airlogos';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html'
})
export class AirlineComponent {
  EKLogoSvg = airlineLogos.EK.svg;
  BALogoPng = airlineLogos.BA.png;
}
```

#### airline.component.html

```html
<h2>Emirates Logo</h2>
<img [src]="EKLogoSvg" alt="Emirates Logo" width="100" />

<h2>British Airways Logo</h2>
<img [src]="BALogoPng" alt="British Airways Logo" width="100" />
```

---

### Vue Example (Vue 3)

```html
<template>
  <div>
    <h2>Qatar Airways Logo</h2>
    <img :src="QRLogo" alt="Qatar Logo" width="100" />
  </div>
</template>

<script setup>
import airlineLogos from 'airlogos';

const QRLogo = airlineLogos.QR.svg;
</script>
```

---

## Dynamic Access (Optional)

You can dynamically access logos using airline codes:

```ts
const code = "EK";
const logo = airlineLogos[code].svg;
```

---

## Contact

If you don't find your desired logo, please contact us:  
**rummanstack@gmail.com**

Maintained by Mohammad Rummman

---

## 📄 License

MIT
