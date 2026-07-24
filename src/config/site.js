// Central place for all site-wide SEO / business identity values.
// When the custom domain is ready, change SITE_URL here — every canonical
// tag, Open Graph tag, sitemap entry, and JSON-LD block reads from this file.
export const SITE_URL = 'https://priyanka-tl.github.io/varahi-eye-clinic-chennai';

export const SITE_NAME = 'Sree Varahi Eye Clinic';

export const DOCTOR = {
  name: 'Dr. Jeyalakshmi Govindan',
  credentials: 'MBBS, DO, DNB',
  specialty: 'Ophthalmologist — Cataract & Glaucoma Specialist',
  image: '/images/doctor_photo/drJayalakshmiMainPage.jpg',
};

export const CONTACT = {
  phone: '+919360041641',
  phoneDisplay: '+91 93600 41641',
  email: 'drjairajesh@yahoo.com',
  whatsapp: 'https://wa.me/919360041641',
  instagram: 'https://www.instagram.com/drjairajesh?igsh=bXExamg4emY2emM5',
};

// All five consultation centers. Kept here so both the Contact page UI and
// the JSON-LD LocalBusiness structured data stay in sync — one source of
// truth instead of duplicated address/hours strings.
export const LOCATIONS = [
  {
    id: 't-nagar',
    name: 'Sree Varahi Eye Clinic (T. Nagar Branch)',
    shortName: 'T. Nagar',
    role: 'Main Clinic Branch',
    room: 'Aikiya Health Care, Flat GB, Swathi Court',
    streetAddress: '43/2, Vijayaraghava Rd, T. Nagar',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600017',
    landmark: 'Near Vani Mahal',
    timing: 'Mon to Sat: Evening 4:30 PM - 7:00 PM',
    badge: 'Evening Clinic (Mon-Sat)',
    note: 'Sunday Closed (Prior appointment available for Sunday)',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Sree+Varahi+Eye+Clinic+43+Vijayaraghava+Road+T+Nagar+Chennai+600017',
    geo: { latitude: 13.0435465, longitude: 80.2429266 },
    openingHours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '16:30', closes: '19:00' }],
    isPrimary: true,
    isFeatured: true,
  },
  {
    id: 'kilpauk',
    name: 'Kumaran Hospitals (P) Ltd',
    shortName: 'Kilpauk',
    role: 'Visiting Glaucoma Consultant',
    room: 'Room no.11, Ground floor',
    streetAddress: '#214, P.H. Road, Kilpauk',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600010',
    landmark: 'Next to Sangam theatre',
    timing: 'Mon to Sat (except Thursdays): Morning 9:30 AM - 2:00 PM',
    badge: 'Morning Clinic (Mon-Sat except Thu)',
    mapLink: 'https://www.google.com/maps/search/Kumaran+Hospitals+214+PH+Road+Kilpauk+Chennai',
    openingHours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'], opens: '09:30', closes: '14:00' }],
    isPrimary: true,
  },
  {
    id: 'taramani',
    name: 'The Voluntary Health Services (VHS) Multispeciality Hospital',
    shortName: 'Taramani',
    role: 'Visiting Consultant',
    room: 'Ophthalmology Dept',
    streetAddress: 'State Highway 49A, Taramani',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600113',
    landmark: 'Near Madhya Kailash Temple',
    timing: 'Thursdays: 10:00 AM - 2:00 PM',
    badge: 'Thursday Special Clinic',
    mapLink: 'https://maps.app.goo.gl/DZtccGNZ1kWPEw3T8',
    openingHours: [{ days: ['Thursday'], opens: '10:00', closes: '14:00' }],
  },
  {
    id: 'virugambakkam',
    name: 'Keshava Eye Care',
    shortName: 'Virugambakkam',
    role: 'Visiting Consultant (By Appointment)',
    room: '1st Floor, 5/40, AVM Ave 1st Main Rd',
    streetAddress: 'AVM Avenue, Virugambakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600092',
    timing: 'Tuesday & Friday: 2:30 PM (By Appointment)',
    badge: 'Tue & Fri (By Appointment)',
    mapLink: 'https://maps.app.goo.gl/VJcFHfzD6y3VpPpB8?g_st=iw',
    openingHours: [{ days: ['Tuesday', 'Friday'], opens: '14:30', closes: '18:00' }],
  },
  {
    id: 'annanagar',
    name: 'Dhanvantri Eye Care',
    shortName: 'Anna Nagar',
    role: 'Visiting Consultant (By Appointment)',
    room: 'OLD #18, N Main Rd',
    streetAddress: 'Anna Nagar West Extension',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600101',
    timing: 'Monday: 2:30 PM (By Appointment)',
    badge: 'Monday (By Appointment)',
    mapLink: 'https://maps.app.goo.gl/phXjhwpVCpZzd6Br7?g_st=aw',
    openingHours: [{ days: ['Monday'], opens: '14:30', closes: '18:00' }],
  },
];

// Single combined address line for UI display (schema uses the split fields above).
LOCATIONS.forEach((loc) => {
  loc.address = `${loc.streetAddress}, ${loc.addressLocality} - ${loc.postalCode}`;
});

export const PRIMARY_LOCATION = LOCATIONS[0];

export const SERVICES = [
  'Glasses Checkup & Dispensing',
  'Cataract Surgery',
  'Glaucoma Screening & Management',
  'Computer Vision Syndrome Counseling',
  'Diabetic Eye Screening',
];
