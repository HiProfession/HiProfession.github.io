module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glassw: 'rgba(234,234,234,0.5)',
        glassb: 'rgba(164,164,164,0.5)',

        'light-background': '#F6F6F6',
        'light-background-variant': '#dcdcdc',
        'light-surface': '#757575',
        'light-surface-variant': '#3C3C3C',
        'light-accent': '#2562c2',

        'dark-background': '#132132',
        'dark-background-variant': '#171717',
        'dark-surface': '#78716C',
        'dark-surface-variant': '#2D333B',
        'dark-accent': '#89B6FA',
        'accent-subtle': 'rgb(65,132,228)',
      },
    },
  },
  plugins: [],
}
