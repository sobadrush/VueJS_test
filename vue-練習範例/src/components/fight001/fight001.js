import axios from 'axios'; // 直接使用 axios + 箭頭函數 ... 需在此 import

export default {
  name: 'fight-001',
  components: {},
  props: [],
  data() {
    return {
      targetCity : '基隆' ,
      queryCityId: undefined,
      townsData: '',
    }
  },
  computed: {

  },
  mounted() {
  },
  watch: {
    townsData: {
      handler: function (newVal) {
        console.log('newVal >>> ' , newVal);
        console.log('newVal.name >>> ' , newVal.name);

        if (newVal.name == this.targetCity) {
          alert(' >>> 查詢結果與目標相等，3秒後導回首頁 <<< ');
          setTimeout(() => {
            // === 編程式路由 ... (1) ===
            // this.$router.push('/HomePage');

            // === 編程式路由 ... (2) ===
            // this.$router.push( { path : '/HomePage' } );

            // === 編程式路由 ... (3) ===
            // this.$router.push({
            //   path: '/HomePage' , query : { 'msg001' : '幹幹幹' }
            // });

            // === 編程式路由 ... (4) ===
            this.$router.push({
              // path: '/cards' , params : { 'passingMsg' : '幹幹幹111' } // 如果提供了 path，params 会被忽略 (https://router.vuejs.org/zh/guide/essentials/navigation.html)
              name: 'HomePage' , params : { 'msg001' : '幹你娘' }
            });

            // === 編程式路由 ... (5) ===
            // this.$router.replace({
            //   name: 'HomePage' , params : { 'msg001' : '操你媽' }
            // });

          }, 3000);
        }

      },
      deep: true
    }
  },
  methods: {
    fetchTownsData(_cityId) {
      // console.log(`_cityId = ${_cityId}`);

      let _toUrl = `https://works.ioa.tw/weather/api/cates/${_cityId}.json`;
      axios.get(_toUrl)
        .then((resp) => {
          /* 成功拿到資料，然後... */
          console.log('>>> resp >>> ', resp);

          if (resp.status !== 200) {
            throw new Error(res.statusText)
          }

          this.townsData = resp.data;
        })
        .catch((err) => {
          /* 失敗，發生錯誤，然後...*/
          console.log('>>> err >>> ', err);
        }).finally(() => {
          /* 不論成功失敗，都做些事 */
          console.log('%c%s', 'color:red', ' === Completed === ');
        });
    }
  }
}
