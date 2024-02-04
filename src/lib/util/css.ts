import type { FontWeights } from "../types/css";

export function buildGoogleFontString(fonts: string[]) {

    let fontString = '';

    fonts.forEach((font) => {
        fontString += `&family=${font.replaceAll(' ', '+')}:wght@400;700`
    })

    fontString = fontString.slice(1);

    return `https://fonts.googleapis.com/css2?${fontString}&display=swap`;
}

export function loadGoogleFonts(fonts : {[key: string]: string }, weights : FontWeights[] = []) {

    let fontString = '';
    let fontWeights = '';

    if (weights?.length) {
        fontWeights = ':wght@';
        for (const weight of weights) {
            fontWeights += weight + ';'
        }
        fontWeights = fontWeights.slice(0, -1);
    }

    for (const [_, value] of Object.entries(fonts)) {
        fontString += `&family=${value.replaceAll(' ', '+')}` + fontWeights;
    }

    fontString = fontString.slice(1);
    
    return `https://fonts.googleapis.com/css2?${fontString}&display=swap`;
}