# ionic_hamilton
iHamilton app ported from JQuery Mobile over to Ionic Framework

### TODO

* [x] Numbers Tab
  * [x] construct phone numbers using ion-list
* [x] Dining
  * [x] Construct dining view using [collapsible lists](http://codepen.io/ionic/pen/uJkCz)
  * [x] Display "today hours" using js logic in controller.js
  * [ ] Implement logic to pull data from server, so updating not necessary (not needed for v1?)
* [x] Map
  * [x] Figuring out xy scrolling (key was setting scroll="false" in ion-content div)
* [x] Spec Reader
  * [x] Construct RSS feed using http.get request
  * [x] Use in-app browser to view articles (ditched this)
  * [x] Validate separate controller for spec entries outside of tab structure, to replace in-app browser
  * [x] Validate Readability API and get key
  * [x] Call [Readability API](https://www.readability.com/developers/api) upon loading article to get text]
* [x] Generate certificates and build in Xcode
* [x] Fix status bar color, which doesn't appear to be working in ionic view app (but works in iOS emulator)
* [ ] Even begin to do anything android-related
* [ ] Add loading screen and icons (pending okay from administration)
* [ ] Compress css sheet
* [x] Optimize javascript 
