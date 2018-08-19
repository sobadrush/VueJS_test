export default {
  name: 'test-003',
  components: {},
  props: [],
  data () {
    return {
      favoriteGame : ''
    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    doClick : function( _event ){
      console.log('_event >>> ' , _event);
      let btnTag = _event.target;
      this.favoriteGame = btnTag.innerText;
    },
    doAlert( _event ) { // 簡寫
      //_event.stopPropagation(); → @click.stop
      alert(' >>> doAlert , ' + _event.target.id + ' <<< ');
    },
    doLog(_event ) {
      console.log('_event >>> ' , _event);
      alert( _event.code );
    },
    doDoubleClick() {
      alert(' >>> doDoubleClick <<< ');
    },
    doKeyUp() {
      alert(' >>> doKeyUp <<< ');
    }
  }
}
