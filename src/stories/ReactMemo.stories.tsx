import React, {useState} from "react";
export default  {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
export const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u, index) => <div key={index}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Victor'])
    return <>
        <button onClick={ () => setCounter(counter+1)}>+</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}