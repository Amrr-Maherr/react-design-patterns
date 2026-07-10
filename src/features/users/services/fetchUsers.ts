import type { User } from "../types/user";
// container layer
export default async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.log(error);
    return [];
  }
}
