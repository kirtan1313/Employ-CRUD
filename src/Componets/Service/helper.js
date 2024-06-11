export const getData = (mykey) => {
    const myData = JSON.parse(localStorage.getItem(mykey));

    if (!myData) {
        return [];
    }
    return myData;

}

export const dropCat = () => {
    let dropRec = getData('StudentData');
    let recDrop = dropRec.map((rec) => {
        return rec.fname
    });
    let uniqKey = [...new Set(recDrop)];

    return uniqKey
}