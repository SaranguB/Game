import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import BadgeIcon from '@mui/icons-material/Badge';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Divider, Paper } from "@mui/material";

const Sidebar = () => {
  const {dispatch}= useContext(DarkModeContext)
  return (
    <Paper elevation={10}  square={false} sx={{width:"250px",backgroundColor:"#FAFAFA"}} >
    <div className="sidebar">
      <div className="top">
        <span className="logo">GameConnect</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dash</span>
          </li>
          <Divider/>
          <p className="title">Lists</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <CollectionsIcon className="icon"/>
            <span>Contents</span>
          </li>
          <li>
            <LocalMallIcon className="icon"/>
            <span>Orders</span>
          </li>
          <Divider/>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedTwoToneIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <Divider/>
          <p className="title">Service</p>
          <li>
          <ImportantDevicesIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <Divider/>
          
          <p className="title">USER</p>
          <li>
            <BadgeIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"/>
            <span>LogOut</span>
          </li>
          <Divider/>
        </ul>
      </div>
      <div className="bottom">
      <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
      <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
    </Paper>
  );
};

export default Sidebar;
