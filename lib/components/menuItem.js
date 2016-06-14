'use strict';

const VjsMenuItem = videojs.getComponent('MenuItem');

class MenuItem extends VjsMenuItem {
  handleClick() {
    super.handleClick();
    this.options_.onChange();
  }
}

export default MenuItem;
