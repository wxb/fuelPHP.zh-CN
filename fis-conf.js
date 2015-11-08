// default settings. fis3 release

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// +++++++++++++++++++++++++++++ extends GLOBAL config +++++++++++++++++++++++++++++++++++++++++++++++

// default media is `dev` fis3 默认media 'dev'，这个'dev'的media是保留字
fis.media('dev')
  .match('*', {
    deploy: fis.plugin('http-push', {
    receiver: 'http://iweb.com/fuelphp/receiver.php',
    to: '/usr/local/nginx/www/fuelphp' // 注意这个是指的是测试机器的路径，而非本地机器
  })
});

// 开发环境
fis.media('rd')
.match('*', {
 deploy: fis.plugin('http-push', {
   receiver: 'http://iweb.com/fuelphp/receiver.php',
   to: '/usr/local/nginx/www/fuelphp' // 注意这个是指的是测试机器的路径，而非本地机器
 })
});

// 测试环境
fis.media('qa')
.match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://cq.01.p.p.baidu.com:8888/receiver.php',
    to: '/home/work/htdocs' // 注意这个是指的是测试机器的路径，而非本地机器
  })
});

// 正式环境
fis.media('production')
.match('*', {

});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
