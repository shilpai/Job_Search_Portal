import React from 'react'

export default function Search({searchJobs, setSearch, search, jobs}) {
  return (
    <div className="seach-div side-gap">
      <div className="jobs-count">Jobs: <span>{jobs.length}</span></div>
    <form onSubmit={searchJobs} className="search-box">
        <i data-toggle="tooltip" data-placement="left" title="Search with Company, Technology, Location and 
        Role" className="bi bi-info-circle"></i>
      
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="Search" />

        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
