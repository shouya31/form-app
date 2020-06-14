<template>
  <div class="hello">
    <h1>Question</h1>
    <form @submit.prevent="ToConsultationPage">
      <div>
        <p><label for="">現在生命保険に加入されていますか?</label></p>
        <input name="radio1" type="radio" v-on:click="checked" value="ラジオ1">はい
        <input name="radio1" type="radio" v-on:click="checked" value="ラジオ1">いいえ
      </div>
      <div v-show="show1">
        <p><label for="">現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院や手術を勧められたことはありますか？</label></p>
        <input name="radio1" type="radio" v-on:click="checked" value="ラジオ2">はい
        <input name="radio1" type="radio" v-on:click="checked" value="ラジオ2">いいえ
      </div>
      <div v-show="show2">
        <p><label for="">過去５年以内に、病気や怪我で、手術を受けたこと、または継続して7日以上の入院をしたことがありますか？</label></p>
        <input name="radio2" type="radio" v-on:click="checked">はい
        <input name="radio2" type="radio" v-on:click="checked">いいえ
      </div>
      <button type="submit">次へ</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show1: false,
      show2: false
    }
  },
  methods: {
    checked(e){
      if (e.target.value === "ラジオ1"){
        this.show1 = true
      }
      else if (e.target.value === "ラジオ2"){
        this.show2 = true
      }
    },
    ToConsultationPage() {
      this.$router.push("/consultation");
    }
  }
}
</script>
