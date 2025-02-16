// Wait for the document to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeStats);
} else {
    initializeStats();
}

function initializeStats() {
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const targetValue = parseInt(stat.getAttribute('data-value'));
            let currentValue = 0;
            const duration = 2000; // 2 seconds
            const increment = targetValue / (duration / 16); // 60 FPS

            const updateValue = () => {
                currentValue = Math.min(currentValue + increment, targetValue);
                stat.textContent = Math.round(currentValue);
                
                if (currentValue < targetValue) {
                    requestAnimationFrame(updateValue);
                }
            };

            // Create intersection observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(updateValue);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(stat);
        });
    };

    animateStats();
} 