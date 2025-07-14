<template> 
  <h3>{{msg}}</h3>
  <button @click="callme()">You clicked me {{ count }} times.</button>
</template>

<script>

import 'datejs';

export default  {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count:0
    }
  },
  methods: {
    callme() {
      var d = new Date();
      
      alert(d.toString("dd/MM"))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
