import colors from "./colors";

const logoUrl = 'logo.jpg';
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

const theme = {
    variables
}

const config = {
    logoUrl,
    theme
}

export default config;
export { logoUrl, variables, theme };

