import { UserCountry, UserId, UserIcon, FollowButton } from '@/ui';
import { User } from '@/types/user.type';
import { getCountry } from '@/utils/getCountry';
import { dummyUser1 } from '@/mocks/user.mock';

const PostUserInfo = ({ nickname, country, avatar }: User) => {
  // 임시로 더미 유저의 닉네임을 통해 팔로우 버튼을 표시할지 결정합니다.
  // 닉네임이 DummyUser1이면 팔로우 버튼을 표시하지 않습니다.
  const isShowFollowButton = nickname !== '일론 머스크';
  return (
    <div className="flex flex-row items-center justify-between w-full gap-4">
      <div className="flex items-center gap-4">
        <UserIcon avatar={avatar} />
        <div className="flex flex-col">
          <UserId nickname={nickname} />
          {/* 임시로 더미 유저의 나라를 통해 나라를 표시하는 언어를 설정합니다. */}
          <UserCountry country={getCountry(dummyUser1.country, country)} />
        </div>
      </div>
      {isShowFollowButton && <FollowButton title="팔로우" />}
    </div>
  );
};

export default PostUserInfo;
