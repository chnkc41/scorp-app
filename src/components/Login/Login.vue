<template>   
    <div class="modal fade" :id="loginId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel"> {{ $t("message.forms.login.title" ) }} </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-1 language">  
                        <SiteLanguage />   
                    </div>
                    
                    <div class="mb-3 text-start">
                        <label for="userName" class="form-label"> {{ $t("message.forms.login.username" ) }} </label>
                        <input type="text" class="form-control" id="userName" v-model="userData.username" required>   
                    </div> 

                    <div class="mb-3 text-start">
                        <label for="user-email" class="form-label"> {{ $t("message.forms.login.email") }} </label>
                        <input type="email" class="form-control" id="user-email" v-model="userData.email" required>   
                    </div> 

                    <div class="mb-3 text-start">
                        <label for="user-password" class="form-label"> {{ $t("message.forms.login.password" ) }} </label>
                        <input type="password" class="form-control" id="user-password" v-model="userData.password" required>   
                    </div>  

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-success" 
                            @click="onSubmit()" data-bs-dismiss="modal"
                        >
                            {{ $t("message.forms.login.buttons.login" ) }}
                    </button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                        {{ $t("message.forms.login.buttons.close" ) }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SiteLanguage from "@/components/Tools/SiteLanguage" 

export default {
    components: {
        SiteLanguage
    },
    data() {
        return {
            loginId: "loginModal",
            title: "Login Form",
            userData: {
                username: null,
                email: null,
                password: null
            }, 
            fieldControl: null
        }
    },
    methods: { 
        onSubmit() { 
            this.userData.username != null && 
            this.userData.email != null && 
            this.userData.password != null ? this.fieldControl = true : ''
             
            if(this.fieldControl) { 
                this.$store.commit("setUser", this.userData)
            } else {
                alert("Dummy Alert: All areas are required")
            }
        }, 
    }
}
</script>

<style scoped>

</style>