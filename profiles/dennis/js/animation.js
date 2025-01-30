import * as THREE from "three";
//import "./styleAni.css";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//1. crear escena
const scene = new THREE.Scene();
// Crear un cargador de texturas

//2. Crear la geometría de la esfera
const createSphere = (radius, texturePath, position) => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(texturePath);

  const geometry = new THREE.SphereGeometry(radius, 64, 64); //radio y segmentos alto y bajo
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material); //combinacion de la figura (esfera) y el material-
  material.color = { r: 255, g: 255, b: 255 };
  material.roughness = 0.7;
  material.metalness = 0.5;
  // Asignar el material al mesh
  mesh.material = material;

  mesh.position.set(position.x, position.y, position.z);
  return mesh;
};

const homeSection = document.getElementById("home");
//Sizes
const sizes = {
  width: homeSection.clientWidth,
  height: homeSection.clientHeight,
};

//2.1 crear luz en la esfera para que se vea:
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 20, -10); // Posición de la luz
light.intensity = 50;
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 0.009); // soft white light
scene.add(ambientLight);

//3.camera - campo de vision
const camera = new THREE.PerspectiveCamera(
  100,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 10;
scene.add(camera);

//4.renderizar, que se muestre el canvas y la esfera
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

//---------------------------------------------------

//controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = false;
controls.autoRotateSpeed = 2;

//Resize
window.addEventListener("resize", () => {
  //Update sizes
  sizes.width = homeSection.clientWidth;
  sizes.height = homeSection.clientHeight;
  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

//crear esferas con textura
const sphere1 = createSphere(7, "/profiles/dennis/images/Planets/earthN.webp", {
  x: 0,
  y: -3,
  z: 1,
});
const sphere2 = createSphere(2, "/profiles/dennis/images/Planets/venus.webp", {
  x: -40,
  y: -6,
  z: -3,
});
const sphere3 = createSphere(
  5,
  "/profiles/dennis/images/Planets/jupiter.webp",
  {
    x: 50,
    y: -3,
    z: -3,
  }
);
const sphere4 = createSphere(
  2,
  "/profiles/dennis/images/Planets/mercury.webp",
  {
    x: 75,
    y: 5,
    z: -3,
  }
);
const sphere5 = createSphere(3, "/profiles/dennis/images/Planets/mars.webp", {
  x: -50,
  y: -2,
  z: -5,
});

scene.add(sphere1);
scene.add(sphere2);
scene.add(sphere3);
scene.add(sphere4);
scene.add(sphere5);

//configurar loops de movimientos, controls y render
const loop = () => {
  sphere1.rotateY(0.01);
  sphere2.rotateY(0.01);
  sphere3.rotateY(0.01);
  sphere4.rotateY(0.01);
  sphere5.rotateY(0.01);

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

//Background scene

const setSceneBackground = (scene, texturePath) => {
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load(texturePath);
  scene.background = backgroundTexture;
};

const setSceneCubeBackground = (scene, texturePath) => {
  const format = ".webp";
  const urls = [
    texturePath + "dark-s_px" + format,
    texturePath + "dark-s_nx" + format,
    texturePath + "dark-s_py" + format,
    texturePath + "dark-s_ny" + format,
    texturePath + "dark-s_pz" + format,
    texturePath + "dark-s_nz" + format,
  ];

  const textureCube = new THREE.CubeTextureLoader().load(urls);
  scene.background = textureCube;
};
setSceneCubeBackground(scene, "/profiles/dennis/images/MilkyWay/");
