
import classes from "../CSS/Home.module.css";
import Add from "./Add"
import Edit from "./Edit";
import Delete from './Delete';
import { useState } from "react";
import uuid from "react-uuid";
let InitalData=[{ 
            id:"",
            Name:"",
            Duration:"",
            Calories:""
            
},
          ];


function Home(){
 const [Data,setData]=useState(InitalData);

  function submit(data){
   const date=new Date();
    const Dat=date.toISOString().substr(0, 10);
    data.Date=Dat;
    const id=uuid();
      data.id=id;
      console.log(data);
      setData((pre)=>{
        return ([...pre,{ ...data}]);
      })
      // setData([{...data,id}]);
    
      
  }
  function Edithandler(val){
    const temp=Data.filter((vat)=>{
             return vat.id!==val.id
    });
    
    setData([...temp,{...val}]);

}
function Deletehandler(id){
  const temp=Data.filter((data)=>{
        return data.id!==id;
  })
  setData([...temp]);
}
  
    return (
        <>
            
            <div className={classes.stdBody}>
              <div className={classes.subHeader}>
                 <div>
                    <h1>Health Tracker</h1>
                    </div>
                 <div>
                      <Add onSubmit={submit}/>
                 </div>
              </div>

              <div className={classes.tableWrapper}>
                <table className={classes.contentTable}> 
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Calories</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   
                     {
                      Data.map((val,i)=>{
                        return (
                          <tr>

                          <td>{i+1}</td>
                          <td>{val.Name}</td>                         
                          <td>{val.Duration}</td>
                          <td>{val.Calories}</td>
                          <td>{val.Date}</td>
                  
                    <td>
                      <div className={classes.actionIcons}>
                      <Edit onSubmit={Edithandler}  Data={val} id={val.id}/>
                      <Delete onSubmit={Deletehandler} id={val.id}/>
                      </div>                    
                    </td>

                          </tr>
                          

                        )
                      })
                     }
                   
                   
                </tbody>

                </table>
              </div>


            </div>
            

      
        
        </>
    )
}
export default Home;