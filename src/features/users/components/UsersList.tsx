import ErrorDisplay from "./ErrorDisplay";
import Spinner from "./Spinner";
import type { User } from "../types/user";
import UserCard from "./UserCard";
export type UsersListProps = {
  users: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
};
// Presentational layer
export default function UsersList({ users, isLoading, error }: UsersListProps) {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorDisplay message={error?.message} />;
  return (
    <div className="flex flex-col gap-3 p-6">
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
