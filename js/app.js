const navlinks = [...document.querySelectorAll('.navlinks div')];
const nava = [...document.querySelectorAll('.navlinks a')];
const sects = [...document.querySelectorAll('.page')];

let current;
navlinks.forEach((link, j) => {
    link.addEventListener('click', () => {
        if (link.children[0].innerHTML == "Home") {
            link.classList.add('stick');
            for (div of navlinks.filter(i => !(i.isSameNode(link)))) {
                try {
                    div.classList.remove('stick');
                }catch {
                    //
                }
            }
            for (sect of sects) {
                sect.style.top = '110vh';
            }
        }else {
            sects[j].style.top = '10vh';
            link.classList.add('stick');
            for (div of navlinks.filter(i => !(i.isSameNode(link)))) {
                try {
                    div.classList.remove('stick');
                }catch {
                    //
                }
            }
            for (sect of sects.filter(i => !(i.isSameNode(sects[j])))) {
                sect.style.top = '110vh';
            }

        }
    })

    link.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
    });
    link.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
    });
    link.children[0].addEventListener('mouseover', (e) => {
        e.target.parentElement.classList.add('hover');
    });
    link.children[0].addEventListener('mouseout', (e) => {
        e.target.parentElement.classList.remove('hover');
    });
});