// Add CSS styles
export function addStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .dashboard-container {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
    }
    
    .dashboard-header h1 {
      color: #1877f2;
      margin-bottom: 20px;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    
    .stat-card h3 {
      margin: 0 0 10px 0;
      color: #666;
      font-size: 14px;
    }
    
    .stat-number {
      font-size: 28px;
      font-weight: bold;
      margin: 0;
      color: #1877f2;
    }
    
    .campaigns-table, .adsets-table, .ads-table {
      width: 100%;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-collapse: collapse;
    }
    
    .campaigns-table th, .campaigns-table td,
    .adsets-table th, .adsets-table td, .ads-table th, .ads-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #eee;
    }
    
    .campaigns-table th {
      background: #f8f9fa;
      font-weight: 600;
      color: #495057;
    }
    
    .campaigns-table tr.active td:first-child {
      border-left: 3px solid #28a745;
    }
    
    .campaigns-table tr.paused td:first-child {
      border-left: 3px solid #ffc107;
    }
    
    .campaigns-table tr.archived td:first-child {
      border-left: 3px solid #6c757d;
    }
    
    .campaigns-table tr:hover {
      background: #f8f9fa;
    }
  `;
  document.head.appendChild(style);
}