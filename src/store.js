import { createStore } from "vuex"

const store = createStore({
    state: {
        selectedLanguage: localStorage.getItem("lang"),
        siteLanguages: [
            { id: "tr", name: "Turkish", isActive: true },
            { id: "en", name: "English", isActive: true },
            { id: "de", name: "German", isActive: false }, 
            { id: "ja", name: "Japanese", isActive: false }, 
        ],
        user: {
            isActive: false,
            username: null, 
            email: null, 
            password: null,  
        },
    },
    mutations: {
        changeLanguage(state, item) {
            state.selectedLanguage = item
        },
        updateUser(state, item) { 
            const path = state.user
            path.isActive =  true
            path.username =  item[0].value
            path.email =  item[1].value
            path.password =  item[2].value 
        },
        destroyUser(state) {
            const path = state.user
            path.isActive = false
            path.username = ""
            path.email = ""
            path.password = ""
        },
    },
    getters: { 
        selectedLanguage: state => state.selectedLanguage, 
        siteActiveLanguage: state => state.siteLanguages.filter( i => i.isActive == true ),
        activeUser(state) {
            const user = {
                ...state.user
            }
            delete user.password
            return user;
        },
    }
})

export default store