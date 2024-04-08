/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/presets/**/*.{js,vue,ts}",
  ],
  theme: {

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      
    },
    fontSize: {
      sm: '0.8rem',
      base: '0.875rem',
      xl: '1rem',
      '2xl': '1.125rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    lineHeight: {
      
    },
    extend: {
      colors: {
        "primary": "#043C50",
        "blue1": "#eff0f2",
        "blue2": "#d9dadf", 
        "blue3": "#bbbcc6",
        "blue4": "#9b9dac",
        "blue5": "#7D8093",
        "blue6": "#60647b",
        "blue7": "#525569",
        "blue8": "#444757",
        "blue9": "#373946",
        "blue10": "#2b2d37",
        "table-head-text": "#023C50", 
        "thead-bg": "#EAF1F3",
        "table-border": "#fdfdfd"
      },
      height: {
        '42': '2.625rem'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

    },
  },
  plugins: [],
}