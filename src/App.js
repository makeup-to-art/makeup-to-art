import './App.css';
import Home from './Components/Home';
import { useState, useEffect} from 'react';
import axios from 'axios';

// Makeup API: https://makeup-api.herokuapp.com/api/v1/products.json

function App() {

  const [brandName, setBrandName] = useState();
  const [productColors, setProductColors] = useState();
  const [submit, setSubmit] = useState(false)


useEffect(()=> {
    if(submit === true) {
      axios({
        url:'https://makeup-api.herokuapp.com/api/v1/products.json',
        method: 'GET',
        dataResponse: 'json',
        params: {
          brand: brandName
        }
      }).then( response => {
        const brandProducts = response.data;
        const colors = [];
        brandProducts.forEach(product => {
          if  (product.product_colors.length > 0) {
            colors.push(product.product_colors);
          }
        })

          setProductColors(colors);
          setSubmit(false);
          console.log(productColors)
  
        })

    }
  },[submit,brandName,productColors]);

  const handleSubmit = (e, brand) => {
    e.preventDefault();
    
    setBrandName(brand);
    setSubmit(true);
  }

  return (
    <div className="App">
      <Home
      
      handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;


  