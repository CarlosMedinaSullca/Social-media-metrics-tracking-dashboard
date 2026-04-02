import { mockCampaigns, mockAdSets, mockAds } from "./mockdata.mjs";

const accountId = import.meta.env.VITE_AD_ACCOUNT_ID;
const token = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;

const delay = (ms) => new Promise(resolveConfig => setTimeout(resolveConfig, ms));

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}


export default class ExternalServices {
  constructor(useMock = true) {
    this.useMock = useMock;
  }

  async getCampaigns() {

    try {
      if (this.useMock) {
      await delay(800);
      return JSON.parse(JSON.stringify(mockCampaigns));
    }

    const url = `/facebook/v25.0/act_${accountId}/campaigns?access_token=${token}`;
    const response = await fetch(url);
    if (response.ok) {
      return convertToJson(response);
    } else {
      throw new TypeError("Campaigns data fetching fail")
    }

    } catch ({name, message}) {
      console.log(name);
      console.log(message)
    }
    
  } 
  async getAdSets(campaignId = null) {
    try {
      if (this.useMock) {
      await delay(600);
      let data = JSON.parse(JSON.stringify(mockAdSets));
      if (campaignId) {
        data.data = data.data.filter(adset => adset.campaign_id === campaignId);
      }
      return data;
    }

    
    let url = `/facebook/v25.0/act_${accountId}/adsets?access_token=${token}`;
    if (campaignId) {
      url += `&campaign_id=${campaignId}`;
    }
    const response = await fetch(url);

    if (response.ok) {
      return convertToJson(response);
    } else {
      throw new TypeError("AdsSets data fetching fail")
    }
    
    } catch ({name, message}) {
      console.log(name); 
      console.log(message); 

    }
  }

  async getAds(adsetId = null) {
    try {
      if (this.useMock) {
      await delay(600);
      let data = JSON.parse(JSON.stringify(mockAds));
      if (adsetId) {
        data.data = data.data.filter(ad => ad.adset_id === adsetId);
      }
      return data;
    }
    
    let url = `/facebook/v25.0/act_${accountId}/ads?access_token=${token}`;
    if (adsetId) {
      url += `&adset_id=${adsetId}`;
    }
    const response = await fetch(url);
    if (response.ok) {
      return convertToJson(response);
    } else {
      throw new TypeError("Ads data fetching fail")
    }
    
    } catch ({ name, message }) {
      console.log(name); 
      console.log(message); 
    }

  }


}