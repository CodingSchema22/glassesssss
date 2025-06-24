const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const formWrapper = document.getElementById('formWrapper');

  loginBtn.addEventListener('click', () => {
    formWrapper.style.transform = 'translateX(0%)';
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
  });

  registerBtn.addEventListener('click', () => {
    formWrapper.style.transform = 'translateX(-50%)';
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
  });