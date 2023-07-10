import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {FontLoader}  from 'three/examples/jsm/loaders/FontLoader'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { BufferGeometry } from "three";

// root
const canvas = document.getElementById("webgl");

// scene
const scene = new THREE.Scene();


// const axisHelper = new THREE.AxesHelper()
// scene.add(axisHelper)

// canvas size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// cursor location
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove',(e)=>{
cursor.x = e.clientX
cursor.y = e.clientY

})


// geometry
// const geometry = new THREE.BoxGeometry(2, 2, 2);

// const loader = new FontLoader();

// loader.load("fonts/helvetiker_regular.typeface.json", function (font) {


const textureLoader = new THREE.TextureLoader()
const matcapTexture =  textureLoader.load('/texture/300.png')

// font loader
const fontLoader  = new FontLoader()
fontLoader.load(
  '/helvetiker_regular.typeface.json',
  (font)=>{
    console.log("Font Loaded")

    const textGeometry = new TextGeometry("Amresh",{
      font:font,
      size:0.5,
      height:0.6,
      curveSegments:5,
      bevelEnabled:true,
      bevelThickness:0.09,
      bevelSize:0.001,
      bevelOffset:0,
      bevelSegments:8
    })

    // textGeometry.computeBoundingBox()
    // textGeometry.translate(
    //   -(textGeometry.boundingBox.max.x - 0.02) * 0.5,
    //   -(textGeometry.boundingBox.max.y - 0.02) * 0.5,
    //    -(textGeometry.boundingBox.max.z - 0.02 )* 0.5,
    // );
textGeometry.center()

const textMaterial = new THREE.MeshMatcapMaterial({wireframe:true,matcap:matcapTexture})
const text = new THREE.Mesh(textGeometry,textMaterial)
scene.add(text)


 const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 40);
 const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
 

for(let i = 0; i<300;i++){
 const donut = new THREE.Mesh(donutGeometry, donutMaterial);

 donut.position.x = (Math.random() - 0.5 )*10 
donut.position.y = (Math.random() - 0.5) * 10; 
donut.position.z = (Math.random() - 0.5) * 10; 
donut.rotation.x = Math.random()* Math.PI
donut.rotation.y = Math.random() * Math.PI;


const scale = Math.random()
// donut.scale.x = scale ;
// donut.scale.y =scale ;
// donut.scale.z = scale ;
donut.scale.set(scale,scale,scale)

scene.add(donut)


}


  }
)

  // const geometry = new TextGeometry("Namaste Beautiful Peoples!", {
  //   font: ,
  //   size: 80,
  //   height: 5,
  //   curveSegments: 12,
  //   bevelEnabled: true,
  //   bevelThickness: 10,
  //   bevelSize: 8,
  //   bevelOffset: 0,
  //   bevelSegments: 5,
  // });
// });



// mesh material
// const material = new THREE.MeshBasicMaterial({ color: "orange" });

// add geometry and material in mesh
// const mesh = new THREE.Mesh(geometry, material);

// adding mesh in scene
// scene.add(mesh);

// camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height);

camera.position.z = 5;

// add camera in scene
scene.add(camera);

const controls = new OrbitControls(camera,canvas)
controls.target.z=1
controls.target.x =1
controls.target.y=1
controls.update()


const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// renderer 
renderer.setSize(sizes.width,sizes.height)





// animate
const animate = ()=>{
  // updating camera position
    // mesh.rotation.x =cursor.x/Math.PI -1
    // mesh.rotation.y =cursor.y /Math.PI - 1

  // what render  in canvas
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate()