const switchMode = (mode) => {
  const body = document.querySelector("body");
  console.log(body.getAttribute("theme"));
  if(body.getAttribute("theme") != mode){
    body.setAttribute("theme", mode);
    localStorage.setItem("theme", mode);
}
else{
    body.setAttribute("theme", "default");
    localStorage.setItem("theme", "default");
  }
};

export default switchMode;
