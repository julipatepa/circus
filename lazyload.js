document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute("data-src");
                    if (src) {
                        img.src = src;
                        img.removeAttribute("data-src");
                    }
                    observer.unobserve(img);
                }
            });
        });
        io.observe(target);
    };

    images.forEach(img => {
        if (img.hasAttribute("data-src")) {
            lazyLoad(img);
        }
    });
});
