const isoDate = '2025-01-01T04:04:11.811+00:00';
const formattedDate = new Date(isoDate).toISOString()
  .slice(0, 10).replace(/-/g, '/');

console.log(formattedDate); 