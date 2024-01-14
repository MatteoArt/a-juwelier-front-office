<script>
import axios from 'axios';
import WatchCard from '../components/WatchCard.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
    components: {
        WatchCard,
        TheFooter,
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

        },
        resetInput() {
            this.searchForm = '';
            this.fetchData();
        }
    },
    mounted() {
        this.fetchData();
    }
}

</script>

<template>
    <h1 class="text-center my-title fw-semibold">Watches</h1>

    <div class="container-fluid mb-5">
        <form action="" class="my-5 my-form" @submit.prevent="fetchData">
            <div class="input-group position-relative">
                <input type="text" class="form-control rounded-start-4 my-title my-input" id="form-search"
                    placeholder="Search for brand/model/ref" v-model="searchForm">
                <button type="button" class="reset-button text-body-tertiary" @click="resetInput">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button type="submit" class="btn btn-outline-dark rounded-end-4 px-sm-3 my-button">
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
    <TheFooter v-if="loadingData"></TheFooter>
</template>

<style scoped>
.my-title {
    font-family: 'Courier New', Courier, monospace;
}

.reset-button {
    background-color: transparent;
    position: absolute;
    top: 15%;
    border: 0;
    z-index: 10;
    display: none;
}

.my-form {
    width: 99%;
}

.my-flex-item {
    flex-basis: calc((100%) - (7px * 2));
    margin: 0 7px;
}

.form-control:focus {
    border-color: black;
    box-shadow: 0 0 0 0.15rem rgba(25, 25, 25, 0.63);
}



#form-search:hover+.reset-button,
.reset-button:hover,
#form-search:focus+.reset-button {
    display: block;
}

@media screen and (max-width: 375px) {
    .my-input {
        flex-basis: 100%;
        border-top-right-radius: 1rem !important;
        border-bottom-right-radius: 1rem !important;
    }

    .my-button {
        border-radius: 0.7rem !important;
        margin-top: 7px;
    }

    .reset-button {
        background-color: transparent;
        position: absolute;
        top: 7%;
        right: 3%;
        border: 0;
        z-index: 10;
        display: none;
    }
}

@media screen and (min-width: 375px) {
    .my-flex-item {
        flex-basis: calc((100% / 2) - (7px * 2));
        margin: 0 7px;
        max-width: 252px;
        overflow: hidden;
    }

    .reset-button {
        right: 13%;
    }
}

@media screen and (min-width: 500px) {
    .my-flex-item {
        flex-basis: calc((100% / 2) - (7px * 2));
        margin: 0 7px;
    }

    .reset-button {
        right: 11%;
    }
}

@media screen and (min-width: 576px) {
    .my-flex-item {
        flex-basis: calc((100% / 3) - (7px * 2));
        margin: 0 7px;
    }

    .reset-button {
        right: 10%;
    }
}

@media screen and (min-width: 700px) {
    .reset-button {
        right: 8%;
    }
}

@media screen and (min-width: 768px) {
    .my-flex-item {
        flex-basis: calc((100% / 4) - (7px * 2));
        margin: 0 7px;
    }


}

@media screen and (min-width: 815px) {
    .my-form {
        width: 75%;
    }

    .reset-button {
        right: 9%;
    }
}

@media screen and (min-width: 992px) {
    .my-flex-item {
        flex-basis: calc((100% / 5) - (7px * 2));
        margin: 0 7px;
    }

    .reset-button {
        right: 12%;
    }

    .my-form {
        width: 50%;
    }
}

@media screen and (min-width: 1080px) {
    .reset-button {
        right: 11%;
    }
}

@media screen and (min-width: 1200px) {
    .reset-button {
        right: 10%;
    }
}
</style>