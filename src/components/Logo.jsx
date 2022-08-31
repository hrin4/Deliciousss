import {LogoMain, Nav} from './styles';
import {GiKnifeFork} from 'react-icons/gi'

function Logo() {
  return (
    <Nav>
      <GiKnifeFork />
      <LogoMain to={'/'}>Deliciousss</LogoMain>
    </Nav>
  )
}

export default Logo
