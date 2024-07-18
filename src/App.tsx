/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
//@ts-ignore
import Lambo from "../public/Lambo";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5] }}
        className="w-full h-screen"
      >
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Lambo />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default App;
