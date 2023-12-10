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
            arrImages: []
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        convertToArr() {
            var images = JSON.parse(this.watchData.images);
            for (let i = 0; i < images.length; i++) {
                this.arrImages.push(images[i]);
            }
        }
    },
    mounted() {
        this.convertToArr();
    }
}

</script>

<template>
    <div class="card h-100">
        <div class="my-img-container">
            <img :src="arrImages[0]" class="card-img-top" :alt="watchData.model">
        </div>
        <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title">{{ watchData.brand }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ watchData.model }}</h6>
            <p class="card-text">
                <div class="mb-1">Ref. {{ watchData.ref }}</div>
                <span>€ {{ (watchData.price).toFixed(2).replace('.', ',') }}</span>
            </p>
            <div class="mt-auto">
                <router-link :to="{ name: 'single-watch', params: { slug: watchData.slug } }" class="btn btn-outline-info">
                    <i class="fa-solid fa-eye"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

.my-img-container {
    height: 252px;
    overflow: hidden;
}
</style>