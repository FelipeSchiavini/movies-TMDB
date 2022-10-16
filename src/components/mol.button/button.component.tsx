import React, { ReactNode } from 'react';
import { Text } from '../mol.text/text.component';
import { ButtonStandard } from './button.style';

export interface ButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    onClick: () => void;
}   

export const Button: React.FunctionComponent<ButtonProps> = ({ children, icon, onClick }) => {

    return(
        <ButtonStandard onClick={onClick}>
            {icon ?? icon}
            <Text>{children}</Text>
        </ButtonStandard>   
    )
}