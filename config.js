const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "G1Z0BJoC#aB_l1EHqWA9BVMzXy4R3aHSXj5Fe5IHycf6E0wFn3mg",
  OWNER_NUM: process.env.OWNER_NUM || "94766351670",
};
