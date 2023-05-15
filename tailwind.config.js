/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#E8EDF3',
        secondary: '#33A6BA',
        info: '#989EA7',
        warning: '#CED7E0',
      },
      textColor: {
        primary: '#33A6BA',
        secondary: '#E8EDF3',
        info: '#313E4F',
        success: '#989EA7',
        warning: '#FF7B92',
      },
      fontSize: {
        xl: ['4rem', '100%'],
        '2xl': ['1rem', '150%'],
        '3xl': ['1.5rem', '150%'],
        '4xl': ['1rem', '24px'],
        '5xl': ['12px', '12px'],
        '6xl': ['20px', '30px'],
      },
      width: {
        sm: '318px',
        md: '270px',
      },
      height: {
        min: '40px',
        rd: '80px',
        sm: '56px',
        md: '108px',
        lg: '338px',
        mx: '765px',
      },
      boxShadow: {
        DEFAULT: '0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        primary: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        primary: '25px',
      },
      borderColor: {
        primary: '#313E4F',
        secondary: '#33A6BA',
        warning: '#FF7B92',
      },
    },
  },
  plugins: [],
}
