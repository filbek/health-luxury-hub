const treatmentsData = [
  {
    id: 'limb-lengthening',
    title: 'Limb Lengthening Surgery',
    shortDescription: 'Advanced surgical techniques to increase height with minimal recovery time',
    description: 'Our limb lengthening procedures use the latest techniques including LON (Lengthening Over Nail) and PRECICE nail systems. These minimally invasive approaches allow for precise lengthening with reduced recovery time and complications. Our orthopedic surgeons are internationally trained and have performed hundreds of successful procedures.',
    image: 'https://images.unsplash.com/photo-1579684453377-1e4a6007f d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 25000,
    duration: '20-Day',
    tourIncluded: 'Istanbul City Tour',
    includes: [
      'Surgery by Top Orthopedic Surgeons',
      '5-Star Hotel Accommodation',
      'VIP Airport & Hospital Transfers',
      'Post-Op Care & Physical Therapy',
      'Bosphorus Dinner Cruise',
      'Personal Interpreter'
    ],
    featured: true,
    procedures: [
      {
        name: 'LON (Lengthening Over Nail)',
        description: 'A hybrid technique that combines external fixation with an internal nail for faster healing and reduced time with external fixator.',
        price: 25000
      },
      {
        name: 'PRECICE Nail System',
        description: 'An internal lengthening nail controlled by an external remote control device, eliminating the need for external fixators.',
        price: 30000
      },
      {
        name: 'Cosmetic Height Increase',
        description: 'Specialized procedure focusing on aesthetic proportions for those seeking moderate height increase.',
        price: 22000
      }
    ],
    faq: [
      {
        question: 'How much height can I gain with limb lengthening?',
        answer: 'Most patients can safely gain 6-8 cm (2.4-3.1 inches) in one segment (tibias or femurs). Some patients opt for sequential lengthening of both segments for a total gain of 12-15 cm (4.7-5.9 inches).'
      },
      {
        question: 'How long will I need to stay in Istanbul?',
        answer: 'For limb lengthening procedures, we recommend a 20-day initial stay for the surgery and initial recovery. Some patients choose to stay for the entire lengthening period (2-3 months), while others return home and have follow-ups with local orthopedists.'
      },
      {
        question: 'Will I be able to walk during my stay in Istanbul?',
        answer: 'You will begin physical therapy and partial weight-bearing within days after surgery. During your stay, you will use mobility aids (crutches or walker) but will be able to participate in light tourism activities after the initial recovery period.'
      }
    ]
  },
  {
    id: 'obesity-surgery',
    title: 'Obesity Surgery (Gastric Sleeve)',
    shortDescription: 'Minimally invasive weight loss surgery with comprehensive aftercare',
    description: 'Our gastric sleeve procedures are performed laparoscopically by experienced bariatric surgeons, reducing recovery time and scarring. The procedure removes approximately 80% of the stomach, creating a sleeve-shaped stomach that restricts food intake and reduces hunger hormones. Our comprehensive program includes nutritional counseling and long-term follow-up care.',
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 8500,
    duration: '7-Day',
    tourIncluded: 'Istanbul City Tour',
    includes: [
      'Laparoscopic Surgery by Bariatric Specialist',
      'Hotel Accommodation',
      'VIP Transfers',
      'Nutritional Counseling',
      'Sultanahmet & Grand Bazaar Tour',
      '1-Year Follow-up Support'
    ],
    featured: true,
    procedures: [
      {
        name: 'Gastric Sleeve (Sleeve Gastrectomy)',
        description: 'Removal of approximately 80% of the stomach to create a small, sleeve-shaped stomach pouch.',
        price: 8500
      },
      {
        name: 'Gastric Bypass',
        description: 'Creation of a small stomach pouch connected directly to the middle portion of the small intestine.',
        price: 9500
      },
      {
        name: 'Gastric Balloon',
        description: 'Non-surgical placement of a saline-filled silicone balloon in the stomach to limit food intake.',
        price: 4500
      }
    ],
    faq: [
      {
        question: 'How much weight can I expect to lose after gastric sleeve surgery?',
        answer: 'Most patients lose 60-70% of their excess weight within the first year after surgery. Results vary based on adherence to dietary guidelines and lifestyle changes.'
      },
      {
        question: 'Is the gastric sleeve procedure reversible?',
        answer: 'No, gastric sleeve surgery is not reversible as it permanently removes a portion of the stomach. This is why our team conducts thorough evaluations and consultations before recommending this procedure.'
      },
      {
        question: 'When can I return to normal activities after surgery?',
        answer: 'Most patients can return to light activities within 1-2 weeks and normal activities within 3-4 weeks. You will be able to enjoy light tourism activities during the latter part of your stay in Istanbul.'
      }
    ]
  },
  {
    id: 'dental-surgery',
    title: 'Dental & Jaw Surgery (Hollywood Smile)',
    shortDescription: 'Transform your smile with advanced cosmetic dentistry techniques',
    description: 'Our Hollywood Smile packages combine multiple cosmetic dentistry procedures to create a perfect, natural-looking smile. Using high-quality porcelain veneers, crowns, and the latest digital smile design technology, our dental specialists create customized treatment plans for each patient. The procedures are performed in state-of-the-art dental clinics with minimal discomfort.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 6000,
    duration: '5-Day',
    tourIncluded: 'Istanbul Shopping Tour',
    includes: [
      'Digital Smile Design',
      'High-Quality Porcelain Veneers/Crowns',
      'Hotel Accommodation',
      'City Tour & Shopping Experience',
      'VIP Transfers',
      'Lifetime Warranty on Dental Work'
    ],
    featured: true,
    procedures: [
      {
        name: 'Hollywood Smile (Full Mouth Veneers)',
        description: 'Complete smile makeover using porcelain veneers on visible teeth for a perfect, bright smile.',
        price: 6000
      },
      {
        name: 'Dental Implants (Full Arch)',
        description: 'Full arch restoration using dental implants and fixed prosthetics for those missing most or all teeth.',
        price: 12000
      },
      {
        name: 'Orthognathic Surgery',
        description: 'Corrective jaw surgery to address functional and aesthetic issues with jaw alignment.',
        price: 15000
      }
    ],
    faq: [
      {
        question: 'How long does the Hollywood Smile procedure take?',
        answer: 'The complete procedure typically requires 2-3 dental visits over 5-7 days. This includes initial consultation, preparation of teeth, and placement of final veneers or crowns.'
      },
      {
        question: 'Are dental veneers permanent?',
        answer: 'Porcelain veneers typically last 10-15 years with proper care. While the procedure requires removing a small amount of tooth enamel (making it irreversible), veneers can be replaced when needed.'
      },
      {
        question: 'Will my new smile look natural?',
        answer: 'Yes, our dental specialists use digital smile design technology to create veneers that complement your facial features. We use high-quality porcelain materials that mimic natural teeth in both appearance and light reflection properties.'
      }
    ]
  },
  {
    id: 'hair-transplant',
    title: 'Hair Transplant (Sapphire FUE)',
    shortDescription: 'Permanent, natural-looking hair restoration using advanced techniques',
    description: 'Our Sapphire FUE (Follicular Unit Extraction) hair transplant procedures use microincisions with sapphire blades for minimal scarring and faster healing. This advanced technique allows for denser packing of hair follicles and more natural-looking results. The procedure is performed under local anesthesia by specialized surgeons who focus exclusively on hair restoration.',
    image: 'https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 2500,
    duration: '4-Day',
    tourIncluded: 'Cultural Heritage Tour',
    includes: [
      'Sapphire FUE Procedure',
      '5-Star Hotel Accommodation',
      'Transfers & Local Transportation',
      'Hagia Sophia & Topkapi Palace Visit',
      'Post-Procedure Care Kit',
      'Follow-up Consultations'
    ],
    featured: true,
    procedures: [
      {
        name: 'Sapphire FUE Hair Transplant',
        description: 'Advanced FUE technique using sapphire blades for more precise incisions and natural results.',
        price: 2500
      },
      {
        name: 'DHI (Direct Hair Implantation)',
        description: 'No-shave technique using specialized tools to extract and implant hair follicles in one step.',
        price: 3000
      },
      {
        name: 'Beard/Eyebrow Transplantation',
        description: 'Specialized transplantation for facial hair restoration using the same advanced techniques.',
        price: 1800
      }
    ],
    faq: [
      {
        question: 'Is hair transplantation painful?',
        answer: 'The procedure is performed under local anesthesia, so you won\'t feel pain during the transplant. Some patients experience mild discomfort for 1-2 days after the procedure, which is easily managed with medication.'
      },
      {
        question: 'When will I see results from my hair transplant?',
        answer: 'Initial transplanted hair will fall out within 2-3 weeks, which is normal. New growth begins around 3-4 months, with significant results visible at 6-8 months. Final results are typically seen 12-15 months after the procedure.'
      },
      {
        question: 'How many grafts will I need?',
        answer: 'The number of grafts depends on your degree of hair loss and desired density. Our surgeons will assess your donor area capacity and recommend the appropriate number during your consultation. Most procedures range from 2,000-4,000 grafts.'
      }
    ]
  },
  {
    id: 'organ-cancer-treatments',
    title: 'Organ Cancer Treatments',
    shortDescription: 'Comprehensive cancer care with cutting-edge treatment protocols',
    description: 'Our organ cancer treatment programs offer comprehensive care for liver, colon, pancreatic, and other organ cancers. Treatment plans are developed by multidisciplinary teams including oncologists, surgeons, and radiologists. We utilize the latest technologies including robotic surgery, targeted therapies, and immunotherapy approaches customized for each patient\'s specific condition.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 'Price on Request',
    duration: 'Custom Long-Term',
    tourIncluded: 'Istanbul Cultural Package',
    includes: [
      'Multidisciplinary Treatment Team',
      'Robotic & Minimally Invasive Surgery Options',
      'Long-Term Accommodation Arrangements',
      'Personalized Care Coordinator',
      'Cultural Activities During Recovery Periods',
      'Comprehensive Follow-up Care'
    ],
    featured: false,
    procedures: [
      {
        name: 'Liver Cancer Treatment',
        description: 'Comprehensive treatment including surgical resection, ablation, targeted therapy, and transplantation when appropriate.',
        price: 'From $20,000'
      },
      {
        name: 'Colorectal Cancer Treatment',
        description: 'Multidisciplinary approach including robotic surgery, chemotherapy, and radiation therapy as needed.',
        price: 'From $18,000'
      },
      {
        name: 'Pancreatic Cancer Treatment',
        description: 'Specialized protocols including Whipple procedure, targeted therapies, and innovative clinical trials when appropriate.',
        price: 'From $25,000'
      }
    ],
    faq: [
      {
        question: 'How are treatment plans developed for cancer patients?',
        answer: 'Each patient\'s case is reviewed by a multidisciplinary tumor board including oncologists, surgeons, radiologists, and other specialists. Treatment plans are personalized based on cancer type, stage, genetic factors, and patient preferences.'
      },
      {
        question: 'What advanced technologies are available for cancer treatment?',
        answer: 'Our partner hospitals offer robotic surgical systems, TomoTherapy, CyberKnife radiosurgery, genetic testing for targeted therapies, and access to international clinical trials for eligible patients.'
      },
      {
        question: 'How long will I need to stay in Istanbul for cancer treatment?',
        answer: 'The length of stay varies significantly based on the treatment plan. Surgical procedures may require 2-3 weeks, while chemotherapy protocols might span several months. Our team can arrange long-term accommodations and intermittent treatment schedules when appropriate.'
      }
    ]
  },
  {
    id: 'plastic-surgery',
    title: 'Plastic & Aesthetic Surgeries',
    shortDescription: 'Transform your appearance with advanced cosmetic procedures',
    description: 'Our plastic and aesthetic surgery packages offer a wide range of procedures performed by board-certified plastic surgeons. From rhinoplasty and facelifts to body contouring procedures like liposuction and Brazilian butt lifts, our surgeons combine technical expertise with an artistic eye to create natural-looking results. All procedures are performed in fully accredited hospitals with comprehensive aftercare.',
    image: 'https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 4000,
    duration: '7-Day',
    tourIncluded: 'Bosphorus Luxury Tour',
    includes: [
      'Consultation with Board-Certified Plastic Surgeon',
      'Procedure in Accredited Hospital',
      'Luxury Hotel Accommodation',
      'VIP Transfers',
      'Bosphorus Cruise Experience',
      'Post-Operative Care & Follow-up'
    ],
    featured: false,
    procedures: [
      {
        name: 'Rhinoplasty (Nose Reshaping)',
        description: 'Surgical reshaping of the nose to improve appearance and often breathing function.',
        price: 4000
      },
      {
        name: 'Liposuction & Body Contouring',
        description: 'Removal of excess fat deposits and body sculpting for improved contours.',
        price: 4500
      },
      {
        name: 'Facelift & Neck Lift',
        description: 'Comprehensive rejuvenation of the face and neck for a more youthful appearance.',
        price: 6500
      }
    ],
    faq: [
      {
        question: 'How long is the recovery period after plastic surgery?',
        answer: 'Recovery times vary by procedure. Minimally invasive procedures may require only 3-5 days before you can resume light activities, while more extensive surgeries may require 10-14 days of recovery before traveling home.'
      },
      {
        question: 'Will there be visible scarring after my procedure?',
        answer: 'Our surgeons use advanced techniques to minimize scarring, placing incisions in natural creases or less visible areas when possible. Most scars fade significantly over time, and we provide comprehensive scar care instructions.'
      },
      {
        question: 'When can I resume normal activities after plastic surgery?',
        answer: 'Light activities can typically be resumed within 1-2 weeks, depending on the procedure. More strenuous activities and exercise should be avoided for 4-6 weeks. During your stay in Istanbul, you\'ll be able to enjoy light tourism activities after the initial recovery period.'
      }
    ]
  },
  {
    id: 'cardiovascular-surgeries',
    title: 'Cardiovascular Surgeries',
    shortDescription: 'Advanced heart procedures with minimally invasive options',
    description: 'Our cardiovascular surgery programs offer both traditional and minimally invasive options for treating heart conditions. From coronary artery bypass grafting (CABG) to valve repairs and replacements, our cardiac surgeons use the latest techniques to improve outcomes and reduce recovery times. All procedures are performed in specialized cardiac centers with dedicated ICUs and rehabilitation programs.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 15000,
    duration: '10-Day',
    tourIncluded: 'Istanbul Historical Tour',
    includes: [
      'Comprehensive Cardiac Evaluation',
      'Procedure by Specialized Cardiac Surgeon',
      'ICU and Hospital Stay',
      'Hotel Accommodation During Recovery',
      'Cardiac Rehabilitation Program',
      'Historical Istanbul Tour During Recovery'
    ],
    featured: false,
    procedures: [
      {
        name: 'Coronary Artery Bypass Grafting (CABG)',
        description: 'Surgical procedure to improve blood flow to the heart by bypassing blocked coronary arteries.',
        price: 15000
      },
      {
        name: 'Heart Valve Repair/Replacement',
        description: 'Surgical correction of damaged or malfunctioning heart valves using mechanical or biological valves.',
        price: 18000
      },
      {
        name: 'Minimally Invasive Cardiac Procedures',
        description: 'Advanced techniques including TAVR (Transcatheter Aortic Valve Replacement) and minimally invasive bypass surgery.',
        price: 20000
      }
    ],
    faq: [
      {
        question: 'How do I know if I\'m a candidate for minimally invasive heart surgery?',
        answer: 'Candidacy depends on your specific cardiac condition, anatomy, previous surgeries, and overall health. Our cardiac team will perform comprehensive evaluations including advanced imaging to determine the most appropriate approach for your situation.'
      },
      {
        question: 'What is the success rate for cardiac procedures in your partner hospitals?',
        answer: 'Our partner cardiac centers maintain success rates comparable to leading international institutions, with mortality rates below international averages for most procedures. Specific statistics for your procedure will be discussed during consultation.'
      },
      {
        question: 'How long will I need to stay in Istanbul after cardiac surgery?',
        answer: 'Most cardiac procedures require a hospital stay of 5-7 days, followed by a recovery period of 7-10 days before flying home. Our packages include accommodation for this entire period, with medical monitoring during your recovery.'
      }
    ]
  },
  {
    id: 'eye-surgeries',
    title: 'Eye Surgeries (LASIK, Cataract)',
    shortDescription: 'Restore clear vision with advanced ophthalmological procedures',
    description: 'Our ophthalmology packages offer state-of-the-art procedures for vision correction and eye conditions. Using the latest laser technologies for LASIK and premium intraocular lenses for cataract surgery, our eye specialists provide customized treatment plans for optimal visual outcomes. All procedures are performed in specialized eye centers with advanced diagnostic and surgical equipment.',
    image: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: 2000,
    duration: '3-Day',
    tourIncluded: 'Istanbul Museum Pass',
    includes: [
      'Comprehensive Eye Examination',
      'Procedure by Specialized Ophthalmologist',
      'Hotel Accommodation',
      'VIP Transfers',
      'Istanbul Museum Pass',
      'Post-Operative Medications & Follow-up'
    ],
    featured: false,
    procedures: [
      {
        name: 'LASIK Eye Surgery',
        description: 'Laser vision correction procedure to treat nearsightedness, farsightedness, and astigmatism.',
        price: 2000
      },
      {
        name: 'Cataract Surgery with Premium IOL',
        description: 'Removal of clouded lens and replacement with premium intraocular lens for improved vision.',
        price: 2500
      },
      {
        name: 'Refractive Lens Exchange',
        description: 'Lens replacement procedure for those with presbyopia or high refractive errors not suitable for LASIK.',
        price: 3000
      }
    ],
    faq: [
      {
        question: 'How soon after LASIK can I fly home?',
        answer: 'Most patients can fly 2-3 days after LASIK surgery. Your ophthalmologist will perform a follow-up examination before clearing you for travel. During this short recovery period, you can enjoy light tourism activities with proper eye protection.'
      },
      {
        question: 'What type of intraocular lenses are available for cataract surgery?',
        answer: 'We offer a full range of premium IOLs including multifocal lenses that correct both distance and near vision, toric lenses for astigmatism correction, and accommodating lenses that mimic the eye\'s natural focusing ability.'
      },
      {
        question: 'Will I need reading glasses after my eye procedure?',
        answer: 'This depends on the procedure and lens options chosen. LASIK typically corrects distance vision, and patients over 40 may still need reading glasses. For cataract surgery, multifocal IOLs can reduce or eliminate the need for reading glasses, though this will be discussed during your consultation.'
      }
    ]
  }
];

export default treatmentsData;
