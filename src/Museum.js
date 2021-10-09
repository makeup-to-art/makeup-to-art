import axios from "axios";



// API KEY: w2HhIYck

const Museum = (props) => {

  console.log(props.colorChoice)

  axios({
    url: 'https://www.rijksmuseum.nl/api/en/collection',
    method: 'GET',
    dataResponse: 'json',
    params: {
        key: 'w2HhIYck',
        type: 'painting',
        'f.normalized32Colors.hex': '#F6ECF3',
    }
}).then(response => {console.log(response);})

  return (
    <div></div>
  )
}

export default Museum;