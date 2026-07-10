import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/user";
import fetchUsers from "../services/fetchUsers";

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
