'use strict';

const VjsMenu = videojs.getComponent('Menu');

class Menu extends VjsMenu {
  addItem(component) {
    super.addItem(component);
    component.on('click', () => {
      const children = this.children();
      for (const child of children) {
        if (component !== child) {
          child.selected(false);
        }
      }
    });
  }
}

export default Menu;
