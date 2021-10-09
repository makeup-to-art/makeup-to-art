import { useState } from "react";

const Home = (props) => {

    const [selectedBrand, setSelectedBrand] = useState('');
    const brands = ["almay",
        "alva",
        "anna sui",
        "annabelle",
        "benefit",
        "boosh",
        "burt's bees",
        "butter london",
        "c’est moi",
        "cargo cosmetics",
        "china glaze",
        "clinique",
        "coastal classic creation",
        "colourpop",
        "covergirl",
        "dalish",
        "deciem",
        "dior",
        "dr. hauschka",
        "e.l.f.",
        "essie",
        "fenty",
        "glossier",
        "green people",
        "iman",
        "l’oreal",
        "lotus cosmetics usa",
        "maia's mineral galaxy",
        "marcelle",
        "marienatie",
        "maybelline",
        "milani",
        "mineral fusion",
        "misa",
        "mistura",
        "moov",
        "nudus",
        "nyx",
        "orly",
        "pacifica",
        "penny lane organics",
        "physicians formula",
        "piggy paint",
        "pure anada",
        "rejuva minerals",
        "revlon",
        "sally b's skin yummies",
        "salon perfect",
        "sante",
        "sinful colours",
        "smashbox",
        "stila",
        "suncoat",
        "w3llpeople",
        "wet n wild",
        "zorah",
        "zorah biocosmetiques"];
    


    return (
        <form onSubmit={ (e => props.handleSubmit(e, selectedBrand))}>
            <label htmlFor="brandSelect">Select a makeup brand</label>
            <select name="brandSelect" id="brandSelect" onChange={(e => setSelectedBrand(e.target.value))} value={selectedBrand}>
                {
                    brands.map( (brand, index) => {
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