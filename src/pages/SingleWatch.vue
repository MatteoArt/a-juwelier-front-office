<script>
import axios from 'axios';

export default {
    data() {
        return {
            singleWatch: {},
            characteristicsArr: [],
            arrImages: [],
            labelsArr: []
        }
    },
    methods: {
        fetchWatch() {
            axios.get('http://127.0.0.1:8000/api/watches/' + this.$route.params.slug)
                .then((response) => {
                    //se mi viene ritornato un oggetto non nullo
                    if (response.data.result) {
                        this.singleWatch = response.data.result
                        console.log(this.singleWatch)
                        this.getArrCharacteristics();
                        this.imgStrToArr();
                        this.getLabels();
                    } else { //se non è stato trovato nulla
                        this.$router.push({ name: 'not-found' })
                    }
                })
        },
        getArrCharacteristics() {
            //array contente tutte le caratteristiche dell'orologio a partire dalla stringa che viene ritornata
            let rawArr = this.singleWatch.characteristics.split(',');

            //pulisce ogni stringa dell'array dagli spazi bianchi all'inizio e alla fine
            for (let i = 0; i < rawArr.length; i++) {
                this.characteristicsArr.push(rawArr[i].trim());
            }

            //console.log(this.characteristicsArr)
        },
        imgStrToArr() {
            var images = JSON.parse(this.singleWatch.images);

            for (let i = 0; i < images.length; i++) {
                this.arrImages.push(images[i]);
            }
            //console.log(this.arrImages)
        },
        getLabels() {
            var labels = JSON.parse(this.singleWatch.labels)
            
            for (let i = 0; i < labels.length; i++) {
                this.labelsArr.push(labels[i]);
            }
            console.log(this.labelsArr)
        }
    },
    mounted() {
        this.fetchWatch();
    }
}
</script>

<template>
    <div v-if="singleWatch.brand" class="container-fluid mt-4">
        <div class="row">
            <div class="col-sm-6">
                <div id="carouselWatches" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <span v-for="(image, i) in arrImages">
                            <button v-if="i == 0" type="button" data-bs-target="#carouselWatches" :data-bs-slide-to="`${i}`"
                                class="active" aria-current="true" :aria-label="`Slide ${i + 1}`"></button>
                            <button v-else type="button" data-bs-target="#carouselWatches" :data-bs-slide-to="`${i}`"
                                :aria-label="`Slide ${i + 1}`"></button>
                        </span>
                    </div>
                    <div class="carousel-inner">
                        <div v-for="(image, i) in arrImages" class="carousel-item" data-bs-interval="10000"
                        :class="i==0 ? 'active' : ''">
                            <img :src="image" class="d-block w-100" :alt="`img_slider${i+1}`">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselWatches"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselWatches"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-sm-6">
                <h1>{{ singleWatch.brand }} {{ singleWatch.model }}</h1>
                <h3>{{ singleWatch.ref }}</h3>
                <h3>
                    {{ singleWatch.price ? (singleWatch.price).toFixed(2).replace('.', ',') : singleWatch.price }} €
                </h3>
                <h4 class="mt-3 d-inline-block bg-dark text-light" style="padding: 14px 18px;">Characteristics</h4>
                <div class="my-scroll-container border">
                    <table class="table">
                        <tbody>
                            <tr v-for="(charac, i) in characteristicsArr">
                                <td class="fw-semibold" :class="i == characteristicsArr.length-1 ? 'last-cells' : ''">
                                    {{ labelsArr[i] }}
                                </td>
                                <td :class="i == characteristicsArr.length-1 ? 'last-cells' : ''">
                                    {{ charac[0].toUpperCase() + charac.slice(1) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
.my-scroll-container {
    height: 245px;
    overflow: auto;
}
.carousel .carousel-indicators button {
   width: 10px;
   height: 10px;
   border-radius: 100%;
 }

 #carouselWatches .carousel-item img {  
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  height: 65vh;
}

table.table {
    position: sticky;
    top: 0;
}

table.table td {
    padding: 18px;
}

table.table td.last-cells {
    border-bottom: 0;
}
</style>