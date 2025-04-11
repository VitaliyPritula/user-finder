import { User } from "@/types/user";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <div className="border p-4 rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">Company: {user.company.name}</p>
      <p className="text-sm text-gray-500">City: {user.address.city}</p>
    </div>
  );
}