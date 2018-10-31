import test015ChildComp from '@/components/test_015_child/test_015_child.vue'

export default {
  name: 'test-015',
  components: {
    'test015-child-comp' : test015ChildComp
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
    fatherChangeHandler( $$event ) {

      // console.log(`父層接收到 ─ 來自子元件的 event >>> ` , $$event);
      // this.dirtyWord = $$event;

      console.log(`父層接收到 ─ 來自子元件的 event >>> ` , $$event);
      this.dirtyWord = $$event.changedVal;

    }
  }
}
