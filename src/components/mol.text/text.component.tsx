import { ReactNode } from 'react';
import { SlotText, TextStandard } from './text.style';

export interface TextProps {
    children: ReactNode;
    size?: 'sm' | 'md' | "lg";
    asChild?: boolean;
}


export const Text: React.FunctionComponent<TextProps> = ({ size='md', children, asChild, ...props}) => {
    const Comp = asChild ? SlotText : TextStandard
    return <Comp size={size} {...props}>{children}</Comp>
}

