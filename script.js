/**
 * @author roma-marshall <https://github.com/roma-marshall>
 */

/*
    Variables initialization
 */

let me = []
let you = []
let username = window.location.href.slice(25)

/*
    Start up function
 */

const startUp = () => {
    let body = document.querySelector('#fb-root')
    body.innerHTML += `
    <div style="z-index: 9999; position: fixed; width: 200px; top: 20%; right: 0;
    padding: 0 1.5rem; border-radius: 5px; color: black; background-color: #cecece;
    font-size: 16px; font-family: Arial, serif;
    box-shadow: 0 10px 15px -3px #4d4d4d;">
        <p style="font-size: 18px;">Hey, this service will show you who is not follow you on instagram. Complete these steps:</p>
        <p>1. Run the first stage <button onclick="openFollowing()">click me!</button></p>
        <p>2. Scroll to the bottom your following, then <button id="step2" disabled onclick="getFollowing()">click me</button></p>
        <p>3. Now <button id="step3" disabled onclick="openFollowers()">click me</button></p>
        <p>4. Scroll to the bottom your followers, then <button id="step4" disabled onclick="getFollowers()">click me</button></p>
        <p>5. Then <button id="step5" disabled onclick="getDifference()">click me to get results</button></p>
    </div>`
}

/*
    Step 1: Open Following
 */

const openFollowing = () => {
    document.querySelector(`[href="${username}following/"]`).click()
    setTimeout(() => {
        document.querySelector('button#step2').disabled = false
    }, 5000)
}


/*
    Add your following (those who you follow)
 */

const getFollowing = () => {
    document.querySelector('._aano div div').setAttribute('id', 'me')
    document.querySelectorAll('#me span div [role="link"]').forEach((element, i) => {
        me[i] = element.getAttribute('href')
    })
    document.querySelector('button#step3').disabled = false
}


/*
    Step 3: Open Followers
 */

const openFollowers = () => {
    document.querySelector(`[href="${username}followers/"]`).click()
    setTimeout(() => {
        document.querySelector('button#step4').disabled = false
    }, 5000)
}


/*
    Add your followers (those who follow you)
 */

const getFollowers = () => {
    document.querySelector('._aano div div').setAttribute('id', 'you')
    document.querySelectorAll('#you span div [role="link"]').forEach((element, i) => {
        you[i] = element.getAttribute('href')
    })
    document.querySelector('button#step5').disabled = false
}


/*
    Check the difference between following and followers
 */

const getDifference = () => {
    let difference = me.filter(x => you.indexOf(x) === -1)
    console.log(difference)
}


/*
    Run script
 */

startUp()
