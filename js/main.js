    function goToExchange() {
      // ضع هنا رابط منصة التداول
      window.location.href = "https://example-exchange.com/trade/DX";
    }

    // تأثيرات تفاعلية إضافية
    document.addEventListener('DOMContentLoaded', function() {
      const coin = document.querySelector('.coin');
      
      coin.addEventListener('mouseenter', function() {
        this.style.animationDuration = '2s';
      });
      
      coin.addEventListener('mouseleave', function() {
        this.style.animationDuration = '8s';
      });  }
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
