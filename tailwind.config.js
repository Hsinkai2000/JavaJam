const colors = {
  primary: {
    DEFAULT: "#556B2F", // Dark Olive Green
    light: "#6B8E23", // Olive Drab
    dark: "#3C4B1B", // Darker Olive Tone
  },
  secondary: {
    DEFAULT: "#8B4513", // Saddle Brown
    light: "#A0522D", // Sienna
    dark: "#5A2A10", // Dark Sienna
  },
  tertiary: {
    DEFAULT: "#4682B4", // Steel Blue
    light: "#87CEFA", // Light Sky Blue
    dark: "#1C3B56", // Darker Steel Blue
  },
  ascent: {
    DEFAULT: "#FF6347", // Tomato
    light: "#FFA07A", // Light Salmon
    dark: "#CC503A", // Darker Tomato
  },
  danger: {
    DEFAULT: "#B22222", // Firebrick
    light: "#DC143C", // Crimson
    dark: "#8B1A1A", // Dark Firebrick
  },
  warning: {
    DEFAULT: "#FFD700", // Gold
    light: "#FFFACD", // Lemon Chiffon
    dark: "#B8860B", // Dark Goldenrod
  },
  success: {
    DEFAULT: "#228B22", // Forest Green
    light: "#32CD32", // Lime Green
    dark: "#006400", // Dark Green
  },
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
