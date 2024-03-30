const setFormBuilderItemsHeight = () => {
  if (window.innerWidth > 1065) {
    const formSidebar = document.querySelector(".form-sidebar");
    const formSidebarHeight = formSidebar.offsetHeight;

    const viewportHeight = window.innerHeight;
    const totalHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const maxScrollableHeight = totalHeight - viewportHeight - 50;

    const formBuilderMenu = document.querySelector(".form-builder-menu");
    const formBuilderMenuHeight = formBuilderMenu.offsetHeight;
    const margins =
      window.scrollY < 100
        ? 130
        : window.scrollY > maxScrollableHeight
        ? 60
        : 30;
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
