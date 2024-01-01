export const checkLocalServer = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER); // Change YOUR_PORT to the port your local server is running on
      if (response.ok) {
        return process.env.REACT_APP_SERVER;
      }
    } catch (error) {
      // Local server not reachable
    }
    return 'https://complete-auth-api.vercel.app'

  };
  