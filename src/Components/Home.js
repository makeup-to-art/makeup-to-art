import {useState} from "react";
import brands from "../Utilities/brands";

const Home = (props) => {

    const [selectedBrand,
        setSelectedBrand] = useState('');


    return (
        <form
            className={props.userSelect}
            onSubmit={(e => props.handleSubmit(e, selectedBrand))}>
            <h1 className="headline">Hue Are You?!</h1>
            <label htmlFor="brandSelect">Pick your Favourite Makeup Brand</label>

            <select
                name="brandSelect"
                id="brandSelect"
                required
                onChange={(e => setSelectedBrand(e.target.value))}
                value={selectedBrand}>
                <option value="" disabled>Select a makeup brand</option>
                {brands.map((brand, index) => {
                    return (
                        <option key={index} value={brand}>{brand}</option>
                    )
                })
}
            </select>
            <button type="submit">Select Brand</button>
        </form>
    )
};

export default Home;