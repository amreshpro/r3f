import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import * as THREE from 'three'



const App = ()=>{

  return (
  <Canvas
  gl={{antialias:false,
  toneMapping:THREE.ACESFilmicToneMapping,}}
  camera={{fov:65,near:0.1,far:200,position:[3,2,6]}}
  >
<Experience/>


  </Canvas>

  )


}


export default App 

