/* Animation */

@keyframes grow-shrink {
    50% {
        letter-spacing: 1.1px
    }
}

@keyframes glow {
    50% {
        text-shadow: 0px 0px 4px #e2f3e4;
        background: rgba(255, 255, 255, .1);
        border-radius: 5px;
    }
}

@keyframes blink {
    50% {
        color: transparent
    }
}

@keyframes floating {
    0% {
        transform: translateY(-3px);
    }
    100% {
        transform: translateY(4px);
    }
}

@font-face {
    font-family: pixel;
    src: url("https://cdn.glitch.com/f2c169f2-bca5-447d-afad-8266594111f2%2FNouveau_IBM.ttf?1531834726586");
}

/* Global */

html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: url("https://cdn.glitch.com/f2c169f2-bca5-447d-afad-8266594111f2%2Fscanlinebg.jpg?1531462429565");
}

*,
*:before,
*:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}

body {
    font-family: pixel;
    min-height: 100%;
    margin: 0;
}

header {
    margin: 100px auto 5px auto;
    width: 620px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid transparent;
    border-top: none;
    border-bottom: 1px solid #46878f;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .7), 0 -1px 1px #46878f, 0 1px 0 #46878f;
}

.nav {
    background: #46878f;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
}

.nav-list {
    display: inline-block;
    margin-top: 25px;
    padding: 0;
    list-style: none;
}

.nav-logo {
    margin-right: 10px;
    position: relative;
    top: 16px;
}

.nav-name {
    margin-right: 20px;
    font-weight: bold;
    letter-spacing: 1.4px;
}

.nav-link {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    background: white;
    color: black;
    text-decoration: none;
    -webkit-box-shadow: 4px 4px 0 #222;
    box-shadow: 4px 4px 0 #222;
    -webkit-transition: 0.05s all linear;
    -moz-transition: 0.05s all linear;
    -o-transition: 0.05s all linear;
    transition: 0.05s all linear;
}

.nav-link:hover {
    -webkit-box-shadow: 3px 3px 0 #222;
    box-shadow: 3px 3px 0 #222;
    color: white;
}

.nav-link:nth-child(1):hover {
    background: #118ab2;
}

.nav-link:nth-child(2):hover {
    background: #ffd573;
}

.nav-link:nth-child(3):hover {
    background: #06d6a0;
}

.nav-link:nth-child(4):hover {
    background: #ef476f;
}

.nav-line {
    margin: 0 auto;
    border: 0;
    width: 600px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    background: #999;
}

.main {
    margin: 10px auto;
    max-width: 600px;
    text-align: center;
    background: rgba(48, 227, 68, .1);
    border-radius: 3px;
    border: 1px solid transparent;
    border-top: none;
    border-bottom: 1px solid #46878f;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .7), 0 -1px 1px #FFF, 0 1px 0 #FFF;
}

.main-container {
    margin: 30px auto;
    padding: 20px;
    display: inline-block;
    height: auto;
    width: auto;
}

.hidden {
    display: none;
}

.footer-container {
    margin: 0 auto;
    width: 600px;
    text-align: right;
}

.footer-copyright {
    font-size: 16px;
}

a.resume-link {
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    animation: glow 2s infinite;
}

/* Phone */

@media only screen and (max-width: 600px) {
    header {
        margin: 30px auto -15px !important;
        transition: all .1s ease;
        width: 94vw !important;
    }
    .nav {
        margin: 0;
    }
    ul.nav-list {
        display: block;
    }
    a.nav-link {
        display: block;
        width: 80%;
        padding: 10px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 10px;
    }
}

/* Tablet? */

@media screen and (max-width: 650px) {
    .main {
        transform: scale(.95);
        width: 96vw;
        transition: all .1s ease;
    }
    div.main-container {
        display: block;
    }
    div.footer-container {
        width: 300px;
        text-align: center;
    }