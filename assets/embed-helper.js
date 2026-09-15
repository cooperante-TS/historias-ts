(() => {
  const codeEl = document.getElementById('embedCode');
  const urlEl = document.getElementById('embedUrl');
  if (!codeEl || !urlEl) return;

  let updating = false;

  function buildCode() {
    if (updating) return;
    const url = String(urlEl.textContent || '').trim();
    if (!url) return;

    let countryName = 'Treball Solidari';
    try {
      const u = new URL(url);
      const slug = u.searchParams.get('pais') || '';
      countryName = slug
        .split('-')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ') || 'Treball Solidari';
    } catch (_) {}

    const code = `<div class="ts-history-embed-wrap">
  <iframe
    class="ts-history-embed-frame"
    src="${url}"
    title="Nuestra historia de Treball Solidari en ${countryName}"
    loading="lazy">
  </iframe>
</div>

<style>
  .ts-history-embed-wrap {
    width: 100%;
    max-width: 100%;
  }
  .ts-history-embed-frame {
    display: block;
    width: 100%;
    height: 760px;
    border: 0;
  }
  @media (max-width: 700px) {
    .ts-history-embed-frame {
      height: clamp(560px, 158vw, 680px);
    }
  }
  @media (max-width: 420px) {
    .ts-history-embed-frame {
      height: clamp(540px, 154vw, 640px);
    }
  }
</style>`;

    if (codeEl.textContent === code) return;
    updating = true;
    codeEl.textContent = code;
    updating = false;
  }

  const observer = new MutationObserver(buildCode);
  observer.observe(codeEl, { childList: true, characterData: true, subtree: true });
  observer.observe(urlEl, { childList: true, characterData: true, subtree: true });
  buildCode();
})();
