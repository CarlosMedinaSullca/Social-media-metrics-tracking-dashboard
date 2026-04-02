export function flattenCampaignData(campaigns, depth = 0) {
    if (!campaigns || campaigns.length === 0) {
        return [];
    }

      const [first, ...rest] = campaigns;
  const flattened = [{
    ...first,
    depth,
    statusBadge: first.status === 'ACTIVE' ? '🟢 Active' : first.status === 'PAUSED' ? '⏸️ Paused' : '📦 Archived',
    formattedSpend: first.insights ? `$${first.insights.spend.toFixed(2)}` : '$0.00'
  }];
  
  // Recursive call
  return [...flattened, ...flattenCampaignData(rest, depth)];
}

// Using Array ES6 methods to transform data
export function processCampaignData(campaigns) {
  const campaignsWithMetrics = campaigns.map(campaign => ({
    ...campaign,
    ctr: campaign.insights ? (campaign.insights.clicks / campaign.insights.impressions * 100).toFixed(2) : 0,
    costPerClick: campaign.insights ? (campaign.insights.spend / campaign.insights.clicks).toFixed(2) : 0
  }));


  const activeCampaigns = campaignsWithMetrics.filter(c => c.status === 'ACTIVE');
  const totalSpend = campaignsWithMetrics.reduce((sum, c) => sum + (c.insights?.spend || 0), 0);
  const totalImpressions = campaignsWithMetrics.reduce((sum, c) => sum + (c.insights?.impressions || 0), 0);

  return {
    campaignsWithMetrics,
    activeCampaigns,
    totals: {
      spend: totalSpend.toFixed(2),
      impressions: totalImpressions.toLocaleString()
    }
  };
}

export function processAdSetsData(adSetsArray) {

   if (!adSetsArray || !Array.isArray(adSetsArray)) {
    return [];
  }
  
  return adSetsArray.map(adSet => {
    const hasValidInsights = adSet.insights?.clicks > 0 && adSet.insights?.impressions > 0;
    
    const statusBadge = adSet.status === 'ACTIVE' ? '🟢 Active' : 
                        adSet.status === 'PAUSED' ? '⏸️ Paused' : '📦 Archived';
    
    return {
      ...adSet,
      statusBadge,
      ctr: hasValidInsights 
        ? ((adSet.insights.clicks / adSet.insights.impressions) * 100).toFixed(2) 
        : 0,
      costPerClick: hasValidInsights && adSet.insights?.spend > 0
        ? (adSet.insights.spend / adSet.insights.clicks).toFixed(2)
        : 0
    };
  });
}

export function processAdsData(adsArray) {
   if (!adsArray || !Array.isArray(adsArray)) {
    console.warn('processAdsData: Invalid input - expected array, got:', adsArray);
    return [];
  }
  
  return adsArray.map(ad => {
    // Safety check for insights object
    const hasValidInsights = ad.insights?.clicks > 0 && 
                            ad.insights?.impressions > 0 && 
                            ad.insights?.spend > 0;
    
    // Add status badge with emoji
    const statusBadge = ad.status === 'ACTIVE' ? '🟢 Active' : 
                        ad.status === 'PAUSED' ? '⏸️ Paused' : 
                        ad.status === 'ARCHIVED' ? '📦 Archived' : '⚪ Unknown';
    
    // Calculate CTR (Click-Through Rate)
    const ctr = hasValidInsights 
      ? ((ad.insights.clicks / ad.insights.impressions) * 100).toFixed(2) 
      : '0.00';
    
    // Calculate CPC (Cost Per Click)
    const costPerClick = hasValidInsights && ad.insights.clicks > 0
      ? (ad.insights.spend / ad.insights.clicks).toFixed(2)
      : '0.00';
    
    // Calculate CPM (Cost Per 1000 Impressions) - optional metric
    const cpm = hasValidInsights && ad.insights.impressions > 0
      ? ((ad.insights.spend / ad.insights.impressions) * 1000).toFixed(2)
      : '0.00';
    
    return {
      ...ad,           // Keep all original properties
      statusBadge,     // Add formatted status
      ctr,             // Add calculated CTR
      costPerClick,    // Add calculated CPC
      cpm,             // Add calculated CPM (optional)
      hasValidInsights // Add flag for debugging
    };
  });
}