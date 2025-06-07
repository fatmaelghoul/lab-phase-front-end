export const baseUrl = "http://localhost:5000/api"
export const UserUrl = "http://localhost:5000/api/customer"
export const handyManUrl = "http://localhost:5000/api/handyMan"
export const homeRepairServiceUrl= "http://localhost:5000/api/homeRepairService"

 export function getToken() {
  return localStorage.getItem("token");
}
export function getId() {
  return localStorage.getItem("id");
}