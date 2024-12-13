import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as Three from 'three'


function Cyl() {

    let texture=useTexture('./Rectangle.png')
    texture.needsUpdate=true
    let cyl=useRef(null)
    useFrame((state,delta)=>{
        cyl.current.rotation.y -=delta
    })

  return (
    <group ref={cyl}>
        <mesh  rotation={[0,1.4,0.5]}>
          <cylinderGeometry args={[1.8,1.8,1.8,100,100,true]} />
          <meshStandardMaterial map={texture} side={Three.DoubleSide}/>
        </mesh>
    </group>
  )
}

export default Cyl