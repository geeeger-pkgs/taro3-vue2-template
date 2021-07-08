<template>
  <view>
    <text class="title">
      {{ getNumbers }}
    </text>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NumberDisplay',
  computed: {
    ...mapGetters('compute', ['getNumbers'])
  }
}
</script>

<style lang="scss">
.title {
  font-size: 40px;
}
</style>
