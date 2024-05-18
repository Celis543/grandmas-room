//sceneSetup.js
import * as THREE from 'three';

export function setupScene() {
    //creates new three.js scene
    const scene = new THREE.Scene();
    
    //sets canvas size and gets canvas element by Id
    const cnv_size = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    const canvas=document.getElementById("model_canvas");

    //creates camera
    const camera = new THREE.PerspectiveCamera(75, cnv_size.width/cnv_size.height, 0.1, 1000);
    camera.position.set(0,0,5);

    //creates renderer and appends to dom
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(cnv_size.width,cnv_size.height);

    return { scene, camera, canvas, renderer };
}
