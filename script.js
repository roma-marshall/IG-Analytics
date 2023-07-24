/**
 * @author roma-marshall <https://github.com/roma-marshall>
 */

/*
    Variables initialization
 */

let me = []
let you = []
let heightMe
let heightYou
let difference
let username = window.location.href.slice(25)
let meCount = Number(document.querySelector(`[href="${username}following/"] span`).textContent)
let youCount = Number(document.querySelector(`[href="${username}followers/"] span`).textContent)


/*
    Start up function
 */

const startUp = () => {
    let body = document.querySelector('#fb-root')
    body.innerHTML += `
    <div style="z-index: 9999; position: fixed; width: 200px; top: 20%; right: 0;
    border-radius: 5px; color: white;
    font-size: 16px; font-family: Arial, serif;
    box-shadow: 0 10px 15px -3px #4d4d4d;">
        <div style="display: flex; justify-content: space-between; font-size: 18px; background-color: #3292ff;">
            <div style="padding: 0.75rem 1rem;">IG Analytics</div>
        </div>
        <div style="padding: 1.5rem; background-color: #dbecff;">
            <div style="display: flex; margin-bottom: 0.75rem;">
                <span id="mark1" style="font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step1" onclick="openFollowing()">click me!</button>
            </div>
            <div style="display: flex; margin-bottom: 0.75rem;">
                <span id="mark2" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step2" disabled onclick="getFollowing()">click me</button>
            </div>
            <div style="display: flex; margin-bottom: 0.75rem;">
                <span id="mark3" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step3" disabled onclick="openFollowers()">click me</button>
            </div>
            <div style="display: flex; margin-bottom: 0.75rem;">
                <span id="mark4" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step4" disabled onclick="getFollowers()">click me</button>
            </div>
            <div style="display: flex; margin-bottom: 0.75rem;">
                <span id="mark5" style="visibility: hidden; font-size: 1.5rem; margin-right: 0.25rem;">👉</span><button id="step5" disabled onclick="getDifference()">click me</button>
            </div>
        </div>
        <div id="ig-analytics" style="padding: 0.75rem 1rem; background-color: #dbecff; color: black;
        overflow: scroll; max-height: 200px;"></div>
    </div>`
}


const initFunc = () => {
    document.querySelector(`[href="${username}following/"]`).click()
    setTimeout(() => {
        document.querySelector('._aano div div').setAttribute('id', 'me')
        const meTimer = setInterval(() => {
            if (document.querySelector('#me')) {
                heightMe = document.querySelector('#me').scrollHeight
                document.querySelector('#me').scrollIntoView({block: 'end'})
                if (heightMe === document.querySelector('#me').scrollHeight) {
                    document.querySelectorAll('#me div a[role="link"] span').forEach((element, i) => {
                        me[i] = element.textContent
                    })
                    if (me.length === meCount) {
                        initNext()
                        clearInterval(meTimer)
                    }
                }
            }
        }, 1000)
    }, 5000)
}


const initNext = () => {
    document.querySelector(`[href="${username}followers/"]`).click()
    setTimeout(() => {
        document.querySelector('._aano div div').setAttribute('id', 'you')
        const youTimer = setInterval(() => {
            if (document.querySelector('#you')) {
                heightYou = document.querySelector('#you').scrollHeight
                document.querySelector('#you').scrollIntoView({block: 'end'})
                if (heightYou === document.querySelector('#you').scrollHeight) {
                    document.querySelectorAll('#you div a[role="link"] span').forEach((element, i) => {
                        you[i] = element.textContent
                    })
                    if (you.length === youCount) {
                        clearInterval(youTimer)
                    }
                }
            }
        }, 1000)
    }, 5000)
}


/*
    Check the difference between following and followers
 */

const getDifference = () => {
    difference = me.filter(x => you.indexOf(x) === -1)
    console.log(difference)
    let result
    difference.forEach((element, i) => {
        result = `<p>${i + 1}.&nbsp;<a target="_blank" href="https://www.instagram.com/${element.slice(1, -1)}">${element.slice(1, -1)}</a></p>`
        document.querySelector('#ig-analytics').innerHTML += result
    })
}


/*
    Run script
 */

initFunc()
