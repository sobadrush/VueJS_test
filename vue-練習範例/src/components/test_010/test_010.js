export default {
  name: 'test-010',
  components: {},
  props: [],
  data() {
    return {
      empSalary: 22000,
      message : '',
      message2 : '',
      myStyle : '' ,
      empData : { empName : 'Roger' , empAge : 23 , empTitle : 'Manager' } , // 測試Deep-watch
    }
  },
  computed: {

  },
  watch: {
    empSalary : function(newVal, oldVal){
      console.log(`============ watch , empSalary ============`);
      console.log('newVal = %s , oldVal = %s' , newVal , oldVal);

      if ( (+newVal) > (+oldVal) ) {
        this.message = `我加薪啦 ^___^`;
        this.myStyle = {'color' : 'orange'};
      } else {
        this.message = `被扣薪啦 >__<`;
        this.myStyle = {'color' : 'red'};
      }

    },
    empData : { // Deep-watch
      handler : function(newVal, oldVal){
        console.log(`============ deep watch , empSalary ============`);
        console.log('newVal >>> ' , newVal , ' , oldVal >>> ' , oldVal);

        let newValJson = this.toJson(newVal); // toJson → 在main.js中註冊的全域函數
        let oldValJson = this.toJson(oldVal); // toJson → 在main.js中註冊的全域函數
        this.message2 = `{ 'newVal' : ${newValJson} , 'oldVal' : ${oldValJson} }`;
      },
      deep : true
    }

  },
  mounted() {

  },
  methods: {

  }
}
