import emailjs from 'emailjs-com';

    const sendEmail = async (message ) => {
      const name = 'rachelsplantstore@gmail.com';
      const email = 'rachelsplantstore@gmail.com';
        try {
          const response = await emailjs.send(
            process.env.REACT_APP_YOUR_SERVICE_ID,
            process.env.REACT_APP_YOUR_TEMPLATE_ID,
            {name, email, message },
            process.env.REACT_APP_YOUR_USER_ID
          );
      
          if (response.status === 200) {
            console.log("Successfully sent message.");
          }
        } catch (error) {
          console.error("Failed to send email. Error: ", error);
        }
      };
      
      export default sendEmail;
      