import React from 'react';
import HeroVideoDialog from "../components/ui/hero-video-dialog";

const Features = () => {
  return (
    <div className="relative min-h-screen bg-[#040405]  overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative px-4 py-20 min-h-screen flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent animate-fade-in">
            Want To Know More?
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Discover how our platform can transform your business with powerful features and innovative solutions.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full max-w-4xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          <div className="relative bg-black rounded-xl overflow-hidden">
            <HeroVideoDialog
              className="w-full aspect-video"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>

        {/* Additional Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4 w-full max-w-4xl">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
            <p className="text-gray-400">Seamlessly integrate with your existing workflows and tools.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
            <p className="text-gray-400">Get instant insights with our powerful analytics dashboard.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-400">Our dedicated team is always here to help you succeed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;