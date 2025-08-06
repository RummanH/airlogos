# ✈️ airlogos

A lightweight and framework-agnostic NPM package for easily accessing **airline logos** (SVG and PNG) by their **IATA code**.

Works with **React**, **Angular**, **Vue**, **Next.js**, **Nuxt**, or any modern JavaScript/TypeScript framework.

---

> 🛡️ **Please understand that images are base64 format so you may need safe parse** in frameworks like Angular, Vue, or others with CSP or SSR restrictions.

---

## 📦 Installation

```bash
npm install airlogos
# or
yarn add airlogos
```

---

## 🚀 Quick Usage

```ts
import airlineLogos from "airlogos";

const { EK, QR, BA } = airlineLogos;

console.log(EK.svg);
console.log(QR.png);
```

Each airline is available via its **IATA code** (`EK`, `QR`, `BA`, etc.), and includes:

- `svg`: base64 image string (or `""` if not available)
- `png`: base64 image string (or `""` if not available)

---

## ⚛️ React Example

```tsx
import React from "react";
import airlineLogos from "airlogos";

const { EK, QR } = airlineLogos;

const AirlineLogo = () => (
  <div>
    <h2>Emirates Logo</h2>
    <img src={EK.svg} alt="Emirates Logo" width={100} />

    <h2>Qatar Airways Logo</h2>
    <img src={QR.png} alt="Qatar Logo" width={100} />
  </div>
);

export default AirlineLogo;
```

✅ React supports base64 images directly via `<img src={base64} />`.

---

## 🌐 Next.js Example

```tsx
import airlineLogos from "airlogos";

export default function Home() {
  const { BA } = airlineLogos;

  return (
    <div>
      <h2>British Airways</h2>
      <img src={BA.svg} alt="British Airways Logo" width={120} />
    </div>
  );
}
```

✅ Base64 support is built-in. For performance optimization, consider static imports or CDN fallback.

---

## 🅰️ Angular Example

```ts
// airline.component.ts
import { Component } from "@angular/core";
import airlineLogos from "airlogos";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-airline",
  templateUrl: "./airline.component.html",
})
export class AirlineComponent {
  EKLogoSvg: SafeUrl;
  BALogoPng: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.EKLogoSvg = this.getSafeUrl(airlineLogos.EK.svg);
    this.BALogoPng = this.getSafeUrl(airlineLogos.BA.png);
  }

  getSafeUrl(base64: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(base64);
  }
}
```

```html
<!-- airline.component.html -->
<h2>Emirates Logo</h2>
<img [src]="EKLogoSvg" alt="Emirates Logo" width="100" />

<h2>British Airways Logo</h2>
<img [src]="BALogoPng" alt="British Airways Logo" width="100" />
```

⚠️ Angular requires `DomSanitizer` for base64 image strings.

---

## 🧩 Vue 3 Example

```vue
<template>
  <div>
    <h2>Qatar Airways</h2>
    <img :src="QR.png" alt="Qatar Logo" width="100" />
  </div>
</template>

<script setup>
import airlineLogos from "airlogos";
const { QR } = airlineLogos;
</script>
```

---

## 🌙 Nuxt 3 Example

```vue
<template>
  <div>
    <img :src="EK.svg" alt="Emirates Logo" width="120" />
  </div>
</template>

<script setup>
import airlineLogos from "airlogos";
const { EK } = airlineLogos;
</script>
```

For Nuxt, no sanitizer is required for base64 in most cases. For stricter CSP setups, sanitize using Nuxt runtime modules.

---

## ❓ What if a logo is missing?

If a logo isn’t available in one format (`svg` or `png`), its value will simply be an empty string (`""`).

---

## 📩 Contact

If you don’t find your desired airline logo, please reach out:

📧 **rummanstack@gmail.com**

---

## 🪪 License

MIT
