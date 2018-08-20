import axios from 'axios'; // 直接使用 axios + 箭頭函數 ... 需在此 import

export default {
  name: 'fetch-data-by-axios',
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
    clearData() {
      console.log(`======== clearData =======`);
      this.townsData = {};
    },
    doFetchDataAxios(_cityId) {

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

      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // ※ Type (2) 直接使用 axios + 箭頭函數 ... 需在本js中 【import axios from 'axios'】
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // axios.get(toUrl)
      //   .then((resp) => {
      //     /* 成功拿到資料，然後... */
      //     console.log('resp', resp);
      //     this.townsData = resp.data;
      //     // throw new Error('幹你妹的!');
      //   })
      //   .catch((err) => {
      //     /* 失敗，發生錯誤，然後...*/
      //     console.log('>>> err >>> ', err);
      //   }).finally(() => {
      //     /* 不論成功失敗，都做些事 */
      //     alert('Completed!!');
      //   });


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
