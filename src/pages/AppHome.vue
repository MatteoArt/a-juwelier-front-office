<script>
import TheFooter from '../components/TheFooter.vue';

export default {
    components: {
        TheFooter,
    }
}

</script>

<template>
    <div class="container-fluid my-jumbo">
    </div>
    <div class="wrapper">
        <h1 class="text-center my-title fw-semibold">Welcome</h1>

        <div class="text-center">
            <img src="../assets/a-juwelier.jpg" class="img-fluid" alt="a juwelier">
        </div>

        <div class="text-center mt-3">
            <router-link :to="{ name: 'watches' }" class="btn btn-outline-info btn-lg">
                <span class="my-title">Discover</span> <i class="fa-solid fa-arrow-pointer"></i>
            </router-link>
        </div>
    </div>
    <TheFooter></TheFooter>
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
    background-image: url('../assets/background.jpeg');
    background-size: cover;
    background-position: center;
    height: 450px;
}
</style>