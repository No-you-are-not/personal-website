import { FC } from 'react';

interface PROPS {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

export type SvgIconType = FC<PROPS>;
