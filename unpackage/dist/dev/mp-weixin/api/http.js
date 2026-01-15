"use strict";
const common_vendor = require("../common/vendor.js");
const baseUrl = "http://localhost:5173/api";
const http = (url, data = {}, method = "GET") => {
  return new Promise((reslove, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      method,
      data,
      timeout: 1e4,
      success: (res) => {
        if (res.statusCode === 200) {
          reslove(res.data);
        } else {
          reject(res.errMsg);
        }
      },
      fail: (err) => {
        common_vendor.index.__f__("log", "at api/http.js:17", "请求接口失败", err);
        reject(err);
      }
    });
  });
};
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/http.js.map
