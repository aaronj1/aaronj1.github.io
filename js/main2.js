//Initialize the map and set its origin and a zoom level
//var mymap = L.map('mapid').setView([39.828175, -98.5795], 5);

//Watershed map tokens: 183d55a35b5d4129abfb303bca36be17, pk.eyJ1IjoidWlzIiwiYSI6Ik9iQnhtN0EifQ.S8_0eRiCjaTDPANSbeviCQ
var mapboxAccessToken = 'pk.eyJ1IjoiYWFyb25qOSIsImEiOiJjanNhcmM3cXYwMjV2NDRsMW40NzhhdmR6In0.n1JWYvdey3JQMFEPDy49zA';
var mymap = L.map('mapid').setView([39.7392, -104.9903], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
            id: 'mapbox.light',
            }).addTo(mymap);

var info = L.control();

var layer = '';
var attribute;

watershedData = {
    "type": "FeatureCollection",
    "features": [
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.26,40.4171 ]
     },
     "properties": {
     "ID":2991,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Cedar Cove",
     "Address":"281 Cedar Cove, Loveland, CO 80537, USA",
     "Description":"Large amounts of sediment and debris were deposited from erosion caused by the 2013 flooding and streambank erosion and sedimentation along the Big Thompson still impacts residences, businesses, structures, and bridges. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a floodplain will be shaped to lower flood surfaces and provide areas for future sediment deposition. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT21_4_BigT_lookingDS_frombr_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":2
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.569,40.3971 ]
     },
     "properties": {
     "ID":3012,
     "User SID":"",
     "Name":"Fall River Restoration - Bugle Point",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, a church, and bridges along this reach of Fall River. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store sediment, as well as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV18_Bugle_DSC00892_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.575,40.3986 ]
     },
     "properties": {
     "ID":3013,
     "User SID":"",
     "Name":"Fall River Restoration - Fawn Valley",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, and bridges along this reach of Fall River. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV19_FawnvValley_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.578,40.3997 ]
     },
     "properties": {
     "ID":3014,
     "User SID":"",
     "Name":"Fall River Restoration - River's Edge",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, and bridges along this reach of Fall River. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV20_RiversEdge_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.528,40.3708 ]
     },
     "properties": {
     "ID":3015,
     "User SID":"",
     "Name":"Upper Big Thompson River Restoration - Livingston Site",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, and bridges along this reach of the Upper Big Thompson River. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide and enhance the bioengineering and existing rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV21_Livingston_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.968,38.9065 ]
     },
     "properties": {
     "ID":3016,
     "User SID":"",
     "Name":"Upper Fountain Creek Restoration at Fitz Gulch",
     "Address":"",
     "Description":"The 2013 floodwaters carved a new gully and cut off road access to homes. Gullying will continue to contribute sediment to the Fountain Creek headwaters and cause problems with home access. The The project area is approximately 0.35 acres and total The project length is about 500 feet, with the primary purpose of separating streamflow from the access road. The project design may include rip-rap ditching, earthwork, hard surfacing for the high-flow channel, and channel shaping. Work will also include protection of existing infrastructure, including utility lines. Best management practices to minimize additional disturbance will be followed during construction. Existing trees and root structures will be saved to the extent possible.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC4_Fitz_us_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.971,38.9468 ]
     },
     "properties": {
     "ID":3017,
     "User SID":"",
     "Name":"Wellington Gulch Restoration at North to North Pipeline",
     "Address":"",
     "Description":"Hillside and gully erosion is undermining structural supports for a crucial water supply line. Excessive runoff from the 2013 flood washed away soil and caused erosion around the pipeline. The objective of this The project is to protect the structural supports for the pipeline, including retaining structures, earthwork, grading, erosion control barriers, and to provide revegetation to maintain the functionality of the vunerable 10,500 feet of pipe.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC5_NtoN_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.834,38.7046 ]
     },
     "properties": {
     "ID":3019,
     "User SID":"",
     "Name":"Rock Creek Restoration - May Museum Site",
     "Address":"",
     "Description":"Streambanks are eroding and sediment is depositing in channel throughout the Rock Creek The project reach. There is an unstable headcut in spillway and damaged access roads resulting in a threatened municipal water supply. This The project proposes rip-rap and biostabilization to repair and stabilize streambanks that were damaged by flood waters as well as to remove excess sediment and debris that was left by the flood. This proejct will also provide protection to the damaged access road and water supply.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC7_RocKCreek_IMAG0638_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.906,38.8434 ]
     },
     "properties": {
     "ID":3020,
     "User SID":"",
     "Name":"Middle Fountain Creek Restoration at Wildcat Gulch",
     "Address":"",
     "Description":"Eroding channel and gully are causing sediment loading downstream in Sutherland Creek which poses hazards to the crossing on Crystal Park Road which is the only access for homes in Crystal Park subdivision. This project proposes 1100 linear feet of channel stabilization on this intermittent/ephemeral stream. Rock rip-rap and biostabilization will be used to help stabilize the banks in place.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC8_Wildcat_Gulch_20151013_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.32,40.059 ]
     },
     "properties": {
     "ID":3021,
     "User SID":"",
     "Name":"Four Mile Canyon Creek Restoration - Wagon Wheel Gap Road",
     "Address":"",
     "Description":"A large amount of hillside and bank erosion caused by the 2013 flooding along Fourmile Canyon Creek still impacts residences, structures, and bridges. The project proposes debris and sediment removal to establish a floodplain where feasible; streambank shaping and cross vanes to facilitate flow, protect banks from erosion, and provide grade control; and rip-rap and bioengineering to stabilize streambanks. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs on Wagon Wheel Gap Road.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FCC3_WagonWheel_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.341,40.0323 ]
     },
     "properties": {
     "ID":3022,
     "User SID":"",
     "Name":"Lower Fourmile Creek Restoration - Reach 1",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, and bridges along this reach of Fourmile Creek. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs on Fourmile Canyon Drive.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FM34_7_Reach1e_lookingDS2_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.36,40.1086 ]
     },
     "properties": {
     "ID":3037,
     "User SID":"",
     "Name":"Lower James Creek Restoration",
     "Address":"",
     "Description":"The 2013 flood left behind hillside and streambank erosion and sedimentation along James Creek, impacting residences, bridges, roads, and utilities. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control, where necessary. Additionally, where feasible, sediment will be removed and the floodplain will be shaped to lower flood surfaces and store future excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs in James Canyon.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH22_James_20150916_160430350_iOS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.383,40.1135 ]
     },
     "properties": {
     "ID":3038,
     "User SID":"",
     "Name":"James Creek Restoration - Mill Street",
     "Address":"",
     "Description":"The 2013 flood left behind hillside and streambank erosion and sedimentation along James Creek which impacts residences, bridges, roads, and utilities. Emergency repair work throughout the reach has provided some stability but several structures are failing. The The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide and enhance grade control, where necessary. Additionally, where feasible, a sediment will be removed and a floodplain will be shaped to lower flood surfaces and store future excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs on James Canyon.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH23_MillSt_20150916_172301626_iOS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.397,40.1223 ]
     },
     "properties": {
     "ID":3039,
     "User SID":"",
     "Name":"Little James Creek Restoration - Fike",
     "Address":"",
     "Description":"The 2013 flood resulted in streambank erosion and sedimentation from debris flows along Little James Creek, impacting residences, bridges, roads, and water quality. Debris flow sediment deposits and unstable loose debris will be removed and the floodplain will be shaped to lower flood surfaces and store future excess sediment. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control, where necessary. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs in James Canyon.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH24_fike_20150916_185005502_iOS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.401,40.1284 ]
     },
     "properties": {
     "ID":3040,
     "User SID":"",
     "Name":"Little James Creek - Blow Out Site",
     "Address":"",
     "Description":"The 2013 flood resulted in streambank erosion and sedimentation from debris flows along Little James Creek, impacting residences, bridges, roads, and water quality. Debris flow sediment deposits and unstable loose debris will be removed and the floodplain will be shaped to lower flood surfaces and store future excess sediment. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control, where necessary. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs in James Canyon.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH25_Blowout_20150916_174452441_iOS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.536,40.378 ]
     },
     "properties": {
     "ID":3011,
     "User SID":"",
     "Name":"Fall River Restoration - Elkhorn Lodge",
     "Address":"",
     "Description":"A large amount of deposition caused by the 2013 flooding along Fall River still impacts residences, businesses, structures, and bridges through this reach. The project proposes to remove significant quantities of sediment and create a floodplain to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control, as necessary. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV17_Elkhorn_lookingus_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.53,40.377 ]
     },
     "properties": {
     "ID":3010,
     "User SID":"",
     "Name":"Fall River Restoration - Pre-Downtown",
     "Address":"",
     "Description":"Streambank erosion and sedimentation from the flood of 2013 are still impacting residences, businesses, and culverts along this reach of Fall River. The project proposes to remove and rework unstable sediment and, where feasible, establish a vegetated floodplain to reduce flood surfaces and store sediment, as well as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV16_PreDowntown_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.257,40.4161 ]
     },
     "properties": {
     "ID":2992,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Jasper Lake",
     "Address":"",
     "Description":"Large amounts of sediment and debris were deposited from erosion caused by the 2013 flooding and streambank erosion and sedimentation along the Big Thompson still impacts residences, businesses, structures, and bridges. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a floodplain will be shaped to lower flood surfaces and provide areas for future sediment deposition. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT22_3_BigT_lookingDS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.332,40.432 ]
     },
     "properties": {
     "ID":2993,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Moodie",
     "Address":"",
     "Description":"A large amount of hillside and bank erosion caused by the 2013 flooding along the Big Thompson still impacts residences, structures, and bridges. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a floodplain will be shaped to lower flood surfaces and provide areas for future sediment deposition. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT23_1_BigT_LookingDS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.364,40.4389 ]
     },
     "properties": {
     "ID":2994,
     "User SID":"",
     "Name":"Big Thompson River Restoration at North Fork",
     "Address":"",
     "Description":"A large amount of deposition caused by the 2013 flooding along the Big Thompson still impacts residences, businesses, government facilities, structures, and bridges. The project proposes to remove significant quantities of sediment and create a floodplain to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT24_1_BigT_LookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.34,40.432 ]
     },
     "properties": {
     "ID":2995,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Confluence",
     "Address":"",
     "Description":"A large amount of deposition caused by the 2013 flooding along the Big Thompson still impacts residences, businesses, government facilities, structures, and bridges. The project proposes to remove significant quantities of sediment and create a floodplain to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT25_1_BigT_LookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.34,40.428 ]
     },
     "properties": {
     "ID":2996,
     "User SID":"",
     "Name":"Big Thompson River Restoration at West Drake",
     "Address":"",
     "Description":"A large amount of deposition caused by the 2013 flooding along the Big Thompson still impacts residences, businesses, government facilities, structures, and bridges. The project proposes to remove significant quantities of sediment and create a floodplain to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT26_1_BigT_LookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.349,40.4261 ]
     },
     "properties": {
     "ID":2997,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Mountain Shadows 2",
     "Address":"",
     "Description":"A large amount of hillside and bank erosion caused by the 2013 flooding along the Big Thompson still impacts residences, structures, and bridges. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, where feasible, a floodplain will be shaped to lower flood surfaces and store excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT27_1_BigT_LookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.358,40.4189 ]
     },
     "properties": {
     "ID":2998,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Mountain Shadows",
     "Address":"",
     "Description":"A large amount of hillside and bank erosion caused by the 2013 flooding along the Big Thompson still impacts residences, structures, and bridges. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, where feasible, a floodplain will be shaped to lower flood surfaces and store excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT28_1_BigT_LookingUS.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.367,40.4146 ]
     },
     "properties": {
     "ID":2999,
     "User SID":"",
     "Name":"Big Thompson River Restoration at Waltonia",
     "Address":"",
     "Description":"A large amount of hillside and bank erosion caused by the 2013 flooding along the Big Thompson still impacts residences, structures, and bridges. The project proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, where feasible, a floodplain will be shaped to lower flood surfaces and store excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing CDOT work for permanent repairs on US Hwy 34.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT29_1_BigT_LookingDS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.503,40.3334 ]
     },
     "properties": {
     "ID":3009,
     "User SID":"",
     "Name":"Fish Creek Restoration - Upper Fish Creek",
     "Address":"",
     "Description":"Streambank erosion and sedimentation from the flood of 2013 are still impacting residences, businesses, and culverts along this reach of Fish Creek. The project proposes to remove and rework unstable sediment and, where feasible, establish a vegetated floodplain to reduce flood surfaces and store sediment. The project will also provide bioengineering and rock toe protection to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV15_FishCreek_US_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.503,40.3487 ]
     },
     "properties": {
     "ID":3008,
     "User SID":"",
     "Name":"Fish Creek Restoration - Scott Avenue",
     "Address":"",
     "Description":"Streambank erosion and sedimentation from the flood of 2013 are still impacting residences, businesses, and culverts along this reach of Fish Creek. The project proposes to remove and rework unstable sediment and, where feasible, establish a vegetated floodplain to reduce flood surfaces and store sediment. The project will also provide bioengineering and rock toe protection to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV14_1_BrooktoCountryClub_DS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.498,40.3567 ]
     },
     "properties": {
     "ID":3007,
     "User SID":"",
     "Name":"Fish Creek Restoration - Lower Fish Creek",
     "Address":"",
     "Description":"Streambank erosion and sedimentation from the flood of 2013 are still impacting residences, businesses, and culverts along this reach of Fish Creek. The project proposes to establish a vegetated floodplain, as well as provide bioengineering to stabilize streambanks. Vegetation will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/EV13_LowerFishCreek_DS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.326,39.8849 ]
     },
     "properties": {
     "ID":3006,
     "User SID":"",
     "Name":"Upper Coal Creek Restoration - \"Area 3\"",
     "Address":"",
     "Description":"Proposed work for this project begins approximately four miles west of Highway 93 on Highway 72, in Coal Creek Canyon. The project covers three separate areas along approximately 1.25 miles of the canyon; Start, Area 2, and Area 3.  All sites have one or more of the following treatments: sediment removal to establish a floodplain, bioengineering to stabilize stream banks, armored resiliency to stabilize stream banks, critical area treatment including willow planting, seeding, mulching and top soiling, and cross vanes. Mature trees and bushes in the existing riparian corridor will be preserved where possible and removed only if absolutely necessary. Trees and bushes removed during the project will be utilized, if possible, onsite within the channel or on the banks for stabilization and/or fish habitat. \nThe focus for the project is not only to repair damage caused by the 2013 flooding, but also to build a more resilient floodplain corridor in order to better protect life, homes and structures in the event of high flows. \n",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/CC9_Area3_LookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.473,40.4542 ]
     },
     "properties": {
     "ID":3001,
     "User SID":"",
     "Name":"North Fork Big Thompson River Restoration at Glen Haven on Fox Creek",
     "Address":"",
     "Description":"Bank erosion, sedimentation, and unstable streambanks have affected the homes, roads, crossings, and businesses along the North Fork of the Big Thompson since the flood of 2013. The project proposes to use rip-rap and bioengineering to stabilize failing streambanks throughout the The project area, as well as stabilize a significant channel avulsion and eroding gully. Additionally, where feasible, a floodplain will be shaped to lower flood surfaces and store excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT30_1_BigT_West_LookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.473,40.4542 ]
     },
     "properties": {
     "ID":3001,
     "User SID":"",
     "Name":"North Fork Big Thompson River Restoration at Glen Haven on Fox Creek",
     "Address":"",
     "Description":"Bank erosion, sedimentation, and unstable streambanks have affected the homes, roads, crossings, and businesses along the North Fork of the Big Thompson since the flood of 2013. The project proposes to use rip-rap and bioengineering to stabilize failing streambanks throughout the The project area, as well as stabilize a significant channel avulsion and eroding gully. Additionally, where feasible, a floodplain will be shaped to lower flood surfaces and store excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/Budget-Legend_0.png",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.463,40.4434 ]
     },
     "properties": {
     "ID":3000,
     "User SID":"",
     "Name":"North Fork Big Thompson River Restoration at Glen Haven on West Creek",
     "Address":"",
     "Description":"Bank erosion, sedimentation, and unstable streambanks have affected the homes, roads, crossings, and businesses along the North Fork of the Big Thompson since the flood of 2013. The project proposes to use rip-rap and bioengineering to stabilize failing streambanks throughout the The project area, as well as consider alternative channel alignments. Additionally, where feasible, a floodplain will be shaped to lower flood surfaces and store excess sediment. A low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/BT30_1_BigT_West_LookingUS_2.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.29,40.2089 ]
     },
     "properties": {
     "ID":3056,
     "User SID":"",
     "Name":"South Saint Vrain Creek Restoration at Boulder County Open Space Hall Ranch Property",
     "Address":"",
     "Description":"The 2013 flood caused stream bank erosion and sedimentation along South St Vrain Creek, impacting residences, roads, and bridges. The The project proposes to remove and rework unstable sediment and create a floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV29_5_SSV_channel_lookingUS_2_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.274,40.2169 ]
     },
     "properties": {
     "ID":3054,
     "User SID":"",
     "Name":"South Saint Vrain Creek Restoration at Old South St Vrain Bridge",
     "Address":"",
     "Description":"The 2013 flood caused stream bank erosion and sedimentation along South St Vrain Creek, impacting residences, roads, and bridges. The The project proposes to remove and rework unstable sediment and recnnect the floodplain on the south side of the creek to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV_27_16_SSV_belowbr_lookingDS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.26,40.216 ]
     },
     "properties": {
     "ID":3053,
     "User SID":"",
     "Name":"Saint Vrain Creek Restoration at McConnell",
     "Address":"",
     "Description":"This project proposes to remove debris and 1-3 feet of deposited sediment to promote floodplain reconnection and reduce damage caused by this debris if it were to move downstream. The site also has several very large failing banks and proposes to use a combination of large wood structures, bioengineering, and rock to stabilize the toes of the failing slopes.  ",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV26_7_McConnell_USofRoughnreadyDiv_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.249,40.2115 ]
     },
     "properties": {
     "ID":3052,
     "User SID":"",
     "Name":"Saint Vrain Creek Restoration at the Breaches",
     "Address":"",
     "Description":"Stream bank erosion, levee failures, and sedimentation from the 2013 flood are still impacting residences, businesses, structures, and bridges along this reach of St Vrain Creek. The The project proposes to remove and rework unstable sediment to create and reconnect floodplains, and to repair and replace the protective levee/dike systems with planned spillways to the floodplain to reduce erosive forces and allow the spreading and storage of floodwaters. The project also proposes to use rip-rap and bioengineering, as appropriate, to stabilize streambanks and in-stream structures to provide grade control, as well as debris removal to prevent further damage to the system. Additionally, disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV25_22_Breach1_lookingDS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.818,40.3171 ]
     },
     "properties": {
     "ID":3051,
     "User SID":"",
     "Name":"Middle South Platte River Restoration at Highway 60",
     "Address":"",
     "Description":"This project seeks to protect property and infrastructure in the vicinity of the SH 60 bridge on the Middle South Platte River. Active streambank erosion will be stabilized through a combination of river training structures and bioengineering bank stabilization. The project seeks to stabilize the stream channel in the vicinity of the bridge and improve sediment and debris transport. Existing cottonwood galleries will be protected by these stabilization measures, and nearbank plantings will increase the stability and habitat value of the reach. ",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/MSP6_1_HWY60_US_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.763,40.3482 ]
     },
     "properties": {
     "ID":3050,
     "User SID":"",
     "Name":"Middle South Platte and Big Thompson Confluence Levee Setback",
     "Address":"",
     "Description":"This project proposes a levee setback on the south side of the South Platte River to reconnect the floodplain and expand the riparian corridor. Setting back the levee would increase the connected floodplain by approximatley 80 acres. The project also proposes to grade in overflow channels and specific areas to encourage sediment deposition. The area will be seeded and mulched and lightly revegetated with trees and shrubs, as appropriate. ",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/MSP4_1_BigTConfluence_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.288,40.2933 ]
     },
     "properties": {
     "ID":3048,
     "User SID":"",
     "Name":"Little Thompson River Restoration at Stagecoach Trail (Blue Mountain Reach)",
     "Address":"",
     "Description":"Streambank erosion and sedimentation from the flood of 2013 are impacting this site along the Little Thompson River. The project proposes to remove and rework unstable sediment and create a floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LT16_stagecoach_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.205,40.2575 ]
     },
     "properties": {
     "ID":3047,
     "User SID":"",
     "Name":"Little Thompson River Restoration at Parrish Ranch",
     "Address":"",
     "Description":"The flood of 2013 caused streambank erosion and sedimentation along the Little Thompson River, impacting residences, businesses, and other structures. The project proposes to remove and rework unstable sediment and create a floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LT15_Parrish_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.167,40.2575 ]
     },
     "properties": {
     "ID":3046,
     "User SID":"",
     "Name":"Little Thompson River Restoration at North 83rd Street Bridge",
     "Address":"",
     "Description":"The flood of 2013 caused streambank erosion and sedimentation along the Little Thompson River, impacting residences, businesses, structures, and the N 83rd Street Bridge. The project proposes to remove and rework unstable sediment and create a floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LT14_1_83rdStBr_lookingUS_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.131,40.2722 ]
     },
     "properties": {
     "ID":3045,
     "User SID":"",
     "Name":"Little Thompson River Restoration at Green Bridge (Berthoud Reach)",
     "Address":"",
     "Description":"The flood of 2013 caused streambank erosion and sedimentation along the Little Thompson River, impacting residences, businesses, structures, and bridges. The project proposes to remove and rework unstable sediment and create a floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/Green%20Bridge%20%28Little%20Thompson%29%20-%20project%20site%20photo_0.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.871,40.3334 ]
     },
     "properties": {
     "ID":3044,
     "User SID":"",
     "Name":"Little Thompson River Restoration at Milliken",
     "Address":"",
     "Description":"This project proposes to realign the Little Thompson River in the vicinity of the State Highway 60 bridge in order to improve the transport of sediment and debris through the structure and improve the overall stability of the reach within the vicinity of the bridge. The project will create a low flow and bankfull channel and ensure that the stream is connected to the existing floodplain during typical bankfull events.  Streambank stabilization bioengineering techniques and the active revegetation of the floodplain are critical project components.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LT12_4_Millikin_lookingDSfromRRbr.jpg",
     "Created Date":"03/07/2016 - 10:47am",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.709,40.3595 ]
     },
     "properties": {
     "ID":3077,
     "User SID":"",
     "Name":"Middle South Platte River Restoration and Latham Diversion Reconfiguration",
     "Address":"",
     "Description":"The Latham Ditch project proposes to remove and rework unstable sediment to create and reconnect floodplains and reduce sedimentation in the ditch. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control, as well as debris removal to prevent further damage to the system. Additionally, disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/MSP3_1_Latham_1.jpg",
     "Created Date":"03/10/2016 - 4:41pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.379,40.0585 ]
     },
     "properties": {
     "ID":3096,
     "User SID":"",
     "Name":"Ingram Gulch",
     "Address":"",
     "Description":"The 2013 floodwaters eroded a gully and compromised road access to the Ingram Gulch. Gullying will continue to contribute sediment to the upper reaches of Fourmile Creek and cause problems with road access. The project proposes to remove and rework unstable sediment to reduce downstream sediment loading, as well as to remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Existing trees and root structures will be saved to the extent possible.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FM35_5_IngramGulch_lookingupvalley_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.92,38.8587 ]
     },
     "properties": {
     "ID":3086,
     "User SID":"",
     "Name":"Ruxton Ave",
     "Address":"",
     "Description":"Flood wall repair to protect residences, utilities and street.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC12_Ruxton_0.JPG",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.989,38.9243 ]
     },
     "properties": {
     "ID":3085,
     "User SID":"",
     "Name":"Sand Gulch",
     "Address":"",
     "Description":"Access protection for residents.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC11_SandGulch_0.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.915,38.8537 ]
     },
     "properties": {
     "ID":3084,
     "User SID":"",
     "Name":"Pawnee Channel",
     "Address":"",
     "Description":"Channel Stabilization to protect homes and city stormwater infrastructure.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC10_PawneeChannel_0.JPG",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.548,40.3615 ]
     },
     "properties": {
     "ID":3082,
     "User SID":"",
     "Name":"Upper Big Thompson River Restoration - Broadview #2",
     "Address":"",
     "Description":"This project proposes to add additional rock along the right bank to create a boulder toe, or a small boulder wall, that may potentially incorporates 1-3 boulder spurs to deflect flow away from the embankment.  Some channel shaping work and sediment removal is proposed upstream of the failing bank on the opposite (left) bank to pass flow around the bend. ",
     "URL to place image":"",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.545,40.3625 ]
     },
     "properties": {
     "ID":3081,
     "User SID":"",
     "Name":"Upper Big Thompson River Restoration - Broadview #1",
     "Address":"",
     "Description":"This project proposes to use large boulders  to reinforce the outside bend of the Upper Big Thompson River to reduce erosion on the Broadview Road embankment. The project will strategically tuck boulders into several locations where the soil is eroding both to function as a rock toe as well as to break up flow and provide fish habitat. The toe will also include willow stakes, as appropriate, regrade the bank to the road, and revegetate all disturbed areas.",
     "URL to place image":"",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.515,40.3783 ]
     },
     "properties": {
     "ID":3080,
     "User SID":"",
     "Name":"Upper Big Thompson River Restoration - Visitor's Center",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, and bridges along this reach of the Upper Big Thompson River. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide and enhance the bioengineering and existing rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.532,40.3672 ]
     },
     "properties": {
     "ID":3079,
     "User SID":"",
     "Name":"Upper Big Thompson River Restoration - Riverside",
     "Address":"",
     "Description":"This project proposes to construct a large structural log jam through the upstream half of the project area and a low boulder toe through the downstream half of the project area to stabilize the failing bank and adjacent road. The project will back fill and grade the bank to reduce the slope of the vertical bank. The log jam and the boulder toe will have live willow stakes included  as the structural components are installed to encourage vegetation establishment directly on the river's edge. Riparian revegetation is a critical project component and all disturbed areas will be, at minimum, seeded and mulched. ",
     "URL to place image":"",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.529,40.3701 ]
     },
     "properties": {
     "ID":3078,
     "User SID":"",
     "Name":"Upper Big Thompson River Restoration - Rock and Roll",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting residences, lodges, businesses, and bridges along this reach of the Upper Big Thompson River. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide and enhance the bioengineering and existing rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":2
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.209,40.1067 ]
     },
     "properties": {
     "ID":3106,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at N 63rd Street Bridge",
     "Address":"",
     "Description":"The flood of 2013 resulted in significant deposition and reduced bridge and channel capacity at the N 63rd Street Bridge. In addition, streambanks are eroded, flood debris remains, and failing temporary fixes still exist upstream and downstream of the crossing. The project proposes to remove sediment and, where feasible, establish a vegetated floodplain, as well as provide bioengineering and rock toe protection to stabilize the failing streambanks. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH18_63rd_20150908_211647037_iOS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.267,40.1222 ]
     },
     "properties": {
     "ID":3107,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at N 41st Street Bridge",
     "Address":"",
     "Description":"Proposed work for this location begins just west of 41st and continues upstream for approximately 3,800 feet (0.7 miles). The first 2,000’ of work consists of spot bank improvements with biostabilization and rock riprap at locations where the bank is failing on private property. Work in the most upstream sections includes removing large sediment deposits in the original, preflood channel and establishing an overflow channel for increased flood conveyance. Floodplain benches at locations that need additional flood protection will consist of rockery slopes that include amended soils and plantings to re-establish vegetation that was ripped out during the floods in 2013. Additionally, some work will include repairing berms and emergency bank protection installed immediately after the flood that does not meet typical specifications of material that would be applied during design.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH19_41stStreet_2_DS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.275,40.128 ]
     },
     "properties": {
     "ID":3108,
     "User SID":"",
     "Name":"Left Hand Creek Restoration - Ranch Property",
     "Address":"",
     "Description":"Work proposed includes extensive reconfiguration of the channel margins as functional floodplain through the construction of overflow channels and grading of a multi-stage channel. Bank reconstruction and stabilization will consist of a combination of structural (e.g., log and rock toe protection) and bioengineered (e.g., plantings) approaches to help stabilize actively eroding banks and establish a functional channel geometry. Log structures are proposed for armoring the channel banks on the outside of the prominent high energy bend. The channel profile will be graded to target equilibrium slopes and include the establishment of bedforms, including fish-passable steps, pools, and riffles. Extensive floodplain headcutting will be stabilized with grading and revegetation, which will consist of a mix of native riparian and upland species.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH20_Ranch_0.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.275,40.128 ]
     },
     "properties": {
     "ID":3109,
     "User SID":"",
     "Name":"Left Hand Creek Restoration - Streamcrest",
     "Address":"",
     "Description":"The Streamcrest project site is located on an alluvial fan, a geomorphic feature characterized by a propensity for depositing sediment and a shifting channel alignment in response to a rapid reduction in channel gradient. This project proposes to account for that behavior by repurposing available floodplain space for sediment storage and channel adjustment. Overflow channels and a multi-stage channel will provide space for sediment deposition and help reduce flood stage. Bank stabilization consisting of a combination of structural (e.g., log and rock toe protection) and bioengineered (e.g., plantings) approaches are proposed to help stabilize in situ sediment that cannot be removed. Functional bedforms (i.e., pools, riffles, fish-passable steps) are proposed for the channel to facilitate sediment exchange, increase channel complexity, increase hyporheic exchange, and accelerate the development of habitat. Channel gradient will target an equilibrium bed slope appropriate for the site. Offset asset protection, where armoring is located as close to the asset as possible, is proposed for the homes located in the floodplain. Riparian and upland revegetation will help to reduce the spread of invasive weeds and curb the extensive erosion potential on the project site. ",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH21_Streamcrest_LeftHandCk_powerlines_lookingUS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.23,40.1047 ]
     },
     "properties": {
     "ID":3110,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at Haystack Golf Course",
     "Address":"",
     "Description":"The 2013 flood eroded streambanks along Left Hand Creek, and flood debris and failing temproary fixes litter the The project reach. The project proposes to remove debris and unstable sediments, and, where feasible, establish a vegetated floodplain, as well as provide bioengineering and rock toe protection to stabilize the failing streambanks. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH56_Haystack_20150908_220456412_iOS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.295,40.1324 ]
     },
     "properties": {
     "ID":3111,
     "User SID":"",
     "Name":"Left Hand Creek Restoration - Left Hand Canyon Drive",
     "Address":"",
     "Description":"This project proposes to repair and stabilize channel banks, remove flow constrictions, and connect the channel to the floodplain to the extent possible. Bank stabilization will consist of a combination of structural (e.g., log and rock toe protection) and bioengineered (e.g., plantings) approaches to help stabilize vertical, actively eroding banks. This project area contains a diversion structure with a spillway that is restricted by an undersized culvert. The project proposes to remove that culvert. The potential to lower a primitive access road and driveway to the elevation of the floodplain presents an opportunity to convey flood flows through limited floodplain. ",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH57_21LefthandCD_lookingUS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.381,40.0796 ]
     },
     "properties": {
     "ID":3112,
     "User SID":"",
     "Name":"Upper Left Hand Creek Restoration",
     "Address":"",
     "Description":"A large amount of erosion and deposition caused by the 2013 flooding through the Upper Left Hand reach of Left Hand Creek still impacts residences and crossings. The project proposes to remove and rework unstable sediment and create a floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH58_upperlefthand_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.197,40.1109 ]
     },
     "properties": {
     "ID":3105,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at Nimbus Road Bridge",
     "Address":"",
     "Description":"The flood of 2013 resulted in significant deposition and reduced bridge and channel capacity at the Nimbus Road Bridge. In addition, streambanks are eroded, flood debris remains, and failing temporary fixes still exist upstream and downstream of the crossing. The project proposes to remove sediment and, where feasible, establish a vegetated floodplain, as well as provide bioengineering and rock toe protection to stabilize the failing streambanks. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH17_Nimbus_20150908_190941906_iOS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.185,40.1165 ]
     },
     "properties": {
     "ID":3104,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at N 73rd Street Bridge",
     "Address":"",
     "Description":"The flood of 2013 resulted in significant deposition and reduced bridge and channel capacity at the N 73rd Street Bridge. In addition, streambanks are eroded, flood debris remains, and failing temporary fixes still exist upstream and downstream of the crossing. The project proposes to remove sediment and, where feasible, establish a vegetated floodplain, as well as provide bioengineering and rock toe protection to stabilize the failing streambanks. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH16_73stbridge_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.394,40.0567 ]
     },
     "properties": {
     "ID":3097,
     "User SID":"",
     "Name":"Gold Run Creek Restoration",
     "Address":"",
     "Description":"Continued streambank erosion and sedimentation from the 2013 flood is impacting bridges and the roadway along this reach of Fourmile Creek. The project proposes to remove and rework unstable sediment to reduce flood surfaces and store future sediment, as well as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched. The project is expected to be constructed with the ongoing Boulder County work for permanent repairs on Gold Run.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FM36_2_IngramGulch_lookingUS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.398,40.0379 ]
     },
     "properties": {
     "ID":3098,
     "User SID":"",
     "Name":"Wall Street Restoration",
     "Address":"",
     "Description":"Streambank erosion and sedimentation from the 2013 flood continues to impact bridges and properties along this reach of Fourmile Creek. The project proposes to remove and rework unstable sediment to increase floodplain capacity and store future sediment. Project will also provide bioengineering and rock toe protection to stabilize streambanks. Additionally, a low-flow channel and rock clusters will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.\n",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FM37_6_Wallst_FourmileCk_DSbridge_lookingDS_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.468,40.0366 ]
     },
     "properties": {
     "ID":3099,
     "User SID":"",
     "Name":"Fourmile Sunset Pond",
     "Address":"",
     "Description":"Flooding in 2013 caused erosion and deposition, relocating the stream and subsequently cutting off the diversion used to fill the Fire Protection District's storage pond in this remote community surrounded by forest. The project proposes to remove and rework unstable sediment as remove flood debris that remains in the channel. The project will also provide bioengineering and rock toe protection to stabilize streambanks, and will repair the diversion into the water storage pond.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FM38_1_SunsetPond_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.143,40.1267 ]
     },
     "properties": {
     "ID":3100,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at Beilins-Hock Boulder County Open Space Property",
     "Address":"",
     "Description":"This project proposes to grade back an actively eroding vertical bank on the north-west side of Left Hand Creek and re-establish upland vegetation on the newly graded slope. Near the creek, the project proposes to create topographic benches where willows, water birch, and cottonwood trees will be planted in an attempt to re-establish the immediate floodplain. A continuous section of burried set back riprap will be placed 20-30’ off of the channel into the newly graded bank for secondary flood protection that will stop very high and erosive flows from undermining the adjacent infrastructure and private property.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH12_Beilins7_undercutbank_lookingDS2_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.152,40.1231 ]
     },
     "properties": {
     "ID":3101,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at Airport Road Bridge",
     "Address":"",
     "Description":"This project proposes to remove sediment and, where feasible, establish a vegetated floodplain, as well as provide bioengineering and rock toe protection to stabilize the failing streambanks. Additionally, a low-flow channel and woody material will be added to create channel complexity and enhance aquatic habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH13_Airport_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.168,40.1186 ]
     },
     "properties": {
     "ID":3102,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at N 81st Street Bridge",
     "Address":"",
     "Description":"Proposed work for this location continues east of N 81st St for approximately 2,400 feet. Work includes formalized bank protection at critical structures such as private property, historic buildings, and state or county infrastructure. Clearing of invasive species, such as crack willows, is planned to encourage larger establishment of native cottonwoods and to decrease channel roughness and snags near private property to allow for more efficient flood flows. Some floodplain re-establishment and removal of large sediment deposits will also occur at select locations along the reach.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH14_81stbridge_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.17,40.1166 ]
     },
     "properties": {
     "ID":3103,
     "User SID":"",
     "Name":"Left Hand Creek Restoration at Deutschteig Property",
     "Address":"",
     "Description":"The 2013 flood eroded streambanks along Left Hand Creek and left flood debris though the Deutschteig property. The project proposes to remove debris and revegetate with willows, trees, and shrubs, as well as seed and mulch disturbed areas.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/LH15_Deutschtig20160106_154802_1.jpg",
     "Created Date":"04/01/2016 - 4:08pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.878,38.9266 ]
     },
     "properties": {
     "ID":3126,
     "User SID":"",
     "Name":"North Douglas",
     "Address":"",
     "Description":"Channel Stabilization to protect homes and ranch property.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC9_ChuckWagon_1.jpg",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -104.886,38.9166 ]
     },
     "properties": {
     "ID":3125,
     "User SID":"",
     "Name":"Northwest Springs Chuckwagon--South Douglas",
     "Address":"",
     "Description":"The Middle Fountain Creek channel is over-wide, aggrading in some areas and degrading in others, and is being clogged by excessive sediment from the adjacent eroding hillsides and streambanks. The project aims to restore 3,600 feet of stream to a naturally functioning system with the capacity to transport and store the excess sediment loads. The project will provide grade control structures, streambank protection, bank shaping, erosion control, revegetation, and the restoration of a natural channel form to include a multi-stage cross-section for low, bankfull, and flood flows.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/FC6_NWsprings_1.jpg",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.323,39.8829 ]
     },
     "properties": {
     "ID":3124,
     "User SID":"",
     "Name":"Upper Coal Creek Restoration - \"Area 2\"",
     "Address":"",
     "Description":"Proposed work for this project begins approximately four miles west of Highway 93 on Highway 72, in Coal Creek Canyon. The project covers three separate areas along approximately 1.25 miles of the canyon; Start, Area 2, and Area 3.  All sites have one or more of the following treatments: sediment removal to establish a floodplain, bioengineering to stabilize stream banks, armored resiliency to stabilize stream banks, critical area treatment including willow planting, seeding, mulching and top soiling, and cross vanes. Mature trees and bushes in the existing riparian corridor will be preserved where possible and removed only if absolutely necessary. Trees and bushes removed during the project will be utilized, if possible, onsite within the channel or on the banks for stabilization and/or fish habitat. \nThe focus for the project is not only to repair damage caused by the 2013 flooding, but also to build a more resilient floodplain corridor in order to better protect life, homes and structures in the event of high flows. \n",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/CC8_Area2AreaB_1.jpg",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.314,39.8779 ]
     },
     "properties": {
     "ID":3123,
     "User SID":"",
     "Name":"Upper Coal Creek Restoration - \"Start\"",
     "Address":"",
     "Description":"Proposed work for this project begins approximately four miles west of Highway 93 on Highway 72, in Coal Creek Canyon. The project covers three separate areas along approximately 1.25 miles of the canyon; Start, Area 2, and Area 3.  All sites have one or more of the following treatments: sediment removal to establish a floodplain, bioengineering to stabilize stream banks, armored resiliency to stabilize stream banks, critical area treatment including willow planting, seeding, mulching and top soiling, and cross vanes. Mature trees and bushes in the existing riparian corridor will be preserved where possible and removed only if absolutely necessary. Trees and bushes removed during the project will be utilized, if possible, onsite within the channel or on the banks for stabilization and/or fish habitat. \nThe focus for the project is not only to repair damage caused by the 2013 flooding, but also to build a more resilient floodplain corridor in order to better protect life, homes and structures in the event of high flows. \n",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/CC6_StartAreaB_1.jpg",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.276,40.216 ]
     },
     "properties": {
     "ID":3127,
     "User SID":"",
     "Name":"South Saint Vrain Creek Restoration at Boulder County Open Space Triangle Property",
     "Address":"",
     "Description":"The 2013 flood caused stream bank erosion and sedimentation along South St Vrain Creek, impacting residences, roads, and bridges. The The project proposes to remove and rework unstable sediment and create a floodplain to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to reallign a small section of channel to create a better apprach to the Old South St. Vrain Creek Bridge and use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV28_3_OldSSVBridge_lookingUS_1.jpg",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.291,40.248 ]
     },
     "properties": {
     "ID":3128,
     "User SID":"",
     "Name":"North Saint Vrain Creek Restoration at Apple Valley - North",
     "Address":"",
     "Description":"The flooding in 2013 caused channel avulsions, significant bank erosion, and sediment deposition on North St Vrain Creek in Apple Valley. The The project proposes to remove and rework large amounts of sediment and reconnect the floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV34_23_buyouthouse_1.jpg",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -105.288,40.2304 ]
     },
     "properties": {
     "ID":3129,
     "User SID":"",
     "Name":"North Saint Vrain Creek Restoration at Apple Valley - South",
     "Address":"",
     "Description":"The flooding in 2013 caused channel avulsions, significant bank erosion, and sediment deposition on North St Vrain Creek in Apple Valley. The The project proposes to remove and rework large amounts of sediment and reconnect the floodplain, where possible, to lower flood surfaces and provide areas for future sediment deposition. The project also proposes to use rip-rap and bioengineering to stabilize streambanks and in-stream structures to provide grade control. Additionally, a low-flow channel, rock clusters, and woody material will be added to create channel complexity and enhance fish habitat, and disturbed areas will be planted with willows, trees, and shrubs, and/or will be seeded and mulched.",
     "URL to place image":"https://coloradoewp.com/sites/coloradoewp.com/files/SV38_30_LowerAppleValley_lookingDS_3_0.JPG",
     "Created Date":"05/19/2016 - 2:05pm",
     "Total votes":1
     }
   }
 ]
 }

