import dynamic from 'next/dynamic';

const MyProfilePage = dynamic(
  () => import('@/containers/account-page/my-profile-page'),
);

const MyProfile: React.FC = () => {
  return <MyProfilePage />;
};

export default MyProfile;
