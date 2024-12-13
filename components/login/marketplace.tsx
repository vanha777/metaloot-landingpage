'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Auth } from '../../app/auth'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import { FaBitcoin, FaEthereum, FaWallet, FaShoppingCart, FaTicketAlt, FaStore, FaCoins, FaTicketAlt as FaTicket } from 'react-icons/fa'

interface NFT {
    id: string
    name: string
    image: string
    description: string
    price: number
    currency: string
}

interface CryptoAsset {
    symbol: string
    name: string
    balance: number
    price: number
    icon: JSX.Element
}

interface Voucher {
    id: string
    title: string
    discount: string
    validUntil: string
    image: string
    price: number
}

const nfts: NFT[] = [
    {
        id: '1',
        name: 'Cyber Punk #1337',
        image: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/Image%208.jpeg',
        description: 'Rare cyberpunk character NFT',
        price: 0.5,
        currency: 'ETH'
    },
    // Add more NFTs...
]

const cryptoAssets: CryptoAsset[] = [
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        balance: 0.25,
        price: 45000,
        icon: <FaBitcoin className="text-[#F7931A]" size={24} />
    },
    {
        symbol: 'ETH',
        name: 'Ethereum',
        balance: 2.5,
        price: 3000,
        icon: <FaEthereum className="text-[#627EEA]" size={24} />
    }
]

const vouchers: Voucher[] = [
    {
        id: '1',
        title: '50% Off Gaming Accessories',
        discount: '50%',
        validUntil: '2024-12-31',
        image: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/Image%208.jpeg',
        price: 100
    },
    // Add more vouchers...
]

const tabIcons = {
    nfts: <FaStore size={64} />,
    crypto: <FaCoins size={64} />,
    vouchers: <FaTicket size={64} />
}

export default function Marketplace() {
    const [walletAddress, setWalletAddress] = useState<string>('')
    const [selectedTab, setSelectedTab] = useState<'nfts' | 'crypto' | 'vouchers'>('nfts')

    useEffect(() => {
        const getWalletDetails = async () => {
            const supabase = await Auth
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setWalletAddress(user.email || '')
            }
        }
        getWalletDetails()
    }, [])

    return (
        <>
            {/* Tab Navigation */}
            <div className="flex gap-24 mb-26 p-24">
                {(['nfts', 'crypto', 'vouchers'] as const).map((tab) => (
                    <motion.button
                        key={tab}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-24 py-16 rounded-[3rem] backdrop-blur-sm relative
                ${selectedTab === tab
                                ? 'border-4 border-[#0CC0DF] text-[#0CC0DF] shadow-lg shadow-[#0CC0DF]/30'
                                : 'border-2 border-white/30 text-white'} 
                before:content-[""] before:absolute before:inset-0 before:rounded-[3rem] 
                before:bg-gradient-to-r before:from-gray-900 before:to-gray-800 before:z-[-1]
                hover:border-[#0CC0DF]/60 transition-colors duration-300`}
                    >
                        {tabIcons[tab]}
                    </motion.button>
                ))}
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedTab === 'nfts' && nfts.map((nft) => (
                    <motion.div
                        key={nft.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-b from-[#0CC0DF]/10 to-transparent backdrop-blur-sm 
                         rounded-xl p-4 border border-[#0CC0DF]/20"
                    >
                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                            <Image src={nft.image} alt={nft.name} fill className="object-cover" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
                        <p className="text-gray-300 mb-4">{nft.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-[#0CC0DF]">{nft.price} {nft.currency}</span>
                            <button className="bg-[#0CC0DF] px-4 py-2 rounded-lg">Buy Now</button>
                        </div>
                    </motion.div>
                ))}

                {selectedTab === 'crypto' && cryptoAssets.map((asset) => (
                    <motion.div
                        key={asset.symbol}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-b from-[#0CC0DF]/10 to-transparent backdrop-blur-sm 
                         rounded-xl p-6 border border-[#0CC0DF]/20"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            {asset.icon}
                            <div>
                                <h3 className="text-xl font-bold">{asset.name}</h3>
                                <p className="text-gray-300">{asset.symbol}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-300">Balance</p>
                                <p className="text-xl font-bold">{asset.balance} {asset.symbol}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-300">Value</p>
                                <p className="text-xl font-bold">${(asset.balance * asset.price).toLocaleString()}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {selectedTab === 'vouchers' && vouchers.map((voucher) => (
                    <motion.div
                        key={voucher.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-b from-[#0CC0DF]/10 to-transparent backdrop-blur-sm 
                         rounded-xl p-4 border border-[#0CC0DF]/20"
                    >
                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                            <Image src={voucher.image} alt={voucher.title} fill className="object-cover" />
                            <div className="absolute top-2 right-2 bg-[#0CC0DF] px-3 py-1 rounded-full">
                                {voucher.discount} OFF
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{voucher.title}</h3>
                        <p className="text-gray-300 mb-4">Valid until: {voucher.validUntil}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-[#0CC0DF]">${voucher.price}</span>
                            <button className="bg-[#0CC0DF] px-4 py-2 rounded-lg flex items-center gap-2">
                                <FaTicketAlt />
                                Claim
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    )
}