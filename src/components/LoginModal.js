import React from "react";
import ReactModalLogin from "react-modal-login";

// Configs
import { facebookConfig, googleConfig } from "./configs/social-config";

const [state, setState] = useState({
  showModal: false,
  loading: false,
  error: null,
});

const openModal = () => {
  setState({
    ...state,
    showModal: true,
  });
};

const closeModal = () => {
  setState({
    ...state,
    showModal: false,
  });
};

const startLoading = () => {};

const finishLoading = () => {};

const onTabsChange = () => {};

const onLoginSuccess = () => {};

const onLoginFail = () => {};

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   try {
//     const user = { email: email, password: pasaword };
//     const response = await axios.post("/signin", user);
//     alert("Successfully");
//     setLoading(false);
//   } catch (error) {
//     alert("Failed");
//     setLoading(false);
//   }
// };

function LoginModal() {
  return (
    <div>
      <button onClick={openModal}>Login</button>
      <ReactModalLogin
        visible={state.showModal}
        onCloseModal={closeModal}
        loading={state.loading}
        error={state.error}
        form={{
          loginBtn: {
            tittle: "SignIn",
          },
          registerBtn: {
            tittle: "SignUp",
          },
          registerInputs: [
            {
              label: "Email",
            },
          ],
        }}
        tabs={{
          onChange: onTabsChange,
        }}
        loginError={{
          label: "Couldn't sign in, please try again.",
        }}
        registerError={{
          label: "Couldn't sign up, please try again.",
        }}
        startLoading={startLoading}
        finishLoading={finishLoading}
        providers={{
          facebook: {
            config: facebookConfig,
            onLoginSuccess: onLoginSuccess,
            onLoginFail: onLoginFail,
            label: "Continue with Facebook",
          },
          google: {
            config: googleConfig,
            onLoginSuccess: onLoginSuccess,
            onLoginFail: onLoginFail,
            label: "Continue with Google",
          },
        }}
      />
    </div>
  );
}

export default LoginModal;
