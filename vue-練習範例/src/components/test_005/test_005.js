import Vue from 'vue';

Vue.component('button-counter', {
  template: `<button v-on:click="increment">【 {{ door }} 】 來客 + 1 ( {{ counter }} )</button>`,
  props: ['door'],
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    /* 來客+1 */
    increment: function () {
      this.counter += 1;

      /* 通知主任，多了一人來客 */
      // (1) 子向父元件，發送自訂事件，increment (2) 父元件 v-on: 綁定此事件 (3) $emit第二個參數，可傳遞資料給父元件
      this.$emit('increment', {'door': this.door , 'fuck' : 'you'} /*可傳遞給父元件*/);
    }
  },
});

export default {
  name: 'test-005',
  components: {},
  props: [],
  data() {
    return {
      total: 0
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    /* 主任得知來客+1，總來客量+1 */
    incrementTotal: function (_dataFromChild) {
      console.log('_dataFromChild >>> ' , _dataFromChild);
      this.total += 1;
    }
  }
}
