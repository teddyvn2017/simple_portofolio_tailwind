/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
      colors: {
        // Configure your color palette here
        'title':'#21243d',
        'mau_den':'#21243d',
        'mau_do':'#ff6464',
        'mau_trang':'#fff',
        'mau_xam':'#8695a4'
      },

      container: {
        center: true,
        padding: "2rem",//tuong đương với <div class="container p-4 mx-auto"></div>
      },

    },
  },
  plugins: [],
}

