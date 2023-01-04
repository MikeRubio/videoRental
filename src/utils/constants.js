import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNote from '@mui/icons-material/MusicNote';
import LocalMovies from '@mui/icons-material/LocalMovies';
import Animation from '@mui/icons-material/Animation';

export const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAACrCAMAAAD8Q8FaAAAAb1BMVEUAj77///8kmsQAjb0AiLoAirsAhbmr1OWkz+JOo8h4ttQflMAAh7rD4u31/P3R6PJttdQyn8fc7vXC2+l4u9fm8/hgr9BtsNBVqs1Co8nu9/pgqs2Iv9iYxdzN5/HY7fS82Oe93eqdzeFBnsaMxNypohE5AAAE6UlEQVR4nO3d63aiMBQF4MDhYktQQWHE8YbD+z/jEINwQKz0Np413d+PrmkWpWQ3hJDgoFyYQBFMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfibya/jA7dvIL3b7/S7xnn0golGSORdp9OxDEYxo6zRS/9kHIxflTstF/3SPv+5iyhHTPf6+i2mNs+4etKZJeN+UIKZ7SOFKNwUV13ETLnRvsaPwdYLblQdwTwcAH0dq/P9hs+Vjpfxb3/M8v/5ypw+qN/+yA30a0loHFCVukaigqyh5dbGvXNdNSLeDHu9amkTao2a7lypcHLPsuKqKgAfiaU8Hge8mrgo0XX9bMKI+BH0vZBloEx/bQeB2f20m9LI6ZNfibN/klJziY1sab/w6pLx0mDTvJuDcU9ntorSjcFJzZ8Q2Ox5W59yVGxWtewe8aqpJv3rF5aWYNv3a5UGeDmscXnOiolc+v0zMsXH5mOzsCp3npGX/SAv79xzEZG/JhjFl5UhVQ93suB+TMzMt8kFM5seVyNuaYUw7e5TDmKpLJQcxjWumTIYxpSa+xzE5843EBjWMaTYe03l6THN7YRvG5EyMqc5ZYE6DvuleTJcuZ1pMTYO8iemyh/EufEDg3BQV4Wx2bq9IbUwvq9Xq1P3pbUxFXbhaPKrlwvZOyWBj20bKwyHuflt2nl2cjnwHW4Hdk7k3DbraNDHZ4VTcj8kOpv6wCmWL8FxV1WyVsUKnGU6aPbBGaWOqR6LBrC0rA3NnXI9MtWITwtcOUhp9G5PhDWMy6KWrTkJm+G2q6fEurugGqa/DmMxuw7Ys7rohz+02TQX2TurjMbFFSn3uin9/JCblVd22Mm9vviAmYo1h+aGYFNtD8b/GpPxPx0TzkT1I8iUxjVXyXTHpbg+vIvtwGTFFY+1REhEx+btuW5mrehJiItaYHJHnnICYyHPZCPWgv6+un/C0mMrAszYla0sSb+qMp8XkzC2nZyGzMT0xpjFbqU8gioopE/u8gaSYQrHLBjymkN+M/vOYsr3SYlPiMfFr8b+PKQy+uaafwmJy2IKu/vaY0uV6vV6yEdNGbluqD/zE2n3RjGWCIBo7F792eGlmLz327GEm+U1pPpsRq8cy8al26M3bhoGZiDUmxJRrz2um1CeNwtlksjMTOmYyHi+ZZGUZx3bh9nFMcRiGlV1emRQTn9ITOiNn6SnrQo5rNp0Qk2FH0hPv6Ty2XpAK7sV9NpP9hJiUZqucO5nrBcak1dgHMfX6snfGxJ8gdyK5px0lIzktqv73b8Y0GA29LyYVHJzbQoFIscvNxfZV+/3nct6MiS+M1I7vi6nXiy9lzspZuijZoca59hXpKjVdznybpauwuqye0Z8sbWS904Pc0rbIeZYuwrV93uJBTIeukPWOc5nLdA3SKj+Xi3RRnnNlHxlUfl2PyKyg6+7RSr/Vrw15FBn1P9pxU5S0uo3dtsztfpjYWR8KHjwpc6x1HJdAiJW94x3CN28cHn8P8ViZz5fXRd+zPFfAnkrJfLzh+Q5KWHMKfxvu45/6ebyZMyD0AZ7nuh3jIqYx/hIxTaEXiGkCiuaIaQKKDjwmfCr/Hh0tq2r3+mvjKvMhIrjHfuz1v/h0GQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAj0YwgXmvJTz0F99aTzhvryNKAAAAAElFTkSuQmCC';

export const FAVORITE_LOCAL_STORAGE_KEY = 'favorite';

export const categories = [
    { name: 'Dramas militares', id: '11', icon: <TheaterComedyIcon />, },
    { name: 'Dramas románticos', id: '1255', icon: <TheaterComedyIcon />, },
    { name: 'Mockumentaries', id: '26', icon: <LocalMovies />, },
    { name: 'Sports Documentaries', id: '180', icon: <LocalMovies />, },
    { name: 'Family comedy', id: '52847', icon: <LocalMovies />, },
    { name: 'Crime Comedies', id: '4058', icon: <LocalMovies />, },
    { name: 'Sci-Fi & Fantasy', id: '1492', icon: <LocalMovies /> },
    { name: 'Crime Films', id: '5824', icon: <LocalMovies />, },
    { name: 'Animation', id: '4698', icon: <Animation />, },
    { name: 'Westerns', id: '7700', icon: <LocalMovies />, },
    { name: 'Horror Films', id: '8711', icon: <LocalMovies />, },
    { name: 'Musicals', id: '13335', icon: <MusicNote />, },
];