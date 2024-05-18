//textDisplay.js

//function that gets the paragraph elements for method and description and ammends the html with the correct value pair
export function textDisplay(text){
    const methodText=document.getElementById("method")
    methodText.innerHTML=text.method;
    const descriptionText=document.getElementById("description")
    descriptionText.innerHTML=text.description;
}