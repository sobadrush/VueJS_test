import Vue from 'vue';

Vue.component('childA'/*html中要改串燒式*/, {
  template : `<div class="my-border-blue my-bg-color-A margin-around">
                <h1 @click.prevent="sayHi(empName)">Child-A , #{empName}</h1>
                <button type="button" class="btn btn-outline-danger margin-around" @click="doSomethingSpecial()">發送事件給eventBus</button>
                <h5 class="margin-around">#{ dataFromOther }</h5>
              </div>`,
  data() {
    return {
      empName : '高進',
      dataFromOther : '',
    }
  },
  delimiters: ['#{','}'],
  props: [],
  created() { // [註冊監聽事件]
    this.$bus.$on('fuckEvent', (eventData) => {
      // console.log('this >>> ' , this);
      console.log('childA , 收到的 eventData >>> ' , eventData);
      this.dataFromOther = eventData;
    });
  },
  beforeDestroy() { // [銷毀監聽事件]
    this.$bus.$off('fuckEvent');
  },
  methods: {
    sayHi (_name) {
      alert('Hi, ' + _name);
    },
    doSomethingSpecial() {
      // 【發射事件到eventBus上】
      // 【param1 : 自訂事件名稱】
      // 【param2 : 傳遞的資料 event-data】
      this.$bus.$emit('specialEvent', {
          msg: '高義你他媽雜碎',
          title: 30678
      });
    }
  }
});


Vue.component('childB'/*html中要改串燒式*/, {
  template : `<div class="my-border-blue my-bg-color-B margin-around">
                <h1 @click.prevent="sayHi(empName)">Child-B , #{empName}</h1>
                <button type="button" class="btn btn-outline-primary margin-around" @click="sayFuck()">發送事件給eventBus</button>
                <h5 class="margin-around">#{ dataFromOther }</h5>
              </div>`,
  data() {
    return {
      empName : '仇笑癡',
      dataFromOther : '',
    }
  },
  delimiters: ['#{','}'],
  props: [],
  created() { // [註冊監聽事件]
    this.$bus.$on('specialEvent', (eventData) => {
      // console.log('this >>> ' , this);
      console.log('childB , 收到的 eventData >>> ' , eventData);
      this.dataFromOther = eventData;
    });
  },
  beforeDestroy() { // [銷毀監聽事件]
    // 最好在组件銷毀前，清除 specialEvent 所有監聽
    // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
    this.$bus.$off('specialEvent');
  },
  methods: {
    sayHi (_name) {
      alert('Hi, ' + _name);
    },
    sayFuck() {
      this.$bus.$emit('fuckEvent', {
        msg: `你他媽的B`, empId : 7788
      });
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
