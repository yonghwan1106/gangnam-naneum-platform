'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { mockPurchases } from '@/lib/mock-data';
import { Award, Download, Share2, ExternalLink, Calendar, Heart, ShoppingBag, Gift } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function CertificatesPage() {
  const [purchases] = useState(mockPurchases);

  const handleDownloadCertificate = (purchaseId: string) => {
    toast.success('NFT 인증서 다운로드가 시작됩니다!', {
      icon: '📥',
    });
  };

  const handleShareCertificate = (purchaseId: string) => {
    toast.success('SNS 공유 링크가 클립보드에 복사되었습니다!', {
      icon: '📋',
    });
  };

  const handleViewOnBlockchain = (purchaseId: string) => {
    toast.success('블록체인 탐색기에서 확인할 수 있습니다!', {
      icon: '🔗',
    });
  };

  const totalDonationAmount = purchases.reduce((sum, purchase) => sum + purchase.donationAmount, 0);
  const totalPurchases = purchases.length;

  return (
    <Layout>
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">나눔 인증서 (NFT)</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            구매할 때마다 발급되는 NFT 인증서로 나눔 참여를 영구 보존하세요. 
            블록체인에 기록되어 위변조가 불가능합니다.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">보유 인증서</p>
                <p className="text-2xl font-bold text-gray-900">{totalPurchases}개</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">총 기부액</p>
                <p className="text-2xl font-bold text-gray-900">{totalDonationAmount.toLocaleString()}원</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <Gift className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">나눔 등급</p>
                <p className="text-2xl font-bold text-gray-900">골드</p>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Certificates Grid */}
        {purchases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchases.map((purchase) => (
              <div key={purchase.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                {/* NFT Image */}
                <div className="aspect-square bg-gradient-to-br from-rose-100 via-purple-50 to-indigo-100 relative p-8">
                  {purchase.nftCertificate ? (
                    <img
                      src={purchase.nftCertificate.imageUrl || '/images/nft-certificate.svg'}
                      alt={`${purchase.productName} NFT 인증서`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/images/nft-certificate.svg';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center">
                      <Award className="w-16 h-16 text-rose-400 mb-4" />
                      <div className="text-lg font-bold text-gray-800 mb-2">나눔 인증서</div>
                      <div className="text-sm text-gray-600 mb-4">강남 나눔 생태계</div>
                      <div className="text-xs text-gray-500">
                        {new Date(purchase.purchaseDate).toLocaleDateString('ko-KR')}
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    NFT #{purchase.nftCertificate?.tokenId || 'PENDING'}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-1">
                    {purchase.productName}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">구매 수량:</span>
                      <span className="font-medium">{purchase.quantity}개</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">구매 금액:</span>
                      <span className="font-medium">{purchase.totalAmount.toLocaleString()}원</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">기부 금액:</span>
                      <span className="font-medium text-rose-600">{purchase.donationAmount.toLocaleString()}원</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">구매 날짜:</span>
                      <span className="font-medium">{new Date(purchase.purchaseDate).toLocaleDateString('ko-KR')}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => handleDownloadCertificate(purchase.id)}
                      className="flex items-center justify-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      인증서 다운로드
                    </button>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleShareCertificate(purchase.id)}
                        className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Share2 className="w-4 h-4 mr-1" />
                        공유
                      </button>
                      <button
                        onClick={() => handleViewOnBlockchain(purchase.id)}
                        className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        블록체인
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-96">
              <ShoppingBag className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">다음 인증서</h3>
              <p className="text-gray-500 text-sm mb-4">
                나눔 마켓에서 상품을 구매하면<br />
                새로운 NFT 인증서를 받을 수 있어요
              </p>
              <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
                쇼핑하러 가기
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">아직 보유한 인증서가 없습니다</h3>
            <p className="text-gray-500 mb-6">
              나눔 마켓에서 상품을 구매하면 NFT 인증서를 받을 수 있습니다.
            </p>
            <button className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
              첫 번째 나눔 시작하기
            </button>
          </div>
        )}

        {/* About NFT Certificates */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">NFT 나눔 인증서란?</h2>
            <p className="text-blue-800 mb-6">
              구매와 동시에 자동으로 발급되는 디지털 인증서로, 나눔 참여 내역을 
              블록체인에 영구 보존합니다. 위변조가 불가능하며 언제든지 증명 자료로 활용할 수 있습니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900 mb-1">영구 보존</h4>
                <p className="text-blue-700">블록체인에 기록되어 영원히 보존됩니다</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <Share2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900 mb-1">SNS 공유</h4>
                <p className="text-blue-700">나눔 활동을 자랑하고 공유할 수 있습니다</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <ExternalLink className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900 mb-1">투명한 검증</h4>
                <p className="text-blue-700">누구나 블록체인에서 진위를 확인할 수 있습니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}