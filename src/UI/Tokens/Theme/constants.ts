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

// --color-primary-container-light: #6ff6f9;
// --color-on-primary-container-light: #002020;
// --color-tertiary-container-light: #6ff6f9;
// --color-on-tertiary-container-light: #002021;
// --color-error-container-light: #ffdad6;
// --color-on-error-container-light: #410002;
// --color-surface-variant-light: #dae4e4;
// --color-on-surface-variant-light: #3f4949;
// --color-inverse-on-surface-light: #eff1f0;
// --color-inverse-surface-light: #2d3131;
// --color-inverse-primary-light: #4cdadc;
// --color-outline-variant-light: #bec8c8;
/* dark */
// --color-primary-container-dark: #004f51;
// --color-on-primary-container-dark: #6ff6f9;
// --color-tertiary-container-dark: #004f51;
// --color-on-tertiary-container-dark: #6ff6f9;
// --color-error-container-dark: #93000a;
// --color-on-error-container-dark: #ffdad6;
// --color-surface-variant-dark: #3f4949;
// --color-on-surface-variant-dark: #bec8c8;
// --color-inverse-on-surface-dark: #191c1c;
// --color-inverse-surface-dark: #e0e3e2;
// --color-inverse-primary-dark: #00696b;
// --color-outline-variant-dark: #3f4949;

export const COLORS = {
    background: {
        light: 'hsl(140, 43%, 99%)',
        dark: 'hsl(180, 6%, 10%)',
    },
    "on-background": {
        light: 'hsl(180,6%,10%)',
        dark: 'hsl(160,5%,88%)'
    },
    primary: {
        light: 'hsl(177, 100%, 21%)',
        dark: 'hsl(181,67%,58%)',
    },
    "on-primary": {
        light: 'hsl(0,0%,100%)',
        dark: 'hsl(181,100%,11%)'
    },
    secondary: {
        light: 'hsl(163, 100%, 21%)',
        dark: 'hsl(155, 61%, 64%)',
    },
    "on-secondary": {
        light: 'hsl(0,0%,100%)',
        dark: 'hsl(161,100%,11%)'
    },
    "secondary-container": {
        light: 'hsl(154,89%,75%)',
        dark: 'hsl(162,100%,16%)',
    },
    "on-secondary-container": {
        light: 'hsl(158,100%,6%)',
        dark: 'hsl(154,89%,75%)'
    },
    tertiary: {
        light: 'hsl(173, 100%, 21%)',
        dark: 'hsl(181,68%,58%)',
    },
    "on-tertiary": {
        light: 'hsl(0,0%,100%)',
        dark: 'hsl(181,100%,11%)'
    },
    error: {
        light: 'hsl(0, 75%, 42%)',
        dark: 'hsl(6, 100%, 84%)'
    },
    "on-error": {
        light: 'hsl(0,0%,100%)',
        dark: 'hsl(357,100%,21%)'
    },
    outline: {
        light: 'hsl(174, 4%, 45%)',
        dark: 'hsl(174,4%,56%)',
    },
    scrim: {
        light: 'hsl(0, 0%, 0%)',
        dark: 'hsl(0, 0%, 0%)'
    },
    shadow: {
        light: 'hsl(0,0%,0%)',
        dark: 'hsl(0,0%,0%)',
    },
    surface: {
        light: 'hsl(160,43%,99%)',
        dark: 'hsl(180,6%,10%)'
    },
    "surface-tint": {
      light: 'hsl(181,100%,21%)',
      dark: 'hsl(181,67%,58%)'
    },
    "on-surface": {
        light: "hsl(180,6%,10%)",
        dark: "hsl(160,5%,88%)"
    },
    "surface-container-low": {
        light: "hsl(150, 7%, 94%)",
        dark: "hsl(180, 6%, 10%)"
    }
};

