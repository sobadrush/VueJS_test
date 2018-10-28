export default {
  name: 'fight-003',
  components: {},
  props: [],
  data() {
    return {
      empData: {},
      empAddData: {
        empName: '',
        empLevel: '',
        empSalary: '',
      },
      empModData: {
        id: '',
        empName: '',
        empLevel: '',
        empSalary: '',
      },
      delEmpId: ''
    }
  },
  computed: {

  },
  mounted() {
    this.doFetchEmpData();
  },
  methods: {
    doFetchEmpData() {
      console.log(`=============== doFetchEmpData() ================`);
      const jsonServerUrl = `http://localhost:3000/emps`;
      window.fetch(jsonServerUrl, {
        method: 'GET'
      }).then((res) => { // 處理 response
        return res.json();
      }).then((cbData) => {
        this.empData = cbData;
        console.table(this.empData);
      }).catch((err) => {
        console.error(`error : `, err);
      }).finally(() => {
        console.log('~~finally~~');
      });
    },
    doClearEmpData: function () {
      console.log(`%c ================= doClearEmpData() ==================`, 'color:brown');
      this.empData = {}; // 清空資料
    },
    doAddEmp() {
      console.log(`=============== doAddEmp() ================`);
      // console.log('empAddData = ' , this.empAddData);
      // console.log('toJson empAddData = ' , this.toJson(this.empAddData));

      const jsonServerUrl = `http://localhost:3000/emps`;
      window.fetch(jsonServerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: this.toJson(this.empAddData)
      }).then((res) => {
        return res.json();
      }).then((cbData) => {
        console.log('cbData ', cbData)
      }).catch((err) => {
        console.error(`error : `, err);
      }).finally(() => {
        console.log('~~finally~~');
        this.doFetchEmpData(); // 新增完成後，直接查一次
      });
    },
    doModEmpById(_empModData) {
      console.log(`%c ================= doModEmpById() ================== \n %s`, 'color:pink', this.toJson(_empModData));

      let empId = _empModData.id;
      const jsonServerUrl = `http://localhost:3000/emps/${empId}`;

      patchData(jsonServerUrl, _empModData).then((res) => {
        console.log('patchData res >>> ', res);
      }).catch((err) => {
        console.error(`error : `, err);
      }).finally(() => {
        console.log('~~finally~~');
        this.doFetchEmpData(); // 修改完成後，直接查一次
      });;

    },
    doDelete($event) {
      console.log(`=============== doDelete() ================`);
      // console.log('$event' , $event);

      let idTag = document.querySelector('input[placeholder="請輸入id"]');
      let empId = idTag.value;

      const jsonServerUrl = `http://localhost:3000/emps/${empId}`;
      window.fetch(jsonServerUrl, {
        method: 'DELETE',
      }).then((res) => {
        return res.json();
      }).then((cbData) => {
        console.log('cbData ', cbData)
      }).catch((err) => {
        console.error(`error : `, err);
      }).finally(() => {
        console.log('~~finally~~');
        this.doFetchEmpData(); // 刪除完成後，直接查一次
      });
    },
  }
}

// 使用async
const patchData = async (_toUrl, _jsonData) => {

  console.log('%c================== patchData ==================', 'background:red');
  // console.log('_jsonData >>> ' , _jsonData);
  // console.log(' JSON.stringify(_jsonData) >>> ' , JSON.stringify(_jsonData));

  const myHeaders = new Headers({
    'Accept': 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8',
  });

  const myRequest = new Request(_toUrl, {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(_jsonData),
  });

  // await response of fetch call
  let response = await fetch(myRequest);
  // only proceed once promise is resolved
  let cbData = await response.json();
  // only proceed once second promise is resolved
  return cbData;
};
