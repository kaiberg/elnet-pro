import {type} from "os";

type darkColorType = 'dark';
type lightColorType = 'light'
export type ColorTypes = darkColorType | lightColorType;

export const colorVariants : { light: lightColorType, dark: darkColorType } = {
    light: 'light' as const,
    dark: 'dark' as const
};

export const KEYS = {
    COLOR_MODE_KEY: 'color-mode',
    INITIAL_COLOR_MODE_CSS_PROP: '--initial-color-mode'
}

export const COLORS = {
    text: {
        light: 'hsl(180,6%,10%)', // white
        dark: 'hsl(160,5%,88%)', // near-black
    },
    background: {
        light: 'hsl(140, 43%, 99%)', // white
        dark: 'hsl(180, 6%, 10%)', // navy navy blue
    },
    primary: {
        light: 'hsl(177, 100%, 21%)', // Pinkish-red
        dark: 'hsl(177, 65%, 58%)', // Yellow
    },
    secondary: {
        light: 'hsl(163, 100%, 21%)', // Purplish-blue
        dark: 'hsl(156, 61%, 64%)', // Cyan
    },
    tertiary: {
        light: 'hsl(173, 100%, 21%)',
        dark: 'hsl(171, 65%, 60%)',
    },
    error: {
        light: 'hsl(0, 75%, 42%)',
        dark: 'hsl(6, 100%, 84%)'
    },
    outline: {
        light: 'hsl(174, 4%, 45%)',
        dark: 'hsl(169, 5%, 55%)',
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


// primary
// --md-ref-palette-primary0: hsl(0, 0%, 0%);
// --md-ref-palette-primary10: hsl(176, 100%, 6%);
// --md-ref-palette-primary20: hsl(177, 100%, 11%);
// --md-ref-palette-primary25: hsl(177, 100%, 13%);
// --md-ref-palette-primary30: hsl(177, 100%, 16%);
// --md-ref-palette-primary35: hsl(177, 100%, 18%);
// --md-ref-palette-primary40: hsl(177, 100%, 21%);
// --md-ref-palette-primary50: hsl(178, 100%, 26%);
// --md-ref-palette-primary60: hsl(177, 100%, 32%);
// --md-ref-palette-primary70: hsl(177, 69%, 44%);
// --md-ref-palette-primary80: hsl(177, 65%, 58%);
// --md-ref-palette-primary90: hsl(176, 89%, 70%);
// --md-ref-palette-primary95: hsl(175, 100%, 85%);
// --md-ref-palette-primary98: hsl(174, 100%, 95%);
// --md-ref-palette-primary99: hsl(171, 100%, 97%);
// --md-ref-palette-primary100: hsl(0, 0%, 100%);
/* secondary */
// --md-ref-palette-secondary0: hsl(0, 0%, 0%);
// --md-ref-palette-secondary10: hsl(158, 100%, 6%);
// --md-ref-palette-secondary20: hsl(162, 100%, 11%);
// --md-ref-palette-secondary25: hsl(162, 100%, 14%);
// --md-ref-palette-secondary30: hsl(163, 100%, 16%);
// --md-ref-palette-secondary35: hsl(163, 100%, 18%);
// --md-ref-palette-secondary40: hsl(163, 100%, 21%);
// --md-ref-palette-secondary50: hsl(164, 100%, 27%);
// --md-ref-palette-secondary60: hsl(160, 61%, 40%);
// --md-ref-palette-secondary70: hsl(158, 48%, 52%);
// --md-ref-palette-secondary80: hsl(156, 61%, 64%);
// --md-ref-palette-secondary90: hsl(155, 89%, 75%);
// --md-ref-palette-secondary95: hsl(151, 100%, 87%);
// --md-ref-palette-secondary98: hsl(145, 100%, 95%);
// --md-ref-palette-secondary99: hsl(136, 100%, 98%);
// --md-ref-palette-secondary100: hsl(0, 0%, 100%);
// /* tertiary */
// --md-ref-palette-tertiary0: hsl(0, 0%, 0%);
// --md-ref-palette-tertiary10: hsl(173, 100%, 6%);
// --md-ref-palette-tertiary20: hsl(173, 100%, 11%);
// --md-ref-palette-tertiary25: hsl(173, 100%, 13%);
// --md-ref-palette-tertiary30: hsl(173, 100%, 16%);
// --md-ref-palette-tertiary35: hsl(174, 100%, 18%);
// --md-ref-palette-tertiary40: hsl(173, 100%, 21%);
// --md-ref-palette-tertiary50: hsl(173, 100%, 26%);
// --md-ref-palette-tertiary60: hsl(173, 100%, 32%);
// --md-ref-palette-tertiary70: hsl(172, 61%, 47%);
// --md-ref-palette-tertiary80: hsl(171, 65%, 60%);
// --md-ref-palette-tertiary90: hsl(170, 90%, 72%);
// --md-ref-palette-tertiary95: hsl(168, 100%, 85%);
// --md-ref-palette-tertiary98: hsl(164, 100%, 95%);
// --md-ref-palette-tertiary99: hsl(160, 100%, 98%);
// --md-ref-palette-tertiary100: hsl(0, 0%, 100%);
/* neutral */
// --md-ref-palette-neutral0: hsl(0, 0%, 0%);
// --md-ref-palette-neutral10: hsl(180, 6%, 10%);
// --md-ref-palette-neutral20: hsl(180, 4%, 18%);
// --md-ref-palette-neutral25: hsl(165, 3%, 23%);
// --md-ref-palette-neutral30: hsl(180, 2%, 27%);
// --md-ref-palette-neutral35: hsl(165, 2%, 32%);
// --md-ref-palette-neutral40: hsl(165, 2%, 36%);
// --md-ref-palette-neutral50: hsl(165, 2%, 46%);
// --md-ref-palette-neutral60: hsl(160, 1%, 56%);
// --md-ref-palette-neutral70: hsl(160, 2%, 67%);
// --md-ref-palette-neutral80: hsl(160, 3%, 77%);
// --md-ref-palette-neutral90: hsl(160, 5%, 88%);
// --md-ref-palette-neutral95: hsl(150, 7%, 94%);
// --md-ref-palette-neutral98: hsl(140, 23%, 97%);
// --md-ref-palette-neutral99: hsl(140, 43%, 99%);
// --md-ref-palette-neutral100: hsl(0, 0%, 100%);
// /* neutral-variant */
// --md-ref-palette-neutral-variant0: hsl(0, 0%, 0%);
// --md-ref-palette-neutral-variant10: hsl(173, 18%, 10%);
// --md-ref-palette-neutral-variant20: hsl(173, 10%, 18%);
// --md-ref-palette-neutral-variant25: hsl(173, 8%, 22%);
// --md-ref-palette-neutral-variant30: hsl(174, 7%, 27%);
// --md-ref-palette-neutral-variant35: hsl(174, 6%, 31%);
// --md-ref-palette-neutral-variant40: hsl(174, 5%, 36%);
// --md-ref-palette-neutral-variant50: hsl(174, 4%, 45%);
// --md-ref-palette-neutral-variant60: hsl(169, 5%, 55%);
// --md-ref-palette-neutral-variant70: hsl(174, 6%, 66%);
// --md-ref-palette-neutral-variant80: hsl(169, 9%, 77%);
// --md-ref-palette-neutral-variant90: hsl(169, 17%, 88%);
// --md-ref-palette-neutral-variant95: hsl(168, 29%, 93%);
// --md-ref-palette-neutral-variant98: hsl(164, 65%, 97%);
// --md-ref-palette-neutral-variant99: hsl(168, 83%, 98%);
// --md-ref-palette-neutral-variant100: hsl(0, 0%, 100%);
/* error */
// --md-ref-palette-error0: hsl(0, 0%, 0%);
// --md-ref-palette-error10: hsl(358, 100%, 13%);
// --md-ref-palette-error20: hsl(357, 100%, 21%);
// --md-ref-palette-error25: hsl(357, 100%, 25%);
// --md-ref-palette-error30: hsl(356, 100%, 29%);
// --md-ref-palette-error35: hsl(357, 92%, 34%);
// --md-ref-palette-error40: hsl(0, 75%, 42%);
// --md-ref-palette-error50: hsl(2, 73%, 53%);
// --md-ref-palette-error60: hsl(4, 100%, 64%);
// --md-ref-palette-error70: hsl(6, 100%, 75%);
// --md-ref-palette-error80: hsl(6, 100%, 84%);
// --md-ref-palette-error90: hsl(6, 100%, 92%);
// --md-ref-palette-error95: hsl(9, 100%, 96%);
// --md-ref-palette-error98: hsl(7, 100%, 98%);
// --md-ref-palette-error99: hsl(300, 100%, 99%);
// --md-ref-palette-error100: hsl(0, 0%, 100%);

/* light */
// --md-sys-color-on-primary-light: hsl(0, 0%, 100%);
// --md-sys-color-primary-container-light: hsl(176, 89%, 70%);
// --md-sys-color-on-primary-container-light: hsl(176, 100%, 6%);
// --md-sys-color-on-secondary-light: hsl(0, 0%, 100%);
// --md-sys-color-secondary-container-light: hsl(155, 89%, 75%);
// --md-sys-color-on-secondary-container-light: hsl(158, 100%, 6%);
// --md-sys-color-on-tertiary-light: hsl(0, 0%, 100%);
// --md-sys-color-tertiary-container-light: hsl(170, 90%, 72%);
// --md-sys-color-on-tertiary-container-light: hsl(173, 100%, 6%);
// --md-sys-color-error-container-light: hsl(6, 100%, 92%);
// --md-sys-color-on-error-light: hsl(0, 0%, 100%);
// --md-sys-color-on-error-container-light: hsl(358, 100%, 13%);
// --md-sys-color-on-background-light: hsl(180, 6%, 10%);
// --md-sys-color-surface-light: hsl(140, 43%, 99%);
// --md-sys-color-on-surface-light: hsl(180, 6%, 10%);
// --md-sys-color-surface-variant-light: hsl(169, 17%, 88%);
// --md-sys-color-on-surface-variant-light: hsl(174, 7%, 27%);
// --md-sys-color-outline-light: hsl(174, 4%, 45%);
// --md-sys-color-inverse-on-surface-light: hsl(150, 7%, 94%);
// --md-sys-color-inverse-surface-light: hsl(180, 4%, 18%);
// --md-sys-color-inverse-primary-light: hsl(177, 65%, 58%);
// --md-sys-color-shadow-light: hsl(0, 0%, 0%);
// --md-sys-color-surface-tint-light: hsl(177, 100%, 21%);
// --md-sys-color-outline-variant-light: hsl(169, 9%, 77%);
// --md-sys-color-scrim-light: hsl(0, 0%, 0%);

/* dark */
// --md-sys-color-on-primary-dark: hsl(177, 100%, 11%);
// --md-sys-color-primary-container-dark: hsl(177, 100%, 16%);
// --md-sys-color-on-primary-container-dark: hsl(176, 89%, 70%);
// --md-sys-color-on-secondary-dark: hsl(162, 100%, 11%);
// --md-sys-color-secondary-container-dark: hsl(163, 100%, 16%);
// --md-sys-color-on-secondary-container-dark: hsl(155, 89%, 75%);
// --md-sys-color-on-tertiary-dark: hsl(173, 100%, 11%);
// --md-sys-color-tertiary-container-dark: hsl(173, 100%, 16%);
// --md-sys-color-on-tertiary-container-dark: hsl(170, 90%, 72%);
// --md-sys-color-error-container-dark: hsl(356, 100%, 29%);
// --md-sys-color-on-error-dark: hsl(357, 100%, 21%);
// --md-sys-color-on-error-container-dark: hsl(6, 100%, 92%);
// --md-sys-color-on-background-dark: hsl(160, 5%, 88%);
// --md-sys-color-surface-dark: hsl(180, 6%, 10%);
// --md-sys-color-on-surface-dark: hsl(160, 5%, 88%);
// --md-sys-color-surface-variant-dark: hsl(174, 7%, 27%);
// --md-sys-color-on-surface-variant-dark: hsl(169, 9%, 77%);
// --md-sys-color-outline-dark: hsl(169, 5%, 55%);
// --md-sys-color-inverse-on-surface-dark: hsl(180, 6%, 10%);
// --md-sys-color-inverse-surface-dark: hsl(160, 5%, 88%);
// --md-sys-color-inverse-primary-dark: hsl(177, 100%, 21%);
// --md-sys-color-shadow-dark: hsl(0, 0%, 0%);
// --md-sys-color-surface-tint-dark: hsl(177, 65%, 58%);
// --md-sys-color-outline-variant-dark: hsl(174, 7%, 27%);
// --md-sys-color-scrim-dark: hsl(0, 0%, 0%);

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