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

    <div class="container-fluid">
        <div class="d-flex flex-wrap">
            <div v-for="watch in watches" class="my-flex-item">
                <WatchCard :watchData="watch"></WatchCard>
            </div>
        </div>
    </div>
</template>

<style scoped>

.my-flex-item {
    flex-basis: calc((100% / 5) - (7px * 2));
    margin: 0 7px;
}
</style>