<script>
import axios from 'axios';

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
                informations: ['', '', '', '', '', '', '', '', '', '', '', ''],
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
                informationsError: ['', '', '', '', '', '', '', '', '', '', '', ''],
                photo1Error: '',
                photo2Error: '',
                photo3Error: '',
                priceError: '',
                noteError: ''
            },
            errorResponse: null,
            messageSuccess: null,
            loading: false,
        }
    },
    methods: {
        onFormSubmit() {
            this.messageSuccess = null;
            this.errorResponse = null;
            this.validatedData();

            var validation = true;
            for (let key in this.errorMessages) {
                if (key == 'informationsError') {
                    for (let i = 0; i < this.errorMessages[key].length; i++) {
                        if (this.errorMessages[key][i]) {
                            validation = false;
                        }
                    }
                } else {
                    if (this.errorMessages[key]) {
                        validation = false;
                    }
                }
            } //se non ci sono errori la validazione rimane a true e parte l'invio dei dati al server

            if (validation) {
                this.loading = true;

                axios.post('http://127.0.0.1:8000/api/proposals', this.formData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    }).then((response) => {
                        this.messageSuccess = response.data.response;
                    }).catch((e) => {
                        this.errorResponse = e.message;
                    }).finally(() => {
                        this.loading = false;
                    })
            } else {
                return;
            }

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
                this.errorMessages.fullnameError = 'The full name field is required';
            } else if (!isNaN(this.formData.fullname) || (/[0-9]/.test(this.formData.fullname))) { //se è un numero o contiene un numero
                this.errorMessages.fullnameError = 'Please enter a valid name';
            } else if (this.formData.fullname.length < 3) {
                this.errorMessages.fullnameError = 'The name must contain at least 3 letters';
            } else {
                this.errorMessages.fullnameError = '';
            }

            if (!this.formData.email) {
                this.errorMessages.emailError = 'The email field is required';
            } else if (!isNaN(this.formData.email)) {
                this.errorMessages.emailError = 'Please enter a valid email';
            } else if (this.formData.email.length < 7) {
                this.errorMessages.emailError = 'The email must contain at least 7 characters';
            } else {
                this.errorMessages.emailError = '';
            }

            if (!this.formData.phone) {
                this.errorMessages.phoneError = 'The phone field is required';
            } else if (!/^[\d ]*$/.test(this.formData.phone)) {
                this.errorMessages.phoneError = 'Please enter a valid phone number';
            } else if (this.formData.phone.length < 3) {
                this.errorMessages.phoneError = 'The phone number must contain at least 3 digits';
            } else {
                this.errorMessages.phoneError = '';
            }

            if (this.formData.city && this.formData.city.length < 3) {
                this.errorMessages.cityError = 'The city must contain at least 3 letters';
            } else if (this.formData.city && (!isNaN(this.formData.city) || (/[0-9]/.test(this.formData.city)))) { //se è un numero o contiene un numero
                this.errorMessages.cityError = 'Please enter a valid city';
            } else {
                this.errorMessages.cityError = '';
            }

            if (this.formData.address && this.formData.address.length < 5) {
                this.errorMessages.addressError = 'The address must contain at least 5 characters';
            } else if (this.formData.address && !isNaN(this.formData.address)) {
                this.errorMessages.addressError = 'Please enter a valid address';
            } else {
                this.errorMessages.addressError = '';
            }

            for (let i = 0; i < this.errorMessages.informationsError.length; i++) {
                if (this.formData.informations[i] && this.formData.informations[i].length < 2) {
                    this.errorMessages.informationsError[i] = 'The field must contain at least 2 characters';
                } else {
                    this.errorMessages.informationsError[i] = '';
                }
            }

            if (!this.formData.photo1) {
                this.errorMessages.photo1Error = 'The field is required';
            } else if (!this.formData.photo1.type.startsWith('image/')) {
                this.errorMessages.photo1Error = 'Sorry, you can only upload image files';
            } else {
                this.errorMessages.photo1Error = '';
            }

            if (this.formData.photo2 && !this.formData.photo2.type.startsWith('image/')) {
                this.errorMessages.photo2Error = 'Sorry, you can only upload image files';
            } else {
                this.errorMessages.photo2Error = '';
            }

            if (this.formData.photo3 && !this.formData.photo3.type.startsWith('image/')) {
                this.errorMessages.photo3Error = 'Sorry, you can only upload image files';
            } else {
                this.errorMessages.photo3Error = '';
            }

            if (!this.formData.price) {
                this.errorMessages.priceError = 'The field is required';
            } else if (!/[0-9]/.test(this.formData.price)) {
                this.errorMessages.priceError = 'Please enter a valid price';
            } else {
                this.errorMessages.priceError = '';
            }

            if (this.formData.note && this.formData.note.length < 10) {
                this.errorMessages.noteError = 'The message must contain at least 10 characters';
            } else if (this.formData.note && !isNaN(this.formData.note)) {
                this.errorMessages.noteError = 'Please enter a valid message';
            } else {
                this.errorMessages.noteError = '';
            }
        }
    }
}

</script>

