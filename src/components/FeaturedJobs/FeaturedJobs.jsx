import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    //not the optimized way to limit data load
    const [dataLength, setDatalength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 rounded-lg">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            {/* <div className={dataLength === jobs.length && 'hidden'}> */}
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <div className="text-center my-5">
                    <button onClick={() => setDatalength(jobs.length)} className="btn bg-[#7E90FE] text-white font-bold">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;