import Link from 'next/link';
import { Typography } from '@mui/material';

const HeaderMenu: React.FC = () => {
  return (
    <Link href={'/'}>
      <a>
        <Typography variant='h6' noWrap component='div'>
          Octo-Solidus Document
        </Typography>
      </a>
    </Link>
  );
};

export default HeaderMenu;
