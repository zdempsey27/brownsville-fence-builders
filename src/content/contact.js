// Contact Page Content - Brownsville Fence Builders

export const contactContent = {
  hero: {
    heading: "Contact Us",
    subtitle: "Get in touch for a free estimate on your fencing project.",
  },
  main: {
    heading: "Get In Touch",
    content: "Ready to discuss your fence project? Fill out the form below or give us a call. We typically respond within one business day.",
  },
  contactInfo: {
    phoneLabel: "📞 Phone",
    addressLabel: "📍 Service Area",
    addressText: "{city}, {stateAbbr} and surrounding communities",
    hoursLabel: "⏰ Hours",
    hours: "Monday – Friday: 7am – 6pm\nSaturday: 8am – 4pm\nSunday: Closed",
    preferCallHeading: "Prefer to Call?",
  },
  form: {
    heading: "Request a Free Estimate",
    submitText: "Submit Request",
    fields: {
      name: "Name *",
      email: "Email *",
      phone: "Phone *",
      address: "Property Address",
      addressPlaceholder: "Where is the project located?",
      service: "Service Interested In *",
      message: "Tell Us About Your Project",
      messagePlaceholder: "Approximate fence length, material preference, any specific needs or concerns...",
      timeline: "When do you want to start?",
    },
    timelineOptions: [
      { value: "", label: "Select timeline..." },
      { value: "asap", label: "As soon as possible" },
      { value: "2-weeks", label: "Within 2 weeks" },
      { value: "month", label: "Within a month" },
      { value: "planning", label: "Just planning ahead" },
    ],
  },
};

export default contactContent;
