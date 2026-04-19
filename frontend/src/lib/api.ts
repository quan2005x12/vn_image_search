/**
 * API Service Layer — Kết nối Frontend với Flask Backend
 */

const API_BASE = "/api";

// === Types khớp với Backend Response ===

export interface SearchResultItem {
  dish_name: string;
  similarity: number;
  image_url: string; // e.g. "/dataset/pho/001.jpg"
}

export interface SearchResponse {
  results: SearchResultItem[];
  error?: string;
}

// === API Functions ===

/**
 * Gửi ảnh lên backend để tìm kiếm món ăn tương tự
 */
export async function searchByImage(file: File): Promise<SearchResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/search`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Lỗi server: ${res.status}`);
  }

  return res.json();
}

/**
 * Tạo URL đầy đủ cho ảnh từ backend
 * Backend serve ảnh tại /dataset/<path>
 * Vite proxy sẽ forward /dataset/* → backend
 */
export function getImageUrl(relativePath: string): string {
  // relativePath đã là "/dataset/pho/001.jpg" từ backend
  return relativePath;
}
