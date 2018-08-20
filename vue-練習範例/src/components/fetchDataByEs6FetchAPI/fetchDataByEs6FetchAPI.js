// import Vue from 'vue'

export default {
  name: 'fetch-data-by-es-6-fetch-api',
  components: {},
  props: [],
  data () {
    return {
      queryCityId : '1' ,
      townsData : {} ,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clearData : function(){
      this.townsData = {};
    },
    doFetchDataEs6FetchAPiGet : function( _cityId ){

      this.queryCityId = _cityId;

      let cityId = _cityId;
      let toUrl = `https://works.ioa.tw/weather/api/cates/${cityId}.json`;

      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // ※ Type (1) FetchAPI + 箭頭函數
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      window.fetch(toUrl , { method: 'GET'})
        .then((res /*ReadableStream物件*/ ) => {
          console.log('res >>> ' , res);

          if (res.ok == false) {
            throw new Error(res.statusText)
          }

          return res.json(); // Promise物件
        })
        .then((cbData) => {
          console.log('cbData >>> ' , cbData);
          // this.$set(this.townsData , cbData);
          // Vue.set(this.townsData , cbData);
          this.townsData = cbData;
        }).catch(function(err) {
          console.log('>>>>>>>>> catch <<<<<<<<<');
          return err.response.json();
        }).then((err) => {
          // Promise特性：不管catch有沒有東西，都會持續往後then, 所以此處的 then 其實不必要
          console.log('FAIL >>> ' , err);
        });

      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // ※ Type (2) FetchAPI + 一般 function call-back (會有 this 的問題)
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // let self = this; // (1)You are out of this context. You should store this context on a variable (2) https://stackoverflow.com/questions/45743395/uncaught-in-promise-typeerror-cannot-set-property-of-undefined-with-axios
      // console.log('111 this >>> ' , this);
      // window.fetch(toUrl , { method: 'GET'})
      //   .then( function(res) {
      //     console.log('res >>> ' , res);
      //     return res.json(); // Promise物件
      //   })
      //   .then( function(cbData) {
      //     console.log('cbData >>> ' , cbData);
      //     // console.log('222 this >>> ' , this); // 這邊的 this 是 null ， 所以用 self
      //     self.townsData = cbData;
      //   }).catch(function(err) {
      //     return err.response.json();
      //   });

      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // ※ Type (3) FetchAPI + 箭頭函數 , 建立Request物件
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // Fetch API【https://ithelp.ithome.com.tw/articles/10194107】
      // const req = new Request(toUrl,{ method: 'GET', cache: 'reload' });
      // window.fetch(req)
      //     .then(processStatus)
      //     .then((res /*ReadableStream物件*/) => {
      //       console.log('ReadableStream物件 res >>> ' , res);
      //       return res.json(); // Promise物件
      //     })
      //     .then((cbData) => {
      //       console.log('cbData >>> ' , cbData);
      //       // this.$set(this.townsData , cbData);
      //       // Vue.set(this.townsData , cbData);
      //       this.townsData = cbData;
      //     }).catch(function(err) {
      //       alert('Fail : ' + err.response.json());
      //       return err.response.json();
      //     });


    },
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
