<template>
  <div style="min-height: 100vh">
    <br />
    <div class="form-group">
      <div class="d-flex justify-content-end">
        <a :href="'/admin/specstable/:product_id/addspec'" class="btn btn-info">
          Додати характеристику
          <i class="far fa-trash-alt"></i>
        </a>
      </div>
    </div>
    <br />
    <br />
    <table class="table table-striped">
      <thead>
        <th scope="col">id</th>
        <th scope="col">Назва</th>
        <th scope="col"></th>
      </thead>
      <tbody>
        <tr v-for="spec in specs" :key="spec.id">
          <td>
            {{ spec.name }}
          </td>

          <td>
            <a
              :href="'/api/admin/delete/' + spec.id"
              onclick="return confirm('Ви дійсно хочете видалити дану характеристику?');"
              class="btn btn-danger"
            >
              Видалити
              <i class="far fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-right">Загальна сума</td>
          <td class="text-right">{{ product_subtotal }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      specs: [],
      search: "",
    };
  },

  async created() {
    try {
      const res = await axios.get(
        "/api/admin/categories/" + this.$route.params.cat
      );
      this.products = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
body {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 300;
}
.main-title {
  font-weight: 500;
}
.trashIconContainer {
  vertical-align: middle !important;
  padding-top: 10px;
  text-align: center;
}

.trashIconContainer i {
  color: #e74c3c;
}

.btn-success,
.panel-success {
  background-color: #27c24c !important;
  border-color: #27c24c !important;
  color: #fff !important;
}
.submit_btn {
  min-width: 150px;
  max-width: 250px;
  font-size: 1.2rem;
  height: 60px;
  margin-top: 20px;
  padding: 20px;
}
.submit_btn i {
  padding-right: 10px;
}
</style>