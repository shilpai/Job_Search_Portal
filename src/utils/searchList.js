export default function searchList(data,search) {
    let matchList = [...data].filter((item) => {

        let tempList = ""
        
        Object.keys(item).forEach((key) => {
          if(key == "technology") {
            item[key].forEach(tech=>{
              tempList += tech
            })
          } else{
            tempList += item[key]
          }
        });
  
        if(tempList.toLocaleLowerCase().includes(search.toLowerCase())){
          return true
        } else if (search === "") {
          return true
        } else {
          return false
        }

      });

      return [...matchList]
}