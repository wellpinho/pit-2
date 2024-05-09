import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'customGold': '#B98D58',
      'customPurple': '#321370',
      'customGray': '#E7E5EA',
      'customDark': '#333333',
      'customBrown': '#2B1A14'
    },
    extend: {
      backgroundImage: {
        "imgBanner": "url(/assets/banner.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
