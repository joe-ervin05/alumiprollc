import type { Theme } from "../types/site";

export function isObject(val : any) {
    return !!val && typeof val === 'object' && !Array.isArray(val);
}

function getThemeCss(theme : Theme) {
    if (!theme.variables) {
        return '';
    }

    return `${buildVars(theme.variables, '-').join('')}`;
};

export { getThemeCss }

function addDelimiter(first : string, second : string, delimiter : string) {
    if (!first.length) {
        return second;
    }
    if (!second.length) {
        return first;
    }
    return first + delimiter + second;
}

function buildVars(obj : object, delimiter = '.', path = '') : string[] {
    const paths = [];

    for (const [key, value] of Object.entries(obj)) {
        if (isObject(value)) {
            for (const fullPath of buildVars(value, delimiter, 
                addDelimiter(path, key, delimiter))) {
                paths.push(fullPath);
            };
        } else {
            paths.push(`--${path+delimiter+key}: ${sanitizeCssVar(value)};`);
        }
    }

    return paths;
}

function sanitizeCssVar(unsafe : string) {
    return unsafe
    .replaceAll('<', '')
    .replaceAll('>', '')
    .replaceAll(';', '');
}