// controls.js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//function that sets up orbit controls so the user can rotate and pan around the model
export function Controls(camera, canvas) {
    //adds orbit controls and makes it smooth
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    return controls;
}
