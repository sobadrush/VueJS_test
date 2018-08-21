
export default {
  name: 'fetch-data-filter',
  components: {},
  props: [],
  data () {
    return {
      queryCityId : '1',
      townsData: {}
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clearData() {
      console.log(`======== clearData =======`);
      this.townsData = {};
    },
    doFetchDataAxios( _cityId ) {

      this.queryCityId = _cityId;

      let cityId = _cityId;
      let toUrl = `https://works.ioa.tw/weather/api/cates/${cityId}.json`;

      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // ※ Type (1) main.js中設定 $http = axios + 箭頭函數
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      this.$http.get(toUrl)
        .then((resp) => {
          /* 成功拿到資料，然後... */
          console.log('(1) resp >>>', resp);
          // console.log('resp.data >>> ', resp.data);

          if (resp.status !== 200) {
            throw new Error(res.statusText)
          }

          return resp.data;
        })
        .then((_data) => {
          console.log('(2) _data' , _data); // 前一個 then 傳過來的
          // throw new Error('幹你妹的!');
          this.townsData = _data;
        })
        .catch((resp) => {
          /* 失敗，發生錯誤，然後...*/
          console.log('(3) catch resp >>> ', resp);
        })
        .finally(() => {
          /* 不論成功失敗，都做些事 */
          alert(`Completed!`)
        });


    }
  }
}
