"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  child();
}
const child = () => "./child.js";
const _sfc_main = {
  __name: "shop",
  setup(__props) {
    const childRef = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/shop/shop.vue:18", "childRef", childRef.value.count);
    });
    const onClick = () => {
      childRef.value.count++;
      common_vendor.index.__f__("log", "at pages/shop/shop.vue:22", "count", childRef.value.count);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          title,
          obj
        }, s0, i0) => {
          return {
            a: common_vendor.t(obj.id),
            b: i0,
            c: s0
          };
        }, {
          name: "child",
          path: "a",
          vueId: "4ce56a5b-0"
        }),
        b: common_vendor.o(onClick),
        c: common_vendor.sr(childRef, "4ce56a5b-0", {
          "k": "childRef"
        }),
        d: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/shop.js.map
