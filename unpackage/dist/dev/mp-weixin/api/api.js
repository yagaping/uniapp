"use strict";
const api_http = require("./http.js");
const hospitalList = (data) => {
  return api_http.http("/hospital/list");
};
exports.hospitalList = hospitalList;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
