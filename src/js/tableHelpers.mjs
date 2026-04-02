export function createCampaignTableHTML(tableElement, data) {
    tableElement.innerHTML = `
    <thead>
      <tr>
        <th>Status</th>
        <th>Campaign Name</th>
        <th>Objective</th>
        <th>Impressions</th>
        <th>Clicks</th>
        <th>CTR</th>
        <th>Spend</th>
      </tr>
    </thead>
    <tbody>
      ${data.campaignsWithMetrics.map((campaign) => `
        <tr class="${campaign.status.toLowerCase()}" data-campaign-id="${campaign.id}" data-campaign-name="${campaign.name}">
          <td>${campaign.statusBadge}</td>
          <td><strong>${campaign.name}</strong></td>
          <td>${campaign.objective?.replace('OUTCOME_', '') || 'N/A'}</td>
          <td>${campaign.insights?.impressions?.toLocaleString() || 0}</td>
          <td>${campaign.insights?.clicks || 0}</td>
          <td>${campaign.ctr || 0}%</td>
          <td>$${campaign.insights?.spend?.toFixed(2) || '0.00'}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

export function campaignSummary(headerElement, data) {
    headerElement.innerHTML = `
    <h1>📊 Social Media Dashboard</h1>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Campaigns</h3>
        <p class="stat-number">${data.campaignsWithMetrics.length}</p>
      </div>
      <div class="stat-card">
        <h3>Active Campaigns</h3>
        <p class="stat-number">${data.activeCampaigns.length}</p>
      </div>
      <div class="stat-card">
        <h3>Total Spend</h3>
        <p class="stat-number">$${data.totals.spend}</p>
      </div>
      <div class="stat-card">
        <h3>Total Impressions</h3>
        <p class="stat-number">${data.totals.impressions}</p>
      </div>
    </div>
  `;
}










export function createAdSetsTableHTML(adSetsData) {
  if (!adSetsData || adSetsData.length === 0) {
    return '<p>No ad sets found for this campaign.</p>';
  }

  return `
    <table class="adsets-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Ad Set Name</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>CTR</th>
          <th>Spend</th>
        </tr>
      </thead>
      <tbody>
        ${adSetsData.map(set => `
          <tr class="${set.status?.toLowerCase() || 'unknown'}" data-set-id="${set.id}" data-set-name="${set.name}">
            <td>${set.statusBadge || set.status || 'N/A'}</td>
            <td><strong>${set.name || 'Unnamed'}</strong></td>
            <td>${set.insights?.impressions?.toLocaleString() || 0}</td>
            <td>${set.insights?.clicks || 0}</td>
            <td>${set.ctr || 0}%</td>
            <td>$${set.insights?.spend?.toFixed(2) || '0.00'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
}


export function createAdsTableHTML(adsData) {
  if (!adsData || adsData.length === 0) {
    return '<p>No ads found for this campaign.</p>';
  }
  
  return `
    <table class="ads-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Ad Name</th>
          <th>Creative Type</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>CTR</th>
          <th>CPC</th>
          <th>Spend</th>
        </thead>
        <tbody>
          ${adsData.map(ad => `
            <tr class="${ad.status?.toLowerCase() || 'unknown'}">
              <td>${ad.statusBadge}</td>
              <td><strong>${ad.name || 'Unnamed Ad'}</strong></td>
              <td>${ad.creative?.title ? 'Image/Video' : 'N/A'}</td>
              <td>${ad.insights?.impressions?.toLocaleString() || 0}</td>
              <td>${ad.insights?.clicks || 0}</td>
              <td>${ad.ctr}%</td>
              <td>$${ad.costPerClick}</td>
              <td>$${ad.insights?.spend?.toFixed(2) || '0.00'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
  `;
}