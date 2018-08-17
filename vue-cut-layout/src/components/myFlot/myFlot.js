export default {
  name: 'my-flot',
  components: {},
  props: [],
  data() {
    return {
      emps : [
        { 'empA' : {'name' : 'Roger' , 'level' : '32' } } ,
        { 'empB' : {'name' : 'Linda' , 'level' : '23' } } ,
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    alertTest (_msg) {
      alert(_msg.target);
    },
    toCardPage: function(_msg) {
      this.$router.push({
        path: '/cards'
      });
    },
    toCardPage_with_queryParam(_msg) {
      this.$router.push({
        path: '/cards' , query : { 'msg001' : '幹幹幹' }
      });
    },
    toCardPage_with_pathParam(_msg) {
      this.$router.push({
        // path: '/cards' , params : { 'passingMsg' : '幹幹幹111' } // 如果提供了 path，params 会被忽略 (https://router.vuejs.org/zh/guide/essentials/navigation.html)
        name: 'cardsPage' , params : { passingMsg : this.emps[0] , passingMsg2 : this.emps[1] }
      });
    },
    toCardPage_with_pathParam_replace(_msg) {
      this.$router.replace({
        name: 'cardsPage' , params : { passingMsg : this.emps[0] , passingMsg2 : this.emps[1] }
      });
    },
  }
}