mymap.on('baselayerchange', function (e) {
          document.getElementById("panel").style.visibility = "visible";
          });
 
getChoroplethData(mymap);
createChoroplethMap();
 
 function createChoroplethMap() {
     var index = 0;
     
     //create range input element (slider)
     var container;
     var index;
     
     var SequenceControl = L.Control.extend({
                                            options: {
                                            position: 'bottomleft'
                                            },
                                            
                                            onAdd: function (mymap) {
                                            // create the control container div with a particular class name
                                            //container = L.DomUtil.create('div', 'sequence-control-container');
                                            
                                            // ... initialize other DOM elements, add listeners, etc.
                                            //Create range input element (slider)
                                            //$(container).append('<input class="range-slider" type="range">');
                                            
                                            //add skip buttons
                                            //$(container).append('<button class="skip" id="reverse">Reverse</button>');
                                            //$(container).append('<button class="skip" id="forward">Skip</button>');
                                            
                                            //disable any mouse event listeners for the container
                                            L.DomEvent.disableClickPropagation(container);
                                            
                                            return container;
                                            }
                                            });
     //mymap.addControl(new SequenceControl());
     
     //set slider attributes
     $('.range-slider').attr({
                             max: 8,
                             min: 0,
                             value: 0,
                             step: 1
                             });
     
     
     //input listener for slider
     $('.range-slider').on('input', function(){
                           
                           index = $(this).val();
                           reload();
                           //sequence
                           });
     
     //click listener for buttons
     $('.skip').click(function(){
                      reload();
                      //get the old index value
                      index = $('.range-slider').val();
                      
                      
                      //Step 6: increment or decrement depending on button clicked
                      if ($(this).attr('id') == 'forward'){
                      index++;
                      //Step 7: if past the last attribute, wrap around to first attribute
                      index = index > 8 ? 0 : index;
                      } else if ($(this).attr('id') == 'reverse'){
                      index--;
                      //Step 7: if past the first attribute, wrap around to last attribute
                      index = index < 0 ? 8 : index;
                      };
                      
                      //Step 8: update slider
                      $('.range-slider').val(index);
                      reload();
                      });
     $('#reverse').html('<img src="img/reverse.png">');
     $('#forward').html('<img src="img/forward.png">');
 
     function style(feature) {
         var attribute = getAttribute(index);
         
         return {
         fillColor: getColor(feature.properties[attribute]),
         weight: 2,
         opacity: 1,
         color: 'white',
         dashArray: '3',
         fillOpacity: 0.7
         };
     }
     
     
     
     function onEachFeature(feature, layer) {
         layer.on({
                  //mouseover: layer.bindPopup(feature.properties.Description),
                  //mouseout: layer.bindPopup(feature.properties.Description),
                  click: layer.bindPopup(feature.properties.Name.bold() + ": " + feature.properties.Description)
                  });
     }
     
     var info = L.control();
     
     info.onAdd = function (mymap) {
         this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
         this.update();
         return this._div;
     };
     
     // method that we will use to update the control based on feature properties passed
     info.update = function (props) {
         var attribute = getAttribute(index);
         this._div.innerHTML = '<h4>Colorado Watershed Map</h4>' + (props ?
                                                                     '<b>' + props.name + '</b><br />' + attribute + ': ' + props[attribute]
                                                                     : 'Click on a marker to see details');
     };
     info.addTo(mymap);
     load();
     
     function load() {
         geojson = L.geoJson(watershedData, {
                             style: style,
                             onEachFeature: onEachFeature,
                             }).addTo(mymap);
     }
     
     function reload() {
         mymap.removeLayer(geojson);
         geojson = L.geoJson(watershedData, {
                             style: style,
                             onEachFeature: onEachFeature,
                             }).addTo(mymap);
     }
 };
 
 //Add a popup message that will display the coordinates of the location the user clicks on the map
 var popup = L.popup();

 mymap.on('click', onMapClick);
 
 //Import GeoJSON data
 function getData(mymap){
     //load the data
     $.ajax("data/StatePops.geojson", {
            dataType: "json",
            success: function(response){
                 //call function to create proportional symbols
                 var attributes = processData(response);
                 createPropSymbols(response, mymap, attributes);
                 createSequenceControls(mymap, attributes);
                 createLegend(mymap, attributes[0]);
                 updateLegend(mymap, attributes[0]);
            }
     });
 };
 
 function getChoroplethData(mymap){
     //load the data
     $.ajax("data/StatePops.geojson", {
            dataType: "json",
            success: function(response){
            //call function to create proportional symbols
            var attributes = processData(response);
            }
            });
 };
 
 //build an attributes array from the data
 function processData(data){
     //empty array to hold attributes
     var attributes = [];
     
     //properties of the first feature in the dataset
     var properties = data.features[0].properties;
     
     //push each attribute name into attributes array
     for (var attribute in properties){
         //only take attributes with population values
         if (attribute.indexOf("Pop") > -1){
             attributes.push(attribute);
         };
     };
     
     return attributes;
 };
 
 
 //function to convert markers to circle markers
 function pointToLayer(feature, latlng){
     //Determine which attribute to visualize with proportional symbols
     var attribute = "Population Estimate (as of July 1) - 2010";
     
     //create marker options
     var options = {
     radius: 8,
     fillColor: "#ff7800",
     color: "#000",
     weight: 1,
     opacity: 1,
     fillOpacity: 0.8
     };
     
     //For each feature, determine its value for the selected attribute
     var attValue = Number(feature.properties[attribute]);
     
     //Give each feature's circle marker a radius based on its attribute value
     options.radius = calcPropRadius(attValue);
     
     //create circle marker layer
     var group1 = L.featureGroup();
     layer = L.circleMarker(latlng, options).addTo(group1);
     
     createPopup(feature.properties, attribute, layer, options.radius);
     
     layer.on({
              mouseover: function(){
              this.openPopup();
              },
              mouseout: function(){
              this.closePopup();
              },
              });
     
     //return the circle marker to the L.geoJson pointToLayer option
     return layer;
 };
 
 //calculate the radius of each proportional symbol
 function calcPropRadius(attValue) {
     //scale factor to adjust symbol size evenly
     var scaleFactor = 0.0005;
     //area based on attribute value and scale factor
     var area = attValue * scaleFactor;
     //radius calculated based on area
     var radius = Math.sqrt(area/Math.PI);
     
     return radius;
 };
 
 function getColor(d)
 {
     return d >= 13000000 ? '#00441b' :
     d >= 9700000 ? '#006d2c' :
     d >= 7000000 ? '#238b45' :
     d >= 6000000 ? '#41ab5d' :
     d >= 4700000 ? '#74c476' :
     d >= 3100000 ? '#a1d99b' :
     d >= 1350000 ? '#c7e9c0' :
     d >= 750000 ? '#e5f5e0' :
     '#f7fcf5';
 }
 
 function getAttribute(index) {
     if (index == 0) {
         attribute = "Population Estimate (as of July 1) - 2010";
     }
     else if (index == 1) {
         attribute = "Population Estimate (as of July 1) - 2011"
         
     }
     else if (index == 2) {
         attribute = "Population Estimate (as of July 1) - 2012"
         
     }
     else if (index == 3) {
         attribute = "Population Estimate (as of July 1) - 2013"
         
     }
     else if (index == 4) {
         attribute = "Population Estimate (as of July 1) - 2014"
         
     }
     else if (index == 5) {
         attribute = "Population Estimate (as of July 1) - 2015"
         
     }
     else if (index == 6) {
         attribute = "Population Estimate (as of July 1) - 2016"
         
     }
     else if (index == 7) {
         attribute = "Population Estimate (as of July 1) - 2017"
         
     }
     else if (index == 8) {
         attribute = "Population Estimate (as of July 1) - 2018"
     }
     return attribute;
 }



