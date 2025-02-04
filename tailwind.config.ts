import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@heroui/theme/dist/components/(card|textarea|avatar|button|date-picker|dropdown|form|image|input|link|navbar|popover|radio|ripple|spinner|tabs|user|calendar|date-input|menu|divider).{js,ts,jsx,tsx}",
  ],

  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
} satisfies Config;
