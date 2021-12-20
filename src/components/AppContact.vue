<template>
  <section class="contact" id="contact">
      <h1 class="heading">{{ appContactTitle }}</h1>
      <div class="box-container">
        <div class="box">
          <form @submit.prevent="appFormAction" class="form-control">
            <div class="test">
              <div class="radcontact">
                <input type="radio" name="radcontact" id="atendimento" checked>
                <label for="atendimento">Atendimento</label>
                <input type="radio" name="radcontact" id="conosco">
                <label for="conosco">Trabalhe conosco</label>
              </div>
            </div>
            <div class="form-item">
                <label for="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Infome o seu nome" v-model="name">
            </div>
            <div class="form-item">
                <label for="phone">Telefone</label>
                <input type="tel" name="phone" id="phone" placeholder="Infome o seu telefone" v-model="phone">
            </div>
            <div class="form-item">
                <label for="cargo">Cargo desejado</label>
                <select class="form-select" aria-label="Default select example" name="cargo" id="cargo" v-model="cargo">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div>
            <div class="form-item">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Infome o seu e-mail" v-model="email">
            </div>
            <div class="form-item">
                <label for="description">Observação</label>
                <textarea name="description" id="description" v-model="description"></textarea>
            </div>
            <div class="form-item">
                <label for="file">Anexo</label>
                <input type="file" name="arquivo" id="arquivo" class="arquivo">
            </div>
            <div class="form-item">
                <button type="submit" class="btn btn-primary-outline">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AppContact',
  data() {
    return {
      name:"",
      phone:"",
      cargo: "",
      email:"",
      description:""
    };
  },
  computed: {
    ...mapState([
      'appContactTitle'
    ])
  },
    methods: {
        appFormAction() {
            try {
                if (!this.name) {
                    throw new Error('Favor informar o seu nome!')
                }
                if (!this.phone) {
                    throw new Error('Favor informar o seu telefone!')
                }
                if (!this.cargo) {
                    throw new Error('Favor informar o cargo desejado!')
                }
                if (!this.email) {
                    throw new Error('Favor informar o seu e-mail!')
                }
                this.$store.dispatch('sendFormSubmition', {
                    name: this.name,
                    phone: this.phone,
                    cargo: this.cargo,
                    email: this.email,
                    description: this.description
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<style scoped>
  .contact {
    background: -webkit-gradient(
      linear,
      left top,
      from(rgba(0, 0, 0, 0.3)),
      to(rgba(0, 0, 0, 0.3))
    ),
    url(../assets/Img/Contact/pexels-olia-danilevich-5313361.jpg) no-repeat;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(../assets/Img/Contact/pexels-olia-danilevich-5313361.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .contact .heading{
    color: var(--white);
  }
  .contact .box-container .box {
    display: flex;
    justify-content: center;
  }
  .contact .box-container .box .form-control .test {
    top: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 9%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: center;
    align-items: center;
  }
  .contact .box-container .box .form-control .test .radcontact{
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: center;
    align-items: center;
  }
  .contact .box-container .box .form-control .test .radcontact label{
    font-size: 1.7rem;
    color: var(--white);
    margin-left: 0.5rem;
    margin-right: 2rem;
  }
  .contact .box-container .box .form-control .test .radcontact input[type='radio']{
    width: 1.5rem;
    height: 1.5rem;
  }
  .contact .box-container .box .form-control {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 50%;
    justify-content: space-between;
    align-items: stretch;
    box-shadow: 1px 3px 8px #292929;
    background-color: var(--font-color-hover);
    border-radius: 15px;
  }
  .contact .box-container .box .form-control .form-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2px 5px;
    margin: 5px 0px;
  }
  .contact .box-container .box .form-control .form-item label {
    color:var(--white);
    font-size: 15px;
    margin-bottom: 3px;

  }
  .contact .box-container .box .form-control .form-item input,
  .contact .box-container .box .form-control .form-item select {
    height: 45px;
  }
  .contact .box-container .box .form-control .form-item textarea {
    height: 200px;
    resize: none;
  }
  .contact .box-container .box .form-control .form-item input,
  .contact .box-container .box .form-control .form-item select,
  .contact .box-container .box .form-control .form-item textarea {
    text-align: left;
    padding: 5px 10px;
    font-size: 10pt;
    width: 100%;
    margin: 0px auto;
    background-color: var(--white);
    color: var(--black);
    border-radius: 15px;
  }
  .contact .box-container .box .form-control .form-item input:focus,
  .contact .box-container .box .form-control .form-item select:focus,
  .contact .box-container .box .form-control .form-item textarea:focus {
    border: 2px solid var(--black);
  }
  .contact .box-container .box .form-control .form-item .arquivo {
    padding: 1.23rem;
    font-size: 13px;
  }
  .contact .box-container .box .form-control .form-item .btn-primary-outline {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    width: 100%;
  }
  .contact .box-container .box .form-control .form-item .btn-primary-outline:hover {
    color: var(--white);
    border-color: var(--white);
    background-color: var(--black);
  }
  
@media (max-width: 768px) {
  .contact .box-container .box .form-control {
    width: 100%;
  }
  .contact .box-container .box .form-control .form-item .arquivo {
    padding: 1.2rem;
    font-size: 15px;
  }
}
</style>