import { a } from "framer-motion/client";
import { supabase } from "../config/supabase";
import type { LoginData } from "../types/authType";

const UserLogin = async (loginData: LoginData) => {
  return await supabase.auth.signInWithPassword({
    email: loginData.email,
    password: loginData.password,
  });
};
const UserRegister = () => {};

const Logout = async () => {
  await supabase.auth.signOut();
};

export { UserLogin, UserRegister, Logout };
