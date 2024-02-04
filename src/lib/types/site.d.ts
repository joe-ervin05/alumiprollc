import type { Color, Rounded } from "./css";

type SiteConfig = {
    context?: { [key: string]: any };
    theme?: Theme;
}

type Theme = {
    variables?: { [key: string]: any },
    dark?: boolean;
}

export { SiteConfig, Theme };