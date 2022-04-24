import React from 'react'

const Card = ({ image, title, description, classes }) => {
    return (
        <article className={classes}>
            <div className="box">
                <div className="content">
                    <div className="img-container">
                        <img src={image} alt={title} />
                    </div>
                    <div className="text-container">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <a href="/">Ver más</a>
                </div>
            </div>
        </article>
    )
}

export default Card