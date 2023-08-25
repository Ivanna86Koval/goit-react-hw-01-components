import {
  Passport,
  Description,
  Img,
  UserName,
  UserText,
  Active,
  UserActive,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

export const Profile = ({ profile }) => {
  return (
    <Passport>
      <Description>
        <Img src={profile.avatar} alt="user-date" width="48" />
        <UserName>{profile.username}</UserName>
        <UserText>@{profile.tag}</UserText>
        <UserText>{profile.location}</UserText>
      </Description>

      <Active>
        <UserActive>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{profile.stats.followers}</SpanQuantity>
        </UserActive>
        <UserActive>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{profile.stats.followers}</SpanQuantity>
        </UserActive>
        <UserActive>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{profile.stats.followers}</SpanQuantity>
        </UserActive>
      </Active>
    </Passport>
  );
};
