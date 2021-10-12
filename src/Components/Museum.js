import axios from "axios";
import { useEffect, useState } from "react";


// API KEY: w2HhIYck

const Museum = (props) => {
  const [ artwork, setArtwork] = useState();
  const [error, setError] = useState()
  const decoded = " " + decodeURI(props.colorChoice); //add a space cause api is retarded af
  console.log(`color choice is : ${decoded}`)
  

  const randomPainting = (artArray) => {
    console.log(artArray)
    const paintings = artArray.artObjects
    console.log(paintings);
    
    const painting = paintings[Math.floor(Math.random() * paintings.length)];
    
    // console.log(painting)

    setArtwork(painting);
  }

  useEffect( () => {
    axios({
        url: 'https://www.rijksmuseum.nl/api/en/collection',
        method: 'GET',
        dataResponse: 'json',
        params: {
            key: 'w2HhIYck',
            type: 'painting',
            'f.normalized32Colors.hex': decoded,
        }
    }).then(response => { 
      console.log(response)
      if(response && response.data.artObjects.length !== 0) {
        randomPainting(response.data)
      } else {
        throw new Error()
      }

    }).catch(error => setError('An error occurred, please try a different selection or try again later'))

  }, [decoded])


  return (
    <div className='art'>
      {
        artwork ? 
        <div className='art'>
        <img src={artwork.webImage.url} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        </div>
        : <p>{error}</p>
      }
      
    </div>
  )
}

export default Museum;