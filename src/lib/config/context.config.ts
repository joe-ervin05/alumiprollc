import colors from "./colors";

const logoUrl = 'logo.svg';
const receiveEmail = 'alumiprollc@gmail.com';
const shortName = 'Alumi Pro';
const fullName = 'Alumi Pro LLC';
const variables = {
    color: {
        text: colors.gray,
        bg: colors.gray,
        primary: colors.deepblue,
        secondary: colors.neon,
        accent: colors.mountain
    },
    font: {
        header: 'Montserrat',
        text: 'Montserrat',
    },
    rounded: {
        container: '8px',
        input: '6px',
        button: '4px'
    }
}

const nav = [
    { href: "/about", name:"About"},
    { href:"/estimate", name:"Estimates" },
    { href:"/contact", name:"Contact" },
]

const theme = {
    variables
}

const config = {
    logoUrl,
    shortName,
    fullName,
    receiveEmail,
    nav,
    theme
}

export default config;
export { logoUrl, variables, theme, nav, receiveEmail, shortName, fullName };

