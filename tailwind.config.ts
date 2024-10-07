import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			BrandBusiness: 'hsl(var(--brand-business))',
			BrandOfficial: 'hsl(var(--brand-official))',
			BrandOnContrasted: 'hsl(var(--brand-oncontrasted))',
			BrandPrimary: 'hsl(var(--brand-primary))',
			BrandSecondary: 'hsl(var(--brand-secondary))',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
