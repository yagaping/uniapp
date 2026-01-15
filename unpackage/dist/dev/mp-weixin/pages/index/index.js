"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_utils = require("../../utils/utils.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_custom_nav2 = common_vendor.resolveComponent("custom-nav");
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_tabs2 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  (_easycom_custom_nav2 + _easycom_up_search2 + _easycom_up_tabs2 + _easycom_up_lazy_load2)();
}
const _easycom_custom_nav = () => "../../components/custom-nav/custom-nav.js";
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_up_lazy_load = () => "../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
if (!Math) {
  (_easycom_custom_nav + _easycom_up_search + _easycom_up_tabs + _easycom_up_lazy_load + Skeleton)();
}
const Skeleton = () => "./components/Skeleton.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const isFinish = common_vendor.ref(false);
    const addresList = common_vendor.ref([["深圳", "惠州", "杭州"]]);
    const department = common_vendor.reactive([
      {
        name: "骨科",
        active: false
      },
      {
        name: "消化科",
        active: false
      },
      {
        name: "心内科",
        active: false
      },
      {
        name: "儿科",
        active: false
      },
      {
        name: "妇科",
        active: false
      },
      {
        name: "皮肤科",
        active: false
      },
      {
        name: "呼吸科",
        active: false
      },
      {
        name: "全科",
        active: false
      }
    ]);
    const sickness = common_vendor.reactive([
      {
        name: "失眠",
        active: false
      },
      {
        name: "痘痘痤疮",
        active: false
      },
      {
        name: "脱发",
        active: false
      },
      {
        name: "咳嗽",
        active: false
      },
      {
        name: "月经不调",
        active: false
      },
      {
        name: "早泄",
        active: false
      },
      {
        name: "亚健康",
        active: false
      },
      {
        name: "鼻炎",
        active: false
      }
    ]);
    const category = common_vendor.reactive([
      {
        name: "全部",
        active: false
      },
      {
        name: "骨科",
        active: false
      },
      {
        name: "妇科",
        active: false
      },
      {
        name: "男科",
        active: false
      },
      {
        name: "消化科",
        active: false
      },
      {
        name: "皮肤科",
        active: false
      }
    ]);
    const handleDepartment = (data, idx = 0) => {
      data.forEach((item, i) => {
        if (idx === i) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    };
    const handleShare = () => {
    };
    const handleBack = () => {
    };
    common_vendor.onLoad(async () => {
      api_api.hospitalList().then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:282", "succ", res);
      }).catch((err) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:284", "catch", err);
      });
      await utils_utils.sleep(3);
      isFinish.value = true;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isFinish.value
      }, isFinish.value ? {
        b: common_vendor.o(handleShare),
        c: common_vendor.o(handleBack),
        d: common_vendor.p({
          title: "和泰元康",
          rightIcon: "share",
          titleColor: "#000",
          showAddr: true,
          showBack: false,
          options: addresList.value
        }),
        e: common_assets._imports_0,
        f: common_vendor.o(($event) => keyword.value = $event),
        g: common_vendor.p({
          placeholder: "搜索姓名、科室、医院、疾病、药品名称",
          bgColor: "rgba(238, 238, 238, 0.85)",
          showAction: false,
          modelValue: keyword.value
        }),
        h: common_assets._imports_1,
        i: common_assets._imports_2,
        j: common_assets._imports_3,
        k: common_assets._imports_4,
        l: common_vendor.f(department, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.active ? 1 : "",
            c: common_vendor.o(($event) => handleDepartment(department, index), index),
            d: index
          };
        }),
        m: common_vendor.f(sickness, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.active ? 1 : "",
            c: common_vendor.o(($event) => handleDepartment(sickness, index), index),
            d: index
          };
        }),
        n: common_assets._imports_5,
        o: common_vendor.f(3, (i, k0, i0) => {
          return {
            a: i
          };
        }),
        p: common_assets._imports_6,
        q: common_vendor.p({
          list: category,
          lineWidth: "30",
          lineColor: "#107AF4",
          activeStyle: {
            color: "#333",
            fontWeight: "bold",
            transform: "scale(1.05)"
          },
          inactiveStyle: {
            color: "#606266",
            transform: "scale(1)"
          },
          itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
        }),
        r: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: "1cf27b2a-3-" + i0,
            b: i
          };
        }),
        s: common_vendor.p({
          image: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg"
        }),
        t: common_assets._imports_7,
        v: common_assets._imports_8,
        w: common_assets._imports_9
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
