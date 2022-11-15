'use client';

import { Canvas } from "@react-three/fiber";
import React from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Effects } from "./Effects";
import { Landscape } from "./Landscape";
import { Light } from "./Light";

/**
 * This component renders the scene which renders all the components declared above and more:
 * - the moving landscape
 * - the lights
 * - the effect
 * - a black background color
 * - a black fog towards the back of the scene to hide the second terrain showing up every now and then when it appears
 * - orbit controls to play with (it helps a lot during development to drag, rotate objects in the scene)
 * - the perspective camera (our default camera thanks to the makeDefault prop)
 *
 *
 * Note:
 * I used this useEffect / isMounted trick to make sure Next.js doesn't make the scene
 * crash due to the lack of "window". Not the best, but it works. At least we have access to the
 * device pixel ratio immediately when the scene appears the first time.
 *
 */
 export const Scene = () => {
    const [mounted, setMounted] = React.useState(false);
  
    React.useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <>
        {!mounted ? null : (
          <Canvas
            dpr={Math.min(window.devicePixelRatio, 2)}
            linear
            antialias
          >
            <React.Suspense fallback={null}>
              <color attach="background" args={["#000000"]} />
              <fog attach="fog" args={["#000000", 1, 2.5]} />
              <OrbitControls attach="orbitControls" />
              <PerspectiveCamera
                makeDefault
                position={[0, 0.06, 1.1]}
                fov={75}
                near={0.01}
                far={20}
              />
              <Light />
              <Landscape />
              <Effects />
            </React.Suspense>
          </Canvas>
        )}
      </>
    );
  };