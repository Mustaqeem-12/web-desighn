const toggleBar = () => {
    let sideBar = document.querySelector('.side-bar')

    if(sideBar.style.right === '-500px'){
        sideBar.style.right = '0'
    }else {
        sideBar.style.right = '-500px'
    }
}

toggleBar()