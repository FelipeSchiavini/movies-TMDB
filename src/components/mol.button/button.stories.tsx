import { Button, ButtonProps } from './button.component';
import { Meta, StoryObj} from '@storybook/react'
import {Envelope} from 'phosphor-react'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
        table: {
            disable: true,
        }
    }
  },
  args: {
        asChild: false,
        children: 'filmes',
    },
} as Meta<ButtonProps>;

export const WithoutIcon: StoryObj = {}

export const WithIcon: StoryObj = {
    args: {
        icon:(
                <Envelope/>
        ),
    },
}