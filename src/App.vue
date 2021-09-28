<template>
  <div>  

    <Header /> 

    <main>
        <div class="container pt-4">
            <router-view> </router-view>  
        </div>
    </main> 
        
    <footer>
      <Footer /> 
    </footer>

    <LoginModal />
  
  </div>
</template>

<script>

import Header from "@/components/Layout/Header" 
import Footer from "@/components/Layout/Footer" 
import LoginModal from "@/components/Login/Login" 
import { mapGetters } from "vuex"

export default { 
  components: { 
    Header, 
    Footer,
    LoginModal
  }, 
  methods: { 
  },
  computed: {
    ...mapGetters(["siteActiveLanguage", "activeUser"]), 
  }
}
</script> 

<style> 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
