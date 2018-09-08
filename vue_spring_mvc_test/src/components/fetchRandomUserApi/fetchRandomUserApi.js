export default {
  name: 'fetch-random-user-api',
  components: {},
  props: [],
  delimiters: ['${', '}'],
  data() {
    return {
      queryNumber: +10,/*查詢筆數*/
      empList: []
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    clearData(){
      console.log(`%c%s`,'colorblue','=== clearData ===');
      this.empList = [];
    },
    doFetchData( _queryNumber ) {
      console.log(`%c%s`, 'color:red' , '============ doFetchData ===========');

      // let toUrl = `https://randomuser.me/api/?results=100`; // results: 測試資料API的查詢筆數
      // this.$axios.get(toUrl)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      let toUrl = `https://randomuser.me/api`; //results: 測試資料API的查詢筆數
      // 也可以透過 params 屬性傳遞參數
      this.$axios.get(toUrl, {
          params: {
            results: _queryNumber
          }
        })
        .then((resp) => {
          console.log(resp);
          this.empList = resp.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
