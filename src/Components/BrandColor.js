
const BrandColor = (props) => {


    
    return(
        <ul>
            {
                props.colorArray.map((color, index) => {

                    return(
                        <li key={index}>
                            {/* <div className="colorBox" style={{backgroundColor: `${color}`}}> */}
                                <button className="colorBox" style={{backgroundColor: `${color}`}} onClick={props.handleColorChoice} value={color}>{color}</button>
                            {/* </div> */}
                        </li>
                    )
                })
            }
        </ul>
    )
}
 
export default BrandColor