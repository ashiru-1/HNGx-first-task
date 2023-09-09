const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById('dayOfWeek').innerHTML = dayOfWeek;

const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
document.getElementById('date').innerHTML = date;

  const currentTimeInMilliseconds = new Date().getTime();
  document.getElementById('currentTimeInMilliseconds').innerHTML = currentTimeInMilliseconds;
  setInterval(() => {
    const currentTimeInMilliseconds = new Date().getTime();
    document.getElementById('currentTimeInMilliseconds').innerHTML = currentTimeInMilliseconds;
  }, 100);