import colors from "./colors";

const logoUrl = 'logo.jpg';
const receiveEmail = 'dolphinpressurewashingllc@gmail.com';
const shortName = 'Dolphin Pressure Washing';
const fullName = 'Dolphin Pressure Washing LLC';
const variables = {
    color: {
        text: colors.gray,
        bg: colors.gray,
        primary: colors.dolphin,
        secondary: colors.orangepunch
    },
    font: {
        header: 'Inter',
        text: 'Poppins'
    },
    rounded: {
        container: '6px',
        input: '10px',
        button: '10px'
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

