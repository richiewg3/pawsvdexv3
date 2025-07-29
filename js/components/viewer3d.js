import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function createViewer(width = 350, height = 350, initialModelUrl) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(3, 2, 4);

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const pointLight = new THREE.PointLight(0xffffff, 1.0, 20);
  pointLight.position.set(4, 4, 4);
  scene.add(pointLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.0;

  const loader = new GLTFLoader();
  let currentModel;

  function loadModel(url) {
    if (!url) return;
    loader.load(
      url,
      (gltf) => {
        if (currentModel) {
          scene.remove(currentModel);
        }
        currentModel = gltf.scene;
        scene.add(currentModel);
      },
      undefined,
      (error) => {
        console.error('An error happened loading model:', error);
      }
    );
  }

  loadModel(initialModelUrl);

  let frameId;
  function animate() {
    frameId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  function cleanup() {
    cancelAnimationFrame(frameId);
    controls.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  }

  return {
    canvas: renderer.domElement,
    loadModel,
    cleanup,
  };
}

