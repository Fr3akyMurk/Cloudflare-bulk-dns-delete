const request = require("request");

const zoneId = ""; // Get your zone ID from https://dash.cloudflare.com/ navigate to your site that you transfer over and then look for a zone ID.
const domainName = ""; // Not required, was used for debugging.
const apiKey = ""; // Required, get it at https://dash.cloudflare.com/profile/api-tokens you need a API KEY and NOT a API TOKEN.
const email = ""; // Required, your email adress that you use to login into cloudflare.

// Get all DNS records for a zone
const getRecords = () => {
  const options = {
    method: "GET",
    url: `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records?page=1&per_page=100`,
    headers: {
      "X-Auth-Email": email,
      "X-Auth-Key": apiKey,
      "Content-Type": "application/json"
    }
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
        return;
      }
      resolve({ response, body });
    });
  });
};

// Delete a DNS record
const deleteRecord = recordId => {
  const options = {
    method: "DELETE",
    url: `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/${recordId}`,
    headers: {
      "X-Auth-Email": email,
      "X-Auth-Key": apiKey,
      "Content-Type": "application/json"
    }
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
        return;
      }
      resolve({ response, body });
    });
  });
};

const deleteAllRecords = async () => {
  try {
    const { body } = await getRecords();
    const records = JSON.parse(body).result;
    for (const record of records) {
      await deleteRecord(record.id);
    }
    console.log("bulk records deleted successfully");
  } catch (error) {
    console.error(`Error deleting records: ${error.message}`);
  }
};

deleteAllRecords();
