import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

    const [jobs, setJobs]= useState([]);

    const[dataLength, setDataLength] = useState(12);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])



    return (
<div >
    <div>
        <div >
       
        </div>
        <div className="grid grid-cols-4 gap-5">
            {
                jobs.slice(0, dataLength).map(job=><Job job={job}></Job>)
            }
            <div className={dataLength === jobs.length && 'hidden'}>
                
            <button 
            onClick={()=> setDataLength(jobs.length)}
            className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    </div>
</div>
    );
};

export default Featured;