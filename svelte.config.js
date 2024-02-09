import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
	kit: {
		vite: {
			ssr: {
				external: ['@xstate/svelte']
			}
			}
		}
};
