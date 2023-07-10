import * as THREE from 'three'


// get canvas id
const canvas = document.getElementById("webgl")

// scene banao
const scene = new THREE.Scene();


// geometry
const geometry = new THREE.BoxGeometry(1,1,1)

// mesh k liye basic material
const material = new THREE.MeshBasicMaterial({color:"orange"})

// creating mesh
const mesh  = new THREE.Mesh(geometry,material)

// scene me mesh add kr diya
scene.add(mesh)

const size = {
  width:window.innerWidth,
  height:window.innerHeight,
}


// camera banao
const camera = new THREE.PerspectiveCamera(75,size.width/size.height); //preferred


// camera box k andar hi h to kuch show nhi hoga

// changing camera position 
camera.position.z = 3

// camera add in scene
scene.add(camera)



const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(size.width,size.height)
// renderer.render(scene,camera)



// Animations
function tick(a){
 
  // update objects
  mesh.rotation.y +=0.01
mesh.rotation.x +=0.03

  // render
renderer.render(scene,camera)

  window.requestAnimationFrame(tick)
}

tick("Amresh")
