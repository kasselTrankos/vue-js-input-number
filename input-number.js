// look at demo here https://jsfiddle.net/cckLd9te/438//
var inputNumber = {
  template: '<input :value="value" @input="oninput" type="number" type="number" :max="max" :min="min" :maxlength="maxlength" @keydown="keydown" />',
  props: {
    value: {
      type: Number,
      default: null
    },
    maxlength: {
    	type: [Number, String],
      default: null
    },
    min: {
    	type: [Number, String],
      default: null
    },
    max: {
    	type: [Number, String],
      default: null
    }
  } ,
  methods: {
    oninput: function (event) {
    	if (event.target.hasAttribute('maxlength')) {
        event.target.value = event.target.value.substring(0, event.target.getAttribute('maxlength'));
      }
    },
    keydown: function (event) {
    	if ([187, 188, 189, 190, 69].indexOf(event.keyCode) >= 0) {
      	event.preventDefault();
      }
    }
  }
};
new Vue({
  components: {
    'input-number': inputNumber
  }
})