export default {
  name: 'slot-001',
  components: {
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-= 局部註冊(Local Registration) =-=-=-=-=-=
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    'my-child': {
      template: `
          <div class="margin-around" style="border:solid 1px black">
            <p>slot : </p>
            <slot text="操妳妹" gg="GGG" :testMsg="testMsg" :fuck="testArray" :testBtnArray="testBtnArray">
              【父組件沒傳入任何資料，預設顯示此段】
            </slot>
          </div>`,
      data: function () {
        return {
          testMsg: '哈哈哈哈哈',
          testArray : [ '勇者鬥惡龍' , '哆啦A夢宇宙大冒險' , '賭博默示錄' ],
          testBtnArray : [
            { name: '勇者鬥惡龍' , className : 'btn-warning'} ,
            { name: '哆啦A夢宇宙大冒險' , className : 'btn-primary'} ,
            { name: '賭博默示錄' , className : 'btn-success'}
          ],
        }
      }
    }

  },
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
