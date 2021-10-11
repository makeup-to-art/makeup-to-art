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
        "cargo cosmetics",
        "c'est moi",
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
        "L'Oreal",
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
        <form className={props.userSelect} onSubmit={ (e => props.handleSubmit(e, selectedBrand))}>
            <label className="headline" htmlFor="brandSelect">Hue Are You?!</label>
            <select name="brandSelect" id="brandSelect" onChange={(e => setSelectedBrand(e.target.value))} value={selectedBrand}>
                <option value="" placeholder="true" disabled>Select a makeup brand</option>
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