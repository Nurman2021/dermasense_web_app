import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgSprite from 'rollup-plugin-stdf-icon';

export default defineConfig({
	plugins: [sveltekit(), svgSprite()],
	optimizeDeps: {
		exclude: ['chromium-bidi']
	  },
});
