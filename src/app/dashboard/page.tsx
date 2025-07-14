'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Please login first.');
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized or fetch failed');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      {error && <p className="text-red-600">Error: {error}</p>}
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : !error ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
}
