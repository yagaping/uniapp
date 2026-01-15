"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_up_picker2 = common_vendor.resolveComponent("up-picker");
  (_easycom_up_icon2 + _easycom_u_icon2 + _easycom_uni_icons2 + _easycom_up_picker2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_up_picker = () => "../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (_easycom_up_icon + _easycom_u_icon + _easycom_uni_icons + _easycom_up_picker)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "custom-nav",
  props: {
    // 导航标题
    title: {
      type: String,
      default: "自定义导航"
    },
    // 是否显示返回按钮
    showBack: {
      type: Boolean,
      default: true
    },
    // 是否显示选择地址按钮
    showAddr: {
      type: Boolean,
      default: false
    },
    // 右侧按钮文字
    rightText: {
      type: String,
      default: ""
    },
    // 右侧图标（uni-icons 类型）
    rightIcon: {
      type: String,
      default: ""
    },
    // 导航背景色
    bgColor: {
      type: String,
      default: "transparent"
    },
    // 标题颜色
    titleColor: {
      type: String,
      default: "#333333"
    },
    // 图标/右侧文字颜色
    iconColor: {
      type: String,
      default: "#007aff"
    },
    options: {
      type: Array,
      default: []
    }
  },
  emits: ["rightClick", "backClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const showAddrModal = common_vendor.ref(false);
    common_vendor.ref(0);
    const addressText = common_vendor.ref(props.options[0][0]);
    const emit = __emit;
    const statusBarTop = common_vendor.ref(10);
    const navBarHeight = common_vendor.ref(44);
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at components/custom-nav/custom-nav.vue:106", 123);
      const systemInfo = common_vendor.index.getSystemInfoSync();
      statusBarTop.value = systemInfo.safeArea.top || 10;
      navBarHeight.value = systemInfo.statusBarHeight;
      common_vendor.index.__f__("log", "at components/custom-nav/custom-nav.vue:111", "systemInfo", systemInfo);
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      navBarHeight.value = menuButtonInfo.height;
      common_vendor.index.__f__("log", "at components/custom-nav/custom-nav.vue:117", "menuButtonInfo", menuButtonInfo);
      const navExtraHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2;
      navBarHeight.value += navExtraHeight;
    });
    const handleBack = () => {
      emit("backClick");
      common_vendor.index.navigateBack({
        delta: 1,
        fail: () => {
          common_vendor.index.reLaunch({ url: "/pages/index/index" });
        }
      });
    };
    const onConfirm = (e) => {
      addressText.value = e.value[0];
      showAddrModal.value = false;
    };
    const handleRightClick = () => {
      emit("rightClick");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.showBack
      }, __props.showBack ? {
        b: common_vendor.p({
          name: "arrow-left",
          color: "#333",
          size: "24"
        }),
        c: common_vendor.o(handleBack)
      } : {}, {
        d: __props.showAddr
      }, __props.showAddr ? {
        e: common_assets._imports_0$1,
        f: common_vendor.t(addressText.value),
        g: common_vendor.p({
          name: "arrow-down-fill",
          size: "8"
        }),
        h: common_vendor.o(($event) => showAddrModal.value = !showAddrModal.value)
      } : {}, {
        i: common_vendor.t(__props.title),
        j: __props.titleColor,
        k: __props.rightText || __props.rightIcon
      }, __props.rightText || __props.rightIcon ? common_vendor.e({
        l: __props.rightIcon
      }, __props.rightIcon ? {
        m: common_vendor.p({
          type: __props.rightIcon,
          size: "20",
          color: __props.iconColor
        })
      } : {
        n: common_vendor.t(__props.rightText),
        o: __props.iconColor
      }, {
        p: common_vendor.o(handleRightClick)
      }) : {}, {
        q: common_vendor.o(($event) => showAddrModal.value = false),
        r: common_vendor.o(($event) => showAddrModal.value = false),
        s: common_vendor.o(onConfirm),
        t: common_vendor.p({
          closeOnClickOverlay: true,
          show: showAddrModal.value,
          columns: __props.options
        }),
        v: statusBarTop.value + "px",
        w: __props.bgColor,
        x: navBarHeight.value + "px",
        y: common_vendor.gei(_ctx, "")
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b09776d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/custom-nav/custom-nav.js.map
