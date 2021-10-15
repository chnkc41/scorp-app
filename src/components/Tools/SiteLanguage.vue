<template>
    <li class="nav__item dropdown">
        <a href="#" class="nav__link dropdown__link"> 
            {{ selectedLanguage }} 
            <box-icon name='chevron-down' class="dropdown__icon" ></box-icon>
        </a> 
        <ul class="dropdown__menu">
            <li class="dropdown__item" 
                v-for="item in siteActiveLanguages" :key="item.id"
                @click="selectLanguage(item.id)">
                <a href="#" class="nav__link"> 
                    {{ item.id }} 
                </a>
            </li> 
        </ul>
    </li> 
</template>

<script>

import { mapGetters } from "vuex"

export default {
    data() {
        return {    
        } 
    }, 
    methods: {
        selectLanguage(e) {  
            this.$store.commit("changeLanguage", e)
            this.$i18n.locale = e
            localStorage.setItem("lang", e)
        },
    },
    computed: {
        ...mapGetters(["siteActiveLanguages", "selectedLanguage"]),  
    },
}
</script> 