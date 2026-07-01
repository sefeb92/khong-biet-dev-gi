'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

const translations = {
  en: {
    search: 'Search collection...',
    cart: 'Cart',
    emptyCart: 'Your cart is empty',
    checkout: 'Checkout',
    subtotal: 'Subtotal',
    features: {
      title: 'Our Commitment to Calm',
      f1_title: 'Minimalist Design',
      f1_desc: 'Embracing the Scandinavian philosophy of "less is more," our pieces focus on clean lines and functional beauty that clears the mind.',
      f2_title: '100% Natural Wood',
      f2_desc: 'Sustainably sourced oak, ash, and walnut from Nordic forests, treated with organic oils to preserve the living texture of the timber.',
      f3_title: 'Conscious Delivery',
      f3_desc: 'Carbon-neutral shipping directly to your sanctuary. We handle every piece with the utmost care, ensuring it arrives ready for its new home.',
      newsletter_title: 'Join the NordicNest Journal',
      newsletter_desc: 'Receive seasonal styling guides, exclusive lookbook previews, and stories of craftsmanship delivered to your inbox.',
      subscribe: 'Subscribe',
    },
    hero: {
      collection: 'Spring Collection 2026',
      title: 'Finding Harmony in the Everyday',
      desc: 'Experience the curated warmth of our new seasonal arrivals. Handcrafted textures and sustainable materials designed to elevate your sanctuary.',
      shop: 'Shop The Look',
      explore: 'Explore Rooms',
      discover: 'Discover',
    },
    roomGrid: {
      title: 'A Space for Every Story',
      desc: 'Browse our signature room collections, where functional design meets natural beauty. Each piece is selected for its ability to create a lasting sense of home.',
      viewAll: 'View All Spaces'
    },
    aesthetic: {
      subtitle: 'Material Integrity',
      title: 'Designed to endure, crafted to be cherished.',
      desc: 'We believe in furniture that ages with grace. Our solid oak frames and organic cotton textiles are sourced from FSC-certified forests and sustainable mills, ensuring your home feels as good as it looks.',
      eco_title: 'Eco-Conscious',
      eco_desc: 'Renewable sourcing from Nordic forests.',
      hand_title: 'Hand-Finished',
      hand_desc: 'Artisan attention to every joint.',
    },
    footer: {
      brand_desc: 'Crafting quiet moments of domestic bliss through honest materials and timeless Scandinavian design since 2014. Handcrafted in Scandinavia.',
      col_title: 'Collection',
      sup_title: 'Support',
      con_title: 'Contact Us',
      rights: '© 2026 NordicNest AB. All rights reserved.',
    }
  },
  vi: {
    search: 'Tìm kiếm bộ sưu tập...',
    cart: 'Giỏ hàng',
    emptyCart: 'Giỏ hàng của bạn đang trống',
    checkout: 'Thanh toán',
    subtotal: 'Tổng cộng',
    features: {
      title: 'Cam Kết Về Sự Bình Yên',
      f1_title: 'Thiết kế tối giản',
      f1_desc: 'Đón nhận triết lý "ít hơn là nhiều hơn" của Scandinavian, các thiết kế của chúng tôi tập trung vào những đường nét sạch sẽ và vẻ đẹp công năng giúp thanh lọc tâm trí.',
      f2_title: 'Gỗ tự nhiên 100%',
      f2_desc: 'Nguồn gỗ sồi, tần bì và óc chó bền vững từ các khu rừng Bắc Âu, được xử lý bằng dầu hữu cơ để lưu giữ trọn vẹn kết cấu sống động của gỗ.',
      f3_title: 'Giao hàng tận tâm',
      f3_desc: 'Vận chuyển trung hòa carbon trực tiếp đến không gian của bạn. Chúng tôi nâng niu từng sản phẩm với sự cẩn trọng tối đa để sẵn sàng cho ngôi nhà mới.',
      newsletter_title: 'Đăng ký nhận Bản tin NordicNest',
      newsletter_desc: 'Nhận các hướng dẫn phong cách theo mùa, xem trước các bộ sưu tập độc quyền và những câu chuyện về nghệ thuật chế tác thủ công gửi trực tiếp đến hộp thư của bạn.',
      subscribe: 'Đăng ký',
    },
    hero: {
      collection: 'Bộ sưu tập Xuân 2026',
      title: 'Tìm thấy Sự Hài Hòa trong Thường Nhật',
      desc: 'Trải nghiệm sự ấm áp được chọn lọc từ những sản phẩm mới theo mùa của chúng tôi. Kết cấu thủ công và vật liệu bền vững được thiết kế để nâng tầm không gian sống của bạn.',
      shop: 'Mua bộ sưu tập',
      explore: 'Khám phá các phòng',
      discover: 'Khám phá',
    },
    roomGrid: {
      title: 'Mỗi Không Gian Một Câu Chuyện',
      desc: 'Duyệt qua các bộ sưu tập phòng đặc trưng của chúng tôi, nơi thiết kế công năng hòa quyện cùng vẻ đẹp tự nhiên. Mỗi sản phẩm được chọn lọc để kiến tạo cảm giác ấm cúng của gia đình.',
      viewAll: 'Xem tất cả không gian'
    },
    aesthetic: {
      subtitle: 'Sự trọn vẹn của vật liệu',
      title: 'Thiết kế để trường tồn, chế tác để nâng niu.',
      desc: 'Chúng tôi tin tưởng vào những món đồ nội thất bền đẹp theo thời gian. Khung gỗ sồi nguyên khối và vải dệt bông hữu cơ của chúng tôi được lấy từ các khu rừng chứng nhận FSC và các xưởng dệt bền vững.',
      eco_title: 'Thân thiện môi trường',
      eco_desc: 'Nguồn cung ứng tái tạo từ rừng Bắc Âu.',
      hand_title: 'Hoàn thiện thủ công',
      hand_desc: 'Sự tỉ mỉ của nghệ nhân trên từng mối nối.',
    },
    footer: {
      brand_desc: 'Kiến tạo những khoảnh khắc bình yên cho tổ ấm thông qua các vật liệu chân thật và thiết kế Scandinavian vượt thời gian từ năm 2014.',
      col_title: 'Bộ sưu tập',
      sup_title: 'Hỗ trợ',
      con_title: 'Liên hệ',
      rights: '© 2026 NordicNest AB. Bảo lưu mọi quyền.',
    }
  }
};

type TranslationKeys = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends keyof TranslationKeys>(key: K) => TranslationKeys[K];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language;
    if (stored === 'en' || stored === 'vi') {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = <K extends keyof TranslationKeys>(key: K): TranslationKeys[K] => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
