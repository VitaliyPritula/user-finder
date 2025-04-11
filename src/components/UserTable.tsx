"use client";
import { User } from "@/types/user";
import Link from "next/link";

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  return (
    <table className="w-full table-auto border-collapse mt-4">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Company</th>
          <th className="p-2 border">City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="p-2 border">
              <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
                {user.name}
              </Link>
            </td>
            <td className="p-2 border">{user.email}</td>
            <td className="p-2 border">{user.company.name}</td>
            <td className="p-2 border">{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
