import React from "react";
import { Link } from "react-router-dom";

const projects1 = [
  {
    id: 1,
    title: "Project 1",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
    status: "In Progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Project 2",
    startDate: "2023-06-01",
    endDate: "2023-07-01",
    status: "Completed",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Project 3",
    startDate: "2023-07-01",
    endDate: "2023-08-01",
    status: "Planned",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 4,
    title: "Project 4",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
    status: "In Progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "Project 5",
    startDate: "2023-06-01",
    endDate: "2023-07-01",
    status: "Completed",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Project 6",
    startDate: "2023-07-01",
    endDate: "2023-08-01",
    status: "Planned",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  }
  // Add more project objects...
];

export const AllProjectList = () => {
  return (
    <>
      <section
        className="projectList"
        style={{
          backgroundColor: "",
          margin: "5%",
          borderRadius: "10px",
          padding: "1rem",
          borderTop: "2px solid black",
        }}
      >
        <div className="d-flex justify-content-between align-items-center py-4 px-5">
          <h1
            className="text-center mb-0 flex-grow-1"
            style={{ fontFamily: "Arial", fontSize: "24px" }}
          >
            <span className="bg-white px-4 py-2 rounded-md shadow-md text-navy-blue">
              My Projects
            </span>
          </h1>
          <div className="text-end">
            <Link to="/addproject" className="btn btn-primary">
              Add Project
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
       
        {projects1.map((project) =>(
            <ProjectCard
              id={project.id}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              status={project.status}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

const ProjectCard = ({
  id,
  title,
  startDate,
  endDate,
  status,
  description,
}) => {
  return (
    <div
      className="max-w-md mx-auto overflow-hidden mb-4 shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105"
      style={{
        borderLeft: "2px solid grey",
        borderRight: "2px solid black",
        borderBottom: "2px solid black",
        borderRadius: "15px",
      }}
    >
      <div className="p-4 bg-white rounded-md ">
        <div className="bg-gray-100 p-2 mb-2">
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-sm text-red-800 font-medium">Start Date</p>
            <p className="italic">{startDate}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-green-800 font-medium">Status</p>
            <p className="italic">{status}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-red-800 font-medium">End Date</p>
            <p className="italic">{endDate}</p>
          </div>
        </div>
        <p className="mt-2 text-darkblue-900 text-center">{description}</p>
        <div className="flex justify-center mt-4">
          <Link
            to={`/projectexplore/${id}`}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
          >
            Explore -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProjectList;
