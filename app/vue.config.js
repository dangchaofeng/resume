/*
 * @moduleName: 打包配置
 * @Author: D·Chaofeng
 * @LastModifiedBy: D·Chaofeng
 * @Date: 2018-12-21 17:21:48
 * @LastEditTime: 2019-03-09 14:15:17
 */
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/resume/dist/' : '/',
    // 输出文件目录
    outputDir: '../dist'
};
