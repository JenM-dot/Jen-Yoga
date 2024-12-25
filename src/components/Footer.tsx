import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
                }}
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              <p className="text-2xl md:text-3xl font-serif text-sage-800">
                "In the stillness of your practice, find the peace that resides within."
              </p>
              <p className="text-sage-600 italic">
                Every session is a step on your journey to inner harmony
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}