const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export const api = {
  baseUrl: API_BASE,

  async getStatus() {
    const res = await fetch(`${API_BASE}/api/status`);
    if (!res.ok) throw new Error('Status check failed');
    return res.json() as Promise<{ status: string }>;
  },

  async getRepairs() {
    const res = await fetch(`${API_BASE}/api/repairs`);
    if (!res.ok) throw new Error('Failed to fetch repairs');
    return res.json() as Promise<RepairOrder[]>;
  },

  async uploadContent(data: { title: string; rawText: string }) {
    const res = await fetch(`${API_BASE}/api/content/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Upload failed');
    return res.json() as Promise<ContentAwaiting>;
  },
};

export interface RepairOrder {
  id: number;
  clientName: string;
  device: string;
  status: string;
}

export interface ContentAwaiting {
  id: number;
  title: string;
  rawText: string;
  status: 'PENDING' | 'PUBLISHED';
}
