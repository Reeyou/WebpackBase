// declare ts global module
declare module 'opn';
// declare module 'webpack';
declare module 'webpack-dev-middleware';
declare module 'webpack-hot-middleware';
declare module 'ora';
declare module 'less-plugin-autoprefix';
declare module 'extract-text-webpack-plugin';
declare module 'webpack-merge';
declare module 'html-webpack-plugin';
declare module 'friendly-errors-webpack-plugin';
declare module 'webpack-dashboard/plugin';
declare module 'copy-webpack-plugin';
declare module 'optimize-css-assets-webpack-plugin';
declare module 'script-ext-html-webpack-plugin';
declare module 'webpack-bundle-analyzer';
declare module 'progress-bar-webpack-plugin';

declare module '*.scss';
declare module '*.json';

declare interface Window {
    Notification: any;
}