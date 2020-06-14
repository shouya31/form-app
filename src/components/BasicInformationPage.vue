<template>
  <div class="hello">
    <h1>Basic</h1>
    <form @submit.prevent="ToQuestionPage">
      <div>
        <h3><label for="">-性別</label></h3>
        <input type="radio" value="男"> 男
        <input type="radio" value="女"> 女
      </div>
      <div>
        <h3><label for="">-生年月日</label></h3>
        <input type="date" name="calendar" max="2020-12-31">
      </div>
      <button type="submit">次へ</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    ToQuestionPage() {
      this.$router.push("/question");
    }
  }
}
</script>