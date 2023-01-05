import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import parse from 'html-react-parser';

import { Button, Card, CardContent, CardMedia, CardActions, CardHeader, Typography } from "@mui/material";

import AccessTime from '@mui/icons-material/AccessTime';
import TrendingUp from '@mui/icons-material/TrendingUp';
import CalendarToday from '@mui/icons-material/CalendarToday';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { encodeURL } from '../utils/encode';
import FavoriteContext from '../context/FavoriteContext';
import RentContext from '../context/RentContext';

import ActionDialog from './ActionDialog';

import './VideoCard.css';

const VideoCard = ({ video, enableActions }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isRented, setIsRented] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const { addToFavorite, addVideoToFavorite, removeVideoFromFavorite } = useContext(FavoriteContext);
    const { rented, removeVideoFromRented } = useContext(RentContext);

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    useEffect(() => {
        setIsFavorite(Boolean(addToFavorite.find(elm => elm.id === video.id)))
        setIsRented(Boolean(rented.find(elm => elm.id === video.id)))
    }, [addToFavorite, rented])

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={isRented && `/video/${encodeURL(video.imdbid)}`}>
                <CardMedia
                    className="video-card"
                    component="img"
                    alt={video.title}
                    image={video.img}
                    sx={{
                        width: {
                            xs: '100%'
                        }
                    }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '120px' }}>
                <h3 className="video-title">
                    {parse(video.title)} <br></br>
                </h3>
                {isRented
                    ? <Typography variant="body1" fontWeight={600} color='#008fbe'>Ready to play</Typography>
                    : <Typography variant="subtitle2" color='#fff'>please rent first</Typography>}

                {enableActions && <div>
                    <Button
                        variant="text"
                        startIcon={<AccessTime />}
                    >
                        {`${Math.floor(video.runtime / 60)} min`}
                    </Button>
                    <Button
                        variant="text"
                        startIcon={<CalendarToday />}
                    >
                        {video.titledate}
                    </Button>
                    <Button
                        variant="text"
                        startIcon={<TrendingUp />}
                    >
                        {video.imdbrating}
                    </Button>
                </div>}

                <Typography variant="body2" color='#FFF'>
                    {[...video.synopsis].splice(0, 100)}...
                </Typography>
            </CardContent>

            {enableActions && <CardActions sx={{ backgroundColor: '#1e1e1e', display: 'flex', justifyContent: 'space-between' }}>
                {
                    isFavorite
                        ? <Button size="small" variant="text" color='error' startIcon={<CheckCircleIcon />} onClick={() => removeVideoFromFavorite(video)}>
                            Added
                        </Button>
                        : <Button size="small" variant="text" color='info' startIcon={<FavoriteIcon />} onClick={() => addVideoToFavorite(video)}>
                            Add to favorite
                        </Button>
                }

                {
                    isRented
                        ? <Button size="small" variant="text" color='success' startIcon={<CheckCircleIcon />} onClick={() => removeVideoFromRented(video)}>
                            Rented
                        </Button>
                        : <Button size="small" variant="text" color='info' startIcon={<SellIcon />} onClick={handleDialogOpen}>
                            Rent video
                        </Button>
                }
                <ActionDialog openDialog={openDialog} setOpenDialog={setOpenDialog} video={video}></ActionDialog>
            </CardActions>}
        </Card >
    )
}

export default VideoCard