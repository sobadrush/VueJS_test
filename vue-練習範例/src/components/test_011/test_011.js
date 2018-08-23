export default {
  name: 'test-011',
  components: {},
  props: [],
  data() {
    return {
      myMessage: "幹你娘"
    }
  },
  computed: {

  },
  beforeCreate: function () {
    console.group('=============== beforeCreate 元件建立前 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:orange", "data   : " + this.$data); //undefined
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage);
  },
  created: function () {
    console.group('=== created 元件建立完成狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:orange", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage); //已被初始化
    // console.log('this.$data >> ' , this.$data);
  },
  beforeMount: function () {
    console.group('=== beforeMount 掛載前狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + (this.$el)); //已被初始化
    console.log('this.$el >>> ' , this.$el);
    console.log("%c%s", "color:orange", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage); //已被初始化
  },
  mounted() {
    console.group('=== mounted 掛載完成狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el); //已被初始化
    console.log('this.$el >>> ' , this.$el);
    console.log("%c%s", "color:orange", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage); //已被初始化
  },
  beforeUpdate() {
    console.group('=== beforeUpdate 更新前狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el);
    console.log('this.$el >>> ' , this.$el);
    console.log("%c%s", "color:orange", "data   : " + this.$data);
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage);
  },
  updated() {
    console.group('=== updated 更新完成狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el);
    console.log('this.$el >>> ' , this.$el);
    console.log("%c%s", "color:orange", "data   : " + this.$data);
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage);
  },
  beforeDestroy() {
    console.group('=== beforeDestroy 銷毀前狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el);
    console.log('this.$el >>> ' , this.$el);
    console.log("%c%s", "color:orange", "data   : " + this.$data);
    console.log("%c%s", "color:orange", "myMessage: " + this.myMessage);
  },
  destroyed() {
    console.group('=== destroyed 銷毀完成狀態 >>>>>>>>>>>>>>>');
    console.log("%c%s", "color:orange", "el     : " + this.$el);
    console.log('this.$el >>> ' , this.$el);
    console.log("%c%s", "color:orange", "data   : " + this.$data);
    console.log("%c%s", "color:orange", "message: " + this.message)
  },
  methods: {

  }
}
