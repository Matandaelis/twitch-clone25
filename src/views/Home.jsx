import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHome } from "./Home.styled";

//React icons
import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoTrophyOutline,
  IoMicOutline,
} from "react-icons/io5";

// Mobile Components
import BigChannels from "../components/Channels/ChannelsMobile/BigChannels";
import SmallCategories from "../components/Categories/CategoriesMobile/SmallCategories";

// Desktop Components
import Slide from "../components/Share/Slide";
import ChannelsDesktop from "../components/Channels/ChannelsDesktop/ChannelsDesktop";
import CategoriesDesktop from "../components/Categories/CategoriesDesktop/CategoriesDekstop";
import Tags from "../components/Share/Tags";
import ShowMore from "../components/Share/ShowMore";

// Live Commerce
import LiveStreamView from "../components/Streaming/LiveStreamView";

const Home = () => {
  const navigate = useNavigate();
  const [showLiveDemo, setShowLiveDemo] = useState(false);

  // Mock data for the live commerce demo
  const mockStreamData = {
    streamerName: "ShopLive Host",
    streamerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    title: "Flash Sale - Electronics Day!",
  };

  const mockProducts = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      stock: 5,
      isTrending: true,
    },
    {
      id: 2,
      title: "Smart Watch Pro",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      stock: 8,
    },
    {
      id: 3,
      title: "Portable Speaker",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop",
      stock: 15,
    },
  ];

  const mockChatMessages = [
    { username: "SarahK", message: "Is the headphone noise cancelling?" },
    { username: "MikeT", message: "Just ordered! 🔥" },
    { username: "JennyL", message: "What's the battery life?" },
    { username: "TechGuy42", message: "Great deal!" },
    { username: "Shopper01", message: "Is shipping free?" },
  ];

  const handleBuyNow = (product, phoneNumber) => {
    console.log("Purchase:", { product, phoneNumber });
    alert(`Order placed for ${product.title}! Confirmation sent to ${phoneNumber || 'your phone'}`);
  };

  if (showLiveDemo) {
    return (
      <div className="fixed inset-0 z-50">
        <LiveStreamView 
          streamData={mockStreamData}
          products={mockProducts}
          chatMessages={mockChatMessages}
          viewerCount={2437}
          onBuyNow={handleBuyNow}
          onClose={() => setShowLiveDemo(false)}
        />
      </div>
    );
  }

  return (
    <>
      <StyledHome>
        <div className="home-mobile">
          <div className="home-box">
            <h1>Discover</h1>
            <div className="categories">
              <div className="category-item">
                Music <IoMusicalNotesOutline className="category-icon" />
              </div>
              <div className="category-item">
                Games <IoGameControllerOutline className="category-icon" />
              </div>
              <div className="category-item">
                Esports <IoTrophyOutline className="category-icon" />
              </div>
              <div className="category-item">
                IRL <IoMicOutline className="category-icon" />
              </div>
            </div>

            {/* Live Commerce Demo Button - Mobile */}
            <div className="mt-4 p-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg">
              <button 
                onClick={() => setShowLiveDemo(true)}
                className="w-full py-3 bg-white text-accent-primary font-bold rounded-md flex items-center justify-center gap-2"
              >
                <span className="live-badge">LIVE</span>
                Try Live Shopping Demo
              </button>
            </div>

            <h3 className="home-title">Live channels we think you will like</h3>
            <div className="live-channels">
              <BigChannels channel="js-youLike" />
            </div>

            <h3 className="home-title">
              <span>Categories</span> we think you will like
            </h3>
            <div className="game-categories">
              <SmallCategories />
            </div>

            <h3 className="home-title">Recommended communities</h3>
            <div className="live-channels">
              <BigChannels channel="js-smaller" />
            </div>

            <h3 className="home-title">
              Recommended <span>Dota 2</span> channels
            </h3>
            <div className="live-channels">
              <BigChannels channel="js-dota2" />
            </div>

            <h3 className="home-title">
              Recommended <span>Chees</span> channels
            </h3>
            <div className="live-channels">
              <BigChannels channel="js-chees" />
            </div>

            <h3 className="home-title">
              Recommended <span>Crypto</span> channels
            </h3>
            <div className="live-channels">
              <BigChannels channel="js-crypto" />
            </div>
          </div>
        </div>
        <div className="home-desktop">
          <div className="home-box">
            {/* Live Commerce Demo Banner - Desktop */}
            <div className="mb-6 p-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">🎥 Live Shopping Experience</h2>
                  <p className="text-white/80 text-sm">Try our new TalkShopLive-style live commerce UI</p>
                </div>
                <button 
                  onClick={() => setShowLiveDemo(true)}
                  className="px-6 py-2 bg-white text-accent-primary font-bold rounded-md hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <span className="live-badge">LIVE</span>
                  Launch Demo
                </button>
              </div>
            </div>
            
            <Slide />
            <ChannelsDesktop channelTitle="Live channels we think you'll like" />
            <ShowMore title="Show more" />
            <CategoriesDesktop
              title="we think you'll like"
              boldTitle="Categories"
            />
            <ShowMore />
            <Tags />
            <ChannelsDesktop channelTitle="Recommended smaller communities" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="All aboard the Hype Train!" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="Women's History Month" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="Recommended smaller communities" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="All aboard the Hype Train!" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="Women's History Month" />
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
