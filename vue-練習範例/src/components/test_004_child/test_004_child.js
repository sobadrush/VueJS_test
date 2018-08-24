export default {
  name: 'test-004-child',
  components: {},
  props: [
    // 【可在子代的 props 屬性中定義父元件傳入的屬性名稱】
    'dataFromParent' ,
    'perSeason',
    'perSeason_name',
    'perSeason_color',
    'idx',
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    // console.log('this >>> ' , this);
  },
  methods: {

  }
}
