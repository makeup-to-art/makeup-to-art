const randomizer = (colors, randomColours) => {
    colors.forEach((color, index) => {
        color.forEach(element => {
            if (randomColours.length < 7) {
                let random = 0; //Default to zero in case the array only has a length of 1
                if (color.length > 1) { //Checks if array is larger than 1 entry, if so randomize the index used
                    random = Math.floor(Math.random() * color.length);
                }
                if (!randomColours.includes(colors[index][random].hex_value)){
                    randomColours.push(colors[index][random].hex_value)
            }

        }
    })
})
}
export default randomizer;



