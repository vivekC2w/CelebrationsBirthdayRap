export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/; // 10-digit phone number
  return phoneRegex.test(phone);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  return emailRegex.test(email);
};

export const getRandom = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};
