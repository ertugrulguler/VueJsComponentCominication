Vue.component("listitem2", {
  props: ["listitem"],
  template: `<div>
        <ul>
          <li v-for ="d in listsource">
            <span>{{d.id}}------{{d.title}}</span>
            
          </li>
        </ul>
    </div>`,
  data: function() {
    return {
      listsource: []
    };
  },
  watch: {
    listitem: function(newVal, oldVal) {
      // console.log(newVal);
      this.loadData(newVal);
    }
  },
  methods: {
    loadData: function(newVal) {
      var vm = this;
      var list = [];

      newVal.forEach(i => {
        list.push({
          id: i.id,
          title: i.title
        });
      });

      console.log(list);
      vm.listsource = list;
    }
  }
});
