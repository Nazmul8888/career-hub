import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

    const [jobs, setJobs]= useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])



    return (
<div>
    <div>
        <div ><h2 className=" text-5xl text-center">Featured Jobs: {jobs.length}</h2>
        <p className=" text-2xl text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div>
            {
                jobs.map(job=><Job job={job}></Job>)
            }
        </div>
    </div>
</div>
    );
};

export default Featured;