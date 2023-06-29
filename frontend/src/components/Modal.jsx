import classes from '../CSS/Modal.module.css';
import {useReducer} from 'react'
const formInitialData={    
    Name:"",
    Duration:"",
    Calories:""
}
function formReducer(state,action){
    switch(action.type){
        case "Name": return ({...state,Name:action.value});
        case "Duration":return ({...state, Duration:action.value});
        case "Calories":return ({...state,Calories:action.value})
        default :return state
    }
}
function Modal( props){
 const [formData,disPatch]=useReducer(formReducer,formInitialData);

 function handleName(e){
    if(e.target.value!==""&&!isNaN(e.target.value))return;
     disPatch({type:"Name",value:e.target.value});
 }

 function handleDuration(e){
    // if(e.target.value!==""&&!isNaN(e.target.value))return;
     disPatch({type:"Duration",value:e.target.value});
 }
 function handleCalories(e){
    // if(e.target.value!==""&&!isNaN(e.target.value))return;
     disPatch({type:"Calories",value:e.target.value});
 }
   function closeHandler(){
        props.onClose();
   }


   function HandleSubmit(){
       if(props.type==='Edit'){
        props.onSubmit({
            id:props.id,
            Name:formData.Name,
            Duration:formData.Duration,
            Calories:formData.Calories
           });
            props.onClose();
            return;
       }

       props.onSubmit(formData);
        props.onClose();

   }
    return (
        <>
         <div className={classes.popBox}> 
           <div className={classes.box}>
            <div className={classes.head}>
             <h1>{props.type==='Edit'?'Edit':'Add'}</h1>
            </div>
            <div className={classes.form}>
                <div className={classes.inp}>
                <div>
                <label htmlFor='Name'>Name*</label>
                </div>
             <div className={classes.isNameErr}>
             <input  type='text' value={formData.Name} onChange={handleName}/>             
             </div>
               </div>

               <div className={classes.inp}>
                <div>
                <label htmlFor='Duration'>Duration*</label>
                </div>
             <div className={classes.isDurationErr}>
             <input  type='number' value={formData.Duration} onChange={handleDuration}/>             
             </div>
               </div>

               <div className={classes.inp}>
                <div>
                <label htmlFor='Calories'>Calories*</label>
                </div>
             <div className={classes.isCaloriesErr}>
             <input  type='number' value={formData.Calories} onChange={handleCalories}/>             
             </div>
               </div>

             

            </div>
            <div className={classes.button}>
                <button className={classes.btn1}  onClick={HandleSubmit} >Confirm</button>
                <button className={classes.btn2} onClick={closeHandler} >Cancel</button>
            </div>

           </div>
         </div>
        </>
    )
}
export default Modal;