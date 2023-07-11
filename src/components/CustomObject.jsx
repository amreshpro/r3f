import * as THREE from 'three'

const CustomObject = () => {

    const vertices = 10*3
    const position = new Float32Array(vertices*3)
    for(let i = 0 ; i< vertices*3;++i){
        position[i] = (Math.random()- 0.5 ) *3
    }

  return (
<mesh>
    <bufferGeometry>
        <bufferAttribute attach="attributes-position"
        count={vertices}
        itemSize={3}
        array={position}
        
        />
    </bufferGeometry>
    <meshBasicMaterial color="red"  side={THREE.DoubleSide}/>
</mesh>
  )
}
export default CustomObject