import axios from "axios";



// API KEY: w2HhIYck

const Museum = (props) => {

  const encoded = encodeURI(props.colorChoice);
  console.log(`color choice is : ${props.colorChoice}`)

  axios({
    url: 'https://www.rijksmuseum.nl/api/en/collection',
    method: 'GET',
    dataResponse: 'json',
    params: {
        key: 'w2HhIYck',
        type: 'painting',
        'f.normalized32Colors.hex': encoded,
    }
}).then(response => console.log(response))

  return (
    <div></div>
  )
}

export default Museum;