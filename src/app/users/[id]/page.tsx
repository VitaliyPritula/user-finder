import React from "react";

type User = {
  name: string;
  email: string;
  company: { name: string };
  address: { city: string };
  phone: string;
  website: string;
};

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}

type Props = {
  params: { id: string };
};

export default async function UserDetail({ params }: Props) {
  const user = await fetchUser(params.id); // Асинхронно отримуємо дані

  return (
    <div className="w-[500px] mx-auto py-[40px]">
      <button
        className="flex items-center font-bold mb-5 text-2xl"
        onClick={() => window.history.back()} // Кнопка назад
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
