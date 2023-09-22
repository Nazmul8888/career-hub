import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStroage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const{id}= useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

        const handelApplyJob = () =>{
            saveJobApplication(idInt);
            toast('you applied successfully ');
        }


    return (
        <div>
            <h2>{id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
            <div className="border md:col-span-3">
                <h2 className="text-1xl font-bold">Job Description: </h2>
                <p>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                <br />
                <br />
                <h2 className="text-1xl font-bold">Job Responsibility:</h2>
                 <p>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                 <br />
                <br />
                <br />
                <br />
                
                <h2 className="text-1xl font-bold">Educational Requirements:</h2>
                <p>Bachelor degree to complete any reputational university.</p>

                <h2 className="text-1xl font-bold">Experiences::</h2>
                <p>2-3 Years in this field.</p>
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className="border">
                <h2 className="text-2xl">Job Details</h2>
                
                <button onClick={handelApplyJob} className="btn btn-primary w-full">Apply Now</button>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;