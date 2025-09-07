'use client';

import Link from 'next/link';
import { Heart, MapPin, Users, Leaf } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-w-16 aspect-h-12 bg-gray-200 relative">
        <img
          src={product.images[0] || '/api/placeholder/400/300'}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {discountPercentage}% 할인
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {product.category}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg line-clamp-1">
            {product.name}
          </h3>
          {product.blockchain.verified && (
            <div className="flex items-center text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs">검증됨</span>
            </div>
          )}
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{product.seller.location}</span>
          <span className="mx-2">•</span>
          <span className={`px-2 py-1 rounded text-xs ${
            product.seller.type === 'individual' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-purple-100 text-purple-800'
          }`}>
            {product.seller.type === 'individual' ? '개인' : '단체'}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-3 space-x-4">
          <div className="flex items-center text-green-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-xs">수혜자 {product.impactMetrics.beneficiariesCount}명</span>
          </div>
          <div className="flex items-center text-blue-600">
            <Heart className="w-4 h-4 mr-1" />
            <span className="text-xs">{product.impactMetrics.donationPercentage}% 기부</span>
          </div>
          <div className="flex items-center text-emerald-600">
            <Leaf className="w-4 h-4 mr-1" />
            <span className="text-xs">{product.impactMetrics.carbonFootprint}kg CO₂</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {product.price.toLocaleString()}원
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice.toLocaleString()}원
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              재고: {product.stock}개
            </div>
          </div>
          
          <Link
            href={`/products/${product.id}`}
            className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors"
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </div>
  );
}