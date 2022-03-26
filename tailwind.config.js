module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      vxs: "250px",
      xs: "300px",
      sm: "400px",
      vxxmd: "450px",
      vxmd: "500px",
      xmd: "560px",
      md: "650px",
      lg: "800px",
      xlg: "950px",
      xl: "1020px",
      "2xl": "1124px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1020px",
        xl: "1050px",
        "2xl": "1124px",
      },
    },
    extend: {
      colors: {
        bm_purple: "#5267DF",
        bm_red: "#fa5959",
        bm_blue: "#242a45",
        bm_gray: "#9194a2",
        bm_white: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
