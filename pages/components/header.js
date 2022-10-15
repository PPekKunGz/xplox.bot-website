import header from "../../styles/components/header.module.css"

//-- MUI ICON --//
import TableRowsIcon from '@mui/icons-material/TableRows';
import HomeIcon from '@mui/icons-material/Home';
import DnsIcon from '@mui/icons-material/Dns';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
//-- MUI ICON --//
function Header() {
    return (
        <header className={header.header}>
          <a href="https://xplox.vikoperation.studio" className={header.logo}><img src="/avatar.png" />XPLOx🍒#9610</a>
          <div className={header.group}>
            <ul className={header.nav}>
              <li><a href="#"><HomeIcon />หน้าหลัก</a></li>
              <li><a href="#"><DnsIcon />สถานะ</a></li>
              <li><a href="#"><TerminalIcon />คำสั่งบอท</a></li>
              <li><a href="#"><IntegrationInstructionsIcon />Developers</a></li>
            </ul>
            {/* <TableRowsIcon /> */}
          </div>
        </header>
    )
  }
  
export default Header