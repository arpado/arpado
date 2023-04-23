<template>
  <div class="story-section" id="story" @mousemove="rotatePlanet">
    <canvas ref="canvasElement" />
  </div>
</template>

<script setup>
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// option a
import {
  AxesHelper,
  Scene,
  Color,
  Fog,
  GridHelper,
  DirectionalLightHelper,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  ShaderMaterial,
  PlaneGeometry,
  SphereGeometry,
  DodecahedronGeometry,
  BoxGeometry,
  TextureLoader,
  CubeTextureLoader,
  CanvasTexture,
  MeshBasicMaterial,
  WebGLRenderer,
  AdditiveBlending,
  BackSide,
  Group
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { dat } from 'dat.gui'

import { useWindowSize } from "@vueuse/core";
import earth from "@/src/images/earth-map.jpg";
import moonMap from "@/src/images/moon-map.jpg";
// option b
// import * as THREE from 'three'
// THREE.Scene = Scene;

// import { Ref } from "vue";
import vertexShader from "@/composables/shaders/vertex.glsl";
import fragmentShader from "@/composables/shaders/fragment.glsl";
import atmosphereVertexShader from '@/composables/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '@/composables/shaders/atmosphereFragment.glsl'

const canvasElement = ref(null);
const scene = new Scene();
let renderer = null;
let orbit = null;
let pointerPos = {
  x: 0,
  y: 0
};

const { width, height } = useWindowSize();
// WIDTH CHANGED TO *1.5 SIZE TO PUSH THE PLANET ASIDE!
const aspectRatio = computed(() => {
  return (width.value * 1.5) / height.value;
});

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 0, 2);
scene.add(camera);

// const bgColor = new Color("#000000");
// scene.background = bgColor;
// scene.fog = new Fog(bgColor, 0.1, 75)

// LIGHT

// const ambientLight = new AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const directionalLight = new DirectionalLight(0xffffff, 0.8)
// scene.add(directionalLight)
// directionalLight.position.set(0, 1, 0)
// const helper = new DirectionalLightHelper( directionalLight, 5 );
// scene.add( helper );

// BODIES
const textureLoader = new TextureLoader();

// const planeGeometry = new PlaneGeometry(10, 10);
// const planeMaterial = new MeshBasicMaterial({color: '#ffffff'})
// const helperPlane = new Mesh(planeGeometry, planeMaterial)
// scene.add(helperPlane)
// helperPlane.rotation.x = -0.5 * Math.PI;

const grid = new GridHelper(10)
scene.add(grid)
const axesHelper = new AxesHelper( 5 );
scene.add( axesHelper );



const planet = new Mesh(
  new SphereGeometry(0.75, 50, 50),
  // new MeshBasicMaterial({ color: 0x008080, map: textureLoader.load(earth) }),
  new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new TextureLoader().load(earth),
      },
    },
  })
);
// scene.add(planet);

const planetGroup = new Group()
const masterGroup = new Group()
planetGroup.add(planet)
masterGroup.add(planetGroup);
scene.add(masterGroup)

const moon = new Mesh(
  new SphereGeometry(0.15, 20, 20),
  new MeshBasicMaterial({ color: 0x008080, map: textureLoader.load(moonMap) }),
  // new ShaderMaterial({
  //   vertexShader,
  //   fragmentShader,
  //   uniforms: {
  //     globeTexture: {
  //       value: new TextureLoader().load(moonMap),
  //     },
  //   },
  // })
);
planetGroup.add(moon)
moon.position.x = 3;

const atmosphere = new Mesh(
  new SphereGeometry(0.75, 50, 50),
  // new MeshBasicMaterial({ color: 0x008080, map: textureLoader.load(earth) }),
  new ShaderMaterial({
    // uniforms: uniforms,
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: AdditiveBlending,
    side: BackSide,
    // lights: true,
  })
);
atmosphere.scale.set(1.1, 1.1, 1.1);
scene.add(atmosphere);

// planetGroup.position.x += 1;
// atmosphere.position.x += 1;
// planetGroup.position.z += -1;
// atmosphere.position.z += -1;


// OTHER STUFF

// const dodecahedron = new Mesh(
//   new DodecahedronGeometry(1, 0),
//   new MeshStandardMaterial({ color: 0x008080, wireframe: false })
// );
// scene.add(dodecahedron);

// const box = new Mesh(
//   new BoxGeometry(2, 1, 0.05),
//   new MeshStandardMaterial({ color: 0x008080, wireframe: false, map: textureLoader.load(catan)})
// );
// const cubeTextureLoader = new CubeTextureLoader();
// scene.add(box);
// box.position.set(2, 0, 0)

// function createCanvas() {
//   const canvas = document.createElement('canvas')
//   canvas.classList.add('test-canvas')
//   canvas.setAttribute("data-augmented-ui", "tl-clip tr-clip br-clip bl-clip-x both")
//   canvas.width = 100;
//   canvas.height = 50;
//   const context = canvas.getContext('2d')
//   context.fillStyle = '#ffffff'
//   context.fillRect(0, 0, 100, 50)
//   return new CanvasTexture(canvas)
// }
// const testCanvas = createCanvas()
// const box2 = new Mesh(
//   new BoxGeometry(2, 1, 0.05),
//   new MeshStandardMaterial({  map: testCanvas})
// );
// // const cubeTextureLoader = new CubeTextureLoader();
// scene.add(box2);
// box2.position.set(-2, 0, 0)

// END OF OTHER STUFF

// GUI
// const gui = new dat.GUI()
// console.log(gui)
// const options = {
//   positionX: 0,
//   positionY: 0,
//   positionZ: 0,
// }

// gui.changePositionX(options, 'positionX', -5, 5).onChange(e => {
//   planetGroup.position.x = options.positionX;
//   atmosphere.position.x = options.positionX;
// })

// RENDER FUNCTIONS

function updateRenderer() {
// WIDTH CHANGED TO *1.5 SIZE TO PUSH THE PLANET ASIDE!
  renderer.setSize((width.value * 1.5), height.value);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
}
function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}
function setRenderer() {
  if (canvasElement.value) {
    renderer = new WebGLRenderer({
      canvas: canvasElement.value,
      alpha: true,
      antialias: true,
    });

    updateRenderer();

    orbit = new OrbitControls(camera, canvasElement.value);
    orbit.minDistance = 1;
    orbit.maxDistance = 15;
    orbit.update();
  }
}


function rotatePlanet() {
  pointerPos.x = (event.clientX / innerWidth) * 2 -1;
  pointerPos.y = -(event.clientY / innerHeight) * 2 +1;
}
onMounted(() => {
  setRenderer();
  animate();
});
const animate = () => {
  planet.rotation.y += 0.02;
  planetGroup.rotation.y += 0.02
  gsap.to(masterGroup.rotation, {
    y: pointerPos.x * 0.5,
    x: - pointerPos.y * 0.5,
    duration: 2
  })

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});
</script>

<style scoped>
.story-section {
  width: 100vw;
  /* height: 125vh; */
  height: 100vh;
  /* background-color: black; */
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
}
/* @media (min-width: 1000px) {
  .story-section {
    height: 100vh;
  }
} */
</style>