"use client";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import Filters from "@/components/Filters";
import UserTable from "@/components/UserTable";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filters, setFilters] = useState({ name: "", company: "", city: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.company ? user.company.name === filters.company : true) &&
      (filters.city ? user.address.city === filters.city : true)
    );
    setFilteredUsers(filtered);
  }, [filters, users]);

  const uniqueCompanies = Array.from(new Set(users.map((u) => u.company.name)));
  const uniqueCities = Array.from(new Set(users.map((u) => u.address.city)));

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Finder</h1>
      <Filters
        name={filters.name}
        company={filters.company}
        city={filters.city}
        onFilterChange={setFilters}
        companyOptions={uniqueCompanies}
        cityOptions={uniqueCities}
      />
      <UserTable users={filteredUsers} />
    </main>
  );
}
