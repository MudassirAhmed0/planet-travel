const setFormBuilderItemsHeight = () => {
  if (window.innerWidth > 1065) {
    const formSidebar = document.querySelector(".form-sidebar");
    const formSidebarHeight = formSidebar.offsetHeight;

    const formBuilderMenu = document.querySelector(".form-builder-menu");
    const formBuilderMenuHeight = formBuilderMenu.offsetHeight;
    const margins = window.scrollY > 100 ? 60 : 150;
    console.log(formBuilderMenuHeight);
    const formBuilderItems = document.querySelector("#form-builder-items");
    let newHeight = window.innerHeight - formBuilderMenuHeight - margins + "px";
    formBuilderItems.style.maxHeight = newHeight;
    console.log(formBuilderItems);
    console.log(newHeight);
  }
};

setFormBuilderItemsHeight();
window.addEventListener("scroll", setFormBuilderItemsHeight);
window.addEventListener("resize", setFormBuilderItemsHeight);
