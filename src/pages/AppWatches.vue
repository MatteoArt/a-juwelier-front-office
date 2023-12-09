<script>
import axios from 'axios';
import WatchCard from '../components/WatchCard.vue';

export default {
    components: {
        WatchCard,
    },
    data() {
        return {
            watches: []
        }
    },
    methods: {
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/watches')
            .then((response) => {
                let ris = response.data.results;

                this.watches = ris;
            })
        }
    },
    mounted() {
        this.fetchData();
    }
}

</script>

<template>
    <h1 class="text-center">Watches</h1>

    <div class="container">
        <div class="row">
            <div v-for="watch in watches" class="col-md-3">
                <WatchCard :watchData="watch"></WatchCard>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>