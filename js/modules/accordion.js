export default function initAccordion() {
  const acoordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = "ativo";

  if (acoordionList.length) {
    acoordionList[0].classList.add(activeClass);
    acoordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAcoordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    acoordionList.forEach((item) => {
      item.addEventListener("click", activeAcoordion);
    });
  }
}
