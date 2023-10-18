import * as THREE from 'three';

export const ModelWithMeshes = (gltf, router, originalColor, setOriginalColor, setAllMesh) => {
    const meshes = Object.values(gltf.nodes).filter(node => node.isMesh);
    const meshColors = Object.values(gltf.nodes)
        .filter(node => node.isMesh)
        .map(mesh => {
            const materialColor = mesh.material.color;
            const color = new THREE.Color(materialColor.r, materialColor.g, materialColor.b);
            const hexColor = color.getHexString();
            return hexColor;
        });

    if (originalColor.length === 0) {
        setOriginalColor(meshColors)
    }
    
    router.push({
        pathname: '/dashboard',
        query: {
            c: JSON.stringify(meshColors),
        }
    })
    setAllMesh(meshes)
}

export const changeUniqueMeshColor = (router, allMeshes) => {
    const index = +(router?.query?.i)
    const changeColor = (router?.query?.cc)
    if (changeColor) {
        const meshToBeChanged = allMeshes[index];
        if (meshToBeChanged) {
            meshToBeChanged.material.color.set(changeColor);
            const updatedColorMeshArray = JSON.parse(router?.query?.c)
            updatedColorMeshArray[index] = changeColor;
            router.push({
                pathname: '/dashboard',
                query: {
                    c: JSON.stringify(updatedColorMeshArray),
                    sc: router?.query?.sc,
                    i: router?.query?.i,
                    cc: router?.query?.cc,
                    u: true
                }
            })
        }
    }
}

export const changeMeshToDefaultColor = (gltf, router, originalColor, setOriginalColor) => {
    Object.values(gltf.nodes)
        .filter(node => node.isMesh)
        .forEach((mesh, index) => {
            mesh.material.color.set(`#${originalColor[index]}`)
        });

    router.push({
        pathname: '/dashboard',
        query: {
            c: JSON.stringify(originalColor)
        }
    })
}