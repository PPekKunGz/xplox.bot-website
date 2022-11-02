import footer from "../../styles/components/footer.module.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.logo}>XPLOx🍒</div>
      <div className={footer.menu}>
        <h3 className={footer.title}>เมนูทั้งหมด</h3>
        <ul>
          <li>
            <a href="#">หน้าหลัก</a>
          </li>
          <li>
            <a href="#">สถานะ</a>
          </li>
          <li>
            <a href="#">คำสั่งบอท</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
        </ul>
      </div>
      <div className={footer.share}>
        <h3 className={footer.title}>โซเชียล</h3>
        <div className={footer.wasd}>
          <div className={footer.twitter}>
            {/* <a href="https://twitter.com/share?text=เว็บไซต์ Portfolio ของ นายบราวน์&amp;url=https://portfolio-brown.tk/&amp;hashtags=รับทำเว็บไซต์&amp;hashtags=บราวน์รับทำเว็บไซต์" onclick="window.open(this.href, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;"> */}
            <TwitterIcon className={footer.icon} />
            {/* </a> */}
          </div>
          <div className={footer.facebook}>
            <a
              href="http://www.facebook.com/share.php?u=https://xplox.vikoperation.studio/"
              onclick="window.open(encodeURI(decodeURI(this.href)), 'FBwindow', 'width=650, height=470, menubar=no, toolbar=no, scrollbars=yes'); return false;"
              rel="nofollow"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon className={footer.icon} />
            </a>
          </div>
          <div className={footer.discord}>
            <a
              href="https://vikoprt.link/ayarikobotontourdc"
              target="_blank"
              rel="noreferrer"
            >
              <AddModeratorIcon className={footer.icon} />
            </a>
          </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
