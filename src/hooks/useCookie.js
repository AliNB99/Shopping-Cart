const useCookie = (token) => {
  const cookie = document.cookie;

  if (!token) {
    if (cookie) {
      return cookie.split("=")[1];
    } else {
      return null;
    }
  }

  if (!cookie && token) {
    document.cookie = `token=${token};max-age=${24 * 60 * 60};path=/`;
  } else {
    console.log("second");
    return cookie.split("=")[1];
  }
};

export { useCookie };
