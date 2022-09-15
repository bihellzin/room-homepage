const heroLabels = [
    {
        title: 'Discover innovative ways to decorate',
        text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        title: 'We are available all across the globe',
        text: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
    },
    {
        title: 'Manufactured with the best materials',
        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
]

let slideIndex = 0;

const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
    document.querySelector('.overlay-disabled').classList.add('overlay-enabled');
    document.querySelector('.mobile-navigation').classList.remove('none')
    document.querySelector('.hamburger').classList.add('none')
    document.querySelector('.logo').classList.add('none')
})

const close = document.querySelector('.close')
close.addEventListener('click', () => {
    document.querySelector('.overlay-disabled').classList.remove('overlay-enabled');
    document.querySelector('.mobile-navigation').classList.add('none')
    document.querySelector('.hamburger').classList.remove('none')
    document.querySelector('.logo').classList.remove('none')
})

document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector(`#slide-${slideIndex + 1}`).classList.add('none')
    slideIndex = slideIndex === 2 ? slideIndex = 0 : slideIndex + 1;
    document.querySelector(`#slide-${slideIndex + 1}`).classList.remove('none')
    document.querySelector('.cta-title').textContent = heroLabels[slideIndex].title
    document.querySelector('.cta-text').textContent = heroLabels[slideIndex].text
})

document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector(`#slide-${slideIndex + 1}`).classList.add('none')
    slideIndex = slideIndex === 0 ? slideIndex = 2 : slideIndex - 1;
    document.querySelector(`#slide-${slideIndex + 1}`).classList.remove('none')
    document.querySelector('.cta-title').textContent = heroLabels[slideIndex].title
    document.querySelector('.cta-text').textContent = heroLabels[slideIndex].text
})
