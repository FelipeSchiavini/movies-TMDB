import styled from 'styled-components'
import { Slot } from '@radix-ui/react-slot'
import { GrayColor } from '../../style/theme/constants.colors';
import { Border, FontFamily, FontSize, FontWeight, Spacing } from '../../style/theme/constants';


interface ButtonStyledProps {
    width?: string;
}

export const ButtonStyled = `
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${GrayColor.White};
    text-transform: uppercase;
    border-radius: ${Border.Radius};
    font-size: ${FontSize.XSmall};
    font-family: ${FontFamily.Primary};
    gap: ${Spacing.Small};
    font-weight: ${FontWeight.SemiBold};
`;


export const ButtonStandard = styled.div<ButtonStyledProps>`
    background-color: ${props => props.theme.colors.secundary};
    width: ${props => props.width === 'full' ? '100%' : null};
    padding: 6px 24px;
    ${ButtonStyled}

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }

    &:active {
        opacity: 0.6;
        color: ${GrayColor.GrayLight};
    }
`