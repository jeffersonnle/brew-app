import { createTamagui } from "@tamagui/core";
import { createTokens } from "@tamagui/core";

const tokens = createTokens({
  color: {
    backgroundLight: "#fff",
    backgroundDark: "#000",
    textLight: "#000",
    textDark: "#fff",
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
    },
    dark: {
      background: tokens.color.backgroundDark,
      text: tokens.color.textDark,
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
