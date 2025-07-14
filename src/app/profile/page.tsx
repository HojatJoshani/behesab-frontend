'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized or error fetching profile');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>در حال دریافت اطلاعات...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">پروفایل من</h1>
      <p><strong>نام:</strong> {user.name}</p>
      <p><strong>ایمیل:</strong> {user.email}</p>
      <p><strong>شناسه:</strong> {user.id}</p>
    </div>
  );
}
