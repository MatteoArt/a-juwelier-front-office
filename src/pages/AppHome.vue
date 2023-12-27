<script>

export default {

}

</script>

<template>
    <div class="container-fluid my-jumbo">
    </div>
    <div class="wrapper">
        <h1 class="text-center my-title">Welcome</h1>

        <div class="text-center">
            <img src="../assets/a-juwelier.jpg" class="img-fluid" alt="a juwelier">
        </div>

        <div class="text-center mt-3">
            <router-link :to="{ name: 'watches' }" class="btn btn-outline-info btn-lg">
                Discover <i class="fa-solid fa-arrow-pointer"></i>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: #F4F3EF;
    padding: 30px 0;
}
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