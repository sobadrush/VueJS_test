import Vue from 'vue';

Vue.component('childA'/*html中要改串燒式*/, {
  template : `<div class="my-border-blue my-bg-color-A margin-around">
                <h1 @click.prevent="sayHi(empName)">Child-A , #{empName}</h1>
              </div>`,
  data() {
    return {
      empName : '高進'
    }
  },
  delimiters: ['#{','}'],
  props: [],
  methods: {
    sayHi (_name) {
      alert('Hi, ' + _name);
    }
  }
});


Vue.component('childB'/*html中要改串燒式*/, {
  template : `<div class="my-border-blue my-bg-color-B margin-around">
                <h1 @click.prevent="sayHi(empName)">Child-B , #{empName}</h1>
              </div>`,
  data() {
    return {
      empName : '仇笑癡'
    }
  },
  delimiters: ['#{','}'],
  props: [],
  methods: {
    sayHi (_name) {
      alert('Hi, ' + _name);
    }
  }
});

export default {
  name: 'test-006',
  components: {},
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
