export interface Room {
  id: string;
  name: string;
  description: string | null;
  image_url: string;
  combo_price: number;
  created_at?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string | null;
  dimensions: string | null;
  material: string | null;
  created_at?: string;
}

export interface RoomProduct {
  room_id: string;
  product_id: string;
  x: number; // coordinates in %
  y: number; // coordinates in %
  room?: Room;
  product?: Product;
}

export interface CartItem extends Product {
  quantity: number;
}
