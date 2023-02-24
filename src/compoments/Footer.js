import '../styles/App.scss';
import logoFooter from '../assets/images/Logo_Footer.png';

export default function Footer() {
  return (
    <div className='footer'>
      <img className="logoFooter" src={logoFooter} alt="kasa" />
      <p className='legalNotice'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
