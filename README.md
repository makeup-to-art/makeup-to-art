# Hue Are You?

## What is it?
Hue Are You is a react project developed at Juno College as a group project. The request was an application that would allow a user to choose a makeup brand and then be presented with colours from that brand. The user can then select a colour and they will be presented with a painting from the Rijksmuseum containing that colour.

## How does it work?
Two API's are used in this project, the Makeup API and the Rijksmuseum API. The brands are stored in an array that then populate a drop down list, this list has it's value controlled via react and state. Once a brand is chosen and submitted we use that state value to call the Makeup API and retrieve an array of colours for that brand. A randomizer function will then grab up to 7 colours from the array and then they are displayed on the screen. Once one of these colours is selected, it's value is passed to a state, and then that is used to makle the call to the Rijksmuseum API.

However, before that can happen we must find the nearest colour match to the colours that the API will accept. While there are millions of colours in the world, the API will only accept 32, and some of those are duplicates. We achieved this through the use of the nrearest-colour npm package. Once we perform this action and make the API call, we then grab a random painting from the data returned and display it to the screen. As a stretch goal we allowed the user to select more paintings by choosing another colours, or the same one if they would like.

This raised the question of how to deal with duplicates. This is achieved by using a while loop and some logic statements that check to see if the painting ID already exist in the painting state, if it does we randomize and select a new painting. If there are 3 duplicates in a row we assume that we have reached the end of the available results and notify the user. This was done to prevent an inifinite loop situation.

## Challenges/Wins

As stated above, one of our challenges was having to find the nearest colour that would be accepted by the API. This was solved through the use of an NPM package. Another challenge we ran into, was that on a few colours for the api, a space was required before the hexcode in order for it to be valid. While this was a minor issue, it was a good lesson in the quirks of different api's. 

A bigger challenege was handling the data returned from the rijksmuseum and trying to randomize which painting we used and to check for duplicates. THe solution we came up with for this was a recursive function that would compare the id's of the painting to ones stored in a state. If the id's matched, the function would call itself again. However if this was done 3 times in a row and we we're still getting matches, we would end the function and notify the user that all results have been displayed.

Our final win, is how well we worked together as a team. We were able to openly discuss all isues and ideas, as well as consult and guide eachother through code problems and learn not only developing in a team, but more about code and different viewpoints.
