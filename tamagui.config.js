import { createTamagui } from "@tamagui/core";
import { createTokens } from "@tamagui/core";
import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'




const tokens = createTokens({
  color: {
    backgroundLight: "#fff",
    backgroundDark: "#000",
    textLight: "#000",
    textDark: "#fff",
    gray3: "#f0f0f0",  // ✅ Add gray3
    gray6: "#d9d9d9",  // ✅ Add gray6
    blue10: "#007aff", // ✅ Add blue10
    green10: "#34c759", // ✅ Add green10
    white: "#ffffff",  // ✅ Add white
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },
  size: {
    sm: 12,
    md: 16,
    lg: 24,
  },
});

const config = createTamagui({
  tokens,  // ✅ Now includes tokens
  themes: {
    light: {
      background: tokens.color.backgroundLight,
      text: tokens.color.textLight,
      gray3: tokens.color.gray3,
      gray6: tokens.color.gray6,
      blue10: tokens.color.blue10,
      green10: tokens.color.green10,
      white: tokens.color.white,
    },
    dark: {
      background: tokens.color.backgroundDark,
      text: tokens.color.textDark,
      gray3: tokens.color.gray3,
      gray6: tokens.color.gray6,
      blue10: tokens.color.blue10,
      green10: tokens.color.green10,
      white: tokens.color.white,
    },
  },
  fonts: {
    body: {
      size: {
        sm: 12,
        md: 16,
        lg: 24,
      },
      weight: {
        regular: "400",
        bold: "700",
      },
    },
  },
  shorthands: {
    bg: "backgroundColor",
    f: "flex",
    ai: "alignItems",
    jc: "justifyContent",
  },
  components: {}, // ✅ Needed even if empty
});

export default config;
