// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import './MovieList.css'; // Import the CSS file for styling
import { Grid } from '@mui/material';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const handleCardClick = (movie) => {
        setSelectedMovie(movie);
    };



    return (
        <div className="movie-list-container">
            <h1>Now Playing in Theaters</h1>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} onClick={() => { handleCardClick(movie); handleOpen(); }} />
                    </Grid>
                ))}
            </Grid>
          {selectedMovie &&  <MovieModal movie={selectedMovie} open={open} onClose={handleClose} />}
        </div>
    );
};

export default MovieList;
