import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showQuestion1: false,
    showQuestion2: false,
    question1: "",
    question2: "",
    question3: "",
    gender: "",
    date: "",
    text: ""
  },
  mutations: {
    valueChange(state, value){
      if ( value === "Yes1" || value === "No1" ){
        state.showQuestion1 = true
        state.question1 = value
      }
      else if ( value === "Yes2" || value === "No2" ){
        state.showQuestion2 = true
        state.question2 = value
      }
      else if ( value === "Yes3" || value === "No3" ){
        state.question3 = value
      }
    },
    genderValue(state, value){
      state.gender = value
    },
    dateValue(state, value){
      state.date = value
    },
    textValue(state, value){
      state.text = value
    }
  },
  getters: {
    showQuestion1(state){
      return state.showQuestion1
    },
    showQuestion2(state){
      return state.showQuestion2
    },
    question1(state){
      return state.question1
    },
    question2(state){
      return state.question2
    },
    question3(state){
      return state.question3
    },
    gender(state){
      return state.gender
    },
    date(state){
      return state.date
    },
    text(state){
      return state.text
    }
  },
  actions: {
    setGender({commit}, value){
      commit('genderValue', value )
    },
    setDate({commit}, value){
      commit('dateValue', value )
    },
    setShowQuestion1({commit}, value){
      commit('valueChange', value)
    },
    setShowQuestion2({commit}, value){
      commit('valueChange', value)
    },
    setQuestion1({commit}, value){
      commit('valueChange', value)
    },
    setQuestion2({commit}, value){
      commit('valueChange', value)
    },
    setQuestion3({commit}, value){
      commit('valueChange', value)
    },
    setText({commit}, value){
      commit('textValue', value)
    }
  },

})

export default store