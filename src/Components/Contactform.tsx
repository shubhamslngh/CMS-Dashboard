import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Contact {
  fname: string;
  lname: string;
}

function ContactForm() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [form, setForm] = useState<Contact>({ fname: '', lname: '' });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedContacts = contacts.map((contact, index) =>
        index === editIndex ? form : contact
      );
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      setContacts([...contacts, form]);
    }
    setForm({ fname: '', lname: '' });
  };

  const handleEdit = (index: number) => {
    setForm(contacts[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6">Contact Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="fname">
              First name:
            </label>
            <input
              className="w-full border border-gray-300 rounded py-2 px-3"
              type="text"
              id="fname"
              name="fname"
              value={form.fname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="lname">
              Last name:
            </label>
            <input
              className="w-full border border-gray-300 rounded py-2 px-3"
              type="text"
              id="lname"
              name="lname"
              value={form.lname}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {editIndex !== null ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact List</h2>
          {contacts.length === 0 ? (
            <p>No contacts available</p>
          ) : (
            <ul>
              {contacts.map((contact, index) => (
                <li key={index} className="mb-4 flex justify-between items-center">
                  <span>{contact.fname} {contact.lname}</span>
                  <div>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
