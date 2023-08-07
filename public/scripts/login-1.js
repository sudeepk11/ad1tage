const passwordSVG = document.getElementById('password-js')
let passwordInput = document.getElementById('password')

passwordSVG.addEventListener('mousedown', (e) => {
    passwordInput.type = 'text'
})

passwordSVG.addEventListener('mouseup', (e) => {
    passwordInput.type = 'password'
})

document.addEventListener('mouseup', (e) => {
    if (passwordInput.type === 'text') {
        passwordInput.type = 'password'
    }
})