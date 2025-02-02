import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__CENSUS_VERSION__: JSON.stringify(process.env.npm_package_version),
	},
});
