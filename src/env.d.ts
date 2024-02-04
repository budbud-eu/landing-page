/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly SOON_PAGE: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}