import { supabase } from './supabase.js';

// Registro de usuario
async function registerUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error('Error en el registro:', error.message);
  } else {
    console.log('Usuario registrado:', data.user);
    // Redirigir o mostrar mensaje de éxito
  }
}

// Inicio de sesión
async function loginUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('Error al iniciar sesión:', error.message);
  } else {
    console.log('Usuario autenticado:', data.user);
    // Redirigir o mostrar mensaje de éxito
  }
}

// Manejar eventos de los formularios
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      registerUser(email, password);
    });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      loginUser(email, password);
    });
  }
});
