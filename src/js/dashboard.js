import ExternalServices from "./ExternalServices.mjs"
import { displayingSets} from "./utils.mjs";
import { flattenCampaignData, processCampaignData, processAdSetsData, processAdsData } from "./dataProcessing.mjs";
import { addStyles } from "./styles.mjs";
import { createAdSetsTableHTML, createAdsTableHTML, createCampaignTableHTML, campaignSummary } from "./tableHelpers.mjs";

// DOM creation with CSS styling
function createDashboardHTML(processedData, externalServices) {
  const container = document.createElement('div');
  container.className = 'dashboard-container';
  
  // Header with stats
  const header = document.createElement('div');
  header.className = 'dashboard-header';

  campaignSummary(header, processedData)

  // Campaigns table
  const table = document.createElement('table');
  table.className = 'campaigns-table';

  createCampaignTableHTML(table, processedData);

  
  
  container.appendChild(header);
  container.appendChild(table);

  displayingSets(table,container, externalServices, processAdSetsData, createAdSetsTableHTML,processAdsData, createAdsTableHTML);
  

  // displayingAds(container, externalServices, processAdsData, createAdsTableHTML);
  
  return container;
}

// Main execution with error handling
async function initDashboard() {
  console.log('🚀 Initializing Social Media Dashboard...');
  
  try {
    // Add styles to page
    addStyles();

    const api = new ExternalServices(true);
    
    // Fetch data with error handling
    const response = await api.getCampaigns();
    console.log('Flattened data (recursion demo):', response.data);
    
    if (!response.data || response.data.length === 0) {
      // Exception handling - throw custom error
      throw new Error('No campaign data available. Please check your ad account or use mock data.');
    }
    
    // Recursive flattening (demonstrating recursion)
    const flattenedData = flattenCampaignData(response.data);
    console.log('Flattened data (recursion demo):', flattenedData);
    
    // Using ES6 array methods to process data
    const processedData = processCampaignData(flattenedData);
    console.log('Processed data (array methods demo):', processedData);
    
    // Create DOM structure
    const dashboard = createDashboardHTML(processedData, api);
    document.body.appendChild(dashboard);
    
    console.log('✅ Dashboard rendered successfully!');
    
  } catch (error) {
    // Exception handling - demonstrate try/catch
    console.error('❌ Dashboard initialization failed:', error.message);
    
    // Display error to user
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-container';
    errorDiv.innerHTML = `
      <div style="
        background: #f8d7da;
        color: #721c24;
        padding: 20px;
        border-radius: 8px;
        margin: 20px;
        text-align: center;
      ">
        <h3>⚠️ Error Loading Dashboard</h3>
        <p>${error.message}</p>
        <p><small>Please check your connection or enable mock data for testing.</small></p>
      </div>
    `;
    document.body.appendChild(errorDiv);
  }
}

// Run the dashboard
initDashboard();
