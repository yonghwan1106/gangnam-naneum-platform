'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Layout from '@/components/Layout';
import { mockProducts } from '@/lib/mock-data';
import { Heart, MapPin, Users, Leaf, ShoppingCart, Shield, Award, Star, ExternalLink } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = mockProducts.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">상품을 찾을 수 없습니다</h1>
          </div>
        </div>
      </Layout>
    );
  }

  const totalPrice = product.price * quantity;
  const donationAmount = Math.round(totalPrice * (product.impactMetrics.donationPercentage / 100));

  const handlePurchase = () => {
    toast.success(
      <div>
        <div className="font-semibold">구매가 완료되었습니다!</div>
        <div className="text-sm text-gray-600">
          {donationAmount.toLocaleString()}원이 복지기금으로 기부되었습니다.
        </div>
        <div className="text-sm text-gray-600">
          NFT 나눔 인증서가 발급됩니다.
        </div>
      </div>,
      {
        duration: 5000,
        icon: '🎉'
      }
    );
  };

  return (
    <Layout>
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-xl overflow-hidden mb-4">
              <img
                src={product.images[selectedImage] || '/api/placeholder/600/400'}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-rose-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image || '/api/placeholder/150/150'}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.seller.location}
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  product.seller.type === 'individual' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {product.seller.type === 'individual' ? '개인 판매자' : '단체 판매자'}
                </div>
                {product.blockchain.verified && (
                  <div className="flex items-center text-green-600">
                    <Shield className="w-4 h-4 mr-1" />
                    <span className="text-xs">블록체인 검증</span>
                  </div>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-5 h-5 ${
                      star <= Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount}개 후기)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price.toLocaleString()}원
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600">
                재고: {product.stock}개 남음
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">이 상품의 사회적 임팩트</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{product.impactMetrics.beneficiariesCount}</div>
                  <div className="text-xs text-gray-600">수혜자</div>
                </div>
                <div className="text-center">
                  <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{product.impactMetrics.donationPercentage}%</div>
                  <div className="text-xs text-gray-600">기부 비율</div>
                </div>
                <div className="text-center">
                  <Leaf className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{product.impactMetrics.carbonFootprint}</div>
                  <div className="text-xs text-gray-600">kg CO₂</div>
                </div>
              </div>
            </div>

            {/* Quantity and Purchase */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <label className="text-sm font-medium text-gray-700">수량:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">총 구매금액:</span>
                  <span className="font-bold text-lg">{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-rose-600">자동 기부금액:</span>
                  <span className="font-semibold text-rose-600">{donationAmount.toLocaleString()}원</span>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full bg-rose-600 text-white py-4 rounded-lg font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>구매하고 나눔 참여하기</span>
              </button>
            </div>

            {/* Blockchain Info */}
            {product.blockchain.transactionHash && (
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-blue-900">블록체인 거래 내역</div>
                    <div className="text-sm text-blue-700">
                      {product.blockchain.transactionHash.slice(0, 20)}...
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">상품 정보</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">상품 설명</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">판매자 정보</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-900 mb-2">{product.seller.name}</div>
                <p className="text-gray-600 text-sm mb-2">{product.seller.story}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.seller.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}