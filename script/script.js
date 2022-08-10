function initTab() {
  const tabMenu = document.querySelectorAll("js-tabmenu li");
  const tabContent = document.querySelectorAll("js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
initTab();

function initAccordion() {
  const acoordionList = document.querySelectorAll(".js-accordion dt");
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
initAccordion();

function initScrollSuave() {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* Forma alternativa
      const topo = section.offsetTop;
      window.scrollTo({
        top:topo,
        behavior:"smooth"
      })
      */
  }
  linkInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
