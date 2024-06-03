        // Seleciona o link e o tooltip
        const futureLink = document.getElementById('future-link');
        const tooltip = document.getElementById('tooltip');

        // Função para mostrar o tooltip
        futureLink.addEventListener('mouseover', function(event) {
            const rect = futureLink.getBoundingClientRect();
            tooltip.style.display = 'block';
            tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';
            tooltip.style.left = rect.left + (futureLink.offsetWidth / 2) - (tooltip.offsetWidth / 2) + 'px';
        });

        // Função para esconder o tooltip
        futureLink.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });