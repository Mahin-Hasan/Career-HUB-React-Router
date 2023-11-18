import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localsotrage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setdisplayJobs] = useState([]);

    const handleJobFilter = filter =>{
        if(filter ==='all'){
            setdisplayJobs(appliedJobs);
        }
        else if(filter ==='remote'){
            const remoteJobs = appliedJobs.filter(job=>job.remote_or_onsite ==='Remote');
            setdisplayJobs(remoteJobs);
        }
        else if(filter ==='onsite'){
            const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite ==='Onsite');
            setdisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job =>storedJobsIds.includes(job.id));
            // above one line code in more readable form
            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setdisplayJobs(jobsApplied);
            
            // console.log(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I Applied: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobFilter('onsite')}><a>OnSite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;