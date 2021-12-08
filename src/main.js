let html = document.querySelector("#html")  //通过css选择器找到""内元素
let style = document.querySelector("#style");

let string = `
/* 你好，我是一名前端新人
接下来我要添加样式了
我要加的样式是 */   
body{
    color: orange;
}
/* 接下来我要展示一下我的前端功底
首先我要准备一个div */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成八卦图
注意看好了
首先,把 div变成一个圆 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none; 
}
/* 八卦是阴阳形成的
一黑一白 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 八卦转起来 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom :0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;   // 如果不加注释,中文会影响body
let string2 = '';
// string = string.replace("\n", "<br>");     //replace把\n替换为<br>,但是只换第一个
// string = string.replace(/\n/g, "<br>");    //添加正则表达式,替换全部 
// 但是这样会在替换的时候显示第一个<,因为它是一个一个的替换
//在console.log里查看字符编码, 用.charCodeAt() ,用于识别空格回车
let n = 0;

// html.innerHTML = n;  //innerHTML就是在HTML内写出
// html.innerHTML = string.substring(0, n); //substring就是执行显示从0到n，而不会依次覆盖

// setInterval(() => {
//     n = n+1;
//     html.innerHTML = n;
// }, 1000);   //会一直执行代码，setTimeout只执行一次，但一般不用

// let step = () => {
//     setTimeout(() => {
//         n = n + 1;
//         html.innerHTML = n;
//         if (n <= 10) {
//             step();
//         } else {
//         }
//     }, 1000);
// }; 
// step();  //对比setInterval的好处是可以控制什么时候停

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            //如果是回车,添加<br>
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            //如果不是回车,就照搬在string2里
            string2 += string[n];
        }
        // string2 += (string[n] === "\n" ? "<br>" : string[n])  //简化上面的代码
        // html.innerHTML = string.substring(0, n);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999); //自动滚动
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
            console.log(n)
        }
    }, 0);
};

step();



