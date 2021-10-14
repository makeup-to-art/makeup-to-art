
const BrandColor = (props) => {

    
    return(
        <section className="colourContainer wrapper">
            <h2>Pick a color below & we will find a painting to match your look!</h2>
            <ul className="colorList">
                {
                    props.colorArray.map((color, index) => {

                        return(
                            <li key={index}>
                                    <button className="colorBox" style={{backgroundColor: `${color}`}} onClick={props.handleColorChoice} value={color}></button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default BrandColor