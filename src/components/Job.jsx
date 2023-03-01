import React from "react";

export default function Job({ item, index, changeOpen }) {
  return (
    <div className="card">
      <div className="job">
        <img
          src={new URL(item.companyLogo, import.meta.url).href}
          alt={item.companyName}
        />
        <div className="details">
          <div className="upper-div">
            <div className="company-name">{item.companyName}</div>
            <span> | </span>
            <div className="location">
              <i className="bi bi-geo-alt"></i>
              <span>{item.city}</span>
            </div>
          </div>

          <div className="job-role">{item.jobRole}</div>

          <div className="lower-div">
            <div className="role-name">{item.jobRole}</div>
            <span> | </span>
            <div className="salary">
              {/* <i className="bi bi-currency-rupee"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-rupee"
                viewBox="0 0 16 16"
              >
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>
              <span>{item.jobSalary}</span>
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary card-apply"
          data-toggle="collapse"
          data-target={`#collapse${index}`}
          aria-expanded="true"
          aria-controls={`#collapse${index}`}
          onClick={() => changeOpen(index)}
        >
          <span>APPLY</span>
          {!item.openMenu ? (
            <i className="bi bi-arrow-down-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-up-square-fill"></i>
          )}
        </button>
      </div>

      <div
        id={`collapse${index}`}
        className="collapse desc"
        data-parent="#accordion"
      >
        <hr />
        <div className="card-body">
          <h6>Skills Required:</h6>
          <div className="technology">
            <ul>
              {item.technology.map((tech, i) => (
                <li className="tech" key={i}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="other-details">
            <div className="deadline">
              <h6>Last Date:</h6>
              <div>{item.deadline}</div>
            </div>

            <div className="job-type">
              <h6>Job Type:</h6>
              <div className="job-type-value">{item.jobType}</div>
            </div>

            <div className="graduation-degree">
              <h6>Graduation Degree:</h6>
              <div className="graduation-degree-value">{item.degree.length ? item.degree.join("/") : "-"}</div>
            </div>

            <div className="graduation-year">
              <h6>Graduation Year:</h6>
              <div className="graduation-year-value">{item.graduationYears.length ? item.graduationYears.join("/") : "-"}</div>
            </div>

            
          </div>

          <hr />
          <h6>Description:</h6>
          {item.desc}
        </div>
        <hr />
        <div className="apply">
          <a href={item.link} target="_blank">
            <button className="btn btn-success">APPLY LINK</button>
          </a>
        </div>
      </div>
    </div>
  );
}
