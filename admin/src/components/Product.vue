<template>
  <section class="wrapper">
    <div class="table-agile-info">
      <div class="panel panel-default">
        <div class="panel-heading">Sản Phẩm</div>
        <div>
          <table
            class="table"
            ui-jq="footable"
            ui-options='{
        "paging": {
          "enabled": true
        },
        "filtering": {
          "enabled": true
        },
        "sorting": {
          "enabled": true
        }}'
          >
            <thead>
              <tr>
                <th style="text-aline: center">ID</th>
                <th>Tên Sản Phẩm</th>
                <th data-breakpoints="xs">Ảnh</th>
                <th>NXB</th>
                <th>Đơn Giá</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr data-expanded="true" v-for="item in products" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <img
                    style="width: 50px; height: 50px"
                    :src="`/admin/img/products/${item.image}`"
                  />
                </td>
                <td>{{ item.size }}</td>
                <td>
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)
                  }}
                </td>
                <td>
                  <button class="btn_update">Update</button>
                </td>
                <td>
                  <button class="btn_delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  </section>
    <!-- <paginate
            :page-count="parseIn()"
            :page-range="3"
            :margin-pages="2"
            :click-handler="changePage"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </paginate> -->
</template>

<script>
import axios from "axios";
// import Paginate from "vuejs-paginate";
export default {
//   components: {
//     Paginate,
//   },
  name: "ProductComponent",

  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    await axios
      .get("https://localhost:44309/api/Product/GetAll")
      .then((res) => {
        this.products = res.data;
      });
  },
};
</script>
   
<style>
.table > thead > tr > th {
  text-align: center;
}
</style>