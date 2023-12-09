<script>

import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  }
}
</script>

<template>
      <TheHeader></TheHeader>

      <main>
        <router-view></router-view>
      </main>
</template>

<style>

</style>
