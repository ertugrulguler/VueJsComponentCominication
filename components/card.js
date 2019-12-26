Vue.component("my-card", {
  props: ["my-ApiList"],
  template: `
    <div class="card" style="width: 18rem;" v-for="user in userlist">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">user.name</h5>
      <p class="card-text">user.email</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `,
  data() {
    return {
      userList: []
    };
  },
  watch: {}
});
