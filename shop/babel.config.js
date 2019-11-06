// vant 引入单个组件需要下载npm i babel-plugin-import -D
// vant 引入单个组件需要配置文件babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
