import axios from "axios";
import {useEffect, useState} from "react";


const Museum = (props) => {
    const artwork = props.artwork;
    let repeatCounter = 0;
    const updateArtwork = props.updateArtwork;
    const color = " " + props.colorChoice; //Add a space because of API quirks
    const [error,
        setError] = useState();

    const [artworkPresent,
        setArtworkPresent] = useState(false);



    useEffect(() => {
        const randomPainting = (artArray) => {
            const paintings = artArray.artObjects;
            const randomize = () => paintings[Math.floor(Math.random() * paintings.length)];
            let newPainting = randomize();
            let repeat = false;
    
            if (artwork.length === 0) { //Skip repeat check if gallery is just being started
                const galleryArr = artwork;
                galleryArr.push(newPainting);
                updateArtwork(galleryArr);
                setArtworkPresent(true);
    
            } else {
    
                let x = 0;
                while (x < artwork.length) {
                    if (artwork[x].id === newPainting.id) { //Check if existing paintings id's match new painting
                        repeat = true;
                        repeatCounter++;
                        break;
                    }
                    x++
                }
    
                if (repeat === false) { //If there are no repeats, push the painting to the gallery
                    const galleryArr = artwork;
                    galleryArr.push(newPainting);
                    updateArtwork(galleryArr);
                    setArtworkPresent(true);
                } else if (repeatCounter !== 3) { //If we havent reached the end of the results and there is a repeat, run this function again for a new painting
                    randomPainting(artArray);
                } else { //
                    setArtworkPresent(true); //Show gallery and notify user we have reached the end of the results
                    setError('All results for this colour have been shown');
                }
            }
    
        }
        if (props.getArtwork) { //Check that brand has been chosen and that a colour was also chosen so api isn't called just when a colour has been chosen
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
                    randomPainting(response.data);
                } else {
                    throw new Error();
                }

            }).catch(error => setError('An error occurred, please try a different selection or try again later'))
        }

    }, [color, props.getArtwork,artwork,updateArtwork,repeatCounter]);

    return (
        <section className='artContainer wrapper'>
            {artworkPresent
                ? <>
                        {artwork.map((art) => {
                            return (
                                <div className='art' key={art.id}>
                                    <img src={art.webImage.url} alt={art.title}/>
                                    <h3>{art.title}</h3>
                                </div>
                            )
                        })
}
                        <button
                            className='clearButton'
                            onClick={() => {
                            props.clearGallery()
                        }}>Clear Gallery</button>
                    </>
                : <p>Getting some artwork, please wait</p>
}

            {error
                ? <p>{error}</p>
                : null
}

        </section>
    )
}

export default Museum;