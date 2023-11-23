import React from "react";


function Card(movieData)
{
    const bgStyle = 
    {
        backgroundImage: 'url(' + movieData.img + ')',
    }

    return <div className="movieCard" style={bgStyle}>
        <div className="movieData">
            <div>
                <br/>
                <p>
                    <span className = "cardTitle">
                    {movieData.title} ({movieData.year})
                    </span>
                </p>
                
                <div className="cardInfo">
                <p><b>Director:</b> {movieData.director}<br/></p>
                <p><b>Runtime:</b> {movieData.runtime}<br/></p>
                <p><b>IMDB Rating: </b> {movieData.rating}/10<br/></p>
                <p><b>Genre: </b>{movieData.genre}<br/></p>
                </div>

                <a className = "cardButton" onClick = {movieData.onClick}>View</a>
            </div>
        </div>
    </div>
}

export default Card;