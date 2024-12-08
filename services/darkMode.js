const switchMode = () =>
  document
    .querySelector("body")
    .setAttribute("theme", "default" ? "dark" : "default");

export default switchMode;
