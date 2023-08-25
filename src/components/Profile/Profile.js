import {
  Passport,
  Description,
  Img,
  UserName,
  UserText,
} from './Profile.styled';

export const Profile = ({
  profile,
  location,
  tag,
  username,
  avatar,
  stats,
}) => {
  return (
    <Passport>
      <Description>
        <Img src={avatar} alt={username} width="48" />
        <UserName>{profile.username}</UserName>
        <UserText>{profile.user.tag}</UserText>
        <UserText>{profile.user.location}</UserText>
      </Description>

      <ul>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </Passport>
  );
};
