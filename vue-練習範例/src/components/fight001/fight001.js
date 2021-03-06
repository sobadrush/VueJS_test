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
      countSecond: +3, // 跳轉秒數
      isQueryMatch : false , // 查詢正確/錯誤
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
          this.isQueryMatch = true; // 控制 v-show

          alert( `>>> 查詢結果與目標相等，${this.countSecond} 秒後導回首頁 <<<` );

          let countTimer = setInterval(() => {
             console.log(`%c%s`, 'color:orange' , `剩 ${this.countSecond--} 秒跳轉`);
          }, 1000);

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

            // === 編程式路由 ... (5) replace ===
            // 【跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录，所以
            // 無法透過 history.go(-1) 回到這頁】
            // this.$router.replace({
            //   name: 'HomePage' , params : { 'msg001' : '操你媽' }
            // });

            //------------------------------
            window.clearInterval(countTimer); // 清除倒數計時timer
            //------------------------------
          }, 3000 + 1000/*tune秒數*/);
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
