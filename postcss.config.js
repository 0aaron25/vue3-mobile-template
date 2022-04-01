// postcss.config.js
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      //设计稿为375px
      //相当于1vh=1px宽度
      viewportWidth: 375,
    },
  },
}
