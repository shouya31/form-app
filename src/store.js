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
    changeQuestion1Value(state, value){
      state.question1 = value
      state.showQuestion1 = true
    },
    changeQuestion2Value(state, value){
      state.question2 = value
      state.showQuestion2 = true
    },
    changeQuestion3Value(state, value){
      state.question3 = value
    },
    // changeQuestionValue(state, value){
    //   if ( value === "Yes1" || value === "No1" ){
    //     state.showQuestion1 = true
    //     state.question1 = value
    //   }
    //   else if ( value === "Yes2" || value === "No2" ){
    //     state.showQuestion2 = true
    //     state.question2 = value
    //   }
    //   else if ( value === "Yes3" || value === "No3" ){
    //     state.question3 = value
    //   }
    // },
    changeGenderValue(state, value){
      state.gender = value
    },
    changeDateValue(state, value){
      state.date = value
    },
    changeTextValue(state, value){
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
  }
})

export default store