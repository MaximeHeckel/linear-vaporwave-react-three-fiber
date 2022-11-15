'use client';

import React from "react";

/**
 * This component renders the Light of the scene which is composed of:
 * - 2 spotlights of high intensity positioned right behind the camera
 * - each spotlight aims at a specific target on opposite sides of the landscapes
 */
export const Light = () => {
    const spotlight1Ref = React.useRef();
    const spotlight2Ref = React.useRef();

    spotlight1Ref.current?.target.position.set([-0.25, 0.25, 0.25]);
    spotlight2Ref.current?.target.position.set([0.25, 0.25, 0.25]);

    return (
        <>
            <spotLight
                ref={spotlight1Ref}
                color="#d53c3d"
                intensity={40}
                position={[0.5, 0.75, 2.1]}
                distance={25}
                angle={Math.PI * 0.1}
                penumbra={0.25}
                decay={10}
            />
            <spotLight
                ref={spotlight2Ref}
                color="#d53c3d"
                intensity={40}
                position={[-0.5, 0.75, 2.1]}
                distance={25}
                angle={Math.PI * 0.1}
                penumbra={0.25}
                decay={10}
            />
        </>
    );
};