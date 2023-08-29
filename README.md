# IG Unfollowers
[![made-with-javascript](https://img.shields.io/badge/made_with-javasript-goldenrod
)](https://www.javascript.com)
[![maintaned-true](https://img.shields.io/badge/maintaned-true-seagreen
)](https://github.com/roma-marshall)
>_The simplest and safest  way to check if people follows you back_


##  How to use it?
1. Copy following code
   
```js
let me=[],you=[],heightMe,heightYou,difference,username=window.location.href.slice(25),meCount=Number(document.querySelector(`[href="${username}following/"] span`).textContent),youCount=Number(document.querySelector(`[href="${username}followers/"] span`).textContent);const getFollowing=()=>{document.querySelector(`[href="${username}following/"]`).click(),setTimeout(()=>{document.querySelector("._aano div div").setAttribute("id","me");let e=setInterval(()=>{document.querySelector("#me")&&(heightMe=document.querySelector("#me").scrollHeight,document.querySelector("#me").scrollIntoView({block:"end"}),heightMe===document.querySelector("#me").scrollHeight&&(document.querySelectorAll('#me div a[role="link"] span').forEach((e,o)=>{me[o]=e.textContent}),me.length===meCount&&(getFollowers(),clearInterval(e))))},1500)},5e3)},getFollowers=()=>{document.querySelector(`[href="${username}followers/"]`).click(),setTimeout(()=>{document.querySelector("._aano div div").setAttribute("id","you");let e=setInterval(()=>{document.querySelector("#you")&&(heightYou=document.querySelector("#you").scrollHeight,document.querySelector("#you").scrollIntoView({block:"end"}),heightYou===document.querySelector("#you").scrollHeight&&(document.querySelectorAll('#you div a[role="link"] span').forEach((e,o)=>{you[o]=e.textContent}),you.length===youCount&&(getDifference(),clearInterval(e))))},1500)},5e3)},getDifference=()=>{difference=me.filter(e=>-1===you.indexOf(e)),console.log(difference);let e;difference.forEach((o,t)=>{e=`<p>${t+1}.&nbsp;<a style="color: white;" target="_blank" href="https://www.instagram.com/${o.slice(1,-1)}">${o.slice(1,-1)}</a></p>`})};getFollowing();
```

2. Goto Instagram webpage and log in into your account.
3. Open the developer console: **Ctrl + Shift + J** (on Windows) or **⌘ + ⌥ + I** (on MacOS) and paste the code.
