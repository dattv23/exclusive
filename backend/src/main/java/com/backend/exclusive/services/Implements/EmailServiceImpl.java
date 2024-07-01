package com.backend.exclusive.services.Implements;


import com.backend.exclusive.services.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendSignupSuccessEmail(String toEmail) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(toEmail);
            helper.setSubject("Welcome to Our Service");

            StringBuilder html = new StringBuilder();
            html.append("<div style=\"font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2; text-align: center;\">\n");
            html.append("\t<div style=\"margin: 50px auto; width: 70%; padding: 20px 0;\">\n");
            html.append("\t\t<div style=\"border-bottom: 1px solid #eee; text-align: center;\">\n");
            html.append("\t\t\t<a href=\"\" style=\"font-size: 1.4em; color: #00466a; text-decoration: none; font-weight: 600;\">Exclusive Welcome</a>\n");
            html.append("\t\t</div>\n");
            html.append("\t\t<p style=\"font-size: 1.1em; text-align: center; color: black;\">Hi, {toEmail}</p>\n");
            html.append("\t\t<p style=\"color: black;\">Thank you for signing up. We're glad to have you with us!</p>\n");
            html.append("\t\t<p style=\"color: black;\">Your account has been successfully created. Here are your details:</p>\n");
            html.append("\t\t<ul style=\"font-size: 1em; line-height: 1.5; list-style-type: none; padding: 0; text-align: left; display: inline-block; color: black;\">\n");
            html.append("\t\t\t<li><strong>Email:</strong> {toEmail}</li>\n");
            html.append("\t\t</ul>\n");
            html.append("\t\t<p style=\"color: black;\">To log in you need to complete the following procedures: <a href=\"#\" style=\"color: #00466a; text-decoration: none; font-weight: 600;\">Click here</a>.</p>\n");
            html.append("\t\t<img src=\"https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\" width=\"480\" height=\"auto\" style=\"\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></img>\n");
            html.append("\t\t<p style=\"font-size: 0.9em; color: black;\">Regards,<br />Exclusive Team</p>\n");
            html.append("\t\t<hr style=\"border: none; border-top: 1px solid #eee\" />\n");
            html.append("\t\t<div style=\"float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300; text-align: center;\">\n");
            html.append("\t\t\t<p>Exclusive Inc</p>\n");
            html.append("\t\t\t<p>Thu Duc, Ho Chi Minh</p>\n");
            html.append("\t\t\t<p>Viet Nam</p>\n");
            html.append("\t\t</div>\n");
            html.append("\t</div>\n");
            html.append("</div>");

            String htmlContent = html.toString().replace("{toEmail}", toEmail);
            helper.setText(htmlContent, true);  // `true` indicates HTML content

            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void sendOrderPlacedEmail(String toEmail) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(toEmail);
            helper.setSubject("Your order is placed");

            String html = "<div style=\"font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2\">\n" +
                    "\t<div style=\"margin: 50px auto; width: 70%; padding: 20px 0\">\n" +
                    "\t\t<div style=\"border-bottom: 1px solid #eee\"><a href=\"\" style=\"font-size: 1.4em; color: #00466a; text-decoration: none; font-weight: 600\">Exclusive Welcome</a></div>\n" +
                    "\t\t<p style=\"font-size: 1.1em\">Hi, {toEmail}</p>\n" +
                    "\t\t<p>Your order is placed!</p>\n" +
                    "\t\t<img src=\"\" width=\"480\" height=\"auto\" style=\"\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></img>\n" +
                    "    <p style=\"font-size: 0.9em\">Regards,<br />Exclusive</p>\n" +
                    "\t\t<hr style=\"border: none; border-top: 1px solid #eee\" />\n" +
                    "\t\t<div style=\"float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300\">\n" +
                    "\t\t\t<p>Exclusive Inc</p>\n" +
                    "\t\t\t<p>Thu Duc, Ho Chi Minh</p>\n" +
                    "\t\t\t<p>Viet Nam</p>\n" +
                    "\t\t</div>\n" +
                    "\t</div>\n" +
                    "</div>";

            String htmlContent = html.replace("{toEmail}", toEmail);
            helper.setText(htmlContent, true);  // `true` indicates HTML content

            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}