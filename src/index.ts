import _ from 'lodash';
import './index.css'
import printMe from './print'

if(process.env.NODE_ENV == 'development') {
    console.log('Your application enviorment mode are development.')
}

function component () {
    const text = '有了丰富的资产组件，我们应该如何使用呢？在 HiTu 的设计使用指引中，我推荐设计者在使用资产的过程中构建 Z 轴向的空间概念，将整幅画面拆分成前景，中景以及背景三个层次，在组件的排放时候，前景凸显重要的元素（如人，核心元素组件等），中间交代所处环境，背景则渲染烘托氛围，在颜色的使用和透明上也是前景的饱和度和透明度最高，逐级降低'
    var element = document.createElement('div');
    var btnWrap = document.createElement('div');
    var btn = document.createElement('button')
    var pre = document.createElement('pre');

    element.innerHTML = _.join(['Hello', 'Webpack', text], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me....'

    // 模块懒加载
    // btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //     var print = module.default;

    //     print();
    // });

    // @ts-ignore
    btn.onclick = printMe()
    btnWrap.appendChild(btn)
    element.appendChild(btnWrap) 

    pre.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to '
    ].join('\n\n');
    element.appendChild(pre)


    return element;
}

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./print', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理+     document.body.appendChild(element);
    })
}