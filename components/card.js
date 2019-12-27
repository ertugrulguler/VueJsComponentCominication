Vue.component("my-card", {
  props: ["myapilist"],
  template: `
  <div>
      <table class="table table-hover" >
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in userList">
            <td>{{user.name}}</td>
            <td>{{user.mail}}</td>
          </tr>
        </tbody>
      </table>
  </div>
    `,
  data() {
    return {
      userList: []
    };
  },
  watch: {
    myapilist:function(newVal,oldVal){
      // console.log(newVal)
      this.loadData(newVal);
    }
  },
  methods:{
    loadData(newVal){
      var vm=this;
      //  console.log(newVal)
      var list = [];
      newVal.forEach(object => {
        object.forEach(element => {
          list.push({
            name:element.name,
            mail:element.email
          });
        
        });
        // console.log(list)
      });
      // console.log(list)
      vm.userList=list;
       
    }

    //yukarıya
  //   <div class="card" style="width: 18rem;" v-for="user in userList">
  //   <img src="..." class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">{{user.name}}</h5>
  //     <p class="card-text">{{user.email}}</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>
  }
});
