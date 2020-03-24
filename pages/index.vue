<template>
  <section class="container">
    <div>
      <logo/>
      <el-button
        @click="handleClick"
      >点我跳转</el-button>
      <div>{{ value }} {{ counter }} </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState, mapMutations } from 'vuex'
import { Message } from 'element-ui'
import { demo } from '../server/apikye/index'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState('demo', [
      'value',
      'counter'
    ]),
  },
  mounted() {
    console.log(process.env, process.env.NODE_ENV, demo.testApi, 'env');
    this.$axios({ url: demo.testApi }).then((mock) => {
      console.log(mock, 'mock')
    });
  },
  methods: {
    handleClick() {
      this.$router.push('/demo');
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
