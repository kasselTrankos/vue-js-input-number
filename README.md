# Input Number

This is a very very simple component for input type number. It allows:

1 - only numbers from 0-9

2 - add maxlength property

This two simple add-ons to the input type number of HTML 5, gives to me a reason to create it.

Simple example. 

```html
<div id="app">
{{test}}
  <input-number maxlength="3" v-model="test" min="1" max="5"></input-number>
</div>

```javascript
new Vue({
	el: '#app',
  data: {
  	pepe: 12
  },
  components: {
    'input-number': inputNumber
  }
});


