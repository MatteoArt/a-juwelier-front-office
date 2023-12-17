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
            return `http://127.0.0.1:8000/storage/${img}`;
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
    <div class="card h-100 border-0">
        <router-link :to="{ name: 'single-watch', params: { slug: watchData.slug } }">
            <div class="my-img-container">
                <img :src="getImagePath(arrImages[0])" class="card-img-top" :alt="watchData.model">
            </div>
        </router-link>

        <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title text-uppercase fw-semibold my-title-watch">{{ watchData.brand }}</h5>
            <router-link :to="{ name: 'single-watch', params: { slug: watchData.slug } }"
            class="text-decoration-none text-uppercase text-body-secondary">
                <h6 class="card-subtitle mb-2 fw-medium">{{ watchData.model }}</h6>
            </router-link>
            <p class="card-text">
            <div class="mb-1">REF. {{ watchData.ref }}</div>
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
</style>