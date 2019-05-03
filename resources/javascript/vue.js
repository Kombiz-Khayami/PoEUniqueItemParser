// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })

// var app2 = new Vue({
//   el: '#app2',
//   data () {
//     return{
//        search: ''
//     }
//   },
//   computed:{
//     filteredItems
//   }
// })

// new Vue({
//   el: '#app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://cors.io/?https://poe.ninja/api/Data/GetUniqueFlaskOverview?league=Synthesis')
//       .then(response => (this.info = response.data.lines.sparkline))
//   }
// })
new Vue({
  el: '#app',
  data () {
    return {
      info: [],
      search: '',
      hh: 'https://cors.io/?https://poe.ninja/api/Data/GetUniqueFlaskOverview?league=Synthesis'
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  //http://poe.ninja/api/Data/GetUniqueFlaskOverview?league
  //http://poe.ninja/api/Data/GetUniqueArmourOverview?league
  //https://poe.ninja/api/Data/GetUniqueWeaponOverview?league=Synthesis
  //https://poe.ninja/api/Data/GetUniqueAccessoryOverview?league=Synthesis
  //https://poe.ninja/api/Data/GetUniqueJewelOverview?league=Synthesis
  mounted () {
    fetch(this.hh)
      .then(response => response.json())
      .then((data)=> {
        this.info = data.lines;
      })
    },
  computed:{
    filteredItems: function() {
      return this.info.filter((item) =>{
         if (item.name.toLowerCase().match(this.search.toLowerCase())) 
           return item.name.toLowerCase().match(this.search.toLowerCase());

         if (item.baseType.toLowerCase().match(this.search.toLowerCase())) {
           return item.baseType.toLowerCase().match(this.search.toLowerCase());
         }

         for(var mod of item.explicitModifiers){
           if(mod.text.toLowerCase().match(this.search.toLowerCase()))
             return mod.text.toLowerCase().match(this.search.toLowerCase()); 
         }
         
      });
    }
  },
  template: `
  <div>
   <input type="text" v-model="search" placeholder="Filter items">
   <br>
   <div v-for="item in filteredItems">
     <span class="">{{item.name}} <br> </span>
     <span class="">{{item.baseType}} <br> </span>
     <div v-for="stuff in item.implicitModifiers">
       <span>{{stuff.text}}<br></span>
     </div>
     <div v-for="stuff in item.explicitModifiers">
       <span>{{stuff.text}}<br></span>
     </div>
      <img :src="item.icon"><br>
      <span>-{{item.flavourText}}
      <br><br>
   </div>
  </div>
  `,
})