# IG Unfollowers
>_The simplest and safest  way to check if people follows you back_


##  How to use it?
1. Copy following code
   
```js
let me=[],you=[],difference,username=window.location.href.slice(25),work="\uD83D\uDC49",done="✅";const startUp=()=>{let e=document.querySelector("#fb-root");e.innerHTML+=` <div style="z-index: 9999; position: fixed; width: 200px; top: 20%; right: 0; border-radius: 5px; color: white; font-size: 16px; font-family: Arial, serif; box-shadow: 0 10px 15px -3px #4d4d4d;"> <div style="display: flex; justify-content: space-between; font-size: 18px; background-color: #3292ff;"> <div style="padding: 0.75rem 1rem;">IG Analytics</div> </div> <div style="padding: 1.5rem; background-color: #dbecff;"> <div style="display: flex; margin-bottom: 0.75rem;"> <span id="mark1" style="font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step1" onclick="openFollowing()">click me!</button> </div> <div style="display: flex; margin-bottom: 0.75rem;"> <span id="mark2" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step2" disabled onclick="getFollowing()">click me</button> </div> <div style="display: flex; margin-bottom: 0.75rem;"> <span id="mark3" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step3" disabled onclick="openFollowers()">click me</button> </div> <div style="display: flex; margin-bottom: 0.75rem;"> <span id="mark4" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step4" disabled onclick="getFollowers()">click me</button> </div> <div style="display: flex; margin-bottom: 0.75rem;"> <span id="mark5" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step5" disabled onclick="getDifference()">click me</button> </div> </div> <div id="ig-analytics" style="padding: 0.75rem 1rem; background-color: #dbecff; color: black; overflow: scroll; max-height: 200px;"></div> </div>`},openFollowing=()=>{document.querySelector(`[href="${username}following/"]`).click(),document.querySelector("button#step1").disabled=!0,document.querySelector("#mark1").innerHTML=done,document.querySelector("#mark2").innerHTML=work,document.querySelector("#mark2").style.visibility="initial",setTimeout(()=>{document.querySelector("button#step2").disabled=!1},1e3)},getFollowing=()=>{document.querySelector("._aano div div").setAttribute("id","me"),document.querySelector("button#step2").disabled=!0,document.querySelector("button#step3").disabled=!1,document.querySelector("#mark2").innerHTML=done,document.querySelector("#mark3").innerHTML=work,document.querySelector("#mark3").style.visibility="initial",document.querySelectorAll('#me span div [role="link"]').forEach((e,i)=>{me[i]=e.getAttribute("href")})},openFollowers=()=>{document.querySelector(`[href="${username}followers/"]`).click(),document.querySelector("button#step3").disabled=!0,document.querySelector("#mark3").innerHTML=done,document.querySelector("#mark4").innerHTML=work,document.querySelector("#mark4").style.visibility="initial",setTimeout(()=>{document.querySelector("button#step4").disabled=!1},1e3)},getFollowers=()=>{document.querySelector("._aano div div").setAttribute("id","you"),document.querySelector("button#step4").disabled=!0,document.querySelector("button#step5").disabled=!1,document.querySelector("#mark4").innerHTML=done,document.querySelector("#mark5").innerHTML=work,document.querySelector("#mark5").style.visibility="initial",document.querySelectorAll('#you span div [role="link"]').forEach((e,i)=>{you[i]=e.getAttribute("href")})},getDifference=()=>{document.querySelector("button#step5").disabled=!0,document.querySelector("#mark5").innerHTML=done,difference=me.filter(e=>-1===you.indexOf(e)),console.log(difference);let e;difference.forEach((i,t)=>{e=`<p>${t+1}.&nbsp;<a target="_blank" href="https://www.instagram.com/${i.slice(1,-1)}">${i.slice(1,-1)}</a></p>`,document.querySelector("#ig-analytics").innerHTML+=e})};startUp();
   ```

2. Goto Instagram webpage and log in into your account.
3. Open the developer console: **Ctrl + Shift + J** (on Windows) || **⌘ + ⌥ + I** (on MacOS) and paste the code.
