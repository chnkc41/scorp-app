<template>   
    <div class="modal fade" :id="loginId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel"> {{ $t("message.forms.login.title" ) }} </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3 language">  
                        <SiteLanguage />   
                    </div>
                    
                    <div class="mb-3 text-start" v-for="item in inputFields" :key="item.id">
                        <label for="userName" class="form-label"> {{ $t("message.forms.login." + item.name ) }} </label>
                        <input type="item.type" class="form-control" id="userName" v-model="item.value" required>   
                    </div>  

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-success" 
                            @click="login" data-bs-dismiss="modal"
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
            inputFields: [
                {
                    id: 1,
                    type: "text",
                    name: "username",
                    value: ""
                },
                {
                    id: 2,
                    type: "email",
                    name: "email",
                    value: ""
                },
                {
                    id: 3,
                    type: "password",
                    name: "password",
                    value: ""
                }
            ],
        }
    },
    methods: { 
        login() {
            let fieldControl = true
            this.inputFields.forEach(element => {
                element.value == "" || element.value == null ? fieldControl = false : ''
            });
            if(fieldControl) {
                this.$store.commit("updateUser", this.inputFields)
            }
        }, 
    }
}
</script>

<style scoped>
.language {
    width: 75px;
    margin-left: auto;
}
</style>