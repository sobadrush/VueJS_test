export default {
  name: 'test-001',
  components: {},
  props: [],
  data () {
    return {
      isShowing : true ,
      games : [
        { 'gameName' : '刺客教條'   , 'price' : '3520' },
        { 'gameName' : '龍珠超宇宙' , 'price' : '2200' },
        { 'gameName' : '馬力歐'     , 'price' : '1200' },
        { 'gameName' : 'GTA3'      , 'price' : '999'  },
        { 'gameName' : 'NBK2K19'   , 'price' : '1820' },
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    doShowAll( _$event ) {
      console.log( '_$event >>> ' , _$event );
      this.isShowing = !this.isShowing;
    }
  }
}
