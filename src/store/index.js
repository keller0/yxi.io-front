import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    config: {
        dark: false
    },
    user: {
        logined: false,
        token: ''
    },
    editor: {
        config: {
            theme: ''
        },
        buffer: {
            codeID: 0,
            username: '',
            title: '',
            description: '',
            codeLang: '',
            filename: '',
            content: '',
            likes: 0,
            public: true,
            createat: '',
            updateat: ''
        }
    },
    codes: {
        public: [],
        top: []
    }
}

const mutations = {

}

const actions = {

}

// getters are functions
const getters = {

}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
