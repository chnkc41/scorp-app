<template>
  <div>   
    <appHeader />  

    <main>
        <div class="container pt-4">
            <router-view> </router-view>  
        </div>
    </main>  

    <appFooter />
    
    <LoginModal /> 
  </div>
</template>

<script>

import LoginModal from "@/components/Login/Login" 
//import { mapGetters } from "vuex"

export default { 
  components: {  
    LoginModal
  }, 
}
</script> 

<style> 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;
}
</style>
