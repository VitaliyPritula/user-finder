"use client"; 
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';


type User = {
  name: string;
  email: string;
  company: { name: string };
  address: { city: string };
  phone: string;
  website: string;
};

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null); 
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      if (id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          console.error("Failed to fetch user data");
        }
      }
    }

    fetchUser();
  }, [id]); // Слідкуйте за зміною id

  if (!user) return <div>Loading...</div>;

  return (
    <div className="w-[500px] mx-auto py-[40px]">
      <button
        className="flex items-center font-bold mb-5 text-2xl"
        onClick={() => router.back()}
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
