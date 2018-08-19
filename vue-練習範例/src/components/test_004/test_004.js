import test_004_childComp from '@/components/test_004_child/test_004_child.vue';

export default {
  name: 'test-004',
  components: {
    'app-test004-child' : test_004_childComp ,
  },
  props: [],
  data () {
    return {
      'seasonArray' : [
        { name : '春天', color : 'orange' } ,
        { name : '夏天', color : 'red' } ,
        { name : '秋天', color : 'brown' } ,
        { name : '冬天', color : 'lightblue' } ,
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
