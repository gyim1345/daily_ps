const solution = (jobs) => {

  const newJobs = jobs.map(job => {
    return {
      job: job,
      requestTime : job[0],
      estimatedWorkTime : job[1],
    }
  })
  const logs =[];
  
  processJobs(newJobs, logs)

  return getAverage(logs);
}

const getAverage = (logs) => {
  return Math.floor(logs.reduce((acc, cur) => acc+cur)/logs.length);
}

const sortJobs = (jobs, currentTime) => {
  jobs.sort((a,b) => {
    if(a.requestTime <= currentTime && b.requestTime <= currentTime) {
      return a.estimatedWorkTime - b.estimatedWorkTime;
    }
    if(a.requestTime === b.requestTime) {
      return a.estimatedWorkTime - b.estimatedWorkTime;
    }
    return a.requestTime- b.requestTime;
  })
}

const processJobs = (jobs, logs) => {
  const processingJobs = [...jobs];
  let currentTime = 0;
  while(processingJobs[0]) {
    sortJobs(processingJobs,currentTime);
    const currentProcessedJob = processingJobs.shift();
    const processTime = getProcessTime(currentProcessedJob, currentTime);
    currentTime = updateCurrentTime(currentProcessedJob, processTime);
    logs.push(processTime);
  }
}

const updateCurrentTime = (job, time) => {
  return job.requestTime + time;
}

const getProcessTime = (job, currentTime) => {
  if(job.requestTime >= currentTime) {
    return job.estimatedWorkTime;
  }
  return job.estimatedWorkTime + currentTime - job.requestTime;
}

test('solution', () => {
  expect(solution([[0, 3], [1, 9], [2, 6]])).toBe(9);
});