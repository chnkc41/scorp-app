<template>
    <div class="row mb-5">
        <div class="col-12">
            <h5> {{ $t("message.views.contact.title") }} </h5>  
            <p> {{ $t("message.views.contact.content") }} </p>
        </div>
        <div class="col-md-6 mx-auto border p-5">
            <form @submit.prevent="submitForm"></form>
            <div class="mb-3">
                <label for="contact-name" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.username") }}
                    <box-icon type='solid' name='star' class="labelStar"></box-icon>  
                </label>
                <input 
                    type="text" 
                    class="form-control" 
                    :placeholder="$t('message.input-placeholder')"
                    :class="{'is-invalid' : v$.username.$error} "
                    id="contact-name"  
                    v-model="username" 
                    @blur="v$.username.$touch()"
                >
                <div class="form-text text-success"
                     v-if="!v$.username.required.$invalid && !v$.username.$error" >  
                        {{ $t("message.views.contact.forms.authentication.approved") }} 
                </div>
                <div class="form-text text-danger"
                     v-if="v$.username.$error" >  
                        {{ $t("message.views.contact.forms.authentication.username") }}  
                </div>
            </div>
            <div class="mb-3">
                <label for="contact-email" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.email") }}
                    <box-icon type='solid' name='star' class="labelStar"></box-icon>  
                </label>
                <input 
                    type="email" 
                    class="form-control" 
                    :placeholder="$t('message.input-placeholder')"
                    :class="{'is-invalid' : v$.email.$error }"
                    id="contact-email"  
                    v-model="email"
                    @blur="v$.email.$touch()"
                >
                <div class="form-text text-success"
                     v-if="!v$.email.required.$invalid && !v$.email.$error" >  
                        {{ $t("message.views.contact.forms.authentication.approved") }} 
                </div>
                <div class="form-text text-danger"
                     v-if="v$.email.$error">  
                        {{ $t("message.views.contact.forms.authentication.email") }}  
                </div> 
            </div>

            <div class="mb-3">
                <label for="contact-tel" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.tel") }}
                    <box-icon type='solid' name='star' class="labelStar"></box-icon>  
                </label>
                <div class="input-group">
                    <label for="contact-tel" class="input-group-text" 
                            :class="{'border-danger' : v$.tel.$error }"> 05 </label>
                    <input 
                        type="number" 
                        class="form-control" 
                        :placeholder="$t('message.input-placeholder')"
                        :class="{'is-invalid' : v$.tel.$error }"
                        id="contact-tel" 
                        aria-describedby="emailHelp"
                        v-model="tel"
                        @blur="v$.tel.$touch()"
                    >
                </div> 
                <div class="form-text text-success"
                     v-if="!v$.tel.required.$invalid && !v$.tel.$error" >  
                        {{ $t("message.views.contact.forms.authentication.approved") }} 
                </div>
                <div class="form-text text-danger"
                     v-if="v$.tel.$error">  
                        {{ $t("message.views.contact.forms.authentication.tel") }}  
                </div> 
            </div>

            

            <div class="mb-3">
                <label for="exampleDataList" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.country") }}
                </label>
                <v-select 
                    :options="selectedLanguage == 'en' ?  countryListEn : countryListTr" 
                    v-model="country" >
                </v-select> 
            </div>
 
            <div class="mb-3">
                <label for="contact-message" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.textField") }}
                </label>
                <textarea 
                    class="form-control" 
                    id="contact-message" 
                    rows="3"
                    v-model="message"
                    >
                </textarea>
            </div>

            <div class="mb-3">
                <button class="btn px-4" 
                :class="[v$.$invalid ? 'btn-outline-success' : 'btn-success' ]"
                        @click="submitForm()" 
                        :disabled="v$.$invalid" >
                    {{ $t("message.views.contact.forms.send") }}
                </button> 
            </div>          
        </div>  
    </div> 
</template>
  

 <script>
import { mapGetters } from "vuex"
import useVuelidate from '@vuelidate/core'
import {VueSelect as vSelect} from 'vue3-select'
import { required, email, numeric, minLength, maxLength } from '@vuelidate/validators' 


 export default { 
    components: {
        'v-select': vSelect
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            lang: null,
            username: null,
            email: null, 
            tel: null, 
            country: null,
            message: null,
            countryListEn: ["Turkey", "United States of America","United Kingdom","Germany","Sweden"],
            countryListTr: ["Türkiye", "Amerika","İngiltere","Almanya","İsveç"]
        }
    },
    validations () {
        return {
            username: { required },  
            email: { required, email },  
            tel: { 
                required, 
                numeric,
                minLength: minLength(9),
                maxLength: maxLength(9),
            },   
        }
    },
    created() {
        this.username = this.$store.getters.getCurrentUser?.username 
        this.email = this.$store.getters.getCurrentUser?.email   
        this.lang = localStorage.getItem("lang")
    },
    methods: {
        submitForm() {
            let dummyData = {
                name: this.username, 
                email: this.email,
                tel: this.tel, 
                country: this.country, 
                message: this.message 
            }
            console.log(dummyData)
        }
    },
    computed: {
        ...mapGetters(["getCurrentUser", "selectedLanguage","selectedCountry"]),   
    }, 
    watch: {
        getCurrentUser(newData) {
            this.username = newData.username
            this.email = newData.email 
        },
        selectedLanguage() {
             this.country = null
        }
    } 
 }
 </script>

<style>
.labelStar {
    width: 12px;
    padding-top: 10px;
}
</style>