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

export const generateTemplate = (data) => {
  const { name, gender, genre, q1, q2, q3, q4, q5, q6 } = data;
  return `Wish a happy birthday to ${name}. 
  ${
    gender === "male" ? "His" : gender === "female" ? "Her" : "Their"
  } pet name is ${q1}. 
  ${q2} makes ${
    gender === "male" ? "him" : gender === "female" ? "her" : "them"
  } angry. 
  ${q3} makes ${
    gender === "male" ? "him" : gender === "female" ? "her" : "them"
  } funniest. 
  ${q4} makes ${
    gender === "male" ? "him" : gender === "female" ? "her" : "them"
  } special. 
  ${q5} movie ${
    gender === "male" ? "he" : gender === "female" ? "she" : "they"
  } ${
    gender === "male" ? "likes" : gender === "female" ? "likes" : "like"
  } the most. 
  ${q6} sports ${
    gender === "male" ? "he" : gender === "female" ? "she" : "they"
  } ${
    gender === "male" ? "likes" : gender === "female" ? "likes" : "like"
  } the most. 
  
  Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
  
  Using the above information about ${name}, please write 16 lines of ${genre} lyrics that I can dedicate to ${
    gender === "male" ? "him" : gender === "female" ? "her" : "them"
  } for ${
    gender === "male" ? "his" : gender === "female" ? "her" : "their"
  } birthday.  Each line can have maximum of 8 words or 40 characters.
  The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided. 
  `;
};
