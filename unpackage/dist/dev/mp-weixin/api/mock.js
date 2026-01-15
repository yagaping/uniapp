"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.Mock.mock(/api\/hospital\/list/, "get", function() {
  return {
    code: 0,
    data: [
      { id: 1 },
      { id: 2 }
    ]
  };
});
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/mock.js.map
