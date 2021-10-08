// Create states for art data/makeup data/userInput
// Set up useEffect
    

// Set up an interface - a dropdown menu where the user can select the brand they want
    // Make the makeup API call on submit
    // Filter results and grab only ones with "productColor" property. That returns an object containing a HEXCODE and product color name
    // randomizer function to grab 7 Hexcode values
    // Pass the colors array to a state variable data/colors

//  A component to display the colors for the user to select
  // Pass into this component the data/colors
  // Map through the data and return it to the page
  // Each color becomes a button that when clicked , gets passed to a state, which triggers the useEffect and calls the  Rijksmuseum API with the hexcode.

// https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&f.normalized32Colors.hex={ourHexCode}
// Store the data from the museum and pass it to a randomizer function to grab 1 item in the array.
  // Pass that object to a component that will display it on the page under the color choices