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

const getFollowing = (isNeed) => {
    if (isNeed === true) {
        document.querySelector(`[href="/${username}/following/"]`).click()
        setTimeout(() => {
            document.querySelector('._aano div div').setAttribute('id', 'me')
            document.querySelectorAll('#me span div [role="link"]').forEach((element, i) => {
                me[i] = element.getAttribute('href')
            })
        }, 3000)
    } else if (isNeed === false) {
        console.log(me)
    }
}
