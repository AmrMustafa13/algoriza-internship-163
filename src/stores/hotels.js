import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useHotelsStore = defineStore("hotels", () => {
  const searchQueries = ref(
    localStorage.getItem("searchQueries")
      ? JSON.parse(localStorage.getItem("searchQueries"))
      : {}
  );

  const currentPage = ref(localStorage.getItem("currentPage") || 1);
  const totalPages = ref(localStorage.getItem("totalPages") || 0);
  const totalResults = ref(localStorage.getItem("totalResults") || 0);

  const allHotels = ref(
    localStorage.getItem("hotels")
      ? JSON.parse(localStorage.getItem("hotels"))
      : []
  );

  const isLoading = ref(false);

  const sortByOption = ref(
    localStorage.getItem("sortByOption") || "popularity"
  );

  const budgetFilter = ref(
    JSON.parse(localStorage.getItem("budgetFilter")) || {
      minBudget: 0,
      maxBudget: Infinity,
    }
  );

  const fixedBudgetFilter = ref(
    budgetFilter.value.minBudget + "-" + budgetFilter.value.maxBudget
  );

  const propertyNameFilter = ref("");

  const ratingFilter = ref(0);

  const tempHotel = ref({
    ufi: -302053,
    hotel_id: 8985089,
    hotel_name: "Morning Star Guesthouse",
    url: "https://www.booking.com/hotel/eg/morning-star-guest-house.html",
    hotel_name_trans: "",
    review_nr: 108,
    arrival_date: "2024-01-20",
    departure_date: "2024-03-27",
    price_transparency_mode: "none",
    accommodation_type_name: "Guesthouses",
    latitude: 27.8888899725518,
    longitude: 34.2975836927502,
    address: "Sharm El Sheikh - Dahab Road",
    address_trans: "",
    city: "Qesm Sharm Ash Sheikh",
    city_trans: "Sharm El Sheikh",
    city_in_trans: "in Sharm El Sheikh",
    city_name_en: "Sharm El Sheikh",
    district: "",
    countrycode: "eg",
    distance_to_cc: 4.27458256337596,
    default_language: "en-us",
    country_trans: "Egypt",
    currency_code: "USD",
    zip: "44026",
    timezone: "Africa/Cairo",
    rare_find_state: "NOT_RARE",
    soldout: 0,
    available_rooms: 1,
    max_rooms_in_reservation: 10,
    average_room_size_for_ufi_m2: "16.16",
    is_family_friendly: 0,
    is_closed: 0,
    is_crimea: 0,
    is_hotel_ctrip: 0,
    is_price_transparent: 0,
    is_genius_deal: 0,
    is_cash_accepted_check_enabled: 1,
    qualifies_for_no_cc_reservation: 0,
    hotel_include_breakfast: 0,
    cc1: "eg",
    family_facilities: ["Family rooms"],
    product_price_breakdown: {
      discounted_amount: {
        amount_unrounded: "US$245",
        amount_rounded: "US$245",
        currency: "USD",
        value: 245,
      },
      strikethrough_amount_per_night: {
        amount_unrounded: "US$24.50",
        value: 24.5,
        currency: "USD",
        amount_rounded: "US$25",
      },
      gross_amount_hotel_currency: {
        amount_unrounded: "US$980",
        currency: "USD",
        value: 980,
        amount_rounded: "US$980",
      },
      included_taxes_and_charges_amount: {
        amount_unrounded: "US$0",
        amount_rounded: "US$0",
        value: 0,
        currency: "USD",
      },
      charges_details: {
        mode: "extra_charges",
        amount: {
          value: 199,
          currency: "USD",
        },
        translated_copy: "+US$199 taxes and fees",
      },
      net_amount: {
        amount_unrounded: "US$980",
        currency: "USD",
        value: 980,
        amount_rounded: "US$980",
      },
      gross_amount: {
        amount_unrounded: "US$980",
        currency: "USD",
        value: 980,
        amount_rounded: "US$980",
      },
      has_long_stays_monthly_rate_price: 0,
      gross_amount_per_night: {
        amount_unrounded: "US$19.60",
        currency: "USD",
        value: 19.6,
        amount_rounded: "US$20",
      },
      excluded_amount: {
        amount_rounded: "US$199",
        currency: "USD",
        value: 199,
        amount_unrounded: "US$199",
      },
      all_inclusive_amount: {
        currency: "USD",
        value: 1179,
        amount_rounded: "US$1,179",
        amount_unrounded: "US$1,179",
      },
      benefits: [
        {
          icon: null,
          badge_variant: "constructive",
          name: "20% off",
          details:
            "You’re getting a reduced rate because this property is offering a discount.",
          identifier: "combined-discount",
          kind: "badge",
        },
        {
          icon: null,
          badge_variant: "constructive",
          details:
            "You’re getting a reduced rate because this property is offering a discount when you book from a mobile device.",
          identifier: "mobile-rate",
          name: "Mobile-only price",
          kind: "badge",
        },
      ],
      has_long_stays_weekly_rate_price: 0,
      items: [
        {
          inclusion_type: "excluded",
          item_amount: {
            amount_unrounded: "US$137.20",
            currency: "USD",
            value: 137.2,
            amount_rounded: "US$137",
          },
          kind: "charge",
          details: "14 % TAX",
          name: "TAX",
          base: {
            percentage: 14,
            kind: "percentage",
          },
        },
        {
          base: {
            kind: "percentage",
            percentage: 1,
          },
          name: "City tax",
          details: "1 % City tax",
          kind: "charge",
          item_amount: {
            amount_unrounded: "US$9.80",
            amount_rounded: "US$10",
            currency: "USD",
            value: 9.8,
          },
          inclusion_type: "excluded",
        },
        {
          base: {
            base_amount: 1,
            kind: "per_night",
          },
          name: "Cleaning fee",
          details: "You don't pay the cleaning fee thanks to Genius",
          kind: "charge",
          item_amount: {
            amount_unrounded: "US$50",
            value: 50,
            currency: "USD",
            amount_rounded: "US$50",
          },
          inclusion_type: "excluded",
        },
        {
          name: "Service charge",
          details: null,
          base: {
            kind: "per_stay",
            base_amount: 2,
          },
          item_amount: {
            amount_unrounded: "US$2",
            amount_rounded: "US$2",
            value: 2,
            currency: "USD",
          },
          inclusion_type: "excluded",
          kind: "charge",
        },
        {
          kind: "discount",
          item_amount: {
            amount_rounded: "US$245",
            currency: "USD",
            value: 245,
            amount_unrounded: "US$245",
          },
          base: {
            kind: "rate",
          },
          name: "Mobile-only price",
          identifier: "mobile-discount",
          details:
            "You're getting a reduced rate because you're using a mobile device.",
        },
      ],
      nr_stays: 1,
      strikethrough_amount: {
        value: 1225,
        currency: "USD",
        amount_rounded: "US$1,225",
        amount_unrounded: "US$1,225",
      },
    },
    composite_price_breakdown: {
      gross_amount: {
        amount_unrounded: "US$980",
        amount_rounded: "US$980",
        currency: "USD",
        value: 980,
      },
      net_amount: {
        value: 980,
        currency: "USD",
        amount_rounded: "US$980",
        amount_unrounded: "US$980",
      },
      gross_amount_per_night: {
        amount_rounded: "US$20",
        value: 19.6,
        currency: "USD",
        amount_unrounded: "US$19.60",
      },
      has_long_stays_monthly_rate_price: 0,
      excluded_amount: {
        amount_rounded: "US$199",
        currency: "USD",
        value: 199,
        amount_unrounded: "US$199",
      },
      benefits: [
        {
          kind: "badge",
          details:
            "You’re getting a reduced rate because this property is offering a discount.",
          identifier: "combined-discount",
          name: "20% off",
          badge_variant: "constructive",
          icon: null,
        },
        {
          icon: null,
          badge_variant: "constructive",
          kind: "badge",
          name: "Mobile-only price",
          details:
            "You’re getting a reduced rate because this property is offering a discount when you book from a mobile device.",
          identifier: "mobile-rate",
        },
      ],
      all_inclusive_amount: {
        value: 1179,
        currency: "USD",
        amount_rounded: "US$1,179",
        amount_unrounded: "US$1,179",
      },
      items: [
        {
          base: {
            percentage: 14,
            kind: "percentage",
          },
          details: "14 % TAX",
          name: "TAX",
          kind: "charge",
          inclusion_type: "excluded",
          item_amount: {
            amount_unrounded: "US$137.20",
            value: 137.2,
            currency: "USD",
            amount_rounded: "US$137",
          },
        },
        {
          inclusion_type: "excluded",
          item_amount: {
            amount_unrounded: "US$9.80",
            currency: "USD",
            value: 9.8,
            amount_rounded: "US$10",
          },
          kind: "charge",
          details: "1 % City tax",
          name: "City tax",
          base: {
            percentage: 1,
            kind: "percentage",
          },
        },
        {
          base: {
            base_amount: 2,
            kind: "per_stay",
          },
          details: null,
          name: "Service charge",
          kind: "charge",
          inclusion_type: "excluded",
          item_amount: {
            amount_rounded: "US$2",
            value: 2,
            currency: "USD",
            amount_unrounded: "US$2",
          },
        },
        {
          kind: "charge",
          inclusion_type: "excluded",
          item_amount: {
            value: 50,
            currency: "USD",
            amount_rounded: "US$50",
            amount_unrounded: "US$50",
          },
          base: {
            base_amount: 1,
            kind: "per_night",
          },
          details: "You don't pay the cleaning fee thanks to Genius",
          name: "Cleaning fee",
        },
        {
          base: {
            kind: "rate",
          },
          identifier: "mobile-discount",
          details:
            "You're getting a reduced rate because you're using a mobile device.",
          name: "Mobile-only price",
          kind: "discount",
          item_amount: {
            amount_unrounded: "US$245",
            amount_rounded: "US$245",
            value: 245,
            currency: "USD",
          },
        },
      ],
      has_long_stays_weekly_rate_price: 0,
      strikethrough_amount: {
        value: 1225,
        currency: "USD",
        amount_rounded: "US$1,225",
        amount_unrounded: "US$1,225",
      },
      discounted_amount: {
        amount_rounded: "US$245",
        currency: "USD",
        value: 245,
        amount_unrounded: "US$245",
      },
      strikethrough_amount_per_night: {
        amount_unrounded: "US$24.50",
        value: 24.5,
        currency: "USD",
        amount_rounded: "US$25",
      },
      gross_amount_hotel_currency: {
        amount_unrounded: "US$980",
        amount_rounded: "US$980",
        value: 980,
        currency: "USD",
      },
      included_taxes_and_charges_amount: {
        amount_rounded: "US$0",
        value: 0,
        currency: "USD",
        amount_unrounded: "US$0",
      },
      charges_details: {
        translated_copy: "+US$199 taxes and fees",
        amount: {
          value: 199,
          currency: "USD",
        },
        mode: "extra_charges",
      },
    },
    property_highlight_strip: [],
    sustainability: {
      sustainability_page: {
        level_details:
          "This property has told us they’re making large investments and efforts toward sustainability by taking steps that can have environmental and social impacts. We’ve worked with experts including Travalyst and Sustainalize to create the Travel Sustainable program – making it easier for you to experience the world more sustainably.",
        description:
          "These are the steps this property has taken to provide more sustainable and eco-friendly travel:",
        level: "L3",
        tier: "gold",
        efforts: [
          {
            title: "Waste",
            icon: "recycling_sign",
            steps: [
              "Single-use shampoo, conditioner, and body wash bottles not used",
              "Single-use plastic straws not used",
              "Single-use plastic cups not used",
              "Single-use plastic water bottles not used",
              "Single-use plastic bottles not used",
              "Single-use plastic cutlery/plates not used",
              "Water cooler/dispenser",
              "Single-use plastic stirrers not used",
              "Recycling bins available to guests and waste is recycled",
            ],
          },
          {
            title: "Water",
            steps: [
              "Option to reuse towels",
              "Option to opt out of daily room cleaning",
              "Water-efficient toilets",
              "Water-efficient showers",
            ],
            icon: "blood_drop",
          },
          {
            title: "Energy and greenhouse gases",
            steps: [
              "Most food provided at the property is locally sourced",
              "Most lighting throughout property uses energy-efficient LED bulbs",
              "The property makes efforts to reduce food waste",
              "Vegetarian menu options available",
              "Vegan menu options available ",
              "100% renewable electricity used throughout",
            ],
            icon: "renewable_energy_charging",
          },
          {
            icon: "group",
            steps: [
              "Invests a percentage of revenue back into community projects or sustainability projects",
              "Tours and activities organized by local guides and businesses",
              "Local artists are offered a platform to display their talents",
              "Provide guests with info about local ecosystems, history, culture, and visitor etiquette",
            ],
            title: "Destination and community",
          },
          {
            title: "Nature",
            steps: [
              "Green spaces like (rooftop) gardens at the property",
              "Most food provided is organic",
            ],
            icon: "tree",
          },
        ],
        sustainable_facility_count: 25,
        has_programmes: 0,
        cta: "Read more about Travel Sustainable",
        title: "Sustainability steps",
      },
      hotel_page: {
        has_badge: 1,
        cta: "Read more",
        title: "Travel Sustainable Level 3",
        description:
          "This property is part of the Travel Sustainable program, which means it’s taken significant steps to make your stay more sustainable.",
      },
      sustainability_level: {
        name: "L3",
        id: 3,
        title: "Travel Sustainable Level 3",
      },
    },
    facilities_block: {
      type: "popular",
      facilities: [
        {
          name: "Airport shuttle",
          icon: "shuttle",
        },
        {
          name: "Non-smoking rooms",
          icon: "nosmoking",
        },
        {
          icon: "clean",
          name: "Room service",
        },
        {
          name: "Private Parking",
          icon: "parking_sign",
        },
        {
          name: "Family rooms",
          icon: "family",
        },
        {
          icon: "parking_sign",
          name: "Free parking",
        },
        {
          name: "Free WiFi",
          icon: "wifi",
        },
      ],
      name: "Most Popular Facilities",
    },
    top_ufi_benefits: [
      {
        icon: "wifi",
        translated_name: "WiFi",
      },
      {
        translated_name: "Airport shuttle",
        icon: "shuttle",
      },
      {
        translated_name: "Family rooms",
        icon: "family",
      },
      {
        icon: "parking_sign",
        translated_name: "Parking",
      },
      {
        translated_name: "Non-smoking rooms",
        icon: "nosmoking",
      },
      {
        icon: "clean",
        translated_name: "Room service",
      },
    ],
    languages_spoken: {
      languagecode: ["ru", "it", "en-gb", "ar"],
    },
    spoken_languages: ["ru", "it", "en-gb", "ar"],
    breakfast_review_score: {
      rating: 0,
      review_snippet: "",
      review_number: 0,
      review_score: 0,
      review_score_word: "",
      review_count: 0,
    },
    wifi_review_score: {
      rating: 7.5,
    },
    info_banners: [
      {
        collapsible: 1,
        is_default_collapsed: 1,
        show_after_dismissed: 1,
        id: "coronavirus",
        show_after_dismissed_time: 24,
        dismissable: 0,
        position_to_inject: 0,
        title: "Coronavirus (COVID-19) support",
        type: "banner",
        primary_action: {
          text: "Read more",
          action_context: "covid19-faq",
          action: "open-page",
        },
        priority: 100,
        messages: [
          "Get the travel advice you need. Read more about possible travel restrictions before you go.",
        ],
        secondary_action: {},
      },
    ],
    min_room_distribution: {
      children: [],
      adults: 1,
    },
    available_deal_descriptions: [],
    tax_exceptions: [
      {
        tax_exception:
          "Under Egyptian law all foreign guests must pay in a foreign currency, not in Egyptian currency.",
        copy_tag:
          "Under Egyptian law all foreign guests must pay in a foreign currency, not in Egyptian currency.",
        ignore_on_sr_hp: 1,
      },
      {
        ignore_on_sr_hp: 0,
        tax_exception:
          "Egyptian citizens are required to pay in the local currency according to the exchange rate at the time of payment.",
        copy_tag:
          "Egyptian citizens are required to pay in the local currency according to the exchange rate at the time of payment.",
      },
    ],
    booking_home: {
      is_vacation_rental: 1,
      group: "hotels_and_others",
      house_rules: [
        {
          description: "No smoking",
          icon: "smoking",
          type: "POLICY_SMOKING",
          title: "Smoking",
        },
        {
          type: "POLICY_HOTEL_PETS",
          title: "Pets",
          icon: "petfriendly",
          description: "Pets are not allowed",
        },
        {
          title: "Parties",
          type: "POLICY_PARTIES",
          icon: "fooddrink",
          description: "Parties/events are not allowed.",
        },
      ],
      segment: 0,
      checkin_methods: [],
      is_single_type_property: 0,
      is_aparthotel: 0,
      quality_class: null,
      is_single_unit_property: 0,
      is_booking_home: 1,
    },
    aggregated_data: {
      has_kitchen: 0,
      common_kitchen_fac: [
        {
          name: "Electric kettle",
          id: 86,
        },
        {
          name: "Cleaning products",
          id: 116,
        },
      ],
      has_refundable: 1,
      has_nonrefundable: 1,
      has_seating: 1,
    },
    last_reservation: {
      country: null,
      time: "",
      countrycode: null,
    },
    free_facilities_cancel_breakfast: [
      {
        facility_id: 46,
      },
    ],
    room_recommendation: [
      {
        total_extra_bed_price_in_hotel_currency: 0,
        children: 0,
        extra_babycots_price_in_hotel_currency: 0,
        number_of_extra_beds_for_adults: 0,
        extra_beds_for_children_price: 0,
        extra_beds_for_adults_price: 0,
        number_of_extra_beds_for_children: 0,
        block_id: "898508904_373756334_0_0_0",
        adults: 1,
        total_extra_bed_price: 0,
        extra_beds_for_adults_price_in_hotel_currency: 0,
        number_of_extra_beds_and_babycots_total: 0,
        extra_babycots_price: 0,
        number_of_extra_babycots: 0,
        babies: 0,
        extra_beds_for_children_price_in_hotel_currency: 0,
      },
    ],
    hotel_text: {},
    districts: "",
    preferences: [],
    hotel_important_information_with_codes: [
      {
        executing_phase: 0,
        sentence_id: 28,
        phrase:
          "This property does not accommodate bachelor(ette) or similar parties.",
      },
    ],
    rooms: {
      898508904: {
        private_bathroom_highlight: {
          has_highlight: 0,
        },
        bed_configurations: [
          {
            bed_types: [
              {
                description_imperial: "35–51 inches wide",
                name: "Twin bed(s)",
                bed_type: 1,
                count: 2,
                name_with_count: "2 twin beds",
                description: "90–130 cm wide",
                description_localized: null,
              },
            ],
          },
        ],
        description:
          "This air-conditioned twin/double room features a shared bathroom, a washing machine, a private entrance as well as a balcony. The unit offers 2 beds.",
        facilities: [
          {
            name: "Shared bathroom",
            alt_facilitytype_id: 5,
            alt_facilitytype_name: "Bathroom",
            facilitytype_name: "Bathroom",
            facilitytype_id: 5,
            id: 24,
          },
          {
            facilitytype_id: 5,
            facilitytype_name: "Bathroom",
            id: 42,
            alt_facilitytype_name: "Bathroom",
            alt_facilitytype_id: 5,
            name: "Shared toilet",
          },
          {
            facilitytype_name: "Room Amenities",
            facilitytype_id: 4,
            id: 15,
            alt_facilitytype_name: "General",
            alt_facilitytype_id: 1,
            name: "Iron",
          },
          {
            alt_facilitytype_id: 1,
            name: "Fan",
            facilitytype_id: 4,
            facilitytype_name: "Room Amenities",
            id: 30,
            alt_facilitytype_name: "General",
          },
          {
            alt_facilitytype_id: 4,
            name: "Drying rack for clothing",
            facilitytype_name: "Room Amenities",
            facilitytype_id: 4,
            id: 140,
            alt_facilitytype_name: "Room Amenities",
          },
          {
            facilitytype_name: "Services & Extras",
            id: 124,
            facilitytype_id: 8,
            alt_facilitytype_name: "Bathroom",
            alt_facilitytype_id: 5,
            name: "Towels",
          },
          {
            id: 25,
            facilitytype_name: "Room Amenities",
            facilitytype_id: 4,
            alt_facilitytype_name: "General",
            alt_facilitytype_id: 1,
            name: "Ironing facilities",
          },
          {
            alt_facilitytype_id: 15,
            name: "Sitting area",
            facilitytype_name: "Room Amenities",
            id: 26,
            facilitytype_id: 4,
            alt_facilitytype_name: "Living Area",
          },
          {
            alt_facilitytype_id: 5,
            name: "Guest bathroom",
            facilitytype_name: "Bathroom",
            id: 72,
            facilitytype_id: 5,
            alt_facilitytype_name: "Bathroom",
          },
          {
            alt_facilitytype_id: 4,
            name: "Socket near the bed",
            facilitytype_name: "Room Amenities",
            id: 184,
            facilitytype_id: 4,
            alt_facilitytype_name: "Room Amenities",
          },
          {
            alt_facilitytype_id: 5,
            name: "Slippers",
            facilitytype_name: "Bathroom",
            facilitytype_id: 5,
            id: 43,
            alt_facilitytype_name: "Bathroom",
          },
          {
            alt_facilitytype_name: "Outdoors",
            id: 17,
            facilitytype_name: "Outdoor & View",
            facilitytype_id: 9,
            name: "Balcony",
            alt_facilitytype_id: 13,
          },
          {
            facilitytype_name: "Bathroom",
            id: 12,
            facilitytype_id: 5,
            alt_facilitytype_name: "Bathroom",
            alt_facilitytype_id: 5,
            name: "Hairdryer",
          },
          {
            alt_facilitytype_id: 14,
            name: "View",
            id: 81,
            facilitytype_name: "Outdoor & View",
            facilitytype_id: 9,
            alt_facilitytype_name: "View",
          },
          {
            facilitytype_id: 4,
            facilitytype_name: "Room Amenities",
            id: 80,
            alt_facilitytype_name: "General",
            alt_facilitytype_id: 1,
            name: "Tile/Marble floor",
          },
          {
            name: "Toilet",
            alt_facilitytype_id: 5,
            alt_facilitytype_name: "Bathroom",
            facilitytype_name: "Bathroom",
            id: 31,
            facilitytype_id: 5,
          },
          {
            alt_facilitytype_name: "General",
            facilitytype_name: "Room Amenities",
            facilitytype_id: 4,
            id: 76,
            name: "Private entrance",
            alt_facilitytype_id: 1,
          },
          {
            alt_facilitytype_name: "Kitchen",
            facilitytype_id: 7,
            facilitytype_name: "Food & Drink",
            id: 86,
            name: "Electric kettle",
            alt_facilitytype_id: 12,
          },
          {
            facilitytype_name: "Room Amenities",
            id: 40,
            facilitytype_id: 4,
            alt_facilitytype_name: "General",
            alt_facilitytype_id: 1,
            name: "Heating",
          },
          {
            alt_facilitytype_name: "Bathroom",
            facilitytype_id: 5,
            facilitytype_name: "Bathroom",
            id: 4,
            name: "Shower",
            alt_facilitytype_id: 5,
          },
          {
            alt_facilitytype_id: 12,
            name: "Washing machine",
            facilitytype_id: 4,
            facilitytype_name: "Room Amenities",
            id: 34,
            alt_facilitytype_name: "Kitchen",
          },
          {
            alt_facilitytype_id: 17,
            name: "Wardrobe or closet",
            facilitytype_name: "Room Amenities",
            id: 95,
            facilitytype_id: 4,
            alt_facilitytype_name: "Bedroom",
          },
          {
            alt_facilitytype_name: "Kitchen",
            facilitytype_name: "Room Amenities",
            facilitytype_id: 4,
            id: 116,
            name: "Cleaning products",
            alt_facilitytype_id: 12,
          },
          {
            alt_facilitytype_name: "Bathroom",
            id: 141,
            facilitytype_name: "Bathroom",
            facilitytype_id: 5,
            name: "Toilet paper",
            alt_facilitytype_id: 5,
          },
          {
            name: "Mosquito net",
            alt_facilitytype_id: 1,
            alt_facilitytype_name: "General",
            facilitytype_id: 4,
            facilitytype_name: "Room Amenities",
            id: 90,
          },
          {
            facilitytype_name: "Room Amenities",
            id: 11,
            facilitytype_id: 4,
            alt_facilitytype_name: "General",
            alt_facilitytype_id: 1,
            name: "Air conditioning",
          },
          {
            alt_facilitytype_id: 15,
            name: "Dining area",
            facilitytype_name: "Food & Drink",
            facilitytype_id: 7,
            id: 85,
            alt_facilitytype_name: "Living Area",
          },
          {
            alt_facilitytype_id: 40,
            name: "Hand sanitizer",
            facilitytype_name: "Cleanliness & disinfection",
            facilitytype_id: 40,
            id: 231,
            alt_facilitytype_name: "Cleanliness & disinfection",
          },
        ],
        is_high_floor_guaranteed: 0,
        highlights: [
          {
            icon: "wifi",
            translated_name: "Free WiFi",
          },
          {
            icon: "checkmark",
            id: 17,
            translated_name: "Balcony",
          },
          {
            icon: "mountains",
            translated_name: "View",
            id: 81,
          },
          {
            icon: "snowflake",
            id: 11,
            translated_name: "Air conditioning",
          },
        ],
        children_and_beds_text: {
          cribs_and_extra_beds: [
            {
              text: "No capacity for extra beds or cribs.",
              highlight: 0,
            },
          ],
          allow_children: 1,
          children_at_the_property: [
            {
              text: "Children of all ages are welcome.",
              highlight: 0,
            },
            {
              text: "Children 18 and above are considered adults at this property.",
              highlight: 0,
            },
            {
              highlight: 1,
              text: "To see correct prices and occupancy info, add the number and ages of children in your group to your search.",
            },
          ],
          age_intervals: [],
        },
        photos: [],
        private_bathroom_count: 0,
      },
    },
    block: [
      {
        is_flash_deal: 0,
        paymentterms: {
          cancellation: {
            type_translation: "Non-refundable",
            non_refundable_anymore: 0,
            guaranteed_non_refundable: 0,
            type: "non_refundable",
            bucket: "SMP_NON_REF",
            description:
              "If you cancel, modify the booking, or don't show up, the fee will be the total price of the reservation.",
            info: {
              timezone_offset: null,
              date_before_raw: null,
              date: null,
              refundable_date: null,
              date_raw: null,
              time: null,
              time_before_midnight: null,
              refundable: 0,
              date_before: null,
              timezone: null,
              is_midnight: null,
            },
          },
          prepayment: {
            extended_type_translation: "SECURE YOUR BOOKING – pay now",
            type_translation: "SECURE YOUR BOOKING – pay now",
            type: "full_prepayment",
            type_extended: "non_refundable_prepayment",
            description:
              "You'll be charged a prepayment of the total price at any time.",
            simple_translation: "Prepayment",
            info: {
              prepayment_at_booktime: 1,
            },
          },
        },
        mealplan: "There is no meal option with this room.",
        is_last_minute_deal: 0,
        all_inclusive: 0,
        number_of_bathrooms: 1,
        half_board: 0,
        pod_ios_migrate_policies_to_smp_fullon: 0,
        smoking: 0,
        babycots_available_amount: null,
        refundable_until: "",
        nr_children: 0,
        deposit_required: 1,
        full_board: 0,
        genius_discount_percentage: 0,
        block_text: {
          policies: [
            {
              class: "POLICY_CANCELLATION",
              content:
                "If you cancel, modify the booking, or don't show up, the fee will be the total price of the reservation.",
            },
            {
              class: "POLICY_PREPAY",
              content:
                "The total price of the reservation is charged at the time of booking.",
            },
            {
              content:
                "Booking.com takes your payment for this stay, but make sure you have cash for any extras once you get there.",
              class: "POLICY_BMP",
              title: "Payments by Booking.com",
            },
            {
              content: "General",
              class: "POLICY_TITLE",
            },
            {
              class: "POLICY_REFUND_SCHEDULE",
              content:
                " You won't be eligible for a refund if you cancel this booking.",
            },
          ],
        },
        room_id: 898508904,
        name: "Double or Twin Room - Non-refundable",
        is_secret_deal: 0,
        room_surface_in_feet2: 269.09776,
        block_id: "898508904_373756334_0_0_0",
        deals: {
          deal_attributes: {
            has_secret_channel_option: 0,
          },
        },
        bh_room_highlights: [],
        roomtype_id: 24,
        room_count: 1,
        is_smart_deal: 0,
        can_reserve_free_parking: 1,
        name_without_policy: "Double or Twin Room",
        babycots_available: 0,
        number_of_bedrooms: 0,
        breakfast_included: 0,
        must_reserve_free_parking: 0,
        room_name: "Double or Twin Room",
        extrabed_available: 0,
        nr_adults: 2,
        children_ages: [],
        room_surface_in_m2: 25,
        refundable: 0,
        is_vp2_enrolled: 1,
        is_domestic_rate: 0,
        max_children_free: 0,
        pay_in_advance: 1,
        max_occupancy: "2",
        max_children_free_age: 12,
        is_block_fit: 1,
        extrabed_available_amount: null,
        is_genius_deal: null,
      },
    ],
  });

  const hasResults = computed(() => allHotels.value.length > 0);
  const hasNoResults = computed(() => allHotels.value.length === 0);
  const filteredHotels = computed(() => {
    if (propertyNameFilter.value !== "" && ratingFilter.value !== 0) {
      return allHotels.value.filter(
        (hotel) =>
          hotel.property.name
            .toLowerCase()
            .includes(propertyNameFilter.value.toLowerCase()) &&
          hotel.property.reviewScore / 2 >= ratingFilter.value
      );
    }

    if (propertyNameFilter.value !== "") {
      return allHotels.value.filter((hotel) =>
        hotel.property.name
          .toLowerCase()
          .includes(propertyNameFilter.value.toLowerCase())
      );
    }

    if (ratingFilter.value !== 0) {
      return allHotels.value.filter(
        (hotel) => hotel.property.reviewScore / 2 >= ratingFilter.value
      );
    }

    return allHotels.value;
  });

  const filterByBudget = (budgerObj) => {
    budgetFilter.value = budgerObj;
  };

  const addSearchQuery = (query) => {
    searchQueries.value = { ...searchQueries.value, ...query };
    // save search query to local storage
    localStorage.setItem("searchQueries", JSON.stringify(searchQueries.value));
  };

  const addBudgetFilter = (budgetObj) => {
    budgetFilter.value = { ...budgetFilter.value, ...budgetObj };
    // save to local storage
    localStorage.setItem("budgetFilter", JSON.stringify(budgetFilter.value));
  };

  const addTempHotel = (hotel) => {
    tempHotel.value = hotel;
  };

  const fetchHotels = async () => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: searchQueries.value.destination.split(",")[0],
        search_type: "CITY",
        arrival_date: searchQueries.value.checkIn,
        departure_date: searchQueries.value.checkOut,
        adults: +searchQueries.value.guests,
        room_qty: +searchQueries.value.rooms,
        page_number: currentPage.value,
        sort_by: sortByOption.value,
        price_min: +budgetFilter.value.minBudget,
        price_max: +budgetFilter.value.maxBudget,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      isLoading.value = true;
      const response = await axios.request(options);
      if (currentPage.value === 1) {
        totalResults.value =
          response.data.data?.meta?.[0]["title"].split(" ")[0];
        totalPages.value = Math.ceil(totalResults.value / 20);
        // save to local storage
        localStorage.setItem("totalResults", totalResults.value);
        localStorage.setItem("totalPages", totalPages.value);
      }
      allHotels.value = response.data.data?.hotels;
      // save to local storage
      localStorage.setItem("hotels", JSON.stringify(allHotels.value));
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  const changePage = (page) => {
    currentPage.value = page;
    // save to local storage
    localStorage.setItem("currentPage", currentPage.value);
  };

  return {
    searchQueries,
    addSearchQuery,
    fetchHotels,
    currentPage,
    totalPages,
    totalResults,
    allHotels,
    isLoading,
    hasResults,
    hasNoResults,
    changePage,
    filteredHotels,
    propertyNameFilter,
    ratingFilter,
    sortByOption,
    filterByBudget,
    addBudgetFilter,
    budgetFilter,
    fixedBudgetFilter,
    tempHotel,
    addTempHotel,
  };
});
