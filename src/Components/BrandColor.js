
const BrandColor = (props) => {

    
    return(
        <ul className="colorList">
            {
                props.colorArray.map((color, index) => {

                    return(
                        <li key={index}>
                                <button className="colorBox" style={{backgroundColor: `${color}`}} onClick={props.handleColorChoice} value={color}>{color}</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BrandColor