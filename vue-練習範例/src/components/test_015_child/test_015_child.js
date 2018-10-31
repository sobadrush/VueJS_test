export default {
  name: 'test-015-child',
  components: {},
  props: {
    fromFatherDirtyWord: {
      type: String,
      require: true,
      default: 'default-幹幹幹',
    }
  },
  data() {
    return {

    }
  },
  computed: {
    // 1. 子組件中直接 <input> 綁定 prop 由父層餵進來的資料，進行修改會錯誤，因為Vue不允許子組件"直接修改"不屬於自己的資料
    // 2. 所以透過 computed 當中介資料
    // 3. 修改屬性時，在set()中呼叫$emit，將自訂方法發射到父組件上
    inputText: {
      get(){
        console.log('%c%s', 'color:orange' , ' >>> 呼叫 子組件 get() <<< ');
        return this.fromFatherDirtyWord;
      },
      set(_val){
        console.log('%c%s', 'color:lightblue' , ' >>> 呼叫 子組件 set() <<< ');

        // this.fromFatherDirtyWord = _val; // NG!!!!!! 不可直接修改父組件透過props傳入的值
        // this.$emit(`myTextChange` , _val);
        this.$emit(`myTextChange` , { 'changedVal' : _val });

      }
    }
  },
  mounted() {
    console.log(`fromFatherDirtyWord`, this.fromFatherDirtyWord);
  },
  methods: {

  }
}
