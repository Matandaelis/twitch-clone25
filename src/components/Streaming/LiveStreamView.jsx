import { useState } from "react";
import { BsEye, BsCart, BsXLg, BsCheck2 } from "react-icons/bs";

const LiveStreamView = ({ 
  streamData, 
  products = [], 
  chatMessages = [], 
  viewerCount = 0,
  onBuyNow,
  onClose 
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  const handleCheckout = () => {
    if (onBuyNow) {
      onBuyNow(selectedProduct, phoneNumber);
    }
    setShowCheckout(false);
    setPhoneNumber("");
    setSelectedProduct(null);
  };

  const formatViewerCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="video-container">
      {/* Video Placeholder */}
      <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
        <div className="text-center text-text-secondary">
          <div className="w-20 h-20 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p>Live Stream Video</p>
        </div>
      </div>

      {/* TOP BAR */}
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <span className="live-badge">LIVE</span>
        <span className="bg-bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <BsEye className="text-xs" />
          {formatViewerCount(viewerCount)} watching
        </span>
      </div>

      {/* STREAMER INFO - Top Right */}
      <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
        <div className="flex items-center gap-2 bg-bg-secondary/80 backdrop-blur-sm px-3 py-2 rounded-full">
          <img 
            src={streamData?.streamerAvatar || "/images/avatar-placeholder.png"} 
            alt={streamData?.streamerName || "Streamer"}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{streamData?.streamerName || "Streamer"}</span>
        </div>
        <button 
          onClick={onClose}
          className="bg-bg-secondary/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-bg-secondary transition-colors"
        >
          <BsXLg />
        </button>
      </div>

      {/* CHAT SECTION - Bottom Left */}
      <div className="absolute bottom-24 left-3 w-[65%] max-h-[40%] overflow-hidden z-10">
        <div className="flex flex-col gap-1 overflow-y-auto chat-scrollbar h-full max-h-[200px]">
          {chatMessages.length === 0 ? (
            <div className="text-text-secondary text-sm">Welcome to the chat!</div>
          ) : (
            chatMessages.map((msg, index) => (
              <div key={index} className="chat-message animate-fade-in">
                <span className="font-semibold text-white">{msg.username}:</span>
                <span className="text-text-secondary"> {msg.message}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* PRODUCT STACK - Bottom Right */}
      <div className="absolute bottom-24 right-3 w-[30%] space-y-2 z-10">
        {products.map((product, index) => (
          <div 
            key={product.id || index}
            className={`product-card cursor-pointer ${product.isTrending ? 'trending-product' : ''}`}
            onClick={() => handleProductClick(product)}
          >
            <img 
              src={product.image || "/images/products/placeholder.jpg"} 
              alt={product.title}
              className="w-16 h-16 object-cover rounded-md flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold truncate">{product.title}</h3>
              <p className="text-accent-primary font-bold">
                ${product.price?.toFixed(2) || "0.00"}
              </p>
              {product.stock !== undefined && product.stock <= 10 && (
                <div className="stock-urgency-bar" style={{ width: `${Math.min(100, (product.stock / 10) * 100)}%` }}></div>
              )}
            </div>
            <button className="bg-accent-primary px-3 py-1 rounded-md text-sm whitespace-nowrap self-center">
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* CTA BAR - Bottom */}
      <div className="absolute bottom-0 left-0 w-full p-3 bg-bg-primary/90 backdrop-blur z-20">
        <button 
          className="btn-buy flex items-center justify-center gap-2"
          onClick={() => products[0] && handleProductClick(products[0])}
        >
          <BsCart />
          Buy Now
        </button>
      </div>

      {/* CHECKOUT MODAL - Bottom Sheet */}
      {showCheckout && selectedProduct && (
        <div className="fixed bottom-0 left-0 w-full bg-bg-primary rounded-t-lg p-5 shadow-soft z-30 animate-slide-up">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Checkout</h2>
            <button onClick={() => setShowCheckout(false)} className="text-text-secondary">
              <BsXLg />
            </button>
          </div>
          
          {/* Product Summary */}
          <div className="flex gap-3 mb-4 p-3 bg-bg-secondary rounded-md">
            <img 
              src={selectedProduct.image || "/images/products/placeholder.jpg"} 
              alt={selectedProduct.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{selectedProduct.title}</h3>
              <p className="text-accent-primary font-bold">${selectedProduct.price?.toFixed(2) || "0.00"}</p>
            </div>
          </div>

          <input
            type="tel"
            className="input-field"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          
          <button 
            className="w-full bg-accent-primary py-3 rounded-md font-semibold shadow-glow hover:bg-accent-secondary transition-colors flex items-center justify-center gap-2"
            onClick={handleCheckout}
          >
            <BsCheck2 />
            Pay Now
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fab z-10">
        <BsCart />
      </button>
    </div>
  );
};

export default LiveStreamView;
