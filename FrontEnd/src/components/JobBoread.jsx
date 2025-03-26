// import React from "react";
// import { Link } from "react-router-dom";
// import "../style/JobBoard.css"


// const JobBoards = () => {
//   return (
//     <section className="job-boards">
//       <div className="job-boards-container">
//         {/* Left Section */}
//         <div className="job-boards-text">
//           <h2>Job Boards</h2>
//           <p>
//             Our dedicated learner success team posts hand-picked opportunities
//             from top organizations relevant to your profile and experience.
//           </p>
//           <ul>
//             <li>Exclusive access to Great Learning job board</li>
//             <li>Opportunities customized to your work experience</li>
//             <li>Alumni connect for industry insights & interview tips</li>
//           </ul>

//           <button className="download-btn">Download Career Report</button>
//         </div>

//         {/* Right Section - Image */}
//         <div className="job-boards-image">
//           <img src="./img/Job-Board.png" alt="Job Boards Preview" />
//         </div>
//       </div>
//     </section>
   
//   );
// };

// export default JobBoards;


import React, { useState } from "react";
import CareerReportForm from "./CareerReportForm"; // Import the popup component
import "../style/JobBoard.css";

const JobBoards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="job-boards">
      <div className="job-boards-container">
        {/* Left Section */}
        <div className="job-boards-text">
          <h2>Job Boards</h2>
          <p>
            Our dedicated learner success team posts hand-picked opportunities
            from top organizations relevant to your profile and experience.
          </p>
          <ul>
            <li>Exclusive access to Great Learning job board</li>
            <li>Opportunities customized to your work experience</li>
            <li>Alumni connect for industry insights & interview tips</li>
          </ul>

          {/* Button to open modal */}
          <button className="download-btn" onClick={() => setIsModalOpen(true)}>
            Download Career Report
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="job-boards-image">
          <img src="./img/Job-Board.png" alt="Job Boards Preview" />
        </div>
      </div>

      {/* Render CareerReportForm modal */}
      <CareerReportForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default JobBoards;

