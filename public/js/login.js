/* eslint-disable */

export const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 5000);
};

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      console.log("Logged In");
      window.setTimeout(() => {
        location.assign("/mentors");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
    console.log(err);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    showAlert("success", "Logging you out");
    if ((res.data.status = "success")) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};

const loginForm = document.querySelector(".form");
const signupForm = document.querySelector(".signupform");
const logOutBtn = document.querySelector(".logout");
console.log(logOutBtn);
console.log(signupForm);
// DELEGATION

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (signupForm)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    console.log("Hello");
    signup(firstName, lastName, email, password, passwordConfirm);
  });

if (logOutBtn) logOutBtn.addEventListener("click", logout);

export const signup = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Signed up successfully!");
      console.log("Signed up");
      window.setTimeout(() => {
        location.assign("/mentors");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
    console.log(err);
  }
};
