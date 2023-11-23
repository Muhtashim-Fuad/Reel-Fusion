import React from "react";

function InfoPanel(movieData)
{
    const bgImage = { backgroundImage: 'url(' + movieData.img + ')', }
    console.log(movieData.title);
    return <div id = "info-overlay" onClick = {movieData.onClick}>
        <div>
            <div className="overlay-poster" style={bgImage}></div>
            <div className="overlay-data">
                    <div className="overlay-title">{movieData.title} ({movieData.year})</div>
                    <div className="overlay-synopsis">
                    <hr/>
                    <span className="overlay-content">
                            <b>Director(s): </b> {movieData.director} <br/>
                            <b>Writer(s): </b> {movieData.writers} <br/>
                            <b>Runtime: </b> {movieData.runtime} <br/>
                            <b>Released: </b> {movieData.released} <br/>
                            <b>IMDB Rating: </b> {movieData.imdbRating}/10 <br/>
                            <b>Genre: </b> {movieData.genre} <br/>
                            <b>Actors: </b> {movieData.actors} <br/>
                    </span>
                    <hr/>
                    <div className="overlay-attribute">Overview</div><br/>
                    <div className="overlay-content"> {movieData.plot}
                    </div>
                    </div>
            </div>
        </div>
    </div>
}

export default InfoPanel;