<script>
import axios from 'axios';

export default {
  data() {
    return {
      //oggetto che conterrà l'input dell'utente
      userData: {
        name: '',
        mail: '',
        message: ''
      },
      errors: { //oggetto contenente i messaggi di errore che eventualmente verranno mostrati
        nameError: '',
        mailError: '',
        messageError: '',
      }
    }
  },
  methods: {
    onFormSubmit() {
      this.validatedData();

      axios.post()
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
    }
  }
}

</script>

<template>
  <h1 class="text-center my-title">Contacts</h1>
  <div class="container mt-4 mb-3">
    <div class="row">
      <div class="col-sm-6 px-4">
        <div class="d-flex align-items-center gap-2">
          <span>
            <i class="fa-brands fa-instagram fa-xl" title="Instagram"></i>
            <span class="d-inline-block ms-2">Instagram</span>
          </span>
          <a href="https://www.instagram.com/ajuwelierluxury/?igsh=ZGNjOWZkYTE3MQ%3D%3D&utm_source=qr" target="_blank"
            class="my-link">
            @ajuwelierluxury
          </a>
        </div>
        <div class="d-flex align-items-center gap-2 mt-3">
          <span>
            <i class="fa-brands fa-tiktok fa-xl" title="TikTok"></i>
            <span class="d-inline-block ms-2">TikTok</span>
          </span>
          <a href="https://www.tiktok.com/@a.juwelier?_t=8iXKFNjt4fh&_r=1" target="_blank" class="my-link">
            @a.juwelier
          </a>
        </div>
        <div class="d-flex align-items-center gap-2 mt-3">
          <span>
            <i class="fa-brands fa-x-twitter fa-xl" title="X"></i>
            <span class="d-inline-block ms-2">X</span>
          </span>
          <a href="https://x.com/ajuwelier59583?s=11" target="_blank" class="my-link">
            @ajuwelier59583
          </a>
        </div>


      </div>
      <div class="col-sm-6">
        <p class="fs-5 my-title">For any information do not hesitate to contact us</p>
        <form action="" @submit.prevent="onFormSubmit"  class="my-title">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="userName" placeholder="name"
            v-model="userData.name">
            <label for="userName">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="userMail" placeholder="email"
            v-model="userData.mail">
            <label for="userMail">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a message here" id="userMessage" style="height: 190px;"
            v-model="userData.message"></textarea>
            <label for="userMessage">Message</label>
          </div>
          <button type="submit" class="btn btn-outline-success">Send</button>
        </form>
      </div>
    </div>

  </div>
</template>

<style scoped>
.my-link {
  text-decoration: none;
}

.my-title {
  font-family: 'Courier New', Courier, monospace;
}
</style>