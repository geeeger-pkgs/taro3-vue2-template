<template>
  <view>
    <input
      v-model="number"
      type="number"
      class="input"
    >
    <button @tap="addNumber(Number(number))">
      Add new number
    </button>

    <image
      v-if="Boolean(cat)"
      :src="cat"
      mode="aspectFit"
      class="w-1_2 h-300px"
    />
  </view>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NumberSubmit',
  data() {
    return {
      number: 0
    }
  },

  computed: {
    ...mapState('compute', ['cat'])
  },

  created() {
    this.fetchCat()
  },

  methods: {
    ...mapActions('compute', ['addNumber', 'fetchCat'])
  }
}
</script>

<style lang="scss">
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
