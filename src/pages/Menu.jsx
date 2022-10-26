import { HiOutlinePhone } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';

function Menu() {
  return (
    <>
      <div>
        <HiOutlinePhone />
        <p>+234 90 9876 0067</p>
      </div>
      <div>
        <CiMail />
        <p>MENU PAGE</p>
      </div>
      <p>Open hours: Monday - Sunday 8:00AM - 9:00PM</p>
    </>
  );
}

export default Menu;
