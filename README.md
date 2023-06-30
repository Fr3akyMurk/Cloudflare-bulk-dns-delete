### Delete Cloudflare DNS Records
A Node.js script to delete a big chunk of DNS records on a Cloudflare zone.

## Requirements
- Node.js
- A Cloudflare account with an API key and the ability to manage DNS records for a specific zone

## Getting Started
Clone or download this repository,
Navigate to the root of the repository in the terminal
Run npm install to install the required dependencies.
Open index.js in a text editor.

Replace the following values with your own:
- `zoneId:` The ID of the Cloudflare zone you want to delete records from
- `domainName:` The domain name of the zone
- `apiKey:` Your Cloudflare API key
- `email:` The email address associated with your Cloudflare account

Save and close the file.

Run the script by executing node ./index.js in the terminal

# Usage
The script will automatically delete a big bulk of DNS records on the specified Cloudflare zone. You will see a message in the console indicating whether the records were deleted successfully or if an error occurred.

### ***Note: Be cautious when using this script as deleted DNS records cannot be recovered.***
### ***Note: This script has a minor flaw where it can at best delete 250 records at a time due to cloudflares API ***

# License
This project is open source and licensed under the MIT License.

Made with love and support by the project contributors and ChatGPT ❤️
