<script>

export default {

}

</script>

<template>
    <div class="container-fluid my-jumbo">
    </div>
    <h1 class="text-center my-title">Welcome</h1>

    <div class="text-center my-3">
        <router-link :to="{ name: 'watches' }" class="btn btn-outline-info btn-lg">
            Discover <i class="fa-solid fa-arrow-pointer"></i>
        </router-link>
    </div>
</template>

<style scoped>

.my-title {
    font-family: 'Courier New', Courier, monospace;
}
.my-jumbo {
    background-image: url('../assets/background.webp');
    background-size: cover;
    background-position-y: center;
    height: 450px;
}
</style>