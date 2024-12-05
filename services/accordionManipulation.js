export const toggleItem = () => {
  let labels = document.querySelectorAll(".accordion label");
  labels.forEach((label) => {
    label.addEventListener("click", () => label.classList.toggle("active"));
  });
};

export const markIncorrect = (index) => {
        let li = document.querySelector(`ul.accordion li:nth-child(${(index + 1)})`);
        li.classList.add("incorrect");
}