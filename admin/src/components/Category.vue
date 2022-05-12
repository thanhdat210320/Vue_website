<template>
  <section class="wrapper">
    <div class="table-agile-info">
      <div class="panel panel-default">
        <div class="panel-heading">Loại Sản Phẩm</div>
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
                <th data-breakpoints="xs">ID</th>
                <th>Tên Loại Sản Phẩm</th>
                <th data-breakpoints="xs">Mô Tả</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr data-expanded="true" v-for="item in categories" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.title}}</td>
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
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
    name:"CategoryComponent",

    data() {
        return {
            categories: [],
        };
    },
    async mounted() {
        await axios.get("https://localhost:44309/api/Category/GetAll").then((res) =>{
            this.categories = res.data;
        })
    } 

};
</script>

<style>
.btn_update{
    background: rgb(123, 239, 56);
    border: 1px solid blue;
    color: rgb(48, 47, 47);
}
.btn_update:hover{
  background-color: aquamarine;
  color: rgb(38, 37, 37);
}
.btn_delete{
    background: rgb(230, 165, 53);
    border: 1px solid rgb(245, 73, 124);
    color: rgb(48, 47, 47);
}
.btn_delete:hover{
  background-color: rgb(252, 39, 39);
  color: rgb(38, 37, 37);
}
</style>