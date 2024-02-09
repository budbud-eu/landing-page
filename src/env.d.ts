/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly BENCHMARKEMAIL_AUTH_TOKEN: string
    readonly BENCHMARKEMAIL_CONTACT_LIST_ID: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}