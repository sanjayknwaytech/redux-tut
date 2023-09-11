import React from 'react'

const User=(props)=>{
    console.log(props.data)
    const {data} =props;
    return(
        <div>
            <h2>User Component</h2>
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
        </div>
    )
}

export default User;