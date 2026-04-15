function openSecurityModal(modal) {
  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  }
}

function closeSecurityModal(modal) {
  if (modal && typeof modal.close === "function") {
    modal.close();
  }
}

function handleDialogBackdropClick(event, modal) {
  if (!modal || event.target !== modal) {
    return;
  }

  const rect = modal.getBoundingClientRect();
  const isInside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!isInside) {
    closeSecurityModal(modal);
  }
}
