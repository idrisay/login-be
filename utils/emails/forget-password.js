mailHTML = `
<!DOCTYPE html>
<html>
<head>
<title>Reset Password</title>
</head>

<body>
<h2>To reset your password please click on the link below</h2>
<a href='http://localhost:4000/'>Reset Password</a>
</body>

</html> 
`;

const forgetPasswordHTMLMail = (subject, fromEmail, toEmail) => {
  return {
    from: fromEmail,
    to: toEmail,
    subject:subject,
    html: mailHTML,
  };
};

module.exports = forgetPasswordHTMLMail;
