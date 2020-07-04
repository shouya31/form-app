<template>
  <div>
    <div>
      <p>-性別</p>
      <p>{{ gender }}</p>
    </div>
    <div>
      <p>-生年月日</p>
      <p>{{ date }}</p>
    </div>
    <div>
      <p>-現在生命保険に加入されていますか?</p>
      <p>{{ question1 }}</p>
    </div>
    <div>
      <p>-現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院や手術を勧められたことはありますか？</p>
      <p>{{ question2 }}</p>
    </div>
    <div>
      <p>-過去５年以内に、病気や怪我で、手術を受けたこと、または継続して7日以上の入院をしたことがありますか？</p>
      <p>{{ question3 }}</p>
    </div>
    <div>
      <p>-ご相談内容</p>
      <p>{{ writeText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gender: function(){
      return this.$store.getters.gender
    },
    date: function(){
      return this.$store.getters.date
    },
    question1: function(){
      return this.$store.getters.question1
    },

    question2: function(){
      return this.$store.getters.question2
    },
    question3: function(){
      return this.$store.getters.question3
    },
    writeText: function(){
      return this.$store.getters.text
    },
  }
}
</script>