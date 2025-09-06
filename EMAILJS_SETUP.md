# EmailJS Setup Guide

To enable email functionality for your contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **Template Name**: "Portfolio Contact Form"
4. **Subject Line**: `New Contact: {{subject}}`
5. **Email Body** (HTML format):

```html
<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #333333; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">📧 New Portfolio Message</h1>
  </div>
  
  <!-- Content -->
  <div style="padding: 25px 20px; background-color: #fafbfc;">
    <div style="background-color: white; border-radius: 10px; padding: 20px; border: 1px solid #e1e8ed;">
      <p style="font-size: 15px; margin: 0 0 20px 0; color: #555; line-height: 1.5;">A message by <strong style="color: #2c3e50;">{{from_name}}</strong> has been received. Kindly respond at your earliest convenience.</p>
      
      <!-- Message Card -->
      <div style="margin-top: 20px; padding: 18px 0; border-top: 2px dashed #d1d9e0; border-bottom: 2px dashed #d1d9e0;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="vertical-align: top; width: 55px; padding-right: 12px;">
              <div style="width: 45px; height: 45px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 2px 8px rgba(79, 172, 254, 0.3);">👤</div>
            </td>
            <td style="vertical-align: top;">
              <div style="margin-bottom: 12px;">
                <strong style="color: #2c3e50; font-size: 17px; display: block; margin-bottom: 4px;">{{from_name}}</strong>
                <div style="color: #7f8c8d; font-size: 13px; background-color: #f8f9fa; padding: 4px 8px; border-radius: 4px; display: inline-block;">{{from_email}}</div>
              </div>
              
              <!-- Subject Section -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 12px 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #667eea;">
                <div style="color: #495057; font-size: 12px; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">📋 Subject</div>
                <div style="color: #2c3e50; font-size: 15px; font-weight: 500;">{{subject}}</div>
              </div>
              
              <!-- Message Section -->
              <div style="background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%); padding: 15px; border-radius: 8px; border: 1px solid #e9ecef; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style="color: #495057; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">💬 Message</div>
                <div style="color: #2c3e50; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      
      <!-- Footer -->
      <div style="margin-top: 20px; text-align: center; padding-top: 18px; border-top: 1px solid #e1e8ed;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 12px; border-radius: 6px; margin-bottom: 10px;">
          <p style="color: #6c757d; font-size: 13px; margin: 0; font-weight: 500;">🌐 Sent from Portfolio Contact Form</p>
        </div>
        <p style="color: #adb5bd; font-size: 11px; margin: 0; font-style: italic;">💡 Reply directly to this email to respond to {{from_name}}</p>
      </div>
    </div>
  </div>
</div>
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## 5. Update Environment Variables
Replace the values in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email (sonidarsh2005@gmail.com) for the message

## Important Notes
- Keep your `.env` file secure and never commit it to version control
- EmailJS free plan allows 200 emails per month
- Make sure to verify your email service connection in EmailJS dashboard

## Troubleshooting
- Check browser console for any error messages
- Verify all IDs are correctly copied from EmailJS dashboard
- Ensure your email service is properly connected and verified
