import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const AppContainer = styled.div`
    width: 100vw;
    min-height: calc(100vh - 64px);
    overflow-y: 'auto';
    background-color: ${Colors.iceBlue};
`;