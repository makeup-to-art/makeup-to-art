import './App.css';
import Home from './Components/Home';
import BrandColor from './Components/BrandColor';
import Museum from './Components/Museum';
import {useState, useEffect} from 'react';
import randomizer from './Utilities/randomizer';
import axios from 'axios';
import nearestColor from 'nearest-color'
import colors from './Utilities/colors';
import Footer from './Components/Footer';
// Makeup API: https://makeup-api.herokuapp.com/api/v1/products.json

function App() {

    const [brandName,
        setBrandName] = useState();
    const [apiError,
        setApiError] = useState();
    const [productColors,
        setProductColors] = useState();
    const [submit,
        setSubmit] = useState(false);
    const [arrayStatus,
        setArrayStatus] = useState(false);
    const [colorChoice,
        setColorChoice] = useState();
    const [userSelect,
        setUserSelect] = useState('userSelect')
    const [screen,
        setScreen] = useState('AppScreen1');
    const [artwork,
        setArtwork] = useState([]);
    const [getArtwork,
        setGetArtwork] = useState(false);

    const compareColor = nearestColor.from(colors); //setup nearest color comparison package, checks inputted colour against provided color array

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
                if (response.data.length !== 0 && response) {
                    setSubmit(false);
                    const brandProducts = response.data;
                    const colors = [];
                    brandProducts.forEach(product => {
                        if (product.product_colors.length > 0) {
                            colors.push(product.product_colors);
                        }
                    })

                    const randomColours = [];
                    randomizer(colors, randomColours); //Goes through the colors array and performs a forEach on the array and any sub arrays to grab random colours until a total of 7 are achieved.
                    setProductColors(randomColours);
                    setArrayStatus(true);
                } else {
                    throw new Error();
                }

            }).catch(error => {
                setApiError('An error occured, please try again. If this re occurs, try a different brand or ' +
                        'try again at a later time');
            })

        }
    }, [submit, brandName, productColors]);

    const handleSubmit = (e, brand) => {
        e.preventDefault();
        setProductColors([]); //Reset colours so the previous colours don't get used
        setBrandName(brand);
        setSubmit(true);
        setUserSelect('userSelectMade');
        setScreen('AppScreen2');
        setGetArtwork(false) //Prevents api call in museum from running before a colour has been chosen
    }

    const handleColorChoice = (e) => {
        setColorChoice('');
        // Timeout is used so that the museum component has time to realize the colour
        // has changed and will remove the last image.
        setTimeout(() => {
            const closestColor = compareColor(e.target.value); //Checks which colour is closest to the one the user selected
            setGetArtwork(true);
            setColorChoice(closestColor);
        }, 10)

    }

    const updateArtwork = (newArt) => {
        setArtwork(newArt);
    }

    const clearGallery = () => {
        updateArtwork([]);
        setColorChoice();
        // setArtworkPresent(false);
    }

    return (
        <main className={screen}>
            <Home handleSubmit={handleSubmit} userSelect={userSelect}/> 
            {arrayStatus === true
                ? <BrandColor 
                    colorArray={productColors} 
                    handleColorChoice={handleColorChoice}
                />
                : <p>{apiError}</p>
            }
            {colorChoice
                ? <Museum
                        colorChoice={colorChoice}
                        artwork={artwork}
                        updateArtwork={updateArtwork}
                        clearGallery={clearGallery}
                        getArtwork={getArtwork}/>
                : null
            }
            <Footer/>
        </main>
    );
};

export default App;