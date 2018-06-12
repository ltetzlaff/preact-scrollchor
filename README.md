# preact-scrollchor

> The improved preact fork of [react-scrollchor](https://www.npmjs.com/package/react-scrollchor) for scrolling to markup elements and/by setting the #hash.
> Scrollchor is a mix of `Scroll` and `Anchor`, a joke name for a useful component.

`hash` is the `id` of a HTML tag on current page.

> If you"re a react-person definitely check out the original version, I mainly didn"t want to bother adding `preact-compat` and disliked quite a few aspects of the implementation.

## Installation

```bash
npm install preact-scrollchor --save
```

## Usage

```jsx
import Scrollchor from "preact-scrollchor"

export default (props) => (
  <div>
    <ul>
      <li><Scrollchor to="#sample-code">Sample</Scrollchor></li>
      <li><Scrollchor to="footer">SignUp</Scrollchor></li>
    </ul>
    <div id="sample-code">
    </div>
    <footer id="footer">
    </footer>
  </div>
)
```

## Custom animation

Animation behavior can be customized:

```jsx
<Scrollchor to="#aboutus" animate={{offset: 20, duration: 600}}>Home</Scrollchor>
```

### Default animation settings

```js
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

### More `Easing` functions

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)

## `before` and `after` Animate callbacks

Use this callbacks to trigger behaviours like, for example, update state, load async stuffs, etc.
```jsx
<Scrollchor to="#aboutus" afterAnimate={() => updateState(this)}>Home</Scrollchor>
```

## Simulate click API

Scrollchor includes a dedicated API to invoke the scroll behavior programmatically using `simulateClick()`

## License

[ISC][isc-license]

[isc-license]:./LICENSE
