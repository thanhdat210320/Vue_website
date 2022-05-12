<template>
  <div class="main">
    <div class="container">
      <div class="prod" style="max-width: 100%">
        <div
          class="product_list"
          style="width: 100%; display: flex; flex-wrap: wrap"
        >
          <div
            class="product-item"
            style="width: 25%; margin-bottom: 20px"
            v-for="product in productCategory"
            :key="product.id"
          >
            <div class="pi-img-wrapper">
              <img
                :src="`/frontend/assets/pages/img/products/${product.image}`"
                class="img-responsive"
                alt="Berry Lace Dress"
              />
              <div>
                <a
                  :href="`/frontend/assets/pages/img/products/${product.image}`"
                  class="btn btn-default fancybox-button"
                  >Zoom</a
                >
                <a
                  href="#product-pop-up"
                  class="btn btn-default fancybox-fast-view"
                  >View</a
                >
              </div>
            </div>
            <h3>
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
                href="shop-item.html"
                >{{ product.name }}</router-link
              >
            </h3>
            <div class="pi-price">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)
              }}
            </div>
            <a @click="addToCart(product)" href="javascript:;" class="btn btn-default add2cart"
              >Thêm Vào Giỏ Hàng</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4 items-info">Items 1 to 9 of 10 total</div>
        <div class="col-md-8 col-sm-8">
          <ul class="pagination pull-right">
            <li><a href="javascript:;">&laquo;</a></li>
            <li><a href="javascript:;">1</a></li>
            <li><span>2</span></li>
            <li><a href="javascript:;">3</a></li>
            <li><a href="javascript:;">4</a></li>
            <li><a href="javascript:;">5</a></li>
            <li><a href="javascript:;">&raquo;</a></li>
          </ul>
        </div>
      </div>
      <!-- END PAGINATOR -->
    </div>
    <!-- END CONTENT -->
  </div>
  <!-- END SIDEBAR & CONTENT -->

  <!-- <div class="" v-for="product in productCategory" :key="product.id">
    <h1>{{ product.name }}</h1>
  </div> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productCategory: [],
      id: this.$route.params.id,
    };
  },
  // computed: {
  //   productCategory() {
  //     return this.$stote.state.categoryId
  //   },
  // },
  mounted() {
    axios
      .get(
        `https://localhost:44309/api/Product/GetProductByCategory/${this.id}`
      )
      .then((res) => {
        window.scrollTo(0,0)
        this.productCategory = res.data.items;
        console.log(res.data);
      });
  },
  methods :{
    addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product,
        quantity: 1,
      });
    },
  }
};
</script>

<style>
</style>