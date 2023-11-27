const jobs = [
    { title: 'Web Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'City A' },
    { title: 'UX Designer', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', location: 'City B' },
    { title: 'Data Analyst', description: 'Nullam eget sem vel leo ultrices bibendum. Aliquam in massa et dolor facilisis laoreet.', location: 'City C' },
    // Add more job objects as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    displayJobs(jobs);
  });
  
  function displayJobs(jobs) {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';
  
    jobs.forEach(job => {
      const jobListing = document.createElement('div');
      jobListing.className = 'job-listing';
      jobListing.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
      `;
      jobList.appendChild(jobListing);
    });
  }
  
  function searchJobs() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredJobs = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm)
    );
  
    displayJobs(filteredJobs);
  }