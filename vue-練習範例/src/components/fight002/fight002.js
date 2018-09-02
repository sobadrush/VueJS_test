import axios from "axios"; // 直接使用 axios + 箭頭函數 ... 需在此 import

export default {
  name: "fight-002",
  components: {},
  props: [],
  data() {
    return {
      cbData: ""
    };
  },
  computed: {},
  mounted() {},
  methods: {
    doFetchDataAxios(_url) {
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // ※ Type (1) main.js中設定 $http = axios + 箭頭函數
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      let toUrl = `http://localhost:8080/HibernateOptimisticLocTest/${_url}`;
      console.log("%c%s", "color:orange", `toUrl = ${toUrl}`);

      let config = {
        headers: {
          "content-type": "application/json; charset=utf-8"
        }
      };

      let postData = {
        empName: "Roger",
        empLevel: "Manager",
        empAge: "26"
      };

      axios.post(toUrl, postData, config)
        .then(resp => {
          /* 成功拿到資料，然後... */
          console.log(">>> resp >>> ", resp);

          if (resp.status !== 200) {
            throw new Error(res.statusText);
          }

          this.cbData = resp.data; // 將callBack回來的資料存入 this.cbData 中
        })
        .catch(err => {
          /* 失敗，發生錯誤，然後...*/
          console.log(">>> err >>> ", err);
        })
        .finally(() => {
          /* 不論成功失敗，都做些事 */
          console.log("%c%s", "color:red", " === Completed === ");
        });
    }
  }
};
