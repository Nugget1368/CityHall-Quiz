export const compareArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

export const displayArray = (arr) =>{
    return JSON.stringify(arr).replaceAll(`","`, ", ").replaceAll(`["`, "").replaceAll(`"]`, "").replaceAll(/(?<=\.)\,/g, "<br><br>");
}
