import { helper } from "@ember/component/helper";

export default helper(function currency(params, hash = {}) {
  const [number] = params;
  const { sign = "$" } = hash;
  const dollars = Math.floor(number).toLocaleString();

  return `${sign}${dollars}`;
});
