//import './index.html';

class X {

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
            console.log(styleRule.style.getPropertyValue('fill'));
        }
    }
}

export { X };
