import test017ChildComp from '@/components/test_017_child/test_017_child.vue'

export default {
  name: 'test-017',
  components: {
    'test017-child-comp' : test017ChildComp
  },
  props: [],
  data () {
    return {
      dirtyWord : 'Fuck Your Mother!'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    // ※ 使用sync，不需自建方法
    // ※ 自建方法好處：可在此function中做更多事情
    // fatherChangeHandler($$$event) {
    //   // console.log('$$$event' , $$$event);
    //   let val = $$$event;
    //   this.dirtyWord = val;
    // }
  }
}
