export default {
  name: 'form-comp-005',
  components: {},
  props: [],
  data () {
    return {
      selectedData : '',
      selectedData2 : 'defaultGG', // 預設綁訂某個 option 的 value，即可達到初始選擇某值的效果
      selectedData3 : [], // 多選的select option，必須設定 array
      //----------------------------------------------------------
      selectedData4: 'Apple', // 預設綁訂某個 option 的 value，即可達到初始選擇某值的效果
      myOptions: [
        { text: 'One'  , value: 'Apple' },
        { text: 'Two'  , value: 'Book'  },
        { text: 'Three', value: 'Cat'   }
      ],
      //----------------------------------------------------------
      selectedData5: { empId : '5566' }, // 預設綁訂某個 option 的 value，即可達到初始選擇某值的效果
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
