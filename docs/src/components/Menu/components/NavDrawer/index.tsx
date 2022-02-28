import Link from 'next/link';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { links } from '../../utils/constants';

const NavDrawer: React.FC = () => {
  return (
    <div>
      {links.map(({ name, path, Icon, hasDivider }) => (
        <div key={name}>
          <List>
            <Link href={path}>
              <a>
                <ListItem button sx={{ marginBottom: -1 }}>
                  <ListItemIcon sx={{ marginRight: -2 }}>
                    {Icon ? <Icon /> : <ArrowForwardIcon />}
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </a>
            </Link>
          </List>
          {hasDivider && <Divider />}
        </div>
      ))}
    </div>
  );
};

export default NavDrawer;
