const tabs=document.querySelectorAll('.tab')
const goals=document.querySelectorAll('.goals')
currIndex=0
previoustab=tabs[currIndex]

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        if (previoustab !=tab ) {
            tab.classList.add('tab-active')
            previoustab.classList.remove('tab-active')
            goals[currIndex].classList.add('hidden')
            goals[index].classList.remove('hidden')
            previoustab=tab           
            currIndex=index
        }
    })
})


// ======================= togglable btn ====================

const btn=document.querySelector('.toggle-btn')
const formcard=document.querySelector('#formcard')
btn.addEventListener('click',()=>{
    formcard.classList.toggle('hidden')
})


