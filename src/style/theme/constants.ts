import { GrayColor } from "./constants.colors";

export enum FontFamily {
  Primary = 'Inter, sans-serif',
  Secondary = '"Frank Ruhl Libre", serif',
}

export enum FontWeight {
  Bold = 'bold',
  SemiBold = 600,
  Normal = 'normal',
}

export enum FontSize {
  XXXSmall = '12px',
  XXSmall = '14px',
  XSmall = '16px',
  Small = '18px',
  Medium = '24px',
  Large = '28px',
  XLarge = '32px',
  XXLarge = '56px',
}

export enum Spacing {
  XSmall = '4px',
  Small = '8px',
  Medium = '16px',
  Large = '24px',
  XLarge = '32px',
  XXLarge = '40px',
  XXXLarge = '60px',
}

export enum IconSize {
  Small = '12px',
  Medium = '16px',
  Large = '20px',
}

export const Border = {
  Color: GrayColor.GrayXLight,
  Width: '1px',
  Radius: '8px',
  RadiusLarge: '24px',
};

export const TransitionDuration = '.3s';

