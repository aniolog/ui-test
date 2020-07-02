import { css } from 'styled-components';

const RobotoFontFaces = css`

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Black.ttf') format('truetype');
        font-weight: Bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Bold.ttf') format('truetype');
        font-weight: Bolder;
        font-style: normal;
        font-display: swap;
    }

`;

export default RobotoFontFaces;