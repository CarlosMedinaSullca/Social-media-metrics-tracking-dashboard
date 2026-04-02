// mockData.mjs

export const mockCampaigns = {
  data: [
    {
      id: "123456789",
      name: "Summer Sale Campaign",
      status: "ACTIVE",
      objective: "OUTCOME_TRAFFIC",
      created_time: "2024-05-01T10:00:00+0000",
      insights: {
        impressions: 12500,
        clicks: 450,
        spend: 250.50,
        ctr: 3.6
      }
    },
    {
      id: "987654321",
      name: "Brand Awareness Q2",
      status: "PAUSED",
      objective: "OUTCOME_AWARENESS",
      created_time: "2024-04-15T14:30:00+0000",
      insights: {
        impressions: 45200,
        clicks: 890,
        spend: 520.75,
        ctr: 1.97
      }
    },
    {
      id: "456789123",
      name: "Retargeting Campaign",
      status: "ACTIVE",
      objective: "OUTCOME_CONVERSIONS",
      created_time: "2024-05-10T09:15:00+0000",
      insights: {
        impressions: 8750,
        clicks: 620,
        spend: 180.25,
        ctr: 7.09
      }
    },
    {
      id: "789123456",
      name: "Holiday Special",
      status: "ARCHIVED",
      objective: "OUTCOME_SALES",
      created_time: "2023-12-01T08:00:00+0000",
      insights: {
        impressions: 128500,
        clicks: 3450,
        spend: 1250.00,
        ctr: 2.68
      }
    }
  ]
};

export const mockAdSets = {
  data: [
    {
      id: "111111111",
      name: "Summer - Age 25-35",
      campaign_id: "123456789",
      status: "ACTIVE",
      daily_budget: 50,
      targeting: {
        age_min: 25,
        age_max: 35,
        genders: [1, 2],
        geo_locations: { countries: ["US", "CA"] }
      },
      insights: {
        impressions: 7500,
        clicks: 280,
        spend: 150.30,
        ctr: 3.73
      }
    },
    {
      id: "222222222",
      name: "Summer - Age 36-50",
      campaign_id: "123456789",
      status: "ACTIVE",
      daily_budget: 45,
      targeting: {
        age_min: 36,
        age_max: 50,
        genders: [1, 2],
        geo_locations: { countries: ["US"] }
      },
      insights: {
        impressions: 5000,
        clicks: 170,
        spend: 100.20,
        ctr: 3.4
      }
    },
    {
      id: "333333333",
      name: "Brand Awareness - Broad",
      campaign_id: "987654321",
      status: "PAUSED",
      daily_budget: 75,
      targeting: {
        age_min: 18,
        age_max: 65,
        genders: [1, 2],
        geo_locations: { countries: ["US", "CA", "UK"] }
      },
      insights: {
        impressions: 45200,
        clicks: 890,
        spend: 520.75,
        ctr: 1.97
      }
    },
    {
      id: "444444444",
      name: "Retargeting - Cart Abandoners",
      campaign_id: "456789123",
      status: "ACTIVE",
      daily_budget: 60,
      targeting: {
        custom_audiences: ["cart_abandoners"],
        geo_locations: { countries: ["US"] }
      },
      insights: {
        impressions: 8750,
        clicks: 620,
        spend: 180.25,
        ctr: 7.09
      }
    }
  ]
};

export const mockAds = {
  data: [
    {
      id: "aaa111",
      name: "Summer Sale Ad - Image",
      adset_id: "111111111",
      status: "ACTIVE",
      creative: {
        title: "Summer Sale - 30% Off",
        body: "Limited time offer! Shop now.",
        link: "https://example.com/summer"
      },
      insights: {
        impressions: 4500,
        clicks: 168,
        spend: 90.18,
        ctr: 3.73
      }
    },
    {
      id: "aaa222",
      name: "Summer Sale Ad - Video",
      adset_id: "111111111",
      status: "ACTIVE",
      creative: {
        title: "New Summer Collection",
        body: "Discover the latest trends.",
        link: "https://example.com/collection"
      },
      insights: {
        impressions: 3000,
        clicks: 112,
        spend: 60.12,
        ctr: 3.73
      }
    },
    {
      id: "aaa333",
      name: "Summer - Carousel",
      adset_id: "222222222",
      status: "ACTIVE",
      creative: {
        title: "Shop Summer Styles",
        body: "Multiple products to choose from",
        link: "https://example.com/shop"
      },
      insights: {
        impressions: 3200,
        clicks: 109,
        spend: 64.13,
        ctr: 3.41
      }
    },
    {
      id: "aaa444",
      name: "Summer - Single Image",
      adset_id: "222222222",
      status: "ACTIVE",
      creative: {
        title: "Best Summer Deals",
        body: "Limited time only",
        link: "https://example.com/deals"
      },
      insights: {
        impressions: 1800,
        clicks: 61,
        spend: 36.07,
        ctr: 3.39
      }
    },
    {
      id: "bbb111",
      name: "Brand Awareness - Video",
      adset_id: "333333333",
      status: "PAUSED",
      creative: {
        title: "Our Brand Story",
        body: "Learn more about us",
        link: "https://example.com/about"
      },
      insights: {
        impressions: 45200,
        clicks: 890,
        spend: 520.75,
        ctr: 1.97
      }
    },
    {
      id: "ccc111",
      name: "Retargeting - Dynamic Ad",
      adset_id: "444444444",
      status: "ACTIVE",
      creative: {
        title: "Come Back!",
        body: "Items left in your cart",
        link: "https://example.com/cart"
      },
      insights: {
        impressions: 5200,
        clicks: 372,
        spend: 108.15,
        ctr: 7.15
      }
    },
    {
      id: "ccc222",
      name: "Retargeting - Discount Offer",
      adset_id: "444444444",
      status: "ACTIVE",
      creative: {
        title: "10% Off Your Next Purchase",
        body: "Limited time offer",
        link: "https://example.com/discount"
      },
      insights: {
        impressions: 3550,
        clicks: 248,
        spend: 72.10,
        ctr: 6.99
      }
    }
  ]
};