<template>
  <div class="hello">
    <div class="color-panel hidden-sm">
      <div class="color-mode-icons icon-color"></div>
      <div class="color-mode-icons icon-color-close"></div>
      <div class="color-mode">
        <p>THEME COLOR</p>
        <ul class="inline">
          <li class="color-red current color-default" data-style="red"></li>
          <li class="color-blue" data-style="blue"></li>
          <li class="color-green" data-style="green"></li>
          <li class="color-orange" data-style="orange"></li>
          <li class="color-gray" data-style="gray"></li>
          <li class="color-turquoise" data-style="turquoise"></li>
        </ul>
      </div>
    </div>
    <!-- END BEGIN STYLE CUSTOMIZER -->

    <!-- BEGIN TOP BAR -->

    <!-- BEGIN SLIDER -->
    <div class="page-slider margin-bottom-35">
      <div id="carousel-example-generic" class="carousel slide carousel-slider">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <!-- First slide -->
          <div class="item carousel-item-four active">
            <!-- <div class="container">
                        <div class="carousel-position-four text-center">
                            <h2 class="margin-bottom-20 animate-delay carousel-title-v3 border-bottom-title text-uppercase" data-animation="animated fadeInDown">
                                Tones of <br/><span class="color-red-v2">Shop UI Features</span><br/> designed
                            </h2>
                            <p class="carousel-subtitle-v2" data-animation="animated fadeInUp">Lorem ipsum dolor sit amet constectetuer diam <br/>
                            adipiscing elit euismod ut laoreet dolore.</p>
                        </div>
                    </div> -->
          </div>

          <!-- Second slide -->
          <div class="item carousel-item-five"></div>

          <!-- Third slide -->
          <div class="item carousel-item-six"></div>

          <!-- Fourth slide -->
          <div class="item carousel-item-seven"></div>
        </div>

        <!-- Controls -->
        <a
          class="left carousel-control carousel-control-shop"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <a
          class="right carousel-control carousel-control-shop"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <!-- END SLIDER -->

    <div class="main">
      <div class="container">
        <!-- BEGIN SALE PRODUCT & NEW ARRIVALS -->
        <div class="row margin-bottom-40">
          <li class="menu-search" style="width: 500px; margin-bottom: 20px">
            <div class="search-box">
              <form action="#">
                <div class="input-group">
                  <input
                    style="border: 1px solid #b1154a"
                    type="text"
                    placeholder="Search"
                    class="form-control"
                  />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="submit">
                      Search
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </li>
          <!-- BEGIN SALE PRODUCT -->
          <div class="col-md-12 sale-product">
            <h2>SẢN PHẨM ĐANG GIẢM GIÁ</h2>
            <div class="owl-carousel owl-carousel5" style="display: flex">
              <div
                class="product-item"
                v-for="product in products"
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
                      @click="showProduct(product.id)"
                      >View</a
                    >
                  </div>
                </div>
                <h3>
                  <router-link
                    :to="{ name: 'ProductDetail', params: { id: product.id } }"
                  >
                    <a>{{ product.name }}</a></router-link
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
                <a @click="addToCart(product)" class="btn btn-default add2cart"
                  >Thêm Vào Giỏ Hàng</a
                >
                <div class="sticker sticker-sale"></div>
              </div>
            </div>
          </div>
          <!-- END SALE PRODUCT -->
        </div>
        <!-- END SALE PRODUCT & NEW ARRIVALS -->

        <!-- BEGIN SIDEBAR & CONTENT -->

        <div class="row margin-bottom-40">
          <div class="sidebar col-md-3 col-sm-4">
            <ul class="list-group margin-bottom-25 sidebar-menu">
              <li
                class="list-group-item clearfix"
                style="margin: 10px 0px"
                v-for="category in categories"
                :key="category.id"
              >
                <router-link
                  :to="{ name: 'ProductCategory', params: { id: category.id } }"
                  style="cursor: pointer"
                  ><i class="fa fa-angle-right"></i
                  >{{ category.name }}</router-link
                >
              </li>
            </ul>
          </div>

          <!-- END SIDEBAR -->
          <!-- BEGIN CONTENT -->
          <div class="col-md-9 col-sm-8">
            <h2>XU HƯỚNG MUA SẮM</h2>

            <div style="display: flex; width: 100%">
              <div
                class="product-item"
                v-for="productNew in productNews"
                :key="productNew.id"
              >
                <div class="pi-img-wrapper">
                  <img
                    :src="`/frontend/assets/pages/img/products/${productNew.image}`"
                    class="img-responsive"
                    alt="Berry Lace Dress"
                  />
                  <div>
                    <a
                      :href="`/frontend/assets/pages/img/products/${productNew.image}`"
                      class="btn btn-default fancybox-button"
                      >Zoom</a
                    >
                    <a
                      href="#product-pop-up"
                      class="btn btn-default fancybox-fast-view"
                      @click="ShowProductNew(productNew.id)"
                      >View</a
                    >
                  </div>
                </div>
                <h3>
                  <router-link
                    :to="{
                      name: 'ProductDetail',
                      params: { id: productNew.id },
                    }"
                    >{{ productNew.name }}</router-link
                  >
                </h3>
                <div class="pi-price">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(productNew.price)
                  }}
                </div>
                <a
                  @click="addToCart(productNew)"
                  href="javascript:;"
                  class="btn btn-default add2cart"
                  >Thêm Vào Giỏ Hàng</a
                >
                <div class="sticker sticker-new"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- END CONTENT -->
      </div>

      <!-- END SIDEBAR & CONTENT -->
    </div>
  </div>

  <!-- BEGIN BRANDS -->
  <div class="brands">
    <div class="container">
      <div class="owl-carousel owl-carousel6-brands">
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/products/th1.jpg"
            alt="canon"
            title="canon"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/products/th2.jpg"
            alt="esprit"
            title="esprit"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/products/th3.jpg"
            alt="gap"
            title="gap"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/products/th4.jpg"
            alt="next"
            title="next"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/products/th5.jpg"
            alt="puma"
            title="puma"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="/frontend/assets/pages/img/products/th6.jpg"
            alt="zara"
            title="zara"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="assets/pages/img/brands/canon.jpg"
            alt="canon"
            title="canon"
        /></a>
        <a href="shop-product-list.html"
          ><img
            src="assets/pages/img/brands/esprit.jpg"
            alt="esprit"
            title="esprit"
        /></a>
        <!-- <a href="shop-product-list.html"
          ><img src="assets/pages/img/brands/gap.jpg" alt="gap" title="gap"
        /></a>
        <a href="shop-product-list.html"
          ><img src="assets/pages/img/brands/next.jpg" alt="next" title="next"
        /></a>
        <a href="shop-product-list.html"
          ><img src="assets/pages/img/brands/puma.jpg" alt="puma" title="puma"
        /></a>
        <a href="shop-product-list.html"
          ><img src="assets/pages/img/brands/zara.jpg" alt="zara" title="zara"
        /></a> -->
      </div>
    </div>
  </div>
  <!-- END BRANDS -->
  <!-- BEGIN fast view of a product -->
  <div id="product-pop-up" style="display: none; width: 700px">
    <div class="product-page product-pop-up">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-3">
          <div class="product-main-image">
            <img
              :src="`/frontend/assets/pages/img/products/${productDetail.image}`"
              alt="Cool green dress with red bell"
              class="img-responsive"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-9">
          <h2>{{ productDetail.name }}</h2>
          <div class="price-availability-block clearfix">
            <div class="price">
              <strong style="margin: 10px"
                ><span>$</span>{{ productDetail.originalPrice }}</strong
              >
              <em
                >$<span>{{ productDetail.price }}</span></em
              >
            </div>
            <div class="availability">
              Availability: <strong>In Stock</strong>
            </div>
          </div>
          <div class="description">
            <p>Nhà Cung Cấp : {{ productDetail.size }}</p>
            <p style="margin-bottom: 20px">
              Nhà Xuất Bản : {{ productDetail.title }}
            </p>
          </div>

          <div class="product-page-cart">
            <div class="product-quantity">
              <input
                id="product-quantity"
                type="number"
                value="1"
                name="product-quantity"
                class="form-control input-sm"
              />
            </div>
            <button
              @click="addToCart(productDetail)"
              class="btn btn-primary"
              type="submit"
            >
              Thêm Vào Giỏ Hàng
            </button>
            <a href="shop-item.html" class="btn btn-default">More details</a>
          </div>
        </div>

        <div class="sticker sticker-sale"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  // props: ["product"],
  data() {
    return {
      products: [],
      categories: [],
      productNews: [],
      productDetail: {},
      id: this.$route.params.id,
    };
  },
  async created() {
    await axios
      .get("https://localhost:44309/api/Product/GetProductByCategory/4")
      .then((res) => {
        this.products = res.data.items;
      });
    await axios
      .get("https://localhost:44309/api/Product/GetProductByCategory/6")
      .then((res) => {
        this.productNews = res.data.items;
      });
  },
  async mounted() {
    await axios
      .get("https://localhost:44309/api/Category/GetAll")
      .then((res) => {
        this.categories = res.data;
      });
  },
  methods: {
    showProduct(id) {
      const productDetails = this.products.find((product) => product.id === id);
      this.productDetail = productDetails;
    },
    ShowProductNew(id) {
      const productDetails = this.productNews.find(
        (productNew) => productNew.id === id
      );
      this.productDetail = productDetails;
    },
    addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product,
        quantity: 1,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
