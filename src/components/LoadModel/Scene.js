import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRouter } from 'next/router';
import { ModelWithMeshes, changeMeshToDefaultColor, changeUniqueMeshColor } from '../../utilities/colors';

const Scene = ({
  modelPath,
  positionModel,
  rotateModel,
  setDisableIconClick,
  modelRef,
}) => {
  const [allMeshes, setAllMesh] = useState();
  const [originalColor, setOriginalColor] = useState([]);

  const router = useRouter();
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (router?.query?.exit === "true") {
      changeMeshToDefaultColor(gltf, router, originalColor, setOriginalColor);
    }
  }, [router?.query?.exit]);

  useEffect(() => {
    changeUniqueMeshColor(router, allMeshes);
  }, [router?.query?.c, router?.query?.change]);

  useEffect(() => {
    ModelWithMeshes(gltf, router, originalColor, setOriginalColor, setAllMesh);
    setDisableIconClick(true);
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      rotation={[0, -(positionModel * 0.1), -(rotateModel * 0.1)]}
    />
  );
};

export default Scene;