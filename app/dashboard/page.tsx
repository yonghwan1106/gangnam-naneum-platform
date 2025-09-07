'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { mockStats, mockTransactions } from '@/lib/mock-data';
import { TrendingUp, Users, Heart, Leaf, ExternalLink, Shield, CheckCircle } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

export default function DashboardPage() {
  const [stats] = useState(mockStats);
  const [transactions] = useState(mockTransactions);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const donationData = {
    labels: ['복지기금', '운영비', '플랫폼 수수료'],
    datasets: [
      {
        data: [75, 15, 10],
        backgroundColor: ['#e11d48', '#f97316', '#6b7280'],
        borderWidth: 0,
      },
    ],
  };

  const monthlyData = {
    labels: ['10월', '11월', '12월'],
    datasets: [
      {
        label: '총 거래액 (만원)',
        data: [180, 220, 250],
        backgroundColor: 'rgba(225, 29, 72, 0.8)',
        borderColor: 'rgba(225, 29, 72, 1)',
        borderWidth: 2,
      },
    ],
  };

  const impactTrend = {
    labels: ['10월', '11월', '12월'],
    datasets: [
      {
        label: '수혜자 수',
        data: [120, 140, 156],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">투명성 대시보드</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            블록체인 기술로 보장되는 완전한 투명성. 
            모든 거래와 기부 내역을 실시간으로 확인할 수 있습니다.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            실시간 업데이트: {currentTime.toLocaleString('ko-KR')}
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">총 거래액</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(stats.totalSales / 10000).toFixed(0)}만원
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +15.3% (전월 대비)
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">누적 기부금</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(stats.totalDonations / 10000).toFixed(0)}만원
                </p>
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <Heart className="w-4 h-4 mr-1" />
                  30% 기부율 유지
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">수혜자 수</p>
                <p className="text-2xl font-bold text-gray-900">{stats.beneficiaries}명</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <Users className="w-4 h-4 mr-1" />
                  +12명 (이번 달)
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">탄소 절약</p>
                <p className="text-2xl font-bold text-gray-900">{stats.carbonReduced}kg</p>
                <p className="text-sm text-emerald-600 flex items-center mt-1">
                  <Leaf className="w-4 h-4 mr-1" />
                  CO₂ 절감 효과
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Donation Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">기부금 사용 내역</h3>
            <div className="h-64">
              <Doughnut 
                data={donationData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Monthly Sales */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">월별 거래 현황</h3>
            <div className="h-64">
              <Bar 
                data={monthlyData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Impact Trend */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">수혜자 증가 추이</h3>
            <div className="h-64">
              <Line 
                data={impactTrend}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">최근 블록체인 거래 내역</h3>
            <p className="text-sm text-gray-600 mt-1">
              모든 거래가 블록체인에 투명하게 기록되고 검증됩니다
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    거래 해시
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    유형
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    구매액
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    기부액
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    시간
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상태
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((tx) => (
                  <tr key={tx.hash} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <code className="text-sm text-gray-900 font-mono">
                          {tx.hash.slice(0, 16)}...
                        </code>
                        <button className="ml-2 text-blue-600 hover:text-blue-800">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        tx.type === 'purchase' 
                          ? 'bg-blue-100 text-blue-800'
                          : tx.type === 'donation'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {tx.type === 'purchase' ? '구매' : tx.type === 'donation' ? '기부' : 'NFT 발행'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tx.amount.toLocaleString()}원
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                      {tx.donationAmount.toLocaleString()}원
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(tx.timestamp).toLocaleDateString('ko-KR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">검증 완료</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blockchain Info */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">블록체인 투명성 보장</h4>
              <p className="text-blue-800 mb-4">
                모든 거래는 폴리곤(Polygon) 네트워크에 기록되어 위변조가 불가능하며, 
                누구나 언제든지 거래 내역과 기부금 사용 현황을 확인할 수 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-blue-900">네트워크</div>
                  <div className="text-blue-700">Polygon Mainnet</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-900">가스 절약</div>
                  <div className="text-blue-700">평균 $0.001/거래</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-900">확인 시간</div>
                  <div className="text-blue-700">평균 2초</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}