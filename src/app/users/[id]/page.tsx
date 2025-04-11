
"use client"; // Додано для клієнтського компонента

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  company: { name: string };
  address: { city: string };
  phone: string;
  website: string;
};

// Використовуємо 'PageProps' для отримання параметрів із контексту Next.js
export default function UserDetail({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User | null>(null); // Типізація User
  const router = useRouter();

  // Завантаження даних користувача
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      if (res.ok) {
        const data: User = await res.json(); // Типізація відповіді
        setUser(data);
      } else {
        console.error("Failed to fetch user data");
      }
    }
    fetchUser();
  }, [params.id]); // Модифікація залежності на params.id

  if (!user) return <div>Loading...</div>;

  return (
    <div className="w-[500px] mx-auto py-[40px]">
      <button
        className="flex items-center font-bold mb-5 text-2xl"
        onClick={() => router.back()} // Використовуємо useRouter для кнопки назад
      >
        <span>Назад</span>
      </button>
      <h1>Детальна інформація про користувача</h1>
      <p>Ім&apos;я: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Компанія: {user.company.name}</p>
      <p>Місто: {user.address.city}</p>
      <p>Телефон: {user.phone}</p>
      <p>Сайт: {user.website}</p>
    </div>
  );
}
