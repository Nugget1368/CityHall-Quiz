const switchMode = (mode) => {
  const body = document.querySelector("body");
  console.log(body.getAttribute("theme"));
  if(body.getAttribute("theme") != mode){
    body.setAttribute("theme", mode);
  }
  else{
    body.setAttribute("theme", "default");
  }
};

export default switchMode;
