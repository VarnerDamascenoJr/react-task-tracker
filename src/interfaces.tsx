export type Task = {
    id:number;
    text: string;
    day: string;
    isRemind: boolean;
}
export type Headerprops = {
    show: Boolean;
    onShow:() =>void
}

export type ButtonProps = {
    cta:string;
    color: string | number;
    onShow:() =>void
}

export type TasksProps ={ 
    tasks: Task[];
    onDelete: (id:number) =>void
    onToggle: (id:number) =>void
}

export type InputsSubmitProps = {
    text: string;
    day: string;
    isRemind: boolean;
}
export type OnAddSubmitProps = {
    onAdd: (data:InputsSubmitProps) =>void
}