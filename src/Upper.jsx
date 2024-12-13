import React from 'react'
import {Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import Cyl from './Scene'


function Upper() {
  return (
    
<div className='w-[70vw] h-[50vw] ml-[13%] justify-center'>

        <Canvas className='' camera={{fov:40}}>
            <OrbitControls/>
            <ambientLight/>
            <Cyl/>
            <EffectComposer>

            <Bloom
            intensity={1.6} // The bloom intensity.
            luminanceThreshold={.18} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.02} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={true} // Enables or disables mipmap blur.
            />
            <ToneMapping adaptive/>
            </EffectComposer>
        </Canvas>
    
            </div>
  )
}

export default Upper