import { defineConfig } from "vite";

import { resolve } from "path";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	// Build options
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "srotas",
			fileName: "srotas",
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	// Plugins
	plugins: [
		react(),
		dts({
			entryRoot: "src",
			exclude: [], // Exclude specific files or directories
			include: ["src"], // Specify your source files
			outDir: "dist/types", // Output directory for type definitions
			insertTypesEntry: true, // Insert a types entry file
		}),
	],
});
