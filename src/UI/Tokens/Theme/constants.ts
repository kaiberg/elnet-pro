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
        light: 'hsl(180,6%,10%)',
        dark: 'hsl(160,5%,88%)',
    },
    background: {
        light: 'hsl(140, 43%, 99%)',
        dark: 'hsl(180, 6%, 10%)',
    },
    primary: {
        light: 'hsl(177, 100%, 21%)',
        dark: 'hsl(177, 65%, 58%)'
    },
    "primary-0": {light:'hsl(0, 0%, 0%)', dark:'hsl(0, 0%, 0%)'},
    "primary-10": {light: 'hsl(176, 100%, 6%)', dark: 'hsl(176, 100%, 6%)'},
    "primary-20": {light: 'hsl(177, 100%, 11%)', dark:'hsl(177, 100%, 11%)'},
    "primary-25": {light: 'hsl(177, 100%, 13%)', dark:'hsl(177, 100%, 13%)'},
    "primary-30": {light: 'hsl(177, 100%, 16%)', dark:'hsl(177, 100%, 16%)'},
    "primary-35": {light: 'hsl(177, 100%, 18%)', dark:'hsl(177, 100%, 18%)'},
    "primary-40": {light: 'hsl(177, 100%, 21%)', dark:'hsl(177, 100%, 21%)'},
    "primary-50": {light: 'hsl(178, 100%, 26%)', dark:'hsl(178, 100%, 26%)'},
    "primary-60": {light: 'hsl(177, 100%, 32%)', dark:'hsl(177, 100%, 32%)'},
    "primary-70": {light: 'hsl(177, 69%, 44%)', dark: 'hsl(177, 69%, 44%)'},
    "primary-80": {light: 'hsl(177, 65%, 58%)', dark: 'hsl(177, 65%, 58%)'},
    "primary-90": {light: 'hsl(176, 89%, 70%)', dark: 'hsl(176, 89%, 70%)'},
    "primary-95": {light: 'hsl(175, 100%, 85%)', dark:'hsl(175, 100%, 85%)'},
    "primary-98": {light: 'hsl(174, 100%, 95%)', dark:'hsl(174, 100%, 95%)'},
    "primary-99": {light: 'hsl(171, 100%, 97%)', dark:'hsl(171, 100%, 97%)'},
    "primary-100": {light: 'hsl(0, 0%, 100%)', dark: 'hsl(0, 0%, 100%)'},
    secondary: {
        light: 'hsl(163, 100%, 21%)',
        dark: 'hsl(156, 61%, 64%)',
    },
    "secondary-0": {light: 'hsl(0, 0%, 0%)', dark: 'hsl(0, 0%, 0%)'},
    "secondary-10": {light: 'hsl(158, 100%, 6%)', dark: 'hsl(158, 100%, 6%)'},
    "secondary-20": {light: 'hsl(162, 100%, 11%)',dark: 'hsl(162, 100%, 11%)'},
    "secondary-25": {light: 'hsl(162, 100%, 14%)',dark: 'hsl(162, 100%, 14%)'},
    "secondary-30": {light: 'hsl(163, 100%, 16%)',dark: 'hsl(163, 100%, 16%)'},
    "secondary-35": {light: 'hsl(163, 100%, 18%)',dark: 'hsl(163, 100%, 18%)'},
    "secondary-40": {light: 'hsl(163, 100%, 21%)',dark: 'hsl(163, 100%, 21%)'},
    "secondary-50": {light: 'hsl(164, 100%, 27%)',dark: 'hsl(164, 100%, 27%)'},
    "secondary-60": {light: 'hsl(160, 61%, 40%)',dark: 'hsl(160, 61%, 40%)'},
    "secondary-70": {light: 'hsl(158, 48%, 52%)',dark: 'hsl(158, 48%, 52%)'},
    "secondary-80": {light: 'hsl(156, 61%, 64%)',dark: 'hsl(156, 61%, 64%)'},
    "secondary-90": {light: 'hsl(155, 89%, 75%)',dark: 'hsl(155, 89%, 75%)'},
    "secondary-95": {light: 'hsl(151, 100%, 87%)',dark: 'hsl(151, 100%, 87%)'},
    "secondary-98": {light: 'hsl(145, 100%, 95%)',dark: 'hsl(145, 100%, 95%)'},
    "secondary-99": {light: 'hsl(136, 100%, 98%)',dark: 'hsl(136, 100%, 98%)'},
    "secondary-100": {light: 'hsl(0, 0%, 100%)', dark: 'hsl(0, 0%, 100%)'},
    tertiary: {
        light: 'hsl(173, 100%, 21%)',
        dark: 'hsl(171, 65%, 60%)',
    },
    "tertiary-0":  {light: 'hsl(0, 0%, 0%)', dark: 'hsl(0, 0%, 0%)'},
    "tertiary-10": {light: 'hsl(173, 100%, 6%)', dark: 'hsl(173, 100%, 6%)'},
    "tertiary-20": {light: 'hsl(173, 100%, 11%)', dark: 'hsl(173, 100%, 11%)'},
    "tertiary-25": {light: 'hsl(173, 100%, 13%)', dark: 'hsl(173, 100%, 13%)'},
    "tertiary-30": {light: 'hsl(173, 100%, 16%)', dark: 'hsl(173, 100%, 16%)'},
    "tertiary-35": {light: 'hsl(174, 100%, 18%)', dark: 'hsl(174, 100%, 18%)'},
    "tertiary-40": {light: 'hsl(173, 100%, 21%)', dark: 'hsl(173, 100%, 21%)'},
    "tertiary-50": {light: 'hsl(173, 100%, 26%)', dark: 'hsl(173, 100%, 26%)'},
    "tertiary-60": {light: 'hsl(173, 100%, 32%)', dark: 'hsl(173, 100%, 32%)'},
    "tertiary-70": {light: 'hsl(172, 61%, 47%)', dark: 'hsl(172, 61%, 47%)'},
    "tertiary-80": {light: 'hsl(171, 65%, 60%)', dark: 'hsl(171, 65%, 60%)'},
    "tertiary-90": {light: 'hsl(170, 90%, 72%)', dark: 'hsl(170, 90%, 72%)'},
    "tertiary-95": {light: 'hsl(168, 100%, 85%)', dark: 'hsl(168, 100%, 85%)'},
    "tertiary-98": {light: 'hsl(164, 100%, 95%)', dark: 'hsl(164, 100%, 95%)'},
    "tertiary-99": {light: 'hsl(160, 100%, 98%)', dark: 'hsl(160, 100%, 98%)'},
    "tertiary-100": {light:  'hsl(0, 0%, 100%)'  , dark: 'hsl(0, 0%, 100%)'},
    neutral: { light: 'hsl(0, 0%, 0%)', dark: 0 },
    "neutral-0": {light: 'hsl(0, 0%, 0%)', dark: 0},
    "neutral-10": {light: 'hsl(180, 6%, 10%)', dark: 'hsl(180, 6%, 10%)'},
    "neutral-20": {light: 'hsl(180, 4%, 18%)', dark: 'hsl(180, 4%, 18%)'},
    "neutral-25": {light: 'hsl(165, 3%, 23%)', dark: 'hsl(165, 3%, 23%)'},
    "neutral-30": {light: 'hsl(180, 2%, 27%)', dark: 'hsl(180, 2%, 27%)'},
    "neutral-35": {light: 'hsl(165, 2%, 32%)', dark: 'hsl(165, 2%, 32%)'},
    "neutral-40": {light: 'hsl(165, 2%, 36%)', dark: 'hsl(165, 2%, 36%)'},
    "neutral-50": {light: 'hsl(165, 2%, 46%)', dark: 'hsl(165, 2%, 46%)'},
    "neutral-60": {light: 'hsl(160, 1%, 56%)', dark: 'hsl(160, 1%, 56%)'},
    "neutral-70": {light: 'hsl(160, 2%, 67%)', dark: 'hsl(160, 2%, 67%)'},
    "neutral-80": {light: 'hsl(160, 3%, 77%)', dark: 'hsl(160, 3%, 77%)'},
    "neutral-90": {light: 'hsl(160, 5%, 88%)', dark: 'hsl(160, 5%, 88%)'},
    "neutral-95": {light: 'hsl(150, 7%, 94%)', dark: 'hsl(150, 7%, 94%)'},
    "neutral-98": {light: 'hsl(140, 23%, 97%)', dark:'hsl(140, 23%, 97%)'},
    "neutral-99": {light: 'hsl(140, 43%, 99%)', dark:'hsl(140, 43%, 99%)'},
    "neutral-100": {light: 'hsl(0, 0%, 100%)', dark: 'hsl(0, 0%, 100%)'},

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
    scrim: {
        light: '0, 0%, 0%',
        dark: '0, 0%, 0%'
    }
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