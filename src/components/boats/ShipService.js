import axios from "axios"

export default class ShipService{
     getShips(){
         return axios.get("http://localhost:3000/data")
     }
}