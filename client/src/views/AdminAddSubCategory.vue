<template>
  <div class="container mt-4">
    <div class="col-sm-4 mx-auto">
      <h2 class="reg-title">Додати підкатегорію</h2>
      <form @submit.prevent="userRegister" novalidate>
        <div v-if="regMessage" class="alert alert-success" role="alert">
          Ви успішно додали підкатегорію!
        </div>
        <div class="form-group">
          <label for="image">Фотографія</label>

          <input
            @blur="$v.formReg.image.$touch()"
            :class="status($v.formReg.image)"
            v-model.trim="formReg.image"
            type="text"
            class="form-control"
            id="image"
            name="image"
            @change="GetImage"
          />

          <div class="invalid-feedback" v-if="!$v.formReg.image.required">
            {{ reqText }}
          </div>

          <div class="invalid-feedback" v-if="!$v.formReg.image.url">
            {{ reqUrl }}
          </div>
          <br />
          <div>
            <div class="card" style="width: 19rem">
              <img class="card-img-top" :src="formReg.image" alt="Зображення" />
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="nameCat">Назва категорії</label>

          <select
            @blur="$v.formReg.nameCat.$touch()"
            :class="status($v.formReg.nameCat)"
            v-model.trim="formReg.nameCat"
            class="form-control"
            id="nameCat"
          >
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback" v-if="!$v.formReg.nameCat.required">
            {{ reqText }}
          </div>
        </div>

        <div class="form-group">
          <label for="name">Назва підкатегорії</label>

          <input
            @blur="$v.formReg.name.$touch()"
            :class="status($v.formReg.name)"
            v-model.trim="formReg.name"
            type="text"
            class="form-control"
            id="name"
          />

          <div class="invalid-feedback" v-if="!$v.formReg.name.required">
            {{ reqText }}
          </div>
        </div>

        <button
          type="button"
          class="btn btn-light mr-2"
          @click="$router.push({ name: 'Admincategory' })"
        >
          Назад
        </button>
        <button
          :disabled="disabledBtn"
          type="submit"
          class="btn btn-primary"
          @click="$router.push({ name: 'Admincategory' })"
        >
          Додати
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, url } from "vuelidate/lib/validators";

//const alpha = helpers.regex("alpha", /^[a-zA-Zа-яёА-А-ЯҐЄІЇ-яґєії]*$/);

export default {
  data() {
    return {
      regMessage: false,
      reqText: "Поле обовязкове для заповнення",
      reqUrl: "Потрібна силка",

      formReg: {
        name: "",
      },
      avatar: null,
    };
  },

  computed: {
    disabledBtn() {
      return (
        this.$v.formReg.image.$invalid ||
        this.$v.formReg.nameCat.$invalid ||
        this.$v.formReg.name.$invalid
      );
    },
  },

  methods: {
    GetImage(e) {
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.avatar = e.target.result;
      };
    },
    status(validation) {
      return {
        "is-invalid": validation.$error,
        error: validation.$error,
      };
    },

    reset() {
      this.regMessage = true;
      setTimeout(() => {
        this.regMessage = false;
      }, 3000);
      for (let input in this.formReg) {
        this.formReg[input] = "";
      }
      this.$v.$reset();
    },
  },
  validations: {
    formReg: {
      name: {
        required,
        //        alpha,
      },
      image: {
        required,
        url,
      },
      nameCat: {
        required,
      },
    },
  },
};
</script>

<style>
body {
  background-color: #f1f1f1;
}
form {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 45px -31px rgba(0, 0, 0, 0.75);
}
.error {
  background-color: #fdd;
}
.reg-title {
  color: #5d5d5d;
  font-size: 24px;
  margin-bottom: 18px;
  padding-left: 20px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.img {
  width: 100px;
  height: 20px;
}
</style>