'use client';

import { useState } from 'react';

export default function TransactionFormPage() {
  const [form, setForm] = useState({
    amount: '',
    type: 'expense',
    category: '',
    note: '',
    date: new Date().toISOString().split('T')[0], // today
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMessage('✅ تراکنش با موفقیت ثبت شد!');
      setForm({ amount: '', type: 'expense', category: '', note: '', date: new Date().toISOString().split('T')[0] });
    } else {
      setMessage('❌ خطا در ثبت تراکنش');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">ثبت تراکنش جدید</h1>

      {message && <p className="mb-4 text-sm text-blue-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="amount"
          type="number"
          placeholder="مبلغ"
          value={form.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="expense">هزینه</option>
          <option value="income">درآمد</option>
        </select>

        <input
          name="category"
          type="text"
          placeholder="دسته‌بندی (مثلاً خرید، حقوق)"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="note"
          type="text"
          placeholder="توضیح (اختیاری)"
          value={form.note}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          ثبت تراکنش
        </button>
      </form>
    </div>
  );
}
