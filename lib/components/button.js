'use strict';

import Menu from './menu';
import MenuItem from './menuItem';

const MenuButton = videojs.getComponent('MenuButton');

class Button extends MenuButton {

  createMenu() {
    const menu = new Menu(this.player, this.options_);
    const player = this.player;
    const { onChange, trackType } = this.options_;
    let menuItem = null;
    let menuItemOptions = null;

    this.options_.menuList.forEach((listItem) => {
      menuItemOptions = Object.assign(listItem, {
        onChange,
        trackType,
        selectable: true,
      });
      menuItem = new MenuItem(player, menuItemOptions);
      menu.addItem(menuItem);
    });

    return menu;
  }

  buildCSSClass() {
    return `vjs-selector-menu-control ${super.buildCSSClass()}`;
  }
}

Button.prototype.controlText_ = 'SelectorMenu';

export default Button;
