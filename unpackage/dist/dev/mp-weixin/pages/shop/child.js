"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "child",
  setup(__props, { expose: __expose }) {
    const count = common_vendor.ref(0);
    __expose({
      count
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.r("child", {
          title: "999",
          obj: {
            id: 1
          }
        }),
        b: common_vendor.t(count.value)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/child.js.map
