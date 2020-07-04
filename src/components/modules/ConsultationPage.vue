<template>
  <div>
    <h2>ご相談内容を入力ください</h2>
    <form @submit.prevent="ToConfirmationPage">
      <div>
        <p><label for="">ご相談内容</label></p>
        <textarea name="" id="" cols="30" rows="10" v-model="writeText"></textarea>
      </div>
      <button type="submit">次へ</button>
      <button @click="$router.go(-1)">戻る</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    ToConfirmationPage() {
      this.$router.push("/confirmation");
    }
  },
  computed: {
    writeText: {
      get() {return this.$store.state.text},
      set(value){ this.$store.commit('changeTextValue', value)}
    }
  }
}
</script>