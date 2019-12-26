Vue.component("listitem1", {
  props: ["listitem"],
  template: `<div>
        <ul>
          <li v-for ="item in listsource">
            <span>{{item.id}}--{{item.title}}</span>
            <span><button @click="$emit('list-item-changed',item)">Select</button></span>
          </li>
        </ul>
    </div>`,
  data: function() {
    return {
      listsource: [
        { id: 1, title: "aa1" },
        { id: 2, title: "aa2" },
        { id: 3, title: "aa3" },
        { id: 4, title: "aa4" }
      ]
    };
  }
});
