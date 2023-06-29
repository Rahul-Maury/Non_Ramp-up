import classes from "../CSS/Edit.module.css"
import {useState} from 'react';
import Modal from "./Modal";

function Edit(props){
    const [value,setvalue]=useState(false);
    function close(){
        setvalue(false);
    }
    return (
        <>
        <button onClick={()=>{setvalue(true)}} className={classes.Editbtn}>
            <span>Edit</span>
        </button>
        {
            value&&<Modal onClose={close} type={'Edit'} onSubmit={props.onSubmit} id={props.id} Data={props.Data} />
        }
        </>
    )
}
export default Edit;