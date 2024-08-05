const axios = require('axios');
const FormData = require('form-data');

// Replace with your credentials
const accessToken = 'EAA2JqIAE13sBO6jm4xhAXuYSUdWUIkRweZB3jYPYqCxLyaIJZCWsypqNQrKUsRjjtAvwo96kv8n0dQ9zNfV47uU2zbYmEva3F66t2j7AfSVP7OLeNRJzwLKaZBmE0RcsPHydYNb5huI70ZC0ZAcUPk7UE7y0Kere4lrEt31gUi2rRgcGJL0gdsLB2JaitZA7PTKIjIEwbIuVO1Dg51opwZD';
const phoneNumberId = '402138932980535';
const imageUrl = 'https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg'; //demo image

async function updateProfilePicture(phoneNumberId, imageUrl) {
  try {
    // Create form data
    const form = new FormData();
    form.append('url', imageUrl);

    // Send POST request
    const response = await axios.post(
      // WhatsApp Cloud API endpoint for updating profile picture
      `https://graph.facebook.com/v20.0/${phoneNumberId}/profile_picture`, 
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log('Profile picture updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating profile picture:', error.response ? error.response.data : error.message);
  }
}

// Call the function
updateProfilePicture(phoneNumberId, imageUrl);




