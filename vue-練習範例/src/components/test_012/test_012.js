export default {
  name: 'test-012',
  components: {},
  props: [],
  data () {
    return {
      empDataList, picBase64Array,
      selectedIndex : undefined,
      selectedIndex2 : undefined,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    doMouseOver( _selectedIndex ) {
      console.log(`doMouseOver , _selectedIndex = ${_selectedIndex}`);
      this.selectedIndex = _selectedIndex;
    },
    doClick( _selectedIndex ) {
      console.log(`doClick , _selectedIndex = ${_selectedIndex}`);
      this.selectedIndex2 = _selectedIndex;
    }
  }
}


let picBase64Array = [
  'static/assest/img/doraemon/企鵝.png',
  'static/assest/img/doraemon/大雄.jpg',
  'static/assest/img/doraemon/小叮噹.jpg',
  'static/assest/img/doraemon/小夫.jpg',
  'static/assest/img/doraemon/白狼.jpg',
  'static/assest/img/doraemon/技安.jpg',
  'static/assest/img/doraemon/靜香.jpg',
];

let empDataList = [
  { empName: 'Roger' , empAge: 18  , empSex: 'male'   , picUrl : picBase64Array[0] },
  { empName: 'Kelly' , empAge: 23  , empSex: 'female' , picUrl : picBase64Array[1] },
  { empName: 'Linda' , empAge: 15  , empSex: 'female' , picUrl : picBase64Array[2] },
  { empName: 'Scott' , empAge: 28  , empSex: 'male'   , picUrl : picBase64Array[3] },
  { empName: 'Benson', empAge: 18  , empSex: 'female' , picUrl : picBase64Array[4] },
  { empName: 'Roy'   , empAge: 11  , empSex: 'female' , picUrl : picBase64Array[5] },
  { empName: 'Frank' , empAge: 32  , empSex: 'male'   , picUrl : picBase64Array[6] },
];

