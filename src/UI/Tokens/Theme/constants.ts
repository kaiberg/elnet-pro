export const KEYS = {
    COLOR_MODE_KEY: 'color-mode',
    INITIAL_COLOR_MODE_CSS_PROP: '--initial-color-mode'
}

export const COLORS = {
    text: {
        light: 'hsl(0deg, 0%, 10%)', // white
        dark: 'hsl(0deg, 0%, 100%)', // near-black
    },
    background: {
        light: 'hsl(0deg, 0%, 100%)', // white
        dark: 'hsl(250deg, 70%, 7%)', // navy navy blue
    },
    primary: {
        light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
        dark: 'hsl(50deg, 100%, 50%)', // Yellow
    },
    secondary: {
        light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
        dark: 'hsl(190deg, 100%, 40%)', // Cyan
    },
    // Grays, scaling from least-noticeable to most-noticeable
    "gray-100": {
        light: 'hsl(0deg, 0%, 90%)',
        dark: 'hsl(0deg, 0%, 10%)',
    },
    "gray-300": {
        light: 'hsl(0deg, 0%, 70%)',
        dark: 'hsl(0deg, 0%, 30%)',
    },
    "gray-500": {
        light: 'hsl(0deg, 0%, 50%)',
        dark: 'hsl(0deg, 0%, 50%)',
    },
    "gray-700": {
        light: 'hsl(0deg, 0%, 30%)',
        dark: 'hsl(0deg, 0%, 70%)',
    },
    "gray-900": {
        light: 'hsl(0deg, 0%, 10%)',
        dark: 'hsl(0deg, 0%, 90%)',
    },
};

// --color-gray-100: hsl(210deg, 15%, 20%);
//     --color-gray-200: hsl(210deg, 15%, 25%);
//     --color-gray-300: hsl(210deg, 10%, 40%);
//     --color-gray-400: hsl(210deg, 9%, 45%);
//     --color-gray-500: hsl(210deg, 8%, 50%);
//     --color-gray-600: hsl(210deg, 12%, 55%);
//     --color-gray-700: hsl(210deg, 14%, 66%);
//     --color-gray-900: hsl(210deg, 25%, 88%);

// export const COLORS = {
//     white: 'hsl(0deg, 0%, 100%)',
//     gray: {
//       100: 'hsl(185deg, 5%, 95%)',
//       300: 'hsl(190deg, 5%, 80%)',
//       500: 'hsl(196deg, 4%, 60%)',
//       700: 'hsl(220deg, 5%, 40%)',
//       900: 'hsl(220deg, 3%, 20%)',
//     },
//     primary: 'hsl(340deg, 65%, 47%)',
//     secondary: 'hsl(240deg, 60%, 63%)',
//   };