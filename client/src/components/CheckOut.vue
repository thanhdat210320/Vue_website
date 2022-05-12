<template>
  <div class="main">
    <div class="container">
      <!-- BEGIN SIDEBAR & CONTENT -->
      <div class="row margin-bottom-40">
        <!-- BEGIN CONTENT -->
        <div class="col-md-12 col-sm-12">
          <h1>THANH TOÁN</h1>
          <!-- BEGIN CHECKOUT PAGE -->
          <div
            class="panel-group checkout-page accordion scrollable"
            id="checkout-page"
          >
            <!-- BEGIN PAYMENT ADDRESS -->
            <div id="payment-address" class="panel panel-default">
              <div class="panel-heading">
                <h2 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#checkout-page"
                    href="#payment-address-content"
                    class="accordion-toggle"
                  >
                    Step 1: Account &amp; Billing Details
                  </a>
                </h2>
              </div>
              <div id="payment-address-content" class="panel-collapse collapse">
                <div class="panel-body row">
                  <div class="col-md-6 col-sm-6">
                    <h3>Thông Tin Cá Nhân</h3>
                    <div class="form-group">
                      <label for="firstname"
                        >Họ Tên <span class="require">*</span></label
                      >
                      <input type="text" id="firstname" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="email"
                        >E-Mail <span class="require">*</span></label
                      >
                      <input type="text" id="email" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="telephone"
                        >Số Điện Thoại <span class="require">*</span></label
                      >
                      <input type="text" id="telephone" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="fax">Fax</label>
                      <input type="text" id="fax" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <h3>Địa Chỉ Của Bạn</h3>
                    <div class="form-group">
                      <label for="address1">Địa Chỉ </label>
                      <input type="text" id="address1" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="address2">Ghi Chú</label>
                      <input type="text" id="address2" class="form-control" />
                    </div>
                  </div>
                  <hr />
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary pull-right"
                      type="submit"
                      data-toggle="collapse"
                      data-parent="#checkout-page"
                      data-target="#shipping-address-content"
                      id="button-payment-address"
                    >
                      Continue
                    </button>
                    <div class="checkbox pull-right">
                      <label>
                        <input type="checkbox" /> I have read and agree to the
                        <a title="Privacy Policy" href="javascript:;"
                          >Privacy Policy</a
                        >
                        &nbsp;&nbsp;&nbsp;
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END PAYMENT ADDRESS -->
            <!-- BEGIN CONFIRM -->
            <div id="confirm" class="panel panel-default">
              <div class="panel-heading">
                <h2 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#checkout-page"
                    href="#confirm-content"
                    class="accordion-toggle"
                  >
                    Step 2: Confirm Order
                  </a>
                </h2>
              </div>
              <div id="confirm-content" class="panel-collapse collapse">
                <div class="panel-body row">
                  <div class="col-md-12 clearfix">
                    <div class="table-wrapper-responsive">
                      <table>
                        <tr>
                          <th class="checkout-image">Ảnh</th>
                          <th class="checkout-description">Tên Sách</th>
                          <th class="checkout-model">Nhà Xuất Bản</th>
                          <th class="checkout-quantity">Số Lượng</th>
                          <th class="checkout-price">Giá Tiền</th>
                        </tr>
                        <tr v-for="item in carts" :key="item.id">
                          <td class="checkout-image">
                            <a href="javascript:;"
                              ><img
                                :src="`/frontend/assets/pages/img/products/${item.product.image}`"
                                alt="Berry Lace Dress"
                            /></a>
                          </td>
                          <td class="checkout-description">
                            <h3>
                              <a href="javascript:;">{{ item.product.name }}</a>
                            </h3>
                          </td>
                          <td class="checkout-model">
                            {{ item.product.size }}
                          </td>
                          <td class="checkout-quantity">{{item.quantity}}</td>

                          <td class="checkout-total">
                            <strong
                              ><span>$</span
                              >{{
                                new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.product.price)
                              }}</strong
                            >
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="checkout-total-block">
                      <ul>
                        <li class="checkout-total-price">
                          <em>Tổng Tiền</em>
                          <strong class="price">{{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(CartItemTotal)
                }}</strong>
                        </li>
                      </ul>
                    </div>
                    <div class="clearfix"></div>
                    <button
                      class="btn btn-primary pull-right"
                      type="submit"
                      id="button-confirm"
                    >
                      Confirm Order
                    </button>
                    <button
                      type="button"
                      class="btn btn-default pull-right margin-right-20"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- END CONFIRM -->
          </div>
          <!-- END CHECKOUT PAGE -->
        </div>
        <!-- END CONTENT -->
      </div>
      <!-- END SIDEBAR & CONTENT -->
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    CartItemTotal() {
      return this.$store.getters.CartItemTotal;
    },
    CartItemCount() {
      return this.$store.getters.CartItemCount;
    },
  },
};
</script>

<style>
</style>