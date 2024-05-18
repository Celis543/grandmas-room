// main.js
import { displayObject } from './model.js';
import { modelButtons } from './buttons.js';
import {objectDescriptions} from './objectDescriptions.js';
import 'bootstrap/dist/css/bootstrap.min.css';  //import bootstrap css framework

//gets object constants from the objectDescriptions function
const {vanity,statue,dresser,dolls,picture}= objectDescriptions();

// creates the new scene object
const liveModel = new displayObject();
//initializes display of vanity model since that is the default button value
liveModel.loadModelAndDisplay('assets/Vanity.glb', 2, vanity);

//function that handles switch case for buttons
function buttonHandler(buttonId) {
    switch (buttonId) {
        case 'vanity-btn':
            liveModel.clearScene(); //clear scene
            liveModel.loadModelAndDisplay('assets/Vanity.glb', 2, vanity);  //load the correct model and corresponding text into the scene
            break;
        case 'statue-btn':
            liveModel.clearScene();
            liveModel.loadModelAndDisplay('assets/MosesStatue.glb', 10, statue);
            break;
        case 'dresser-btn':
            liveModel.clearScene();
            liveModel.loadModelAndDisplay('assets/Dresser.glb', 3, dresser);
            break;
        case 'dolls-btn':
            liveModel.clearScene();
            liveModel.loadModelAndDisplay('assets/CatDolls.glb', 20, dolls);
            break;
        // case 'picture-btn':
        //     liveModel.clearScene();
        //     liveModel.loadModelAndDisplay('assets/GrandmasPortrait.glb', 2, picture);
        //     break;
    }
}

//passes function that handles switch case to function for button event handlers
modelButtons(buttonHandler);
