import { supabaseUrl } from "../services/supabase.js";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/bike-images/`;

export const bikes = [
  {
    // BIKE 1
    brand: "BMW",
    model: "R 1300 GS",
    price: 250,
    hp: 147,
    capacity: 1300,
    weight: 237,
    seatHeight: "800 - 850",
    image: imageUrl + "bmw_r_1300_gs.jpg",
    year: 2024,
    equipment:
      "TFT display with BMW Motorrad Connectivity, LED matrix headlight, Dynamic Traction Control (DTC), BMW Motorrad full integral ABS Pro, 4 riding modes, Hill Start Control (HSC), Dynamic Brake Control (DBC), Dynamic Cruise Control (DCC), Engine drag torque control (MSR), Tire Pressure Monitor (TPM), KeylessRide, Heated grips, Smartphone charging compartment with a USB charging socket, Hand protection with integrated indicator lamps, DSA (electronic suspension with load compensation and spring rate adjustment), Adaptive vehicle height control, Heated seat for rider and passenger, Headlight Pro, Additional LED headlight, Riding Assistant, Forged enduro wheels, Central locking system",
    description:
      "The BMW R 1300 GS embodies the pure essence of the GS spirit. Its relatively low weight, combined with the powerful 145 hp boxer and generous 1300 ccm displacement make it the our best in the large touring enduro segment. The goal during development was maximal reduction instead of ever-increasing size. The result: inimitable handling. Despite its low complexity, it has more comprehensive standard equipment than ever before. Learn everything you need to know about the technical data and extensive equipment options here.",
  },
  {
    // BIKE 2
    brand: "BMW",
    model: "R 1250 GS",
    price: 190,
    hp: 136,
    capacity: 1254,
    weight: 249,
    seatHeight: "870",
    image: imageUrl + "bmw_1250GS.jpg",
    year: 2021,
    equipment:
      "TFT colour display with connectivity, Full-LED headlight, DTC (Dynamic Traction Control), Integral ABS Pro (inclination-optimised ABS), 3 riding modes, HSC (Hill Start Control), USB charging socket, Dynamic ESA, Seat heating (rider and passenger), Light package (e.g. with adaptive cornering light and cruising light), Auxiliary LED lamps, Enduro-Package (with engine guard and handlebar riser), Sport silencer, Riding Mode Pro, riding mode pre selection (individualisation of numbers of riding modes), automated hill start control pro (HSC Pro), dynamic brake assistant DBC and engine brake control MSRm",
    description:
      "Whether on extended tours or off-road: The BMW R 1250 GS with its boxer engine combines driving dynamics and comfort to create a unique experience. Making perfected technology into perfect riding pleasure. Find out all about the technical data and equipment here. ",
  },
  {
    // BIKE 3
    brand: "Honda",
    model: "Africa Twin CRF110L",
    price: 180,
    hp: 100,
    capacity: 1084,
    weight: 231,
    seatHeight: "850 - 870",
    image: imageUrl + "honda_africa-twin.jpg",
    year: 2025,
    equipment:
      "2-channel with IMU Adjustable ABS with on-road and off-road setting, LCD Meter, TFT 6.5inch touch panel multi information display, Bluetooth audio and Apple CarPlay/Android Auto (wired), USB Type A - 1.5A, Cruise Control",
    description:
      "The Africa Twin, the amazingly handling adventure bike it’s always been – powerful enough to push to the limit – but with extra low-end torque for everyday riding. A new adjustable screen makes those road rides a whole lot more comfortable. Tubeless tyres are easier to repair. And the optional electronically controlled suspension on the Africa Twin ES, with Showa EERA™, suddenly opens up new horizons for adventure.",
  },
  {
    // BIKE 4
    brand: "Suzuki",
    model: "V Strom 650XTA",
    price: 110,
    hp: 71,
    capacity: 650,
    weight: 216,
    seatHeight: "835",
    image: imageUrl + "suzuki_v-strom-650xt.png",
    year: 2024,
    equipment:
      "Immobilizer system, ABS, Low RPM Assist, Suzuki Easy Start System, Traction control 2 positions/OFF",
    description:
      "With perfect ergonomics, a 650 cc V-twin and extra rugged equipment, the V-Strom 650XTA – also known as the DL650X – is an all-roader that will not let anything or anyone stop you.",
  },
  {
    // BIKE 5
    brand: "Ducati",
    model: "Multistrada V4 Rally",
    price: 180,
    hp: 170,
    capacity: 1158,
    weight: 238,
    seatHeight: "840 - 860",
    image: imageUrl + "ducati_multistrada-v4-rally.jpg",
    year: 2024,
    equipment:
      'Riding Mode, Power Mode, ABS Cornering, Ducati Traction Control, Ducati Wheelie Control, Ducati Cornering Light, Vehicle Hold Control, Daytime Running Light, Ducati Brake Light EVO, Ducati Quick Shift, Cruise control, Backlit handlebar switches, 5" TFT colour display, Full LED headlight',
    description:
      "The Multistrada V4 Rally is the ideal travel companion in any situation, as easy and intuitive in the urban jungle as it is on more intrepid routes. High-performance, sturdy, and reliable with its V4 Granturismo engine and extended service intervals, it will carry you wherever your sense of adventure leads.",
  },
  {
    // BIKE 6
    brand: "KTM",
    model: "1290 Super Adventure S",
    price: 160,
    hp: 160,
    capacity: 1300,
    weight: 227,
    seatHeight: "849 - 869",
    image: imageUrl + "ktm-1290-super-adventure-s.jpg",
    year: 2022,
    equipment:
      "Semi Active Suspension Technology (SAT), 5 riding modes, Adaptive Cruise Control (ACC), 6-axis lean angle sensor, ABS, Motorcycle Traction Control (MTC), Tilt-adjustable 7” TFT display, Quickshifter+, LED headlight",
    description:
      "KTM 1290 SUPER ADVENTURE S sets the benchmark for sporty Adventure travel. Not only does it continue to deliver class-leading technology like Adaptive Cruise Control and Semi-active Suspension to the street, but it also brings real-world usability to the dirt. Rider-focused ergonomics, 160 hp, and 138 Nm aside, it exists to make short work of long distances. Think of the KTM 1290 SUPER ADVENTURE S as a cruise missile - smart, stable and lightning fast.",
  },
  {
    // BIKE 7
    brand: "Yamaha",
    model: "Super Tenere ES",
    price: 170,
    hp: 112,
    capacity: 1200,
    weight: 265,
    seatHeight: "845 - 870",
    image: imageUrl + "yamaha_super_tenere.jpg",
    year: 2024,
    equipment:
      "Lightweight magnesium cylinder head and clutch covers, Centre and side stands, 5-position adjustable front brake lever, 4-position adjustable clutch lever, Low maintenance 11 amp hour, sealed battery, Brilliant LED taillight, Compact LED turn signals, Rugged plastic handlebar mounted brush guards, Dash board mounted 12 volt DC outlet",
    description:
      "Sophistication is the name of the game with the Super Ténéré ES. Does the convenience of adjusting your suspension without ever getting off your bike sound interesting? With the simple push of a button, you can adjust both preload and damping settings. Add heated grips and a cruise control system to the mix and you have a machine that is truly worthy of being called the Ultimate Transcontinental Adventurer.",
  },
  {
    // BIKE 8
    brand: "Triumph",
    model: "Tiger 1200 GT Explorer",
    price: 150,
    hp: 150,
    capacity: 1160,
    weight: 255,
    seatHeight: "850 - 870",
    image: imageUrl + "triumph-tiger-1200-gt-explorer-red.avif",
    year: 2024,
    equipment:
      "Blind spot radar, Cruise Control, Triumph Shift Assist (upshifting and downshifting), Hill hold assistance, Tire Pressure Monitoring System (TPMS), Adaptive cornering light, Integral LED lighting with DRL headlamp, LED auxiliary lighting, 7 inch TFT instrument cluster with My Triumph connectivity system, Optimized cornering ABS and traction control, Handguards, aluminum crankcase protection plate, crash bars, Handle heating, Heated driver and passenger seat",
    description:
      "The GT Explorer is packed with technology and, combined with its 30-litre fuel tank, brings unprecedented practicality, comfort and power to the road-focused adventure motorcycle category.",
  },
];
