'use client';

import { useFrame } from "@react-three/fiber";
import React from "react";
import { Terrain } from "./Terrain";

/**
 * This component renders the landscape:
 * - 2 Terrains behing one one another
 * - each terrain moves along the z axis creating an "endless moving animation"
 */
 export const Landscape = () => {
    const terrain1Ref = React.useRef();
    const terrain2Ref = React.useRef();
  
    useFrame((state) => {
      // Update plane position
      terrain1Ref.current.position.z = (state.clock.elapsedTime * 0.15) % 2;
      terrain2Ref.current.position.z = ((state.clock.elapsedTime * 0.15) % 2) - 2;
    });
  
    return (
      <>
        <Terrain ref={terrain1Ref} z={0} />
        <Terrain ref={terrain2Ref} z={-2} />
      </>
    );
  };