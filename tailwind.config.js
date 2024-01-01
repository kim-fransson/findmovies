import reactAriaComponents from "tailwindcss-react-aria-components";
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          600: "#FDD835",
        },
        gray: {
          100: "#F5F5F5",
          900: "#212121",
        },
      },
      opacity: {
        12: ".12",
        16: ".16",
        36: ".36",
        87: ".87",
      },
    },
  },
  plugins: [
    reactAriaComponents,
    daisyui,
    tailwindcssAnimate,
    // https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227#issuecomment-1139895799
    ({ addUtilities }) => {
      addUtilities({
        ".gradient": {
          background: "linear-gradient(130deg, #FFEE58 0%, #FF8F00 104.33%)",
        },
        ".headline-xl": {
          "font-weight": "600",
          "font-size": "40px",
          "letter-spacing": "0.25px",
          "text-transform": "uppercase",
        },
        ".headline-l": {
          "font-weight": "700",
          "font-size": "32px",
          "letter-spacing": "0.5px",
        },
        ".headline-m": {
          "font-weight": "500",
          "font-size": "21px",
          "letter-spacing": "0.5px",
        },
        ".body": {
          "font-size": "17px",
          "letter-spacing": "0.5px",
          "line-height": "27.2px",
        },
        ".body-2": {
          "font-size": "15px",
          "line-height": "21.75px",
          "letter-spacing": "0.25px",
        },
        ".caption": {
          "font-size": "13px",
          "letter-spacing": "0.4px",
          "text-transform": "uppercase",
        },
      });
    },
  ],

  daisyui: {
    base: false, // applies background color and foreground color for root element by default
  },
};
