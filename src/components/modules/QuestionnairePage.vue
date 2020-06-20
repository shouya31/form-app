<template>
  <div class="hello">
    <h1>Question</h1>
    <form @submit.prevent="ToConsultationPage">
      <div>
        <p><label for="">現在生命保険に加入されていますか?</label></p>
        <input name="radio1" type="radio" v-model="RadioOption1" value="Yes1">はい
        <input name="radio1" type="radio"  v-model="RadioOption1" value="No1">いいえ
      </div>
      <div v-show="show1">
        <p><label for="">現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院や手術を勧められたことはありますか？</label></p>
        <input name="radio2" type="radio" v-model="RadioOption2" value="Yes2">はい
        <input name="radio2" type="radio" v-model="RadioOption2" value="No2">いいえ
      </div>
      <div v-show="show2">
        <p><label for="">過去５年以内に、病気や怪我で、手術を受けたこと、または継続して7日以上の入院をしたことがありますか？</label></p>
        <input name="radio3" type="radio" v-model="RadioOption3" value="Yes3">はい
        <input name="radio3" type="radio" v-model="RadioOption3" value="No3">いいえ
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
    show1:{
      get(){ return this.$store.getters.show1 },
      set(value){ this.$store.dispatch('setshow1', value)}
    },
    show2:{
      get(){ return this.$store.getters.show2 },
      set(value){ this.$store.dispatch('setshow2', value)}
    },
    show3:{
      get(){ return this.$store.getters.show3 },
      set(value){ this.$store.dispatch('setshow3', value)}
    },
    RadioOption1:{
      get(){ return this.$store.getters.RadioOption1 },
      set(value){ this.$store.dispatch('setRadioOption1', value)}

    },
    RadioOption2:{
      get(){ return this.$store.getters.RadioOption2 },
      set(value){ this.$store.dispatch('setRadioOption2', value)}

    },
    RadioOption3:{
      get(){ return this.$store.getters.RadioOption3 },
      set(value){ this.$store.dispatch('setRadioOption3', value)}

    },
  }
}
</script>
