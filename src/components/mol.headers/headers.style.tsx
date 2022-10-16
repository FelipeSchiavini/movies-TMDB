import styled from 'styled-components'
import { GrayColor } from '../../style/theme';
import { FontFamily, FontSize, FontWeight } from '../../style/theme/constants';

export interface HeadingProps {
    kind?: 'dark' | 'light'
    center?: boolean;
}


export const HeadersStyled = `
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight.Bold}
    
    `;

export const H1 = styled.h1<HeadingProps>`
    font-size: ${FontSize.Large};
    line-height: 1.5;
    color: ${props => props.kind ? GrayColor.GrayDark : GrayColor.White };
    text-align: ${(props) => (props.center ? 'center' : 'inherit')};
    ${HeadersStyled};
    @media all and (min-width: 32em) {
        font-size: ${FontSize.XLarge};
    }
`

export const H2 = styled.h2<HeadingProps>`
    font-size: ${FontSize.Large};
    color: ${props => props.kind ? GrayColor.GrayDark : GrayColor.White };
    text-align: ${(props) => (props.center ? 'center' : 'inherit')};
    ${HeadersStyled};
    @media all and (min-width: 32em) {
        font-size: ${FontSize.Medium};
    }
`

export const H3 = styled.h3<HeadingProps>`
    font-size: ${FontSize.Medium};
    color: ${props => props.kind ? GrayColor.GrayDark : GrayColor.White };
    ${HeadersStyled};
    @media all and (min-width: 32em) {
        font-size: ${FontSize.Small};
    }
`

export const H4 = styled.h4<HeadingProps>`
    font-size: ${FontSize.Medium}
    color: ${props => props.kind ? GrayColor.GrayDark : GrayColor.White };
    ${HeadersStyled};
    font-weight: ${FontWeight.SemiBold}
    @media all and (min-width: 32em) {
        font-size: ${FontSize.Small};
    }
`
