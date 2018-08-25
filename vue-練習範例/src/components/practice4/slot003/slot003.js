export default {
  name: 'slot-003',
  components: {
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-= 局部註冊(Local Registration) =-=-=-=-=-=
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    'my-child': {
      props: ['myItems'],
      template: `
        <div class="container margin-around" style="border:solid 1px black">
          <h5>my-child</h5>
          <slot name="titleSlot">父層沒傳入資料時，會SHOW此段</slot>
          <ul>
            <slot name="fuckSlot" v-for="item in myItems" v-bind:gameIdXXX="item.gameId" :gameNameOOO="item.gameName" >
              父層沒傳入資料時，會SHOW此段
            </slot>
          </ul>
        </div>
      `,
      data: function () {
        return {
          // testMsg: '哈哈哈哈哈',
          // testBtnArray: [
          //   { name: '勇者鬥惡龍', className: 'btn-warning' },
          //   { name: '哆啦A夢宇宙大冒險', className: 'btn-primary' },
          //   { name: '賭博默示錄', className: 'btn-success'}
          // ],
        }
      }
    }
  },
  props: [],
  data() {
    return {
      myGames : [
        { gameId: 111, gameName: '勇者鬥惡龍' },
        { gameId: 222, gameName: '哆啦A夢宇宙大冒險' },
        { gameId: 333, gameName: '賭博默示錄' }
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
