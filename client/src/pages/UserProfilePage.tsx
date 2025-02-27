import { useUpdateMyUser } from "@/api/myUserApi"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"


const UserProfilePage = () => {
  const {updateUser,isLoading} = useUpdateMyUser();
  return (
    <UserProfileForm onSave={updateUser} isLoading={isLoading} />
  )
}

export default UserProfilePage