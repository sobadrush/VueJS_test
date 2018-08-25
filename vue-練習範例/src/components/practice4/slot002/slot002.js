export default {
  name: 'slot-002',
  components: {
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-= 局部註冊(Local Registration) =-=-=-=-=-=
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    'my-child': {
      template: `
        <div class="container margin-around" style="border:solid 1px black">
          <header>
            <slot name="header">
              當父元件沒傳入東西時，顯示此段...(1) header
            </slot>
          </header>
          <main>
            <slot>
              當父元件沒傳入東西時，顯示此段...(2) main
            </slot>
          </main>
          <footer>
            <slot name="footer">
              當父元件沒傳入東西時，顯示此段...(3) footer
            </slot>
          </footer>
        </div>`,
      data: function () {
        return {
          testMsg: '哈哈哈哈哈',
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
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
