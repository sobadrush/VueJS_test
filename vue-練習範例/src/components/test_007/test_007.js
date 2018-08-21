export default {
  name: 'test-007',
  components: {},
  props: [],
  data () {
    return {
      firstName : 'Roger' ,
      lastName : 'Lo' ,
      newFullName : '' , // 初始值 '' , mounted 時，將fullNameFuck值存入
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
    fullNameFuck :{
      get : function(){ // 【 取出 fullNameFuck 時，會呼叫 get() 】
        console.log(`>>>>> 呼叫 computed... getter <<<<<`);
        return `Fuck You ~ ${this.firstName}  ${this.lastName}`;
      },
      set : function( newValue ){ // 【 修改 fullNameFuck 時，會呼叫 set() , 此處去重設 firstName 及 lastName 】
        console.log(`>>>>> 呼叫 computed... setter <<<<<`);
        let _name = newValue.split(' ');
        // console.log(`(1) newValue >>> ${newValue} , _name >>> ${_name[0]} `);
        // console.log(`(2) newValue >>> ${newValue} , _name >>> ${_name[1]} `);
        this.firstName = _name[0];
        this.lastName = _name[_name.length - 1];
      }
    },
  },
  mounted () {
    this.newFullName = this.fullNameFuck;
  },
  methods: {
    doModifyFullName( _newFullName /* v-model 傳入 */ ) {
      alert(`======== doModifyFullName ========`);
      console.log('this.newFullName >>> ' , _newFullName);
      this.fullNameFuck = _newFullName;
    }
  }
}
