import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from './types'

//GET THE TECHS
export const getTechs=()=>async dispatch =>{
    try{
        setLoading();
        const res=await fetch('/techs')
        const data=await res.json()
        dispatch({
            type:GET_TECHS,
            payload:data
        })

    }catch(err){
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        })

    }
  
}

//ADD THE TECHS 
export const addTech=(tech)=>async dispatch =>{
    try{
        setLoading();
        const res=await fetch('/techs',{
            method:"POST",
            body:JSON.stringify( tech),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await res.json()
        dispatch({
            type:ADD_TECH   ,
            payload:data
        })

    }catch(err){
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        })

    }
  
}

//DELETE THE TECH
export const deleteTech=(id)=>async dispatch =>{
    try{
        setLoading();
        await fetch(`/techs/${id}`,{
            method:'DELETE'
        })
        // const data=await res.json()
        dispatch({
            type:DELETE_TECH,
            payload:id
        })

    }catch(err){
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        })

    }
  
}


//SET LOADING TO TRUE
export const setLoading=()=>{
    return{
        type:SET_LOADING
    }
}