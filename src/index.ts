//import './index.html';

class X {

    private regionColorMap = new Map();

    public loadRegionColorsFromStyleSheets(prefix: string = 'ult_') {
        const sheets: CSSStyleSheet[] = Array.from(document.styleSheets);
        sheets.forEach((sheet: CSSStyleSheet) => {
            const rules: CSSRule[] = Array.from(sheet.cssRules);
            rules.forEach((rule: CSSRule) => this.fetchRule(rule, prefix));
        });
    }

    private fetchRule(rule: CSSRule, prefix: string) {
        let styleRule = rule as CSSStyleRule;
        if (styleRule.selectorText?.startsWith('.' + prefix)) {
            const property = styleRule.style.getPropertyValue('fill');
            this.regionColorMap.set(styleRule.selectorText, property);
            console.log(property);
        }
    }
}

export { X };
