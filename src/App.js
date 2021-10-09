import './App.css';
import Home from './Components/Home';
import BrandColor from './Components/BrandColor';
import Museum from './Museum';
import {useState, useEffect} from 'react';
import randomizer from './Utilities/randomizer';
import axios from 'axios';

// Makeup API: https://makeup-api.herokuapp.com/api/v1/products.json

function App() {

    const [brandName,
        setBrandName] = useState();
    const [productColors,
        setProductColors] = useState();
    const [submit,
        setSubmit] = useState(false);
    const [arrayStatus, 
        setArrayStatus] = useState(false);
    const [colorChoice, setColorChoice] = useState();


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

                const randomColours = [];
                randomizer(colors, randomColours) //Goes through the colors array and performs a forEach on the array and any sub arrays to grab random colours until a total of 7 are achieved.
                setProductColors(randomColours);
                setSubmit(false);
                // console.log(productColors)
                setArrayStatus(true)

            })

        }
    }, [submit, brandName, productColors]);

    const handleSubmit = (e, brand) => {
        e.preventDefault();
        setProductColors([]) //Reset colours so the previous colours don't get used
        setBrandName(brand);
        setSubmit(true);
    }

    const handleColorChoice = (e) => {
        setColorChoice(e.target.value)
    }

    return (
        <div className="App">
            <Home handleSubmit={handleSubmit}/>
            {
            arrayStatus === true
            ? <BrandColor colorArray={productColors} handleColorChoice={handleColorChoice}/>
            : null
            }
            <Museum colorChoice={colorChoice}/>
        </div>
    );
};

export default App;
