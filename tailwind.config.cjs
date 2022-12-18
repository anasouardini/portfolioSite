/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['index.astro', './src/**/*.{js,ts,jsx,tsx,html,astro}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(101 163 13)',
                dark: '#191919',
            },
            boxShadow: { '2xl': '0 0px 20px 30px rgb(0 0 0 / .4)' },
            spacing: {
                main: 'min(7%, 100px)',
            },
        },
        screens: {
            'nav>': { max: '550px' },
            'astro>': { max: '280px' },
            'xs>': { max: '500px' },
            'sm>': { max: '640px' },
            'md>': { max: '768px' },
            'lg>': { max: '1024px' },
            'xl>': { max: '1280px' },

            'nav<': { min: '550px' },
            'astro<': { min: '280px' },
            'xs<': { min: '500px' },
            'sm<': { min: '641px' },
            'md<': { min: '768px' },
            'lg<': { min: '1024px' },
            'xl<': { min: '1280px' },
        },
    },
    plugins: [],
};
