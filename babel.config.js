const prodEnv = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []
if (prodEnv) {
  plugins.push('transform-remove-console')
}

// 懒加载ant-design-vue
// 如果使用按需导入，请使用以下代码
plugins.push(['import', {
  'libraryName': 'ant-design-vue',
  'libraryDirectory': 'es'
  // 'style': true // `style: true` 会加载 less 文件
}])
plugins.push(['component', {
  'libraryName': 'element-ui',
  'styleLibraryName': 'theme-chalk'
}])

module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      'plugins': ['dynamic-import-node']
    }
  },
  plugins
}