<template>
    <div class="container-fluid pb-3">
        <h1 class="text-md-center fw-semibold mb-4 my-title">Sell your watch</h1>

        <form class="mb-3 my-title my-form" @submit.prevent="onFormSubmit">
            <fieldset class="row g-3 mb-3">
                <legend class="col-12 m-0 fw-semibold">Personal informations</legend>
                <div class="col-md-6 mt-1">
                    <label for="inputName" class="form-label fw-semibold">Full Name</label>
                    <input type="text" class="form-control" id="inputName" v-model="formData.fullname"
                        :class="errorMessages.fullnameError ? 'is-invalid' : ''">
                    <div v-if="errorMessages.fullnameError" class="invalid-feedback">
                        {{ errorMessages.fullnameError }}
                    </div>
                </div>
                <div class="col-md-6 mt-1">
                    <label for="inputEmail" class="form-label fw-semibold">E-mail Address</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="formData.email"
                        :class="errorMessages.emailError ? 'is-invalid' : ''">
                    <div v-if="errorMessages.emailError" class="invalid-feedback">
                        {{ errorMessages.emailError }}
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="inputPhone" class="form-label fw-semibold">Phone Number</label>
                    <input type="tel" class="form-control" id="inputPhone" v-model="formData.phone"
                        :class="errorMessages.phoneError ? 'is-invalid' : ''">
                    <div v-if="errorMessages.phoneError" class="invalid-feedback">
                        {{ errorMessages.phoneError }}
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="inputCity" class="form-label fw-semibold">City</label>
                    <input type="text" class="form-control" id="inputCity" v-model="formData.city"
                        :class="errorMessages.cityError ? 'is-invalid' : ''">
                    <div v-if="errorMessages.cityError" class="invalid-feedback">
                        {{ errorMessages.cityError }}
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label fw-semibold">Address</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="formData.address"
                        :class="errorMessages.addressError ? 'is-invalid' : ''">
                    <div v-if="errorMessages.addressError" class="invalid-feedback">
                        {{ errorMessages.addressError }}
                    </div>
                </div>
            </fieldset>

            <fieldset class="row g-3 mb-4">
                <legend class="col-12 fw-semibold">Information about the watch</legend>
                <div v-for="(watch, i) in watchesFieldList" class="col-md-4">
                    <label :for="`inputInformationWatch${i}`" class="form-label fw-semibold">{{ watch.labelName }}</label>
                    <input v-if="!watch.options" type="text" class="form-control" :id="`inputInformationWatch${i}`"
                        v-model="formData.informations[i]" :class="errorMessages.informationsError[i] ? 'is-invalid' : ''">
                    <select v-else class="form-select" :id="`inputInformationWatch${i}`" v-model="formData.informations[i]"
                        :class="errorMessages.informationsError[i] ? 'is-invalid' : ''">
                        <option value="" selected>Select</option>
                        <option v-for="option in watch.options" :value="option">{{ option }}</option>
                    </select>
                    <div v-if="errorMessages.informationsError[i]" class="invalid-feedback">
                        {{ errorMessages.informationsError[i] }}
                    </div>
                </div>
                <div class="row g-3 mt-4">
                    <div class="col-md-4">
                        <label for="photo1" class="form-label fw-semibold">Photo 1 of your watch</label>
                        <input class="form-control" type="file" id="photo1" accept="image/*" @change="onPhoto1Change"
                            :class="errorMessages.photo1Error ? 'is-invalid ' : ''">
                        <div v-if="errorMessages.photo1Error" class="invalid-feedback">
                            {{ errorMessages.photo1Error }}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="photo2" class="form-label fw-semibold">Photo 2 of your watch</label>
                        <input class="form-control" type="file" id="photo2" accept="image/*" @change="onPhoto2Change"
                            :class="errorMessages.photo2Error ? 'is-invalid' : ''">
                        <div v-if="errorMessages.photo2Error" class="invalid-feedback">
                            {{ errorMessages.photo2Error }}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="photo3" class="form-label fw-semibold">Photo 3 of your watch</label>
                        <input class="form-control" type="file" id="photo3" accept="image/*" @change="onPhoto3Change"
                            :class="errorMessages.photo3Error ? 'is-invalid' : ''">
                        <div v-if="errorMessages.photo3Error" class="invalid-feedback">
                            {{ errorMessages.photo3Error }}
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="col-md-6">
                <label for="inputPrice" class="form-label fw-semibold">Your price</label>
                <input type="text" class="form-control" id="inputPrice" v-model="formData.price"
                    :class="errorMessages.priceError ? 'is-invalid' : ''">
                <div v-if="errorMessages.priceError" class="invalid-feedback">
                    {{ errorMessages.priceError }}
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <label for="inputNote" class="form-label fw-semibold">Note</label>
                <textarea class="form-control" id="inputNote" style="height: 150px;" v-model="formData.note"
                    :class="errorMessages.noteError ? 'is-invalid' : ''"></textarea>
                <div v-if="errorMessages.noteError" class="invalid-feedback">
                    {{ errorMessages.noteError }}
                </div>
            </div>
            <div class="mt-3 mb-3">
                <button type="submit" class="btn btn-outline-success">Submit</button>
            </div>
            <div v-if="loading" class="spinner-border text-secondary" role="status">
                <span class="visually-hidden"></span>
            </div>
            <div v-if="messageSuccess" class="alert alert-success w-50 d-flex align-items-center gap-4" role="alert">
                <div><i class="fa-solid fa-circle-check"></i></div>
                <div>{{ messageSuccess }}</div>
            </div>
            <div v-if="errorResponse" class="alert alert-danger w-50 d-flex align-items-center gap-4" role="alert">
                <div><i class="fa-solid fa-triangle-exclamation"></i></div>
                <div>Error in processing request: {{ errorResponse }}</div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.my-title {
    font-family: 'Courier New', Courier, monospace;
}

@media screen and (min-width: 768px) {
    .my-form {
        width: 75%;
        margin: auto;
    }
}
</style>