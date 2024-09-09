// Função de submissão do pagamento
function submitPayment(event) {
    event.preventDefault();

    // Exibir status de processamento
    const paymentStatus = document.getElementById('payment-status');
    paymentStatus.classList.remove('hidden');
    paymentStatus.textContent = "Processando pagamento...";

    // Simular atraso no processamento do pagamento
    setTimeout(() => {
        paymentStatus.textContent = "Pagamento realizado com sucesso!";
    }, 2000);

    // Limpar o formulário após o pagamento
    document.getElementById('payment-form').reset();
}
