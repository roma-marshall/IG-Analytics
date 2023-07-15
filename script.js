/**
 * @author roma-marshall <https://github.com/roma-marshall>
 */

/*
    Variables initialization
 */

let me = []
let you = []
let username = prompt('Type here your nickname')

/*
    Add your following (those who you follow)
 */

const getFollowing = () => {
    document.querySelector(`[href="/${username}/following/"]`).click()
    setTimeout(() => {
        document.querySelector('._aano div div').setAttribute('id', 'me')
        document.querySelectorAll('#me span div [role="link"]').forEach((element, i) => {
            me[i] = element.getAttribute('href')
        })
    }, 3000)
}


/*
    Add your followers (those who follow you)
 */

const getFollowers = () => {
    document.querySelector(`[href="/${username}/followers/"]`).click()
    setTimeout(() => {
        document.querySelector('._aano div div').setAttribute('id', 'you')
        document.querySelectorAll('#you span div [role="link"]').forEach((element, i) => {
            you[i] = element.getAttribute('href')
        })
    }, 3000)
}


/*
    Check the difference between following and followers
 */

const getDifference = () => {
    let difference = me.filter(x => you.indexOf(x) === -1)
    console.log(difference)
}


/*
    Run data analytics
 */

getFollowing() // run and wait a few seconds to collect data
getFollowers() // then run and wait a few seconds to collect data
getDifference() // run and get results
