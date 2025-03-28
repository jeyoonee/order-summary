module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        muted: "var(--color-muted)",
        dark: "var(--color-dark)",
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 필요시 .jsx, .tsx 확장자 추가
  ],
  plugins: [],
};
