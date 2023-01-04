import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Stack, Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import FavoriteContext from '../context/FavoriteContext';

const NavBar = () => {
    const navigate = useNavigate();
    const { addToFavorite } = useContext(FavoriteContext);

    return (
        <Stack direction="row" alignItems="center" p={2}
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt='uinir logo' height={55} />
            </Link>
            <SearchBar />
            <div>
                <Button variant="text" color='info'
                    startIcon={<Badge max={10} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                        badgeContent={addToFavorite.length} color="error">
                        <FavoriteIcon sx={{ color: '#008fbe' }} />
                    </Badge>}
                    onClick={() => navigate('/liked')}
                >
                    Favorite
                </Button>

                <Button variant="text" color='info' startIcon={<SellIcon sx={{ color: '#008fbe' }} />}>
                    Rented
                </Button>
            </div>
        </Stack>
    )
}

export default NavBar