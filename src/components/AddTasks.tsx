
import {useForm, SubmitHandler} from 'react-hook-form'
import { InputsSubmitProps, OnAddSubmitProps } from "../interfaces";

import './style/style.css'
export const AddTasks = ({onAdd}:OnAddSubmitProps)=>{
    const {register, handleSubmit, watch, formState:{ errors }} = useForm<InputsSubmitProps>()
    const onSubmit: SubmitHandler<InputsSubmitProps> = data => onAdd(data);
    console.log(watch("text"))
    return(
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-control">
                <label htmlFor="">Set your Task</label>
                <input className='inputText' type="text" {...register('text', {required:true})} />
                {errors.text && <p className='alertText'>required a task</p>}
                {}
            </div>
            <div className="form-control">
            <label htmlFor="">Day&Time</label>
                <input className='inputText' type="text" {...register('day', {required:true})} />
                {errors.day && <p className='alertText'>required a day</p>}
            </div>
            <div className="form-control checked">
            <label htmlFor="">Remind?</label>
                <input type='checkbox' {...register('isRemind')} />    
            </div>
            <input type="submit" className='submitButton' value='enviar'/>
        </form>
    )
}