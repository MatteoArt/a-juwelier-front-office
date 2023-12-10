<script>
import axios from 'axios';

export default {
    data() {
        return {
            singleWatch: {}
        }
    },
    methods: {
        fetchWatch() {
            axios.get('http://127.0.0.1:8000/api/watches/' + this.$route.params.slug)
                .then((response) => {
                    //se mi viene ritornato un oggetto non nullo
                    if (response.data.result) {
                        this.singleWatch = response.data.result
                    } else { //se non è stato trovato nulla
                        this.$router.push({ name: 'not-found' })
                    }
                })
        }
    },
    mounted() {
        this.fetchWatch();
    }
}
</script>

<template>
    <div v-if="singleWatch.brand" class="container-fluid">
        <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6">
                <h1>{{ singleWatch.brand }} {{ singleWatch.model }}</h1>
                <h3>Price: € 
                    {{ singleWatch.price ? (singleWatch.price).toFixed(2).replace('.', ',') : singleWatch.price }}
                </h3>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>