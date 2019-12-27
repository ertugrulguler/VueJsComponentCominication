Vue.component("myapi", {
  props: ["myapilist"],
  template: `
        <button class='btn btn-primary' @click="$emit('getapi',items)">Verileri Çek</button>
    `,
  data: function() {
    return {
      items: []
    };
  }
});
