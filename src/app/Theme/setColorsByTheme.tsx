export function SetColorsByTheme() {
  let code2 = `
  (function() {
    alert('no site for u !');
  })()
  `;

  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      /* Same code as earlier */
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? 'lighttext'
        : 'darktext'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? 'lighttext'
        : 'darktext'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? 'lightpr'
        : 'darkpr'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: code2 }} />;
}


function setColorsByTheme() {
    const colors = '🌈';
    const colorModeKey = '🔑';
    const colorModeCssProp = '⚡️';
  
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkMediaQuery = mediaQuery.matches;
    const localStoragePreference = localStorage.getItem(colorModeKey);
  
    let colorMode = 'light';
  
    const hasUsedToggle = typeof localStoragePreference === 'string';
  
    if (hasUsedToggle) {
      colorMode = localStoragePreference;
    } else {
      colorMode = prefersDarkMediaQuery ? 'dark' : 'light';
    }
  
    const {documentElement: root} = document;  
    root.style.setProperty(colorModeCssProp, colorMode);
  
    Object.entries(colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
  
      root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });
  }
  
  const MagicScriptTag = () => {
    const boundFn = String(setColorsByTheme)
      .replace("'🌈'", JSON.stringify(COLORS))
      .replace('🔑', COLOR_MODE_KEY)
      .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);
  
    let calledFunction = `(${boundFn})()`;
  
    calledFunction = Terser.minify(calledFunction).code;
  
    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
  };
  
  /**
   * If the user has JS disabled, the injected script will never fire!
   * This means that they won't have any colors set, everything will be default
   * black and white.
   * We can solve for this by injecting a `<style>` tag into the head of the
   * document, which sets default values for all of our colors.
   * Only light mode will be available for users with JS disabled.
   */
  const FallbackStyles = () => {
    // Create a string holding each CSS variable:
    /*
      `--color-text: black;
      --color-background: white;`
    */
  
    const cssVariableString = Object.entries(COLORS).reduce(
      (acc, [name, colorByTheme]) => {
        return `${acc}\n--color-${name}: ${colorByTheme.light};`;
      },
      ''
    );
  
    const wrappedInSelector = `html { ${cssVariableString} }`;
  
    return <style>{wrappedInSelector}</style>;
  };