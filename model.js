// model.js
import { setupScene } from './sceneSetup.js';
import { GLTFLoaderManager } from './gltfLoader.js';
import { Controls } from './controls.js';

import { textDisplay } from './textDisplay.js';

//class that handles loading the model, resizing the window, clearing and updating the scene
export class displayObject {
    constructor() {
        //gets scene,camerarenderer from sceneSetup
        this.scene = setupScene().scene;
        this.camera = setupScene().camera;
        this.renderer = setupScene().renderer;
        this.canvas = setupScene().canvas;
        this.controls = Controls(this.camera, this.canvas);
        this.loaderManager = new GLTFLoaderManager(this.scene);
    }

    //async function that waits for the model to load
    async loadModelAndDisplay(modelPath, scale, text) {
        await this.loaderManager.loadModelAndHDR(modelPath, scale);
        textDisplay(text);  //passes the text object to the textDisplay function when a new model is loaded
        this.animate();
        this.handleResize();
    }

    //updates the controls and renderer
    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    //resizes the camera and scene when the window size is changed
    handleResize() {
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    //removes previous child object from the scene
    clearScene() {
        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }
    }
}
