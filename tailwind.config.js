const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
        pb: {
          blue: {
            DEFAULT: "rgba(110, 195, 220, 1)", //#6EC3DC
            dark: "rgba(4, 81, 113, 1)", //#045171
          },
          peach: "rgba(237, 105, 112, 1)", //#ED6969
          yellow: "rgba(245, 215, 122, 1)", //#F5D77A
          pink: "rgba(242, 168, 202, 1)", //#F2A8CA
          wine: "rgba(80, 78, 87, 1)", //#504E57
          whipped: "rgba(239, 232, 242, 1) ", //#EFE8F2
        },
        
      },
      fontFamily: {
        bigjohnpro: "Big John Pro, sans-serif",
        heading: "Gilroy, Poppins, sans-serif",
        body: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
