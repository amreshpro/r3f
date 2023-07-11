import { OrbitControls } from "@react-three/drei"
import {extend, useThree,useFrame } from "@react-three/fiber"
import { useRef } from 'react'
import CustomObject from "./CustomObject"

extend({OrbitControls:OrbitControls})

const Experience = () => {

    const {camera, gl} = useThree()

const sphereRef = useRef()
const groupRef = useRef()


useFrame((state,delta)=>{
   sphereRef.current.rotation.y +=delta
   sphereRef.current.rotation.x +=delta
groupRef.current.rotation.y +=delta
  
})

  return (
    <>

 <OrbitControls args={[camera,gl]} />     
 <directionalLight  position={[1,2,3]} intensity={1.5} />
<ambientLight intensity={0.5} />

<group ref={groupRef}>


        <mesh ref={sphereRef} position={[-1,3,-1]} scale={1.6} rotation={[1.9,3,5]} >

      {/* <torusKnotGeometry args={[1,8,100]}/> */}
      <sphereGeometry args={[0.3,15,15]} />
      <meshStandardMaterial color="#6696ff"   />
   </mesh>


     <mesh ref={sphereRef} position={[-2,1,0]} scale={1} rotation={[1.9,3,5]} >

      {/* <torusKnotGeometry args={[1,8,100]}/> */}
      <boxGeometry args={[1,0.8,1]} />
      <meshStandardMaterial color="#6696ff"   />

    </mesh>

</group>
   
    <mesh position={-1} rotation-x={-Math.PI*0.5}  scale={19} >
 <OrbitControls/>     
      {/* <torusKnotGeometry args={[1,8,100]}/> */}
      {/* <sphereGeometry args={[1.5,32,12]} /> */}
      <planeGeometry/>
      <meshStandardMaterial color="green"   />

    </mesh>

<CustomObject/>
    </>
  )
}
export default Experience
