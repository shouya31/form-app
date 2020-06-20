<template>
  <div class="hello">
    <h1>Basic</h1>
    <form @submit.prevent="ToQuestionPage">
      <div>
        <h3><label for="">-性別</label></h3>
        <input type="radio" value="男" v-model="gender"> 男
        <input type="radio" value="女" v-model="gender"> 女
      </div>
      <div>
        <h3><label for="">-生年月日</label></h3>
        <input type="date" name="calendar" max="2020-12-31" v-model="date">
      </div>
      <button type="submit">次へ</button>
      <button @click="$router.go(-1)">戻る</button>
    </form>

  </div>
</template>

<script>

export default {
  methods: {
    ToQuestionPage() {
      this.$router.push("/question");
    },
    changeGender(e) {
      this.$store.commit("genderValue", e.target.value)
    },
    inputDate(e){
      this.$store.commit("dateValue", e.target.value)
    }
  },
  computed: {
    date: {
      get() { return this.$store.getters.date },
      set(value){ this.$store.dispatch('setDate', value)}
    },
    gender:{
      get() { return this.$store.getters.gender },
      set(value){ this.$store.dispatch('setGender', value)}

    }
  }

}
</script>