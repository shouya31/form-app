import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    show1: false,
    show2: false,
    RadioOption1: "",
    RadioOption2: "",
    RadioOption3: "",
    gender: "",
    date: "",
    text: ""
  },
  mutations: {
    valueChange(state, value){
      if ( value === "Yes1" || value === "No1" ){
        state.show1 = true
        state.RadioOption1 = value

      }
      else if ( value === "Yes2" || value === "No2" ){
        state.show2 = true
        state.RadioOption2 = value
      }
      else if ( value === "Yes3" || value === "No3" ){
        state.show3 = true
        state.RadioOption3 = value
      }
    },
    genderValue(state, value){
      console.log(value);

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
    show1(state){
      return state.show1
    },
    show2(state){
      return state.show2
    },
    show3(state){
      return state.show3
    },
    RadioOption1(state){
      return state.RadioOption1
    },
    RadioOption2(state){
      return state.RadioOption2
    },
    RadioOption3(state){
      return state.RadioOption3
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
    setshow1({commit}, value){
      commit('valueChange', value)
    },
    setshow2({commit}, value){
      commit('valueChange', value)
    },
    setshow3({commit}, value){
      commit('valueChange', value)
    },
    setRadioOption1({commit}, value){
      commit('valueChange', value)
    },
    setRadioOption2({commit}, value){
      commit('valueChange', value)
    },
    setRadioOption3({commit}, value){
      commit('valueChange', value)
    },
    setText({commit}, value){
      commit('textValue', value)
    }
  },

})

export default store