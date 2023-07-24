/**
 * @author roma-marshall <https://github.com/roma-marshall>
 */

/*
    Variables initialization
 */

let me = []
let you = []
let difference
let username = window.location.href.slice(25)
let work = '👉'
let done = '✅'

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

/*
    Step 1: Open Following
 */

const openFollowing = () => {
    document.querySelector(`[href="${username}following/"]`).click()
    document.querySelector('button#step1').disabled = true
    document.querySelector('#mark1').innerHTML = done
    document.querySelector('#mark2').innerHTML = work
    document.querySelector('#mark2').style.visibility = 'initial'
    setTimeout(() => {
        document.querySelector('button#step2').disabled = false
    }, 1000)
}


/*
    Add your following (those who you follow)
 */

const getFollowing = () => {
    document.querySelector('._aano div div').setAttribute('id', 'me')
    document.querySelector('button#step2').disabled = true
    document.querySelector('button#step3').disabled = false
    document.querySelector('#mark2').innerHTML = done
    document.querySelector('#mark3').innerHTML = work
    document.querySelector('#mark3').style.visibility = 'initial'
    document.querySelectorAll('#me div [role="link"]').forEach((element, i) => {
        me[i] = element.getAttribute('href')
    })
}


/*
    Step 3: Open Followers
 */

const openFollowers = () => {
    document.querySelector(`[href="${username}followers/"]`).click()
    document.querySelector('button#step3').disabled = true
    document.querySelector('#mark3').innerHTML = done
    document.querySelector('#mark4').innerHTML = work
    document.querySelector('#mark4').style.visibility = 'initial'
    setTimeout(() => {
        document.querySelector('button#step4').disabled = false
    }, 1000)
}


/*
    Add your followers (those who follow you)
 */

const getFollowers = () => {
    document.querySelector('._aano div div').setAttribute('id', 'you')
    document.querySelector('button#step4').disabled = true
    document.querySelector('button#step5').disabled = false
    document.querySelector('#mark4').innerHTML = done
    document.querySelector('#mark5').innerHTML = work
    document.querySelector('#mark5').style.visibility = 'initial'
    document.querySelectorAll('#you div [role="link"]').forEach((element, i) => {
        you[i] = element.getAttribute('href')
    })
}


/*
    Check the difference between following and followers
 */

const getDifference = () => {
    document.querySelector('button#step5').disabled = true
    document.querySelector('#mark5').innerHTML = done
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

startUp()
