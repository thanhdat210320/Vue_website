<template>
  <div class="main">
    <div class="container">
      <!-- BEGIN SIDEBAR & CONTENT -->
      <div class="row margin-bottom-40">
        <!-- BEGIN CONTENT -->
        <div class="col-md-12 col-sm-12">
          <h1>GIỎ HÀNG CỦA BẠN</h1>
          <div class="goods-page">
            <div class="goods-data clearfix">
              <div class="table-wrapper-responsive">
                <table summary="Shopping cart">
                  <tr>
                    <th class="goods-page-image">Ảnh</th>
                    <th class="goods-page-description">Tên Sản Phầm</th>
                    <th class="goods-page-ref-no">NXB</th>
                    <th class="goods-page-quantity">Số Lượng</th>
                    <th class="goods-page-price">Đơn Giá</th>
                    <th class="goods-page-total" colspan="2">Xóa Sản Phẩm</th>
                  </tr>
                  <tr v-for="item in carts" :key="item.id">
                    <td class="goods-page-image">
                      <a href="javascript:;"
                        ><img
                          :src="`/frontend/assets/pages/img/products/${item.product.image}`"
                          alt="Berry Lace Dress"
                      /></a>
                    </td>
                    <td class="goods-page-description">
                      <h3>
                        <a href="javascript:;">{{ item.product.name }}</a>
                      </h3>
                    </td>
                    <td class="goods-page-ref-no">{{ item.product.size }}</td>
                    <td class="goods-page-quantity">
                      <div class="product-quantity">
                        <input 
                          id="product-quantity"
                          type="number"
                          :value="item.quantity"
                          class="form-control input-sm"
                        />
                      </div>
                    </td>
                    <td class="goods-page-price">
                      <strong>{{
                        new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.product.price)
                      }}</strong>
                    </td>
                    <td class="goods-page-total">
                      <strong></strong>
                    </td>
                    <td class="del-goods-col">
                      <a @click.prevent="removeProductinCart(item)" class="del-goods">&nbsp;</a>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="shopping-total">
                <ul>
                  <li class="shopping-total-price">
                    <em>quantity</em>
                    <strong class="count"><p>{{CartItemCount}}</p></strong>
                  </li>
                  <li></li>
                  <li class="shopping-total-price">
                    <em>Total</em>
                    <strong class="price"><span>$</span>{{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(CartItemTotal)
                }}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <router-link to="/">
              <button class="btn btn-default" type="submit">
                Tiếp Tục Mua <i class="fa fa-shopping-cart"></i></button
            ></router-link>

            <router-link to="Checkout">
              <button class="btn btn-primary" type="submit">
                Thanh Toán <i class="fa fa-check"></i>
              </button>
            </router-link>
          </div>
        </div>
        <!-- END CONTENT -->
      </div>
      <!-- END SIDEBAR & CONTENT -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // return {};
  },
  computed: {
    carts() {     
      return this.$store.state.carts;   
    },
    CartItemTotal() {
      return this.$store.getters.CartItemTotal;
    },
    CartItemCount() {
      return this.$store.getters.CartItemCount;
    }
  }, 
  methods: {
    removeProductinCart(id){
      this.$store.dispatch('removeProductinCart',id)
    }
  }
};
</script>

<style>
</style>