import React, { useReducer } from "react";

const LogInReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "logIn": {
      return {
        ...state,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        loggedIn: true,
        password: "",
      };
    }
    case "error": {
      return {
        ...state,
        error: "Invalid username or password",
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "logIn",
    });

    try {
      if (state.username === "admin" && state.password === "admin") {
        dispatch({
          type: "success",
        });
      } else {
        throw Error;
      }
    } catch (error) {
      dispatch({
        type: "error",
      });
    }
  };
  const [state, dispatch] = useReducer("LogInReducer", {
    username: "",
    password: "",
    LoggedIn: "",
    error: "",
  });

  return (
    <div>
      <h1>Login form using useREDUCER</h1>
      <div>
        {state.loggedIn ? (
          <>
            <div>
              <h2>Welcome {state.username}</h2>
              <button
                onClick={() =>
                  dispatch({
                    type: "logOut",
                  })
                }
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={state.username}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "username",
                    payload: e.currentTarget.value,
                  })
                }
                autoComplete="username"
              />
            </div>
            <br />
            <div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={state.password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "password",
                    payload: e.currentTarget.value,
                  })
                }
              />
            </div>
            <br />
            <div>
              <button type="submit">Login</button>
            </div>
            <p>{state.error}</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
