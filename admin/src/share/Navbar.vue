<template>
  <aside>
    <div id="sidebar" class="nav-collapse">
      <!-- sidebar menu start-->
      <div class="leftside-navigation">
        <ul class="sidebar-menu" id="nav-accordion" style="text-align: left">
          <li class="sub-menu">
            <router-link to="/" href="javascript:;">
              <i class="fa fa-book"></i>
              <span>Tổng Quan</span>
            </router-link>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-th"></i>
              <span>Loại Sản Phẩm</span>
            </a>
            <ul class="sub">
              <li><router-link to="/Category" href="basic_table.html">Quản Lý Loại Sản Phẩm</router-link></li>
              <li><a href="responsive_table.html">Thêm Loại Sản Phẩm</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-tasks"></i>
              <span>Sản Phẩm</span>
            </a>
            <ul class="sub">
              <li><router-link to="/Product" href="form_component.html">Quản Lý Sản Phẩm</router-link></li>
              <li><a href="form_validation.html">Thêm Sản Phẩm</a></li>
            </ul>
          </li>
          <li>
            <a href="login.html">
              <i class="fa fa-user"></i>
              <span>Đơn hàng</span>
            </a>
          </li>
          <li>
            <a href="login.html">
              <i class="fa fa-user"></i>
              <span>Đăng Xuất</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- sidebar menu end-->
    </div>
  </aside>
</template>

<script>
export default {
  name: "NavbarComponet",
};
</script>

<style>
ul.sidebar-menu,
ul.sidebar-menu li ul.sub {
  margin: -2px 0 0;
  padding: 0;
}
ul.sidebar-menu {
  padding-top: 20px;
}
#sidebar > ul > li > ul.sub {
  display: none;
}
#sidebar .sub-menu > .sub li a {
  padding-left: 46px;
}
#sidebar > ul > li.active > ul.sub,
#sidebar > ul > li > ul.sub > li > a {
  display: block;
}
ul.sidebar-menu li ul.sub li {
  background: rgba(52, 48, 48, 0);
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}
ul.sidebar-menu li ul.sub li a {
  font-size: 12px;
  padding-top: 13px;
  padding-bottom: 13px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  color: #fff;
}
ul.sidebar-menu li ul.sub li a:hover,
ul.sidebar-menu li ul.sub li.active a {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: block;
  background: rgba(40, 40, 46, 0.28);
}
ul.sidebar-menu li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
ul.sidebar-menu li.sub-menu {
  line-height: 15px;
}
ul.sidebar-menu ul.sub li {
  border-bottom: none;
}
ul.sidebar-menu li a span {
  display: inline-block;
}
ul.sidebar-menu li a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 18px 0 18px 25px;
  font-size: 12px;
  outline: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
ul.sidebar-menu li a.active,
ul.sidebar-menu li a:hover,
ul.sidebar-menu li a:focus {
  background: rgba(40, 40, 46, 0.28);
  color: #fff;
  display: block;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
ul.sidebar-menu li a i {
  font-size: 15px;
  padding-right: 6px;
}
ul.sidebar-menu li a:hover i,
ul.sidebar-menu li a:focus i {
  color: #fff;
}
ul.sidebar-menu li a.active i {
  color: #fff;
}
.table > tbody > tr > td {
  color: rgb(43, 42, 42);
}
</style>