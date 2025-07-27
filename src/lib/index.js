
const base = import.meta.env.VITE_API_URL;

export const baseUrl = `${base}/api`;
export const UserUrl = `${base}/api/customer`;
export const handyManUrl = `${base}/api/handyMan`;
export const homeRepairServiceUrl = `${base}/api/homeRepairService`;

 export function getToken() {
  return localStorage.getItem("token");
}
export function getId() {
  return localStorage.getItem("id");
}