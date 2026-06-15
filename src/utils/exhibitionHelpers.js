export function formatDate(dateStr) {
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function formatDateRange(startDate, endDate) {
  const start = new Date(`${startDate}T12:00:00`);
  const end = new Date(`${endDate}T12:00:00`);
  const sameYear = start.getFullYear() === end.getFullYear();
  const startFormatted = start.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    ...(sameYear ? {} : { year: 'numeric' }),
  });
  const endFormatted = end.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return `${startFormatted} – ${endFormatted}`;
}

export function getExhibitionStatus(startDate, endDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(`${startDate}T12:00:00`);
  const end = new Date(`${endDate}T12:00:00`);

  if (today < start) return 'upcoming';
  if (today > end) return 'past';
  return 'on-view';
}

export function getExhibitionStatusLabel(startDate, endDate) {
  const status = getExhibitionStatus(startDate, endDate);
  if (status === 'upcoming') return 'Upcoming';
  if (status === 'on-view') return 'On View';
  return 'Past';
}

export function getEventTypeLabel(type) {
  return type === 'competition' ? 'Competition' : 'Exhibition';
}

export function getEventDateLabel(type) {
  return type === 'competition' ? 'Voting' : 'Viewing';
}

export function sortExhibitions(exhibitions) {
  return [...exhibitions].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
}