// "primary-0": {light:'hsl(0, 0%, 0%)', dark:'hsl(0, 0%, 0%)'},
// "primary-10": {light: 'hsl(176, 100%, 6%)', dark: 'hsl(176, 100%, 6%)'},
// "primary-20": {light: 'hsl(177, 100%, 11%)', dark:'hsl(177, 100%, 11%)'},
// "primary-25": {light: 'hsl(177, 100%, 13%)', dark:'hsl(177, 100%, 13%)'},
// "primary-30": {light: 'hsl(177, 100%, 16%)', dark:'hsl(177, 100%, 16%)'},
// "primary-35": {light: 'hsl(177, 100%, 18%)', dark:'hsl(177, 100%, 18%)'},
// "primary-40": {light: 'hsl(177, 100%, 21%)', dark:'hsl(177, 100%, 21%)'},
// "primary-50": {light: 'hsl(178, 100%, 26%)', dark:'hsl(178, 100%, 26%)'},
// "primary-60": {light: 'hsl(177, 100%, 32%)', dark:'hsl(177, 100%, 32%)'},
// "primary-70": {light: 'hsl(177, 69%, 44%)', dark: 'hsl(177, 69%, 44%)'},
// "primary-80": {light: 'hsl(177, 65%, 58%)', dark: 'hsl(177, 65%, 58%)'},
// "primary-90": {light: 'hsl(176, 89%, 70%)', dark: 'hsl(176, 89%, 70%)'},
// "primary-95": {light: 'hsl(175, 100%, 85%)', dark:'hsl(175, 100%, 85%)'},
// "primary-98": {light: 'hsl(174, 100%, 95%)', dark:'hsl(174, 100%, 95%)'},
// "primary-99": {light: 'hsl(171, 100%, 97%)', dark:'hsl(171, 100%, 97%)'},
// "primary-100": {light: 'hsl(0, 0%, 100%)', dark: 'hsl(0, 0%, 100%)'},

// "secondary-0": {light: 'hsl(0, 0%, 0%)', dark: 'hsl(0, 0%, 0%)'},
// "secondary-10": {light: 'hsl(158, 100%, 6%)', dark: 'hsl(158, 100%, 6%)'},
// "secondary-20": {light: 'hsl(162, 100%, 11%)',dark: 'hsl(162, 100%, 11%)'},
// "secondary-25": {light: 'hsl(162, 100%, 14%)',dark: 'hsl(162, 100%, 14%)'},
// "secondary-30": {light: 'hsl(163, 100%, 16%)',dark: 'hsl(163, 100%, 16%)'},
// "secondary-35": {light: 'hsl(163, 100%, 18%)',dark: 'hsl(163, 100%, 18%)'},
// "secondary-40": {light: 'hsl(163, 100%, 21%)',dark: 'hsl(163, 100%, 21%)'},
// "secondary-50": {light: 'hsl(164, 100%, 27%)',dark: 'hsl(164, 100%, 27%)'},
// "secondary-60": {light: 'hsl(160, 61%, 40%)',dark: 'hsl(160, 61%, 40%)'},
// "secondary-70": {light: 'hsl(158, 48%, 52%)',dark: 'hsl(158, 48%, 52%)'},
// "secondary-80": {light: 'hsl(156, 61%, 64%)',dark: 'hsl(156, 61%, 64%)'},
// "secondary-90": {light: 'hsl(155, 89%, 75%)',dark: 'hsl(155, 89%, 75%)'},
// "secondary-95": {light: 'hsl(151, 100%, 87%)',dark: 'hsl(151, 100%, 87%)'},
// "secondary-98": {light: 'hsl(145, 100%, 95%)',dark: 'hsl(145, 100%, 95%)'},
// "secondary-99": {light: 'hsl(136, 100%, 98%)',dark: 'hsl(136, 100%, 98%)'},
// "secondary-100": {light: 'hsl(0, 0%, 100%)', dark: 'hsl(0, 0%, 100%)'},

