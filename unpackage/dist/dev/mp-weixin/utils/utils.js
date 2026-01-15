"use strict";
const sleep = (t = 1) => {
  t = t * 1e3;
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, t);
  });
};
exports.sleep = sleep;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/utils.js.map
