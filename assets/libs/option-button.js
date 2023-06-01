const optionButtonElements = document.querySelectorAll('[option-button]');

optionButtonElements.forEach(optionButtonElement => {
    optionButtonElement.addEventListener('click', () => {
        optionButtonElement.parentNode.querySelector('[option-button-selected]').removeAttribute('option-button-selected');
        optionButtonElement.setAttribute('option-button-selected', '')

        const selection = optionButtonElement.innerText.toLowerCase().trim().replaceAll(' ', '-')
        const projectElements = optionButtonElement.parentNode.parentNode.querySelectorAll('.project')

        projectElements.forEach(projectElement => {
            if(!projectElement.oldDisplay)projectElement.oldDisplay = getComputedStyle(projectElement).display
            projectElement.style.display = projectElement.oldDisplay
            secrollFadeAnimation(projectElement)
            if(selection != 'all' && !projectElement.classList.contains(selection)) projectElement.style.display = 'none'
        })
    })
})