// "tertiary-0":  {light: 'hsl(0, 0%, 0%)', dark: 'hsl(0, 0%, 0%)'},
// "tertiary-10": {light: 'hsl(173, 100%, 6%)', dark: 'hsl(173, 100%, 6%)'},
// "tertiary-20": {light: 'hsl(173, 100%, 11%)', dark: 'hsl(173, 100%, 11%)'},
// "tertiary-25": {light: 'hsl(173, 100%, 13%)', dark: 'hsl(173, 100%, 13%)'},
// "tertiary-30": {light: 'hsl(173, 100%, 16%)', dark: 'hsl(173, 100%, 16%)'},
// "tertiary-35": {light: 'hsl(174, 100%, 18%)', dark: 'hsl(174, 100%, 18%)'},
// "tertiary-40": {light: 'hsl(173, 100%, 21%)', dark: 'hsl(173, 100%, 21%)'},
// "tertiary-50": {light: 'hsl(173, 100%, 26%)', dark: 'hsl(173, 100%, 26%)'},
// "tertiary-60": {light: 'hsl(173, 100%, 32%)', dark: 'hsl(173, 100%, 32%)'},
// "tertiary-70": {light: 'hsl(172, 61%, 47%)', dark: 'hsl(172, 61%, 47%)'},
// "tertiary-80": {light: 'hsl(171, 65%, 60%)', dark: 'hsl(171, 65%, 60%)'},
// "tertiary-90": {light: 'hsl(170, 90%, 72%)', dark: 'hsl(170, 90%, 72%)'},
// "tertiary-95": {light: 'hsl(168, 100%, 85%)', dark: 'hsl(168, 100%, 85%)'},
// "tertiary-98": {light: 'hsl(164, 100%, 95%)', dark: 'hsl(164, 100%, 95%)'},
// "tertiary-99": {light: 'hsl(160, 100%, 98%)', dark: 'hsl(160, 100%, 98%)'},
// "tertiary-100": {light:  'hsl(0, 0%, 100%)'  , dark: 'hsl(0, 0%, 100%)'},

// "neutral-0": {light: 'hsl(0, 0%, 0%)', dark: 0},
// "neutral-10": {light: 'hsl(180, 6%, 10%)', dark: 'hsl(180, 6%, 10%)'},
// "neutral-20": {light: 'hsl(180, 4%, 18%)', dark: 'hsl(180, 4%, 18%)'},
// "neutral-25": {light: 'hsl(165, 3%, 23%)', dark: 'hsl(165, 3%, 23%)'},
// "neutral-30": {light: 'hsl(180, 2%, 27%)', dark: 'hsl(180, 2%, 27%)'},
// "neutral-35": {light: 'hsl(165, 2%, 32%)', dark: 'hsl(165, 2%, 32%)'},
// "neutral-40": {light: 'hsl(165, 2%, 36%)', dark: 'hsl(165, 2%, 36%)'},
// "neutral-50": {light: 'hsl(165, 2%, 46%)', dark: 'hsl(165, 2%, 46%)'},
// "neutral-60": {light: 'hsl(160, 1%, 56%)', dark: 'hsl(160, 1%, 56%)'},
// "neutral-70": {light: 'hsl(160, 2%, 67%)', dark: 'hsl(160, 2%, 67%)'},
// "neutral-80": {light: 'hsl(160, 3%, 77%)', dark: 'hsl(160, 3%, 77%)'},
// "neutral-90": {light: 'hsl(160, 5%, 88%)', dark: 'hsl(160, 5%, 88%)'},
// "neutral-95": {light: 'hsl(150, 7%, 94%)', dark: 'hsl(150, 7%, 94%)'},
// "neutral-98": {light: 'hsl(140, 23%, 97%)', dark:'hsl(140, 23%, 97%)'},
// "neutral-99": {light: 'hsl(140, 43%, 99%)', dark:'hsl(140, 43%, 99%)'},
// "neutral-100": {light: 'hsl(0, 0%, 100%)', dark: 'hsl(0, 0%, 100%)'},