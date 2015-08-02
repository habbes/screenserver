# Screenserver 

This apps allows you to broadcast your screen live to the people in your local network,
which they can view in their browsers.

## Server Setup

**Only available for windows**

**Requires Node JS**

Clone the repository on your machine, cd into the project directory and run

```
node index.js
```

This runs the server on port 3000 and starts broadcasting the screen.

**Note**: Make sure Node JS is not blocked by your Firewall.

**Note**: For people to view your screen on their browsers, they need to know your IP address.
You can find your IP by running `ipconfig`.

## Client Side

Open your browser and enter `http://_<SERVER_URL>_:3000`.