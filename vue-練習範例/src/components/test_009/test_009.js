export default {
  name: 'test-009',
  components: {},
  props: [],
  data () {
    return {
      pageCount : 10,
      queryAgeLimit : 5,
      empDataList : [
        { empName: 'Roger' , empAge: 18  , empSex: 'male'   , picUrl : picBase64Array[0] },
        { empName: 'Kelly' , empAge: 23  , empSex: 'female' , picUrl : picBase64Array[1] },
        { empName: 'Linda' , empAge: 15  , empSex: 'female' , picUrl : picBase64Array[2] },
        { empName: 'Scott' , empAge: 28  , empSex: 'male'   , picUrl : picBase64Array[3] },
        { empName: 'Benson', empAge: 18  , empSex: 'female' , picUrl : picBase64Array[4] },
        { empName: 'Roy'   , empAge: 11  , empSex: 'female' , picUrl : picBase64Array[5] },
        { empName: 'Frank' , empAge: 32  , empSex: 'male'   , picUrl : picBase64Array[6] },
      ],
      empDataListToShow : [],
    }
  },
  computed: {

  },
  mounted () {
    this.empDataListToShow = this.empDataList;
  },
  methods: {
    filterByAge( _ageLimit ) {

      // >>> @keyup→應該做個debunce <<<

      let filterResult = this.empDataList.filter( (item, index, arr) => {
        // console.log(item);
        return item.empAge > parseInt(_ageLimit);
      });

      this.empDataListToShow = filterResult;
    },
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
