export const storeDataInLocalStorage = (id) => {
    let dataArr = []
    const existingData = JSON.parse(localStorage.getItem('icons'))
    if (!existingData?.includes(id)) {
        if (existingData && existingData?.length > 0) {
            dataArr.push(...existingData)
        }
        dataArr.push(id)
        localStorage.setItem("icons", JSON.stringify(dataArr));
    } else {
        dataArr = existingData.filter((item) => item !== id);
        localStorage.setItem("icons", JSON.stringify(dataArr));
    }
}

export const storeColorsInLocalStorage = (data) => {
    localStorage.setItem("colors", JSON.stringify(data));
}

export const getAllUsedColors = () => {
    const data = JSON.parse(localStorage.getItem('colors'))
    return data
}