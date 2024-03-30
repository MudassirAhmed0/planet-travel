const setFormBuilderItemsHeight = () => {
  if (window.innerWidth > 1065) {
    const formSidebar = document.querySelector(".form-sidebar");
    const formSidebarHeight = formSidebar.offsetHeight;

    const formBuilderMenu = document.querySelector(".form-builder-menu");
    const formBuilderMenuHeight = formBuilderMenu.offsetHeight;
    console.log(formBuilderMenuHeight);
    const formBuilderItems = document.querySelector("#form-builder-items");
    let newHeight = window.innerHeight - formBuilderMenuHeight - 150 + "px";
    formBuilderItems.style.maxHeight = newHeight;
    console.log(formBuilderItems);
    console.log(newHeight);
  }
};

setFormBuilderItemsHeight();

window.addEventListener("resize", setFormBuilderItemsHeight);
