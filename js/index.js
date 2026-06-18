// index.js — shared utilities for Manshi Gyawali's CET-138 portfolio

// ── Highlight active nav link based on current page ──
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  // Animate cards in sequence
  document.querySelectorAll('.card, .topic-card').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.07}s`;
  });
});
 function escHtml(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    function updatePreview() {
      const name  = document.getElementById('f-name').value  || 'Risu Kaushal';
      const email = document.getElementById('f-email').value || 'you@example.com';
      const subj  = document.getElementById('f-subj').value  || '';
      document.getElementById('html-preview').innerHTML =
        `<span class="tag">&lt;form&gt;</span>\n` +
        `  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="str">"text"</span>\n` +
        `         <span class="attr">value</span>=<span class="str">"${escHtml(name)}"</span> <span class="tag">/&gt;</span>\n\n` +
        `  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="str">"email"</span>\n` +
        `         <span class="attr">value</span>=<span class="str">"${escHtml(email)}"</span> <span class="tag">/&gt;</span>\n\n` +
        `  <span class="tag">&lt;select&gt;</span>\n` +
        `    <span class="tag">&lt;option</span> <span class="attr">selected</span><span class="tag">&gt;</span>${escHtml(subj||'— pick one —')}<span class="tag">&lt;/option&gt;</span>\n` +
        `  <span class="tag">&lt;/select&gt;</span>\n` +
        `<span class="tag">&lt;/form&gt;</span>`;
    }

    function handleFormSubmit(e) {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      msg.textContent = '✅ Form submitted! (No real server — demo only.)';
      setTimeout(() => msg.textContent = '', 3000);
    }

    updatePreview();