window.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementsByClassName('informationBanner');
    if (!banner || banner.length === 0) return;

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const bannerHeight = entry.target.offsetHeight;
            document.documentElement.style.setProperty("--information-banner-height", bannerHeight + 'px');
        }
    });
    resizeObserver.observe(banner[0]);
});


