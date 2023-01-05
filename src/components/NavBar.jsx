import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Stack, Button, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

import FavoriteContext from '../context/FavoriteContext';
import RentContext from '../context/RentContext';

import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const { addToFavorite } = useContext(FavoriteContext);
    const { rented } = useContext(RentContext);

    return (
        <Stack direction="row" alignItems="center" p={2}
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
            <Link to='/' className='logo-container'>
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
                    sx={{ mr: 5 }}
                >
                    Liked Videos
                </Button>

                <Button variant="text" color='info'
                    startIcon={<Badge max={10} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                        badgeContent={rented.length} color="success">
                        <SellIcon sx={{ color: '#008fbe' }} />
                    </Badge>}
                    onClick={() => navigate('/my-rented-videos')}
                >
                    Rented Movies
                </Button>

            </div>
        </Stack >
    )
}

export default NavBar