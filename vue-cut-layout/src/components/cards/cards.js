import myCard from '@/components/myCard/myCard.vue'
export default {
  name: 'cards',
  components: {
    'app-card' : myCard,
  },
  props: [],
  data() {
    return {
      parentData : [
        { 'season' : 'Spring' , 'bkColor' : 'red'  },
        { 'season' : 'Summer' , 'bkColor' : 'green'},
        { 'season' : 'Fall'   , 'bkColor' : 'blue' },
        { 'season' : 'Winter' , 'bkColor' : 'brown'},
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
