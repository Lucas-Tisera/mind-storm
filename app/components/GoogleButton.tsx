import React from "react";
import { supabase } from "../login/supabaseClient";
import { Provider } from "@supabase/supabase-js";

const GoogleButton = () => {
  const handleOAuthLogin = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    });

    console.log("data PROVIDER");
    console.log(data);

    if (error) {
      console.error(error.message);
    } else {
      console.log("Redirecting to provider...");
    }
  };

  return (
    <button
      onClick={() => handleOAuthLogin("google")}
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#4285F4",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        alt="Google Icon"
        style={{ width: "20px", height: "20px", marginRight: "10px" }}
      />
      Sign in with Google
    </button>
  );
};

export { GoogleButton };
