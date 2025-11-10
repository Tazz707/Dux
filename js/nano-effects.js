// إنشاء جسيمات النانو تكنولوجي
      const nanoContainer = document.getElementById('nanoParticles');
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('nano-particle');
        
        // أحجام وأماكن عشوائية
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
      
      // إنشاء شبكة اتصالات النانو
      const connectionsContainer = document.getElementById('nanoConnections');
      const nodes = [];
      
      // إنشاء العقد
      for (let i = 0; i < 25; i++) {
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
            
            if (distance < 30) { // اتصال العقد القريبة فقط
              const connection = document.createElement('div');
              connection.classList.add('nano-connection');
              
              const angle = Math.atan2(
                otherNode.top - node.top, 
                otherNode.left - node.left
              ) * 180 / Math.PI;
              
              connection.style.width = `${distance}%`;
              connection.style.left = `${node.left}%`;
              connection.style.top = `${node.top}%`;
              connection.style.transform = `rotate(${angle}deg)`;
              connection.style.opacity = 0.1 + (0.3 * (1 - distance/30));
              
              connectionsContainer.appendChild(connection);
            }
          }
        });
      });
    });
