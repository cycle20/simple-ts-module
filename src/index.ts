//import './index.html';

console.log('Hello');

class X {

    public loadRegionColorsFromStyleSheets(prefix: string = 'ult_') {
        const sheets: CSSStyleSheet[] = Array.from(document.styleSheets); //.forEach(x => console.log(x));
        sheets.forEach((sheet: CSSStyleSheet) => {
            const rules: CSSRule[] = Array.from(sheet.cssRules);
            rules.forEach((rule: CSSRule) => {
                let r = rule as CSSStyleRule;
                // console.log(r);
                if (rule.cssText.startsWith('.' + prefix)) {
                    console.log(rule.cssText);
                }
                // if (r.selectorText.startsWith('.' + prefix)) {
                //     console.log(r.style.getPropertyValue('fill'));
                // }
            });
        });
    }
}

export { X };
