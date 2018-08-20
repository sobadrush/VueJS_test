export default {
  name: 'test-007',
  components: {},
  props: [],
  data () {
    return {
      firstName : 'Roger' ,
      lastName : 'Lo' ,
    }
  },
  computed: {
    fullName : function(){
      return `${this.firstName}  ${this.lastName}`;
    },
    shortName : function(){
      let symbol1 = this.firstName.substring(0,1);
      let symbol2 = this.lastName.substring(0,1);
      return `${symbol1} . ${symbol2}`;
    },
  },
  mounted () {

  },
  methods: {

  }
}
