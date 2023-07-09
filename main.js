import *as THREE from 'three';

const canvas = document.getElementById("webgl")

const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"#ff0000"})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)


const size = {
  width:800,
  height:600,
}

// camera
const camera  = new THREE.PerspectiveCamera(75,size.width/size.height)
camera.position.z=3
// camera.position.x=2
scene.add(camera)



console.log(canvas)
// render
const renderer = new THREE.WebGLRenderer({
  canvas

})


renderer.setSize(size.width,size.height)


renderer.render(scene,camera)