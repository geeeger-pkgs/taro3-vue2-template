<template>
  <view class="index">
    <NumberDisplay />
    <NumberSubmit />
    <l-card
      type="primary"
      :plaintext="true"
      title="有什么笑话可以笑一辈子?"
    >
      <view class="content">
        大雄要死掉了,他对妻子说:我死之后你找一个男人我就在地下打一一个滚。
        说完就咽气了。某天妻子有事要找大雄，就去了地府问阎王找人，但是地府人那么多...
      </view>
    </l-card>
  </view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'

export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit
  }
}
</script>

<style lang="scss" scoped>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
