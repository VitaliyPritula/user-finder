"use client"; // Використовується лише в Client Components

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function UserDetail({ params }: { params: { id: string } }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        console.error("Failed to fetch user data");
      }
    }
    fetchUser();
  }, [params]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="w-[500px] mx-auto py-[40px]">
      <button
        className="flex items-center font-bold mb-5 text-2xl"
        onClick={() => router.back()}>
        <span>Назад</span>
      </button>
      <h1>Детальна інформація про користувача</h1>
      <p>Ім'я: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Компанія: {user.company.name}</p>
      <p>Місто: {user.address.city}</p>
      <p>Телефон: {user.phone}</p>
      <p>Сайт: {user.website}</p>
    </div>
  );
}
