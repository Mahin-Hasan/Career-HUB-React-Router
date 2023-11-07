import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";



const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <span className="flex justify-start ps-4">
                <figure><img src={logo} alt="Shoes" /></figure>
            </span>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex">
                    <h2 className="flex text-2xl items-center mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                    <h2 className="flex text-2xl items-center mr-2"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn bg-[#7E90FE] text-white font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;