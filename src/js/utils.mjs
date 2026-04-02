export function displayingSets(element, container, service, setData, functionStructureSet, adData, functionStructureAd) {
    element.addEventListener('click', async(event)=> {
    //find the closest row that was clicked
    const row = event.target.closest('tr');
    if(!row || !row.dataset.campaignId) return;

    const campaignId = row.dataset.campaignId;
    const campaignName = row.dataset.campaignName;    
  
    console.log(`Campaign clicked: ${campaignId}`);

    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.textContent = 'Loading ad sets...';
    container.appendChild(loadingDiv)

    try {
      // Fetch ad sets for this campaign
      const adSetsResponse = await service.getAdSets(campaignId);

      // Remove loading indicator
      loadingDiv.remove();

      //Process the data
      const adSetsWithMetrics = setData(adSetsResponse.data)

      // Create or update ad sets table
      let adSetsContainer = container.querySelector('.adsets-container');
      if (!adSetsContainer) {
        adSetsContainer = document.createElement('div');
        adSetsContainer.className = 'adsets-container';
        container.appendChild(adSetsContainer);
      }

      // update the ad sets display
      adSetsContainer.innerHTML= `
      <h2>Ad Sets for campaign ${campaignName}</h2>
      ${functionStructureSet(adSetsWithMetrics)}
      `;

      // Scroll to ad sets section
      adSetsContainer.scrollIntoView({behavior : 'smooth'});

      
    } catch (error) {
      loadingDiv.remove();
      console.error('Error loading ad sets:', error);
      
      // Show error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = `Failed to load ad sets: ${error.message}`;
      container.appendChild(errorDiv);
      setTimeout(() => errorDiv.remove(), 3000);
      
    }
  });

  displayingAds(container, service, adData, functionStructureAd);
  
  
}


export function displayingAds(container, service, adData, functionStructureAd) {
    // const adsSetTable = document.querySelector('.adsets-table')
    container.addEventListener('click', async(event)=> {
    //find the closest row that was clicked
    const row = event.target.closest('.adsets-table tr');
    if(!row || !row.dataset.setId) return;

    const setId = row.dataset.setId;
    const setName = row.dataset.setName;    
  
    console.log(`Campaign clicked: ${setId}`);

    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.textContent = 'Loading ads';
    container.appendChild(loadingDiv)

    try {
      // Fetch ad sets for this campaign
      const adsResponse= await service.getAds(setId);

      // Remove loading indicator
      loadingDiv.remove();

      //Process the data
      const adsWithMetrics = adData(adsResponse.data)

     

      // Create or update ad sets table
      let adsContainer = container.querySelector('.ads-container');
      if (!adsContainer) {
        adsContainer = document.createElement('div');
        adsContainer.className = 'ads-container';
        container.appendChild(adsContainer);
      }


      //update the ad sets display
      adsContainer.innerHTML= `
      <h2>Ads for Ad set: ${setName}</h2>
      ${functionStructureAd(adsWithMetrics)}
      `;

      // Scroll to ad sets section
      adsContainer.scrollIntoView({behavior : 'smooth'});
    } catch (error) {
      loadingDiv.remove();
      console.error('Error loading ad sets:', error);
      
      // Show error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = `Failed to load ad sets: ${error.message}`;
      container.appendChild(errorDiv);
      setTimeout(() => errorDiv.remove(), 3000);
      
    }
  });  
}