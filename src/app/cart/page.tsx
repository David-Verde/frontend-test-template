'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { cartItems, removeFromCart, cartCount } = useCart();

  const orderTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <section className="max-w-6xl mx-auto px-4">
      <Link href="/" className="text-sm text-text-secondary hover:underline mb-4 inline-block">
        ← Back to Catalog
      </Link>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="text-text-secondary">{cartCount} items</p>
      </div>
      
      {cartCount === 0 ? (
        <div className="text-center py-12 border-t border-border-primary">
          <p className="text-xl">Your cart is empty.</p>
          <p className="text-text-secondary mt-2">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link href="/">
            <button className="mt-6 bg-primary text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ul className="space-y-md">
              {cartItems.map((item) => (
                <li key={item.id} className="relative border-b border-border-primary pb-md last:border-b-0">
                  <div className="flex flex-col">
                    <div className="relative w-full aspect-video mb-sm">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="rounded object-cover" 
                      />
                    </div>
                    <div className="pr-16">
                      <p className="text-text-secondary text-sm uppercase">{item.genre}</p>
                      <h3 className="font-bold text-xl my-1">{item.name}</h3>
                      <p className="text-text-secondary text-sm truncate">{item.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-0 right-0 p-2 text-text-secondary hover:text-red-500 transition-colors text-2xl leading-none"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ×
                  </button>

                  <p className="absolute bottom-md right-0 font-semibold text-lg">
                    {formatPrice(item.price)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-surface-primary p-6 rounded-lg shadow-sm sticky top-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <p className="text-text-secondary text-sm mb-4">{cartCount} items</p>
              
              <div className="space-y-3 border-t border-border-primary pt-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-text-secondary">{item.name}</span>
                    <span>{formatPrice(item.price)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between font-bold text-lg border-t border-border-primary mt-4 pt-4">
                <span>Order Total</span>
                <span>{formatPrice(orderTotal)}</span>
              </div>

              <button 
                className="w-full mt-6 bg-button-secondary text-white font-bold py-3 rounded hover:opacity-90 transition-opacity"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}