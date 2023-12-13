// src/components/MovieModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    background: "black",
    borderRadius: 5,
    boxShadow: 24,
    border: "none",
    p: 4,
};
const MovieModal = ({ movie, open, onClose }) => {
    console.log(movie, "movie")
    return (


        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <h2>{movie.title}</h2>
                        <p >{movie.overview}</p>
                        <p ><span style={{ fontWeight: "bold" }}>Original Language:</span> {movie.original_language}</p>
                        <p ><span style={{ fontWeight: "bold" }}>Release Date:</span> {movie.release_date}</p>
                        <p ><span style={{ fontWeight: "bold" }}>Adult:</span> {movie.adult == true ? "Yes" : "No"}</p>
                        {/* <p>Original language: {movie.original_language}</p> */}
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    );
};

export default MovieModal;
