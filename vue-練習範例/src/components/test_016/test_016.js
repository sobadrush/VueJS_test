export default {
  name: 'test-016',
  components: {},
  props: [],
  data () {
    return {
      empData : {
        empName : 'Roger' ,
        empAge : '23',
        empSalary : '22000'
      },
      myFlag : true
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    doClick() {
      this.myFlag = !this.myFlag;
    }
  }
}
