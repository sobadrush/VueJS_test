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
      }
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    doFetchEmpData() {
      console.log(`=============== doFetchEmpData() ================`);
      const jsonserverUrl = `http://localhost:3000/emps`;
      window.fetch(jsonserverUrl, {
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
    doAddEmp() {
      console.log(`=============== doAddEmp() ================`);
      // console.log('empAddData = ' , this.empAddData);
      // console.log('toJson empAddData = ' , this.toJson(this.empAddData));

      const jsonserverUrl = `http://localhost:3000/emps`;
      window.fetch(jsonserverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: this.toJson(this.empAddData)
      }).then((res) => {
        return res.json();
      }).then((cbData) => {
        console.log('cbData ' , cbData)
      }).catch((err) => {
        console.error(`error : `, err);
      }).finally(() => {
        console.log('~~finally~~');
      });
    },
    doDelete( $event ) {
      console.log(`=============== doDelete() ================`);
      // console.log('$event' , $event);

      let idTag = document.querySelector('input[placeholder="請輸入id"]');
      let empId = idTag.value;

      const jsonserverUrl = `http://localhost:3000/emps/${empId}`;
      window.fetch(jsonserverUrl, {
        method: 'DELETE',
      }).then((res) => {
        return res.json();
      }).then((cbData) => {
        console.log('cbData ' , cbData)
      }).catch((err) => {
        console.error(`error : `, err);
      }).finally(() => {
        console.log('~~finally~~');
      });
    },
  }
}
