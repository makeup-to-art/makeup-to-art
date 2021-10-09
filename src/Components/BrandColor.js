// import hexRgb from "hex-rgb"

const BrandColor = (props) => {


    
    return(
        <ul>
            {
                props.colorArray.map((color) => {
                    // const rgb = hexRgb(color, {format: 'array'})
                    // console.log(rgb)
                    
                    // console.log(color)

                    return(
                        <li>
                            <div className="colorBox">
                                <button onClick={props.handleColorChoice} value={color}>{color}</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BrandColor