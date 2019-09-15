import * as React from 'react';
import styled from 'styled-components';

import { space } from 'styled-system';
import theme from '../theme';

interface Iprops {
  p?: number;
}

export const Title = styled.h2 < Iprops > `
    display: block;
    ${space};
    color: ${theme.colors.black}
    font-weight: ${theme.typography.fontWeightRegular}
    font-size: ${theme.typography.h3}
    cursor: pointer;
    
    ${theme.mediaQueries.medium} {
        font-size: ${theme.typography.h2}
    }
`;
