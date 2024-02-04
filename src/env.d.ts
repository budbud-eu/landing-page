/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly MAINTENANCE_PAGE: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}