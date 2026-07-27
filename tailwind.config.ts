import type { Config } from "tailwindcss";

export default {
 content: "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}",
 theme: {
 extend: {
 colors: {
 eco: {
 50: "#f0fdf4",
 100: "#dcfce7",
 200: "#bbf7d0",
 300: "#86efac",
 400: "#4ade80",
 500: "#22c55e",
 600: "#16a34a",
 700: "#15803d",
 800: "#166534",
 900: "#14532d",
 },
 earth: {
 beige: "#f5f0e8",
 sand: "#e8dcc8",
 bark: "#5c4033",
 stone: "#8a7f7a",
 },
 },
 fontFamily: {
 sans: "Inter", "system-ui", "sans-serif",
 },
 },
 },
 plugins: [],
} satisfies Config;
