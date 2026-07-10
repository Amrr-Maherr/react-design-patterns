import { useUsers } from "../../src/features/users/hooks/useUsers";
import UsersList from "../../src/features/users/components/UsersList";

export default function UsersPage() {
  const { data: users, isLoading, error } = useUsers();
  // Container layer
  return <UsersList error={error} isLoading={isLoading} users={users} />;
}
