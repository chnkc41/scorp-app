<template>
    <div class="row mb-5">
        <div class="col-12">
            <h5> {{ $t("message.views.contact.title") }} </h5>  
            <p> {{ $t("message.views.contact.content") }} </p>
        </div>
        <div class="col-md-6 mx-auto border p-5">
            <form @submit.prevent="submitForm"></form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.username") }}
                </label>
                <input 
                    type="text" 
                    class="form-control" 
                    :class="{'is-invalid' : v$.username.$error} "
                    id="exampleInputEmail1" 
                    aria-describedby="userHelp"
                    v-model="username" 
                    @blur="v$.username.$touch()"
                >
                <div id="userHelp" class="form-text text-success"
                     v-if="!v$.username.required.$invalid && !v$.username.$error" >  
                        {{ $t("message.views.contact.forms.authentication.approved") }} 
                </div>
                <div id="userHelp" class="form-text text-danger"
                     v-if="v$.username.$error" >  
                        {{ $t("message.views.contact.forms.authentication.username") }}  
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.email") }}
                </label>
                <input 
                    type="email" 
                    class="form-control" 
                    :class="{'is-invalid' : v$.email.$error }"
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    v-model="email"
                    @blur="v$.email.$touch()"
                >
                <div id="userHelp" class="form-text text-success"
                     v-if="!v$.email.required.$invalid && !v$.email.$error" >  
                        {{ $t("message.views.contact.forms.authentication.approved") }} 
                </div>
                <div id="emailHelp" class="form-text text-danger"
                     v-if="v$.email.$error">  
                        {{ $t("message.views.contact.forms.authentication.email") }}  
                </div> 
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.tel") }}
                </label>
                <div class="input-group">
                    <label for="exampleInputEmail1" class="input-group-text" 
                            :class="{'border-danger' : v$.tel.$error }"> 05 </label>
                    <input 
                        type="number" 
                        class="form-control" 
                        :class="{'is-invalid' : v$.tel.$error }"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        v-model="tel"
                        @blur="v$.tel.$touch()"
                    >
                </div> 
                <div id="userHelp" class="form-text text-success"
                     v-if="!v$.tel.required.$invalid && !v$.tel.$error" >  
                        {{ $t("message.views.contact.forms.authentication.approved") }} 
                </div>
                <div id="emailHelp" class="form-text text-danger"
                     v-if="v$.tel.$error">  
                        {{ $t("message.views.contact.forms.authentication.tel") }}  
                </div> 
            </div>
  
            <div class="mb-3">
                <label for="exampleDataList" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.country") }}
                </label>
                <input 
                    class="form-control" 
                    list="datalistOptions" 
                    id="exampleDataList" 
                    placeholder="Type to search..."
                    v-model="country"
                >
                <datalist id="datalistOptions">
                    <option :value='$t("message.countryList.tr")' />
                    <option :value='$t("message.countryList.us")' />
                    <option :value='$t("message.countryList.gb")' />
                    <option :value='$t("message.countryList.de")' />
                    <option :value='$t("message.countryList.se")' />
                    <option :value='$t("message.countryList.ke")' />
                    <option :value='$t("message.countryList.br")' />
                    <option :value='$t("message.countryList.zw")' /> 
                </datalist>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label text-start d-block">
                    {{ $t("message.views.contact.forms.textField") }}
                </label>
                <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    v-model="message"
                    >
                </textarea>
            </div>

            <div class="mb-3">
                <button class="btn btn-outline-success" @click="submitForm()" :disabled="v$.$invalid" >
                    {{ $t("message.views.contact.forms.send") }}
                </button> 
            </div>          
        </div>  
    </div> 
</template>
 

 <script>
import { mapGetters } from "vuex"
import useVuelidate from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators' 
 

 export default { 
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            username: this.$store.getters.activeUser.username,
            email: this.$store.getters.activeUser.email, 
            tel: null, 
            country: null,
            message: null
        }
    },
    validations () {
        return {
            username: { required },  
            email: { required, email },  
            tel: { required, numeric },   
        }
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
        ...mapGetters(["activeUser"]),  
    },  
 }
 </script>