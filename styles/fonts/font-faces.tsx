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
        font-weight: bold;
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

    @font-face {
        font-family: 'CormorantGaramond';
        src: url('/fonts/CormorantGaramond-SemiBoldItalic.ttf') format('truetype');
        font-style: italic;
        font-display: swap;
    }
`;

export default RobotoFontFaces;