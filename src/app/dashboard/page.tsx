'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function fetchUser() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        console.log('Not authorized');
      }
    }

    if (token) fetchUser();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">داشبورد</h1>
      {user ? (
        <p>خوش اومدی {user.email}</p>
      ) : (
        <p>در حال بارگذاری اطلاعات کاربر...</p>
      )}
    </div>
  );
}
