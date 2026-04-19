# Vietnamese Food Images Searcher

Dự án nhận diện và tìm kiếm hình ảnh các món ăn Việt Nam. Dự án bao gồm:
- **Backend**: Flask API phục vụ nhận diện hình ảnh với AI model (TensorFlow/Keras).
- **Frontend**: Ứng dụng web React + Vite + Tailwind CSS với giao diện hiện đại.

## 🛠 Yêu cầu hệ thống
- **Python**: 3.10 trở lên
- **Node.js**: 18.x trở lên
- **npm** hoặc **yarn**

---

## 🚀 Hướng dẫn cài đặt và chạy dự án

### 1. Cài đặt Backend (Flask + AI)

Mở terminal mới và thực hiện các lệnh sau:

```bash
# 1. Di chuyển vào thư mục backend
cd backend

# 2. Tạo môi trường ảo (khuyến nghị)
python -m venv .venv

# 3. Kích hoạt môi trường ảo
# - Trên Windows:
.venv\Scripts\activate
# - Trên macOS/Linux:
# source .venv/bin/activate

# 4. Cài đặt các thư viện cần thiết
pip install -r requirements.txt

# 5. Khởi chạy Server
python app_v3.py
```
> Server backend sẽ chạy tại: `http://localhost:5000`

### 2. Cài đặt Frontend (React + Vite)

Mở một terminal **khác** (giữ terminal backend đang chạy) và thực hiện các lệnh sau:

```bash
# 1. Di chuyển vào thư mục frontend
cd frontend

# 2. Cài đặt các package phụ thuộc
npm install

# 3. Khởi chạy Frontend server
npm run dev
```
> Giao diện web sẽ chạy tại: `http://localhost:3000`

---

## 📦 Cách đưa dự án lên một Git Repository mới

Vì bạn đã gộp cả Frontend và Backend vào chung một thư mục gốc, dưới đây là các bước để đẩy toàn bộ dự án lên một repo mới trên GitHub/GitLab:

1. Lên GitHub/GitLab tạo một Repository mới (để trống, không chọn thêm README hay .gitignore).
2. Copy đường dẫn của repo mới (ví dụ: `https://github.com/username/vietnamese_food_images_searcher.git`).
3. Mở terminal tại thư mục gốc của dự án này và chạy các lệnh sau:

```bash
# Thêm các file mới (bao gồm cả README này) vào Git
git add .

# Tạo commit đầu tiên cho toàn bộ dự án
git commit -m "Initial commit: Combine frontend and backend"

# Thêm remote URL của repo mới
git remote add origin <ĐƯỜNG_DẪN_REPO_MỚI_CỦA_BẠN>

# Đổi tên nhánh chính thành main (nếu cần)
git branch -M main

# Đẩy code lên repository mới
git push -u origin main
```
