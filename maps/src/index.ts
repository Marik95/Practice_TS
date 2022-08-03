// import { User } from "./User";
// import { Company } from "./Company";
import {} from "google-maps";


let map_div = document.getElementById('map') as HTMLElement;
new google.maps.Map(map_div, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }

});