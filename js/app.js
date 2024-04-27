$(function () {
  "use strict";

  /*=================*/
  /*HEADER NAVIGATION*/
  /*=================*/

  $(".item.wallet .icon").click(function () {
    var index = $(".item.wallet .icon").index(this); // Lấy vị trí của button được click trong danh sách các button
    $(".sub-action")
      .not(":eq(" + index + ")")
      .not(":last")
      .hide(); // Ẩn tất cả các phần tử, ngoại trừ phần tử được click
    $(".sub-action:eq(" + index + ")").toggle("sub-action"); // Hiển thị hoặc ẩn phần tử được click
  });

  $(".item-cart .icon").click(function () {
    var subAction = $(this).parent().find(".sub-action.sub-action-cart");
    ToggleClass(subAction, "open");
  });

  $(".action-close").click(function () {
    ToggleClass($(this).parent(), "open");
  });

  function ToggleClass(element, nameClass) {
    element.hasClass(nameClass)
      ? element.removeClass(nameClass)
      : element.addClass(nameClass);
  }

  function ReplaceClass(element, classOld, classNew) {
    if (element.hasClass(classOld)) {
      element.removeClass(classOld);
      element.addClass(classNew);
    } else {
      element.removeClass(classNew);
      element.addClass(classOld);
    }
  }

  /*=============*/
  /*SLIDER BANNER*/
  /*=============*/

  $(".slider-banner.owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".new-prod-slider.owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    mouseDrag: false,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false,
        margin: 15,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });

  /*==========*/
  /* TAB HOME */
  /*==========*/
  $(".exclusive-head li").click(function () {
    var tab_id = $(this).attr("data-tab");
    $(this)
      .parents(".exclusive-tabs")
      .find(".exclusive-head li")
      .removeClass("active");
    $(this)
      .parents(".exclusive-tabs")
      .find(".exclusive-inner")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + tab_id).addClass("active active-hidden");
    setTimeout(function () {
      $("#" + tab_id).removeClass("active-hidden");
    }, 300);
  });

  const listColor = $(".list-products .list-color ul li");
  const favourite = $(".list-products .info-product .favourite");
  const iconShopping = $(".list-products .add-to-cart span").not(".bag-gray");
  const btnSize = $(".list-products .list-size li").not("unactive");

  listColor.click(function () {
    $(this).parent().find(".checked").removeClass("checked");
    $(this).addClass("checked");
  });

  favourite.click(function () {
    var heart = $(this).find(".fa-heart");
    ReplaceClass(heart, "fa-regular", "fa-solid");
  });

  iconShopping.click(function () {
    var listSize = $(this).parents(".product").find(".list-size");
    ToggleClass(listSize, "open");
  });

  btnSize.click(function () {
    var listSize = $(this).parents(".product").find(".list-size");

    toastr.options = {
      positionClass: "custom-toastr",
      closeButton: true,
      timeOut: 3000,
    };
    toastr.success("Thêm vào giỏ hàng thành công!");

    ToggleClass(listSize, "open");
  });

  /*=======*/
  /* BRAND */
  /*=======*/
  $(".slider-ads-brand.owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 2,
        margin: 8,
      },
      600: {
        items: 2,
        margin: 8,
      },
      1000: {
        items: 2,
      },
    },
  });

  /*=========*/
  /* GALLERY */
  /*=========*/

  $(".list-gallery.owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 2,
        margin: 8,
      },
      768: {
        items: 3,
        margin: 8,
      },
      1200: {
        items: 5,
      },
      1920: {
        items: 5,
      },
    },
  });

  /*=========*/
  /* PRODUCT */
  /*=========*/

  var listFilterProduct = $("#products .list-side .item-side-title");
  listFilterProduct.click(function () {
    ReplaceClass($(this).find("i"), "fa-plus", "fa-minus");
    $(this).parents(".item-side").find(".sub-list-side").slideToggle("active");
  });

  var listSizeProduct = $(
    "#products .list-side .item-side-size .item-sub-list"
  );
  listSizeProduct.click(function () {
    ToggleClass($(this), "checked");
  });

  var listColorProduct = $(
    "#products .list-side .item-side-color .item-sub-list"
  );
  listColorProduct.click(function () {
    ToggleClass($(this), "checked");
  });

  var listDiscountProduct = $(
    "#products .list-side .item-sub-list .item-sub-title"
  );
  listDiscountProduct.click(function () {
    ToggleClass($(this), "active");
    var checkParent = $(this).parents(".item-side-discount");
    if (checkParent.length == 1) {
      checkParent
        .find(".item-sub-title.active")
        .not($(this))
        .removeClass("active");
    }
  });

  var listFilterPlusProduct = $(
    "#products .list-side .item-sub-title.item-sub-pr"
  );
  listFilterPlusProduct.click(function () {
    ReplaceClass($(this).find("i"), "fa-plus", "fa-minus");

    var subSide = $(this).parents(".item-sub-list").find(".item-sub-side");

    subSide.slideToggle(function () {
      var atbCss = $(this).css("display");
      if (atbCss === "inline" || atbCss == "block") {
        subSide.css("display", "block");
      } else {
        subSide.css("display", "none");
      }
    });
  });

  $(".but_filter_remove").click(function () {
    location.reload();
  });

  /*=====================*/
  /* RANGE PRICE PRODUCT */
  /*=====================*/

  let product_price_from =
    $("input[name=product_price_from]").val() != ""
      ? $("input[name=product_price_from]").val()
      : 0;
  let product_price_to =
    $("input[name=product_price_to]").val() != ""
      ? $("input[name=product_price_to]").val()
      : 10000000;

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 10000000,
    values: [product_price_from, product_price_to],
    slide: function (event, ui) {
      $("#amout-from").html(FormatCurrency(ui.values[0]) + "đ");
      $("#amout-to").html(FormatCurrency(ui.values[1]) + "đ");

      $("input[name=product_price_from]").val(ui.values[0]);
      $("input[name=product_price_to]").val(ui.values[1]);
    },
  });
  $("#slider-range-mb").slider({
    range: true,
    min: 0,
    max: 10000000,
    values: [product_price_from, product_price_to],
    slide: function (event, ui) {
      $("#amout-from-mb").html(FormatCurrency(ui.values[0]) + "đ");
      $("#amout-to-mb").html(FormatCurrency(ui.values[1]) + "đ");

      $("input[name=product_price_from]").val(ui.values[0]);
      $("input[name=product_price_to]").val(ui.values[1]);
    },
  });

  var FormatCurrency = function (number) {
    return number.toLocaleString("de-DE", { minimumFractionDigits: 0 });
  };

  /* MAIN PROD */

  $(".main-prod .top-main-prod .item-filter span").click(function () {
    ToggleClass($(this).parent(), "open");
    ToggleClass($(this).siblings(), "open");
  });

  /* PRODUCT DETAIL */
  const listImgProduct = $(".product-detail .product-gallery ul li");
  const imgMainProduct = $(".product-detail .product-gallery-main img");
  const leftNavMainDetail = $(
    ".product-detail .product-gallery-main_nav i:first-child"
  );
  const rightNavMainDetail = $(
    ".product-detail .product-gallery-main_nav i:last-child"
  );
  const topNavSlideDetail = $(
    ".product-detail .product-gallery-slide_nav i:first-child"
  );
  const bottomNavSlideDetail = $(
    ".product-detail .product-gallery-slide_nav i:last-child"
  );

  leftNavMainDetail.click(function () {
    const active = $(".product-detail .product-gallery ul li.active");
    const first = $(".product-detail .product-gallery ul li:first-child");
    if (active.is(first)) return;
    active.removeClass("active");
    active.prev().addClass("active");
    GetActivePrdDetail();
  });

  rightNavMainDetail.click(function () {
    const active = $(".product-detail .product-gallery ul li.active");
    const last = $(".product-detail .product-gallery ul li:last-child");
    if (active.is(last)) return;
    active.removeClass("active");
    active.next().addClass("active");
    GetActivePrdDetail();
  });

  var indexDetailSlide = 1;
  topNavSlideDetail.click(function () {
    const active = $(".product-detail .product-gallery ul li.active");
    const heightImg = active.height() + parseInt(active.css("margin-bottom"));
    if (heightImg * indexDetailSlide <= heightImg) return;
    active.parent().css({
      transition: "all 0.3s ease-in-out 0s",
      transform: `translateY(-${heightImg * (indexDetailSlide - 2)}px)`,
    });
    indexDetailSlide--;
  });

  bottomNavSlideDetail.click(function () {
    const active = $(".product-detail .product-gallery ul li.active");
    const heightList = $(".product-detail .product-gallery ul").height();
    const heightImg = active.height() + parseInt(active.css("margin-bottom"));
    if (indexDetailSlide >= listImgProduct.length - 4) return;
    active.parent().css({
      transition: "all 0.3s ease-in-out 0s",
      transform: `translateY(-${heightImg * indexDetailSlide}px)`,
    });
    indexDetailSlide++;
  });

  listImgProduct.click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    GetActivePrdDetail();
  });

  function GetActivePrdDetail() {
    const active = $(".product-detail .product-gallery ul li.active");
    imgMainProduct.attr("src", active.find("img").attr("src"));
  }

  /* PRODUCT INFO */
  const sizeInfo = $(".product-info-quantity .product-quantity");

  const favouriteDetail = $(
    ".product-detail .product-info .product-info-actions i"
  );
  const tabItemDetail = $(
    ".product-detail .product-info .product-info-tab .tab-item"
  );
  const showMore = $(
    ".product-detail .product-info .product-info-tab .show-more img"
  );

  sizeInfo.click(function () {
    const inputQuantity = $(this).parent().find("input");
    var valueInput = parseInt(inputQuantity.attr("value"));
    if ($(this).hasClass("product-detail__quantity--increase")) {
      if (valueInput >= parseInt(inputQuantity.attr("max"))) return;
      inputQuantity.val(++valueInput);
    } else {
      if (valueInput == 1) return;
      inputQuantity.val(--valueInput);
    }

    inputQuantity.attr("value", valueInput);
  });

  favouriteDetail.parent().click(function () {
    var heartDetail = $(this).find(".fa-heart");
    ReplaceClass(heartDetail, "fa-regular", "fa-solid");
  });

  tabItemDetail.click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    const attrTab = $(this).data("tab");
    const tabEle = $(this).parents(".product-info-tab").find(`#${attrTab}`);
    tabEle.siblings().removeClass("active");
    tabEle.addClass("active");
  });

  showMore.click(function () {
    event.preventDefault();
    const tabShow = $(this)
      .parents(".product-info-tab_body")
      .find(".tab-content");

    ReplaceClass(tabShow, "hideContent", "showContent");
    ReplaceClass($(this), "show-img", "hide-img");
    ReplaceClass($(this).siblings(), "show-img", "hide-img");
  });

  /* MODAL PASSWORD */
  $(".my-account .user-info .order-block .form-buttons a").click(function () {
    event.preventDefault();
    ToggleClass($(".modal-info"), "active");

    $(".modal-info .modal-content input").first().focus();
  });

  $(".modal-info .modal-content .close-modal").click(function () {
    ToggleClass($(".modal-info"), "active");
  });

  $(".modal-info .modal-inner .modal-content").click(function () {
    event.stopPropagation();
  });

  $(".modal-info .modal-inner").click(function () {
    ToggleClass($(".modal-info"), "active");
  });

  $(".my-account .checkout-address .order-block_title button").click(
    function () {
      event.preventDefault();
      ToggleClass($(".modal-info"), "active");

      $(".modal-info .modal-content input").first().focus();
    }
  );

  /* Q&A */
  $(".question-answer .order-block ul li a").click(function () {
    $(this).parent().find(".sub-menu-mb").slideToggle("active");

    ReplaceClass($(this).find("i"), "fa-plus", "fa-minus");
  });
});
