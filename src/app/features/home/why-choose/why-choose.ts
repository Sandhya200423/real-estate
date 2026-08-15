import { Component } from '@angular/core';
@Component({
selector: 'app-why-choose',
standalone: true,
imports: [],
templateUrl: './why-choose.html',
styleUrl: './why-choose.css'
})
export class WhyChoose {
features = [
{
icon:'fa-solid fa-location-dot',
title:'Prime Locations',
text:'Homes located in premium areas with excellent connectivity.'
},
{
icon:'fa-solid fa-building',
title:'Quality Construction',
text:'Designed with superior materials and modern architecture.'
},
{
icon:'fa-solid fa-gem',
title:'Luxury Amenities',
text:'Experience comfort with world-class lifestyle facilities.'
},
{
icon:'fa-solid fa-handshake',
title:'Trusted Partner',
text:'Transparent service and customer-focused approach.'
}
];
}