const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
const API_KEY = import.meta.env.VITE_API_KEY;

async function handleResponse(response) {
  if (!response.ok) {
    const message = `Erreur API ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

export async function apiGet(path) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  });

  return handleResponse(response);
}

export async function apiPost(path, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify(body),
  });

  return handleResponse(response);
}
