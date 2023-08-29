import React from "react";
// import Twilio from "twilio";

// const twilioClient = Twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

function Notifications() {
  //   const sendWhatsAppNotification = async () => {
  //     try {
  //       const message = await twilioClient.messages.create({
  //         body: "This is your WhatsApp notification message.",
  //         from: "whatsapp:+1234567890", // Your Twilio WhatsApp number
  //         to: "whatsapp:+9876543210", // Recipient's WhatsApp number
  //       });

  //       console.log("WhatsApp notification sent:", message.sid);
  //     } catch (error) {
  //       console.error("Error sending WhatsApp notification:", error);
  //     }
  //   };

  return (
    <div>
      {/* <button onClick={sendWhatsAppNotification}>
        Send WhatsApp Notification
      </button> */}
      notification
    </div>
  );
}

export default Notifications;
