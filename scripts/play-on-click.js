// /* global AFRAME */
// AFRAME.registerComponent('play-on-click', {
//   init: function () {
//     this.onClick = this.onClick.bind(this);
//   },
//   play: function () {
//     window.addEventListener('click', this.onClick);
//   },
//   pause: function () {
//     window.removeEventListener('click', this.onClick);
//   },
//   onClick: function (evt) {
//     var videoEl = this.el.getAttribute('material').src;
//     if (!videoEl) { return; }
//     this.el.object3D.visible = true;
//     videoEl.play();
//   }
// });




AFRAME.registerComponent('keypress', {
  init: function () {
    this.onClick = this.onClick.bind(this);
    window.addEventListener('keypress', this.keypress);
  },

  play: function () {
    window.addEventListener('click', this.onClick);
  },

  keypress: function(event) {
    console.log("onkeydown Button" + event.code);

    //var videoEl = this.el.getAttribute('src');


    var videoEl = document.getElementById('videoBunny');

    if (!videoEl) { return; }
    //this.el.object3D.visible = true;
    videoEl.play();

  },
  onClick: function (evt) {
    var videoEl = document.getElementById('videoBunny');
    if (!videoEl) { return; }
    videoEl.play();
  }
});




// document.addEventListener('keypress', function(event) {
//   console.log("onkeydown Button" + event.code);
// });

console.log('started');