<script>

export default {
    props: {
        watchData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        getImagePath() {
            const images = JSON.parse(this.watchData.images);
            return `http://127.0.0.1:8000/storage/${images[0]}`;
        }
    }
}

</script>

<template>
    <div class="card h-100 border-0">
        <router-link :to="{ name: 'single-watch', params: { slug: watchData.slug } }">
            <div class="my-img-container">
                <img :src="getImagePath()" class="card-img-top" :alt="watchData.model">
            </div>
        </router-link>

        <div class="card-body text-center d-flex flex-column my-title">
            <h5 class="card-title text-uppercase fw-semibold my-title-watch notranslate">{{ watchData.brand }}</h5>
            <router-link :to="{ name: 'single-watch', params: { slug: watchData.slug } }"
                class="text-decoration-none text-uppercase text-body-secondary">
                <h6 class="card-subtitle mb-2 fw-medium notranslate">{{ watchData.model }}</h6>
            </router-link>
            <p class="card-text">
            <div class="mb-1">Reference: {{ watchData.ref }}</div>
            <span class="price">{{ (watchData.price).toFixed(2).replace('.', ',') }} €</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.my-img-container {
    height: 252px;
    overflow: hidden;
}

.text-decoration-none.text-uppercase.text-body-secondary:hover h6 {
    color: rgb(60, 60, 60);
}

.my-title {
    font-family: 'Courier New', Courier, monospace;
}

.my-title-watch {
    font-size: 1.1rem;
}

span.price {
    opacity: 0;
    transition: opacity 0.7s;
}

.card:hover span.price {
    opacity: 1;
}

@media screen and (min-width: 576px) {
    .my-img-container {
        height: 170.333px;
        overflow: hidden;
    }
}

@media screen and (min-width: 768px) {
    .my-img-container {
        height: 172.25px;
        overflow: hidden;
    }
}

@media screen and (min-width: 867px) {
    .my-img-container {
        height: 194.25px;
        overflow: hidden;
    }
}

@media screen and (min-width: 992px) {
    .my-img-container {
        height: 179.6px;
        overflow: hidden;
    }
}

@media screen and (min-width: 1100px) {
    .my-img-container {
        height: 200px;
        overflow: hidden;
    }
}

@media screen and (min-width: 1200px) {
    .my-img-container {
        height: 220px;
        overflow: hidden;
    }
}

@media screen and (min-width: 1300px) {
    .my-img-container {
        height: 240px;
        overflow: hidden;
    }
}
</style>