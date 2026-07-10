import type { User } from "../types/user";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-300 p-4">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        width={64}
        height={64}
        className="rounded-full"
      />
      <div>
        <h3 className="m-0 font-medium text-white">
          {user.firstName} {user.lastName}
        </h3>
        <p className="m-0 text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
