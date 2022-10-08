import React from "react";
export function TableUser(props){
    return(
        <div className="col col-10 divTable">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="colId">Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th colSpan={2} scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <tr key={user.id+3}>
                            <th key={user.id} scope="row"><p>{user.id}</p></th>
                            <td key={user.email}><p>{user.email}</p></td>
                            <td key={user.username}><p>{user.username}</p></td>
                            <td key={user.address.street}><p>{user.address.street}</p></td>
                            <td key={user.id +1}><button onClick={props.action.change} type="button" className="btn btn-primary">Edit</button></td>
                            <td key={user.id+2}><button onClick={props.action.delete} type="button" className="btn btn-danger">Delete</button></td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
        
    )
}
