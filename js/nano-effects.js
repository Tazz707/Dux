// تأثيرات النانو تكنولوجي المتقدمة
class NanoEffects {
  constructor() {
    this.init();
  }
  
  init() {
    this.createParticles();
    this.createConnections();
    this.animateCircuit();
  }
  
  createParticles() {
    const nanoContainer = document.getElementById('nanoParticles');
    if (!nanoContainer) return;
    
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.classList.add('nano-particle');
      
      const size = Math.random() * 12 + 3;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 20;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      particle.style.animationDelay = `${delay}s`;
      
      nanoContainer.appendChild(particle);
    }
  }
  
  createConnections() {
    const connectionsContainer = document.getElementById('nanoConnections');
    if (!connectionsContainer) return;
    
    const nodes = [];
    const nodeCount = 25;
    
    // إنشاء العقد
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.classList.add('nano-node');
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      node.style.left = `${left}%`;
      node.style.top = `${top}%`;
      
      connectionsContainer.appendChild(node);
      nodes.push({left, top, element: node});
    }
    
    // إنشاء اتصالات بين العقد القريبة
    nodes.forEach((node, index) => {
      nodes.forEach((otherNode, otherIndex) => {
        if (index !== otherIndex) {
          const distance = Math.sqrt(
            Math.pow(node.left - otherNode.left, 2) + 
            Math.pow(node.top - otherNode.top, 2)
          );
          
          if (distance < 30) {
            this.createConnection(node, otherNode, distance, connectionsContainer);
          }
        }
      });
    });
  }
  
  createConnection(node1, node2, distance, container) {
    const connection = document.createElement('div');
    connection.classList.add('nano-connection');
    
    const angle = Math.atan2(
      node2.top - node1.top, 
      node2.left - node1.left
    ) * 180 / Math.PI;
    
    connection.style.width = `${distance}%`;
    connection.style.left = `${node1.left}%`;
    connection.style.top = `${node1.top}%`;
    connection.style.transform = `rotate(${angle}deg)`;
    connection.style.opacity = 0.1 + (0.3 * (1 - distance/30));
    
    container.appendChild(connection);
  }
  
  animateCircuit() {
    const paths = document.querySelectorAll('.circuit-path');
    paths.forEach((path, index) => {
      path.style.animationDelay = `${index * 2}s`;
    });
  }
}

// تهيئة التأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  new NanoEffects();
});
