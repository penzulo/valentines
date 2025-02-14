const handleScroll = () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 0) {
        nav.classList.add('bg-rose-500');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-rose-500');
    }
}

window.addEventListener('scroll', handleScroll);