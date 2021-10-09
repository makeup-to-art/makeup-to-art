import './App.css';
import Home from './Components/Home';
import {useState, useEffect} from 'react';
import axios from 'axios';

// Makeup API: https://makeup-api.herokuapp.com/api/v1/products.json

function App() {

    const [brandName,
        setBrandName] = useState();
    const [productColors,
        setProductColors] = useState();
    const [submit,
        setSubmit] = useState(false)

    useEffect(() => {
        if (submit === true) {
            axios({
                url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
                method: 'GET',
                dataResponse: 'json',
                params: {
                    brand: brandName
                }
            }).then(response => {
                const brandProducts = response.data;
                const colors = [];
                brandProducts.forEach(product => {
                    if (product.product_colors.length > 0) {
                        colors.push(product.product_colors);
                    }
                })
                //Goes through the colors array and performs a forEach on the array and any sub arrays to grab random colours until a total of 7 are achieved.
                const randomColours = [];
                    colors.forEach((color,index) => {
                        color.forEach(element => {
                          if (randomColours.length < 7) {
                            let random = 0; //Default to zero in case the array only has a length of 1
                            if (color.length > 1) { //Checks if array is larger than 1 entry, if so randomize the index used
                              random = Math.floor(Math.random() * color.length);
                            }
                            randomColours.push(colors[index][random].hex_value)
                          }

                        })
                    })



                setProductColors(randomColours);
                setSubmit(false);
                console.log(productColors)

            })

        }
    }, [submit, brandName, productColors]);

    const handleSubmit = (e, brand) => {
        e.preventDefault();
        setProductColors([]) //Reset colours so the previous colours don't get used
        setBrandName(brand);
        setSubmit(true);
    }

    return (
        <div className="App">
            <Home handleSubmit={handleSubmit}/>
        </div>
    );
};

export default App;
