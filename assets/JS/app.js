let cl = console.log;

const showInfo = [...document.querySelectorAll('.bundles-section')];




showInfo.forEach((ele) =>{
    ele.addEventListener('click', (eve) =>{
        let getInfo = eve.target;
        cl(getInfo);
        showInfo.forEach((e)=>{
            e.classList.remove('active');
        })

        getInfo.classList.add('active')
    })
})