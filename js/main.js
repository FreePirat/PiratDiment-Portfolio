// Small interactions: replace featured video when clicking gallery cards, set year
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const cards = document.querySelectorAll('.card');
  const featured = document.getElementById('featuredVideo');
  if (!featured) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-videoid');
      if (!id) return;
      // update featured iframe src to play selected video (pause previous by replacing src)
      featured.src = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1`;
      // smooth scroll to featured player on small screens
      featured.scrollIntoView({behavior: 'smooth', block: 'center'});
    });
  });
});
