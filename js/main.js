let start = document.querySelector('#start')
let refresh = document.querySelector('.refresh')
let popup = document.querySelector('.popup')
let close = document.querySelector('.x')
let desctop = document.querySelector('.desctop')
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let spans = document.querySelectorAll('.span')
let gam = document.querySelectorAll('.gam')
let motion = 0
let startGame = document.querySelector('#startGame')
let gamer1 = document.querySelectorAll('#gamer1')
let gamer1Name = gamer1[0]
let gamer1Age = gamer1[1]
let gam1Coins = 0
let gam2Coins = 0
let gamer2 = document.querySelectorAll('#gamer2')
let gamer2Name = gamer2[0]
let gamer2Age = gamer2[1]
let gamers1 = []
let gamers2 = []
let color = document.querySelector('#color')
let body = document.querySelector('body')
let bc = document.querySelector('.bc')
let tc = document.querySelector('.tc')
let tcolor = document.querySelector('#tcolor')
let bn = document.querySelector('.bn')
let inumber = document.querySelector('#ni')


bn.addEventListener('click', () => {
    body.style.fontSize = inumber.value + 'px'
})

tc.addEventListener('click', () => {
    body.style.color = tcolor.value
})

bc.addEventListener('click', () => {
    body.style.background = color.value
})

start.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.add('popactive')
})

close.addEventListener('click', () => {
    popup.classList.remove('popactive')
})
startGame.addEventListener('click', (e) => {
    e.preventDefault()
    gamers1.push({
        name: gamer1Name.value,
        age: gamer1Age.value
    })
    gamers2.push({
        name: gamer2Name.value,
        age: gamer2Age.value
    })
    popup.classList.remove('popactive')
    desctop.classList.add('dactive')
    start.classList.add('startclose')
    gam[0].innerHTML = `
    Name: ${gamer1Name.value}
    <br>
    Age: ${gamer1Age.value}
    <br>
    Coins:
`   
    gam[1].innerHTML = `
    Name: ${gamer2Name.value}
    <br>
    Age: ${gamer2Age.value}
    <br>
    Coins:
`
})
menu.addEventListener('click', () => {
    burger.classList.toggle('burgeractive')
    menu.classList.toggle('menuactive')
})
refresh.addEventListener('click', () => {
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.remove('black')
        spans[i].classList.remove('red')
    }
})

for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', () => {
        if (motion % 2 == 0) {
            spans[i].classList.add('black')
            if (spans[0].classList.value == 'span black' && spans[1].classList.value == 'span black' && spans[2].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[3].classList.value == 'span black' && spans[4].classList.value == 'span black' && spans[5].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[6].classList.value == 'span black' && spans[7].classList.value == 'span black' && spans[8].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[0].classList.value == 'span black' && spans[3].classList.value == 'span black' && spans[6].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[1].classList.value == 'span black' && spans[4].classList.value == 'span black' && spans[7].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[2].classList.value == 'span black' && spans[5].classList.value == 'span black' && spans[8].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[0].classList.value == 'span black' && spans[4].classList.value == 'span black' && spans[8].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[6].classList.value == 'span black' && spans[4].classList.value == 'span black' && spans[2].classList.value == 'span black') {
                gam[0].innerHTML = `
                Name: ${gamer1Name.value}
                <br>
                Age: ${gamer1Age.value}
                <br>
                Coins: ${++gam1Coins}
            ` 
                refresh.classList.add('refreshactive')
              }
        }else{
            spans[i].classList.add('red')
            if (spans[0].classList.value == 'span red' && spans[1].classList.value == 'span red' && spans[2].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[3].classList.value == 'span red' && spans[4].classList.value == 'span red' && spans[5].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[6].classList.value == 'span red' && spans[7].classList.value == 'span red' && spans[8].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[0].classList.value == 'span red' && spans[3].classList.value == 'span red' && spans[6].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[1].classList.value == 'span red' && spans[4].classList.value == 'span red' && spans[7].classList.value == 'span red') {
                ggam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[2].classList.value == 'span red' && spans[5].classList.value == 'span red' && spans[8].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[0].classList.value == 'span red' && spans[4].classList.value == 'span red' && spans[8].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }else if (spans[6].classList.value == 'span red' && spans[4].classList.value == 'span red' && spans[2].classList.value == 'span red') {
                gam[1].innerHTML = `
                Name: ${gamer2Name.value}
                <br>
                Age: ${gamer2Age.value}
                <br>
                Coins: ${++gam2Coins}
            ` 
                refresh.classList.add('refreshactive')
              }
        }
        motion++
    })
}
