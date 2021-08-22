//common js

document.querySelectorAll('.watch-control, .controls a').forEach(control =>{
    control.addEventListener('click', e => {
        e.preventDefault();
    })
})

//cube
let y = 0;
let x= 0;
let z = 0;
let bool = true;
let inter;
const cube = document.querySelector('.cube');
//controls
document.querySelector('.top-x-control').addEventListener('click' , () =>{
cube.style.transform = `rotateX(${x+=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
})

document.querySelector('.bottom-x-control').addEventListener('click' , () =>{
    cube.style.transform = `rotateX(${x-=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
})

document.querySelector('.left-y-control').addEventListener('click' , () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`;
})

document.querySelector('.right-y-control').addEventListener('click' , () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z}deg)`;
})

document.querySelector('.top-z-control').addEventListener('click' , () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z-=20}deg)`;
})

document.querySelector('.bottom-z-control').addEventListener('click' , () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z+=20}deg)`;
})

//end of controls
const playpause = () => {
    if( bool == true)
    {
        inter = setInterval(() =>{
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        },100)
    }

    else
    {
        clearInterval(inter);
        
    }

}

playpause();

document.querySelector('.controls').addEventListener('mouseover', () =>
{
    bool = false;
    playpause();
})

document.querySelector('.controls').addEventListener('mouseout', () =>
{
    bool = true;
    playpause();
})

// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 5000)
}

slideshow()
// End of Slideshow

//section 3 
const section3Content = document.querySelector('.section3-content')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})

//end of section 3

//SECTION 4
    const watchBands = document.querySelector('.watch-bands')
    const watchCases = document.querySelector('.watch-cases')
    const watchTopControl = document.querySelector('.watch-top-control')
    const watchLeftControl = document.querySelector('.watch-left-control')
    const watchRightControl = document.querySelector('.watch-right-control')
    const watchBottomControl = document.querySelector('.watch-bottom-control');
    let axisy = 0;
    let axisx = 0;
    

    const hideControl = () => 
    {
        if(axisy === -280)
        {
            watchTopControl.classList.add('hidecontrol')
        }
        else
        {
            watchTopControl.classList.remove('hidecontrol');
        }

        if(axisy === 280)
        {
            watchBottomControl.classList.add('hidecontrol');
        }
        else
        {
            watchBottomControl.classList.remove('hidecontrol');
        }

        if(axisx === 280)
        {
            watchLeftControl.classList.add('hidecontrol');
        }
        else
        {
            watchLeftControl.classList.remove('hidecontrol');
        }

        if(axisx === -280)
        {
            watchRightControl.classList.add('hidecontrol');
        }
        else
        {
            watchRightControl.classList.remove('hidecontrol');
        }

        
    }

    watchTopControl.addEventListener('click',()=>{
        watchCases.style.marginTop = `${axisy -= 70}rem`;
        hideControl()
    })

    watchBottomControl.addEventListener('click',()=>{
        watchCases.style.marginTop = `${axisy += 70}rem`;
        console.log(axisy);
        hideControl()
    })
    watchLeftControl.addEventListener('click',()=>{
        watchBands.style.marginLeft = `${axisx += 70}rem`;
        hideControl()
    })
    watchRightControl.addEventListener('click',()=>{
        watchBands.style.marginLeft = `${axisx -= 70}rem`;
        hideControl()
    })
    
//END OF SECTION 4