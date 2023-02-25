const baseURL_User = process.env.NODE_ENV !== "production" ? "http://localhost:8080/api/v1/users" : "https://omiga-property-dashboard.onrender.com/api/v1/users";
const baseURL = process.env.NODE_ENV !== "production" ? "http://localhost:8080/api/v1" : "https://omiga-property-dashboard.onrender.com/api/v1";

export { baseURL_User, baseURL };