import axios from 'axios';

export const signup = user => axios.post("/api/auth/signup", user);
export const login = user => axios.post("/api/auth/login", user);
export const logout = () => axios.get("/api/auth/logout");