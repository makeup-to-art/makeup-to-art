import axios from "axios";
import { useEffect, useState } from "react";


// API KEY: w2HhIYck

const Museum = (props) => {
  const [ artwork, setArtwork] = useState();
  const [error, setError] = useState('Sorry, there were no paintings found. Please try a different selection.')
  const decoded = " " + decodeURI(props.colorChoice); //add a space cause api is retarded af
  console.log(`color choice is : ${decoded}`)
  

  const randomPainting = (artArray) => {
    console.log(artArray)
    const paintings = artArray.artObjects
    console.log(paintings);
    
    const painting = paintings[Math.floor(Math.random() * paintings.length)];

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
      if(response.status === 200) {
        randomPainting(response.data)
      } else {
        throw new Error(response.statusText)
      }


    })
    .catch(error =>{
      setError(error);
    })
  }, [decoded])


  return (
    <div className='art'>
      {
        artwork ? <img src={artwork.webImage.url} alt={artwork.title} /> : <p>{error}</p>
      }
      
    </div>
  )
}

export default Museum;