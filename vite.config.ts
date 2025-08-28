import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	// Build options
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "srotas",
			fileName: "srotas",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "jsxRuntime",
				},
			},
			treeshake: {
				moduleSideEffects: false,
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
