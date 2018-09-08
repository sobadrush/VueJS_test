export default {
  name: 'fetch-random-user-api',
  components: {},
  props: [],
  delimiters: ['${', '}'],
  data() {
    return {
      queryNumber: +10,/*查詢筆數*/
      countOfPage: +5,/*每頁顯示筆數*/
      currPage: 1,
      empList: []
    }
  },
  computed: {
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function () {
      return Math.ceil(this.empList.length / this.countOfPage);
    }
  },
  mounted() {

  },
  filters: {
    upperCaseCharByNum(_data, _num) {
      // 【根據_num，決定哪個char要改大寫】
      console.log(`======= filter : upperCaseCharByNum() , ${_data} , ${_num} =======`);
      let targetCharUpper = _data.charAt(_num).toUpperCase();
      // console.log(_data.substr(0,_num) , targetCharUpper , _data.substr(_num + 1, _data.length));
      return _data.substr(0,_num) + targetCharUpper + _data.substr(_num + 1, _data.length);
    }
  },
  methods: {
    clearData() {
      console.log(`%c%s`, 'colorblue', '=== clearData ===');
      // this.empList = [];
      this.empList.splice(0, this.empList.length); // 清空陣列
    },
    doFetchData(_queryNumber) {
      console.log(`%c%s`, 'color:red', '============ doFetchData ===========');

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
    },
    setPage(idx) {
      if( idx <= 0 || idx > this.totalPage ){
        return;
      }
      this.currPage = idx;
    },
  }
}
