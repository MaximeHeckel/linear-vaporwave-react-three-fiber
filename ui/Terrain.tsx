'use client';

import { useTexture } from "@react-three/drei";
import React from "react";
import { MeshStandardMaterial } from "three";
import CustomShaderMaterial from "three-custom-shader-material";

const fragmentShader = `
float aastep(in float threshold, in float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return 1.0 - smoothstep(threshold-afwidth, threshold+afwidth, value);
}
void main() {
  float lw = 1.0;
  float w;
  float gx = 1.0 + cos(vUv.x * 24.0 * 2.0 * PI - PI);
  w = fwidth(vUv.x) * lw;
  gx = aastep(w, gx);
  float gy = 1.0 + cos(vUv.y * 24.0 * 2.0 * PI - PI);
  w = fwidth(vUv.y) * lw;
  gy = aastep(w, gy);
  float grid = gx + gy;
  
  csm_DiffuseColor = vec4(grid, grid * 0.3, grid * 0.5, 1.0);
}
`;

/**
 * This component renders the terrain composed of:
 * - a plane geometry
 * - a mesh standard material where we added:
 *   - a displacementMap for the topography
 *   - a texture for the grid
 *   - a metalnessMap for the reflective parts
 */
 export const Terrain = React.forwardRef((props, ref) => {
    const { z } = props;
    const materialRef = React.useRef();
  
    const [heightTexture, metalnessTexture] = useTexture([
      "displacement-7.png",
      "metalness-2.png",
    ]);
  
    return (
      <mesh ref={ref} position={[0, 0, z]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeBufferGeometry arrach="geometry" args={[1, 2, 24, 24]} />
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={MeshStandardMaterial}
          fragmentShader={fragmentShader}
          displacementMap={heightTexture}
          displacementScale={0.4}
          metalnessMap={metalnessTexture}
          metalness={0.9}
          roughness={0.5}
        />
      </mesh>
    );
  });
  
  Terrain.displayName = "Terrain";