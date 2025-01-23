import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(image|button|form|input|navbar|ripple|spinner).{js,ts,jsx,tsx}",
  ],

  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
} satisfies Config;
