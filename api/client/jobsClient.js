let route;
var baseURL; 
export class JobsClient {
  
  constructor(_route) {
    route = _route;   
  }

  getJobs = async (route) => { 

    await fetch("../../config.json")
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data.jobsURL);
      baseURL = data.jobsURL;
    });

    console.log('making client call');
    var jobs;
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      //localwebdev is an alias set for 127.0.0.1 within the host file. The endpoint is a proxy that makes an api call to another machine
      console.log('baseURL', baseURL);
      const response = await fetch(baseURL + route, requestOptions)
      .then(response => response.text())
      .then(result => {
          const obj = JSON.parse(result);
          jobs = obj.jobs;
      })
      .catch(error => console.log('error', error));		
      if(jobs) {
        return jobs;
      }
      return {};
  }  
}