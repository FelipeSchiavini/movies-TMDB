import styled from 'styled-components'
import { Slot } from '@radix-ui/react-slot'
import { GrayColor } from '../../style/theme/constants.colors';
import { Border, FontFamily, FontSize } from '../../style/theme/constants';

type size = 'lg' | 'md' | 'sm'

export interface TextStyleProps  {
    size: size;
}

export const TextStyled = `
    font-family: ${FontFamily.Primary};
`;

export const SlotText = styled(Slot)<TextStyleProps>`
    font-size: ${props => getTextSize(props.size)};
    color: ${props => props.theme.colors.text}
    ${TextStyled};
`;

export const TextStandard = styled.span<TextStyleProps>`
    font-size: ${props => getTextSize(props.size)};
    color: ${props => props.theme.colors.text}
    ${TextStyled};
`

const getTextSize = (size : size) => {
    switch (size){
        case 'lg':
            return FontSize.XSmall
        case 'sm':
            return FontSize.XXXSmall
        default:
            return FontSize.XXSmall
    }

}
