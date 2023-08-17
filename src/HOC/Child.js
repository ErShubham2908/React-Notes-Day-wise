export function HOCred(props){
    return(
        <div style={{border: '1px solid red'}}>
            <h1>This is Red Compo</h1>
            <h1 style={{backgroundColor: 'red', width: '200px'}}>{<props.data />}</h1>
        </div>
    )
}

export function HOCgreen(props){
    return(
        <>
            <h1>This is Green Compo</h1>
            <h1 style={{backgroundColor: "green", width: "200px"}}>{<props.data />}</h1>
        </>
    )
}
