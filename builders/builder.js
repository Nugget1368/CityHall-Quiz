export const removeElements = (arr) => {
    if(arr != null){
        if (arr.constructor === Array) {
          arr.forEach((element) => {
            if (element != null) {
              element.remove();
            }
          });
        }
        else{
           arr.remove();
        }
    }
};


export const addImage = (targetElement, image, alt) => {
    const target = document.querySelector(targetElement);
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = `../images/${image}`;
    img.alt = alt;
    figure.append(img);
    target.append(figure);
  };
