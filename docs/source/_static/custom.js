/* === Script de Lightbox de Imagens, Impressão Limpa e Menu Lateral (docs/source/_static/custom.js) === */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Criar a estrutura HTML do Popup (Lightbox) para abrir e fechar imagens na mesma tela
    const lightboxHTML = `
        <div id="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Visualização ampliada da imagem">
            <span id="lightbox-close" title="Fechar imagem (Esc)">&times;</span>
            <img id="lightbox-image" src="" alt="Imagem ampliada" title="Clique para fechar">
            <div id="lightbox-footer">
                <span id="lightbox-caption"></span>
                <button type="button" id="lightbox-close-btn" title="Fechar visualização ampliada">✕ Fechar (Esc)</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // 2. Selecionar os elementos do popup
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const closeFooterBtn = document.getElementById('lightbox-close-btn');

    // 3. Selecionar todas as imagens dentro da área de conteúdo principal
    const images = document.querySelectorAll('.md-content img, .rst-content img, article img');

    // 4. Adicionar o evento de clique e lupa com hover em cada imagem
    images.forEach(image => {
        image.style.cursor = 'zoom-in';
        image.setAttribute('title', 'Clique para ampliar na mesma tela');

        const parentLink = image.closest('a');
        if (parentLink) {
            parentLink.style.cursor = 'zoom-in';
            parentLink.addEventListener('click', function(e) {
                e.preventDefault();
            });
        }

        image.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const altText = this.getAttribute('alt') || 'Visualização do Painel de Indicadores AliceWS';
            lightboxImg.src = this.src;
            lightboxImg.alt = altText;
            if (lightboxCaption) {
                lightboxCaption.textContent = altText;
            }

            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.add('active');
                overlay.style.opacity = '1';
                lightboxImg.style.transform = 'scale(1)';
            }, 10);

            document.body.style.overflow = 'hidden';
        });
    });

    // 5. Função para fechar o popup na mesma tela
    function closeLightbox() {
        overlay.classList.remove('active');
        overlay.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.9)';

        setTimeout(() => {
            overlay.style.display = 'none';
            lightboxImg.src = '';
            document.body.style.overflow = '';
        }, 280);
    }

    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });

    closeFooterBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });

    overlay.addEventListener('click', function(e) {
        if (e.target !== lightboxCaption) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closeLightbox();
        }
    });

    // 6. Garantir que o widget flutuante "latest" do Read the Docs (Web Component com Shadow DOM)
    // nunca saia na impressão / PDF
    function hideRtdFlyoutForPrint() {
        const rtdElements = document.querySelectorAll(
            'readthedocs-flyout, readthedocs-notification, readthedocs-search, .rst-versions, #readthedocs-embed-flyout'
        );
        rtdElements.forEach(function(el) {
            if (el.shadowRoot && !el.shadowRoot.getElementById('rtd-no-print-style')) {
                const style = document.createElement('style');
                style.id = 'rtd-no-print-style';
                style.textContent = '@media print { :host, *, .container, aside { display: none !important; visibility: hidden !important; opacity: 0 !important; } }';
                el.shadowRoot.appendChild(style);
            }
        });
    }

    hideRtdFlyoutForPrint();
    setTimeout(hideRtdFlyoutForPrint, 1000);
    setTimeout(hideRtdFlyoutForPrint, 3000);

    function setRtdFlyoutHidden(hidden) {
        document.querySelectorAll(
            'readthedocs-flyout, readthedocs-notification, readthedocs-search, readthedocs-hotkeys, .rst-versions, #readthedocs-embed-flyout, #rtd-sidebar'
        ).forEach(function(el) {
            if (hidden) {
                el.setAttribute('data-prev-display', el.style.display || '');
                el.style.setProperty('display', 'none', 'important');
                el.style.setProperty('visibility', 'hidden', 'important');
            } else {
                const prev = el.getAttribute('data-prev-display');
                if (prev) {
                    el.style.display = prev;
                } else {
                    el.style.removeProperty('display');
                }
                el.style.removeProperty('visibility');
            }
        });
    }

    window.addEventListener('beforeprint', function() {
        hideRtdFlyoutForPrint();
        setRtdFlyoutHidden(true);
    });

    window.addEventListener('afterprint', function() {
        setRtdFlyoutHidden(false);
    });

    const originalPrint = window.print.bind(window);
    window.print = function() {
        hideRtdFlyoutForPrint();
        setRtdFlyoutHidden(true);
        setTimeout(() => {
            originalPrint();
            setTimeout(() => setRtdFlyoutHidden(false), 500);
        }, 50);
    };

    // 7. Preservar os botões nativos [+] e [-] do menu lateral do Read the Docs
    // sem que o Sphinx feche automaticamente os itens ao clicar em links
    if (window.SphinxRtdTheme && window.SphinxRtdTheme.Navigation) {
        const nav = window.SphinxRtdTheme.Navigation;
        nav.onLinkClick = function() {};
    }

    setTimeout(() => {
        const menu = document.querySelector('.wy-menu-vertical');
        if (!menu) return;

        menu.querySelectorAll('li.toctree-l1, li.toctree-l2, li.toctree-l3').forEach(li => {
            const subUl = li.querySelector(':scope > ul');
            const link = li.querySelector(':scope > a');
            if (subUl && link && !link.querySelector('.toctree-expand')) {
                const btn = document.createElement('button');
                btn.className = 'toctree-expand';
                btn.title = 'Expandir/recolher subseções';
                link.prepend(btn);
            }
        });

        menu.querySelectorAll('button.toctree-expand').forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            newBtn.addEventListener('click', function(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                const parentLi = this.closest('li');
                if (parentLi) {
                    parentLi.classList.toggle('current');
                }
            });
        });

        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', function(ev) {
                if (ev.target && ev.target.classList.contains('toctree-expand')) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    return;
                }
                const parentLi = this.closest('li');
                if (parentLi && parentLi.querySelector(':scope > ul')) {
                    parentLi.classList.add('current');
                }
            });
        });
    }, 150);
});
