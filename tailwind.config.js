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
        ".gradient-gray": {
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.08) 3.84%, rgba(0, 0, 0, 0.00) 46.32%, rgba(255, 255, 255, 0.08) 95.33%)",
        },
        ".banner-mask": {
          "clip-path": "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
        },
        ".yellow-shadow": {
          "box-shadow": "0 0 12px #FDD835",
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
        ".caption-2": {
          "font-size": "15px",
          "letter-spacing": "0.25px",
          "font-weight": "bold",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none" /* (Chrome, Safari and Opera) */,
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],

  daisyui: {
    base: false, // applies background color and foreground color for root element by default
  },
};
