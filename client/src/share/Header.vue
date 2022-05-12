<template>
  <div class="pre-header">
    <div class="container">
      <div class="row">
        <!-- BEGIN TOP BAR LEFT PART -->
        <div class="col-md-6 col-sm-6 additional-shop-info">
          <ul class="list-unstyled list-inline">
            <li><i class="fa fa-phone"></i><span>+1 456 6717</span></li>
            <!-- BEGIN CURRENCIES -->
            <li class="shop-currencies">
              <a href="javascript:void(0);">€</a>
              <a href="javascript:void(0);">£</a>
              <a href="javascript:void(0);" class="current">$</a>
            </li>
            <!-- END CURRENCIES -->
            <!-- BEGIN LANGS -->
            <li class="langs-block">
              <a href="javascript:void(0);" class="current">English </a>
              <div class="langs-block-others-wrapper">
                <div class="langs-block-others">
                  <a href="javascript:void(0);">French</a>
                  <a href="javascript:void(0);">Germany</a>
                  <a href="javascript:void(0);">Turkish</a>
                </div>
              </div>
            </li>
            <!-- END LANGS -->
          </ul>
        </div>
        <!-- END TOP BAR LEFT PART -->
        <!-- BEGIN TOP BAR MENU -->
        <div class="col-md-6 col-sm-6 additional-nav">
          <ul class="list-unstyled list-inline pull-right">
            <li v-if="!user">
              <router-link to="/Login" href="page-login.html"
                >Đăng Nhập</router-link
              >
            </li>
            <li>{{ user }}</li>
            <li @click="logOut()" v-if="user">
              <router-link to="/login">Đăng Xuất</router-link>
            </li>
          </ul>
        </div>
        <!-- END TOP BAR MENU -->
      </div>
    </div>
  </div>
  <!-- END TOP BAR -->

  <!-- BEGIN HEADER -->
  <div class="header">
    <div class="container">
      <a class="site-logo" href="shop-index.html"
        ><img
          src="/frontend/assets/pages/img/products/logo-new.png"
          alt="Metronic Shop UI"
      /></a>

      <a href="javascript:void(0);" class="mobi-toggler"
        ><i class="fa fa-bars"></i
      ></a>

      <!-- BEGIN CART -->
      <div class="top-cart-block">
        <div class="top-cart-info">
          <a href="javascript:void(0);" class="top-cart-info-count">{{
            CartItemCount
          }}</a>
          <a href="javascript:void(0);" class="top-cart-info-value">{{
            new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(CartItemTotal)
          }}</a>
        </div>
        <i class="fa fa-shopping-cart"></i>

        <div class="top-cart-content-wrapper">
          <div class="top-cart-content">
            <ul class="scroller" style="height: 250px">
              <li v-for="item in carts" :key="item.product.id">
                <a
                  ><img
                    :src="`/frontend/assets/pages/img/products/${item.product.image}`"
                    alt="Rolex Classic Watch"
                    width="37"
                    height="34"
                /></a>
                <span class="cart-content-count">x {{ item.quantity }}</span>
                <strong
                  ><a href="shop-item.html">{{ item.product.name }}</a></strong
                >
                <em>{{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.product.price)
                }}</em>
                <a
                  @click.prevent="removeProductinCart(item)"
                  class="del-goods"
                  >&nbsp;</a
                >
              </li>
            </ul>
            <div class="text-right">
              <router-link
                to="/ViewCart"
                href="shop-shopping-cart.html"
                class="btn btn-default"
                >Xem Giỏ Hàng</router-link
              >
              <router-link
                to="/CheckOut"
                href="shop-checkout.html"
                class="btn btn-primary"
                >Thanh Toán</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!--END CART -->

      <!-- BEGIN NAVIGATION -->
      <div class="header-navigation">
        <ul>
          <li class="dropdown">
            <router-link
              to="/"
              class="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              href="javascript:;"
            >
              TRANG CHỦ
            </router-link>
          </li>
          <li class="dropdown dropdown-megamenu">
            <a
              class="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              href="javascript:;"
            >
              CỬA HÀNG
            </a>
            <ul class="dropdown-menu">
              <li>
                <div class="header-navigation-content">
                  <div class="row">
                    <div class="col-md-4 header-navigation-col">
                      <h4>Footwear</h4>
                      <ul>
                        <li>
                          <a href="shop-product-list.html">Astro Trainers</a>
                        </li>
                        <li>
                          <a href="shop-product-list.html">Basketball Shoes</a>
                        </li>
                        <li><a href="shop-product-list.html">Boots</a></li>
                        <li>
                          <a href="shop-product-list.html">Canvas Shoes</a>
                        </li>
                        <li>
                          <a href="shop-product-list.html">Football Boots</a>
                        </li>
                        <li><a href="shop-product-list.html">Golf Shoes</a></li>
                        <li><a href="shop-product-list.html">Hi Tops</a></li>
                        <li>
                          <a href="shop-product-list.html"
                            >Indoor and Court Trainers</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-4 header-navigation-col">
                      <h4>Clothing</h4>
                      <ul>
                        <li><a href="shop-product-list.html">Base Layer</a></li>
                        <li><a href="shop-product-list.html">Character</a></li>
                        <li><a href="shop-product-list.html">Chinos</a></li>
                        <li><a href="shop-product-list.html">Combats</a></li>
                        <li>
                          <a href="shop-product-list.html">Cricket Clothing</a>
                        </li>
                        <li><a href="shop-product-list.html">Fleeces</a></li>
                        <li><a href="shop-product-list.html">Gilets</a></li>
                        <li><a href="shop-product-list.html">Golf Tops</a></li>
                      </ul>
                    </div>
                    <div class="col-md-4 header-navigation-col">
                      <h4>Accessories</h4>
                      <ul>
                        <li><a href="shop-product-list.html">Belts</a></li>
                        <li><a href="shop-product-list.html">Caps</a></li>
                        <li>
                          <a href="shop-product-list.html"
                            >Gloves, Hats and Scarves</a
                          >
                        </li>
                      </ul>

                      <h4>Clearance</h4>
                      <ul>
                        <li><a href="shop-product-list.html">Jackets</a></li>
                        <li><a href="shop-product-list.html">Bottoms</a></li>
                      </ul>
                    </div>
                    <div class="col-md-12 nav-brands">
                      <ul>
                        <li>
                          <a href="shop-product-list.html"
                            ><img
                              title="esprit"
                              alt="esprit"
                              src="/frontend/assets/pages/img/brands/esprit.jpg"
                          /></a>
                        </li>
                        <li>
                          <a href="shop-product-list.html"
                            ><img
                              title="gap"
                              alt="gap"
                              src="/frontend/assets/pages/img/brands/gap.jpg"
                          /></a>
                        </li>
                        <li>
                          <a href="shop-product-list.html"
                            ><img
                              title="next"
                              alt="next"
                              src="/frontend/assets/pages/img/brands/next.jpg"
                          /></a>
                        </li>
                        <li>
                          <a href="shop-product-list.html"
                            ><img
                              title="puma"
                              alt="puma"
                              src="/frontend/assets/pages/img/brands/puma.jpg"
                          /></a>
                        </li>
                        <li>
                          <a href="shop-product-list.html"
                            ><img
                              title="zara"
                              alt="zara"
                              src="/frontend/assets/pages/img/brands/zara.jpg"
                          /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <router-link
              to="/ProductCategory"
              class="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              href="javascript:;"
            >
              SẢN PHẨM THEO LOẠI
            </router-link>

            <ul class="dropdown-menu">
              <li
                class="active"
                v-for="category in categories"
                :key="category.id"
              >
                <router-link
                  :to="{ name: 'ProductCategory', params: { id: category.id } }"
                  style="cursor: pointer"
                  ><a @click="moveCategoy(category.id)">{{
                    category.name
                  }}</a></router-link
                >
              </li>
            </ul>
          </li>

          <li>
            <a
              href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes&amp;utm_source=download&amp;utm_medium=banner&amp;utm_campaign=metronic_frontend_freebie"
              target="_blank"
              >TIN TỨC</a
            >
          </li>
          <li>
            <a
              href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes&amp;utm_source=download&amp;utm_medium=banner&amp;utm_campaign=metronic_frontend_freebie"
              target="_blank"
              >LIÊN HỆ</a
            >
          </li>

          <!-- BEGIN TOP SEARCH -->
          <li class="menu-search">
            <span class="sep"></span>
            <i class="fa fa-search search-btn"></i>
            <div class="search-box">
              <form action="#">
                <div class="input-group">
                  <input
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
          <!-- END TOP SEARCH -->
        </ul>
      </div>
      <!-- END NAVIGATION -->
    </div>
  </div>
  <!-- Header END -->

  <!-- BEGIN SLIDER -->
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderComponent",
  data() {
    return {
      categories: [],
      // user: localStorage.getItem("user"),
    };
  },
  created() {
    axios.get("https://localhost:44309/api/Category/GetAll").then((res) => {
      this.categories = res.data;
    });
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    carts() {
      return this.$store.state.carts;
    },
    CartItemCount() {
      return this.$store.getters.CartItemCount;
    },
    CartItemTotal() {
      return this.$store.getters.CartItemTotal;
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem("user");
      this.$store.state.user = "";
    },
    // moveCategoy(id) {
    //   this.$store.dispatch("getCategoryId", id);
    // },
    removeProductinCart(id) {
      this.$store.dispatch("removeProductinCart", id);
    },
  },
};
</script>

<style  scoped>
</style>