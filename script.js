// Aguarda o carregamento do DOM para rodar o gráfico
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoViagem').getContext('2d');

    // Dados extraídos diretamente da coluna "Valor final" da imagem
    const categorias = ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'];
    const valoresFinais = [1300.00, 1000.00, 500.00, 150.00];

    // Criação do Gráfico de Pizza utilizando Chart.js
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categorias,
            datasets: [{
                data: valoresFinais,
                backgroundColor: [
                    '#4b49ac', // Roxo escuro para Passagem
                    '#7978e9', // Roxo médio para Hospedagem
                    '#a3a1fb', // Roxo claro para Alimentação
                    '#cecdff'  // Lilás suave para Transporte
                ],
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        // Formata o valor do tooltip para a moeda Real (R\$)
                        label: function(context) {
                            let label = context.label || '';
                            let value = context.raw || 0;
                            return `${label}: R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                        }
                    }
                }
            }
        }
    });
});
