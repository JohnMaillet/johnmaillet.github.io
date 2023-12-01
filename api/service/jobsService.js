import { JobsClient } from "../client/jobsClient.js"
import { JobsRoutes } from "../route/jobsRoute.js";

let client;
let routes; 

export class JobsService {
    constructor() {    
        console.log('starting service');           
        client = new JobsClient();
        routes = new JobsRoutes();
    }

    get = async() => {
        let route = routes.getJobRoute();
        const promise = await Promise.resolve(client.getJobs(route));        
        return promise;
    }
}
