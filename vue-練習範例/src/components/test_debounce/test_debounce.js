import _ from 'lodash' //................ ※※※

export default {
  name: 'test-debounce',
  components: {},
  props: [],
  data() {
    return {
      queryCityId: '1',
      townsData: {},
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-=--【使用 lodash debounce】 =-=-=-=-=-=-
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    debounceFetchData: _.debounce(function(_val) {
      // console.log( 'this >>>' , this);
      // console.log('this.queryCityId >>> ',this.queryCityId);
      console.log('_val >>> ' , _val);
      this.doFetchDataAxios( _val );
    }, 500),
    clearData() {
      console.log(`======== clearData =======`);
      this.townsData = {};
    },
    doFetchDataAxios(_cityId) {

      this.queryCityId = _cityId;

      let cityId = _cityId;
      let toUrl = `https://works.ioa.tw/weather/api/cates/${cityId}.json`;

      this.$http.get(toUrl)
        .then(processStatus)
        .then((resp) => {
          /* 成功拿到資料，然後... */
          console.log('(1) resp >>>', resp);
          return resp.data;
        })
        .then((_data) => {
          console.log('(2) _data', _data); // 前一個 then 傳過來的
          // throw new Error('幹你妹的!');
          this.townsData = _data;
        })
        .catch((resp) => {
          /* 失敗，發生錯誤，然後...*/
          console.log('(3) catch resp >>> ', resp);
        })
        .finally(() => {
          /* 不論成功失敗，都做些事 */
          console.log('%c%s', 'color:lightblue', `>>> Completed! <<<`)
        });
    }
  }
}


function processStatus(response) {
  // 狀態 "0" 是處理本地檔案 (例如Cordova/Phonegap等等)
  if (response.status === 200 || response.status === 0) {
    console.log(' >>>>>>>>>> 111 <<<<<<<<<< ');
    return Promise.resolve(response)
  } else {
    console.log(' >>>>>>>>>> 222 <<<<<<<<<< ');
    return Promise.reject(new Error(response.statusText))
  }
}
