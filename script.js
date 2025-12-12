document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(acc => {
        acc.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            const icon = this.querySelector('span');

            // パネルの開閉アニメーション
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                // アイコンがあれば切り替え（現在のHTMLにはspanがないため、必要ならHTMLに追加してください）
                if (icon) icon.textContent = '+';
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                if (icon) icon.textContent = '-';
            }
        });
    });
});

// Modal Logic
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("connectionModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.querySelector(".close-modal");

    // Open modal function
    const openModal = (e) => {
        if (e) e.preventDefault();
        modal.style.display = "flex"; // Changed to flex for centering
    };

    // Header Trigger
    if (btn) btn.addEventListener('click', openModal);

    // Sticky Bar Trigger
    const stickyBtn = document.querySelector('.sticky-bar .cta-btn-main');
    if (stickyBtn) {
        stickyBtn.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#' || this.getAttribute('href').includes('javascript:void(0)')) {
                openModal(e);
            }
        });
    }

    // CTA Section Trigger
    const ctaSectionBtn = document.querySelector('.cta-section-static .cta-btn-main');
    if (ctaSectionBtn) {
        ctaSectionBtn.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#' || this.getAttribute('href').includes('javascript:void(0)')) {
                openModal(e);
            }
        });
    }

    // Close on x
    if (span) {
        span.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // Close on click outside
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});