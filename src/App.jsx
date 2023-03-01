import { useEffect, useState } from "react";
import { data } from "./assets/data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Search from "./components/Search";
import Menu from "./components/Menu";
import searchList from "./utils/searchList";
import "./css/App.css";

function App() {
  let dataFormat = data.map((item) => ({ ...item, openMenu: false }));

  const [jobs, setJobs] = useState([...dataFormat]);
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false)

  function changeOpen(index) {
    let tempJobs = [...jobs];
    tempJobs[index].openMenu = !tempJobs[index].openMenu;
    setJobs([...tempJobs]);
  }

  function searchJobs(e){
    e.preventDefault()
    let tempJobs = searchList([...dataFormat], search)
    setJobs([...tempJobs]);
  }

  useEffect(()=>{
      $('[data-toggle="tooltip"]').tooltip()
  },[])

  return (
    <div className="App">
      <Header />
      { !flag ? <Menu setFlag={setFlag} /> :
      <>
      <Search searchJobs={searchJobs} setSearch={setSearch} search={search} jobs={jobs} />
      <Jobs jobs={jobs} changeOpen={changeOpen} />
      </>
      }
      <Footer />
    </div>
  );
}

export default App;
