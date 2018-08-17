import myCard from '@/components/myCard/myCard.vue'
export default {
  name: 'cards',
  components: {
    'app-card' : myCard,
  },
  props: [],
  data() {
    return {
      parentData : [
        { 'season' : 'Spring' , 'bkColor' : 'red'  },
        { 'season' : 'Summer' , 'bkColor' : 'green'},
        { 'season' : 'Fall'   , 'bkColor' : 'blue' },
        { 'season' : 'Winter' , 'bkColor' : 'brown'},
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    toPreviousPage : function(){
      console.log("============= 回前頁 ==============");
      this.$router.go(-1); // 類似 window.history , $router.replace導過來的，不會加到History中，無法使用 $router.go(-1) 回前頁
    }
  }
}
