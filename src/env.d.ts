// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />


interface ImportMetaEnv {
    // EmailJS Configuration
    readonly PUBLIC_EMAILJS_SERVICE_ID: string;
    readonly PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID: string;
    readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }