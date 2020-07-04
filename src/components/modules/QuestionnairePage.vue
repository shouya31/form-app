<template>
  <div class="hello">
    <h2>以下のお答えください</h2>
    <form @submit.prevent="ToConsultationPage">
      <div>
        <p><label>現在生命保険に加入されていますか?</label></p>
        <input name="question1" type="radio" v-model="question1" value="はい">はい
        <input name="question1" type="radio" v-model="question1" value="いいえ">いいえ
      </div>
      <div v-show="showQuestion1">
        <p><label>現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院や手術を勧められたことはありますか？</label></p>
        <input name="question2" type="radio" v-model="question2" value="はい">はい
        <input name="question2" type="radio" v-model="question2" value="いいえ">いいえ
      </div>
      <div v-show="showQuestion2">
        <p><label>過去５年以内に、病気や怪我で、手術を受けたこと、または継続して7日以上の入院をしたことがありますか？</label></p>
        <input name="question3" type="radio" v-model="question3" value="はい">はい
        <input name="question3" type="radio" v-model="question3" value="いいえ">いいえ
      </div>
      <button type="submit">次へ</button>
      <button @click="$router.go(-1)">戻る</button>
    </form>
  </div>
</template>

<script>

export default {
  methods: {
    ToConsultationPage() {
      this.$router.push("/consultation");
    }
  },
  computed: {
    showQuestion1:{
      get(){ return this.$store.getters.showQuestion1 },
      set(value){ this.$storecommit('changeQuestion1Value', value)}
    },
    showQuestion2:{
      get(){ return this.$store.getters.showQuestion2 },
      set(value){ this.$store.commit('changeQuestion2Value', value)}
    },
    question1:{
      get(){ return this.$store.getters.question1 },
      set(value){ this.$store.commit('changeQuestion1Value', value)}
    },
    question2:{
      get(){ return this.$store.getters.question2 },
      set(value){ this.$store.commit('changeQuestion2Value', value)}
    },
    question3:{
      get(){ return this.$store.getters.question3 },
      set(value){ this.$store.commit('changeQuestion3Value', value)}
    },
  }
}
</script>
