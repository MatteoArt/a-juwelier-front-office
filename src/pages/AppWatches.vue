<script>
import axios from 'axios';
import WatchCard from '../components/WatchCard.vue';

export default {
    components: {
        WatchCard,
    },
    data() {
        return {
            watches: [],
            searchForm: '',
            loadingData: false, //indica se i dati sono stati scaricati dal server
        }
    },
    methods: {
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/watches', {
                params: { searchWatch: this.searchForm }
            })
            .then((response) => {
                let ris = response.data.results;

                this.watches = ris;
                console.log(this.watches);
            })
            .finally(() => {
                this.loadingData = true;
            });

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
        <form action="" class="w-50 my-5" @submit.prevent="fetchData">
            <div class="input-group">
                <input type="text" class="form-control rounded-start-4" placeholder="Search for brand/model/ref"
                v-model="searchForm">
                <button type="submit" class="btn btn-outline-dark rounded-end-4 px-3">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
        <div class="d-flex flex-wrap" :class="watches.length === 0 && loadingData ? 'justify-content-center' : ''">
            <div v-if="watches.length === 0 && loadingData" style="width: 140px;">
                <img src="../assets/not found.png" class="img-fluid" alt="not found">
                <p class="fw-semibold mt-2">Sorry, your search returned no results</p>
            </div>
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
.form-control:focus {
    border-color: black;
    box-shadow:  0 0 0 0.15rem rgba(25, 25, 25, 0.63);
}
</style>