document.addEventListener("click", function (e) {
  const btn = e.target.closest(".js-formatted-cite");
  if (!btn) return;
  e.preventDefault();

  const text = btn.getAttribute("data-citation") || "";
  const pre = document.getElementById("formatted-cite-text");
  if (pre) pre.textContent = text;

  // Bootstrap 4 (Wowchemy classic) uses jQuery modals
  if (window.jQuery && jQuery.fn && jQuery.fn.modal) {
    jQuery("#formatted-cite-modal").modal("show");
  } else {
    // Fallback
    alert(text);
  }

  const copyBtn = document.getElementById("formatted-cite-copy");
  if (copyBtn) {
    copyBtn.onclick = function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      }
    };
  }
});

