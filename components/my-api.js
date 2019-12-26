Vue.component("myapi", {
  props: ["my-ApiList"],
  template: `
        <button class='btn btn-primary' @click="$emit('getapi',items)">Verileri Çek</button>
    `,
  data: function() {
    return {
      items: []
    };
  }
});
