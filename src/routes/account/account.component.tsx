import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import {
  AccountContainer,
  AccountHeader,
  AccountContent,
  AccountSection,
  SectionTitle,
  UserInfo,
  InfoItem,
  InfoLabel,
  InfoValue,
} from './account.styles';

const Account: FC = () => {
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) {
    return (
      <AccountContainer>
        <AccountHeader>Account</AccountHeader>
        <AccountContent>
          <p>Please sign in to view your account information.</p>
        </AccountContent>
      </AccountContainer>
    );
  }

  return (
    <AccountContainer>
      <AccountHeader>My Account</AccountHeader>
      <AccountContent>
        <AccountSection>
          <SectionTitle>Account Information</SectionTitle>
          <UserInfo>
            <InfoItem>
              <InfoLabel>Display Name:</InfoLabel>
              <InfoValue>{currentUser.displayName || 'Not provided'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Email:</InfoLabel>
              <InfoValue>{currentUser.email}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Account Created:</InfoLabel>
              <InfoValue>
                {currentUser.createdAt 
                  ? (currentUser.createdAt as any).seconds 
                    ? new Date((currentUser.createdAt as any).seconds * 1000).toLocaleDateString()
                    : new Date(currentUser.createdAt).toLocaleDateString()
                  : 'Not available'
                }
              </InfoValue>
            </InfoItem>
          </UserInfo>
        </AccountSection>
      </AccountContent>
    </AccountContainer>
  );
};

export default Account;
