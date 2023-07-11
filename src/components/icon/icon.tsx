import { SVGProps } from 'react';
import * as icons from '@/assets/icons';

interface Props extends SVGProps<SVGSVGElement> {
  iconType: keyof typeof icons;
  color?: string;
  size?: number | string;
}

export function Icon({ iconType, color, size, ...props }: Props) {
  const SVGIcon = icons[iconType];

  return <SVGIcon fill={color} width={size} height={size} {...props} />;
}
