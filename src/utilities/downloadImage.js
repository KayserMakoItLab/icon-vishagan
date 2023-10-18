import * as THREE from 'three';

export const downloadCanvas = (modelRef, imageSize, imageType, modelName) => {
  var scene = new THREE.Scene();
  const threeDmodel = modelRef;
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  );

  camera.position.set(0, 0, 5);

  scene.add(threeDmodel);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.castShadow = true;
  dirLight.position.set(-2, 3, -2);
  scene.add(dirLight);
  const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
  scene.add(light);

  const rendererExport = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  rendererExport.autoClear = false;
  rendererExport.setSize(
    imageSize || window.innerWidth,
    imageSize || window.innerHeight
  );
  rendererExport.render(scene, camera);
  const dataURL = rendererExport.domElement.toDataURL(`image/${imageType}`);
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute(
    "download",
    `${modelName.toLowerCase()}.${imageType}`
  );
  let url = dataURL.replace(
    `/^data:image\/${imageType}/`,
    "data:application/octet-stream"
  );
  downloadLink.setAttribute("href", url);
  downloadLink.click();
};

export const loadPreview = (modelRef) => {
  var scene = new THREE.Scene();
  const threeDmodel = modelRef;
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  );

  camera.position.set(0, 0, 5);

  scene.add(threeDmodel);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.castShadow = true;
  dirLight.position.set(-2, 3, -2);
  scene.add(dirLight);
  const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
  scene.add(light);

  const rendererExport = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  rendererExport.autoClear = false;
  rendererExport.setSize(
    1440,
    1440
  );
  rendererExport.render(scene, camera);
  const dataURL = rendererExport.domElement.toDataURL("image/png");
//   imageRef.current.src = dataURL;
  return dataURL;
};