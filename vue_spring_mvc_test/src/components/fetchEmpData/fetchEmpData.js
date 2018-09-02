import axios from 'axios';

export default {
  name: 'fetch-emp-data',
  components: {},
  props: [],
  data () {
    return {
      cbData : ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clearData : function(){
      console.log('%c%s', 'color:lightblue' , `======= clearData! ======`)
      this.cbData = '';
    },
    doFetchData() {

      let toUrl = `http://localhost:8080/HibernateSqliteVueJSTest/EmpController/getAllEmps`;
      let config = {
        'Content-Type': 'application/json;charset=UTF-8'
      };
      let postData = {};

      axios.post(toUrl, postData , config)
        .then(processStatus)
        .then((resp) => {
           console.log('接收到的資料 resp' , resp);
           this.cbData = resp.data;
        })
        .catch((error) => {
          console.error('送出失敗' , error)
        })
        .finally(()=>{
          console.log('%c%s', 'color:orange' , `======= Complete! ======`);
        });
    }
  }
}

function processStatus(response){
  // console.log('processStatus , response' , response);
  // 狀態 "0" 是處理本地檔案 (例如Cordova/Phonegap等等)
  if (response.status == 200 || response.status === 0) {
    console.log(' >>>>>>>>>> 111 <<<<<<<<<< ');
    return Promise.resolve(response)
  } else {
    console.log(' >>>>>>>>>> 222 <<<<<<<<<< ');
    return Promise.reject(new Error(response.statusText))
  }
}
