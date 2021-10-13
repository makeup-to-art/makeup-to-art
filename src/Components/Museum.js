import axios from "axios";
import {useEffect, useState} from "react";

// API KEY: w2HhIYck

const Museum = (props) => {
    console.log('re-rendered')
    const artwork = props.artwork;
    const [error,
        setError] = useState()
    const color = " " + props.colorChoice; //add a space to account for the Api's quirks
    const [artworkPresent,
        setArtworkPresent] = useState(false);

    useEffect(() => {
        const randomPainting = (artArray) => {
            console.log(artwork)
            console.log(artArray)
            const paintings = artArray.artObjects
            const painting = paintings[Math.floor(Math.random() * paintings.length)];
            const galleryArr = artwork;
            galleryArr.push(painting)
            props.updateArtwork(galleryArr)
            setArtworkPresent(true)
        }
        axios({
            url: 'https://www.rijksmuseum.nl/api/en/collection',
            method: 'GET',
            dataResponse: 'json',
            params: {
                key: 'w2HhIYck',
                type: 'painting',
                'f.normalized32Colors.hex': color
            }
        }).then(response => {
            if (response && response.data.artObjects.length !== 0) {
                randomPainting(response.data)
            } else {
                throw new Error()
            }

        }).catch(error => setError('An error occurred, please try a different selection or try again later'))

    }, [color, artwork, props])

    return (
        <div className='artContainer'>
            {artworkPresent
                ? <div className="art">
                        {artwork.map((art, index) => {
                            return (
                                <div className='art' key={index}>
                                    <img src={art.webImage.url} alt={art.title}/>
                                    <h3>{art.title}</h3>
                                </div>
                            )
                        })
                        }
                        <button className='clearButton' onClick={() => {props.clearGallery()}}>Clear Gallery</button>
                    </div>
                : <p>Getting some artwork, please wait</p>
}

            {error
                ? <p>{error}</p>
                : null
}

        </div>
    )
}

export default Museum;