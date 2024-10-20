const colors = {
  primary: {
    DEFAULT: "#DFD7BF",
  },
  secondary: {
    DEFAULT: "#F2EAD3",
  },
  dark: {
    DEFAULT: "#3F2305",
  },
  ascent: {
    DEFAULT: "#AB886D",
  },
  white: {
    DEFAULT: "#F5F5F5",
  },
  danger: {
    DEFAULT: "#8B1A1A",
    light: "#DC143C",
    dark: "#7A1B1B",
    pastel: "#F08080",
  },
  warning: {
    DEFAULT: "#C68600",
    light: "#FFD700",
    dark: "#B8860B",
    pastel: "#FFEDB2",
  },
  success: {
    DEFAULT: "#4E7F36",
    light: "#8BBF3A",
    dark: "#005700",
    pastel: "#B8E1A8",
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
