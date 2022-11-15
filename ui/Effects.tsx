'use client';

import { useFrame, useThree, extend } from "@react-three/fiber";
import React from "react";
import { EffectComposer, GammaCorrectionShader, RenderPass, RGBShiftShader, ShaderPass, UnrealBloomPass } from "three-stdlib";

/**
 * This component renders the post-processing effects we're using for this scene:
 * - a RGBShift
 * - an UnrealBloom pass
 * - a GammaCorrection to fix the colors
 *
 * Note: I had to set the Canvas linear prop to true to make effects work!
 * See the canva API for more info: https://docs.pmnd.rs/react-three-fiber/api/canvas
 */

 extend({ EffectComposer, RenderPass, ShaderPass, UnrealBloomPass });
 
 export const Effects = () => {
    const composerRef = React.useRef();
    const rgbShiftRef = React.useRef();
    const { gl, scene, camera, size } = useThree();
  
    React.useEffect(() => {
      composerRef?.current.setSize(size.width, size.height);
    }, [size]);
  
    useFrame(() => {
      if (rgbShiftRef.current) {
        rgbShiftRef.current.uniforms["amount"].value = 0.0012;
      }
      composerRef.current.render();
    }, 1);
  
    return (
      <effectComposer ref={composerRef} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <shaderPass
          ref={rgbShiftRef}
          attachArray="passes"
          args={[RGBShiftShader]}
        />
        <shaderPass attachArray="passes" args={[GammaCorrectionShader]} />
        <unrealBloomPass
          attachArray="passes"
          args={[size.width / size.height, 0.2, 0.8, 0]}
        />
      </effectComposer>
    );
  };