import { UserNavBox, UserNavLink, UserNavIcon } from './UserNav.styled';
import AccountIcon from './account.svg';

export const UserNav = () => {
  return (
    <UserNavBox>
      <UserNavLink to="/user">
        <UserNavIcon src={AccountIcon} alt="account" />
        Account
      </UserNavLink>
    </UserNavBox>
  );
};
