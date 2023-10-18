import { Canvas, useLoader } from "@react-three/fiber"
import Scene from './Scene';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const LoadModel = ({
  modelpath,
  positionModel,
  rotateModel,
  setDisableIconClick,
  modelRef,
}) => {

  const MatModel = () => {
    const gltf = useLoader(GLTFLoader, "/assets/models/net.glb");
    return <primitive scale={2} rotate={[0.5,0.2,0.5]} position={[0,1,0]} object={gltf.scene} />;
  }

  return (
    <div className="model-container">
      <Canvas shadows={"basic"}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={0.5}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        />
        {/* <Scene
          modelRef={modelRef}
          modelPath={modelpath}
          positionModel={positionModel}
          rotateModel={rotateModel}
          setDisableIconClick={setDisableIconClick}
        /> */}
        <MatModel />
      </Canvas>
    </div>
  );
};

export default LoadModel;