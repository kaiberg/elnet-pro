import { KEYS, COLORS, WEIGHTS } from "./constants";

export function setRootColors(colors : any, colorMode : string, root: HTMLElement) {
  setColorsByTheme(true)?.(colors, colorMode, root);
}

function setColorsByTheme(getFN?: boolean) {
 function setRootColors(colors : any, colorMode : string, root: HTMLElement) {
    Object.entries(colors).forEach(([name, colorByTheme]) => {
      if(typeof colorByTheme !== "object" || colorByTheme == null) {
        return;
      }  
      const cssVarName = `--color-${name}`;
  
      const value = colorByTheme[colorMode as keyof typeof colorByTheme];
  
      if(value !== null) {
        root.style.setProperty(cssVarName, value);
      }
    });
  }

  if(getFN) {
    return setRootColors;
  }
  
  const colors = "COLORSVARIABLEREPLACE";
  const colorModeKey = 'KEYVARIABLEREPLACE';
  const colorModeCssProp = 'COLORMODECSSVARIABLEREPLACE';

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkMediaQuery = mediaQuery.matches;
  const localStoragePreference = localStorage.getItem(colorModeKey);

  let colorMode: 'light' | 'dark' = 'light';

  const hasUsedToggle = typeof localStoragePreference === 'string';

  if (hasUsedToggle) {
    if (localStoragePreference === "dark" || localStoragePreference === "light")
      colorMode = localStoragePreference;
  } else {
    colorMode = prefersDarkMediaQuery ? 'dark' : 'light';
  }

  console.log(colorMode);

  const { documentElement: root, body } = document;
  root.style.setProperty(colorModeCssProp, colorMode);
  setRootColors(colors, colorMode, root);
}

export const SetColorsByTheme = () => {
  const { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } = KEYS;
  const colors = COLORS;
  const boundFn = String(setColorsByTheme)
    .replace("\"COLORSVARIABLEREPLACE\"", JSON.stringify(COLORS))
    .replace('KEYVARIABLEREPLACE', COLOR_MODE_KEY)
    .replace('COLORMODECSSVARIABLEREPLACE', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  // calledFunction = Terser.minify(calledFunction).code;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }}/>;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set,
 * This function solves this by injecting a <style> tag into the head of 
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
export const FallbackStyles = () => {
  // Create an object holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  type style = {
    [key: string]: string
  }

  const cssVariableObject = Object.entries(COLORS).reduce((acc: style, [name, colorByTheme]) => {
    acc[`--color-${name}`] = colorByTheme.light;
    return acc;
  }, {});

  return cssVariableObject;
};