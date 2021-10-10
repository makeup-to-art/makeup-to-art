import axios from "axios";
import { useEffect, useState } from "react";


// API KEY: w2HhIYck

const Museum = (props) => {
  const [ artwork, setArtwork] = useState();
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
    }).then(response => randomPainting(response.data))
  }, [decoded])


  return (
    <div>
      {
        artwork ? <img src={artwork.webImage.url} alt={artwork.title} /> : <p>Sorry no paintings match this HUEEEEEE </p>
      }

    </div>
  )
}

export default Museum;