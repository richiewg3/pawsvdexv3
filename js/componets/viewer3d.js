import * as THREE from 'https://cdn.skypack.dev/three@0.157/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.157/examples/jsm/controls/OrbitControls.js';

/**
 * Lifecycle‑aware Three.js viewer factory.
 */
export function createViewer(width = 350, height = 350) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(3, 2, 4);

  const geo = new THREE.IcosahedronGeometry(1.2, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0x55eaff, metalness: 0.4, roughness: 0.25 });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const pointLight = new THREE.PointLight(0xff66ff, 1.0, 20);
  pointLight.position.set(4, 4, 4);
  scene.add(pointLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

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
    geo.dispose();
    mat.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  }

  return {
    canvas: renderer.domElement,
    setColor: hex => mat.color.setHex(hex),
    cleanup
  };
}