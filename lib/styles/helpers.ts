import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export const spacing = (...spacingOptions) => (props) =>
  props.theme.spacing(...spacingOptions);

export const up = (key: Breakpoint | number) => (props) =>
  props.theme.breakpoints.up(key);

export const columns = (noCols: number, spacing: number = 1) =>
  `calc(100% / ${noCols} - (${spacing}rem) + (${spacing}rem / ${noCols}));`;
