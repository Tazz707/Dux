// الدوال الرئيسية للتطبيق
function goToExchange() {
  // ضع هنا رابط منصة التداول الفعلي
  const exchangeUrl = "https://example-exchange.com/trade/DX";
  window.open(exchangeUrl, '_blank');
}

// تأثيرات تفاعلية للعملة
document.addEventListener('DOMContentLoaded', function() {
  const coin = document.querySelector('.coin');
  
  if (coin) {
    coin.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotateY(180deg)';
    });
    
    coin.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotateY(0deg)';
    });
  }
  
  // تحديث الإحصائيات بشكل ديناميكي
  updateStats();
});

// محاكاة تحديث الأسعار
function updateStats() {
  const priceElement = document.querySelector('.stat-value');
  if (priceElement) {
    // محاكاة تغير السعر
    setInterval(() => {
      const currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
      const change = (Math.random() - 0.5) * 0.1; // تغير عشوائي ±5%
      const newPrice = currentPrice * (1 + change);
      priceElement.textContent = `$${newPrice.toFixed(2)}`;
    }, 5000);
  }
}

// إضافة تأثيرات scroll
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.feature, .stat');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
