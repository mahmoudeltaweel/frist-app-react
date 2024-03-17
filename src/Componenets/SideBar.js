import { NavLink  } from "react-router-dom";

export default function SideBar(){
    return(
        <div className="side-bar">
            
            <NavLink activeClassName="active" to="/dashboard/users" className="item-link" ><i className="fa-solid fa-users"></i> Users</NavLink>
            
            <NavLink activeClassName="active" to="/dashboard/user/create" className="item-link" ><i className="fa-solid fa-user-plus"></i> New Users</NavLink>
        </div>
    );
}