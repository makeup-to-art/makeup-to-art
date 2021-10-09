import axios from "axios";


// API KEY: w2HhIYck

const Museum = (props) => {

  axios({
    url: 'https://www.rijksmuseum.nl/api/nl/collection',
    method: 'GET',
    dataResponse: 'json',
    params: {
        key: 'w2HhIYck',
        f.normalized32Colors.hex: '#FFFFFF',
    }
}).then(response => {console.log(response);})

  return (
    <div></div>
  )
}

export default Museum;