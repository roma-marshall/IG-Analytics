# IG Analytics
[![made-with-javascript](https://img.shields.io/badge/made_with-javasript-goldenrod
)](https://www.javascript.com)
[![maintaned-true](https://img.shields.io/badge/maintaned-true-seagreen
)](https://github.com/roma-marshall)
>_The simplest and safest  way to check if people follows you back_


##  How to use it?
1. Copy following code
   
```js
let me = []; let you = []; let heightMe; let heightYou; let difference; let username = window.location.href.slice(25); let meCount = Number(document.querySelector(`[href="${username}following/"] span`).textContent); let youCount = Number(document.querySelector(`[href="${username}followers/"] span`).textContent); const getFollowing = () => { document.querySelector(`[href="${username}following/"]`).click(); setTimeout(() => { document.querySelector('._aano div div').setAttribute('id', 'me'); const meTimer = setInterval(() => { if (document.querySelector('#me')) { heightMe = document.querySelector('#me').scrollHeight; document.querySelector('#me').scrollIntoView({block: 'end'}); if (heightMe === document.querySelector('#me').scrollHeight) { document.querySelectorAll('#me div a[role="link"] span').forEach((element, i) => { me[i] = element.textContent; }); if (me.length === meCount) { getFollowers(); clearInterval(meTimer); } } } }, 1500); }, 5000); }; const getFollowers = () => { document.querySelector(`[href="${username}followers/"]`).click(); setTimeout(() => { document.querySelector('._aano div div').setAttribute('id', 'you'); const youTimer = setInterval(() => { if (document.querySelector('#you')) { heightYou = document.querySelector('#you').scrollHeight; document.querySelector('#you').scrollIntoView({block: 'end'}); if (heightYou === document.querySelector('#you').scrollHeight) { document.querySelectorAll('#you div a[role="link"] span').forEach((element, i) => { you[i] = element.textContent; }); if (you.length === youCount) { getDifference(); clearInterval(youTimer); } } } }, 1500); }, 5000); }; const getDifference = () => { difference = me.filter(x => you.indexOf(x) === -1); console.log(difference); }; getFollowing();
```

2. Go to Instagram webpage and log in into your account.
3. Open the developer console: **Ctrl + Shift + J** (on Windows) or **⌘ + ⌥ + I** (on MacOS) and paste the code.

## License
MIT License
