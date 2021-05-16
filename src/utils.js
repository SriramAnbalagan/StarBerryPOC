// export const showTiles = (data, selectedItem, history) => {
//     history.push('/item')
//     const selectedTile = data.filter((item) => item._id === selectedItem);

// }

export const getBuidlingName = (bedroom, buildingType) => {
    if(buildingType === 'Apartment' || buildingType === 'Penthouse' || buildingType === 'House') {
        return `${bedroom} bedroom ${buildingType} for sale`
    }
    else if(buildingType === 'Storage' || buildingType === 'Office' || buildingType === 'Premises') {
        return `${buildingType} space for sale`
    }
}