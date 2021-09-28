<template>
    <select class="form-select" aria-label="Default select example" 
            v-model="selectedLanguage" @change="changeLanguage($event)"
        > 
            <option v-for="item in siteActiveLanguage" :key="item.id"
                    :value="item.id"> 
                        {{ item.id }}
            </option>  
    </select>  
</template>

<script>

import { mapGetters } from "vuex"

export default {
    data() {
        return {  
            //language: "EN", 
        } 
    },
    created() {
        localStorage.getItem("lang") ? '' : localStorage.setItem("lang", "en") 
    },
    methods: {
        changeLanguage(event) { 
            this.$store.commit("changeLanguage", event.target.value)
            this.$i18n.locale = event.target.value
            localStorage.setItem("lang", event.target.value)
        },
    },
    computed: {
        ...mapGetters(["siteActiveLanguage", "selectedLanguage"]),  
    }
}
</script>