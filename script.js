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
    <div class="ig-bg-root">
        <div style="position: absolute; top: 40%; left: 50%;">
            <div style="font-size: 18px; color: white; margin-bottom: 1rem;">STATUS:
                <span id="currentStatus"></span>
            </div>
            <button class="animated-button1" onclick="getFollowing()">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                Start
            </button>
            <div id="ig-analytics" style="font-size: 16px; overflow: scroll; max-height: 200px;"></div>
        </div>
    </div>
    <style>
    .ig-bg-root {
      width: 100%; height: 100%; top: 0; position: absolute; z-index: 9999;
      background: linear-gradient(170deg, rgba(49, 57, 73, 0.8) 20%, rgba(49, 57, 73, 0.5) 20%, rgba(49, 57, 73, 0.5) 35%, rgba(41, 48, 61, 0.6) 35%, rgba(41, 48, 61, 0.8) 45%, rgba(31, 36, 46, 0.5) 45%, rgba(31, 36, 46, 0.8) 75%, rgba(49, 57, 73, 0.5) 75%), linear-gradient(45deg, rgba(20, 24, 31, 0.8) 0%, rgba(41, 48, 61, 0.8) 50%, rgba(82, 95, 122, 0.8) 50%, rgba(133, 146, 173, 0.8) 100%) #313949;
    }
    
    .animated-button {
      background: linear-gradient(-30deg, #0b1b3d 50%, #08142b 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #d4e0f7;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #8592ad;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button:hover::before {
      opacity: 0.2;
    }
    
    .animated-button span {
      position: absolute;
    }
    
    .animated-button span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(8, 20, 43, 0)), to(#2662d9));
      background: linear-gradient(to left, rgba(8, 20, 43, 0), #2662d9);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @-webkit-keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 20, 43, 0)), to(#2662d9));
      background: linear-gradient(to top, rgba(8, 20, 43, 0), #2662d9);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @-webkit-keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(8, 20, 43, 0)), to(#2662d9));
      background: linear-gradient(to right, rgba(8, 20, 43, 0), #2662d9);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @-webkit-keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 20, 43, 0)), to(#2662d9));
      background: linear-gradient(to bottom, rgba(8, 20, 43, 0), #2662d9);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @-webkit-keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button1 {
      cursor: pointer;
      background: linear-gradient(-30deg, #3d0b0b 50%, #2b0808 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #f7d4d4;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button1::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #ad8585;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button1:hover::before {
      opacity: 0.2;
    }
    
    .animated-button1 span {
      position: absolute;
    }
    
    .animated-button1 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(#d92626));
      background: linear-gradient(to left, rgba(43, 8, 8, 0), #d92626);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button1 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(#d92626));
      background: linear-gradient(to top, rgba(43, 8, 8, 0), #d92626);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button1 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(#d92626));
      background: linear-gradient(to right, rgba(43, 8, 8, 0), #d92626);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button1 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(#d92626));
      background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #d92626);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button2 {
      background: linear-gradient(-30deg, #3d240b 50%, #2b1a08 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #f7e6d4;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button2::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #ad9985;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button2:hover::before {
      opacity: 0.2;
    }
    
    .animated-button2 span {
      position: absolute;
    }
    
    .animated-button2 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(43, 26, 8, 0)), to(#d98026));
      background: linear-gradient(to left, rgba(43, 26, 8, 0), #d98026);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button2 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 26, 8, 0)), to(#d98026));
      background: linear-gradient(to top, rgba(43, 26, 8, 0), #d98026);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button2 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(43, 26, 8, 0)), to(#d98026));
      background: linear-gradient(to right, rgba(43, 26, 8, 0), #d98026);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button2 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 26, 8, 0)), to(#d98026));
      background: linear-gradient(to bottom, rgba(43, 26, 8, 0), #d98026);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button3 {
      background: linear-gradient(-30deg, #3d3d0b 50%, #2b2b08 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #f7f7d4;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button3::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #adad85;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button3:hover::before {
      opacity: 0.2;
    }
    
    .animated-button3 span {
      position: absolute;
    }
    
    .animated-button3 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(43, 43, 8, 0)), to(#d9d926));
      background: linear-gradient(to left, rgba(43, 43, 8, 0), #d9d926);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button3 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 43, 8, 0)), to(#d9d926));
      background: linear-gradient(to top, rgba(43, 43, 8, 0), #d9d926);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button3 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(43, 43, 8, 0)), to(#d9d926));
      background: linear-gradient(to right, rgba(43, 43, 8, 0), #d9d926);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button3 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 43, 8, 0)), to(#d9d926));
      background: linear-gradient(to bottom, rgba(43, 43, 8, 0), #d9d926);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button4 {
      background: linear-gradient(-30deg, #243d0b 50%, #1a2b08 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #e6f7d4;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button4::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #99ad85;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button4:hover::before {
      opacity: 0.2;
    }
    
    .animated-button4 span {
      position: absolute;
    }
    
    .animated-button4 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(26, 43, 8, 0)), to(#80d926));
      background: linear-gradient(to left, rgba(26, 43, 8, 0), #80d926);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button4 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(26, 43, 8, 0)), to(#80d926));
      background: linear-gradient(to top, rgba(26, 43, 8, 0), #80d926);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button4 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(26, 43, 8, 0)), to(#80d926));
      background: linear-gradient(to right, rgba(26, 43, 8, 0), #80d926);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button4 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(26, 43, 8, 0)), to(#80d926));
      background: linear-gradient(to bottom, rgba(26, 43, 8, 0), #80d926);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button5 {
      background: linear-gradient(-30deg, #0b3d0b 50%, #082b08 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #d4f7d4;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button5::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #85ad85;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button5:hover::before {
      opacity: 0.2;
    }
    
    .animated-button5 span {
      position: absolute;
    }
    
    .animated-button5 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(8, 43, 8, 0)), to(#26d926));
      background: linear-gradient(to left, rgba(8, 43, 8, 0), #26d926);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button5 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 43, 8, 0)), to(#26d926));
      background: linear-gradient(to top, rgba(8, 43, 8, 0), #26d926);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button5 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(8, 43, 8, 0)), to(#26d926));
      background: linear-gradient(to right, rgba(8, 43, 8, 0), #26d926);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button5 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 43, 8, 0)), to(#26d926));
      background: linear-gradient(to bottom, rgba(8, 43, 8, 0), #26d926);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button6 {
      background: linear-gradient(-30deg, #0b3d24 50%, #082b1a 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #d4f7e6;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button6::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #85ad99;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button6:hover::before {
      opacity: 0.2;
    }
    
    .animated-button6 span {
      position: absolute;
    }
    
    .animated-button6 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(8, 43, 26, 0)), to(#26d980));
      background: linear-gradient(to left, rgba(8, 43, 26, 0), #26d980);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button6 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 43, 26, 0)), to(#26d980));
      background: linear-gradient(to top, rgba(8, 43, 26, 0), #26d980);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button6 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(8, 43, 26, 0)), to(#26d980));
      background: linear-gradient(to right, rgba(8, 43, 26, 0), #26d980);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button6 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 43, 26, 0)), to(#26d980));
      background: linear-gradient(to bottom, rgba(8, 43, 26, 0), #26d980);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button7 {
      background: linear-gradient(-30deg, #0b3d3d 50%, #082b2b 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #d4f7f7;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button7::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #85adad;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button7:hover::before {
      opacity: 0.2;
    }
    
    .animated-button7 span {
      position: absolute;
    }
    
    .animated-button7 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(8, 43, 43, 0)), to(#26d9d9));
      background: linear-gradient(to left, rgba(8, 43, 43, 0), #26d9d9);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button7 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 43, 43, 0)), to(#26d9d9));
      background: linear-gradient(to top, rgba(8, 43, 43, 0), #26d9d9);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button7 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(8, 43, 43, 0)), to(#26d9d9));
      background: linear-gradient(to right, rgba(8, 43, 43, 0), #26d9d9);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button7 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 43, 43, 0)), to(#26d9d9));
      background: linear-gradient(to bottom, rgba(8, 43, 43, 0), #26d9d9);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button8 {
      background: linear-gradient(-30deg, #0b243d 50%, #081a2b 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #d4e6f7;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button8::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #8599ad;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button8:hover::before {
      opacity: 0.2;
    }
    
    .animated-button8 span {
      position: absolute;
    }
    
    .animated-button8 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(8, 26, 43, 0)), to(#2680d9));
      background: linear-gradient(to left, rgba(8, 26, 43, 0), #2680d9);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button8 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 26, 43, 0)), to(#2680d9));
      background: linear-gradient(to top, rgba(8, 26, 43, 0), #2680d9);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button8 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(8, 26, 43, 0)), to(#2680d9));
      background: linear-gradient(to right, rgba(8, 26, 43, 0), #2680d9);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button8 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 26, 43, 0)), to(#2680d9));
      background: linear-gradient(to bottom, rgba(8, 26, 43, 0), #2680d9);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button9 {
      background: linear-gradient(-30deg, #0b0b3d 50%, #08082b 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #d4d4f7;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button9::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #8585ad;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button9:hover::before {
      opacity: 0.2;
    }
    
    .animated-button9 span {
      position: absolute;
    }
    
    .animated-button9 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(8, 8, 43, 0)), to(#2626d9));
      background: linear-gradient(to left, rgba(8, 8, 43, 0), #2626d9);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button9 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 8, 43, 0)), to(#2626d9));
      background: linear-gradient(to top, rgba(8, 8, 43, 0), #2626d9);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button9 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(8, 8, 43, 0)), to(#2626d9));
      background: linear-gradient(to right, rgba(8, 8, 43, 0), #2626d9);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button9 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 8, 43, 0)), to(#2626d9));
      background: linear-gradient(to bottom, rgba(8, 8, 43, 0), #2626d9);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button10 {
      background: linear-gradient(-30deg, #240b3d 50%, #1a082b 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #e6d4f7;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button10::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #9985ad;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button10:hover::before {
      opacity: 0.2;
    }
    
    .animated-button10 span {
      position: absolute;
    }
    
    .animated-button10 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(26, 8, 43, 0)), to(#8026d9));
      background: linear-gradient(to left, rgba(26, 8, 43, 0), #8026d9);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button10 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(26, 8, 43, 0)), to(#8026d9));
      background: linear-gradient(to top, rgba(26, 8, 43, 0), #8026d9);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button10 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(26, 8, 43, 0)), to(#8026d9));
      background: linear-gradient(to right, rgba(26, 8, 43, 0), #8026d9);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button10 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(26, 8, 43, 0)), to(#8026d9));
      background: linear-gradient(to bottom, rgba(26, 8, 43, 0), #8026d9);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button11 {
      background: linear-gradient(-30deg, #3d0b3d 50%, #2b082b 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #f7d4f7;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button11::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #ad85ad;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button11:hover::before {
      opacity: 0.2;
    }
    
    .animated-button11 span {
      position: absolute;
    }
    
    .animated-button11 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 43, 0)), to(#d926d9));
      background: linear-gradient(to left, rgba(43, 8, 43, 0), #d926d9);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button11 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 43, 0)), to(#d926d9));
      background: linear-gradient(to top, rgba(43, 8, 43, 0), #d926d9);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button11 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 43, 0)), to(#d926d9));
      background: linear-gradient(to right, rgba(43, 8, 43, 0), #d926d9);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button11 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 43, 0)), to(#d926d9));
      background: linear-gradient(to bottom, rgba(43, 8, 43, 0), #d926d9);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    
    .animated-button12 {
      background: linear-gradient(-30deg, #3d0b24 50%, #2b081a 50%);
      padding: 20px 40px;
      margin: 12px;
      display: inline-block;
      -webkit-transform: translate(0%, 0%);
              transform: translate(0%, 0%);
      overflow: hidden;
      color: #f7d4e6;
      font-size: 20px;
      letter-spacing: 2.5px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    
    .animated-button12::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #ad8599;
      opacity: 0;
      -webkit-transition: .2s opacity ease-in-out;
      transition: .2s opacity ease-in-out;
    }
    
    .animated-button12:hover::before {
      opacity: 0.2;
    }
    
    .animated-button12 span {
      position: absolute;
    }
    
    .animated-button12 span:nth-child(1) {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 26, 0)), to(#d92680));
      background: linear-gradient(to left, rgba(43, 8, 26, 0), #d92680);
      -webkit-animation: 2s animateTop linear infinite;
              animation: 2s animateTop linear infinite;
    }
    
    @keyframes animateTop {
      0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }
    
    .animated-button12 span:nth-child(2) {
      top: 0px;
      right: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 26, 0)), to(#d92680));
      background: linear-gradient(to top, rgba(43, 8, 26, 0), #d92680);
      -webkit-animation: 2s animateRight linear -1s infinite;
              animation: 2s animateRight linear -1s infinite;
    }
    
    @keyframes animateRight {
      0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
      100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
    }
    
    .animated-button12 span:nth-child(3) {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 26, 0)), to(#d92680));
      background: linear-gradient(to right, rgba(43, 8, 26, 0), #d92680);
      -webkit-animation: 2s animateBottom linear infinite;
              animation: 2s animateBottom linear infinite;
    }
    
    @keyframes animateBottom {
      0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
      100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
    
    .animated-button12 span:nth-child(4) {
      top: 0px;
      left: 0px;
      height: 100%;
      width: 2px;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 26, 0)), to(#d92680));
      background: linear-gradient(to bottom, rgba(43, 8, 26, 0), #d92680);
      -webkit-animation: 2s animateLeft linear -1s infinite;
              animation: 2s animateLeft linear -1s infinite;
    }
    
    @keyframes animateLeft {
      0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
      }
      100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
      }
    }
    </style>
    `
}


/*
    Get your following (those who you follow)
 */

const getFollowing = () => {
    // document.querySelector('#currentStatus').innerHTML = 'we are analysing your following'
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
        }, 1500)
    }, 5000)
}


/*
    Get your followers (those who follow you)
 */

const getFollowers = () => {
    // document.querySelector('#currentStatus').innerHTML = 'we are analysing your followers'
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
        }, 1500)
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
        result = `<p>${i + 1}.&nbsp;<a style="color: white;" target="_blank" href="https://www.instagram.com/${element.slice(1, -1)}">${element.slice(1, -1)}</a></p>`
        // document.querySelector('#ig-analytics').innerHTML += result
    })
}

getFollowing() //start without gui
// startUp() //start with gui
