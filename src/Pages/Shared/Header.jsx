import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto' src={logo} alt="{logo}" />
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format('MMMM Do YYYY, h:mm: a')}</p>
        </div>
    );
};

export default Header;