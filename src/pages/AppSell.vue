<script>

export default {
    data() {
        return {
            watchesFieldList: [
                {
                    labelName: 'Brand',
                    options: null
                },
                {
                    labelName: 'Model',
                    options: null
                },
                {
                    labelName: 'Reference',
                    options: null
                },
                {
                    labelName: 'Movement',
                    options: null
                },
                {
                    labelName: 'Case material',
                    options: null
                },
                {
                    labelName: 'Strap/bracelet material',
                    options: null
                },
                {
                    labelName: 'Original strap/bracelet',
                    options: ['yes', 'no']
                },
                {
                    labelName: 'Original bracelet buckle/clasp',
                    options: ['yes', 'no']
                },
                {
                    labelName: 'Production year',
                    options: null
                },
                {
                    labelName: 'State of wear of the watch',
                    options: [
                        '0 (never worn)',
                        '1 (excellent)',
                        '2 (good)',
                        '3 (second-hand)',
                        '4 (mediocre)',
                        '5 (replacement parts)'
                    ]
                },
                {
                    labelName: 'Do you still have the original watch box?',
                    options: [
                        'yes',
                        'no'
                    ]
                },
                {
                    labelName: 'Do you still have the original watch warranty?',
                    options: [
                        'yes',
                        'no'
                    ]
                }
            ], //input dell'utente
            formData: {
                fullname: '',
                email: '',
                phone: '',
                city: '',
                address: '',
                informations: [],
                photo1: null,
                photo2: null,
                photo3: null,
                price: '',
                note: ''
            },
            //errori validazione dati
            errorMessages: {
                fullnameError: '',
                emailError: '',
                phoneError: '',
                cityError: '',
                addressError: '',
                informationsError: ['','','','','','','','','','','',''],
                photo1Error: '',
                photo2Error: '',
                photo3Error: '',
                priceError: '',
                noteError: ''
            }
        }
    },
    methods: {
        onFormSubmit() {
            console.log(this.formData)
            console.log(this.errorMessages)
        },
        onPhoto1Change(event) {
            //catturo l'evento di caricamento del file e accedo all'array dei file
            const files = event.target.files;

            //se è stato caricato almeno un file lo memorizzo nell'oggetto da inviare
            //al server
            if (files.length > 0) {
                this.formData.photo1 = files[0];
            } else {
                this.formData.photo1 = null;
            }

        },
        onPhoto2Change(event) {
            //catturo l'evento di caricamento del file e accedo all'array dei file
            const files = event.target.files;

            //se è stato caricato almeno un file lo memorizzo nell'oggetto da inviare
            //al server
            if (files.length > 0) {
                this.formData.photo2 = files[0];
            } else {
                this.formData.photo2 = null;
            }

        },
        onPhoto3Change(event) {
            //catturo l'evento di caricamento del file e accedo all'array dei file
            const files = event.target.files;

            //se è stato caricato almeno un file lo memorizzo nell'oggetto da inviare
            //al server
            if (files.length > 0) {
                this.formData.photo3 = files[0];
            } else {
                this.formData.photo3 = null;
            }

        },
        validatedData() {
            if (!this.formData.fullname) {

            }
        }
    }
}

</script>

<template>
    <h1 class="text-center fw-semibold mb-4">Sell your watch</h1>

    <form class="w-75 m-auto mb-3" @submit.prevent="onFormSubmit">
        <fieldset class="row g-3 mb-3">
            <legend class="col-12 m-0 fw-semibold">Personal informations</legend>
            <div class="col-md-6 mt-1">
                <label for="inputName" class="form-label fw-semibold">Full Name</label>
                <input type="text" class="form-control" id="inputName" v-model="formData.fullname">
            </div>
            <div class="col-md-6 mt-1">
                <label for="inputEmail" class="form-label fw-semibold">E-mail Address</label>
                <input type="email" class="form-control" id="inputEmail" v-model="formData.email">
            </div>
            <div class="col-md-4">
                <label for="inputPhone" class="form-label fw-semibold">Phone Number</label>
                <input type="tel" class="form-control" id="inputPhone" v-model="formData.phone">
            </div>
            <div class="col-md-4">
                <label for="inputCity" class="form-label fw-semibold">City</label>
                <input type="text" class="form-control" id="inputCity" v-model="formData.city">
            </div>
            <div class="col-md-4">
                <label for="inputAddress" class="form-label fw-semibold">Address</label>
                <input type="text" class="form-control" id="inputAddress" v-model="formData.address">
            </div>
        </fieldset>

        <fieldset class="row g-3 mb-4">
            <legend class="col-12 fw-semibold">Information about the watch</legend>
            <div v-for="(watch, i) in watchesFieldList" class="col-md-4">
                <label :for="`inputInformationWatch${i}`" class="form-label fw-semibold">{{ watch.labelName }}</label>
                <input v-if="!watch.options" type="text" class="form-control" :id="`inputInformationWatch${i}`"
                    v-model="formData.informations[i]">
                <select v-else class="form-select" :id="`inputInformationWatch${i}`" v-model="formData.informations[i]">
                    <option value="" selected>Select</option>
                    <option v-for="option in watch.options" :value="option">{{ option }}</option>
                </select>
            </div>
            <div class="row g-3 mt-4">
                <div class="col-md-4">
                    <label for="photo1" class="form-label fw-semibold">Photo 1 of your watch</label>
                    <input class="form-control" type="file" id="photo1" @change="onPhoto1Change">
                </div>
                <div class="col-md-4">
                    <label for="photo2" class="form-label fw-semibold">Photo 2 of your watch</label>
                    <input class="form-control" type="file" id="photo2" @change="onPhoto2Change">
                </div>
                <div class="col-md-4">
                    <label for="photo3" class="form-label fw-semibold">Photo 3 of your watch</label>
                    <input class="form-control" type="file" id="photo3" @change="onPhoto3Change">
                </div>
            </div>
        </fieldset>
        <div class="col-md-6">
            <label for="inputPrice" class="form-label fw-semibold">Your price</label>
            <input type="text" class="form-control" id="inputPrice" v-model="formData.price">
        </div>
        <div class="col-md-6 mt-2">
            <label for="inputNote" class="form-label fw-semibold">Note</label>
            <textarea class="form-control" id="inputNote" style="height: 150px;" v-model="formData.note"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-success mt-3">Submit</button>
    </form>
</template>

<style scoped>
* {
    font-family: 'Courier New', Courier, monospace;
}
</style>