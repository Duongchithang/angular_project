export function formatMoneyVND(amount: number): string {
    if (isNaN(amount)) {
      return 'Invalid amount';
    }
    const formattedAmount = amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    return formattedAmount;
  }