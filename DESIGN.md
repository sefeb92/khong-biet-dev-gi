# Thiết Kế Hệ Thống: NordicNest (Website Nội Thất Scandinavian Trực Quan)

Tài liệu thiết kế mô tả chi tiết kiến trúc, cấu trúc cơ sở dữ liệu và giao diện người dùng cho ứng dụng e-commerce nội thất NordicNest tập trung vào trải nghiệm mua sắm theo không gian (Interactive Lookbook/Shoppable Rooms).

---

## 1. Yêu Cầu & Phạm Vi Hệ Thống (MVP Scope)

- **Phong cách thiết kế**: Scandinavian tối giản, hiện đại, tông màu trung tính ấm (cozy neutral), hình ảnh độ nét cao.
- **Tính năng cốt lõi**:
  - Xem danh sách các phòng mẫu (không gian) ở Trang chủ.
  - Xem chi tiết phòng mẫu theo bố cục chia đôi (Split Screen):
    - Cột trái: Ảnh phòng mẫu chứa các hotspot (điểm tương tác). Khi hover/click vào hotspot sẽ làm nổi bật (highlight) sản phẩm ở cột phải.
    - Cột phải: Danh sách sản phẩm của phòng mẫu đó kèm thông tin giá, kích thước, mô tả và nút thêm vào giỏ hàng.
    - Nút "Mua trọn bộ không gian" giảm giá 10% cho toàn bộ sản phẩm trong phòng.
  - Giỏ hàng (Cart Drawer) quản lý sản phẩm, tổng tiền và nút checkout giả lập.
- **Công nghệ sử dụng**:
  - **Frontend**: Next.js (App Router), TailwindCSS v3.
  - **Backend / Database**: Supabase (PostgreSQL) phục vụ lưu trữ sản phẩm, không gian, tọa độ hotspot.

---

## 2. Cấu Trúc Cơ Sở Dữ Liệu (Supabase SQL Schema)

```sql
-- Kích hoạt extension uuid nếu chưa có
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Bảng Rooms (Không gian mẫu)
CREATE TABLE IF NOT EXISTS rooms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    combo_price DECIMAL(12, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Bảng Products (Sản phẩm nội thất)
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT,
    dimensions VARCHAR(100),
    material VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Bảng Room_Products (Hotspot liên kết sản phẩm và phòng)
CREATE TABLE IF NOT EXISTS room_products (
    room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    x DECIMAL(5, 2) NOT NULL, -- Tọa độ X tính bằng % (0.00 -> 100.00)
    y DECIMAL(5, 2) NOT NULL, -- Tọa độ Y tính bằng % (0.00 -> 100.00)
    PRIMARY KEY (room_id, product_id)
);
```
