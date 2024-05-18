//gltfLoader.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

//class that handles loading the model and environment
export class GLTFLoaderManager {
    constructor(scene) {
        this.scene = scene; //scene created in sceneSetup is passed here
        this.loader = new GLTFLoader(); //three.js object that handles loading a glTF model file
        this.rgbLoader = new RGBELoader();  //three.js object that handles loading the HDR environment map
    }

    loadModelAndHDR(modelPath, scale) {
        return new Promise((resolve, reject) => {
            //Load the HDR environment map
            this.rgbLoader.load('assets/industrial_sunset_02_puresky_4k.hdr', (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                this.scene.background = texture;    //sets the background texture
                this.scene.environment = texture;   //sets the environment texture (used for reflections)

                //The model is loaded here so that it inherets the lighting and reflections from the environment map
                this.loader.load(modelPath, (gltf) => {
                    const model = gltf.scene.children[0];
                    model.scale.set(scale, scale, scale);   //scales the model to the appropriate value based on the value passed to loadModelAndDisplay in the DisplayObject class
                    model.position.set(3,0 , 0);   // position the model towards the bottom right of the screen
                    this.scene.add(model);  //adds the model to the scene
                    resolve(model);
                }, undefined, (error) => {
                    reject(error);
                });
            }, undefined, (error) => {
                reject(error);
            });
        });
    }
}
