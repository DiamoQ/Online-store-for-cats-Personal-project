const pageScroll = {
  block: () => {
    localStorage.setItem("isScrollLocked", true);
  },
  unblock: () => {
    localStorage.setItem("isScrollLocked", false);
  },
  toggleBlock: function() {
    if (this.isBlocked()) {
      this.unblock();
    } else{
      this.block();
    }
  },
  isBlocked: () => {
    return JSON.parse(localStorage.getItem("isScrollLocked"));
  },
};
pageScroll.unblock();