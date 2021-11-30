export default function calculateQuantity(amount, deadline) {
  // Amount
  // 0-1000 = 25%
  // 1001-5000 = 20%
  // 5001-10000 = 15%
  // +10000 = 10%

  let totalAmount;

  if (amount <= 1000) {
    totalAmount = amount*.25;
  }else if (amount > 1000 && amount <= 5000) {
    totalAmount = amount*.20;
  }else if (amount > 5000 && amount <= 10000) {
    totalAmount = amount*.15;
  }else {
    totalAmount = amount*.10;
  }

  // Deadline
  //  3 Months =  5%
  //  6 Months = 10%
  // 12 Months = 15%
  // 24 Months = 20%

  let totalDeadline = 0;
  switch (deadline) {
    case 3:
      totalDeadline = amount*.05;
      break;
    case 6:
      totalDeadline = amount*.10;
      break;
    case 12:
      totalDeadline = amount*.15;
      break;
    case 24:
      totalDeadline = amount*.20;
      break;

    default:
      break;
  }

  return totalAmount + totalDeadline + amount;

}