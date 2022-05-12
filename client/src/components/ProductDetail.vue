<template>
  <div class="main">
    <div class="container">
      
      <!-- BEGIN SIDEBAR & CONTENT -->
      <div class="row margin-bottom-40">
        <!-- BEGIN SIDEBAR -->
        <div class="sidebar col-md-3 col-sm-4">
          <ul class="list-group margin-bottom-25 sidebar-menu">
            <li
              class="list-group-item clearfix"
              style="margin: 10px 0px"
              v-for="category in categories"
              :key="category.id"
            >
              <a style="cursor:pointer"><i class="fa fa-angle-right"></i>{{ category.name }}</a>
            </li>
          </ul>
        </div>
        <!-- END SIDEBAR -->
        <!-- BEGIN CONTENT -->
        <div class="col-md-9 col-sm-7">
          <div class="product-page">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <div class="product-main-image">
                  <img
                    :src="`/frontend/assets/pages/img/products/${productDetail.image}`"
                    alt="Cool green dress with red bell"
                    class="img-responsive"
                    data-BigImgsrc="assets/pages/img/products/model7.jpg"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <h1>{{ productDetail.name }}</h1>
                <div class="price-availability-block clearfix">
                  <div class="price">
                    <strong style="margin: 20px"
                      ><span>$</span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format( productDetail.originalPrice) }}</strong
                    >
                    <em
                      >$<span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format( productDetail.price) }}</span></em
                    >
                  </div>
                  <div class="availability" style="margin-top: 10px">
                    Availability: <strong>In Stock</strong>
                  </div>
                </div>
                <div class="description">
                  <p>Nhà Cung Cấp : {{ productDetail.size }}</p>
                  <p style="margin-bottom: 20px">
                    Nhà Xuất Bản : {{ productDetail.title }}
                  </p>
                </div>
                <div class="description">
                  <p>
                    Bằng ngòi bút trào phúng độc đáo, Số đỏ lên án gay gắt cái
                    xã hội tư sản thành thị Việt Nam đương thơi đang chạy theo
                    lối sống "văn minh rởm' hết sức lố lăng đồi bại. Tác giả đã
                    kích cay độc các phong trào " Âu hoá", "thể thao", " giải
                    phóng nữ quyền" đang phát triển rầm rộ khi ấy, nhân danh
                    "văn minh", "tiến bộ", "cải cách xã hội" mà thực chất chỉ là
                    ăn chơi truỵ lạc, làm tiền, chà đạp trắng trợn lên mọi nề
                    nếp đạo đức truyền thống..
                  </p>
                </div>

                <div class="product-page-cart">
                  <div class="product-quantity">
                    <input
                      id="product-quantity"
                      type="number"
                      value="1"
                      class="form-control input-sm"
                    />
                  </div>
                  <button @click="addToCart(productDetail)" class="btn btn-primary" type="submit">
                    Thêm Vào Giỏ Hàng
                  </button>
                </div>
                <div class="review">
                  <input type="range" value="4" step="0.25" id="backing4" />
                  <div
                    class="rateit"
                    data-rateit-backingfld="#backing4"
                    data-rateit-resetable="false"
                    data-rateit-ispreset="true"
                    data-rateit-min="0"
                    data-rateit-max="5"
                  ></div>
                  <a href="javascript:;">7 reviews</a
                  >&nbsp;&nbsp;|&nbsp;&nbsp;<a href="javascript:;"
                    >Write a review</a
                  >
                </div>
                <ul class="social-icons">
                  <li>
                    <a
                      class="facebook"
                      data-original-title="facebook"
                      href="javascript:;"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="twitter"
                      data-original-title="twitter"
                      href="javascript:;"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="googleplus"
                      data-original-title="googleplus"
                      href="javascript:;"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="evernote"
                      data-original-title="evernote"
                      href="javascript:;"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="tumblr"
                      data-original-title="tumblr"
                      href="javascript:;"
                    ></a>
                  </li>
                </ul>
              </div>

              <div class="sticker sticker-sale"></div>
            </div>
          </div>
        </div>
        <!-- END CONTENT -->
      </div>
      <!-- END SIDEBAR & CONTENT -->

      <!-- BEGIN SIMILAR PRODUCTS -->
      
      <!-- END SIMILAR PRODUCTS -->
    </div>
  </div>

  <!-- BEGIN BRANDS -->
  <div class="brands">
    <div class="container">
      <div class="owl-carousel owl-carousel6-brands">
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/canon.jpg"
            alt="canon"
            title="canon"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/esprit.jpg"
            alt="esprit"
            title="esprit"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/gap.jpg"
            alt="gap"
            title="gap"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/next.jpg"
            alt="next"
            title="next"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/puma.jpg"
            alt="puma"
            title="puma"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/zara.jpg"
            alt="zara"
            title="zara"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/canon.jpg"
            alt="canon"
            title="canon"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/esprit.jpg"
            alt="esprit"
            title="esprit"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/gap.jpg"
            alt="gap"
            title="gap"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/next.jpg"
            alt="next"
            title="next"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/puma.jpg"
            alt="puma"
            title="puma"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/brands/zara.jpg"
            alt="zara"
            title="zara"
        /></a>
      </div>
    </div>
  </div>
  <!-- END BRANDS -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      id: this.$route.params.id,
    };
  },
  computed: {
    productDetail() {
      return this.$store.state.productDetail;
    },
  },
  async created() {
    await this.$store.dispatch("getProductsDetail", this.id);
  },
  async mounted() {
    await axios
      .get("https://localhost:44309/api/Category/GetAll")
      .then((res) => {
        this.categories = res.data;
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

<style scoped>
</style>