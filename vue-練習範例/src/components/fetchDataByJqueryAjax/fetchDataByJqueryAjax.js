import Vue from 'vue'

export default {
  name: 'fetch-data-by-jquery-ajax',
  components: {},
  props: [],
  data () {
    return {
      queryCityId : '1',
      townsData : {}
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    doFetchDataJqueryGet( _cityId ) {
      this.queryCityId = _cityId;

      let cityId = _cityId;
      let toUrl = `https://works.ioa.tw/weather/api/cates/${cityId}.json`;

      $.get( toUrl , (cbData) => {
        this.townsData = cbData;
        console.log( 'this.townsData >>> ' , this.townsData );
      });

    },
    clearData() {
      this.townsData = {};
    }
  }
}
