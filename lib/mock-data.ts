import { Product, Purchase, BlockchainTransaction, DashboardStats } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '할머니의 손뜨개 목도리',
    price: 45000,
    originalPrice: 60000,
    category: '수공예품',
    seller: {
      name: '강남실버공방',
      type: 'organization',
      story: '70세 이상 어르신들이 직접 뜨개질로 만든 따뜻한 목도리입니다. 매 작품마다 할머니의 정성과 사랑이 담겨있습니다.',
      location: '강남구 역삼동'
    },
    images: ['/images/placeholder-product.svg'],
    description: '100% 천연 울실로 제작된 수제 목도리입니다. 판매 수익의 30%는 독거어르신 지원 기금으로 사용됩니다.',
    tags: ['수제', '친환경', '시니어제작'],
    impactMetrics: {
      beneficiariesCount: 15,
      donationPercentage: 30,
      carbonFootprint: 2.1
    },
    blockchain: {
      transactionHash: '0x1a2b3c4d5e6f...',
      verified: true
    },
    stock: 8,
    rating: 4.8,
    reviewCount: 24
  },
  {
    id: '2',
    name: '장애인 작가 수채화 엽서 세트',
    price: 25000,
    category: '예술품',
    seller: {
      name: '김민수',
      type: 'individual',
      story: '뇌성마비 장애를 딛고 입으로 그림을 그리는 작가입니다. 강남의 사계절을 담은 아름다운 작품들을 만들어갑니다.',
      location: '강남구 청담동'
    },
    images: ['/images/placeholder-product.svg'],
    description: '강남구의 명소들을 수채화로 담은 엽서 10매 세트입니다. 판매 수익의 25%는 장애인 예술가 지원 기금으로 기부됩니다.',
    tags: ['예술', '장애인작가', '한정판'],
    impactMetrics: {
      beneficiariesCount: 8,
      donationPercentage: 25,
      carbonFootprint: 0.5
    },
    blockchain: {
      transactionHash: '0x2b3c4d5e6f7a...',
      verified: true
    },
    stock: 12,
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: '3',
    name: '탈북민 할머니 북한식 김치',
    price: 35000,
    category: '식품',
    seller: {
      name: '통일한마음공방',
      type: 'organization', 
      story: '탈북민 할머니들이 고향의 맛을 그리워하며 만드는 전통 김치입니다. 정착 지원과 문화 보존을 동시에 실현합니다.',
      location: '강남구 삼성동'
    },
    images: ['/images/placeholder-product.svg'],
    description: '북한 전통 방식으로 만든 특별한 김치입니다. 판매 수익의 40%는 탈북민 정착 지원금으로 사용됩니다.',
    tags: ['전통음식', '탈북민지원', '한정수량'],
    impactMetrics: {
      beneficiariesCount: 6,
      donationPercentage: 40,
      carbonFootprint: 1.8
    },
    blockchain: {
      transactionHash: '0x3c4d5e6f7a8b...',
      verified: true
    },
    stock: 5,
    rating: 4.7,
    reviewCount: 18
  }
];

export const mockPurchases: Purchase[] = [
  {
    id: 'p1',
    productId: '1',
    productName: '할머니의 손뜨개 목도리',
    quantity: 1,
    totalAmount: 45000,
    donationAmount: 13500,
    purchaseDate: '2024-12-20',
    nftCertificate: {
      tokenId: 'GN-CERT-001',
      imageUrl: '/images/nft-certificate.svg'
    }
  },
  {
    id: 'p2', 
    productId: '2',
    productName: '장애인 작가 수채화 엽서 세트',
    quantity: 2,
    totalAmount: 50000,
    donationAmount: 12500,
    purchaseDate: '2024-12-18'
  }
];

export const mockTransactions: BlockchainTransaction[] = [
  {
    hash: '0x1a2b3c4d5e6f789abc123def456ghi789jkl012mno345pqr678stu901vwx234',
    timestamp: '2024-12-20T14:30:00Z',
    type: 'purchase',
    amount: 45000,
    donationAmount: 13500,
    productId: '1',
    buyerAddress: '0xAbC123...def456',
    verified: true
  },
  {
    hash: '0x2b3c4d5e6f7a890bcd234efg567hij890klm123nop456qrs789tuv012wxy345',
    timestamp: '2024-12-18T09:15:00Z',
    type: 'purchase',
    amount: 50000,
    donationAmount: 12500,
    productId: '2',
    buyerAddress: '0xDeF456...ghi789',
    verified: true
  },
  {
    hash: '0x3c4d5e6f7a8b901cde345fgh678ijk901lmn234opq567rst890uvw123xyz456',
    timestamp: '2024-12-17T16:45:00Z',
    type: 'nft_mint',
    amount: 0,
    donationAmount: 0,
    productId: '1',
    buyerAddress: '0xAbC123...def456',
    verified: true
  }
];

export const mockStats: DashboardStats = {
  totalSales: 2500000,
  totalDonations: 750000,
  activeProducts: 47,
  beneficiaries: 156,
  carbonReduced: 124.5
};