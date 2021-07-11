import type { SvgIconProps } from './SvgIcon';
import { SvgIcon } from './SvgIcon';

export function DinoFootprintIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path d="M2.86,16.12,0,11.89l.21-2V8.61l1.06.83,1.38.1.9,1.14,1.28,1,1.34,2.2.24-7.23L6,4.13,7.51,2l.38-2L9,1.72l2,2,.62,3.38.69,5.61,3.2-6,1.1-.1.9-.87.24,1.42.41,3.34-1.55,5L16.19,19l-3.1,3.14L11.61,24H8.44L6.38,21.84,3.86,20.53Z" />
    </SvgIcon>
  );
}
