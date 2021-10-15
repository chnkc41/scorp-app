import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" 

const store = createStore({
    state: {
        selectedLanguage: lang,
        siteLanguages: [
            { id: "tr", name: "Turkish", isActive: true },
            { id: "en", name: "English", isActive: true },
            { id: "de", name: "German", isActive: false }, 
            { id: "ja", name: "Japanese", isActive: false }, 
        ], 
        user: null,
    },
    mutations: {
        changeLanguage(state, item) {
            state.selectedLanguage = item
        },
        setUser(state, user) { 
            state.user = user
        },
        logoutUser(state) {
            state.user = null
        }, 
    },
    plugins:  [
        createPersistedState({
            /*key: "user",*/
            paths: ['user'],
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: (key) => ls.remove(key),
            },
        }),
    ],
    getters: { 
        selectedLanguage: state => state.selectedLanguage, 
        siteActiveLanguages: state => state.siteLanguages.filter( i => i.isActive == true ),
        isAuthenticated: state => state.user != null, 
        getCurrentUser(state) {
            const user = {
                ...state.user
            }
            delete user?.password
            return user;
        }, 
    }
})

export default store