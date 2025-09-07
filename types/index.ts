export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  seller: {
    name: string;
    type: 'individual' | 'organization';
    story: string;
    location: string;
  };
  images: string[];
  description: string;
  tags: string[];
  impactMetrics: {
    beneficiariesCount: number;
    donationPercentage: number;
    carbonFootprint: number;
  };
  blockchain: {
    transactionHash?: string;
    verified: boolean;
  };
  stock: number;
  rating: number;
  reviewCount: number;
}

export interface Purchase {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalAmount: number;
  donationAmount: number;
  purchaseDate: string;
  nftCertificate?: {
    tokenId: string;
    imageUrl: string;
  };
}

export interface BlockchainTransaction {
  hash: string;
  timestamp: string;
  type: 'purchase' | 'donation' | 'nft_mint';
  amount: number;
  donationAmount: number;
  productId: string;
  buyerAddress: string;
  verified: boolean;
}

export interface DashboardStats {
  totalSales: number;
  totalDonations: number;
  activeProducts: number;
  beneficiaries: number;
  carbonReduced: number;
}