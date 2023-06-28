//import './index.html';

class X {

    public loadRegionColorsFromStyleSheets(prefix: string = 'ult_') {
        const sheets: CSSStyleSheet[] = Array.from(document.styleSheets);
        sheets.forEach((sheet: CSSStyleSheet) => {
            const rules: CSSRule[] = Array.from(sheet.cssRules);
            rules.forEach((rule: CSSRule) => {
                let r = rule as CSSStyleRule;
                if (r.selectorText?.startsWith('.' + prefix)) {
                    console.log(r.style.getPropertyValue('fill'));
                }
            });
        });
    }
}

export { X };
