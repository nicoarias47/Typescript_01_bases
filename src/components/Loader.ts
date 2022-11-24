const Loader = (active: boolean, container: HTMLElement | any) => {
  container.classList.add("lds-hourglass");
  // return active
  //   ? (container.class = `<div class="lds-hourglass"></div>`)
  //   : container;

  return active
    ? container.classList.add("lds-hourglass")
    : container.classList.remove("lds-hourglass");
};

export default Loader;
