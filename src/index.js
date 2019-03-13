// PLEASE DON'T change function name
module.exports = function makeExchange(c) {
  if (c > 10000)
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  let h = Math.floor(c / 50);
  c -= h * 50;
  let q = Math.floor(c / 25);
  c -= q * 25;
  let d = Math.floor(c / 10);
  c -= d * 10;
  let n = Math.floor(c / 5);
  c -= n * 5;
  let ans = {};
  if (h > 0) ans.H = h;
  if (q > 0) ans.Q = q;
  if (d > 0) ans.D = d;
  if (n > 0) ans.N = n;
  if (c > 0) ans.P = c;
  return ans;
};
