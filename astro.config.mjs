// @ts-check
import { defineConfig } from 'astro/config';

// The site is static HTML in /public, served as-is. Astro and Vercel are kept
// only so the existing deployment keeps building without any settings changes.
export default defineConfig({
	site: 'https://atharvanilawar.vercel.app',
});
