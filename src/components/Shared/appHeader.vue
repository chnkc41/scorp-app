<template>
     <header class="header">
    <div>
        <a href="#" class="header__logo">
            <box-icon name='smile'></box-icon>
        </a>

        <span class="nav__name"> 
            {{ $route.name == 'home' ? $t("message.currentPage.home") : $t("message.currentPage.contact") }} 
        </span> 
    </div>
 
    <box-icon 
        class='bx header__toggle' 
        id="header-toggle" 
        :name="[menuToogle ? 'menu' : 'x']" 
        @click="menuToogle = !menuToogle" 
    ></box-icon>
  
    <nav class="nav" id="nav-menu" :class="[menuToogle? '' : 'show']">
        <div class="nav__content bd-grid">
            <a class="nav__perfil">
                <div class="nav__img"> 
                    <box-icon name='smile'></box-icon>
                </div>
                
                <div>
                    <span class="nav__name">
                        {{ $route.name == 'home' ? $t("message.currentPage.home") : $t("message.currentPage.contact") }} 
                    </span> 
                </div>
            </a>

            <div class="nav__menu">  
                <ul class="nav__list"> 
                    <li class="nav__item"> 
                        <router-link to='/' class="nav__link" active-class="active" 
                            @click="clickMenuItem()"
                        > 
                            {{ $t("message.menu.home") }}
                        </router-link>  
                    </li>  
                    <li class="nav__item"> 
                        <router-link to='/contact' class="nav__link" active-class="active" 
                            @click="clickMenuItem()"
                        > 
                            {{ $t("message.menu.contact") }}

                        </router-link>  
                    </li> 

                    <li class="nav__item">
                        <a  class="nav__link" 
                            data-bs-toggle="modal" 
                            data-bs-target="#loginModal" 
                            v-if="!isAuthenticated"> 
                                {{ $t("message.menu.login") }} 
                        </a>  
                    </li> 
                    <li class="nav__item dropdown" v-if="isAuthenticated">
                        <a href="#" class="nav__link dropdown__link"> 
                            {{ getCurrentUser.username }} 
                            <box-icon name='chevron-down' class="dropdown__icon" ></box-icon>
                        </a> 
                        <ul class="dropdown__menu">
                            <li class="dropdown__item">
                                <a href="#" class="nav__link"> 
                                    {{ getCurrentUser.email }} 
                                </a>
                            </li>
                            <li class="dropdown__item">
                                <a href="#" class="nav__link" @click="onLogout()">
                                    {{ $t("message.menu.logout") }}
                                </a>
                            </li> 
                        </ul>
                    </li>
                    <SiteLanguage />   
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
import { mapGetters } from "vuex"
import SiteLanguage from "@/components/Tools/SiteLanguage"  

export default {
    components: {
        SiteLanguage,
    },
    data() {
        return {
            menuToogle : true,  
            currentPageName: null
        } 
    },
    created() {  
        this.currentPageName = localStorage.getItem("currentPage") 
    },
    methods: {
        clickMenuItem() {   
            this.menuToogle = !this.menuToogle 
        }, 
        onLogout() {  
            this.$store.commit("logoutUser") 
        }
    },
    computed: {
        ...mapGetters(["isAuthenticated", "getCurrentUser", "selectedLanguage"]),  
        /*currentRouteName() {
            return this.$route.name == "HomePage" ? 'Scorp' : this.$route.name;
        }*/
    }
 
}
</script>