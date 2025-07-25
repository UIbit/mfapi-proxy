// Define your API payload types here based on BSE StARMF v2 API spec (example shapes)
export interface CreateInvestorPayload {
    data: {
      member_code: {
        member_id: string;
      };
      investor: {
        client_code?: string;
        investor_name?: string;
        pan?: string;
        // Add other investor fields as required by your API spec
      };
      // Include other necessary fields as per your API
    };
  }
  
  export interface PlaceOrderPayload {
    data: {
      member_code: {
        member_id: string;
      };
      order_transaction_type: string; // e.g., "Purchase", "Redemption"
      folio_number?: string;
      // Add other order fields as per your API spec
      [key: string]: any;
    };
  }
  
  export interface AddUCCPayload {
    data: {
      member_code: {
        member_id: string;
      };
      investor: {
        client_code: string;
      };
      ucc: {
        ucc_code: string;
        // Other UCC fields
      };
    };
  }
  
  // Define more payload interfaces similarly based on your API spec...
  