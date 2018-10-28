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
    doFetchEmpDataById(_id) {
      console.log(`%c=============== doFetchEmpDataById() ================`, 'background: blue');
      const jsonServerUrl = `http://localhost:3000/emps/${_id}`;
      fetchAsync(jsonServerUrl).then((cbData) => {
        // console.log('cbData >>> ', cbData);
        this.empModData = Object.assign({}, cbData);// JS object clone (ref. http://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/)
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

// 使用 async/await
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

// 使用 async/await
// 簡潔寫法 ref. https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
// 錯誤處理：https://stackoverflow.com/questions/51781137/how-can-i-handle-error-404-in-async-await-fetch-api
const fetchAsync = async (_toUrl) => {
  let cbData = undefined;
  try {
    let response = await (await fetch(_toUrl));
    // console.log(`result.status = `, result.status);
    if (!response.ok) {
      throw new Error(response.statusText)
    };
    cbData = response.json();
  } catch (e) {
    console.error('%c error: %s', 'color:red', e);
  }
  return cbData;
};
