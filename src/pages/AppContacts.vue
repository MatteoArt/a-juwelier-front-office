<script>
import axios from 'axios';

import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheFooter,
  },
  data() {
    return {
      //oggetto che conterrà l'input dell'utente
      userData: {
        name: '',
        email: '',
        message: '',
      },
      errors: { //oggetto contenente i messaggi di errore che eventualmente verranno mostrati
        nameError: '',
        emailError: '',
        messageError: '',
      },
      errorResponse: null,
      messageSuccess: null,
      loading: false, //caricamento
    }
  },
  methods: {
    onFormSubmit() {
      this.messageSuccess = null;
      this.errorResponse = null;
      this.validatedData();

      if (this.errors.nameError == '' && this.errors.emailError == '' && this.errors.messageError == '') {
        this.loading = true;
        axios.post('https://private.ajuwelier.de/api/contacts', this.userData,
          {
            headers: { 'Content-Type': 'application/json' }
          }).then((response) => {
            this.messageSuccess = response.data.response;
          }).catch((e) => {
            this.errorResponse = e.message;
          })
          .finally(() => {
            this.loading = false;
          });
      } else { //se fallisce la validazione fermo la funzione
        return;
      }
    },
    validatedData() {
      if (!this.userData.name) {
        this.errors.nameError = 'The name field is required';
      } else if (!isNaN(this.userData.name) || (/[0-9]/.test(this.userData.name))) { //se è un numero o contiene un numero
        this.errors.nameError = 'Please enter a valid name';
      } else if (this.userData.name.length < 3) {
        this.errors.nameError = 'The name must contain at least 3 letters';
      } else {
        this.errors.nameError = '';
      }

      if (!this.userData.email) {
        this.errors.emailError = 'The email field is required';
      } else if (!isNaN(this.userData.email)) {
        this.errors.emailError = 'Please enter a valid email';
      } else if (this.userData.email.length < 7) {
        this.errors.emailError = 'The email must contain at least 7 characters';
      } else {
        this.errors.emailError = '';
      }

      if (this.userData.message && this.userData.message.length < 30) {
        this.errors.messageError = 'The message must contain at least 30 characters';
      } else if (this.userData.message && !isNaN(this.userData.message)) {
        this.errors.messageError = 'Please enter a valid message';
      } else {
        this.errors.messageError = '';
      }
    }
  }
}

</script>

<template>
  <h1 class="text-sm-center my-padding my-title fw-semibold mb-3">Contacts</h1>
  <div class="container-lg mt-4" style="margin-bottom: 230px;">
    <div class="row">
      <div class="col-md-6 px-md-4">
        <div class="d-flex align-items-center gap-2">
          <span>
            <i class="fa-brands fa-instagram fa-xl" title="Instagram"></i>
            <span class="d-inline-block ms-2 my-title notranslate">Instagram</span>
          </span>
          <a href="https://www.instagram.com/ajuwelierluxury/?igsh=ZGNjOWZkYTE3MQ%3D%3D&utm_source=qr" target="_blank"
            class="my-link my-title">
            @ajuwelierluxury
          </a>
        </div>
        <div class="d-flex align-items-center gap-2 mt-3">
          <span>
            <i class="fa-brands fa-tiktok fa-xl" title="TikTok"></i>
            <span class="d-inline-block ms-2 my-title notranslate">TikTok</span>
          </span>
          <a href="https://www.tiktok.com/@a.juwelier?_t=8iXKFNjt4fh&_r=1" target="_blank" class="my-link my-title">
            @a.juwelier
          </a>
        </div>
        <div class="d-flex align-items-center gap-2 mt-3">
          <span>
            <i class="fa-brands fa-x-twitter fa-xl" title="X"></i>
            <span class="d-inline-block ms-2 my-title notranslate">X</span>
          </span>
          <a href="https://x.com/ajuwelier59583?s=11" target="_blank" class="my-link my-title">
            @ajuwelier59583
          </a>
        </div>
        <div class="d-flex align-items-center gap-2 mt-5">
          <i class="fa-solid fa-location-dot fa-xl"></i>
          <span class="my-title">Berghaselbach 85395, Wolfersdorf</span>
        </div>
        <div class="d-flex align-items-center gap-2 mt-4 mb-4 mb-md-0">
          <i class="fa-solid fa-envelope fa-xl"></i>
          <span class="my-title">a.juwelier.luxury@gmail.com</span>
        </div>


      </div>
      <div class="col-md-6">
        <p class="contact-text my-title mt-3 mt-md-0">For any information do not hesitate to contact us</p>
        <form action="" @submit.prevent="onFormSubmit" class="my-title mb-3">
          <div class="form-floating" :class="errors.nameError ? 'is-invalid' : ''"
            v-bind:class="!errors.nameError ? 'mb-3' : ''">
            <input type="text" class="form-control" id="userName" placeholder="name" v-model="userData.name"
              :class="errors.nameError ? 'is-invalid' : ''">
            <label for="userName">Name</label>
          </div>
          <div v-if="errors.nameError" class="invalid-feedback mb-3">
            {{ errors.nameError }}
          </div>
          <div class="form-floating" :class="errors.emailError ? 'is-invalid' : ''"
            v-bind:class="!errors.emailError ? 'mb-3' : ''">
            <input type="email" class="form-control" id="userMail" placeholder="email" v-model="userData.email"
              :class="errors.emailError ? 'is-invalid' : ''">
            <label for="userMail">Email address</label>
          </div>
          <div v-if="errors.emailError" class="invalid-feedback mb-3">
            {{ errors.emailError }}
          </div>
          <div class="form-floating" :class="errors.messageError ? 'is-invalid' : ''"
            v-bind:class="!errors.messageError ? 'mb-3' : ''">
            <textarea class="form-control" placeholder="Leave a message here" id="userMessage" style="height: 190px;"
              v-model="userData.message" :class="errors.messageError ? 'is-invalid' : ''"></textarea>
            <label for="userMessage">Message</label>
          </div>
          <div v-if="errors.messageError" class="invalid-feedback mb-3">
            {{ errors.messageError }}
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
        <div v-if="loading" class="spinner-border text-secondary" role="status">
          <span class="visually-hidden"></span>
        </div>
        <div v-if="messageSuccess" class="alert alert-success" role="alert">
          <span class="d-inline-block me-2"><i class="fa-solid fa-circle-check"></i></span> {{ messageSuccess }}
        </div>
        <div v-if="errorResponse" class="alert alert-danger d-flex align-items-center gap-2" role="alert">
          <div><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div>Error in processing request: {{ errorResponse }}</div>
        </div>
      </div>
    </div>

  </div>
  <TheFooter></TheFooter>
</template>

<style scoped>
.my-link {
  text-decoration: none;
}

.my-padding {
  padding-left: 12px;
}
.contact-text {
  font-size: 1rem;
}

.my-title {
  font-family: 'Courier New', Courier, monospace;
}

@media screen and (min-width: 576px) {
  .my-padding {
    padding-left: 0;
  }
}

@media screen and (min-width: 992px) {
  .contact-text {
    font-size: 1.25rem;
  }
}
</style>