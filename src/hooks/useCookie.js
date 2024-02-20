const useCookie = (token, type) => {
  const cookie = document.cookie;
  if (!token) {
    return cookie;
  }

  if (!cookie) {
    document.cookie = `token=${token};max-age=${24 * 60 * 60};path=/`;
  } else {
    return cookie.split("=")[1];
  }
};

export { useCookie };
