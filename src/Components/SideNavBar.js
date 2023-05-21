function SideNavBar(props){
    return(
        <>
        <div className="container" style={{display:'flex'}}>
            <ul className="nav flex-column my-3 mx-3">
            <li className="nav-item">
               <h5> <a className="nav-link active" aria-current="page" href="#" onClick={() => props.handleClick("Todos")} >Todos</a></h5>
            </li>
            <li className="nav-item">
               <h5> <a className="nav-link" href="#" onClick={() => props.handleClick("TextUtils")}>TextUtils</a></h5>
            </li>
            <li className="nav-item">
               <h5> <a className="nav-link" href="#" onClick={() => props.handleClick("Form")}>Form</a></h5>
            </li>
            </ul>
        </div>
        </>
    )
}

export default SideNavBar;