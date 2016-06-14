'use strict';

import Button from './components/button';

function SelectorMenu() {
  const player = this;
  const MEDIA_TYPES = ['video', 'audio'];
  const MEDIA_BTN_CLASS = {
    video: 'vjs-icon-cog',
    audio: 'vjs-icon-cog',
  };

  function onMenuDataReady(event, {
    menuData,
    onChange,
  }) {
    const fullscreenToggle = player.controlBar.getChild('fullscreenToggle');

    player.controlBar.removeChild(fullscreenToggle);

    MEDIA_TYPES.forEach((mediaType) => {
      const buttonName = `${mediaType}QSButton`;
      let button = player.controlBar.getChild(buttonName);

      if (button) {
        button.dispose();
        player.controlBar.removeChild(button);
      }

      if (menuData[mediaType] && menuData[mediaType].length > 1) {
        button = new Button(player, {
          buttonName,
          onChange,
          menuList: menuData[mediaType],
          trackType: mediaType,
        });
        button.addClass(MEDIA_BTN_CLASS[mediaType]);
        player.controlBar.addChild(button);
      }
    });

    if (fullscreenToggle) {
      player.controlBar.addChild(fullscreenToggle);
    }
  }

  player.on('menudataready', onMenuDataReady);
}

videojs.plugin('selectorMenu', SelectorMenu);
