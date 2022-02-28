import { SvgIconComponent } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';
import FunctionsIcon from '@mui/icons-material/Functions';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import CssIcon from '@mui/icons-material/Css';

interface ILinkProps {
  name: string;
  path: string;
  Icon?: SvgIconComponent;
  hasDivider?: boolean;
}

export const links: ILinkProps[] = [
  {
    name: 'Components',
    path: '/components',
    Icon: GridViewIcon,
  },
  {
    name: 'Functions',
    path: '/functions',
    Icon: FunctionsIcon,
  },
  {
    name: 'Hooks',
    path: '/hooks',
    Icon: MoreTimeIcon,
  },
  {
    name: 'Styles',
    path: '/styles',
    Icon: CssIcon,
  },
];
