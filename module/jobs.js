import { JobsService } from "../api/service/jobsService.js"
let service;
export const getJobsData = async() => {
    service = new JobsService();    
    const promise = await Promise.resolve(service.get());
    return promise;
}


