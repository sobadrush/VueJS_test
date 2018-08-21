// ===========【全域註冊Filter ... Start】=============
import Vue from "vue"
Vue.filter("globalFirst2Chars", str => str.substring(0, 2))
// ===========【全域註冊Filter ... End】=============

export default {
  name: 'test-008',
  components: {},
  props: [],
  data () {
    return {
      gameName : '哆啦A夢宇宙大冒險' , gamePrice : 9527 ,
    }
  },
  filters:{
    /* ====================== */
    /* === 局部註冊 filter === */
    /* ====================== */
    priceFormatJpyBefore: function(val) { // 加上 ¥ 字號
      return '¥' + val;
    },
    priceFormatJpyAfter: function(val) { // 加上 ¥ 字號
      return val + '@@';
    },
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}

