<template>
  <div>
    <h2>ご相談内容を入力ください</h2>
    <form>
      <div>
        <p><label for="">ご相談内容</label></p>
        <textarea name="" id="" cols="30" rows="10" v-model="writeText"></textarea>
      </div>
    </form>
    <router-link to="/">次へ</router-link>
    <button @click="$router.go(-1)">戻る</button>
  </div>
</template>

<script>
export default {
  computed: {
    writeText: {
      get() {return this.$store.state.text},
      set(value){ this.$store.dispatch('setText', value)}
    }
  }
}
</script>