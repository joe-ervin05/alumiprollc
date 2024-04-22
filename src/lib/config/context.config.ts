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
        secondary: colors.neon
    },
    font: {
        header: 'Rubik',
        text: 'Inter'
    },
    rounded: {
        container: '12px',
        input: '12px',
        button: '9999px'
    }
}

const nav = [
    { href:"/book", name:"Book" },
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

