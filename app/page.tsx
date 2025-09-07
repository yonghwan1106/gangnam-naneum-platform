'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Heart, ShoppingBag, Shield, Award, TrendingUp, Users, Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [stats] = useState({
    totalSales: 2500000,
    totalDonations: 750000,
    activeProducts: 47,
    beneficiaries: 156
  });

  const features = [
    {
      icon: Shield,
      title: '블록체인 투명성',
      description: '모든 거래와 기부 내역이 블록체인에 기록되어 100% 투명하게 공개됩니다.'
    },
    {
      icon: Award,
      title: 'NFT 나눔 인증서',
      description: '구매 시 고유한 NFT 인증서를 발급받아 나눔 참여를 영구 보존할 수 있습니다.'
    },
    {
      icon: TrendingUp,
      title: '실시간 임팩트 모니터링',
      description: '내 구매가 만들어낸 사회적 영향을 실시간으로 확인할 수 있습니다.'
    },
    {
      icon: Users,
      title: '취약계층 자립 지원',
      description: '단순한 후원이 아닌, 지속가능한 수익 창출을 통한 진정한 자립을 지원합니다.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 pt-28 pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-rose-100">
                <Heart className="w-5 h-5 text-rose-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">2025 강남다운 복지 아이디어 공모전 출품작</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              품격있는 나눔으로<br />
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                따뜻한 강남
              </span>을 만들다
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              블록체인 기술로 투명성을 보장하는 나눔 마켓플레이스에서<br />
              취약계층이 만든 정성스러운 상품을 만나보세요
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <ShoppingBag className="mr-3 h-6 w-6" />
                나눔마켓 둘러보기
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center px-10 py-5 bg-white border-2 border-rose-300 text-rose-600 font-bold rounded-2xl hover:bg-rose-50 hover:border-rose-400 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Shield className="mr-3 h-6 w-6" />
                투명성 확인하기
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                블록체인 보안
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-red-500 mr-2" />
                투명한 기부
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-blue-500 mr-2" />
                NFT 인증서
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              실시간 나눔 현황
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              투명하고 지속가능한 나눔 생태계의 성과를 확인하세요
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-10 h-10 text-blue-600" />
                <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">+15%</div>
              </div>
              <div className="text-4xl font-bold text-blue-700 mb-2">
                {(stats.totalSales / 10000).toFixed(0)}만원
              </div>
              <div className="text-blue-600 font-medium">총 거래액</div>
              <div className="text-sm text-blue-500 mt-1">이번 달 누적</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-rose-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <Heart className="w-10 h-10 text-rose-600" />
                <div className="text-xs text-rose-600 bg-rose-100 px-2 py-1 rounded-full">30%</div>
              </div>
              <div className="text-4xl font-bold text-rose-700 mb-2">
                {(stats.totalDonations / 10000).toFixed(0)}만원
              </div>
              <div className="text-rose-600 font-medium">누적 기부금</div>
              <div className="text-sm text-rose-500 mt-1">자동 적립 완료</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <ShoppingBag className="w-10 h-10 text-emerald-600" />
                <div className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">활성</div>
              </div>
              <div className="text-4xl font-bold text-emerald-700 mb-2">{stats.activeProducts}</div>
              <div className="text-emerald-600 font-medium">등록 상품</div>
              <div className="text-sm text-emerald-500 mt-1">판매 중인 상품</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-10 h-10 text-amber-600" />
                <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">+12</div>
              </div>
              <div className="text-4xl font-bold text-amber-700 mb-2">{stats.beneficiaries}</div>
              <div className="text-amber-600 font-medium">수혜자 수</div>
              <div className="text-sm text-amber-500 mt-1">도움받은 분들</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              강남구만의 <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">특별한</span> 나눔 경험
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              최신 기술과 따뜻한 마음이 만나 새로운 복지 모델을 제시합니다.<br />
              지속가능하고 투명한 나눔 생태계를 경험해보세요.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              간단한 3단계로 시작하는 나눔
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">상품 선택</h3>
              <p className="text-gray-600">
                취약계층이 정성으로 만든 다양한 상품 중에서 마음에 드는 것을 선택하세요
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">투명한 구매</h3>
              <p className="text-gray-600">
                블록체인에 기록되는 투명한 거래로 기부금 사용 내역을 실시간 확인할 수 있습니다
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT 인증서 획득</h3>
              <p className="text-gray-600">
                구매와 동시에 나눔 참여를 증명하는 NFT 인증서를 받아 영구 보관하세요
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              지금 시작하는 의미있는 나눔
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              당신의 작은 구매가 누군가에게는 큰 희망이 됩니다
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              나눔 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}