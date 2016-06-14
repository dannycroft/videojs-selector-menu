# selectorMenu

Builds a selector menu for videojs based on supplied data.

![Alt text](screenshot.png?raw=true "Selector Menu")

## Why

- Uses VideoJS version 5.0 and above
- Less than 6kb dist
- Purpose agnostic. Show whatever data you want and assign your own change handlers
- Simple to pull down and hack on


## Demo

See [here](demo.html) for basic usage

## Tests

`npm run test`

Note: Could do with a lot more coverage, sorry :(

## Example

```javascript
  videojs("exampleVideo", {
    controls: true,
    preload: "auto",
    plugins: {
      selectorMenu: {} // <--- Make sure you tell videojs about the plugin
    }
  }, function() {

    // menudataready event is fired when menuData is ready. The plugin waits for
    // for this event and it's data before creating a new menu item
    this.on('menudataready', function(event, data) {
      console.info('New event: menudataready: ', data.menuData);
    });

    // Trigger menudataready event with pre-processed data
    this.trigger('menudataready', {
      menuData: {
        video: [{
          id: 0,
          selected: true,
          label: '1080p',
          src: 'https://archive.org/download/ElephantsDream/ed_1024.mp4',
          type: 'video/mp4'
        }, {
          id: 1,
          selected: false,
          label: '720p',
          src: 'https://archive.org/download/ElephantsDream/ed_hd.mp4',
          type: 'video/mp4'
        }]
      },
      onChange: function() {
      /************************

       You can access all passed in data attributes from
       above using `this` e.g:

       console.log(this);
       ->  {
            id: 1,
            selected: false,
            label: '720p',
            src: 'https://archive.org/download/ElephantsDream/ed_hd.mp4',
            type: 'video/mp4'
          }

      ************************/

        // Updating the player source on selection change
        var selection = this;
        var player = videojs.getPlayers().exampleVideo;
        var currentTime = player.currentTime();

        player.src({
          type: selection.type,
          src: selection.src
        });

        player.currentTime(currentTime);
        player.play();
      }
    });
  });

```
