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
    <div style="background-color: black; width: 100%; height: 100%; top: 0; position: absolute; z-index: 9999;">
        <button onclick="getFollowing()"
                style="position: absolute; top: 40%; left: 50%; border-radius: 25px; border: 1px solid gray; padding: 1rem 3rem; background: white; box-shadow: 0 0 35px #3292ff;">
            Start
        </button>
        <div id="ig-analytics"></div>
    </div>`
}


/*
    Get your following (those who you follow)
 */

const getFollowing = () => {
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
                        getFollowers()
                        clearInterval(meTimer)
                    }
                }
            }
        }, 1000)
    }, 5000)
}


/*
    Get your followers (those who follow you)
 */

const getFollowers = () => {
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
                        getDifference()
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

startUp()
